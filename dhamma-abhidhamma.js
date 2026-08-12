/* ============================================================================
   dhamma-abhidhamma.js — Sith89's own curated Dhamma knowledge, wired into the
   Dhamma Assistant chat so it can answer instantly and with zero hallucination
   risk for anything already in the site's Abhidhamma dataset (121 cittas / 52
   cetasikas) or in a small library of well-known enumerated teachings (Four
   Noble Truths, Noble Eightfold Path, etc).

   This never calls the LLM — it's pure local lookup over data already on the
   site (abhidhamma-complete-data.json, chaithasika-data.js), used as tier 0
   of the assistant's answer pipeline (see dhamma-assistant.html).
   ========================================================================== */
(function (global) {
  "use strict";

  // --- 1. Cetasika key map ----------------------------------------------------
  // abhidhamma-complete-data.json stores each citta's mental factors as a
  // { "<sinhala name>": true|false } map. chaithasika-data.js (window.chaithasikaData)
  // has richer bilingual descriptions keyed by a short id. The Sinhala spelling
  // used for the same factor differs slightly between the two files (suffix
  // variants, one typo), so instead of fuzzy string matching we pair them up
  // explicitly, once, by meaning — this is the authoritative bridge between the
  // two datasets.
  var CETASIKA_KEY_MAP = [
    ["ඵස්ස", "phassa"], ["වේදනා", "vedana"], ["සංඤ්ඤා", "sanna"], ["චේතනා", "cetana"],
    ["ඒකග්ගතා", "ekaggata"], ["ජීවිතින්ද්‍රිය", "jivitindriya"], ["මනසිකාර", "manasikara"],
    ["විතක්ක", "vitakka"], ["විචාර", "vicara"], ["අධිමොක්ඛ", "adhimokkha"], ["විරිය", "viriya"],
    ["පීති", "piti"], ["ඡන්ද", "chanda"],
    ["මෝහ", "moha"], ["අහිරික", "ahirika"], ["අනොත්තප්ප", "anottappa"], ["උද්ධච්ච", "uddhacca"],
    ["ලෝභ", "lobha"], ["දිට්ඨි", "ditthi"], ["මාන", "mana"], ["දෝස", "dosa"], ["ඉස්සාව", "issa"],
    ["මච්ඡරිය", "macchariya"], ["කුක්කුච්ච", "kukkucca"], ["ථීන", "thina"], ["මිද්ධ", "middha"],
    ["විචිකිච්ඡාව", "vicikiccha"],
    ["සද්ධාව", "saddha"], ["සතිය", "sati"], ["හිරිය", "hiri"], ["ඔත්තප්පය", "ottappa"],
    ["අලෝභය", "alobha"], ["අදෝසය(මෛත්‍රිය)", "adosa"], ["තත්‍රමජ්ඣත්තථාව", "tatramajjhattata"],
    ["කායපස්සද්ධිය", "kayapassaddhi"], ["චිත්තපස්සද්ධිය", "cittapassaddhi"],
    ["කායලහුතාව", "kayalahuta"], ["චිත්තලහුතාව", "cittalahuta"],
    ["කායමුදුතාව", "kayamuduta"], ["චිත්තමුදුතාව", "cittamuduta"],
    ["කායකම්මඤ්ඤතාව", "kayakammannata"], ["චිත්තකම්මඤ්ඤතාව", "cittakammannata"],
    ["කායපාගුඤ්ඤතාව", "kayapagunnata"], ["චිත්තපාගුඤ්ඤතාව", "cittapagunnata"],
    ["කායුජ්ජුග්ගතාව", "kayaujukata"], ["චිත්තුජ්ජුග්ගතාව", "cittaujukata"],
    ["සම්මා වාචාව", "sammaVaca"], ["සම්මා කම්මන්තය", "sammaKammanta"], ["සම්මා ආජීවය", "sammaAjiva"],
    ["කරුණාව", "karuna"], ["මුදිතාව", "mudita"],
    ["ප්‍රඥාව (අමෝහය)", "panna"]
  ];

  // --- 2. Known-teaching library ----------------------------------------------
  // Stable, canonical Buddhist enumerations. Hardcoded (not LLM-generated)
  // because they never change and users ask about them constantly — this gives
  // an instant, exact visual breakdown instead of relying on the model.
  function T(titleSi, titleEn, introSi, introEn, parts) {
    return { titleSi: titleSi, titleEn: titleEn, introSi: introSi, introEn: introEn, parts: parts };
  }
  function P(titleSi, titleEn, sub, textSi, textEn) {
    return { titleSi: titleSi, titleEn: titleEn, sub: sub, textSi: textSi, textEn: textEn };
  }

  var TEACHINGS = [
    {
      keys: ["චතුරාර්යසත්‍ය", "සතරආර්යසත්‍ය", "ආර්යසත්‍යසතර", "චතුසච්ච", "fournobletruth", "4nobletruth", "noblefourtruth"],
      t: T("චතුරාර්ය සත්‍ය", "The Four Noble Truths",
        "බුදුරජාණන් වහන්සේගේ පළමු දේශනාවේම මූලික සත්‍ය හතර.",
        "The foundational four truths taught in the Buddha's first sermon.",
        [
          P("දුක්ඛ සත්‍ය", "Dukkha", "Suffering", "ජීවිතයේ ඇති දුක, අතෘප්තිය, පීඩනය පිළිබඳ සත්‍යය.", "The truth that life is marked by suffering and unsatisfactoriness."),
          P("සමුදය සත්‍ය", "Samudaya", "Origin", "දුකට හේතුව — තණ්හාව (ආශාව, ඇලීම).", "The truth of the cause of suffering — craving (taṇhā)."),
          P("නිරෝධ සත්‍ය", "Nirodha", "Cessation", "තණ්හාව සම්පූර්ණයෙන් නිරුද්ධ කිරීමෙන් දුක නැති කළ හැකි බව.", "The truth that suffering can end through the complete cessation of craving."),
          P("මාර්ග සත්‍ය", "Magga", "Path", "දුක නැති කිරීමේ මාර්ගය — ආර්ය අෂ්ටාංගික මාර්ගය.", "The truth of the path leading to that cessation — the Noble Eightfold Path.")
        ])
    },
    {
      keys: ["ආර්යඅෂ්ටාංගිකමාර්ග", "අෂ්ටාංගිකමාර්ග", "eightfoldpath", "noble8fold", "ariyaatthangikamagga", "8foldpath"],
      t: T("ආර්ය අෂ්ටාංගික මාර්ගය", "The Noble Eightfold Path",
        "දුක නැති කිරීමට යොමු කරන අංග අටකින් යුත් මාර්ගය — ශීල, සමාධි, ප්‍රඥා ලෙස කාණ්ඩ තුනකට බෙදේ.",
        "The eight-factor path to the end of suffering, grouped into ethics, concentration, and wisdom.",
        [
          P("සම්මා දිට්ඨි", "Right View", "Paññā · Wisdom", "සතරආර්ය සත්‍ය නිවැරදිව තේරුම් ගැනීම.", "Understanding the Four Noble Truths correctly."),
          P("සම්මා සංකප්ප", "Right Intention", "Paññā · Wisdom", "කාමය, ද්වේෂය, හිංසාව අත්හැරි සිතුවිලි.", "Thoughts free of craving, ill-will, and cruelty."),
          P("සම්මා වාචා", "Right Speech", "Sīla · Ethics", "බොරු, කේළාම්, රළු වචන, හිස් වචනවලින් වැළකීම.", "Abstaining from lying, divisive, harsh, and idle speech."),
          P("සම්මා කම්මන්ත", "Right Action", "Sīla · Ethics", "ප්‍රාණඝාතය, සොරකම, කාමමිථ්‍යාචාරයෙන් වැළකීම.", "Abstaining from killing, stealing, and sexual misconduct."),
          P("සම්මා ආජීව", "Right Livelihood", "Sīla · Ethics", "අන් සතුන්ට හානි නොකරන ජීවනෝපායක් තෝරාගැනීම.", "Earning a living in a way that causes no harm."),
          P("සම්මා වායාම", "Right Effort", "Samādhi · Concentration", "අකුසල් වළක්වා, කුසල් වඩන අඛණ්ඩ උත්සාහය.", "Sustained effort to prevent and abandon unwholesome states and cultivate wholesome ones."),
          P("සම්මා සති", "Right Mindfulness", "Samādhi · Concentration", "කය, වේදනා, සිත, ධර්ම පිළිබඳ සිහිකල්පනාව.", "Mindfulness of body, feelings, mind, and mental objects."),
          P("සම්මා සමාධි", "Right Concentration", "Samādhi · Concentration", "ධ්‍යාන මගින් සිත එකඟ කිරීම.", "Unifying the mind through jhāna.")
        ])
    },
    {
      keys: ["පංචස්කන්ධ", "පඤ්චස්කන්ධ", "pancakhandha", "fiveaggregate", "5aggregate", "skandha"],
      t: T("පංච ස්කන්ධය", "The Five Aggregates",
        "\"පුද්ගලයා\" ලෙස හැඳින්වෙන දෙය විග්‍රහ කළ විට හමුවන කාණ්ඩ පහ.",
        "The five components into which what we call a \"person\" can be analysed.",
        [
          P("රූප", "Form", "Rūpa", "ශරීරය හා භෞතික ලෝකය.", "The physical body and material phenomena."),
          P("වේදනා", "Feeling", "Vedanā", "සුඛ, දුක්, උපේක්ෂා අත්දැකීම.", "Pleasant, painful, or neutral felt experience."),
          P("සංඥා", "Perception", "Saññā", "වස්තුව හඳුනාගැනීම, ලකුණු කිරීම.", "Recognition and labeling of an object."),
          P("සංස්කාර", "Mental formations", "Saṅkhāra", "චේතනාව ඇතුළු මානසික සකස්කිරීම්.", "Volitional and other mental constructions, including intention."),
          P("විඤ්ඤාණ", "Consciousness", "Viññāṇa", "අරමුණ දැනගැනීමේ මූලික සිත.", "Bare awareness/cognizance of an object.")
        ])
    },
    {
      keys: ["ත්‍රිලක්ෂණ", "තිලකඛණ", "tilakkhana", "threecharacteristic", "3characteristic"],
      t: T("ත්‍රිලක්ෂණය", "The Three Characteristics",
        "සියලු සංස්කාරයන්ට පොදු ලක්ෂණ තුන.",
        "Three marks shared by all conditioned phenomena.",
        [
          P("අනිච්ච", "Impermanence", "Anicca", "සියල්ල නිරන්තරයෙන් වෙනස් වේ, ස්ථිර නොවේ.", "All conditioned things are constantly changing."),
          P("දුක්ඛ", "Unsatisfactoriness", "Dukkha", "අනිත්‍ය දෙයට ඇලුනොත් අවසානයේ දුක ගෙනෙයි.", "Clinging to the impermanent inevitably brings suffering."),
          P("අනත්ත", "Non-self", "Anattā", "\"මම\" හෝ \"මගේ\" ලෙස ස්ථිර ආත්මයක් නොමැත.", "There is no fixed, unchanging self to be found.")
        ])
    },
    {
      keys: ["බ්‍රහ්මවිහරණ", "සතරබ්‍රහ්මවිහාර", "brahmavihara", "fourdivineabode", "4divineabode"],
      t: T("සතර බ්‍රහ්ම විහරණය", "The Four Brahmavihāras",
        "සීමාරහිතව සියලු සත්වයන් වෙත වඩන සිත් සතර.",
        "Four boundless mental states to be cultivated toward all beings.",
        [
          P("මෙත්තා", "Loving-kindness", "Mettā", "සියලු සත්වයන් සුවපත් වේවා යන කැමැත්ත.", "The wish for all beings to be happy and well."),
          P("කරුණා", "Compassion", "Karuṇā", "දුකින් පෙළෙන සත්වයන් දුකින් මිදේවා යන සිත.", "The wish for beings to be free from suffering."),
          P("මුදිතා", "Sympathetic joy", "Muditā", "අන් සත්වයන්ගේ සාර්ථකත්වයේ සතුටු වීම.", "Rejoicing in the happiness and success of others."),
          P("උපේක්ඛා", "Equanimity", "Upekkhā", "ලාභ අලාභ, ප්‍රශංසා නින්දා අතර සමබරව සිටීම.", "Remaining balanced amid gain and loss, praise and blame.")
        ])
    },
    {
      keys: ["පංචශීල", "පන්සිල්", "fiveprecept", "5precept"],
      t: T("පංචශීලය", "The Five Precepts",
        "සාමාන්‍ය ගිහි ජීවිතයට මූලික සදාචාර පදනම.",
        "The basic ethical foundation for lay life.",
        [
          P("පාණාතිපාතා වේරමණී", "Refrain from killing", "1st precept", "ප්‍රාණඝාතයෙන් වැළකීම.", "Abstaining from taking life."),
          P("අදින්නාදානා වේරමණී", "Refrain from stealing", "2nd precept", "නුදුන් දෙය ගැනීමෙන් වැළකීම.", "Abstaining from taking what is not given."),
          P("කාමේසුමිච්ඡාචාරා වේරමණී", "Refrain from sexual misconduct", "3rd precept", "කාම මිථ්‍යාචාරයෙන් වැළකීම.", "Abstaining from sexual misconduct."),
          P("මුසාවාදා වේරමණී", "Refrain from false speech", "4th precept", "බොරු කීමෙන් වැළකීම.", "Abstaining from false speech."),
          P("සුරාමේරය මජ්ජපමාදට්ඨානා වේරමණී", "Refrain from intoxicants", "5th precept", "මත්පැන් හා මත්ද්‍රව්‍යවලින් වැළකීම.", "Abstaining from intoxicants that cloud the mind.")
        ])
    },
    {
      keys: ["සප්තබෝධ්‍යංග", "බෝජ්ඣංග", "bojjhanga", "sevenfactorofenlightenment", "7factorofenlightenment"],
      t: T("සප්ත බෝධ්‍යංග", "The Seven Factors of Enlightenment",
        "බුද්ධත්වයට හේතු වන මානසික අංග හතක්.",
        "Seven mental qualities that lead to awakening.",
        [
          P("සති", "Mindfulness", "Sati", "වර්තමාන අත්දැකීම පිළිබඳ පැහැදිලි සිහිය.", "Clear present-moment awareness."),
          P("ධම්මවිචය", "Investigation of states", "Dhammavicaya", "අත්දැකීම විමසිලිමත්ව පරීක්ෂා කිරීම.", "Discerning investigation of phenomena."),
          P("විරිය", "Energy", "Viriya", "පුරුදු කිරීමට ඇති අඛණ්ඩ උත්සාහය.", "Sustained energetic effort."),
          P("පීති", "Rapture", "Pīti", "පුහුණුවෙන් උපදින ප්‍රීතිය.", "Joyful rapture arising from practice."),
          P("පස්සද්ධි", "Tranquility", "Passaddhi", "කය හා සිත සන්සුන් වීම.", "Calming of body and mind."),
          P("සමාධි", "Concentration", "Samādhi", "සිත එකඟවීම.", "Unification and steadiness of mind."),
          P("උපේක්ඛා", "Equanimity", "Upekkhā", "සමබරව නිරීක්ෂණය කිරීම.", "Balanced, even-minded observation.")
        ])
    },
    {
      keys: ["සතරසතිපට්ඨාන", "සතිපට්ඨාන", "satipatthana", "foundationofmindfulness", "4foundationofmindfulness"],
      t: T("සතර සතිපට්ඨානය", "The Four Foundations of Mindfulness",
        "සිහිය පිහිටුවීමේ මූලික ක්ෂේත්‍ර හතර.",
        "The four domains in which mindfulness is established.",
        [
          P("කායානුපස්සනා", "Contemplation of the body", "Kāya", "ආශ්වාස ප්‍රශ්වාස, ඉරියව්, ශරීර අවයව නිරීක්ෂණය.", "Observing breath, postures, and parts of the body."),
          P("වේදනානුපස්සනා", "Contemplation of feelings", "Vedanā", "සුඛ දුක් උපේක්ෂා වේදනා මතුවෙන ලෙස දැකීම.", "Observing feelings as they arise — pleasant, painful, neutral."),
          P("චිත්තානුපස්සනා", "Contemplation of the mind", "Citta", "සිතේ තත්ත්වය (රාග, ද්වේෂ, මෝහ ආදිය) නිරීක්ෂණය.", "Observing the state of mind — with or without greed, hatred, delusion."),
          P("ධම්මානුපස්සනා", "Contemplation of mind-objects", "Dhamma", "නීවරණ, ස්කන්ධ, ආර්ය සත්‍ය වැනි ධර්ම නිරීක්ෂණය.", "Observing mental phenomena such as hindrances, aggregates, the noble truths.")
        ])
    },
    {
      keys: ["පටිච්චසමුප්පාද", "paticcasamuppada", "dependentorigination", "12links", "12nidana", "12link"],
      t: T("පටිච්ච සමුප්පාදය", "Dependent Origination",
        "දුක ඇතිවීම හා නැතිවීම පැහැදිලි කරන හේතුඵල සබැඳි 12ක් — එකක් අනෙකට හේතු වේ.",
        "The chain of twelve causally-linked factors that explains how suffering arises and ceases.",
        [
          P("අවිද්‍යා", "Ignorance", "1", "සත්‍යය නොදැනීම.", "Not knowing the Four Noble Truths."),
          P("සංස්කාර", "Volitional formations", "2", "අවිද්‍යාවෙන් හටගන්නා කර්ම සකස්කිරීම්.", "Kammic formations conditioned by ignorance."),
          P("විඤ්ඤාණ", "Consciousness", "3", "පුනර්භවයට තුඩුදෙන විඤ්ඤාණය.", "Rebirth-linking consciousness."),
          P("නාමරූප", "Mind-and-body", "4", "මානසික හා භෞතික සංයෝගය.", "The psycho-physical organism."),
          P("සළායතන", "Six sense bases", "5", "ඇස්, කන්, නාසය, දිව, කය, මන යන ආයතන.", "Eye, ear, nose, tongue, body, mind."),
          P("ස්පර්ශ", "Contact", "6", "ඉන්ද්‍රිය, අරමුණ, විඤ්ඤාණය එකතුවීම.", "The meeting of sense base, object, and consciousness."),
          P("වේදනා", "Feeling", "7", "ස්පර්ශයෙන් හටගන්නා අනුභූතිය.", "Feeling arising from contact."),
          P("තණ්හා", "Craving", "8", "වේදනාවට ඇති ඇල්ම.", "Craving for the felt experience."),
          P("උපාදාන", "Clinging", "9", "තණ්හාව තව තදවීම.", "Intensified craving that grasps."),
          P("භව", "Becoming", "10", "නැවත භවයකට තුඩුදෙන කර්ම ක්‍රියාව.", "The process of becoming that leads to rebirth."),
          P("ජාති", "Birth", "11", "නව භවයක උපත.", "Birth into a new existence."),
          P("ජරාමරණ", "Aging and death", "12", "ජරාව, මරණය, ශෝකය.", "Aging, death, and the sorrow that follows.")
        ])
    },
    {
      keys: ["අකුසලමූල", "කුසලමූල", "මූලත්‍රය", "unwholesomeroot", "wholesomeroot", "sixroot", "3root"],
      t: T("අකුසල් මූල හා කුසල් මූල", "The Unwholesome and Wholesome Roots",
        "සියලු අකුසල් හෝ කුසල් සිත් හටගන්නේ මේ මූල හයෙන් එකක් හෝ කිහිපයක් සමඟය.",
        "Every unwholesome or wholesome mind-state is rooted in one or more of these six roots.",
        [
          P("ලෝභ", "Greed", "Akusala root", "ඇලීම, ග්‍රහණය කරගැනීම.", "Attachment and grasping."),
          P("දෝස", "Hatred", "Akusala root", "අකමැත්ත, කෝපය.", "Aversion and ill-will."),
          P("මෝහ", "Delusion", "Akusala root", "සත්‍යය නොදැනීම.", "Fundamental ignorance."),
          P("අලෝභ", "Non-greed", "Kusala root", "දානශීලී, ඇලීමෙන් තොර සිත.", "Generosity, non-attachment."),
          P("අදෝස", "Non-hatred", "Kusala root", "මෙත්‍රී සහගත සිත.", "Loving-kindness, goodwill."),
          P("අමෝහ (ප්‍රඥා)", "Non-delusion (Wisdom)", "Kusala root", "යථාර්ථය දැකීම.", "Wisdom that sees things as they are.")
        ])
    },
    {
      keys: ["දසපාරමිතා", "paramita", "tenperfection", "10perfection", "paramī"],
      t: T("දස පාරමිතාව", "The Ten Perfections",
        "බෝසත් චරියාවේදී පුරන පරිපූර්ණතා දහය.",
        "The ten qualities perfected over the bodhisattva path.",
        [
          P("දාන", "Generosity", "Dāna", "නොපසුබට සිතින් දීම.", "Unstinting giving."),
          P("සීල", "Morality", "Sīla", "සදාචාරාත්මක හැසිරීම.", "Ethical conduct."),
          P("නෙක්ඛම්ම", "Renunciation", "Nekkhamma", "කාමයෙන් හා ගිහි ජීවිතයෙන් ඈත්වීම.", "Renunciation of sensual life."),
          P("ප්‍රඥා", "Wisdom", "Paññā", "යථාර්ථය දකින නුවණ.", "Discerning wisdom."),
          P("විරිය", "Energy", "Viriya", "අඛණ්ඩ උත්සාහය.", "Persistent effort."),
          P("ක්ෂාන්ති", "Patience", "Khantī", "දුක් ගැහැට ඉවසීම.", "Forbearance and patience."),
          P("සත්‍ය", "Truthfulness", "Sacca", "සත්‍යයට කැපවීම.", "Commitment to truth."),
          P("අධිෂ්ඨාන", "Determination", "Adhiṭṭhāna", "ස්ථිර අධිෂ්ඨානය.", "Firm resolve."),
          P("මෙත්තා", "Loving-kindness", "Mettā", "සියලු සත්වයන් කෙරෙහි මෛත්‍රිය.", "Loving-kindness toward all beings."),
          P("උපේක්ඛා", "Equanimity", "Upekkhā", "සමබරව සිටීම.", "Even-minded equanimity.")
        ])
    }
  ];

  // --- 3. Runtime state (populated by init) -----------------------------------
  var abhidhamma = null;          // { cittas: [...] } from abhidhamma-complete-data.json
  var cetasikaByKey = {};         // canonical boolean-map key -> merged chaithasika-data.js record
  var cetasikaOrder = [];         // canonical keys, in a stable display order

  function normalize(s) {
    return (s || "").toString().toLowerCase().replace(/\s+/g, "");
  }

  function init(abhidhammaJson) {
    abhidhamma = abhidhammaJson;
    var byId = {};
    (global.chaithasikaData || []).forEach(function (c) { byId[c.id] = c; });
    CETASIKA_KEY_MAP.forEach(function (pair) {
      var key = pair[0], rec = byId[pair[1]];
      if (rec) { cetasikaByKey[key] = rec; cetasikaOrder.push(key); }
    });
  }

  function ready() { return !!abhidhamma; }

  // --- 4. Citta <-> cetasika breakdown -----------------------------------------
  function cittaParts(citta, en) {
    var parts = [];
    cetasikaOrder.forEach(function (key) {
      if (citta.cetasikas && citta.cetasikas[key]) {
        var c = cetasikaByKey[key];
        parts.push({
          title: en ? (c.nameEn || c.nameSi) : c.nameSi,
          sub: en ? c.nameSi : (c.nameEn || ""),
          text: en ? (c.summaryEn || "") : (c.summarySi || "")
        });
      }
    });
    return parts;
  }

  // --- 5. Matching -------------------------------------------------------------
  function findTeaching(q) {
    var nq = normalize(q);
    for (var i = 0; i < TEACHINGS.length; i++) {
      var keys = TEACHINGS[i].keys;
      for (var j = 0; j < keys.length; j++) {
        if (nq.indexOf(keys[j]) > -1) return TEACHINGS[i].t;
      }
    }
    return null;
  }

  function findCetasikas(q) {
    var toks = (q || "").split(/\s+/).filter(function (t) { return t.length > 1; });
    var nq = normalize(q);
    var list = global.chaithasikaData || [];
    var scored = list.map(function (c) {
      var hay = normalize([c.nameSi, c.nameEn, c.summarySi, c.summaryEn].join(" "));
      var score = 0;
      toks.forEach(function (tk) {
        var nt = normalize(tk);
        if (nt.length > 1 && hay.indexOf(nt) > -1) score += nt.length >= 3 ? 3 : 1;
      });
      if (normalize(c.nameSi) === nq || normalize(c.nameEn) === nq) score += 20;
      return { score: score, item: c };
    }).filter(function (p) { return p.score > 0; });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored;
  }

  function findCittas(q) {
    if (!abhidhamma) return { byId: false, results: [] };
    var m = (q || "").match(/(?:citta|chitta|සිත|චිත්ත(?:ය)?)\s*[-:#]?\s*(\d{1,3})/i);
    if (m) {
      var id = parseInt(m[1], 10);
      var hit = (abhidhamma.cittas || []).filter(function (c) { return c.id === id; });
      if (hit.length) return { byId: true, results: [{ score: 999, item: hit[0] }] };
    }
    var toks = (q || "").split(/\s+/).filter(function (t) { return t.length > 1; });
    var scored = (abhidhamma.cittas || []).map(function (c) {
      var hay = [c.name, c.category, c.type, c.subcategory].join(" ");
      var score = 0;
      toks.forEach(function (tk) { if (hay.indexOf(tk) > -1) score += tk.length >= 3 ? 3 : 1; });
      return { score: score, item: c };
    }).filter(function (p) { return p.score > 0; });
    scored.sort(function (a, b) { return b.score - a.score; });
    return { byId: false, results: scored };
  }

  // Returns one of:
  //  { kind: "teaching", teaching }
  //  { kind: "cetasika", cetasika }
  //  { kind: "citta", citta }
  //  { kind: "citta-list", cittas }
  //  null  (no confident local match — caller should fall through to Tipiṭaka/LLM tiers)
  function match(q) {
    if (!q || q.trim().length < 2) return null;

    var teaching = findTeaching(q);
    if (teaching) return { kind: "teaching", teaching: teaching };

    var cetaScored = findCetasikas(q);
    if (cetaScored.length && cetaScored[0].score >= 9) {
      return { kind: "cetasika", cetasika: cetaScored[0].item };
    }

    var citta = findCittas(q);
    if (citta.byId) return { kind: "citta", citta: citta.results[0].item };
    if (citta.results.length) {
      if (citta.results[0].score >= 12) return { kind: "citta", citta: citta.results[0].item };
      if (citta.results.length >= 3 && citta.results[0].score >= 6) {
        return { kind: "citta-list", cittas: citta.results.slice(0, 10).map(function (p) { return p.item; }) };
      }
    }
    return null;
  }

  function cetasikaSiblings(c, limit) {
    return (global.chaithasikaData || []).filter(function (x) {
      return x.categorySi === c.categorySi && x.id !== c.id;
    }).slice(0, limit || 11);
  }

  global.DhammaLocal = {
    init: init, ready: ready, match: match,
    cittaParts: cittaParts, cetasikaSiblings: cetasikaSiblings
  };
})(window);
