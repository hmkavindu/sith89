/* ============================================================================
   dhamma-citations.js — structured Tripiṭaka citation registry.

   Every entry here was resolved by hand against the live pathnirvana/tipitaka.lk
   tree (the same source dhamma-assistant.html's RAG tier reads from) — walking
   the real parent chain to get the actual Nikāya/Piṭaka > vagga > sutta (or
   kaṇḍa) hierarchy, and confirming each `url` resolves to the correct text on
   https://tipitaka.lk/<key>. Nothing here is invented: if a concept's
   reference isn't in this registry, dhamma-graph.js falls back to showing it
   as a plain, unlinked label rather than guessing a citation for it.

   Keyed by the exact strings used in each node's `references: [...]` array in
   dhamma-graph-data.js, so a node can cite the same source from multiple
   places (e.g. "Udāna 8" and "Nibbāna Sutta" both point at Ud 8.3) without
   duplicating the citation data.

   Shape: { pitaka, key, book: {pali,sinhala,english}, chapter: {...},
            section, title: {pali,sinhala,english}, url }
   ========================================================================== */
(function (global) {
  "use strict";

  function C(o) { return o; }

  var REGISTRY = {

    // --- Sutta Piṭaka -----------------------------------------------------
    "Mahānidāna Sutta": C({
      pitaka: "sutta", key: "dn-2-2",
      book: { pali: "Dīghanikāya", sinhala: "දික් සඟිය", english: "Dīgha Nikāya (Long Discourses)" },
      chapter: { pali: "Mahāvaggo", sinhala: "මහා වර්‍ගය", english: "Mahāvagga (The Great Chapter)" },
      section: "DN 15",
      title: { pali: "Mahānidānasuttaṃ", sinhala: "මහානිදාන සූත්‍රය", english: "The Great Discourse on Causation" },
      url: "https://tipitaka.lk/dn-2-2"
    }),
    "Dhammacakkappavattana Sutta": C({
      pitaka: "sutta", key: "sn-5-12-2-1",
      book: { pali: "Saṃyuttanikāyo", sinhala: "සංයුත්ත නිකාය", english: "Saṃyutta Nikāya (Connected Discourses)" },
      chapter: { pali: "Dhammacakkappavattanavaggo", sinhala: "ධම්මචක්කප්පවත්තන වර්‍ගය", english: "Dhammacakkappavattana-vagga, Sacca Saṃyutta" },
      section: "SN 56.11",
      title: { pali: "Dhammacakkappavattanasuttaṃ", sinhala: "ධම්මචක්කප්පවත්තන සූත්‍රය", english: "Setting the Wheel of Dhamma in Motion" },
      url: "https://tipitaka.lk/sn-5-12-2-1"
    }),
    "Satipaṭṭhāna Sutta": C({
      pitaka: "sutta", key: "mn-1-1-10",
      book: { pali: "Majjhimanikāya", sinhala: "මැදුම් සඟිය", english: "Majjhima Nikāya (Middle-Length Discourses)" },
      chapter: { pali: "Mūlapariyāyavaggo", sinhala: "මූලපරියාය වර්‍ගය", english: "Mūlapariyāya-vagga (Chapter on the Root of All Things)" },
      section: "MN 10",
      title: { pali: "Satipaṭṭhānasuttaṃ", sinhala: "සතිපට්ඨාන සූත්‍රය", english: "The Foundations of Mindfulness" },
      url: "https://tipitaka.lk/mn-1-1-10"
    }),
    "Ānāpānasati Sutta": C({
      pitaka: "sutta", key: "mn-3-2-8",
      book: { pali: "Majjhimanikāya", sinhala: "මැදුම් සඟිය", english: "Majjhima Nikāya (Middle-Length Discourses)" },
      chapter: { pali: "Anupadavaggo", sinhala: "අනුපද වර්‍ගය", english: "Anupada-vagga (Chapter on One by One)" },
      section: "MN 118",
      title: { pali: "Ānāpānasatisuttaṃ", sinhala: "ආනාපානසති සූත්‍රය", english: "Mindfulness of Breathing" },
      url: "https://tipitaka.lk/mn-3-2-8"
    }),
    "Cūḷakammavibhaṅga Sutta": C({
      pitaka: "sutta", key: "mn-3-4-5",
      book: { pali: "Majjhimanikāya", sinhala: "මැදුම් සඟිය", english: "Majjhima Nikāya (Middle-Length Discourses)" },
      chapter: { pali: "Vibhaṅgavaggo", sinhala: "විභඞ්ග වර්‍ගය", english: "Vibhaṅga-vagga (Chapter of Expositions)" },
      section: "MN 135",
      title: { pali: "Cūḷakammavibhaṅgasuttaṃ", sinhala: "චූළකම්මවිභඞ්ග සූත්‍රය", english: "The Shorter Exposition of Action" },
      url: "https://tipitaka.lk/mn-3-4-5"
    }),
    "Nibbedhika Sutta": C({
      pitaka: "sutta", key: "an-6-2-1-9",
      book: { pali: "Aṅguttaranikāyo", sinhala: "අඞ්ගුත්තර සඟිය", english: "Aṅguttara Nikāya (Numerical Discourses)" },
      chapter: { pali: "Mahāvaggo", sinhala: "මහා වර්‍ගය", english: "Mahāvagga, Chakka Nipāta (Book of Sixes)" },
      section: "AN 6.63",
      title: { pali: "Nibbedhikasuttaṃ", sinhala: "නිබ්බේධික සූත්‍රය", english: "The Penetrative Discourse" },
      url: "https://tipitaka.lk/an-6-2-1-9"
    }),
    "Udāna 8": C({
      pitaka: "sutta", key: "kn-ud-8-3",
      book: { pali: "Khuddakanikāyo — Udānapāḷi", sinhala: "උදාන පාළිය (කුදුගත් සඟිය)", english: "Khuddaka Nikāya — the Udāna" },
      chapter: { pali: "Pāṭaligāmiyavaggo aṭṭhamo", sinhala: "පාටලිගාමිය වර්‍ගය", english: "Pāṭaligāmiya-vagga (Chapter 8)" },
      section: "Ud 8.3",
      title: { pali: "Tatiyanibbānasuttaṃ", sinhala: "තෙවන නිර්‍වාණ සූත්‍රය", english: "The Third Discourse on Nibbāna" },
      url: "https://tipitaka.lk/kn-ud-8-3"
    }),
    "Nibbāna Sutta": C({
      // Same passage as "Udāna 8" above — see that entry's note. Kept as a
      // separate registry key only because dhamma-graph-data.js cites both
      // strings on the nibbana node; both resolve to the same real sutta.
      pitaka: "sutta", key: "kn-ud-8-3",
      book: { pali: "Khuddakanikāyo — Udānapāḷi", sinhala: "උදාන පාළිය (කුදුගත් සඟිය)", english: "Khuddaka Nikāya — the Udāna" },
      chapter: { pali: "Pāṭaligāmiyavaggo aṭṭhamo", sinhala: "පාටලිගාමිය වර්‍ගය", english: "Pāṭaligāmiya-vagga (Chapter 8)" },
      section: "Ud 8.3",
      title: { pali: "Tatiyanibbānasuttaṃ", sinhala: "තෙවන නිර්‍වාණ සූත්‍රය", english: "The Third Discourse on Nibbāna" },
      url: "https://tipitaka.lk/kn-ud-8-3"
    }),

    // --- Vinaya Piṭaka ------------------------------------------------------
    "Paṭhama Pārājika": C({
      pitaka: "vinaya", key: "vp-prj-2-1",
      book: { pali: "Pārājikapāḷi", sinhala: "පාරාජිකපාළිය", english: "Vinaya Piṭaka — Pārājikapāḷi" },
      chapter: { pali: "Pārājikakaṇḍo", sinhala: "පාරාජිකකාණ්ඩය", english: "Pārājikakaṇḍa (Chapter of the Four Defeats)" },
      section: "Vin Pār. 1",
      title: { pali: "Paṭhamapārājikaṃ", sinhala: "ප්‍රථමපාරාජිකය", english: "The First Pārājika (on sexual intercourse)" },
      url: "https://tipitaka.lk/vp-prj-2-1"
    }),

    // --- Abhidhamma Piṭaka ---------------------------------------------------
    "Tika Mātikā": C({
      pitaka: "abhidhamma", key: "ap-dhs-1-1",
      book: { pali: "Dhammasaṅgaṇippakaraṇaṃ", sinhala: "ධම්මසඞ්ගණීප්‍රකරණය", english: "Abhidhamma Piṭaka — Dhammasaṅgaṇī" },
      chapter: { pali: "Mātikā", sinhala: "මාතෘකා", english: "Mātikā (The Matrix of Classificatory Terms)" },
      section: "Dhs Tika Mātikā 1",
      title: { pali: "Tikamātikā", sinhala: "ත්‍රිකමාතෘකා", english: "The Matrix of Triads — opens with kusalā/akusalā/abyākatā dhammā (wholesome, unwholesome, and indeterminate states)" },
      url: "https://tipitaka.lk/ap-dhs-1-1"
    }),
    "Cittuppāda-kaṇḍa": C({
      pitaka: "abhidhamma", key: "ap-dhs-2",
      book: { pali: "Dhammasaṅgaṇippakaraṇaṃ", sinhala: "ධම්මසඞ්ගණීප්‍රකරණය", english: "Abhidhamma Piṭaka — Dhammasaṅgaṇī" },
      chapter: { pali: "Cittuppādakaṇḍaṃ", sinhala: "චිත්තෝත්පාදකාණ්ඩය", english: "Cittuppāda-kaṇḍa (Chapter 1)" },
      section: "Dhs 1",
      title: { pali: "Cittuppādakaṇḍaṃ", sinhala: "චිත්තෝත්පාදකාණ්ඩය", english: "The Section on the Arising of Consciousness — the canonical citta enumeration" },
      url: "https://tipitaka.lk/ap-dhs-2"
    })
  };

  global.DhammaCitations = { registry: REGISTRY };
})(window);
