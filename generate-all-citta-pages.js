const fs = require('fs');
const path = require('path');

// Complete 89 Cittas Data
const allCittas = [
    { id: 1, name: "සෝමනස්ස සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 19 },
    { id: 2, name: "සෝමනස්ස සහගත දිට්ඨිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 21 },
    { id: 3, name: "සෝමනස්ස සහගත දිට්ඨිගත විප්‍රයුක්ත අසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 19 },
    { id: 4, name: "සෝමනස්ස සහගත දෘෂ්ඨිගත විප්‍රයුක්ත සසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 21 },
    { id: 5, name: "උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 18 },
    { id: 6, name: "උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 20 },
    { id: 7, name: "උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත අසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 18 },
    { id: 8, name: "උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත සසංස්කාරික සිත", category: "අකුසල්", subcategory: "ලෝභ මූල", chaithasikaCount: 20 },
    { id: 9, name: "දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත අසංස්කාරික සිත", category: "අකුසල්", subcategory: "ද්වේශ මූල", chaithasikaCount: 20 },
    { id: 10, name: "දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත සසංස්කාරික සිත", category: "අකුසල්", subcategory: "ද්වේශ මූල", chaithasikaCount: 22 },
    { id: 11, name: "උපේක්ෂා සහගත විචිකිච්ඡා සම්ප්‍රයුක්ත අසංස්කාරික සිත", category: "අකුසල්", subcategory: "මෝහ මූල", chaithasikaCount: 18 },
    { id: 12, name: "උපේක්ෂා සහගත උද්ධච්ච සම්ප්‍රයුක්ත අසංස්කාරික සිත", category: "අකුසල්", subcategory: "මෝහ මූල", chaithasikaCount: 18 },
    { id: 13, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 38 },
    { id: 14, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 38 },
    { id: 15, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 37 },
    { id: 16, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 37 },
    { id: 17, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 37 },
    { id: 18, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 37 },
    { id: 19, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 36 },
    { id: 20, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික සිත", category: "කුසල්", subcategory: "කාමාවචර කුසල්", chaithasikaCount: 36 },
    { id: 21, name: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන සිතය", category: "කුසල්", subcategory: "රූපාවචර කුසල්", chaithasikaCount: 34 },
    { id: 22, name: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන සිතය", category: "කුසල්", subcategory: "රූපාවචර කුසල්", chaithasikaCount: 32 },
    { id: 23, name: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන සිතය", category: "කුසල්", subcategory: "රූපාවචර කුසල්", chaithasikaCount: 31 },
    { id: 24, name: "සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන සිතය", category: "කුසල්", subcategory: "රූපාවචර කුසල්", chaithasikaCount: 30 },
    { id: 25, name: "උපේක්ෂා ඒකාග්‍රතා සහිත පංචම ධ්‍යාන සිතය", category: "කුසල්", subcategory: "රූපාවචර කුසල්", chaithasikaCount: 30 },
    { id: 26, name: "ආකාසානඤ්චායතන කුසල් සිත", category: "කුසල්", subcategory: "අරූපාවචර කුසල්", chaithasikaCount: 30 },
    { id: 27, name: "විඤ්ඤාණඤ්චායතන කුසල් සිත", category: "කුසල්", subcategory: "අරූපාවචර කුසල්", chaithasikaCount: 30 },
    { id: 28, name: "ආකිඤ්චඤ්ඤායතන කුසල් සිත", category: "කුසල්", subcategory: "අරූපාවචර කුසල්", chaithasikaCount: 30 },
    { id: 29, name: "නේවසංඤ්ඤා නාසඤ්ඤායතන කුසල් සිත", category: "කුසල්", subcategory: "අරූපාවචර කුසල්", chaithasikaCount: 30 },
    { id: 30, name: "ප්‍රථම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 36 },
    { id: 31, name: "ප්‍රථම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 36 },
    { id: 32, name: "ප්‍රථම ධ්‍යාන සකදාගාමී මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 36 },
    { id: 33, name: "ප්‍රථම ධ්‍යාන සකදාගාමී ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 36 },
    { id: 34, name: "ප්‍රථම ධ්‍යාන අනාගාමි මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 36 },
    { id: 35, name: "ප්‍රථම ධ්‍යාන අනාගාමි ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 36 },
    { id: 36, name: "ප්‍රථම ධ්‍යාන අරහත්ත මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 36 },
    { id: 37, name: "ප්‍රථම ධ්‍යාන අරහත්ත ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 36 },
    { id: 38, name: "ද්විතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 34 },
    { id: 39, name: "ද්විතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 34 },
    { id: 40, name: "ද්විතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 34 },
    { id: 41, name: "ද්විතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 34 },
    { id: 42, name: "ද්විතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 34 },
    { id: 43, name: "ද්විතීය ධ්‍යාන අනාගාමි ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 34 },
    { id: 44, name: "ද්විතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 34 },
    { id: 45, name: "ද්විතීය ධ්‍යාන අරහත්ත ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 34 },
    { id: 46, name: "තෘතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 33 },
    { id: 47, name: "තෘතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 33 },
    { id: 48, name: "තෘතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 33 },
    { id: 49, name: "තෘතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 33 },
    { id: 50, name: "තෘතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 33 },
    { id: 51, name: "තෘතීය ධ්‍යාන අනාගාමි ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 33 },
    { id: 52, name: "තෘතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 33 },
    { id: 53, name: "තෘතීය ධ්‍යාන අරහත්ත ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 33 },
    { id: 54, name: "චතුර්ථ ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 32 },
    { id: 55, name: "චතුර්ථ ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 32 },
    { id: 56, name: "චතුර්ථ ධ්‍යාන සකදාගාමී මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 32 },
    { id: 57, name: "චතුර්ථ ධ්‍යාන සකදාගාමී ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 32 },
    { id: 58, name: "චතුර්ථ ධ්‍යාන අනාගාමි මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 32 },
    { id: 59, name: "චතුර්ථ ධ්‍යාන අනාගාමි ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 32 },
    { id: 60, name: "චතුර්ථ ධ්‍යාන අරහත්ත මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 32 },
    { id: 61, name: "චතුර්ථ ධ්‍යාන අරහත්ත ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 32 },
    { id: 62, name: "පංචම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 30 },
    { id: 63, name: "පංචම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 30 },
    { id: 64, name: "පංචම ධ්‍යාන සකදාගාමී මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 30 },
    { id: 65, name: "පංචම ධ්‍යාන සකදාගාමී ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 30 },
    { id: 66, name: "පංචම ධ්‍යාන අනාගාමි මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 30 },
    { id: 67, name: "පංචම ධ්‍යාන අනාගාමි ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 30 },
    { id: 68, name: "පංචම ධ්‍යාන අරහත්ත මග්ග චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර මග්ග", chaithasikaCount: 30 },
    { id: 69, name: "පංචම ධ්‍යාන අරහත්ත ඵල චිත්තය", category: "ලෝකෝත්තර", subcategory: "ලෝකෝත්තර ඵල", chaithasikaCount: 30 },
    { id: 70, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 33 },
    { id: 71, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 33 },
    { id: 72, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 32 },
    { id: 73, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 32 },
    { id: 74, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 32 },
    { id: 75, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 32 },
    { id: 76, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 31 },
    { id: 77, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික විපාක සිත", category: "විපාක", subcategory: "කාමාවචර විපාක", chaithasikaCount: 31 },
    { id: 78, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 35 },
    { id: 79, name: "සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 35 },
    { id: 80, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 34 },
    { id: 81, name: "සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 34 },
    { id: 82, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 34 },
    { id: 83, name: "උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 34 },
    { id: 84, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 33 },
    { id: 85, name: "උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත", category: "ක්‍රියා", subcategory: "කාමාවචර ක්‍රියා", chaithasikaCount: 33 },
    { id: 86, name: "විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන විපාක සිතය", category: "විපාක", subcategory: "රූපාවචර විපාක", chaithasikaCount: 35 },
    { id: 87, name: "විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන විපාක සිතය", category: "විපාක", subcategory: "රූපාවචර විපාක", chaithasikaCount: 34 },
    { id: 88, name: "ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන විපාක සිතය", category: "විපාක", subcategory: "රූපාවචර විපාක", chaithasikaCount: 33 },
    { id: 89, name: "සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන විපාක සිතය", category: "විපාක", subcategory: "රූපාවචර විපාක", chaithasikaCount: 32 }
];

function generateFilename(id) {
    return `citta-${id}-guide.html`;
}

function generateCittaHTML(citta) {
    const isAkusala = citta.category === 'අකුසල්';
    const isKusala = citta.category === 'කුසල්';
    const isLokuttara = citta.category === 'ලෝකෝත්තර';
    const colorScheme = isAkusala ? '#ef4444' : isKusala ? '#10b981' : isLokuttara ? '#8b5cf6' : '#3b82f6';
    const bgGradient = isAkusala ? '#fee2e2, #fed7aa' : isKusala ? '#dcfce7, #d1fae5' : isLokuttara ? '#f3e8ff, #ede9fe' : '#dbeafe, #e0f2fe';
    
    return `<!DOCTYPE html>
<html lang="si">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <title>${citta.name} - අභිධර්ම විශ්ලේෂණය</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Noto Sans Sinhala', sans-serif;
            background: linear-gradient(to bottom right, ${bgGradient});
            min-height: 100vh;
            padding: 20px;
            color: #1f2937;
        }
        .container { max-width: 1200px; margin: 0 auto; }
        .back-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: linear-gradient(135deg, ${colorScheme} 0%, ${colorScheme}dd 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            margin-bottom: 20px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .back-button:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); }
        .header {
            background: white;
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-top: 4px solid ${colorScheme};
        }
        .header-content { display: flex; align-items: center; gap: 16px; }
        .header-icon { width: 48px; height: 48px; color: ${colorScheme}; }
        .header-text h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin-bottom: 8px; }
        .header-text p { color: #6b7280; font-size: 16px; }
        .section {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 16px;
        }
        .section-header {
            width: 100%;
            padding: 20px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            background: transparent;
            font-size: 18px;
            font-weight: 700;
            color: #1f2937;
            text-align: left;
        }
        .section-header:hover { background: rgba(0, 0, 0, 0.02); }
        .section-header-content { display: flex; align-items: center; gap: 12px; }
        .section-icon { width: 24px; height: 24px; }
        .section-content { padding: 24px; display: none; color: #374151; line-height: 1.6; }
        .section-content.active { display: block; }
        .color-blue { background: linear-gradient(to right, #dbeafe, #cffafe); border-left: 4px solid #3b82f6; }
        .color-red { background: linear-gradient(to right, #fee2e2, #fce7f3); border-left: 4px solid #ef4444; }
        .color-green { background: linear-gradient(to right, #dcfce7, #d1fae5); border-left: 4px solid #10b981; }
        .color-purple { background: linear-gradient(to right, #f3e8ff, #ede9fe); border-left: 4px solid #8b5cf6; }
        .color-orange { background: linear-gradient(to right, #fed7aa, #fde68a); border-left: 4px solid #f97316; }
        .chevron { width: 20px; height: 20px; transition: transform 0.3s ease; }
        .chevron.rotated { transform: rotate(180deg); }
        .content-box { background: #f9fafb; padding: 24px; border-radius: 8px; margin-bottom: 16px; }
        .content-box h3 { font-size: 20px; font-weight: 700; margin-bottom: 16px; color: #111827; }
        .content-box h4 { font-size: 18px; font-weight: 600; margin-bottom: 12px; color: #1f2937; }
        .content-box p { margin-bottom: 12px; line-height: 1.8; }
        .content-box ul { list-style: none; padding-left: 0; }
        .content-box li { margin-bottom: 12px; padding-left: 24px; position: relative; }
        .content-box li::before { content: "•"; position: absolute; left: 0; color: ${colorScheme}; font-weight: bold; font-size: 24px; }
        .highlight-box { background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; margin: 16px 0; }
        .info-box { background: linear-gradient(to right, #fef3c7, #fde68a); padding: 16px; border-radius: 8px; border: 2px solid #f59e0b; margin: 16px 0; }
        @media (max-width: 768px) {
            .header-content { flex-direction: column; text-align: center; }
            .section-header { flex-direction: column; align-items: flex-start; }
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="index.html#table" class="back-button">
            <i class="fas fa-arrow-left"></i>
            <span>ආපසු</span>
        </a>

        <div class="header">
            <div class="header-content">
                <i class="fas fa-brain header-icon"></i>
                <div class="header-text">
                    <h1>${citta.name}</h1>
                    <p>${citta.subcategory} සිත ${citta.id} - අභිධර්ම විශ්ලේෂණය</p>
                </div>
            </div>
        </div>

        <div class="section color-green">
            <button class="section-header" onclick="toggleSection('simple')">
                <div class="section-header-content">
                    <i class="fas fa-lightbulb section-icon"></i>
                    <h2>මට්ටම 1: ඉතා සරල අර්ථය</h2>
                </div>
                <i class="fas fa-chevron-down chevron" id="chevron-simple"></i>
            </button>
            <div class="section-content" id="content-simple">
                <div class="content-box">
                    <h3>සරල භාෂාවෙන්:</h3>
                    <p>මෙම සිත <strong>${citta.category}</strong> කාණ්ඩයට අයත් වන අතර <strong>${citta.subcategory}</strong> සිතක් වේ.</p>
                    <div class="highlight-box" style="border-left-color: ${colorScheme};">
                        <p><strong>චෛතසික සංඛ්‍යාව:</strong> ${citta.chaithasikaCount}</p>
                        <p>මෙම සිතෙහි චෛතසික ${citta.chaithasikaCount}ක් යෙදේ.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section color-blue">
            <button class="section-header" onclick="toggleSection('details')">
                <div class="section-header-content">
                    <i class="fas fa-info-circle section-icon"></i>
                    <h2>මට්ටම 2: විස්තරාත්මක විශ්ලේෂණය</h2>
                </div>
                <i class="fas fa-chevron-down chevron" id="chevron-details"></i>
            </button>
            <div class="section-content" id="content-details">
                <div class="content-box">
                    <h3>සිතෙහි ලක්ෂණ:</h3>
                    <p>මෙම සිත <strong>${citta.category}</strong> වන අතර <strong>${citta.subcategory}</strong> කාණ්ඩයට අයත් වේ.</p>
                    <div class="info-box">
                        <p><strong>වැදගත්:</strong> මෙම සිත පිළිබඳ සවිස්තර විශ්ලේෂණය අභිධර්ම පාඨවලින් ලබා ගත හැක.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section color-purple">
            <button class="section-header" onclick="toggleSection('cetasikas')">
                <div class="section-header-content">
                    <i class="fas fa-heart section-icon"></i>
                    <h2>මට්ටම 3: චෛතසික සංයුතිය</h2>
                </div>
                <i class="fas fa-chevron-down chevron" id="chevron-cetasikas"></i>
            </button>
            <div class="section-content" id="content-cetasikas">
                <div class="content-box">
                    <h3>මෙම සිතෙහි චෛතසික ${citta.chaithasikaCount}ක් යෙදේ:</h3>
                    <p>සවිස්තර චෛතසික විශ්ලේෂණය සඳහා මූලික වගුව බලන්න.</p>
                    <div class="info-box">
                        <p><strong>සටහන:</strong> චෛතසික සංයුතිය සිතෙහි ස්වභාවය තීරණය කරයි. ${citta.category} සිතක් ලෙස මෙහි විශේෂ චෛතසික සංයෝජනයක් ඇත.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section color-orange">
            <button class="section-header" onclick="toggleSection('practice')">
                <div class="section-header-content">
                    <i class="fas fa-hands-praying section-icon"></i>
                    <h2>මට්ටම 4: ප්‍රායෝගික මාර්ගෝපදේශ</h2>
                </div>
                <i class="fas fa-chevron-down chevron" id="chevron-practice"></i>
            </button>
            <div class="section-content" id="content-practice">
                <div class="content-box">
                    <h3>භාවනා සහ ප්‍රායෝගික යෙදවීම:</h3>
                    ${isAkusala ? `
                    <div class="highlight-box" style="border-left-color: #ef4444;">
                        <h4>අකුසල සිත දුරු කිරීම:</h4>
                        <ul>
                            <li>සතිපට්ඨාන භාවනාව</li>
                            <li>යෝනිසෝ මනසිකාරය</li>
                            <li>සම්‍යක් දිට්ඨිය වැඩීම</li>
                            <li>කල්‍යාණ මිත්‍රතාව</li>
                        </ul>
                    </div>
                    ` : isKusala ? `
                    <div class="highlight-box" style="border-left-color: #10b981;">
                        <h4>කුසල සිත වර්ධනය කිරීම:</h4>
                        <ul>
                            <li>දාන, සීල, භාවනා</li>
                            <li>මෛත්‍රී භාවනාව</li>
                            <li>සතිපට්ඨාන භාවනාව</li>
                            <li>ධර්ම අධ්‍යයනය</li>
                        </ul>
                    </div>
                    ` : isLokuttara ? `
                    <div class="highlight-box" style="border-left-color: #8b5cf6;">
                        <h4>ලෝකෝත්තර සිත අවබෝධය:</h4>
                        <ul>
                            <li>විදර්ශනා භාවනාව</li>
                            <li>සතර මාර්ග ඵල</li>
                            <li>නිවන් අවබෝධය</li>
                            <li>සතිපට්ඨාන භාවනාව</li>
                        </ul>
                    </div>
                    ` : `
                    <div class="highlight-box" style="border-left-color: #3b82f6;">
                        <h4>සිත අවබෝධය:</h4>
                        <p>මෙම සිත පිළිබඳ ගැඹුරු අවබෝධය සඳහා අභිධර්ම අධ්‍යයනය කරන්න.</p>
                    </div>
                    `}
                </div>
            </div>
        </div>

        <div class="section" style="background: linear-gradient(to right, ${bgGradient}); border-left: 4px solid ${colorScheme};">
            <div class="section-header" style="background: transparent;">
                <div class="section-header-content">
                    <i class="fas fa-info-circle section-icon"></i>
                    <h2>සාරාංශ</h2>
                </div>
            </div>
            <div class="section-content active">
                <div class="content-box">
                    <div class="info-box" style="background: ${isAkusala ? '#fee2e2' : isKusala ? '#dcfce7' : isLokuttara ? '#f3e8ff' : '#dbeafe'}; border-left-color: ${colorScheme};">
                        <p style="text-align: center; font-weight: 700; font-size: 18px; margin-bottom: 12px;">මතක තබා ගන්න:</p>
                        <p style="text-align: center;"><strong>${citta.name}</strong> යනු <strong>${citta.category}</strong> <strong>${citta.subcategory}</strong> සිතක් වන අතර චෛතසික <strong>${citta.chaithasikaCount}ක්</strong> සමඟ ඇතිවේ.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function toggleSection(sectionId) {
            const content = document.getElementById('content-' + sectionId);
            const chevron = document.getElementById('chevron-' + sectionId);
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                chevron.classList.remove('rotated');
            } else {
                content.classList.add('active');
                chevron.classList.add('rotated');
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            toggleSection('simple');
        });
    </script>
</body>
</html>`;
}

console.log('🚀 Generating ALL 89 citta detail pages...\n');

let generated = 0;
let skipped = 0;
let errors = 0;

allCittas.forEach(citta => {
    const filename = generateFilename(citta.id);
    const filepath = path.join(__dirname, filename);
    
    // Skip if already exists (cittas 1 and 2)
    if (fs.existsSync(filepath)) {
        console.log(`⏭️  Skipping ${filename} (already exists)`);
        skipped++;
        return;
    }
    
    try {
        const html = generateCittaHTML(citta);
        fs.writeFileSync(filepath, html, 'utf8');
        console.log(`✅ Generated: ${filename} - ${citta.name.substring(0, 40)}...`);
        generated++;
    } catch (error) {
        console.error(`❌ Error generating ${filename}:`, error.message);
        errors++;
    }
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Generated: ${generated} pages`);
console.log(`   ⏭️  Skipped: ${skipped} pages (already exist)`);
console.log(`   ❌ Errors: ${errors} pages`);
console.log(`   📁 Total: ${generated + skipped} pages`);
console.log(`\n✨ All citta pages created successfully!`);
console.log(`\n🌐 Open http://localhost:8888 to view the site with all citta pages.`);


