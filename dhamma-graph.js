/* ============================================================================
   dhamma-graph.js — Visual Dhamma Knowledge Navigation (additive feature).

   Bolts onto dhamma-assistant.html purely through the DOM: it injects its own
   floating trigger button, its own full-panel overlay (own <style>, own
   markup, own Cytoscape.js instance), and a small "View concept map" action
   button onto bot messages whose Q/A text matches a curated concept.

   It never reads or mutates the host app's internal closure state — only
   observes #wrap for re-renders and reads already-rendered text content.
   If cytoscape.js or the dataset failed to load, this file does nothing,
   so the existing chat is never put at risk.
   ========================================================================== */
(function () {
  "use strict";

  if (!window.cytoscape || !window.DhammaGraphData) return;

  var DATA = window.DhammaGraphData;
  var NODES = DATA.nodes;
  var CATEGORY_COLORS = DATA.CATEGORY_COLORS || {};
  var REVERSE_LABELS = DATA.reverseTypeLabels || {};

  var wrapEl = document.getElementById("wrap");
  var appEl = document.getElementById("app");
  if (!wrapEl || !appEl) return;

  var NODE_BY_ID = {};
  NODES.forEach(function (n) { NODE_BY_ID[n.id] = n; });

  // ---- Reverse relationship index -------------------------------------------
  var REVERSE = {}; // targetId -> [{source, type, explanation}]
  NODES.forEach(function (n) {
    (n.relationships || []).forEach(function (r) {
      if (!NODE_BY_ID[r.target]) return;
      if (!REVERSE[r.target]) REVERSE[r.target] = [];
      REVERSE[r.target].push({ source: n.id, type: r.type, explanation: r.explanation });
    });
  });

  function normalize(s) {
    return (s || "").toString().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  }
  NODES.forEach(function (n) {
    n._hay = normalize([n.pali, n.sinhala, n.english, n.definition].join(" "));
    n._lifeHay = (n.lifeKeywords || []).map(normalize).filter(Boolean);
  });

  function colorFor(n) { return CATEGORY_COLORS[n.category] || "#8a93a6"; }
  function relLabel(t) { return (t || "").replace(/_/g, " "); }

  // Ordinary life language ("I am angry", "I have stress") rarely shares any
  // Pali/technical vocabulary with a node's own text, so it can't rely on the
  // generic per-token scoring below. Each life keyword is matched as a whole
  // phrase against the full query and, on a hit, contributes a large fixed
  // bonus — large enough to dominate incidental token-level noise from other
  // nodes, so "I am angry" reliably resolves to dosa (etc.) rather than
  // whatever node happens to share a short substring with the query.
  var LIFE_KEYWORD_BONUS = 12;
  function lifeKeywordBonus(node, normText) {
    if (!node._lifeHay || !node._lifeHay.length || !normText) return 0;
    var bonus = 0;
    for (var i = 0; i < node._lifeHay.length; i++) {
      if (normText.indexOf(node._lifeHay[i]) > -1) bonus += LIFE_KEYWORD_BONUS;
    }
    return bonus;
  }

  // ---- Deterministic, local Q/A -> node matching (no LLM call) --------------
  function scoreNode(node, normText) {
    if (!node._hay || !normText) return 0;
    var score = lifeKeywordBonus(node, normText);
    var en = (node.english || "").toLowerCase();
    if (en.length > 3 && normText.indexOf(en) > -1) score += 6;
    var toks = normText.split(/\s+/).filter(function (t) { return t.length > 1; });
    toks.forEach(function (t) {
      if (node._hay.indexOf(t) > -1) score += t.length >= 4 ? 3 : 1;
    });
    return score;
  }

  function matchNodeForText(text) {
    var nt = normalize(text);
    if (!nt) return null;
    var best = null, bestScore = 0;
    for (var i = 0; i < NODES.length; i++) {
      var s = scoreNode(NODES[i], nt);
      if (s > bestScore) { bestScore = s; best = NODES[i]; }
    }
    return bestScore >= 6 ? best : null;
  }

  function searchNodes(query, limit) {
    var nt = normalize(query);
    if (!nt) return [];
    var toks = nt.split(/\s+/).filter(Boolean);
    var scored = NODES.map(function (n) {
      var s = lifeKeywordBonus(n, nt);
      var en = (n.english || "").toLowerCase(), si = n.sinhala || "", pa = (n.pali || "").toLowerCase();
      if (en.indexOf(nt) > -1 || si.indexOf(query) > -1 || pa.indexOf(nt) > -1) s += 8;
      toks.forEach(function (t) { if (n._hay.indexOf(t) > -1) s += t.length >= 4 ? 3 : 1; });
      return { n: n, s: s };
    }).filter(function (x) { return x.s > 0; });
    scored.sort(function (a, b) { return b.s - a.s; });
    return scored.slice(0, limit || 8).map(function (x) { return x.n; });
  }

  // ---- Per-message "View concept map" button injection ----------------------
  // render() in dhamma-assistant.html fully rebuilds #wrap on EVERY call (lang
  // toggle, copy click, citation toggle, clear chat, related-chip send — not
  // just new answers), so a per-element "already wired" flag would not
  // survive. Cache each row's match keyed by its ordinal position AMONG
  // non-info bot rows plus a snippet of its own answer text — stable across
  // re-renders of the same message, and self-invalidating (falls through to a
  // fresh, cheap local re-match) if content at that ordinal ever differs,
  // rather than depending on any assumption about how/when #wrap is cleared.
  var matchCache = {}; // "ordinal|answerSnippet" -> nodeId|null

  function findPrecedingQuestion(botRow) {
    var el = botRow.previousElementSibling;
    while (el) {
      if (el.classList && el.classList.contains("row-user")) {
        var b = el.querySelector(".bubble-user");
        return b ? b.textContent : "";
      }
      if (el.classList && el.classList.contains("row-bot") && !el.querySelector(".bot-card.info")) break;
      el = el.previousElementSibling;
    }
    return "";
  }

  var ICON_WEB = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.4"/><circle cx="19" cy="6" r="2.4"/><circle cx="12" cy="12" r="2.4"/><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="19" r="2.4"/><path d="M6.9 7.3L10.3 10.7M17.1 7.3L13.7 10.7M10.6 13.6L7.3 17.4M13.4 13.6L16.7 17.4"/></svg>';

  function scanAndWire() {
    var rows = wrapEl.querySelectorAll(".row-bot");
    var ordinal = -1;
    rows.forEach(function (row) {
      var card = row.querySelector(".bot-card:not(.info)");
      if (!card) return;
      ordinal++;

      var actions = row.querySelector(".actions");
      if (!actions || actions.querySelector("[data-graph-node]")) return;

      var mdEl = card.querySelector(".md");
      var answerText = mdEl ? mdEl.textContent : "";
      var cacheKey = ordinal + "|" + answerText.slice(0, 60);

      var nodeId;
      if (Object.prototype.hasOwnProperty.call(matchCache, cacheKey)) {
        nodeId = matchCache[cacheKey];
      } else {
        var question = findPrecedingQuestion(row);
        var match = matchNodeForText(question + " " + answerText) || matchNodeForText(answerText);
        nodeId = match ? match.id : null;
        matchCache[cacheKey] = nodeId;
      }

      if (nodeId) {
        var btn = document.createElement("button");
        btn.className = "actbtn";
        btn.setAttribute("data-graph-node", nodeId);
        btn.innerHTML = ICON_WEB + " View concept map";
        actions.appendChild(btn);
      }
    });
  }

  new MutationObserver(scanAndWire).observe(wrapEl, { childList: true });
  scanAndWire();

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-graph-node]") : null;
    if (btn) openPanel(btn.getAttribute("data-graph-node"));
  });

  // ---- Floating trigger button (own element, zero risk to existing header) -
  var ICON_WEB_LG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.6"/><circle cx="19" cy="6" r="2.6"/><circle cx="12" cy="12" r="2.6"/><circle cx="6" cy="19" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M6.9 7.3L10.3 10.7M17.1 7.3L13.7 10.7M10.6 13.6L7.3 17.4M13.4 13.6L16.7 17.4"/></svg>';
  appEl.insertAdjacentHTML("beforeend",
    '<button id="gnavFab" class="gnav-fab" title="Explore Dhamma concept map" aria-label="Open concept map">' + ICON_WEB_LG + '</button>');
  document.getElementById("gnavFab").addEventListener("click", function () { openPanel("core-teachings"); });

  // ---- Panel styling (own dark theme, scoped under .gnav-) -------------------
  var style = document.createElement("style");
  style.textContent = [
    ".gnav-fab{position:absolute;top:64px;right:12px;width:40px;height:40px;border-radius:12px;z-index:60;",
    "background:linear-gradient(150deg,#2b6cb0,#553c9a);color:#f2f5ff;border:1px solid rgba(255,255,255,.18);",
    "cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,.35);}",
    ".gnav-fab:hover{filter:brightness(1.12);}",
    ".gnav-overlay{position:fixed;inset:0;z-index:200;background:#0d0f14;display:none;flex-direction:column;",
    "font-family:'Noto Sans Sinhala',sans-serif;color:#e7eaf0;}",
    ".gnav-overlay.open{display:flex;}",
    ".gnav-toolbar{display:flex;align-items:center;gap:8px;padding:9px 10px;border-bottom:1px solid #262b36;flex-shrink:0;background:#12141b;}",
    ".gnav-crumbs{flex:1;min-width:0;display:flex;gap:5px;flex-wrap:wrap;align-items:center;font-size:11.5px;color:#9aa1ac;}",
    ".gnav-crumbs button{background:#1c2029;border:1px solid #2a2f3a;color:#cfd4dd;border-radius:14px;padding:3px 9px;cursor:pointer;font-size:11px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",
    ".gnav-crumbs button.gnav-crumb-current{border-color:#5b8def;color:#eaf1ff;}",
    ".gnav-tools{display:flex;gap:5px;flex-shrink:0;}",
    ".gnav-icon{width:30px;height:30px;border-radius:8px;border:1px solid #2a2f3a;background:#1c2029;color:#dfe3ea;cursor:pointer;font-size:15px;line-height:1;display:flex;align-items:center;justify-content:center;}",
    ".gnav-icon:hover{border-color:#5b8def;color:#5b8def;}",
    ".gnav-icon.gnav-close{color:#f2a1a1;}",
    ".gnav-search-wrap{position:relative;padding:8px 10px;border-bottom:1px solid #262b36;flex-shrink:0;background:#0f1218;}",
    ".gnav-search{width:100%;box-sizing:border-box;background:#181c25;border:1px solid #2a2f3a;color:#e7eaf0;border-radius:10px;padding:9px 12px;font-size:13px;outline:none;font-family:inherit;}",
    ".gnav-search:focus{border-color:#5b8def;}",
    ".gnav-search-results{position:absolute;left:10px;right:10px;top:calc(100% - 2px);background:#171a21;border:1px solid #2a2f3a;border-radius:0 0 10px 10px;max-height:220px;overflow-y:auto;z-index:5;display:none;}",
    ".gnav-search-results.show{display:block;}",
    ".gnav-search-results button{display:block;width:100%;text-align:left;background:transparent;border:none;border-bottom:1px solid #21252f;color:#dfe3ea;padding:8px 12px;cursor:pointer;font-size:12.5px;font-family:inherit;}",
    ".gnav-search-results button:hover{background:#20252f;}",
    ".gnav-search-results .gnav-sr-si{color:#9aa1ac;font-size:11px;margin-left:6px;}",
    ".gnav-canvas-wrap{flex:1;min-height:0;position:relative;}",
    ".gnav-canvas{position:absolute;inset:0;}",
    ".gnav-hint{position:absolute;left:10px;bottom:10px;font-size:10.5px;color:#6b7280;background:rgba(15,18,24,.7);padding:4px 8px;border-radius:8px;pointer-events:none;}",
    ".gnav-sheet{flex-shrink:0;max-height:42vh;overflow-y:auto;background:#12141b;border-top:1px solid #262b36;padding:12px 14px 16px;}",
    ".gnav-sheet-title{font-family:'Noto Serif Sinhala',serif;font-weight:700;font-size:16px;color:#f5f7fb;}",
    ".gnav-sheet-sub{font-size:12px;color:#9aa1ac;margin-top:2px;}",
    ".gnav-sheet-sub .gnav-pali{font-style:italic;color:#c9a0ff;margin-right:8px;}",
    ".gnav-badges{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;}",
    ".gnav-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;letter-spacing:.02em;}",
    ".gnav-def{font-size:12.5px;line-height:1.6;color:#d3d7e0;margin-top:10px;}",
    ".gnav-refs-block{margin-top:10px;display:flex;flex-direction:column;gap:6px;}",
    ".gnav-ref-plain{font-size:11px;color:#9aa1ac;background:#1c2029;border:1px solid #2a2f3a;border-radius:6px;padding:2px 7px;display:inline-block;}",
    ".gnav-cite{display:flex;flex-direction:column;gap:3px;text-decoration:none;background:#161920;border:1px solid #262b36;border-left:3px solid #5b8def;border-radius:8px;padding:8px 10px;}",
    ".gnav-cite:hover{border-color:#454c5c;background:#181c25;}",
    ".gnav-cite-pitaka{font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;}",
    ".gnav-cite-path{font-size:10.5px;color:#8b93a1;}",
    ".gnav-cite-title{font-size:12.5px;color:#e7eaf0;}",
    ".gnav-cite-title .gnav-pali{font-style:italic;color:#c9a0ff;margin-right:6px;}",
    ".gnav-cite-en{font-size:11px;color:#aab0bc;font-style:italic;}",
    ".gnav-cite-link{font-size:10px;color:#5b8def;margin-top:2px;}",
    ".gnav-rel-group{margin-top:12px;}",
    ".gnav-rel-type{font-size:10.5px;font-weight:700;color:#8fb2f5;letter-spacing:.04em;margin-bottom:5px;}",
    ".gnav-rel-item{display:flex;align-items:baseline;gap:6px;font-size:12px;padding:4px 0;cursor:pointer;color:#dfe3ea;border-bottom:1px dashed #20242e;}",
    ".gnav-rel-item:hover{color:#5b8def;}",
    ".gnav-rel-expl{color:#8b93a1;font-size:11px;}",
    ".gnav-recents{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;}",
    ".gnav-recents button{background:#1c2029;border:1px solid #2a2f3a;color:#cfd4dd;border-radius:14px;padding:4px 10px;font-size:11px;cursor:pointer;}",
    ".gnav-empty-note{font-size:12px;color:#8b93a1;text-align:center;padding:8px 4px;}"
  ].join("\n");
  document.head.appendChild(style);

  // ---- Panel markup -----------------------------------------------------------
  appEl.insertAdjacentHTML("beforeend", [
    '<div id="gnavOverlay" class="gnav-overlay">',
    '  <div class="gnav-toolbar">',
    '    <div class="gnav-crumbs" id="gnavCrumbs"></div>',
    '    <div class="gnav-tools">',
    '      <button class="gnav-icon" id="gnavZoomOut" title="Zoom out">−</button>',
    '      <button class="gnav-icon" id="gnavZoomIn" title="Zoom in">+</button>',
    '      <button class="gnav-icon" id="gnavRelayout" title="Center / re-layout">⌖</button>',
    '      <button class="gnav-icon" id="gnavExport" title="Export PNG">⭳</button>',
    '      <button class="gnav-icon" id="gnavFullscreen" title="Fullscreen">⛶</button>',
    '      <button class="gnav-icon gnav-close" id="gnavClose" title="Close">×</button>',
    '    </div>',
    '  </div>',
    '  <div class="gnav-search-wrap">',
    '    <input id="gnavSearch" class="gnav-search" placeholder="Search a Dhamma concept…" autocomplete="off">',
    '    <div class="gnav-search-results" id="gnavSearchResults"></div>',
    '  </div>',
    '  <div class="gnav-canvas-wrap">',
    '    <div class="gnav-canvas" id="gnavCanvas"></div>',
    '    <div class="gnav-hint">Click a node to explore its connections</div>',
    '  </div>',
    '  <div class="gnav-sheet" id="gnavSheet"></div>',
    '</div>'
  ].join(""));

  // ---- State --------------------------------------------------------------
  var cy = null;
  var breadcrumb = []; // [{id, label}]
  var recents = [];    // [id], most recent first, session-only

  function pushRecent(id) {
    recents = [id].concat(recents.filter(function (x) { return x !== id; })).slice(0, 10);
  }

  function egoElements(centerId) {
    var center = NODE_BY_ID[centerId];
    if (!center) return [];
    var neighborIds = {};
    (center.relationships || []).forEach(function (r) { if (NODE_BY_ID[r.target]) neighborIds[r.target] = true; });
    (REVERSE[centerId] || []).forEach(function (r) { neighborIds[r.source] = true; });

    var els = [{ data: { id: center.id, label: center.english }, classes: "gnav-center" }];
    Object.keys(neighborIds).forEach(function (nid) {
      var n = NODE_BY_ID[nid];
      els.push({ data: { id: n.id, label: n.english } });
    });
    (center.relationships || []).forEach(function (r) {
      if (!NODE_BY_ID[r.target]) return;
      els.push({ data: { id: "e_" + center.id + "_" + r.target, source: center.id, target: r.target, label: relLabel(r.type) } });
    });
    (REVERSE[centerId] || []).forEach(function (r) {
      els.push({ data: { id: "e_" + r.source + "_" + centerId + "_in", source: r.source, target: centerId, label: relLabel(r.type) } });
    });
    return els;
  }

  function ensureCy() {
    if (cy) return cy;
    cy = window.cytoscape({
      container: document.getElementById("gnavCanvas"),
      wheelSensitivity: 0.25,
      style: [
        { selector: "node", style: {
          "background-color": function (ele) { var n = NODE_BY_ID[ele.id()]; return n ? colorFor(n) : "#888"; },
          "label": "data(label)", "color": "#e7eaf0", "font-size": 9.5,
          "text-wrap": "wrap", "text-max-width": "70px", "text-valign": "bottom", "text-margin-y": 5,
          "width": 30, "height": 30, "border-width": 1, "border-color": "rgba(255,255,255,.35)"
        } },
        { selector: ".gnav-center", style: { "width": 46, "height": 46, "border-width": 3, "border-color": "#ffffff", "font-size": 11, "font-weight": "bold" } },
        { selector: "edge", style: {
          "width": 1.4, "line-color": "#3a4150", "target-arrow-color": "#3a4150", "target-arrow-shape": "triangle",
          "arrow-scale": 0.7, "curve-style": "bezier", "label": "data(label)", "font-size": 6.5,
          "color": "#7b8494", "text-rotation": "autorotate", "text-background-color": "#0d0f14", "text-background-opacity": 0.85, "text-background-padding": 1
        } }
      ]
    });
    cy.on("tap", "node", function (evt) { focusNode(evt.target.id()); });
    return cy;
  }

  function renderGraph(centerId) {
    var c = ensureCy();
    c.elements().remove();
    c.add(egoElements(centerId));
    var layout = c.layout({ name: "cose", animate: false, fit: true, padding: 24, nodeRepulsion: 6000, idealEdgeLength: 70 });
    layout.run();
  }

  function renderBreadcrumb() {
    var el = document.getElementById("gnavCrumbs");
    el.innerHTML = breadcrumb.map(function (b, i) {
      var isLast = i === breadcrumb.length - 1;
      return '<button data-crumb-idx="' + i + '"' + (isLast ? ' class="gnav-crumb-current"' : "") + '>' + escHtml(b.label) + "</button>";
    }).join('<span style="opacity:.4">›</span>');
  }

  function escHtml(s) { return (s == null ? "" : String(s)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  // ---- Structured Tripiṭaka citations ----------------------------------------
  // Looks each reference string up in window.DhammaCitations (dhamma-citations.js,
  // loaded separately — see its header for how every entry was verified against
  // the live tipitaka.lk source tree). A reference with no registry entry still
  // renders, just as a plain unlinked label — this file never fabricates the
  // book/chapter/section/link for a citation it doesn't actually have.
  var PITAKA_LABEL = { sutta: "Sutta Piṭaka", vinaya: "Vinaya Piṭaka", abhidhamma: "Abhidhamma Piṭaka" };
  var PITAKA_COLOR = { sutta: "#5b8def", vinaya: "#f0a84e", abhidhamma: "#c084fc" };

  function renderReferences(refs) {
    if (!refs || !refs.length) return "";
    var registry = (window.DhammaCitations && window.DhammaCitations.registry) || {};
    var html = '<div class="gnav-refs-block">';
    refs.forEach(function (r) {
      var c = registry[r];
      if (!c) { html += '<span class="gnav-ref-plain">' + escHtml(r) + "</span>"; return; }
      var color = PITAKA_COLOR[c.pitaka] || "#8a93a6";
      html += '<a class="gnav-cite" href="' + escHtml(c.url) + '" target="_blank" rel="noopener" style="border-left-color:' + color + '">' +
        '<span class="gnav-cite-pitaka" style="color:' + color + '">' + escHtml(PITAKA_LABEL[c.pitaka] || c.pitaka) + "</span>" +
        '<span class="gnav-cite-path">' + escHtml(c.book.english) + " › " + escHtml(c.chapter.english) + (c.section ? " · " + escHtml(c.section) : "") + "</span>" +
        '<span class="gnav-cite-title"><span class="gnav-pali">' + escHtml(c.title.pali) + "</span>" + escHtml(c.title.sinhala) + "</span>" +
        (c.title.english ? '<span class="gnav-cite-en">' + escHtml(c.title.english) + "</span>" : "") +
        '<span class="gnav-cite-link">Read on tipitaka.lk ↗</span>' +
        "</a>";
    });
    html += "</div>";
    return html;
  }

  function renderDetail(node) {
    var sheet = document.getElementById("gnavSheet");
    var outgoing = {}, incoming = {};
    (node.relationships || []).forEach(function (r) {
      if (!NODE_BY_ID[r.target]) return;
      (outgoing[r.type] = outgoing[r.type] || []).push(r);
    });
    (REVERSE[node.id] || []).forEach(function (r) {
      var label = REVERSE_LABELS[r.type] || relLabel(r.type);
      (incoming[label] = incoming[label] || []).push(r);
    });

    var html = "";
    if (recents.length > 1) {
      html += '<div class="gnav-recents">' + recents.filter(function (id) { return id !== node.id; }).slice(0, 8).map(function (id) {
        var n = NODE_BY_ID[id];
        return n ? '<button data-focus="' + n.id + '">' + escHtml(n.english) + "</button>" : "";
      }).join("") + "</div>";
    }

    html += '<div class="gnav-sheet-title">' + escHtml(node.english) + "</div>";
    html += '<div class="gnav-sheet-sub">' + (node.pali ? '<span class="gnav-pali">' + escHtml(node.pali) + "</span>" : "") + escHtml(node.sinhala) + "</div>";
    html += '<div class="gnav-badges">' +
      '<span class="gnav-badge" style="background:' + colorFor(node) + "22;color:" + colorFor(node) + ';border:1px solid ' + colorFor(node) + '55">' + escHtml(node.category) + "</span>" +
      '<span class="gnav-badge" style="background:#2a2f3a;color:#cfd4dd;">' + escHtml(node.importance) + "</span></div>";
    if (node.definition) html += '<div class="gnav-def">' + escHtml(node.definition) + "</div>";
    html += renderReferences(node.references);

    Object.keys(outgoing).forEach(function (type) {
      html += '<div class="gnav-rel-group"><div class="gnav-rel-type">' + escHtml(relLabel(type)) + "</div>" +
        outgoing[type].map(function (r) {
          var t = NODE_BY_ID[r.target];
          return '<div class="gnav-rel-item" data-focus="' + t.id + '">→ ' + escHtml(t.english) +
            (r.explanation ? ' <span class="gnav-rel-expl">— ' + escHtml(r.explanation) + "</span>" : "") + "</div>";
        }).join("") + "</div>";
    });
    Object.keys(incoming).forEach(function (label) {
      html += '<div class="gnav-rel-group"><div class="gnav-rel-type">' + escHtml(label) + "</div>" +
        incoming[label].map(function (r) {
          var s = NODE_BY_ID[r.source];
          return '<div class="gnav-rel-item" data-focus="' + s.id + '">← ' + escHtml(s.english) +
            (r.explanation ? ' <span class="gnav-rel-expl">— ' + escHtml(r.explanation) + "</span>" : "") + "</div>";
        }).join("") + "</div>";
    });

    sheet.innerHTML = html;
  }

  function focusNode(id) {
    var node = NODE_BY_ID[id];
    if (!node) return;
    var idx = -1;
    for (var i = 0; i < breadcrumb.length; i++) if (breadcrumb[i].id === id) { idx = i; break; }
    if (idx > -1) breadcrumb = breadcrumb.slice(0, idx + 1);
    else breadcrumb.push({ id: id, label: node.english });
    pushRecent(id);
    renderBreadcrumb();
    renderGraph(id);
    renderDetail(node);
  }

  function openPanel(nodeId) {
    document.getElementById("gnavOverlay").classList.add("open");
    breadcrumb = [];
    ensureCy().resize();
    focusNode(nodeId || "core-teachings");
  }

  function closePanel() {
    var overlay = document.getElementById("gnavOverlay");
    if (document.fullscreenElement === overlay && document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }
    overlay.classList.remove("open");
  }

  // ---- Wire panel chrome ------------------------------------------------------
  document.getElementById("gnavClose").addEventListener("click", closePanel);
  document.getElementById("gnavZoomIn").addEventListener("click", function () { if (cy) cy.zoom({ level: cy.zoom() * 1.25, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } }); });
  document.getElementById("gnavZoomOut").addEventListener("click", function () { if (cy) cy.zoom({ level: cy.zoom() * 0.8, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } }); });
  document.getElementById("gnavRelayout").addEventListener("click", function () { if (breadcrumb.length) renderGraph(breadcrumb[breadcrumb.length - 1].id); });
  document.getElementById("gnavExport").addEventListener("click", function () {
    if (!cy) return;
    var uri = cy.png({ bg: "#0d0f14", full: false, scale: 2 });
    var a = document.createElement("a");
    a.href = uri; a.download = "dhamma-concept-map.png";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  });
  document.getElementById("gnavFullscreen").addEventListener("click", function () {
    var el = document.getElementById("gnavOverlay");
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen().catch(function () {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }
  });
  document.addEventListener("fullscreenchange", function () { if (cy) setTimeout(function () { cy.resize(); cy.fit(undefined, 24); }, 60); });

  document.getElementById("gnavCrumbs").addEventListener("click", function (e) {
    var b = e.target.closest("[data-crumb-idx]");
    if (!b) return;
    var idx = +b.getAttribute("data-crumb-idx");
    focusNode(breadcrumb[idx].id);
  });

  document.getElementById("gnavSheet").addEventListener("click", function (e) {
    var b = e.target.closest("[data-focus]");
    if (b) focusNode(b.getAttribute("data-focus"));
  });

  var searchInput = document.getElementById("gnavSearch");
  var searchResults = document.getElementById("gnavSearchResults");
  searchInput.addEventListener("input", function () {
    var q = searchInput.value;
    if (!q.trim()) { searchResults.classList.remove("show"); searchResults.innerHTML = ""; return; }
    var results = searchNodes(q, 8);
    if (!results.length) {
      searchResults.innerHTML = '<div class="gnav-empty-note">No matching concept.</div>';
    } else {
      searchResults.innerHTML = results.map(function (n) {
        return '<button data-focus-search="' + n.id + '">' + escHtml(n.english) + '<span class="gnav-sr-si">' + escHtml(n.sinhala) + "</span></button>";
      }).join("");
    }
    searchResults.classList.add("show");
  });
  searchResults.addEventListener("click", function (e) {
    var b = e.target.closest("[data-focus-search]");
    if (!b) return;
    focusNode(b.getAttribute("data-focus-search"));
    searchInput.value = "";
    searchResults.classList.remove("show");
    searchResults.innerHTML = "";
  });
  document.getElementById("gnavOverlay").addEventListener("click", function (e) {
    if (!e.target.closest(".gnav-search-wrap")) { searchResults.classList.remove("show"); }
  });
})();
