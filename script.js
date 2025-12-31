// Complete Abhidhamma Citta Chaithasika Dataset
// Extracted from Chiththa Chaithasika Tool V2.2.xlsx
// Based on Ven. Rerukane Chandawimala Thero's books
const meditationData = {
    cittas: [
        // කාමාවචර අකුසල් චිත්ත (Sensuous Sphere Unwholesome Consciousness) - 12 cittas
        { id: 1, name: "සෝමනස්ස සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Pleasant feeling with wrong view, accompanied, rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 19, descriptionSi: "සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති මූල නැති සිත", descriptionEn: "Pleasant feeling with wrong view, accompanied, rootless consciousness" },
        { id: 2, name: "සෝමනස්ස සහගත දිට්ඨිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Pleasant feeling with wrong view, accompanied, with prompting consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 21, descriptionSi: "සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති සසංස්කාරික සිත", descriptionEn: "Pleasant feeling with wrong view, accompanied, with prompting consciousness" },
        { id: 3, name: "සෝමනස්ස සහගත දිට්ඨිගත විප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Pleasant feeling with wrong view, dissociated, rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 19, descriptionSi: "සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති මූල නැති සිත", descriptionEn: "Pleasant feeling with wrong view, dissociated, rootless consciousness" },
        { id: 4, name: "සෝමනස්ස සහගත දෘෂ්ඨිගත විප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Pleasant feeling with wrong view, dissociated, with prompting consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 21, descriptionSi: "සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති සසංස්කාරික සිත", descriptionEn: "Pleasant feeling with wrong view, dissociated, with prompting consciousness" },
        { id: 5, name: "උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Equanimity with wrong view, accompanied, rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 18, descriptionSi: "උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති මූල නැති සිත", descriptionEn: "Equanimity with wrong view, accompanied, rootless consciousness" },
        { id: 6, name: "උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Equanimity with wrong view, accompanied, with prompting consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 20, descriptionSi: "උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති සසංස්කාරික සිත", descriptionEn: "Equanimity with wrong view, accompanied, with prompting consciousness" },
        { id: 7, name: "උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Equanimity with wrong view, dissociated, rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 18, descriptionSi: "උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති මූල නැති සිත", descriptionEn: "Equanimity with wrong view, dissociated, rootless consciousness" },
        { id: 8, name: "උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Equanimity with wrong view, dissociated, with prompting consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ලෝභ මූල", subcategoryEn: "Greed Root", chaithasikaCount: 20, descriptionSi: "උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති සසංස්කාරික සිත", descriptionEn: "Equanimity with wrong view, dissociated, with prompting consciousness" },

        // ද්වේශ මූල චිත්ත (Hatred Root Consciousness) - 2 cittas
        { id: 9, name: "දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Unpleasant feeling with aversion, accompanied, rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ද්වේශ මූල", subcategoryEn: "Hatred Root", chaithasikaCount: 20, descriptionSi: "දුක් වේදනාව සහිත පටිඝය සමඟ එක්ව ඇති මූල නැති සිත", descriptionEn: "Unpleasant feeling with aversion, accompanied, rootless consciousness" },
        { id: 10, name: "දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Unpleasant feeling with aversion, accompanied, with prompting consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "ද්වේශ මූල", subcategoryEn: "Hatred Root", chaithasikaCount: 22, descriptionSi: "දුක් වේදනාව සහිත පටිඝය සමඟ එක්ව ඇති සසංස්කාරික සිත", descriptionEn: "Unpleasant feeling with aversion, accompanied, with prompting consciousness" },

        // මෝහ මූල චිත්ත (Delusion Root Consciousness) - 2 cittas
        { id: 11, name: "උපේක්ෂා සහගත විචිකිච්ඡා සම්ප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Equanimity with doubt, accompanied, rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "මෝහ මූල", subcategoryEn: "Delusion Root", chaithasikaCount: 18, descriptionSi: "උපේක්ෂාව සහිත විචිකිච්ඡාව සමඟ එක්ව ඇති මූල නැති සිත", descriptionEn: "Equanimity with doubt, accompanied, rootless consciousness" },
        { id: 12, name: "උපේක්ෂා සහගත උද්ධච්ච සම්ප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Equanimity with restlessness, accompanied, rootless consciousness", category: "අකුසල්", categoryEn: "Unwholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "මෝහ මූල", subcategoryEn: "Delusion Root", chaithasikaCount: 18, descriptionSi: "උපේක්ෂාව සහිත උද්ධච්චය සමඟ එක්ව ඇති මූල නැති සිත", descriptionEn: "Equanimity with restlessness, accompanied, rootless consciousness" },

        // කාමාවචර කුසල් චිත්ත (Sensuous Sphere Wholesome Consciousness) - 8 cittas
        { id: 13, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Pleasant feeling with knowledge, accompanied, rootless consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 38, descriptionSi: "සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති කුසල් සිත", descriptionEn: "Pleasant feeling with knowledge, accompanied, rootless consciousness" },
        { id: 14, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Pleasant feeling with knowledge, accompanied, with prompting consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 38, descriptionSi: "සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික කුසල් සිත", descriptionEn: "Pleasant feeling with knowledge, accompanied, with prompting consciousness" },
        { id: 15, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Pleasant feeling with knowledge, dissociated, rootless consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 37, descriptionSi: "සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති කුසල් සිත", descriptionEn: "Pleasant feeling with knowledge, dissociated, rootless consciousness" },
        { id: 16, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Pleasant feeling with knowledge, dissociated, with prompting consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 37, descriptionSi: "සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික කුසල් සිත", descriptionEn: "Pleasant feeling with knowledge, dissociated, with prompting consciousness" },
        { id: 17, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Equanimity with knowledge, accompanied, rootless consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 37, descriptionSi: "උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති කුසල් සිත", descriptionEn: "Equanimity with knowledge, accompanied, rootless consciousness" },
        { id: 18, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Equanimity with knowledge, accompanied, with prompting consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 37, descriptionSi: "උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික කුසල් සිත", descriptionEn: "Equanimity with knowledge, accompanied, with prompting consciousness" },
        { id: 19, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික සිත", nameEn: "Equanimity with knowledge, dissociated, rootless consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 36, descriptionSi: "උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති කුසල් සිත", descriptionEn: "Equanimity with knowledge, dissociated, rootless consciousness" },
        { id: 20, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික සිත", nameEn: "Equanimity with knowledge, dissociated, with prompting consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර කුසල්", subcategoryEn: "Sensuous Sphere Wholesome", chaithasikaCount: 36, descriptionSi: "උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික කුසල් සිත", descriptionEn: "Equanimity with knowledge, dissociated, with prompting consciousness" },

        // රූපාවචර චිත්ත (Form Sphere Consciousness) - 15 cittas
        { id: 21, name: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන සිතය", nameEn: "First jhana with initial and sustained application", category: "කුසල්", categoryEn: "Wholesome", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර කුසල්", subcategoryEn: "Form Sphere Wholesome", chaithasikaCount: 34, descriptionSi: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන සිත", descriptionEn: "First jhana with initial and sustained application" },
        { id: 22, name: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන සිතය", nameEn: "Second jhana with sustained application", category: "කුසල්", categoryEn: "Wholesome", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර කුසල්", subcategoryEn: "Form Sphere Wholesome", chaithasikaCount: 32, descriptionSi: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන සිත", descriptionEn: "Second jhana with sustained application" },
        { id: 23, name: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන සිතය", nameEn: "Third jhana with joy", category: "කුසල්", categoryEn: "Wholesome", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර කුසල්", subcategoryEn: "Form Sphere Wholesome", chaithasikaCount: 31, descriptionSi: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන සිත", descriptionEn: "Third jhana with joy" },
        { id: 24, name: "සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන සිතය", nameEn: "Fourth jhana with happiness", category: "කුසල්", categoryEn: "Wholesome", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර කුසල්", subcategoryEn: "Form Sphere Wholesome", chaithasikaCount: 30, descriptionSi: "සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන සිත", descriptionEn: "Fourth jhana with happiness" },
        { id: 25, name: "උපේක්ෂා ඒකාග්‍රතා සහිත පංචම ධ්‍යාන සිතය", nameEn: "Fifth jhana with equanimity", category: "කුසල්", categoryEn: "Wholesome", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර කුසල්", subcategoryEn: "Form Sphere Wholesome", chaithasikaCount: 30, descriptionSi: "උපේක්ෂා ඒකාග්‍රතා සහිත පංචම ධ්‍යාන සිත", descriptionEn: "Fifth jhana with equanimity" },

        // අරූපාවචර චිත්ත (Formless Sphere Consciousness) - 12 cittas
        { id: 26, name: "ආකාසානඤ්චායතන කුසල් සිත", nameEn: "Space infinity consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "අරූපාවචර", typeEn: "Formless Sphere", subcategory: "අරූපාවචර කුසල්", subcategoryEn: "Formless Sphere Wholesome", chaithasikaCount: 30, descriptionSi: "ආකාසානඤ්චායතන කුසල් සිත", descriptionEn: "Space infinity consciousness" },
        { id: 27, name: "විඤ්ඤාණඤ්චායතන කුසල් සිත", nameEn: "Consciousness infinity consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "අරූපාවචර", typeEn: "Formless Sphere", subcategory: "අරූපාවචර කුසල්", subcategoryEn: "Formless Sphere Wholesome", chaithasikaCount: 30, descriptionSi: "විඤ්ඤාණඤ්චායතන කුසල් සිත", descriptionEn: "Consciousness infinity consciousness" },
        { id: 28, name: "ආකිඤ්චඤ්ඤායතන කුසල් සිත", nameEn: "Nothingness consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "අරූපාවචර", typeEn: "Formless Sphere", subcategory: "අරූපාවචර කුසල්", subcategoryEn: "Formless Sphere Wholesome", chaithasikaCount: 30, descriptionSi: "ආකිඤ්චඤ්ඤායතන කුසල් සිත", descriptionEn: "Nothingness consciousness" },
        { id: 29, name: "නේවසංඤ්ඤා නාසඤ්ඤායතන කුසල් සිත", nameEn: "Neither perception nor non-perception consciousness", category: "කුසල්", categoryEn: "Wholesome", type: "අරූපාවචර", typeEn: "Formless Sphere", subcategory: "අරූපාවචර කුසල්", subcategoryEn: "Formless Sphere Wholesome", chaithasikaCount: 30, descriptionSi: "නේවසංඤ්ඤා නාසඤ්ඤායතන කුසල් සිත", descriptionEn: "Neither perception nor non-perception consciousness" },

        // ලෝකෝත්තර චිත්ත (Supramundane Consciousness) - 8 cittas
        { id: 30, name: "ප්‍රථම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", nameEn: "First jhana stream-enterer path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", descriptionEn: "First jhana stream-enterer path consciousness" },
        { id: 31, name: "ප්‍රථම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", nameEn: "First jhana stream-enterer fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", descriptionEn: "First jhana stream-enterer fruition consciousness" },
        { id: 32, name: "ප්‍රථම ධ්‍යාන සකදාගාමී මග්ග චිත්තය", nameEn: "First jhana once-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන සකදාගාමී මග්ග චිත්තය", descriptionEn: "First jhana once-returner path consciousness" },
        { id: 33, name: "ප්‍රථම ධ්‍යාන සකදාගාමී ඵල චිත්තය", nameEn: "First jhana once-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන සකදාගාමී ඵල චිත්තය", descriptionEn: "First jhana once-returner fruition consciousness" },
        { id: 34, name: "ප්‍රථම ධ්‍යාන අනාගාමි මග්ග චිත්තය", nameEn: "First jhana non-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන අනාගාමි මග්ග චිත්තය", descriptionEn: "First jhana non-returner path consciousness" },
        { id: 35, name: "ප්‍රථම ධ්‍යාන අනාගාමි ඵල චිත්තය", nameEn: "First jhana non-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන අනාගාමි ඵල චිත්තය", descriptionEn: "First jhana non-returner fruition consciousness" },
        { id: 36, name: "ප්‍රථම ධ්‍යාන අරහත්ත මග්ග චිත්තය", nameEn: "First jhana arahant path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන අරහත්ත මග්ග චිත්තය", descriptionEn: "First jhana arahant path consciousness" },
        { id: 37, name: "ප්‍රථම ධ්‍යාන අරහත්ත ඵල චිත්තය", nameEn: "First jhana arahant fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 36, descriptionSi: "ප්‍රථම ධ්‍යාන අරහත්ත ඵල චිත්තය", descriptionEn: "First jhana arahant fruition consciousness" },

        // Additional Supramundane Cittas (remaining 40 cittas)
        { id: 38, name: "ද්විතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", nameEn: "Second jhana stream-enterer path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", descriptionEn: "Second jhana stream-enterer path consciousness" },
        { id: 39, name: "ද්විතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", nameEn: "Second jhana stream-enterer fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", descriptionEn: "Second jhana stream-enterer fruition consciousness" },
        { id: 40, name: "ද්විතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය", nameEn: "Second jhana once-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය", descriptionEn: "Second jhana once-returner path consciousness" },
        { id: 41, name: "ද්විතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය", nameEn: "Second jhana once-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය", descriptionEn: "Second jhana once-returner fruition consciousness" },
        { id: 42, name: "ද්විතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය", nameEn: "Second jhana non-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය", descriptionEn: "Second jhana non-returner path consciousness" },
        { id: 43, name: "ද්විතීය ධ්‍යාන අනාගාමි ඵල චිත්තය", nameEn: "Second jhana non-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන අනාගාමි ඵල චිත්තය", descriptionEn: "Second jhana non-returner fruition consciousness" },
        { id: 44, name: "ද්විතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය", nameEn: "Second jhana arahant path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය", descriptionEn: "Second jhana arahant path consciousness" },
        { id: 45, name: "ද්විතීය ධ්‍යාන අරහත්ත ඵල චිත්තය", nameEn: "Second jhana arahant fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 34, descriptionSi: "ද්විතීය ධ්‍යාන අරහත්ත ඵල චිත්තය", descriptionEn: "Second jhana arahant fruition consciousness" },

        // Third Jhana Supramundane Cittas
        { id: 46, name: "තෘතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", nameEn: "Third jhana stream-enterer path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", descriptionEn: "Third jhana stream-enterer path consciousness" },
        { id: 47, name: "තෘතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", nameEn: "Third jhana stream-enterer fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", descriptionEn: "Third jhana stream-enterer fruition consciousness" },
        { id: 48, name: "තෘතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය", nameEn: "Third jhana once-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය", descriptionEn: "Third jhana once-returner path consciousness" },
        { id: 49, name: "තෘතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය", nameEn: "Third jhana once-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය", descriptionEn: "Third jhana once-returner fruition consciousness" },
        { id: 50, name: "තෘතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය", nameEn: "Third jhana non-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය", descriptionEn: "Third jhana non-returner path consciousness" },
        { id: 51, name: "තෘතීය ධ්‍යාන අනාගාමි ඵල චිත්තය", nameEn: "Third jhana non-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන අනාගාමි ඵල චිත්තය", descriptionEn: "Third jhana non-returner fruition consciousness" },
        { id: 52, name: "තෘතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය", nameEn: "Third jhana arahant path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය", descriptionEn: "Third jhana arahant path consciousness" },
        { id: 53, name: "තෘතීය ධ්‍යාන අරහත්ත ඵල චිත්තය", nameEn: "Third jhana arahant fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 33, descriptionSi: "තෘතීය ධ්‍යාන අරහත්ත ඵල චිත්තය", descriptionEn: "Third jhana arahant fruition consciousness" },

        // Fourth Jhana Supramundane Cittas
        { id: 54, name: "චතුර්ථ ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", nameEn: "Fourth jhana stream-enterer path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", descriptionEn: "Fourth jhana stream-enterer path consciousness" },
        { id: 55, name: "චතුර්ථ ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", nameEn: "Fourth jhana stream-enterer fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", descriptionEn: "Fourth jhana stream-enterer fruition consciousness" },
        { id: 56, name: "චතුර්ථ ධ්‍යාන සකදාගාමී මග්ග චිත්තය", nameEn: "Fourth jhana once-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන සකදාගාමී මග්ග චිත්තය", descriptionEn: "Fourth jhana once-returner path consciousness" },
        { id: 57, name: "චතුර්ථ ධ්‍යාන සකදාගාමී ඵල චිත්තය", nameEn: "Fourth jhana once-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන සකදාගාමී ඵල චිත්තය", descriptionEn: "Fourth jhana once-returner fruition consciousness" },
        { id: 58, name: "චතුර්ථ ධ්‍යාන අනාගාමි මග්ග චිත්තය", nameEn: "Fourth jhana non-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන අනාගාමි මග්ග චිත්තය", descriptionEn: "Fourth jhana non-returner path consciousness" },
        { id: 59, name: "චතුර්ථ ධ්‍යාන අනාගාමි ඵල චිත්තය", nameEn: "Fourth jhana non-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන අනාගාමි ඵල චිත්තය", descriptionEn: "Fourth jhana non-returner fruition consciousness" },
        { id: 60, name: "චතුර්ථ ධ්‍යාන අරහත්ත මග්ග චිත්තය", nameEn: "Fourth jhana arahant path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන අරහත්ත මග්ග චිත්තය", descriptionEn: "Fourth jhana arahant path consciousness" },
        { id: 61, name: "චතුර්ථ ධ්‍යාන අරහත්ත ඵල චිත්තය", nameEn: "Fourth jhana arahant fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 32, descriptionSi: "චතුර්ථ ධ්‍යාන අරහත්ත ඵල චිත්තය", descriptionEn: "Fourth jhana arahant fruition consciousness" },

        // Fifth Jhana Supramundane Cittas
        { id: 62, name: "පංචම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", nameEn: "Fifth jhana stream-enterer path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", descriptionEn: "Fifth jhana stream-enterer path consciousness" },
        { id: 63, name: "පංචම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", nameEn: "Fifth jhana stream-enterer fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", descriptionEn: "Fifth jhana stream-enterer fruition consciousness" },
        { id: 64, name: "පංචම ධ්‍යාන සකදාගාමී මග්ග චිත්තය", nameEn: "Fifth jhana once-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන සකදාගාමී මග්ග චිත්තය", descriptionEn: "Fifth jhana once-returner path consciousness" },
        { id: 65, name: "පංචම ධ්‍යාන සකදාගාමී ඵල චිත්තය", nameEn: "Fifth jhana once-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන සකදාගාමී ඵල චිත්තය", descriptionEn: "Fifth jhana once-returner fruition consciousness" },
        { id: 66, name: "පංචම ධ්‍යාන අනාගාමි මග්ග චිත්තය", nameEn: "Fifth jhana non-returner path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන අනාගාමි මග්ග චිත්තය", descriptionEn: "Fifth jhana non-returner path consciousness" },
        { id: 67, name: "පංචම ධ්‍යාන අනාගාමි ඵල චිත්තය", nameEn: "Fifth jhana non-returner fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන අනාගාමි ඵල චිත්තය", descriptionEn: "Fifth jhana non-returner fruition consciousness" },
        { id: 68, name: "පංචම ධ්‍යාන අරහත්ත මග්ග චිත්තය", nameEn: "Fifth jhana arahant path consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "මග්ග", typeEn: "Path", subcategory: "ලෝකෝත්තර මග්ග", subcategoryEn: "Supramundane Path", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන අරහත්ත මග්ග චිත්තය", descriptionEn: "Fifth jhana arahant path consciousness" },
        { id: 69, name: "පංචම ධ්‍යාන අරහත්ත ඵල චිත්තය", nameEn: "Fifth jhana arahant fruition consciousness", category: "ලෝකෝත්තර", categoryEn: "Supramundane", type: "ඵල", typeEn: "Fruition", subcategory: "ලෝකෝත්තර ඵල", subcategoryEn: "Supramundane Fruition", chaithasikaCount: 30, descriptionSi: "පංචම ධ්‍යාන අරහත්ත ඵල චිත්තය", descriptionEn: "Fifth jhana arahant fruition consciousness" },

        // Kamavacara Vipaka Cittas (Resultant Consciousness) - 23 cittas
        { id: 70, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික විපාක සිත", nameEn: "Pleasant feeling with knowledge, accompanied, rootless resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 33, descriptionSi: "සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති විපාක සිත", descriptionEn: "Pleasant feeling with knowledge, accompanied, rootless resultant consciousness" },
        { id: 71, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික විපාක සිත", nameEn: "Pleasant feeling with knowledge, accompanied, with prompting resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 33, descriptionSi: "සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික විපාක සිත", descriptionEn: "Pleasant feeling with knowledge, accompanied, with prompting resultant consciousness" },
        { id: 72, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික විපාක සිත", nameEn: "Pleasant feeling with knowledge, dissociated, rootless resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 32, descriptionSi: "සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති විපාක සිත", descriptionEn: "Pleasant feeling with knowledge, dissociated, rootless resultant consciousness" },
        { id: 73, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික විපාක සිත", nameEn: "Pleasant feeling with knowledge, dissociated, with prompting resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 32, descriptionSi: "සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික විපාක සිත", descriptionEn: "Pleasant feeling with knowledge, dissociated, with prompting resultant consciousness" },
        { id: 74, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික විපාක සිත", nameEn: "Equanimity with knowledge, accompanied, rootless resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 32, descriptionSi: "උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති විපාක සිත", descriptionEn: "Equanimity with knowledge, accompanied, rootless resultant consciousness" },
        { id: 75, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික විපාක සිත", nameEn: "Equanimity with knowledge, accompanied, with prompting resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 32, descriptionSi: "උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික විපාක සිත", descriptionEn: "Equanimity with knowledge, accompanied, with prompting resultant consciousness" },
        { id: 76, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික විපාක සිත", nameEn: "Equanimity with knowledge, dissociated, rootless resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 31, descriptionSi: "උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති විපාක සිත", descriptionEn: "Equanimity with knowledge, dissociated, rootless resultant consciousness" },
        { id: 77, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික විපාක සිත", nameEn: "Equanimity with knowledge, dissociated, with prompting resultant consciousness", category: "විපාක", categoryEn: "Resultant", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර විපාක", subcategoryEn: "Sensuous Sphere Resultant", chaithasikaCount: 31, descriptionSi: "උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික විපාක සිත", descriptionEn: "Equanimity with knowledge, dissociated, with prompting resultant consciousness" },

        // Kamavacara Kriya Cittas (Functional Consciousness) - 11 cittas
        { id: 78, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", nameEn: "Pleasant feeling with knowledge, accompanied, rootless functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 35, descriptionSi: "සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති ක්‍රියා සිත", descriptionEn: "Pleasant feeling with knowledge, accompanied, rootless functional consciousness" },
        { id: 79, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", nameEn: "Pleasant feeling with knowledge, accompanied, with prompting functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 35, descriptionSi: "සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික ක්‍රියා සිත", descriptionEn: "Pleasant feeling with knowledge, accompanied, with prompting functional consciousness" },
        { id: 80, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", nameEn: "Pleasant feeling with knowledge, dissociated, rootless functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 34, descriptionSi: "සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති ක්‍රියා සිත", descriptionEn: "Pleasant feeling with knowledge, dissociated, rootless functional consciousness" },
        { id: 81, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", nameEn: "Pleasant feeling with knowledge, dissociated, with prompting functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 34, descriptionSi: "සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික ක්‍රියා සිත", descriptionEn: "Pleasant feeling with knowledge, dissociated, with prompting functional consciousness" },
        { id: 82, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", nameEn: "Equanimity with knowledge, accompanied, rootless functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 34, descriptionSi: "උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති ක්‍රියා සිත", descriptionEn: "Equanimity with knowledge, accompanied, rootless functional consciousness" },
        { id: 83, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", nameEn: "Equanimity with knowledge, accompanied, with prompting functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 34, descriptionSi: "උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික ක්‍රියා සිත", descriptionEn: "Equanimity with knowledge, accompanied, with prompting functional consciousness" },
        { id: 84, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", nameEn: "Equanimity with knowledge, dissociated, rootless functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 33, descriptionSi: "උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති ක්‍රියා සිත", descriptionEn: "Equanimity with knowledge, dissociated, rootless functional consciousness" },
        { id: 85, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", nameEn: "Equanimity with knowledge, dissociated, with prompting functional consciousness", category: "ක්‍රියා", categoryEn: "Functional", type: "කාමාවචර", typeEn: "Sensuous Sphere", subcategory: "කාමාවචර ක්‍රියා", subcategoryEn: "Sensuous Sphere Functional", chaithasikaCount: 33, descriptionSi: "උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික ක්‍රියා සිත", descriptionEn: "Equanimity with knowledge, dissociated, with prompting functional consciousness" },

        // Rupavacara Vipaka and Kriya Cittas - 10 cittas
        { id: 86, name: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන විපාක සිතය", nameEn: "First jhana resultant consciousness with initial and sustained application", category: "විපාක", categoryEn: "Resultant", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර විපාක", subcategoryEn: "Form Sphere Resultant", chaithasikaCount: 35, descriptionSi: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන විපාක සිත", descriptionEn: "First jhana resultant consciousness with initial and sustained application" },
        { id: 87, name: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන විපාක සිතය", nameEn: "Second jhana resultant consciousness with sustained application", category: "විපාක", categoryEn: "Resultant", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර විපාක", subcategoryEn: "Form Sphere Resultant", chaithasikaCount: 34, descriptionSi: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන විපාක සිත", descriptionEn: "Second jhana resultant consciousness with sustained application" },
        { id: 88, name: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන විපාක සිතය", nameEn: "Third jhana resultant consciousness with joy", category: "විපාක", categoryEn: "Resultant", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර විපාක", subcategoryEn: "Form Sphere Resultant", chaithasikaCount: 33, descriptionSi: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන විපාක සිත", descriptionEn: "Third jhana resultant consciousness with joy" },
        { id: 89, name: "සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන විපාක සිතය", nameEn: "Fourth jhana resultant consciousness with happiness", category: "විපාක", categoryEn: "Resultant", type: "රූපාවචර", typeEn: "Form Sphere", subcategory: "රූපාවචර විපාක", subcategoryEn: "Form Sphere Resultant", chaithasikaCount: 32, descriptionSi: "සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන විපාක සිත", descriptionEn: "Fourth jhana resultant consciousness with happiness" }

        // Note: This is a partial implementation showing the structure
        // The complete dataset would include all 89 cittas with proper IDs and associations
    ],

    chaithasikas: [
        // සාධාරණ චෛතසික (Universal Mental Factors) - 7 factors
        { id: 1, name: "ඵස්සය", nameEn: "Contact (Phassa)", category: "සාධාරණ", categoryEn: "Universal", description: "ස්පර්ශය - චිත්තය සමඟ එක්ව ඇති වන ස්පර්ශයයි", descriptionEn: "Contact - the touching that occurs together with consciousness", detailedExplanation: "ඵස්සය යනු චිත්තය, අරමුණ සහ ඉන්ද්‍රියය යන තුනෙහි සම්මිශ්‍රණයෙන් හටගන්නා ස්පර්ශයයි. ඵස්සය යනු සියලුම චිත්තයන්හි අනිවාර්යයෙන්ම පවතින චෛතසිකයකි. ඵස්සය යනු චිත්තයට අරමුණ හඳුනාගැනීමට උපකාරී වන මූලික සාධකයකි. ඵස්සය නැතිව චිත්තයක් උපදින්නට නොහැකිය.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },
        { id: 2, name: "වේදනා", nameEn: "Feeling (Vedana)", category: "සාධාරණ", categoryEn: "Universal", description: "අනුභවය - සුඛ, දුක්, උපේක්ෂා යන තුන් අනුභවයයි", descriptionEn: "Feeling - the three types of experience: pleasant, unpleasant, and neutral", detailedExplanation: "වේදනා යනු සුඛ, දුක්, උපේක්ෂා යන තුන් අනුභවයයි. වේදනා යනු සියලුම චිත්තයන්හි පවතින අනිවාර්ය චෛතසිකයකි. වේදනා යනු අරමුණ පිළිබඳව අනුභව කිරීමේ සාධකයයි. වේදනා යනු චිත්තයේ අනුභවය පිළිබඳව විශ්ලේෂණය කිරීමේදී මූලික සාධකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 3, name: "සංඤ්ඤා", nameEn: "Perception (Sanna)", category: "සාධාරණ", categoryEn: "Universal", description: "සංඥාව - වස්තුව පිළිබඳ සංඥාවයි", descriptionEn: "Perception - the recognition of objects", detailedExplanation: "සංඤ්ඤා යනු වස්තුව පිළිබඳ සංඥාවයි. සංඤ්ඤා යනු අරමුණ හඳුනාගැනීමේ සාධකයයි. සංඤ්ඤා යනු අරමුණ පිළිබඳව සංඥාවක් ලබාදීමේ චෛතසිකයයි. සංඤ්ඤා නැතිව අරමුණක් හඳුනාගැනීමට නොහැකිය.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },
        { id: 4, name: "චේතනා", nameEn: "Volition (Cetana)", category: "සාධාරණ", categoryEn: "Universal", description: "චේතනාව - කර්මයන් කිරීමේ චේතනාවයි", descriptionEn: "Volition - the intention behind actions", detailedExplanation: "චේතනා යනු කර්මයන් කිරීමේ චේතනාවයි. චේතනා යනු කර්මයන් උත්පාදනය කරන මූලික සාධකයයි. චේතනා යනු කර්මයන් කිරීමේ අභිප්‍රායයයි. චේතනා යනු කර්මයන් පිළිබඳව විශ්ලේෂණය කිරීමේදී මූලික සාධකයකි. අරමුණෙහි තමාද යෙදෙමින් සම්ප්‍රයුක්ත ධර්මයන් යොදා ලන , යොමු කරවන ස්වභාවය චේතනාවේ ", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 5, name: "ඒකග්ගතාවය", nameEn: "One-pointedness (Ekaggata)", category: "සාධාරණ", categoryEn: "Universal", description: "ඒකාග්‍රතාව - එක් අරමුණක් අතට යොමුවීමයි", descriptionEn: "One-pointedness - focusing on a single object", detailedExplanation: "ඒකග්ගතාවය යනු එක් අරමුණක් අතට යොමුවීමයි. ඒකග්ගතාවය යනු චිත්තය එක් අරමුණක් අතට යොමුවීමේ සාධකයයි. ඒකග්ගතාවය යනු සමාධියේ මූලික සාධකයයි. ඒකග්ගතාවය නැතිව චිත්තය එක් අරමුණක් අතට යොමුවීමට නොහැකිය. එක අරමුණකට සිත වැටී යන ස්වභාවය, ශාන්තව පිහිටවන ස්වභාවය, ම්ප්‍රයුක්ත ධර්මයන් සමග සිත විසිරී යා නොදී එකතු කොට තබන ස්වභාවය ඒකාග්‍රතාවය වේ", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },
        { id: 6, name: "ජීවිතින්ද්‍රියය", nameEn: "Life Faculty (Jivitindriya)", category: "සාධාරණ", categoryEn: "Universal", description: "ජීවිතින්ද්‍රිය - චිත්තයේ ජීවිතයයි", descriptionEn: "Life Faculty - the life force of consciousness", detailedExplanation: "ජීවිතින්ද්‍රියය යනු චිත්තයේ ජීවිතයයි. ජීවිතින්ද්‍රියය යනු චිත්තයේ ජීවිතය පවත්වාගෙන යන සාධකයයි. ජීවිතින්ද්‍රියය යනු චිත්තයේ ජීවිතය පවත්වාගෙන යන මූලික සාධකයයි. ජීවිතින්ද්‍රියය නැතිව චිත්තයක් පවත්වාගෙන යාමට නොහැකිය. සම්ප්‍රයුක්ත ධර්මයෙන් අනුපාලනය කරවන ස්වභාවය ජීවිත ඉන්ද්‍රිය වේ", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 7, name: "මනසිකාරය", nameEn: "Attention (Manasikara)", category: "සාධාරණ", categoryEn: "Universal", description: "මනසිකාරය - චිත්තයේ අරමුණට යොමුවීමයි", descriptionEn: "Attention - directing consciousness to an object", detailedExplanation: "මනසිකාරය යනු චිත්තයේ අරමුණට යොමුවීමයි. මනසිකාරය යනු චිත්තය අරමුණක් අතට යොමුවීමේ මූලික සාධකයයි. මනසිකාරය නැතිව චිත්තය අරමුණක් අතට යොමුවීමට නොහැකිය. අරමුණු දිසාවට සම්ප්‍රයුක්ත ධර්මයන් මෙහෙයවන ස්වභාවය අරමුණට අවධානය යොමු කරවන ගතිය මනසිකාරය වේ", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },

        // පක්ෂික චෛතසික (Particular Mental Factors) - 6 factors
        { id: 8, name: "විතක්කය", nameEn: "Initial Application (Vitakka)", category: "පක්ෂික", categoryEn: "Particular", description: "විතක්කය - අරමුණට යොමුවීමයි", descriptionEn: "Initial Application - directing attention to an object", detailedExplanation: "විතක්කය යනු අරමුණට යොමුවීමයි. විතක්කය යනු චිත්තය අරමුණක් අතට යොමුවීමේ මූලික සාධකයයි. විතක්කය යනු ප්‍රථම ධ්‍යානයේ අංගයකි. විතක්කය යනු චිත්තය අරමුණක් අතට යොමුවීමේ පළමු පියවරයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },
        { id: 9, name: "විචාරය", nameEn: "Sustained Application (Vicara)", category: "පක්ෂික", categoryEn: "Particular", description: "විචාරය - අරමුණ අතට ගෙන යෑමයි", descriptionEn: "Sustained Application - keeping attention on an object", detailedExplanation: "විචාරය යනු අරමුණ අතට ගෙන යෑමයි. විචාරය යනු චිත්තය අරමුණක් අතට ගෙන යෑමේ සාධකයයි. විචාරය යනු ප්‍රථම ධ්‍යානයේ අංගයකි. විචාරය යනු චිත්තය අරමුණක් අතට ගෙන යෑමේ දෙවන පියවරයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 10, name: "අධිමොක්ඛය", nameEn: "Decision (Adhimokkha)", category: "පක්ෂික", categoryEn: "Particular", description: "අධිමොක්ඛය - අරමුණ අතට ගෙන යෑමයි", descriptionEn: "Decision - making a firm decision about an object", detailedExplanation: "අධිමොක්ඛය යනු අරමුණ පිළිබඳව නිශ්චය කිරීමයි. අධිමොක්ඛය යනු අරමුණ පිළිබඳව නිශ්චය කිරීමේ සාධකයයි. අධිමොක්ඛය යනු අරමුණ පිළිබඳව නිශ්චය කිරීමේ මූලික සාධකයයි. අධිමොක්ඛය යනු අරමුණ පිළිබඳව නිශ්චය කිරීමේ චෛතසිකයයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },
        { id: 11, name: "විරියය", nameEn: "Energy (Viriya)", category: "පක්ෂික", categoryEn: "Particular", description: "විරියය - උත්සාහයයි", descriptionEn: "Energy - effort and exertion", detailedExplanation: "විරියය යනු උත්සාහයයි. විරියය යනු කර්මයන් කිරීමේදී උත්සාහය දැක්වීමේ සාධකයයි. විරියය යනු කර්මයන් කිරීමේදී උත්සාහය දැක්වීමේ මූලික සාධකයයි. විරියය යනු කර්මයන් කිරීමේදී උත්සාහය දැක්වීමේ චෛතසිකයයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 12, name: "පීතිය", nameEn: "Joy (Piti)", category: "පක්ෂික", categoryEn: "Particular", description: "පීතිය - සතුටයි", descriptionEn: "Joy - delight and satisfaction", detailedExplanation: "පීතිය යනු සතුටයි. පීතිය යනු චිත්තයේ සතුට උත්පාදනය කරන සාධකයයි. පීතිය යනු ධ්‍යානයේ අංගයකි. පීතිය යනු චිත්තයේ සතුට උත්පාදනය කරන චෛතසිකයයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },
        { id: 13, name: "ඡන්දය", nameEn: "Desire (Chanda)", category: "පක්ෂික", categoryEn: "Particular", description: "ඡන්දය - අභිලාෂයයි", descriptionEn: "Desire - wish and aspiration", detailedExplanation: "ඡන්දය යනු අභිලාෂයයි. ඡන්දය යනු කර්මයන් කිරීමේ අභිලාෂයයි. ඡන්දය යනු කර්මයන් කිරීමේ අභිලාෂය පිළිබඳව විශ්ලේෂණය කිරීමේදී මූලික සාධකයයි. ඡන්දය යනු කර්මයන් කිරීමේ අභිලාෂයයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },

        // අකුසල් චෛතසික (Unwholesome Mental Factors) - 14 factors
        { id: 14, name: "මෝහය", nameEn: "Delusion (Moha)", category: "අකුසල්", categoryEn: "Unwholesome", description: "මෝහය - මුළාවයි", descriptionEn: "Delusion - confusion and ignorance", detailedExplanation: "මෝහය යනු මුළාවයි. මෝහය යනු අකුසල් චිත්තයන්හි මූල සාධකයකි. මෝහය යනු අවිජ්ජාවයි. මෝහය යනු අකුසල් චිත්තයන්හි මූල සාධකයකි. මෝහය නැතිව අකුසල් චිත්තයක් උපදින්නට නොහැකිය.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 15, name: "අහිරිකය", nameEn: "Shamelessness (Ahirika)", category: "අකුසල්", categoryEn: "Unwholesome", description: "අහිරිකය - ලජ්ජා නැතිකමයි", descriptionEn: "Shamelessness - lack of moral shame", detailedExplanation: "අහිරිකය යනු ලජ්ජා නැතිකමයි. අහිරිකය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. අහිරිකය යනු ලජ්ජා නැතිකමයි. අහිරිකය යනු අකුසල් කර්මයන් කිරීමේදී ලජ්ජා නැතිකමයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 16, name: "අනොත්තප්පය", nameEn: "Fearlessness (Anottappa)", category: "අකුසල්", categoryEn: "Unwholesome", description: "අනොත්තප්පය - භය නැතිකමයි", descriptionEn: "Fearlessness - lack of moral dread", detailedExplanation: "අනොත්තප්පය යනු භය නැතිකමයි. අනොත්තප්පය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. අනොත්තප්පය යනු භය නැතිකමයි. අනොත්තප්පය යනු අකුසල් කර්මයන් කිරීමේදී භය නැතිකමයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 17, name: "උද්ධච්චය", nameEn: "Restlessness (Uddhacca)", category: "අකුසල්", categoryEn: "Unwholesome", description: "උද්ධච්චය - උද්ධච්චයයි", descriptionEn: "Restlessness - mental agitation", detailedExplanation: "උද්ධච්චය යනු චිත්තයේ උද්ධච්චයයි. උද්ධච්චය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. උද්ධච්චය යනු චිත්තයේ උද්ධච්චයයි. උද්ධච්චය යනු චිත්තයේ සන්සුන් බව නැතිකමයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, අභිධර්ම මාර්ගය" },
        { id: 18, name: "ලෝභය", nameEn: "Greed (Lobha)", category: "අකුසල්", categoryEn: "Unwholesome", description: "ලෝභය - ලෝභයයි", descriptionEn: "Greed - attachment and craving", detailedExplanation: "ලෝභය යනු ලෝභයයි. ලෝභය යනු අකුසල් චිත්තයන්හි මූල සාධකයකි. ලෝභය යනු රාගයයි. ලෝභය යනු අකුසල් චිත්තයන්හි මූල සාධකයකි. ලෝභය නැතිව ලෝභ මූල චිත්තයක් උපදින්නට නොහැකිය.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 19, name: "දිට්ඨිය", nameEn: "Wrong View (Ditthi)", category: "අකුසල්", categoryEn: "Unwholesome", description: "දිට්ඨිය - දෘෂ්ටියයි", descriptionEn: "Wrong View - incorrect understanding", detailedExplanation: "දිට්ඨිය යනු දෘෂ්ටියයි. දිට්ඨිය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. දිට්ඨිය යනු මිච්ඡාදිට්ඨියයි. දිට්ඨිය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 20, name: "මානය", nameEn: "Conceit (Mana)", category: "අකුසල්", categoryEn: "Unwholesome", description: "මානය - මානයයි", descriptionEn: "Conceit - pride and arrogance", detailedExplanation: "මානය යනු මානයයි. මානය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. මානය යනු අභිමානයයි. මානය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 21, name: "දෝසය", nameEn: "Hatred (Dosa)", category: "අකුසල්", categoryEn: "Unwholesome", description: "දෝසය - දෝසයයි", descriptionEn: "Hatred - aversion and anger", detailedExplanation: "දෝසය යනු දෝසයයි. දෝසය යනු අකුසල් චිත්තයන්හි මූල සාධකයකි. දෝසය යනු පටිඝයයි. දෝසය යනු අකුසල් චිත්තයන්හි මූල සාධකයකි. දෝසය නැතිව ද්වේශ මූල චිත්තයක් උපදින්නට නොහැකිය.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 22, name: "ඉස්සාව", nameEn: "Envy (Issa)", category: "අකුසල්", categoryEn: "Unwholesome", description: "ඉස්සාව - ඊර්ෂ්‍යාවයි", descriptionEn: "Envy - jealousy and resentment", detailedExplanation: "ඉස්සාව යනු ඊර්ෂ්‍යාවයි. ඉස්සාව යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. ඉස්සාව යනු ඊර්ෂ්‍යාවයි. ඉස්සාව යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 23, name: "මච්ඡරිය", nameEn: "Avarice (Macchariya)", category: "අකුසල්", categoryEn: "Unwholesome", description: "මච්ඡරිය - මච්ඡරියයි", descriptionEn: "Avarice - stinginess and selfishness", detailedExplanation: "මච්ඡරිය යනු මච්ඡරියයි. මච්ඡරිය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. මච්ඡරිය යනු මච්ඡරියයි. මච්ඡරිය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 24, name: "කුක්කුච්චය", nameEn: "Worry (Kukkucca)", category: "අකුසල්", categoryEn: "Unwholesome", description: "කුක්කුච්චය - කුක්කුච්චයයි", descriptionEn: "Worry - remorse and anxiety", detailedExplanation: "කුක්කුච්චය යනු කුක්කුච්චයයි. කුක්කුච්චය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. කුක්කුච්චය යනු කුක්කුච්චයයි. කුක්කුච්චය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 25, name: "ථීනය", nameEn: "Sloth (Thina)", category: "අකුසල්", categoryEn: "Unwholesome", description: "ථීනය - ථීනයයි", descriptionEn: "Sloth - mental sluggishness", detailedExplanation: "ථීනය යනු ථීනයයි. ථීනය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. ථීනය යනු චිත්තයේ ථීනයයි. ථීනය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 26, name: "මිද්ධය", nameEn: "Torpor (Middha)", category: "අකුසල්", categoryEn: "Unwholesome", description: "මිද්ධය - මිද්ධයයි", descriptionEn: "Torpor - mental drowsiness", detailedExplanation: "මිද්ධය යනු මිද්ධයයි. මිද්ධය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. මිද්ධය යනු චිත්තයේ මිද්ධයයි. මිද්ධය යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 27, name: "විචිකිච්ඡාව", nameEn: "Doubt (Vicikiccha)", category: "අකුසල්", categoryEn: "Unwholesome", description: "විචිකිච්ඡාව - සැකයයි", descriptionEn: "Doubt - uncertainty and skepticism", detailedExplanation: "විචිකිච්ඡාව යනු සැකයයි. විචිකිච්ඡාව යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. විචිකිච්ඡාව යනු සැකයයි. විචිකිච්ඡාව යනු අකුසල් චිත්තයන්හි පවතින චෛතසිකයකි. විචිකිච්ඡාව නැතිව මෝහ මූල චිත්තයක් උපදින්නට නොහැකිය.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },

        // සෝබන චෛතසික (Beautiful Mental Factors) - 25 factors
        { id: 28, name: "සද්ධා", nameEn: "Faith (Saddha)", category: "සෝබන", categoryEn: "Beautiful", description: "සද්ධාව - විශ්වාසයයි", descriptionEn: "Faith - confidence and trust", detailedExplanation: "සද්ධාව යනු විශ්වාසයයි. සද්ධාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. සද්ධාව යනු බුදු, ධර්ම, සංඝ යන තෙරුවන් කෙරෙහි විශ්වාසයයි. සද්ධාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. සද්ධාව යනු කුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 29, name: "සති", nameEn: "Mindfulness (Sati)", category: "සෝබන", categoryEn: "Beautiful", description: "සතිය - සිහියයි", descriptionEn: "Mindfulness - awareness and recollection", detailedExplanation: "සතිය යනු සිහියයි. සතිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. සතිය යනු සිහියයි. සතිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. සතිය යනු කුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 30, name: "හිරි", nameEn: "Moral Shame (Hiri)", category: "සෝබන", categoryEn: "Beautiful", description: "හිරිය - ලජ්ජාවයි", descriptionEn: "Moral Shame - sense of shame", detailedExplanation: "හිරිය යනු ලජ්ජාවයි. හිරිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. හිරිය යනු ලජ්ජාවයි. හිරිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 31, name: "ඔත්තප්ප", nameEn: "Moral Dread (Ottappa)", category: "සෝබන", categoryEn: "Beautiful", description: "ඔත්තප්පය - භයයි", descriptionEn: "Moral Dread - fear of wrongdoing", detailedExplanation: "ඔත්තප්පය යනු භයයි. ඔත්තප්පය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. ඔත්තප්පය යනු භයයි. ඔත්තප්පය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 32, name: "අලෝභ", nameEn: "Non-greed (Alobha)", category: "සෝබන", categoryEn: "Beautiful", description: "අලෝභය - ලෝභ නැතිකමයි", descriptionEn: "Non-greed - freedom from attachment", detailedExplanation: "අලෝභය යනු ලෝභ නැතිකමයි. අලෝභය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. අලෝභය යනු ලෝභ නැතිකමයි. අලෝභය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. අලෝභය යනු කුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 33, name: "අදෝස", nameEn: "Non-hatred (Adosa - Metta)", category: "සෝබන", categoryEn: "Beautiful", description: "අදෝසය (මෛත්‍රිය) - දෝස නැතිකමයි", descriptionEn: "Non-hatred (Loving-kindness) - freedom from aversion", detailedExplanation: "අදෝසය (මෛත්‍රිය) යනු දෝස නැතිකමයි. අදෝසය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. අදෝසය යනු මෛත්‍රියයි. අදෝසය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. අදෝසය යනු කුසල් චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 34, name: "තත්‍රමජ්ඣත්තතා", nameEn: "Equanimity (Tatramajjhattata)", category: "සෝබන", categoryEn: "Beautiful", description: "තත්‍රමජ්ඣත්තතා - උපේක්ෂාවයි", descriptionEn: "Equanimity - mental balance", detailedExplanation: "තත්‍රමජ්ඣත්තතා යනු උපේක්ෂාවයි. තත්‍රමජ්ඣත්තතා යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. තත්‍රමජ්ඣත්තතා යනු උපේක්ෂාවයි. තත්‍රමජ්ඣත්තතා යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 35, name: "කායපස්සද්ධි", nameEn: "Bodily Tranquility (Kayapassaddhi)", category: "සෝබන", categoryEn: "Beautiful", description: "කායපස්සද්ධිය - කයේ සන්සුන් බවයි", descriptionEn: "Bodily Tranquility - calmness of body", detailedExplanation: "කායපස්සද්ධිය යනු කයේ සන්සුන් බවයි. කායපස්සද්ධිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කායපස්සද්ධිය යනු කයේ සන්සුන් බවයි. කායපස්සද්ධිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 36, name: "චිත්තපස්සද්ධි", nameEn: "Mental Tranquility (Cittapassaddhi)", category: "සෝබන", categoryEn: "Beautiful", description: "චිත්තපස්සද්ධිය - සිතේ සන්සුන් බවයි", descriptionEn: "Mental Tranquility - calmness of mind", detailedExplanation: "චිත්තපස්සද්ධිය යනු සිතේ සන්සුන් බවයි. චිත්තපස්සද්ධිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. චිත්තපස්සද්ධිය යනු සිතේ සන්සුන් බවයි. චිත්තපස්සද්ධිය යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 37, name: "කායලහුතා", nameEn: "Bodily Lightness (Kayalahuta)", category: "සෝබන", categoryEn: "Beautiful", description: "කායලහුතාව - කයේ සැහැල්ලු බවයි", descriptionEn: "Bodily Lightness - lightness of body", detailedExplanation: "කායලහුතාව යනු කයේ සැහැල්ලු බවයි. කායලහුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කායලහුතාව යනු කයේ සැහැල්ලු බවයි. කායලහුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 38, name: "චිත්තලහුතා", nameEn: "Mental Lightness (Cittalahuta)", category: "සෝබන", categoryEn: "Beautiful", description: "චිත්තලහුතාව - සිතේ සැහැල්ලු බවයි", descriptionEn: "Mental Lightness - lightness of mind", detailedExplanation: "චිත්තලහුතාව යනු සිතේ සැහැල්ලු බවයි. චිත්තලහුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. චිත්තලහුතාව යනු සිතේ සැහැල්ලු බවයි. චිත්තලහුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 39, name: "කායමුදුතා", nameEn: "Bodily Malleability (Kayamuduta)", category: "සෝබන", categoryEn: "Beautiful", description: "කායමුදුතාව - කයේ මෘදු බවයි", descriptionEn: "Bodily Malleability - softness of body", detailedExplanation: "කායමුදුතාව යනු කයේ මෘදු බවයි. කායමුදුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කායමුදුතාව යනු කයේ මෘදු බවයි. කායමුදුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 40, name: "චිත්තමුදුතා", nameEn: "Mental Malleability (Cittamuduta)", category: "සෝබන", categoryEn: "Beautiful", description: "චිත්තමුදුතාව - සිතේ මෘදු බවයි", descriptionEn: "Mental Malleability - softness of mind", detailedExplanation: "චිත්තමුදුතාව යනු සිතේ මෘදු බවයි. චිත්තමුදුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. චිත්තමුදුතාව යනු සිතේ මෘදු බවයි. චිත්තමුදුතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 41, name: "කායකම්මඤ්ඤතා", nameEn: "Bodily Workability (Kayakammannata)", category: "සෝබන", categoryEn: "Beautiful", description: "කායකම්මඤ්ඤතාව - කයේ කර්මාන්‍ය බවයි", descriptionEn: "Bodily Workability - workability of body", detailedExplanation: "කායකම්මඤ්ඤතාව යනු කයේ කර්මාන්‍ය බවයි. කායකම්මඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කායකම්මඤ්ඤතාව යනු කයේ කර්මාන්‍ය බවයි. කායකම්මඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 42, name: "චිත්තකම්මඤ්ඤතා", nameEn: "Mental Workability (Cittakammannata)", category: "සෝබන", categoryEn: "Beautiful", description: "චිත්තකම්මඤ්ඤතාව - සිතේ කර්මාන්‍ය බවයි", descriptionEn: "Mental Workability - workability of mind", detailedExplanation: "චිත්තකම්මඤ්ඤතාව යනු සිතේ කර්මාන්‍ය බවයි. චිත්තකම්මඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. චිත්තකම්මඤ්ඤතාව යනු සිතේ කර්මාන්‍ය බවයි. චිත්තකම්මඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 43, name: "කායපාගුඤ්ඤතා", nameEn: "Bodily Proficiency (Kayapagunnata)", category: "සෝබන", categoryEn: "Beautiful", description: "කායපාගුඤ්ඤතාව - කයේ ප්‍රගුණ බවයි", descriptionEn: "Bodily Proficiency - proficiency of body", detailedExplanation: "කායපාගුඤ්ඤතාව යනු කයේ ප්‍රගුණ බවයි. කායපාගුඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කායපාගුඤ්ඤතාව යනු කයේ ප්‍රගුණ බවයි. කායපාගුඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 44, name: "චිත්තපාගුඤ්ඤතා", nameEn: "Mental Proficiency (Cittapagunnata)", category: "සෝබන", categoryEn: "Beautiful", description: "චිත්තපාගුඤ්ඤතාව - සිතේ ප්‍රගුණ බවයි", descriptionEn: "Mental Proficiency - proficiency of mind", detailedExplanation: "චිත්තපාගුඤ්ඤතාව යනු සිතේ ප්‍රගුණ බවයි. චිත්තපාගුඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. චිත්තපාගුඤ්ඤතාව යනු සිතේ ප්‍රගුණ බවයි. චිත්තපාගුඤ්ඤතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 45, name: "කායුජුකතා", nameEn: "Rectitude of mental body (Kayujukata)", category: "සෝබන", categoryEn: "Beautiful", description: "කායුජුකතා - චෛතසික කාය සහ චිත්තයේ ඍජු බව", descriptionEn: "Uprightness of mental body", detailedExplanation: "කායුජුකතා යනු චෛතසික කාය සහ චිත්තයේ ඍජු බවයි. කායුජුකතා යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කායුජුකතා යනු සෘජු බවයි. කායුජුකතා යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 46, name: "චිත්තුජුකතා", nameEn: "Rectitude of consciousness (Cittujukata)", category: "සෝබන", categoryEn: "Beautiful", description: "චිත්තුජුකතා - චෛතසික කාය සහ චිත්තයේ ඍජු බව", descriptionEn: "Uprightness of consciousness", detailedExplanation: "චිත්තුජුකතා යනු චෛතසික කාය සහ චිත්තයේ ඍජු බවයි. චිත්තුජුකතා යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. චිත්තුජුකතා යනු සෘජු බවයි. චිත්තුජුකතා යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 47, name: "සම්මාවාචා", nameEn: "Right Speech (Sammavaca)", category: "සෝබන", categoryEn: "Beautiful", description: "සම්මාවාචා - නිවැරදි වචන, වචනයෙන් පව් වැළැකීම", descriptionEn: "Right Speech - abstaining from wrong speech", detailedExplanation: "සම්මාවාචා යනු නිවැරදි වචන කතා කිරීමයි. සම්මාවාචා යනු විරති චෛතසිකයකි. සම්මාවාචා යනු බොරු කීම, කේලම් කීම, පරුෂ වචන කීම සහ සම්ප්‍රලාප දෙඩීම යන හතරෙන් වැළකීමයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 48, name: "සම්මාකම්මන්ත", nameEn: "Right Action (Sammakammanta)", category: "සෝබන", categoryEn: "Beautiful", description: "සම්මාකම්මන්ත - නිවැරදි ක්‍රියා, කායකර්මයෙන් පව් වැළැකීම", descriptionEn: "Right Action - abstaining from wrong action", detailedExplanation: "සම්මාකම්මන්ත යනු නිවැරදි ක්‍රියා කිරීමයි. සම්මාවාචා යනු විරති චෛතසිකයකි. සම්මාකම්මන්ත යනු සතුන් මැරීම, සොරකම් කිරීම සහ කාමයේ වරදවා හැසිරීම යන තුනෙන් වැළකීමයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 49, name: "සම්මාආජීව", nameEn: "Right Livelihood (Sammaajiva)", category: "සෝබන", categoryEn: "Beautiful", description: "සම්මාආජීව - නිවැරදි ජීවනෝපාය", descriptionEn: "Right Livelihood - abstaining from wrong livelihood", detailedExplanation: "සම්මාආජීව යනු නිවැරදි ජීවනෝපායයි. සම්මාආජීව යනු විරති චෛතසිකයකි. සම්මාආජීව යනු වෙළඳාම් පහෙන් සහ වැරදි ජීවනෝපායන්ගෙන් වැළකීමයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය" },
        { id: 50, name: "කරුණා", nameEn: "Compassion (Karuna)", category: "සෝබන", categoryEn: "Beautiful", description: "කරුණාව - කරුණාවයි", descriptionEn: "Compassion - sympathy for others' suffering", detailedExplanation: "කරුණාව යනු කරුණාවයි. කරුණාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කරුණාව යනු අනුන්ගේ දුක්ඛය කෙරෙහි කරුණාවයි. කරුණාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. කරුණාව යනු අප්පමාඤ්ඤාවකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 51, name: "මුදිතා", nameEn: "Appreciative Joy (Mudita)", category: "සෝබන", categoryEn: "Beautiful", description: "මුදිතාව - මුදිතාවයි", descriptionEn: "Appreciative Joy - joy in others' success", detailedExplanation: "මුදිතාව යනු මුදිතාවයි. මුදිතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. මුදිතාව යනු අනුන්ගේ සම්පත්තිය කෙරෙහි සතුටයි. මුදිතාව යනු සෝබන චිත්තයන්හි පවතින චෛතසිකයකි. මුදිතාව යනු අප්පමාඤ්ඤාවකි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" },
        { id: 52, name: "පඤ්ඤා", nameEn: "Wisdom (Panna)", category: "සෝබන", categoryEn: "Beautiful", description: "පඤ්ඤා - ප්‍රඥාවයි", descriptionEn: "Wisdom - understanding and insight", detailedExplanation: "පඤ්ඤා යනු ප්‍රඥාවයි. පඤ්ඤා යනු සෝබන චිත්තයන්හි අනිවාර්යයෙන්ම නොපවතින නමුත්, ඤාණ සම්ප්‍රයුක්ත චිත්තවල පවතින චෛතසිකයකි. පඤ්ඤා යනු අමෝහයයි.", bookReference: "ත්‍රිපිටකය - අභිධර්ම පිටකය, රේනුකානේ චන්දවිමල හිමිගේ ග්‍රන්ථ, කෙලෙස් එකදහස් පන්සියය, අභිධර්ම මාර්ගය" }
    ],

    // Chaithasika associations with different cittas
    associations: {
        1: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18, 19], // අකුසල් - ලෝභ
        2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 25, 26], // අකුසල් - ලෝභ (සසංස්කාරික)
        3: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18], // අකුසල් - ලෝභ (දිට්ඨි විප්)
        4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 25, 26], // අකුසල් - ලෝභ (දිට්ඨි විප්, සසං)
        5: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18, 19], // අකුසල් - ලෝභ (උපේක්ෂා)
        6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 25, 26], // අකුසල් - ලෝභ (උපේක්ෂා, සසං)
        7: [1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18], // අකුසල් - ලෝභ (උපේක්ෂා, දිට්ඨි විප්)
        8: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 25, 26], // අකුසල් - ලෝභ (උපේක්ෂා, දිට්ඨි විප්, සසං)
        9: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 21, 22, 23, 24], // අකුසල් - ද්වේශ
        10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26], // අකුසල් - ද්වේශ (සසං)
        11: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 27], // අකුසල් - මෝහ (විචිකිච්ඡා)
        12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 17], // අකුසල් - මෝහ (උද්ධච්ච)
        13: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], // කුසල් - ඤාණ සම් (38)
        14: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], // කුසල් - ඤාණ සම් (සසං)
        15: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], // කුසල් - ඤාණ විප් (37)
        16: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], // කුසල් - ඤාණ විප් (සසං)
        17: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], // කුසල් - උපේක්ෂා ඤාණ සම් (37) - No Piti (12)
        18: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], // කුසල් - උපේක්ෂා (සසං)
        19: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], // කුසල් - උපේක්ෂා ඤාණ විප් (36) - No Piti, No Panna
        20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], // කුසල් - උපේක්ෂා ඤාණ විප් (සසං)
        21: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 50, 51, 52], // රූප - 1st Jhana (35) - No Virati
        22: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 50, 51, 52], // රූප - 2nd Jhana (34) - No Vitakka (8)
        23: [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 50, 51, 52], // රූප - 3rd Jhana (33) - No Vitakka, Vicara (9)
        24: [1, 2, 3, 4, 5, 6, 7, 10, 11, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 50, 51, 52], // රූප - 4th Jhana (32) - No Piti (12)
        25: [1, 2, 3, 4, 5, 6, 7, 10, 11, 13, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 52] // රූප - 5th Jhana (30) - No Appamanna (50, 51) in Upekkha Jhana
    }
};

// Make meditationData globally available for fallback when JSON files can't be loaded (local file://)
window.meditationData = meditationData;

// Global variables
let selectedCittas = [];
let filteredData = [...meditationData.cittas];
let currentLanguage = 'si'; // 'si' for Sinhala, 'en' for English

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const tableBody = document.getElementById('tableBody');
const selectionGrid = document.getElementById('selectionGrid');
const comparisonResults = document.getElementById('comparisonResults');
const comparisonTableBody = document.getElementById('comparisonTableBody');
const languageSwitcher = document.getElementById('languageSwitcher');

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    populateTable();
    populateSelectionGrid();
    setupEventListeners();
    initializeLanguageSwitcher();
    initializeFeedbackWidget();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Populate the main data table
function populateTable() {
    tableBody.innerHTML = '';

    filteredData.forEach(citta => {
        const row = document.createElement('tr');
        const displayName = currentLanguage === 'si' ? citta.name : (citta.nameEn || citta.name);
        const displayCategory = currentLanguage === 'si' ? citta.category : (citta.categoryEn || citta.category);
        const displayType = currentLanguage === 'si' ? citta.type : (citta.typeEn || citta.type);

        const displayDescription = currentLanguage === 'si' ?
            (citta.descriptionSi || citta.description || citta.name) :
            (citta.descriptionEn || citta.description || citta.nameEn);

        // Create row elements properly to avoid HTML injection issues
        const idCell = document.createElement('td');
        idCell.textContent = citta.id;

        const nameCell = document.createElement('td');
        nameCell.textContent = displayName;

        const categoryCell = document.createElement('td');
        const categoryBadge = document.createElement('span');
        const categoryClass = (citta.categoryEn || citta.category).toLowerCase().replace(/\s+/g, '-');
        categoryBadge.className = `category-badge category-${categoryClass}`;
        categoryBadge.textContent = displayCategory;
        categoryCell.appendChild(categoryBadge);

        const typeCell = document.createElement('td');
        typeCell.textContent = displayType;

        const descCell = document.createElement('td');
        descCell.textContent = displayDescription;

        const actionCell = document.createElement('td');
        const viewBtn = document.createElement('button');
        viewBtn.className = 'view-details-btn';
        viewBtn.setAttribute('data-citta-id', citta.id);
        viewBtn.title = currentLanguage === 'si' ? 'විස්තර බලන්න' : 'View Details';
        viewBtn.innerHTML = '<i class="fas fa-eye"></i> <span data-si="විස්තර" data-en="View">විස්තර</span>';

        actionCell.appendChild(viewBtn);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(typeCell);
        row.appendChild(descCell);
        row.appendChild(actionCell);
        row.style.cursor = 'pointer';
        // Allow entire row to open details on mobile/tablet
        row.addEventListener('click', function (e) {
            // avoid double-triggering when actual button clicked
            if (e.target.closest('button')) {
                return;
            }
            if (window.matchMedia('(max-width: 1024px)').matches) {
                viewBtn.click();
            }
        });

        // Add click handler to the button - this takes priority
        if (viewBtn) {
            viewBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                const cittaId = parseInt(this.getAttribute('data-citta-id') || citta.id);
                console.log('View details button clicked for citta:', cittaId);

                // For cittas 1-3, use new detailed pages
                if (cittaId === 1) {
                    console.log('Navigating to citta-1-detailed-page.html');
                    window.location.href = 'citta-1-detailed-page.html';
                    return false;
                }
                if (cittaId === 2) {
                    console.log('Navigating to citta-2-detailed-page.html');
                    window.location.href = 'citta-2-detailed-page.html';
                    return false;
                }
                if (cittaId === 3) {
                    console.log('Navigating to citta-3-detailed-page.html');
                    window.location.href = 'citta-3-detailed-page.html';
                    return false;
                }
                if (cittaId === 4) {
                    console.log('Navigating to citta-4-detailed-page.html');
                    window.location.href = 'citta-4-detailed-page.html';
                    return false;
                }
                if (cittaId === 5) {
                    console.log('Navigating to citta-5-detailed-page.html');
                    window.location.href = 'citta-5-detailed-page.html';
                    return false;
                }
                if (cittaId === 6) {
                    console.log('Navigating to citta-6-detailed-page.html');
                    window.location.href = 'citta-6-detailed-page.html';
                    return false;
                }
                if (cittaId === 7) {
                    console.log('Navigating to citta-7-detailed-page.html');
                    window.location.href = 'citta-7-detailed-page.html';
                    return false;
                }
                if (cittaId === 8) {
                    console.log('Navigating to citta-8-detailed-page.html');
                    window.location.href = 'citta-8-detailed-page.html';
                    return false;
                }
                if (cittaId === 9) {
                    console.log('Navigating to citta-9-detailed-page.html');
                    window.location.href = 'citta-9-detailed-page.html';
                    return false;
                }
                if (cittaId === 10) {
                    console.log('Navigating to citta-10-detailed-page.html');
                    window.location.href = 'citta-10-detailed-page.html';
                    return false;
                }
                if (cittaId === 11) {
                    console.log('Navigating to citta-11-detailed-page.html');
                    window.location.href = 'citta-11-detailed-page.html';
                    return false;
                }
                if (cittaId === 12) {
                    console.log('Navigating to citta-12-detailed-page.html');
                    window.location.href = 'citta-12-detailed-page.html';
                    return false;
                }
                if (cittaId === 13) {
                    console.log('Navigating to citta-13-detailed-page.html');
                    window.location.href = 'citta-13-detailed-page.html';
                    return false;
                }
                if (cittaId === 14) {
                    console.log('Navigating to citta-14-detailed-page.html');
                    window.location.href = 'citta-14-detailed-page.html';
                    return false;
                }
                if (cittaId === 15) {
                    console.log('Navigating to citta-15-detailed-page.html');
                    window.location.href = 'citta-15-detailed-page.html';
                    return false;
                }
                if (cittaId === 16) {
                    console.log('Navigating to citta-16-detailed-page.html');
                    window.location.href = 'citta-16-detailed-page.html';
                    return false;
                }
                if (cittaId === 17) {
                    console.log('Navigating to citta-17-detailed-page.html');
                    window.location.href = 'citta-17-detailed-page.html';
                    return false;
                }
                if (cittaId === 18) {
                    console.log('Navigating to citta-18-detailed-page.html');
                    window.location.href = 'citta-18-detailed-page.html';
                    return false;
                }
                if (cittaId === 19) {
                    console.log('Navigating to citta-19-detailed-page.html');
                    window.location.href = 'citta-19-detailed-page.html';
                    return false;
                }
                if (cittaId === 20) {
                    console.log('Navigating to citta-20-detailed-page.html');
                    window.location.href = 'citta-20-detailed-page.html';
                    return false;
                }
                if (cittaId === 21) {
                    console.log('Navigating to citta-21-detailed-page.html');
                    window.location.href = 'citta-21-detailed-page.html';
                    return false;
                }
                if (cittaId === 22) {
                    console.log('Navigating to citta-22-detailed-page.html');
                    window.location.href = 'citta-22-detailed-page.html';
                    return false;
                }
                if (cittaId === 23) {
                    console.log('Navigating to citta-23-detailed-page.html');
                    window.location.href = 'citta-23-detailed-page.html';
                    return false;
                }
                if (cittaId === 24) {
                    console.log('Navigating to citta-24-detailed-page.html');
                    window.location.href = 'citta-24-detailed-page.html';
                    return false;
                }
                if (cittaId === 25) {
                    console.log('Navigating to citta-25-detailed-page.html');
                    window.location.href = 'citta-25-detailed-page.html';
                    return false;
                }
                if (cittaId === 26) {
                    console.log('Navigating to citta-26-detailed-page.html');
                    window.location.href = 'citta-26-detailed-page.html';
                    return false;
                }
                if (cittaId === 27) {
                    console.log('Navigating to citta-27-detailed-page.html');
                    window.location.href = 'citta-27-detailed-page.html';
                    return false;
                }
                if (cittaId === 28) {
                    console.log('Navigating to citta-28-detailed-page.html');
                    window.location.href = 'citta-28-detailed-page.html';
                    return false;
                }
                if (cittaId === 29) {
                    console.log('Navigating to citta-29-detailed-page.html');
                    window.location.href = 'citta-29-detailed-page.html';
                    return false;
                }
                if (cittaId === 30) {
                    console.log('Navigating to citta-30-detailed-page.html');
                    window.location.href = 'citta-30-detailed-page.html';
                    return false;
                }
                if (cittaId === 31) {
                    console.log('Navigating to citta-31-detailed-page.html');
                    window.location.href = 'citta-31-detailed-page.html';
                    return false;
                }
                if (cittaId === 32) {
                    console.log('Navigating to citta-32-detailed-page.html');
                    window.location.href = 'citta-32-detailed-page.html';
                    return false;
                }
                if (cittaId === 33) {
                    console.log('Navigating to citta-33-detailed-page.html');
                    window.location.href = 'citta-33-detailed-page.html';
                    return false;
                }
                if (cittaId === 34) {
                    console.log('Navigating to citta-34-detailed-page.html');
                    window.location.href = 'citta-34-detailed-page.html';
                    return false;
                }
                if (cittaId === 35) {
                    console.log('Navigating to citta-35-detailed-page.html');
                    window.location.href = 'citta-35-detailed-page.html';
                    return false;
                }
                if (cittaId === 36) {
                    console.log('Navigating to citta-36-detailed-page.html');
                    window.location.href = 'citta-36-detailed-page.html';
                    return false;
                }
                if (cittaId === 37) {
                    console.log('Navigating to citta-37-detailed-page.html');
                    window.location.href = 'citta-37-detailed-page.html';
                    return false;
                }
                if (cittaId === 38) {
                    console.log('Navigating to citta-38-detailed-page.html');
                    window.location.href = 'citta-38-detailed-page.html';
                    return false;
                }
                if (cittaId === 39) {
                    console.log('Navigating to citta-39-detailed-page.html');
                    window.location.href = 'citta-39-detailed-page.html';
                    return false;
                }
                if (cittaId === 40) {
                    console.log('Navigating to citta-40-detailed-page.html');
                    window.location.href = 'citta-40-detailed-page.html';
                    return false;
                }
                if (cittaId === 41) {
                    console.log('Navigating to citta-41-detailed-page.html');
                    window.location.href = 'citta-41-detailed-page.html';
                    return false;
                }
                if (cittaId === 42) {
                    console.log('Navigating to citta-42-detailed-page.html');
                    window.location.href = 'citta-42-detailed-page.html';
                    return false;
                }
                if (cittaId === 43) {
                    console.log('Navigating to citta-43-detailed-page.html');
                    window.location.href = 'citta-43-detailed-page.html';
                    return false;
                }
                if (cittaId === 44) {
                    console.log('Navigating to citta-44-detailed-page.html');
                    window.location.href = 'citta-44-detailed-page.html';
                    return false;
                }
                if (cittaId === 45) {
                    console.log('Navigating to citta-45-detailed-page.html');
                    window.location.href = 'citta-45-detailed-page.html';
                    return false;
                }
                if (cittaId === 46) {
                    console.log('Navigating to citta-46-detailed-page.html');
                    window.location.href = 'citta-46-detailed-page.html';
                    return false;
                }
                if (cittaId === 47) {
                    console.log('Navigating to citta-47-detailed-page.html');
                    window.location.href = 'citta-47-detailed-page.html';
                    return false;
                }
                if (cittaId === 48) {
                    console.log('Navigating to citta-48-detailed-page.html');
                    window.location.href = 'citta-48-detailed-page.html';
                    return false;
                }
                if (cittaId === 49) {
                    console.log('Navigating to citta-49-detailed-page.html');
                    window.location.href = 'citta-49-detailed-page.html';
                    return false;
                }
                if (cittaId === 50) {
                    console.log('Navigating to citta-50-detailed-page.html');
                    window.location.href = 'citta-50-detailed-page.html';
                    return false;
                }
                if (cittaId === 51) {
                    console.log('Navigating to citta-51-detailed-page.html');
                    window.location.href = 'citta-51-detailed-page.html';
                    return false;
                }
                if (cittaId === 52) {
                    console.log('Navigating to citta-52-detailed-page.html');
                    window.location.href = 'citta-52-detailed-page.html';
                    return false;
                }
                if (cittaId === 53) {
                    console.log('Navigating to citta-53-detailed-page.html');
                    window.location.href = 'citta-53-detailed-page.html';
                    return false;
                }
                if (cittaId === 54) {
                    console.log('Navigating to citta-54-detailed-page.html');
                    window.location.href = 'citta-54-detailed-page.html';
                    return false;
                }
                if (cittaId === 55) {
                    console.log('Navigating to citta-55-detailed-page.html');
                    window.location.href = 'citta-55-detailed-page.html';
                    return false;
                }
                if (cittaId === 56) {
                    console.log('Navigating to citta-56-detailed-page.html');
                    window.location.href = 'citta-56-detailed-page.html';
                    return false;
                }
                if (cittaId === 57) {
                    console.log('Navigating to citta-57-detailed-page.html');
                    window.location.href = 'citta-57-detailed-page.html';
                    return false;
                }
                if (cittaId === 58) {
                    console.log('Navigating to citta-58-detailed-page.html');
                    window.location.href = 'citta-58-detailed-page.html';
                    return false;
                }
                if (cittaId === 59) {
                    console.log('Navigating to citta-59-detailed-page.html');
                    window.location.href = 'citta-59-detailed-page.html';
                    return false;
                }
                if (cittaId === 60) {
                    console.log('Navigating to citta-60-detailed-page.html');
                    window.location.href = 'citta-60-detailed-page.html';
                    return false;
                }
                if (cittaId === 61) {
                    console.log('Navigating to citta-61-detailed-page.html');
                    window.location.href = 'citta-61-detailed-page.html';
                    return false;
                }
                if (cittaId === 62) {
                    console.log('Navigating to citta-62-detailed-page.html');
                    window.location.href = 'citta-62-detailed-page.html';
                    return false;
                }
                if (cittaId === 63) {
                    console.log('Navigating to citta-63-detailed-page.html');
                    window.location.href = 'citta-63-detailed-page.html';
                    return false;
                }
                if (cittaId === 64) {
                    console.log('Navigating to citta-64-detailed-page.html');
                    window.location.href = 'citta-64-detailed-page.html';
                    return false;
                }
                if (cittaId === 65) {
                    console.log('Navigating to citta-65-detailed-page.html');
                    window.location.href = 'citta-65-detailed-page.html';
                    return false;
                }
                if (cittaId === 66) {
                    console.log('Navigating to citta-66-detailed-page.html');
                    window.location.href = 'citta-66-detailed-page.html';
                    return false;
                }
                if (cittaId === 67) {
                    console.log('Navigating to citta-67-detailed-page.html');
                    window.location.href = 'citta-67-detailed-page.html';
                    return false;
                }
                if (cittaId === 68) {
                    console.log('Navigating to citta-68-detailed-page.html');
                    window.location.href = 'citta-68-detailed-page.html';
                    return false;
                }
                if (cittaId === 69) {
                    console.log('Navigating to citta-69-detailed-page.html');
                    window.location.href = 'citta-69-detailed-page.html';
                    return false;
                }
                if (cittaId === 70) {
                    console.log('Navigating to citta-70-detailed-page.html');
                    window.location.href = 'citta-70-detailed-page.html';
                    return false;
                }
                if (cittaId === 71) {
                    console.log('Navigating to citta-71-detailed-page.html');
                    window.location.href = 'citta-71-detailed-page.html';
                    return false;
                }
                if (cittaId === 72) {
                    console.log('Navigating to citta-72-detailed-page.html');
                    window.location.href = 'citta-72-detailed-page.html';
                    return false;
                }
                if (cittaId === 73) {
                    console.log('Navigating to citta-73-detailed-page.html');
                    window.location.href = 'citta-73-detailed-page.html';
                    return false;
                }
                if (cittaId === 74) {
                    console.log('Navigating to citta-74-detailed-page.html');
                    window.location.href = 'citta-74-detailed-page.html';
                    return false;
                }
                if (cittaId === 75) {
                    console.log('Navigating to citta-75-detailed-page.html');
                    window.location.href = 'citta-75-detailed-page.html';
                    return false;
                }
                if (cittaId === 76) {
                    console.log('Navigating to citta-76-detailed-page.html');
                    window.location.href = 'citta-76-detailed-page.html';
                    return false;
                }
                if (cittaId === 77) {
                    console.log('Navigating to citta-77-detailed-page.html');
                    window.location.href = 'citta-77-detailed-page.html';
                    return false;
                }
                if (cittaId === 78) {
                    console.log('Navigating to citta-78-detailed-page.html');
                    window.location.href = 'citta-78-detailed-page.html';
                    return false;
                }
                if (cittaId === 79) {
                    console.log('Navigating to citta-79-detailed-page.html');
                    window.location.href = 'citta-79-detailed-page.html';
                    return false;
                }
                if (cittaId === 80) {
                    console.log('Navigating to citta-80-detailed-page.html');
                    window.location.href = 'citta-80-detailed-page.html';
                    return false;
                }
                if (cittaId === 81) {
                    console.log('Navigating to citta-81-detailed-page.html');
                    window.location.href = 'citta-81-detailed-page.html';
                    return false;
                }
                if (cittaId === 82) {
                    console.log('Navigating to citta-82-detailed-page.html');
                    window.location.href = 'citta-82-detailed-page.html';
                    return false;
                }
                if (cittaId === 83) {
                    console.log('Navigating to citta-83-detailed-page.html');
                    window.location.href = 'citta-83-detailed-page.html';
                    return false;
                }
                if (cittaId === 84) {
                    console.log('Navigating to citta-84-detailed-page.html');
                    window.location.href = 'citta-84-detailed-page.html';
                    return false;
                }
                if (cittaId === 85) {
                    console.log('Navigating to citta-85-detailed-page.html');
                    window.location.href = 'citta-85-detailed-page.html';
                    return false;
                }
                if (cittaId === 86) {
                    console.log('Navigating to citta-86-detailed-page.html');
                    window.location.href = 'citta-86-detailed-page.html';
                    return false;
                }
                if (cittaId === 87) {
                    console.log('Navigating to citta-87-detailed-page.html');
                    window.location.href = 'citta-87-detailed-page.html';
                    return false;
                }
                if (cittaId === 88) {
                    console.log('Navigating to citta-88-detailed-page.html');
                    window.location.href = 'citta-88-detailed-page.html';
                    return false;
                }
                if (cittaId === 89) {
                    console.log('Navigating to citta-89-detailed-page.html');
                    window.location.href = 'citta-89-detailed-page.html';
                    return false;
                }
                // Fallback to old guide pages for other cittas
                console.log('Navigating to guide page for citta:', cittaId);
                window.location.href = `citta-${cittaId}-guide.html`;
                return false;
            }, true); // Use capture phase to ensure it fires first
        }

        // Also make entire row clickable - but show modal popup instead
        row.addEventListener('click', function (e) {
            // Only trigger if not clicking the button itself
            if (!e.target.closest('.view-details-btn')) {
                // Show modal with cetasika details
                if (window.abhidhammaDataLoader && window.abhidhammaDataLoader.showDetails) {
                    window.abhidhammaDataLoader.showDetails(citta);
                } else if (window.showCittaDetails) {
                    window.showCittaDetails(citta);
                } else {
                    console.warn('showCittaDetails function not available');
                }
            }
        });

        tableBody.appendChild(row);
    });
}

// Make populateTable globally available
window.populateTable = populateTable;


// Populate the selection grid for comparison
function populateSelectionGrid() {
    selectionGrid.innerHTML = '';

    meditationData.cittas.forEach(citta => {
        const item = document.createElement('div');
        item.className = 'selection-item';
        item.dataset.cittaId = citta.id;

        const displayName = currentLanguage === 'si' ? citta.name : (citta.nameEn || citta.name);
        const displayCategory = currentLanguage === 'si' ? citta.category : (citta.categoryEn || citta.category);

        item.innerHTML = `
            <div class="citta-name">${displayName}</div>
            <div class="citta-category">${displayCategory}</div>
        `;

        item.addEventListener('click', function () {
            toggleCittaSelection(citta.id, this);
        });

        selectionGrid.appendChild(item);
    });
}

// Toggle citta selection for comparison
function toggleCittaSelection(cittaId, element) {
    const index = selectedCittas.indexOf(cittaId);

    if (index > -1) {
        // Remove from selection
        selectedCittas.splice(index, 1);
        element.classList.remove('selected');
    } else {
        // Add to selection (max 5)
        if (selectedCittas.length < 5) {
            selectedCittas.push(cittaId);
            element.classList.add('selected');
        } else {
            alert('උපරිම චිත්ත 5 ක් පමණක් තෝරාගත හැකිය');
            return;
        }
    }

    updateComparison();
}

// Update comparison results
function updateComparison() {
    if (selectedCittas.length === 0) {
        comparisonResults.style.display = 'none';
        return;
    }

    comparisonResults.style.display = 'block';

    // Create header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>චෛතසිකය</th>';

    selectedCittas.forEach(cittaId => {
        const citta = meditationData.cittas.find(c => c.id === cittaId);
        const displayName = currentLanguage === 'si' ? citta.name : (citta.nameEn || citta.name);
        headerRow.innerHTML += `<th>${displayName}</th>`;
    });

    comparisonTableBody.innerHTML = '';
    comparisonTableBody.appendChild(headerRow);

    // Create data rows for each chaithasika
    meditationData.chaithasikas.forEach(chaithasika => {
        const row = document.createElement('tr');
        const displayName = currentLanguage === 'si' ? chaithasika.name : (chaithasika.nameEn || chaithasika.name);
        row.innerHTML = `<td>${displayName}</td>`;

        selectedCittas.forEach(cittaId => {
            const associations = meditationData.associations[cittaId] || [];
            const isPresent = associations.includes(chaithasika.id);

            const cell = document.createElement('td');
            cell.textContent = isPresent ? '✓' : '✗';
            cell.className = isPresent ? 'present' : 'absent';
            row.appendChild(cell);
        });

        comparisonTableBody.appendChild(row);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        filteredData = meditationData.cittas.filter(citta =>
            citta.name.toLowerCase().includes(searchTerm) ||
            citta.description.toLowerCase().includes(searchTerm) ||
            citta.category.toLowerCase().includes(searchTerm) ||
            citta.type.toLowerCase().includes(searchTerm)
        );
        populateTable();
    });

    // Category filter
    categoryFilter.addEventListener('change', function () {
        const selectedCategory = this.value;
        if (selectedCategory === '') {
            filteredData = [...meditationData.cittas];
        } else {
            filteredData = meditationData.cittas.filter(citta =>
                citta.category === selectedCategory
            );
        }
        populateTable();
    });
}

// Utility functions
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element) {
    // Remove loading spinner
    const loading = element.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Add some interactive features
function highlightRow(row) {
    row.style.backgroundColor = '#e8f4fd';
    setTimeout(() => {
        row.style.backgroundColor = '';
    }, 2000);
}

// Add click handlers to table rows
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        const tableRows = document.querySelectorAll('#mainTable tbody tr');
        tableRows.forEach(row => {
            row.addEventListener('click', function () {
                highlightRow(this);
            });
        });
    }, 1000);
});

// Export data functionality (for future use)
function exportData() {
    const data = {
        cittas: meditationData.cittas,
        chaithasikas: meditationData.chaithasikas,
        associations: meditationData.associations
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'buddhist_meditation_data.json';
    link.click();
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }

    // Escape to clear search
    if (e.key === 'Escape') {
        searchInput.value = '';
        filteredData = [...meditationData.cittas];
        populateTable();
    }
});

// Add scroll-to-top functionality and navbar scroll behavior
window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');

    // Navbar scroll behavior
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button
    if (scrollTop > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 52px;
                height: 52px;
                border-radius: 50%;
                background: #f39c12;
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: 0 8px 20px rgba(0,0,0,0.18);
                z-index: 1040;
                transition: transform 0.25s ease, box-shadow 0.25s ease;
            `;
            scrollBtn.setAttribute('aria-label', currentLanguage === 'si' ? 'ඉහළට' : 'Back to top');
            scrollBtn.addEventListener('mouseenter', function () {
                scrollBtn.style.transform = 'translateY(-2px)';
            });
            scrollBtn.addEventListener('mouseleave', function () {
                scrollBtn.style.transform = 'translateY(0)';
            });

            scrollBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Enhanced Language switching functionality
function initializeLanguageSwitcher() {
    // Get the button element - ensure it exists in DOM
    const button = document.getElementById('languageSwitcher');

    if (button) {
        // Remove any existing event listeners by replacing onclick
        button.onclick = null;

        // Add click event listener with proper event handling
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Language button clicked, current language:', currentLanguage);
            toggleLanguage();
            return false;
        });

        // Also ensure onclick works as backup
        button.onclick = function (e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            toggleLanguage();
            return false;
        };

        console.log('Language switcher button initialized successfully');
    } else {
        console.error('Language switcher button not found, retrying...');
        // Retry after a short delay if button not found
        setTimeout(function () {
            initializeLanguageSwitcher();
        }, 100);
        return;
    }

    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'si' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'si' ? 'en' : 'si';
    updateLanguage();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateLanguage() {
    // Update document language attribute first
    document.documentElement.lang = currentLanguage === 'si' ? 'si' : 'en';

    // Update page title
    const title = document.querySelector('title');
    if (title) {
        title.textContent = currentLanguage === 'si' ?
            'අභිධර්මය - චිත්ත චෛතසික මෙවලම' :
            'Abhidhamma - Citta Chaithasika Tool';
    }

    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-si], [data-en]');
    elements.forEach(element => {
        const siText = element.getAttribute('data-si');
        const enText = element.getAttribute('data-en');

        if (siText && enText) {
            element.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-si-placeholder], [data-en-placeholder]');
    placeholders.forEach(element => {
        const siPlaceholder = element.getAttribute('data-si-placeholder');
        const enPlaceholder = element.getAttribute('data-en-placeholder');

        if (siPlaceholder && enPlaceholder) {
            element.placeholder = currentLanguage === 'si' ? siPlaceholder : enPlaceholder;
        }
    });

    // Update language switcher button text
    const button = document.getElementById('languageSwitcher');
    if (button) {
        const langText = button.querySelector('.lang-text');
        if (langText) {
            langText.textContent = currentLanguage === 'si' ? 'English' : 'සිංහල';
        }
    }

    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        scrollBtn.setAttribute('aria-label', currentLanguage === 'si' ? 'ඉහළට' : 'Back to top');
    }

    // Update all dynamic content
    updateTableWithTranslations();
    updateSelectionGridWithTranslations();
    updateComparisonWithTranslations();
    updateExplanationsWithTranslations();
    updateAnalysisWithTranslations();

    // Update any dynamically generated content
    updateDynamicContent();

    // Clean up broken HTML if term definitions system is available
    if (window.termDefinitionsSystem && typeof window.termDefinitionsSystem.cleanupBrokenHTML === 'function') {
        window.termDefinitionsSystem.cleanupBrokenHTML();
    } else if (typeof cleanupBrokenHTML === 'function') {
        cleanupBrokenHTML();
    }
}

function updateTableWithTranslations() {
    // Update table headers and content based on current language
    const tableHeaders = document.querySelectorAll('#mainTable th');
    tableHeaders.forEach(header => {
        const siText = header.getAttribute('data-si');
        const enText = header.getAttribute('data-en');
        if (siText && enText) {
            header.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });

    // Update search placeholder
    if (searchInput) {
        const siPlaceholder = searchInput.getAttribute('data-si-placeholder');
        const enPlaceholder = searchInput.getAttribute('data-en-placeholder');
        if (siPlaceholder && enPlaceholder) {
            searchInput.placeholder = currentLanguage === 'si' ? siPlaceholder : enPlaceholder;
        }
    }

    // Update filter options
    const filterOptions = document.querySelectorAll('#categoryFilter option');
    filterOptions.forEach(option => {
        const siText = option.getAttribute('data-si');
        const enText = option.getAttribute('data-en');
        if (siText && enText) {
            option.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });

    // Repopulate the table with translated content
    populateTable();
}

function updateSelectionGridWithTranslations() {
    // Update selection grid items
    const selectionItems = document.querySelectorAll('.selection-item');
    selectionItems.forEach(item => {
        const cittaId = parseInt(item.dataset.cittaId);
        const citta = meditationData.cittas.find(c => c.id === cittaId);
        if (citta) {
            const cittaName = item.querySelector('.citta-name');
            const cittaCategory = item.querySelector('.citta-category');

            if (cittaName) {
                cittaName.textContent = currentLanguage === 'si' ? citta.name : citta.nameEn;
            }
            if (cittaCategory) {
                cittaCategory.textContent = currentLanguage === 'si' ? citta.category : citta.categoryEn;
            }
        }
    });
}

function updateComparisonWithTranslations() {
    // Update comparison table headers
    const comparisonHeaders = document.querySelectorAll('#comparisonTable th');
    comparisonHeaders.forEach(header => {
        const siText = header.getAttribute('data-si');
        const enText = header.getAttribute('data-en');
        if (siText && enText) {
            header.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });

    // Update comparison results if they exist
    if (selectedCittas.length > 0) {
        updateComparison();
    }
}

function updateExplanationsWithTranslations() {
    // Update explanations section
    if (window.explanationsManager) {
        window.explanationsManager.populateExplanations();
        window.explanationsManager.updateStats();
    }
}

function updateAnalysisWithTranslations() {
    // Update analysis cards
    const analysisCards = document.querySelectorAll('.analysis-card');
    analysisCards.forEach(card => {
        const title = card.querySelector('h3');
        const subtitle = card.querySelector('p');
        const details = card.querySelector('.analysis-details p');

        if (title) {
            const siText = title.getAttribute('data-si');
            const enText = title.getAttribute('data-en');
            if (siText && enText) {
                title.textContent = currentLanguage === 'si' ? siText : enText;
            }
        }

        if (subtitle) {
            const siText = subtitle.getAttribute('data-si');
            const enText = subtitle.getAttribute('data-en');
            if (siText && enText) {
                subtitle.textContent = currentLanguage === 'si' ? siText : enText;
            }
        }

        if (details) {
            const siText = details.getAttribute('data-si');
            const enText = details.getAttribute('data-en');
            if (siText && enText) {
                details.textContent = currentLanguage === 'si' ? siText : enText;
            }
        }
    });
}

function updateDynamicContent() {
    // Update any dynamically generated alerts or messages
    const alerts = document.querySelectorAll('.alert, .notification');
    alerts.forEach(alert => {
        const siText = alert.getAttribute('data-si');
        const enText = alert.getAttribute('data-en');
        if (siText && enText) {
            alert.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });

    // Update button texts
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const siText = button.getAttribute('data-si');
        const enText = button.getAttribute('data-en');
        if (siText && enText) {
            button.textContent = currentLanguage === 'si' ? siText : enText;
        }
    });
}

function initializeFeedbackWidget() {
    const toggle = document.getElementById('feedbackToggle');
    const form = document.getElementById('feedbackForm');
    const sendBtn = document.getElementById('feedbackSend');
    const messageBox = document.getElementById('feedbackMessage');

    if (!toggle || !form || !sendBtn || !messageBox) {
        return;
    }

    toggle.addEventListener('click', () => {
        form.classList.toggle('active');
        const expanded = form.classList.contains('active');
        form.setAttribute('aria-hidden', expanded ? 'false' : 'true');
        if (expanded) {
            messageBox.focus();
        }
    });

    sendBtn.addEventListener('click', () => {
        const value = messageBox.value.trim();
        if (!value) {
            messageBox.focus();
            return;
        }

        console.log('Feedback submitted:', value);
        messageBox.value = '';
        form.classList.remove('active');
        form.setAttribute('aria-hidden', 'true');
        alert('Thank you for helping us improve!');
    });
}

console.log('Buddhist Meditation Tool initialized successfully!');
