/* ============================================================================
   dhamma-graph-data.js — curated concept dataset for the Visual Dhamma
   Knowledge Navigation graph (additive feature — see dhamma-graph.js).

   This is a NEW, self-contained dataset. It does not read from, modify, or
   duplicate dhamma-abhidhamma.js's TEACHINGS array (which remains the tier-0
   instant-answer source for the chat) — content here is independently
   re-expressed in a graph-friendly shape for visualization only.

   Each node: { id, pali, sinhala, english, category, definition, importance,
                references: [string], relationships: [{target, type, explanation}] }

   Relationships are authored ONCE, on the source node only. dhamma-graph.js
   builds the reverse (incoming) index at load time using reverseTypeLabels.
   ========================================================================== */
(function (global) {
  "use strict";

  var CATEGORY_COLORS = {
    core: "#3b82f6",           // Blue — Core Teachings
    fourNobleTruths: "#d4a017",// Gold — Four Noble Truths
    meditation: "#22c55e",     // Green — Meditation
    abhidhamma: "#a855f7",     // Purple — Abhidhamma
    ethics: "#f97316",         // Orange — Ethics
    defilements: "#ef4444",    // Red — Defilements
    ultimate: "#f5f5f5"        // White — Ultimate Goals
  };

  var REVERSE_TYPE_LABELS = {
    CAUSES: "IS CAUSED BY",
    LEADS_TO: "IS PRECEDED BY",
    PART_OF: "CONTAINS",
    EXPLAINS: "IS EXPLAINED BY",
    SUPPORTED_BY: "SUPPORTS",
    OPPOSITE_OF: "OPPOSITE OF",
    ELIMINATED_BY: "ELIMINATES",
    CONDITIONS: "IS CONDITIONED BY",
    ASSOCIATED_WITH: "ASSOCIATED WITH",
    MENTIONED_IN: "MENTIONS",
    PRACTICED_THROUGH: "IS A PRACTICE FOR",
    RESULTS_IN: "RESULTS FROM",
    DEPENDS_ON: "IS DEPENDED ON BY",
    SIMILAR_TO: "SIMILAR TO",
    CLASSIFIED_UNDER: "CLASSIFIES"
  };

  function R(target, type, explanation) { return { target: target, type: type, explanation: explanation || "" }; }

  function N(o) {
    return {
      id: o.id, pali: o.pali || "", sinhala: o.sinhala || "", english: o.english || "",
      category: o.category, definition: o.definition || "",
      importance: o.importance || "supporting",
      references: o.references || [],
      relationships: o.relationships || [],
      // Everyday English/Sinhala words and phrases ("I am angry", "stress") that
      // should resolve straight to this concept — see dhamma-graph.js's
      // lifeKeywordBonus(), which matches these as whole phrases (not the
      // generic per-token scoring) so ordinary life questions reliably map to
      // the right node even when the query shares no Pali/technical vocabulary
      // with the node's own text.
      lifeKeywords: o.lifeKeywords || []
    };
  }

  var nodes = [

    // --- Canon / core hubs ---------------------------------------------------
    N({ id: "core-teachings", pali: "Buddhadhamma", sinhala: "බුද්ධ ධර්මය", english: "Core Teachings",
      category: "core", importance: "essential",
      definition: "The central body of the Buddha's teaching — the truths, the path, and the goal — from which every other Dhamma concept branches.",
      relationships: [
        R("four-noble-truths", "PART_OF", "The Four Noble Truths are the foundational framework of the whole teaching."),
        R("dependent-origination", "PART_OF", "Dependent Origination explains how suffering arises and ceases."),
        R("five-aggregates", "PART_OF", "The Five Aggregates analyse what is conventionally called a 'being'."),
        R("kamma", "ASSOCIATED_WITH", "Kamma explains moral causality within the teaching."),
        R("nibbana", "LEADS_TO", "The teaching points toward the ultimate goal of Nibbāna.")
      ] }),
    N({ id: "tipitaka", pali: "Tipiṭaka", sinhala: "ත්‍රිපිටකය", english: "The Pāli Canon (Three Baskets)",
      category: "core", importance: "essential",
      definition: "The complete canonical scripture of Theravāda Buddhism, in three divisions: Sutta, Vinaya, and Abhidhamma.",
      relationships: [
        R("sutta-pitaka", "PART_OF", "Discourses of the Buddha and disciples."),
        R("vinaya-pitaka", "PART_OF", "Monastic discipline and rules."),
        R("abhidhamma-pitaka", "PART_OF", "Systematic philosophical/psychological analysis.")
      ] }),
    N({ id: "sutta-pitaka", pali: "Sutta Piṭaka", sinhala: "සුත්ත පිටකය", english: "Basket of Discourses",
      category: "core", importance: "high",
      definition: "The collection of the Buddha's discourses, organised into five Nikāyas.",
      relationships: [ R("four-noble-truths", "MENTIONED_IN", "First taught in the Dhammacakkappavattana Sutta.") ] }),
    N({ id: "vinaya-pitaka", pali: "Vinaya Piṭaka", sinhala: "විනය පිටකය", english: "Basket of Discipline",
      category: "core", importance: "high",
      definition: "The code of monastic discipline and rules for the ordained Saṅgha.",
      relationships: [ R("five-precepts", "SIMILAR_TO", "Lay precepts parallel the ethical spirit of monastic rules.") ] }),
    N({ id: "abhidhamma-pitaka", pali: "Abhidhamma Piṭaka", sinhala: "අභිධර්ම පිටකය", english: "Basket of Higher Doctrine",
      category: "abhidhamma", importance: "high",
      definition: "The systematic analysis of mind (citta), mental factors (cetasika), and matter (rūpa).",
      relationships: [ R("abhidhamma-hub", "PART_OF", "The citta/cetasika system is the heart of the Abhidhamma.") ] }),

    N({ id: "kamma", pali: "Kamma", sinhala: "කර්මය", english: "Kamma (Volitional Action)",
      category: "core", importance: "essential",
      definition: "Intentional action (cetanā) that produces corresponding results, shaping future experience and rebirth.",
      references: ["Nibbedhika Sutta", "Cūḷakammavibhaṅga Sutta"],
      relationships: [
        R("rebirth", "CAUSES", "Kammic action conditions the next becoming and birth."),
        R("bhava", "CONDITIONS", "Kamma is the driving force behind 'becoming' in Dependent Origination."),
        R("unwholesome-roots", "ASSOCIATED_WITH", "Actions rooted in greed, hatred, or delusion are unwholesome kamma."),
        R("wholesome-roots", "ASSOCIATED_WITH", "Actions rooted in non-greed, non-hatred, non-delusion are wholesome kamma.")
      ] }),
    N({ id: "rebirth", pali: "Punabbhava", sinhala: "පුනර්භවය", english: "Rebirth / Renewed Becoming",
      category: "core", importance: "essential",
      definition: "The continuation of the conditioned process of existence from one life to the next, driven by craving and kamma.",
      relationships: [
        R("kamma", "RESULTS_IN", "Rebirth is the result of accumulated kammic formations."),
        R("jati", "SIMILAR_TO", "Birth (jāti) in Dependent Origination is the technical description of rebirth."),
        R("nibbana", "OPPOSITE_OF", "Nibbāna is the ending of the cycle of rebirth.")
      ] }),
    N({ id: "nibbana", pali: "Nibbāna", sinhala: "නිර්වාණය", english: "Nibbāna (The Ultimate Goal)",
      category: "ultimate", importance: "essential",
      definition: "The unconditioned state of the complete cessation of greed, hatred, and delusion — the end of suffering and rebirth.",
      references: ["Udāna 8", "Nibbāna Sutta"],
      relationships: [
        R("nirodha", "SIMILAR_TO", "The Third Noble Truth points directly to the realisation of Nibbāna."),
        R("noble-eightfold-path", "DEPENDS_ON", "The Path is the way of practice that leads to Nibbāna."),
        R("tanha", "OPPOSITE_OF", "Nibbāna is the complete extinguishing of craving."),
        R("rebirth", "OPPOSITE_OF", "Nibbāna ends the cycle of repeated becoming.")
      ] }),

    // --- Four Noble Truths ----------------------------------------------------
    N({ id: "four-noble-truths", pali: "Cattāri Ariyasaccāni", sinhala: "චතුරාර්ය සත්‍ය", english: "The Four Noble Truths",
      category: "fourNobleTruths", importance: "essential",
      definition: "The Buddha's foundational diagnosis and cure for suffering, taught in his first sermon.",
      references: ["Dhammacakkappavattana Sutta"],
      relationships: [
        R("dukkha", "PART_OF", "The truth of suffering."),
        R("samudaya", "PART_OF", "The truth of the origin of suffering."),
        R("nirodha", "PART_OF", "The truth of the cessation of suffering."),
        R("magga", "PART_OF", "The truth of the path leading to cessation."),
        R("dependent-origination", "EXPLAINS", "Dependent Origination gives the detailed causal mechanics behind the first two truths.")
      ] }),
    N({ id: "dukkha", pali: "Dukkha", sinhala: "දුක්ඛ", english: "Suffering / Unsatisfactoriness",
      category: "fourNobleTruths", importance: "essential",
      definition: "The truth that conditioned existence is marked by suffering, stress, and unsatisfactoriness.",
      lifeKeywords: ["suffering", "i am suffering", "suffer", "unhappy", "sad", "sadness", "dissatisfied", "dissatisfaction", "pain", "දුක", "දුකයි", "දුක්බර"],
      relationships: [
        R("five-aggregates", "ASSOCIATED_WITH", "The Buddha defined dukkha in terms of clinging to the five aggregates."),
        R("nibbana", "OPPOSITE_OF", "Nibbāna is the complete freedom from dukkha."),
        R("three-characteristics", "PART_OF", "Dukkha is also one of the Three Characteristics of all conditioned things.")
      ] }),
    N({ id: "samudaya", pali: "Samudaya", sinhala: "සමුදය", english: "Origin of Suffering",
      category: "fourNobleTruths", importance: "essential",
      definition: "The truth that craving (taṇhā) is the origin and sustaining cause of suffering.",
      relationships: [
        R("tanha", "EXPLAINS", "Craving is identified as the direct cause of suffering."),
        R("dependent-origination", "PART_OF", "Craving's causal role is detailed in the middle links of Dependent Origination.")
      ] }),
    N({ id: "nirodha", pali: "Nirodha", sinhala: "නිරෝධ", english: "Cessation of Suffering",
      category: "fourNobleTruths", importance: "essential",
      definition: "The truth that suffering can completely cease through the total cessation of craving.",
      relationships: [ R("nibbana", "LEADS_TO", "The cessation of craving is realised as Nibbāna.") ] }),
    N({ id: "magga", pali: "Magga", sinhala: "මාර්ග", english: "The Path",
      category: "fourNobleTruths", importance: "essential",
      definition: "The truth of the way of practice leading to the cessation of suffering — the Noble Eightfold Path.",
      relationships: [ R("noble-eightfold-path", "SIMILAR_TO", "The fourth truth IS the Noble Eightfold Path.") ] }),

    // --- Noble Eightfold Path ---------------------------------------------------
    N({ id: "noble-eightfold-path", pali: "Ariya Aṭṭhaṅgika Magga", sinhala: "ආර්ය අෂ්ටාංගික මාර්ගය", english: "The Noble Eightfold Path",
      category: "core", importance: "essential",
      definition: "The eight-factor path to the end of suffering, grouped into wisdom, ethics, and concentration.",
      relationships: [
        R("right-view", "PART_OF", "Wisdom factor."), R("right-intention", "PART_OF", "Wisdom factor."),
        R("right-speech", "PART_OF", "Ethics factor."), R("right-action", "PART_OF", "Ethics factor."),
        R("right-livelihood", "PART_OF", "Ethics factor."),
        R("right-effort", "PART_OF", "Concentration factor."), R("right-mindfulness", "PART_OF", "Concentration factor."),
        R("right-concentration", "PART_OF", "Concentration factor."),
        R("nibbana", "RESULTS_IN", "Full cultivation of the Path culminates in Nibbāna.")
      ] }),
    N({ id: "right-view", pali: "Sammā Diṭṭhi", sinhala: "සම්මා දිට්ඨි", english: "Right View",
      category: "core", importance: "high", definition: "Correct understanding of the Four Noble Truths and the nature of kamma.",
      relationships: [ R("four-noble-truths", "ASSOCIATED_WITH", "Right View is understanding the Four Noble Truths correctly.") ] }),
    N({ id: "right-intention", pali: "Sammā Saṅkappa", sinhala: "සම්මා සංකප්ප", english: "Right Intention",
      category: "core", importance: "high", definition: "Thoughts free of craving, ill-will, and cruelty.",
      relationships: [ R("nekkhamma", "SIMILAR_TO", "Right Intention begins with the intention of renunciation.") ] }),
    N({ id: "right-speech", pali: "Sammā Vācā", sinhala: "සම්මා වාචා", english: "Right Speech",
      category: "ethics", importance: "high", definition: "Abstaining from lying, divisive, harsh, and idle speech.",
      relationships: [ R("precept-4-false-speech", "SIMILAR_TO", "Both concern truthful, non-harmful speech.") ] }),
    N({ id: "right-action", pali: "Sammā Kammanta", sinhala: "සම්මා කම්මන්ත", english: "Right Action",
      category: "ethics", importance: "high", definition: "Abstaining from killing, stealing, and sexual misconduct.",
      relationships: [
        R("precept-1-killing", "SIMILAR_TO", "Shared ethical ground."),
        R("precept-2-stealing", "SIMILAR_TO", "Shared ethical ground."),
        R("precept-3-sexual-misconduct", "SIMILAR_TO", "Shared ethical ground.")
      ] }),
    N({ id: "right-livelihood", pali: "Sammā Ājīva", sinhala: "සම්මා ආජීව", english: "Right Livelihood",
      category: "ethics", importance: "medium", definition: "Earning a living in a way that causes no harm to other beings.",
      relationships: [ R("five-precepts", "ASSOCIATED_WITH", "A livelihood consistent with the five precepts.") ] }),
    N({ id: "right-effort", pali: "Sammā Vāyāma", sinhala: "සම්මා වායාම", english: "Right Effort",
      category: "meditation", importance: "high", definition: "Sustained effort to prevent, abandon, develop, and maintain mental states.",
      relationships: [ R("four-right-efforts", "EXPLAINS", "The Four Right Efforts are the detailed breakdown of this factor.") ] }),
    N({ id: "right-mindfulness", pali: "Sammā Sati", sinhala: "සම්මා සති", english: "Right Mindfulness",
      category: "meditation", importance: "high", definition: "Mindfulness established on body, feelings, mind, and mental objects.",
      relationships: [ R("satipatthana", "EXPLAINS", "The Four Foundations of Mindfulness are the detailed method for this factor.") ] }),
    N({ id: "right-concentration", pali: "Sammā Samādhi", sinhala: "සම්මා සමාධි", english: "Right Concentration",
      category: "meditation", importance: "high", definition: "Unification and steadying of the mind through jhāna.",
      relationships: [ R("samadhi", "SIMILAR_TO", "Right Concentration is the cultivation of samādhi.") ] }),

    // --- Five Aggregates --------------------------------------------------------
    N({ id: "five-aggregates", pali: "Pañcakkhandha", sinhala: "පංච ස්කන්ධය", english: "The Five Aggregates",
      category: "core", importance: "essential",
      definition: "The five components — form, feeling, perception, formations, consciousness — into which what is called a 'being' can be analysed.",
      relationships: [
        R("rupa", "PART_OF", "Form."), R("vedana", "PART_OF", "Feeling."), R("sanna", "PART_OF", "Perception."),
        R("sankhara", "PART_OF", "Mental formations."), R("vinnana", "PART_OF", "Consciousness."),
        R("dukkha", "CAUSES", "Clinging to the five aggregates is the definition of suffering."),
        R("anatta", "EXPLAINS", "Analysis into aggregates reveals no fixed self within any of them.")
      ] }),
    N({ id: "rupa", pali: "Rūpa", sinhala: "රූප", english: "Form / Materiality",
      category: "abhidhamma", importance: "high", definition: "The physical body and material phenomena, including the sense organs.",
      relationships: [ R("nama-rupa", "PART_OF", "Rūpa is the material half of mind-and-body.") ] }),
    N({ id: "vedana", pali: "Vedanā", sinhala: "වේදනා", english: "Feeling",
      category: "abhidhamma", importance: "high", definition: "The pleasant, painful, or neutral quality of an experience.",
      relationships: [
        R("phassa", "CAUSES", "Feeling arises conditioned by contact."),
        R("tanha", "CAUSES", "Craving arises conditioned by feeling."),
        R("vedananupassana", "PRACTICED_THROUGH", "Contemplated directly in the second foundation of mindfulness.")
      ] }),
    N({ id: "sanna", pali: "Saññā", sinhala: "සංඥා", english: "Perception",
      category: "abhidhamma", importance: "medium", definition: "The recognition and mental labelling of an object." }),
    N({ id: "sankhara", pali: "Saṅkhāra", sinhala: "සංස්කාර", english: "Mental Formations",
      category: "abhidhamma", importance: "high", definition: "Volitional and constructive mental activity, including intention (cetanā); also the second link of Dependent Origination.",
      relationships: [ R("dependent-origination", "PART_OF", "Formations conditioned by ignorance are the second link."), R("vinnana", "CAUSES", "Formations condition the arising of consciousness.") ] }),
    N({ id: "vinnana", pali: "Viññāṇa", sinhala: "විඤ්ඤාණ", english: "Consciousness",
      category: "abhidhamma", importance: "high", definition: "Bare cognizance/awareness of an object; the third link of Dependent Origination.",
      relationships: [ R("nama-rupa", "CAUSES", "Consciousness conditions the arising of mind-and-body."), R("citta", "SIMILAR_TO", "Viññāṇa is analysed in fine detail as citta in the Abhidhamma.") ] }),

    // --- Three Characteristics ---------------------------------------------------
    N({ id: "three-characteristics", pali: "Tilakkhaṇa", sinhala: "ත්‍රිලක්ෂණය", english: "The Three Characteristics",
      category: "core", importance: "essential", definition: "Three marks shared by all conditioned phenomena: impermanence, unsatisfactoriness, and non-self.",
      relationships: [ R("anicca", "PART_OF", ""), R("dukkha", "PART_OF", ""), R("anatta", "PART_OF", ""), R("vipassana", "PRACTICED_THROUGH", "Insight meditation directly observes the three characteristics.") ] }),
    N({ id: "anicca", pali: "Anicca", sinhala: "අනිච්ච", english: "Impermanence",
      category: "core", importance: "essential", definition: "All conditioned things are constantly arising and passing away; nothing is static." }),
    N({ id: "anatta", pali: "Anattā", sinhala: "අනත්ත", english: "Non-self",
      category: "core", importance: "essential", definition: "There is no fixed, unchanging self to be found in any of the five aggregates.",
      relationships: [ R("five-aggregates", "EXPLAINS", "Non-self is seen through analysis of the aggregates.") ] }),

    // --- Dependent Origination ----------------------------------------------------
    N({ id: "dependent-origination", pali: "Paṭicca Samuppāda", sinhala: "පටිච්ච සමුප්පාදය", english: "Dependent Origination",
      category: "core", importance: "essential",
      definition: "The chain of twelve causally-linked factors explaining how suffering and rebirth arise and cease.",
      references: ["Mahānidāna Sutta"],
      relationships: [
        R("avijja", "PART_OF", "1. Ignorance"), R("sankhara", "PART_OF", "2. Formations"), R("vinnana", "PART_OF", "3. Consciousness"),
        R("nama-rupa", "PART_OF", "4. Mind-and-body"), R("salayatana", "PART_OF", "5. Six sense bases"), R("phassa", "PART_OF", "6. Contact"),
        R("vedana", "PART_OF", "7. Feeling"), R("tanha", "PART_OF", "8. Craving"), R("upadana", "PART_OF", "9. Clinging"),
        R("bhava", "PART_OF", "10. Becoming"), R("jati", "PART_OF", "11. Birth"), R("jaramarana", "PART_OF", "12. Ageing and death"),
        R("four-noble-truths", "EXPLAINS", "Gives the causal detail behind the second Noble Truth.")
      ] }),
    N({ id: "avijja", pali: "Avijjā", sinhala: "අවිද්‍යාව", english: "Ignorance",
      category: "core", importance: "high", definition: "Fundamental not-knowing of the Four Noble Truths; the root condition of the whole cycle.",
      relationships: [ R("sankhara", "CAUSES", "Ignorance conditions volitional formations."), R("moha", "SIMILAR_TO", "Ignorance and delusion are essentially the same root.") ] }),
    N({ id: "nama-rupa", pali: "Nāma-rūpa", sinhala: "නාමරූප", english: "Mind-and-Body",
      category: "core", importance: "medium", definition: "The psycho-physical organism — mind (nāma) and matter (rūpa) together.",
      relationships: [ R("salayatana", "CAUSES", "Mind-and-body conditions the arising of the six sense bases.") ] }),
    N({ id: "salayatana", pali: "Saḷāyatana", sinhala: "සළායතන", english: "Six Sense Bases",
      category: "core", importance: "medium", definition: "Eye, ear, nose, tongue, body, and mind — the six doors of experience.",
      relationships: [ R("phassa", "CAUSES", "The sense bases condition contact.") ] }),
    N({ id: "phassa", pali: "Phassa", sinhala: "ස්පර්ශය", english: "Contact",
      category: "core", importance: "medium", definition: "The meeting of a sense base, its object, and consciousness.",
      relationships: [ R("vedana", "CAUSES", "Contact conditions feeling.") ] }),
    N({ id: "tanha", pali: "Taṇhā", sinhala: "තණ්හාව", english: "Craving",
      category: "core", importance: "essential", definition: "The thirst for sensual pleasure, existence, or non-existence — the proximate cause of suffering.",
      lifeKeywords: ["craving", "desire", "wanting", "attachment", "attached", "addicted", "addiction", "ආශාව", "තණ්හාව"],
      relationships: [
        R("samudaya", "CLASSIFIED_UNDER", "Craving is the content of the Second Noble Truth."),
        R("upadana", "CAUSES", "Intensified craving becomes clinging."),
        R("nibbana", "OPPOSITE_OF", "The end of craving is Nibbāna.")
      ] }),
    N({ id: "upadana", pali: "Upādāna", sinhala: "උපාදාන", english: "Clinging",
      category: "core", importance: "high", definition: "Intensified craving that grasps at objects, views, rites, or a sense of self.",
      relationships: [ R("bhava", "CAUSES", "Clinging conditions becoming.") ] }),
    N({ id: "bhava", pali: "Bhava", sinhala: "භව", english: "Becoming",
      category: "core", importance: "high", definition: "The kammic process of 'becoming' that leads onward to a new birth.",
      relationships: [ R("jati", "CAUSES", "Becoming conditions birth.") ] }),
    N({ id: "jati", pali: "Jāti", sinhala: "ජාති", english: "Birth",
      category: "core", importance: "high", definition: "Birth into a new existence.",
      relationships: [ R("jaramarana", "CAUSES", "Birth inevitably conditions ageing and death.") ] }),
    N({ id: "jaramarana", pali: "Jarāmaraṇa", sinhala: "ජරාමරණ", english: "Ageing and Death",
      category: "core", importance: "high", definition: "Old age, death, and the sorrow, lamentation, and despair that follow." }),

    // --- Six Roots ----------------------------------------------------------------
    N({ id: "unwholesome-roots", pali: "Akusala-mūla", sinhala: "අකුසල් මූල", english: "The Three Unwholesome Roots",
      category: "defilements", importance: "high", definition: "Greed, hatred, and delusion — the roots from which all unwholesome mind-states grow.",
      relationships: [ R("lobha", "PART_OF", ""), R("dosa", "PART_OF", ""), R("moha", "PART_OF", "") ] }),
    N({ id: "lobha", pali: "Lobha", sinhala: "ලෝභ", english: "Greed",
      category: "defilements", importance: "high", definition: "Attachment and grasping toward pleasant objects.",
      relationships: [ R("alobha", "OPPOSITE_OF", "") ] }),
    N({ id: "dosa", pali: "Dosa", sinhala: "දෝස", english: "Hatred / Aversion",
      category: "defilements", importance: "high", definition: "Ill-will and aversion toward unpleasant objects.",
      lifeKeywords: ["anger", "angry", "mad", "rage", "irritated", "irritation", "annoyed", "furious", "hatred", "hate", "කෝපය", "තරහ", "තරහයි", "රުස්සනවා"],
      relationships: [
        R("adosa", "OPPOSITE_OF", ""),
        R("byapada", "SIMILAR_TO", "Ill-will as a hindrance is this root manifesting during meditation."),
        R("metta", "ELIMINATED_BY", "Loving-kindness meditation is the classic antidote to hatred and aversion."),
        R("khanti", "ELIMINATED_BY", "Patience directly counters the impulse of anger."),
        R("right-effort", "ASSOCIATED_WITH", "Right Effort is the sustained work of abandoning arisen states like hatred.")
      ] }),
    N({ id: "moha", pali: "Moha", sinhala: "මෝහ", english: "Delusion",
      category: "defilements", importance: "high", definition: "Fundamental not-seeing of things as they truly are.",
      lifeKeywords: ["confused", "confusion", "lost", "don't understand", "unclear mind", "මුළාව"],
      relationships: [ R("amoha", "OPPOSITE_OF", "") ] }),
    N({ id: "wholesome-roots", pali: "Kusala-mūla", sinhala: "කුසල් මූල", english: "The Three Wholesome Roots",
      category: "core", importance: "high", definition: "Non-greed, non-hatred, and non-delusion — the roots from which all wholesome mind-states grow.",
      relationships: [ R("alobha", "PART_OF", ""), R("adosa", "PART_OF", ""), R("amoha", "PART_OF", "") ] }),
    N({ id: "alobha", pali: "Alobha", sinhala: "අලෝභ", english: "Non-greed / Generosity",
      category: "ethics", importance: "medium", definition: "Non-attachment and generosity of mind.",
      relationships: [ R("dana", "SIMILAR_TO", "Generosity as a wholesome root and as a perfection.") ] }),
    N({ id: "adosa", pali: "Adosa", sinhala: "අදෝස", english: "Non-hatred / Goodwill",
      category: "ethics", importance: "medium", definition: "Freedom from ill-will; goodwill toward beings.",
      relationships: [ R("metta", "SIMILAR_TO", "Non-hatred fully matured is loving-kindness.") ] }),
    N({ id: "amoha", pali: "Amoha", sinhala: "අමෝහ", english: "Non-delusion / Wisdom",
      category: "core", importance: "high", definition: "Clear wisdom that sees things as they actually are.",
      relationships: [ R("panna", "SIMILAR_TO", "Non-delusion is wisdom (paññā) in its rooted form.") ] }),

    // --- Everyday afflictive/aspirational states (not classical enumerations,
    //     but explicitly requested so life questions like "I am afraid" or
    //     "I am jealous" have a proper home in the graph) ------------------
    N({ id: "bhaya", pali: "Bhaya", sinhala: "භය", english: "Fear",
      category: "defilements", importance: "medium",
      definition: "Apprehension or dread, arising from craving for safety and continuity and an unexamined sense of self; closely tied to aversion and the hindrances.",
      lifeKeywords: ["fear", "afraid", "scared", "terrified", "worried about the future", "භය", "බය", "බයයි"],
      relationships: [
        R("tanha", "CAUSES", "Fear is rooted in craving for security and continued existence."),
        R("dosa", "SIMILAR_TO", "Fear and aversion are closely related afflictive states."),
        R("metta", "ELIMINATED_BY", "Loving-kindness toward oneself softens fear."),
        R("sati", "ELIMINATED_BY", "Clear, present-moment awareness counters fear of the unknown.")
      ] }),
    N({ id: "issa", pali: "Issā", sinhala: "ඉස්සා", english: "Envy / Jealousy",
      category: "defilements", importance: "medium",
      definition: "Resentment of others' success, good fortune, or possessions — an unwholesome mental factor rooted in aversion.",
      lifeKeywords: ["jealous", "jealousy", "envy", "envious", "ඊර්ෂ්‍යාව", "ඊර්ෂියා"],
      relationships: [
        R("dosa", "CLASSIFIED_UNDER", "Envy is a manifestation of the aversion/hatred root.")
      ] }),
    N({ id: "sukha", pali: "Sukha", sinhala: "සැප", english: "Happiness / Wellbeing",
      category: "core", importance: "high",
      definition: "Ease and wellbeing — from ordinary pleasant feeling to the deep, unshakeable peace cultivated through practice, culminating in Nibbāna.",
      lifeKeywords: ["happiness", "happy", "want happiness", "wellbeing", "well-being", "joy", "contentment", "how to be happy", "සතුට", "සතුටයි"],
      relationships: [
        R("piti", "SIMILAR_TO", "Rapture is a refined, meditative form of happiness."),
        R("metta-bhavana", "PRACTICED_THROUGH", "Loving-kindness meditation directly cultivates a happy mind."),
        R("sila", "SUPPORTED_BY", "An ethical life free of remorse is a foundation for genuine happiness."),
        R("nibbana", "LEADS_TO", "The deepest and only unconditioned happiness is Nibbāna.")
      ] }),

    // --- Four Brahmavihāras ---------------------------------------------------------
    N({ id: "brahmaviharas", pali: "Brahmavihāra", sinhala: "බ්‍රහ්ම විහරණ", english: "The Four Brahmavihāras",
      category: "meditation", importance: "high", definition: "Four boundless mental states to be cultivated toward all beings without limit.",
      relationships: [ R("metta", "PART_OF", ""), R("karuna", "PART_OF", ""), R("mudita", "PART_OF", ""), R("upekkha", "PART_OF", "") ] }),
    N({ id: "metta", pali: "Mettā", sinhala: "මෙත්තා", english: "Loving-kindness",
      category: "meditation", importance: "high", definition: "The wish for all beings to be happy and well.",
      lifeKeywords: ["loving kindness", "kindness", "how to love", "unconditional love"],
      relationships: [ R("metta-bhavana", "PRACTICED_THROUGH", "Cultivated directly through mettā meditation."), R("dosa", "OPPOSITE_OF", "") ] }),
    N({ id: "karuna", pali: "Karuṇā", sinhala: "කරුණා", english: "Compassion",
      category: "meditation", importance: "medium", definition: "The wish for beings suffering to be free from that suffering.",
      lifeKeywords: ["compassion", "empathy", "how to be compassionate"] }),
    N({ id: "mudita", pali: "Muditā", sinhala: "මුදිතා", english: "Sympathetic Joy",
      category: "meditation", importance: "medium", definition: "Rejoicing in the happiness and success of others.",
      lifeKeywords: ["jealous of others' success", "can't be happy for others"],
      relationships: [ R("issa", "OPPOSITE_OF", "Sympathetic joy is the direct antidote to envy.") ] }),
    N({ id: "upekkha", pali: "Upekkhā", sinhala: "උපේක්ඛා", english: "Equanimity",
      category: "meditation", importance: "high", definition: "Balanced, even-minded observation amid gain and loss, praise and blame.",
      relationships: [ R("seven-factors-enlightenment", "PART_OF", "Equanimity is also the seventh factor of enlightenment.") ] }),

    // --- Five Precepts ---------------------------------------------------------------
    N({ id: "five-precepts", pali: "Pañcasīla", sinhala: "පංචශීලය", english: "The Five Precepts",
      category: "ethics", importance: "essential", definition: "The basic ethical foundation for lay Buddhist life.",
      relationships: [
        R("precept-1-killing", "PART_OF", ""), R("precept-2-stealing", "PART_OF", ""),
        R("precept-3-sexual-misconduct", "PART_OF", ""), R("precept-4-false-speech", "PART_OF", ""),
        R("precept-5-intoxicants", "PART_OF", "")
      ] }),
    N({ id: "precept-1-killing", pali: "Pāṇātipātā Veramaṇī", sinhala: "පාණාතිපාතා වේරමණී", english: "Refrain from Killing",
      category: "ethics", importance: "high", definition: "Abstaining from taking the life of any living being." }),
    N({ id: "precept-2-stealing", pali: "Adinnādānā Veramaṇī", sinhala: "අදින්නාදානා වේරමණී", english: "Refrain from Stealing",
      category: "ethics", importance: "high", definition: "Abstaining from taking what is not given." }),
    N({ id: "precept-3-sexual-misconduct", pali: "Kāmesumicchācārā Veramaṇī", sinhala: "කාමේසුමිච්ඡාචාරා වේරමණී", english: "Refrain from Sexual Misconduct",
      category: "ethics", importance: "medium", definition: "Abstaining from sexual misconduct." }),
    N({ id: "precept-4-false-speech", pali: "Musāvādā Veramaṇī", sinhala: "මුසාවාදා වේරමණී", english: "Refrain from False Speech",
      category: "ethics", importance: "medium", definition: "Abstaining from lying and false speech." }),
    N({ id: "precept-5-intoxicants", pali: "Surāmerayamajjapamādaṭṭhānā Veramaṇī", sinhala: "සුරාමේරය මජ්ජපමාදට්ඨානා වේරමණී", english: "Refrain from Intoxicants",
      category: "ethics", importance: "medium", definition: "Abstaining from intoxicants that cloud the mind and lead to heedlessness." }),

    // --- Seven Factors of Enlightenment --------------------------------------------
    N({ id: "seven-factors-enlightenment", pali: "Satta Bojjhaṅga", sinhala: "සප්ත බෝධ්‍යංග", english: "The Seven Factors of Enlightenment",
      category: "meditation", importance: "high", definition: "Seven mental qualities that, when balanced together, lead to awakening.",
      relationships: [
        R("sati", "PART_OF", ""), R("dhammavicaya", "PART_OF", ""), R("viriya", "PART_OF", ""),
        R("piti", "PART_OF", ""), R("passaddhi", "PART_OF", ""), R("samadhi", "PART_OF", ""), R("upekkha", "PART_OF", "")
      ] }),
    N({ id: "sati", pali: "Sati", sinhala: "සතිය", english: "Mindfulness",
      category: "meditation", importance: "essential", definition: "Clear, present-moment awareness of experience as it is.",
      relationships: [ R("satipatthana", "PRACTICED_THROUGH", "Systematically cultivated through the Four Foundations of Mindfulness."), R("five-faculties", "PART_OF", ""), R("five-powers", "PART_OF", "") ] }),
    N({ id: "dhammavicaya", pali: "Dhammavicaya", sinhala: "ධම්මවිචය", english: "Investigation of States",
      category: "meditation", importance: "medium", definition: "Discerning investigation of mental and physical phenomena.",
      relationships: [ R("vicikiccha", "ELIMINATED_BY", "Clear investigation dispels doubt.") ] }),
    N({ id: "viriya", pali: "Viriya", sinhala: "විරිය", english: "Energy / Effort",
      category: "meditation", importance: "high", definition: "Sustained, energetic effort in wholesome practice.",
      relationships: [
        R("right-effort", "SIMILAR_TO", "Energy as a path factor is Right Effort."),
        R("thina-middha", "ELIMINATED_BY", "Energy counters sloth and torpor."),
        R("five-faculties", "PART_OF", ""), R("five-powers", "PART_OF", ""), R("ten-paramis", "PART_OF", "")
      ] }),
    N({ id: "piti", pali: "Pīti", sinhala: "පීති", english: "Rapture",
      category: "meditation", importance: "medium", definition: "Joyful rapture arising from sustained wholesome practice." }),
    N({ id: "passaddhi", pali: "Passaddhi", sinhala: "පස්සද්ධි", english: "Tranquility",
      category: "meditation", importance: "medium", definition: "The calming of body and mind.",
      relationships: [ R("uddhacca-kukkucca", "ELIMINATED_BY", "Tranquility counters restlessness and worry.") ] }),
    N({ id: "samadhi", pali: "Samādhi", sinhala: "සමාධිය", english: "Concentration",
      category: "meditation", importance: "essential", definition: "Unification and one-pointed steadiness of the mind.",
      relationships: [ R("five-faculties", "PART_OF", ""), R("five-powers", "PART_OF", "") ] }),

    // --- Four Foundations of Mindfulness ------------------------------------------
    N({ id: "satipatthana", pali: "Satipaṭṭhāna", sinhala: "සතිපට්ඨානය", english: "The Four Foundations of Mindfulness",
      category: "meditation", importance: "essential", definition: "The four domains — body, feelings, mind, mental objects — in which mindfulness is established.",
      references: ["Satipaṭṭhāna Sutta"],
      relationships: [
        R("kayanupassana", "PART_OF", ""), R("vedananupassana", "PART_OF", ""),
        R("cittanupassana", "PART_OF", ""), R("dhammanupassana", "PART_OF", "")
      ] }),
    N({ id: "kayanupassana", pali: "Kāyānupassanā", sinhala: "කායානුපස්සනා", english: "Contemplation of the Body",
      category: "meditation", importance: "high", definition: "Observing the breath, postures, and parts of the body.",
      relationships: [ R("anapanasati", "PRACTICED_THROUGH", "Mindfulness of breathing is the classic method for this foundation.") ] }),
    N({ id: "vedananupassana", pali: "Vedanānupassanā", sinhala: "වේදනානුපස්සනා", english: "Contemplation of Feelings",
      category: "meditation", importance: "high", definition: "Observing feelings as they arise — pleasant, painful, or neutral." }),
    N({ id: "cittanupassana", pali: "Cittānupassanā", sinhala: "චිත්තානුපස්සනා", english: "Contemplation of the Mind",
      category: "meditation", importance: "high", definition: "Observing the state of mind — with or without greed, hatred, or delusion." }),
    N({ id: "dhammanupassana", pali: "Dhammānupassanā", sinhala: "ධම්මානුපස්සනා", english: "Contemplation of Mind-Objects",
      category: "meditation", importance: "high", definition: "Observing mental phenomena such as the hindrances, aggregates, and the noble truths.",
      relationships: [ R("five-hindrances", "ASSOCIATED_WITH", "The hindrances are one of the objects contemplated here.") ] }),

    // --- Ten Perfections (Pāramī) --------------------------------------------------
    N({ id: "ten-paramis", pali: "Dasa Pāramī", sinhala: "දස පාරමිතාව", english: "The Ten Perfections",
      category: "core", importance: "high", definition: "Ten qualities perfected over the course of the bodhisattva path.",
      relationships: [
        R("dana", "PART_OF", ""), R("sila", "PART_OF", ""), R("nekkhamma", "PART_OF", ""), R("panna", "PART_OF", ""),
        R("viriya", "PART_OF", ""), R("khanti", "PART_OF", ""), R("sacca", "PART_OF", ""), R("adhitthana", "PART_OF", ""),
        R("metta", "PART_OF", ""), R("upekkha", "PART_OF", "")
      ] }),
    N({ id: "dana", pali: "Dāna", sinhala: "දාන", english: "Generosity",
      category: "ethics", importance: "high", definition: "Unstinting giving, freely offered." }),
    N({ id: "sila", pali: "Sīla", sinhala: "සීල", english: "Morality",
      category: "ethics", importance: "essential", definition: "Ethical conduct that avoids harm to oneself and others.",
      relationships: [ R("five-precepts", "EXPLAINS", "The Five Precepts are the lay expression of sīla.") ] }),
    N({ id: "nekkhamma", pali: "Nekkhamma", sinhala: "නෙක්ඛම්ම", english: "Renunciation",
      category: "meditation", importance: "medium", definition: "Renunciation of sensual indulgence and worldly attachment." }),
    N({ id: "panna", pali: "Paññā", sinhala: "ප්‍රඥාව", english: "Wisdom",
      category: "core", importance: "essential", definition: "Discerning wisdom that sees reality as it truly is.",
      relationships: [ R("vipassana", "PRACTICED_THROUGH", "Insight meditation directly cultivates wisdom."), R("five-faculties", "PART_OF", ""), R("five-powers", "PART_OF", "") ] }),
    N({ id: "khanti", pali: "Khantī", sinhala: "ක්ෂාන්ති", english: "Patience",
      category: "ethics", importance: "medium", definition: "Forbearance in the face of hardship and provocation.",
      lifeKeywords: ["patience", "impatient", "impatience", "how to be patient"] }),
    N({ id: "sacca", pali: "Sacca", sinhala: "සත්‍ය", english: "Truthfulness",
      category: "ethics", importance: "medium", definition: "Steadfast commitment to truth in word and deed." }),
    N({ id: "adhitthana", pali: "Adhiṭṭhāna", sinhala: "අධිෂ්ඨාන", english: "Determination",
      category: "core", importance: "medium", definition: "Firm, unwavering resolve to complete what has been undertaken." }),

    // --- Five Hindrances -------------------------------------------------------------
    N({ id: "five-hindrances", pali: "Pañca Nīvaraṇāni", sinhala: "පංච නීවරණ", english: "The Five Hindrances",
      category: "defilements", importance: "high", definition: "Five mental states that obstruct concentration and clear seeing.",
      relationships: [
        R("kamacchanda", "PART_OF", ""), R("byapada", "PART_OF", ""), R("thina-middha", "PART_OF", ""),
        R("uddhacca-kukkucca", "PART_OF", ""), R("vicikiccha", "PART_OF", "")
      ] }),
    N({ id: "kamacchanda", pali: "Kāmacchanda", sinhala: "කාමච්ඡන්ද", english: "Sensual Desire",
      category: "defilements", importance: "medium", definition: "Longing for sensual pleasure that pulls attention outward.",
      lifeKeywords: ["craving something", "temptation", "tempted", "can't stop wanting"],
      relationships: [ R("nekkhamma", "ELIMINATED_BY", "Renunciation directly counters sensual desire.") ] }),
    N({ id: "byapada", pali: "Byāpāda", sinhala: "ව්‍යාපාද", english: "Ill-will",
      category: "defilements", importance: "medium", definition: "Aversion, irritation, or hatred arising in the mind.",
      lifeKeywords: ["resentment", "resentful", "grudge"],
      relationships: [ R("metta", "ELIMINATED_BY", "Loving-kindness is the classic antidote to ill-will.") ] }),
    N({ id: "thina-middha", pali: "Thīna-middha", sinhala: "ථීන-මිද්ධ", english: "Sloth and Torpor",
      category: "defilements", importance: "medium", definition: "Dullness and heaviness of mind and body.",
      lifeKeywords: ["tired", "exhausted", "lazy", "laziness", "lethargic", "sluggish", "unmotivated", "no energy", "මැලිකම", "අලසකම"],
      relationships: [ R("viriya", "ELIMINATED_BY", "Energetic effort revives a dull mind."), R("piti", "ELIMINATED_BY", "Rapture lifts a heavy mind.") ] }),
    N({ id: "uddhacca-kukkucca", pali: "Uddhacca-kukkucca", sinhala: "උද්ධච්ච-කුක්කුච්ච", english: "Restlessness and Worry",
      category: "defilements", importance: "medium", definition: "An agitated, scattered mind troubled by remorse.",
      lifeKeywords: ["stress", "stressed", "anxiety", "anxious", "overwhelmed", "restless", "restlessness", "worry", "worried", "can't relax", "නොසන්සුන්කම", "කනස්සල්ල", "ආතතිය"],
      relationships: [ R("passaddhi", "ELIMINATED_BY", "Tranquility settles a restless mind."), R("anapanasati", "ELIMINATED_BY", "Mindfulness of breathing calms a stressed, scattered mind.") ] }),
    N({ id: "vicikiccha", pali: "Vicikicchā", sinhala: "විචිකිච්ඡාව", english: "Doubt",
      category: "defilements", importance: "medium", definition: "Uncertainty or skepticism that prevents settled confidence in practice.",
      lifeKeywords: ["doubt", "unsure", "uncertain", "indecisive", "can't decide"],
      relationships: [ R("dhammavicaya", "ELIMINATED_BY", "Investigation of states resolves doubt.") ] }),

    // --- Five Faculties & Five Powers (same 5 qualities, two roles) ---------------
    N({ id: "five-faculties", pali: "Pañcindriya", sinhala: "පංච ඉන්ද්‍රිය", english: "The Five Spiritual Faculties",
      category: "core", importance: "medium", definition: "Five governing mental qualities that must be balanced in practice: faith, energy, mindfulness, concentration, wisdom.",
      relationships: [ R("saddha", "PART_OF", ""), R("viriya", "PART_OF", ""), R("sati", "PART_OF", ""), R("samadhi", "PART_OF", ""), R("panna", "PART_OF", ""), R("five-powers", "SIMILAR_TO", "The same five qualities, matured into unshakeable powers.") ] }),
    N({ id: "saddha", pali: "Saddhā", sinhala: "සද්ධාව", english: "Faith / Confidence",
      category: "core", importance: "medium", definition: "Confident trust in the Buddha, Dhamma, and Saṅgha, and in the efficacy of practice." }),
    N({ id: "five-powers", pali: "Pañca Bala", sinhala: "පංච බල", english: "The Five Powers",
      category: "core", importance: "medium", definition: "The same five faculties, matured to the point where they can no longer be shaken by their opposites.",
      relationships: [ R("saddha", "PART_OF", ""), R("viriya", "PART_OF", ""), R("sati", "PART_OF", ""), R("samadhi", "PART_OF", ""), R("panna", "PART_OF", "") ] }),

    // --- Four Right Efforts ------------------------------------------------------------
    N({ id: "four-right-efforts", pali: "Sammappadhāna", sinhala: "සතර සම්‍යක් ප්‍රධාන", english: "The Four Right Efforts",
      category: "meditation", importance: "medium", definition: "The four-fold effort to prevent, abandon, develop, and maintain mental states.",
      relationships: [ R("effort-prevent", "PART_OF", ""), R("effort-abandon", "PART_OF", ""), R("effort-develop", "PART_OF", ""), R("effort-maintain", "PART_OF", ""), R("right-effort", "SIMILAR_TO", "This is the detailed content of the Right Effort path factor.") ] }),
    N({ id: "effort-prevent", pali: "Saṃvarappadhāna", sinhala: "සංවර ප්‍රධාන", english: "Preventing Unarisen Unwholesome States",
      category: "meditation", importance: "supporting", definition: "Guarding the senses so unwholesome states do not arise." }),
    N({ id: "effort-abandon", pali: "Pahānappadhāna", sinhala: "ප්‍රහාණ ප්‍රධාන", english: "Abandoning Arisen Unwholesome States",
      category: "meditation", importance: "supporting", definition: "Letting go of unwholesome states that have already arisen." }),
    N({ id: "effort-develop", pali: "Bhāvanāppadhāna", sinhala: "භාවනා ප්‍රධාන", english: "Developing Unarisen Wholesome States",
      category: "meditation", importance: "supporting", definition: "Cultivating wholesome states not yet present." }),
    N({ id: "effort-maintain", pali: "Anurakkhaṇāppadhāna", sinhala: "අනුරක්ඛණ ප්‍රධාන", english: "Maintaining Arisen Wholesome States",
      category: "meditation", importance: "supporting", definition: "Sustaining and perfecting wholesome states already present." }),

    // --- Four Bases of Spiritual Power (Iddhipāda) -----------------------------------
    N({ id: "four-iddhipada", pali: "Cattāro Iddhipādā", sinhala: "සතර ඍද්ධිපාද", english: "The Four Bases of Spiritual Power",
      category: "meditation", importance: "medium", definition: "Four qualities — desire, energy, mind, investigation — that serve as the basis for spiritual accomplishment.",
      relationships: [ R("chanda-iddhipada", "PART_OF", ""), R("citta-base", "PART_OF", ""), R("viriya", "PART_OF", ""), R("vimamsa", "PART_OF", "") ] }),
    N({ id: "chanda-iddhipada", pali: "Chanda", sinhala: "ඡන්ද", english: "Desire / Will",
      category: "meditation", importance: "supporting", definition: "Wholesome motivation and will to accomplish the practice." }),
    N({ id: "citta-base", pali: "Citta", sinhala: "චිත්ත (ඍද්ධිපාදය)", english: "Mind / Determination",
      category: "meditation", importance: "supporting", definition: "Wholehearted commitment and application of mind to the task.",
      relationships: [ R("citta", "ASSOCIATED_WITH", "Shares its name with, but is distinct from, the Abhidhamma concept of citta.") ] }),
    N({ id: "vimamsa", pali: "Vīmaṃsā", sinhala: "විමංසා", english: "Investigation",
      category: "meditation", importance: "supporting", definition: "Reflective examination and refinement of one's own practice.",
      relationships: [ R("dhammavicaya", "SIMILAR_TO", "Both are forms of investigative discernment.") ] }),

    // --- Meditation methods ------------------------------------------------------------
    N({ id: "meditation-methods", pali: "Bhāvanā", sinhala: "භාවනා", english: "Meditation",
      category: "meditation", importance: "essential", definition: "Mental cultivation — the practices through which the path is directly developed.",
      lifeKeywords: ["meditation", "meditate", "how to meditate", "calm my mind", "relax", "how to relax"],
      relationships: [ R("samatha", "PART_OF", ""), R("vipassana", "PART_OF", ""), R("anapanasati", "PART_OF", ""), R("metta-bhavana", "PART_OF", "") ] }),
    N({ id: "samatha", pali: "Samatha", sinhala: "සමථ", english: "Calm (Tranquility) Meditation",
      category: "meditation", importance: "high", definition: "Meditation aimed at calming and unifying the mind into deep concentration.",
      relationships: [ R("samadhi", "RESULTS_IN", "Samatha practice cultivates and results in samādhi.") ] }),
    N({ id: "vipassana", pali: "Vipassanā", sinhala: "විපස්සනා", english: "Insight Meditation",
      category: "meditation", importance: "high", definition: "Meditation aimed at directly seeing the three characteristics of existence.",
      relationships: [ R("three-characteristics", "PRACTICED_THROUGH", ""), R("panna", "RESULTS_IN", "Insight practice matures into liberating wisdom.") ] }),
    N({ id: "anapanasati", pali: "Ānāpānasati", sinhala: "ආනාපානසති", english: "Mindfulness of Breathing",
      category: "meditation", importance: "high", definition: "A core samatha and satipatthāna practice using the breath as the object of attention.",
      references: ["Ānāpānasati Sutta"] }),
    N({ id: "metta-bhavana", pali: "Mettā-bhāvanā", sinhala: "මෙත්තා භාවනා", english: "Loving-kindness Meditation",
      category: "meditation", importance: "high", definition: "The systematic cultivation of loving-kindness toward oneself and all beings." }),

    // --- Abhidhamma hub -----------------------------------------------------------------
    N({ id: "abhidhamma-hub", pali: "Citta-Cetasika", sinhala: "චිත්ත-චෛතසික ක්‍රමය", english: "The Citta–Cetasika System",
      category: "abhidhamma", importance: "high", definition: "The Abhidhamma's systematic classification of mind-moments (citta) and the mental factors (cetasika) that accompany them.",
      relationships: [ R("citta", "PART_OF", ""), R("cetasika", "PART_OF", ""), R("rupa", "ASSOCIATED_WITH", "Matter is the third major category alongside mind and mental factors.") ] }),
    N({ id: "citta", pali: "Citta", sinhala: "චිත්තය", english: "Mind / Consciousness Moment",
      category: "abhidhamma", importance: "high", definition: "A single moment of consciousness, classified in the Abhidhamma into 121 types by ethical quality and sphere.",
      relationships: [ R("cetasika", "ASSOCIATED_WITH", "Every citta arises together with a specific set of cetasikas.") ] }),
    N({ id: "cetasika", pali: "Cetasika", sinhala: "චෛතසිකය", english: "Mental Factor",
      category: "abhidhamma", importance: "high", definition: "A mental factor that arises together with citta, coloring and shaping each moment of experience — 52 in total.",
      relationships: [ R("sankhara", "CLASSIFIED_UNDER", "Cetasikas are the detailed Abhidhamma analysis of the formations aggregate.") ] })
  ];

  global.DhammaGraphData = {
    nodes: nodes,
    CATEGORY_COLORS: CATEGORY_COLORS,
    reverseTypeLabels: REVERSE_TYPE_LABELS
  };
})(window);
