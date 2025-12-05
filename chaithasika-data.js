// Source definitions for all three main sources
const SOURCE_TIPITAKA = {
  label: 'Tipitaka.lk',
  url: 'https://tipitaka.lk'
};

const SOURCE_ABHIDHARMAYE_MULIKA = {
  label: 'අභිධර්මයේ මූලික කරුණු – pitaka.lk',
  url: 'https://pitaka.lk/books/abhidharmaye-mulika-karunu/index.html'
};

// Legacy sources for backward compatibility
const SOURCE_PITAKA = {
  label: 'Abhidharma Marga – pitaka.lk',
  url: 'https://pitaka.lk/books/abhidharma-margaya/index.html#3-10'
};

const SOURCE_PATH = {
  label: 'Tipitaka.lk – Noble Eightfold Path',
  url: 'https://tipitaka.lk'
};

const SOURCE_METTA = {
  label: 'Tipitaka.lk – Karaniya Metta',
  url: 'https://tipitaka.lk'
};

// Helper function to add default sources if not specified
const addDefaultSources = (item) => {
  if (!item.sources || item.sources.length === 0) {
    return [SOURCE_TIPITAKA, SOURCE_ABHIDHARMAYE_MULIKA];
  }
  return item.sources;
};

const mapCategory = (items, categorySi, categoryEn) =>
  items.map((item) => ({
    ...item,
    categorySi,
    categoryEn,
    sources: addDefaultSources(item)
  }));

const universals = [
  {
    id: 'phassa',
    nameSi: 'ඵස්ස',
    nameEn: 'Contact',
    summarySi: 'චිත්තය, ඉන්ද්‍රිය හා වස්තුව එකට ගෙන ඒමෙන් සංවේදනය ආරම්භ කරන සම්බන්ධතාවය.',
    summaryEn: 'Binds consciousness, sense base, and object so experience can arise.'
  },
  {
    id: 'vedana',
    nameSi: 'වේදනා',
    nameEn: 'Feeling',
    summarySi: 'සුඛ, දුක් හෝ උපේක්ෂක අත්දැකීම ලෙස ප්‍රතිචාරය වෙයි.',
    summaryEn: 'Registers experience as pleasant, painful, or neutral feeling.'
  },
  {
    id: 'sanna',
    nameSi: 'සංඤ්ඤා',
    nameEn: 'Perception',
    summarySi: 'වස්තුවේ ලක්ෂණ සටහන් කර නැවත හඳුනා ගැනීමට උපකාරී මතක සලකුණු.',
    summaryEn: 'Marks the object with a sign so it can be recognized again.'
  },
  {
    id: 'cetana',
    nameSi: 'චේතනා',
    nameEn: 'Volition',
    summarySi: 'සියලු චෛතසිකයන් සමඟ කර්මය සඳහා පූර්ව සූදානම සහ තීරණය සැලසයි.',
    summaryEn: 'Coordinates associated factors and drives intentional action.'
  },
  {
    id: 'ekaggata',
    nameSi: 'ඒකග්ගතා',
    nameEn: 'One-pointedness',
    summarySi: 'චිත්තය වස්තුවකට එකකර තබා මූලික සමාධිය සකස් කරයි.',
    summaryEn: 'Keeps the mind collected on a single object, providing basic concentration.'
  },
  {
    id: 'jivitindriya',
    nameSi: 'ජීවිත්තින්ද්‍රිය',
    nameEn: 'Life faculty (mental)',
    summarySi: 'සම්බන්ධ චෛතසිකයන් පවත්වාගෙන යන ජීවන බලය.',
    summaryEn: 'Sustains each accompanying mental factor for the full thought-moment.'
  },
  {
    id: 'manasikara',
    nameSi: 'මනසිකාර',
    nameEn: 'Attention',
    summarySi: 'වස්තුව වෙත මනස යොමු කර තැබීමේ නිරන්තර උත්සාහය.',
    summaryEn: 'Turns the mind toward the object and keeps it engaged.'
  }
];

const occasionals = [
  {
    id: 'vitakka',
    nameSi: 'විතර්ක',
    nameEn: 'Initial application',
    summarySi: 'වස්තුවකට පළමු වරට මනස ගෙන යන භාවිතාත්මක ප්‍රහාරය.',
    summaryEn: 'Drives the mind onto the object in the initial phase of examination.'
  },
  {
    id: 'vicara',
    nameSi: 'විචාර',
    nameEn: 'Sustained application',
    summarySi: 'වස්තුව දිගටම සලකා බලමින් විමර්ශනය පවත්වාගෙන යයි.',
    summaryEn: 'Keeps examining the object repeatedly after the first contact.'
  },
  {
    id: 'adhimokkha',
    nameSi: 'අධිමොක්ඛ',
    nameEn: 'Resolution',
    summarySi: 'සත්‍යය පිළිබඳ තීරණාත්මක විශ්වාසය ඇතිකර අසථිත්වය ඉවත් කරයි.',
    summaryEn: 'Establishes firm decision about the object, dispelling hesitation.'
  },
  {
    id: 'viriya',
    nameSi: 'වීර්ය',
    nameEn: 'Energy',
    summarySi: 'ධර්මානුකූල උත්සාහයෙන් චිත්තය ශක්තිමත් කරයි.',
    summaryEn: 'Sustains wholesome effort and invigorates consciousness.'
  },
  {
    id: 'piti',
    nameSi: 'පීති',
    nameEn: 'Joy',
    summarySi: 'ධර්මයෙහි අරමුණු හැඟීමෙන් මනස uplift කරන ආධ්‍යාත්මික සතුට.',
    summaryEn: 'Spiritual rapture that gladdens the mind with wholesome objects.'
  },
  {
    id: 'chanda',
    nameSi: 'ඡන්ද',
    nameEn: 'Desire-to-do',
    summarySi: 'යහපත් කටයුතු ආරම්භ කිරීමට ඇති ප්‍රවණ කැමැත්ත.',
    summaryEn: 'Wholesome zeal or willingness to undertake an object.'
  }
];

const akusala = [
  { id: 'lobha', nameSi: 'ලෝභ', nameEn: 'Greed', summarySi: 'අල්ලාගැනීමට බුරුසු වන අශාන්ත ආශාව.', summaryEn: 'Craving that grasps objects through attachment.' },
  { id: 'ditthi', nameSi: 'දෘෂ්ටි', nameEn: 'Wrong view', summarySi: 'අනිත්‍යට සදාතන බවක් දක්වන වැනි වබා දෝෂ සහිත දෘෂ්ටි.', summaryEn: 'Misrepresents reality, leading to unwholesome choices.' },
  { id: 'mana', nameSi: 'මාන', nameEn: 'Conceit', summarySi: 'තමන් උසද, සමානද, පහතද යන සංසන්දනේ උඩඟු ස්වභාවය.', summaryEn: 'Prideful measuring of oneself as better, equal, or worse.' },
  { id: 'dosa', nameSi: 'දෝස', nameEn: 'Ill will', summarySi: 'අකමැත්ත හා කෝපයෙන් විනාශක බලයක් මතුකරයි.', summaryEn: 'Aversion that seeks to strike or reject the object.' },
  { id: 'issa', nameSi: 'ඉර්ෂ්‍යා', nameEn: 'Envy', summarySi: 'අන්‍යගේ සාර්ථකත්වය දුකට මාරු කරන අසතුටු බව.', summaryEn: 'Resentment toward the welfare of others.' },
  { id: 'macchariya', nameSi: 'මච්ඡරිය', nameEn: 'Stinginess', summarySi: 'තමාගෙන් වස්තු, ගුණ, දේවානගරු බෙදාගැනීමට අකමැත්ත.', summaryEn: 'Reluctance to share possessions or honors.' },
  { id: 'kukkucca', nameSi: 'කුක්කුච්ච', nameEn: 'Remorse', summarySi: 'අතිත අකුසල් ක්‍රියාවන් ගැන ව්‍යාකූල පසුතැවීම.', summaryEn: 'Agitated regret about past deeds that clouds clarity.' },
  { id: 'ahirika', nameSi: 'අහිරික', nameEn: 'Moral shamelessness', summarySi: 'අකුසල් කිරීමට ලජ්ජාවක් නොමැති අභ්‍යන්තර දර්ප්පය.', summaryEn: 'Absence of inner shame regarding wrongdoing.' },
  { id: 'anottappa', nameSi: 'අනොත්තප්ප', nameEn: 'Moral fearlessness', summarySi: 'අකුසල ප්‍රතිඵල ගැන බියක් නොවීම.', summaryEn: 'No prudent fear of unwholesome results.' },
  { id: 'moha', nameSi: 'මෝහ', nameEn: 'Delusion', summarySi: 'සත්‍ය නොදැනීමෙන් සිත අන්ධකාරයට පත් කරයි.', summaryEn: 'Fundamental ignorance that obscures reality.' },
  { id: 'uddhacca', nameSi: 'උද්ධච්ච', nameEn: 'Restlessness', summarySi: 'චංචල බවින් සමාධිය බිඳී යාම.', summaryEn: 'Agitation that prevents steady attention.' },
  { id: 'thina', nameSi: 'ථීන', nameEn: 'Sloth', summarySi: 'මනස බරපතල කර යහපත් කටයුතු වලංගු නොකිරීම.', summaryEn: 'Inert dullness that resists wholesome activity.' },
  { id: 'middha', nameSi: 'මිද්ධ', nameEn: 'Torpor', summarySi: 'ශරීරය හා මනස මාලිමා කර නින්දාවට බළපත්වීම.', summaryEn: 'Stiffness that leads to sleepiness.' },
  { id: 'vicikiccha', nameSi: 'විචිකිච්ඡා', nameEn: 'Skeptical doubt', summarySi: 'බුදු ධර්මය ගැන තීරණය හඳුනාගැනීමට නොහැකි වීම.', summaryEn: 'Paralyzing indecision about the path and practice.' }
];

const sobhanaUniversals = [
  { id: 'saddha', nameSi: 'සද්ධා', nameEn: 'Confidence', summarySi: 'බුදු ධර්ම සංඝ යන සත්‍යයන් තුළ නිවැරදි විශ්වාසය.', summaryEn: 'Faith in the Triple Gem that uplifts wholesome states.' },
  { id: 'sati', nameSi: 'සති', nameEn: 'Mindfulness', summarySi: 'වස්තුව අමතක නොවී වර්තමානය සුරකින්නේය.', summaryEn: 'Keeps the object present without forgetfulness.' },
  { id: 'hiri', nameSi: 'හිරි', nameEn: 'Moral shame', summarySi: 'අකුසල් කිරීමට අභ්‍යන්තරයෙන් ලජ්ජාවෙන් වැළැක්වීම.', summaryEn: 'Inner conscience that restrains misconduct.' },
  { id: 'ottappa', nameSi: 'ඔත්තප්ප', nameEn: 'Moral dread', summarySi: 'අකුසල් ප්‍රතිඵල ගැන බියෙන් දුෂ්කර කටයුතු වලස්සයි.', summaryEn: 'Healthy fear of wrongdoing and its consequences.' },
  { id: 'alobha', nameSi: 'අලෝභ', nameEn: 'Non-greed', summarySi: 'සතුටින් බෙදාගන්නා අරගල රහිත හිත.', summaryEn: 'Detachment and generosity that release clinging.' },
  { id: 'adosa', nameSi: 'අදෝස', nameEn: 'Non-hatred', summarySi: 'කරුණා සහ මෛත්‍රී මඟින් කේන්තිය පාලනය.', summaryEn: 'Loving-kindness that counters resentment.' },
  { id: 'tatramajjhattata', nameSi: 'තත්‍රමජ්ඣත්තතා', nameEn: 'Balance', summarySi: 'චිත්තය මධ්‍යස්ථ කර අධික ආශා ද්වේශ ඉවත් කිරීම.', summaryEn: 'Even-mindedness preventing bias.' },
  { id: 'kayapassaddhi', nameSi: 'කායපස්සද්ධි', nameEn: 'Tranquility of mental body', summarySi: 'චෛතසිකයන් සන්සුන් කර උණුසුම්කම අඩු කිරීම.', summaryEn: 'Calms the associated mental factors.' },
  { id: 'cittapassaddhi', nameSi: 'චිත්තපස්සද්ධි', nameEn: 'Tranquility of consciousness', summarySi: 'මනස නිශ්චල කර සන්සුන් බවක් සකස් කිරීම.', summaryEn: 'Settles consciousness into serenity.' },
  { id: 'kayalahuta', nameSi: 'කායලහුතා', nameEn: 'Lightness of mental body', summarySi: 'චෛතසිකයන්හි බරකම ඉවත් කර වේගවත් කිරීම.', summaryEn: 'Removes heaviness from associated factors.' },
  { id: 'cittalahuta', nameSi: 'චිත්තලහුතා', nameEn: 'Lightness of consciousness', summarySi: 'මනස sluggish බවෙන් නිදහස් කර කුසලයට සූදානම් කරයි.', summaryEn: 'Frees consciousness from sluggishness.' },
  { id: 'kayamuduta', nameSi: 'කායමුදුතා', nameEn: 'Suppleness of mental body', summarySi: 'චෛතසිකයන් මෘදු කර අවශ්‍ය සේ හැඩගස්වයි.', summaryEn: 'Makes mental factors pliant.' },
  { id: 'cittamuduta', nameSi: 'චිත්තමුදුතා', nameEn: 'Suppleness of consciousness', summarySi: 'මනස ධර්මයට හැරවීමට පහසු ගතිකතාව.', summaryEn: 'Removes rigidity from the mind.' },
  { id: 'kayakammannata', nameSi: 'කායකම්මඤ්ඤතා', nameEn: 'Adaptability of mental body', summarySi: 'චෛතසිකයන් ඕනෑම යහපත් කටයුතුට සේවය කරවයි.', summaryEn: 'Makes mental factors workable for any wholesome duty.' },
  { id: 'cittakammannata', nameSi: 'චිත්තකම්මඤ්ඤතා', nameEn: 'Adaptability of consciousness', summarySi: 'මනස අණපාලනයට පහසු කර සමාධානවත් කරයි.', summaryEn: 'Makes the mind obedient to discipline.' },
  { id: 'kayapagunnata', nameSi: 'කායපාගුණ්‍යතා', nameEn: 'Proficiency of mental body', summarySi: 'චෛතසිකයන් කුසල කාර්යයන් සාර්ථකව ඉටු කරයි.', summaryEn: 'Ensures faultless function of mental factors.' },
  { id: 'cittapagunnata', nameSi: 'චිත්තපාගුණ්‍යතා', nameEn: 'Proficiency of consciousness', summarySi: 'මනස අක්ලේෂයෙන් යහපත් ලෙස ක්‍රියාකරවීම.', summaryEn: 'Lets consciousness operate without blemish.' },
  { id: 'kayaujukata', nameSi: 'කායුජුකතා', nameEn: 'Rectitude of mental body', summarySi: 'චෛතසිකයන් සෘජු කර වක්‍ර හැසිරීම් අඩු කරයි.', summaryEn: 'Straightens associated factors for honest conduct.' },
  { id: 'cittaujukata', nameSi: 'චිත්තුජුකතා', nameEn: 'Rectitude of consciousness', summarySi: 'මනස ධර්මයට සෘජු ලෙස යොමු කරයි.', summaryEn: 'Keeps consciousness upright and sincere.' }
];

const virati = [
  { id: 'sammaVaca', nameSi: 'සම්මා වාචා', nameEn: 'Right speech', summarySi: 'අසත්‍ය, භේදවාචා, පාරුෂ වචන වලින් වළක්වීම.', summaryEn: 'Resolve to abstain from lying, divisive, or harsh speech.' },
  { id: 'sammaKammanta', nameSi: 'සම්මා කම්මන්ත', nameEn: 'Right action', summarySi: 'සත්ව මරණය, අස්ථානික ග්‍රහණය, අතිචාර වළක්වමින් යහපත් ක්‍රියාව.', summaryEn: 'Determination to avoid killing, stealing, and misconduct.' },
  { id: 'sammaAjiva', nameSi: 'සම්මා ආජීව', nameEn: 'Right livelihood', summarySi: 'අන්‍යයන්ට හානිකර ජීවිකා වලින් වැළැක්වීම.', summaryEn: 'Choosing livelihoods that do not harm beings.' }
];

const appamanna = [
  { id: 'karuna', nameSi: 'කරුණා', nameEn: 'Compassion', summarySi: 'සියලු සත්වයන්ගේ දුක් නසනු මැනැයි සිතින්නා වූ කාරුණික බලාපොරොත්තුව.', summaryEn: 'Boundless wish for beings to be free from suffering.' },
  { id: 'mudita', nameSi: 'මුදිතා', nameEn: 'Sympathetic joy', summarySi: 'අන්‍යයන්ගේ සාර්ථකත්වය සතුටින් ගන්නා සිත.', summaryEn: 'Joy in the welfare and prosperity of others.' }
];

const panna = [
  {
    id: 'panna',
    nameSi: 'පඤ්ඤා',
    nameEn: 'Wisdom',
    summarySi: 'අනිත්‍ය, දුක්, අනත්තා ලෙස වස්තුව දක්නාවූ නිවැරදි දර්ශනය.',
    summaryEn: 'Penetrating insight that sees impermanence, suffering, and non-self.',
    categorySi: 'ප්‍රග්ඥා චෛතසික',
    categoryEn: 'Wisdom factor'
  }
];

window.chaithasikaData = [
  ...mapCategory(universals, 'සාධාරණ චෛතසික', 'Universal mental factor'),
  ...mapCategory(occasionals, 'පක්ෂික චෛතසික', 'Particular mental factor'),
  ...mapCategory(akusala, 'අකුසල් චෛතසික', 'Unwholesome mental factor'),
  ...mapCategory(sobhanaUniversals, 'සෝබන සාධාරණ', 'Beautiful universal'),
  ...mapCategory(virati, 'විරති චෛතසික', 'Abstinence factor'),
  ...mapCategory(appamanna, 'අප්පමාණ චෛතසික', 'Immeasurable mental factor'),
  ...panna
];



