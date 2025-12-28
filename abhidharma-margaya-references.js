// අභිධර්ම මාර්ගය - රේරුකානේ චන්දවිමල හිමි
// Reference data linking website cittas to Abhidharma Margaya book content
// This file provides additional context and explanations from the book

const abhidharmaMargayaReferences = {
    // Book metadata
    bookInfo: {
        title: "අභිධර්ම මාර්ගය",
        author: "රේරුකානේ චන්දවිමල හිමි",
        source: "https://pitaka.lk/books/abhidharma-margaya/",
        chapter1: {
            title: "ප්‍රථම පරිච්ඡේදය",
            subtopics: 19,
            mainFocus: "සිත් (චිත්ත) 89/121 ගේ සම්පූර්ණ විග්‍රහය"
        }
    },

    // පරමාර්ථ සතර (Four Ultimate Realities)
    paramartha: {
        citta: {
            name: "චිත්තය",
            definition: "දැනීම - අරමුණු දැනගන්නා ස්වභාවය",
            reference: "අභිධර්ම මාර්ගය - 3. පරමාර්ථ සතර",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-3.html"
        },
        cetasika: {
            name: "චෛතසිකය",
            definition: "සිත සමඟ උපදින චෛතසික ධර්ම (චෛතසික දෙපනසක් ඇත)",
            reference: "අභිධර්ම මාර්ගය - 3. පරමාර්ථ සතර",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-3.html"
        },
        rupa: {
            name: "රූපය",
            definition: "භෞතික රූප (රූප විසි අටක් ඇත)",
            reference: "අභිධර්ම මාර්ගය - 3. පරමාර්ථ සතර",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-3.html"
        },
        nibbana: {
            name: "නිර්වාණය",
            definition: "ශාන්ත වූ නිවන",
            reference: "අභිධර්ම මාර්ගය - 3. පරමාර්ථ සතර",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-3.html"
        }
    },

    // සිත් වර්ගීකරණය (Citta Classification)
    cittaClassification: {
        total_short: 89,
        total_detailed: 121,
        reference: "අභිධර්ම මාර්ගය - 19. සිත් එක සිය විසි එක",
        url: "https://pitaka.lk/books/abhidharma-margaya/2-19.html",

        kamaavacara: {
            total: 54,
            reference: "අභිධර්ම මාර්ගය - 5. කාමාවචර සිත් සිවුපනස",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-5.html",
            breakdown: {
                akusala: 12,
                ahetuka: 18,
                sobhana: 24
            }
        },

        rupaavacara: {
            total: 15,
            reference: "අභිධර්ම මාර්ගය - 14. රූපාවචර සිත් පසළොස",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-14.html",
            dhyana: ["පඨම", "දුතිය", "තතිය", "චතුත්ථ", "පඤ්චම"]
        },

        arupaavacara: {
            total: 12,
            reference: "අභිධර්ම මාර්ගය - 15. අරූපාවචර සිත් දොළොස",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-15.html",
            arupa: ["ආකාසානඤ්චායතන", "විඤ්ඤාණඤ්චායතන", "ආකිඤ්චඤ්ඤායතන", "නේවසඤ්ඤානාසඤ්ඤායතන"]
        },

        lokuttara: {
            total_short: 8,
            total_detailed: 40,
            reference: "අභිධර්ම මාර්ගය - 17. ලෝකෝත්තර සිත් අට",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-17.html",
            magga: ["සෝතාපත්ති", "සකදාගාමි", "අනාගාමි", "අරහත්ත"],
            phala: ["සෝතාපත්ති", "සකදාගාමි", "අනාගාමි", "අරහත්ත"]
        }
    },

    // Citta-specific references mapping to website citta IDs
    cittaReferences: {
        // ලෝභමූල සිත් (Greed-rooted consciousness) - IDs 1-8
        lobhaMula: {
            ids: [1, 2, 3, 4, 5, 6, 7, 8],
            total: 8,
            reference: "අභිධර්ම මාර්ගය - 7. ලෝභමූල සිත් අට උපදනා සැටි",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-7.html",
            occasions: {
                reference: "අභිධර්ම මාර්ගය - 6. ලෝභමූල සිත් ඇති වන අවස්ථා",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-6.html",
                examples: [
                    "අදත්තාදානය (සොරකම)",
                    "කාමමිථ්‍යාචාරය (අනාචාරය)",
                    "මුසාවාදය (බොරු කීම)",
                    "එදිනෙදා ආශාවන් සහ ඇල්ම"
                ]
            },
            classification: {
                vedana: ["සෝමනස්ස", "උපේක්ෂා"],
                ditthi: ["දිට්ඨිගත සම්ප්‍රයුක්ත", "දිට්ඨිගත විප්‍රයුක්ත"],
                sankhara: ["අසංස්කාරික", "සසංස්කාරික"]
            }
        },

        // ද්වේෂමූල සිත් (Hatred-rooted consciousness) - IDs 9-10
        dosaMula: {
            ids: [9, 10],
            total: 2,
            reference: "අභිධර්ම මාර්ගය - 8. ද්වේෂ මූල සිත් දෙක",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-8.html",
            characteristics: [
                "සෑම විටම දෝමනස්ස (අප්‍රසාදය) සහිතයි",
                "පාණාතිපාතය (ජීවහිංසාව) ද්වේෂමූල සිතකි"
            ]
        },

        // මෝහමූල සිත් (Delusion-rooted consciousness) - IDs 11-12
        mohaMula: {
            ids: [11, 12],
            total: 2,
            reference: "අභිධර්ම මාර්ගය - 9. මෝහමූල සිත් දෙක",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-9.html",
            types: {
                vicikiccha: {
                    id: 11,
                    name: "විචිකිච්ඡා සම්ප්‍රයුක්ත සිත",
                    definition: "ධර්මය පිළිබඳ සැකය"
                },
                uddhacca: {
                    id: 12,
                    name: "උද්ධච්ච සම්ප්‍රයුක්ත සිත",
                    definition: "සිතේ නොසන්සුන් බව"
                }
            }
        },

        // අහේතුක සිත් (Rootless consciousness) - IDs 13-30 (partial)
        ahetuka: {
            total: 18,
            reference: "අභිධර්ම මාර්ගය - 10. අහේතුක සිත් අටළොස",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-10.html",
            breakdown: {
                akusalaVipaka: 7,
                kusalaVipaka: 8,
                kiriya: 3
            },
            kiriya: {
                reference: "අභිධර්ම මාර්ගය - 11. අහේතුක ක්‍රියා සිත් තුන",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-11.html",
                types: [
                    "පඤ්චද්වාරාවජ්ජනය: පස් ඉන්ද්‍රියයන්ට අරමුණ හසු කරන සිත",
                    "මනොද්වාරාවජ්ජනය: මනසට අරමුණ හසු කරන සිත",
                    "හසිතුප්පාදය: රහතන් වහන්සේලාගේ සිනහව ඇති කරන සිත"
                ]
            }
        },

        // කාමාවචර කුසල් සිත් (Sensuous wholesome consciousness) - IDs 13-20
        kamavacaraKusala: {
            ids: [13, 14, 15, 16, 17, 18, 19, 20],
            total: 8,
            reference: "අභිධර්ම මාර්ගය - 12. කාමාවචර කුසල් සිත් අට",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-12.html",
            occasions: [
                "දන් දීම",
                "සිල් රැකීම",
                "භාවනා කිරීම"
            ]
        },

        // සහේතුක කාමාවචර විපාක සිත් (Sensuous resultant consciousness with roots)
        kamavacaraVipaka: {
            total: 8,
            reference: "අභිධර්ම මාර්ගය - 13. සහේතුක කාමාවචර විපාක සිත් අට",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-13.html",
            characteristics: [
                "කුසල් කර්මවල විපාකයක් ලෙස ඇති වේ",
                "සුඛී භවයන්හි උපදීමේදී ප්‍රතිසන්ධි සිත විය හැකිය"
            ]
        },

        // රූපාවචර සිත් (Fine-material consciousness) - IDs 21-25 (kusala)
        rupaavacara: {
            total: 15,
            reference: "අභිධර්ම මාර්ගය - 14. රූපාවචර සිත් පසළොස",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-14.html",
            dhyana: {
                pathama: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත",
                dutiya: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත",
                tatiya: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත",
                catuttha: "සුඛ ඒකාග්‍රතා සහිත",
                pancama: "උපේක්ෂා ඒකාග්‍රතා සහිත"
            },
            method: "කසිණ භාවනාව මගින් ලබා ගත හැකිය",
            result: "රූප බ්‍රහ්ම ලෝකයන්හි උපදීමට හේතු වේ"
        },

        // අරූපාවචර සිත් (Immaterial consciousness) - IDs 26-29 (kusala)
        arupaavacara: {
            total: 12,
            reference: "අභිධර්ම මාර්ගය - 15. අරූපාවචර සිත් දොළොස",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-15.html",
            arupa: {
                akasanancayatana: "ආකාසානඤ්චායතන",
                vinnanancayatana: "විඤ්ඤාණඤ්චායතන",
                akincannayatana: "ආකිඤ්චඤ්ඤායතන",
                nevasannanasannayatana: "නේවසඤ්ඤානාසඤ්ඤායතන"
            },
            characteristics: "රූපයන් කෙරෙහි කලකිරීමෙන් ඇති වේ",
            result: "අරූප බ්‍රහ්ම ලෝකයන්හි උපදීමට හේතු වේ",
            vipaka_kiriya: {
                reference: "අභිධර්ම මාර්ගය - 16. අරූපාවචර විපාක, ක්‍රියා",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-16.html"
            }
        },

        // ලෝකෝත්තර සිත් (Supramundane consciousness) - IDs 30-69
        lokuttara: {
            total_short: 8,
            total_detailed: 40,
            reference: "අභිධර්ම මාර්ගය - 17. ලෝකෝත්තර සිත් අට",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-17.html",
            expansion: {
                reference: "අභිධර්ම මාර්ගය - 18. ලෝකෝත්තර සිත්වල විස්තාර ක්‍රමය",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-18.html",
                method: "ධ්‍යාන අංගයන්ගේ ප්‍රභේද අනුව විස්තාරය කළ විට සිත් 40 ක් (8 × 5)"
            },
            characteristics: [
                "නිවන අරමුණු කර ගනී",
                "සංයෝජනයන් නසයි"
            ],
            magga: {
                sotapatti: "සෝතාපත්ති මාර්ග",
                sakadagami: "සකදාගාමි මාර්ග",
                anagami: "අනාගාමි මාර්ග",
                arahatta: "අරහත්ත මාර්ග"
            },
            phala: {
                sotapatti: "සෝතාපත්ති ඵල",
                sakadagami: "සකදාගාමි ඵල",
                anagami: "අනාගාමි ඵල",
                arahatta: "අරහත්ත ඵල"
            }
        }
    },

    // Additional context from the book
    additionalContext: {
        importance: {
            reference: "අභිධර්ම මාර්ගය - 1. අභිධර්මයේ වැදගත්කම",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-1.html",
            points: [
                "අභිධර්මය මගින් සියලු සත්ත්වයන් සහ වස්තූන්ගේ මූල ධාතූන් විභාග කරයි",
                "අතීත ජීවිත සහ නැවත උපදීම පිළිබඳ දැනුම ලබා දෙයි",
                "පින් පව් සහ ඒවායේ බලය පැහැදිලි කරයි",
                "නිවන සහ නිවන් මග පිළිබඳ තේරුම් ලබා දෙයි"
            ]
        },

        paramarthaVsPannatti: {
            reference: "අභිධර්ම මාර්ගය - 2. පරමාර්ථය හා ප්‍රඥප්තිය",
            url: "https://pitaka.lk/books/abhidharma-margaya/2-2.html",
            paramartha: "සත්‍ය වශයෙන් ඇති දේ",
            pannatti: "සත්‍ය වශයෙන් නැති නමුත් ඇති සේ පෙනෙන දේ",
            examples: "මේසය, පුටුව, ගෙය, මිනිසා, ගවයා යනාදිය ප්‍රඥප්ති වේ"
        }
    },

    // Helper function to get reference for a citta ID
    getCittaReference: function (cittaId) {
        // ලෝභමූල සිත් (1-8)
        if (cittaId >= 1 && cittaId <= 8) {
            return this.cittaReferences.lobhaMula;
        }
        // ද්වේෂමූල සිත් (9-10)
        else if (cittaId >= 9 && cittaId <= 10) {
            return this.cittaReferences.dosaMula;
        }
        // මෝහමූල සිත් (11-12)
        else if (cittaId >= 11 && cittaId <= 12) {
            return this.cittaReferences.mohaMula;
        }
        // කාමාවචර කුසල් සිත් (13-20)
        else if (cittaId >= 13 && cittaId <= 20) {
            return this.cittaReferences.kamavacaraKusala;
        }
        // රූපාවචර සිත් (21-25 for kusala, more for vipaka/kiriya)
        else if (cittaId >= 21 && cittaId <= 35) {
            return this.cittaReferences.rupaavacara;
        }
        // අරූපාවචර සිත් (26-29 for kusala, more for vipaka/kiriya)
        else if (cittaId >= 26 && cittaId <= 29) {
            return this.cittaReferences.arupaavacara;
        }
        // ලෝකෝත්තර සිත් (30+)
        else if (cittaId >= 30) {
            return this.cittaReferences.lokuttara;
        }

        return null;
    },

    // Get all references as an array for easy iteration
    getAllReferences: function () {
        return [
            {
                id: 1,
                title: "අභිධර්මයේ වැදගත්කම",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-1.html"
            },
            {
                id: 2,
                title: "පරමාර්ථය හා ප්‍රඥප්තිය",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-2.html"
            },
            {
                id: 3,
                title: "පරමාර්ථ සතර",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-3.html"
            },
            {
                id: 4,
                title: "සිත බෙදෙන සැටි",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-4.html"
            },
            {
                id: 5,
                title: "කාමාවචර සිත් සිවුපනස",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-5.html"
            },
            {
                id: 6,
                title: "ලෝභමූල සිත් ඇති වන අවස්ථා",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-6.html"
            },
            {
                id: 7,
                title: "ලෝභමූල සිත් අට උපදනා සැටි",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-7.html"
            },
            {
                id: 8,
                title: "ද්වේෂ මූල සිත් දෙක",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-8.html"
            },
            {
                id: 9,
                title: "මෝහමූල සිත් දෙක",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-9.html"
            },
            {
                id: 10,
                title: "අහේතුක සිත් අටළොස",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-10.html"
            },
            {
                id: 11,
                title: "අහේතුක ක්‍රියා සිත් තුන",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-11.html"
            },
            {
                id: 12,
                title: "කාමාවචර කුසල් සිත් අට",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-12.html"
            },
            {
                id: 13,
                title: "සහේතුක කාමාවචර විපාක සිත් අට",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-13.html"
            },
            {
                id: 14,
                title: "රූපාවචර සිත් පසළොස",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-14.html"
            },
            {
                id: 15,
                title: "අරූපාවචර සිත් දොළොස",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-15.html"
            },
            {
                id: 16,
                title: "අරූපාවචර විපාක, ක්‍රියා",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-16.html"
            },
            {
                id: 17,
                title: "ලෝකෝත්තර සිත් අට",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-17.html"
            },
            {
                id: 18,
                title: "ලෝකෝත්තර සිත්වල විස්තාර ක්‍රමය",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-18.html"
            },
            {
                id: 19,
                title: "සිත් එක සිය විසි එක",
                url: "https://pitaka.lk/books/abhidharma-margaya/2-19.html"
            }
        ];
    }
};

// Make globally available
if (typeof window !== 'undefined') {
    window.abhidharmaMargayaReferences = abhidharmaMargayaReferences;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = abhidharmaMargayaReferences;
}
