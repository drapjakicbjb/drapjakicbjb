const elementsData = [
    { num: 1, sym: 'H', type: 'nonmetal', col: 1, row: 1, mass: '1.008', en: { name: 'Hydrogen' }, hi: { name: 'हाइड्रोजन' } },
    { num: 2, sym: 'He', type: 'noble', col: 18, row: 1, mass: '4.0026', en: { name: 'Helium' }, hi: { name: 'हीलियम' } },
    { num: 3, sym: 'Li', type: 'alkali', col: 1, row: 2, mass: '6.94', en: { name: 'Lithium' }, hi: { name: 'लिथियम' } },
    { num: 4, sym: 'Be', type: 'alkaline', col: 2, row: 2, mass: '9.0122', en: { name: 'Beryllium' }, hi: { name: 'बेरिलियम' } },
    { num: 5, sym: 'B', type: 'metalloid', col: 13, row: 2, mass: '10.81', en: { name: 'Boron' }, hi: { name: 'बोरॉन' } },
    { num: 6, sym: 'C', type: 'nonmetal', col: 14, row: 2, mass: '12.011', en: { name: 'Carbon' }, hi: { name: 'कार्बन' } },
    { num: 7, sym: 'N', type: 'nonmetal', col: 15, row: 2, mass: '14.007', en: { name: 'Nitrogen' }, hi: { name: 'नाइट्रोजन' } },
    { num: 8, sym: 'O', type: 'nonmetal', col: 16, row: 2, mass: '15.999', en: { name: 'Oxygen' }, hi: { name: 'ऑक्सीजन' } },
    { num: 9, sym: 'F', type: 'halogen', col: 17, row: 2, mass: '18.998', en: { name: 'Fluorine' }, hi: { name: 'फ्लोरीन' } },
    { num: 10, sym: 'Ne', type: 'noble', col: 18, row: 2, mass: '20.180', en: { name: 'Neon' }, hi: { name: 'नियॉन' } },
    { num: 11, sym: 'Na', type: 'alkali', col: 1, row: 3, mass: '22.990', en: { name: 'Sodium' }, hi: { name: 'सोडियम' } },
    { num: 12, sym: 'Mg', type: 'alkaline', col: 2, row: 3, mass: '24.305', en: { name: 'Magnesium' }, hi: { name: 'मैग्नीशियम' } },
    { num: 13, sym: 'Al', type: 'post-transition', col: 13, row: 3, mass: '26.982', en: { name: 'Aluminum' }, hi: { name: 'एल्युमिनियम' } },
    { num: 14, sym: 'Si', type: 'metalloid', col: 14, row: 3, mass: '28.085', en: { name: 'Silicon' }, hi: { name: 'सिलिकॉन' } },
    { num: 15, sym: 'P', type: 'nonmetal', col: 15, row: 3, mass: '30.974', en: { name: 'Phosphorus' }, hi: { name: 'फास्फोरस' } },
    { num: 16, sym: 'S', type: 'nonmetal', col: 16, row: 3, mass: '32.06', en: { name: 'Sulfur' }, hi: { name: 'सल्फर' } },
    { num: 17, sym: 'Cl', type: 'halogen', col: 17, row: 3, mass: '35.45', en: { name: 'Chlorine' }, hi: { name: 'क्लोरीन' } },
    { num: 18, sym: 'Ar', type: 'noble', col: 18, row: 3, mass: '39.95', en: { name: 'Argon' }, hi: { name: 'ऑर्गन' } },
    { num: 19, sym: 'K', type: 'alkali', col: 1, row: 4, mass: '39.098', en: { name: 'Potassium' }, hi: { name: 'पोटैशियम' } },
    { num: 20, sym: 'Ca', type: 'alkaline', col: 2, row: 4, mass: '40.078', en: { name: 'Calcium' }, hi: { name: 'कैल्शियम' } },
    { num: 21, sym: 'Sc', type: 'transition', col: 3, row: 4, mass: '44.956', en: { name: 'Scandium' }, hi: { name: 'स्कैंडियम' } },
    { num: 22, sym: 'Ti', type: 'transition', col: 4, row: 4, mass: '47.867', en: { name: 'Titanium' }, hi: { name: 'टाइटेनियम' } },
    { num: 23, sym: 'V', type: 'transition', col: 5, row: 4, mass: '50.942', en: { name: 'Vanadium' }, hi: { name: 'वैनेडियम' } },
    { num: 24, sym: 'Cr', type: 'transition', col: 6, row: 4, mass: '51.996', en: { name: 'Chromium' }, hi: { name: 'क्रोमियम' } },
    { num: 25, sym: 'Mn', type: 'transition', col: 7, row: 4, mass: '54.938', en: { name: 'Manganese' }, hi: { name: 'मैंगनीज' } },
    { num: 26, sym: 'Fe', type: 'transition', col: 8, row: 4, mass: '55.845', en: { name: 'Iron' }, hi: { name: 'लोहा' } },
    { num: 27, sym: 'Co', type: 'transition', col: 9, row: 4, mass: '58.933', en: { name: 'Cobalt' }, hi: { name: 'कोबाल्ट' } },
    { num: 28, sym: 'Ni', type: 'transition', col: 10, row: 4, mass: '58.693', en: { name: 'Nickel' }, hi: { name: 'निकल' } },
    { num: 29, sym: 'Cu', type: 'transition', col: 11, row: 4, mass: '63.546', en: { name: 'Copper' }, hi: { name: 'तांबा' } },
    { num: 30, sym: 'Zn', type: 'transition', col: 12, row: 4, mass: '65.38', en: { name: 'Zinc' }, hi: { name: 'जस्ता' } },
    { num: 31, sym: 'Ga', type: 'post-transition', col: 13, row: 4, mass: '69.723', en: { name: 'Gallium' }, hi: { name: 'गैलियम' } },
    { num: 32, sym: 'Ge', type: 'metalloid', col: 14, row: 4, mass: '72.630', en: { name: 'Germanium' }, hi: { name: 'जर्मेनियम' } },
    { num: 33, sym: 'As', type: 'metalloid', col: 15, row: 4, mass: '74.922', en: { name: 'Arsenic' }, hi: { name: 'आर्सेनिक' } },
    { num: 34, sym: 'Se', type: 'nonmetal', col: 16, row: 4, mass: '78.971', en: { name: 'Selenium' }, hi: { name: 'सेलेनियम' } },
    { num: 35, sym: 'Br', type: 'halogen', col: 17, row: 4, mass: '79.904', en: { name: 'Bromine' }, hi: { name: 'ब्रोमीन' } },
    { num: 36, sym: 'Kr', type: 'noble', col: 18, row: 4, mass: '83.798', en: { name: 'Krypton' }, hi: { name: 'क्रिप्टन' } },
    { num: 37, sym: 'Rb', type: 'alkali', col: 1, row: 5, mass: '85.468', en: { name: 'Rubidium' }, hi: { name: 'रुबिडियम' } },
    { num: 38, sym: 'Sr', type: 'alkaline', col: 2, row: 5, mass: '87.62', en: { name: 'Strontium' }, hi: { name: 'स्ट्रोंटियम' } },
    { num: 39, sym: 'Y', type: 'transition', col: 3, row: 5, mass: '88.906', en: { name: 'Yttrium' }, hi: { name: 'येट्रियम' } },
    { num: 40, sym: 'Zr', type: 'transition', col: 4, row: 5, mass: '91.224', en: { name: 'Zirconium' }, hi: { name: 'जिरकोनियम' } },
    { num: 41, sym: 'Nb', type: 'transition', col: 5, row: 5, mass: '92.906', en: { name: 'Niobium' }, hi: { name: 'नाइओबियम' } },
    { num: 42, sym: 'Mo', type: 'transition', col: 6, row: 5, mass: '95.95', en: { name: 'Molybdenum' }, hi: { name: 'मोलिब्डेनम' } },
    { num: 43, sym: 'Tc', type: 'transition', col: 7, row: 5, mass: '(98)', en: { name: 'Technetium' }, hi: { name: 'टेक्नेटियम' } },
    { num: 44, sym: 'Ru', type: 'transition', col: 8, row: 5, mass: '101.07', en: { name: 'Ruthenium' }, hi: { name: 'रुथेनियम' } },
    { num: 45, sym: 'Rh', type: 'transition', col: 9, row: 5, mass: '102.91', en: { name: 'Rhodium' }, hi: { name: 'रोडियम' } },
    { num: 46, sym: 'Pd', type: 'transition', col: 10, row: 5, mass: '106.42', en: { name: 'Palladium' }, hi: { name: 'पैलेडियम' } },
    { num: 47, sym: 'Ag', type: 'transition', col: 11, row: 5, mass: '107.87', en: { name: 'Silver' }, hi: { name: 'चांदी' } },
    { num: 48, sym: 'Cd', type: 'transition', col: 12, row: 5, mass: '112.41', en: { name: 'Cadmium' }, hi: { name: 'कैडमियम' } },
    { num: 49, sym: 'In', type: 'post-transition', col: 13, row: 5, mass: '114.82', en: { name: 'Indium' }, hi: { name: 'इंडियम' } },
    { num: 50, sym: 'Sn', type: 'post-transition', col: 14, row: 5, mass: '118.71', en: { name: 'Tin' }, hi: { name: 'टिन' } },
    { num: 51, sym: 'Sb', type: 'metalloid', col: 15, row: 5, mass: '121.76', en: { name: 'Antimony' }, hi: { name: 'सुरमा' } },
    { num: 52, sym: 'Te', type: 'metalloid', col: 16, row: 5, mass: '127.60', en: { name: 'Tellurium' }, hi: { name: 'टेल्यूरियम' } },
    { num: 53, sym: 'I', type: 'halogen', col: 17, row: 5, mass: '126.90', en: { name: 'Iodine' }, hi: { name: 'आयोडीन' } },
    { num: 54, sym: 'Xe', type: 'noble', col: 18, row: 5, mass: '131.29', en: { name: 'Xenon' }, hi: { name: 'ज़ेनॉन' } },
    { num: 55, sym: 'Cs', type: 'alkali', col: 1, row: 6, mass: '132.91', en: { name: 'Cesium' }, hi: { name: 'सीज़ियम' } },
    { num: 56, sym: 'Ba', type: 'alkaline', col: 2, row: 6, mass: '137.33', en: { name: 'Barium' }, hi: { name: 'बेरियम' } },
    
    // Lanthanides
    { num: 57, sym: 'La', type: 'lanthanide', col: 4, row: 9, mass: '138.91', en: { name: 'Lanthanum' }, hi: { name: 'लैंथेनम' } },
    { num: 58, sym: 'Ce', type: 'lanthanide', col: 5, row: 9, mass: '140.12', en: { name: 'Cerium' }, hi: { name: 'सीरियम' } },
    { num: 59, sym: 'Pr', type: 'lanthanide', col: 6, row: 9, mass: '140.91', en: { name: 'Praseodymium' }, hi: { name: 'प्रेसीओडिमियम' } },
    { num: 60, sym: 'Nd', type: 'lanthanide', col: 7, row: 9, mass: '144.24', en: { name: 'Neodymium' }, hi: { name: 'नियोडिमियम' } },
    { num: 61, sym: 'Pm', type: 'lanthanide', col: 8, row: 9, mass: '(145)', en: { name: 'Promethium' }, hi: { name: 'प्रोमेथियम' } },
    { num: 62, sym: 'Sm', type: 'lanthanide', col: 9, row: 9, mass: '150.36', en: { name: 'Samarium' }, hi: { name: 'समैरियम' } },
    { num: 63, sym: 'Eu', type: 'lanthanide', col: 10, row: 9, mass: '151.96', en: { name: 'Europium' }, hi: { name: 'यूरोपियम' } },
    { num: 64, sym: 'Gd', type: 'lanthanide', col: 11, row: 9, mass: '157.25', en: { name: 'Gadolinium' }, hi: { name: 'गैडोलिनियम' } },
    { num: 65, sym: 'Tb', type: 'lanthanide', col: 12, row: 9, mass: '158.93', en: { name: 'Terbium' }, hi: { name: 'टर्बियम' } },
    { num: 66, sym: 'Dy', type: 'lanthanide', col: 13, row: 9, mass: '162.50', en: { name: 'Dysprosium' }, hi: { name: 'डिस्प्रोसियम' } },
    { num: 67, sym: 'Ho', type: 'lanthanide', col: 14, row: 9, mass: '164.93', en: { name: 'Holmium' }, hi: { name: 'होल्मियम' } },
    { num: 68, sym: 'Er', type: 'lanthanide', col: 15, row: 9, mass: '167.26', en: { name: 'Erbium' }, hi: { name: 'एर्बियम' } },
    { num: 69, sym: 'Tm', type: 'lanthanide', col: 16, row: 9, mass: '168.93', en: { name: 'Thulium' }, hi: { name: 'थ्यूलियम' } },
    { num: 70, sym: 'Yb', type: 'lanthanide', col: 17, row: 9, mass: '173.05', en: { name: 'Ytterbium' }, hi: { name: 'येटरबियम' } },
    { num: 71, sym: 'Lu', type: 'lanthanide', col: 18, row: 9, mass: '174.97', en: { name: 'Lutetium' }, hi: { name: 'लुटेटियम' } },

    { num: 72, sym: 'Hf', type: 'transition', col: 4, row: 6, mass: '178.49', en: { name: 'Hafnium' }, hi: { name: 'हेफ़नियम' } },
    { num: 73, sym: 'Ta', type: 'transition', col: 5, row: 6, mass: '180.95', en: { name: 'Tantalum' }, hi: { name: 'टैंटलम' } },
    { num: 74, sym: 'W', type: 'transition', col: 6, row: 6, mass: '183.84', en: { name: 'Tungsten' }, hi: { name: 'टंगस्टन' } },
    { num: 75, sym: 'Re', type: 'transition', col: 7, row: 6, mass: '186.21', en: { name: 'Rhenium' }, hi: { name: 'रेनियम' } },
    { num: 76, sym: 'Os', type: 'transition', col: 8, row: 6, mass: '190.23', en: { name: 'Osmium' }, hi: { name: 'ऑस्मियम' } },
    { num: 77, sym: 'Ir', type: 'transition', col: 9, row: 6, mass: '192.22', en: { name: 'Iridium' }, hi: { name: 'इरिडियम' } },
    { num: 78, sym: 'Pt', type: 'transition', col: 10, row: 6, mass: '195.08', en: { name: 'Platinum' }, hi: { name: 'प्लैटिनम' } },
    { num: 79, sym: 'Au', type: 'transition', col: 11, row: 6, mass: '196.97', en: { name: 'Gold' }, hi: { name: 'सोना' } },
    { num: 80, sym: 'Hg', type: 'transition', col: 12, row: 6, mass: '200.59', en: { name: 'Mercury' }, hi: { name: 'पारा' } },
    { num: 81, sym: 'Tl', type: 'post-transition', col: 13, row: 6, mass: '204.38', en: { name: 'Thallium' }, hi: { name: 'थैलियम' } },
    { num: 82, sym: 'Pb', type: 'post-transition', col: 14, row: 6, mass: '207.2', en: { name: 'Lead' }, hi: { name: 'सीसा' } },
    { num: 83, sym: 'Bi', type: 'post-transition', col: 15, row: 6, mass: '208.98', en: { name: 'Bismuth' }, hi: { name: 'बिस्मथ' } },
    { num: 84, sym: 'Po', type: 'post-transition', col: 16, row: 6, mass: '(209)', en: { name: 'Polonium' }, hi: { name: 'पोलोनियम' } },
    { num: 85, sym: 'At', type: 'halogen', col: 17, row: 6, mass: '(210)', en: { name: 'Astatine' }, hi: { name: 'एस्टैटिन' } },
    { num: 86, sym: 'Rn', type: 'noble', col: 18, row: 6, mass: '(222)', en: { name: 'Radon' }, hi: { name: 'रेडॉन' } },
    { num: 87, sym: 'Fr', type: 'alkali', col: 1, row: 7, mass: '(223)', en: { name: 'Francium' }, hi: { name: 'फ्रांसियम' } },
    { num: 88, sym: 'Ra', type: 'alkaline', col: 2, row: 7, mass: '(226)', en: { name: 'Radium' }, hi: { name: 'रेडियम' } },

    // Actinides
    { num: 89, sym: 'Ac', type: 'actinide', col: 4, row: 10, mass: '(227)', en: { name: 'Actinium' }, hi: { name: 'एक्टिनियम' } },
    { num: 90, sym: 'Th', type: 'actinide', col: 5, row: 10, mass: '232.04', en: { name: 'Thorium' }, hi: { name: 'थोरियम' } },
    { num: 91, sym: 'Pa', type: 'actinide', col: 6, row: 10, mass: '231.04', en: { name: 'Protactinium' }, hi: { name: 'प्रोटाक्टिनियम' } },
    { num: 92, sym: 'U', type: 'actinide', col: 7, row: 10, mass: '238.03', en: { name: 'Uranium' }, hi: { name: 'यूरेनियम' } },
    { num: 93, sym: 'Np', type: 'actinide', col: 8, row: 10, mass: '(237)', en: { name: 'Neptunium' }, hi: { name: 'नेप्ट्यूनियम' } },
    { num: 94, sym: 'Pu', type: 'actinide', col: 9, row: 10, mass: '(244)', en: { name: 'Plutonium' }, hi: { name: 'प्लूटोनियम' } },
    { num: 95, sym: 'Am', type: 'actinide', col: 10, row: 10, mass: '(243)', en: { name: 'Americium' }, hi: { name: 'अमेरिसियम' } },
    { num: 96, sym: 'Cm', type: 'actinide', col: 11, row: 10, mass: '(247)', en: { name: 'Curium' }, hi: { name: 'क्यूरियम' } },
    { num: 97, sym: 'Bk', type: 'actinide', col: 12, row: 10, mass: '(247)', en: { name: 'Berkelium' }, hi: { name: 'बर्केलियम' } },
    { num: 98, sym: 'Cf', type: 'actinide', col: 13, row: 10, mass: '(251)', en: { name: 'Californium' }, hi: { name: 'कैलिफ़ोर्नियम' } },
    { num: 99, sym: 'Es', type: 'actinide', col: 14, row: 10, mass: '(252)', en: { name: 'Einsteinium' }, hi: { name: 'आइंस्टीनियम' } },
    { num: 100, sym: 'Fm', type: 'actinide', col: 15, row: 10, mass: '(257)', en: { name: 'Fermium' }, hi: { name: 'फर्मियम' } },
    { num: 101, sym: 'Md', type: 'actinide', col: 16, row: 10, mass: '(258)', en: { name: 'Mendelevium' }, hi: { name: 'मेंडेलेवियम' } },
    { num: 102, sym: 'No', type: 'actinide', col: 17, row: 10, mass: '(259)', en: { name: 'Nobelium' }, hi: { name: 'नोबेलियम' } },
    { num: 103, sym: 'Lr', type: 'actinide', col: 18, row: 10, mass: '(266)', en: { name: 'Lawrencium' }, hi: { name: 'लॉरेंशियम' } },

    { num: 104, sym: 'Rf', type: 'transition', col: 4, row: 7, mass: '(267)', en: { name: 'Rutherfordium' }, hi: { name: 'रदरफोर्डियम' } },
    { num: 105, sym: 'Db', type: 'transition', col: 5, row: 7, mass: '(268)', en: { name: 'Dubnium' }, hi: { name: 'डब्नियम' } },
    { num: 106, sym: 'Sg', type: 'transition', col: 6, row: 7, mass: '(269)', en: { name: 'Seaborgium' }, hi: { name: 'सीबोर्गियम' } },
    { num: 107, sym: 'Bh', type: 'transition', col: 7, row: 7, mass: '(270)', en: { name: 'Bohrium' }, hi: { name: 'बोरियम' } },
    { num: 108, sym: 'Hs', type: 'transition', col: 8, row: 7, mass: '(277)', en: { name: 'Hassium' }, hi: { name: 'हशियम' } },
    { num: 109, sym: 'Mt', type: 'transition', col: 9, row: 7, mass: '(278)', en: { name: 'Meitnerium' }, hi: { name: 'मीटनेरियम' } },
    { num: 110, sym: 'Ds', type: 'transition', col: 10, row: 7, mass: '(281)', en: { name: 'Darmstadtium' }, hi: { name: 'डार्मस्टेडियम' } },
    { num: 111, sym: 'Rg', type: 'transition', col: 11, row: 7, mass: '(282)', en: { name: 'Roentgenium' }, hi: { name: 'रेंटजेनियम' } },
    { num: 112, sym: 'Cn', type: 'transition', col: 12, row: 7, mass: '(285)', en: { name: 'Copernicium' }, hi: { name: 'कोपरनिशियम' } },
    { num: 113, sym: 'Nh', type: 'post-transition', col: 13, row: 7, mass: '(286)', en: { name: 'Nihonium' }, hi: { name: 'निहोनियम' } },
    { num: 114, sym: 'Fl', type: 'post-transition', col: 14, row: 7, mass: '(289)', en: { name: 'Flerovium' }, hi: { name: 'फ्लेरोवियम' } },
    { num: 115, sym: 'Mc', type: 'post-transition', col: 15, row: 7, mass: '(290)', en: { name: 'Moscovium' }, hi: { name: 'मास्कोवियम' } },
    { num: 116, sym: 'Lv', type: 'post-transition', col: 16, row: 7, mass: '(293)', en: { name: 'Livermorium' }, hi: { name: 'लिवरमोरियम' } },
    { num: 117, sym: 'Ts', type: 'halogen', col: 17, row: 7, mass: '(294)', en: { name: 'Tennessine' }, hi: { name: 'टेनेसीन' } },
    { num: 118, sym: 'Og', type: 'noble', col: 18, row: 7, mass: '(294)', en: { name: 'Oganesson' }, hi: { name: 'ओगनेसन' } }
];

const electronShells = [
  [1], [2], // 1-2
  [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], // 3-10
  [2,8,1], [2,8,2], [2,8,3], [2,8,4], [2,8,5], [2,8,6], [2,8,7], [2,8,8], // 11-18
  [2,8,8,1], [2,8,8,2], // 19-20
  [2,8,9,2], [2,8,10,2], [2,8,11,2], [2,8,13,1], [2,8,13,2], [2,8,14,2], [2,8,15,2], [2,8,16,2], [2,8,18,1], [2,8,18,2], // 21-30
  [2,8,18,3], [2,8,18,4], [2,8,18,5], [2,8,18,6], [2,8,18,7], [2,8,18,8], // 31-36
  [2,8,18,8,1], [2,8,18,8,2], // 37-38
  [2,8,18,9,2], [2,8,18,10,2], [2,8,18,12,1], [2,8,18,13,1], [2,8,18,13,2], [2,8,18,15,1], [2,8,18,16,1], [2,8,18,18,0], [2,8,18,18,1], [2,8,18,18,2], // 39-48
  [2,8,18,18,3], [2,8,18,18,4], [2,8,18,18,5], [2,8,18,18,6], [2,8,18,18,7], [2,8,18,18,8], // 49-54
  [2,8,18,18,8,1], [2,8,18,18,8,2], // 55-56
  // Lanthanides 57-71
  [2,8,18,18,9,2], [2,8,18,19,9,2], [2,8,18,21,8,2], [2,8,18,22,8,2], [2,8,18,23,8,2], [2,8,18,24,8,2], [2,8,18,25,8,2], [2,8,18,25,9,2], [2,8,18,27,8,2], [2,8,18,28,8,2], [2,8,18,29,8,2], [2,8,18,30,8,2], [2,8,18,31,8,2], [2,8,18,32,8,2], [2,8,18,32,9,2],
  // 72-86
  [2,8,18,32,10,2], [2,8,18,32,11,2], [2,8,18,32,12,2], [2,8,18,32,13,2], [2,8,18,32,14,2], [2,8,18,32,15,2], [2,8,18,32,17,1], [2,8,18,32,18,1], [2,8,18,32,18,2],
  [2,8,18,32,18,3], [2,8,18,32,18,4], [2,8,18,32,18,5], [2,8,18,32,18,6], [2,8,18,32,18,7], [2,8,18,32,18,8],
  // 87-88
  [2,8,18,32,18,8,1], [2,8,18,32,18,8,2],
  // Actinides 89-103
  [2,8,18,32,18,9,2], [2,8,18,32,18,10,2], [2,8,18,32,20,9,2], [2,8,18,32,21,9,2], [2,8,18,32,22,9,2], [2,8,18,32,24,8,2], [2,8,18,32,25,8,2], [2,8,18,32,25,9,2], [2,8,18,32,27,8,2], [2,8,18,32,28,8,2], [2,8,18,32,29,8,2], [2,8,18,32,30,8,2], [2,8,18,32,31,8,2], [2,8,18,32,32,8,2], [2,8,18,32,32,9,2],
  // 104-118
  [2,8,18,32,32,10,2], [2,8,18,32,32,11,2], [2,8,18,32,32,12,2], [2,8,18,32,32,13,2], [2,8,18,32,32,14,2], [2,8,18,32,32,15,2], [2,8,18,32,32,16,2], [2,8,18,32,32,17,2], [2,8,18,32,32,18,2],
  [2,8,18,32,32,18,3], [2,8,18,32,32,18,4], [2,8,18,32,32,18,5], [2,8,18,32,32,18,6], [2,8,18,32,32,18,7], [2,8,18,32,32,18,8]
];

const categoryLabels = {
    'nonmetal': { en: 'Reactive Nonmetal', hi: 'प्रतिक्रियाशील अधातु' },
    'noble': { en: 'Noble Gas', hi: 'उत्कृष्ट गैस' },
    'alkali': { en: 'Alkali Metal', hi: 'क्षार धातु' },
    'alkaline': { en: 'Alkaline Earth Metal', hi: 'क्षारीय मृदा धातु' },
    'metalloid': { en: 'Metalloid', hi: 'उपधातु' },
    'halogen': { en: 'Halogen', hi: 'हैलोजन' },
    'transition': { en: 'Transition Metal', hi: 'संक्रमण धातु' },
    'post-transition': { en: 'Post-transition Metal', hi: 'संक्रमणोत्तर धातु' },
    'lanthanide': { en: 'Lanthanide', hi: 'लैंथेनाइड' },
    'actinide': { en: 'Actinide', hi: 'एक्टिनाइड' }
};

document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('periodic-table');
    const detailsPanel = document.getElementById('element-details');
    const detailsContent = document.getElementById('element-details-content');
    const closeDetails = document.getElementById('close-element-details');
    const legendButtons = document.querySelectorAll('.legend-btn');
    let activeType = null;

    if (!tableContainer) return;

    // Render Elements
    elementsData.forEach(el => {
        const item = document.createElement('div');
        item.className = `element ${el.type}`;
        item.style.gridColumn = el.col;
        item.style.gridRow = el.row;
        item.dataset.type = el.type;
        
        item.innerHTML = `
            <span class="el-num">${el.num}</span>
            <span class="el-sym">${el.sym}</span>
            <span class="el-name" data-en="${el.en.name}" data-hi="${el.hi.name}">${el.en.name}</span>
        `;
        
        item.addEventListener('click', () => showElementDetails(el));
        tableContainer.appendChild(item);
    });

    // Handle initial language for names
    updateElementNames();

    function showElementDetails(el) {
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        const data = el[currentLang];
        
        const labels = {
            en: { num: 'Atomic Number', mass: 'Atomic Mass', cat: 'Category', elec: 'Electrons' },
            hi: { num: 'परमाणु क्रमांक', mass: 'परमाणु द्रव्यमान', cat: 'श्रेणी', elec: 'इलेक्ट्रॉन' }
        };
        const l = labels[currentLang];
        const categoryName = categoryLabels[el.type] ? categoryLabels[el.type][currentLang] : el.type;

        const shells = electronShells[el.num - 1] || [];
        let atomHtml = `<div class="atom-container"><div class="nucleus">${el.sym}</div>`;
        
        const shellColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FDCB6E', '#6C5CE7', '#E84393', '#00B894'];

        shells.forEach((electrons, shellIndex) => {
            const size = 60 + (shellIndex * 28); // Spacing for rings
            const duration = 10 + (shellIndex * 5); // Slower orbit for outer rings
            const color = shellColors[shellIndex % shellColors.length];
            let ringsHtml = `<div class="electron-orbit" style="width:${size}px; height:${size}px; animation-duration:${duration}s; border-color: ${color}40;">`;
            
            for (let e = 0; e < electrons; e++) {
                const angle = (360 / electrons) * e;
                ringsHtml += `<div class="electron-wrapper" style="transform:rotate(${angle}deg)">
                                 <div class="electron" style="background-color: ${color}; box-shadow: 0 0 5px ${color};"></div>
                              </div>`;
            }
            ringsHtml += `</div>`;
            atomHtml += ringsHtml;
        });
        atomHtml += `</div>`;

        let html = `
            <div class="el-modal-header ${el.type}"></div>
            ${atomHtml}
            <div class="el-modal-info">
                <h3 style="text-align: center; color: white; margin-bottom: 20px; font-size: 1.5rem; letter-spacing: 1px; border-bottom: 1px dashed rgba(255,255,255,0.15); padding-bottom: 15px;">${data.name}</h3>
                <p><strong>${l.num}:</strong> ${el.num}</p>
                <p><strong>${l.mass}:</strong> ${el.mass} u</p>
                <p><strong>${l.cat}:</strong> ${categoryName}</p>
                <p><strong>${l.elec}:</strong> ${shells.join(', ')}</p>
            </div>
        `;
        
        detailsContent.innerHTML = html;
        detailsPanel.classList.add('active');
    }

    if (closeDetails) {
        closeDetails.addEventListener('click', () => {
            detailsPanel.classList.remove('active');
        });
    }

    // Close on click outside the popup content
    if (detailsPanel) {
        detailsPanel.addEventListener('click', (e) => {
            if (e.target === detailsPanel) {
                detailsPanel.classList.remove('active');
            }
        });
    }

    // Legend Highlighting Logic
    legendButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            
            if (activeType === type) {
                // Toggle off
                activeType = null;
                btn.classList.remove('active');
                document.querySelectorAll('.element').forEach(el => {
                    el.classList.remove('dimmed');
                });
            } else {
                // Toggle on
                activeType = type;
                legendButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('.element').forEach(el => {
                    if (el.dataset.type === type) {
                        el.classList.remove('dimmed');
                    } else {
                        el.classList.add('dimmed');
                    }
                });
            }
        });
    });

    function updateElementNames() {
        const lang = localStorage.getItem('preferredLanguage') || 'en';
        document.querySelectorAll('.el-name').forEach(nameSpan => {
            nameSpan.textContent = nameSpan.getAttribute(`data-${lang}`);
        });
        
        // Update details panel if open
        if (detailsPanel.classList.contains('active')) {
            detailsPanel.classList.remove('active'); // Simply close it to avoid stale data
        }
    }

    // Listen to main navigation language toggles
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(updateElementNames, 100);
        });
    });
});
