// Buddhist Knowledge Base for Enhanced Chatbot
// This provides context about Abhidhamma, Tipitaka, and Buddhist teachings

const buddhistKnowledge = {
    // 89 Cittas Summary
    cittasSummary: `
**89 චිත්ත (89 Cittas - Types of Consciousness)**

1. **කාමාවචර චිත්ත (54)** - Sense-sphere consciousness
   - කුසල (8): Wholesome
   - අකුසල (12): Unwholesome (Lobha 8, Dosa 2, Moha 2)
   - විපාක (23): Resultant
   - ක්‍රියා (11): Functional

2. **රූපාවචර චිත්ත (15)** - Fine-material sphere
   - Five Jhana levels × 3 (Kusala, Vipaka, Kiriya)

3. **අරූපාවචර චිත්ත (12)** - Immaterial sphere
   - Four Arupa Jhanas × 3

4. **ලෝකෝත්තර චිත්ත (8)** - Supramundane
   - Four Paths + Four Fruits
`,

    // 52 Cetasikas Summary
    cetasikasSummary: `
**52 චෛතසික (52 Mental Factors)**

1. **සාධාරණ චෛතසික (7)** - Universal
   - ඵස්ස, වේදනා, සංඤ්ඤා, චේතනා, ඒකග්ගතා, ජීවිතින්ද්‍රිය, මනසිකාර

2. **පක්ෂික චෛතසික (6)** - Particular
   - විතර්ක, විචාර, අධිමොක්ෂ, වීර්ය, පීති, ඡන්ද

3. **අකුසල චෛතසික (14)** - Unwholesome
   - ලෝභ, දෝස, මෝහ, මාන, දිට්ඨි, විචිකිච්ඡා, ථීන, මිද්ධ, උද්ධච්ච, කුක්කුච්ච, අහිරික, අනොත්තප්ප, ඊර්ෂා, මච්ඡරිය

4. **සෝබන සාධාරණ (25)** - Beautiful Universal
   - සද්ධා, සති, හිරි, ඔත්තප්ප, අලෝභ, අදෝස, තතමජ්ඣත්තතා, කායපස්සද්ධි, චිත්තපස්සද්ධි, කායලහුතා, චිත්තලහුතා, කායමුදුතා, චිත්තමුදුතා, කායකම්මඤ්ඤතා, චිත්තකම්මඤ්ඤතා, කායපාගුඤ්ඤතා, චිත්තපාගුඤ්ඤතා, කායුජුකතා, චිත්තුජුකතා, සම්මාවාචා, සම්මාකම්මන්ත, සම්මාආජීව, කරුණා, මුදිතා, පඤ්ඤින්ද්‍රිය
`,

    // Tipitaka Structure
    tipitakaStructure: `
**ත්‍රිපිටකය (Tipitaka) - Three Baskets**

1. **විනය පිටකය** (Vinaya Pitaka)
   - Suttavibhanga, Khandhaka, Parivara

2. **සුත්තපිටකය** (Sutta Pitaka)
   - දීඝනිකාය (Digha Nikaya) - 34 suttas
   - මජ්ඣිමනිකාය (Majjhima Nikaya) - 152 suttas
   - සංයුත්තනිකාය (Samyutta Nikaya) - 7,762 suttas
   - අංගුත්තරනිකාය (Anguttara Nikaya) - 9,557 suttas
   - ඛුද්දකනිකාය (Khuddaka Nikaya) - 15 books

3. **අභිධම්ම පිටකය** (Abhidhamma Pitaka)
   - ධම්මසංගණී (Dhammasangani)
   - විභංග (Vibhanga)
   - ධාතුකථා (Dhatukatha)
   - පුග්ගලපඤ්ඤත්ති (Puggalapannatti)
   - කථාවත්ථු (Kathavatthu)
   - යමක (Yamaka)
   - පට්ඨාන (Patthana)
`,

    // Four Noble Truths
    fourNobleTruths: `
**චතුරාර්ය සත්‍ය (Four Noble Truths)**

1. **දුක්ඛ ආර්‍ය සත්‍යය** - Truth of Suffering
   - ජාති දුක්ඛ, ජරා දුක්ඛ, ව්‍යාධි දුක්ඛ, මරණ දුක්ඛ
   
2. **සමුදය ආර්‍ය සත්‍යය** - Truth of Origin
   - තණ්හාව (Craving): කාම තණ්හාව, භව තණ්හාව, විභව තණ්හාව

3. **නිරෝධ ආර්‍ය සත්‍යය** - Truth of Cessation
   - නිවන (Nibbana)

4. **මාර්ග ආර්‍ය සත්‍යය** - Truth of the Path
   - ආර්‍ය අෂ්ඨාංගික මාර්ගය (Noble Eightfold Path)
`,

    // Noble Eightfold Path
    eightfoldPath: `
**ආර්‍ය අෂ්ටාංගික මාර්ගය (Noble Eightfold Path)**

**පඤ්ඤා (Wisdom)**
1. සම්මා දිට්ඨිය - Right View
2. සම්මා සංකප්පය - Right Intention

**ශීලය (Virtue)**
3. සම්මා වාචාව - Right Speech
4. සම්මා කම්මන්තය - Right Action
5. සම්මා ආජීවය - Right Livelihood

**සමාධිය (Concentration)**
6. සම්මා වායාමය - Right Effort
7. සම්මා සතිය - Right Mindfulness
8. සම්මා සමාධිය - Right Concentration
`,

    // Dependent Origination
    paticca_samuppada: `
**ප්‍රතීත්‍ය සමුත්පාදය (Paticca Samuppada - Dependent Origination)**

1. අවිද්‍යාව (Avijja) → සංස්කාර
2. සංස්කාර (Sankhara) → විඤ්ඤාණය
3. විඤ්ඤාණය (Vinnana) → නාමරූපය
4. නාමරූපය (Nama-rupa) → සළායතන
5. සළායතන (Salayatana) → ඵස්ස
6. ඵස්ස (Phassa) → වේදනාව
7. වේදනාව (Vedana) → තණ්හාව
8. තණ්හාව (Tanha) → උපාදානය
9. උපාදානය (Upadana) → භවය
10. භවය (Bhava) → ජාතිය
11. ජාතිය (Jati) → ජරා-මරණය
12. ජරා-මරණය (Jara-marana) → දුක්ඛය
`,

    // Key Suttas
    importantSuttas: {
        meditation: [
            'MN 10 - සතිපට්ඨාන සූත්‍රය (Satipatthana Sutta)',
            'MN 118 - ආනාපානසති සූත්‍රය (Anapanasati Sutta)',
            'SN 47.10 - භික්ඛු සූත්‍රය (Bhikkhu Sutta)'
        ],
        wisdom: [
            'MN 1 - මූලපරියාය සූත්‍රය (Mulapariyaya Sutta)',
            'MN 2 - සබ්බාසව සූත්‍රය (Sabbasava Sutta)',
            'DN 22 - මහාසතිපට්ඨාන සූත්‍රය (Mahasatipatthana Sutta)'
        ],
        path: [
            'SN 56.11 - ධම්මචක්ක සූත්‍රය (Dhammacakka Sutta)',
            'MN 141 - සච්ච විභංග සූත්‍රය (Sacca Vibhanga Sutta)'
        ]
    },

    // Meditation Instructions
    meditationBasics: `
**භාවනා මූලධර්ම (Meditation Basics)**

**සමථ භාවනාව (Samatha - Calm)**
- ආනාපානසති (Mindfulness of Breathing)
- මෙත්තා භාවනාව (Loving-kindness)
- කසිණ භාවනාව (Kasina meditation)

**විදර්ශනා භාවනාව (Vipassana - Insight)**
- චතුරාර්‍ය සතිපට්ඨාන (Four Foundations of Mindfulness)
- ත්‍රිලක්ෂණ දැක්ම (Seeing Three Characteristics)
  - අනිච්චතාව (Impermanence)
  - දුක්ඛතාව (Unsatisfactoriness)
  - අනාත්මතාව (Non-self)
`
};

// Export for use in chatbot
if (typeof module !== 'undefined' && module.exports) {
    module.exports = buddhistKnowledge;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.buddhistKnowledge = buddhistKnowledge;
}


