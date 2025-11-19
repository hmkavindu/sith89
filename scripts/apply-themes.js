const fs = require("fs");
const path = require("path");

const detailDir = path.join(__dirname, "..");
const files = fs.readdirSync(detailDir).filter(name => /^citta-\d+-detailed-page\.html$/.test(name));

const themeBlock = `\n    <!-- THEME OVERRIDES -->\n    <style id="citta-theme-overrides">\n        body[class*="theme-"] {\n            --theme-bg: #0f172a;\n            --theme-surface: rgba(15, 23, 42, 0.92);\n            --theme-surface-alt: rgba(148, 163, 184, 0.25);\n            --theme-primary: #0f172a;\n            --theme-accent: #38bdf8;\n            --theme-text: #f8fafc;\n            --theme-contrast: #ffffff;\n            --theme-muted: rgba(248, 250, 252, 0.65);\n            --theme-chip: rgba(248, 250, 252, 0.18);\n            background: radial-gradient(circle at top, var(--theme-bg), #020617) !important;\n            color: var(--theme-text);\n        }\n\n        body[class*="theme-"] .hero-header {\n            background: linear-gradient(135deg, var(--theme-primary), var(--theme-accent)) !important;\n            color: var(--theme-contrast) !important;\n            box-shadow: 0 28px 60px rgba(0, 0, 0, 0.45) !important;\n        }\n\n        body[class*="theme-"] .hero-badge,\n        body[class*="theme-"] .badge {\n            background: var(--theme-chip) !important;\n            border: 1px solid var(--theme-surface-alt);\n            color: var(--theme-contrast) !important;\n        }\n\n        body[class*="theme-"] .section-card,\n        body[class*="theme-"] .content-box,\n        body[class*="theme-"] .example-card,\n        body[class*="theme-"] .summary-card {\n            background: var(--theme-surface) !important;\n            border: 1px solid var(--theme-surface-alt) !important;\n            color: var(--theme-text) !important;\n            box-shadow: 0 22px 48px rgba(0, 0, 0, 0.55) !important;\n        }\n\n        body[class*="theme-"] .section-content {\n            background: rgba(255, 255, 255, 0.03) !important;\n        }\n\n        body[class*="theme-"] .section-header {\n            background: linear-gradient(135deg, var(--theme-surface-alt), rgba(255, 255, 255, 0.02)) !important;\n            border: 1px solid var(--theme-surface-alt) !important;\n        }\n\n        body[class*="theme-"] .content-box.highlight,\n        body[class*="theme-"] .summary-highlight {\n            background: linear-gradient(135deg, var(--theme-primary), var(--theme-accent)) !important;\n            border-color: var(--theme-accent) !important;\n            color: var(--theme-contrast) !important;\n        }\n\n        body[class*="theme-"] .content-box.warning {\n            background: linear-gradient(135deg, var(--theme-accent), var(--theme-primary)) !important;\n            border-color: var(--theme-accent) !important;\n            color: var(--theme-contrast) !important;\n        }\n\n        body[class*="theme-"] .summary-section {\n            background: linear-gradient(135deg, rgba(0, 0, 0, 0.65), var(--theme-primary)) !important;\n            color: var(--theme-contrast);\n        }\n\n        body[class*="theme-"] .footer-section {\n            color: var(--theme-muted);\n        }\n\n        body[class*="theme-"] .footer-note {\n            background: linear-gradient(135deg, var(--theme-primary), rgba(0, 0, 0, 0.75)) !important;\n            color: var(--theme-contrast) !important;\n            border-color: var(--theme-accent) !important;\n        }\n\n        body.theme-akusala {\n            --theme-bg: #09040a;\n            --theme-surface: rgba(9, 4, 10, 0.92);\n            --theme-surface-alt: rgba(122, 22, 34, 0.35);\n            --theme-primary: #7a1622;\n            --theme-accent: #f76808;\n            --theme-text: #ffe7db;\n            --theme-contrast: #fff8f4;\n            --theme-muted: rgba(255, 231, 219, 0.8);\n            --theme-chip: rgba(247, 104, 8, 0.15);\n        }\n\n        body.theme-kusala {\n            --theme-bg: #f4fff7;\n            --theme-surface: #ffffff;\n            --theme-surface-alt: rgba(16, 185, 129, 0.25);\n            --theme-primary: #0f5132;\n            --theme-accent: #10b981;\n            --theme-text: #0f172a;\n            --theme-contrast: #ffffff;\n            --theme-muted: rgba(15, 81, 50, 0.85);\n            --theme-chip: rgba(16, 185, 129, 0.18);\n        }\n\n        body.theme-vipaka {\n            --theme-bg: #030712;\n            --theme-surface: rgba(3, 7, 18, 0.92);\n            --theme-surface-alt: rgba(29, 78, 216, 0.35);\n            --theme-primary: #1d4ed8;\n            --theme-accent: #fbbf24;\n            --theme-text: #e2e8f0;\n            --theme-contrast: #fff9eb;\n            --theme-muted: rgba(226, 232, 240, 0.8);\n            --theme-chip: rgba(251, 191, 36, 0.18);\n        }\n\n        body.theme-kriya {\n            --theme-bg: #050a13;\n            --theme-surface: rgba(5, 10, 19, 0.94);\n            --theme-surface-alt: rgba(14, 165, 233, 0.3);\n            --theme-primary: #0ea5e9;\n            --theme-accent: #f472b6;\n            --theme-text: #f5f3ff;\n            --theme-contrast: #fff7fb;\n            --theme-muted: rgba(245, 243, 255, 0.8);\n            --theme-chip: rgba(14, 165, 233, 0.2);\n        }\n\n        body.theme-lokuttara {\n            --theme-bg: #070314;\n            --theme-surface: rgba(7, 3, 20, 0.92);\n            --theme-surface-alt: rgba(147, 51, 234, 0.35);\n            --theme-primary: #9333ea;\n            --theme-accent: #facc15;\n            --theme-text: #f7f4ff;\n            --theme-contrast: #fffdf3;\n            --theme-muted: rgba(247, 244, 255, 0.8);\n            --theme-chip: rgba(250, 204, 21, 0.18);\n        }\n\n        body.theme-kusala .section-content,\n        body.theme-kusala body {\n            background: linear-gradient(135deg, #ffffff, var(--theme-bg)) !important;\n        }\n    </style>\n`;

function detectTheme(content) {
    const match = content.match(/<p class="hero-subtitle">([\s\S]*?)<\/p>/);
    const text = match ? match[1].replace(/<[^>]+>/g, "").trim() : "";
    const normalized = text.replace(/\s+/g, " ");
    if (/මගග|ඵල|ලකතතර/.test(normalized)) return "theme-lokuttara";
    if (/කරය/.test(normalized)) return "theme-kriya";
    if (/වපක/.test(normalized)) return "theme-vipaka";
    if (/කසල/.test(normalized)) return "theme-kusala";
    if (/අකසල/.test(normalized)) return "theme-akusala";
    return null;
}

files.forEach(file => {
    const fullPath = path.join(detailDir, file);
    let content = fs.readFileSync(fullPath, "utf8");

    const themeClass = detectTheme(content);
    if (!themeClass) {
        console.warn(`Could not detect theme for ${file}`);
        return;
    }

    content = content.replace(/<body([^>]*)>/, (match, attrs) => {
        if (/class\s*=/.test(attrs)) {
            return match.replace(/class\s*=\s*"([^"]*)"/, (m, classes) => {
                const filtered = classes.split(/\s+/).filter(Boolean).filter(cls => !cls.startsWith("theme-")).join(" ");
                const newClasses = `${themeClass} ${filtered}`.trim();
                return `class="${newClasses}"`;
            });
        }
        return `<body class="${themeClass}"${attrs}>`;
    });

    if (!content.includes("citta-theme-overrides")) {
        content = content.replace(/<\/head>/, `${themeBlock}\n</head>`);
    }

    fs.writeFileSync(fullPath, content, "utf8");
});
