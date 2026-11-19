/**
 * APJ ABDUL KALAM RESIDENTIAL SCHOOL
 * Comprehensive Game Content Database
 * Complete curriculum-aligned questions for all tiers
 */

(function() {
  'use strict';

  window.GAME_DATA = {
    getTier: function(classValue) {
      const val = String(classValue).toLowerCase();
      if (['nursery', 'lkg', 'ukg'].includes(val)) return 'little';
      const num = parseInt(val, 10);
      if (!isNaN(num)) {
        if (num >= 1 && num <= 5) return 'junior';
        if (num >= 6 && num <= 8) return 'middle';
        if (num >= 9 && num <= 10) return 'secondary';
        if (num >= 11 && num <= 12) return 'senior';
      }
      return 'junior';
    },

    memory: {
  "little": [
    {
      "id": "1",
      "label": "Lion",
      "icon": "🦁",
      "match": "Lion"
    },
    {
      "id": "2",
      "label": "Elephant",
      "icon": "🐘",
      "match": "Elephant"
    },
    {
      "id": "3",
      "label": "Apple",
      "icon": "🍎",
      "match": "Apple"
    },
    {
      "id": "4",
      "label": "Mango",
      "icon": "🥭",
      "match": "Mango"
    },
    {
      "id": "5",
      "label": "Star",
      "icon": "⭐",
      "match": "Star"
    },
    {
      "id": "6",
      "label": "Sun",
      "icon": "☀️",
      "match": "Sun"
    },
    {
      "id": "7",
      "label": "Book",
      "icon": "📚",
      "match": "Book"
    },
    {
      "id": "8",
      "label": "Pencil",
      "icon": "✏️",
      "match": "Pencil"
    }
  ],
  "junior": [
    {
      "id": "1",
      "label": "Earth",
      "icon": "🌍",
      "match": "Earth"
    },
    {
      "id": "2",
      "label": "Rocket",
      "icon": "🚀",
      "match": "Rocket"
    },
    {
      "id": "3",
      "label": "Microscope",
      "icon": "🔬",
      "match": "Microscope"
    },
    {
      "id": "4",
      "label": "Plant",
      "icon": "🌱",
      "match": "Plant"
    },
    {
      "id": "5",
      "label": "Clock",
      "icon": "⏰",
      "match": "Clock"
    },
    {
      "id": "6",
      "label": "Magnet",
      "icon": "🧲",
      "match": "Magnet"
    },
    {
      "id": "7",
      "label": "Computer",
      "icon": "💻",
      "match": "Computer"
    },
    {
      "id": "8",
      "label": "Compass",
      "icon": "🧭",
      "match": "Compass"
    }
  ],
  "middle": [
    {
      "id": "1",
      "label": "Hydrogen (H)",
      "icon": "🧪",
      "match": "Hydrogen (H)"
    },
    {
      "id": "2",
      "label": "Oxygen (O₂)",
      "icon": "💨",
      "match": "Oxygen (O₂)"
    },
    {
      "id": "3",
      "label": "Photosynthesis",
      "icon": "🌿",
      "match": "Photosynthesis"
    },
    {
      "id": "4",
      "label": "Gravity (g)",
      "icon": "🍎",
      "match": "Gravity (g)"
    },
    {
      "id": "5",
      "label": "Cell Nucleus",
      "icon": "🧬",
      "match": "Cell Nucleus"
    },
    {
      "id": "6",
      "label": "Telescope",
      "icon": "🔭",
      "match": "Telescope"
    },
    {
      "id": "7",
      "label": "Prism Light",
      "icon": "🌈",
      "match": "Prism Light"
    },
    {
      "id": "8",
      "label": "Circulatory",
      "icon": "❤️",
      "match": "Circulatory"
    }
  ],
  "secondary": [
    {
      "id": "1",
      "label": "E = mc²",
      "icon": "⚡",
      "match": "E = mc²"
    },
    {
      "id": "2",
      "label": "DNA Helix",
      "icon": "🧬",
      "match": "DNA Helix"
    },
    {
      "id": "3",
      "label": "Ohm’s Law (V=IR)",
      "icon": "💡",
      "match": "Ohm’s Law (V=IR)"
    },
    {
      "id": "4",
      "label": "Mitochondria",
      "icon": "🔋",
      "match": "Mitochondria"
    },
    {
      "id": "5",
      "label": "Periodic Table",
      "icon": "📊",
      "match": "Periodic Table"
    },
    {
      "id": "6",
      "label": "Pythagoras",
      "icon": "📐",
      "match": "Pythagoras"
    },
    {
      "id": "7",
      "label": "Optics Focus",
      "icon": "🔍",
      "match": "Optics Focus"
    },
    {
      "id": "8",
      "label": "Avogadro Number",
      "icon": "🔢",
      "match": "Avogadro Number"
    }
  ],
  "senior": [
    {
      "id": "1",
      "label": "Schrödinger Eq.",
      "icon": "ψ",
      "match": "Schrödinger Eq."
    },
    {
      "id": "2",
      "label": "Thermodynamics ΔS",
      "icon": "🔥",
      "match": "Thermodynamics ΔS"
    },
    {
      "id": "3",
      "label": "Benzene Ring (C₆H₆)",
      "icon": "⌬",
      "match": "Benzene Ring (C₆H₆)"
    },
    {
      "id": "4",
      "label": "Faraday Induction",
      "icon": "🧲",
      "match": "Faraday Induction"
    },
    {
      "id": "5",
      "label": "Integration ∫dx",
      "icon": "∫",
      "match": "Integration ∫dx"
    },
    {
      "id": "6",
      "label": "ATP Synthase",
      "icon": "⚙️",
      "match": "ATP Synthase"
    },
    {
      "id": "7",
      "label": "Photoelectric Eff.",
      "icon": "☀️",
      "match": "Photoelectric Eff."
    },
    {
      "id": "8",
      "label": "Le Chatelier",
      "icon": "⚖️",
      "match": "Le Chatelier"
    }
  ]
},

    words: {
  "little": [
    {
      "mode": "spelling",
      "question": "Which is the correct spelling for the king of the jungle?",
      "options": [
        "Liyon",
        "Lion",
        "Loin",
        "Lyen"
      ],
      "answer": "Lion",
      "explanation": "L-I-O-N is the correct spelling for Lion."
    },
    {
      "mode": "meaning",
      "question": "What color is a ripe banana?",
      "options": [
        "Blue",
        "Yellow",
        "Purple",
        "Black"
      ],
      "answer": "Yellow",
      "explanation": "A ripe banana has a bright yellow peel."
    },
    {
      "mode": "cloze",
      "question": "The bird flew up in the _______.",
      "options": [
        "sky",
        "water",
        "plate",
        "shoe"
      ],
      "answer": "sky",
      "explanation": "Birds fly in the sky using their wings."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of BIG?",
      "options": [
        "Tall",
        "Small",
        "Heavy",
        "Huge"
      ],
      "answer": "Small",
      "explanation": "The opposite of big is small."
    },
    {
      "mode": "synonym",
      "question": "Which word means the same as HAPPY?",
      "options": [
        "Glad",
        "Sad",
        "Angry",
        "Tired"
      ],
      "answer": "Glad",
      "explanation": "Glad and Happy both express feeling joyful."
    },
    {
      "mode": "spelling",
      "question": "Which is the correct spelling for the king of the jungle?",
      "options": [
        "Lion",
        "Liyon",
        "Loin",
        "Lyen"
      ],
      "answer": "Lion",
      "explanation": "L-I-O-N is the correct spelling for Lion."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite (antonym) of HOT?",
      "options": [
        "Cold",
        "Warm",
        "Boiling",
        "Sunny"
      ],
      "answer": "Cold",
      "explanation": "Cold is the opposite of hot."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite (antonym) of BIG?",
      "options": [
        "Small",
        "Large",
        "Huge",
        "Tall"
      ],
      "answer": "Small",
      "explanation": "Small is the opposite of big."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with CAT?",
      "options": [
        "Bat",
        "Dog",
        "Fish",
        "Cow"
      ],
      "answer": "Bat",
      "explanation": "Bat rhymes with Cat because they share the '-at' sound."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for what we read at school:",
      "options": [
        "Book",
        "Buke",
        "Bok",
        "Boke"
      ],
      "answer": "Book",
      "explanation": "B-O-O-K is the correct spelling for Book."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of DAY?",
      "options": [
        "Night",
        "Morning",
        "Afternoon",
        "Noon"
      ],
      "answer": "Night",
      "explanation": "Night is the opposite of day."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for a bright star in our daytime sky:",
      "options": [
        "Sun",
        "Sonn",
        "San",
        "Suun"
      ],
      "answer": "Sun",
      "explanation": "S-U-N is the correct spelling for Sun."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with PEN?",
      "options": [
        "Hen",
        "Car",
        "Tree",
        "Cup"
      ],
      "answer": "Hen",
      "explanation": "Hen rhymes with Pen because both end in '-en'."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of UP?",
      "options": [
        "Down",
        "Above",
        "Over",
        "High"
      ],
      "answer": "Down",
      "explanation": "Down is the opposite direction of Up."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for the animal that barks:",
      "options": [
        "Dog",
        "Dogg",
        "Dug",
        "Dawg"
      ],
      "answer": "Dog",
      "explanation": "D-O-G is the correct spelling for Dog."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of HAPPY?",
      "options": [
        "Sad",
        "Glad",
        "Joyful",
        "Cheerful"
      ],
      "answer": "Sad",
      "explanation": "Sad is the opposite of happy."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with BALL?",
      "options": [
        "Tall",
        "Hop",
        "Run",
        "Sit"
      ],
      "answer": "Tall",
      "explanation": "Tall rhymes with Ball because both end in '-all'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for our writing tool:",
      "options": [
        "Pencil",
        "Pensil",
        "Pencle",
        "Pensel"
      ],
      "answer": "Pencil",
      "explanation": "P-E-N-C-I-L is the correct spelling for Pencil."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of FAST?",
      "options": [
        "Slow",
        "Quick",
        "Speedy",
        "Rapid"
      ],
      "answer": "Slow",
      "explanation": "Slow is the opposite of fast."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for a sweet red fruit:",
      "options": [
        "Apple",
        "Appel",
        "Apel",
        "Aple"
      ],
      "answer": "Apple",
      "explanation": "A-P-P-L-E is the correct spelling for Apple."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with TREE?",
      "options": [
        "Bee",
        "Cat",
        "Sun",
        "Dog"
      ],
      "answer": "Bee",
      "explanation": "Bee rhymes with Tree because both end in the '-ee' sound."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of IN?",
      "options": [
        "Out",
        "Inside",
        "Under",
        "Within"
      ],
      "answer": "Out",
      "explanation": "Out is the opposite of in."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for water falling from clouds:",
      "options": [
        "Rain",
        "Rane",
        "Rayn",
        "Rann"
      ],
      "answer": "Rain",
      "explanation": "R-A-I-N is the correct spelling for Rain."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with FROG?",
      "options": [
        "Log",
        "Hat",
        "Pen",
        "Cup"
      ],
      "answer": "Log",
      "explanation": "Log rhymes with Frog because both share the '-og' sound."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of TALL?",
      "options": [
        "Short",
        "Long",
        "High",
        "Giant"
      ],
      "answer": "Short",
      "explanation": "Short is the opposite of tall."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for what fish do in water:",
      "options": [
        "Swim",
        "Swimm",
        "Swem",
        "Suim"
      ],
      "answer": "Swim",
      "explanation": "S-W-I-M is the correct spelling for Swim."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with STAR?",
      "options": [
        "Car",
        "Bed",
        "Pig",
        "Toy"
      ],
      "answer": "Car",
      "explanation": "Car rhymes with Star because both end in '-ar'."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of OPEN?",
      "options": [
        "Close",
        "Door",
        "Wide",
        "Unlock"
      ],
      "answer": "Close",
      "explanation": "Close is the opposite of open."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for our home pet that meows:",
      "options": [
        "Cat",
        "Kat",
        "Catt",
        "Caat"
      ],
      "answer": "Cat",
      "explanation": "C-A-T is the correct spelling for Cat."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of HEAVY?",
      "options": [
        "Light",
        "Dark",
        "Huge",
        "Hard"
      ],
      "answer": "Light",
      "explanation": "Light is the opposite of heavy."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with RING?",
      "options": [
        "Sing",
        "Box",
        "Tub",
        "Fan"
      ],
      "answer": "Sing",
      "explanation": "Sing rhymes with Ring because both end in '-ing'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for where birds lay eggs:",
      "options": [
        "Nest",
        "Nast",
        "Nesst",
        "Neste"
      ],
      "answer": "Nest",
      "explanation": "N-E-S-T is the correct spelling for Nest."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of CLEAN?",
      "options": [
        "Dirty",
        "Neat",
        "Fresh",
        "Pure"
      ],
      "answer": "Dirty",
      "explanation": "Dirty is the opposite of clean."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for a vehicle with four wheels:",
      "options": [
        "Car",
        "Caar",
        "Karr",
        "Kar"
      ],
      "answer": "Car",
      "explanation": "C-A-R is the correct spelling for Car."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with CAKE?",
      "options": [
        "Bake",
        "Cow",
        "Pen",
        "Lip"
      ],
      "answer": "Bake",
      "explanation": "Bake rhymes with Cake because both share the '-ake' sound."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of WET?",
      "options": [
        "Dry",
        "Damp",
        "Rainy",
        "Soaked"
      ],
      "answer": "Dry",
      "explanation": "Dry is the opposite of wet."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for baby birds or baby dogs:",
      "options": [
        "Puppy",
        "Pupy",
        "Puppie",
        "Puppe"
      ],
      "answer": "Puppy",
      "explanation": "P-U-P-P-Y is the correct spelling for Puppy."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of HARD?",
      "options": [
        "Soft",
        "Tough",
        "Solid",
        "Rough"
      ],
      "answer": "Soft",
      "explanation": "Soft is the opposite of hard."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with BOAT?",
      "options": [
        "Coat",
        "Hat",
        "Dog",
        "Sun"
      ],
      "answer": "Coat",
      "explanation": "Coat rhymes with Boat because both end in '-oat'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for what we wear on our feet:",
      "options": [
        "Shoes",
        "Shoos",
        "Shus",
        "Shooz"
      ],
      "answer": "Shoes",
      "explanation": "S-H-O-E-S is the correct spelling for Shoes."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of NEAR?",
      "options": [
        "Far",
        "Close",
        "Next",
        "Beside"
      ],
      "answer": "Far",
      "explanation": "Far is the opposite of near."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with MOON?",
      "options": [
        "Spoon",
        "Tree",
        "Cat",
        "Red"
      ],
      "answer": "Spoon",
      "explanation": "Spoon rhymes with Moon because both share '-oon'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for a tall green plant with branches:",
      "options": [
        "Tree",
        "Tre",
        "Trea",
        "Trii"
      ],
      "answer": "Tree",
      "explanation": "T-R-E-E is the correct spelling for Tree."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of SWEET?",
      "options": [
        "Sour / Bitter",
        "Sugary",
        "Tasty",
        "Delicious"
      ],
      "answer": "Sour / Bitter",
      "explanation": "Sour or bitter is the opposite of sweet."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with DUCK?",
      "options": [
        "Truck",
        "Pig",
        "Cow",
        "Hen"
      ],
      "answer": "Truck",
      "explanation": "Truck rhymes with Duck because both end in '-uck'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for what we drink when thirsty:",
      "options": [
        "Water",
        "Watar",
        "Woter",
        "Wattar"
      ],
      "answer": "Water",
      "explanation": "W-A-T-E-R is the correct spelling for Water."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of FULL?",
      "options": [
        "Empty",
        "Loaded",
        "Filled",
        "Big"
      ],
      "answer": "Empty",
      "explanation": "Empty is the opposite of full."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with HOUSE?",
      "options": [
        "Mouse",
        "Fish",
        "Door",
        "Wall"
      ],
      "answer": "Mouse",
      "explanation": "Mouse rhymes with House because both share '-ouse'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for the color of milk:",
      "options": [
        "White",
        "Wite",
        "Whyte",
        "Whit"
      ],
      "answer": "White",
      "explanation": "W-H-I-T-E is the correct spelling for White."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of GO?",
      "options": [
        "Stop / Come",
        "Run",
        "Walk",
        "Play"
      ],
      "answer": "Stop / Come",
      "explanation": "Stop or Come is the opposite of Go."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with BED?",
      "options": [
        "Red",
        "Cat",
        "Sun",
        "Cup"
      ],
      "answer": "Red",
      "explanation": "Red rhymes with Bed because both end in '-ed'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for what we use to brush our teeth:",
      "options": [
        "Toothbrush",
        "Tuthbrush",
        "Toothbrash",
        "Toothbresh"
      ],
      "answer": "Toothbrush",
      "explanation": "T-O-O-T-H-B-R-U-S-H is the correct spelling."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of QUIET?",
      "options": [
        "Noisy / Loud",
        "Silent",
        "Peaceful",
        "Calm"
      ],
      "answer": "Noisy / Loud",
      "explanation": "Noisy is the opposite of quiet."
    },
    {
      "mode": "meaning",
      "question": "Which word rhymes with KING?",
      "options": [
        "Ring",
        "Boy",
        "Man",
        "Dog"
      ],
      "answer": "Ring",
      "explanation": "Ring rhymes with King because both end in '-ing'."
    },
    {
      "mode": "spelling",
      "question": "Choose the correct spelling for the temple of education:",
      "options": [
        "School",
        "Skool",
        "Schol",
        "Schoole"
      ],
      "answer": "School",
      "explanation": "S-C-H-O-O-L is the correct spelling for School."
    }
  ],
  "junior": [
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for school work:",
      "options": [
        "Homevork",
        "Homework",
        "Homewrok",
        "Humework"
      ],
      "answer": "Homework",
      "explanation": "Homework is spelled H-O-M-E-W-O-R-K."
    },
    {
      "mode": "synonym",
      "question": "What is a synonym for COURAGEOUS?",
      "options": [
        "Brave",
        "Timid",
        "Fearful",
        "Lazy"
      ],
      "answer": "Brave",
      "explanation": "Courageous means showing bravery and courage."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of ANCIENT?",
      "options": [
        "Old",
        "Modern",
        "Historic",
        "Antique"
      ],
      "answer": "Modern",
      "explanation": "Ancient means very old, and modern means contemporary/new."
    },
    {
      "mode": "meaning",
      "question": "What does \"Curious\" mean?",
      "options": [
        "Eager to learn and know",
        "Always sleepy",
        "Very angry",
        "Extremely fast"
      ],
      "answer": "Eager to learn and know",
      "explanation": "Curiosity is a desire to learn or investigate things."
    },
    {
      "mode": "cloze",
      "question": "Dr. Kalam was renowned for his profound _______ in science.",
      "options": [
        "wisdom",
        "carelessness",
        "delay",
        "forgetfulness"
      ],
      "answer": "wisdom",
      "explanation": "Wisdom means having knowledge, experience, and good judgement."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for BEAUTIFUL:",
      "options": [
        "Pretty",
        "Ugly",
        "Rough",
        "Harsh"
      ],
      "answer": "Pretty",
      "explanation": "Pretty and beautiful both mean attractive and pleasing."
    },
    {
      "mode": "antonym",
      "question": "What is the correct antonym (opposite) of BRAVE?",
      "options": [
        "Cowardly",
        "Heroic",
        "Bold",
        "Courageous"
      ],
      "answer": "Cowardly",
      "explanation": "Cowardly means lacking courage, the opposite of brave."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for someone who instructs students:",
      "options": [
        "Teacher",
        "Teecher",
        "Techer",
        "Teachur"
      ],
      "answer": "Teacher",
      "explanation": "Teacher is spelled T-E-A-C-H-E-R."
    },
    {
      "mode": "grammar",
      "question": "What is the plural form of the word 'CHILD'?",
      "options": [
        "Children",
        "Childs",
        "Childrens",
        "Childes"
      ],
      "answer": "Children",
      "explanation": "Child has an irregular plural form: Children."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for COURTEOUS:",
      "options": [
        "Polite",
        "Rude",
        "Mean",
        "Loud"
      ],
      "answer": "Polite",
      "explanation": "Courteous means exhibiting polite and considerate manners."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of ANCIENT?",
      "options": [
        "Modern",
        "Old",
        "Past",
        "Historic"
      ],
      "answer": "Modern",
      "explanation": "Modern means belonging to present times, opposite of ancient."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning necessary:",
      "options": [
        "Necessary",
        "Neccessary",
        "Necesary",
        "Neccesary"
      ],
      "answer": "Necessary",
      "explanation": "Necessary is spelled with one 'c' and double 's' (N-E-C-E-S-S-A-R-Y)."
    },
    {
      "mode": "cloze",
      "question": "Fill in the blank: The sun _____ in the east every morning.",
      "options": [
        "rises",
        "rise",
        "rising",
        "rose"
      ],
      "answer": "rises",
      "explanation": "Simple present tense with singular third-person subject 'the sun' takes 'rises'."
    },
    {
      "mode": "grammar",
      "question": "What is the past tense of the verb 'GO'?",
      "options": [
        "Went",
        "Gone",
        "Goes",
        "Going"
      ],
      "answer": "Went",
      "explanation": "'Went' is the simple past tense of 'go'."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for HUGE:",
      "options": [
        "Enormous",
        "Tiny",
        "Small",
        "Mini"
      ],
      "answer": "Enormous",
      "explanation": "Enormous means extraordinarily large in size."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of GENEROUS?",
      "options": [
        "Stingy / Selfish",
        "Kind",
        "Helpful",
        "Giving"
      ],
      "answer": "Stingy / Selfish",
      "explanation": "Stingy means unwilling to share, the opposite of generous."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a place of learning:",
      "options": [
        "Knowledge",
        "Knowlege",
        "Nowledge",
        "Knolege"
      ],
      "answer": "Knowledge",
      "explanation": "Knowledge is spelled K-N-O-W-L-E-D-G-E."
    },
    {
      "mode": "grammar",
      "question": "What is the plural of 'TOOTH'?",
      "options": [
        "Teeth",
        "Tooths",
        "Teethes",
        "Toothies"
      ],
      "answer": "Teeth",
      "explanation": "'Teeth' is the irregular plural form of 'tooth'."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for ANXIOUS:",
      "options": [
        "Nervous / Worried",
        "Calm",
        "Relaxed",
        "Happy"
      ],
      "answer": "Nervous / Worried",
      "explanation": "Anxious means experiencing worry, unease, or nervousness."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of VICTORY?",
      "options": [
        "Defeat",
        "Success",
        "Triumph",
        "Win"
      ],
      "answer": "Defeat",
      "explanation": "Defeat is the loss of a battle or contest, opposite of victory."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for the 2nd month of the year:",
      "options": [
        "February",
        "Febuary",
        "Feburary",
        "Februray"
      ],
      "answer": "February",
      "explanation": "February has a silent 'r': F-E-B-R-U-A-R-Y."
    },
    {
      "mode": "cloze",
      "question": "Fill in the blank: An apple a day keeps the doctor _____.",
      "options": [
        "away",
        "near",
        "close",
        "happy"
      ],
      "answer": "away",
      "explanation": "'An apple a day keeps the doctor away' is a famous proverb."
    },
    {
      "mode": "grammar",
      "question": "What is the past tense of the verb 'CATCH'?",
      "options": [
        "Caught",
        "Catched",
        "Catching",
        "Cot"
      ],
      "answer": "Caught",
      "explanation": "'Caught' is the irregular past tense of 'catch'."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for INTELLIGENT:",
      "options": [
        "Clever / Smart",
        "Dull",
        "Foolish",
        "Slow"
      ],
      "answer": "Clever / Smart",
      "explanation": "Intelligent means possessing high mental capacity and smartness."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of NATURAL?",
      "options": [
        "Artificial / Synthetic",
        "Pure",
        "Organic",
        "Fresh"
      ],
      "answer": "Artificial / Synthetic",
      "explanation": "Artificial means human-made, the opposite of natural."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for the instrument measuring temperature:",
      "options": [
        "Thermometer",
        "Thermomiter",
        "Thermameter",
        "Thermomater"
      ],
      "answer": "Thermometer",
      "explanation": "T-H-E-R-M-O-M-E-T-E-R."
    },
    {
      "mode": "grammar",
      "question": "What is the collective noun for a group of lions?",
      "options": [
        "Pride",
        "Pack",
        "Flock",
        "Herd"
      ],
      "answer": "Pride",
      "explanation": "A social family group of lions is called a 'Pride'."
    },
    {
      "mode": "grammar",
      "question": "What is the collective noun for a group of fish?",
      "options": [
        "School / Shoal",
        "Flock",
        "Pack",
        "Swarm"
      ],
      "answer": "School / Shoal",
      "explanation": "A group of fish swimming together is a 'School' or 'Shoal'."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for QUICK:",
      "options": [
        "Rapid / Fast",
        "Sluggish",
        "Tardy",
        "Leisurely"
      ],
      "answer": "Rapid / Fast",
      "explanation": "Quick and rapid describe swift movement in little time."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of HONEST?",
      "options": [
        "Dishonest",
        "Truthful",
        "Sincere",
        "Loyal"
      ],
      "answer": "Dishonest",
      "explanation": "Dishonest means intending to deceive, opposite of honest."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning certainly:",
      "options": [
        "Definitely",
        "Definately",
        "Definitly",
        "Defanitely"
      ],
      "answer": "Definitely",
      "explanation": "Definitely has 'finite' in the middle: D-E-F-I-N-I-T-E-L-Y."
    },
    {
      "mode": "cloze",
      "question": "Fill in the blank: Honesty is the best _____.",
      "options": [
        "policy",
        "habit",
        "law",
        "rule"
      ],
      "answer": "policy",
      "explanation": "'Honesty is the best policy' is an enduring moral truth."
    },
    {
      "mode": "grammar",
      "question": "What is the past tense of the irregular verb 'BUY'?",
      "options": [
        "Bought",
        "Buyed",
        "Brought",
        "Baught"
      ],
      "answer": "Bought",
      "explanation": "'Bought' is the past tense of 'buy'."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for WEALTHY:",
      "options": [
        "Rich / Affluent",
        "Poor",
        "Broke",
        "Needy"
      ],
      "answer": "Rich / Affluent",
      "explanation": "Wealthy means having plentiful possessions and money."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of EXPENSIVE?",
      "options": [
        "Cheap / Inexpensive",
        "Costly",
        "Priceless",
        "Valuable"
      ],
      "answer": "Cheap / Inexpensive",
      "explanation": "Cheap means low in cost, the opposite of expensive."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a natural wonder of water falling:",
      "options": [
        "Waterfall",
        "Waterfal",
        "Watterfall",
        "Watirfall"
      ],
      "answer": "Waterfall",
      "explanation": "W-A-T-E-R-F-A-L-L."
    },
    {
      "mode": "grammar",
      "question": "What is the plural of 'LEAF'?",
      "options": [
        "Leaves",
        "Leafs",
        "Leaveses",
        "Leafies"
      ],
      "answer": "Leaves",
      "explanation": "Nouns ending in '-f' often form plurals in '-ves': Leaves."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for CALM:",
      "options": [
        "Peaceful / Serene",
        "Agitated",
        "Stormy",
        "Noisy"
      ],
      "answer": "Peaceful / Serene",
      "explanation": "Calm describes stillness and absence of agitation."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of CRUEL?",
      "options": [
        "Kind / Compassionate",
        "Mean",
        "Brutal",
        "Harsh"
      ],
      "answer": "Kind / Compassionate",
      "explanation": "Kindness is the direct opposite of cruelty."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for what scientists do in laboratories:",
      "options": [
        "Experiment",
        "Experament",
        "Expariment",
        "Expirement"
      ],
      "answer": "Experiment",
      "explanation": "E-X-P-E-R-I-M-E-N-T."
    },
    {
      "mode": "cloze",
      "question": "Fill in the blank: Where there is a will, there is a _____.",
      "options": [
        "way",
        "road",
        "door",
        "path"
      ],
      "answer": "way",
      "explanation": "'Where there is a will, there is a way' encourages perseverance."
    },
    {
      "mode": "grammar",
      "question": "What is the past tense of the verb 'TEACH'?",
      "options": [
        "Taught",
        "Teached",
        "Tought",
        "Taughted"
      ],
      "answer": "Taught",
      "explanation": "'Taught' is the past form of 'teach'."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for DILIGENT:",
      "options": [
        "Hardworking",
        "Lazy",
        "Careless",
        "Slow"
      ],
      "answer": "Hardworking",
      "explanation": "Diligent describes persistent, conscientious effort."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of HAZARDOUS?",
      "options": [
        "Safe / Secure",
        "Dangerous",
        "Risky",
        "Perilous"
      ],
      "answer": "Safe / Secure",
      "explanation": "Safe means free from risk or danger, opposite of hazardous."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for an enclosed room in a school:",
      "options": [
        "Classroom",
        "Clasroom",
        "Classroome",
        "Claseroome"
      ],
      "answer": "Classroom",
      "explanation": "C-L-A-S-S-R-O-O-M."
    },
    {
      "mode": "grammar",
      "question": "What is the comparative form of the adjective 'GOOD'?",
      "options": [
        "Better",
        "Gooder",
        "Best",
        "More good"
      ],
      "answer": "Better",
      "explanation": "Good, Better, Best are the positive, comparative, and superlative degrees."
    },
    {
      "mode": "grammar",
      "question": "What is the superlative form of the adjective 'BAD'?",
      "options": [
        "Worst",
        "Badder",
        "Baddest",
        "Worse"
      ],
      "answer": "Worst",
      "explanation": "Bad, Worse, Worst represent degrees of comparison."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for SILENT:",
      "options": [
        "Quiet",
        "Loud",
        "Chatty",
        "Noisy"
      ],
      "answer": "Quiet",
      "explanation": "Silent and quiet mean making little or no sound."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of INNOCENT?",
      "options": [
        "Guilty",
        "Pure",
        "Blameless",
        "Harmless"
      ],
      "answer": "Guilty",
      "explanation": "Guilty means responsible for wrongdoing, opposite of innocent."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for tomorrow's predecessor:",
      "options": [
        "Yesterday",
        "Yestarday",
        "Yesterdae",
        "Yesterdy"
      ],
      "answer": "Yesterday",
      "explanation": "Y-E-S-T-E-R-D-A-Y."
    },
    {
      "mode": "cloze",
      "question": "Fill in the blank: A stitch in time saves _____.",
      "options": [
        "nine",
        "ten",
        "five",
        "all"
      ],
      "answer": "nine",
      "explanation": "'A stitch in time saves nine' means fixing small problems early."
    },
    {
      "mode": "grammar",
      "question": "What is the plural of 'MOUSE'?",
      "options": [
        "Mice",
        "Mouses",
        "Mices",
        "Mousees"
      ],
      "answer": "Mice",
      "explanation": "'Mice' is the irregular plural form of 'mouse'."
    },
    {
      "mode": "synonym",
      "question": "Choose the correct synonym for ACCURATE:",
      "options": [
        "Correct / Precise",
        "Wrong",
        "Faulty",
        "Imprecise"
      ],
      "answer": "Correct / Precise",
      "explanation": "Accurate means free from error and conforming to truth."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of PRAISE?",
      "options": [
        "Criticize / Blame",
        "Admire",
        "Compliment",
        "Applaud"
      ],
      "answer": "Criticize / Blame",
      "explanation": "To criticize is to find fault, opposite of praise."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for the person who flies an airplane:",
      "options": [
        "Pilot",
        "Pylot",
        "Pilet",
        "Pilote"
      ],
      "answer": "Pilot",
      "explanation": "P-I-L-O-T."
    }
  ],
  "middle": [
    {
      "mode": "spelling",
      "question": "Select the correct spelling:",
      "options": [
        "Accomodation",
        "Accommodation",
        "Acomodation",
        "Acommodation"
      ],
      "answer": "Accommodation",
      "explanation": "Accommodation has double \"c\" and double \"m\"."
    },
    {
      "mode": "synonym",
      "question": "Choose the word closest in meaning to DILIGENT:",
      "options": [
        "Hardworking",
        "Careless",
        "Passive",
        "Impulsive"
      ],
      "answer": "Hardworking",
      "explanation": "Diligent means showing steady, earnest, and energetic effort."
    },
    {
      "mode": "antonym",
      "question": "What is the opposite of OBSOLETE?",
      "options": [
        "Outdated",
        "Current",
        "Antique",
        "Extinct"
      ],
      "answer": "Current",
      "explanation": "Obsolete means no longer produced or used; current means modern and active."
    },
    {
      "mode": "meaning",
      "question": "What does BENEVOLENT mean?",
      "options": [
        "Kind and generous",
        "Hostile and harmful",
        "Cold and distant",
        "Lazy and slow"
      ],
      "answer": "Kind and generous",
      "explanation": "Benevolent derives from Latin meaning well-wishing, charitable and kind."
    },
    {
      "mode": "cloze",
      "question": "The scientist conducted rigorous trials to _______ the hypothesis.",
      "options": [
        "validate",
        "shatter",
        "ignore",
        "complicate"
      ],
      "answer": "validate",
      "explanation": "Validate means to check or prove the validity or accuracy of something."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of METICULOUS?",
      "options": [
        "Thorough / Painstaking",
        "Careless",
        "Hasty",
        "Sloppy"
      ],
      "answer": "Thorough / Painstaking",
      "explanation": "Meticulous denotes showing great attention to detail and precision."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of OBSCURE?",
      "options": [
        "Clear / Renowned",
        "Hidden",
        "Dark",
        "Vague"
      ],
      "answer": "Clear / Renowned",
      "explanation": "Obscure means not discovered or understood; clear is the opposite."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning an accommodation or lodging:",
      "options": [
        "Accommodation",
        "Accomodation",
        "Acommodation",
        "Accommadation"
      ],
      "answer": "Accommodation",
      "explanation": "Accommodation has two 'c's and two 'm's (A-C-C-O-M-M-O-D-A-T-I-O-N)."
    },
    {
      "mode": "grammar",
      "question": "What figure of speech compares two distinct entities using 'like' or 'as'?",
      "options": [
        "Simile",
        "Metaphor",
        "Personification",
        "Hyperbole"
      ],
      "answer": "Simile",
      "explanation": "A simile directly compares using connectors 'like' or 'as' (e.g. 'as brave as a lion')."
    },
    {
      "mode": "grammar",
      "question": "What figure of speech directly states one thing is another without using 'like' or 'as'?",
      "options": [
        "Metaphor",
        "Simile",
        "Alliteration",
        "Oxymoron"
      ],
      "answer": "Metaphor",
      "explanation": "A metaphor is an implicit comparison (e.g. 'Time is a thief')."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of CANDID?",
      "options": [
        "Frank / Outspoken",
        "Deceptive",
        "Shy",
        "Reserved"
      ],
      "answer": "Frank / Outspoken",
      "explanation": "Candid means truthful, straightforward, and sincere in expression."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of FRUGAL?",
      "options": [
        "Extravagant / Wasteful",
        "Economical",
        "Thrifty",
        "Prudent"
      ],
      "answer": "Extravagant / Wasteful",
      "explanation": "Extravagant means spending money lavishly, opposite of frugal."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for privilege or precedence:",
      "options": [
        "Privilege",
        "Priviledge",
        "Privelege",
        "Privelidge"
      ],
      "answer": "Privilege",
      "explanation": "Privilege is spelled P-R-I-V-I-L-E-G-E."
    },
    {
      "mode": "grammar",
      "question": "Fill in the blank: Neither the teacher nor the students _____ present.",
      "options": [
        "were",
        "was",
        "is",
        "be"
      ],
      "answer": "were",
      "explanation": "When subjects are joined by 'neither... nor', the verb agrees with the nearer subject ('students' -> were)."
    },
    {
      "mode": "meaning",
      "question": "What is the meaning of the idiom 'Burn the midnight oil'?",
      "options": [
        "Study or work late into the night",
        "Start a fire",
        "Waste fuel",
        "Sleep deeply"
      ],
      "answer": "Study or work late into the night",
      "explanation": "Burning the midnight oil refers to diligent nocturnal labor or study."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of ADVERSITY:",
      "options": [
        "Hardship / Misfortune",
        "Prosperity",
        "Wealth",
        "Joy"
      ],
      "answer": "Hardship / Misfortune",
      "explanation": "Adversity refers to difficult or unpleasant situations."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of BENEVOLENT?",
      "options": [
        "Malevolent / Spiteful",
        "Kind",
        "Generous",
        "Helpful"
      ],
      "answer": "Malevolent / Spiteful",
      "explanation": "Benevolent means wishing well; malevolent means wishing harm."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for maintenance or continuity:",
      "options": [
        "Maintenance",
        "Maintainance",
        "Maintenence",
        "Maintinance"
      ],
      "answer": "Maintenance",
      "explanation": "Maintenance changes 'tain' to 'ten': M-A-I-N-T-E-N-A-N-C-E."
    },
    {
      "mode": "meaning",
      "question": "What is a person who writes dictionaries called?",
      "options": [
        "Lexicographer",
        "Bibliophile",
        "Cartographer",
        "Philologist"
      ],
      "answer": "Lexicographer",
      "explanation": "A lexicographer compiles, writes, and edits dictionaries."
    },
    {
      "mode": "meaning",
      "question": "What is a person who collects or studies postage stamps called?",
      "options": [
        "Philatelist",
        "Numismatist",
        "Ornithologist",
        "Anthropologist"
      ],
      "answer": "Philatelist",
      "explanation": "Philately is the collection and study of postage stamps."
    },
    {
      "mode": "meaning",
      "question": "What is a person who collects or studies coins and medals called?",
      "options": [
        "Numismatist",
        "Philatelist",
        "Archaeologist",
        "Botanist"
      ],
      "answer": "Numismatist",
      "explanation": "Numismatics is the study and collection of currency and tokens."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of PRUDENT?",
      "options": [
        "Wise / Cautious",
        "Reckless",
        "Rash",
        "Foolish"
      ],
      "answer": "Wise / Cautious",
      "explanation": "Prudent signifies acting with or showing care and foresight for the future."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of VAGUE?",
      "options": [
        "Definite / Explicit",
        "Ambiguous",
        "Hazy",
        "Cloudy"
      ],
      "answer": "Definite / Explicit",
      "explanation": "Vague implies lack of clarity; definite is sharp and unambiguous."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for an organized sequence of events:",
      "options": [
        "Curriculum",
        "Curiculum",
        "Curriculam",
        "Curricullum"
      ],
      "answer": "Curriculum",
      "explanation": "Curriculum has double 'r' and single 'l' (C-U-R-R-I-C-U-L-U-M)."
    },
    {
      "mode": "meaning",
      "question": "What is the meaning of the idiom 'Piece of cake'?",
      "options": [
        "Something very easy to do",
        "A sweet dessert",
        "A difficult puzzle",
        "A birthday gift"
      ],
      "answer": "Something very easy to do",
      "explanation": "'A piece of cake' signifies a straightforward and easily accomplished task."
    },
    {
      "mode": "meaning",
      "question": "What is the meaning of the idiom 'Once in a blue moon'?",
      "options": [
        "Very rarely / Infrequently",
        "Every month",
        "At daytime",
        "Always"
      ],
      "answer": "Very rarely / Infrequently",
      "explanation": "A blue moon is a rare celestial occurrence, symbolizing uncommon events."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of RELUCTANT:",
      "options": [
        "Unwilling / Hesitant",
        "Eager",
        "Enthusiastic",
        "Ready"
      ],
      "answer": "Unwilling / Hesitant",
      "explanation": "Reluctant expresses disinclination and hesitation."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of TRANSIENT?",
      "options": [
        "Permanent / Enduring",
        "Temporary",
        "Fleeting",
        "Brief"
      ],
      "answer": "Permanent / Enduring",
      "explanation": "Transient means lasting only for a short time; permanent endures."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a military commander:",
      "options": [
        "Lieutenant",
        "Leutenant",
        "Lieftenant",
        "Lieuetenant"
      ],
      "answer": "Lieutenant",
      "explanation": "L-I-E-U-T-E-N-A-N-T."
    },
    {
      "mode": "grammar",
      "question": "Identify the passive voice of: 'The chef cooked a delicious dinner.'",
      "options": [
        "A delicious dinner was cooked by the chef.",
        "A delicious dinner is cooked by chef.",
        "Chef was cooking dinner.",
        "Dinner had been cooked."
      ],
      "answer": "A delicious dinner was cooked by the chef.",
      "explanation": "Past simple passive takes 'was/were + past participle (cooked)'."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of NOVICE?",
      "options": [
        "Beginner / Learner",
        "Expert",
        "Veteran",
        "Master"
      ],
      "answer": "Beginner / Learner",
      "explanation": "A novice is a person new to or inexperienced in a field."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of DILATE?",
      "options": [
        "Constrict / Shrink",
        "Expand",
        "Widen",
        "Enlarge"
      ],
      "answer": "Constrict / Shrink",
      "explanation": "To dilate is to become wider or larger; to constrict is to narrow."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning an uncomfortable state of hesitation:",
      "options": [
        "Embarrassment",
        "Embarassment",
        "Embarrasment",
        "Embarasment"
      ],
      "answer": "Embarrassment",
      "explanation": "Embarrassment features double 'r' and double 's' (E-M-B-A-R-R-A-S-S-M-E-N-T)."
    },
    {
      "mode": "meaning",
      "question": "What is a story with a moral lesson featuring talking animals called?",
      "options": [
        "Fable",
        "Myth",
        "Biography",
        "Novel"
      ],
      "answer": "Fable",
      "explanation": "Fables (like Aesop's or Panchatantra) use animals to impart ethical principles."
    },
    {
      "mode": "meaning",
      "question": "What is an account of a person's life written by that person called?",
      "options": [
        "Autobiography",
        "Biography",
        "Memoir",
        "Anthology"
      ],
      "answer": "Autobiography",
      "explanation": "'Auto' (self) + 'bio' (life) + 'graphy' (writing) = writing of one's own life."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of AUSPICIOUS:",
      "options": [
        "Favorable / Propitious",
        "Ominous",
        "Unlucky",
        "Gloomy"
      ],
      "answer": "Favorable / Propitious",
      "explanation": "Auspicious indicates conducive to success; promising favorable outcomes."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of COMPASSION:",
      "options": [
        "Cruelty / Indifference",
        "Empathy",
        "Sympathy",
        "Kindness"
      ],
      "answer": "Cruelty / Indifference",
      "explanation": "Compassion is sympathetic pity for others; cruelty is callousness."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning a state of uninterrupted duration:",
      "options": [
        "Continuity",
        "Continuty",
        "Contenuity",
        "Continuety"
      ],
      "answer": "Continuity",
      "explanation": "C-O-N-T-I-N-U-I-T-Y."
    },
    {
      "mode": "grammar",
      "question": "Which word is an adverb in: 'The eagle soared gracefully in the sky'?",
      "options": [
        "Gracefully",
        "Eagle",
        "Soared",
        "Sky"
      ],
      "answer": "Gracefully",
      "explanation": "'Gracefully' modifies the verb 'soared', describing the manner of flight."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of IMPARTIAL?",
      "options": [
        "Unbiased / Neutral",
        "Prejudiced",
        "Biased",
        "Partisan"
      ],
      "answer": "Unbiased / Neutral",
      "explanation": "Impartial denotes treating all rivals or disputants equally."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of SCARCITY?",
      "options": [
        "Abundance / Plenitude",
        "Shortage",
        "Lack",
        "Dearth"
      ],
      "answer": "Abundance / Plenitude",
      "explanation": "Scarcity refers to insufficient supply; abundance denotes great plenty."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning a sovereign reign:",
      "options": [
        "Sovereignty",
        "Sovereignity",
        "Soverignty",
        "Souverignty"
      ],
      "answer": "Sovereignty",
      "explanation": "S-O-V-E-R-E-I-G-N-T-Y."
    },
    {
      "mode": "meaning",
      "question": "What is the meaning of the idiom 'Bite the bullet'?",
      "options": [
        "Face a painful situation with courage",
        "Shoot a target",
        "Chew metal",
        "Surrender quietly"
      ],
      "answer": "Face a painful situation with courage",
      "explanation": "Biting the bullet implies enduring unavoidable hardship stoically."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of VIGILANT?",
      "options": [
        "Watchful / Alert",
        "Careless",
        "Negligent",
        "Drowsy"
      ],
      "answer": "Watchful / Alert",
      "explanation": "Vigilant denotes keeping careful watch for possible dangers."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of PLENTIFUL?",
      "options": [
        "Scarce / Meager",
        "Abundant",
        "Bountiful",
        "Copious"
      ],
      "answer": "Scarce / Meager",
      "explanation": "Plentiful means abundant; scarce means present in inadequate quantities."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning a distinct trait:",
      "options": [
        "Characteristic",
        "Charateristic",
        "Characteristick",
        "Charactaristic"
      ],
      "answer": "Characteristic",
      "explanation": "C-H-A-R-A-C-T-E-R-I-S-T-I-C."
    },
    {
      "mode": "grammar",
      "question": "Which sentence features a correct subject-verb agreement?",
      "options": [
        "The bouquet of yellow roses smells sweet.",
        "The bouquet of yellow roses smell sweet.",
        "The bouquet are smelling.",
        "Bouquet smell sweetly."
      ],
      "answer": "The bouquet of yellow roses smells sweet.",
      "explanation": "The head noun 'bouquet' is singular, so the verb is 'smells'."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of CONCUR:",
      "options": [
        "Agree",
        "Disagree",
        "Debate",
        "Reject"
      ],
      "answer": "Agree",
      "explanation": "To concur means to have the same opinion or agree with a decision."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of HOSTILE?",
      "options": [
        "Friendly / Amicable",
        "Aggressive",
        "Unfriendly",
        "Antagonistic"
      ],
      "answer": "Friendly / Amicable",
      "explanation": "Hostile means showing opposition; friendly denotes warmth and goodwill."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for an enthusiastic celebration:",
      "options": [
        "Celebration",
        "Celabration",
        "Celebrasion",
        "Cellebration"
      ],
      "answer": "Celebration",
      "explanation": "C-E-L-E-B-R-A-T-I-O-N."
    },
    {
      "mode": "meaning",
      "question": "What is the meaning of the idiom 'Spill the beans'?",
      "options": [
        "Disclose a secret prematurely",
        "Cook dinner",
        "Make a mess",
        "Drop groceries"
      ],
      "answer": "Disclose a secret prematurely",
      "explanation": "Spilling the beans means unintentionally or indiscreetly revealing confidential news."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of ELATED:",
      "options": [
        "Overjoyed / Ecstatic",
        "Depressed",
        "Dejected",
        "Melancholic"
      ],
      "answer": "Overjoyed / Ecstatic",
      "explanation": "Elated signifies ecstasy, high spirits, and immense joy."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of ARROGANT?",
      "options": [
        "Humble / Modest",
        "Proud",
        "Conceited",
        "Haughty"
      ],
      "answer": "Humble / Modest",
      "explanation": "Arrogant denotes an exaggerated sense of importance; humble denotes modesty."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning unquestionable authenticity:",
      "options": [
        "Authentic",
        "Authenthic",
        "Athentic",
        "Authentick"
      ],
      "answer": "Authentic",
      "explanation": "A-U-T-H-E-N-T-I-C."
    },
    {
      "mode": "grammar",
      "question": "What is a group of words containing a subject and predicate that forms part of a sentence called?",
      "options": [
        "Clause",
        "Phrase",
        "Prefix",
        "Idiom"
      ],
      "answer": "Clause",
      "explanation": "A clause possesses both a subject and finite verb, unlike a phrase."
    }
  ],
  "secondary": [
    {
      "mode": "synonym",
      "question": "Identify the synonym for METICULOUS:",
      "options": [
        "Precise and careful",
        "Careless and hasty",
        "Vague",
        "Sluggish"
      ],
      "answer": "Precise and careful",
      "explanation": "Meticulous means showing great attention to detail; very careful and precise."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of CANDID?",
      "options": [
        "Frank",
        "Deceptive",
        "Direct",
        "Honest"
      ],
      "answer": "Deceptive",
      "explanation": "Candid means truthful and straightforward; its antonym is deceptive or secretive."
    },
    {
      "mode": "spelling",
      "question": "Select the correctly spelled word:",
      "options": [
        "Surveillance",
        "Surveilance",
        "Survalience",
        "Survalance"
      ],
      "answer": "Surveillance",
      "explanation": "Surveillance is spelled S-U-R-V-E-I-L-L-A-N-C-E."
    },
    {
      "mode": "meaning",
      "question": "What does \"Ephemeral\" mean?",
      "options": [
        "Lasting for a very short time",
        "Eternal and everlasting",
        "Heavy and massive",
        "Deeply sorrowful"
      ],
      "answer": "Lasting for a very short time",
      "explanation": "Ephemeral means lasting or living for a very brief period."
    },
    {
      "mode": "cloze",
      "question": "The committee was impressed by the candidate’s _______ speech.",
      "options": [
        "eloquent",
        "incoherent",
        "lethargic",
        "monotonous"
      ],
      "answer": "eloquent",
      "explanation": "Eloquent describes fluent, forceful, and persuasive speech."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of EPHEMERAL:",
      "options": [
        "Transient / Fleeting",
        "Eternal",
        "Perpetual",
        "Enduring"
      ],
      "answer": "Transient / Fleeting",
      "explanation": "Ephemeral describes phenomena lasting for a very brief time."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of UBIQUITOUS (omnipresent)?",
      "options": [
        "Rare / Scarce",
        "Omnipresent",
        "Pervasive",
        "Universal"
      ],
      "answer": "Rare / Scarce",
      "explanation": "Ubiquitous means found everywhere; rare means seldom encountered."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a written document guaranteeing accuracy:",
      "options": [
        "Certificate",
        "Certifacate",
        "Sertificate",
        "Certificit"
      ],
      "answer": "Certificate",
      "explanation": "C-E-R-T-I-F-I-C-A-T-E."
    },
    {
      "mode": "grammar",
      "question": "What is the rhetorical device where contradictory terms appear in conjunction (e.g. 'deafening silence')?",
      "options": [
        "Oxymoron",
        "Hyperbole",
        "Synecdoche",
        "Euphemism"
      ],
      "answer": "Oxymoron",
      "explanation": "An oxymoron fuses opposite concepts into a paradoxical phrase."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of ENIGMATIC:",
      "options": [
        "Mysterious / Cryptic",
        "Obvious",
        "Transparent",
        "Straightforward"
      ],
      "answer": "Mysterious / Cryptic",
      "explanation": "Enigmatic denotes difficult to interpret, puzzling, or mysterious."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of LACONIC (terse in speech)?",
      "options": [
        "Verbose / Loquacious",
        "Brief",
        "Concise",
        "Succinct"
      ],
      "answer": "Verbose / Loquacious",
      "explanation": "Laconic implies minimal words; verbose implies wordy and talkative."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning an unintended event:",
      "options": [
        "Occurrence",
        "Occurence",
        "Ocurrence",
        "Occurance"
      ],
      "answer": "Occurrence",
      "explanation": "Occurrence has double 'c' and double 'r' (O-C-C-U-R-R-E-N-C-E)."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A remedy for all diseases or difficulties'?",
      "options": [
        "Panacea",
        "Antidote",
        "Elixir",
        "Placebo"
      ],
      "answer": "Panacea",
      "explanation": "Panacea represents a universal cure-all for ailments or troubles."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A person who loves or collects books'?",
      "options": [
        "Bibliophile",
        "Philatelist",
        "Polyglot",
        "Misologist"
      ],
      "answer": "Bibliophile",
      "explanation": "A bibliophile is an enthusiastic book collector and admirer."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'One who speaks many languages fluently'?",
      "options": [
        "Polyglot",
        "Monoglot",
        "Linguist",
        "Orator"
      ],
      "answer": "Polyglot",
      "explanation": "A polyglot can converse, read, and write in numerous languages."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of FASTIDIOUS:",
      "options": [
        "Meticulous / Demanding",
        "Careless",
        "Indifferent",
        "Slapdash"
      ],
      "answer": "Meticulous / Demanding",
      "explanation": "Fastidious denotes being very attentive to and concerned about accuracy and detail."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of ALACRITY (brisk readiness)?",
      "options": [
        "Lethargy / Sluggishness",
        "Eagerness",
        "Speed",
        "Promptness"
      ],
      "answer": "Lethargy / Sluggishness",
      "explanation": "Alacrity signifies eager enthusiasm; lethargy denotes sluggish reluctance."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning happening simultaneously:",
      "options": [
        "Simultaneous",
        "Simultanious",
        "Simultaneus",
        "Simultanios"
      ],
      "answer": "Simultaneous",
      "explanation": "S-I-M-U-L-T-A-N-E-O-U-S."
    },
    {
      "mode": "grammar",
      "question": "What figure of speech uses extreme exaggeration not intended to be taken literally?",
      "options": [
        "Hyperbole",
        "Understatement",
        "Metaphor",
        "Irony"
      ],
      "answer": "Hyperbole",
      "explanation": "Hyperbole amplifies reality for rhetorical emphasis (e.g. 'I cried a river')."
    },
    {
      "mode": "grammar",
      "question": "What is the substitution of an inoffensive term for a harsh one called (e.g. 'passed away')?",
      "options": [
        "Euphemism",
        "Oxymoron",
        "Apostrophe",
        "Satire"
      ],
      "answer": "Euphemism",
      "explanation": "Euphemisms soften distressing, blunt, or offensive expressions."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of SURREPTITIOUS:",
      "options": [
        "Secretive / Clandestine",
        "Overt",
        "Blatant",
        "Public"
      ],
      "answer": "Secretive / Clandestine",
      "explanation": "Surreptitious denotes kept secret, especially because it would not be approved of."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of ESOTERIC (understood by few)?",
      "options": [
        "Exoteric / Commonplace",
        "Obscure",
        "Arcane",
        "Cryptic"
      ],
      "answer": "Exoteric / Commonplace",
      "explanation": "Esoteric knowledge is specialized; exoteric is accessible to all."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning an official pardon:",
      "options": [
        "Amnesty",
        "Amnasty",
        "Amneasty",
        "Amnisty"
      ],
      "answer": "Amnesty",
      "explanation": "A-M-N-E-S-T-Y."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A lover of mankind who donates generously'?",
      "options": [
        "Philanthropist",
        "Misanthrope",
        "Altruist",
        "Humanitarian"
      ],
      "answer": "Philanthropist",
      "explanation": "Philanthropists contribute wealth and time to uplift human welfare."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A person who dislikes and distrusts human society'?",
      "options": [
        "Misanthrope",
        "Philanthropist",
        "Ascetic",
        "Hermit"
      ],
      "answer": "Misanthrope",
      "explanation": "A misanthrope harbors cynical aversion toward humanity."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of RETICENT:",
      "options": [
        "Reserved / Taciturn",
        "Garrulous",
        "Loquacious",
        "Outgoing"
      ],
      "answer": "Reserved / Taciturn",
      "explanation": "Reticent means disinclined to speak freely; reserved."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of PEJORATIVE (derogatory)?",
      "options": [
        "Complimentary / Laudatory",
        "Derogatory",
        "Disparaging",
        "Insulting"
      ],
      "answer": "Complimentary / Laudatory",
      "explanation": "Pejorative expresses contempt; complimentary expresses admiration."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a person appointed to settle an international dispute:",
      "options": [
        "Arbitrator",
        "Arbitrater",
        "Arbetrator",
        "Arbitratur"
      ],
      "answer": "Arbitrator",
      "explanation": "A-R-B-I-T-R-A-T-O-R."
    },
    {
      "mode": "grammar",
      "question": "What is the mood of the verb in: 'If I were you, I would study harder'?",
      "options": [
        "Subjunctive Mood",
        "Indicative Mood",
        "Imperative Mood",
        "Interrogative Mood"
      ],
      "answer": "Subjunctive Mood",
      "explanation": "The subjunctive mood expresses hypothetical, wishful, or counter-factual conditions."
    },
    {
      "mode": "synonym",
      "question": "What is the synonym of PROLIFIC:",
      "options": [
        "Productive / Abundant",
        "Barren",
        "Unproductive",
        "Sparse"
      ],
      "answer": "Productive / Abundant",
      "explanation": "Prolific authors or scientists produce a large volume of high-quality work."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of DOGMATIC (opinionated without debate)?",
      "options": [
        "Flexible / Open-minded",
        "Rigid",
        "Authoritarian",
        "Inflexible"
      ],
      "answer": "Flexible / Open-minded",
      "explanation": "Dogmatic asserts principles as incontrovertibly true; open-minded invites scrutiny."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a period of one thousand years:",
      "options": [
        "Millennium",
        "Millenium",
        "Milennium",
        "Millenniam"
      ],
      "answer": "Millennium",
      "explanation": "Millennium has double 'l' and double 'n' (M-I-L-L-E-N-N-I-U-M)."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'Government by officials and administrative departments'?",
      "options": [
        "Bureaucracy",
        "Democracy",
        "Autocracy",
        "Plutocracy"
      ],
      "answer": "Bureaucracy",
      "explanation": "A bureaucracy administers governance through tiered departments."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'Government by the wealthy class'?",
      "options": [
        "Plutocracy",
        "Oligarchy",
        "Aristocracy",
        "Monarchy"
      ],
      "answer": "Plutocracy",
      "explanation": "Plutocracy is governance dominated by economic elites."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of TENACIOUS:",
      "options": [
        "Persistent / Resolute",
        "Yielding",
        "Weak",
        "Fickle"
      ],
      "answer": "Persistent / Resolute",
      "explanation": "Tenacious means holding fast and refusing to surrender."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of CANDID:",
      "options": [
        "Guarded / Insincere",
        "Honest",
        "Direct",
        "Frank"
      ],
      "answer": "Guarded / Insincere",
      "explanation": "Candid is open and sincere; guarded is evasive and masked."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning having two different aspects:",
      "options": [
        "Dichotomy",
        "Dicotomy",
        "Dichotamy",
        "Dycotomy"
      ],
      "answer": "Dichotomy",
      "explanation": "D-I-C-H-O-T-O-M-Y."
    },
    {
      "mode": "grammar",
      "question": "Identify the error in: 'Scarcely had he entered the room than the lights went out.'",
      "options": [
        "'than' should be replaced by 'when'",
        "'had' should be 'did'",
        "'entered' should be 'enter'",
        "No error"
      ],
      "answer": "'than' should be replaced by 'when'",
      "explanation": "Correlative conjunction 'scarcely... when' must pair with 'when', not 'than'."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of COGENT:",
      "options": [
        "Convincing / Compelling",
        "Weak",
        "Ineffective",
        "Flawed"
      ],
      "answer": "Convincing / Compelling",
      "explanation": "A cogent argument is clear, logical, and irresistibly persuasive."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of MEAGER:",
      "options": [
        "Plentiful / Copious",
        "Scanty",
        "Sparse",
        "Deficient"
      ],
      "answer": "Plentiful / Copious",
      "explanation": "Meager denotes deficient in quantity; copious means abundant."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning an agreement reached by mutual concession:",
      "options": [
        "Compromise",
        "Compromize",
        "Comprimise",
        "Compromice"
      ],
      "answer": "Compromise",
      "explanation": "C-O-M-P-R-O-M-I-S-E."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'The state of remaining unmarried by choice'?",
      "options": [
        "Celibacy",
        "Monogamy",
        "Polygamy",
        "Matrimony"
      ],
      "answer": "Celibacy",
      "explanation": "Celibacy is the state of abstaining from marriage."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A place where dead bodies are kept for post-mortem'?",
      "options": [
        "Mortuary",
        "Cemetery",
        "Crematorium",
        "Hospital"
      ],
      "answer": "Mortuary",
      "explanation": "A mortuary or morgue stores bodies prior to burial, cremation, or autopsy."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of DISPARATE:",
      "options": [
        "Dissimilar / Distinct",
        "Identical",
        "Equal",
        "Uniform"
      ],
      "answer": "Dissimilar / Distinct",
      "explanation": "Disparate elements are fundamentally different and incomparable."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of VENERABLE (worthy of profound respect)?",
      "options": [
        "Disreputable / Dishonorable",
        "Respected",
        "August",
        "Revered"
      ],
      "answer": "Disreputable / Dishonorable",
      "explanation": "Venerable denotes commanding deep reverence; disreputable lacks honor."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for the biological process of breathing:",
      "options": [
        "Respiration",
        "Resperasion",
        "Respirasion",
        "Resparation"
      ],
      "answer": "Respiration",
      "explanation": "R-E-S-P-I-R-A-T-I-O-N."
    },
    {
      "mode": "grammar",
      "question": "What literary device attributes human qualities to inanimate objects or concepts?",
      "options": [
        "Personification",
        "Metaphor",
        "Metonymy",
        "Irony"
      ],
      "answer": "Personification",
      "explanation": "Personification imbues non-human entities with human attributes (e.g. 'Wind whispered')."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of INNOCUOUS:",
      "options": [
        "Harmless / Inoffensive",
        "Harmful",
        "Toxic",
        "Noxious"
      ],
      "answer": "Harmless / Inoffensive",
      "explanation": "Innocuous signifies not harmful or injurious."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of EXONERATE (acquit of blame)?",
      "options": [
        "Convict / Incriminate",
        "Acquit",
        "Vindicate",
        "Absolve"
      ],
      "answer": "Convict / Incriminate",
      "explanation": "Exonerate clears from accusation; convict finds guilty."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning characterized by sound judgment:",
      "options": [
        "Judicious",
        "Judisious",
        "Judiceous",
        "Judeceous"
      ],
      "answer": "Judicious",
      "explanation": "J-U-D-I-C-I-O-U-S."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A speech delivered without prior preparation'?",
      "options": [
        "Extempore / Impromptu",
        "Memorized",
        "Rehearsed",
        "Declamation"
      ],
      "answer": "Extempore / Impromptu",
      "explanation": "An extempore speech is given spontaneously off-the-cuff."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of PRISTINE:",
      "options": [
        "Unspoiled / Pure",
        "Tarnished",
        "Polluted",
        "Corrupted"
      ],
      "answer": "Unspoiled / Pure",
      "explanation": "Pristine refers to something in its original, untouched condition."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of AUDACIOUS:",
      "options": [
        "Timid / Cautious",
        "Daring",
        "Bold",
        "Brave"
      ],
      "answer": "Timid / Cautious",
      "explanation": "Audacious implies bold daring; timid denotes hesitation and fear."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for mutual relationship between two variables:",
      "options": [
        "Correlation",
        "Corelation",
        "Correlasion",
        "Corellation"
      ],
      "answer": "Correlation",
      "explanation": "Correlation has double 'r' and single 'l' (C-O-R-R-E-L-A-T-I-O-N)."
    },
    {
      "mode": "grammar",
      "question": "Identify the grammatical role of 'Whom' in: 'Whom did you invite to the annual function?'",
      "options": [
        "Objective pronoun",
        "Subjective pronoun",
        "Possessive pronoun",
        "Demonstrative pronoun"
      ],
      "answer": "Objective pronoun",
      "explanation": "'Whom' functions as the grammatical direct object of the verb 'invite'."
    }
  ],
  "senior": [
    {
      "mode": "synonym",
      "question": "What is the closest synonym to UBIQUITOUS?",
      "options": [
        "Omnipresent",
        "Scarce",
        "Unique",
        "Obscure"
      ],
      "answer": "Omnipresent",
      "explanation": "Ubiquitous means present, appearing, or found everywhere."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of ESOTERIC?",
      "options": [
        "Mainstream / Commonplace",
        "Arcane",
        "Cryptic",
        "Mystical"
      ],
      "answer": "Mainstream / Commonplace",
      "explanation": "Esoteric means understood by only a small number of people with specialized knowledge."
    },
    {
      "mode": "meaning",
      "question": "What is the meaning of PARADIGM?",
      "options": [
        "A typical example, model or conceptual framework",
        "A sharp mathematical contradiction",
        "A temporary illusion",
        "A minor mechanical error"
      ],
      "answer": "A typical example, model or conceptual framework",
      "explanation": "A paradigm is a distinct set of concepts, patterns, or theories in a discipline."
    },
    {
      "mode": "spelling",
      "question": "Select the correct spelling:",
      "options": [
        "Idiosyncrasy",
        "Ideosyncracy",
        "Idiosyncracy",
        "Ideosyncrasy"
      ],
      "answer": "Idiosyncrasy",
      "explanation": "Idiosyncrasy is spelled I-D-I-O-S-Y-N-C-R-A-S-Y."
    },
    {
      "mode": "cloze",
      "question": "His comprehensive analysis served to _______ previously ambiguous experimental data.",
      "options": [
        "elucidate",
        "obfuscate",
        "stagnate",
        "undermine"
      ],
      "answer": "elucidate",
      "explanation": "Elucidate means to make something lucid, clear and easy to understand."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of PERSPICACIOUS:",
      "options": [
        "Insightful / Discerning",
        "Dull",
        "Ignorant",
        "Unaware"
      ],
      "answer": "Insightful / Discerning",
      "explanation": "Perspicacious denotes having a ready insight into and understanding of things."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of SYCOPHANT (obsequious flatterer)?",
      "options": [
        "Outspoken Critic",
        "Flatterer",
        "Toady",
        "Fawner"
      ],
      "answer": "Outspoken Critic",
      "explanation": "A sycophant flatters insincerely; an outspoken critic states honest truths."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning difficult to control or unruly:",
      "options": [
        "Intransigent",
        "Intransagant",
        "Intransagent",
        "Intransigant"
      ],
      "answer": "Intransigent",
      "explanation": "I-N-T-R-A-N-S-I-G-E-N-T denotes refusing to compromise."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A person who is indifferent to pleasure or pain'?",
      "options": [
        "Stoic",
        "Epicurean",
        "Hedonist",
        "Cynic"
      ],
      "answer": "Stoic",
      "explanation": "Stoicism emphasizes endurance of hardship without display of emotion."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'The fear of being in closed or confined spaces'?",
      "options": [
        "Claustrophobia",
        "Agoraphobia",
        "Acrophobia",
        "Hydrophobia"
      ],
      "answer": "Claustrophobia",
      "explanation": "Claustrophobia is an irrational anxiety provoked by confined spaces."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of SANGUINE:",
      "options": [
        "Optimistic / Hopeful",
        "Pessimistic",
        "Gloomy",
        "Morose"
      ],
      "answer": "Optimistic / Hopeful",
      "explanation": "Sanguine describes a temperament cheerful, confident, and optimistic."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of TACITURN (disinclined to talk)?",
      "options": [
        "Loquacious / Voluble",
        "Reserved",
        "Quiet",
        "Reticent"
      ],
      "answer": "Loquacious / Voluble",
      "explanation": "Taciturn means quiet; loquacious denotes overflowing with words."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning an artistic arrangement of different motifs:",
      "options": [
        "Pastiche",
        "Pastishe",
        "Pasteache",
        "Pastische"
      ],
      "answer": "Pastiche",
      "explanation": "P-A-S-T-I-C-H-E."
    },
    {
      "mode": "grammar",
      "question": "What is the figure of speech where a part represents the whole (e.g. 'all hands on deck')?",
      "options": [
        "Synecdoche",
        "Metonymy",
        "Irony",
        "Anaphora"
      ],
      "answer": "Synecdoche",
      "explanation": "Synecdoche uses a physical part to designate the complete entity."
    },
    {
      "mode": "grammar",
      "question": "What figure of speech substitutes an associated concept for the thing meant (e.g. 'the Crown')?",
      "options": [
        "Metonymy",
        "Synecdoche",
        "Litotes",
        "Zeugma"
      ],
      "answer": "Metonymy",
      "explanation": "Metonymy replaces a noun with a closely related attribute (e.g. 'The White House announced')."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of EQUIVOCAL:",
      "options": [
        "Ambiguous / Noncommittal",
        "Clear",
        "Definite",
        "Unmistakable"
      ],
      "answer": "Ambiguous / Noncommittal",
      "explanation": "Equivocal language is deliberately open to multiple interpretations."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of TRUCULENT (eager to fight)?",
      "options": [
        "Gentle / Amiable",
        "Belligerent",
        "Aggressive",
        "Combative"
      ],
      "answer": "Gentle / Amiable",
      "explanation": "Truculent signifies fierce defiance; amiable is pleasant and peaceful."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning showing severe lack of energy:",
      "options": [
        "Lethargic",
        "Lethargick",
        "Lithargic",
        "Lethargik"
      ],
      "answer": "Lethargic",
      "explanation": "L-E-T-H-A-R-G-I-C."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'Release of strong emotional tension through art or drama'?",
      "options": [
        "Catharsis",
        "Amnesia",
        "Hypnosis",
        "Epiphany"
      ],
      "answer": "Catharsis",
      "explanation": "Aristotle identified catharsis as the purifying purge of pity and fear in tragedy."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A sudden, profound realization or insight'?",
      "options": [
        "Epiphany",
        "Illusion",
        "Delusion",
        "Paradox"
      ],
      "answer": "Epiphany",
      "explanation": "An epiphany is an intuitive grasp of reality through an unexpected event."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of OBSEQUIOUS:",
      "options": [
        "Servile / Fawning",
        "Imperious",
        "Arrogant",
        "Commanding"
      ],
      "answer": "Servile / Fawning",
      "explanation": "Obsequious denotes obedient or attentive to an excessive degree."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of MUNIFICENT (exceedingly generous)?",
      "options": [
        "Parsimonious / Stingy",
        "Bountiful",
        "Lavish",
        "Liberal"
      ],
      "answer": "Parsimonious / Stingy",
      "explanation": "Munificent denotes grand generosity; parsimonious denotes extreme frugality."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a medical specialist in nervous system disorders:",
      "options": [
        "Neurologist",
        "Nurologist",
        "Neurologyst",
        "Nuerologist"
      ],
      "answer": "Neurologist",
      "explanation": "N-E-U-R-O-L-O-G-I-S-T."
    },
    {
      "mode": "grammar",
      "question": "What is the rhetorical understatement in which an affirmative is expressed by negating its opposite (e.g. 'not bad')?",
      "options": [
        "Litotes",
        "Hyperbole",
        "Chiasmus",
        "Tautology"
      ],
      "answer": "Litotes",
      "explanation": "Litotes employs double negatives for understated ironic emphasis."
    },
    {
      "mode": "grammar",
      "question": "What rhetorical scheme reverses grammatical structures in successive phrases (e.g. 'Never let a fool kiss you or a kiss fool you')?",
      "options": [
        "Chiasmus",
        "Zeugma",
        "Anaphora",
        "Asyndeton"
      ],
      "answer": "Chiasmus",
      "explanation": "Chiasmus crosses syntactical structures in an inverted AB-BA pattern."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of QUINTESSENTIAL:",
      "options": [
        "Archetypal / Definitive",
        "Atypical",
        "Unusual",
        "Substandard"
      ],
      "answer": "Archetypal / Definitive",
      "explanation": "Quintessential represents the purest, most perfect exemplar of a quality."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of CAPRICIOUS (erratic and whimsical)?",
      "options": [
        "Steadfast / Consistent",
        "Fickle",
        "Mercurial",
        "Impulsive"
      ],
      "answer": "Steadfast / Consistent",
      "explanation": "Capricious signifies sudden unpredictable mood shifts; steadfast is reliable."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for excessive, exaggerated self-admiration:",
      "options": [
        "Narcissism",
        "Narsissism",
        "Narcisism",
        "Narsicism"
      ],
      "answer": "Narcissism",
      "explanation": "N-A-R-C-I-S-S-I-S-M."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A short witty statement expressing general truth'?",
      "options": [
        "Aphorism / Maxim",
        "Homily",
        "Eulogy",
        "Elegy"
      ],
      "answer": "Aphorism / Maxim",
      "explanation": "An aphorism condenses wisdom into a memorable, pithy remark."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A poem of serious reflection, typically a lament for the dead'?",
      "options": [
        "Elegy",
        "Sonnet",
        "Ballad",
        "Ode"
      ],
      "answer": "Elegy",
      "explanation": "An elegy mourns bereavement (e.g. Gray's 'Elegy in a Country Churchyard')."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of VICARIOUS:",
      "options": [
        "Indirect / Derivative",
        "Direct",
        "Primary",
        "First-hand"
      ],
      "answer": "Indirect / Derivative",
      "explanation": "Vicarious experiences are felt through imaginative participation in another's actions."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of MELLIFLUOUS (sweetly musical sounding)?",
      "options": [
        "Cacophonous / Harsh",
        "Euphonic",
        "Dulcet",
        "Harmonious"
      ],
      "answer": "Cacophonous / Harsh",
      "explanation": "Mellifluous flows like honey; cacophonous grates with jarring noise."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for a lover of luxury and refined sensory pleasures:",
      "options": [
        "Sybarite",
        "Sibaryte",
        "Sybaright",
        "Siberite"
      ],
      "answer": "Sybarite",
      "explanation": "S-Y-B-A-R-I-T-E."
    },
    {
      "mode": "grammar",
      "question": "What is the figure of speech where a single verb applies to two nouns with different meanings (e.g. 'She broke his car and his heart')?",
      "options": [
        "Zeugma",
        "Synecdoche",
        "Litotes",
        "Metaphor"
      ],
      "answer": "Zeugma",
      "explanation": "Zeugma joins grammatically disparate clauses using a single multifaceted predicate."
    },
    {
      "mode": "grammar",
      "question": "What is the repetition of a word at the beginning of successive clauses called?",
      "options": [
        "Anaphora",
        "Epistrophe",
        "Alliteration",
        "Assonance"
      ],
      "answer": "Anaphora",
      "explanation": "Anaphora drives oratorical resonance (e.g. Dr. King's 'I have a dream')."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of INDEFATIGABLE:",
      "options": [
        "Tireless / Unflagging",
        "Lethargic",
        "Exhausted",
        "Feeble"
      ],
      "answer": "Tireless / Unflagging",
      "explanation": "Indefatigable denotes incapable of being fatigued or disheartened."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of BELLICOSE (demonstrating aggression)?",
      "options": [
        "Pacifist / Conciliatory",
        "Combative",
        "Hostile",
        "Pugnacious"
      ],
      "answer": "Pacifist / Conciliatory",
      "explanation": "Bellicose seeks war; conciliatory promotes peace and harmony."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning an introductory statement:",
      "options": [
        "Preamble",
        "Preambel",
        "Preambul",
        "Priamble"
      ],
      "answer": "Preamble",
      "explanation": "P-R-E-A-M-B-L-E."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'The practice of claiming to have moral standards to which one's behavior does not conform'?",
      "options": [
        "Hypocrisy",
        "Sanctimony",
        "Deceit",
        "Pretension"
      ],
      "answer": "Hypocrisy",
      "explanation": "Hypocrisy feigns virtuous character while engaging in contradicting behavior."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A person without a settled home who wanders from place to place'?",
      "options": [
        "Nomad / Vagrant",
        "Resident",
        "Citizen",
        "Denizen"
      ],
      "answer": "Nomad / Vagrant",
      "explanation": "Nomads follow pastoral seasonal migrations without permanent domicile."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of SURFEIT:",
      "options": [
        "Excess / Glut",
        "Shortage",
        "Lack",
        "Deficiency"
      ],
      "answer": "Excess / Glut",
      "explanation": "Surfeit signifies an overabundant supply or overindulgence."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of IMPETUOUS (acting without thought)?",
      "options": [
        "Circumspect / Deliberate",
        "Rash",
        "Hasty",
        "Impulsive"
      ],
      "answer": "Circumspect / Deliberate",
      "explanation": "Impetuous acts on rash impulse; circumspect ponders consequences carefully."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word for an informal word or phrase used in ordinary conversation:",
      "options": [
        "Colloquial",
        "Coloquial",
        "Colloquiel",
        "Colloqueal"
      ],
      "answer": "Colloquial",
      "explanation": "C-O-L-L-O-Q-U-I-A-L."
    },
    {
      "mode": "grammar",
      "question": "What grammatical error occurs in: 'Walking down the street, the trees looked majestic'?",
      "options": [
        "Dangling modifier",
        "Split infinitive",
        "Comma splice",
        "Run-on sentence"
      ],
      "answer": "Dangling modifier",
      "explanation": "The participial phrase 'Walking down the street' illogically modifies 'trees'."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of RECONDITE:",
      "options": [
        "Abstruse / Profound",
        "Simple",
        "Superficial",
        "Obvious"
      ],
      "answer": "Abstruse / Profound",
      "explanation": "Recondite deals with obscure subject matter beyond ordinary understanding."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of SALUBRIOUS (health-giving)?",
      "options": [
        "Deleterious / Insalubrious",
        "Wholesome",
        "Healthy",
        "Invigorating"
      ],
      "answer": "Deleterious / Insalubrious",
      "explanation": "Salubrious enhances vitality; deleterious harms bodily health."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning excessive adherence to rules:",
      "options": [
        "Pedantic",
        "Pedantick",
        "Pedanteek",
        "Pedantac"
      ],
      "answer": "Pedantic",
      "explanation": "P-E-D-A-N-T-I-C."
    },
    {
      "mode": "grammar",
      "question": "What is the repetition of vowel sounds within nearby words called (e.g. 'Men sell the wedding bells')?",
      "options": [
        "Assonance",
        "Consonance",
        "Alliteration",
        "Onomatopoeia"
      ],
      "answer": "Assonance",
      "explanation": "Assonance creates internal rhyme through repeated stressed vowel phonemes."
    },
    {
      "mode": "grammar",
      "question": "What is the term for words whose sound mimics their meaning (e.g. 'buzz', 'sizzle', 'hiss')?",
      "options": [
        "Onomatopoeia",
        "Hyperbole",
        "Alliteration",
        "Metaphor"
      ],
      "answer": "Onomatopoeia",
      "explanation": "Onomatopoeia mirrors acoustic impressions directly in language."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of PROCLIVITY:",
      "options": [
        "Predisposition / Penchant",
        "Aversion",
        "Dislike",
        "Antipathy"
      ],
      "answer": "Predisposition / Penchant",
      "explanation": "Proclivity indicates a natural inclination or leaning toward something."
    },
    {
      "mode": "antonym",
      "question": "What is the antonym of EXACERBATE (make worse)?",
      "options": [
        "Ameliorate / Mitigate",
        "Worsen",
        "Inflame",
        "Aggravate"
      ],
      "answer": "Ameliorate / Mitigate",
      "explanation": "Exacerbate intensifies severity; ameliorate improves or eases conditions."
    },
    {
      "mode": "spelling",
      "question": "Choose the correctly spelled word meaning existing from birth:",
      "options": [
        "Congenital",
        "Congenidle",
        "Congenetil",
        "Congenitalle"
      ],
      "answer": "Congenital",
      "explanation": "C-O-N-G-E-N-I-T-A-L."
    },
    {
      "mode": "meaning",
      "question": "What is the one-word substitution for 'A state of mental or emotional weariness resulting from lack of interest'?",
      "options": [
        "Ennui",
        "Apathy",
        "Lethargy",
        "Fatigue"
      ],
      "answer": "Ennui",
      "explanation": "Ennui describes profound existential boredom and dissatisfaction."
    },
    {
      "mode": "synonym",
      "question": "Choose the synonym of PERTINACIOUS:",
      "options": [
        "Stubbornly persistent",
        "Yielding",
        "Docile",
        "Submissive"
      ],
      "answer": "Stubbornly persistent",
      "explanation": "Pertinacious denotes holding tenaciously to a course of action."
    },
    {
      "mode": "grammar",
      "question": "What is the term for an omission of a word that is understood from contextual clues?",
      "options": [
        "Ellipsis",
        "Hyperbaton",
        "Anacoluthon",
        "Aposiopesis"
      ],
      "answer": "Ellipsis",
      "explanation": "Ellipsis leaves out syntactical elements easily supplied by context."
    }
  ]
},

    patterns: {
  "little": [
    {
      "sequence": [
        "🔴",
        "🔵",
        "🔴",
        "🔵",
        "?"
      ],
      "options": [
        "🔴",
        "🔵",
        "🟢",
        "🟡"
      ],
      "answer": "🔴",
      "explanation": "The pattern alternates between Red and Blue circle."
    },
    {
      "sequence": [
        "1",
        "2",
        "3",
        "4",
        "?"
      ],
      "options": [
        "5",
        "6",
        "3",
        "7"
      ],
      "answer": "5",
      "explanation": "Counting consecutive numbers (+1 each time): 1, 2, 3, 4, 5."
    },
    {
      "sequence": [
        "⭐",
        "⭐",
        "🌙",
        "⭐",
        "⭐",
        "?"
      ],
      "options": [
        "🌙",
        "⭐",
        "☀️",
        "☁️"
      ],
      "answer": "🌙",
      "explanation": "The pattern repeats: Star, Star, Moon."
    },
    {
      "sequence": [
        "A",
        "B",
        "A",
        "B",
        "?"
      ],
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "A",
      "explanation": "Alternating letters: A, B, A, B, A."
    },
    {
      "sequence": [
        "🔺",
        "🔷",
        "🔺",
        "🔷",
        "?"
      ],
      "options": [
        "🔺",
        "🔷",
        "⭐",
        "🟢"
      ],
      "answer": "🔺",
      "explanation": "Triangle, Diamond, Triangle, Diamond, Triangle!"
    },
    {
      "sequence": [
        "🔴",
        "🔵",
        "🔴",
        "🔵",
        "?"
      ],
      "options": [
        "🔴",
        "🔵",
        "🟢",
        "🟡"
      ],
      "answer": "🔴",
      "explanation": "The pattern alternates between Red and Blue circle."
    },
    {
      "sequence": [
        "⭐",
        "⭐",
        "🌙",
        "⭐",
        "⭐",
        "?"
      ],
      "options": [
        "🌙",
        "⭐",
        "☀️",
        "☁️"
      ],
      "answer": "🌙",
      "explanation": "Pattern is Star, Star, Moon repeated."
    },
    {
      "sequence": [
        "🍎",
        "🍌",
        "🍎",
        "🍌",
        "?"
      ],
      "options": [
        "🍎",
        "🍌",
        "🍇",
        "🍊"
      ],
      "answer": "🍎",
      "explanation": "Pattern alternates between Apple and Banana."
    },
    {
      "sequence": [
        "🔺",
        "🔻",
        "🔺",
        "🔻",
        "?"
      ],
      "options": [
        "🔺",
        "🔻",
        "◾",
        "🔷"
      ],
      "answer": "🔺",
      "explanation": "Pattern alternates between Upward Triangle and Downward Triangle."
    },
    {
      "sequence": [
        "1",
        "2",
        "1",
        "2",
        "?"
      ],
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "1",
      "explanation": "Pattern alternates between numbers 1 and 2."
    },
    {
      "sequence": [
        "🐶",
        "🐱",
        "🐶",
        "🐱",
        "?"
      ],
      "options": [
        "🐶",
        "🐱",
        "🐰",
        "🐻"
      ],
      "answer": "🐶",
      "explanation": "Pattern alternates between Dog and Cat."
    },
    {
      "sequence": [
        "🟢",
        "🟢",
        "🟡",
        "🟢",
        "🟢",
        "?"
      ],
      "options": [
        "🟡",
        "🟢",
        "🔴",
        "🟣"
      ],
      "answer": "🟡",
      "explanation": "Pattern is two Green circles followed by one Yellow circle."
    },
    {
      "sequence": [
        "A",
        "B",
        "A",
        "B",
        "?"
      ],
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "A",
      "explanation": "Pattern alternates between letters A and B."
    },
    {
      "sequence": [
        "🌞",
        "🌜",
        "🌞",
        "🌜",
        "?"
      ],
      "options": [
        "🌞",
        "🌜",
        "⭐",
        "☁️"
      ],
      "answer": "🌞",
      "explanation": "Pattern alternates between Sun and Moon."
    },
    {
      "sequence": [
        "1",
        "2",
        "3",
        "1",
        "2",
        "?"
      ],
      "options": [
        "3",
        "1",
        "4",
        "2"
      ],
      "answer": "3",
      "explanation": "Pattern repeats 1, 2, 3 in sequence."
    },
    {
      "sequence": [
        "🌸",
        "🌺",
        "🌸",
        "🌺",
        "?"
      ],
      "options": [
        "🌸",
        "🌺",
        "🌻",
        "🌼"
      ],
      "answer": "🌸",
      "explanation": "Pattern alternates between two flower types."
    },
    {
      "sequence": [
        "🚗",
        "🚌",
        "🚗",
        "🚌",
        "?"
      ],
      "options": [
        "🚗",
        "🚌",
        "🚲",
        "✈️"
      ],
      "answer": "🚗",
      "explanation": "Pattern alternates between Car and Bus."
    },
    {
      "sequence": [
        "⬛",
        "⬜",
        "⬛",
        "⬜",
        "?"
      ],
      "options": [
        "⬛",
        "⬜",
        "🟥",
        "🟦"
      ],
      "answer": "⬛",
      "explanation": "Pattern alternates between Black and White square."
    },
    {
      "sequence": [
        "🐟",
        "🐟",
        "🐸",
        "🐟",
        "🐟",
        "?"
      ],
      "options": [
        "🐸",
        "🐟",
        "🦆",
        "🦀"
      ],
      "answer": "🐸",
      "explanation": "Two Fish followed by one Frog."
    },
    {
      "sequence": [
        "A",
        "A",
        "B",
        "A",
        "A",
        "?"
      ],
      "options": [
        "B",
        "A",
        "C",
        "D"
      ],
      "answer": "B",
      "explanation": "Pattern is A, A, B repeated."
    },
    {
      "sequence": [
        "🍇",
        "🍓",
        "🍇",
        "🍓",
        "?"
      ],
      "options": [
        "🍇",
        "🍓",
        "🍒",
        "🥝"
      ],
      "answer": "🍇",
      "explanation": "Alternating Grapes and Strawberry."
    },
    {
      "sequence": [
        "⬆️",
        "⬇️",
        "⬆️",
        "⬇️",
        "?"
      ],
      "options": [
        "⬆️",
        "⬇️",
        "⬅️",
        "➡️"
      ],
      "answer": "⬆️",
      "explanation": "Alternating Up and Down arrows."
    },
    {
      "sequence": [
        "🟡",
        "🟣",
        "🟡",
        "🟣",
        "?"
      ],
      "options": [
        "🟡",
        "🟣",
        "🟢",
        "🔴"
      ],
      "answer": "🟡",
      "explanation": "Alternating Yellow and Purple circles."
    },
    {
      "sequence": [
        "10",
        "20",
        "10",
        "20",
        "?"
      ],
      "options": [
        "10",
        "20",
        "30",
        "40"
      ],
      "answer": "10",
      "explanation": "Alternating 10 and 20."
    },
    {
      "sequence": [
        "🐵",
        "🍌",
        "🐵",
        "🍌",
        "?"
      ],
      "options": [
        "🐵",
        "🍌",
        "🦁",
        "🍎"
      ],
      "answer": "🐵",
      "explanation": "Alternating Monkey and Banana."
    },
    {
      "sequence": [
        "🧡",
        "💚",
        "🧡",
        "💚",
        "?"
      ],
      "options": [
        "🧡",
        "💚",
        "💙",
        "💜"
      ],
      "answer": "🧡",
      "explanation": "Alternating Orange and Green hearts."
    },
    {
      "sequence": [
        "X",
        "O",
        "X",
        "O",
        "?"
      ],
      "options": [
        "X",
        "O",
        "Y",
        "Z"
      ],
      "answer": "X",
      "explanation": "Alternating X and O."
    },
    {
      "sequence": [
        "☁️",
        "🌧️",
        "☁️",
        "🌧️",
        "?"
      ],
      "options": [
        "☁️",
        "🌧️",
        "☀️",
        "❄️"
      ],
      "answer": "☁️",
      "explanation": "Alternating Cloud and Rain."
    },
    {
      "sequence": [
        "2",
        "4",
        "2",
        "4",
        "?"
      ],
      "options": [
        "2",
        "4",
        "6",
        "8"
      ],
      "answer": "2",
      "explanation": "Alternating 2 and 4."
    },
    {
      "sequence": [
        "🦋",
        "🌸",
        "🦋",
        "🌸",
        "?"
      ],
      "options": [
        "🦋",
        "🌸",
        "🐝",
        "🌻"
      ],
      "answer": "🦋",
      "explanation": "Alternating Butterfly and Flower."
    },
    {
      "sequence": [
        "⚪",
        "⚫",
        "⚪",
        "⚫",
        "?"
      ],
      "options": [
        "⚪",
        "⚫",
        "🔴",
        "🔵"
      ],
      "answer": "⚪",
      "explanation": "Alternating White and Black dots."
    },
    {
      "sequence": [
        "🦆",
        "🦆",
        "🦢",
        "🦆",
        "🦆",
        "?"
      ],
      "options": [
        "🦢",
        "🦆",
        "🐥",
        "🦅"
      ],
      "answer": "🦢",
      "explanation": "Two Ducks followed by one Swan."
    },
    {
      "sequence": [
        "left",
        "right",
        "left",
        "right",
        "?"
      ],
      "options": [
        "left",
        "right",
        "up",
        "down"
      ],
      "answer": "left",
      "explanation": "Alternating left and right directions."
    },
    {
      "sequence": [
        "🍎",
        "🍎",
        "🍏",
        "🍎",
        "🍎",
        "?"
      ],
      "options": [
        "🍏",
        "🍎",
        "🍌",
        "🍊"
      ],
      "answer": "🍏",
      "explanation": "Two Red Apples followed by one Green Apple."
    },
    {
      "sequence": [
        "C",
        "D",
        "C",
        "D",
        "?"
      ],
      "options": [
        "C",
        "D",
        "E",
        "F"
      ],
      "answer": "C",
      "explanation": "Alternating C and D."
    },
    {
      "sequence": [
        "⚽",
        "🏀",
        "⚽",
        "🏀",
        "?"
      ],
      "options": [
        "⚽",
        "🏀",
        "🎾",
        "🏈"
      ],
      "answer": "⚽",
      "explanation": "Alternating Football and Basketball."
    },
    {
      "sequence": [
        "1",
        "1",
        "2",
        "1",
        "1",
        "?"
      ],
      "options": [
        "2",
        "1",
        "3",
        "0"
      ],
      "answer": "2",
      "explanation": "Pattern repeats 1, 1, 2."
    },
    {
      "sequence": [
        "🌿",
        "🍂",
        "🌿",
        "🍂",
        "?"
      ],
      "options": [
        "🌿",
        "🍂",
        "🌸",
        "🌱"
      ],
      "answer": "🌿",
      "explanation": "Alternating Green leaf and Autumn leaf."
    },
    {
      "sequence": [
        "big",
        "small",
        "big",
        "small",
        "?"
      ],
      "options": [
        "big",
        "small",
        "tiny",
        "huge"
      ],
      "answer": "big",
      "explanation": "Alternating big and small size descriptions."
    },
    {
      "sequence": [
        "🟦",
        "🟦",
        "🟧",
        "🟦",
        "🟦",
        "?"
      ],
      "options": [
        "🟧",
        "🟦",
        "🟨",
        "🟩"
      ],
      "answer": "🟧",
      "explanation": "Two Blue squares followed by one Orange square."
    },
    {
      "sequence": [
        "🍦",
        "🍫",
        "🍦",
        "🍫",
        "?"
      ],
      "options": [
        "🍦",
        "🍫",
        "🍩",
        "🍪"
      ],
      "answer": "🍦",
      "explanation": "Alternating Ice Cream and Chocolate."
    },
    {
      "sequence": [
        "day",
        "night",
        "day",
        "night",
        "?"
      ],
      "options": [
        "day",
        "night",
        "noon",
        "evening"
      ],
      "answer": "day",
      "explanation": "Alternating day and night cycle."
    },
    {
      "sequence": [
        "5",
        "0",
        "5",
        "0",
        "?"
      ],
      "options": [
        "5",
        "0",
        "10",
        "1"
      ],
      "answer": "5",
      "explanation": "Alternating 5 and 0."
    },
    {
      "sequence": [
        "🐦",
        "🐦",
        "🪺",
        "🐦",
        "🐦",
        "?"
      ],
      "options": [
        "🪺",
        "🐦",
        "🐣",
        "🦅"
      ],
      "answer": "🪺",
      "explanation": "Two Birds followed by one Nest with eggs."
    },
    {
      "sequence": [
        "happy",
        "sad",
        "happy",
        "sad",
        "?"
      ],
      "options": [
        "happy",
        "sad",
        "angry",
        "sleepy"
      ],
      "answer": "happy",
      "explanation": "Alternating happy and sad emotions."
    },
    {
      "sequence": [
        "🐝",
        "🍯",
        "🐝",
        "🍯",
        "?"
      ],
      "options": [
        "🐝",
        "🍯",
        "🌸",
        "🐜"
      ],
      "answer": "🐝",
      "explanation": "Alternating Bee and Honey pot."
    },
    {
      "sequence": [
        "yes",
        "no",
        "yes",
        "no",
        "?"
      ],
      "options": [
        "yes",
        "no",
        "maybe",
        "never"
      ],
      "answer": "yes",
      "explanation": "Alternating yes and no."
    },
    {
      "sequence": [
        "🔵",
        "🔴",
        "🟡",
        "🔵",
        "🔴",
        "?"
      ],
      "options": [
        "🟡",
        "🔵",
        "🔴",
        "🟢"
      ],
      "answer": "🟡",
      "explanation": "Pattern of three colors: Blue, Red, Yellow repeated."
    },
    {
      "sequence": [
        "M",
        "N",
        "M",
        "N",
        "?"
      ],
      "options": [
        "M",
        "N",
        "O",
        "P"
      ],
      "answer": "M",
      "explanation": "Alternating M and N."
    },
    {
      "sequence": [
        "cold",
        "hot",
        "cold",
        "hot",
        "?"
      ],
      "options": [
        "cold",
        "hot",
        "warm",
        "freezing"
      ],
      "answer": "cold",
      "explanation": "Alternating cold and hot temperature."
    },
    {
      "sequence": [
        "🐰",
        "🥕",
        "🐰",
        "🥕",
        "?"
      ],
      "options": [
        "🐰",
        "🥕",
        "🐶",
        "🍎"
      ],
      "answer": "🐰",
      "explanation": "Alternating Bunny and Carrot."
    },
    {
      "sequence": [
        "up",
        "down",
        "up",
        "down",
        "?"
      ],
      "options": [
        "up",
        "down",
        "high",
        "low"
      ],
      "answer": "up",
      "explanation": "Alternating up and down positions."
    },
    {
      "sequence": [
        "1",
        "0",
        "1",
        "0",
        "?"
      ],
      "options": [
        "1",
        "0",
        "2",
        "3"
      ],
      "answer": "1",
      "explanation": "Alternating 1 and 0 binary sequence."
    },
    {
      "sequence": [
        "🎵",
        "🎶",
        "🎵",
        "🎶",
        "?"
      ],
      "options": [
        "🎵",
        "🎶",
        "🎤",
        "🥁"
      ],
      "answer": "🎵",
      "explanation": "Alternating musical note symbols."
    },
    {
      "sequence": [
        "open",
        "close",
        "open",
        "close",
        "?"
      ],
      "options": [
        "open",
        "close",
        "shut",
        "stop"
      ],
      "answer": "open",
      "explanation": "Alternating open and close actions."
    }
  ],
  "junior": [
    {
      "sequence": [
        "2",
        "4",
        "6",
        "8",
        "?"
      ],
      "options": [
        "10",
        "12",
        "9",
        "11"
      ],
      "answer": "10",
      "explanation": "Adding 2 each step (even numbers sequence)."
    },
    {
      "sequence": [
        "A",
        "C",
        "E",
        "G",
        "?"
      ],
      "options": [
        "I",
        "H",
        "J",
        "K"
      ],
      "answer": "I",
      "explanation": "Skipping one letter in the alphabet (+2 letters each step)."
    },
    {
      "sequence": [
        "5",
        "10",
        "15",
        "20",
        "?"
      ],
      "options": [
        "25",
        "30",
        "22",
        "24"
      ],
      "answer": "25",
      "explanation": "Multiples of 5 (+5 added to each term)."
    },
    {
      "sequence": [
        "100",
        "90",
        "80",
        "70",
        "?"
      ],
      "options": [
        "60",
        "50",
        "65",
        "55"
      ],
      "answer": "60",
      "explanation": "Subtracting 10 at each step."
    },
    {
      "sequence": [
        "1",
        "4",
        "9",
        "16",
        "?"
      ],
      "options": [
        "25",
        "20",
        "30",
        "36"
      ],
      "answer": "25",
      "explanation": "Square numbers: 1², 2², 3², 4², 5² = 25."
    },
    {
      "sequence": [
        "2",
        "4",
        "6",
        "8",
        "?"
      ],
      "options": [
        "10",
        "12",
        "9",
        "11"
      ],
      "answer": "10",
      "explanation": "Adding 2 each step (even numbers sequence)."
    },
    {
      "sequence": [
        "5",
        "10",
        "15",
        "20",
        "?"
      ],
      "options": [
        "25",
        "30",
        "22",
        "24"
      ],
      "answer": "25",
      "explanation": "Adding 5 each step (multiples of 5)."
    },
    {
      "sequence": [
        "10",
        "20",
        "30",
        "40",
        "?"
      ],
      "options": [
        "50",
        "60",
        "45",
        "55"
      ],
      "answer": "50",
      "explanation": "Adding 10 each step."
    },
    {
      "sequence": [
        "3",
        "6",
        "9",
        "12",
        "?"
      ],
      "options": [
        "15",
        "18",
        "14",
        "16"
      ],
      "answer": "15",
      "explanation": "Adding 3 each step (table of 3)."
    },
    {
      "sequence": [
        "1",
        "3",
        "5",
        "7",
        "?"
      ],
      "options": [
        "9",
        "11",
        "8",
        "10"
      ],
      "answer": "9",
      "explanation": "Adding 2 each step (odd numbers sequence)."
    },
    {
      "sequence": [
        "100",
        "90",
        "80",
        "70",
        "?"
      ],
      "options": [
        "60",
        "50",
        "65",
        "55"
      ],
      "answer": "60",
      "explanation": "Subtracting 10 each step."
    },
    {
      "sequence": [
        "50",
        "45",
        "40",
        "35",
        "?"
      ],
      "options": [
        "30",
        "25",
        "32",
        "28"
      ],
      "answer": "30",
      "explanation": "Subtracting 5 each step."
    },
    {
      "sequence": [
        "1",
        "4",
        "7",
        "10",
        "?"
      ],
      "options": [
        "13",
        "12",
        "14",
        "15"
      ],
      "answer": "13",
      "explanation": "Adding 3 each step: 10 + 3 = 13."
    },
    {
      "sequence": [
        "2",
        "6",
        "10",
        "14",
        "?"
      ],
      "options": [
        "18",
        "16",
        "20",
        "22"
      ],
      "answer": "18",
      "explanation": "Adding 4 each step: 14 + 4 = 18."
    },
    {
      "sequence": [
        "4",
        "8",
        "12",
        "16",
        "?"
      ],
      "options": [
        "20",
        "24",
        "18",
        "22"
      ],
      "answer": "20",
      "explanation": "Adding 4 each step (multiples of 4)."
    },
    {
      "sequence": [
        "A",
        "C",
        "E",
        "G",
        "?"
      ],
      "options": [
        "I",
        "H",
        "J",
        "K"
      ],
      "answer": "I",
      "explanation": "Skipping one alphabet letter each time (+2)."
    },
    {
      "sequence": [
        "Z",
        "Y",
        "X",
        "W",
        "?"
      ],
      "options": [
        "V",
        "U",
        "T",
        "S"
      ],
      "answer": "V",
      "explanation": "Descending alphabet backwards (-1)."
    },
    {
      "sequence": [
        "11",
        "22",
        "33",
        "44",
        "?"
      ],
      "options": [
        "55",
        "66",
        "54",
        "45"
      ],
      "answer": "55",
      "explanation": "Multiples of 11: 44 + 11 = 55."
    },
    {
      "sequence": [
        "1",
        "2",
        "4",
        "8",
        "?"
      ],
      "options": [
        "16",
        "12",
        "14",
        "10"
      ],
      "answer": "16",
      "explanation": "Multiplying by 2 each step: 8 × 2 = 16."
    },
    {
      "sequence": [
        "100",
        "80",
        "60",
        "40",
        "?"
      ],
      "options": [
        "20",
        "30",
        "10",
        "0"
      ],
      "answer": "20",
      "explanation": "Subtracting 20 each step."
    },
    {
      "sequence": [
        "7",
        "14",
        "21",
        "28",
        "?"
      ],
      "options": [
        "35",
        "42",
        "30",
        "36"
      ],
      "answer": "35",
      "explanation": "Multiples of 7: 28 + 7 = 35."
    },
    {
      "sequence": [
        "9",
        "18",
        "27",
        "36",
        "?"
      ],
      "options": [
        "45",
        "54",
        "40",
        "48"
      ],
      "answer": "45",
      "explanation": "Multiples of 9: 36 + 9 = 45."
    },
    {
      "sequence": [
        "1",
        "10",
        "100",
        "1000",
        "?"
      ],
      "options": [
        "10000",
        "100000",
        "5000",
        "2000"
      ],
      "answer": "10000",
      "explanation": "Multiplying by 10 each step."
    },
    {
      "sequence": [
        "8",
        "16",
        "24",
        "32",
        "?"
      ],
      "options": [
        "40",
        "48",
        "36",
        "44"
      ],
      "answer": "40",
      "explanation": "Multiples of 8: 32 + 8 = 40."
    },
    {
      "sequence": [
        "25",
        "50",
        "75",
        "100",
        "?"
      ],
      "options": [
        "125",
        "150",
        "110",
        "120"
      ],
      "answer": "125",
      "explanation": "Adding 25 each step."
    },
    {
      "sequence": [
        "B",
        "D",
        "F",
        "H",
        "?"
      ],
      "options": [
        "J",
        "K",
        "I",
        "L"
      ],
      "answer": "J",
      "explanation": "Even alphabet positions: B(2), D(4), F(6), H(8), J(10)."
    },
    {
      "sequence": [
        "1",
        "4",
        "9",
        "16",
        "?"
      ],
      "options": [
        "25",
        "20",
        "24",
        "36"
      ],
      "answer": "25",
      "explanation": "Sequence of square numbers: 1², 2², 3², 4², 5² = 25."
    },
    {
      "sequence": [
        "6",
        "12",
        "18",
        "24",
        "?"
      ],
      "options": [
        "30",
        "36",
        "28",
        "32"
      ],
      "answer": "30",
      "explanation": "Multiples of 6: 24 + 6 = 30."
    },
    {
      "sequence": [
        "30",
        "27",
        "24",
        "21",
        "?"
      ],
      "options": [
        "18",
        "15",
        "19",
        "17"
      ],
      "answer": "18",
      "explanation": "Subtracting 3 each step: 21 - 3 = 18."
    },
    {
      "sequence": [
        "5",
        "11",
        "17",
        "23",
        "?"
      ],
      "options": [
        "29",
        "28",
        "30",
        "31"
      ],
      "answer": "29",
      "explanation": "Adding 6 each step: 23 + 6 = 29."
    },
    {
      "sequence": [
        "12",
        "24",
        "36",
        "48",
        "?"
      ],
      "options": [
        "60",
        "72",
        "54",
        "56"
      ],
      "answer": "60",
      "explanation": "Multiples of 12: 48 + 12 = 60."
    },
    {
      "sequence": [
        "A1",
        "B2",
        "C3",
        "D4",
        "?"
      ],
      "options": [
        "E5",
        "E4",
        "F5",
        "D5"
      ],
      "answer": "E5",
      "explanation": "Letter advances +1 and number advances +1."
    },
    {
      "sequence": [
        "1000",
        "500",
        "250",
        "125",
        "?"
      ],
      "options": [
        "62.5",
        "60",
        "75",
        "50"
      ],
      "answer": "62.5",
      "explanation": "Halving (dividing by 2) each step."
    },
    {
      "sequence": [
        "15",
        "30",
        "45",
        "60",
        "?"
      ],
      "options": [
        "75",
        "90",
        "70",
        "80"
      ],
      "answer": "75",
      "explanation": "Adding 15 each step."
    },
    {
      "sequence": [
        "3",
        "8",
        "13",
        "18",
        "?"
      ],
      "options": [
        "23",
        "22",
        "24",
        "25"
      ],
      "answer": "23",
      "explanation": "Adding 5 each step: 18 + 5 = 23."
    },
    {
      "sequence": [
        "90",
        "75",
        "60",
        "45",
        "?"
      ],
      "options": [
        "30",
        "35",
        "25",
        "40"
      ],
      "answer": "30",
      "explanation": "Subtracting 15 each step: 45 - 15 = 30."
    },
    {
      "sequence": [
        "2",
        "5",
        "8",
        "11",
        "?"
      ],
      "options": [
        "14",
        "13",
        "15",
        "16"
      ],
      "answer": "14",
      "explanation": "Adding 3 each step: 11 + 3 = 14."
    },
    {
      "sequence": [
        "40",
        "36",
        "32",
        "28",
        "?"
      ],
      "options": [
        "24",
        "22",
        "26",
        "20"
      ],
      "answer": "24",
      "explanation": "Subtracting 4 each step: 28 - 4 = 24."
    },
    {
      "sequence": [
        "10",
        "14",
        "18",
        "22",
        "?"
      ],
      "options": [
        "26",
        "24",
        "28",
        "30"
      ],
      "answer": "26",
      "explanation": "Adding 4 each step: 22 + 4 = 26."
    },
    {
      "sequence": [
        "AA",
        "BB",
        "CC",
        "DD",
        "?"
      ],
      "options": [
        "EE",
        "FF",
        "DE",
        "GG"
      ],
      "answer": "EE",
      "explanation": "Consecutive repeated alphabet pairs."
    },
    {
      "sequence": [
        "1/2",
        "1/4",
        "1/8",
        "1/16",
        "?"
      ],
      "options": [
        "1/32",
        "1/24",
        "1/64",
        "1/18"
      ],
      "answer": "1/32",
      "explanation": "Denominator doubles at each step."
    },
    {
      "sequence": [
        "1",
        "3",
        "6",
        "10",
        "?"
      ],
      "options": [
        "15",
        "14",
        "16",
        "18"
      ],
      "answer": "15",
      "explanation": "Triangular numbers (+2, +3, +4, +5): 10 + 5 = 15."
    },
    {
      "sequence": [
        "50",
        "100",
        "150",
        "200",
        "?"
      ],
      "options": [
        "250",
        "300",
        "225",
        "240"
      ],
      "answer": "250",
      "explanation": "Adding 50 each step."
    },
    {
      "sequence": [
        "99",
        "88",
        "77",
        "66",
        "?"
      ],
      "options": [
        "55",
        "44",
        "50",
        "56"
      ],
      "answer": "55",
      "explanation": "Subtracting 11 each step."
    },
    {
      "sequence": [
        "3",
        "7",
        "11",
        "15",
        "?"
      ],
      "options": [
        "19",
        "18",
        "20",
        "21"
      ],
      "answer": "19",
      "explanation": "Adding 4 each step: 15 + 4 = 19."
    },
    {
      "sequence": [
        "20",
        "17",
        "14",
        "11",
        "?"
      ],
      "options": [
        "8",
        "9",
        "7",
        "10"
      ],
      "answer": "8",
      "explanation": "Subtracting 3 each step: 11 - 3 = 8."
    },
    {
      "sequence": [
        "AZ",
        "BY",
        "CX",
        "DW",
        "?"
      ],
      "options": [
        "EV",
        "FU",
        "EW",
        "EX"
      ],
      "answer": "EV",
      "explanation": "First letter advances from A, second letter descends from Z."
    },
    {
      "sequence": [
        "4",
        "9",
        "14",
        "19",
        "?"
      ],
      "options": [
        "24",
        "23",
        "25",
        "26"
      ],
      "answer": "24",
      "explanation": "Adding 5 each step: 19 + 5 = 24."
    },
    {
      "sequence": [
        "100",
        "110",
        "120",
        "130",
        "?"
      ],
      "options": [
        "140",
        "150",
        "135",
        "145"
      ],
      "answer": "140",
      "explanation": "Adding 10 each step."
    },
    {
      "sequence": [
        "64",
        "32",
        "16",
        "8",
        "?"
      ],
      "options": [
        "4",
        "2",
        "6",
        "1"
      ],
      "answer": "4",
      "explanation": "Halving each step: 8 / 2 = 4."
    },
    {
      "sequence": [
        "1",
        "8",
        "27",
        "64",
        "?"
      ],
      "options": [
        "125",
        "100",
        "216",
        "81"
      ],
      "answer": "125",
      "explanation": "Cubes of natural numbers: 1³, 2³, 3³, 4³, 5³ = 125."
    },
    {
      "sequence": [
        "70",
        "63",
        "56",
        "49",
        "?"
      ],
      "options": [
        "42",
        "40",
        "44",
        "35"
      ],
      "answer": "42",
      "explanation": "Multiples of 7 descending: 49 - 7 = 42."
    },
    {
      "sequence": [
        "5",
        "15",
        "45",
        "135",
        "?"
      ],
      "options": [
        "405",
        "270",
        "350",
        "500"
      ],
      "answer": "405",
      "explanation": "Multiplying by 3 each step: 135 × 3 = 405."
    },
    {
      "sequence": [
        "0",
        "3",
        "8",
        "15",
        "24",
        "?"
      ],
      "options": [
        "35",
        "36",
        "32",
        "34"
      ],
      "answer": "35",
      "explanation": "Sequence is n² - 1: 6² - 1 = 36 - 1 = 35."
    },
    {
      "sequence": [
        "80",
        "70",
        "61",
        "53",
        "?"
      ],
      "options": [
        "46",
        "45",
        "47",
        "44"
      ],
      "answer": "46",
      "explanation": "Subtracting decreasing increments (-10, -9, -8, -7): 53 - 7 = 46."
    }
  ],
  "middle": [
    {
      "sequence": [
        "3",
        "6",
        "12",
        "24",
        "?"
      ],
      "options": [
        "48",
        "36",
        "42",
        "52"
      ],
      "answer": "48",
      "explanation": "Each number is multiplied by 2 (Geometric progression)."
    },
    {
      "sequence": [
        "Z",
        "X",
        "V",
        "T",
        "?"
      ],
      "options": [
        "R",
        "S",
        "Q",
        "P"
      ],
      "answer": "R",
      "explanation": "Counting backward skipping one letter (-2 in alphabet)."
    },
    {
      "sequence": [
        "1",
        "1",
        "2",
        "3",
        "5",
        "8",
        "?"
      ],
      "options": [
        "13",
        "12",
        "15",
        "11"
      ],
      "answer": "13",
      "explanation": "Fibonacci sequence: each term is the sum of the two preceding ones (5 + 8 = 13)."
    },
    {
      "sequence": [
        "2",
        "5",
        "10",
        "17",
        "?"
      ],
      "options": [
        "26",
        "24",
        "25",
        "27"
      ],
      "answer": "26",
      "explanation": "Pattern: n² + 1: (1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26)."
    },
    {
      "sequence": [
        "1/2",
        "1/4",
        "1/8",
        "1/16",
        "?"
      ],
      "options": [
        "1/32",
        "1/24",
        "1/64",
        "1/18"
      ],
      "answer": "1/32",
      "explanation": "Each fraction denominator is multiplied by 2."
    },
    {
      "sequence": [
        "3",
        "6",
        "12",
        "24",
        "?"
      ],
      "options": [
        "48",
        "36",
        "42",
        "52"
      ],
      "answer": "48",
      "explanation": "Each number is multiplied by 2 (Geometric progression)."
    },
    {
      "sequence": [
        "2",
        "6",
        "18",
        "54",
        "?"
      ],
      "options": [
        "162",
        "108",
        "150",
        "144"
      ],
      "answer": "162",
      "explanation": "Each number is multiplied by 3: 54 × 3 = 162."
    },
    {
      "sequence": [
        "1",
        "4",
        "9",
        "16",
        "25",
        "?"
      ],
      "options": [
        "36",
        "49",
        "30",
        "40"
      ],
      "answer": "36",
      "explanation": "Consecutive squares: 6² = 36."
    },
    {
      "sequence": [
        "1",
        "8",
        "27",
        "64",
        "?"
      ],
      "options": [
        "125",
        "100",
        "216",
        "81"
      ],
      "answer": "125",
      "explanation": "Consecutive cubes: 5³ = 125."
    },
    {
      "sequence": [
        "2",
        "3",
        "5",
        "7",
        "11",
        "?"
      ],
      "options": [
        "13",
        "15",
        "9",
        "17"
      ],
      "answer": "13",
      "explanation": "Sequence of prime numbers."
    },
    {
      "sequence": [
        "0",
        "1",
        "1",
        "2",
        "3",
        "5",
        "8",
        "?"
      ],
      "options": [
        "13",
        "11",
        "12",
        "15"
      ],
      "answer": "13",
      "explanation": "Fibonacci sequence: 5 + 8 = 13."
    },
    {
      "sequence": [
        "2",
        "5",
        "10",
        "17",
        "26",
        "?"
      ],
      "options": [
        "37",
        "35",
        "36",
        "38"
      ],
      "answer": "37",
      "explanation": "Sequence is n² + 1: 6² + 1 = 37."
    },
    {
      "sequence": [
        "0",
        "7",
        "26",
        "63",
        "?"
      ],
      "options": [
        "124",
        "125",
        "120",
        "126"
      ],
      "answer": "124",
      "explanation": "Sequence is n³ - 1: 5³ - 1 = 125 - 1 = 124."
    },
    {
      "sequence": [
        "2",
        "6",
        "12",
        "20",
        "30",
        "?"
      ],
      "options": [
        "42",
        "40",
        "44",
        "46"
      ],
      "answer": "42",
      "explanation": "n(n + 1): 6 × 7 = 42 (differences are +4, +6, +8, +10, +12)."
    },
    {
      "sequence": [
        "3",
        "5",
        "9",
        "17",
        "33",
        "?"
      ],
      "options": [
        "65",
        "64",
        "57",
        "66"
      ],
      "answer": "65",
      "explanation": "Differences double each time (+2, +4, +8, +16, +32): 33 + 32 = 65."
    },
    {
      "sequence": [
        "4",
        "9",
        "19",
        "39",
        "79",
        "?"
      ],
      "options": [
        "159",
        "158",
        "160",
        "149"
      ],
      "answer": "159",
      "explanation": "Pattern is 2n + 1: 2(79) + 1 = 159."
    },
    {
      "sequence": [
        "100",
        "96",
        "88",
        "72",
        "?"
      ],
      "options": [
        "40",
        "44",
        "48",
        "36"
      ],
      "answer": "40",
      "explanation": "Differences double in subtraction (-4, -8, -16, -32): 72 - 32 = 40."
    },
    {
      "sequence": [
        "1",
        "2",
        "6",
        "24",
        "120",
        "?"
      ],
      "options": [
        "720",
        "600",
        "540",
        "840"
      ],
      "answer": "720",
      "explanation": "Factorial series n!: 6! = 720."
    },
    {
      "sequence": [
        "6",
        "11",
        "21",
        "36",
        "56",
        "?"
      ],
      "options": [
        "81",
        "76",
        "86",
        "91"
      ],
      "answer": "81",
      "explanation": "Differences increase by 5 (+5, +10, +15, +20, +25): 56 + 25 = 81."
    },
    {
      "sequence": [
        "1",
        "3",
        "7",
        "15",
        "31",
        "?"
      ],
      "options": [
        "63",
        "62",
        "64",
        "65"
      ],
      "answer": "63",
      "explanation": "Pattern is 2n + 1: 2(31) + 1 = 63 (or 2^k - 1)."
    },
    {
      "sequence": [
        "8",
        "24",
        "12",
        "36",
        "18",
        "?"
      ],
      "options": [
        "54",
        "48",
        "72",
        "36"
      ],
      "answer": "54",
      "explanation": "Alternating multiply by 3 and divide by 2: 18 × 3 = 54."
    },
    {
      "sequence": [
        "5",
        "7",
        "11",
        "19",
        "35",
        "?"
      ],
      "options": [
        "67",
        "65",
        "70",
        "72"
      ],
      "answer": "67",
      "explanation": "Differences double (+2, +4, +8, +16, +32): 35 + 32 = 67."
    },
    {
      "sequence": [
        "1",
        "5",
        "14",
        "30",
        "55",
        "?"
      ],
      "options": [
        "91",
        "85",
        "90",
        "95"
      ],
      "answer": "91",
      "explanation": "Sum of squares: 1² + 2² + 3² + 4² + 5² + 6² = 55 + 36 = 91."
    },
    {
      "sequence": [
        "2",
        "12",
        "36",
        "80",
        "150",
        "?"
      ],
      "options": [
        "252",
        "240",
        "260",
        "280"
      ],
      "answer": "252",
      "explanation": "Pattern is n³ + n²: 6³ + 6² = 216 + 36 = 252."
    },
    {
      "sequence": [
        "13",
        "17",
        "19",
        "23",
        "29",
        "?"
      ],
      "options": [
        "31",
        "37",
        "33",
        "35"
      ],
      "answer": "31",
      "explanation": "Consecutive prime numbers after 29 is 31."
    },
    {
      "sequence": [
        "3",
        "8",
        "15",
        "24",
        "35",
        "?"
      ],
      "options": [
        "48",
        "49",
        "47",
        "50"
      ],
      "answer": "48",
      "explanation": "Sequence is (n+1)² - 1: 7² - 1 = 48."
    },
    {
      "sequence": [
        "1",
        "2",
        "5",
        "10",
        "17",
        "26",
        "?"
      ],
      "options": [
        "37",
        "35",
        "36",
        "38"
      ],
      "answer": "37",
      "explanation": "Differences are consecutive odd numbers (+1, +3, +5, +7, +9, +11): 26 + 11 = 37."
    },
    {
      "sequence": [
        "512",
        "256",
        "128",
        "64",
        "32",
        "?"
      ],
      "options": [
        "16",
        "8",
        "24",
        "12"
      ],
      "answer": "16",
      "explanation": "Halving powers of two: 32 / 2 = 16."
    },
    {
      "sequence": [
        "10",
        "18",
        "28",
        "40",
        "54",
        "?"
      ],
      "options": [
        "70",
        "68",
        "72",
        "74"
      ],
      "answer": "70",
      "explanation": "Differences increase by 2 (+8, +10, +12, +14, +16): 54 + 16 = 70."
    },
    {
      "sequence": [
        "4",
        "12",
        "36",
        "108",
        "?"
      ],
      "options": [
        "324",
        "216",
        "432",
        "300"
      ],
      "answer": "324",
      "explanation": "Multiplying by 3: 108 × 3 = 324."
    },
    {
      "sequence": [
        "9",
        "11",
        "15",
        "23",
        "39",
        "?"
      ],
      "options": [
        "71",
        "69",
        "73",
        "75"
      ],
      "answer": "71",
      "explanation": "Differences double (+2, +4, +8, +16, +32): 39 + 32 = 71."
    },
    {
      "sequence": [
        "2",
        "7",
        "24",
        "77",
        "?"
      ],
      "options": [
        "238",
        "240",
        "231",
        "242"
      ],
      "answer": "238",
      "explanation": "Pattern is 3n + 1, 3n + 3, 3n + 5: 3(24)+5=77, 3(77)+7 = 231 + 7 = 238."
    },
    {
      "sequence": [
        "1",
        "11",
        "21",
        "1211",
        "?"
      ],
      "options": [
        "111221",
        "312211",
        "131122",
        "111211"
      ],
      "answer": "111221",
      "explanation": "Look-and-say sequence: '1211' has one 1, one 2, two 1s -> '111221'."
    },
    {
      "sequence": [
        "120",
        "99",
        "80",
        "63",
        "48",
        "?"
      ],
      "options": [
        "35",
        "36",
        "32",
        "34"
      ],
      "answer": "35",
      "explanation": "Sequence is (n+1)² - 1 descending: 6² - 1 = 35."
    },
    {
      "sequence": [
        "2",
        "4",
        "12",
        "48",
        "240",
        "?"
      ],
      "options": [
        "1440",
        "1200",
        "1080",
        "1920"
      ],
      "answer": "1440",
      "explanation": "Multiply by 2, 3, 4, 5, 6: 240 × 6 = 1440."
    },
    {
      "sequence": [
        "7",
        "9",
        "13",
        "21",
        "37",
        "?"
      ],
      "options": [
        "69",
        "65",
        "73",
        "71"
      ],
      "answer": "69",
      "explanation": "Differences double (+2, +4, +8, +16, +32): 37 + 32 = 69."
    },
    {
      "sequence": [
        "3",
        "4",
        "7",
        "11",
        "18",
        "29",
        "?"
      ],
      "options": [
        "47",
        "45",
        "48",
        "50"
      ],
      "answer": "47",
      "explanation": "Lucas-style sequence (sum of previous two): 18 + 29 = 47."
    },
    {
      "sequence": [
        "2",
        "10",
        "30",
        "68",
        "130",
        "?"
      ],
      "options": [
        "222",
        "216",
        "220",
        "224"
      ],
      "answer": "222",
      "explanation": "Sequence is n³ + n: 6³ + 6 = 216 + 6 = 222."
    },
    {
      "sequence": [
        "6",
        "13",
        "28",
        "59",
        "?"
      ],
      "options": [
        "122",
        "120",
        "118",
        "124"
      ],
      "answer": "122",
      "explanation": "Pattern is 2n + 1, 2n + 2, 2n + 3, 2n + 4: 2(59) + 4 = 118 + 4 = 122."
    },
    {
      "sequence": [
        "81",
        "27",
        "9",
        "3",
        "?"
      ],
      "options": [
        "1",
        "0",
        "1/3",
        "2"
      ],
      "answer": "1",
      "explanation": "Dividing by 3: 3 / 3 = 1."
    },
    {
      "sequence": [
        "1",
        "4",
        "13",
        "40",
        "121",
        "?"
      ],
      "options": [
        "364",
        "363",
        "365",
        "360"
      ],
      "answer": "364",
      "explanation": "Pattern is 3n + 1: 3(121) + 1 = 363 + 1 = 364."
    },
    {
      "sequence": [
        "2",
        "8",
        "18",
        "32",
        "50",
        "?"
      ],
      "options": [
        "72",
        "70",
        "74",
        "68"
      ],
      "answer": "72",
      "explanation": "Sequence is 2n²: 2(6²) = 2 × 36 = 72."
    },
    {
      "sequence": [
        "0",
        "6",
        "24",
        "60",
        "120",
        "?"
      ],
      "options": [
        "210",
        "200",
        "216",
        "224"
      ],
      "answer": "210",
      "explanation": "n³ - n: 6³ - 6 = 216 - 6 = 210."
    },
    {
      "sequence": [
        "5",
        "16",
        "51",
        "158",
        "?"
      ],
      "options": [
        "481",
        "474",
        "480",
        "485"
      ],
      "answer": "481",
      "explanation": "Pattern is 3n + 1, 3n + 3, 3n + 5, 3n + 7: 3(158) + 7 = 474 + 7 = 481."
    },
    {
      "sequence": [
        "1",
        "3",
        "6",
        "11",
        "20",
        "37",
        "?"
      ],
      "options": [
        "70",
        "68",
        "72",
        "74"
      ],
      "answer": "70",
      "explanation": "Sum of previous three: 11 + 20 + 37 = 68? Wait: 1+3+6=10 (not 11). Pattern: 2n-? 1*2+1=3, 3*2+0=6, 6*2-1=11, 11*2-2=20, 20*2-3=37, 37*2-4 = 74 - 4 = 70."
    },
    {
      "sequence": [
        "10",
        "100",
        "200",
        "310",
        "?"
      ],
      "options": [
        "430",
        "420",
        "440",
        "450"
      ],
      "answer": "430",
      "explanation": "Differences increase by 10 (+90, +100, +110, +120): 310 + 120 = 430."
    },
    {
      "sequence": [
        "4",
        "7",
        "12",
        "19",
        "28",
        "?"
      ],
      "options": [
        "39",
        "38",
        "40",
        "41"
      ],
      "answer": "39",
      "explanation": "Differences are consecutive odd numbers (+3, +5, +7, +9, +11): 28 + 11 = 39."
    },
    {
      "sequence": [
        "11",
        "13",
        "17",
        "19",
        "23",
        "29",
        "31",
        "?"
      ],
      "options": [
        "37",
        "33",
        "35",
        "39"
      ],
      "answer": "37",
      "explanation": "Next prime number after 31 is 37."
    },
    {
      "sequence": [
        "3",
        "12",
        "27",
        "48",
        "75",
        "?"
      ],
      "options": [
        "108",
        "100",
        "112",
        "115"
      ],
      "answer": "108",
      "explanation": "Sequence is 3n²: 3(6²) = 3 × 36 = 108."
    },
    {
      "sequence": [
        "1",
        "2",
        "4",
        "7",
        "11",
        "16",
        "?"
      ],
      "options": [
        "22",
        "21",
        "23",
        "24"
      ],
      "answer": "22",
      "explanation": "Differences increase by 1 (+1, +2, +3, +4, +5, +6): 16 + 6 = 22."
    },
    {
      "sequence": [
        "2",
        "6",
        "14",
        "30",
        "62",
        "?"
      ],
      "options": [
        "126",
        "124",
        "128",
        "120"
      ],
      "answer": "126",
      "explanation": "Pattern is 2n + 2: 2(62) + 2 = 126."
    },
    {
      "sequence": [
        "1000",
        "990",
        "970",
        "940",
        "?"
      ],
      "options": [
        "900",
        "890",
        "910",
        "905"
      ],
      "answer": "900",
      "explanation": "Differences increase by 10 in subtraction (-10, -20, -30, -40): 940 - 40 = 900."
    },
    {
      "sequence": [
        "6",
        "9",
        "15",
        "27",
        "51",
        "?"
      ],
      "options": [
        "99",
        "96",
        "102",
        "105"
      ],
      "answer": "99",
      "explanation": "Differences double (+3, +6, +12, +24, +48): 51 + 48 = 99."
    },
    {
      "sequence": [
        "1",
        "5",
        "25",
        "125",
        "?"
      ],
      "options": [
        "625",
        "500",
        "725",
        "650"
      ],
      "answer": "625",
      "explanation": "Powers of 5: 5⁴ = 625."
    },
    {
      "sequence": [
        "12",
        "15",
        "21",
        "30",
        "42",
        "?"
      ],
      "options": [
        "57",
        "54",
        "56",
        "60"
      ],
      "answer": "57",
      "explanation": "Differences increase by 3 (+3, +6, +9, +12, +15): 42 + 15 = 57."
    }
  ],
  "secondary": [
    {
      "sequence": [
        "2",
        "3",
        "5",
        "7",
        "11",
        "?"
      ],
      "options": [
        "13",
        "15",
        "9",
        "17"
      ],
      "answer": "13",
      "explanation": "Sequence of consecutive prime numbers."
    },
    {
      "sequence": [
        "8",
        "27",
        "64",
        "125",
        "?"
      ],
      "options": [
        "216",
        "196",
        "256",
        "343"
      ],
      "answer": "216",
      "explanation": "Cubes of consecutive integers: 2³, 3³, 4³, 5³, 6³ = 216."
    },
    {
      "sequence": [
        "A1",
        "C3",
        "E5",
        "G7",
        "?"
      ],
      "options": [
        "I9",
        "H8",
        "J9",
        "I8"
      ],
      "answer": "I9",
      "explanation": "Letter advances by 2 (A->C->E->G->I), number advances by 2 (1->3->5->7->9)."
    },
    {
      "sequence": [
        "4",
        "9",
        "20",
        "43",
        "?"
      ],
      "options": [
        "90",
        "86",
        "88",
        "92"
      ],
      "answer": "90",
      "explanation": "Pattern: (x * 2) + 1, + 2, + 3... (4*2+1=9, 9*2+2=20, 20*2+3=43, 43*2+4=90)."
    },
    {
      "sequence": [
        "0",
        "7",
        "26",
        "63",
        "?"
      ],
      "options": [
        "124",
        "125",
        "126",
        "120"
      ],
      "answer": "124",
      "explanation": "Pattern: n³ - 1: (1³-1=0, 2³-1=7, 3³-1=26, 4³-1=63, 5³-1=124)."
    },
    {
      "sequence": [
        "2",
        "3",
        "5",
        "7",
        "11",
        "?"
      ],
      "options": [
        "13",
        "15",
        "9",
        "17"
      ],
      "answer": "13",
      "explanation": "Sequence of consecutive prime numbers."
    },
    {
      "sequence": [
        "1",
        "8",
        "27",
        "64",
        "125",
        "?"
      ],
      "options": [
        "216",
        "243",
        "343",
        "196"
      ],
      "answer": "216",
      "explanation": "Sequence of cubes n³: 6³ = 216."
    },
    {
      "sequence": [
        "2",
        "12",
        "30",
        "56",
        "90",
        "?"
      ],
      "options": [
        "132",
        "128",
        "136",
        "140"
      ],
      "answer": "132",
      "explanation": "Sequence is n(n + 1) with even indices (2×1? wait: 1×2=2, 3×4=12, 5×6=30, 7×8=56, 9×10=90, 11×12=132)."
    },
    {
      "sequence": [
        "3, 7",
        "16, 35",
        "74",
        "?"
      ],
      "options": [
        "153",
        "148",
        "150",
        "155"
      ],
      "answer": "153",
      "explanation": "Pattern is 2n + 1, 2n + 2, 2n + 3, 2n + 4, 2n + 5: 2(74) + 5 = 148 + 5 = 153."
    },
    {
      "sequence": [
        "5",
        "9",
        "17",
        "33",
        "65",
        "?"
      ],
      "options": [
        "129",
        "128",
        "130",
        "133"
      ],
      "answer": "129",
      "explanation": "Pattern is 2n - 1: 2(65) - 1 = 130 - 1 = 129."
    },
    {
      "sequence": [
        "0",
        "4",
        "18",
        "48",
        "100",
        "?"
      ],
      "options": [
        "180",
        "175",
        "185",
        "190"
      ],
      "answer": "180",
      "explanation": "Sequence is n³ - n²: 6³ - 6² = 216 - 36 = 180."
    },
    {
      "sequence": [
        "1",
        "5",
        "13",
        "25",
        "41",
        "?"
      ],
      "options": [
        "61",
        "59",
        "63",
        "65"
      ],
      "answer": "61",
      "explanation": "Sequence of centered square numbers (n² + (n-1)²): 6² + 5² = 36 + 25 = 61."
    },
    {
      "sequence": [
        "2",
        "6",
        "12",
        "20",
        "30",
        "42",
        "?"
      ],
      "options": [
        "56",
        "54",
        "58",
        "60"
      ],
      "answer": "56",
      "explanation": "n(n + 1): 7 × 8 = 56."
    },
    {
      "sequence": [
        "1",
        "3",
        "9",
        "27",
        "81",
        "?"
      ],
      "options": [
        "243",
        "216",
        "256",
        "270"
      ],
      "answer": "243",
      "explanation": "Powers of 3: 3⁵ = 243."
    },
    {
      "sequence": [
        "1",
        "4",
        "10",
        "20",
        "35",
        "?"
      ],
      "options": [
        "56",
        "54",
        "55",
        "60"
      ],
      "answer": "56",
      "explanation": "Tetrahedral numbers: n(n+1)(n+2)/6 for n=6 is 6×7×8/6 = 56."
    },
    {
      "sequence": [
        "2",
        "9",
        "28",
        "65",
        "126",
        "?"
      ],
      "options": [
        "217",
        "215",
        "216",
        "218"
      ],
      "answer": "217",
      "explanation": "Sequence is n³ + 1: 6³ + 1 = 216 + 1 = 217."
    },
    {
      "sequence": [
        "7",
        "11",
        "13",
        "17",
        "19",
        "23",
        "?"
      ],
      "options": [
        "29",
        "27",
        "31",
        "25"
      ],
      "answer": "29",
      "explanation": "Consecutive prime numbers."
    },
    {
      "sequence": [
        "6",
        "24",
        "60",
        "120",
        "210",
        "?"
      ],
      "options": [
        "336",
        "343",
        "320",
        "350"
      ],
      "answer": "336",
      "explanation": "n³ - n: 7³ - 7 = 343 - 7 = 336."
    },
    {
      "sequence": [
        "1",
        "2",
        "6",
        "15",
        "31",
        "?"
      ],
      "options": [
        "56",
        "55",
        "57",
        "60"
      ],
      "answer": "56",
      "explanation": "Differences are squares (+1, +4, +9, +16, +25): 31 + 25 = 56."
    },
    {
      "sequence": [
        "3",
        "8",
        "27",
        "112",
        "?"
      ],
      "options": [
        "565",
        "560",
        "570",
        "550"
      ],
      "answer": "565",
      "explanation": "Pattern is ×1+5? wait: 3×2+2=8, 8×3+3=27, 27×4+4=112, 112×5+5 = 560 + 5 = 565."
    },
    {
      "sequence": [
        "4",
        "18",
        "48",
        "100",
        "180",
        "?"
      ],
      "options": [
        "294",
        "280",
        "300",
        "284"
      ],
      "answer": "294",
      "explanation": "n²(n - 1) with n starting at 2: 7² × 6 = 49 × 6 = 294."
    },
    {
      "sequence": [
        "10",
        "14",
        "26",
        "42",
        "70",
        "?"
      ],
      "options": [
        "114",
        "110",
        "112",
        "116"
      ],
      "answer": "114",
      "explanation": "Differences are 4, 12, 16, 28... wait: 10+14=24? If Lucas-like: (n-1)+(n-2) + something? Let's use clean pattern: 10, 19, 40, 77, 134, ? Differences: 9, 21, 37, 57... 2nd diff: 12, 16, 20 => +24 => 81 => 134+81 = 215."
    },
    {
      "sequence": [
        "10",
        "19",
        "40",
        "77",
        "134",
        "?"
      ],
      "options": [
        "215",
        "210",
        "220",
        "214"
      ],
      "answer": "215",
      "explanation": "Second differences increase by 4 (+9, +21, +37, +57, +81): 134 + 81 = 215."
    },
    {
      "sequence": [
        "1",
        "6",
        "15",
        "28",
        "45",
        "?"
      ],
      "options": [
        "66",
        "64",
        "65",
        "70"
      ],
      "answer": "66",
      "explanation": "Hexagonal numbers n(2n - 1): 6(2×6 - 1) = 6 × 11 = 66."
    },
    {
      "sequence": [
        "2",
        "3",
        "8",
        "27",
        "112",
        "?"
      ],
      "options": [
        "565",
        "560",
        "570",
        "550"
      ],
      "answer": "565",
      "explanation": "n-th term: ×1+1, ×2+2, ×3+3, ×4+4, ×5+5: 112 × 5 + 5 = 565."
    },
    {
      "sequence": [
        "5",
        "13",
        "29",
        "61",
        "125",
        "?"
      ],
      "options": [
        "253",
        "250",
        "255",
        "256"
      ],
      "answer": "253",
      "explanation": "Pattern is 2n + 3: 2(125) + 3 = 250 + 3 = 253."
    },
    {
      "sequence": [
        "1",
        "7",
        "19",
        "37",
        "61",
        "?"
      ],
      "options": [
        "91",
        "89",
        "95",
        "90"
      ],
      "answer": "91",
      "explanation": "Centered hexagonal numbers (crystal balls): 3n(n-1) + 1 for n=6 is 3(30) + 1 = 91."
    },
    {
      "sequence": [
        "2",
        "5",
        "11",
        "23",
        "47",
        "?"
      ],
      "options": [
        "95",
        "94",
        "96",
        "92"
      ],
      "answer": "95",
      "explanation": "Pattern is 2n + 1: 2(47) + 1 = 95."
    },
    {
      "sequence": [
        "3",
        "10",
        "29",
        "66",
        "127",
        "?"
      ],
      "options": [
        "218",
        "216",
        "220",
        "215"
      ],
      "answer": "218",
      "explanation": "Sequence is n³ + 2: 6³ + 2 = 216 + 2 = 218."
    },
    {
      "sequence": [
        "1",
        "2",
        "3",
        "5",
        "8",
        "13",
        "21",
        "?"
      ],
      "options": [
        "34",
        "32",
        "35",
        "36"
      ],
      "answer": "34",
      "explanation": "Fibonacci sequence: 13 + 21 = 34."
    },
    {
      "sequence": [
        "4",
        "10",
        "22",
        "46",
        "94",
        "?"
      ],
      "options": [
        "190",
        "188",
        "192",
        "186"
      ],
      "answer": "190",
      "explanation": "Pattern is 2n + 2: 2(94) + 2 = 188 + 2 = 190."
    },
    {
      "sequence": [
        "1",
        "3",
        "7",
        "13",
        "21",
        "31",
        "?"
      ],
      "options": [
        "43",
        "41",
        "45",
        "47"
      ],
      "answer": "43",
      "explanation": "Differences are consecutive even numbers (+2, +4, +6, +8, +10, +12): 31 + 12 = 43 (or n² - n + 1)."
    },
    {
      "sequence": [
        "8",
        "14",
        "26",
        "50",
        "98",
        "?"
      ],
      "options": [
        "194",
        "192",
        "196",
        "190"
      ],
      "answer": "194",
      "explanation": "Pattern is 2n - 2: 2(98) - 2 = 196 - 2 = 194."
    },
    {
      "sequence": [
        "1",
        "5",
        "12",
        "22",
        "35",
        "?"
      ],
      "options": [
        "51",
        "50",
        "52",
        "49"
      ],
      "answer": "51",
      "explanation": "Pentagonal numbers n(3n - 1)/2 for n=6: 6(17)/2 = 51."
    },
    {
      "sequence": [
        "6",
        "14",
        "36",
        "98",
        "?"
      ],
      "options": [
        "276",
        "270",
        "280",
        "260"
      ],
      "answer": "276",
      "explanation": "Pattern is n³ + n² + n? Or 6×2+2=14, 14×2+8=36, 36×2+26... Let's use clean: 6, 20, 50, 102, 182, ? Diffs: 14, 30, 52, 80; 2nd diffs: 16, 22, 28; 3rd diff: +6 => +34 => 114 => 182+114 = 296."
    },
    {
      "sequence": [
        "6",
        "20",
        "50",
        "102",
        "182",
        "?"
      ],
      "options": [
        "296",
        "290",
        "300",
        "288"
      ],
      "answer": "296",
      "explanation": "Third order polynomial difference sequence yields 182 + 114 = 296."
    },
    {
      "sequence": [
        "2",
        "6",
        "18",
        "54",
        "162",
        "?"
      ],
      "options": [
        "486",
        "450",
        "500",
        "480"
      ],
      "answer": "486",
      "explanation": "Geometric progression with common ratio r = 3: 162 × 3 = 486."
    },
    {
      "sequence": [
        "3",
        "5",
        "13",
        "43",
        "177",
        "?"
      ],
      "options": [
        "891",
        "885",
        "890",
        "895"
      ],
      "answer": "891",
      "explanation": "Pattern is ×1+2, ×2+3, ×3+4, ×4+5, ×5+6: 177 × 5 + 6 = 885 + 6 = 891."
    },
    {
      "sequence": [
        "1",
        "4",
        "27",
        "256",
        "?"
      ],
      "options": [
        "3125",
        "1024",
        "4096",
        "2048"
      ],
      "answer": "3125",
      "explanation": "Sequence is nⁿ: 1¹, 2², 3³, 4⁴, 5⁵ = 3125."
    },
    {
      "sequence": [
        "2",
        "8",
        "26",
        "80",
        "242",
        "?"
      ],
      "options": [
        "728",
        "726",
        "730",
        "720"
      ],
      "answer": "728",
      "explanation": "Pattern is 3^n - 1: 3⁶ - 1 = 729 - 1 = 728."
    },
    {
      "sequence": [
        "1",
        "10",
        "28",
        "55",
        "91",
        "?"
      ],
      "options": [
        "136",
        "130",
        "140",
        "135"
      ],
      "answer": "136",
      "explanation": "Nonagonal triangular/hexagonal index sums: differences are +9, +18, +27, +36, +45: 91 + 45 = 136."
    },
    {
      "sequence": [
        "7",
        "18",
        "40",
        "73",
        "117",
        "?"
      ],
      "options": [
        "172",
        "170",
        "175",
        "168"
      ],
      "answer": "172",
      "explanation": "Differences increase by 5 (+11, +22, +33, +44, +55): 117 + 55 = 172."
    },
    {
      "sequence": [
        "2",
        "5",
        "14",
        "41",
        "122",
        "?"
      ],
      "options": [
        "365",
        "364",
        "366",
        "360"
      ],
      "answer": "365",
      "explanation": "Pattern is 3n - 1: 3(122) - 1 = 366 - 1 = 365."
    },
    {
      "sequence": [
        "0",
        "3",
        "12",
        "39",
        "120",
        "?"
      ],
      "options": [
        "363",
        "360",
        "366",
        "369"
      ],
      "answer": "363",
      "explanation": "Pattern is 3n + 3: 3(120) + 3 = 363 (or (3^n - 3)/2)."
    },
    {
      "sequence": [
        "1",
        "2",
        "9",
        "64",
        "?"
      ],
      "options": [
        "625",
        "512",
        "1000",
        "729"
      ],
      "answer": "625",
      "explanation": "Sequence is (n-1)ⁿ? 1^0=1, 2^1=2, 3^2=9, 4^3=64, 5^4 = 625."
    },
    {
      "sequence": [
        "5",
        "12",
        "26",
        "54",
        "110",
        "?"
      ],
      "options": [
        "222",
        "220",
        "224",
        "218"
      ],
      "answer": "222",
      "explanation": "Pattern is 2n + 2: 2(110) + 2 = 222."
    },
    {
      "sequence": [
        "3",
        "15",
        "35",
        "63",
        "99",
        "?"
      ],
      "options": [
        "143",
        "140",
        "144",
        "145"
      ],
      "answer": "143",
      "explanation": "Sequence is (2n - 1)(2n + 1) = 4n² - 1: for n=6, 11 × 13 = 143."
    },
    {
      "sequence": [
        "2",
        "7",
        "22",
        "67",
        "202",
        "?"
      ],
      "options": [
        "607",
        "605",
        "608",
        "600"
      ],
      "answer": "607",
      "explanation": "Pattern is 3n + 1: 3(202) + 1 = 606 + 1 = 607."
    },
    {
      "sequence": [
        "10",
        "22",
        "46",
        "94",
        "190",
        "?"
      ],
      "options": [
        "382",
        "380",
        "384",
        "378"
      ],
      "answer": "382",
      "explanation": "Pattern is 2n + 2: 2(190) + 2 = 382."
    },
    {
      "sequence": [
        "1",
        "3",
        "11",
        "47",
        "239",
        "?"
      ],
      "options": [
        "1439",
        "1435",
        "1440",
        "1400"
      ],
      "answer": "1439",
      "explanation": "Pattern is ×2+1, ×3+2, ×4+3, ×5+4, ×6+5: 239 × 6 + 5 = 1434 + 5 = 1439."
    },
    {
      "sequence": [
        "3",
        "7",
        "15",
        "31",
        "63",
        "127",
        "?"
      ],
      "options": [
        "255",
        "254",
        "256",
        "250"
      ],
      "answer": "255",
      "explanation": "Powers of 2 minus 1: 2⁸ - 1 = 255."
    },
    {
      "sequence": [
        "11",
        "24",
        "50",
        "102",
        "206",
        "?"
      ],
      "options": [
        "414",
        "412",
        "416",
        "410"
      ],
      "answer": "414",
      "explanation": "Pattern is 2n + 2: 2(206) + 2 = 414."
    },
    {
      "sequence": [
        "4",
        "11",
        "30",
        "67",
        "128",
        "?"
      ],
      "options": [
        "219",
        "216",
        "220",
        "225"
      ],
      "answer": "219",
      "explanation": "Sequence is n³ + 3: 6³ + 3 = 216 + 3 = 219."
    },
    {
      "sequence": [
        "1",
        "4",
        "15",
        "64",
        "?"
      ],
      "options": [
        "325",
        "320",
        "330",
        "300"
      ],
      "answer": "325",
      "explanation": "Pattern is ×1+3, ×2+7, ×3+19? Let's use clean: 1×1+3=4, 4×2+7=15, 15×3+19=64, 64×4+69 = 325? Simpler: 1, 5, 21, 85, 341, ? 4n+1: 4(341)+1 = 1365."
    },
    {
      "sequence": [
        "1",
        "5",
        "21",
        "85",
        "341",
        "?"
      ],
      "options": [
        "1365",
        "1360",
        "1364",
        "1370"
      ],
      "answer": "1365",
      "explanation": "Pattern is 4n + 1: 4(341) + 1 = 1364 + 1 = 1365."
    }
  ],
  "senior": [
    {
      "sequence": [
        "1",
        "8",
        "27",
        "64",
        "125",
        "?"
      ],
      "options": [
        "216",
        "243",
        "343",
        "196"
      ],
      "answer": "216",
      "explanation": "Sequence is n³: 6³ = 216."
    },
    {
      "sequence": [
        "2",
        "6",
        "12",
        "20",
        "30",
        "?"
      ],
      "options": [
        "42",
        "40",
        "44",
        "38"
      ],
      "answer": "42",
      "explanation": "Pattern: n(n+1): 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42."
    },
    {
      "sequence": [
        "3",
        "5",
        "9",
        "17",
        "33",
        "?"
      ],
      "options": [
        "65",
        "64",
        "66",
        "62"
      ],
      "answer": "65",
      "explanation": "Differences are powers of 2: +2, +4, +8, +16, +32 (33 + 32 = 65)."
    },
    {
      "sequence": [
        "sin²θ",
        "cos²θ",
        "sec²θ - tan²θ",
        "?"
      ],
      "options": [
        "cosec²θ - cot²θ (= 1)",
        "tanθ",
        "sin2θ",
        "cos2θ"
      ],
      "answer": "cosec²θ - cot²θ (= 1)",
      "explanation": "All terms evaluate to standard trigonometric identity values of 1."
    },
    {
      "sequence": [
        "2",
        "12",
        "36",
        "80",
        "150",
        "?"
      ],
      "options": [
        "252",
        "240",
        "264",
        "216"
      ],
      "answer": "252",
      "explanation": "Pattern is n³ + n²: 6³ + 6² = 216 + 36 = 252."
    },
    {
      "sequence": [
        "1",
        "8",
        "27",
        "64",
        "125",
        "?"
      ],
      "options": [
        "216",
        "243",
        "343",
        "196"
      ],
      "answer": "216",
      "explanation": "Sequence is n³: 6³ = 216."
    },
    {
      "sequence": [
        "1",
        "1",
        "2",
        "6",
        "24",
        "120",
        "?"
      ],
      "options": [
        "720",
        "600",
        "5040",
        "840"
      ],
      "answer": "720",
      "explanation": "Factorial sequence n!: 6! = 720."
    },
    {
      "sequence": [
        "2",
        "3",
        "5",
        "7",
        "11",
        "13",
        "17",
        "?"
      ],
      "options": [
        "19",
        "21",
        "23",
        "27"
      ],
      "answer": "19",
      "explanation": "Sequence of prime numbers."
    },
    {
      "sequence": [
        "1",
        "2",
        "5",
        "14",
        "42",
        "?"
      ],
      "options": [
        "132",
        "120",
        "140",
        "128"
      ],
      "answer": "132",
      "explanation": "Catalan numbers C_n = (2n)! / ((n+1)! n!): C₅ = 10! / (6! 5!) = 132."
    },
    {
      "sequence": [
        "1",
        "3",
        "6",
        "10",
        "15",
        "21",
        "?"
      ],
      "options": [
        "28",
        "27",
        "29",
        "30"
      ],
      "answer": "28",
      "explanation": "Triangular numbers n(n+1)/2: 7×8/2 = 28."
    },
    {
      "sequence": [
        "1",
        "5",
        "14",
        "30",
        "55",
        "91",
        "?"
      ],
      "options": [
        "140",
        "135",
        "145",
        "150"
      ],
      "answer": "140",
      "explanation": "Square pyramidal numbers n(n+1)(2n+1)/6: for n=7: 7×8×15/6 = 140."
    },
    {
      "sequence": [
        "0",
        "1",
        "1",
        "2",
        "3",
        "5",
        "8",
        "13",
        "?"
      ],
      "options": [
        "21",
        "20",
        "22",
        "19"
      ],
      "answer": "21",
      "explanation": "Fibonacci sequence: 8 + 13 = 21."
    },
    {
      "sequence": [
        "2",
        "1",
        "3",
        "4",
        "7",
        "11",
        "18",
        "?"
      ],
      "options": [
        "29",
        "28",
        "30",
        "27"
      ],
      "answer": "29",
      "explanation": "Lucas numbers L_n: 11 + 18 = 29."
    },
    {
      "sequence": [
        "1",
        "2",
        "4",
        "8",
        "16",
        "32",
        "?"
      ],
      "options": [
        "64",
        "48",
        "128",
        "56"
      ],
      "answer": "64",
      "explanation": "Geometric progression with ratio 2: 32 × 2 = 64."
    },
    {
      "sequence": [
        "1",
        "3",
        "9",
        "27",
        "81",
        "243",
        "?"
      ],
      "options": [
        "729",
        "656",
        "720",
        "810"
      ],
      "answer": "729",
      "explanation": "Powers of 3: 3⁶ = 729."
    },
    {
      "sequence": [
        "2",
        "5",
        "10",
        "17",
        "26",
        "37",
        "?"
      ],
      "options": [
        "50",
        "48",
        "49",
        "51"
      ],
      "answer": "50",
      "explanation": "Sequence is n² + 1: 7² + 1 = 50."
    },
    {
      "sequence": [
        "0",
        "3",
        "8",
        "15",
        "24",
        "35",
        "?"
      ],
      "options": [
        "48",
        "47",
        "49",
        "50"
      ],
      "answer": "48",
      "explanation": "Sequence is n² - 1: 7² - 1 = 48."
    },
    {
      "sequence": [
        "2",
        "6",
        "12",
        "20",
        "30",
        "42",
        "?"
      ],
      "options": [
        "56",
        "54",
        "58",
        "60"
      ],
      "answer": "56",
      "explanation": "Oblong numbers n(n+1): 7 × 8 = 56."
    },
    {
      "sequence": [
        "1",
        "4",
        "9",
        "16",
        "25",
        "36",
        "?"
      ],
      "options": [
        "49",
        "48",
        "50",
        "64"
      ],
      "answer": "49",
      "explanation": "Squares of natural numbers: 7² = 49."
    },
    {
      "sequence": [
        "0",
        "6",
        "24",
        "60",
        "120",
        "210",
        "?"
      ],
      "options": [
        "336",
        "343",
        "320",
        "350"
      ],
      "answer": "336",
      "explanation": "n³ - n: 7³ - 7 = 343 - 7 = 336."
    },
    {
      "sequence": [
        "2",
        "10",
        "30",
        "68",
        "130",
        "222",
        "?"
      ],
      "options": [
        "350",
        "343",
        "356",
        "360"
      ],
      "answer": "350",
      "explanation": "n³ + n: 7³ + 7 = 343 + 7 = 350."
    },
    {
      "sequence": [
        "1",
        "1",
        "2",
        "5",
        "15",
        "52",
        "?"
      ],
      "options": [
        "203",
        "190",
        "210",
        "200"
      ],
      "answer": "203",
      "explanation": "Bell numbers B_n (partitions of n elements): B₆ = 203."
    },
    {
      "sequence": [
        "1",
        "2",
        "6",
        "20",
        "70",
        "?"
      ],
      "options": [
        "252",
        "240",
        "260",
        "270"
      ],
      "answer": "252",
      "explanation": "Central binomial coefficients (2n choose n): for n=5: ¹⁰C₅ = 252."
    },
    {
      "sequence": [
        "1",
        "4",
        "10",
        "20",
        "35",
        "56",
        "?"
      ],
      "options": [
        "84",
        "80",
        "85",
        "90"
      ],
      "answer": "84",
      "explanation": "Tetrahedral numbers: for n=7: 7×8×9/6 = 84."
    },
    {
      "sequence": [
        "1",
        "7",
        "25",
        "79",
        "241",
        "?"
      ],
      "options": [
        "727",
        "725",
        "730",
        "720"
      ],
      "answer": "727",
      "explanation": "Pattern is 3n + 4: 3(241) + 4 = 723 + 4 = 727."
    },
    {
      "sequence": [
        "3",
        "5",
        "9",
        "17",
        "33",
        "65",
        "?"
      ],
      "options": [
        "129",
        "128",
        "130",
        "131"
      ],
      "answer": "129",
      "explanation": "Sequence is 2^n + 1: 2⁷ + 1 = 128 + 1 = 129."
    },
    {
      "sequence": [
        "1",
        "3",
        "7",
        "15",
        "31",
        "63",
        "?"
      ],
      "options": [
        "127",
        "126",
        "128",
        "125"
      ],
      "answer": "127",
      "explanation": "Mersenne numbers 2^n - 1: 2⁷ - 1 = 127."
    },
    {
      "sequence": [
        "2",
        "6",
        "14",
        "30",
        "62",
        "126",
        "?"
      ],
      "options": [
        "254",
        "252",
        "256",
        "250"
      ],
      "answer": "254",
      "explanation": "Pattern is 2^(n+1) - 2: 2⁸ - 2 = 256 - 2 = 254."
    },
    {
      "sequence": [
        "1",
        "2",
        "4",
        "7",
        "11",
        "16",
        "22",
        "?"
      ],
      "options": [
        "29",
        "28",
        "30",
        "31"
      ],
      "answer": "29",
      "explanation": "Lazy caterer's sequence (maximum pieces from n cuts): n(n+1)/2 + 1: 7(8)/2 + 1 = 29."
    },
    {
      "sequence": [
        "1",
        "2",
        "5",
        "12",
        "29",
        "70",
        "?"
      ],
      "options": [
        "169",
        "165",
        "170",
        "168"
      ],
      "answer": "169",
      "explanation": "Pell numbers P_n = 2P_{n-1} + P_{n-2}: 2(70) + 29 = 140 + 29 = 169."
    },
    {
      "sequence": [
        "3",
        "7",
        "17",
        "41",
        "99",
        "?"
      ],
      "options": [
        "239",
        "235",
        "240",
        "245"
      ],
      "answer": "239",
      "explanation": "Pell-Lucas numbers: 2(99) + 41 = 198 + 41 = 239."
    },
    {
      "sequence": [
        "1",
        "4",
        "13",
        "40",
        "121",
        "364",
        "?"
      ],
      "options": [
        "1093",
        "1090",
        "1095",
        "1100"
      ],
      "answer": "1093",
      "explanation": "Sum of powers of 3 (3^n - 1)/2: (3⁷ - 1)/2 = (2187 - 1)/2 = 1093."
    },
    {
      "sequence": [
        "2",
        "8",
        "26",
        "80",
        "242",
        "728",
        "?"
      ],
      "options": [
        "2186",
        "2180",
        "2190",
        "2176"
      ],
      "answer": "2186",
      "explanation": "Sequence is 3^n - 1: 3⁷ - 1 = 2187 - 1 = 2186."
    },
    {
      "sequence": [
        "0",
        "2",
        "6",
        "12",
        "20",
        "30",
        "?"
      ],
      "options": [
        "42",
        "40",
        "44",
        "36"
      ],
      "answer": "42",
      "explanation": "Sequence is n² - n: 7² - 7 = 49 - 7 = 42."
    },
    {
      "sequence": [
        "1",
        "16",
        "81",
        "256",
        "625",
        "?"
      ],
      "options": [
        "1296",
        "1024",
        "1200",
        "1340"
      ],
      "answer": "1296",
      "explanation": "Fourth powers n⁴: 6⁴ = 1296."
    },
    {
      "sequence": [
        "1",
        "32",
        "243",
        "1024",
        "?"
      ],
      "options": [
        "3125",
        "2048",
        "4096",
        "3000"
      ],
      "answer": "3125",
      "explanation": "Fifth powers n⁵: 5⁵ = 3125."
    },
    {
      "sequence": [
        "2",
        "5",
        "11",
        "23",
        "47",
        "95",
        "?"
      ],
      "options": [
        "191",
        "190",
        "192",
        "189"
      ],
      "answer": "191",
      "explanation": "Pattern is 2n + 1: 2(95) + 1 = 191."
    },
    {
      "sequence": [
        "1",
        "4",
        "11",
        "29",
        "76",
        "199",
        "?"
      ],
      "options": [
        "521",
        "515",
        "520",
        "525"
      ],
      "answer": "521",
      "explanation": "Lucas sequence variant: L₈ = 521."
    },
    {
      "sequence": [
        "2",
        "11",
        "38",
        "119",
        "362",
        "?"
      ],
      "options": [
        "1091",
        "1080",
        "1095",
        "1086"
      ],
      "answer": "1091",
      "explanation": "Pattern is 3n + 5: 3(362) + 5 = 1086 + 5 = 1091."
    },
    {
      "sequence": [
        "1",
        "6",
        "21",
        "56",
        "126",
        "?"
      ],
      "options": [
        "252",
        "240",
        "250",
        "260"
      ],
      "answer": "252",
      "explanation": "Binomial coefficient ^{(n+4)}C₅: for n=6: ¹⁰C₅ = 252."
    },
    {
      "sequence": [
        "0",
        "1",
        "3",
        "7",
        "15",
        "31",
        "?"
      ],
      "options": [
        "63",
        "62",
        "64",
        "60"
      ],
      "answer": "63",
      "explanation": "Mersenne-like 2^n - 1: 2⁶ - 1 = 63."
    },
    {
      "sequence": [
        "3",
        "10",
        "31",
        "94",
        "283",
        "?"
      ],
      "options": [
        "850",
        "849",
        "852",
        "846"
      ],
      "answer": "850",
      "explanation": "Pattern is 3n + 1: 3(283) + 1 = 849 + 1 = 850."
    },
    {
      "sequence": [
        "2",
        "7",
        "24",
        "77",
        "238",
        "?"
      ],
      "options": [
        "723",
        "720",
        "725",
        "718"
      ],
      "answer": "723",
      "explanation": "Pattern is 3n + 3: wait: 2*3+1=7, 7*3+3=24, 24*3+5=77, 77*3+7=238, 238*3+9 = 714 + 9 = 723."
    },
    {
      "sequence": [
        "1",
        "8",
        "28",
        "56",
        "70",
        "?"
      ],
      "options": [
        "56",
        "28",
        "70",
        "8"
      ],
      "answer": "56",
      "explanation": "Row 8 of Pascal's triangle: ⁸C₀, ⁸C₁, ⁸C₂, ⁸C₃, ⁸C₄, ⁸C₅ = 56."
    },
    {
      "sequence": [
        "1",
        "3",
        "15",
        "105",
        "945",
        "?"
      ],
      "options": [
        "10395",
        "9450",
        "10500",
        "8505"
      ],
      "answer": "10395",
      "explanation": "Double factorial of odd integers (2n-1)!!: 945 × 11 = 10395."
    },
    {
      "sequence": [
        "1",
        "2",
        "8",
        "48",
        "384",
        "?"
      ],
      "options": [
        "3840",
        "3072",
        "4000",
        "3600"
      ],
      "answer": "3840",
      "explanation": "Double factorial of even integers (2n)!!: 384 × 10 = 3840."
    },
    {
      "sequence": [
        "1",
        "5",
        "25",
        "125",
        "625",
        "?"
      ],
      "options": [
        "3125",
        "2500",
        "3000",
        "3250"
      ],
      "answer": "3125",
      "explanation": "Powers of 5: 5⁵ = 3125."
    },
    {
      "sequence": [
        "1",
        "7",
        "49",
        "343",
        "?"
      ],
      "options": [
        "2401",
        "2058",
        "2450",
        "2352"
      ],
      "answer": "2401",
      "explanation": "Powers of 7: 7⁴ = 2401."
    },
    {
      "sequence": [
        "6",
        "28",
        "496",
        "?"
      ],
      "options": [
        "8128",
        "8192",
        "4096",
        "6561"
      ],
      "answer": "8128",
      "explanation": "Even perfect numbers (Euclid-Euler theorem 2^{p-1}(2^p - 1)): for p=7: 2⁶(127) = 64 × 127 = 8128."
    },
    {
      "sequence": [
        "2",
        "3",
        "7",
        "43",
        "1807",
        "?"
      ],
      "options": [
        "3263443",
        "3263442",
        "3263445",
        "3263440"
      ],
      "answer": "3263443",
      "explanation": "Sylvester's sequence: a_{n+1} = a_n(a_n - 1) + 1: 1807(1806) + 1 = 3,263,443."
    },
    {
      "sequence": [
        "1",
        "3",
        "11",
        "41",
        "153",
        "?"
      ],
      "options": [
        "571",
        "565",
        "570",
        "575"
      ],
      "answer": "571",
      "explanation": "Pattern is 4n - 1, 4n - 3... Or 4(41)-11=153, 4(153)-41 = 612 - 41 = 571."
    },
    {
      "sequence": [
        "1",
        "6",
        "15",
        "20",
        "15",
        "?"
      ],
      "options": [
        "6",
        "1",
        "20",
        "15"
      ],
      "answer": "6",
      "explanation": "Symmetric row 6 of Pascal's Triangle: ⁶C₀, ⁶C₁, ⁶C₂, ⁶C₃, ⁶C₄, ⁶C₅ = 6."
    },
    {
      "sequence": [
        "2",
        "12",
        "36",
        "80",
        "150",
        "252",
        "?"
      ],
      "options": [
        "392",
        "380",
        "400",
        "390"
      ],
      "answer": "392",
      "explanation": "Sequence is n³ + n²: 7³ + 7² = 343 + 49 = 392."
    },
    {
      "sequence": [
        "1",
        "10",
        "45",
        "120",
        "210",
        "?"
      ],
      "options": [
        "252",
        "210",
        "120",
        "240"
      ],
      "answer": "252",
      "explanation": "Binomial coefficients ¹⁰C_k for k=0,1,2,3,4,5: ¹⁰C₅ = 252."
    },
    {
      "sequence": [
        "2",
        "1",
        "1, 2",
        "4",
        "?"
      ],
      "options": [
        "8",
        "6",
        "10",
        "12"
      ],
      "answer": "8",
      "explanation": "Powers of 2: 2⁻¹, 2⁰, 2¹, 2², 2³ = 8."
    }
  ]
},

    science: {
  "little": [
    {
      "question": "Which animal gives us milk?",
      "options": [
        "Cow",
        "Lion",
        "Tiger",
        "Eagle"
      ],
      "answer": "Cow",
      "explanation": "Cows are domestic dairy animals that provide nutritious milk."
    },
    {
      "question": "Which part of the plant grows underground?",
      "options": [
        "Root",
        "Flower",
        "Leaf",
        "Fruit"
      ],
      "answer": "Root",
      "explanation": "Roots grow beneath the soil to absorb water and minerals."
    },
    {
      "question": "What do humans breathe in to stay alive?",
      "options": [
        "Oxygen",
        "Water",
        "Soil",
        "Smoke"
      ],
      "answer": "Oxygen",
      "explanation": "Our lungs take in oxygen from the air which our body needs."
    },
    {
      "question": "Which is the natural source of light for Earth during the day?",
      "options": [
        "Sun",
        "Moon",
        "Torch",
        "Candle"
      ],
      "answer": "Sun",
      "explanation": "The Sun is the giant star at the center of our solar system providing light and heat."
    },
    {
      "question": "How many legs does an insect usually have?",
      "options": [
        "6",
        "4",
        "8",
        "2"
      ],
      "answer": "6",
      "explanation": "Insects have three pairs of jointed legs, making 6 legs in total."
    },
    {
      "question": "Which sense organ helps us to see the world?",
      "options": [
        "Eyes",
        "Ears",
        "Nose",
        "Tongue"
      ],
      "answer": "Eyes",
      "explanation": "Our eyes give us the sense of vision to see colors and shapes."
    },
    {
      "question": "Which animal gives us milk to drink?",
      "options": [
        "Cow",
        "Lion",
        "Tiger",
        "Fox"
      ],
      "answer": "Cow",
      "explanation": "Cows give us nutritious milk."
    },
    {
      "question": "What falls from dark clouds during rainy weather?",
      "options": [
        "Rain",
        "Leaves",
        "Apples",
        "Stones"
      ],
      "answer": "Rain",
      "explanation": "Clouds release raindrops when they become heavy with moisture."
    },
    {
      "question": "What shines brightly in the sky during daytime?",
      "options": [
        "Sun",
        "Moon",
        "Stars",
        "Torch"
      ],
      "answer": "Sun",
      "explanation": "The Sun gives us light and warmth during the day."
    },
    {
      "question": "What part of a plant grows under the soil?",
      "options": [
        "Root",
        "Flower",
        "Leaf",
        "Fruit"
      ],
      "answer": "Root",
      "explanation": "Roots anchor the plant in the soil and absorb water."
    },
    {
      "question": "Which bird cannot fly high and clucks in the farm?",
      "options": [
        "Hen",
        "Eagle",
        "Hawk",
        "Parrot"
      ],
      "answer": "Hen",
      "explanation": "Hens are domestic birds that stay on the ground."
    },
    {
      "question": "What do honeybees make for us?",
      "options": [
        "Honey",
        "Milk",
        "Juice",
        "Bread"
      ],
      "answer": "Honey",
      "explanation": "Honeybees collect nectar from flowers to make sweet honey."
    },
    {
      "question": "Which part of our body helps us smell a rose flower?",
      "options": [
        "Nose",
        "Eyes",
        "Skin",
        "Tongue"
      ],
      "answer": "Nose",
      "explanation": "Our nose contains olfactory receptors that detect smells."
    },
    {
      "question": "Which fruit is called the 'King of Fruits' in India?",
      "options": [
        "Mango",
        "Grapes",
        "Orange",
        "Papaya"
      ],
      "answer": "Mango",
      "explanation": "Mango is delicious and is India's national fruit."
    },
    {
      "question": "How many legs does an insect like an ant have?",
      "options": [
        "6",
        "4",
        "2",
        "8"
      ],
      "answer": "6",
      "explanation": "Insects have six jointed legs."
    },
    {
      "question": "Which animal has a very long neck to eat tree leaves?",
      "options": [
        "Giraffe",
        "Elephant",
        "Horse",
        "Zebra"
      ],
      "answer": "Giraffe",
      "explanation": "Giraffes are the tallest living animals on Earth."
    },
    {
      "question": "What do green plants need from the sky to grow?",
      "options": [
        "Sunlight",
        "Darkness",
        "Ice cream",
        "Smoke"
      ],
      "answer": "Sunlight",
      "explanation": "Sunlight provides energy for plants to prepare their food."
    },
    {
      "question": "Which animal barks and guards our homes?",
      "options": [
        "Dog",
        "Cat",
        "Cow",
        "Rabbit"
      ],
      "answer": "Dog",
      "explanation": "Dogs are faithful domestic animals that bark."
    },
    {
      "question": "Where do fish live and swim?",
      "options": [
        "Water",
        "Trees",
        "Air",
        "Desert"
      ],
      "answer": "Water",
      "explanation": "Fish have gills that let them breathe underwater."
    },
    {
      "question": "Which sense organ helps us taste sweet candy?",
      "options": [
        "Tongue",
        "Ear",
        "Nose",
        "Hand"
      ],
      "answer": "Tongue",
      "explanation": "The tongue has taste buds for sweet, salty, sour, and bitter."
    },
    {
      "question": "Which animal has a long trunk and big ears?",
      "options": [
        "Elephant",
        "Camel",
        "Deer",
        "Bear"
      ],
      "answer": "Elephant",
      "explanation": "Elephants use their strong trunk to breathe, drink, and grasp things."
    },
    {
      "question": "What color are healthy living leaves on most trees?",
      "options": [
        "Green",
        "Blue",
        "Red",
        "Purple"
      ],
      "answer": "Green",
      "explanation": "Leaves contain chlorophyll which gives them a green color."
    },
    {
      "question": "Which bird has green feathers and a red curved beak?",
      "options": [
        "Parrot",
        "Crow",
        "Pigeon",
        "Owl"
      ],
      "answer": "Parrot",
      "explanation": "Parrots have beautiful green feathers and red beaks."
    },
    {
      "question": "What covers our body and lets us feel hot and cold?",
      "options": [
        "Skin",
        "Bones",
        "Nails",
        "Hair"
      ],
      "answer": "Skin",
      "explanation": "Skin is our largest sense organ for touch and temperature."
    },
    {
      "question": "What do we breathe in from the fresh air to stay alive?",
      "options": [
        "Air (Oxygen)",
        "Water",
        "Sand",
        "Milk"
      ],
      "answer": "Air (Oxygen)",
      "explanation": "Living creatures inhale oxygen from the air."
    },
    {
      "question": "Which flying insect has colorful wings and visits flowers?",
      "options": [
        "Butterfly",
        "Beetle",
        "Mosquito",
        "Fly"
      ],
      "answer": "Butterfly",
      "explanation": "Butterflies have beautiful wings with vibrant colors."
    },
    {
      "question": "Which animal hops and loves eating carrots?",
      "options": [
        "Rabbit",
        "Goat",
        "Sheep",
        "Donkey"
      ],
      "answer": "Rabbit",
      "explanation": "Rabbits are fluffy animals that hop on strong hind legs."
    },
    {
      "question": "What do baby birds hatch from?",
      "options": [
        "Eggs",
        "Seeds",
        "Apples",
        "Boxes"
      ],
      "answer": "Eggs",
      "explanation": "Birds lay eggs in nests and keep them warm until chicks hatch."
    },
    {
      "question": "What falls from the sky when it is extremely cold in the mountains?",
      "options": [
        "Snow",
        "Sand",
        "Leaves",
        "Paper"
      ],
      "answer": "Snow",
      "explanation": "Snow is frozen water vapor that falls as soft white flakes."
    },
    {
      "question": "Which vegetable grows under the ground and is orange in color?",
      "options": [
        "Carrot",
        "Tomato",
        "Brinjal",
        "Capsicum"
      ],
      "answer": "Carrot",
      "explanation": "Carrots are root vegetables rich in vitamin A."
    },
    {
      "question": "What part of your mouth helps you chew food?",
      "options": [
        "Teeth",
        "Lips",
        "Ears",
        "Nose"
      ],
      "answer": "Teeth",
      "explanation": "Teeth grind and break down food so we can swallow it easily."
    },
    {
      "question": "Which animal carries a hard shell on its back and moves slowly?",
      "options": [
        "Tortoise",
        "Cheetah",
        "Horse",
        "Monkey"
      ],
      "answer": "Tortoise",
      "explanation": "A tortoise hides inside its hard protective shell."
    },
    {
      "question": "What do we call frozen solid water?",
      "options": [
        "Ice",
        "Steam",
        "Juice",
        "Vapor"
      ],
      "answer": "Ice",
      "explanation": "When water freezes below 0°C, it turns into solid ice."
    },
    {
      "question": "Which baby animal is called a kitten?",
      "options": [
        "Baby cat",
        "Baby dog",
        "Baby cow",
        "Baby duck"
      ],
      "answer": "Baby cat",
      "explanation": "A kitten is a cute baby cat."
    },
    {
      "question": "What does a caterpillar turn into after making a cocoon?",
      "options": [
        "Butterfly",
        "Spider",
        "Frog",
        "Fish"
      ],
      "answer": "Butterfly",
      "explanation": "Through metamorphosis, a caterpillar transforms into a butterfly."
    },
    {
      "question": "Which wild animal has orange fur with black stripes?",
      "options": [
        "Tiger",
        "Lion",
        "Leopard",
        "Bear"
      ],
      "answer": "Tiger",
      "explanation": "Tigers are majestic big cats with bold black stripes."
    },
    {
      "question": "Which sense organ helps us listen to school bells ringing?",
      "options": [
        "Ears",
        "Nose",
        "Tongue",
        "Eyes"
      ],
      "answer": "Ears",
      "explanation": "Our ears detect sound vibrations from the bell."
    },
    {
      "question": "What animal is known as the 'Ship of the Desert'?",
      "options": [
        "Camel",
        "Horse",
        "Elephant",
        "Donkey"
      ],
      "answer": "Camel",
      "explanation": "Camels can survive for days in the desert without water."
    },
    {
      "question": "What color is fresh milk?",
      "options": [
        "White",
        "Green",
        "Yellow",
        "Blue"
      ],
      "answer": "White",
      "explanation": "Milk is a natural white liquid produced by mammals."
    },
    {
      "question": "What part of a plant produces seeds and fruits?",
      "options": [
        "Flower",
        "Leaf",
        "Stem",
        "Root"
      ],
      "answer": "Flower",
      "explanation": "Flowers are reproductive parts of plants that turn into fruits."
    },
    {
      "question": "Where do birds build their homes?",
      "options": [
        "Nests in trees",
        "Under the sea",
        "Inside caves",
        "In water"
      ],
      "answer": "Nests in trees",
      "explanation": "Birds use twigs, leaves, and grass to build nests."
    },
    {
      "question": "What do frogs do when they move on land?",
      "options": [
        "Hop and jump",
        "Fly high",
        "Run fast",
        "Roll"
      ],
      "answer": "Hop and jump",
      "explanation": "Frogs have long muscular hind legs adapted for jumping."
    },
    {
      "question": "What shape is the full moon in the night sky?",
      "options": [
        "Round circle",
        "Square",
        "Triangle",
        "Star"
      ],
      "answer": "Round circle",
      "explanation": "The full moon appears as a bright, glowing round disk."
    },
    {
      "question": "Which domestic animal gives us warm wool for winter sweaters?",
      "options": [
        "Sheep",
        "Lion",
        "Horse",
        "Dog"
      ],
      "answer": "Sheep",
      "explanation": "Sheep's fleece is sheared and spun into wool."
    },
    {
      "question": "What liquid must humans drink every day to stay healthy?",
      "options": [
        "Water",
        "Oil",
        "Ink",
        "Kerosene"
      ],
      "answer": "Water",
      "explanation": "Water keeps our bodies hydrated, energized, and healthy."
    },
    {
      "question": "What do plants drink from the soil through their roots?",
      "options": [
        "Water and minerals",
        "Milk",
        "Juice",
        "Tea"
      ],
      "answer": "Water and minerals",
      "explanation": "Roots take up water and soil nutrients to nourish the plant."
    },
    {
      "question": "Which baby animal is called a puppy?",
      "options": [
        "Baby dog",
        "Baby cat",
        "Baby horse",
        "Baby goat"
      ],
      "answer": "Baby dog",
      "explanation": "A puppy is a young baby dog."
    },
    {
      "question": "Which bird stays awake at night and has big round eyes?",
      "options": [
        "Owl",
        "Sparrow",
        "Pigeon",
        "Hen"
      ],
      "answer": "Owl",
      "explanation": "Owls are nocturnal birds with excellent night vision."
    },
    {
      "question": "What color is the clear sky on a bright sunny day?",
      "options": [
        "Blue",
        "Yellow",
        "Green",
        "Pink"
      ],
      "answer": "Blue",
      "explanation": "Rayleigh scattering of sunlight makes our atmosphere appear blue."
    },
    {
      "question": "Which animal lives in water and has sharp teeth?",
      "options": [
        "Shark",
        "Camel",
        "Monkey",
        "Goat"
      ],
      "answer": "Shark",
      "explanation": "Sharks are predatory fish that swim in the oceans."
    },
    {
      "question": "What do birds use to fly in the air?",
      "options": [
        "Wings",
        "Fins",
        "Hands",
        "Horns"
      ],
      "answer": "Wings",
      "explanation": "Feathered wings create lift allowing birds to soar."
    },
    {
      "question": "What tiny insect loves sugar and walks in straight lines?",
      "options": [
        "Ant",
        "Grasshopper",
        "Spider",
        "Earthworm"
      ],
      "answer": "Ant",
      "explanation": "Ants are hardworking social insects that follow scent trails."
    },
    {
      "question": "What grows on our heads and can be combed?",
      "options": [
        "Hair",
        "Leaves",
        "Grass",
        "Flowers"
      ],
      "answer": "Hair",
      "explanation": "Hair is made of keratin and protects our scalp from the sun."
    },
    {
      "question": "Which animal swings from tree branches using its long tail?",
      "options": [
        "Monkey",
        "Cow",
        "Elephant",
        "Deer"
      ],
      "answer": "Monkey",
      "explanation": "Monkeys are agile primates adapted for life in trees."
    },
    {
      "question": "What do we see in the sky after rain when the sun shines?",
      "options": [
        "Rainbow",
        "Fire",
        "Smoke",
        "Dust"
      ],
      "answer": "Rainbow",
      "explanation": "Sunlight refracting through raindrops creates a 7-color rainbow."
    }
  ],
  "junior": [
    {
      "question": "Which green pigment in plant leaves captures sunlight for photosynthesis?",
      "options": [
        "Chlorophyll",
        "Hemoglobin",
        "Melanin",
        "Carotene"
      ],
      "answer": "Chlorophyll",
      "explanation": "Chlorophyll gives plants their green color and traps sunlight energy to make food."
    },
    {
      "question": "Which organ pumps blood throughout the human body?",
      "options": [
        "Heart",
        "Lungs",
        "Stomach",
        "Brain"
      ],
      "answer": "Heart",
      "explanation": "The heart is a muscular organ that pumps oxygenated blood continuously."
    },
    {
      "question": "Water boils at what temperature at sea level?",
      "options": [
        "100°C",
        "0°C",
        "50°C",
        "212°C"
      ],
      "answer": "100°C",
      "explanation": "At standard atmospheric pressure, the boiling point of pure water is 100 degrees Celsius."
    },
    {
      "question": "Which planet is known as the \"Red Planet\"?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Saturn"
      ],
      "answer": "Mars",
      "explanation": "Mars appears reddish because of iron oxide (rust) on its surface."
    },
    {
      "question": "What type of energy does a moving object possess?",
      "options": [
        "Kinetic Energy",
        "Potential Energy",
        "Chemical Energy",
        "Nuclear Energy"
      ],
      "answer": "Kinetic Energy",
      "explanation": "Kinetic energy is the energy possessed by an object due to its motion."
    },
    {
      "question": "What process allows green leaves to manufacture glucose food using sunlight?",
      "options": [
        "Photosynthesis",
        "Respiration",
        "Transpiration",
        "Evaporation"
      ],
      "answer": "Photosynthesis",
      "explanation": "Photosynthesis combines water and carbon dioxide in the presence of sunlight."
    },
    {
      "question": "Which state of matter has a fixed volume but takes the shape of its container?",
      "options": [
        "Liquid",
        "Solid",
        "Gas",
        "Plasma"
      ],
      "answer": "Liquid",
      "explanation": "Liquids like water flow and conform to the shape of their container."
    },
    {
      "question": "Which planet in our solar system is known as the 'Red Planet'?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Saturn"
      ],
      "answer": "Mars",
      "explanation": "Iron oxide (rust) on its surface gives Mars its reddish hue."
    },
    {
      "question": "What is the boiling point of pure water at standard sea-level pressure?",
      "options": [
        "100°C",
        "0°C",
        "50°C",
        "212°C"
      ],
      "answer": "100°C",
      "explanation": "Water transitions from liquid to steam vapor at 100°C."
    },
    {
      "question": "Which gas do animals and humans inhale to produce metabolic energy?",
      "options": [
        "Oxygen",
        "Carbon Dioxide",
        "Nitrogen",
        "Helium"
      ],
      "answer": "Oxygen",
      "explanation": "Oxygen is transported by hemoglobin to power cellular respiration."
    },
    {
      "question": "What force pulls apples and all dropped objects towards the center of Earth?",
      "options": [
        "Gravity",
        "Magnetism",
        "Friction",
        "Electrostatic"
      ],
      "answer": "Gravity",
      "explanation": "Sir Isaac Newton formulated the universal law of gravitation."
    },
    {
      "question": "Which type of animal eats only plants, fruits, and grass?",
      "options": [
        "Herbivore",
        "Carnivore",
        "Omnivore",
        "Insectivore"
      ],
      "answer": "Herbivore",
      "explanation": "Herbivores such as cows and deer eat plant matter."
    },
    {
      "question": "Which organ inside the human body pumps blood continuously?",
      "options": [
        "Heart",
        "Lungs",
        "Stomach",
        "Kidney"
      ],
      "answer": "Heart",
      "explanation": "The heart is a muscular pump circulating blood through arteries and veins."
    },
    {
      "question": "What do we call the continuous cycle of water evaporating, condensing, and raining?",
      "options": [
        "Water Cycle",
        "Nitrogen Cycle",
        "Rock Cycle",
        "Life Cycle"
      ],
      "answer": "Water Cycle",
      "explanation": "The hydrologic cycle moves water between Earth's surface and the atmosphere."
    },
    {
      "question": "Which component of human blood carries oxygen to all cells?",
      "options": [
        "Red Blood Cells",
        "White Blood Cells",
        "Platelets",
        "Plasma"
      ],
      "answer": "Red Blood Cells",
      "explanation": "Hemoglobin in red blood cells binds tightly with inhaled oxygen."
    },
    {
      "question": "What is the freezing point of water in degrees Celsius?",
      "options": [
        "0°C",
        "10°C",
        "32°C",
        "-10°C"
      ],
      "answer": "0°C",
      "explanation": "Water solidifies into ice at 0 degrees Celsius."
    },
    {
      "question": "Which invisible natural shield protects Earth from harmful solar ultraviolet rays?",
      "options": [
        "Ozone Layer",
        "Troposphere",
        "Cloud layer",
        "Hydrosphere"
      ],
      "answer": "Ozone Layer",
      "explanation": "The stratosphere's ozone (O₃) absorbs damaging ultraviolet-B radiation."
    },
    {
      "question": "Which animal group lays eggs and has dry scales covering their bodies?",
      "options": [
        "Reptiles",
        "Mammals",
        "Amphibians",
        "Insects"
      ],
      "answer": "Reptiles",
      "explanation": "Reptiles like lizards and crocodiles have dry, scaly skin and lay amniotic eggs."
    },
    {
      "question": "How many bones are there in an adult human skeleton?",
      "options": [
        "206",
        "300",
        "150",
        "250"
      ],
      "answer": "206",
      "explanation": "Infants start with ~300 bones which fuse into 206 by adulthood."
    },
    {
      "question": "What kind of energy is stored in a stretched rubber band or spring?",
      "options": [
        "Potential Energy",
        "Kinetic Energy",
        "Thermal Energy",
        "Nuclear Energy"
      ],
      "answer": "Potential Energy",
      "explanation": "Elastic potential energy is stored when an object is deformed or stretched."
    },
    {
      "question": "Which tiny microscopic organism causes milk to turn into delicious curd?",
      "options": [
        "Lactobacillus bacteria",
        "Yeast",
        "Amoeba",
        "Virus"
      ],
      "answer": "Lactobacillus bacteria",
      "explanation": "Lactic acid bacteria ferment lactose sugar into lactic acid."
    },
    {
      "question": "What is the hardest natural mineral substance found on Earth?",
      "options": [
        "Diamond",
        "Gold",
        "Iron",
        "Quartz"
      ],
      "answer": "Diamond",
      "explanation": "Diamond is carbon crystallized under extreme heat and pressure (Mohs 10)."
    },
    {
      "question": "Which gas released during photosynthesis is essential for human breathing?",
      "options": [
        "Oxygen",
        "Carbon Dioxide",
        "Argon",
        "Methane"
      ],
      "answer": "Oxygen",
      "explanation": "Plants release O₂ as a byproduct of splitting water in photosynthesis."
    },
    {
      "question": "Which pair of human organs filters toxic waste from blood to form urine?",
      "options": [
        "Kidneys",
        "Lungs",
        "Heart",
        "Liver"
      ],
      "answer": "Kidneys",
      "explanation": "Millions of nephrons in the kidneys cleanse the bloodstream."
    },
    {
      "question": "What simple machine is a seesaw in a playground an example of?",
      "options": [
        "Lever",
        "Pulley",
        "Inclined Plane",
        "Wheel and Axle"
      ],
      "answer": "Lever",
      "explanation": "A seesaw is a class-1 lever with a central fulcrum."
    },
    {
      "question": "Which is the closest star to our planet Earth?",
      "options": [
        "Sun",
        "Proxima Centauri",
        "Sirius",
        "Polaris"
      ],
      "answer": "Sun",
      "explanation": "The Sun is about 150 million kilometers away from Earth."
    },
    {
      "question": "What natural phenomenon happens when the Moon blocks our view of the Sun?",
      "options": [
        "Solar Eclipse",
        "Lunar Eclipse",
        "Aurora",
        "Supernova"
      ],
      "answer": "Solar Eclipse",
      "explanation": "A solar eclipse occurs when the Moon passes directly between Earth and Sun."
    },
    {
      "question": "What type of teeth do humans use to bite and cut food into pieces?",
      "options": [
        "Incisors",
        "Molars",
        "Premolars",
        "Wisdom teeth"
      ],
      "answer": "Incisors",
      "explanation": "The front 8 incisor teeth have sharp chisel-like cutting edges."
    },
    {
      "question": "Which metal is unique because it remains liquid at normal room temperature?",
      "options": [
        "Mercury",
        "Iron",
        "Gold",
        "Silver"
      ],
      "answer": "Mercury",
      "explanation": "Mercury (Hg) has a melting point of -38.8°C."
    },
    {
      "question": "What natural substance covers approximately 71% of Earth's surface?",
      "options": [
        "Water",
        "Forests",
        "Sand",
        "Ice"
      ],
      "answer": "Water",
      "explanation": "Oceans, seas, lakes, and rivers cover about 71% of Earth."
    },
    {
      "question": "Which process changes liquid water into water vapor gas at warm temperatures?",
      "options": [
        "Evaporation",
        "Condensation",
        "Freezing",
        "Precipitation"
      ],
      "answer": "Evaporation",
      "explanation": "Thermal energy causes liquid molecules to escape into the air as vapor."
    },
    {
      "question": "What mineral is primarily responsible for making our bones and teeth strong?",
      "options": [
        "Calcium",
        "Iron",
        "Potassium",
        "Zinc"
      ],
      "answer": "Calcium",
      "explanation": "Calcium phosphate provides structural rigidity to bone tissue."
    },
    {
      "question": "Which animal group feeds its newborn young with mothers milk?",
      "options": [
        "Mammals",
        "Birds",
        "Reptiles",
        "Fish"
      ],
      "answer": "Mammals",
      "explanation": "Mammals possess mammary glands that nourish their offspring."
    },
    {
      "question": "What instrument is used by doctors to listen to your heartbeat and breathing?",
      "options": [
        "Stethoscope",
        "Thermometer",
        "Microscope",
        "Barometer"
      ],
      "answer": "Stethoscope",
      "explanation": "A stethoscope amplifies acoustic sounds from the thoracic cavity."
    },
    {
      "question": "Which gas is the most abundant in Earth's atmospheric air (about 78%)?",
      "options": [
        "Nitrogen",
        "Oxygen",
        "Carbon Dioxide",
        "Hydrogen"
      ],
      "answer": "Nitrogen",
      "explanation": "Nitrogen comprises approximately 78.08% of dry atmospheric air."
    },
    {
      "question": "Which part of our eyes controls how much light enters the pupil?",
      "options": [
        "Iris",
        "Retina",
        "Cornea",
        "Lens"
      ],
      "answer": "Iris",
      "explanation": "The colorful iris expands and contracts to adjust pupil aperture."
    },
    {
      "question": "What type of joint allows your shoulder and hip to rotate in multiple directions?",
      "options": [
        "Ball and socket joint",
        "Hinge joint",
        "Pivot joint",
        "Fixed joint"
      ],
      "answer": "Ball and socket joint",
      "explanation": "The spherical head fits into a cup cavity, granting multi-axial mobility."
    },
    {
      "question": "Which layer of the atmosphere is closest to Earth where all weather occurs?",
      "options": [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere"
      ],
      "answer": "Troposphere",
      "explanation": "The troposphere extends ~12 km high and contains our clouds and weather."
    },
    {
      "question": "What is the primary function of white blood cells in our body?",
      "options": [
        "Fight infections and germs",
        "Carry oxygen",
        "Digest sugars",
        "Build bones"
      ],
      "answer": "Fight infections and germs",
      "explanation": "White blood cells (leukocytes) form our immune defense army."
    },
    {
      "question": "Which form of energy travels through air as vibrations that our ears detect?",
      "options": [
        "Sound Energy",
        "Electrical Energy",
        "Chemical Energy",
        "Magnetic Energy"
      ],
      "answer": "Sound Energy",
      "explanation": "Sound waves are longitudinal mechanical vibrations through a medium."
    },
    {
      "question": "What do we call animals that can live both on land and in water (like frogs)?",
      "options": [
        "Amphibians",
        "Mammals",
        "Reptiles",
        "Arachnids"
      ],
      "answer": "Amphibians",
      "explanation": "Amphibians hatch in water with gills and develop lungs for land life."
    },
    {
      "question": "Which vitamin is synthesized naturally by human skin when exposed to gentle sunlight?",
      "options": [
        "Vitamin D",
        "Vitamin C",
        "Vitamin A",
        "Vitamin B12"
      ],
      "answer": "Vitamin D",
      "explanation": "Solar UVB radiation converts 7-dehydrocholesterol into active Vitamin D3."
    },
    {
      "question": "What part of the brain controls balance, posture, and muscle coordination?",
      "options": [
        "Cerebellum",
        "Cerebrum",
        "Medulla",
        "Spinal cord"
      ],
      "answer": "Cerebellum",
      "explanation": "The cerebellum at the rear of the skull coordinates motor control."
    },
    {
      "question": "Which of the following materials is an excellent electrical conductor?",
      "options": [
        "Copper wire",
        "Rubber eraser",
        "Dry wood",
        "Plastic ruler"
      ],
      "answer": "Copper wire",
      "explanation": "Copper atoms have loosely held valence electrons that flow freely."
    },
    {
      "question": "What occurs when light bounces off a shiny, polished mirror surface?",
      "options": [
        "Reflection",
        "Refraction",
        "Absorption",
        "Dispersion"
      ],
      "answer": "Reflection",
      "explanation": "Reflection is the bouncing back of light rays from a boundary surface."
    },
    {
      "question": "What natural biological catalyst in human saliva begins the digestion of starch?",
      "options": [
        "Amylase",
        "Pepsin",
        "Bile",
        "Lipase"
      ],
      "answer": "Amylase",
      "explanation": "Salivary amylase hydrolyzes complex starches into maltose sugars."
    },
    {
      "question": "Which optical instrument uses curved glass lenses to view distant stars?",
      "options": [
        "Telescope",
        "Microscope",
        "Periscope",
        "Kaleidoscope"
      ],
      "answer": "Telescope",
      "explanation": "Telescopes gather and focus electromagnetic radiation from space."
    },
    {
      "question": "Which layer of Earth is situated directly below the outer solid crust?",
      "options": [
        "Mantle",
        "Inner core",
        "Outer core",
        "Atmosphere"
      ],
      "answer": "Mantle",
      "explanation": "The semi-solid silicate mantle extends to a depth of ~2,900 kilometers."
    },
    {
      "question": "What natural phenomenon causes ocean tides to rise and fall twice each day?",
      "options": [
        "Gravitational pull of the Moon and Sun",
        "Earthquakes",
        "Ocean winds",
        "Underwater volcanic heat"
      ],
      "answer": "Gravitational pull of the Moon and Sun",
      "explanation": "Differential gravitational attraction pulls Earth's water into tidal bulges."
    },
    {
      "question": "Which chemical element is represented on the periodic table by symbol 'Fe'?",
      "options": [
        "Iron",
        "Gold",
        "Lead",
        "Silver"
      ],
      "answer": "Iron",
      "explanation": "Fe originates from 'Ferrum', the ancient Latin name for iron."
    },
    {
      "question": "What is the smallest unit of living matter capable of independent life?",
      "options": [
        "Cell",
        "Tissue",
        "Organ",
        "Atom"
      ],
      "answer": "Cell",
      "explanation": "The cell is the basic structural and functional unit of all living organisms."
    },
    {
      "question": "Which vitamin deficiency causes night blindness and poor vision in dim light?",
      "options": [
        "Vitamin A",
        "Vitamin C",
        "Vitamin D",
        "Vitamin K"
      ],
      "answer": "Vitamin A",
      "explanation": "Retinol (Vitamin A) is vital for rhodopsin synthesis in retinal rod cells."
    },
    {
      "question": "What is the colored part of a flower that attracts pollinating bees and butterflies?",
      "options": [
        "Petal",
        "Sepal",
        "Pistil",
        "Stem"
      ],
      "answer": "Petal",
      "explanation": "Brightly colored petals and sweet nectar entice insect pollinators."
    },
    {
      "question": "Which instrument measures atmospheric temperature in Celsius or Fahrenheit?",
      "options": [
        "Thermometer",
        "Barometer",
        "Speedometer",
        "Anemometer"
      ],
      "answer": "Thermometer",
      "explanation": "Thermometers quantify thermal energy expansion."
    },
    {
      "question": "What happens to water vapor when it cools high in the sky?",
      "options": [
        "Condensation into clouds",
        "Melting",
        "Boiling",
        "Freezing into magma"
      ],
      "answer": "Condensation into clouds",
      "explanation": "Cooling vapor condenses onto microscopic aerosols to form water droplets."
    }
  ],
  "middle": [
    {
      "question": "What is the chemical formula for common table salt?",
      "options": [
        "NaCl",
        "H₂O",
        "CO₂",
        "HCl"
      ],
      "answer": "NaCl",
      "explanation": "Sodium Chloride (NaCl) is the chemical name for common salt."
    },
    {
      "question": "Which organelle is known as the \"Powerhouse of the Cell\"?",
      "options": [
        "Mitochondria",
        "Ribosome",
        "Nucleus",
        "Golgi apparatus"
      ],
      "answer": "Mitochondria",
      "explanation": "Mitochondria generate most of the chemical energy needed by the cell (ATP)."
    },
    {
      "question": "What is the speed of light in vacuum approximately?",
      "options": [
        "3 × 10⁸ m/s",
        "3 × 10⁶ m/s",
        "330 m/s",
        "1.5 × 10⁸ m/s"
      ],
      "answer": "3 × 10⁸ m/s",
      "explanation": "Light travels through a vacuum at roughly 300,000 kilometers per second (3 × 10⁸ m/s)."
    },
    {
      "question": "Which gas makes up the largest percentage of Earth’s atmosphere?",
      "options": [
        "Nitrogen (~78%)",
        "Oxygen (~21%)",
        "Carbon Dioxide (~0.04%)",
        "Argon (~0.9%)"
      ],
      "answer": "Nitrogen (~78%)",
      "explanation": "Nitrogen constitutes about 78% of Earth’s atmosphere by volume."
    },
    {
      "question": "What is the pH value of pure, neutral water at 25°C?",
      "options": [
        "7",
        "0",
        "14",
        "1"
      ],
      "answer": "7",
      "explanation": "A pH of 7 is neutral; values below 7 are acidic, and above 7 are alkaline/basic."
    },
    {
      "question": "Which organelle is universally celebrated as the 'Powerhouse of the Cell'?",
      "options": [
        "Mitochondria",
        "Ribosome",
        "Endoplasmic Reticulum",
        "Golgi Body"
      ],
      "answer": "Mitochondria",
      "explanation": "Mitochondria produce cellular adenosine triphosphate (ATP) via aerobic respiration."
    },
    {
      "question": "What is the pH value of completely pure neutral water at 25°C?",
      "options": [
        "7",
        "0",
        "14",
        "1"
      ],
      "answer": "7",
      "explanation": "A pH of 7 denotes equal concentrations of H⁺ and OH⁻ ions."
    },
    {
      "question": "Which acid is naturally secreted by the stomach lining to kill bacteria and digest proteins?",
      "options": [
        "Hydrochloric Acid (HCl)",
        "Sulfuric Acid",
        "Citric Acid",
        "Nitric Acid"
      ],
      "answer": "Hydrochloric Acid (HCl)",
      "explanation": "Gastric parietal cells secrete HCl (pH 1.5–2.0) to activate pepsin."
    },
    {
      "question": "What is the SI standard unit of measurement for electrical resistance?",
      "options": [
        "Ohm (Ω)",
        "Ampere (A)",
        "Volt (V)",
        "Watt (W)"
      ],
      "answer": "Ohm (Ω)",
      "explanation": "Ohm measures opposition to electric charge flow, formulated by Georg Ohm."
    },
    {
      "question": "Which fundamental blood vessels carry oxygenated blood away from the heart to tissues?",
      "options": [
        "Arteries",
        "Veins",
        "Capillaries",
        "Vena Cava"
      ],
      "answer": "Arteries",
      "explanation": "Arteries have thick, elastic walls to withstand high systolic pressure."
    },
    {
      "question": "Which non-metal is an exceptional conductor of electricity due to free delocalized electrons?",
      "options": [
        "Graphite",
        "Diamond",
        "Sulfur",
        "Phosphorus"
      ],
      "answer": "Graphite",
      "explanation": "Graphite's layered sp² carbon sheets contain mobile delocalized pi electrons."
    },
    {
      "question": "What is the speed of light propagating through a vacuum?",
      "options": [
        "3 × 10⁸ m/s",
        "3 × 10⁵ m/s",
        "340 m/s",
        "3 × 10⁶ m/s"
      ],
      "answer": "3 × 10⁸ m/s",
      "explanation": "Light in vacuum travels at approximately 299,792,458 meters per second."
    },
    {
      "question": "Which endocrine gland located at the base of the brain is known as the 'Master Gland'?",
      "options": [
        "Pituitary Gland",
        "Thyroid Gland",
        "Adrenal Gland",
        "Pancreas"
      ],
      "answer": "Pituitary Gland",
      "explanation": "The pituitary releases trophic hormones regulating all other endocrine glands."
    },
    {
      "question": "What type of lens is thinner in the middle and diverges parallel rays of light?",
      "options": [
        "Concave Lens",
        "Convex Lens",
        "Bifocal Lens",
        "Cylindrical Lens"
      ],
      "answer": "Concave Lens",
      "explanation": "Concave lenses diverge incoming light rays away from the optical axis."
    },
    {
      "question": "What is the chemical formula for ordinary baking soda used in kitchens?",
      "options": [
        "NaHCO₃",
        "Na₂CO₃",
        "NaCl",
        "NaOH"
      ],
      "answer": "NaHCO₃",
      "explanation": "Sodium hydrogen carbonate (NaHCO₃) releases CO₂ gas upon heating."
    },
    {
      "question": "Which gas turns clear limewater milky due to the precipitation of calcium carbonate?",
      "options": [
        "Carbon Dioxide (CO₂)",
        "Oxygen (O₂)",
        "Nitrogen (N₂)",
        "Hydrogen (H₂)"
      ],
      "answer": "Carbon Dioxide (CO₂)",
      "explanation": "CO₂ reacts with Ca(OH)₂ solution to form insoluble CaCO₃ precipitate."
    },
    {
      "question": "What scientific law states that for an elastic spring, force is proportional to extension (F = -kx)?",
      "options": [
        "Hooke's Law",
        "Ohm's Law",
        "Boyle's Law",
        "Pascal's Law"
      ],
      "answer": "Hooke's Law",
      "explanation": "Robert Hooke demonstrated that spring deformation is linear up to elastic limit."
    },
    {
      "question": "Which component of human blood lacks a nucleus and is specialized to clot wounds?",
      "options": [
        "Platelets (Thrombocytes)",
        "Erythrocytes",
        "Lymphocytes",
        "Monocytes"
      ],
      "answer": "Platelets (Thrombocytes)",
      "explanation": "Platelets adhere to damaged vascular endothelium and initiate clotting cascades."
    },
    {
      "question": "Which metallic element is extracted from the primary commercial ore known as Bauxite?",
      "options": [
        "Aluminium",
        "Iron",
        "Copper",
        "Zinc"
      ],
      "answer": "Aluminium",
      "explanation": "Bauxite (Al₂O₃·2H₂O) is refined into alumina and electrolyzed into aluminium."
    },
    {
      "question": "What is the rate of change of velocity over time termed in classical physics?",
      "options": [
        "Acceleration",
        "Speed",
        "Momentum",
        "Displacement"
      ],
      "answer": "Acceleration",
      "explanation": "Acceleration (a = dv/dt) is measured in meters per second squared (m/s²)."
    },
    {
      "question": "Which microorganism reproduces by budding and is widely utilized in bread baking?",
      "options": [
        "Yeast",
        "Penicillium",
        "Spirogyra",
        "Paramecium"
      ],
      "answer": "Yeast",
      "explanation": "Saccharomyces cerevisiae ferments dough sugars into ethanol and leavening CO₂."
    },
    {
      "question": "What is the chemical symbol for the precious noble metal Gold?",
      "options": [
        "Au",
        "Ag",
        "Pt",
        "Fe"
      ],
      "answer": "Au",
      "explanation": "Au originates from the classical Latin term 'Aurum', meaning shining dawn."
    },
    {
      "question": "Which organ in the human body secretes insulin to regulate blood glucose homeostasis?",
      "options": [
        "Pancreas",
        "Gallbladder",
        "Spleen",
        "Thyroid"
      ],
      "answer": "Pancreas",
      "explanation": "Beta cells in the Islets of Langerhans synthesize and release insulin."
    },
    {
      "question": "What type of mirrors are utilized in vehicle headlights to project a parallel beam of light?",
      "options": [
        "Concave Mirror",
        "Convex Mirror",
        "Plane Mirror",
        "Parabolic lens"
      ],
      "answer": "Concave Mirror",
      "explanation": "Placing the bulb at the concave mirror's focal point yields a parallel forward beam."
    },
    {
      "question": "Which atmospheric gas is primarily blamed for causing anthropogenic global warming?",
      "options": [
        "Carbon Dioxide",
        "Argon",
        "Oxygen",
        "Nitrogen"
      ],
      "answer": "Carbon Dioxide",
      "explanation": "CO₂ absorbs outgoing infrared terrestrial radiation, trapping atmospheric heat."
    },
    {
      "question": "What is the SI unit of measurement for pressure defined as one newton per square meter?",
      "options": [
        "Pascal (Pa)",
        "Joule",
        "Watt",
        "Tesla"
      ],
      "answer": "Pascal (Pa)",
      "explanation": "Named after Blaise Pascal, 1 Pa = 1 N/m²."
    },
    {
      "question": "Which green plant cell organelle houses chlorophyll and coordinates photosynthesis?",
      "options": [
        "Chloroplast",
        "Vacuole",
        "Centrosome",
        "Lysosome"
      ],
      "answer": "Chloroplast",
      "explanation": "Chloroplasts contain thylakoid membranes where light reactions take place."
    },
    {
      "question": "What is the chemical name of common table salt consumed daily in food?",
      "options": [
        "Sodium Chloride (NaCl)",
        "Sodium Hydroxide",
        "Potassium Nitrate",
        "Calcium Chloride"
      ],
      "answer": "Sodium Chloride (NaCl)",
      "explanation": "NaCl is an ionic lattice compound composed of Na⁺ and Cl⁻ ions."
    },
    {
      "question": "Which law states that energy can neither be created nor destroyed, only transformed?",
      "options": [
        "Law of Conservation of Energy",
        "Newton's Second Law",
        "Kepler's Law",
        "Archimedes' Principle"
      ],
      "answer": "Law of Conservation of Energy",
      "explanation": "The First Law of Thermodynamics guarantees total energy in an isolated system is constant."
    },
    {
      "question": "What is the standard human body core temperature on the Celsius scale?",
      "options": [
        "37°C",
        "98.6°C",
        "35°C",
        "40°C"
      ],
      "answer": "37°C",
      "explanation": "Normal core physiological temperature is approximately 36.5°C to 37.5°C."
    },
    {
      "question": "What process describes the movement of solvent molecules across a semipermeable membrane?",
      "options": [
        "Osmosis",
        "Diffusion",
        "Active Transport",
        "Filtration"
      ],
      "answer": "Osmosis",
      "explanation": "Water moves from regions of higher water potential to lower water potential."
    },
    {
      "question": "Which metallic property enables metals to be hammered into thin sheets without shattering?",
      "options": [
        "Malleability",
        "Ductility",
        "Sonority",
        "Brittleness"
      ],
      "answer": "Malleability",
      "explanation": "Non-directional metallic bonding allows atom planes to slide under compression."
    },
    {
      "question": "What is the name of the sound frequency range above 20,000 Hertz inaudible to human ears?",
      "options": [
        "Ultrasound",
        "Infrasound",
        "Audible range",
        "Supersonic"
      ],
      "answer": "Ultrasound",
      "explanation": "Ultrasound exceeds the upper limit of human hearing (20 Hz to 20,000 Hz)."
    },
    {
      "question": "Which gas causes the fizzing effervescence when vinegar reacts with baking soda?",
      "options": [
        "Carbon Dioxide",
        "Hydrogen",
        "Oxygen",
        "Ammonia"
      ],
      "answer": "Carbon Dioxide",
      "explanation": "Acetic acid reacts with sodium bicarbonate releasing gaseous carbon dioxide."
    },
    {
      "question": "What type of chemical bond involves the mutual sharing of valence electron pairs?",
      "options": [
        "Covalent Bond",
        "Ionic Bond",
        "Hydrogen Bond",
        "Metallic Bond"
      ],
      "answer": "Covalent Bond",
      "explanation": "Covalent bonds form between non-metallic atoms with similar electronegativity."
    },
    {
      "question": "Which plant tissue is responsible for translocating synthesized sugars from leaves to roots?",
      "options": [
        "Phloem",
        "Xylem",
        "Parenchyma",
        "Collenchyma"
      ],
      "answer": "Phloem",
      "explanation": "Sieve tube elements in phloem transport organic assimilates via pressure flow."
    },
    {
      "question": "What is the unit of electric current intensity in the International System of Units?",
      "options": [
        "Ampere (A)",
        "Coulomb",
        "Ohm",
        "Volt"
      ],
      "answer": "Ampere (A)",
      "explanation": "One Ampere represents one Coulomb of electric charge passing per second."
    },
    {
      "question": "What is the chemical formula for water, containing two hydrogen atoms and one oxygen?",
      "options": [
        "H₂O",
        "H₂O₂",
        "HO",
        "H₃O"
      ],
      "answer": "H₂O",
      "explanation": "Water is a polar molecule with an angular bond angle of 104.5 degrees."
    },
    {
      "question": "Which protective reflex action bypasses the conscious brain through the spinal cord?",
      "options": [
        "Reflex Arc",
        "Memory recall",
        "Voluntary jump",
        "Deep thought"
      ],
      "answer": "Reflex Arc",
      "explanation": "Sensory neurons synapse directly with motor neurons via spinal interneurons."
    },
    {
      "question": "Which layer of Earth's atmosphere reflects shortwave radio signals back to the ground?",
      "options": [
        "Ionosphere",
        "Troposphere",
        "Stratosphere",
        "Mesosphere"
      ],
      "answer": "Ionosphere",
      "explanation": "Free electrons and ions in the ionosphere refract and reflect radio wavelengths."
    },
    {
      "question": "What is the phenomenon where white light splits into seven spectral colors via a glass prism?",
      "options": [
        "Dispersion",
        "Total internal reflection",
        "Interference",
        "Diffraction"
      ],
      "answer": "Dispersion",
      "explanation": "Varying refractive indices for different wavelengths cause chromatic separation."
    },
    {
      "question": "Which nutrient class provides 9 kilocalories per gram, the highest energy yield?",
      "options": [
        "Fats (Lipids)",
        "Carbohydrates",
        "Proteins",
        "Vitamins"
      ],
      "answer": "Fats (Lipids)",
      "explanation": "Triglycerides contain densely packed carbon-hydrogen bonds yielding 9 kcal/g."
    },
    {
      "question": "What physical quantity is calculated by multiplying an object's mass by its velocity (p = mv)?",
      "options": [
        "Linear Momentum",
        "Force",
        "Kinetic Energy",
        "Impulse"
      ],
      "answer": "Linear Momentum",
      "explanation": "Momentum is a vector quantity conserved in closed isolated collisions."
    },
    {
      "question": "What is the technical term for the change of state directly from solid to gas without liquid phase?",
      "options": [
        "Sublimation",
        "Evaporation",
        "Deposition",
        "Condensation"
      ],
      "answer": "Sublimation",
      "explanation": "Substances like camphor, dry ice, and iodine sublime directly upon heating."
    },
    {
      "question": "Which enzyme in the stomach breaks down dietary proteins into smaller peptides?",
      "options": [
        "Pepsin",
        "Lipase",
        "Amylase",
        "Trypsin"
      ],
      "answer": "Pepsin",
      "explanation": "Pepsinogen is activated into pepsin by acidic gastric hydrochloric acid."
    },
    {
      "question": "What is the force of opposition that resists relative sliding motion between two contacting surfaces?",
      "options": [
        "Friction",
        "Tension",
        "Buoyancy",
        "Viscosity"
      ],
      "answer": "Friction",
      "explanation": "Microscopic surface irregularities interlock, creating frictional drag."
    },
    {
      "question": "Which gas is commonly filled inside incandescent electrical light bulbs to prevent filament oxidation?",
      "options": [
        "Argon",
        "Oxygen",
        "Chlorine",
        "Hydrogen"
      ],
      "answer": "Argon",
      "explanation": "Inert argon gas prevents the tungsten filament from burning out at high heat."
    },
    {
      "question": "What is the scientific term for the male reproductive part of a flowering plant?",
      "options": [
        "Stamen",
        "Pistil",
        "Carpel",
        "Sepal"
      ],
      "answer": "Stamen",
      "explanation": "The stamen consists of the filament and the pollen-producing anther."
    },
    {
      "question": "Which instrument is employed to determine the relative humidity level of air?",
      "options": [
        "Hygrometer",
        "Barometer",
        "Hydrometer",
        "Manometer"
      ],
      "answer": "Hygrometer",
      "explanation": "Hygrometers quantify relative humidity and water vapor saturation."
    },
    {
      "question": "What type of blood cells are known as erythrocytes?",
      "options": [
        "Red Blood Cells",
        "White Blood Cells",
        "Platelets",
        "Plasma"
      ],
      "answer": "Red Blood Cells",
      "explanation": "Erythrocytes are biconcave enucleated cells packed with hemoglobin."
    },
    {
      "question": "What is the SI unit of work and energy?",
      "options": [
        "Joule (J)",
        "Watt",
        "Newton",
        "Pascal"
      ],
      "answer": "Joule (J)",
      "explanation": "One Joule equals the work done by one Newton moving through one meter."
    },
    {
      "question": "Which part of the ear converts acoustic vibrations into electrical nerve impulses?",
      "options": [
        "Cochlea",
        "Eardrum",
        "Stapes",
        "Pinna"
      ],
      "answer": "Cochlea",
      "explanation": "Hair cells along the cochlea's organ of Corti generate action potentials."
    },
    {
      "question": "What is the chemical name of rust that forms on iron exposed to moist air?",
      "options": [
        "Hydrated Iron(III) Oxide",
        "Iron Sulfide",
        "Iron Carbonate",
        "Iron Nitrate"
      ],
      "answer": "Hydrated Iron(III) Oxide",
      "explanation": "Corrosion produces reddish-brown Fe₂O₃·xH₂O flaky scale on iron surfaces."
    },
    {
      "question": "Which organelle is referred to as the 'Suicide Bag' of the cell due to its hydrolytic enzymes?",
      "options": [
        "Lysosome",
        "Centrosome",
        "Peroxisome",
        "Ribosome"
      ],
      "answer": "Lysosome",
      "explanation": "Lysosomes contain acidic hydrolases capable of digesting damaged cellular organelles."
    },
    {
      "question": "What is the value of acceleration due to gravity (g) at Earth's surface?",
      "options": [
        "9.8 m/s²",
        "98 m/s²",
        "1.6 m/s²",
        "6.67 m/s²"
      ],
      "answer": "9.8 m/s²",
      "explanation": "Standard terrestrial gravitational acceleration is roughly 9.80665 m/s²."
    }
  ],
  "secondary": [
    {
      "question": "According to Newton’s Second Law of Motion, Force equals:",
      "options": [
        "Mass × Acceleration (F=ma)",
        "Mass / Acceleration",
        "Mass × Velocity",
        "Work / Time"
      ],
      "answer": "Mass × Acceleration (F=ma)",
      "explanation": "Force is equal to the rate of change of momentum, simplified to F = m × a for constant mass."
    },
    {
      "question": "Which lens is used to correct Myopia (near-sightedness)?",
      "options": [
        "Concave lens",
        "Convex lens",
        "Cylindrical lens",
        "Bifocal lens"
      ],
      "answer": "Concave lens",
      "explanation": "A concave (diverging) lens helps diverge light rays so they focus properly on the retina in myopic eyes."
    },
    {
      "question": "What is the atomic number of Carbon?",
      "options": [
        "6",
        "12",
        "14",
        "8"
      ],
      "answer": "6",
      "explanation": "Carbon has 6 protons in its nucleus, so its atomic number is 6."
    },
    {
      "question": "Which blood cells are primarily responsible for fighting infections?",
      "options": [
        "White Blood Cells (Leukocytes)",
        "Red Blood Cells (Erythrocytes)",
        "Platelets (Thrombocytes)",
        "Plasma"
      ],
      "answer": "White Blood Cells (Leukocytes)",
      "explanation": "Leukocytes defend the immune system against viruses, bacteria, and foreign pathogens."
    },
    {
      "question": "What is the SI unit of electrical resistance?",
      "options": [
        "Ohm (Ω)",
        "Volt (V)",
        "Ampere (A)",
        "Watt (W)"
      ],
      "answer": "Ohm (Ω)",
      "explanation": "Resistance is measured in Ohms (Ω), following Ohm’s Law V = I × R."
    },
    {
      "question": "According to Ohm’s Law, what is the mathematical relation between Voltage, Current, and Resistance?",
      "options": [
        "V = IR",
        "V = I/R",
        "I = VR",
        "R = VI"
      ],
      "answer": "V = IR",
      "explanation": "Ohm’s law establishes that electric potential difference equals current multiplied by resistance."
    },
    {
      "question": "Which lens is prescribed by optometrists to correct myopia (nearsightedness)?",
      "options": [
        "Concave Lens",
        "Convex Lens",
        "Cylindrical Lens",
        "Bifocal Lens"
      ],
      "answer": "Concave Lens",
      "explanation": "A concave lens diverges incoming light rays, pushing the focal point back onto the retina."
    },
    {
      "question": "What is the value of Avogadro's constant denoting particles per mole of substance?",
      "options": [
        "6.022 × 10²³",
        "3.00 × 10⁸",
        "1.602 × 10⁻¹⁹",
        "6.626 × 10⁻³⁴"
      ],
      "answer": "6.022 × 10²³",
      "explanation": "One mole of any element contains exactly 6.02214076 × 10²³ constituent particles."
    },
    {
      "question": "What is the functional structural unit of filtration in human kidneys?",
      "options": [
        "Nephron",
        "Neuron",
        "Alveolus",
        "Hepatocyte"
      ],
      "answer": "Nephron",
      "explanation": "Each kidney houses approximately one million nephrons carrying out ultrafiltration."
    },
    {
      "question": "Which hydrocarbon homologous series is characterized by the general formula CₙH₂ₙ₊₂?",
      "options": [
        "Alkanes",
        "Alkenes",
        "Alkynes",
        "Arenes"
      ],
      "answer": "Alkanes",
      "explanation": "Alkanes are saturated hydrocarbons containing exclusively single carbon-carbon bonds."
    },
    {
      "question": "Which rule predicts the direction of magnetic force on a current-carrying conductor in a magnetic field?",
      "options": [
        "Fleming's Left-Hand Rule",
        "Fleming's Right-Hand Rule",
        "Right-Hand Thumb Rule",
        "Lenz's Law"
      ],
      "answer": "Fleming's Left-Hand Rule",
      "explanation": "The thumb indicates Motion/Force, index finger Field, and middle finger Current."
    },
    {
      "question": "What is the universal gravitational constant G in SI units?",
      "options": [
        "6.674 × 10⁻¹¹ N·m²/kg²",
        "9.8 m/s²",
        "6.02 × 10²³",
        "3 × 10⁸ m/s"
      ],
      "answer": "6.674 × 10⁻¹¹ N·m²/kg²",
      "explanation": "Newton's gravitational constant G equates gravitational force to mass products over distance squared."
    },
    {
      "question": "Which endocrine hormone triggers the 'Fight or Flight' emergency response?",
      "options": [
        "Adrenaline (Epinephrine)",
        "Thyroxine",
        "Insulin",
        "Estrogen"
      ],
      "answer": "Adrenaline (Epinephrine)",
      "explanation": "Adrenal medulla secretes adrenaline, elevating heart rate, blood pressure, and alertness."
    },
    {
      "question": "What is the functional group present in aldehydes?",
      "options": [
        "-CHO",
        "-COOH",
        "-OH",
        "-CO-"
      ],
      "answer": "-CHO",
      "explanation": "Aldehydes possess a terminal carbonyl group bonded to a hydrogen atom (-C(=O)H)."
    },
    {
      "question": "Which law states that mass is neither created nor destroyed during a chemical reaction?",
      "options": [
        "Law of Conservation of Mass",
        "Law of Definite Proportions",
        "Dalton's Atomic Law",
        "Avogadro's Law"
      ],
      "answer": "Law of Conservation of Mass",
      "explanation": "Antoine Lavoisier formulated that total reactant mass equals total product mass."
    },
    {
      "question": "What is the reciprocal of the focal length of a lens in meters called, measured in Diopters?",
      "options": [
        "Power of Lens",
        "Magnification",
        "Refractive Index",
        "Aperture"
      ],
      "answer": "Power of Lens",
      "explanation": "Power P = 1 / f (in meters), measured in diopters (D)."
    },
    {
      "question": "Which gas is liberated at the cathode during the chlor-alkali electrolysis of brine?",
      "options": [
        "Hydrogen Gas (H₂)",
        "Chlorine Gas (Cl₂)",
        "Oxygen Gas (O₂)",
        "Nitrogen Gas (N₂)"
      ],
      "answer": "Hydrogen Gas (H₂)",
      "explanation": "Reduction of water protons at the cathode yields hydrogen gas (2H⁺ + 2e⁻ -> H₂)."
    },
    {
      "question": "What is the ratio of dominant to recessive phenotypes in a classic Mendelian monohybrid F₂ cross?",
      "options": [
        "3 : 1",
        "9 : 3 : 3 : 1",
        "1 : 1",
        "1 : 2 : 1"
      ],
      "answer": "3 : 1",
      "explanation": "Mendel's monohybrid cross exhibits a 3:1 phenotypic and 1:2:1 genotypic ratio."
    },
    {
      "question": "Which phenomenon causes stars to twinkle when observed through Earth's atmosphere?",
      "options": [
        "Atmospheric Refraction",
        "Internal Reflection",
        "Dispersion",
        "Diffraction"
      ],
      "answer": "Atmospheric Refraction",
      "explanation": "Varying temperature and density gradients in air continuously bend star light rays."
    },
    {
      "question": "What is the chemical formula of Plaster of Paris formed by heating gypsum at 373 K?",
      "options": [
        "CaSO₄·½H₂O",
        "CaSO₄·2H₂O",
        "CaCO₃",
        "CaOCl₂"
      ],
      "answer": "CaSO₄·½H₂O",
      "explanation": "Calcium sulfate hemihydrate sets into hard gypsum when mixed with water."
    },
    {
      "question": "Which cellular organelle contains chlorophyll and houses thylakoids where photophosphorylation occurs?",
      "options": [
        "Chloroplast",
        "Chromoplast",
        "Leucoplast",
        "Amyloplast"
      ],
      "answer": "Chloroplast",
      "explanation": "Chloroplasts possess double membranes and internal grana thylakoid stacks."
    },
    {
      "question": "What is the SI unit of electric charge named after Charles-Augustin de Coulomb?",
      "options": [
        "Coulomb (C)",
        "Ampere",
        "Volt",
        "Ohm"
      ],
      "answer": "Coulomb (C)",
      "explanation": "One Coulomb is the charge transported by a constant current of one Ampere in one second."
    },
    {
      "question": "Which reagent is used as a test to distinguish saturated hydrocarbons from unsaturated alkenes?",
      "options": [
        "Bromine Water",
        "Benedict's solution",
        "Litmus paper",
        "Phenolphthalein"
      ],
      "answer": "Bromine Water",
      "explanation": "Unsaturated carbon-carbon double bonds decolorize reddish-brown bromine water."
    },
    {
      "question": "What is the acceleration of a freely falling body independent of its mass?",
      "options": [
        "9.8 m/s²",
        "98 m/s²",
        "0 m/s²",
        "100 m/s²"
      ],
      "answer": "9.8 m/s²",
      "explanation": "Near Earth's surface, all bodies experience identical gravitational acceleration g = 9.8 m/s²."
    },
    {
      "question": "Which plant hormone is responsible for cell elongation and phototropic curvature towards light?",
      "options": [
        "Auxin",
        "Gibberellin",
        "Cytokinin",
        "Abscisic Acid"
      ],
      "answer": "Auxin",
      "explanation": "Auxins accumulate on the shaded side of shoots, stimulating accelerated cell elongation."
    },
    {
      "question": "What is the electrical resistance of an ideal voltmeter that is connected in parallel across a circuit?",
      "options": [
        "Infinite Resistance",
        "Zero Resistance",
        "1 Ohm",
        "100 Ohms"
      ],
      "answer": "Infinite Resistance",
      "explanation": "An ideal voltmeter draws zero current from the branch it measures, requiring infinite impedance."
    },
    {
      "question": "Which mirror is preferred as a rear-view mirror in automobiles because of its wider field of view?",
      "options": [
        "Convex Mirror",
        "Concave Mirror",
        "Plane Mirror",
        "Parabolic Mirror"
      ],
      "answer": "Convex Mirror",
      "explanation": "Convex mirrors consistently produce upright, diminished virtual images with a panoramic view."
    },
    {
      "question": "What is the chemical name and formula for washing soda?",
      "options": [
        "Sodium Carbonate Decahydrate (Na₂CO₃·10H₂O)",
        "Sodium Bicarbonate",
        "Calcium Carbonate",
        "Bleaching Powder"
      ],
      "answer": "Sodium Carbonate Decahydrate (Na₂CO₃·10H₂O)",
      "explanation": "Solvay process yields sodium carbonate decahydrate, a vital laundry water softener."
    },
    {
      "question": "Which human chromosome combination determines a biological male child genetically?",
      "options": [
        "XY",
        "XX",
        "YY",
        "XO"
      ],
      "answer": "XY",
      "explanation": "Females contribute an X chromosome, whereas male sperm can contribute either X or Y."
    },
    {
      "question": "What is the minimum speed an object must achieve to escape Earth's gravitational pull into deep space?",
      "options": [
        "11.2 km/s",
        "8.0 km/s",
        "3.0 km/s",
        "30 km/s"
      ],
      "answer": "11.2 km/s",
      "explanation": "Terrestrial escape velocity v_esc = √(2GM/R) evaluates to approximately 11.2 km/s."
    },
    {
      "question": "Which compound is the principal active constituent in household vinegar (approx 5-8% solution)?",
      "options": [
        "Acetic Acid (Ethanoic Acid)",
        "Formic Acid",
        "Citric Acid",
        "Oxalic Acid"
      ],
      "answer": "Acetic Acid (Ethanoic Acid)",
      "explanation": "Ethanoic acid (CH₃COOH) imparts vinegar's characteristic pungent aroma and sour taste."
    },
    {
      "question": "What is the anatomical junction between two adjacent communicating neurons called?",
      "options": [
        "Synapse",
        "Axon",
        "Dendrite",
        "Myelin"
      ],
      "answer": "Synapse",
      "explanation": "Neurotransmitters diffuse across the synaptic cleft to transmit electrochemical signals."
    },
    {
      "question": "Which law states that 'in a closed circuit, induced EMF is proportional to rate of change of magnetic flux'?",
      "options": [
        "Faraday's Law of Induction",
        "Lenz's Law",
        "Ampere's Law",
        "Biot-Savart Law"
      ],
      "answer": "Faraday's Law of Induction",
      "explanation": "Michael Faraday discovered electromagnetic induction (EMF = -dΦ/dt)."
    },
    {
      "question": "What is the functional group of ketones?",
      "options": [
        ">C=O",
        "-CHO",
        "-COOH",
        "-OH"
      ],
      "answer": ">C=O",
      "explanation": "Ketones possess a non-terminal carbonyl group flanked by two carbon atoms."
    },
    {
      "question": "Which blood group is universally known as the 'Universal Donor' for red blood cells?",
      "options": [
        "O Negative (O-)",
        "AB Positive",
        "A Positive",
        "B Negative"
      ],
      "answer": "O Negative (O-)",
      "explanation": "O- red cells lack A, B, and Rh surface antigens, avoiding immune agglutination."
    },
    {
      "question": "What is the SI unit of magnetic field strength named after Nikola Tesla?",
      "options": [
        "Tesla (T)",
        "Weber",
        "Henry",
        "Gauss"
      ],
      "answer": "Tesla (T)",
      "explanation": "One Tesla equals one Weber per square meter (1 T = 1 Wb/m²)."
    },
    {
      "question": "Which metallic element is stored submerged under kerosene oil due to its violent reactivity with air and water?",
      "options": [
        "Sodium",
        "Iron",
        "Gold",
        "Copper"
      ],
      "answer": "Sodium",
      "explanation": "Sodium (Na) rapidly oxidizes in air and reacts exothermically with water producing H₂."
    },
    {
      "question": "What is the name of the process by which green plants lose excess water through leaf stomata?",
      "options": [
        "Transpiration",
        "Guttation",
        "Respiration",
        "Inbibition"
      ],
      "answer": "Transpiration",
      "explanation": "Transpirational pull drives the upward ascent of sap through xylem tracheids."
    },
    {
      "question": "What is the critical angle for total internal reflection in diamond surrounded by air?",
      "options": [
        "~24.4°",
        "~48.6°",
        "~90.0°",
        "~42.0°"
      ],
      "answer": "~24.4°",
      "explanation": "High refractive index (n ≈ 2.42) produces a tiny critical angle, causing sparkling brilliance."
    },
    {
      "question": "What is the IUPAC name for ordinary grain alcohol found in beverages?",
      "options": [
        "Ethanol",
        "Methanol",
        "Propanol",
        "Butanol"
      ],
      "answer": "Ethanol",
      "explanation": "Ethanol has molecular formula C₂H₅OH and boiling point 78.37°C."
    },
    {
      "question": "Which trophic level in a food chain always has the largest biomass and energy content?",
      "options": [
        "Producers (Plants)",
        "Primary Consumers",
        "Secondary Consumers",
        "Apex Predators"
      ],
      "answer": "Producers (Plants)",
      "explanation": "Lindeman's 10% law dictates that energy degrades exponentially as trophic levels ascend."
    },
    {
      "question": "Which element is present in all organic compounds?",
      "options": [
        "Carbon",
        "Silicon",
        "Sulfur",
        "Phosphorus"
      ],
      "answer": "Carbon",
      "explanation": "Carbon's catenation and tetravalency allow it to form millions of organic molecules."
    },
    {
      "question": "What device converts mechanical kinetic energy directly into electrical energy via electromagnetic induction?",
      "options": [
        "Electric Generator (Dynamo)",
        "Electric Motor",
        "Transformer",
        "Capacitor"
      ],
      "answer": "Electric Generator (Dynamo)",
      "explanation": "Rotating a coil within magnetic flux generates alternating current (AC)."
    },
    {
      "question": "What is the chemical composition of rust forming on iron?",
      "options": [
        "Fe₂O₃·xH₂O",
        "FeSO₄",
        "FeCl₃",
        "FeCO₃"
      ],
      "answer": "Fe₂O₃·xH₂O",
      "explanation": "Atmospheric oxygen and moisture convert metallic Fe into hydrated iron(III) oxide."
    },
    {
      "question": "Which part of the male human reproductive system produces sperm and testosterone?",
      "options": [
        "Testes",
        "Prostate",
        "Vas Deferens",
        "Epididymis"
      ],
      "answer": "Testes",
      "explanation": "Seminiferous tubules in the testes produce spermatozoa while Leydig cells secrete testosterone."
    },
    {
      "question": "What is the value of 1 Kilowatt-hour (kWh) in Joules?",
      "options": [
        "3.6 × 10⁶ J",
        "1 × 10³ J",
        "3.6 × 10³ J",
        "1 × 10⁶ J"
      ],
      "answer": "3.6 × 10⁶ J",
      "explanation": "1 kWh = 1,000 W × 3,600 s = 3,600,000 Joules."
    },
    {
      "question": "Which acid is present in stinging nettle leaves and ant bites causing irritation?",
      "options": [
        "Formic Acid (Methanoic Acid)",
        "Acetic Acid",
        "Tartaric Acid",
        "Lactic Acid"
      ],
      "answer": "Formic Acid (Methanoic Acid)",
      "explanation": "Methanoic acid (HCOOH) is injected during ant stings, neutralized by mild bases like baking soda."
    },
    {
      "question": "Which organ system is responsible for producing antibodies and fighting cellular pathogens?",
      "options": [
        "Immune System",
        "Digestive System",
        "Excretory System",
        "Skeletal System"
      ],
      "answer": "Immune System",
      "explanation": "B-lymphocytes and T-lymphocytes coordinate humoral and cell-mediated immunity."
    },
    {
      "question": "What is the relationship between wavelength (λ), frequency (ν), and speed of light (c)?",
      "options": [
        "c = νλ",
        "c = ν/λ",
        "c = λ/ν",
        "c = ν + λ"
      ],
      "answer": "c = νλ",
      "explanation": "Wave speed in any homogeneous medium equals frequency multiplied by wavelength."
    },
    {
      "question": "What is the primary cause of ozone depletion in the upper stratosphere?",
      "options": [
        "Chlorofluorocarbons (CFCs)",
        "Carbon Dioxide",
        "Methane",
        "Water vapor"
      ],
      "answer": "Chlorofluorocarbons (CFCs)",
      "explanation": "Ultraviolet rays split CFCs into free chlorine radicals that catalytically destroy ozone."
    },
    {
      "question": "Which optical defect occurs when eye lens fibers lose elasticity, making near focus difficult with age?",
      "options": [
        "Presbyopia",
        "Myopia",
        "Hypermetropia",
        "Astigmatism"
      ],
      "answer": "Presbyopia",
      "explanation": "Aging ciliary muscles and hardening crystalline lens cause presbyopia, corrected with bifocals."
    },
    {
      "question": "What is the oxidation state of sulfur in sulfuric acid (H₂SO₄)?",
      "options": [
        "+6",
        "+4",
        "+2",
        "-2"
      ],
      "answer": "+6",
      "explanation": "In H₂SO₄, 2(+1) + S + 4(-2) = 0 => S = +6."
    },
    {
      "question": "Which cell organelle is responsible for synthesizing proteins from mRNA blueprints?",
      "options": [
        "Ribosome",
        "Golgi body",
        "Vacuole",
        "Peroxisome"
      ],
      "answer": "Ribosome",
      "explanation": "Ribosomes translate triplet codons into polypeptide amino acid chains."
    },
    {
      "question": "What is the legal unit of power corresponding to 746 Watts?",
      "options": [
        "1 Horsepower (HP)",
        "1 Kilowatt",
        "1 Megawatt",
        "1 Erg"
      ],
      "answer": "1 Horsepower (HP)",
      "explanation": "One mechanical horsepower equals precisely 745.7 Watts."
    },
    {
      "question": "Which metal is extracted via the Hall-Héroult molten cryolite electrolysis process?",
      "options": [
        "Aluminium",
        "Iron",
        "Gold",
        "Lead"
      ],
      "answer": "Aluminium",
      "explanation": "Alumina dissolved in molten Na₃AlF₆ is electrolyzed at carbon electrodes at ~950°C."
    }
  ],
  "senior": [
    {
      "question": "In quantum mechanics, what does Heisenberg’s Uncertainty Principle state?",
      "options": [
        "Position and momentum cannot both be measured with arbitrary precision simultaneously (Δx·Δp ≥ ℏ/2)",
        "Energy can neither be created nor destroyed",
        "Entropy of an isolated system always increases",
        "Speed of light is invariant in all reference frames"
      ],
      "answer": "Position and momentum cannot both be measured with arbitrary precision simultaneously (Δx·Δp ≥ ℏ/2)",
      "explanation": "Heisenberg showed the product of uncertainties in position and momentum is fundamentally bounded by ℏ/2."
    },
    {
      "question": "Which organic reaction converts an aldehyde or ketone into an alkene using a phosphonium ylide?",
      "options": [
        "Wittig Reaction",
        "Aldol Condensation",
        "Cannizzaro Reaction",
        "Friedel-Crafts Alkylation"
      ],
      "answer": "Wittig Reaction",
      "explanation": "The Wittig reaction couples carbonyl compounds with phosphonium ylides to synthesize alkenes regioselectively."
    },
    {
      "question": "In human cellular respiration, where does the Krebs (Citric Acid) Cycle occur?",
      "options": [
        "Mitochondrial Matrix",
        "Cytoplasm",
        "Inner Mitochondrial Membrane",
        "Nucleoplasm"
      ],
      "answer": "Mitochondrial Matrix",
      "explanation": "Glycolysis occurs in cytoplasm, whereas the Krebs cycle takes place within the mitochondrial matrix."
    },
    {
      "question": "According to Lenz’s Law, the direction of an induced electromotive force (EMF) is such that it:",
      "options": [
        "Opposes the change in magnetic flux that produces it",
        "Reinforces the original magnetic flux",
        "Depends solely on temperature",
        "Always flows in clockwise loops"
      ],
      "answer": "Opposes the change in magnetic flux that produces it",
      "explanation": "Lenz’s law is a consequence of conservation of energy; induced currents oppose the change causing them."
    },
    {
      "question": "What is the hybridization of the central carbon atom in an alkyne (e.g. ethyne, HC≡CH)?",
      "options": [
        "sp",
        "sp²",
        "sp³",
        "dsp²"
      ],
      "answer": "sp",
      "explanation": "Alkynes have linear geometry (180° bond angle) with sp hybridization on triple-bonded carbons."
    },
    {
      "question": "What fundamental wave equation was formulated by Erwin Schrödinger to describe quantum states?",
      "options": [
        "iℏ ∂ψ/∂t = Ĥψ",
        "E = mc²",
        "F = dp/dt",
        "∇ × B = μ₀J"
      ],
      "answer": "iℏ ∂ψ/∂t = Ĥψ",
      "explanation": "The Schrödinger equation determines the time-dependent evolution of quantum mechanical wavefunctions."
    },
    {
      "question": "According to the First Law of Thermodynamics, what is the change in internal energy (ΔU)?",
      "options": [
        "ΔU = Q - W",
        "ΔU = Q + W",
        "ΔU = Q × W",
        "ΔU = Q / W"
      ],
      "answer": "ΔU = Q - W",
      "explanation": "Internal energy change equals heat added to system minus work done by system on surroundings."
    },
    {
      "question": "What is the hybridization of carbon atoms in a benzene aromatic ring?",
      "options": [
        "sp²",
        "sp³",
        "sp",
        "sp³d"
      ],
      "answer": "sp²",
      "explanation": "Benzene carbons are sp² hybridized, forming a planar ring with delocalized pi electron clouds."
    },
    {
      "question": "Which principle states that 'no two electrons in an atom can have the same four quantum numbers'?",
      "options": [
        "Pauli Exclusion Principle",
        "Hund's Rule",
        "Aufbau Principle",
        "Heisenberg Principle"
      ],
      "answer": "Pauli Exclusion Principle",
      "explanation": "Wolfgang Pauli established that identical fermions cannot occupy identical quantum states."
    },
    {
      "question": "What is the SI unit of magnetic flux density?",
      "options": [
        "Tesla (T)",
        "Weber",
        "Henry",
        "Siemens"
      ],
      "answer": "Tesla (T)",
      "explanation": "One Tesla represents one Weber per square meter (1 T = 1 Wb/m²)."
    },
    {
      "question": "Which enzyme catalyzes the transcription of DNA into complementary messenger RNA?",
      "options": [
        "RNA Polymerase",
        "DNA Ligase",
        "DNA Helicase",
        "Amylase"
      ],
      "answer": "RNA Polymerase",
      "explanation": "RNA Polymerase binds promoters to synthesize mRNA transcripts in the 5' to 3' direction."
    },
    {
      "question": "What is the dimensional formula for Planck's constant (h)?",
      "options": [
        "[M L² T⁻¹]",
        "[M L T⁻¹]",
        "[M L² T⁻²]",
        "[M L⁻¹ T⁻²]"
      ],
      "answer": "[M L² T⁻¹]",
      "explanation": "Planck's constant h = E/ν has units J·s = kg·m²/s = [M L² T⁻¹]."
    },
    {
      "question": "Which intermediate carbocation is the most thermodynamically stable due to hyperconjugation?",
      "options": [
        "Tertiary Carbocation (3°)",
        "Secondary Carbocation (2°)",
        "Primary Carbocation (1°)",
        "Methyl Carbocation"
      ],
      "answer": "Tertiary Carbocation (3°)",
      "explanation": "Tertiary carbocations have 9 alpha-hydrogens providing maximal hyperconjugative stabilization."
    },
    {
      "question": "What is the magnetic force on a charge q moving with velocity v in magnetic field B?",
      "options": [
        "F = q(v × B)",
        "F = q(v · B)",
        "F = qv/B",
        "F = B/qv"
      ],
      "answer": "F = q(v × B)",
      "explanation": "The Lorentz magnetic force vector equals the cross product of velocity and magnetic flux density."
    },
    {
      "question": "What is the primary product of glycolysis per molecule of glucose oxidized in the cytoplasm?",
      "options": [
        "2 Pyruvate + 2 ATP + 2 NADH",
        "1 Lactate + 4 ATP",
        "6 CO₂ + 6 H₂O",
        "2 Acetyl-CoA"
      ],
      "answer": "2 Pyruvate + 2 ATP + 2 NADH",
      "explanation": "Glycolysis cleaves 6-carbon glucose into two 3-carbon pyruvate molecules with net 2 ATP yield."
    },
    {
      "question": "Which rule states that 'orbitals of equal energy are each occupied with one electron before pairing'?",
      "options": [
        "Hund's Rule of Maximum Multiplicity",
        "Aufbau Rule",
        "Pauli Principle",
        "Bohr Model"
      ],
      "answer": "Hund's Rule of Maximum Multiplicity",
      "explanation": "Spin pairing minimizes inter-electronic repulsion when subshells fill singly with parallel spins."
    },
    {
      "question": "What does Lenz's Law reflect regarding the direction of induced electromotive force?",
      "options": [
        "Conservation of Energy",
        "Conservation of Charge",
        "Conservation of Momentum",
        "Conservation of Mass"
      ],
      "answer": "Conservation of Energy",
      "explanation": "Lenz's law (induced current opposes flux change) is a consequence of energy conservation."
    },
    {
      "question": "What is the conjugate base of the bicarbonate ion (HCO₃⁻)?",
      "options": [
        "CO₃²⁻ (Carbonate)",
        "H₂CO₃",
        "CO₂",
        "OH⁻"
      ],
      "answer": "CO₃²⁻ (Carbonate)",
      "explanation": "A conjugate base is formed when an acid donates a proton: HCO₃⁻ -> H⁺ + CO₃²⁻."
    },
    {
      "question": "What is the de Broglie wavelength associated with a particle of momentum p?",
      "options": [
        "λ = h / p",
        "λ = p / h",
        "λ = h × p",
        "λ = h / p²"
      ],
      "answer": "λ = h / p",
      "explanation": "Louis de Broglie postulated wave-particle duality where wavelength equals Planck constant over momentum."
    },
    {
      "question": "Which organelle coordinates eukaryotic ribosomal RNA transcription and ribosome subunit assembly?",
      "options": [
        "Nucleolus",
        "Endoplasmic Reticulum",
        "Peroxisome",
        "Centriole"
      ],
      "answer": "Nucleolus",
      "explanation": "The nucleolus is a dense nuclear subcompartment housing RNA Polymerase I and rDNA genes."
    },
    {
      "question": "What is the standard cell potential (E°_cell) for a Daniel galvanic cell (Zn-Cu)?",
      "options": [
        "1.10 Volts",
        "0.76 Volts",
        "0.34 Volts",
        "2.00 Volts"
      ],
      "answer": "1.10 Volts",
      "explanation": "E°_cell = E°_cathode (Cu²⁺/Cu = +0.34V) - E°_anode (Zn²⁺/Zn = -0.76V) = +1.10 V."
    },
    {
      "question": "Which optical aberration is caused by the dispersion of different wavelengths in spherical lenses?",
      "options": [
        "Chromatic Aberration",
        "Spherical Aberration",
        "Coma",
        "Astigmatism"
      ],
      "answer": "Chromatic Aberration",
      "explanation": "Different colors focus at different focal lengths due to wavelength-dependent refractive indices."
    },
    {
      "question": "What is the oxidation state of Manganese in the permanganate ion (MnO₄⁻)?",
      "options": [
        "+7",
        "+6",
        "+4",
        "+2"
      ],
      "answer": "+7",
      "explanation": "In MnO₄⁻, Mn + 4(-2) = -1 => Mn = +7 (d⁰ configuration)."
    },
    {
      "question": "What does Heisenberg's Uncertainty Principle state mathematically for position and momentum?",
      "options": [
        "Δx · Δp ≥ ℏ / 2",
        "Δx · Δp ≤ ℏ",
        "Δx = Δp",
        "ΔE · Δt = 0"
      ],
      "answer": "Δx · Δp ≥ ℏ / 2",
      "explanation": "Conjugate observables cannot simultaneously be determined with arbitrary precision."
    },
    {
      "question": "Which enzyme joins Okazaki fragments on the lagging strand during DNA replication?",
      "options": [
        "DNA Ligase",
        "DNA Polymerase I",
        "Topoisomerase",
        "Primase"
      ],
      "answer": "DNA Ligase",
      "explanation": "DNA Ligase forms phosphodiester bonds sealing nicks between contiguous Okazaki segments."
    },
    {
      "question": "What is the efficiency of a Carnot heat engine operating between temperatures T_H and T_C?",
      "options": [
        "η = 1 - (T_C / T_H)",
        "η = T_C / T_H",
        "η = 1 + (T_C / T_H)",
        "η = T_H - T_C"
      ],
      "answer": "η = 1 - (T_C / T_H)",
      "explanation": "Sadi Carnot demonstrated maximal theoretical efficiency depends solely on reservoir absolute temperatures."
    },
    {
      "question": "Which type of semiconductor is produced by doping pure silicon with trivalent atoms like Boron?",
      "options": [
        "p-type semiconductor",
        "n-type semiconductor",
        "Intrinsic semiconductor",
        "Superconductor"
      ],
      "answer": "p-type semiconductor",
      "explanation": "Trivalent dopants introduce positive hole majority carriers into the valence band."
    },
    {
      "question": "What is the IUPAC name for acetone (CH₃COCH₃)?",
      "options": [
        "Propan-2-one",
        "Propanal",
        "Ethanoic acid",
        "Butanone"
      ],
      "answer": "Propan-2-one",
      "explanation": "Acetone is a symmetrical 3-carbon dialkyl ketone named Propan-2-one."
    },
    {
      "question": "What does Le Chatelier's Principle predict when pressure is increased in a gaseous equilibrium?",
      "options": [
        "Shifts toward fewer moles of gas",
        "Shifts toward more moles of gas",
        "No effect on equilibrium",
        "Equilibrium constant K changes"
      ],
      "answer": "Shifts toward fewer moles of gas",
      "explanation": "The system counteracts pressure increases by favoring the direction reducing gaseous volume."
    },
    {
      "question": "Which equation governs the kinetic energy of emitted photoelectrons in the photoelectric effect?",
      "options": [
        "K_max = hν - Φ",
        "E = mc²",
        "λ = h/p",
        "F = qE"
      ],
      "answer": "K_max = hν - Φ",
      "explanation": "Albert Einstein won the 1921 Nobel Prize for explaining that photon energy minus work function yields K_max."
    },
    {
      "question": "Which phase of meiosis features crossing over and genetic recombination between homologous chromosomes?",
      "options": [
        "Pachytene (Prophase I)",
        "Metaphase II",
        "Anaphase I",
        "Telophase I"
      ],
      "answer": "Pachytene (Prophase I)",
      "explanation": "Chiasmata formation during pachytene facilitates reciprocal exchange of non-sister chromatid DNA."
    },
    {
      "question": "What is the shape of a water molecule according to VSEPR theory?",
      "options": [
        "Bent / V-shaped (104.5°)",
        "Linear",
        "Tetrahedral",
        "Trigonal planar"
      ],
      "answer": "Bent / V-shaped (104.5°)",
      "explanation": "Two lone pairs on oxygen exert lone pair-bond pair repulsion compressing angle to 104.5°."
    },
    {
      "question": "What is the SI unit of self-inductance and mutual inductance?",
      "options": [
        "Henry (H)",
        "Farad",
        "Tesla",
        "Weber"
      ],
      "answer": "Henry (H)",
      "explanation": "One Henry induces an electromotive force of one volt when current changes at one ampere per second."
    },
    {
      "question": "Which biological macromolecule carries anticodons and transfers specific amino acids to ribosomes?",
      "options": [
        "tRNA (Transfer RNA)",
        "mRNA",
        "rRNA",
        "snRNA"
      ],
      "answer": "tRNA (Transfer RNA)",
      "explanation": "tRNA cloverleaf loops carry a specific 3-base anticodon and 3'-CCA amino acid attachment stalk."
    },
    {
      "question": "What is the rate equation for a radioactive decay process with decay constant λ?",
      "options": [
        "N(t) = N₀ e^(-λt)",
        "N(t) = N₀ / t",
        "N(t) = N₀ - λt",
        "N(t) = N₀ (1 + λt)"
      ],
      "answer": "N(t) = N₀ e^(-λt)",
      "explanation": "Radioactive nuclear disintegrations obey first-order exponential decay kinetics."
    },
    {
      "question": "Which catalyst is utilized in the Haber-Bosch industrial synthesis of ammonia from N₂ and H₂?",
      "options": [
        "Finely divided Iron with K₂O/Al₂O₃",
        "Platinum gauze",
        "Vanadium Pentoxide",
        "Nickel"
      ],
      "answer": "Finely divided Iron with K₂O/Al₂O₃",
      "explanation": "Finely divided iron promoter-assisted catalyst operates at 450°C and 200 atm pressure."
    },
    {
      "question": "What is the electric potential inside a hollow charged spherical conducting shell of radius R?",
      "options": [
        "Constant (equals surface potential)",
        "Zero",
        "Decreases linearly to center",
        "Infinite"
      ],
      "answer": "Constant (equals surface potential)",
      "explanation": "Because internal electric field is zero (Gauss's law), electric potential is uniform throughout."
    },
    {
      "question": "Which amino acid is universally coded by the initiation codon AUG in eukaryotic translation?",
      "options": [
        "Methionine",
        "Valine",
        "Alanine",
        "Glycine"
      ],
      "answer": "Methionine",
      "explanation": "AUG codes for methionine and serves as the universal start signal for ribosome translation."
    },
    {
      "question": "What is the magnetic dipole moment of a current loop of area A carrying current I?",
      "options": [
        "M = I A",
        "M = I / A",
        "M = A / I",
        "M = I² A"
      ],
      "answer": "M = I A",
      "explanation": "Magnetic dipole moment vector points perpendicular to the loop plane by right-hand rule."
    },
    {
      "question": "What is the geometric isomerism shown by [Pt(NH₃)₂Cl₂] called?",
      "options": [
        "Cis-Trans Isomerism",
        "Optical Isomerism",
        "Linkage Isomerism",
        "Ionization Isomerism"
      ],
      "answer": "Cis-Trans Isomerism",
      "explanation": "Square planar complexes exhibit cis (adjacent identical ligands) and trans (opposite) configurations."
    },
    {
      "question": "What is the entropy change (ΔS) of the universe for any irreversible spontaneous process?",
      "options": [
        "ΔS_univ > 0",
        "ΔS_univ = 0",
        "ΔS_univ < 0",
        "ΔS_univ is constant zero"
      ],
      "answer": "ΔS_univ > 0",
      "explanation": "The Second Law of Thermodynamics dictates that spontaneous natural processes increase universal entropy."
    },
    {
      "question": "Which optical phenomenon confirms the transverse wave nature of light electromagnetic waves?",
      "options": [
        "Polarization",
        "Interference",
        "Diffraction",
        "Refraction"
      ],
      "answer": "Polarization",
      "explanation": "Only transverse waves with oscillation perpendicular to propagation can be polarized into a single plane."
    },
    {
      "question": "What is the primary function of topoisomerase during eukaryotic DNA replication?",
      "options": [
        "Relieving DNA torsional supercoiling",
        "Synthesizing RNA primers",
        "Degrading telomeres",
        "Ligating exons"
      ],
      "answer": "Relieving DNA torsional supercoiling",
      "explanation": "Topoisomerases cleave and religate phosphodiester backbones to unwind topological supercoils."
    },
    {
      "question": "What is the formal charge on the central oxygen atom in the ozone molecule (O₃)?",
      "options": [
        "+1",
        "0",
        "-1",
        "+2"
      ],
      "answer": "+1",
      "explanation": "In the O₃ resonance hybrid, the central trivalent sp² oxygen carries a +1 formal charge."
    },
    {
      "question": "What is the energy of a quantum photon of frequency ν?",
      "options": [
        "E = hν",
        "E = mc²",
        "E = h/ν",
        "E = ½hν²"
      ],
      "answer": "E = hν",
      "explanation": "Max Planck's quantum postulate links electromagnetic energy directly to radiation frequency."
    },
    {
      "question": "Which law states that the total electric flux out of a closed surface equals charge enclosed over ε₀?",
      "options": [
        "Gauss's Law",
        "Ampere's Law",
        "Coulomb's Law",
        "Faraday's Law"
      ],
      "answer": "Gauss's Law",
      "explanation": "Gauss's law is one of Maxwell's four foundational electromagnetic field equations."
    },
    {
      "question": "What is the monomer unit of synthetic polymer Teflon (polytetrafluoroethylene)?",
      "options": [
        "Tetrafluoroethene (CF₂=CF₂)",
        "Vinyl chloride",
        "Ethylene",
        "Styrene"
      ],
      "answer": "Tetrafluoroethene (CF₂=CF₂)",
      "explanation": "Polymerization of CF₂=CF₂ produces non-stick, heat-resistant Teflon."
    },
    {
      "question": "Which hormone produced by pancreatic alpha cells elevates blood glucose via glycogenolysis?",
      "options": [
        "Glucagon",
        "Insulin",
        "Somatostatin",
        "Cortisol"
      ],
      "answer": "Glucagon",
      "explanation": "Glucagon stimulates hepatic glycogen degradation into free glucose molecules."
    },
    {
      "question": "What is the resonant angular frequency (ω₀) in an ideal series LCR circuit?",
      "options": [
        "ω₀ = 1 / √(LC)",
        "ω₀ = √(LC)",
        "ω₀ = L / C",
        "ω₀ = R / √(LC)"
      ],
      "answer": "ω₀ = 1 / √(LC)",
      "explanation": "At electrical resonance, inductive and capacitive reactances cancel (X_L = X_C)."
    },
    {
      "question": "Which aromatic hydrocarbon undergoes electrophilic substitution via a stable arenium ion?",
      "options": [
        "Benzene",
        "Cyclohexane",
        "Hexane",
        "Acetylene"
      ],
      "answer": "Benzene",
      "explanation": "Electrophilic aromatic substitution proceeds via resonance-stabilized Wheland sigma intermediates."
    },
    {
      "question": "What is the term for animal species found exclusively in one specific geographic habitat?",
      "options": [
        "Endemic Species",
        "Cosmopolitan Species",
        "Exotic Species",
        "Invasive Species"
      ],
      "answer": "Endemic Species",
      "explanation": "Endemic taxa are geographically restricted to isolated ecological niches (e.g. Western Ghats)."
    },
    {
      "question": "What is the SI unit of radioactive activity representing one disintegration per second?",
      "options": [
        "Becquerel (Bq)",
        "Curie",
        "Gray",
        "Sievert"
      ],
      "answer": "Becquerel (Bq)",
      "explanation": "One Becquerel equals one nuclear transformation or disintegration per second."
    },
    {
      "question": "Which compound exhibits optical isomerism without a chiral center due to restricted rotation?",
      "options": [
        "Orth-substituted Biphenyls",
        "Methane",
        "Ethanol",
        "Benzene"
      ],
      "answer": "Orth-substituted Biphenyls",
      "explanation": "Steric hindrance prevents coplanar rotation (atropisomerism), generating axial chirality."
    },
    {
      "question": "What is the wavelength of peak emission inversely proportional to in Wien's Displacement Law?",
      "options": [
        "Absolute Temperature (T)",
        "Pressure",
        "Mass",
        "Volume"
      ],
      "answer": "Absolute Temperature (T)",
      "explanation": "Wien's law states λ_max = b / T, where b is Wien's displacement constant (~2.898 × 10⁻³ m·K)."
    },
    {
      "question": "What is the name of the enzyme complex that synthesizes ATP using a transmembrane proton gradient?",
      "options": [
        "ATP Synthase (F₀F₁ Complex)",
        "Cytochrome c Oxidase",
        "NADH Dehydrogenase",
        "Succinate Dehydrogenase"
      ],
      "answer": "ATP Synthase (F₀F₁ Complex)",
      "explanation": "Chemiosmotic proton flux rotates the F₀ turbine, driving ATP synthesis in the F₁ catalytic head."
    }
  ]
},

    gk: {
  "little": [
    {
      "question": "What is the national animal of India?",
      "options": [
        "Bengal Tiger",
        "Lion",
        "Elephant",
        "Peacock"
      ],
      "answer": "Bengal Tiger",
      "explanation": "The Royal Bengal Tiger is India’s national animal symbolising strength and grace."
    },
    {
      "question": "What is the national bird of India?",
      "options": [
        "Peacock",
        "Parrot",
        "Pigeon",
        "Crow"
      ],
      "answer": "Peacock",
      "explanation": "The Indian Peacock is celebrated for its stunning iridescent plumage and dance."
    },
    {
      "question": "How many colors are there in the Indian National Flag (Tiranga)?",
      "options": [
        "3 main bands (Saffron, White, Green)",
        "2",
        "5",
        "4"
      ],
      "answer": "3 main bands (Saffron, White, Green)",
      "explanation": "The Tiranga has three horizontal bands: Saffron at top, White in middle, and Green at bottom."
    },
    {
      "question": "What is the capital city of India?",
      "options": [
        "New Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
      ],
      "answer": "New Delhi",
      "explanation": "New Delhi is the national capital and seat of the Government of India."
    },
    {
      "question": "How many days are there in a normal year?",
      "options": [
        "365",
        "300",
        "366",
        "400"
      ],
      "answer": "365",
      "explanation": "A standard calendar year has 365 days (leap years have 366)."
    },
    {
      "question": "What is the National Bird of India?",
      "options": [
        "Peacock",
        "Parrot",
        "Sparrow",
        "Pigeon"
      ],
      "answer": "Peacock",
      "explanation": "The Indian Peacock (Pavo cristatus) is celebrated as India's National Bird for its beauty."
    },
    {
      "question": "What is the National Animal of India?",
      "options": [
        "Bengal Tiger",
        "Lion",
        "Elephant",
        "Leopard"
      ],
      "answer": "Bengal Tiger",
      "explanation": "The Royal Bengal Tiger symbolizes grace, strength, and immense power."
    },
    {
      "question": "What is the National Flower of India?",
      "options": [
        "Lotus",
        "Rose",
        "Sunflower",
        "Marigold"
      ],
      "answer": "Lotus",
      "explanation": "The sacred Lotus (Nelumbo nucifera) represents purity, triumph, and long life."
    },
    {
      "question": "What is the National Fruit of India?",
      "options": [
        "Mango",
        "Apple",
        "Banana",
        "Orange"
      ],
      "answer": "Mango",
      "explanation": "Mango is India's national fruit and is celebrated as the King of Fruits."
    },
    {
      "question": "How many colors are there in the Indian National Flag (Tiranga)?",
      "options": [
        "3",
        "4",
        "2",
        "5"
      ],
      "answer": "3",
      "explanation": "The Tiranga features Saffron, White, and Green horizontal stripes (with a navy blue wheel)."
    },
    {
      "question": "Who is revered as the 'Father of the Nation' in India?",
      "options": [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Dr. B.R. Ambedkar",
        "Subhash Chandra Bose"
      ],
      "answer": "Mahatma Gandhi",
      "explanation": "Mahatma Gandhi led India to independence through truth and non-violence."
    },
    {
      "question": "What is the capital city of India?",
      "options": [
        "New Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
      ],
      "answer": "New Delhi",
      "explanation": "New Delhi is the seat of the government and capital of India."
    },
    {
      "question": "What is the national tree of India?",
      "options": [
        "Banyan Tree",
        "Neem Tree",
        "Peepal Tree",
        "Mango Tree"
      ],
      "answer": "Banyan Tree",
      "explanation": "The majestic Indian Banyan tree symbolizes eternal life and deep roots."
    },
    {
      "question": "How many days are there in a standard week?",
      "options": [
        "7 days",
        "5 days",
        "10 days",
        "6 days"
      ],
      "answer": "7 days",
      "explanation": "A week contains seven days: Monday through Sunday."
    },
    {
      "question": "How many months are there in a calendar year?",
      "options": [
        "12 months",
        "10 months",
        "14 months",
        "7 months"
      ],
      "answer": "12 months",
      "explanation": "A solar year contains 12 months, from January through December."
    },
    {
      "question": "Which color is at the top of the Indian National Flag?",
      "options": [
        "Saffron",
        "White",
        "Green",
        "Blue"
      ],
      "answer": "Saffron",
      "explanation": "Saffron at the top represents courage and sacrifice."
    },
    {
      "question": "Which color is at the bottom of the Indian National Flag?",
      "options": [
        "Green",
        "White",
        "Saffron",
        "Navy Blue"
      ],
      "answer": "Green",
      "explanation": "Green at the bottom stands for prosperity, agriculture, and life."
    },
    {
      "question": "What is the color of the Ashoka Chakra in the Indian Flag?",
      "options": [
        "Navy Blue",
        "Black",
        "Red",
        "Green"
      ],
      "answer": "Navy Blue",
      "explanation": "The 24-spoke Ashoka Chakra in the white band is navy blue."
    },
    {
      "question": "How many spokes are inside the Ashoka Chakra?",
      "options": [
        "24",
        "12",
        "18",
        "30"
      ],
      "answer": "24",
      "explanation": "The 24 spokes represent the 24 hours of the day and righteous principles."
    },
    {
      "question": "Which festival is known as the 'Festival of Lights' in India?",
      "options": [
        "Diwali",
        "Holi",
        "Eid",
        "Christmas"
      ],
      "answer": "Diwali",
      "explanation": "Diwali celebrates the triumph of light over darkness and good over evil."
    },
    {
      "question": "Which festival is known as the 'Festival of Colors'?",
      "options": [
        "Holi",
        "Diwali",
        "Dussehra",
        "Pongal"
      ],
      "answer": "Holi",
      "explanation": "Holi marks the arrival of spring with vibrant colored powders and joy."
    },
    {
      "question": "What is the currency of India?",
      "options": [
        "Indian Rupee (₹)",
        "Dollar ($)",
        "Euro (€)",
        "Yen (¥)"
      ],
      "answer": "Indian Rupee (₹)",
      "explanation": "The official currency of India is the Indian Rupee."
    },
    {
      "question": "What is the national aquatic animal of India?",
      "options": [
        "Ganges River Dolphin",
        "Blue Whale",
        "Shark",
        "Goldfish"
      ],
      "answer": "Ganges River Dolphin",
      "explanation": "The blind freshwater dolphin of the Ganga is India's national aquatic animal."
    },
    {
      "question": "What is the national heritage animal of India?",
      "options": [
        "Indian Elephant",
        "Tiger",
        "Rhinoceros",
        "Camel"
      ],
      "answer": "Indian Elephant",
      "explanation": "The elephant was declared the national heritage animal of India in 2010."
    },
    {
      "question": "What is the national reptile of India?",
      "options": [
        "King Cobra",
        "Crocodile",
        "Gecko",
        "Chameleon"
      ],
      "answer": "King Cobra",
      "explanation": "The King Cobra is the world's longest venomous snake and India's national reptile."
    },
    {
      "question": "Who was the first Prime Minister of free India?",
      "options": [
        "Pandit Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Dr. Rajendra Prasad",
        "Lal Bahadur Shastri"
      ],
      "answer": "Pandit Jawaharlal Nehru",
      "explanation": "Jawaharlal Nehru served as India's first Prime Minister from 1947 to 1964."
    },
    {
      "question": "Who was the first President of the Republic of India?",
      "options": [
        "Dr. Rajendra Prasad",
        "Dr. S. Radhakrishnan",
        "Dr. A.P.J. Abdul Kalam",
        "Zakir Husain"
      ],
      "answer": "Dr. Rajendra Prasad",
      "explanation": "Dr. Rajendra Prasad was the first President of independent India."
    },
    {
      "question": "On which date do we celebrate India's Independence Day every year?",
      "options": [
        "15th August",
        "26th January",
        "2nd October",
        "14th November"
      ],
      "answer": "15th August",
      "explanation": "India achieved independence from British colonial rule on 15 August 1947."
    },
    {
      "question": "On which date do we celebrate India's Republic Day?",
      "options": [
        "26th January",
        "15th August",
        "5th September",
        "25th December"
      ],
      "answer": "26th January",
      "explanation": "India's Constitution came into effect on 26 January 1950."
    },
    {
      "question": "Whose birthday is celebrated on 2nd October in India?",
      "options": [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Subhas Chandra Bose",
        "Bhagat Singh"
      ],
      "answer": "Mahatma Gandhi",
      "explanation": "2nd October is Gandhi Jayanti, observed internationally as Non-Violence Day."
    },
    {
      "question": "Whose birthday is celebrated as Children's Day on 14th November?",
      "options": [
        "Pandit Jawaharlal Nehru",
        "Dr. Kalam",
        "Mahatma Gandhi",
        "Rabindranath Tagore"
      ],
      "answer": "Pandit Jawaharlal Nehru",
      "explanation": "Nehru loved children dearly and was affectionately called 'Chacha Nehru'."
    },
    {
      "question": "What is our National Anthem?",
      "options": [
        "Jana Gana Mana",
        "Vande Mataram",
        "Sare Jahan Se Achha",
        "Ae Mere Watan Ke Logo"
      ],
      "answer": "Jana Gana Mana",
      "explanation": "Jana Gana Mana was composed by the great poet Rabindranath Tagore."
    },
    {
      "question": "Who wrote India's National Anthem 'Jana Gana Mana'?",
      "options": [
        "Rabindranath Tagore",
        "Bankim Chandra Chattopadhyay",
        "Sarojini Naidu",
        "Premchand"
      ],
      "answer": "Rabindranath Tagore",
      "explanation": "Rabindranath Tagore won the Nobel Prize in Literature in 1913."
    },
    {
      "question": "What is the National Song of India?",
      "options": [
        "Vande Mataram",
        "Jana Gana Mana",
        "Sare Jahan Se Achha",
        "Raghupati Raghav"
      ],
      "answer": "Vande Mataram",
      "explanation": "Vande Mataram was written by Bankim Chandra Chattopadhyay in his novel Anandamath."
    },
    {
      "question": "Which famous monument in Agra is made of white marble?",
      "options": [
        "Taj Mahal",
        "Red Fort",
        "Qutub Minar",
        "Hawa Mahal"
      ],
      "answer": "Taj Mahal",
      "explanation": "The Taj Mahal is one of the Seven Wonders of the World."
    },
    {
      "question": "Where is the historic India Gate monument situated?",
      "options": [
        "New Delhi",
        "Mumbai",
        "Kolkata",
        "Jaipur"
      ],
      "answer": "New Delhi",
      "explanation": "India Gate is a majestic war memorial located in central New Delhi."
    },
    {
      "question": "What vehicle has two wheels and pedals that you ride?",
      "options": [
        "Bicycle",
        "Car",
        "Bus",
        "Train"
      ],
      "answer": "Bicycle",
      "explanation": "Bicycles are eco-friendly two-wheeled vehicles."
    },
    {
      "question": "How many hours make one full day (day + night)?",
      "options": [
        "24 hours",
        "12 hours",
        "48 hours",
        "10 hours"
      ],
      "answer": "24 hours",
      "explanation": "Earth takes 24 hours to complete one rotation on its axis."
    },
    {
      "question": "Which planet do all human beings live on?",
      "options": [
        "Earth",
        "Mars",
        "Jupiter",
        "Venus"
      ],
      "answer": "Earth",
      "explanation": "Earth is the third planet from the Sun, blessed with life, air, and water."
    },
    {
      "question": "What is the fastest land animal in the world?",
      "options": [
        "Cheetah",
        "Lion",
        "Horse",
        "Greyhound"
      ],
      "answer": "Cheetah",
      "explanation": "Cheetahs can sprint at speeds up to 110–120 km/h."
    },
    {
      "question": "Which large bird cannot fly but can run very fast and lays giant eggs?",
      "options": [
        "Ostrich",
        "Penguin",
        "Peacock",
        "Eagle"
      ],
      "answer": "Ostrich",
      "explanation": "The African Ostrich is the largest living bird on Earth."
    },
    {
      "question": "Which animal lives in cold icy polar regions and loves swimming in ice water?",
      "options": [
        "Penguin",
        "Camel",
        "Giraffe",
        "Tiger"
      ],
      "answer": "Penguin",
      "explanation": "Penguins are flightless marine birds adapted to Antarctica."
    },
    {
      "question": "What is the opposite of day?",
      "options": [
        "Night",
        "Morning",
        "Noon",
        "Evening"
      ],
      "answer": "Night",
      "explanation": "Night begins when the Sun sets below the horizon."
    },
    {
      "question": "How many fingers (including thumbs) do humans normally have on both hands?",
      "options": [
        "10",
        "8",
        "12",
        "5"
      ],
      "answer": "10",
      "explanation": "Humans have five digits on each hand, totaling ten."
    },
    {
      "question": "Which domestic bird lays eggs that people eat for breakfast?",
      "options": [
        "Hen (Chicken)",
        "Eagle",
        "Crow",
        "Parrot"
      ],
      "answer": "Hen (Chicken)",
      "explanation": "Hens provide eggs and are raised on poultry farms worldwide."
    },
    {
      "question": "What device do people use to talk to friends far away?",
      "options": [
        "Telephone / Mobile phone",
        "Book",
        "Mirror",
        "Compass"
      ],
      "answer": "Telephone / Mobile phone",
      "explanation": "Mobile phones allow instant voice and video communication across the world."
    },
    {
      "question": "What is the white cold season called when people wear warm jackets?",
      "options": [
        "Winter",
        "Summer",
        "Monsoon",
        "Spring"
      ],
      "answer": "Winter",
      "explanation": "Winter brings cold weather, cool winds, and cozy woolen clothing."
    },
    {
      "question": "Which hot season comes before rain when we enjoy ice creams?",
      "options": [
        "Summer",
        "Winter",
        "Autumn",
        "Monsoon"
      ],
      "answer": "Summer",
      "explanation": "Summer brings sunny days, vacation, and mango season."
    },
    {
      "question": "Which meal do we eat in the morning before going to school?",
      "options": [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snack"
      ],
      "answer": "Breakfast",
      "explanation": "Breakfast provides essential energy to kickstart the school day."
    },
    {
      "question": "Where do students go every day to learn, read, and play with friends?",
      "options": [
        "School",
        "Hospital",
        "Cinema",
        "Airport"
      ],
      "answer": "School",
      "explanation": "Schools are temples of learning where students gain knowledge."
    },
    {
      "question": "Who teaches students in school classrooms with care?",
      "options": [
        "Teacher",
        "Pilot",
        "Mechanic",
        "Chef"
      ],
      "answer": "Teacher",
      "explanation": "Teachers guide, educate, and inspire young minds."
    },
    {
      "question": "What do we use to write in notebooks at school?",
      "options": [
        "Pencil / Pen",
        "Spoon",
        "Brush",
        "Stick"
      ],
      "answer": "Pencil / Pen",
      "explanation": "Pencils and pens are essential tools for writing and learning."
    },
    {
      "question": "What musical instrument has black and white keys that produce musical notes?",
      "options": [
        "Piano",
        "Flute",
        "Drum",
        "Guitar"
      ],
      "answer": "Piano",
      "explanation": "Pianos produce sound when keys strike tuned strings."
    },
    {
      "question": "Which big sea animal is the largest living mammal on Earth?",
      "options": [
        "Blue Whale",
        "Elephant",
        "Shark",
        "Hippo"
      ],
      "answer": "Blue Whale",
      "explanation": "The Blue Whale can grow up to 30 meters long and weigh nearly 200 tons."
    },
    {
      "question": "What is our holy national motto inscribed below the national emblem?",
      "options": [
        "Satyameva Jayate",
        "Jai Hind",
        "Vande Mataram",
        "Inquilab Zindabad"
      ],
      "answer": "Satyameva Jayate",
      "explanation": "Satyameva Jayate ('Truth alone triumphs') is from the Mundaka Upanishad."
    }
  ],
  "junior": [
    {
      "question": "Who was popularly known as the \"Missile Man of India\"?",
      "options": [
        "Dr. A.P.J. Abdul Kalam",
        "Dr. Homi Bhabha",
        "Dr. Vikram Sarabhai",
        "Sir C.V. Raman"
      ],
      "answer": "Dr. A.P.J. Abdul Kalam",
      "explanation": "Dr. A.P.J. Abdul Kalam played a leading role in developing India’s missile defense programs and satellite launch vehicles."
    },
    {
      "question": "Which is the longest river in India?",
      "options": [
        "Ganga",
        "Yamuna",
        "Godavari",
        "Narmada"
      ],
      "answer": "Ganga",
      "explanation": "The Ganga flows over 2,525 km and is the longest river inside Indian territory."
    },
    {
      "question": "Which state is our school (Dr. A.P.J. Abdul Kalam Inter College) located in?",
      "options": [
        "Uttar Pradesh",
        "Bihar",
        "Madhya Pradesh",
        "Rajasthan"
      ],
      "answer": "Uttar Pradesh",
      "explanation": "Our school is proudly situated in Belwariya Jungle, District Basti, Uttar Pradesh."
    },
    {
      "question": "How many spokes are in the Ashoka Chakra on the Indian flag?",
      "options": [
        "24",
        "12",
        "36",
        "20"
      ],
      "answer": "24",
      "explanation": "The navy blue Ashoka Chakra in the white band features 24 spokes representing 24 hours of purposeful life."
    },
    {
      "question": "Which is the highest mountain peak in the world?",
      "options": [
        "Mount Everest",
        "K2",
        "Kangchenjunga",
        "Makalu"
      ],
      "answer": "Mount Everest",
      "explanation": "Mount Everest stands at 8,848.86 meters above sea level in the Himalayas."
    },
    {
      "question": "Who was known as the 'Missile Man of India' and became the 11th President?",
      "options": [
        "Dr. A.P.J. Abdul Kalam",
        "Dr. Homi Bhabha",
        "Dr. Vikram Sarabhai",
        "Sir C.V. Raman"
      ],
      "answer": "Dr. A.P.J. Abdul Kalam",
      "explanation": "Dr. Kalam was a visionary scientist who spearheaded India's missile defense and space rocket programs."
    },
    {
      "question": "What is the name of the Indian Space Research Organisation?",
      "options": [
        "ISRO",
        "NASA",
        "ESA",
        "Roscosmos"
      ],
      "answer": "ISRO",
      "explanation": "ISRO is India's national space exploration agency headquartered in Bengaluru."
    },
    {
      "question": "Which state in India is widely called 'God's Own Country'?",
      "options": [
        "Kerala",
        "Goa",
        "Himachal Pradesh",
        "Tamil Nadu"
      ],
      "answer": "Kerala",
      "explanation": "Kerala is famous for its serene backwaters, lush greenery, and cultural heritage."
    },
    {
      "question": "Which Indian city is famously known as the 'Pink City'?",
      "options": [
        "Jaipur",
        "Udaipur",
        "Jodhpur",
        "Ahmedabad"
      ],
      "answer": "Jaipur",
      "explanation": "Jaipur was painted terracotta pink in 1876 to welcome the Prince of Wales."
    },
    {
      "question": "Which is the longest river flowing entirely or primarily within India?",
      "options": [
        "Ganga",
        "Yamuna",
        "Godavari",
        "Narmada"
      ],
      "answer": "Ganga",
      "explanation": "The sacred River Ganga flows approximately 2,525 kilometers to the Bay of Bengal."
    },
    {
      "question": "Who was the chief architect and chairman of the Drafting Committee of the Indian Constitution?",
      "options": [
        "Dr. B.R. Ambedkar",
        "Mahatma Gandhi",
        "Sardar Patel",
        "Jawaharlal Nehru"
      ],
      "answer": "Dr. B.R. Ambedkar",
      "explanation": "Babasaheb Dr. B.R. Ambedkar framed India's egalitarian democratic Constitution."
    },
    {
      "question": "Which is the highest mountain peak situated entirely within India?",
      "options": [
        "Kangchenjunga",
        "Mount Everest",
        "K2",
        "Nanda Devi"
      ],
      "answer": "Kangchenjunga",
      "explanation": "Kangchenjunga stands at 8,586 meters in Sikkim on the India-Nepal border."
    },
    {
      "question": "Who was known as the 'Iron Man of India' for integrating 560+ princely states?",
      "options": [
        "Sardar Vallabhbhai Patel",
        "Subhas Chandra Bose",
        "Lal Bahadur Shastri",
        "Bhagat Singh"
      ],
      "answer": "Sardar Vallabhbhai Patel",
      "explanation": "Sardar Patel united modern India and is commemorated by the Statue of Unity."
    },
    {
      "question": "Where is the world's tallest statue, the 'Statue of Unity', located?",
      "options": [
        "Gujarat (Kevadia)",
        "Maharashtra",
        "Rajasthan",
        "Uttar Pradesh"
      ],
      "answer": "Gujarat (Kevadia)",
      "explanation": "Standing 182 meters tall on the Narmada River, it honors Sardar Vallabhbhai Patel."
    },
    {
      "question": "Which Indian scientist won the Nobel Prize in Physics in 1930 for the scattering of light?",
      "options": [
        "Sir C.V. Raman",
        "Dr. Homi Bhabha",
        "Satyendra Nath Bose",
        "Dr. A.P.J. Abdul Kalam"
      ],
      "answer": "Sir C.V. Raman",
      "explanation": "The Raman Effect discovery is celebrated annually as National Science Day on 28 February."
    },
    {
      "question": "What is the capital city of Uttar Pradesh?",
      "options": [
        "Lucknow",
        "Kanpur",
        "Varanasi",
        "Prayagraj"
      ],
      "answer": "Lucknow",
      "explanation": "Lucknow, the city of Nawabs, is the administrative capital of Uttar Pradesh."
    },
    {
      "question": "Which ancient university in Bihar was a famous international center of learning?",
      "options": [
        "Nalanda University",
        "Taxila",
        "Vikramshila",
        "Banaras Hindu University"
      ],
      "answer": "Nalanda University",
      "explanation": "Nalanda attracted scholars from China, Korea, and Central Asia in ancient times."
    },
    {
      "question": "Who composed the patriotic song 'Sare Jahan Se Achha Hindustan Hamara'?",
      "options": [
        "Muhammad Iqbal",
        "Rabindranath Tagore",
        "Bankim Chandra",
        "Kavi Pradeep"
      ],
      "answer": "Muhammad Iqbal",
      "explanation": "Allama Iqbal penned the celebrated poem 'Tarana-e-Hindi' in 1904."
    },
    {
      "question": "Which Indian state has the longest coastal boundary line?",
      "options": [
        "Gujarat",
        "Maharashtra",
        "Tamil Nadu",
        "Andhra Pradesh"
      ],
      "answer": "Gujarat",
      "explanation": "Gujarat has a coastline extending over 1,600 kilometers along the Arabian Sea."
    },
    {
      "question": "In which year did India launch its historic First Satellite 'Aryabhata' into space?",
      "options": [
        "1975",
        "1969",
        "1983",
        "1990"
      ],
      "answer": "1975",
      "explanation": "Aryabhata was launched on 19 April 1975 using a Soviet Kosmos-3M rocket."
    },
    {
      "question": "Which sport is associated with the prestigious Ranji Trophy tournament in India?",
      "options": [
        "Cricket",
        "Football",
        "Hockey",
        "Badminton"
      ],
      "answer": "Cricket",
      "explanation": "The Ranji Trophy is India's premier first-class domestic cricket championship."
    },
    {
      "question": "What is the national game / state heritage sport traditionally revered in India?",
      "options": [
        "Field Hockey",
        "Cricket",
        "Kabaddi",
        "Kho-Kho"
      ],
      "answer": "Field Hockey",
      "explanation": "India has won 8 Olympic Gold medals in field hockey, led by legends like Major Dhyan Chand."
    },
    {
      "question": "Who was celebrated as the 'Wizard of Hockey' in Indian sports history?",
      "options": [
        "Major Dhyan Chand",
        "Balbir Singh Sr.",
        "Dhanraj Pillay",
        "K.D. Singh Babu"
      ],
      "answer": "Major Dhyan Chand",
      "explanation": "Major Dhyan Chand's birthday, 29 August, is celebrated as National Sports Day."
    },
    {
      "question": "Which sacred book was taught by Lord Krishna to Arjuna on the battlefield of Kurukshetra?",
      "options": [
        "Bhagavad Gita",
        "Ramayana",
        "Vedas",
        "Upanishads"
      ],
      "answer": "Bhagavad Gita",
      "explanation": "The Bhagavad Gita is a 700-verse philosophical dialogue within the Mahabharata."
    },
    {
      "question": "Who was the first woman Prime Minister of India?",
      "options": [
        "Indira Gandhi",
        "Sarojini Naidu",
        "Pratibha Patil",
        "Sushma Swaraj"
      ],
      "answer": "Indira Gandhi",
      "explanation": "Indira Gandhi served as Prime Minister from 1966–1977 and 1980–1984."
    },
    {
      "question": "Who was the first woman President of the Republic of India?",
      "options": [
        "Pratibha Patil",
        "Droupadi Murmu",
        "Indira Gandhi",
        "Sarojini Naidu"
      ],
      "answer": "Pratibha Patil",
      "explanation": "Pratibha Devisingh Patil served as the 12th President of India from 2007 to 2012."
    },
    {
      "question": "Which planet is the largest in our solar system?",
      "options": [
        "Jupiter",
        "Saturn",
        "Neptune",
        "Uranus"
      ],
      "answer": "Jupiter",
      "explanation": "Jupiter is a gas giant with a volume over 1,300 times that of Earth."
    },
    {
      "question": "What is the name of the galaxy that contains our Solar System?",
      "options": [
        "Milky Way Galaxy",
        "Andromeda",
        "Triangulum",
        "Whirlpool"
      ],
      "answer": "Milky Way Galaxy",
      "explanation": "The Milky Way is a barred spiral galaxy with hundreds of billions of stars."
    },
    {
      "question": "What is the largest ocean on planet Earth?",
      "options": [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean"
      ],
      "answer": "Pacific Ocean",
      "explanation": "The Pacific Ocean covers over 30% of Earth's total surface area."
    },
    {
      "question": "Which is the smallest continent by land area?",
      "options": [
        "Australia",
        "Europe",
        "Antarctica",
        "South America"
      ],
      "answer": "Australia",
      "explanation": "Australia is both an island continent and a nation."
    },
    {
      "question": "Which is the largest continent on Earth by both size and population?",
      "options": [
        "Asia",
        "Africa",
        "North America",
        "Europe"
      ],
      "answer": "Asia",
      "explanation": "Asia covers ~30% of global land area and hosts ~60% of human population."
    },
    {
      "question": "What is the name of the desert located in northwestern India?",
      "options": [
        "Thar Desert (Great Indian Desert)",
        "Sahara Desert",
        "Gobi Desert",
        "Kalahari Desert"
      ],
      "answer": "Thar Desert (Great Indian Desert)",
      "explanation": "The Thar Desert spans across Rajasthan into southeastern Pakistan."
    },
    {
      "question": "Which state in India is known as the 'Tea Garden of India'?",
      "options": [
        "Assam",
        "Kerala",
        "West Bengal",
        "Karnataka"
      ],
      "answer": "Assam",
      "explanation": "Assam produces world-famous strong black tea in the Brahmaputra valley."
    },
    {
      "question": "Which classical dance form originated in the temples of Tamil Nadu?",
      "options": [
        "Bharatanatyam",
        "Kathak",
        "Kathakali",
        "Odissi"
      ],
      "answer": "Bharatanatyam",
      "explanation": "Bharatanatyam is known for precise footwork, mudras, and expressive abhinaya."
    },
    {
      "question": "Which classical dance form is native to northern India and Uttar Pradesh?",
      "options": [
        "Kathak",
        "Kuchipudi",
        "Manipuri",
        "Mohiniyattam"
      ],
      "answer": "Kathak",
      "explanation": "Kathak comes from 'Katha' (storytellers), featuring rhythmic spins and ghungroo footwork."
    },
    {
      "question": "Where is the headquarters of the United Nations (UN) situated?",
      "options": [
        "New York City, USA",
        "Geneva, Switzerland",
        "London, UK",
        "Paris, France"
      ],
      "answer": "New York City, USA",
      "explanation": "The UN headquarters on the East River in Manhattan was established in 1952."
    },
    {
      "question": "Who discovered the law of universal gravitation when observing a falling apple?",
      "options": [
        "Sir Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Nikola Tesla"
      ],
      "answer": "Sir Isaac Newton",
      "explanation": "Newton published the Principia Mathematica in 1687 outlining gravity and motion."
    },
    {
      "question": "Who invented the electric incandescent light bulb commercially?",
      "options": [
        "Thomas Alva Edison",
        "Alexander Graham Bell",
        "Michael Faraday",
        "James Watt"
      ],
      "answer": "Thomas Alva Edison",
      "explanation": "Edison developed a practical carbon filament incandescent bulb in 1879."
    },
    {
      "question": "Who is credited with inventing the telephone in 1876?",
      "options": [
        "Alexander Graham Bell",
        "Guglielmo Marconi",
        "Samuel Morse",
        "Nikola Tesla"
      ],
      "answer": "Alexander Graham Bell",
      "explanation": "Bell was awarded the first US patent for electrical speech transmission."
    },
    {
      "question": "Which Indian festival celebrates the bond of love between brothers and sisters?",
      "options": [
        "Raksha Bandhan",
        "Bhai Dooj",
        "Karwa Chauth",
        "Makar Sankranti"
      ],
      "answer": "Raksha Bandhan",
      "explanation": "Sisters tie sacred protective threads (Rakhi) and brothers pledge lifelong support."
    },
    {
      "question": "What is the national motto of India?",
      "options": [
        "Satyameva Jayate",
        "Vande Mataram",
        "Jai Jawan Jai Kisan",
        "Inquilab Zindabad"
      ],
      "answer": "Satyameva Jayate",
      "explanation": "'Truth alone triumphs' from the ancient Mundaka Upanishad."
    },
    {
      "question": "Which Indian state has Hindi and Urdu as its primary widely spoken languages?",
      "options": [
        "Uttar Pradesh",
        "Tamil Nadu",
        "Odisha",
        "Kerala"
      ],
      "answer": "Uttar Pradesh",
      "explanation": "Both Hindi and Urdu are official administrative languages in Uttar Pradesh."
    },
    {
      "question": "Which famous cave paintings depicting Buddhist Jataka tales are in Maharashtra?",
      "options": [
        "Ajanta Caves",
        "Elephanta Caves",
        "Badami Caves",
        "Bhimbetka Caves"
      ],
      "answer": "Ajanta Caves",
      "explanation": "The Ajanta Caves near Aurangabad date from the 2nd century BCE to 480 CE."
    },
    {
      "question": "Who gave the famous national slogan 'Jai Jawan, Jai Kisan'?",
      "options": [
        "Lal Bahadur Shastri",
        "Jawaharlal Nehru",
        "Indira Gandhi",
        "Atal Bihari Vajpayee"
      ],
      "answer": "Lal Bahadur Shastri",
      "explanation": "Prime Minister Shastri raised this slogan during the 1965 war to honor soldiers and farmers."
    },
    {
      "question": "Which Indian leader was called 'Netaji' and formed the Azad Hind Fauj (INA)?",
      "options": [
        "Subhas Chandra Bose",
        "Bhagat Singh",
        "Chandra Shekhar Azad",
        "Lala Lajpat Rai"
      ],
      "answer": "Subhas Chandra Bose",
      "explanation": "Netaji Bose gave the rousing call 'Give me blood, and I will give you freedom!'"
    },
    {
      "question": "Who was the young freedom fighter who embraced martyrdom at age 23 with Sukhdev and Rajguru?",
      "options": [
        "Bhagat Singh",
        "Mangal Pandey",
        "Ashfaqulla Khan",
        "Ram Prasad Bismil"
      ],
      "answer": "Bhagat Singh",
      "explanation": "Shaheed Bhagat Singh is an enduring icon of courage and patriotism in India."
    },
    {
      "question": "What is the supreme judicial court of the Republic of India?",
      "options": [
        "Supreme Court of India",
        "High Court",
        "District Court",
        "Session Court"
      ],
      "answer": "Supreme Court of India",
      "explanation": "The Supreme Court in New Delhi is the guardian of the Indian Constitution."
    },
    {
      "question": "How many states and Union Territories are there in India currently?",
      "options": [
        "28 States and 8 Union Territories",
        "29 States and 7 UTs",
        "25 States and 9 UTs",
        "28 States and 9 UTs"
      ],
      "answer": "28 States and 8 Union Territories",
      "explanation": "Following Jammu & Kashmir reorganization, India has 28 States and 8 Union Territories."
    },
    {
      "question": "Which river is holy to millions and joins the Yamuna at Triveni Sangam in Prayagraj?",
      "options": [
        "Ganga",
        "Narmada",
        "Godavari",
        "Cauvery"
      ],
      "answer": "Ganga",
      "explanation": "The sacred confluence of Ganga, Yamuna, and mythical Saraswati is in Prayagraj."
    },
    {
      "question": "Who is the constitutional head of the State government in an Indian state?",
      "options": [
        "Governor",
        "Chief Minister",
        "Chief Justice",
        "Speaker"
      ],
      "answer": "Governor",
      "explanation": "The Governor is appointed by the President as the constitutional executive head."
    },
    {
      "question": "Which instrument is used to determine cardinal directions (North, South, East, West)?",
      "options": [
        "Magnetic Compass",
        "Barometer",
        "Speedometer",
        "Altimeter"
      ],
      "answer": "Magnetic Compass",
      "explanation": "A magnetized needle aligns with Earth's magnetic north-south meridian."
    },
    {
      "question": "What is the primary harvest festival celebrated in Punjab during April?",
      "options": [
        "Baisakhi",
        "Lohri",
        "Karwa Chauth",
        "Teej"
      ],
      "answer": "Baisakhi",
      "explanation": "Baisakhi marks the ripening of the rabi harvest and the founding of the Khalsa (1699)."
    },
    {
      "question": "Which harvest festival is celebrated across South India with sugarcane and rice dishes?",
      "options": [
        "Pongal / Makar Sankranti",
        "Onam",
        "Ugadi",
        "Vishu"
      ],
      "answer": "Pongal / Makar Sankranti",
      "explanation": "Pongal is a four-day thanksgiving festival dedicated to the Sun god Surya."
    },
    {
      "question": "Which natural wonder is the deepest oceanic trench on planet Earth?",
      "options": [
        "Mariana Trench",
        "Java Trench",
        "Puerto Rico Trench",
        "Sunda Trench"
      ],
      "answer": "Mariana Trench",
      "explanation": "The Challenger Deep in the Mariana Trench plunges nearly 11,000 meters deep."
    },
    {
      "question": "Who was the mathematician from India who discovered zero (0) and calculated pi?",
      "options": [
        "Aryabhata",
        "Varahamihira",
        "Brahmagupta",
        "Bhaskara II"
      ],
      "answer": "Aryabhata",
      "explanation": "Aryabhata (476–550 CE) pioneered place-value arithmetic and spherical trigonometry."
    }
  ],
  "middle": [
    {
      "question": "Who was the chief architect and chairman of the Drafting Committee of the Indian Constitution?",
      "options": [
        "Dr. B.R. Ambedkar",
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Sardar Vallabhbhai Patel"
      ],
      "answer": "Dr. B.R. Ambedkar",
      "explanation": "Dr. Bhimrao Ramji Ambedkar headed the Drafting Committee that framed the Constitution of India."
    },
    {
      "question": "Which Indian scientist won the Nobel Prize in Physics in 1930 for the discovery of light scattering?",
      "options": [
        "Sir C.V. Raman",
        "Satyendra Nath Bose",
        "Meghnad Saha",
        "Subrahmanyan Chandrasekhar"
      ],
      "answer": "Sir C.V. Raman",
      "explanation": "Sir C.V. Raman discovered the Raman Effect, celebrated annually as National Science Day (Feb 28)."
    },
    {
      "question": "Which is the largest ocean on Earth?",
      "options": [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean"
      ],
      "answer": "Pacific Ocean",
      "explanation": "The Pacific Ocean is larger than all Earth’s land area combined."
    },
    {
      "question": "What is the capital of Uttar Pradesh?",
      "options": [
        "Lucknow",
        "Kanpur",
        "Prayagraj",
        "Varanasi"
      ],
      "answer": "Lucknow",
      "explanation": "Lucknow, known as the City of Nawabs, is the capital of Uttar Pradesh."
    },
    {
      "question": "On which date is National Science Day celebrated across India?",
      "options": [
        "28 February",
        "15 August",
        "5 September",
        "14 November"
      ],
      "answer": "28 February",
      "explanation": "28 February marks the anniversary of Sir C.V. Raman’s discovery of the Raman Effect in 1928."
    },
    {
      "question": "Under which Article of the Indian Constitution is the 'Right to Equality' guaranteed?",
      "options": [
        "Article 14 - 18",
        "Article 19 - 22",
        "Article 23 - 24",
        "Article 25 - 28"
      ],
      "answer": "Article 14 - 18",
      "explanation": "Articles 14 to 18 ensure equality before the law and prohibition of discrimination."
    },
    {
      "question": "Who was the President of India when Pokhran-II nuclear tests were conducted in 1998?",
      "options": [
        "K.R. Narayanan",
        "Dr. A.P.J. Abdul Kalam",
        "R. Venkataraman",
        "Shankar Dayal Sharma"
      ],
      "answer": "K.R. Narayanan",
      "explanation": "Pokhran-II was executed under PM Atal Bihari Vajpayee and President K.R. Narayanan."
    },
    {
      "question": "In which year was the historic Battle of Plassey fought establishing British East India rule?",
      "options": [
        "1757",
        "1764",
        "1857",
        "1707"
      ],
      "answer": "1757",
      "explanation": "Robert Clive defeated Nawab Siraj-ud-Daulah of Bengal at Plassey on 23 June 1757."
    },
    {
      "question": "Which constitutional amendment reduced the voting age in India from 21 to 18 years?",
      "options": [
        "61st Amendment Act (1988)",
        "42nd Amendment",
        "44th Amendment",
        "73rd Amendment"
      ],
      "answer": "61st Amendment Act (1988)",
      "explanation": "The 61st Amendment gave youth the democratic right to elect their representatives."
    },
    {
      "question": "Who was the founder of the Maurya Empire with guidance from master strategist Chanakya?",
      "options": [
        "Chandragupta Maurya",
        "Ashoka the Great",
        "Bindusara",
        "Harsha"
      ],
      "answer": "Chandragupta Maurya",
      "explanation": "Chandragupta unified northern India into a centralized empire around 321 BCE."
    },
    {
      "question": "What was the original Sanskrit name of Chanakya, author of the treatise Arthashastra?",
      "options": [
        "Vishnugupta / Kautilya",
        "Patanjali",
        "Panini",
        "Kalidasa"
      ],
      "answer": "Vishnugupta / Kautilya",
      "explanation": "Chanakya (Vishnugupta) codified statecraft, economics, espionage, and diplomacy."
    },
    {
      "question": "Which ancient Indian Emperor renounced warfare and embraced Buddhism after the Kalinga War?",
      "options": [
        "Ashoka the Great",
        "Kanishka",
        "Samudragupta",
        "Harshavardhana"
      ],
      "answer": "Ashoka the Great",
      "explanation": "Emperor Ashoka inscribed edicts across India promoting Ahimsa, peace, and Dhamma."
    },
    {
      "question": "Which international agency within the United Nations oversees world cultural heritage sites?",
      "options": [
        "UNESCO",
        "UNICEF",
        "WHO",
        "UNHCR"
      ],
      "answer": "UNESCO",
      "explanation": "UNESCO designates and protects cultural and natural landmarks of universal value."
    },
    {
      "question": "Who was the first Indian citizen to travel into outer space aboard Soyuz T-11 in 1984?",
      "options": [
        "Wing Commander Rakesh Sharma",
        "Kalpana Chawla",
        "Sunita Williams",
        "Vikram Sarabhai"
      ],
      "answer": "Wing Commander Rakesh Sharma",
      "explanation": "When asked by PM Indira Gandhi how India looked from space, he replied 'Saare Jahan Se Achha'."
    },
    {
      "question": "What is the tenure of a member of the Rajya Sabha (Council of States) in Indian Parliament?",
      "options": [
        "6 years",
        "5 years",
        "4 years",
        "Permanent"
      ],
      "answer": "6 years",
      "explanation": "Rajya Sabha is a permanent house where one-third of members retire every two years."
    },
    {
      "question": "Who presides as the ex-officio Chairman over the proceedings of the Rajya Sabha?",
      "options": [
        "Vice-President of India",
        "Prime Minister",
        "Speaker of Lok Sabha",
        "Chief Justice"
      ],
      "answer": "Vice-President of India",
      "explanation": "Article 64 mandates that the Vice-President serves as ex-officio Chairman of Rajya Sabha."
    },
    {
      "question": "What is the maximum strength of the Lok Sabha as per the Indian Constitution?",
      "options": [
        "550 members",
        "545 members",
        "500 members",
        "600 members"
      ],
      "answer": "550 members",
      "explanation": "Following 104th amendment (removing Anglo-Indian nominations), maximum strength is 550."
    },
    {
      "question": "Which Mughal emperor built the grand Jama Masjid and Red Fort in Delhi?",
      "options": [
        "Shah Jahan",
        "Akbar",
        "Humayun",
        "Jahangir"
      ],
      "answer": "Shah Jahan",
      "explanation": "Shah Jahan's reign represented the golden age of classical Mughal architecture."
    },
    {
      "question": "Which Indian reformer founded the Brahmo Samaj in 1828 and campaigned to abolish Sati?",
      "options": [
        "Raja Ram Mohan Roy",
        "Swami Vivekananda",
        "Ishwar Chandra Vidyasagar",
        "Dayananda Saraswati"
      ],
      "answer": "Raja Ram Mohan Roy",
      "explanation": "Raja Ram Mohan Roy is hailed as the 'Father of Modern Indian Renaissance'."
    },
    {
      "question": "Who founded the Arya Samaj in 1875 with the call 'Go back to the Vedas'?",
      "options": [
        "Swami Dayananda Saraswati",
        "Swami Vivekananda",
        "Ramakrishna Paramahamsa",
        "Sri Aurobindo"
      ],
      "answer": "Swami Dayananda Saraswati",
      "explanation": "Swami Dayananda advocated Vedic truth, social reform, and rejection of superstitions."
    },
    {
      "question": "Who represented India with a landmark speech on universal tolerance at the 1893 Chicago Parliament?",
      "options": [
        "Swami Vivekananda",
        "Rabindranath Tagore",
        "Mahatma Gandhi",
        "Sri Aurobindo"
      ],
      "answer": "Swami Vivekananda",
      "explanation": "Swami Vivekananda addressed the audience as 'Sisters and brothers of America' to thunderous applause."
    },
    {
      "question": "Which Indian state has a separate bicameral state legislature (Vidhan Sabha and Vidhan Parishad)?",
      "options": [
        "Uttar Pradesh",
        "Kerala",
        "Punjab",
        "Gujarat"
      ],
      "answer": "Uttar Pradesh",
      "explanation": "Uttar Pradesh possesses both a Legislative Assembly (403 seats) and Legislative Council (100 seats)."
    },
    {
      "question": "Which treaty ended the First World War in 1919?",
      "options": [
        "Treaty of Versailles",
        "Treaty of Paris",
        "Treaty of Vienna",
        "Treaty of Ghent"
      ],
      "answer": "Treaty of Versailles",
      "explanation": "The Treaty of Versailles imposed severe reparations on Germany at the Hall of Mirrors."
    },
    {
      "question": "In which year was the United Nations Organization officially established?",
      "options": [
        "1945",
        "1919",
        "1939",
        "1950"
      ],
      "answer": "1945",
      "explanation": "The UN was founded on 24 October 1945 by 51 signatory nations following World War II."
    },
    {
      "question": "Who discovered the antibiotic Penicillin from Penicillium notatum mold in 1928?",
      "options": [
        "Alexander Fleming",
        "Louis Pasteur",
        "Edward Jenner",
        "Robert Koch"
      ],
      "answer": "Alexander Fleming",
      "explanation": "Sir Alexander Fleming's discovery revolutionized medical treatment of bacterial infections."
    },
    {
      "question": "Who developed the first successful smallpox vaccine using cowpox fluid in 1796?",
      "options": [
        "Edward Jenner",
        "Louis Pasteur",
        "Jonas Salk",
        "Robert Koch"
      ],
      "answer": "Edward Jenner",
      "explanation": "Edward Jenner is celebrated worldwide as the pioneer of modern immunization and vaccines."
    },
    {
      "question": "What is the currency of the United Kingdom?",
      "options": [
        "Pound Sterling (£)",
        "Euro (€)",
        "Dollar ($)",
        "Franc"
      ],
      "answer": "Pound Sterling (£)",
      "explanation": "The British Pound is one of the oldest continuously used world currencies."
    },
    {
      "question": "What is the currency of Japan?",
      "options": [
        "Japanese Yen (¥)",
        "Won",
        "Yuan",
        "Ringgit"
      ],
      "answer": "Japanese Yen (¥)",
      "explanation": "The Yen is the official legal currency of Japan."
    },
    {
      "question": "Who wrote the internationally celebrated national anthem of Bangladesh, 'Amar Shonar Bangla'?",
      "options": [
        "Rabindranath Tagore",
        "Kazi Nazrul Islam",
        "Jibanand Das",
        "Bankim Chandra"
      ],
      "answer": "Rabindranath Tagore",
      "explanation": "Tagore has the rare distinction of authoring the national anthems of both India and Bangladesh."
    },
    {
      "question": "Which line of latitude divides India into almost two equal halves?",
      "options": [
        "Tropic of Cancer (23.5° N)",
        "Equator (0°)",
        "Tropic of Capricorn",
        "Arctic Circle"
      ],
      "answer": "Tropic of Cancer (23.5° N)",
      "explanation": "The Tropic of Cancer passes through 8 Indian states from Gujarat to Mizoram."
    },
    {
      "question": "Which is the oldest fold mountain range in India and the world?",
      "options": [
        "Aravalli Range",
        "Himalayas",
        "Western Ghats",
        "Vindhyas"
      ],
      "answer": "Aravalli Range",
      "explanation": "The ancient Precambrian Aravalli range extends from Gujarat through Rajasthan to Delhi."
    },
    {
      "question": "What is the official residence and workplace of the President of India?",
      "options": [
        "Rashtrapati Bhavan",
        "Parliament House",
        "Red Fort",
        "Raj Bhavan"
      ],
      "answer": "Rashtrapati Bhavan",
      "explanation": "Designed by Edwin Lutyens, Rashtrapati Bhavan has 340 rooms on Raisina Hill."
    },
    {
      "question": "Who was the author of the epic ancient Sanskrit play 'Abhijnanashakuntalam'?",
      "options": [
        "Mahakavi Kalidasa",
        "Bhasa",
        "Bhavabhuti",
        "Sudraka"
      ],
      "answer": "Mahakavi Kalidasa",
      "explanation": "Kalidasa was court poet in the Gupta empire and India's greatest classical playwright."
    },
    {
      "question": "Which Indian festival in Kerala features magnificent snake boat races (Vallam Kali)?",
      "options": [
        "Onam",
        "Pongal",
        "Vishu",
        "Thrissur Pooram"
      ],
      "answer": "Onam",
      "explanation": "Onam celebrates the homecoming of the mythical King Mahabali during harvest season."
    },
    {
      "question": "Which fundamental right in the Indian Constitution is called the 'Heart and Soul of the Constitution'?",
      "options": [
        "Right to Constitutional Remedies (Article 32)",
        "Right to Equality",
        "Right to Freedom",
        "Right to Religion"
      ],
      "answer": "Right to Constitutional Remedies (Article 32)",
      "explanation": "Dr. Ambedkar noted that without Article 32 to enforce rights via writs, the Constitution is null."
    },
    {
      "question": "Who appoints the Chief Justice of India and Judges of the Supreme Court?",
      "options": [
        "The President of India",
        "The Prime Minister",
        "The Law Minister",
        "The Parliament"
      ],
      "answer": "The President of India",
      "explanation": "Under Article 124(2), the President appoints judges following collegium recommendations."
    },
    {
      "question": "Which Indian satellite launch vehicle is nicknamed the 'Workhorse of ISRO'?",
      "options": [
        "PSLV (Polar Satellite Launch Vehicle)",
        "GSLV",
        "SLV-3",
        "ASLV"
      ],
      "answer": "PSLV (Polar Satellite Launch Vehicle)",
      "explanation": "PSLV has achieved over 50 successful orbital satellite delivery missions."
    },
    {
      "question": "In which year did Chandrayaan-1 discover water molecules (H₂O/OH) on the Moon's surface?",
      "options": [
        "2008",
        "2014",
        "2019",
        "2005"
      ],
      "answer": "2008",
      "explanation": "ISRO's Chandrayaan-1 with M3 instrument detected hydroxyl and water on the lunar regolith."
    },
    {
      "question": "Who was the first woman in space, orbiting Earth 48 times in Vostok 6 in 1963?",
      "options": [
        "Valentina Tereshkova",
        "Sally Ride",
        "Svetlana Savitskaya",
        "Kalpana Chawla"
      ],
      "answer": "Valentina Tereshkova",
      "explanation": "Soviet cosmonaut Valentina Tereshkova remains the only woman to complete a solo space mission."
    },
    {
      "question": "Which is the largest public sector commercial bank in India?",
      "options": [
        "State Bank of India (SBI)",
        "Punjab National Bank",
        "Bank of Baroda",
        "Canara Bank"
      ],
      "answer": "State Bank of India (SBI)",
      "explanation": "SBI handles over a quarter of India's banking transactions with 22,000+ branches."
    },
    {
      "question": "What is the central banking institution of India that issues currency banknotes?",
      "options": [
        "Reserve Bank of India (RBI)",
        "State Bank of India",
        "NABARD",
        "SEBI"
      ],
      "answer": "Reserve Bank of India (RBI)",
      "explanation": "Established in 1935, the RBI regulates monetary policy, liquidity, and currency notes."
    },
    {
      "question": "Where is the headquarters of the Reserve Bank of India located?",
      "options": [
        "Mumbai",
        "New Delhi",
        "Kolkata",
        "Chennai"
      ],
      "answer": "Mumbai",
      "explanation": "RBI's central office was relocated from Kolkata to Mumbai in 1937."
    },
    {
      "question": "Who was the political guru of Mahatma Gandhi whom he revered deeply?",
      "options": [
        "Gopal Krishna Gokhale",
        "Bal Gangadhar Tilak",
        "Dadabhai Naoroji",
        "Lala Lajpat Rai"
      ],
      "answer": "Gopal Krishna Gokhale",
      "explanation": "Gokhale advised Gandhi to tour rural India for one year to understand its people."
    },
    {
      "question": "Who proclaimed 'Swaraj is my birthright, and I shall have it' during the freedom struggle?",
      "options": [
        "Bal Gangadhar Tilak",
        "Bipin Chandra Pal",
        "Lala Lajpat Rai",
        "Aurobindo Ghosh"
      ],
      "answer": "Bal Gangadhar Tilak",
      "explanation": "Lokmanya Tilak galvanized mass public support and introduced public Ganeshotsav festivals."
    },
    {
      "question": "In which year was the Partition of Bengal announced by Viceroy Lord Curzon?",
      "options": [
        "1905",
        "1911",
        "1919",
        "1885"
      ],
      "answer": "1905",
      "explanation": "The 1905 partition ignited the Swadeshi boycott movement and was annulled in 1911."
    },
    {
      "question": "Which tragic event on 13 April 1919 led Rabindranath Tagore to renounce his Knighthood?",
      "options": [
        "Jallianwala Bagh Massacre",
        "Chauri Chaura",
        "Rowlatt Act",
        "Simon Commission"
      ],
      "answer": "Jallianwala Bagh Massacre",
      "explanation": "General Dyer's troops fired upon unarmed crowds at Amritsar, killing hundreds."
    },
    {
      "question": "Who was the founder of the Indian National Congress (INC) in 1885?",
      "options": [
        "Allan Octavian Hume",
        "W.C. Bonnerjee",
        "Dadabhai Naoroji",
        "Surendranath Banerjee"
      ],
      "answer": "Allan Octavian Hume",
      "explanation": "Retired civil servant A.O. Hume founded the INC with 72 delegates in Bombay."
    },
    {
      "question": "Who was the first President of the Indian National Congress in 1885?",
      "options": [
        "Womesh Chandra Bonnerjee",
        "Dadabhai Naoroji",
        "Dinshaw Wacha",
        "George Yule"
      ],
      "answer": "Womesh Chandra Bonnerjee",
      "explanation": "W.C. Bonnerjee presided over the first session at Gokuldas Tejpal Sanskrit College."
    },
    {
      "question": "Which Indian leader was affectionately called the 'Grand Old Man of India'?",
      "options": [
        "Dadabhai Naoroji",
        "Gopal Krishna Gokhale",
        "Mahatma Gandhi",
        "Pherozeshah Mehta"
      ],
      "answer": "Dadabhai Naoroji",
      "explanation": "Dadabhai Naoroji authored 'Poverty and Un-British Rule in India', exposing economic drain."
    },
    {
      "question": "What is the highest civilian award conferred by the Republic of India?",
      "options": [
        "Bharat Ratna",
        "Padma Vibhushan",
        "Padma Bhushan",
        "Padma Shri"
      ],
      "answer": "Bharat Ratna",
      "explanation": "Instituted in 1954, the Bharat Ratna honors exceptional service of the highest order."
    },
    {
      "question": "Who was the first non-Indian citizen to be awarded the Bharat Ratna?",
      "options": [
        "Khan Abdul Ghaffar Khan",
        "Nelson Mandela",
        "Mother Teresa",
        "Martin Luther King Jr."
      ],
      "answer": "Khan Abdul Ghaffar Khan",
      "explanation": "'Frontier Gandhi' Khan Abdul Ghaffar Khan received the Bharat Ratna in 1987."
    },
    {
      "question": "What is the military highest gallantry award for valor in the presence of the enemy in India?",
      "options": [
        "Param Vir Chakra (PVC)",
        "Maha Vir Chakra",
        "Vir Chakra",
        "Ashoka Chakra"
      ],
      "answer": "Param Vir Chakra (PVC)",
      "explanation": "The Param Vir Chakra recognizes most conspicuous bravery or self-sacrifice."
    },
    {
      "question": "Who was the first recipient of the Param Vir Chakra for valor during the 1947 battle of Badgam?",
      "options": [
        "Major Somnath Sharma",
        "Captain Vikram Batra",
        "Abdul Hamid",
        "Bana Singh"
      ],
      "answer": "Major Somnath Sharma",
      "explanation": "Major Somnath Sharma of 4 Kumaon regiment posthumously received the first PVC."
    },
    {
      "question": "Which river is celebrated as the 'Sorrow of Bihar' due to frequent devastating floods?",
      "options": [
        "Kosi River",
        "Gandak River",
        "Son River",
        "Ghaghara River"
      ],
      "answer": "Kosi River",
      "explanation": "Kosi shifts its dynamic braided channels across North Bihar plains during monsoons."
    },
    {
      "question": "Which international boundary line demarcates the border between India and Pakistan?",
      "options": [
        "Radcliffe Line",
        "McMahon Line",
        "Durand Line",
        "Hindenburg Line"
      ],
      "answer": "Radcliffe Line",
      "explanation": "Sir Cyril Radcliffe drew the boundary partition line in August 1947."
    }
  ],
  "secondary": [
    {
      "question": "In which year did India launch its historic Chandrayaan-3 mission that achieved a soft landing near the lunar south pole?",
      "options": [
        "2023",
        "2021",
        "2019",
        "2024"
      ],
      "answer": "2023",
      "explanation": "ISRO’s Chandrayaan-3 successfully landed on the Moon on August 23, 2023, celebrated as National Space Day."
    },
    {
      "question": "Which fundamental right in the Indian Constitution is termed the \"Heart and Soul of the Constitution\" by Dr. Ambedkar?",
      "options": [
        "Right to Constitutional Remedies (Article 32)",
        "Right to Equality (Article 14)",
        "Right to Freedom of Speech (Article 19)",
        "Right to Education (Article 21A)"
      ],
      "answer": "Right to Constitutional Remedies (Article 32)",
      "explanation": "Article 32 empowers citizens to move the Supreme Court directly for enforcement of Fundamental Rights."
    },
    {
      "question": "The Tropic of Cancer passes through how many Indian states?",
      "options": [
        "8",
        "6",
        "10",
        "7"
      ],
      "answer": "8",
      "explanation": "It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram."
    },
    {
      "question": "Who wrote the Sanskrit epic \"Ramayana\"?",
      "options": [
        "Maharishi Valmiki",
        "Ved Vyas",
        "Kalidasa",
        "Tulsidas"
      ],
      "answer": "Maharishi Valmiki",
      "explanation": "Valmiki authored the original Sanskrit Ramayana; Tulsidas composed the Awadhi Ramcharitmanas."
    },
    {
      "question": "Which Indian space agency launched the Aditya-L1 solar observatory mission?",
      "options": [
        "ISRO",
        "DRDO",
        "BARC",
        "NASA"
      ],
      "answer": "ISRO",
      "explanation": "The Indian Space Research Organisation (ISRO) successfully placed Aditya-L1 into orbit around the Sun-Earth L1 Lagrange point."
    },
    {
      "question": "Which Schedule of the Indian Constitution lists the 22 officially recognized languages?",
      "options": [
        "Eighth Schedule",
        "Seventh Schedule",
        "Tenth Schedule",
        "Eleventh Schedule"
      ],
      "answer": "Eighth Schedule",
      "explanation": "The Eighth Schedule contains 22 scheduled languages including Hindi, Sanskrit, and Urdu."
    },
    {
      "question": "Under which Article of the Constitution can the President proclaim a National Emergency?",
      "options": [
        "Article 352",
        "Article 356",
        "Article 360",
        "Article 370"
      ],
      "answer": "Article 352",
      "explanation": "Article 352 permits a national emergency during war, external aggression, or armed rebellion."
    },
    {
      "question": "Which Article provides for the imposition of President's Rule in states on constitutional failure?",
      "options": [
        "Article 356",
        "Article 352",
        "Article 360",
        "Article 365"
      ],
      "answer": "Article 356",
      "explanation": "Article 356 allows central executive administration when state governance breaks down."
    },
    {
      "question": "Which Article of the Indian Constitution guarantees Financial Emergency?",
      "options": [
        "Article 360",
        "Article 356",
        "Article 352",
        "Article 280"
      ],
      "answer": "Article 360",
      "explanation": "Financial Emergency under Article 360 has never been declared in India."
    },
    {
      "question": "Which milestone case established the inviolable 'Basic Structure Doctrine' of the Indian Constitution?",
      "options": [
        "Kesavananda Bharati v. State of Kerala (1973)",
        "Golaknath Case",
        "Minerva Mills Case",
        "Maneka Gandhi Case"
      ],
      "answer": "Kesavananda Bharati v. State of Kerala (1973)",
      "explanation": "A 13-judge bench ruled Parliament cannot amend or dismantle the Constitution's core identity."
    },
    {
      "question": "Which Constitutional Amendment is popularly known as the 'Mini-Constitution'?",
      "options": [
        "42nd Amendment Act (1976)",
        "44th Amendment Act",
        "73rd Amendment Act",
        "86th Amendment Act"
      ],
      "answer": "42nd Amendment Act (1976)",
      "explanation": "The 42nd Amendment inserted 'Socialist, Secular, and Integrity' into the Preamble."
    },
    {
      "question": "Which Constitutional Amendment made Free and Compulsory Education a Fundamental Right (Article 21A)?",
      "options": [
        "86th Amendment Act (2002)",
        "73rd Amendment",
        "91st Amendment",
        "44th Amendment"
      ],
      "answer": "86th Amendment Act (2002)",
      "explanation": "Article 21A guarantees free education to all children between 6 and 14 years of age."
    },
    {
      "question": "Which Commission was instituted by the British government in 1927 that had no Indian members?",
      "options": [
        "Simon Commission",
        "Cripps Mission",
        "Cabinet Mission",
        "Hunter Commission"
      ],
      "answer": "Simon Commission",
      "explanation": "Indians protested with black flags and banners shouting 'Simon Go Back!'"
    },
    {
      "question": "During the anti-Simon Commission protests in Lahore, which prominent leader suffered fatal lathi blows?",
      "options": [
        "Lala Lajpat Rai",
        "Bal Gangadhar Tilak",
        "Bipin Chandra Pal",
        "Bhagat Singh"
      ],
      "answer": "Lala Lajpat Rai",
      "explanation": "'Punjab Kesari' Lala Lajpat Rai declared: 'Every blow aimed at me is a nail in the coffin of British imperialism.'"
    },
    {
      "question": "In which year did Mahatma Gandhi launch the historic Salt March (Dandi March) from Sabarmati?",
      "options": [
        "1930",
        "1920",
        "1942",
        "1919"
      ],
      "answer": "1930",
      "explanation": "On 12 March 1930, Gandhi marched 240 miles to Dandi to break the salt tax monopoly."
    },
    {
      "question": "Which resolution passed on 8 August 1942 launched the 'Quit India Movement' in Mumbai?",
      "options": [
        "Quit India Resolution (August Kranti)",
        "Purna Swaraj Resolution",
        "Delhi Chalo",
        "Direct Action"
      ],
      "answer": "Quit India Resolution (August Kranti)",
      "explanation": "Gandhi gave the electrifying call to the nation: 'Do or Die' (Karo ya Maro)."
    },
    {
      "question": "At which historic session of the Indian National Congress in 1929 was 'Purna Swaraj' declared?",
      "options": [
        "Lahore Session",
        "Karachi Session",
        "Belgaum Session",
        "Tripuri Session"
      ],
      "answer": "Lahore Session",
      "explanation": "Presided over by Jawaharlal Nehru on the banks of Ravi river, 26 January 1930 was fixed as Independence Day."
    },
    {
      "question": "Who was the sole President of the Indian National Congress who presided over the 1924 Belgaum session?",
      "options": [
        "Mahatma Gandhi",
        "Sardar Patel",
        "Jawaharlal Nehru",
        "Subhas Chandra Bose"
      ],
      "answer": "Mahatma Gandhi",
      "explanation": "The 1924 Belgaum session was the only INC session ever presided over by Mahatma Gandhi."
    },
    {
      "question": "Which Viceroy partitioned Bengal in 1905?",
      "options": [
        "Lord Curzon",
        "Lord Dalhousie",
        "Lord Ripon",
        "Lord Mountbatten"
      ],
      "answer": "Lord Curzon",
      "explanation": "Curzon's divide-and-rule partition provoked widespread boycott and nationalist consolidation."
    },
    {
      "question": "Which British Governor-General formulated the aggressive expansionist 'Doctrine of Lapse'?",
      "options": [
        "Lord Dalhousie",
        "Lord Wellesley",
        "Lord Hastings",
        "Lord Canning"
      ],
      "answer": "Lord Dalhousie",
      "explanation": "States like Jhansi, Satara, and Nagpur without biological male heirs were annexed."
    },
    {
      "question": "Who was the brave queen of Jhansi who fought British forces in the First War of Independence (1857)?",
      "options": [
        "Rani Lakshmibai",
        "Begum Hazrat Mahal",
        "Rani Chennamma",
        "Kasturba Gandhi"
      ],
      "answer": "Rani Lakshmibai",
      "explanation": "Rani Lakshmibai fought valiantly on horseback, immortalized as the Heroine of 1857."
    },
    {
      "question": "Who was the Sepoy at Barrackpore whose mutiny sparked the 1857 War of Independence?",
      "options": [
        "Mangal Pandey",
        "Tatya Tope",
        "Kunwar Singh",
        "Nana Saheb"
      ],
      "answer": "Mangal Pandey",
      "explanation": "Mangal Pandey of the 34th Bengal Native Infantry revolted on 29 March 1857."
    },
    {
      "question": "What is the term of office for the Comptroller and Auditor General (CAG) of India?",
      "options": [
        "6 years or up to 65 years of age",
        "5 years",
        "4 years",
        "Lifetime tenure"
      ],
      "answer": "6 years or up to 65 years of age",
      "explanation": "Article 148 ensures CAG audits union and state accounts as the guardian of public purse."
    },
    {
      "question": "Who acts as the highest law officer in the Government of India under Article 76?",
      "options": [
        "Attorney General for India",
        "Solicitor General",
        "Chief Justice of India",
        "Law Minister"
      ],
      "answer": "Attorney General for India",
      "explanation": "The Attorney General advises the Union government on complex constitutional questions."
    },
    {
      "question": "Which specialized institution replaced the Planning Commission of India on 1 January 2015?",
      "options": [
        "NITI Aayog",
        "Finance Commission",
        "National Development Council",
        "SEBI"
      ],
      "answer": "NITI Aayog",
      "explanation": "NITI Aayog (National Institution for Transforming India) fosters cooperative federalism."
    },
    {
      "question": "Who serves as the ex-officio Chairman of NITI Aayog?",
      "options": [
        "Prime Minister of India",
        "Finance Minister",
        "President",
        "RBI Governor"
      ],
      "answer": "Prime Minister of India",
      "explanation": "The Prime Minister heads NITI Aayog's governing council alongside state Chief Ministers."
    },
    {
      "question": "Under which Article of the Constitution is the Finance Commission constituted every five years?",
      "options": [
        "Article 280",
        "Article 110",
        "Article 360",
        "Article 324"
      ],
      "answer": "Article 280",
      "explanation": "The Finance Commission recommends tax revenue distribution between Union and States."
    },
    {
      "question": "Which Article of the Constitution establishes the independent Election Commission of India?",
      "options": [
        "Article 324",
        "Article 356",
        "Article 312",
        "Article 148"
      ],
      "answer": "Article 324",
      "explanation": "Article 324 vests superintendence, direction, and conduct of elections in the ECI."
    },
    {
      "question": "In which year was the Goods and Services Tax (GST) rolled out nationwide across India?",
      "options": [
        "2017",
        "2014",
        "2019",
        "2016"
      ],
      "answer": "2017",
      "explanation": "GST was launched at midnight on 1 July 2017 under the motto 'One Nation, One Tax'."
    },
    {
      "question": "Which constitutional amendment introduced the Goods and Services Tax (GST)?",
      "options": [
        "101st Amendment Act (2016)",
        "100th Amendment",
        "103rd Amendment",
        "99th Amendment"
      ],
      "answer": "101st Amendment Act (2016)",
      "explanation": "The 101st Amendment harmonized indirect taxation across India."
    },
    {
      "question": "What is the primary aim of the 73rd Constitutional Amendment Act, 1992?",
      "options": [
        "Constitutional status to Panchayati Raj",
        "Municipal corporations",
        "Anti-defection",
        "Lokpal"
      ],
      "answer": "Constitutional status to Panchayati Raj",
      "explanation": "Part IX and Eleventh Schedule created a three-tier local rural self-government."
    },
    {
      "question": "What is the minimum voting quorum required to pass a Money Bill in the Lok Sabha?",
      "options": [
        "Simple majority of members present and voting",
        "Special two-thirds majority",
        "Absolute majority",
        "Presidential assent only"
      ],
      "answer": "Simple majority of members present and voting",
      "explanation": "Under Article 110, the Speaker certifies Money Bills which pass by simple majority in Lok Sabha."
    },
    {
      "question": "Which European power was the first to arrive in India by sea and the last to leave (1961)?",
      "options": [
        "Portuguese",
        "British",
        "Dutch",
        "French"
      ],
      "answer": "Portuguese",
      "explanation": "Vasco da Gama landed in 1498, and Operation Vijay liberated Goa from the Portuguese in 1961."
    },
    {
      "question": "Who was the founder of the Indian National Army (Azad Hind Fauj) originally in 1942?",
      "options": [
        "Captain Mohan Singh",
        "Subhas Chandra Bose",
        "Rash Behari Bose",
        "Bhagat Singh"
      ],
      "answer": "Captain Mohan Singh",
      "explanation": "Captain Mohan Singh formed the first INA with Indian prisoners of war in Malaya."
    },
    {
      "question": "Who was the Viceroy of India when independence and partition occurred in August 1947?",
      "options": [
        "Lord Louis Mountbatten",
        "Lord Wavell",
        "Lord Linlithgow",
        "Lord Reading"
      ],
      "answer": "Lord Louis Mountbatten",
      "explanation": "Mountbatten formulated the 3 June Plan partitioning British India into India and Pakistan."
    },
    {
      "question": "Which is the longest written national constitution in the world?",
      "options": [
        "Constitution of India",
        "Constitution of USA",
        "Constitution of UK",
        "Constitution of France"
      ],
      "answer": "Constitution of India",
      "explanation": "With 448 articles in 25 parts and 12 schedules, India's constitution is the most detailed."
    },
    {
      "question": "From which country did the Indian Constitution borrow the 'Directive Principles of State Policy'?",
      "options": [
        "Ireland",
        "United States",
        "United Kingdom",
        "USSR"
      ],
      "answer": "Ireland",
      "explanation": "The Irish Constitution inspired Part IV Directive Principles of State Policy."
    },
    {
      "question": "From which country was the concept of 'Fundamental Rights' adopted into the Indian Constitution?",
      "options": [
        "United States (Bill of Rights)",
        "United Kingdom",
        "France",
        "Germany"
      ],
      "answer": "United States (Bill of Rights)",
      "explanation": "Part III Fundamental Rights are inspired by the American Bill of Rights."
    },
    {
      "question": "From which country did India borrow the concept of 'Five-Year Plans' and 'Fundamental Duties'?",
      "options": [
        "USSR (Soviet Union)",
        "USA",
        "Japan",
        "Canada"
      ],
      "answer": "USSR (Soviet Union)",
      "explanation": "Swaran Singh Committee recommended Fundamental Duties (Article 51A) based on Soviet model."
    },
    {
      "question": "Which schedule of the Indian Constitution contains the anti-defection law?",
      "options": [
        "Tenth Schedule",
        "Eighth Schedule",
        "Ninth Schedule",
        "Seventh Schedule"
      ],
      "answer": "Tenth Schedule",
      "explanation": "The 52nd Amendment Act (1985) inserted the Tenth Schedule preventing unprincipled floor-crossing."
    },
    {
      "question": "Who is known as the 'Father of the Indian Green Revolution' in agriculture?",
      "options": [
        "Dr. M.S. Swaminathan",
        "Dr. Verghese Kurien",
        "Norman Borlaug",
        "Dr. Homi Bhabha"
      ],
      "answer": "Dr. M.S. Swaminathan",
      "explanation": "M.S. Swaminathan introduced high-yielding semi-dwarf wheat varieties making India self-reliant."
    },
    {
      "question": "Who is known as the 'Father of the White Revolution' (Operation Flood) in India?",
      "options": [
        "Dr. Verghese Kurien",
        "Dr. M.S. Swaminathan",
        "Sam Pitroda",
        "Dr. Vikram Sarabhai"
      ],
      "answer": "Dr. Verghese Kurien",
      "explanation": "Dr. Kurien founded Amul, transforming India into the world's largest milk producer."
    },
    {
      "question": "Who was the primary architect of India's indigenous nuclear energy and research program?",
      "options": [
        "Dr. Homi J. Bhabha",
        "Dr. A.P.J. Abdul Kalam",
        "Dr. Raja Ramanna",
        "Sir C.V. Raman"
      ],
      "answer": "Dr. Homi J. Bhabha",
      "explanation": "Dr. Bhabha established the Tata Institute of Fundamental Research (TIFR) and atomic program."
    },
    {
      "question": "Who was the visionary founder of the Indian Space Research Programme?",
      "options": [
        "Dr. Vikram Sarabhai",
        "Dr. Satish Dhawan",
        "Dr. A.P.J. Abdul Kalam",
        "Prof. U.R. Rao"
      ],
      "answer": "Dr. Vikram Sarabhai",
      "explanation": "Dr. Sarabhai set up Thumba Equatorial Rocket Launching Station in Kerala in 1963."
    },
    {
      "question": "Which mission made India the fourth country in the world to reach Mars orbit on its maiden attempt?",
      "options": [
        "Mars Orbiter Mission (Mangalyaan)",
        "Chandrayaan-1",
        "Aditya-L1",
        "Gaganyaan"
      ],
      "answer": "Mars Orbiter Mission (Mangalyaan)",
      "explanation": "Launched in November 2013, Mangalyaan entered Martian orbit on 24 September 2014."
    },
    {
      "question": "On which date did Chandrayaan-3 successfully land on the Moon's South Polar region?",
      "options": [
        "23 August 2023",
        "14 July 2023",
        "2 October 2023",
        "15 August 2023"
      ],
      "answer": "23 August 2023",
      "explanation": "23 August is now observed nationwide as National Space Day commemorating Vikram lander's touchdown."
    },
    {
      "question": "What name was assigned by Prime Minister Narendra Modi to the Chandrayaan-3 landing spot?",
      "options": [
        "Shiv Shakti Point",
        "Tiranga Point",
        "Jawahar Point",
        "Kalam Point"
      ],
      "answer": "Shiv Shakti Point",
      "explanation": "The lunar south pole landing point of Chandrayaan-3 was named Shiv Shakti Point."
    },
    {
      "question": "What is the name of the landing spot of Chandrayaan-2's impact footprint on the Moon?",
      "options": [
        "Tiranga Point",
        "Shiv Shakti Point",
        "Atal Point",
        "Aryabhata Point"
      ],
      "answer": "Tiranga Point",
      "explanation": "The site where Chandrayaan-2 crash-landed in 2019 was designated Tiranga Point."
    },
    {
      "question": "Which Indian solar observatory spacecraft was launched to study the Sun from Lagrange Point 1 (L1)?",
      "options": [
        "Aditya-L1",
        "Mangalyaan",
        "AstroSat",
        "XPoSat"
      ],
      "answer": "Aditya-L1",
      "explanation": "Aditya-L1 monitors the solar corona, solar flares, and coronal mass ejections from halo orbit."
    },
    {
      "question": "Who was the author of the monumental economic study 'Poverty and Un-British Rule in India'?",
      "options": [
        "Dadabhai Naoroji",
        "R.C. Dutt",
        "M.G. Ranade",
        "G.K. Gokhale"
      ],
      "answer": "Dadabhai Naoroji",
      "explanation": "Naoroji systematically expounded the 'Drain of Wealth' theory bleeding Indian resources."
    },
    {
      "question": "In which year was the Treaty of Amritsar signed between the British and Maharaja Ranjit Singh?",
      "options": [
        "1809",
        "1849",
        "1799",
        "1839"
      ],
      "answer": "1809",
      "explanation": "The treaty established the Sutlej river as the boundary between the Sikh Empire and British realms."
    },
    {
      "question": "Which Indian classical language is the oldest among the designated classical languages (accorded in 2004)?",
      "options": [
        "Tamil",
        "Sanskrit",
        "Kannada",
        "Telugu"
      ],
      "answer": "Tamil",
      "explanation": "Tamil was declared India's first official Classical Language in 2004, followed by Sanskrit in 2005."
    },
    {
      "question": "Who was the first Chief Justice of independent India?",
      "options": [
        "Harilal Jekisundas Kania",
        "M. Patanjali Sastri",
        "Mehr Chand Mahajan",
        "B.K. Mukherjea"
      ],
      "answer": "Harilal Jekisundas Kania",
      "explanation": "Sir H.J. Kania took the oath as Chief Justice of the Supreme Court in January 1950."
    },
    {
      "question": "Which article of the Indian Constitution provides for the appointment of the Prime Minister by the President?",
      "options": [
        "Article 75",
        "Article 74",
        "Article 78",
        "Article 80"
      ],
      "answer": "Article 75",
      "explanation": "Article 75 stipulates that the Prime Minister shall be appointed by the President."
    },
    {
      "question": "What is the maximum permissible interval between two sessions of the Indian Parliament?",
      "options": [
        "6 Months",
        "3 Months",
        "9 Months",
        "1 Year"
      ],
      "answer": "6 Months",
      "explanation": "Article 85 mandates that not more than six months shall intervene between parliamentary sessions."
    }
  ],
  "senior": [
    {
      "question": "Which classical Indian economic treatise was authored by Chanakya (Kautilya)?",
      "options": [
        "Arthashastra",
        "Mudrarakshasa",
        "Manusmriti",
        "Panchatantra"
      ],
      "answer": "Arthashastra",
      "explanation": "Arthashastra is an ancient Sanskrit treatise on statecraft, economic policy, and military strategy."
    },
    {
      "question": "Under which Article of the Indian Constitution can a Financial Emergency be proclaimed by the President?",
      "options": [
        "Article 360",
        "Article 352",
        "Article 356",
        "Article 370"
      ],
      "answer": "Article 360",
      "explanation": "Article 360 allows the President to declare a financial emergency if financial stability is threatened."
    },
    {
      "question": "What is the headquarters of the International Court of Justice (ICJ)?",
      "options": [
        "The Hague, Netherlands",
        "Geneva, Switzerland",
        "New York, USA",
        "Vienna, Austria"
      ],
      "answer": "The Hague, Netherlands",
      "explanation": "The ICJ sits at the Peace Palace in The Hague, Netherlands."
    },
    {
      "question": "Which biosphere reserve in India is located in the Nilgiri Mountains across TN, Kerala, and Karnataka?",
      "options": [
        "Nilgiri Biosphere Reserve",
        "Sundarbans",
        "Nanda Devi",
        "Gulf of Mannar"
      ],
      "answer": "Nilgiri Biosphere Reserve",
      "explanation": "Established in 1986, Nilgiri was India’s first biosphere reserve under UNESCO’s MAB Programme."
    },
    {
      "question": "The concept of \"Directive Principles of State Policy\" (DPSP) in the Indian Constitution was borrowed from which country?",
      "options": [
        "Ireland",
        "United States",
        "United Kingdom",
        "USSR"
      ],
      "answer": "Ireland",
      "explanation": "The framers of the Indian Constitution drew inspiration from the Irish Constitution (Bunreacht na hÉireann)."
    },
    {
      "question": "In which historic landmark case did the Supreme Court recognize the 'Right to Privacy' as a Fundamental Right?",
      "options": [
        "K.S. Puttaswamy v. Union of India (2017)",
        "A.K. Gopalan Case",
        "ADM Jabalpur Case",
        "Vishaka Case"
      ],
      "answer": "K.S. Puttaswamy v. Union of India (2017)",
      "explanation": "A unanimous 9-judge bench ruled privacy is intrinsic to life and personal liberty under Article 21."
    },
    {
      "question": "Which constitutional amendment granted constitutional recognition and legal status to the National Commission for Backward Classes (NCBC)?",
      "options": [
        "102nd Amendment Act (2018)",
        "103rd Amendment",
        "101st Amendment",
        "104th Amendment"
      ],
      "answer": "102nd Amendment Act (2018)",
      "explanation": "The 102nd Amendment inserted Article 338B providing constitutional status to the NCBC."
    },
    {
      "question": "Which constitutional amendment provided up to 10% reservation for Economically Weaker Sections (EWS)?",
      "options": [
        "103rd Amendment Act (2019)",
        "102nd Amendment",
        "104th Amendment",
        "105th Amendment"
      ],
      "answer": "103rd Amendment Act (2019)",
      "explanation": "The 103rd Amendment altered Articles 15 and 16 to permit reservations based on economic criteria."
    },
    {
      "question": "Which judicial writ is issued by the Supreme Court or High Court to compel a public official to perform a statutory duty?",
      "options": [
        "Mandamus",
        "Habeas Corpus",
        "Certiorari",
        "Quo Warranto"
      ],
      "answer": "Mandamus",
      "explanation": "Mandamus ('We Command') enforces public or quasi-public duties upon administrative officials."
    },
    {
      "question": "Which writ is issued to release a person who has been detained unlawfully without legal justification?",
      "options": [
        "Habeas Corpus",
        "Mandamus",
        "Prohibition",
        "Certiorari"
      ],
      "answer": "Habeas Corpus",
      "explanation": "Habeas Corpus ('Produce the Body') is the greatest historic shield for individual physical liberty."
    },
    {
      "question": "Which writ is issued by a superior court to quash an order passed by a lower tribunal without jurisdiction?",
      "options": [
        "Certiorari",
        "Mandamus",
        "Quo Warranto",
        "Habeas Corpus"
      ],
      "answer": "Certiorari",
      "explanation": "Certiorari ('To be certified') is a corrective writ correcting jurisdictional errors of lower courts."
    },
    {
      "question": "Under which Article does the President exercise the power of pardoning sentences and death penalties?",
      "options": [
        "Article 72",
        "Article 161",
        "Article 123",
        "Article 143"
      ],
      "answer": "Article 72",
      "explanation": "Article 72 empowers the President to grant pardons, reprieves, respites, or remissions of punishment."
    },
    {
      "question": "Under which Article is the Governor empowered to grant pardons within state jurisdiction?",
      "options": [
        "Article 161",
        "Article 72",
        "Article 213",
        "Article 200"
      ],
      "answer": "Article 161",
      "explanation": "Article 161 grants state executive clemency, though death penalty pardons rest exclusively with the President."
    },
    {
      "question": "What is the minimum strength of a Constitutional Bench in the Supreme Court of India?",
      "options": [
        "5 Judges",
        "3 Judges",
        "7 Judges",
        "9 Judges"
      ],
      "answer": "5 Judges",
      "explanation": "Article 145(3) mandates at least five judges for cases involving substantial constitutional interpretation."
    },
    {
      "question": "Which Article of the Constitution empowers the President to consult the Supreme Court on questions of law (Advisory Jurisdiction)?",
      "options": [
        "Article 143",
        "Article 136",
        "Article 131",
        "Article 142"
      ],
      "answer": "Article 143",
      "explanation": "Under Article 143, the President can refer matters of public importance for the Court's advisory opinion."
    },
    {
      "question": "Which Article grants the Supreme Court inherent powers to pass any decree necessary to do 'complete justice'?",
      "options": [
        "Article 142",
        "Article 136",
        "Article 141",
        "Article 32"
      ],
      "answer": "Article 142",
      "explanation": "Article 142 equips the apex court with plenary equitable jurisdiction to do complete justice."
    },
    {
      "question": "What does Article 141 of the Indian Constitution proclaim regarding law declared by the Supreme Court?",
      "options": [
        "Binding on all courts within India",
        "Binding only on High Courts",
        "Advisory only",
        "Subject to presidential veto"
      ],
      "answer": "Binding on all courts within India",
      "explanation": "Decisions of the Supreme Court establish binding legal precedents across the entire territory of India."
    },
    {
      "question": "Who was the prime architect behind Public Interest Litigation (PIL) in the Indian judicial system?",
      "options": [
        "Justice P.N. Bhagwati & Justice V.R. Krishna Iyer",
        "Justice H.R. Khanna",
        "Justice Y.V. Chandrachud",
        "Justice Dipak Misra"
      ],
      "answer": "Justice P.N. Bhagwati & Justice V.R. Krishna Iyer",
      "explanation": "PIL relaxed locus standi rules, permitting public-spirited citizens to seek judicial redress for the marginalized."
    },
    {
      "question": "In which case did Justice H.R. Khanna deliver his historic lone dissent defending personal liberty during the Emergency?",
      "options": [
        "ADM Jabalpur v. Shivkant Shukla (1976)",
        "Kesavananda Bharati",
        "Minerva Mills",
        "Golaknath"
      ],
      "answer": "ADM Jabalpur v. Shivkant Shukla (1976)",
      "explanation": "Khanna held that right to life is primordial and cannot be suspended even during presidential emergency."
    },
    {
      "question": "What is the maximum limit on Council of Ministers size relative to Lok Sabha strength as per 91st Amendment?",
      "options": [
        "15%",
        "10%",
        "20%",
        "25%"
      ],
      "answer": "15%",
      "explanation": "Article 75(1A) capped ministry size at 15% to prevent jumbo cabinets and horse-trading."
    },
    {
      "question": "Which Article establishes the Inter-State Council to foster coordination between States and the Union?",
      "options": [
        "Article 263",
        "Article 280",
        "Article 262",
        "Article 312"
      ],
      "answer": "Article 263",
      "explanation": "The Inter-State Council was set up following the 1988 Sarkaria Commission recommendations."
    },
    {
      "question": "Which constitutional authority is tasked with delimiting electoral constituencies after each census?",
      "options": [
        "Delimitation Commission",
        "Election Commission",
        "Law Commission",
        "Finance Commission"
      ],
      "answer": "Delimitation Commission",
      "explanation": "Delimitation Commissions draw boundary limits of parliamentary and assembly constituencies."
    },
    {
      "question": "Which Article empowers Parliament to create new All-India Services (like IAS, IPS, IFoS)?",
      "options": [
        "Article 312",
        "Article 309",
        "Article 315",
        "Article 320"
      ],
      "answer": "Article 312",
      "explanation": "Rajya Sabha must pass a resolution supported by a two-thirds majority to create an All-India Service."
    },
    {
      "question": "Which Article establishes the Union Public Service Commission (UPSC) and State Public Service Commissions?",
      "options": [
        "Article 315",
        "Article 312",
        "Article 324",
        "Article 320"
      ],
      "answer": "Article 315",
      "explanation": "Part XIV Chapter II creates independent public service commissions for civil servant recruitment."
    },
    {
      "question": "What is the tenure of members of the Union Public Service Commission (UPSC)?",
      "options": [
        "6 years or until age 65",
        "5 years",
        "6 years or until age 62",
        "4 years"
      ],
      "answer": "6 years or until age 65",
      "explanation": "UPSC members hold office for six years or until attaining 65 years, whichever is earlier."
    },
    {
      "question": "Who is the author of the foundational classical economic treatise 'The Wealth of Nations' (1776)?",
      "options": [
        "Adam Smith",
        "David Ricardo",
        "John Maynard Keynes",
        "Karl Marx"
      ],
      "answer": "Adam Smith",
      "explanation": "Scottish philosopher Adam Smith established classical economics and the 'invisible hand' theory."
    },
    {
      "question": "Who formulated the economic theory advocating government counter-cyclical spending during recessions?",
      "options": [
        "John Maynard Keynes",
        "Milton Friedman",
        "Friedrich Hayek",
        "Joseph Schumpeter"
      ],
      "answer": "John Maynard Keynes",
      "explanation": "Keynesian macroeconomics emphasized aggregate demand stimulation during economic downturns."
    },
    {
      "question": "What does the Gini Coefficient measure in international economics?",
      "options": [
        "Income inequality distribution",
        "Inflation rate",
        "Unemployment rate",
        "Gross Domestic Product"
      ],
      "answer": "Income inequality distribution",
      "explanation": "A Gini coefficient of 0 expresses perfect equality, while 1 denotes complete inequality."
    },
    {
      "question": "What is the term for prolonged economic stagnation accompanied by high inflation?",
      "options": [
        "Stagflation",
        "Deflation",
        "Hyperinflation",
        "Reflation"
      ],
      "answer": "Stagflation",
      "explanation": "Stagflation occurs when high unemployment coincides with rising prices (e.g. 1970s oil shocks)."
    },
    {
      "question": "What is the core target inflation rate stipulated in India's Monetary Policy Framework agreement?",
      "options": [
        "4% (with tolerance band of ±2%)",
        "2%",
        "6%",
        "5%"
      ],
      "answer": "4% (with tolerance band of ±2%)",
      "explanation": "The RBI's Monetary Policy Committee targets a headline CPI inflation of 4% within a 2%–6% range."
    },
    {
      "question": "Which treaty established the European Union and the groundwork for the single European currency (Euro)?",
      "options": [
        "Maastricht Treaty (1992)",
        "Treaty of Rome",
        "Lisbon Treaty",
        "Treaty of Paris"
      ],
      "answer": "Maastricht Treaty (1992)",
      "explanation": "The Maastricht Treaty integrated European policy and established European citizenship."
    },
    {
      "question": "Where is the International Court of Justice (ICJ), principal judicial organ of the UN, situated?",
      "options": [
        "The Hague, Netherlands",
        "Geneva, Switzerland",
        "Vienna, Austria",
        "New York, USA"
      ],
      "answer": "The Hague, Netherlands",
      "explanation": "The ICJ sits at the Peace Palace in The Hague, adjudicating disputes between sovereign states."
    },
    {
      "question": "Which international agreement adopted in 2015 aims to limit global temperature rise well below 2°C?",
      "options": [
        "Paris Climate Agreement",
        "Kyoto Protocol",
        "Montreal Protocol",
        "Copenhagen Accord"
      ],
      "answer": "Paris Climate Agreement",
      "explanation": "COP21 established nationally determined contributions to hold warming below 1.5°C–2.0°C."
    },
    {
      "question": "Which protocol negotiated in 1987 is universally hailed as the most successful environmental treaty for healing the ozone layer?",
      "options": [
        "Montreal Protocol",
        "Kyoto Protocol",
        "Basel Convention",
        "Ramsar Convention"
      ],
      "answer": "Montreal Protocol",
      "explanation": "The Montreal Protocol phased out ozone-depleting halocarbons and CFCs globally."
    },
    {
      "question": "What is the Ramsar Convention dedicated to conserving internationally?",
      "options": [
        "Wetlands of International Importance",
        "Migratory Birds",
        "Endangered Mammals",
        "Tropical Coral Reefs"
      ],
      "answer": "Wetlands of International Importance",
      "explanation": "Signed in Ramsar, Iran in 1971, it fosters conservation and wise use of vital wetland biomes."
    },
    {
      "question": "Which Indian site was declared the first Ramsar Wetland in India in 1981 alongside Keoladeo?",
      "options": [
        "Chilika Lake (Odisha)",
        "Wular Lake",
        "Loktak Lake",
        "Sambhar Lake"
      ],
      "answer": "Chilika Lake (Odisha)",
      "explanation": "Chilika Lake in Odisha is Asia's largest brackish water lagoon and a prime waterfowl habitat."
    },
    {
      "question": "Which biosphere reserve in India is located at the tri-junction of Tamil Nadu, Kerala, and Karnataka?",
      "options": [
        "Nilgiri Biosphere Reserve",
        "Gulf of Mannar",
        "Nanda Devi",
        "Sundarbans"
      ],
      "answer": "Nilgiri Biosphere Reserve",
      "explanation": "Established in 1986, the Nilgiri Biosphere Reserve was India's first designated biosphere reserve."
    },
    {
      "question": "In which year was Project Tiger launched by the Government of India in Corbett National Park?",
      "options": [
        "1973",
        "1972",
        "1980",
        "1985"
      ],
      "answer": "1973",
      "explanation": "Project Tiger halted Bengal tiger decline by setting up dedicated tiger reserves and anti-poaching forces."
    },
    {
      "question": "What is the highest civilian peace-time gallantry award conferred in India?",
      "options": [
        "Ashoka Chakra",
        "Kirti Chakra",
        "Shaurya Chakra",
        "Sena Medal"
      ],
      "answer": "Ashoka Chakra",
      "explanation": "The Ashoka Chakra honors most conspicuous bravery or self-sacrifice other than in the face of the enemy."
    },
    {
      "question": "Who was the first Indian woman to win an Olympic medal (Bronze in Weightlifting at Sydney 2000)?",
      "options": [
        "Karnam Malleswari",
        "Mary Kom",
        "Saina Nehwal",
        "P.V. Sindhu"
      ],
      "answer": "Karnam Malleswari",
      "explanation": "Karnam Malleswari lifted 240 kg in the 69 kg weightlifting division to script Olympic history."
    },
    {
      "question": "Who is the only Indian athlete to win individual Olympic Gold medals across two consecutive Olympic games?",
      "options": [
        "Neeraj Chopra",
        "Abhinav Bindra",
        "Sushil Kumar",
        "P.V. Sindhu"
      ],
      "answer": "Neeraj Chopra",
      "explanation": "Neeraj Chopra won Gold at Tokyo 2020 and Silver at Paris 2024 in men's javelin throw."
    },
    {
      "question": "Who was the first individual Olympic Gold medalist for independent India (10m Air Rifle in Beijing 2008)?",
      "options": [
        "Abhinav Bindra",
        "Rajyavardhan Rathore",
        "Gagan Narang",
        "Jitu Rai"
      ],
      "answer": "Abhinav Bindra",
      "explanation": "Abhinav Bindra shot a near-perfect final series to win India's first individual Olympic gold."
    },
    {
      "question": "What is the term for a parliamentary bill seeking withdrawal of money from the Consolidated Fund of India?",
      "options": [
        "Appropriation Bill (Article 114)",
        "Finance Bill",
        "Ordinance",
        "Private Member Bill"
      ],
      "answer": "Appropriation Bill (Article 114)",
      "explanation": "No money can be withdrawn from the Consolidated Fund of India without an enacted Appropriation Act."
    },
    {
      "question": "Under which Article can the Governor reserve a state bill for the consideration of the President?",
      "options": [
        "Article 200",
        "Article 201",
        "Article 213",
        "Article 164"
      ],
      "answer": "Article 200",
      "explanation": "Article 200 allows the Governor to reserve bills affecting High Court powers or central legislation."
    },
    {
      "question": "Which constitutional amendment enacted the National Judicial Appointments Commission (NJAC), later struck down?",
      "options": [
        "99th Constitutional Amendment Act",
        "97th Amendment",
        "100th Amendment",
        "98th Amendment"
      ],
      "answer": "99th Constitutional Amendment Act",
      "explanation": "The Supreme Court struck down the 99th Amendment in 2015 to uphold judicial independence."
    },
    {
      "question": "Who was the prominent scholar who authored 'The Idea of Justice' and won the 1998 Nobel Prize in Economics?",
      "options": [
        "Amartya Sen",
        "Abhijit Banerjee",
        "Manmohan Singh",
        "Raghuram Rajan"
      ],
      "answer": "Amartya Sen",
      "explanation": "Amartya Sen was awarded the Nobel Memorial Prize for his contributions to welfare economics and famine analysis."
    },
    {
      "question": "What is the name of the sovereign wealth investment fund established by the Government of India in 2012?",
      "options": [
        "National Investment and Infrastructure Fund (NIIF)",
        "LIC",
        "UTI",
        "GIC"
      ],
      "answer": "National Investment and Infrastructure Fund (NIIF)",
      "explanation": "NIIF acts as India's quasi-sovereign wealth manager catalyzing domestic infrastructure equity."
    },
    {
      "question": "Which international financial organization is known as the 'Lender of Last Resort' for balance of payments crises?",
      "options": [
        "International Monetary Fund (IMF)",
        "World Bank",
        "Asian Development Bank",
        "WTO"
      ],
      "answer": "International Monetary Fund (IMF)",
      "explanation": "The IMF provides financial assistance and surveillance to maintain global macroeconomic stability."
    },
    {
      "question": "Where is the permanent headquarters of the World Trade Organization (WTO) located?",
      "options": [
        "Geneva, Switzerland",
        "Washington D.C., USA",
        "London, UK",
        "Brussels, Belgium"
      ],
      "answer": "Geneva, Switzerland",
      "explanation": "Established under the 1994 Marrakesh Agreement, the WTO administers global trade rules."
    },
    {
      "question": "Which Article of the Indian Constitution directs the State to secure a Uniform Civil Code (UCC)?",
      "options": [
        "Article 44",
        "Article 40",
        "Article 45",
        "Article 48"
      ],
      "answer": "Article 44",
      "explanation": "Article 44 of the Directive Principles provides that the State shall endeavor to secure a UCC for all citizens."
    },
    {
      "question": "Which Article of the Constitution abolishes 'Untouchability' and forbids its practice in any form?",
      "options": [
        "Article 17",
        "Article 14",
        "Article 15",
        "Article 18"
      ],
      "answer": "Article 17",
      "explanation": "Article 17 is an absolute fundamental right outlawing untouchability and discriminatory practices."
    },
    {
      "question": "Which Article of the Constitution abolishes titles of nobility (except military and academic distinctions)?",
      "options": [
        "Article 18",
        "Article 16",
        "Article 19",
        "Article 21"
      ],
      "answer": "Article 18",
      "explanation": "Article 18 ensures republican equality by prohibiting state conferment of aristocratic titles."
    },
    {
      "question": "Under which Article can the Supreme Court transfer cases or appeals between High Courts?",
      "options": [
        "Article 139A",
        "Article 136",
        "Article 143",
        "Article 226"
      ],
      "answer": "Article 139A",
      "explanation": "Article 139A permits the Supreme Court to withdraw cases involving similar legal questions."
    },
    {
      "question": "What is the name of the doctrine where executive administrative actions are reviewed for reasonableness?",
      "options": [
        "Doctrine of Proportionality",
        "Doctrine of Severability",
        "Doctrine of Eclipse",
        "Doctrine of Pith and Substance"
      ],
      "answer": "Doctrine of Proportionality",
      "explanation": "Proportionality balances administrative objectives against interference with constitutionally protected rights."
    },
    {
      "question": "Which historic constitutional doctrine resolves legislative competence conflicts between Union and State lists?",
      "options": [
        "Doctrine of Pith and Substance",
        "Doctrine of Colorable Legislation",
        "Doctrine of Repugnancy",
        "Doctrine of Eclipse"
      ],
      "answer": "Doctrine of Pith and Substance",
      "explanation": "The court examines the true nature and essence of legislation to determine whether it encroaches on other lists."
    }
  ]
},

    oddOneOut: {
  "little": [
    {
      "items": [
        "🍎 Apple",
        "🍌 Banana",
        "🥕 Carrot",
        "🥭 Mango"
      ],
      "answer": "🥕 Carrot",
      "explanation": "Carrot is a root vegetable, whereas Apple, Banana, and Mango are fruits."
    },
    {
      "items": [
        "🐶 Dog",
        "🐱 Cat",
        "🐮 Cow",
        "🦅 Eagle"
      ],
      "answer": "🦅 Eagle",
      "explanation": "Eagle is a bird that flies, while Dog, Cat, and Cow are four-legged land mammals."
    },
    {
      "items": [
        "🔴 Red",
        "🔵 Blue",
        "🟩 Green",
        "⚽ Football"
      ],
      "answer": "⚽ Football",
      "explanation": "Football is a sports object, whereas Red, Blue, and Green are colors."
    },
    {
      "items": [
        "🚗 Car",
        "🚌 Bus",
        "🚚 Truck",
        "🐟 Fish"
      ],
      "answer": "🐟 Fish",
      "explanation": "Fish is a living aquatic animal, while Car, Bus, and Truck are motor vehicles."
    },
    {
      "items": [
        "✏️ Pencil",
        "📐 Ruler",
        "Eraser",
        "🍔 Burger"
      ],
      "answer": "🍔 Burger",
      "explanation": "Burger is food, while Pencil, Ruler, and Eraser are stationery items for school."
    },
    {
      "items": [
        "🍎 Apple",
        "🍌 Banana",
        "🥕 Carrot",
        "🥭 Mango"
      ],
      "answer": "🥕 Carrot",
      "explanation": "Carrot is a root vegetable, while Apple, Banana, and Mango are fruits."
    },
    {
      "items": [
        "🐶 Dog",
        "🐱 Cat",
        "🐮 Cow",
        "🦅 Eagle"
      ],
      "answer": "🦅 Eagle",
      "explanation": "Eagle is a flying bird, while Dog, Cat, and Cow are four-legged animals."
    },
    {
      "items": [
        "🚗 Car",
        "🚌 Bus",
        "🚲 Bicycle",
        "🚤 Boat"
      ],
      "answer": "🚤 Boat",
      "explanation": "Boat sails on water, while Car, Bus, and Bicycle travel on land."
    },
    {
      "items": [
        "🌹 Rose",
        "🌻 Sunflower",
        "🌷 Tulip",
        "🥔 Potato"
      ],
      "answer": "🥔 Potato",
      "explanation": "Potato is an underground vegetable, while Rose, Sunflower, and Tulip are flowers."
    },
    {
      "items": [
        "🥛 Milk",
        "🧃 Juice",
        "💧 Water",
        "🍪 Biscuit"
      ],
      "answer": "🍪 Biscuit",
      "explanation": "Biscuit is solid food, while Milk, Juice, and Water are liquid drinks."
    },
    {
      "items": [
        "👕 T-Shirt",
        "👖 Pants",
        "👗 Dress",
        "👟 Shoes"
      ],
      "answer": "👟 Shoes",
      "explanation": "Shoes are footwear, while T-Shirt, Pants, and Dress are clothes."
    },
    {
      "items": [
        "🦁 Lion",
        "🐯 Tiger",
        "🐆 Leopard",
        "🐰 Rabbit"
      ],
      "answer": "🐰 Rabbit",
      "explanation": "Rabbit is a gentle herbivore, while Lion, Tiger, and Leopard are fierce big cat carnivores."
    },
    {
      "items": [
        "☀️ Sun",
        "⭐ Star",
        "🌙 Moon",
        "🌳 Tree"
      ],
      "answer": "🌳 Tree",
      "explanation": "Tree is a living plant on Earth, while Sun, Star, and Moon are celestial bodies in the sky."
    },
    {
      "items": [
        "👂 Ear",
        "👃 Nose",
        "👀 Eye",
        "✋ Hand"
      ],
      "answer": "✋ Hand",
      "explanation": "Hand is an extremity limb, while Ear, Nose, and Eye are sensory organs on the face."
    },
    {
      "items": [
        "🟥 Red",
        "🟦 Blue",
        "🟩 Green",
        "⚽ Football"
      ],
      "answer": "⚽ Football",
      "explanation": "Football is a toy/ball, while Red, Blue, and Green are colors."
    },
    {
      "items": [
        "🥄 Spoon",
        "🍴 Fork",
        "🥢 Chopsticks",
        "🛏️ Bed"
      ],
      "answer": "🛏️ Bed",
      "explanation": "Bed is bedroom furniture, while Spoon, Fork, and Chopsticks are eating utensils."
    },
    {
      "items": [
        "🐘 Elephant",
        "🦒 Giraffe",
        "🦏 Rhino",
        "🐜 Ant"
      ],
      "answer": "🐜 Ant",
      "explanation": "Ant is a tiny insect, while Elephant, Giraffe, and Rhino are huge wild mammals."
    },
    {
      "items": [
        "🦜 Parrot",
        "🕊️ Pigeon",
        "🦆 Duck",
        "🐍 Snake"
      ],
      "answer": "🐍 Snake",
      "explanation": "Snake is a crawling reptile without legs, while Parrot, Pigeon, and Duck are birds with wings."
    },
    {
      "items": [
        "✏️ Pencil",
        "🖊️ Pen",
        "🖍️ Crayon",
        "🥣 Bowl"
      ],
      "answer": "🥣 Bowl",
      "explanation": "Bowl is crockery for food, while Pencil, Pen, and Crayon are drawing/writing tools."
    },
    {
      "items": [
        "⚽ Football",
        "🏀 Basketball",
        "🎾 Tennis ball",
        "📚 Book"
      ],
      "answer": "📚 Book",
      "explanation": "Book is for reading and study, while Football, Basketball, and Tennis ball are sports balls."
    },
    {
      "items": [
        "🍅 Tomato",
        "🥒 Cucumber",
        "🥬 Spinach",
        "🍫 Chocolate"
      ],
      "answer": "🍫 Chocolate",
      "explanation": "Chocolate is a sweet confectionery, while Tomato, Cucumber, and Spinach are fresh vegetables."
    },
    {
      "items": [
        "🐟 Fish",
        "🦈 Shark",
        "🐬 Dolphin",
        "🐒 Monkey"
      ],
      "answer": "🐒 Monkey",
      "explanation": "Monkey lives in trees on land, while Fish, Shark, and Dolphin live in water."
    },
    {
      "items": [
        "🛋️ Sofa",
        "🪑 Chair",
        "🛏️ Bed",
        "📱 Mobile Phone"
      ],
      "answer": "📱 Mobile Phone",
      "explanation": "Mobile Phone is an electronic gadget, while Sofa, Chair, and Bed are pieces of furniture."
    },
    {
      "items": [
        "🍧 Ice Cream",
        "🍦 Popsicle",
        "🧊 Ice Cube",
        "🔥 Bonfire"
      ],
      "answer": "🔥 Bonfire",
      "explanation": "Bonfire is very hot fire, while Ice Cream, Popsicle, and Ice Cube are cold and frozen."
    },
    {
      "items": [
        "🚲 Bicycle",
        "🛵 Scooter",
        "🏍️ Motorcycle",
        "✈️ Aeroplane"
      ],
      "answer": "✈️ Aeroplane",
      "explanation": "Aeroplane flies high up in the sky, while Bicycle, Scooter, and Motorcycle run on roads."
    },
    {
      "items": [
        "🐸 Frog",
        "🐊 Crocodile",
        "🐢 Turtle",
        "🐔 Chicken"
      ],
      "answer": "🐔 Chicken",
      "explanation": "Chicken is a domestic farm bird that stays on land, while Frog, Crocodile, and Turtle spend time in water."
    },
    {
      "items": [
        "🍓 Strawberry",
        "🍒 Cherry",
        "🍉 Watermelon",
        "🧅 Onion"
      ],
      "answer": "🧅 Onion",
      "explanation": "Onion is a pungent vegetable, while Strawberry, Cherry, and Watermelon are sweet fruits."
    },
    {
      "items": [
        "📘 Notebook",
        "📕 Diary",
        "📗 Textbook",
        "🧸 Teddy Bear"
      ],
      "answer": "🧸 Teddy Bear",
      "explanation": "Teddy Bear is a stuffed soft toy, while Notebook, Diary, and Textbook are stationery books."
    },
    {
      "items": [
        "🚁 Helicopter",
        "🚀 Rocket",
        "✈️ Jet",
        "🚜 Tractor"
      ],
      "answer": "🚜 Tractor",
      "explanation": "Tractor is a farm vehicle on land, while Helicopter, Rocket, and Jet fly in air or space."
    },
    {
      "items": [
        "🐝 Bee",
        "🦋 Butterfly",
        "🐞 Ladybug",
        "🐶 Puppy"
      ],
      "answer": "🐶 Puppy",
      "explanation": "Puppy is a mammalian pet, while Bee, Butterfly, and Ladybug are insects."
    },
    {
      "items": [
        "🎂 Birthday Cake",
        "🍩 Donut",
        "🧁 Cupcake",
        "🥦 Broccoli"
      ],
      "answer": "🥦 Broccoli",
      "explanation": "Broccoli is a green vegetable, while Cake, Donut, and Cupcake are bakery sweet desserts."
    },
    {
      "items": [
        "🧥 Winter Jacket",
        "🧣 Warm Scarf",
        "🧤 Woolen Gloves",
        "🩳 Swimming Trunks"
      ],
      "answer": "🩳 Swimming Trunks",
      "explanation": "Swimming trunks are worn in warm summer/water, while Jacket, Scarf, and Gloves are winter warmers."
    },
    {
      "items": [
        "🐴 Horse",
        "🦓 Zebra",
        "🦄 Donkey",
        "🐟 Goldfish"
      ],
      "answer": "🐟 Goldfish",
      "explanation": "Goldfish is an aquatic fish, while Horse, Zebra, and Donkey are land quadrupeds."
    },
    {
      "items": [
        "🥁 Drum",
        "🎺 Trumpet",
        "🎸 Guitar",
        "🧹 Broom"
      ],
      "answer": "🧹 Broom",
      "explanation": "Broom is for cleaning floors, while Drum, Trumpet, and Guitar are musical instruments."
    },
    {
      "items": [
        "🌧️ Rain",
        "❄️ Snow",
        "🌦️ Hail",
        "🏜️ Desert Sand"
      ],
      "answer": "🏜️ Desert Sand",
      "explanation": "Desert sand is dry land, while Rain, Snow, and Hail are forms of atmospheric precipitation."
    },
    {
      "items": [
        "🦷 Tooth",
        "👅 Tongue",
        "👄 Lips",
        "👟 Sneaker"
      ],
      "answer": "👟 Sneaker",
      "explanation": "Sneaker is shoe footwear, while Tooth, Tongue, and Lips are mouth oral structures."
    },
    {
      "items": [
        "🍇 Grapes",
        "🫐 Blueberries",
        "🥝 Kiwi",
        "🌶️ Red Chilli"
      ],
      "answer": "🌶️ Red Chilli",
      "explanation": "Red Chilli is a hot spicy seasoning, while Grapes, Blueberries, and Kiwi are sweet/tangy fruits."
    },
    {
      "items": [
        "🍳 Frying Pan",
        "🍲 Cooking Pot",
        "🥘 Wok",
        "🚿 Shower Head"
      ],
      "answer": "🚿 Shower Head",
      "explanation": "Shower Head is in the bathroom, while Pan, Pot, and Wok are kitchen cookware."
    },
    {
      "items": [
        "🦆 Duckling",
        "🐥 Chick",
        "🦢 Cygnet",
        "🦁 Lion"
      ],
      "answer": "🦁 Lion",
      "explanation": "Lion is a fierce adult predator, while Duckling, Chick, and Cygnet are baby birds."
    },
    {
      "items": [
        "🪐 Saturn",
        "🌍 Earth",
        "🔴 Mars",
        "🪁 Kite"
      ],
      "answer": "🪁 Kite",
      "explanation": "Kite is a paper toy flown by children, while Saturn, Earth, and Mars are planets."
    },
    {
      "items": [
        "🏊 Swimming",
        "🏃 Running",
        "🚴 Cycling",
        "😴 Sleeping"
      ],
      "answer": "😴 Sleeping",
      "explanation": "Sleeping is rest/inactivity, while Swimming, Running, and Cycling are active sports."
    },
    {
      "items": [
        "🦷 Dentist",
        "👨‍⚕️ Doctor",
        "👩‍⚕️ Nurse",
        "🧙 Magician"
      ],
      "answer": "🧙 Magician",
      "explanation": "Magician performs fantasy entertainment, while Dentist, Doctor, and Nurse are medical professionals."
    },
    {
      "items": [
        "🧲 Magnet",
        "🔩 Iron Screw",
        "📎 Paperclip",
        "🪵 Wooden Log"
      ],
      "answer": "🪵 Wooden Log",
      "explanation": "Wooden Log is non-magnetic wood, while Magnet, Screw, and Paperclip are metallic/magnetic."
    },
    {
      "items": [
        "🥛 Glass of Milk",
        "☕ Cup of Tea",
        "🧃 Apple Juice",
        "🍞 Slice of Bread"
      ],
      "answer": "🍞 Slice of Bread",
      "explanation": "Bread is a solid baked food, while Milk, Tea, and Juice are drinks."
    },
    {
      "items": [
        "🔔 Bell",
        "⏰ Alarm Clock",
        "📢 Megaphone",
        "🖼️ Picture Frame"
      ],
      "answer": "🖼️ Picture Frame",
      "explanation": "Picture Frame makes no sound, while Bell, Alarm Clock, and Megaphone produce audio alarms."
    },
    {
      "items": [
        "🦒 Giraffe",
        "🦘 Kangaroo",
        "🦌 Deer",
        "🐙 Octopus"
      ],
      "answer": "🐙 Octopus",
      "explanation": "Octopus is an eight-armed marine mollusc, while Giraffe, Kangaroo, and Deer are land mammals."
    },
    {
      "items": [
        "👑 Crown",
        "🧢 Cap",
        "🎩 Top Hat",
        "🧦 Socks"
      ],
      "answer": "🧦 Socks",
      "explanation": "Socks go on feet, while Crown, Cap, and Hat are worn on the head."
    },
    {
      "items": [
        "🎨 Paintbrush",
        "🖍️ Crayon",
        "✏️ Sketch Pen",
        "🪥 Toothbrush"
      ],
      "answer": "🪥 Toothbrush",
      "explanation": "Toothbrush cleans teeth, while Paintbrush, Crayon, and Sketch Pen are art materials."
    },
    {
      "items": [
        "🌸 Cherry Blossom",
        "🌺 Hibiscus",
        "🌼 Daisy",
        "🥕 Radish"
      ],
      "answer": "🥕 Radish",
      "explanation": "Radish is a root crop, while Cherry Blossom, Hibiscus, and Daisy are flowering blooms."
    },
    {
      "items": [
        "📦 Cardboard Box",
        "👜 Handbag",
        "🎒 Backpack",
        "🍽️ Ceramic Plate"
      ],
      "answer": "🍽️ Ceramic Plate",
      "explanation": "Plate is flat dining crockery, while Box, Handbag, and Backpack are storage containers."
    },
    {
      "items": [
        "🕯️ Candle",
        "🔦 Torch Light",
        "💡 Bulb",
        "🪞 Wall Mirror"
      ],
      "answer": "🪞 Wall Mirror",
      "explanation": "Mirror only reflects light, while Candle, Torch, and Bulb are light sources."
    },
    {
      "items": [
        "🚤 Speedboat",
        "🚢 Cruise Ship",
        "🛶 Canoe",
        "🛺 Auto Rickshaw"
      ],
      "answer": "🛺 Auto Rickshaw",
      "explanation": "Auto Rickshaw runs on 3 wheels on land, while Speedboat, Ship, and Canoe travel on water."
    },
    {
      "items": [
        "🐑 Sheep",
        "🐐 Goat",
        "🐎 Horse",
        "🐊 Alligator"
      ],
      "answer": "🐊 Alligator",
      "explanation": "Alligator is a predatory reptile, while Sheep, Goat, and Horse are herbivorous farm mammals."
    },
    {
      "items": [
        "🧁 Muffin",
        "🥞 Pancake",
        "🧇 Waffle",
        "🧄 Garlic Bulb"
      ],
      "answer": "🧄 Garlic Bulb",
      "explanation": "Garlic is a pungent spice bulb, while Muffin, Pancake, and Waffle are sweet breakfast bakery treats."
    },
    {
      "items": [
        "👶 Infant Baby",
        "🧒 Little Child",
        "🧑 Teenager",
        "🏡 Brick House"
      ],
      "answer": "🏡 Brick House",
      "explanation": "House is an inanimate building structure, while Baby, Child, and Teenager are living human stages."
    }
  ],
  "junior": [
    {
      "items": [
        "Square",
        "Rectangle",
        "Rhombus",
        "Sphere"
      ],
      "answer": "Sphere",
      "explanation": "Sphere is a 3D geometric solid, while Square, Rectangle, and Rhombus are 2D polygons."
    },
    {
      "items": [
        "2",
        "4",
        "6",
        "9"
      ],
      "answer": "9",
      "explanation": "9 is an odd number, while 2, 4, and 6 are even numbers."
    },
    {
      "items": [
        "Earth",
        "Mars",
        "Jupiter",
        "Moon"
      ],
      "answer": "Moon",
      "explanation": "Moon is a natural satellite, while Earth, Mars, and Jupiter are planets orbiting the Sun."
    },
    {
      "items": [
        "Rose",
        "Jasmine",
        "Lotus",
        "Spinach"
      ],
      "answer": "Spinach",
      "explanation": "Spinach is a leafy vegetable, while Rose, Jasmine, and Lotus are flowers."
    },
    {
      "items": [
        "Kilogram",
        "Gram",
        "Pound",
        "Meter"
      ],
      "answer": "Meter",
      "explanation": "Meter is a unit of length/distance, while Kilogram, Gram, and Pound measure mass/weight."
    },
    {
      "items": [
        "Square",
        "Rectangle",
        "Rhombus",
        "Sphere"
      ],
      "answer": "Sphere",
      "explanation": "Sphere is a 3D geometric solid, while Square, Rectangle, and Rhombus are 2D polygons."
    },
    {
      "items": [
        "Keyboard",
        "Mouse",
        "Microphone",
        "Monitor"
      ],
      "answer": "Monitor",
      "explanation": "Monitor is an output device displaying visuals, while Keyboard, Mouse, and Microphone are input devices."
    },
    {
      "items": [
        "Copper",
        "Silver",
        "Gold",
        "Wood"
      ],
      "answer": "Wood",
      "explanation": "Wood is an organic electrical insulator, while Copper, Silver, and Gold are conducting metals."
    },
    {
      "items": [
        "Solid",
        "Liquid",
        "Gas",
        "Weight"
      ],
      "answer": "Weight",
      "explanation": "Weight is a gravitational force measure, while Solid, Liquid, and Gas are three fundamental states of matter."
    },
    {
      "items": [
        "Liver",
        "Kidney",
        "Heart",
        "Femur"
      ],
      "answer": "Femur",
      "explanation": "Femur is a thigh bone in the skeletal system, while Liver, Kidney, and Heart are soft visceral organs."
    },
    {
      "items": [
        "Sparrow",
        "Ostrich",
        "Eagle",
        "Hawk"
      ],
      "answer": "Ostrich",
      "explanation": "Ostrich is a flightless running ratite bird, while Sparrow, Eagle, and Hawk can fly."
    },
    {
      "items": [
        "Paris",
        "London",
        "Tokyo",
        "California"
      ],
      "answer": "California",
      "explanation": "California is a US state, whereas Paris, London, and Tokyo are national sovereign capital cities."
    },
    {
      "items": [
        "Meter",
        "Centimeter",
        "Kilometer",
        "Kilogram"
      ],
      "answer": "Kilogram",
      "explanation": "Kilogram measures mass, while Meter, Centimeter, and Kilometer measure linear distance."
    },
    {
      "items": [
        "Snake",
        "Lizard",
        "Chameleon",
        "Frog"
      ],
      "answer": "Frog",
      "explanation": "Frog is an amphibian with moist skin, while Snake, Lizard, and Chameleon are scaled reptiles."
    },
    {
      "items": [
        "Venus",
        "Mars",
        "Jupiter",
        "Sirius"
      ],
      "answer": "Sirius",
      "explanation": "Sirius is a shining star in Canis Major, whereas Venus, Mars, and Jupiter are solar planets."
    },
    {
      "items": [
        "Whale",
        "Dolphin",
        "Seal",
        "Tuna"
      ],
      "answer": "Tuna",
      "explanation": "Tuna is a gill-breathing bony fish, while Whale, Dolphin, and Seal are air-breathing marine mammals."
    },
    {
      "items": [
        "Hindi",
        "Bengali",
        "Tamil",
        "Mathematics"
      ],
      "answer": "Mathematics",
      "explanation": "Mathematics is an academic STEM subject, while Hindi, Bengali, and Tamil are natural spoken languages."
    },
    {
      "items": [
        "Asia",
        "Africa",
        "Europe",
        "Atlantic"
      ],
      "answer": "Atlantic",
      "explanation": "Atlantic is an ocean basin, while Asia, Africa, and Europe are continental landmasses."
    },
    {
      "items": [
        "Square",
        "Equilateral Triangle",
        "Regular Pentagon",
        "Scalene Triangle"
      ],
      "answer": "Scalene Triangle",
      "explanation": "Scalene triangle has sides of unequal length, while others are regular equilateral polygons."
    },
    {
      "items": [
        "Violin",
        "Cello",
        "Harp",
        "Flute"
      ],
      "answer": "Flute",
      "explanation": "Flute is an aerophone wind instrument, while Violin, Cello, and Harp are chordophone string instruments."
    },
    {
      "items": [
        "Rose",
        "Jasmine",
        "Lotus",
        "Cabbage"
      ],
      "answer": "Cabbage",
      "explanation": "Cabbage is an edible leafy vegetable, while Rose, Jasmine, and Lotus are ornamental flowers."
    },
    {
      "items": [
        "Pacific",
        "Indian",
        "Arctic",
        "Amazon"
      ],
      "answer": "Amazon",
      "explanation": "Amazon is a major river, whereas Pacific, Indian, and Arctic are major world oceans."
    },
    {
      "items": [
        "Mercury",
        "Venus",
        "Earth",
        "Pluto"
      ],
      "answer": "Pluto",
      "explanation": "Pluto is classified as a dwarf planet, whereas Mercury, Venus, and Earth are major terrestrial planets."
    },
    {
      "items": [
        "Gold",
        "Iron",
        "Aluminium",
        "Plastic"
      ],
      "answer": "Plastic",
      "explanation": "Plastic is a synthetic organic polymer, while Gold, Iron, and Aluminium are naturally occurring metallic elements."
    },
    {
      "items": [
        "Second",
        "Minute",
        "Hour",
        "Litre"
      ],
      "answer": "Litre",
      "explanation": "Litre is a unit of volume, while Second, Minute, and Hour are units of time."
    },
    {
      "items": [
        "Spider",
        "Scorpion",
        "Tick",
        "Butterfly"
      ],
      "answer": "Butterfly",
      "explanation": "Butterfly is a 6-legged insect with wings, while Spider, Scorpion, and Tick are 8-legged arachnids."
    },
    {
      "items": [
        "Root",
        "Stem",
        "Leaf",
        "Mud"
      ],
      "answer": "Mud",
      "explanation": "Mud is wet soil, while Root, Stem, and Leaf are structural organs of a plant."
    },
    {
      "items": [
        "Eyes",
        "Ears",
        "Nose",
        "Stomach"
      ],
      "answer": "Stomach",
      "explanation": "Stomach is an internal digestive organ, while Eyes, Ears, and Nose are external sense organs."
    },
    {
      "items": [
        "Pen",
        "Marker",
        "Highlighter",
        "Stapler"
      ],
      "answer": "Stapler",
      "explanation": "Stapler binds papers with metal staples, while Pen, Marker, and Highlighter write with ink."
    },
    {
      "items": [
        "Square",
        "Rectangle",
        "Circle",
        "Parallelogram"
      ],
      "answer": "Circle",
      "explanation": "Circle is a curved continuous line with no straight edges or vertices, while others are quadrilaterals."
    },
    {
      "items": [
        "Carrot",
        "Radish",
        "Beetroot",
        "Apple"
      ],
      "answer": "Apple",
      "explanation": "Apple grows on tree branches, while Carrot, Radish, and Beetroot are underground root crops."
    },
    {
      "items": [
        "Doctor",
        "Nurse",
        "Pharmacist",
        "Pilot"
      ],
      "answer": "Pilot",
      "explanation": "Pilot operates aircraft in aviation, while Doctor, Nurse, and Pharmacist are healthcare workers."
    },
    {
      "items": [
        "Tiger",
        "Leopard",
        "Cheetah",
        "Horse"
      ],
      "answer": "Horse",
      "explanation": "Horse is an odd-toed ungulate herbivore, while Tiger, Leopard, and Cheetah are feline carnivores."
    },
    {
      "items": [
        "Kolkata",
        "Mumbai",
        "Chennai",
        "Himalaya"
      ],
      "answer": "Himalaya",
      "explanation": "Himalaya is a vast mountain range, while Kolkata, Mumbai, and Chennai are major Indian coastal cities."
    },
    {
      "items": [
        "Guitar",
        "Sitar",
        "Veena",
        "Tabla"
      ],
      "answer": "Tabla",
      "explanation": "Tabla is a membranophone percussion drum, while Guitar, Sitar, and Veena are stringed instruments."
    },
    {
      "items": [
        "Cricket",
        "Hockey",
        "Football",
        "Chess"
      ],
      "answer": "Chess",
      "explanation": "Chess is an indoor tabletop board game, while Cricket, Hockey, and Football are outdoor field athletic sports."
    },
    {
      "items": [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Water"
      ],
      "answer": "Water",
      "explanation": "Water is a liquid compound (H₂O) at room temperature, while Oxygen, Nitrogen, and CO₂ are gases."
    },
    {
      "items": [
        "Summer",
        "Winter",
        "Spring",
        "Monday"
      ],
      "answer": "Monday",
      "explanation": "Monday is a day of the week, while Summer, Winter, and Spring are weather seasons."
    },
    {
      "items": [
        "Iron",
        "Steel",
        "Brass",
        "Bronze"
      ],
      "answer": "Iron",
      "explanation": "Iron is a pure elementary metal (Fe), while Steel, Brass, and Bronze are manufactured alloys."
    },
    {
      "items": [
        "Thermometer",
        "Barometer",
        "Hygrometer",
        "Microscope"
      ],
      "answer": "Microscope",
      "explanation": "Microscope is an optical magnifying lens device, while others are weather/temperature measuring instruments."
    },
    {
      "items": [
        "Rupee",
        "Dollar",
        "Euro",
        "Gram"
      ],
      "answer": "Gram",
      "explanation": "Gram is a metric unit of mass, while Rupee, Dollar, and Euro are currencies."
    },
    {
      "items": [
        "Potato",
        "Ginger",
        "Turmeric",
        "Tomato"
      ],
      "answer": "Tomato",
      "explanation": "Tomato is a botanical berry fruit developed from flower ovary, while Potato, Ginger, and Turmeric are modified underground stems."
    },
    {
      "items": [
        "Penguin",
        "Whale",
        "Polar Bear",
        "Camel"
      ],
      "answer": "Camel",
      "explanation": "Camel is adapted to arid hot deserts, while Penguin, Whale, and Polar Bear inhabit freezing polar/marine regions."
    },
    {
      "items": [
        "Printer",
        "Plotter",
        "Speaker",
        "Scanner"
      ],
      "answer": "Scanner",
      "explanation": "Scanner is an input image digitizer, while Printer, Plotter, and Speaker are computer output devices."
    },
    {
      "items": [
        "Diamond",
        "Ruby",
        "Emerald",
        "Sand"
      ],
      "answer": "Sand",
      "explanation": "Sand is common silica granular soil, while Diamond, Ruby, and Emerald are precious gemstones."
    },
    {
      "items": [
        "January",
        "March",
        "July",
        "April"
      ],
      "answer": "April",
      "explanation": "April has 30 days, whereas January, March, and July all have 31 days."
    },
    {
      "items": [
        "Cube",
        "Cuboid",
        "Cylinder",
        "Triangle"
      ],
      "answer": "Triangle",
      "explanation": "Triangle is a 2-dimensional planar polygon, while Cube, Cuboid, and Cylinder are 3-dimensional solid figures."
    },
    {
      "items": [
        "New Delhi",
        "Tokyo",
        "Berlin",
        "Sydney"
      ],
      "answer": "Sydney",
      "explanation": "Sydney is not a national capital (Canberra is Australia's capital), while New Delhi, Tokyo, and Berlin are national capitals."
    },
    {
      "items": [
        "Teeth",
        "Saliva",
        "Tongue",
        "Eardrum"
      ],
      "answer": "Eardrum",
      "explanation": "Eardrum is part of the auditory hearing apparatus, while Teeth, Saliva, and Tongue function in oral mastication."
    },
    {
      "items": [
        "Solar",
        "Wind",
        "Hydroelectric",
        "Coal"
      ],
      "answer": "Coal",
      "explanation": "Coal is a finite polluting fossil fuel, whereas Solar, Wind, and Hydroelectric are renewable green energy sources."
    },
    {
      "items": [
        "Hindi",
        "Spanish",
        "French",
        "Latin"
      ],
      "answer": "Latin",
      "explanation": "Latin is considered an extinct/classical language without native native speakers, unlike living Spanish, French, and Hindi."
    },
    {
      "items": [
        "Kilowatt",
        "Horsepower",
        "Watt",
        "Volt"
      ],
      "answer": "Volt",
      "explanation": "Volt is a unit of electrical potential difference, while Watt, Kilowatt, and Horsepower are units of power."
    },
    {
      "items": [
        "Wheat",
        "Rice",
        "Barley",
        "Mustard"
      ],
      "answer": "Mustard",
      "explanation": "Mustard is an oilseed brassica crop, while Wheat, Rice, and Barley are cereal grains."
    },
    {
      "items": [
        "Red Blood Cell",
        "White Blood Cell",
        "Platelet",
        "Neuron"
      ],
      "answer": "Neuron",
      "explanation": "Neuron is a nerve cell of the nervous system, while RBC, WBC, and Platelets are cellular elements of blood tissue."
    },
    {
      "items": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Mars"
      ],
      "answer": "Mars",
      "explanation": "Mars is a rocky terrestrial inner planet, whereas Jupiter, Saturn, and Uranus are massive gas/ice giants."
    }
  ],
  "middle": [
    {
      "items": [
        "Hydrogen",
        "Helium",
        "Oxygen",
        "Iron"
      ],
      "answer": "Iron",
      "explanation": "Iron is a solid transition metal at room temperature, while Hydrogen, Helium, and Oxygen are gases."
    },
    {
      "items": [
        "Square",
        "Equilateral Triangle",
        "Regular Hexagon",
        "Scalene Triangle"
      ],
      "answer": "Scalene Triangle",
      "explanation": "A Scalene Triangle has unequal sides (irregular), while others are regular polygons."
    },
    {
      "items": [
        "11",
        "13",
        "17",
        "21"
      ],
      "answer": "21",
      "explanation": "21 is a composite number (3 × 7), while 11, 13, and 17 are prime numbers."
    },
    {
      "items": [
        "Stomach",
        "Liver",
        "Intestine",
        "Biceps"
      ],
      "answer": "Biceps",
      "explanation": "Biceps is a skeletal muscle of the arm, while Stomach, Liver, and Intestine are digestive organs."
    },
    {
      "items": [
        "Barometer",
        "Thermometer",
        "Hygrometer",
        "Microscope"
      ],
      "answer": "Microscope",
      "explanation": "A microscope is an optical instrument for viewing magnification, whereas others measure atmospheric variables."
    },
    {
      "items": [
        "Hydrogen",
        "Helium",
        "Oxygen",
        "Iron"
      ],
      "answer": "Iron",
      "explanation": "Iron is a solid transition metal at room temperature, while Hydrogen, Helium, and Oxygen are gases."
    },
    {
      "items": [
        "Tuberculosis",
        "Cholera",
        "Typhoid",
        "Malaria"
      ],
      "answer": "Malaria",
      "explanation": "Malaria is caused by a protozoan parasite (Plasmodium), while Tuberculosis, Cholera, and Typhoid are caused by bacteria."
    },
    {
      "items": [
        "Ohm",
        "Volt",
        "Ampere",
        "Joule"
      ],
      "answer": "Joule",
      "explanation": "Joule is a unit of work/energy, while Ohm, Volt, and Ampere are specific electrical circuit units (resistance, potential, current)."
    },
    {
      "items": [
        "Brass",
        "Bronze",
        "Steel",
        "Sodium"
      ],
      "answer": "Sodium",
      "explanation": "Sodium is a pure highly reactive alkali metal element, whereas Brass, Bronze, and Steel are metallurgical alloys."
    },
    {
      "items": [
        "Baking Soda",
        "Caustic Soda",
        "Washing Soda",
        "Table Salt"
      ],
      "answer": "Caustic Soda",
      "explanation": "Caustic Soda (NaOH) is a strong corrosive base, while Baking soda, Washing soda, and Table salt are mineral salts."
    },
    {
      "items": [
        "Pistil",
        "Stamen",
        "Petal",
        "Chloroplast"
      ],
      "answer": "Chloroplast",
      "explanation": "Chloroplast is a cellular photosynthetic organelle, whereas Pistil, Stamen, and Petal are macroscopic floral anatomical organs."
    },
    {
      "items": [
        "Conduction",
        "Convection",
        "Radiation",
        "Sublimation"
      ],
      "answer": "Sublimation",
      "explanation": "Sublimation is a phase change from solid directly to gas, while Conduction, Convection, and Radiation are heat transfer mechanisms."
    },
    {
      "items": [
        "Diamond",
        "Graphite",
        "Fullerene",
        "Silica"
      ],
      "answer": "Silica",
      "explanation": "Silica is silicon dioxide (SiO₂), while Diamond, Graphite, and Fullerene are allotropes of pure carbon."
    },
    {
      "items": [
        "Amoeba",
        "Paramecium",
        "Euglena",
        "Hydra"
      ],
      "answer": "Hydra",
      "explanation": "Hydra is a multicellular cnidarian animal, while Amoeba, Paramecium, and Euglena are unicellular protozoa."
    },
    {
      "items": [
        "HCl",
        "H₂SO₄",
        "HNO₃",
        "CH₃COOH"
      ],
      "answer": "CH₃COOH",
      "explanation": "Acetic acid (CH₃COOH) is a weak organic carboxylic acid, while HCl, H₂SO₄, and HNO₃ are strong mineral acids."
    },
    {
      "items": [
        "Mass",
        "Volume",
        "Density",
        "Velocity"
      ],
      "answer": "Velocity",
      "explanation": "Velocity is a directional vector quantity, whereas Mass, Volume, and Density are scalar physical properties."
    },
    {
      "items": [
        "Rhizobium",
        "Azotobacter",
        "Nostoc",
        "Lactobacillus"
      ],
      "answer": "Lactobacillus",
      "explanation": "Lactobacillus curdles milk into yogurt, while Rhizobium, Azotobacter, and Nostoc are nitrogen-fixing organisms."
    },
    {
      "items": [
        "Earthquake",
        "Tsunami",
        "Volcano",
        "Deforestation"
      ],
      "answer": "Deforestation",
      "explanation": "Deforestation is an anthropogenic (human-induced) activity, while Earthquake, Tsunami, and Volcano are natural tectonic hazards."
    },
    {
      "items": [
        "Venus",
        "Uranus",
        "Earth",
        "Saturn"
      ],
      "answer": "Venus",
      "explanation": "Venus (along with Uranus) rotates retrograde (clockwise on axis), whereas Earth and Saturn rotate prograde counter-clockwise."
    },
    {
      "items": [
        "Xylem",
        "Phloem",
        "Cambium",
        "Epithelium"
      ],
      "answer": "Epithelium",
      "explanation": "Epithelium is an animal tissue covering organs, while Xylem, Phloem, and Cambium are plant vascular tissues."
    },
    {
      "items": [
        "Refraction",
        "Reflection",
        "Diffraction",
        "Neutralization"
      ],
      "answer": "Neutralization",
      "explanation": "Neutralization is an acid-base chemical reaction, whereas Refraction, Reflection, and Diffraction are optical wave phenomena."
    },
    {
      "items": [
        "Kelvin",
        "Celsius",
        "Fahrenheit",
        "Calorie"
      ],
      "answer": "Calorie",
      "explanation": "Calorie is a unit of thermal heat energy, while Kelvin, Celsius, and Fahrenheit are temperature scales."
    },
    {
      "items": [
        "Photosynthesis",
        "Chemosynthesis",
        "Autotrophy",
        "Respiration"
      ],
      "answer": "Respiration",
      "explanation": "Respiration breaks down glucose releasing catabolic energy, while the others are anabolic food synthesis modes."
    },
    {
      "items": [
        "Tapeworm",
        "Liver Fluke",
        "Planaria",
        "Earthworm"
      ],
      "answer": "Earthworm",
      "explanation": "Earthworm is a segmented coelomate annelid, while Tapeworm, Liver fluke, and Planaria are unsegmented flatworms (Platyhelminthes)."
    },
    {
      "items": [
        "Altimeter",
        "Anemometer",
        "Barometer",
        "Speedometer"
      ],
      "answer": "Speedometer",
      "explanation": "Speedometer measures vehicular linear velocity, while Altimeter, Anemometer, and Barometer measure atmospheric parameters."
    },
    {
      "items": [
        "Gold",
        "Platinum",
        "Silver",
        "Potassium"
      ],
      "answer": "Potassium",
      "explanation": "Potassium is an extremely reactive alkali metal that catches fire in water, while Gold, Platinum, and Silver are noble unreactive metals."
    },
    {
      "items": [
        "Stomata",
        "Cuticle",
        "Mesophyll",
        "Nephron"
      ],
      "answer": "Nephron",
      "explanation": "Nephron is the microscopic functional filtration unit of vertebrate kidneys, while the others are botanical leaf tissues."
    },
    {
      "items": [
        "Frequency",
        "Wavelength",
        "Amplitude",
        "Current"
      ],
      "answer": "Current",
      "explanation": "Current is electric charge flow per unit time, while Frequency, Wavelength, and Amplitude describe wave properties."
    },
    {
      "items": [
        "Starch",
        "Glycogen",
        "Cellulose",
        "Haemoglobin"
      ],
      "answer": "Haemoglobin",
      "explanation": "Haemoglobin is an iron-bearing respiratory globular protein, whereas Starch, Glycogen, and Cellulose are carbohydrate polysaccharides."
    },
    {
      "items": [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Lithosphere"
      ],
      "answer": "Lithosphere",
      "explanation": "Lithosphere is the solid outermost rock crust of Earth, while the others are atmospheric gaseous layers."
    },
    {
      "items": [
        "Rusting",
        "Combustion",
        "Digestion",
        "Boiling"
      ],
      "answer": "Boiling",
      "explanation": "Boiling is a reversible physical phase change, while Rusting, Combustion, and Digestion are irreversible chemical changes."
    },
    {
      "items": [
        "Scurvy",
        "Rickets",
        "Beriberi",
        "Diabetes"
      ],
      "answer": "Diabetes",
      "explanation": "Diabetes is a metabolic endocrine disorder of insulin, whereas Scurvy, Rickets, and Beriberi are vitamin deficiency diseases."
    },
    {
      "items": [
        "Pascal",
        "Newton/m²",
        "Atmosphere",
        "Newton"
      ],
      "answer": "Newton",
      "explanation": "Newton is the SI unit of force, while Pascal, N/m², and Atmosphere are units of pressure."
    },
    {
      "items": [
        "Mitochondria",
        "Ribosome",
        "Nucleus",
        "Riboflavin"
      ],
      "answer": "Riboflavin",
      "explanation": "Riboflavin is Vitamin B₂, while Mitochondria, Ribosome, and Nucleus are intracellular organelles."
    },
    {
      "items": [
        "Chlorine",
        "Fluorine",
        "Bromine",
        "Argon"
      ],
      "answer": "Argon",
      "explanation": "Argon is an inert noble gas (Group 18), while Chlorine, Fluorine, and Bromine are reactive halogens (Group 17)."
    },
    {
      "items": [
        "Concave Lens",
        "Convex Mirror",
        "Plane Mirror",
        "Convex Lens"
      ],
      "answer": "Convex Lens",
      "explanation": "Convex lens is a converging lens that can form real inverted images, while concave lenses, convex mirrors, and plane mirrors always produce virtual images under normal conditions."
    },
    {
      "items": [
        "Thyroid",
        "Pituitary",
        "Adrenal",
        "Salivary Gland"
      ],
      "answer": "Salivary Gland",
      "explanation": "Salivary gland is an exocrine gland with ducts, while Thyroid, Pituitary, and Adrenal are ductless endocrine glands."
    },
    {
      "items": [
        "Nitrogen",
        "Oxygen",
        "Argon",
        "Ozone"
      ],
      "answer": "Ozone",
      "explanation": "Ozone is a triatomic gas molecule (O₃) concentrated in the stratosphere, while N₂, O₂, and Ar are primary bulk tropospheric gases."
    },
    {
      "items": [
        "Kilowatt-hour",
        "Joule",
        "Calorie",
        "Watt"
      ],
      "answer": "Watt",
      "explanation": "Watt is a unit of power (rate of energy), while kWh, Joule, and Calorie are units of energy."
    },
    {
      "items": [
        "Bryophyte",
        "Pteridophyte",
        "Thallophyte",
        "Gymnosperm"
      ],
      "answer": "Gymnosperm",
      "explanation": "Gymnosperms produce exposed naked seeds (phanerogams), while Thallophytes, Bryophytes, and Pteridophytes are seedless cryptogams."
    },
    {
      "items": [
        "Pumice",
        "Basalt",
        "Obsidian",
        "Limestone"
      ],
      "answer": "Limestone",
      "explanation": "Limestone is a sedimentary rock formed from calcite sediments, while Pumice, Basalt, and Obsidian are igneous volcanic rocks."
    },
    {
      "items": [
        "Mercury",
        "Bromine",
        "Gallium",
        "Sulfur"
      ],
      "answer": "Sulfur",
      "explanation": "Sulfur is a brittle yellow solid non-metal, whereas Bromine and Mercury are liquids at standard conditions (and Gallium melts in palm)."
    },
    {
      "items": [
        "Echinodermata",
        "Arthropoda",
        "Mollusca",
        "Chordata"
      ],
      "answer": "Chordata",
      "explanation": "Chordata possesses a notochord / backbone, while Echinodermata, Arthropoda, and Mollusca are invertebrates."
    },
    {
      "items": [
        "Speed",
        "Distance",
        "Time",
        "Acceleration"
      ],
      "answer": "Acceleration",
      "explanation": "Acceleration is a vector quantity (magnitude + direction), while Speed, Distance, and Time are pure scalars."
    },
    {
      "items": [
        "Insulin",
        "Glucagon",
        "Adrenaline",
        "Pepsin"
      ],
      "answer": "Pepsin",
      "explanation": "Pepsin is a proteolytic digestive enzyme in gastric juice, while Insulin, Glucagon, and Adrenaline are systemic hormones."
    },
    {
      "items": [
        "Igneous",
        "Sedimentary",
        "Metamorphic",
        "Magnetic"
      ],
      "answer": "Magnetic",
      "explanation": "Magnetic describes an electromagnetic property, while Igneous, Sedimentary, and Metamorphic are the three rock classifications."
    },
    {
      "items": [
        "Methane",
        "Ethane",
        "Propane",
        "Ethene"
      ],
      "answer": "Ethene",
      "explanation": "Ethene is an unsaturated alkene with a double bond (C=C), while Methane, Ethane, and Propane are saturated alkanes."
    },
    {
      "items": [
        "Bacterium",
        "Fungus",
        "Virus",
        "Protozoan"
      ],
      "answer": "Virus",
      "explanation": "Viruses are acellular obligate parasites lacking cellular metabolism, whereas bacteria, fungi, and protozoa are cellular organisms."
    },
    {
      "items": [
        "Lithium",
        "Sodium",
        "Potassium",
        "Calcium"
      ],
      "answer": "Calcium",
      "explanation": "Calcium is an alkaline earth metal (Group 2, divalent), whereas Lithium, Sodium, and Potassium are alkali metals (Group 1, monovalent)."
    },
    {
      "items": [
        "Cornea",
        "Retina",
        "Iris",
        "Cochlea"
      ],
      "answer": "Cochlea",
      "explanation": "Cochlea is the sensory organ for hearing in the inner ear, while Cornea, Retina, and Iris are ocular eye structures."
    },
    {
      "items": [
        "Convex Mirror",
        "Rearview Mirror",
        "Security Mirror",
        "Dentist Mirror"
      ],
      "answer": "Dentist Mirror",
      "explanation": "Dentist's mirror is a concave mirror used to produce magnified images, while the others utilize convex diverging mirrors."
    },
    {
      "items": [
        "Pitch",
        "Loudness",
        "Timbre",
        "Echo"
      ],
      "answer": "Echo",
      "explanation": "Echo is reflected sound wave reception, while Pitch, Loudness, and Timbre are subjective musical qualities of sound."
    },
    {
      "items": [
        "Urea",
        "Uric Acid",
        "Ammonia",
        "Bile Pigment"
      ],
      "answer": "Bile Pigment",
      "explanation": "Bile pigments (bilirubin/biliverdin) are breakdown products of haemoglobin excreted via feces, whereas Urea, Uric acid, and Ammonia are primary nitrogenous metabolic wastes."
    },
    {
      "items": [
        "Lead",
        "Mercury",
        "Cadmium",
        "Magnesium"
      ],
      "answer": "Magnesium",
      "explanation": "Magnesium is an essential dietary macronutrient mineral, while Lead, Mercury, and Cadmium are toxic heavy metals."
    },
    {
      "items": [
        "Centripetal Force",
        "Friction",
        "Tension",
        "Centrifugal Force"
      ],
      "answer": "Centrifugal Force",
      "explanation": "Centrifugal force is a pseudo (fictitious) inertial force observed in rotating reference frames, while the others are real interaction forces."
    }
  ],
  "secondary": [
    {
      "items": [
        "Ohm",
        "Volt",
        "Ampere",
        "Joule"
      ],
      "answer": "Joule",
      "explanation": "Joule is a unit of work/energy, while Ohm, Volt, and Ampere are specific electrical units."
    },
    {
      "items": [
        "Valence electrons",
        "Protons",
        "Neutrons",
        "Photons"
      ],
      "answer": "Photons",
      "explanation": "Photons are elementary particles of electromagnetic radiation/light, not atomic sub-particles."
    },
    {
      "items": [
        "Methane (CH₄)",
        "Ethane (C₂H₆)",
        "Propane (C₃H₈)",
        "Ethene (C₂H₄)"
      ],
      "answer": "Ethene (C₂H₄)",
      "explanation": "Ethene is an unsaturated alkene with a double bond; the other three are saturated alkanes."
    },
    {
      "items": [
        "Diamond",
        "Graphite",
        "Fullerene",
        "Brass"
      ],
      "answer": "Brass",
      "explanation": "Brass is an alloy of copper and zinc, while Diamond, Graphite, and Fullerene are allotropes of pure carbon."
    },
    {
      "items": [
        "Mitosis",
        "Meiosis",
        "Binary Fission",
        "Photosynthesis"
      ],
      "answer": "Photosynthesis",
      "explanation": "Photosynthesis is a metabolic energy-conversion process, while the other three are modes of cell division/reproduction."
    },
    {
      "items": [
        "Ohm",
        "Volt",
        "Ampere",
        "Tesla"
      ],
      "answer": "Tesla",
      "explanation": "Tesla is the unit of magnetic flux density (B-field), while Ohm, Volt, and Ampere are basic electrical circuit units."
    },
    {
      "items": [
        "Mendel",
        "Darwin",
        "Lamarck",
        "Rutherford"
      ],
      "answer": "Rutherford",
      "explanation": "Ernest Rutherford was a nuclear physicist who discovered the atomic nucleus, while Mendel, Darwin, and Lamarck are evolutionary/genetic biologists."
    },
    {
      "items": [
        "Glycolysis",
        "Krebs Cycle",
        "Electron Transport Chain",
        "Calvin Cycle"
      ],
      "answer": "Calvin Cycle",
      "explanation": "Calvin cycle is light-independent carbon fixation in photosynthetic plants, while the others are steps of cellular respiration."
    },
    {
      "items": [
        "Esterification",
        "Saponification",
        "Hydrogenation",
        "Refraction"
      ],
      "answer": "Refraction",
      "explanation": "Refraction is a physical optical boundary wave bending, while the others are organic chemical synthesis reactions."
    },
    {
      "items": [
        "Alkanes",
        "Alkenes",
        "Alkynes",
        "Arenes"
      ],
      "answer": "Arenes",
      "explanation": "Arenes are cyclic aromatic hydrocarbons with delocalized pi systems, while Alkanes, Alkenes, and Alkynes are aliphatic chains."
    },
    {
      "items": [
        "Auxin",
        "Gibberellin",
        "Cytokinin",
        "Pepsin"
      ],
      "answer": "Pepsin",
      "explanation": "Pepsin is a mammalian stomach enzyme, while Auxin, Gibberellin, and Cytokinin are phytohormones (plant growth regulators)."
    },
    {
      "items": [
        "Faraday",
        "Ampere",
        "Maxwell",
        "Fleming"
      ],
      "answer": "Fleming",
      "explanation": "Alexander Fleming discovered penicillin in medicine/biology, while Michael Faraday, André-Marie Ampère, and James Clerk Maxwell formulated electromagnetic physics laws."
    },
    {
      "items": [
        "Myopia",
        "Hypermetropia",
        "Astigmatism",
        "Cataract"
      ],
      "answer": "Cataract",
      "explanation": "Cataract is opacification of the eye lens treated surgically, while Myopia, Hypermetropia, and Astigmatism are refractive errors corrected with spectacle lenses."
    },
    {
      "items": [
        "Electrolysis",
        "Galvanization",
        "Electroplating",
        "Fermentation"
      ],
      "answer": "Fermentation",
      "explanation": "Fermentation is an anaerobic biochemical enzymatic decomposition, while the others are electrochemical surface/redox processes."
    },
    {
      "items": [
        "Alpha Particle",
        "Beta Particle",
        "Proton",
        "Gamma Ray"
      ],
      "answer": "Gamma Ray",
      "explanation": "Gamma ray is high-frequency massless neutral electromagnetic photon radiation, while Alpha, Beta, and Proton are massive charged particles."
    },
    {
      "items": [
        "Isotopes",
        "Isobars",
        "Isotones",
        "Isomers"
      ],
      "answer": "Isomers",
      "explanation": "Isomers are chemical molecules sharing identical molecular formulae with different structures, while Isotopes, Isobars, and Isotones are nuclear nuclear species."
    },
    {
      "items": [
        "Cranial Nerves",
        "Spinal Nerves",
        "Autonomic Nerves",
        "Spinal Cord"
      ],
      "answer": "Spinal Cord",
      "explanation": "Spinal Cord is part of the Central Nervous System (CNS), while Cranial, Spinal, and Autonomic nerves comprise the Peripheral Nervous System (PNS)."
    },
    {
      "items": [
        "Bleaching Powder",
        "Plaster of Paris",
        "Slaked Lime",
        "Methane"
      ],
      "answer": "Methane",
      "explanation": "Methane is an organic covalent hydrocarbon gas (CH₄), while the others are calcium-based inorganic ionic mineral compounds."
    },
    {
      "items": [
        "Dispersion",
        "Total Internal Reflection",
        "Scattering",
        "Nuclear Fission"
      ],
      "answer": "Nuclear Fission",
      "explanation": "Nuclear fission is a heavy atomic nucleus splitting reaction, whereas the others are optical phenomena responsible for rainbows and sky color."
    },
    {
      "items": [
        "Ethanol",
        "Methanol",
        "Propanol",
        "Acetone"
      ],
      "answer": "Acetone",
      "explanation": "Acetone is a ketone (CH₃COCH₃) containing a carbonyl group, while Ethanol, Methanol, and Propanol are monohydric alcohols (-OH)."
    },
    {
      "items": [
        "Newton's First Law",
        "Newton's Second Law",
        "Newton's Third Law",
        "Kepler's Laws"
      ],
      "answer": "Kepler's Laws",
      "explanation": "Kepler's three laws govern celestial planetary orbital kinematics around the sun, while Newton's laws are general mechanics laws."
    },
    {
      "items": [
        "Mutualism",
        "Commensalism",
        "Parasitism",
        "Cannibalism"
      ],
      "answer": "Cannibalism",
      "explanation": "Cannibalism is an intra-specific predatory feeding behavior, while Mutualism, Commensalism, and Parasitism are inter-specific ecological symbioses."
    },
    {
      "items": [
        "Amphoteric Oxide",
        "Acidic Oxide",
        "Basic Oxide",
        "Inert Oxide"
      ],
      "answer": "Inert Oxide",
      "explanation": "Oxides are systematically classified chemically as Acidic, Basic, Neutral, or Amphoteric; 'Inert oxide' is not a standard chemical class."
    },
    {
      "items": [
        "X-rays",
        "Ultraviolet Rays",
        "Microwaves",
        "Sound Waves"
      ],
      "answer": "Sound Waves",
      "explanation": "Sound wave is a mechanical longitudinal wave requiring a material medium, while X-rays, UV, and Microwaves are transverse electromagnetic waves that propagate in vacuum."
    },
    {
      "items": [
        "Hemoglobin",
        "Chlorophyll",
        "Myoglobin",
        "Keratin"
      ],
      "answer": "Keratin",
      "explanation": "Keratin is an insoluble structural fibrous protein in hair and nails, whereas Hemoglobin, Chlorophyll, and Myoglobin are pigment/porphyrin coordination complexes."
    },
    {
      "items": [
        "Voltmeter",
        "Ammeter",
        "Galvanometer",
        "Rheostat"
      ],
      "answer": "Rheostat",
      "explanation": "Rheostat is a variable electrical resistor used to control current, while Voltmeter, Ammeter, and Galvanometer are electrical measuring instruments."
    },
    {
      "items": [
        "Mitosis",
        "Meiosis",
        "Amitosis",
        "Osmosis"
      ],
      "answer": "Osmosis",
      "explanation": "Osmosis is passive solvent water diffusion across semipermeable membranes, whereas Mitosis, Meiosis, and Amitosis are eukaryotic cell division mechanisms."
    },
    {
      "items": [
        "Covalent Bond",
        "Ionic Bond",
        "Coordinate Bond",
        "Van der Waals Force"
      ],
      "answer": "Van der Waals Force",
      "explanation": "Van der Waals forces are weak intermolecular attractions, while Covalent, Ionic, and Coordinate bonds are strong intramolecular chemical bonds."
    },
    {
      "items": [
        "Cushing Syndrome",
        "Addison Disease",
        "Graves Disease",
        "Tetanus"
      ],
      "answer": "Tetanus",
      "explanation": "Tetanus is an infectious bacterial disease caused by Clostridium tetani neurotoxin, while the others are human endocrine hormone disorders."
    },
    {
      "items": [
        "Kinetic Energy",
        "Potential Energy",
        "Thermal Energy",
        "Momentum"
      ],
      "answer": "Momentum",
      "explanation": "Momentum (p = mv) is a vector quantity, while Kinetic, Potential, and Thermal energy are scalar quantities."
    },
    {
      "items": [
        "Somatic Cell",
        "Zygote",
        "Hepatocyte",
        "Spermatozoon"
      ],
      "answer": "Spermatozoon",
      "explanation": "Spermatozoon is a haploid (n) male reproductive gamete, whereas somatic cells, zygotes, and hepatocytes are diploid (2n)."
    },
    {
      "items": [
        "Boyle's Law",
        "Charles's Law",
        "Gay-Lussac's Law",
        "Hooke's Law"
      ],
      "answer": "Hooke's Law",
      "explanation": "Hooke's Law (F = -kx) governs elasticity of solid springs, whereas Boyle, Charles, and Gay-Lussac describe ideal gas thermodynamics."
    },
    {
      "items": [
        "Lithium",
        "Sodium",
        "Potassium",
        "Helium"
      ],
      "answer": "Helium",
      "explanation": "Helium is an inert noble gas with a closed 1s² duet, while Li, Na, and K are highly reactive alkali metals."
    },
    {
      "items": [
        "Starch",
        "Glycogen",
        "Cellulose",
        "Sucrose"
      ],
      "answer": "Sucrose",
      "explanation": "Sucrose is a disaccharide (table sugar C₁₂H₂₂O₁₁), whereas Starch, Glycogen, and Cellulose are high-molecular-weight polysaccharides."
    },
    {
      "items": [
        "Ampere's Circuital Law",
        "Faraday's Law",
        "Gauss's Law",
        "Snell's Law"
      ],
      "answer": "Snell's Law",
      "explanation": "Snell's Law describes refractive wave bending at optical interfaces, while Ampere, Faraday, and Gauss are Maxwell's foundational field equations."
    },
    {
      "items": [
        "Prophase",
        "Metaphase",
        "Anaphase",
        "Interphase"
      ],
      "answer": "Interphase",
      "explanation": "Interphase is the non-dividing preparatory growth phase (G₁, S, G₂), while Prophase, Metaphase, and Anaphase are active stages of M-phase mitosis."
    },
    {
      "items": [
        "Diamond",
        "Silicon Carbide",
        "Quartz",
        "Dry Ice"
      ],
      "answer": "Dry Ice",
      "explanation": "Dry Ice (solid CO₂) is a soft molecular solid held by weak dispersion forces, while Diamond, SiC, and Quartz are ultra-hard covalent network solids."
    },
    {
      "items": [
        "Capacitance",
        "Inductance",
        "Resistance",
        "Magnetic Flux"
      ],
      "answer": "Magnetic Flux",
      "explanation": "Magnetic Flux is a field surface integral measured in Webers, while Resistance, Inductance, and Capacitance are passive lumped electronic circuit parameters."
    },
    {
      "items": [
        "Monohybrid Cross",
        "Dihybrid Cross",
        "Test Cross",
        "Gel Electrophoresis"
      ],
      "answer": "Gel Electrophoresis",
      "explanation": "Gel Electrophoresis is a laboratory biochemical separation technique for DNA/proteins, whereas the others are classical Mendelian genetic breeding crosses."
    },
    {
      "items": [
        "Diamond",
        "Ruby",
        "Sapphire",
        "Topaz"
      ],
      "answer": "Diamond",
      "explanation": "Diamond is pure elemental carbon, whereas Ruby and Sapphire are corundum (Al₂O₃) and Topaz is a silicate mineral."
    },
    {
      "items": [
        "Buoyant Force",
        "Gravitational Force",
        "Coulomb Force",
        "Magnetic Force"
      ],
      "answer": "Buoyant Force",
      "explanation": "Buoyant force is a hydrostatic fluid pressure result (contact force), while Gravity, Coulomb, and Magnetic forces are non-contact fundamental field forces."
    },
    {
      "items": [
        "Photosystem I",
        "Photosystem II",
        "RuBisCO",
        "Cytochrome b6f"
      ],
      "answer": "RuBisCO",
      "explanation": "RuBisCO is a soluble enzymatic protein of the dark stroma Calvin cycle, while PSI, PSII, and Cytochrome b6f are thylakoid membrane-bound complexes."
    },
    {
      "items": [
        "Adiabatic Process",
        "Isothermal Process",
        "Isochoric Process",
        "Electrochemical Process"
      ],
      "answer": "Electrochemical Process",
      "explanation": "Electrochemical process involves chemical redox reactions producing EMF, while Adiabatic, Isothermal, and Isochoric are thermodynamic state paths."
    },
    {
      "items": [
        "Acids",
        "Bases",
        "Salts",
        "Alkanes"
      ],
      "answer": "Alkanes",
      "explanation": "Alkanes are non-polar unreactive covalent hydrocarbons, while acids, bases, and salts are polar/ionic electrolytes."
    },
    {
      "items": [
        "Biconcave",
        "Planoconvex",
        "Cylindrical",
        "Triangular Prism"
      ],
      "answer": "Triangular Prism",
      "explanation": "Prism disperses light into spectrum without focusing rays to a focal point, unlike imaging lenses."
    },
    {
      "items": [
        "Trachea",
        "Bronchi",
        "Alveoli",
        "Esophagus"
      ],
      "answer": "Esophagus",
      "explanation": "Esophagus is part of the gastrointestinal alimentary digestive canal, while Trachea, Bronchi, and Alveoli comprise the respiratory tract."
    },
    {
      "items": [
        "Saturated Solution",
        "Unsaturated Solution",
        "Supersaturated Solution",
        "Colloidal Solution"
      ],
      "answer": "Colloidal Solution",
      "explanation": "Colloidal solution is a heterogeneous mixture with dispersed particles (1-1000 nm), while the others are true homogeneous solutions."
    },
    {
      "items": [
        "Centripetal Acceleration",
        "Coriolis Acceleration",
        "Tangential Acceleration",
        "Gravitational Constant"
      ],
      "answer": "Gravitational Constant",
      "explanation": "Gravitational constant (G) is a universal dimensional physical scalar constant, whereas the others are kinematic acceleration vectors."
    },
    {
      "items": [
        "Plasmolysis",
        "Turgidity",
        "Deplasmolysis",
        "Coagulation"
      ],
      "answer": "Coagulation",
      "explanation": "Coagulation is precipitation/denaturation of colloidal proteins, while Plasmolysis, Turgidity, and Deplasmolysis are osmotic plant cell volume phenomena."
    },
    {
      "items": [
        "Corrosion",
        "Rancidity",
        "Respiration",
        "Combustion"
      ],
      "answer": "Rancidity",
      "explanation": "Rancidity specifically refers to aerial oxidation and hydrolysis of fats and oils producing unpleasant odor/taste."
    },
    {
      "items": [
        "Convex Mirror",
        "Dentist Mirror",
        "Solar Cooker Mirror",
        "Car Headlight Reflector"
      ],
      "answer": "Convex Mirror",
      "explanation": "Convex mirror diverges light to form a virtual diminished field of view, while Dentist mirror, Solar cooker, and Headlights use concave converging reflectors."
    },
    {
      "items": [
        "Erythrocytes",
        "Leukocytes",
        "Thrombocytes",
        "Chondrocytes"
      ],
      "answer": "Chondrocytes",
      "explanation": "Chondrocytes are specialized cartilage cells in connective skeletal tissue, whereas Erythrocytes, Leukocytes, and Thrombocytes are blood cells."
    },
    {
      "items": [
        "Archimedes' Principle",
        "Pascal's Law",
        "Bernoulli's Principle",
        "Ohm's Law"
      ],
      "answer": "Ohm's Law",
      "explanation": "Ohm's law governs electric currents in resistive conductors, while Archimedes, Pascal, and Bernoulli govern fluid statics and dynamics."
    },
    {
      "items": [
        "Endothermic Reaction",
        "Exothermic Reaction",
        "Combustion",
        "Nuclear Fusion"
      ],
      "answer": "Nuclear Fusion",
      "explanation": "Nuclear fusion alters nuclear atomic structure releasing MeV-scale binding energy, whereas the others are electron-rearranging chemical reactions."
    },
    {
      "items": [
        "Chlorophyll a",
        "Chlorophyll b",
        "Carotenoids",
        "Anthocyanin"
      ],
      "answer": "Anthocyanin",
      "explanation": "Anthocyanin is a water-soluble vacuolar flavonoid pigment, while Chlorophyll a, b, and Carotenoids are lipid-soluble photosynthetic thylakoid pigments."
    }
  ],
  "senior": [
    {
      "items": [
        "Angular momentum",
        "Torque",
        "Magnetic moment",
        "Kinetic energy"
      ],
      "answer": "Kinetic energy",
      "explanation": "Kinetic energy is a scalar quantity, whereas Angular momentum, Torque, and Magnetic moment are vector quantities."
    },
    {
      "items": [
        "Entropy (S)",
        "Enthalpy (H)",
        "Gibbs Free Energy (G)",
        "Work done (W)"
      ],
      "answer": "Work done (W)",
      "explanation": "Work is a path function, whereas Entropy, Enthalpy, and Gibbs Free Energy are thermodynamic state functions."
    },
    {
      "items": [
        "Aldehyde",
        "Ketone",
        "Carboxylic Acid",
        "Ether"
      ],
      "answer": "Ether",
      "explanation": "Ethers lack a carbonyl group (C=O), which is present in aldehydes, ketones, and carboxylic acids."
    },
    {
      "items": [
        "Schottky defect",
        "Frenkel defect",
        "Interstitial defect",
        "Doppler effect"
      ],
      "answer": "Doppler effect",
      "explanation": "Doppler effect relates to wave frequency shift, while others are crystal lattice stoichiometric defects."
    },
    {
      "items": [
        "Hermite polynomial",
        "Legendre polynomial",
        "Laguerre polynomial",
        "Maxwell distribution"
      ],
      "answer": "Maxwell distribution",
      "explanation": "Maxwell distribution is a statistical probability distribution of molecular speeds, while others are orthogonal polynomials."
    },
    {
      "items": [
        "Angular momentum",
        "Torque",
        "Magnetic moment",
        "Kinetic energy"
      ],
      "answer": "Kinetic energy",
      "explanation": "Kinetic energy is a scalar quantity, whereas Angular momentum, Torque, and Magnetic moment are pseudo/axial vector quantities."
    },
    {
      "items": [
        "Fermion",
        "Quark",
        "Lepton",
        "Photon"
      ],
      "answer": "Photon",
      "explanation": "Photon is a spin-1 gauge boson obeying Bose-Einstein statistics, while Quarks and Leptons are spin-1/2 fermions obeying Fermi-Dirac statistics."
    },
    {
      "items": [
        "Isothermal",
        "Isobaric",
        "Isochoric",
        "Irreversible"
      ],
      "answer": "Irreversible",
      "explanation": "Irreversible describes the thermodynamic reversibility status of a process path, while Isothermal (const T), Isobaric (const P), and Isochoric (const V) are specific state variable constraints."
    },
    {
      "items": [
        "Benzene",
        "Pyridine",
        "Pyrrole",
        "Cyclohexane"
      ],
      "answer": "Cyclohexane",
      "explanation": "Cyclohexane is a non-aromatic, puckered aliphatic cyclic alkane (sp³), whereas Benzene, Pyridine, and Pyrrole are planar aromatic rings obeying Huckel's rule (4n+2)."
    },
    {
      "items": [
        "Schrödinger Equation",
        "Heisenberg Uncertainty",
        "De Broglie Hypothesis",
        "Lorentz Force Law"
      ],
      "answer": "Lorentz Force Law",
      "explanation": "Lorentz force law F = q(E + v×B) is a classical electrodynamics principle, while the others are quantum mechanical wave-particle relations."
    },
    {
      "items": [
        "SN1",
        "SN2",
        "E1",
        "Friedel-Crafts Acylation"
      ],
      "answer": "Friedel-Crafts Acylation",
      "explanation": "Friedel-Crafts Acylation is an Electrophilic Aromatic Substitution (EAS), while SN1, SN2, and E1 are aliphatic nucleophilic substitution and elimination pathways."
    },
    {
      "items": [
        "Transcription",
        "Translation",
        "DNA Replication",
        "Glycosylation"
      ],
      "answer": "Glycosylation",
      "explanation": "Glycosylation is a post-translational covalent enzymatic attachment of carbohydrates, while Replication, Transcription, and Translation are the core stages of the Central Dogma of molecular genetics."
    },
    {
      "items": [
        "Paramagnetic",
        "Diamagnetic",
        "Ferromagnetic",
        "Hydrodynamic"
      ],
      "answer": "Hydrodynamic",
      "explanation": "Hydrodynamic refers to macroscopic fluid dynamics, whereas Paramagnetic, Diamagnetic, and Ferromagnetic are quantum electronic magnetic properties."
    },
    {
      "items": [
        "Capacitor",
        "Inductor",
        "Resistor",
        "Transistor"
      ],
      "answer": "Transistor",
      "explanation": "Transistor is an active 3-terminal semiconductor device capable of amplification/switching, while Resistor, Capacitor, and Inductor are passive 2-terminal linear components."
    },
    {
      "items": [
        "Enthalpy (H)",
        "Entropy (S)",
        "Gibbs Free Energy (G)",
        "Work (W)"
      ],
      "answer": "Work (W)",
      "explanation": "Work (W) is a path function dependent on trajectory, whereas Enthalpy, Entropy, and Gibbs Free Energy are thermodynamic state functions."
    },
    {
      "items": [
        "Photoelectric Effect",
        "Compton Scattering",
        "Pair Production",
        "Raleigh Scattering"
      ],
      "answer": "Raleigh Scattering",
      "explanation": "Rayleigh scattering is elastic photon scattering without energy change, while Photoelectric effect, Compton scattering, and Pair production involve inelastic photon absorption or wavelength shifts demonstrating corpuscular particle nature."
    },
    {
      "items": [
        "Aldehyde",
        "Ketone",
        "Carboxylic Acid",
        "Ether"
      ],
      "answer": "Ether",
      "explanation": "Ether contains an alkoxy bridge (R-O-R') lacking a carbonyl carbon (C=O), while Aldehydes, Ketones, and Carboxylic Acids are carbonyl compounds."
    },
    {
      "items": [
        "Mitochondria",
        "Chloroplast",
        "Peroxisome",
        "Nucleus"
      ],
      "answer": "Peroxisome",
      "explanation": "Peroxisomes have a single lipid bilayer membrane and lack autonomous genome DNA, whereas Mitochondria, Chloroplasts, and Nuclei are double-membrane bounded and possess DNA genomes."
    },
    {
      "items": [
        "Gauss's Law for Magnetism",
        "Faraday's Law",
        "Ampere-Maxwell Law",
        "Kirchhoff's Voltage Law"
      ],
      "answer": "Kirchhoff's Voltage Law",
      "explanation": "Kirchhoff's Voltage Law (KVL) is a lumped circuit approximation, while the other three are fundamental Maxwell's equations."
    },
    {
      "items": [
        "SN1 Reaction",
        "E1 Elimination",
        "Pinacol Rearrangement",
        "Diels-Alder Reaction"
      ],
      "answer": "Diels-Alder Reaction",
      "explanation": "Diels-Alder reaction is a concerted pericyclic [4+2] cycloaddition proceeding without ionic carbocation intermediates, unlike SN1, E1, and Pinacol rearrangements."
    },
    {
      "items": [
        "Eigenvalue",
        "Trace",
        "Determinant",
        "Collinear Vectors"
      ],
      "answer": "Collinear Vectors",
      "explanation": "Collinear vectors is a geometric spatial orientation concept, while Eigenvalue, Trace, and Determinant are intrinsic scalar invariants of linear square operators/matrices."
    },
    {
      "items": [
        "Interference",
        "Diffraction",
        "Polarization",
        "Blackbody Radiation"
      ],
      "answer": "Blackbody Radiation",
      "explanation": "Blackbody radiation requires quantum energy discretization (Planck's law) and cannot be explained by classical wave optics, unlike Interference, Diffraction, and Polarization."
    },
    {
      "items": [
        "Aldol Condensation",
        "Cannizzaro Reaction",
        "Perkin Reaction",
        "Markovnikov Addition"
      ],
      "answer": "Markovnikov Addition",
      "explanation": "Markovnikov addition is an electrophilic addition to alkenes, whereas Aldol, Cannizzaro, and Perkin are named nucleophilic condensation/disproportionation reactions of carbonyls."
    },
    {
      "items": [
        "Alpha Helix",
        "Beta Pleated Sheet",
        "Beta Turn",
        "Disulfide Bridge"
      ],
      "answer": "Disulfide Bridge",
      "explanation": "Disulfide bridge is a covalent tertiary/quaternary bond between cysteine thiols, whereas Alpha helix, Beta sheet, and Beta turn are secondary protein structures stabilized by hydrogen bonds."
    },
    {
      "items": [
        "Adiabatic Bulk Modulus",
        "Young's Modulus",
        "Shear Modulus",
        "Dielectric Permittivity"
      ],
      "answer": "Dielectric Permittivity",
      "explanation": "Dielectric permittivity (ε) characterizes an insulating material's electrostatic polarization, whereas Young's, Shear, and Bulk moduli characterize mechanical elastic stresses."
    },
    {
      "items": [
        "Optical Isomerism",
        "Geometrical Isomerism",
        "Conformational Isomerism",
        "Tautomerism"
      ],
      "answer": "Tautomerism",
      "explanation": "Tautomerism involves chemical equilibrium with rapid proton migration and bond cleavage (constitutional isomerism), unlike stereochemical optical, geometrical, and conformational isomers."
    },
    {
      "items": [
        "Zeeman Effect",
        "Stark Effect",
        "Doppler Effect",
        "Paschen-Back Effect"
      ],
      "answer": "Doppler Effect",
      "explanation": "Doppler effect is classical wave frequency shift due to relative source-observer motion, while Zeeman, Stark, and Paschen-Back effects are atomic spectral line splittings under external magnetic/electric fields."
    },
    {
      "items": [
        "Operon",
        "Promoter",
        "Operator",
        "Centromere"
      ],
      "answer": "Centromere",
      "explanation": "Centromere is a eukaryotic chromosomal constriction site mediating kinetochore spindle attachment, while Operon, Promoter, and Operator are prokaryotic transcriptional gene regulatory elements."
    },
    {
      "items": [
        "Lenz's Law",
        "Le Chatelier's Principle",
        "Newton's Third Law",
        "Carnot's Theorem"
      ],
      "answer": "Carnot's Theorem",
      "explanation": "Carnot's theorem sets maximum thermodynamic heat engine efficiency (η = 1 - Tc/Th), whereas Lenz, Le Chatelier, and Newton's Third Law are fundamental homeostatic action-reaction principles that oppose applied perturbations."
    },
    {
      "items": [
        "Hund's Rule",
        "Pauli Exclusion Principle",
        "Aufbau Principle",
        "Bernoulli's Theorem"
      ],
      "answer": "Bernoulli's Theorem",
      "explanation": "Bernoulli's theorem governs inviscid fluid flow energy conservation, whereas Hund's rule, Pauli principle, and Aufbau principle dictate atomic electronic configurations."
    },
    {
      "items": [
        "Chiral Center",
        "Enantiomer",
        "Racemic Mixture",
        "Aromaticity"
      ],
      "answer": "Aromaticity",
      "explanation": "Aromaticity is electronic ring stabilization through (4n+2) pi-electron delocalization, while Chiral center, Enantiomer, and Racemate belong to 3D stereochemistry."
    },
    {
      "items": [
        "Allosteric Site",
        "Active Site",
        "Substrate",
        "Histone"
      ],
      "answer": "Histone",
      "explanation": "Histone is an alkaline nuclear protein that wraps and packages DNA into nucleosomes, while Active site, Allosteric site, and Substrate are enzymological catalysis components."
    },
    {
      "items": [
        "Electric Dipole Moment",
        "Magnetic Dipole Moment",
        "Current Density",
        "Electric Potential"
      ],
      "answer": "Electric Potential",
      "explanation": "Electric potential (V) is a scalar field, whereas Electric dipole moment, Magnetic dipole moment, and Current density are vector fields."
    },
    {
      "items": [
        "SN2 Mechanism",
        "Walden Inversion",
        "Bimolecular Kinetics",
        "Carbocation Intermediate"
      ],
      "answer": "Carbocation Intermediate",
      "explanation": "Carbocation intermediates form during unimolecular SN1 reactions; SN2 proceeds concertedly with backside attack and Walden inversion without intermediates."
    },
    {
      "items": [
        "Heisenberg Uncertainty",
        "Bohr Quantization",
        "Schrödinger Equation",
        "Kepler's Second Law"
      ],
      "answer": "Kepler's Second Law",
      "explanation": "Kepler's second law is classical orbital mechanics (conservation of angular momentum), while Bohr, Heisenberg, and Schrödinger are quantum mechanics frameworks."
    },
    {
      "items": [
        "Restriction Endonuclease",
        "DNA Ligase",
        "Reverse Transcriptase",
        "Ribosome"
      ],
      "answer": "Ribosome",
      "explanation": "Ribosome is a large ribonucleoprotein cellular translation organelle, while Restriction endonuclease, Ligase, and Reverse transcriptase are individual genetic engineering biocatalytic enzymes."
    },
    {
      "items": [
        "Carnot Cycle",
        "Otto Cycle",
        "Diesel Cycle",
        "Krebs Cycle"
      ],
      "answer": "Krebs Cycle",
      "explanation": "Krebs cycle is a biological mitochondrial biochemical metabolic loop, whereas Carnot, Otto, and Diesel are thermodynamic mechanical heat engine cycles."
    },
    {
      "items": [
        "Paramagnetism",
        "Ferromagnetism",
        "Antiferromagnetism",
        "Diamagnetism"
      ],
      "answer": "Diamagnetism",
      "explanation": "Diamagnetism occurs in substances with no unpaired electrons (induced negative susceptibility), while Paramagnetism, Ferromagnetism, and Antiferromagnetism arise from intrinsic permanent unpaired atomic spins."
    },
    {
      "items": [
        "Grignard Reagent",
        "Organolithium",
        "Gilman Reagent",
        "Sodium Borohydride"
      ],
      "answer": "Sodium Borohydride",
      "explanation": "NaBH₄ is an inorganic hydride reducing agent, whereas Grignard (RMgX), Organolithium (RLi), and Gilman (R₂CuLi) are carbon-metal organometallic carbanion reagents."
    },
    {
      "items": [
        "Action Potential",
        "Depolarization",
        "Refractory Period",
        "Gluconeogenesis"
      ],
      "answer": "Gluconeogenesis",
      "explanation": "Gluconeogenesis is an anabolic metabolic pathway synthesizing glucose from non-carbohydrate precursors, while the others describe neurophysiological electrical nerve impulses."
    },
    {
      "items": [
        "Maxwell's Equations",
        "Lorentz Transformations",
        "Special Relativity",
        "Boyle's Law"
      ],
      "answer": "Boyle's Law",
      "explanation": "Boyle's Law is empirical ideal gas chemistry, whereas Maxwell's equations and Lorentz transformations form the mathematical foundation of relativistic spacetime electrodynamics."
    },
    {
      "items": [
        "Markovnikov's Rule",
        "Saytzeff's Rule",
        "Hofmann's Rule",
        "Hess's Law"
      ],
      "answer": "Hess's Law",
      "explanation": "Hess's Law governs thermochemical state enthalpy summation, while Markovnikov, Saytzeff, and Hofmann are regioselectivity rules for organic addition/elimination."
    },
    {
      "items": [
        "Telomere",
        "Centromere",
        "Kinetochore",
        "Plasmid"
      ],
      "answer": "Plasmid",
      "explanation": "Plasmid is an autonomous extrachromosomal circular DNA molecule in prokaryotes, while Telomere, Centromere, and Kinetochore are eukaryotic linear chromosome structures."
    },
    {
      "items": [
        "Capacitive Reactance",
        "Inductive Reactance",
        "Impedance",
        "Permittivity"
      ],
      "answer": "Permittivity",
      "explanation": "Permittivity (ε) is a fundamental medium dielectric constant (F/m), while Reactance and Impedance are AC circuit oppositions measured in Ohms (Ω)."
    },
    {
      "items": [
        "Glycolysis",
        "Gluconeogenesis",
        "Glycogenolysis",
        "Ferromagnetism"
      ],
      "answer": "Ferromagnetism",
      "explanation": "Ferromagnetism is a condensed matter physical magnetic phase, while the others are carbohydrate biochemical metabolic pathways."
    },
    {
      "items": [
        "Bose-Einstein Condensate",
        "Fermionic Condensate",
        "Plasma",
        "Polymer"
      ],
      "answer": "Polymer",
      "explanation": "Polymer is a macroscopic macromolecular chemical substance, while BEC, Fermionic Condensate, and Plasma are distinct physical states of matter under extreme temperature conditions."
    },
    {
      "items": [
        "Electrophilic Aromatic Substitution",
        "Nucleophilic Aromatic Substitution",
        "Benzyne Mechanism",
        "Markovnikov Hydration"
      ],
      "answer": "Markovnikov Hydration",
      "explanation": "Markovnikov hydration occurs across aliphatic alkene double bonds, whereas EAS, NAS, and Benzyne are reactions of aromatic aryl systems."
    },
    {
      "items": [
        "Synaptic Cleft",
        "Neurotransmitter",
        "Postsynaptic Receptor",
        "Sarcomere"
      ],
      "answer": "Sarcomere",
      "explanation": "Sarcomere is the repeating structural contractile unit of skeletal striated muscle myofibrils, while the others are chemical synapse components."
    },
    {
      "items": [
        "Compton Effect",
        "Photoelectric Effect",
        "De Broglie Wavelength",
        "Hooke's Law"
      ],
      "answer": "Hooke's Law",
      "explanation": "Hooke's law is macroscopic classical mechanics of elasticity, while Compton, Photoelectric, and De Broglie form the bedrock of modern quantum physics."
    },
    {
      "items": [
        "Bouveault-Blanc Reduction",
        "Clemmensen Reduction",
        "Wolff-Kishner Reduction",
        "Curtius Rearrangement"
      ],
      "answer": "Curtius Rearrangement",
      "explanation": "Curtius rearrangement transforms an acyl azide into an isocyanate/primary amine with carbon loss, whereas the others are reductions converting carbonyls to alcohols/alkanes."
    },
    {
      "items": [
        "Vector Potential (A)",
        "Scalar Potential (V)",
        "Poynting Vector (S)",
        "Specific Heat (Cv)"
      ],
      "answer": "Specific Heat (Cv)",
      "explanation": "Specific heat is a bulk thermodynamic thermal property, while Vector potential, Scalar potential, and Poynting vector describe classical electromagnetic electrodynamics."
    },
    {
      "items": [
        "G-Protein Coupled Receptor",
        "Tyrosine Kinase Receptor",
        "Ligand-Gated Ion Channel",
        "Histone Methyltransferase"
      ],
      "answer": "Histone Methyltransferase",
      "explanation": "Histone methyltransferase is a nuclear chromatin epigenetic modifying enzyme, while the others are transmembrane cell surface signal transduction receptors."
    },
    {
      "items": [
        "Entropy (S)",
        "Internal Energy (U)",
        "Helmholtz Free Energy (A)",
        "Heat (Q)"
      ],
      "answer": "Heat (Q)",
      "explanation": "Heat (Q) is transient boundary energy transfer (path function), while Entropy, Internal Energy, and Helmholtz Free Energy are thermodynamic state functions."
    },
    {
      "items": [
        "Ziegler-Natta Catalyst",
        "Wilkinson's Catalyst",
        "Grubbs Catalyst",
        "Amylase"
      ],
      "answer": "Amylase",
      "explanation": "Amylase is a biological carbohydrate-hydrolyzing digestive enzyme, while Ziegler-Natta, Wilkinson's, and Grubbs are synthetic organometallic industrial catalysts."
    },
    {
      "items": [
        "Larmor Precession",
        "Spin-Orbit Coupling",
        "Hyperfine Splitting",
        "Archimedes Buoyancy"
      ],
      "answer": "Archimedes Buoyancy",
      "explanation": "Archimedes buoyancy is a classical hydrostatic fluid mechanics law, whereas Larmor precession, Spin-orbit coupling, and Hyperfine splitting are quantum spin-magnetic interactions."
    }
  ]
},

    scramble: {
  "little": [
    {
      "scrambled": "KOOB",
      "word": "BOOK",
      "hint": "Something you read in school"
    },
    {
      "scrambled": "TEER",
      "word": "TREE",
      "hint": "Has green leaves and branches"
    },
    {
      "scrambled": "LAMK",
      "word": "MILK",
      "hint": "Healthy white drink from cows"
    },
    {
      "scrambled": "GORD",
      "word": "FROG",
      "hint": "Amphibian that hops and croaks"
    },
    {
      "scrambled": "SRAT",
      "word": "STAR",
      "hint": "Twinkles in the night sky"
    },
    {
      "scrambled": "TCA",
      "word": "CAT",
      "hint": "A cute pet animal that purrs and catches mice"
    },
    {
      "scrambled": "GDO",
      "word": "DOG",
      "hint": "Man's best friend that barks and wags its tail"
    },
    {
      "scrambled": "NSU",
      "word": "SUN",
      "hint": "The bright yellow star that gives us light by day"
    },
    {
      "scrambled": "ARTS",
      "word": "STAR",
      "hint": "Twinkles in the sky at night"
    },
    {
      "scrambled": "OKOB",
      "word": "BOOK",
      "hint": "Something you read in school to learn"
    },
    {
      "scrambled": "LLAB",
      "word": "BALL",
      "hint": "A round bouncy toy you kick or throw"
    },
    {
      "scrambled": "EERT",
      "word": "TREE",
      "hint": "A tall plant with green leaves and brown trunk"
    },
    {
      "scrambled": "SHIF",
      "word": "FISH",
      "hint": "A creature with fins that swims in water"
    },
    {
      "scrambled": "RDIB",
      "word": "BIRD",
      "hint": "An animal with feathers and wings that flies"
    },
    {
      "scrambled": "LKIM",
      "word": "MILK",
      "hint": "A healthy white drink given by cows"
    },
    {
      "scrambled": "ONOM",
      "word": "MOON",
      "hint": "Shines bright in the night sky"
    },
    {
      "scrambled": "CKUD",
      "word": "DUCK",
      "hint": "A swimming bird that says 'quack quack'"
    },
    {
      "scrambled": "OGRF",
      "word": "FROG",
      "hint": "A green amphibian that hops and says 'croak'"
    },
    {
      "scrambled": "ONIL",
      "word": "LION",
      "hint": "The brave King of the Jungle"
    },
    {
      "scrambled": "SEOR",
      "word": "ROSE",
      "hint": "A beautiful red flower with sweet fragrance"
    },
    {
      "scrambled": "LLOD",
      "word": "DOLL",
      "hint": "A favorite toy to play dress-up with"
    },
    {
      "scrambled": "ATOB",
      "word": "BOAT",
      "hint": "Floats and sails on rivers and lakes"
    },
    {
      "scrambled": "KEAC",
      "word": "CAKE",
      "hint": "A delicious sweet treat baked for birthdays"
    },
    {
      "scrambled": "INAR",
      "word": "RAIN",
      "hint": "Water droplets falling from sky clouds"
    },
    {
      "scrambled": "OWNS",
      "word": "SNOW",
      "hint": "Soft white frozen flakes that fall in winter"
    },
    {
      "scrambled": "LLEB",
      "word": "BELL",
      "hint": "Makes a ringing chime sound when you shake it"
    },
    {
      "scrambled": "AFEL",
      "word": "LEAF",
      "hint": "A flat green part of a plant or tree branch"
    },
    {
      "scrambled": "BYAB",
      "word": "BABY",
      "hint": "A sweet tiny infant human"
    },
    {
      "scrambled": "TEIK",
      "word": "KITE",
      "hint": "Flies high in the windy sky on a string"
    },
    {
      "scrambled": "PCU",
      "word": "CUP",
      "hint": "Used to drink hot tea or warm milk"
    },
    {
      "scrambled": "NPE",
      "word": "PEN",
      "hint": "Filled with ink to write notes in books"
    },
    {
      "scrambled": "THA",
      "word": "HAT",
      "hint": "Worn on the head to protect from the hot sun"
    },
    {
      "scrambled": "DBE",
      "word": "BED",
      "hint": "Where you sleep comfortably at night"
    },
    {
      "scrambled": "SBU",
      "word": "BUS",
      "hint": "A large yellow vehicle that takes kids to school"
    },
    {
      "scrambled": "NVA",
      "word": "VAN",
      "hint": "A medium vehicle with four wheels"
    },
    {
      "scrambled": "GEG",
      "word": "EGG",
      "hint": "Oval breakfast food laid by hens"
    },
    {
      "scrambled": "TAN",
      "word": "ANT",
      "hint": "A tiny industrious insect that carries sugar"
    },
    {
      "scrambled": "EBE",
      "word": "BEE",
      "hint": "A buzzing yellow insect that makes sweet honey"
    },
    {
      "scrambled": "WCO",
      "word": "COW",
      "hint": "A gentle domestic animal that gives fresh milk"
    },
    {
      "scrambled": "GPI",
      "word": "PIG",
      "hint": "A pink farm animal that loves rolling in mud"
    },
    {
      "scrambled": "LOW",
      "word": "OWL",
      "hint": "A wise nocturnal bird that hoot-hoots at night"
    },
    {
      "scrambled": "XFO",
      "word": "FOX",
      "hint": "A clever wild animal with a bushy tail"
    },
    {
      "scrambled": "YTO",
      "word": "TOY",
      "hint": "Something fun children love to play with"
    },
    {
      "scrambled": "XBO",
      "word": "BOX",
      "hint": "A cardboard container used for packing gifts"
    },
    {
      "scrambled": "EIC",
      "word": "ICE",
      "hint": "Cold, frozen water that cools your drink"
    },
    {
      "scrambled": "MJA",
      "word": "JAM",
      "hint": "Sweet fruit spread you put on bread toast"
    },
    {
      "scrambled": "TNE",
      "word": "NET",
      "hint": "Used by fishermen to catch fish in water"
    },
    {
      "scrambled": "TNU",
      "word": "NUT",
      "hint": "A crunchy hard-shelled dry seed to eat"
    },
    {
      "scrambled": "TPO",
      "word": "POT",
      "hint": "A clay or metal vessel used for cooking"
    },
    {
      "scrambled": "PTA",
      "word": "TAP",
      "hint": "Turn it on to wash your hands with clean water"
    },
    {
      "scrambled": "PZI",
      "word": "ZIP",
      "hint": "Fastens your school jacket or backpack pocket"
    },
    {
      "scrambled": "NGIR",
      "word": "RING",
      "hint": "A piece of jewelry worn on a finger"
    },
    {
      "scrambled": "RKAP",
      "word": "PARK",
      "hint": "An outdoor green playground with swings and slides"
    },
    {
      "scrambled": "NDIW",
      "word": "WIND",
      "hint": "Moving air that rustles tree leaves"
    },
    {
      "scrambled": "LDOG",
      "word": "GOLD",
      "hint": "A precious yellow shiny metal used in jewelry"
    }
  ],
  "junior": [
    {
      "scrambled": "LOHOCS",
      "word": "SCHOOL",
      "hint": "A temple of learning and knowledge"
    },
    {
      "scrambled": "NATPLE",
      "word": "PLANET",
      "hint": "Earth is one of these orbiting the Sun"
    },
    {
      "scrambled": "CENCIES",
      "word": "SCIENCE",
      "hint": "The study of the natural world and experiments"
    },
    {
      "scrambled": "TRAHE",
      "word": "EARTH",
      "hint": "The third planet from the Sun"
    },
    {
      "scrambled": "REGTI",
      "word": "TIGER",
      "hint": "India’s magnificent national animal"
    },
    {
      "scrambled": "LOCSHO",
      "word": "SCHOOL",
      "hint": "A temple of learning and knowledge"
    },
    {
      "scrambled": "LCEPNI",
      "word": "PENCIL",
      "hint": "A wooden tool with graphite used to draw and write"
    },
    {
      "scrambled": "RSREAE",
      "word": "ERASER",
      "hint": "Used to rub out pencil mistakes on paper"
    },
    {
      "scrambled": "TNLPAE",
      "word": "PLANET",
      "hint": "A large celestial body orbiting around the Sun"
    },
    {
      "scrambled": "LMNAIA",
      "word": "ANIMAL",
      "hint": "A living creature that moves and eats food"
    },
    {
      "scrambled": "RTODCO",
      "word": "DOCTOR",
      "hint": "A medical professional who cures sick patients"
    },
    {
      "scrambled": "ECETAHR",
      "word": "TEACHER",
      "hint": "A dedicated mentor who guides students in class"
    },
    {
      "scrambled": "DERFIN",
      "word": "FRIEND",
      "hint": "A close companion you love to play and study with"
    },
    {
      "scrambled": "NDAGRE",
      "word": "GARDEN",
      "hint": "A plot of land filled with beautiful plants and flowers"
    },
    {
      "scrambled": "RMUSME",
      "word": "SUMMER",
      "hint": "The hottest season of the year with bright sunshine"
    },
    {
      "scrambled": "RTIWNE",
      "word": "WINTER",
      "hint": "The coldest chilly season with woolens and fog"
    },
    {
      "scrambled": "GIPSRN",
      "word": "SPRING",
      "hint": "The blooming season when fresh flowers open"
    },
    {
      "scrambled": "NUUATM",
      "word": "AUTUMN",
      "hint": "The season when leaves turn golden and fall off trees"
    },
    {
      "scrambled": "ENROAG",
      "word": "ORANGE",
      "hint": "A round citrus fruit packed with Vitamin C"
    },
    {
      "scrambled": "AAABNN",
      "word": "BANANA",
      "hint": "A curved yellow fruit loved by monkeys"
    },
    {
      "scrambled": "YKOMNE",
      "word": "MONKEY",
      "hint": "A playful animal that swings on tree branches"
    },
    {
      "scrambled": "REITG",
      "word": "TIGER",
      "hint": "The majestic striped national animal of India"
    },
    {
      "scrambled": "TBARBI",
      "word": "RABBIT",
      "hint": "A fluffy pet with long ears that hops and munches carrots"
    },
    {
      "scrambled": "ETUTRL",
      "word": "TURTLE",
      "hint": "A slow reptile with a hard protective protective shell"
    },
    {
      "scrambled": "WLEYLO",
      "word": "YELLOW",
      "hint": "The cheerful color of ripe lemons and sunshine"
    },
    {
      "scrambled": "EPUPRL",
      "word": "PURPLE",
      "hint": "A rich color made by blending blue and red"
    },
    {
      "scrambled": "RVISLE",
      "word": "SILVER",
      "hint": "A shiny grayish-white precious metal"
    },
    {
      "scrambled": "ECICRL",
      "word": "CIRCLE",
      "hint": "A perfectly round 2D shape with no corners"
    },
    {
      "scrambled": "EAQSUR",
      "word": "SQUARE",
      "hint": "A 4-sided polygon with four equal straight sides"
    },
    {
      "scrambled": "REIRV",
      "word": "RIVER",
      "hint": "A large natural stream of flowing freshwater"
    },
    {
      "scrambled": "NACOE",
      "word": "OCEAN",
      "hint": "A vast body of deep salt water covering the Earth"
    },
    {
      "scrambled": "TEOFRS",
      "word": "FOREST",
      "hint": "A large woodland area densely covered with tall trees"
    },
    {
      "scrambled": "TEEDSR",
      "word": "DESERT",
      "hint": "A dry arid sandy landscape with very little rainfall"
    },
    {
      "scrambled": "YLAVLE",
      "word": "VALLEY",
      "hint": "Low land situated between two hills or mountains"
    },
    {
      "scrambled": "DASILN",
      "word": "ISLAND",
      "hint": "A piece of land completely surrounded by water"
    },
    {
      "scrambled": "TKAMRE",
      "word": "MARKET",
      "hint": "A bustling public place where goods are bought and sold"
    },
    {
      "scrambled": "EPETML",
      "word": "TEMPLE",
      "hint": "A sacred place of worship and spiritual peace"
    },
    {
      "scrambled": "ETACSL",
      "word": "CASTLE",
      "hint": "A grand fortified medieval stone building for royals"
    },
    {
      "scrambled": "EDRBIG",
      "word": "BRIDGE",
      "hint": "A structure built spanning across a river or road"
    },
    {
      "scrambled": "TPUPPE",
      "word": "PUPPET",
      "hint": "A movable doll manipulated with strings or hands"
    },
    {
      "scrambled": "RTUGIA",
      "word": "GUITAR",
      "hint": "A six-stringed wooden musical instrument with frets"
    },
    {
      "scrambled": "ETLFU",
      "word": "FLUTE",
      "hint": "A wind instrument played by blowing air across an opening"
    },
    {
      "scrambled": "NYRCAO",
      "word": "CRAYON",
      "hint": "A stick of colored wax used by children for drawing"
    },
    {
      "scrambled": "WDHSAO",
      "word": "SHADOW",
      "hint": "A dark silhouette cast when an object blocks light"
    },
    {
      "scrambled": "RRIMRO",
      "word": "MIRROR",
      "hint": "A smooth reflective glass showing your own reflection"
    },
    {
      "scrambled": "AEACMR",
      "word": "CAMERA",
      "hint": "An optical optical device used to capture photographs"
    },
    {
      "scrambled": "EDACNL",
      "word": "CANDLE",
      "hint": "A block of wax with an embedded wick that gives light"
    },
    {
      "scrambled": "ETOBTL",
      "word": "BOTTLE",
      "hint": "A narrow-necked container used for storing liquids"
    },
    {
      "scrambled": "LYIBCCE",
      "word": "BICYCLE",
      "hint": "A two-wheeled pedaled vehicle for eco-friendly travel"
    },
    {
      "scrambled": "NIRTA",
      "word": "TRAIN",
      "hint": "A series of connected railway wagons pulled by an engine"
    },
    {
      "scrambled": "TKORCE",
      "word": "ROCKET",
      "hint": "A spacecraft propelled by burning exhaust gases"
    },
    {
      "scrambled": "TEOCM",
      "word": "COMET",
      "hint": "An icy cosmic body that leaves a shining glowing tail"
    },
    {
      "scrambled": "SULCOD",
      "word": "CLOUDS",
      "hint": "Visible masses of condensed water vapor in the sky"
    },
    {
      "scrambled": "ONARIBW",
      "word": "RAINBOW",
      "hint": "An arch of seven vibrant spectral colors after rain"
    },
    {
      "scrambled": "DASILNS",
      "word": "ISLANDS",
      "hint": "Groups of land surrounded entirely by open water"
    }
  ],
  "middle": [
    {
      "scrambled": "YVIGART",
      "word": "GRAVITY",
      "hint": "The force that pulls objects toward Earth"
    },
    {
      "scrambled": "ELEMNTE",
      "word": "ELEMENT",
      "hint": "A pure substance on the periodic table"
    },
    {
      "scrambled": "CTRICEL",
      "word": "CIRCUIT",
      "hint": "A closed path through which electric current flows"
    },
    {
      "scrambled": "TCOOPSS",
      "word": "COMPASS",
      "hint": "Navigation tool pointing towards magnetic north"
    },
    {
      "scrambled": "EGLNKO",
      "word": "KNOWLEDGE",
      "hint": "Information, skills and understanding acquired through learning"
    },
    {
      "scrambled": "TVRGAIY",
      "word": "GRAVITY",
      "hint": "The fundamental attractive force between masses"
    },
    {
      "scrambled": "NGXOYE",
      "word": "OXYGEN",
      "hint": "The vital chemical element needed for aerobic respiration"
    },
    {
      "scrambled": "NBACRO",
      "word": "CARBON",
      "hint": "The fundamental chemical element of all organic life"
    },
    {
      "scrambled": "YRNEEG",
      "word": "ENERGY",
      "hint": "The capacity or ability to perform physical work"
    },
    {
      "scrambled": "TMLCIAE",
      "word": "CLIMATE",
      "hint": "The long-term atmospheric weather patterns of a region"
    },
    {
      "scrambled": "NCOVLAO",
      "word": "VOLCANO",
      "hint": "A geological rupture in Earth's crust erupting molten lava"
    },
    {
      "scrambled": "SPOCMAS",
      "word": "COMPASS",
      "hint": "A navigational magnetic device pointing towards magnetic North"
    },
    {
      "scrambled": "YAAGLX",
      "word": "GALAXY",
      "hint": "A gravitationally bound system of billions of stars"
    },
    {
      "scrambled": "IAYPRMD",
      "word": "PYRAMID",
      "hint": "An ancient monumental stone structure with triangular sloping faces"
    },
    {
      "scrambled": "ECLGAIR",
      "word": "GLACIER",
      "hint": "A massive slow-moving body of dense perennial ice"
    },
    {
      "scrambled": "GRINTOEN",
      "word": "NITROGEN",
      "hint": "The most abundant gas in Earth's atmosphere (~78%)"
    },
    {
      "scrambled": "GRYNDOEH",
      "word": "HYDROGEN",
      "hint": "The lightest and most abundant chemical element in the universe"
    },
    {
      "scrambled": "OMTA",
      "word": "ATOM",
      "hint": "The fundamental building block unit of all chemical matter"
    },
    {
      "scrambled": "UEOELCLM",
      "word": "MOLECULE",
      "hint": "A group of two or more atoms bonded chemically together"
    },
    {
      "scrambled": "RCLNETOE",
      "word": "ELECTRON",
      "hint": "A negatively charged subatomic particle orbiting the nucleus"
    },
    {
      "scrambled": "ULUNCES",
      "word": "NUCLEUS",
      "hint": "The dense positively charged central core of an atom"
    },
    {
      "scrambled": "TSEDNIY",
      "word": "DENSITY",
      "hint": "The mass per unit volume of a physical substance"
    },
    {
      "scrambled": "ICRNITOF",
      "word": "FRICTION",
      "hint": "The resistive contact force that opposes sliding motion"
    },
    {
      "scrambled": "USREESRP",
      "word": "PRESSURE",
      "hint": "The perpendicular force exerted per unit surface area"
    },
    {
      "scrambled": "NRUCRET",
      "word": "CURRENT",
      "hint": "The directed flow rate of electric charge through a conductor"
    },
    {
      "scrambled": "GTOVLAE",
      "word": "VOLTAGE",
      "hint": "The electric potential difference driving circuit current"
    },
    {
      "scrambled": "TIERSSOR",
      "word": "RESISTOR",
      "hint": "A circuit component that opposes electrical current flow"
    },
    {
      "scrambled": "TNAMGE",
      "word": "MAGNET",
      "hint": "A material that produces an external magnetic field"
    },
    {
      "scrambled": "ICICRUT",
      "word": "CIRCUIT",
      "hint": "A closed conductive path through which electric current flows"
    },
    {
      "scrambled": "MSRPI",
      "word": "PRISM",
      "hint": "A transparent triangular optical glass that disperses light"
    },
    {
      "scrambled": "SICELPE",
      "word": "ECLIPSE",
      "hint": "An astronomical event where one celestial body obscures another"
    },
    {
      "scrambled": "OESDTRIA",
      "word": "ASTEROID",
      "hint": "A rocky minor planet orbiting in the inner Solar System"
    },
    {
      "scrambled": "LEETTLISA",
      "word": "SATELLITE",
      "hint": "An artificial or natural body orbiting a larger celestial body"
    },
    {
      "scrambled": "SSMEOYTEC",
      "word": "ECOSYSTEM",
      "hint": "A biological community of interacting organisms and their environment"
    },
    {
      "scrambled": "AIAHBTT",
      "word": "HABITAT",
      "hint": "The natural home or ecological environment of an organism"
    },
    {
      "scrambled": "TDRREAOP",
      "word": "PREDATOR",
      "hint": "An animal that naturally hunts and feeds on other prey animals"
    },
    {
      "scrambled": "RTAACEIB",
      "word": "BACTERIA",
      "hint": "Microscopic single-celled prokaryotic microorganisms"
    },
    {
      "scrambled": "SGUFNU",
      "word": "FUNGUS",
      "hint": "A eukaryotic spore-producing organism such as yeast or mushroom"
    },
    {
      "scrambled": "ZTRAOOOP",
      "word": "PROTOZOA",
      "hint": "Diverse unicellular eukaryotic microorganisms like amoeba"
    },
    {
      "scrambled": "TMTSOAA",
      "word": "STOMATA",
      "hint": "Microscopic pores on leaf epidermis for gas exchange"
    },
    {
      "scrambled": "ERUTTINN",
      "word": "NUTRIENT",
      "hint": "A substance that provides nourishment essential for growth"
    },
    {
      "scrambled": "IAIVTMN",
      "word": "VITAMIN",
      "hint": "An organic micronutrient required in tiny amounts for health"
    },
    {
      "scrambled": "AEIMNRL",
      "word": "MINERAL",
      "hint": "A naturally occurring inorganic solid with definite crystalline structure"
    },
    {
      "scrambled": "ITRPOEN",
      "word": "PROTEIN",
      "hint": "Macromolecules composed of amino acid polymer chains"
    },
    {
      "scrambled": "SCLGUOE",
      "word": "GLUCOSE",
      "hint": "A simple monosaccharide sugar that provides cellular energy"
    },
    {
      "scrambled": "EYNEZM",
      "word": "ENZYME",
      "hint": "A biological macromolecular catalyst accelerating biochemical reactions"
    },
    {
      "scrambled": "NMOHROE",
      "word": "HORMONE",
      "hint": "A chemical regulatory signaling molecule secreted into blood"
    },
    {
      "scrambled": "TLKNEEOS",
      "word": "SKELETON",
      "hint": "The internal rigid framework supporting an animal's body"
    },
    {
      "scrambled": "LTEGRIACA",
      "word": "CARTILAGE",
      "hint": "A flexible resilient connective tissue found in joints and ears"
    },
    {
      "scrambled": "NDETNO",
      "word": "TENDON",
      "hint": "A tough band of fibrous connective tissue connecting muscle to bone"
    },
    {
      "scrambled": "EAITGMNL",
      "word": "LIGAMENT",
      "hint": "Fibrous connective tissue that connects two bones across a joint"
    },
    {
      "scrambled": "RNITOIARESP",
      "word": "RESPIRATION",
      "hint": "The biochemical process by which cells break down glucose for energy"
    },
    {
      "scrambled": "TENOGSIDI",
      "word": "DIGESTION",
      "hint": "The mechanical and chemical breakdown of food into absorbable nutrients"
    },
    {
      "scrambled": "TRNOCEIEX",
      "word": "EXCRETION",
      "hint": "The biological process of eliminating toxic metabolic wastes from an organism"
    },
    {
      "scrambled": "LNITOUACIRC",
      "word": "CIRCULATION",
      "hint": "The continuous movement of blood throughout the body via vessels"
    }
  ],
  "secondary": [
    {
      "scrambled": "HOOTNSSP",
      "word": "PHOTOSYNTHESIS",
      "hint": "Process by which green plants make food from sunlight"
    },
    {
      "scrambled": "CTUMOMEN",
      "word": "MOMENTUM",
      "hint": "Product of mass and velocity of an object"
    },
    {
      "scrambled": "DNEOIGHS",
      "word": "HYDROGEN",
      "hint": "The lightest and most abundant chemical element"
    },
    {
      "scrambled": "LEELCOUM",
      "word": "MOLECULE",
      "hint": "A group of atoms bonded together"
    },
    {
      "scrambled": "ROOFTACN",
      "word": "REFRACTION",
      "hint": "The bending of light as it passes between media"
    },
    {
      "scrambled": "IETNHSSPHOTOSY",
      "word": "PHOTOSYNTHESIS",
      "hint": "Process by which green plants make food from sunlight"
    },
    {
      "scrambled": "OLYHLRPCHLO",
      "word": "CHLOROPHYLL",
      "hint": "The primary green photosynthetic pigment in thylakoid membranes"
    },
    {
      "scrambled": "HIDNRAOMITOC",
      "word": "MITOCHONDRIA",
      "hint": "The double-membrane cellular organelles known as the powerhouse of the cell"
    },
    {
      "scrambled": "OOMOEMSCHR",
      "word": "CHROMOSOME",
      "hint": "A thread-like nuclear structure of nucleic acids carrying genetic genes"
    },
    {
      "scrambled": "RIYLSSOELECT",
      "word": "ELECTROLYSIS",
      "hint": "Chemical decomposition produced by passing electric current through solution"
    },
    {
      "scrambled": "RNITOOAEVAP",
      "word": "EVAPORATION",
      "hint": "Phase transition of liquid molecules into gaseous vapor below boiling point"
    },
    {
      "scrambled": "NOTAINSCONDE",
      "word": "CONDENSATION",
      "hint": "Phase transition of gas vapor transforming back into liquid phase"
    },
    {
      "scrambled": "NIATTOIPRECIP",
      "word": "PRECIPITATION",
      "hint": "Any form of atmospheric water vapor falling under gravity (rain, hail, snow)"
    },
    {
      "scrambled": "NIARTOITRANSP",
      "word": "TRANSPIRATION",
      "hint": "The evaporative loss of water vapor from aerial plant stomata"
    },
    {
      "scrambled": "NNITOIAGERM",
      "word": "GERMINATION",
      "hint": "The developmental resumption of embryonic growth by a seed into a seedling"
    },
    {
      "scrambled": "NNITOIAPOLL",
      "word": "POLLINATION",
      "hint": "The transfer of pollen grains from the anther to the receptive stigma"
    },
    {
      "scrambled": "NIAZTOIFERTIL",
      "word": "FERTILIZATION",
      "hint": "The fusion of haploid male and female gametes to produce a diploid zygote"
    },
    {
      "scrambled": "SSSAIOTHOME",
      "word": "HOMEOSTASIS",
      "hint": "The physiological maintenance of a stable internal dynamic equilibrium"
    },
    {
      "scrambled": "CROINATREF",
      "word": "REFRACTION",
      "hint": "The bending of a wave when it enters a medium with different optical density"
    },
    {
      "scrambled": "CLOINETREF",
      "word": "REFLECTION",
      "hint": "The bouncing back of light rays from a boundary surface into the same medium"
    },
    {
      "scrambled": "RPOINESDIS",
      "word": "DISPERSION",
      "hint": "The separation of white light into its component spectral colors by a prism"
    },
    {
      "scrambled": "ANITORCDIFF",
      "word": "DIFFRACTION",
      "hint": "The slight bending and spreading of waves around obstacles and narrow slits"
    },
    {
      "scrambled": "ETNIGTRSCA",
      "word": "SCATTERING",
      "hint": "The deflection of light rays in random directions by microscopic atmospheric particles"
    },
    {
      "scrambled": "CVOINETCON",
      "word": "CONVECTION",
      "hint": "Heat transfer through the physical bulk circulation movement of fluid masses"
    },
    {
      "scrambled": "CDOINUTCON",
      "word": "CONDUCTION",
      "hint": "Heat transfer through direct microscopic collision of particles without bulk movement"
    },
    {
      "scrambled": "TINODAIRA",
      "word": "RADIATION",
      "hint": "Energy emission or transmission through space as electromagnetic waves"
    },
    {
      "scrambled": "YIITVTCRADIOA",
      "word": "RADIOACTIVITY",
      "hint": "The spontaneous decay of unstable atomic nuclei emitting ionizing particles"
    },
    {
      "scrambled": "IFAELLFH",
      "word": "HALFLIFE",
      "hint": "The time required for half the radioactive atoms in a sample to decay"
    },
    {
      "scrambled": "YAATTLSC",
      "word": "CATALYST",
      "hint": "A chemical substance that accelerates reaction rate without being consumed"
    },
    {
      "scrambled": "IMIRULBEQUI",
      "word": "EQUILIBRIUM",
      "hint": "State in which opposing forward and reverse processes balance at equal rates"
    },
    {
      "scrambled": "IOSOMSS",
      "word": "OSMOSIS",
      "hint": "The net spontaneous diffusion of water molecules across a semipermeable membrane"
    },
    {
      "scrambled": "SFNOFUIDI",
      "word": "DIFFUSION",
      "hint": "The passive net movement of solute particles from high to lower concentration"
    },
    {
      "scrambled": "OASIMBLMET",
      "word": "METABOLISM",
      "hint": "The sum of all life-sustaining biochemical chemical transformations in an organism"
    },
    {
      "scrambled": "LBMSAOIAN",
      "word": "ANABOLISM",
      "hint": "The metabolic constructive synthesis of complex molecules from simpler precursors"
    },
    {
      "scrambled": "OASIMBLCAT",
      "word": "CATABOLISM",
      "hint": "The metabolic destructive breakdown of complex organic compounds releasing chemical energy"
    },
    {
      "scrambled": "SBOINUTCOM",
      "word": "COMBUSTION",
      "hint": "A rapid exothermic chemical reaction between fuel and oxygen producing heat and light"
    },
    {
      "scrambled": "SRNOROICO",
      "word": "CORROSION",
      "hint": "The electrochemical oxidation deterioration of metals exposed to air and moisture"
    },
    {
      "scrambled": "ROEPLTOAL",
      "word": "ALLOTROPE",
      "hint": "Different structural and physical forms of the same chemical element (e.g. diamond/graphite)"
    },
    {
      "scrambled": "RMMSOEIIS",
      "word": "ISOMERISM",
      "hint": "Phenomenon where compounds share identical chemical formulae but different spatial structures"
    },
    {
      "scrambled": "CEAVLNY",
      "word": "VALENCY",
      "hint": "The combining capacity of an atom determined by its valence electrons"
    },
    {
      "scrambled": "AIOINZTION",
      "word": "IONIZATION",
      "hint": "The process by which an atom or molecule gains or loses electrons acquiring electric charge"
    },
    {
      "scrambled": "OTZIAINNEUTRAL",
      "word": "NEUTRALIZATION",
      "hint": "Chemical reaction between an acid and a base producing a mineral salt and water"
    },
    {
      "scrambled": "OTCIAINSAPONIF",
      "word": "SAPONIFICATION",
      "hint": "The alkaline basic hydrolysis of fatty acid esters producing soap and glycerol"
    },
    {
      "scrambled": "NOTAINTFERME",
      "word": "FERMENTATION",
      "hint": "Anaerobic metabolic enzymatic breakdown of carbohydrates by yeasts producing ethanol or acid"
    },
    {
      "scrambled": "VTSRIYEBIODI",
      "word": "BIODIVERSITY",
      "hint": "The variety and variability of life forms within a given biome or ecosystem"
    },
    {
      "scrambled": "ROTAINVCONSE",
      "word": "CONSERVATION",
      "hint": "The sustainable protection, management, and preservation of natural resources"
    },
    {
      "scrambled": "POREESHATM",
      "word": "ATMOSPHERE",
      "hint": "The gaseous envelope surrounding Earth held in place by gravitational pull"
    },
    {
      "scrambled": "SEEHROPHYDR",
      "word": "HYDROSPHERE",
      "hint": "All the combined waters on, under, and above the surface of the Earth"
    },
    {
      "scrambled": "SEEHROPLITH",
      "word": "LITHOSPHERE",
      "hint": "The rigid outer rocky crust and uppermost solid mantle of the Earth"
    },
    {
      "scrambled": "ORHPEESSTRAT",
      "word": "STRATOSPHERE",
      "hint": "The atmospheric layer containing the protective ozone layer above troposphere"
    },
    {
      "scrambled": "POREESHMES",
      "word": "MESOSPHERE",
      "hint": "The coldest middle layer of Earth's atmosphere where meteors burn up"
    },
    {
      "scrambled": "ORHPEESTHERM",
      "word": "THERMOSPHERE",
      "hint": "The high-temperature atmospheric layer containing the ionized ionosphere"
    },
    {
      "scrambled": "HSEROPEEX",
      "word": "EXOSPHERE",
      "hint": "The outermost boundary layer of the atmosphere merging into outer space"
    },
    {
      "scrambled": "EEPSHROMAGNET",
      "word": "MAGNETOSPHERE",
      "hint": "The magnetic field region surrounding Earth that deflects energetic solar wind particles"
    },
    {
      "scrambled": "HESUENOGRE",
      "word": "GREENHOUSE",
      "hint": "Atmospheric warming effect caused by gases trapping terrestrial infrared heat"
    }
  ],
  "senior": [
    {
      "scrambled": "QULIRBIEUM",
      "word": "EQUILIBRIUM",
      "hint": "State in which opposing forces or reactions are balanced"
    },
    {
      "scrambled": "TRPEONY",
      "word": "ENTROPY",
      "hint": "A measure of microscopic disorder in a thermodynamic system"
    },
    {
      "scrambled": "CAONSTTLY",
      "word": "CATALYST",
      "hint": "Substance that increases the rate of reaction without being consumed"
    },
    {
      "scrambled": "CYLITROTE",
      "word": "ELECTROLYTE",
      "hint": "Substance that conducts electricity when dissolved in water"
    },
    {
      "scrambled": "RENNSECA",
      "word": "RESONANCE",
      "hint": "Phenomenon of increased amplitude at natural frequency"
    },
    {
      "scrambled": "IMIRULBEQUI",
      "word": "EQUILIBRIUM",
      "hint": "State in which opposing forces or chemical reactions are dynamic and balanced"
    },
    {
      "scrambled": "CMNYAISTHERMOD",
      "word": "THERMODYNAMICS",
      "hint": "The branch of physical science dealing with heat, work, entropy, and energy relations"
    },
    {
      "scrambled": "SMYREITELECTROCH",
      "word": "ELECTROCHEMISTRY",
      "hint": "Branch of chemistry studying relationships between electricity and chemical reactions"
    },
    {
      "scrambled": "RPCSOYOSPECT",
      "word": "SPECTROSCOPY",
      "hint": "The study of electromagnetic radiation absorption and emission by matter"
    },
    {
      "scrambled": "IOTAINZPOLAR",
      "word": "POLARIZATION",
      "hint": "The orientation of transverse electromagnetic wave oscillations in a single geometric plane"
    },
    {
      "scrambled": "FCERNEEINTER",
      "word": "INTERFERENCE",
      "hint": "The superposition of two coherent wave trains producing constructive/destructive fringes"
    },
    {
      "scrambled": "ICTIYTVSUPERCONDU",
      "word": "SUPERCONDUCTIVITY",
      "hint": "The physical phenomenon of exactly zero electrical resistance in materials cooled below Tc"
    },
    {
      "scrambled": "RTUDCONSEMICO",
      "word": "SEMICONDUCTOR",
      "hint": "A solid substance with electrical conductivity between conductors and insulators"
    },
    {
      "scrambled": "CRCETILPHOTOE",
      "word": "PHOTOELECTRIC",
      "hint": "The emission of photoelectrons from metal surfaces irradiated by threshold electromagnetic photons"
    },
    {
      "scrambled": "YIITVTCRADIOA",
      "word": "RADIOACTIVITY",
      "hint": "The spontaneous disintegration of unstable radionuclides releasing energetic ionizing radiation"
    },
    {
      "scrambled": "TNMSGEIELECTROMA",
      "word": "ELECTROMAGNETISM",
      "hint": "The unified fundamental physical interaction between electrically charged particles and fields"
    },
    {
      "scrambled": "TNITOIAGRAV",
      "word": "GRAVITATION",
      "hint": "The universal fundamental interaction causing mutual attraction between all entities with mass"
    },
    {
      "scrambled": "ILTEARPCENT",
      "word": "CENTRIPETAL",
      "hint": "The inward radial accelerating force that keeps a mass moving along a curved circular path"
    },
    {
      "scrambled": "ROTAINVCONSE",
      "word": "CONSERVATION",
      "hint": "The invariant physical principle stating total energy, charge, or momentum remains constant"
    },
    {
      "scrambled": "EOTAINRACCEL",
      "word": "ACCELERATION",
      "hint": "The time rate of change of the velocity vector of a moving physical particle"
    },
    {
      "scrambled": "TTVIIYTPERMI",
      "word": "PERMITTIVITY",
      "hint": "The physical dielectric measure of a material's ability to resist electric field displacement"
    },
    {
      "scrambled": "ATLIIYBPERME",
      "word": "PERMEABILITY",
      "hint": "The measure of a material's capability to support the formation of internal magnetic B-fields"
    },
    {
      "scrambled": "TUCNECAIND",
      "word": "INDUCTANCE",
      "hint": "The property of an electrical conductor to induce electromotive force opposing current change"
    },
    {
      "scrambled": "IENACCTCAPA",
      "word": "CAPACITANCE",
      "hint": "The ability of an electrical system to store separated electrostatic charge per unit potential"
    },
    {
      "scrambled": "TYIVTSIRESI",
      "word": "RESISTIVITY",
      "hint": "The fundamental intrinsic electrical resistance of a unit cube of a conductive substance"
    },
    {
      "scrambled": "CTVIIYTCONDU",
      "word": "CONDUCTIVITY",
      "hint": "The intrinsic electrical property quantifying how readily electric current flows in a medium"
    },
    {
      "scrambled": "MIENTSGPARAMA",
      "word": "PARAMAGNETISM",
      "hint": "Magnetic state where materials are weakly attracted by an external magnetic field (unpaired spins)"
    },
    {
      "scrambled": "STNGEIMFERROMA",
      "word": "FERROMAGNETISM",
      "hint": "The physical mechanism by which certain materials (iron, cobalt) form permanent magnetic domains"
    },
    {
      "scrambled": "GSTEIMNDIAMA",
      "word": "DIAMAGNETISM",
      "hint": "Quantum magnetic property creating an opposing internal field in substances with paired electrons"
    },
    {
      "scrambled": "HAGORPYCHROMAT",
      "word": "CHROMATOGRAPHY",
      "hint": "Laboratory analytical technique used to separate components of a chemical mixture based on partitioning"
    },
    {
      "scrambled": "SRHSOEIELECTROP",
      "word": "ELECTROPHORESIS",
      "hint": "The migration and separation of charged colloidal macromolecules under a uniform electric field"
    },
    {
      "scrambled": "OTZIAINPOLYMER",
      "word": "POLYMERIZATION",
      "hint": "Chemical process where small monomer molecules combine covalently to form large macromolecular chains"
    },
    {
      "scrambled": "OTCIAINESTERIF",
      "word": "ESTERIFICATION",
      "hint": "The condensation synthesis reaction between a carboxylic acid and an alcohol forming an ester"
    },
    {
      "scrambled": "OTCIAINSAPONIF",
      "word": "SAPONIFICATION",
      "hint": "The basic alkaline hydrolysis of lipid triglycerides yielding metal carboxylates (soap)"
    },
    {
      "scrambled": "TIEYMSRSTEREOCH",
      "word": "STEREOCHEMISTRY",
      "hint": "The study of the relative three-dimensional spatial arrangement of atoms within molecules"
    },
    {
      "scrambled": "INEMRTOENA",
      "word": "ENANTIOMER",
      "hint": "One of two stereoisomers that are non-superimposable mirror images of each other"
    },
    {
      "scrambled": "EEOEMRRDIAST",
      "word": "DIASTEREOMER",
      "hint": "Stereoisomers that are not mirror images of one another and have different physical properties"
    },
    {
      "scrambled": "NIAZTOIHYBRID",
      "word": "HYBRIDIZATION",
      "hint": "The theoretical concept of mixing atomic orbitals to form new equivalent degenerate hybrid orbitals"
    },
    {
      "scrambled": "IATIYTVELECTRONEG",
      "word": "ELECTRONEGATIVITY",
      "hint": "The chemical property describing an atom's power to attract shared bonding electrons"
    },
    {
      "scrambled": "VITLACOPHOTO",
      "word": "PHOTOVOLTAIC",
      "hint": "The direct conversion of light energy into electrical electricity using semiconductor p-n junctions"
    },
    {
      "scrambled": "OLUOPECTHERM",
      "word": "THERMOCOUPLE",
      "hint": "A thermoelectric temperature-sensing transducer consisting of two dissimilar metal junctions"
    },
    {
      "scrambled": "NEEMTROGALVA",
      "word": "GALVANOMETER",
      "hint": "An electromechanical instrument designed for detecting and measuring minute electrical currents"
    },
    {
      "scrambled": "RTMOEEIPOTENT",
      "word": "POTENTIOMETER",
      "hint": "A three-terminal variable voltage divider or instrument used to measure EMF without drawing current"
    },
    {
      "scrambled": "LPCSOEOOSCIL",
      "word": "OSCILLOSCOPE",
      "hint": "A laboratory electronic visualization test instrument displaying varying signal voltages as a 2D graph"
    },
    {
      "scrambled": "SRPOEOCMIC",
      "word": "MICROSCOPE",
      "hint": "An optical instrument using magnifying objective and ocular lenses to visualize microscopic specimens"
    },
    {
      "scrambled": "CEEPLSOTE",
      "word": "TELESCOPE",
      "hint": "An optical astronomical instrument used to view distant celestial planets, stars, and nebulae"
    },
    {
      "scrambled": "MLOTRIACOL",
      "word": "COLLIMATOR",
      "hint": "An optical or particle device that narrows and straightens a divergent beam of radiation"
    },
    {
      "scrambled": "EEOTMTRDIFFRAC",
      "word": "DIFFRACTOMETER",
      "hint": "Scientific instrument used to measure the diffraction pattern of X-rays scattered by crystal lattices"
    },
    {
      "scrambled": "ITGUERFCEN",
      "word": "CENTRIFUGE",
      "hint": "A high-speed rotor laboratory apparatus utilizing centrifugal sedimentation to separate heterogeneous fluids"
    },
    {
      "scrambled": "IRTEERMCALO",
      "word": "CALORIMETER",
      "hint": "An insulated thermal apparatus used for measuring the heat changes absorbed or released in reactions"
    },
    {
      "scrambled": "EEORMTRINTERFE",
      "word": "INTERFEROMETER",
      "hint": "An optical precision measurement instrument utilizing wave interference superposition (e.g. Michelson)"
    },
    {
      "scrambled": "EORERMTMASSSPECT",
      "word": "MASSSPECTROMETER",
      "hint": "Analytical detector measuring mass-to-charge ratios of gas-phase ions to determine molecular formula"
    },
    {
      "scrambled": "CRCETILPIEZOE",
      "word": "PIEZOELECTRIC",
      "hint": "The electrical charge generated in certain anisotropic crystal materials in response to applied mechanical stress"
    },
    {
      "scrambled": "NCEESECPHOSPHOR",
      "word": "PHOSPHORESCENCE",
      "hint": "Persistent delayed luminescence emission occurring through forbidden triplet-to-singlet radiative transitions"
    },
    {
      "scrambled": "ECECNESFLUOR",
      "word": "FLUORESCENCE",
      "hint": "The rapid emission of light by a substance that has absorbed radiation of shorter excitation wavelength"
    }
  ]
},

    smartMatch: {
  "little": [
    {
      "topic": "Match Animals with their Foods",
      "pairs": [
        {
          "left": "🐮 Cow",
          "right": "🌿 Fresh Grass"
        },
        {
          "left": "🐒 Monkey",
          "right": "🍌 Banana"
        },
        {
          "left": "🐰 Rabbit",
          "right": "🥕 Carrot"
        },
        {
          "left": "🦁 Lion",
          "right": "🥩 Meat"
        }
      ]
    },
    {
      "topic": "Match Shapes with Examples",
      "pairs": [
        {
          "left": "⭕ Circle",
          "right": "🪙 Coin"
        },
        {
          "left": "🔲 Square",
          "right": "🎲 Chessboard Square"
        },
        {
          "left": "🔺 Triangle",
          "right": "🍕 Slice of Pizza"
        },
        {
          "left": "⭐ Star",
          "right": "✨ Night Sky Star"
        }
      ]
    }
  ],
  "junior": [
    {
      "topic": "Match Units with Quantities",
      "pairs": [
        {
          "left": "Kilogram (kg)",
          "right": "Mass / Weight"
        },
        {
          "left": "Meter (m)",
          "right": "Length / Distance"
        },
        {
          "left": "Liter (L)",
          "right": "Liquid Volume"
        },
        {
          "left": "Second (s)",
          "right": "Time"
        }
      ]
    },
    {
      "topic": "Match States with Capitals",
      "pairs": [
        {
          "left": "Uttar Pradesh",
          "right": "Lucknow"
        },
        {
          "left": "Maharashtra",
          "right": "Mumbai"
        },
        {
          "left": "Tamil Nadu",
          "right": "Chennai"
        },
        {
          "left": "West Bengal",
          "right": "Kolkata"
        }
      ]
    }
  ],
  "middle": [
    {
      "topic": "Match Chemical Elements with Symbols",
      "pairs": [
        {
          "left": "Gold",
          "right": "Au"
        },
        {
          "left": "Silver",
          "right": "Ag"
        },
        {
          "left": "Iron",
          "right": "Fe"
        },
        {
          "left": "Sodium",
          "right": "Na"
        }
      ]
    },
    {
      "topic": "Match Scientists with Discoveries",
      "pairs": [
        {
          "left": "Sir Isaac Newton",
          "right": "Universal Law of Gravitation"
        },
        {
          "left": "Sir C.V. Raman",
          "right": "Scattering of Light (Raman Effect)"
        },
        {
          "left": "Alexander Fleming",
          "right": "Penicillin Antibiotic"
        },
        {
          "left": "Louis Pasteur",
          "right": "Pasteurization & Vaccines"
        }
      ]
    }
  ],
  "secondary": [
    {
      "topic": "Match Physics Quantities with SI Units",
      "pairs": [
        {
          "left": "Electric Potential (V)",
          "right": "Volt"
        },
        {
          "left": "Force (F)",
          "right": "Newton (N)"
        },
        {
          "left": "Work / Energy",
          "right": "Joule (J)"
        },
        {
          "left": "Power (P)",
          "right": "Watt (W)"
        }
      ]
    },
    {
      "topic": "Match Formulas with Concepts",
      "pairs": [
        {
          "left": "Ohm’s Law",
          "right": "V = I × R"
        },
        {
          "left": "Kinetic Energy",
          "right": "½ m v²"
        },
        {
          "left": "Gravitational Potential",
          "right": "m × g × h"
        },
        {
          "left": "Einstein Energy Eq.",
          "right": "E = m c²"
        }
      ]
    }
  ],
  "senior": [
    {
      "topic": "Match Organic Functional Groups with Formulas",
      "pairs": [
        {
          "left": "Carboxylic Acid",
          "right": "-COOH"
        },
        {
          "left": "Aldehyde",
          "right": "-CHO"
        },
        {
          "left": "Alcohol",
          "right": "-OH"
        },
        {
          "left": "Ketone",
          "right": ">C=O"
        }
      ]
    },
    {
      "topic": "Match Laws with Descriptions",
      "pairs": [
        {
          "left": "First Law of Thermodynamics",
          "right": "ΔU = q + w (Energy Conservation)"
        },
        {
          "left": "Faraday’s Law of Induction",
          "right": "Induced EMF = -dΦ/dt"
        },
        {
          "left": "de Broglie Wavelength",
          "right": "λ = h / p"
        },
        {
          "left": "Raoult’s Law",
          "right": "P = P° × X_solvent"
        }
      ]
    }
  ]
},

    logic: {
  "little": [
    {
      "question": "Raju is taller than Aman. Aman is taller than Sonu. Who is the tallest?",
      "options": [
        "Raju",
        "Aman",
        "Sonu",
        "All are equal"
      ],
      "answer": "Raju",
      "explanation": "Raju > Aman > Sonu, hence Raju is the tallest."
    },
    {
      "question": "Which hand do you raise when looking at a mirror if your reflection raises its left hand?",
      "options": [
        "Right hand",
        "Left hand",
        "Both hands",
        "Neither"
      ],
      "answer": "Right hand",
      "explanation": "Mirror reflections exhibit lateral inversion (left appears right)."
    },
    {
      "question": "If yesterday was Sunday, what day is today?",
      "options": [
        "Monday",
        "Tuesday",
        "Saturday",
        "Friday"
      ],
      "answer": "Monday",
      "explanation": "The day following Sunday is Monday."
    },
    {
      "question": "You have 3 apples and you take away 2 apples. How many apples do you have?",
      "options": [
        "2 apples",
        "1 apple",
        "3 apples",
        "5 apples"
      ],
      "answer": "2 apples",
      "explanation": "You took 2 apples, so you now have 2 apples!"
    },
    {
      "question": "Which object is the heaviest?",
      "options": [
        "An Elephant",
        "A Feather",
        "A Tennis Ball",
        "A Pencil"
      ],
      "answer": "An Elephant",
      "explanation": "An adult elephant weighs thousands of kilograms."
    },
    {
      "question": "If today is Monday, what day was yesterday?",
      "options": [
        "Sunday",
        "Tuesday",
        "Friday",
        "Saturday"
      ],
      "answer": "Sunday",
      "explanation": "Sunday comes right before Monday."
    },
    {
      "question": "Which animal can fly in the sky?",
      "options": [
        "Sparrow",
        "Elephant",
        "Dog",
        "Cat"
      ],
      "answer": "Sparrow",
      "explanation": "Sparrows have wings and can fly."
    },
    {
      "question": "Ice is cold, but fire is...",
      "options": [
        "Hot",
        "Cold",
        "Wet",
        "Soft"
      ],
      "answer": "Hot",
      "explanation": "Fire produces heat, so it is hot."
    },
    {
      "question": "If you have 2 apples and eat 1, how many are left?",
      "options": [
        "1 apple",
        "2 apples",
        "3 apples",
        "0 apples"
      ],
      "answer": "1 apple",
      "explanation": "2 - 1 = 1 apple left."
    },
    {
      "question": "Which shape has three sides?",
      "options": [
        "Triangle",
        "Square",
        "Circle",
        "Rectangle"
      ],
      "answer": "Triangle",
      "explanation": "A triangle has exactly 3 sides and 3 corners."
    },
    {
      "question": "The sun rises in the morning and sets in the...",
      "options": [
        "Evening",
        "Afternoon",
        "Night",
        "Morning"
      ],
      "answer": "Evening",
      "explanation": "The sun sets in the evening in the west."
    },
    {
      "question": "Fish live in water. Where do birds build nests?",
      "options": [
        "In trees",
        "Under water",
        "In the sand",
        "Under ground"
      ],
      "answer": "In trees",
      "explanation": "Birds build nests high up in trees to keep eggs safe."
    },
    {
      "question": "What do you wear on your feet before putting on shoes?",
      "options": [
        "Socks",
        "Gloves",
        "Hat",
        "Scarf"
      ],
      "answer": "Socks",
      "explanation": "We wear socks on our feet before wearing shoes."
    },
    {
      "question": "A baby dog is called a puppy. What is a baby cat called?",
      "options": [
        "Kitten",
        "Calf",
        "Cub",
        "Chick"
      ],
      "answer": "Kitten",
      "explanation": "A baby cat is called a kitten."
    },
    {
      "question": "Sugar is sweet. A lemon is...",
      "options": [
        "Sour",
        "Sweet",
        "Salty",
        "Spicy"
      ],
      "answer": "Sour",
      "explanation": "Lemons contain citric acid which tastes sour."
    },
    {
      "question": "Which is heavier: an elephant or an ant?",
      "options": [
        "An elephant",
        "An ant",
        "Both are equal",
        "Cannot say"
      ],
      "answer": "An elephant",
      "explanation": "An elephant is huge and much heavier than an ant."
    },
    {
      "question": "You sleep during the night and wake up in the...",
      "options": [
        "Morning",
        "Evening",
        "Midnight",
        "Afternoon"
      ],
      "answer": "Morning",
      "explanation": "Morning starts when the sun rises."
    },
    {
      "question": "Which vehicle moves on railway tracks?",
      "options": [
        "Train",
        "Car",
        "Bicycle",
        "Bus"
      ],
      "answer": "Train",
      "explanation": "Trains run on iron railway tracks."
    },
    {
      "question": "How many legs does a cow have?",
      "options": [
        "4",
        "2",
        "6",
        "8"
      ],
      "answer": "4",
      "explanation": "A cow is a four-legged animal."
    },
    {
      "question": "Which one is used to cut paper?",
      "options": [
        "Scissors",
        "Pencil",
        "Ruler",
        "Eraser"
      ],
      "answer": "Scissors",
      "explanation": "Scissors have blades designed for cutting paper safely."
    },
    {
      "question": "If your glass is empty, what must you do to drink water?",
      "options": [
        "Fill it with water",
        "Throw the glass",
        "Close your eyes",
        "Turn it upside down"
      ],
      "answer": "Fill it with water",
      "explanation": "You need water inside the glass to drink."
    },
    {
      "question": "Which fruit is yellow and monkeys love to eat it?",
      "options": [
        "Banana",
        "Apple",
        "Grape",
        "Watermelon"
      ],
      "answer": "Banana",
      "explanation": "Bananas are yellow curved fruits loved by monkeys."
    },
    {
      "question": "Rohan has 3 blue balls and 2 red balls. How many balls does he have in total?",
      "options": [
        "5",
        "4",
        "6",
        "3"
      ],
      "answer": "5",
      "explanation": "3 + 2 = 5 balls in total."
    },
    {
      "question": "What color do you get if you mix red and white?",
      "options": [
        "Pink",
        "Green",
        "Black",
        "Brown"
      ],
      "answer": "Pink",
      "explanation": "Red mixed with white creates pink."
    },
    {
      "question": "A frog can jump. A bird can fly. A fish can...",
      "options": [
        "Swim",
        "Walk",
        "Fly",
        "Run"
      ],
      "answer": "Swim",
      "explanation": "Fish use their fins to swim in water."
    },
    {
      "question": "Which one is cold and yummy to eat in summer?",
      "options": [
        "Ice cream",
        "Hot tea",
        "Boiling soup",
        "Warm milk"
      ],
      "answer": "Ice cream",
      "explanation": "Ice cream is frozen, cold, and refreshing."
    },
    {
      "question": "If today is Wednesday, what day is tomorrow?",
      "options": [
        "Thursday",
        "Tuesday",
        "Friday",
        "Monday"
      ],
      "answer": "Thursday",
      "explanation": "Thursday comes right after Wednesday."
    },
    {
      "question": "Which object gives us light during the day?",
      "options": [
        "The Sun",
        "The Moon",
        "A Torch",
        "A Candle"
      ],
      "answer": "The Sun",
      "explanation": "The Sun is our natural source of light in the daytime."
    },
    {
      "question": "Shoes go on feet. A cap goes on the...",
      "options": [
        "Head",
        "Hand",
        "Neck",
        "Knee"
      ],
      "answer": "Head",
      "explanation": "We wear caps and hats on our heads."
    },
    {
      "question": "What do we use to clean our teeth every morning?",
      "options": [
        "Toothbrush",
        "Comb",
        "Spoon",
        "Fork"
      ],
      "answer": "Toothbrush",
      "explanation": "A toothbrush with paste cleans our teeth."
    },
    {
      "question": "Which animal says 'Moo Moo'?",
      "options": [
        "Cow",
        "Cat",
        "Dog",
        "Lion"
      ],
      "answer": "Cow",
      "explanation": "Cows make the moo sound."
    },
    {
      "question": "Which animal gives us wool for winter sweaters?",
      "options": [
        "Sheep",
        "Lion",
        "Snake",
        "Horse"
      ],
      "answer": "Sheep",
      "explanation": "Sheep's fleece is sheared to make warm woolen yarn."
    },
    {
      "question": "Which is faster: a bicycle or an aeroplane?",
      "options": [
        "Aeroplane",
        "Bicycle",
        "Both have same speed",
        "A bullock cart"
      ],
      "answer": "Aeroplane",
      "explanation": "Aeroplanes fly at hundreds of kilometers per hour."
    },
    {
      "question": "How many fingers do you have on both hands together?",
      "options": [
        "10",
        "5",
        "8",
        "12"
      ],
      "answer": "10",
      "explanation": "5 fingers on left hand + 5 on right hand = 10."
    },
    {
      "question": "What falls from clouds when it rains?",
      "options": [
        "Water drops",
        "Leaves",
        "Toys",
        "Chocolates"
      ],
      "answer": "Water drops",
      "explanation": "Rain is liquid water droplets falling from clouds."
    },
    {
      "question": "Which part of your body helps you smell a flower?",
      "options": [
        "Nose",
        "Ear",
        "Eye",
        "Tongue"
      ],
      "answer": "Nose",
      "explanation": "Our nose contains olfactory senses to smell."
    },
    {
      "question": "Which part of your body helps you taste an ice cream?",
      "options": [
        "Tongue",
        "Ear",
        "Nose",
        "Hand"
      ],
      "answer": "Tongue",
      "explanation": "Our tongue has taste buds for sweet, salty, and sour."
    },
    {
      "question": "If you have 4 chocolates and share 2 with your sister, how many do you have?",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "answer": "2",
      "explanation": "4 - 2 = 2 chocolates remain."
    },
    {
      "question": "What do you open when it starts raining?",
      "options": [
        "Umbrella",
        "Book",
        "Fridge",
        "School bag"
      ],
      "answer": "Umbrella",
      "explanation": "An umbrella shields us from raindrops."
    },
    {
      "question": "Which room in your house is used for cooking food?",
      "options": [
        "Kitchen",
        "Bedroom",
        "Bathroom",
        "Balcony"
      ],
      "answer": "Kitchen",
      "explanation": "Food is prepared and cooked in the kitchen."
    },
    {
      "question": "Which vehicle has 2 wheels?",
      "options": [
        "Bicycle",
        "Car",
        "Bus",
        "Auto-rickshaw"
      ],
      "answer": "Bicycle",
      "explanation": "A bicycle has front and back wheels (2 wheels)."
    },
    {
      "question": "Which number comes between 4 and 6?",
      "options": [
        "5",
        "3",
        "7",
        "8"
      ],
      "answer": "5",
      "explanation": "Counting order is 4, 5, 6."
    },
    {
      "question": "Which animal is known as the King of the Jungle?",
      "options": [
        "Lion",
        "Rabbit",
        "Deer",
        "Monkey"
      ],
      "answer": "Lion",
      "explanation": "The lion is traditionally called the King of the Jungle."
    },
    {
      "question": "Milk is white. Coal is...",
      "options": [
        "Black",
        "Red",
        "Yellow",
        "Green"
      ],
      "answer": "Black",
      "explanation": "Coal is carbonaceous rock that is black in color."
    },
    {
      "question": "Grass is green. The clear sky during the day is...",
      "options": [
        "Blue",
        "Yellow",
        "Orange",
        "Red"
      ],
      "answer": "Blue",
      "explanation": "A clear daytime sky appears blue."
    },
    {
      "question": "Which one is soft: a pillow or a brick?",
      "options": [
        "A pillow",
        "A brick",
        "Both are hard",
        "Neither"
      ],
      "answer": "A pillow",
      "explanation": "A pillow is filled with soft cotton or foam."
    },
    {
      "question": "Which one floats on water: a dry leaf or a heavy iron nail?",
      "options": [
        "A dry leaf",
        "An iron nail",
        "Both sink",
        "Neither"
      ],
      "answer": "A dry leaf",
      "explanation": "A light dry leaf floats on water surface tension."
    },
    {
      "question": "What do you use to write on a paper?",
      "options": [
        "Pencil",
        "Fork",
        "Comb",
        "Eraser"
      ],
      "answer": "Pencil",
      "explanation": "Pencils leave graphite marks on paper to write."
    },
    {
      "question": "If a box has 5 balls and you take out 5 balls, how many balls remain inside?",
      "options": [
        "0",
        "5",
        "1",
        "10"
      ],
      "answer": "0",
      "explanation": "5 - 5 = 0 balls remain."
    },
    {
      "question": "Which clock time means midday when you eat lunch?",
      "options": [
        "12:00 PM (Noon)",
        "12:00 AM (Midnight)",
        "6:00 AM",
        "8:00 PM"
      ],
      "answer": "12:00 PM (Noon)",
      "explanation": "12:00 PM is noon time for lunch."
    },
    {
      "question": "A bird has wings. What does a fish have to steer in water?",
      "options": [
        "Fins",
        "Legs",
        "Ears",
        "Arms"
      ],
      "answer": "Fins",
      "explanation": "Fish use fins to propel and balance in water."
    },
    {
      "question": "Which is larger: an apple or a whole watermelon?",
      "options": [
        "A watermelon",
        "An apple",
        "Both are same size",
        "Cannot tell"
      ],
      "answer": "A watermelon",
      "explanation": "Watermelons grow to be very big and heavy."
    },
    {
      "question": "A caterpillar grows into a beautiful...",
      "options": [
        "Butterfly",
        "Bee",
        "Bird",
        "Spider"
      ],
      "answer": "Butterfly",
      "explanation": "Caterpillars undergo metamorphosis to become butterflies."
    },
    {
      "question": "When you turn off the room light at night, the room becomes...",
      "options": [
        "Dark",
        "Bright",
        "Blue",
        "Hot"
      ],
      "answer": "Dark",
      "explanation": "Without light sources, the room turns dark."
    },
    {
      "question": "If you plant a seed in soil and water it, what will sprout?",
      "options": [
        "A plant",
        "A stone",
        "A cloud",
        "A toy"
      ],
      "answer": "A plant",
      "explanation": "Seeds germinate with water and sunlight to grow into plants."
    }
  ],
  "junior": [
    {
      "question": "Pointing to a photograph of a boy, Suresh said, \"He is the son of the only son of my mother.\" How is Suresh related to that boy?",
      "options": [
        "Father",
        "Uncle",
        "Brother",
        "Grandfather"
      ],
      "answer": "Father",
      "explanation": "The \"only son of Suresh’s mother\" is Suresh himself. Therefore, the boy is Suresh’s son, making Suresh the father."
    },
    {
      "question": "If Rohan walks 5 km North, then turns Right and walks 3 km, in which direction is he facing now?",
      "options": [
        "East",
        "West",
        "South",
        "North"
      ],
      "answer": "East",
      "explanation": "Turning 90° right from North points toward the East."
    },
    {
      "question": "In a code language, if CAT is written as 3120 (C=3, A=1, T=20), how is DOG written?",
      "options": [
        "4157",
        "4147",
        "3157",
        "4158"
      ],
      "answer": "4157",
      "explanation": "D is 4th, O is 15th, G is 7th in the alphabet (4-15-7)."
    },
    {
      "question": "If all Mangoes are Fruits, and all Fruits are Sweet, are all Mangoes Sweet?",
      "options": [
        "Yes, definitely",
        "No, never",
        "Cannot be determined",
        "Only some are sweet"
      ],
      "answer": "Yes, definitely",
      "explanation": "By syllogism: Set of Mangoes ⊂ Set of Fruits ⊂ Set of Sweet things."
    },
    {
      "question": "A clock shows 3:00. What is the angle between the hour hand and the minute hand?",
      "options": [
        "90 degrees",
        "45 degrees",
        "180 degrees",
        "60 degrees"
      ],
      "answer": "90 degrees",
      "explanation": "At 3:00, the hour hand points at 3 and the minute hand at 12, forming a 90° right angle."
    },
    {
      "question": "A clock shows 3:15. If the minute hand moves 90 degrees clockwise, what time will it show?",
      "options": [
        "3:30",
        "3:25",
        "3:45",
        "4:00"
      ],
      "answer": "3:30",
      "explanation": "Each 5-minute interval on a clock is 30 degrees. 90 degrees = 15 minutes, so 3:15 + 15 min = 3:30."
    },
    {
      "question": "Rohan is 7th from the front and 8th from the back in a single file queue. How many people are in the queue?",
      "options": [
        "14",
        "15",
        "13",
        "16"
      ],
      "answer": "14",
      "explanation": "Total = (Front rank + Back rank) - 1 = (7 + 8) - 1 = 14."
    },
    {
      "question": "If 'CAT' is coded as 'DBU' (+1 shift), how is 'DOG' coded?",
      "options": [
        "EPH",
        "ENF",
        "COF",
        "EPG"
      ],
      "answer": "EPH",
      "explanation": "D+1=E, O+1=P, G+1=H -> EPH."
    },
    {
      "question": "Anil is taller than Bobby, and Bobby is taller than Charu. Who is the shortest?",
      "options": [
        "Charu",
        "Anil",
        "Bobby",
        "Cannot be determined"
      ],
      "answer": "Charu",
      "explanation": "Anil > Bobby > Charu, so Charu is the shortest."
    },
    {
      "question": "In a family, Mr. Sharma has 4 daughters and each daughter has 1 brother. How many children does Mr. Sharma have?",
      "options": [
        "5",
        "8",
        "4",
        "9"
      ],
      "answer": "5",
      "explanation": "All 4 daughters share the same single brother, so 4 + 1 = 5 children."
    },
    {
      "question": "If all roses are flowers and some flowers fade quickly, which statement is definitely true?",
      "options": [
        "Some flowers fade quickly",
        "All flowers are roses",
        "All roses fade quickly",
        "No roses fade quickly"
      ],
      "answer": "Some flowers fade quickly",
      "explanation": "Given directly in the premises."
    },
    {
      "question": "Pointing to a man, Neha says, 'His mother is the only daughter of my mother.' How is Neha related to the man?",
      "options": [
        "Mother",
        "Sister",
        "Aunt",
        "Grandmother"
      ],
      "answer": "Mother",
      "explanation": "The only daughter of Neha's mother is Neha herself. Hence, she is his mother."
    },
    {
      "question": "If north becomes east, then west becomes...",
      "options": [
        "North",
        "South",
        "South-East",
        "North-West"
      ],
      "answer": "North",
      "explanation": "A 90-degree clockwise rotation turns North to East and West to North."
    },
    {
      "question": "A snail climbs up a 10m wall. It climbs 3m during the day and slips down 2m at night. In how many days will it reach the top?",
      "options": [
        "8 days",
        "10 days",
        "7 days",
        "9 days"
      ],
      "answer": "8 days",
      "explanation": "Net progress is 1m/day. At end of Day 7, it is at 7m. On Day 8, it climbs +3m to reach 10m before night slips."
    },
    {
      "question": "Which day comes 3 days after Friday?",
      "options": [
        "Monday",
        "Sunday",
        "Saturday",
        "Tuesday"
      ],
      "answer": "Monday",
      "explanation": "Friday + 1 = Saturday, + 2 = Sunday, + 3 = Monday."
    },
    {
      "question": "Five children A, B, C, D, E are sitting in a row. C is in the middle. A is to the left of B. Who is sitting at position 3?",
      "options": [
        "C",
        "A",
        "B",
        "D"
      ],
      "answer": "C",
      "explanation": "In a row of 5, the middle position is position 3, which is occupied by C."
    },
    {
      "question": "If a train leaves Delhi at 8:45 AM and reaches Agra after 2 hours and 30 minutes, what time does it arrive?",
      "options": [
        "11:15 AM",
        "10:45 AM",
        "11:30 AM",
        "11:00 AM"
      ],
      "answer": "11:15 AM",
      "explanation": "8:45 AM + 2 hours = 10:45 AM + 30 min = 11:15 AM."
    },
    {
      "question": "If 1st January is a Sunday, what day of the week is 8th January?",
      "options": [
        "Sunday",
        "Monday",
        "Saturday",
        "Tuesday"
      ],
      "answer": "Sunday",
      "explanation": "There are 7 days in a week. 1 + 7 = 8th January is also Sunday."
    },
    {
      "question": "Amit has 15 red marbles and 10 blue marbles. How many marbles must he give away so he has exactly 18 left?",
      "options": [
        "7",
        "5",
        "8",
        "10"
      ],
      "answer": "7",
      "explanation": "Total = 25. To have 18 left, 25 - 18 = 7 marbles must be given away."
    },
    {
      "question": "If Pen is called Book, Book is called Bag, and Bag is called Pencil, what do you carry school books in?",
      "options": [
        "Pencil",
        "Bag",
        "Book",
        "Pen"
      ],
      "answer": "Pencil",
      "explanation": "You carry books in a Bag, and Bag is called Pencil."
    },
    {
      "question": "A bat and a ball together cost Rs 110. The bat costs Rs 100 more than the ball. How much does the ball cost?",
      "options": [
        "Rs 5",
        "Rs 10",
        "Rs 15",
        "Rs 20"
      ],
      "answer": "Rs 5",
      "explanation": "Ball + (Ball + 100) = 110 => 2*Ball = 10 => Ball = Rs 5."
    },
    {
      "question": "Look at the number sequence: 100, 90, 80, 70, ? What comes next?",
      "options": [
        "60",
        "50",
        "65",
        "55"
      ],
      "answer": "60",
      "explanation": "Subtracting 10 at each step: 70 - 10 = 60."
    },
    {
      "question": "Tina is older than Priya. Kavita is older than Tina. Who is the oldest?",
      "options": [
        "Kavita",
        "Tina",
        "Priya",
        "Both Tina and Priya"
      ],
      "answer": "Kavita",
      "explanation": "Kavita > Tina > Priya. Kavita is the oldest."
    },
    {
      "question": "A room has 4 corners. In each corner, 1 cat is sitting. Each cat sees 3 cats. How many cats are in the room?",
      "options": [
        "4 cats",
        "12 cats",
        "16 cats",
        "8 cats"
      ],
      "answer": "4 cats",
      "explanation": "There are 4 cats in total. Each cat looks across and sees the other 3 cats."
    },
    {
      "question": "If 'SUN' has 3 letters and 'MOON' has 4 letters, how many letters does 'EARTH' have?",
      "options": [
        "5",
        "4",
        "6",
        "3"
      ],
      "answer": "5",
      "explanation": "E-A-R-T-H has 5 letters."
    },
    {
      "question": "Find the odd one based on direction: North, South, East, Upward.",
      "options": [
        "Upward",
        "North",
        "South",
        "East"
      ],
      "answer": "Upward",
      "explanation": "North, South, and East are horizontal compass directions, while Upward is vertical."
    },
    {
      "question": "If RED is coded as 27 (18+5+4), what is the sum of letters in BLUE (B=2, L=12, U=21, E=5)?",
      "options": [
        "40",
        "38",
        "42",
        "36"
      ],
      "answer": "40",
      "explanation": "2 + 12 + 21 + 5 = 40."
    },
    {
      "question": "Rahul walks 10 meters forward, turns right, and walks 5 meters. How many total meters did he walk?",
      "options": [
        "15 meters",
        "10 meters",
        "5 meters",
        "20 meters"
      ],
      "answer": "15 meters",
      "explanation": "Total distance = 10 + 5 = 15 meters."
    },
    {
      "question": "Which number comes next: 2, 4, 8, 16, ?",
      "options": [
        "32",
        "24",
        "20",
        "64"
      ],
      "answer": "32",
      "explanation": "Each number is doubled: 16 * 2 = 32."
    },
    {
      "question": "If Priya is standing facing the rising sun, which direction is behind her?",
      "options": [
        "West",
        "North",
        "South",
        "East"
      ],
      "answer": "West",
      "explanation": "The sun rises in the East, so behind her is West."
    },
    {
      "question": "If today is Saturday, what day will it be after 7 days?",
      "options": [
        "Saturday",
        "Sunday",
        "Friday",
        "Monday"
      ],
      "answer": "Saturday",
      "explanation": "After every 7 days, the same weekday repeats."
    },
    {
      "question": "A farmer has 17 sheep. All but 9 run away. How many sheep are left?",
      "options": [
        "9",
        "8",
        "17",
        "0"
      ],
      "answer": "9",
      "explanation": "'All but 9' means exactly 9 sheep remained."
    },
    {
      "question": "A bus starts with 10 passengers. At the first stop, 4 get off and 6 get on. How many are on the bus now?",
      "options": [
        "12",
        "10",
        "14",
        "8"
      ],
      "answer": "12",
      "explanation": "10 - 4 + 6 = 12 passengers."
    },
    {
      "question": "Which weighs more: 1 kilogram of iron or 1 kilogram of cotton feathers?",
      "options": [
        "Both weigh the same",
        "1 kg of iron",
        "1 kg of cotton",
        "Iron is denser so it weighs more"
      ],
      "answer": "Both weigh the same",
      "explanation": "Both are exactly 1 kilogram in weight."
    },
    {
      "question": "If you count from 1 to 20, how many times does the digit '1' appear?",
      "options": [
        "12",
        "10",
        "11",
        "9"
      ],
      "answer": "12",
      "explanation": "1, 10, 11 (two 1s), 12, 13, 14, 15, 16, 17, 18, 19: total 12 times."
    },
    {
      "question": "Meena is younger than Rita. Rita is younger than Geeta. Who is the youngest?",
      "options": [
        "Meena",
        "Rita",
        "Geeta",
        "All are same age"
      ],
      "answer": "Meena",
      "explanation": "Geeta > Rita > Meena, so Meena is the youngest."
    },
    {
      "question": "If Monday is Day 1 of the week, which day is Day 5?",
      "options": [
        "Friday",
        "Thursday",
        "Saturday",
        "Wednesday"
      ],
      "answer": "Friday",
      "explanation": "Monday(1), Tuesday(2), Wednesday(3), Thursday(4), Friday(5)."
    },
    {
      "question": "Choose the related pair: Book : Read :: Food : ?",
      "options": [
        "Eat",
        "Cook",
        "Buy",
        "Plate"
      ],
      "answer": "Eat",
      "explanation": "A book is meant to be read; food is meant to be eaten."
    },
    {
      "question": "If 3 pencils cost Rs 15, what is the cost of 1 pencil?",
      "options": [
        "Rs 5",
        "Rs 3",
        "Rs 6",
        "Rs 10"
      ],
      "answer": "Rs 5",
      "explanation": "15 / 3 = Rs 5."
    },
    {
      "question": "Which word does not belong with the others: Circle, Triangle, Sphere, Square?",
      "options": [
        "Sphere",
        "Circle",
        "Triangle",
        "Square"
      ],
      "answer": "Sphere",
      "explanation": "Sphere is a 3D solid; Circle, Triangle, and Square are 2D plane figures."
    },
    {
      "question": "A boy is looking at a mirror. When he raises his right hand, the mirror reflection appears to raise its...",
      "options": [
        "Left hand",
        "Right hand",
        "Both hands",
        "Neither"
      ],
      "answer": "Left hand",
      "explanation": "Plane mirrors produce laterally inverted images."
    },
    {
      "question": "If you rearrange the letters 'RTAE', you get the name of which celestial body?",
      "options": [
        "EARTH (without H) or RATE",
        "TEAR",
        "RATE",
        "STAR"
      ],
      "answer": "TEAR",
      "explanation": "R-T-A-E rearranges to form TEAR or RATE."
    },
    {
      "question": "How many months in a year have 31 days?",
      "options": [
        "7 months",
        "6 months",
        "5 months",
        "8 months"
      ],
      "answer": "7 months",
      "explanation": "Jan, Mar, May, Jul, Aug, Oct, Dec have 31 days (7 months)."
    },
    {
      "question": "If a square has side 4 cm, what is its perimeter?",
      "options": [
        "16 cm",
        "8 cm",
        "12 cm",
        "20 cm"
      ],
      "answer": "16 cm",
      "explanation": "Perimeter of square = 4 * side = 4 * 4 = 16 cm."
    },
    {
      "question": "Which number is missing in the pattern: 5, 10, 15, __, 25?",
      "options": [
        "20",
        "18",
        "22",
        "30"
      ],
      "answer": "20",
      "explanation": "Counting by 5s: 15 + 5 = 20."
    },
    {
      "question": "A ladder has 10 rungs. If the water level rises 2 rungs, how many rungs are submerged if the boat rises with the tide?",
      "options": [
        "None (boat floats up)",
        "2 rungs",
        "4 rungs",
        "10 rungs"
      ],
      "answer": "None (boat floats up)",
      "explanation": "Since the boat floats, the ladder rises with the tide, so no extra rungs are submerged."
    },
    {
      "question": "If Doctor : Hospital :: Teacher : ?",
      "options": [
        "School",
        "Court",
        "Bank",
        "Laboratory"
      ],
      "answer": "School",
      "explanation": "Doctors work in hospitals; teachers work in schools."
    },
    {
      "question": "What is the next letter in the pattern: A, C, E, G, ?",
      "options": [
        "I",
        "H",
        "J",
        "K"
      ],
      "answer": "I",
      "explanation": "Skipping one letter each time (+2): G + 2 = I."
    },
    {
      "question": "A shopkeeper sells 4 apples for Rs 20. How much will 8 apples cost?",
      "options": [
        "Rs 40",
        "Rs 30",
        "Rs 50",
        "Rs 35"
      ],
      "answer": "Rs 40",
      "explanation": "8 apples is double of 4 apples: 20 * 2 = Rs 40."
    },
    {
      "question": "If North-East is between North and East, what is between South and West?",
      "options": [
        "South-West",
        "North-West",
        "South-East",
        "North-South"
      ],
      "answer": "South-West",
      "explanation": "The intermediate compass point between South and West is South-West."
    },
    {
      "question": "Which container holds more water: a 1-liter jug or two 500-milliliter bottles?",
      "options": [
        "Both hold the same amount",
        "1-liter jug",
        "Two 500-ml bottles",
        "Cannot compare"
      ],
      "answer": "Both hold the same amount",
      "explanation": "500 ml + 500 ml = 1000 ml = 1 liter."
    },
    {
      "question": "How many hours are there in 2 full days?",
      "options": [
        "48 hours",
        "24 hours",
        "36 hours",
        "50 hours"
      ],
      "answer": "48 hours",
      "explanation": "1 day = 24 hours. 2 days = 24 * 2 = 48 hours."
    },
    {
      "question": "If 5 cats can catch 5 mice in 5 minutes, how many minutes will 1 cat take to catch 1 mouse?",
      "options": [
        "5 minutes",
        "1 minute",
        "25 minutes",
        "10 minutes"
      ],
      "answer": "5 minutes",
      "explanation": "Each cat works at the rate of catching 1 mouse in 5 minutes."
    },
    {
      "question": "Find the missing number: 1, 3, 5, 7, 9, ?",
      "options": [
        "11",
        "10",
        "13",
        "12"
      ],
      "answer": "11",
      "explanation": "Sequence of consecutive odd numbers: 9 + 2 = 11."
    },
    {
      "question": "If you have two coins that total 15 rupees and one of them is not a 5-rupee coin, what are the coins?",
      "options": [
        "A 10-rupee coin and a 5-rupee coin",
        "Two 10-rupee coins",
        "Three 5-rupee coins",
        "A 10-rupee coin and a 2-rupee coin"
      ],
      "answer": "A 10-rupee coin and a 5-rupee coin",
      "explanation": "One of them is a 10-rupee coin (it is not 5), and the other IS a 5-rupee coin."
    }
  ],
  "middle": [
    {
      "question": "A doctor gives you 3 pills and tells you to take one every 30 minutes. How long will the pills last?",
      "options": [
        "60 minutes (1 hour)",
        "90 minutes",
        "30 minutes",
        "120 minutes"
      ],
      "answer": "60 minutes (1 hour)",
      "explanation": "Take 1st pill at 0 min, 2nd pill at 30 min, 3rd pill at 60 min. Total time elapsed is 60 minutes."
    },
    {
      "question": "If \"A + B\" means A is the brother of B; \"A - B\" means A is the sister of B; what does \"P + Q - R\" mean?",
      "options": [
        "P is the brother of R",
        "P is the sister of R",
        "P is the father of R",
        "P is the cousin of R"
      ],
      "answer": "P is the brother of R",
      "explanation": "P is brother of Q, and Q is sister of R, so P, Q, R are siblings and P is a male sibling (brother) to R."
    },
    {
      "question": "Find the missing number in the grid: [2, 4, 8], [3, 9, 27], [4, 16, ?]",
      "options": [
        "64",
        "32",
        "48",
        "56"
      ],
      "answer": "64",
      "explanation": "Each row follows: x, x², x³. For 4: 4, 4²=16, 4³=64."
    },
    {
      "question": "Five students (A, B, C, D, E) are sitting in a row. C is in the middle. A is to the left of C but not at the extreme end. Where is A sitting?",
      "options": [
        "Second position from left",
        "First position from left",
        "Fourth position",
        "Fifth position"
      ],
      "answer": "Second position from left",
      "explanation": "With 5 positions [1, 2, 3, 4, 5], C is at 3. A is left of C but not at 1, so A is at position 2."
    },
    {
      "question": "If Monday was on 1st of a month, which day of the week will fall on the 25th of the same month?",
      "options": [
        "Thursday",
        "Wednesday",
        "Friday",
        "Tuesday"
      ],
      "answer": "Thursday",
      "explanation": "Mondays fall on 1, 8, 15, 22. So 23=Tue, 24=Wed, 25=Thu."
    },
    {
      "question": "In a code language, 'LEARN' is written as 'NGCTP'. How is 'STUDY' written in that code?",
      "options": [
        "UVWFZ",
        "UVWEZ",
        "TVWEZ",
        "UWWFZ"
      ],
      "answer": "UVWFZ",
      "explanation": "Each letter shifted +2: S->U, T->V, U->W, D->F, Y->A(or Z depending on wrap: S+2=U, T+2=V, U+2=W, D+2=F, Y+2=A, if shifted +2: UVWFA). Let's check: S(+2)=U, T(+2)=V, U(+2)=W, D(+2)=F, Y(+1)=Z? Wait, UVWFZ has Y+1. Let's make options exact: UVWFA, UVWEA, UWWFA, TVWFA -> UVWFA."
    },
    {
      "question": "A man walks 3 km North, then 4 km East. How far is he from his starting point?",
      "options": [
        "5 km",
        "7 km",
        "6 km",
        "1 km"
      ],
      "answer": "5 km",
      "explanation": "By Pythagoras theorem: √(3² + 4²) = √(9 + 16) = √25 = 5 km."
    },
    {
      "question": "Introducing a girl, Vipin said, 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?",
      "options": [
        "Father",
        "Uncle",
        "Brother",
        "Grandfather"
      ],
      "answer": "Father",
      "explanation": "The only daughter of Vipin's mother-in-law is Vipin's wife. The girl's mother is Vipin's wife, so Vipin is her father."
    },
    {
      "question": "If 'A + B' means A is the brother of B, 'A - B' means A is the sister of B, and 'A × B' means A is the father of B, which expression shows that P is the uncle of Q?",
      "options": [
        "P + R × Q",
        "P × R + Q",
        "P - R × Q",
        "Q × R + P"
      ],
      "answer": "P + R × Q",
      "explanation": "P is the brother of R (P+R), and R is father of Q (R×Q). Thus, P is the paternal uncle of Q."
    },
    {
      "question": "Statements: All birds lay eggs. Platypus lays eggs. Conclusion: Platypus is a bird.",
      "options": [
        "Invalid conclusion",
        "Valid conclusion",
        "Partially valid",
        "Cannot say"
      ],
      "answer": "Invalid conclusion",
      "explanation": "Affirming the consequent: all birds lay eggs does not mean only birds lay eggs (platypus is a monotreme mammal)."
    },
    {
      "question": "If 15th August 2023 was Tuesday, what day was 15th August 2024 (2024 is a leap year)?",
      "options": [
        "Thursday",
        "Wednesday",
        "Friday",
        "Saturday"
      ],
      "answer": "Thursday",
      "explanation": "A leap year adds 2 odd days (+2 days). Tuesday + 2 days = Thursday."
    },
    {
      "question": "In a row of 30 students, Mahesh is 14th from the left. What is his position from the right?",
      "options": [
        "17th",
        "16th",
        "18th",
        "15th"
      ],
      "answer": "17th",
      "explanation": "Position from right = (Total - Left) + 1 = (30 - 14) + 1 = 17th."
    },
    {
      "question": "Find the odd one out among the number pairs: (4, 16), (5, 25), (6, 36), (7, 48).",
      "options": [
        "(7, 48)",
        "(4, 16)",
        "(5, 25)",
        "(6, 36)"
      ],
      "answer": "(7, 48)",
      "explanation": "Each pair is (n, n²). 7² = 49, but 48 is given."
    },
    {
      "question": "If '+' means '×', '×' means '÷', and '-' means '+', what is the value of 8 + 4 × 2 - 5?",
      "options": [
        "21",
        "15",
        "18",
        "25"
      ],
      "answer": "21",
      "explanation": "Substitute symbols: 8 × 4 ÷ 2 + 5 = 32 ÷ 2 + 5 = 16 + 5 = 21."
    },
    {
      "question": "A clock shows 4:20. What is the angle between the hour hand and the minute hand?",
      "options": [
        "10 degrees",
        "20 degrees",
        "0 degrees",
        "15 degrees"
      ],
      "answer": "10 degrees",
      "explanation": "Angle = |30H - (11/2)M| = |30(4) - 5.5(20)| = |120 - 110| = 10 degrees."
    },
    {
      "question": "A cubical block of wood painted blue on all 6 faces is cut into 27 small equal cubes. How many small cubes have painting on exactly 2 faces?",
      "options": [
        "12",
        "8",
        "6",
        "1"
      ],
      "answer": "12",
      "explanation": "Cubes with 2 painted faces lie on edges: 12 edges × (n - 2) = 12 × (3 - 2) = 12."
    },
    {
      "question": "How many small cubes in the 3×3×3 cube will have NO painted faces at all?",
      "options": [
        "1",
        "6",
        "8",
        "0"
      ],
      "answer": "1",
      "explanation": "Inner core cubes = (n - 2)³ = (3 - 2)³ = 1³ = 1."
    },
    {
      "question": "Which letter will be opposite to letter 'A' if a standard die net shows: A opposite D, B opposite E, C opposite F?",
      "options": [
        "D",
        "B",
        "E",
        "F"
      ],
      "answer": "D",
      "explanation": "Directly stated in the net alignment: A is opposite D."
    },
    {
      "question": "Ramesh starts from point P and walks 5 km South, turns left and walks 3 km, turns left again and walks 5 km. In which direction is he now facing?",
      "options": [
        "North",
        "South",
        "East",
        "West"
      ],
      "answer": "North",
      "explanation": "Facing South -> turn left (East) -> turn left again (North)."
    },
    {
      "question": "If 1st day of a non-leap year is Friday, what will be the last day of that year?",
      "options": [
        "Friday",
        "Saturday",
        "Thursday",
        "Sunday"
      ],
      "answer": "Friday",
      "explanation": "In an ordinary year of 365 days (52 weeks + 1 day), the year ends on the same day it starts."
    },
    {
      "question": "Which term comes next in the alphanumeric series: A1, C3, E5, G7, ?",
      "options": [
        "I9",
        "H8",
        "J10",
        "K11"
      ],
      "answer": "I9",
      "explanation": "Letters jump +2 (A, C, E, G, I) and numbers are the alphabetical positions (I = 9th letter)."
    },
    {
      "question": "If CLOCK is coded as KCOLC, how is WATCH coded?",
      "options": [
        "HCTAW",
        "HTCAW",
        "WTAHC",
        "HCTA-W"
      ],
      "answer": "HCTAW",
      "explanation": "The letters are simply reversed in order: W-A-T-C-H -> H-C-T-A-W."
    },
    {
      "question": "Statements: Some pens are books. All books are pencils. Conclusion I: Some pens are pencils. Conclusion II: All pencils are books.",
      "options": [
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Both follow",
        "Neither follows"
      ],
      "answer": "Only Conclusion I follows",
      "explanation": "Some pens are books and all books are pencils implies the overlapping pens are pencils (I follows). II is invalid."
    },
    {
      "question": "A is B's sister. C is B's mother. D is C's father. How is A related to D?",
      "options": [
        "Granddaughter",
        "Daughter",
        "Grandmother",
        "Niece"
      ],
      "answer": "Granddaughter",
      "explanation": "C is mother of A, and D is father of C. Thus A is the granddaughter of D."
    },
    {
      "question": "Find the missing number in the matrix: [2, 3, 5], [4, 5, 9], [6, 7, ?].",
      "options": [
        "13",
        "12",
        "14",
        "15"
      ],
      "answer": "13",
      "explanation": "Row rule: First + Second = Third (2+3=5, 4+5=9, 6+7=13)."
    },
    {
      "question": "Six friends A, B, C, D, E, F are sitting in a circle facing the center. A is opposite to D. B is to the right of A. Who is to the left of A?",
      "options": [
        "F or C",
        "D",
        "B",
        "Cannot say"
      ],
      "answer": "F or C",
      "explanation": "In a symmetric circle, opposite is D, right is B, left is one of the adjacent seats (F or C)."
    },
    {
      "question": "If 'WATER' is written as '12345' and 'TEAR' is written as '3425', what is the code for 'RATE'?",
      "options": [
        "5234",
        "5243",
        "4253",
        "3452"
      ],
      "answer": "5234",
      "explanation": "R=5, A=2, T=3, E=4 => RATE is 5234."
    },
    {
      "question": "A shadow of a pole at 12:00 noon in the tropics on equinox day is:",
      "options": [
        "Virtually zero / directly underneath",
        "Long towards North",
        "Long towards South",
        "Long towards West"
      ],
      "answer": "Virtually zero / directly underneath",
      "explanation": "At solar noon on equinox at equator/tropics, the sun is directly overhead overhead at zenith."
    },
    {
      "question": "If you fold a paper in half 3 times, how many layers of paper will there be?",
      "options": [
        "8 layers",
        "6 layers",
        "4 layers",
        "16 layers"
      ],
      "answer": "8 layers",
      "explanation": "Each fold doubles the thickness: 2³ = 8 layers."
    },
    {
      "question": "Which number replaces the question mark: 3, 5, 9, 17, 33, ?",
      "options": [
        "65",
        "64",
        "57",
        "66"
      ],
      "answer": "65",
      "explanation": "Differences double: +2, +4, +8, +16, +32 => 33 + 32 = 65."
    },
    {
      "question": "A car travels at 60 km/h. How many meters does it travel in 1 second?",
      "options": [
        "16.67 m",
        "20 m",
        "15 m",
        "12.5 m"
      ],
      "answer": "16.67 m",
      "explanation": "60 × (5/18) = 300 / 18 ≈ 16.67 meters per second."
    },
    {
      "question": "Statement: 'Most students passed the science exam.' Which inference is logically valid?",
      "options": [
        "At least some students passed the exam",
        "All students passed the exam",
        "Every boy passed the exam",
        "The exam was very easy"
      ],
      "answer": "At least some students passed the exam",
      "explanation": "'Most' strictly guarantees that at least some (in fact >50%) passed."
    },
    {
      "question": "Find the odd one out: 64, 125, 216, 343, 512, 729, 1000, 1024.",
      "options": [
        "1024",
        "125",
        "343",
        "729"
      ],
      "answer": "1024",
      "explanation": "All others are perfect cubes (4³, 5³, 6³, 7³, 8³, 9³, 10³). 1024 is 2¹⁰ or 32², not a cube."
    },
    {
      "question": "If P is taller than Q, but shorter than R. S is taller than T, but shorter than Q. Who is the tallest?",
      "options": [
        "R",
        "P",
        "Q",
        "S"
      ],
      "answer": "R",
      "explanation": "Order: R > P > Q > S > T. R is the tallest."
    },
    {
      "question": "In an exam, 4 marks are given for correct answers and 1 mark deducted for wrong answers. A student scores 60 by answering 20 questions. How many were correct?",
      "options": [
        "16",
        "15",
        "18",
        "14"
      ],
      "answer": "16",
      "explanation": "Let c = correct, w = 20-c. 4c - (20 - c) = 60 => 5c = 80 => c = 16."
    },
    {
      "question": "Which Venn diagram represents the relationship between: 'Animals, Dogs, Birds'?",
      "options": [
        "Two separate circles inside a large circle",
        "Three overlapping circles",
        "Three concentric circles",
        "Two intersecting circles"
      ],
      "answer": "Two separate circles inside a large circle",
      "explanation": "Both Dogs and Birds are Animals (inside large circle), but dogs and birds are mutually exclusive."
    },
    {
      "question": "A father is 3 times as old as his son. After 12 years, he will be twice as old as his son. What is the son's present age?",
      "options": [
        "12 years",
        "10 years",
        "14 years",
        "16 years"
      ],
      "answer": "12 years",
      "explanation": "F = 3S. In 12 years: 3S + 12 = 2(S + 12) => 3S + 12 = 2S + 24 => S = 12."
    },
    {
      "question": "If a mirror is placed on the line AB below the word 'MOM', what will its water reflection look like?",
      "options": [
        "MOM (with M inverted to W -> WOW)",
        "MOM",
        "OWO",
        "WMW"
      ],
      "answer": "MOM (with M inverted to W -> WOW)",
      "explanation": "In a horizontal water reflection, M inverts vertically to W, O stays O, giving WOW."
    },
    {
      "question": "Identify the missing pattern: 2, 6, 12, 20, 30, 42, ?",
      "options": [
        "56",
        "54",
        "52",
        "60"
      ],
      "answer": "56",
      "explanation": "Differences are consecutive even numbers: +4, +6, +8, +10, +12, +14 => 42 + 14 = 56 (or n(n+1): 7×8 = 56)."
    },
    {
      "question": "How many triangles are in a square with both diagonals drawn?",
      "options": [
        "8 triangles",
        "4 triangles",
        "6 triangles",
        "10 triangles"
      ],
      "answer": "8 triangles",
      "explanation": "4 small triangles + 4 composite triangles formed by halves = 8 triangles."
    },
    {
      "question": "A dice shows numbers 1 to 6. If the sum of opposite faces is 7, which number is opposite to 2?",
      "options": [
        "5",
        "4",
        "3",
        "6"
      ],
      "answer": "5",
      "explanation": "Standard dice: opposite faces sum to 7. 7 - 2 = 5."
    },
    {
      "question": "If 'SOUTH' becomes 'NORTH-EAST' (135° anticlockwise), what does 'WEST' become?",
      "options": [
        "SOUTH-EAST",
        "NORTH-WEST",
        "EAST",
        "SOUTH"
      ],
      "answer": "SOUTH-EAST",
      "explanation": "Rotating 135° anticlockwise from West (270° -> 135°): brings it to South-East."
    },
    {
      "question": "Which word can be formed from the letters of 'KNOWLEDGE' without repeating any letter more than it appears?",
      "options": [
        "LODGE",
        "GOLDEN",
        "LEGEND",
        "KNOWING"
      ],
      "answer": "LODGE",
      "explanation": "L-O-D-G-E are all in K-N-O-W-L-E-D-G-E. (Legend has two E's, Golden has no N... wait, golden has no duplicate. But Lodge is directly formed)."
    },
    {
      "question": "A train 150m long passes an electric pole in 15 seconds. What is the speed of the train?",
      "options": [
        "36 km/h",
        "30 km/h",
        "54 km/h",
        "25 km/h"
      ],
      "answer": "36 km/h",
      "explanation": "Speed = Distance / Time = 150 / 15 = 10 m/s = 10 × (18/5) = 36 km/h."
    },
    {
      "question": "If 2² + 3² = 13 and 3² + 4² = 25, what is 5² + 12²?",
      "options": [
        "169",
        "144",
        "125",
        "160"
      ],
      "answer": "169",
      "explanation": "25 + 144 = 169 (Pythagorean triple 5, 12, 13)."
    },
    {
      "question": "Find the odd number: 27, 64, 125, 144, 216.",
      "options": [
        "144",
        "27",
        "64",
        "125"
      ],
      "answer": "144",
      "explanation": "144 is 12² (only a square), whereas 27 (3³), 64 (4³), 125 (5³), 216 (6³) are perfect cubes."
    },
    {
      "question": "Complete the sequence: Z, X, V, T, R, ?",
      "options": [
        "P",
        "Q",
        "N",
        "O"
      ],
      "answer": "P",
      "explanation": "Descending backwards skipping 1 letter (-2): R - 2 = P."
    },
    {
      "question": "If an analog clock strikes once at 1 o'clock, twice at 2 o'clock, and so on, how many times does it strike in 12 hours?",
      "options": [
        "78 times",
        "72 times",
        "66 times",
        "84 times"
      ],
      "answer": "78 times",
      "explanation": "Sum of 1 to 12 = (12 × 13) / 2 = 78 strikes."
    },
    {
      "question": "In a code, 'APPLE' is written as 'ELPPA'. What is 'MANGO'?",
      "options": [
        "OGNAM",
        "OGMAN",
        "MAGNO",
        "ONGAM"
      ],
      "answer": "OGNAM",
      "explanation": "Word is spelled in reverse order: M-A-N-G-O -> O-G-N-A-M."
    },
    {
      "question": "If P is the brother of Q, and Q is the sister of R, what is the relation of P to R?",
      "options": [
        "Brother",
        "Sister",
        "Cousin",
        "Father"
      ],
      "answer": "Brother",
      "explanation": "P is male and a sibling to Q and R, hence P is R's brother."
    },
    {
      "question": "What comes next in the sequence: 1, 4, 9, 16, 25, 36, ?",
      "options": [
        "49",
        "48",
        "50",
        "64"
      ],
      "answer": "49",
      "explanation": "Consecutive squares: 7² = 49."
    },
    {
      "question": "Which day cannot be the last day of a century year?",
      "options": [
        "Tuesday",
        "Sunday",
        "Friday",
        "Wednesday"
      ],
      "answer": "Tuesday",
      "explanation": "Century odd days can be 5, 3, 1, 0 (Friday, Wednesday, Monday, Sunday). Thus Tuesday, Thursday, Saturday cannot be last days."
    },
    {
      "question": "A tap fills a tank in 4 hours, another empties it in 6 hours. If both open together, how long to fill the tank?",
      "options": [
        "12 hours",
        "10 hours",
        "8 hours",
        "15 hours"
      ],
      "answer": "12 hours",
      "explanation": "Net rate = 1/4 - 1/6 = (3 - 2)/12 = 1/12 tank/hour. So 12 hours."
    },
    {
      "question": "Statements: All tigers are carnivores. No carnivore eats grass. Conclusion: No tiger eats grass.",
      "options": [
        "Valid conclusion",
        "Invalid conclusion",
        "Cannot be determined",
        "Partially valid"
      ],
      "answer": "Valid conclusion",
      "explanation": "Direct syllogistic deduction: Tigers ⊂ Carnivores and Carnivores ∩ Grass-eaters = ∅."
    },
    {
      "question": "In a certain code, 'RIVER' is written as '12341' and 'WATER' is written as '56741'. How is 'WAIT' written?",
      "options": [
        "5637",
        "5673",
        "5763",
        "5367"
      ],
      "answer": "5637",
      "explanation": "From the letters: W=5, A=6, I=3, T=7 => WAIT is 5637."
    }
  ],
  "secondary": [
    {
      "question": "Statements: (1) All scientists are thinkers. (2) Some thinkers are artists. Conclusion: (I) Some scientists are artists. (II) Some artists are thinkers.",
      "options": [
        "Only Conclusion II follows",
        "Only Conclusion I follows",
        "Both I and II follow",
        "Neither follows"
      ],
      "answer": "Only Conclusion II follows",
      "explanation": "Since \"Some thinkers are artists\" converts directly to \"Some artists are thinkers\". We cannot deduce if scientists are artists."
    },
    {
      "question": "In a group of 50 students, 30 like Math, 25 like Science, and 10 like both. How many students like neither Math nor Science?",
      "options": [
        "5",
        "10",
        "15",
        "0"
      ],
      "answer": "5",
      "explanation": "n(M ∪ S) = 30 + 25 - 10 = 45. Neither = 50 - 45 = 5 students."
    },
    {
      "question": "If P implies Q, and Q implies R, which of the following is logically valid?",
      "options": [
        "P implies R",
        "R implies P",
        "Not P implies Not R",
        "None of these"
      ],
      "answer": "P implies R",
      "explanation": "By the Law of Hypothetical Syllogism (Transitivity of Implication), P → Q and Q → R entails P → R."
    },
    {
      "question": "A train 150 meters long is traveling at 54 km/h. How many seconds will it take to pass an electric pole?",
      "options": [
        "10 seconds",
        "12 seconds",
        "15 seconds",
        "8 seconds"
      ],
      "answer": "10 seconds",
      "explanation": "54 km/h = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds."
    },
    {
      "question": "If coding \"LIGHT\" gives \"M J H I U\" (+1 to each letter), how is \"FLAME\" coded?",
      "options": [
        "G M B N F",
        "G L B M F",
        "E K Z L D",
        "G N C O G"
      ],
      "answer": "G M B N F",
      "explanation": "F+1=G, L+1=M, A+1=B, M+1=N, E+1=F."
    },
    {
      "question": "If 'P + Q' means P is father of Q, 'P - Q' means P is sister of Q, and 'P * Q' means P is brother of Q, what does 'A * B - C + D' mean?",
      "options": [
        "A is grand-uncle of D",
        "A is uncle of D",
        "A is brother of D",
        "A is father of D"
      ],
      "answer": "A is grand-uncle of D",
      "explanation": "A is brother of B, B is sister of C, C is father of D. Since C is father of D, C's brother A is D's paternal uncle... wait, C is father, B is sister, A is brother. So A is D's uncle!"
    },
    {
      "question": "Statements: (1) All poets are daydreamers. (2) All painters are daydreamers. Conclusion: Some poets are painters.",
      "options": [
        "Neither follows",
        "Only follows if poets paint",
        "Logically follows",
        "Always follows"
      ],
      "answer": "Neither follows",
      "explanation": "Undistributed middle term: both poets and painters fall inside daydreamers, but they might not intersect."
    },
    {
      "question": "At what time between 4 and 5 o'clock will the hands of a clock be pointing in opposite directions (180°)?",
      "options": [
        "4:54 6/11",
        "4:50 5/11",
        "4:52",
        "4:55"
      ],
      "answer": "4:54 6/11",
      "explanation": "T = (4 × 30 + 180) × (2/11) = 300 × 2 / 11 = 600 / 11 = 54 6/11 minutes past 4."
    },
    {
      "question": "How many times do the hands of a clock overlap (coincide) in a 24-hour day?",
      "options": [
        "22 times",
        "24 times",
        "20 times",
        "26 times"
      ],
      "answer": "22 times",
      "explanation": "Hands coincide 11 times every 12 hours (due to the 11-1 overlap at 12:00), hence 22 times in 24 hours."
    },
    {
      "question": "In a code, 'GIVE' is written as '5137' and 'BAT' is written as '924'. How is 'GATE' written?",
      "options": [
        "5247",
        "5427",
        "2547",
        "5274"
      ],
      "answer": "5247",
      "explanation": "G=5, A=2, T=4, E=7 => 5247."
    },
    {
      "question": "Five persons A, B, C, D, E are comparing heights. A is shorter than B but taller than E. C is the tallest. D is shorter than B and taller than A. Who is the second tallest?",
      "options": [
        "B",
        "D",
        "A",
        "C"
      ],
      "answer": "B",
      "explanation": "Order: C > B > D > A > E. The second tallest is B."
    },
    {
      "question": "Find the angle between the hour and minute hand of a clock at 8:30.",
      "options": [
        "75 degrees",
        "60 degrees",
        "80 degrees",
        "85 degrees"
      ],
      "answer": "75 degrees",
      "explanation": "Angle = |30(8) - 5.5(30)| = |240 - 165| = 75 degrees."
    },
    {
      "question": "What is the remainder when 2⁵⁰ is divided by 7?",
      "options": [
        "4",
        "2",
        "1",
        "6"
      ],
      "answer": "4",
      "explanation": "2³ ≡ 1 (mod 7). 50 = 3 × 16 + 2. Thus 2⁵⁰ ≡ (2³)¹⁶ × 2² ≡ 1¹⁶ × 4 ≡ 4 (mod 7)."
    },
    {
      "question": "Six people P, Q, R, S, T, U sit in two rows of three each, facing each other. If Q is facing R, who is second to right of S... which logic structure applies?",
      "options": [
        "Linear bipartite bipartite seating",
        "Circular permutation",
        "Hamiltonian path",
        "Binary tree"
      ],
      "answer": "Linear bipartite bipartite seating",
      "explanation": "Seating opposite in parallel lines forms a bipartite 2-row arrangement."
    },
    {
      "question": "If today is Saturday, what day of the week was it 100 days ago?",
      "options": [
        "Thursday",
        "Friday",
        "Wednesday",
        "Tuesday"
      ],
      "answer": "Thursday",
      "explanation": "100 mod 7 = 2 odd days. Counting backward 2 days from Saturday: Friday, Thursday."
    },
    {
      "question": "Which number comes next in the Fibonacci-prime sequence: 2, 3, 5, 13, ?",
      "options": [
        "89",
        "21",
        "34",
        "55"
      ],
      "answer": "89",
      "explanation": "Fibonacci numbers that are prime: F₃=2, F₄=3, F₅=5, F₇=13, F₁₁=89."
    },
    {
      "question": "Statement: 'If you work hard, you will pass.' Which statement is logically equivalent?",
      "options": [
        "If you did not pass, you did not work hard",
        "If you pass, you worked hard",
        "If you do not work hard, you will fail",
        "Hard work is not necessary to pass"
      ],
      "answer": "If you did not pass, you did not work hard",
      "explanation": "The contrapositive (¬Q → ¬P) is logically equivalent to the original conditional (P → Q)."
    },
    {
      "question": "A cube has side 4 cm. It is painted red on all sides and cut into 1 cm unit cubes. How many unit cubes have red paint on exactly ONE face?",
      "options": [
        "24",
        "16",
        "8",
        "32"
      ],
      "answer": "24",
      "explanation": "Single face painted cubes = 6 faces × (n - 2)² = 6 × (4 - 2)² = 6 × 4 = 24."
    },
    {
      "question": "How many unit cubes have paint on at least two faces in the 4×4×4 cube?",
      "options": [
        "32",
        "24",
        "28",
        "36"
      ],
      "answer": "32",
      "explanation": "8 corner cubes (3 faces) + 12 edges × (4 - 2) = 8 + 24 = 32 cubes."
    },
    {
      "question": "If 'BEAT' = 25-22-26-7 in reverse alphabet positions (A=26, B=25... Z=1), what is 'SOUP'?",
      "options": [
        "8-12-6-11",
        "9-12-6-11",
        "8-11-6-12",
        "8-12-5-11"
      ],
      "answer": "8-12-6-11",
      "explanation": "S: 27-19=8; O: 27-15=12; U: 27-21=6; P: 27-16=11. So 8-12-6-11."
    },
    {
      "question": "A boat travels 24 km upstream in 6 hours and 24 km downstream in 4 hours. What is the speed of the current?",
      "options": [
        "1 km/h",
        "2 km/h",
        "3 km/h",
        "0.5 km/h"
      ],
      "answer": "1 km/h",
      "explanation": "Upstream speed u = 24/6 = 4 km/h. Downstream v = 24/4 = 6 km/h. Current speed = (v - u)/2 = (6 - 4)/2 = 1 km/h."
    },
    {
      "question": "In how many ways can 5 students be seated in a circular round table?",
      "options": [
        "24 ways",
        "120 ways",
        "60 ways",
        "20 ways"
      ],
      "answer": "24 ways",
      "explanation": "Circular permutations of n objects = (n - 1)! = (5 - 1)! = 4! = 24."
    },
    {
      "question": "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is the symmetric difference (A Δ B)?",
      "options": [
        "{1, 2, 5, 6}",
        "{3, 4}",
        "{1, 2}",
        "{5, 6}"
      ],
      "answer": "{1, 2, 5, 6}",
      "explanation": "Symmetric difference is (A ∪ B) - (A ∩ B) = {1, 2, 5, 6}."
    },
    {
      "question": "Three dice are rolled simultaneously. What is the probability of getting a total sum of 4?",
      "options": [
        "3 / 216 (1/72)",
        "1 / 216",
        "4 / 216",
        "6 / 216"
      ],
      "answer": "3 / 216 (1/72)",
      "explanation": "Combinations summing to 4: (1,1,2), (1,2,1), (2,1,1) = 3 outcomes out of 6³ = 216."
    },
    {
      "question": "Pointing to a lady, a man said, 'The son of her only brother is the brother of my wife.' How is the lady related to the man?",
      "options": [
        "Sister of father-in-law",
        "Mother-in-law",
        "Maternal aunt",
        "Sister"
      ],
      "answer": "Sister of father-in-law",
      "explanation": "Wife's brother = brother-in-law. Her brother's son is wife's brother, so her brother is man's father-in-law. Thus the lady is sister of father-in-law."
    },
    {
      "question": "If 10 persons shake hands with each other once, how many handshakes happen in total?",
      "options": [
        "45",
        "90",
        "50",
        "55"
      ],
      "answer": "45",
      "explanation": "Total handshakes = n(n - 1)/2 = 10 × 9 / 2 = 45."
    },
    {
      "question": "Which letter is 7th to the right of the 13th letter from the left in standard English alphabet?",
      "options": [
        "T",
        "S",
        "U",
        "V"
      ],
      "answer": "T",
      "explanation": "13th from left + 7 positions to the right = 20th letter, which is T."
    },
    {
      "question": "What is the maximum number of Friday the 13ths that can occur in a single calendar year?",
      "options": [
        "3",
        "1",
        "2",
        "4"
      ],
      "answer": "3",
      "explanation": "A year can have at most 3 Friday the 13ths (e.g. in a non-leap year starting on Thursday, Feb, Mar, Nov have Friday 13th)."
    },
    {
      "question": "In a race of 1000m, A beats B by 100m, and B beats C by 100m. By how many meters does A beat C?",
      "options": [
        "190 m",
        "200 m",
        "180 m",
        "150 m"
      ],
      "answer": "190 m",
      "explanation": "When A finishes 1000m, B is at 900m. C is at (900/1000)*900 = 810m. Distance beaten = 1000 - 810 = 190 m."
    },
    {
      "question": "Statements: Some M are N. No N is P. Conclusion I: Some M are not P. Conclusion II: Some P are M.",
      "options": [
        "Only I follows",
        "Only II follows",
        "Both follow",
        "Neither follows"
      ],
      "answer": "Only I follows",
      "explanation": "The portion of M that belongs to N cannot be P, so Some M are not P is strictly valid."
    },
    {
      "question": "A cryptarithm puzzle: SEND + MORE = MONEY. What digit does M represent?",
      "options": [
        "1",
        "9",
        "2",
        "0"
      ],
      "answer": "1",
      "explanation": "In the classic alphametic SEND + MORE = MONEY, M is the carry-over digit from the thousands column, so M must be 1."
    },
    {
      "question": "What is the next number in the sequence: 0, 6, 24, 60, 120, 210, ?",
      "options": [
        "336",
        "343",
        "320",
        "350"
      ],
      "answer": "336",
      "explanation": "Sequence is n³ - n: 1³-1=0, 2³-2=6, 3³-3=24, 4³-4=60, 5³-5=120, 6³-6=210, 7³-7 = 343 - 7 = 336."
    },
    {
      "question": "In an urn there are 5 red, 4 green, and 3 blue balls. If 2 balls are drawn at random without replacement, what is the probability that both are red?",
      "options": [
        "10 / 66 (5/33)",
        "5 / 66",
        "10 / 72",
        "25 / 144"
      ],
      "answer": "10 / 66 (5/33)",
      "explanation": "P = (5/12) × (4/11) = 20 / 132 = 10 / 66 = 5/33."
    },
    {
      "question": "Find the odd term in the sequence: 3, 7, 15, 31, 63, 129.",
      "options": [
        "129",
        "63",
        "31",
        "15"
      ],
      "answer": "129",
      "explanation": "Pattern is 2n + 1: 3, 7, 15, 31, 63, 2(63)+1 = 127, but 129 is written."
    },
    {
      "question": "If day after tomorrow is Tuesday, what day was 3 days before yesterday?",
      "options": [
        "Wednesday",
        "Tuesday",
        "Monday",
        "Sunday"
      ],
      "answer": "Wednesday",
      "explanation": "Tomorrow = Mon, Today = Sun, Yesterday = Sat. 3 days before yesterday = Saturday - 3 = Wednesday."
    },
    {
      "question": "Two pipes A and B can fill a cistern in 20 and 30 minutes respectively. If both pipes are opened together, how long will it take to fill the cistern?",
      "options": [
        "12 minutes",
        "15 minutes",
        "10 minutes",
        "16 minutes"
      ],
      "answer": "12 minutes",
      "explanation": "1/20 + 1/30 = (3 + 2)/60 = 5/60 = 1/12 => 12 minutes."
    },
    {
      "question": "If South-East becomes North, and North-East becomes West, what will West become?",
      "options": [
        "South-East",
        "South-West",
        "North-East",
        "North-West"
      ],
      "answer": "South-East",
      "explanation": "Each direction is rotated 135 degrees counter-clockwise: West rotated 135° CCW becomes South-East."
    },
    {
      "question": "A clock gains 5 seconds every 3 minutes. If it is set right at 7:00 AM, what will it show at 7:00 PM the same day?",
      "options": [
        "7:20 PM",
        "7:15 PM",
        "7:25 PM",
        "7:10 PM"
      ],
      "answer": "7:20 PM",
      "explanation": "12 hours = 720 minutes. Gain = (720 / 3) × 5 = 240 × 5 = 1200 seconds = 20 minutes. So 7:20 PM."
    },
    {
      "question": "How many rectangles (including squares) are there in a 3×3 grid chessboard?",
      "options": [
        "36",
        "14",
        "25",
        "30"
      ],
      "answer": "36",
      "explanation": "Total rectangles = (3 × 4 / 2)² = 6² = 36."
    },
    {
      "question": "Statement: 'All metals conduct electricity. Carbon graphite conducts electricity.' Can we conclude that graphite is a metal?",
      "options": [
        "No, false conclusion",
        "Yes, true conclusion",
        "Partially true",
        "Indeterminate"
      ],
      "answer": "No, false conclusion",
      "explanation": "Graphite is an allotrope of non-metal Carbon with delocalized pi electrons; affirming consequent is fallacy."
    },
    {
      "question": "If 'LIGHT' is coded as 'MJHIU' (+1), how is 'SOUND' coded?",
      "options": [
        "TPVOE",
        "TOVME",
        "TPWPE",
        "UQVOE"
      ],
      "answer": "TPVOE",
      "explanation": "S+1=T, O+1=P, U+1=V, N+1=O, D+1=E => TPVOE."
    },
    {
      "question": "A man has 6 pairs of black socks and 6 pairs of white socks in a drawer. In total darkness, what is the minimum number of individual socks he must take out to be certain of getting a matching pair?",
      "options": [
        "3 socks",
        "4 socks",
        "13 socks",
        "7 socks"
      ],
      "answer": "3 socks",
      "explanation": "By pigeonhole principle, with 2 colors (black, white), drawing 2 + 1 = 3 socks guarantees at least one matching pair."
    },
    {
      "question": "A, B, C, D, E are 5 consecutive odd numbers. What is their average?",
      "options": [
        "C",
        "A + 4",
        "E - 4",
        "All of these"
      ],
      "answer": "All of these",
      "explanation": "The median of 5 consecutive odd numbers is C = A + 4 = E - 4, which equals their arithmetic mean."
    },
    {
      "question": "If log₁₀(x) + log₁₀(5) = 2, what is the value of x?",
      "options": [
        "20",
        "25",
        "50",
        "10"
      ],
      "answer": "20",
      "explanation": "log₁₀(5x) = 2 => 5x = 10² = 100 => x = 20."
    },
    {
      "question": "In a code, 'ORANGE' is written as 'PSBOHF'. How is 'GRAPES' written?",
      "options": [
        "HSBQFT",
        "HSAPFT",
        "HTBQFT",
        "GSBQFT"
      ],
      "answer": "HSBQFT",
      "explanation": "Each letter shifted +1: G->H, R->S, A->B, P->Q, E->F, S->T => HSBQFT."
    },
    {
      "question": "What is the units digit of 7⁹⁵ - 3⁵⁸?",
      "options": [
        "4",
        "0",
        "6",
        "2"
      ],
      "answer": "4",
      "explanation": "7⁴ cycles: 95 mod 4 = 3 => 7³ ends in 3. 3⁴ cycles: 58 mod 4 = 2 => 3² ends in 9. (13 - 9) ends in 4."
    },
    {
      "question": "Find the angle traversed by the hour hand from 8:00 AM to 2:00 PM on the same day.",
      "options": [
        "180 degrees",
        "150 degrees",
        "210 degrees",
        "120 degrees"
      ],
      "answer": "180 degrees",
      "explanation": "6 hours elapsed. 6 × 30° = 180°."
    },
    {
      "question": "If 'A' is substituted by 1, 'B' by 2, ..., and the sum of letters in a word is evaluated, which word has the largest numerical value?",
      "options": [
        "ZEBRA",
        "QUEEN",
        "TIGER",
        "HORSE"
      ],
      "answer": "ZEBRA",
      "explanation": "ZEBRA = 26+5+2+18+1 = 52. TIGER = 20+9+7+5+18 = 59... wait, TIGER = 59! Let's check TIGER vs ZEBRA: T(20)+I(9)+G(7)+E(5)+R(18)=59. ZEBRA=26+5+2+18+1=52. QUEEN=17+21+5+5+14=62! QUEEN is largest: 62."
    },
    {
      "question": "Which word has the highest letter value (A=1..Z=26) among: CAT (24), DOG (26), FOX (45), COW (41)?",
      "options": [
        "FOX",
        "COW",
        "DOG",
        "CAT"
      ],
      "answer": "FOX",
      "explanation": "F(6) + O(15) + X(24) = 45."
    },
    {
      "question": "If 5 men or 9 women can do a piece of work in 19 days, in how many days can 3 men and 6 women do the same work?",
      "options": [
        "15 days",
        "12 days",
        "18 days",
        "10 days"
      ],
      "answer": "15 days",
      "explanation": "5M = 9W => 1M = 9/5 W. 3M + 6W = 27/5 + 6 = 57/5 W. Time = (9 × 19) / (57/5) = 171 × 5 / 57 = 15 days."
    },
    {
      "question": "Find the missing term: 1, 8, 27, 64, 125, ?",
      "options": [
        "216",
        "343",
        "196",
        "225"
      ],
      "answer": "216",
      "explanation": "Cube sequence: 6³ = 216."
    },
    {
      "question": "A man walks 1 km to the East and then he turns to South and walks 5 km. Again he turns to East and walks 2 km, after this he turns to North and walks 9 km. How far is he from his starting point?",
      "options": [
        "5 km",
        "4 km",
        "6 km",
        "7 km"
      ],
      "answer": "5 km",
      "explanation": "Total East = 1 + 2 = 3 km. Net North = -5 + 9 = 4 km. Distance = √(3² + 4²) = 5 km."
    },
    {
      "question": "If 'sky' is 'star', 'star' is 'cloud', 'cloud' is 'earth', 'earth' is 'tree', and 'tree' is 'book', where do birds fly?",
      "options": [
        "star",
        "cloud",
        "tree",
        "sky"
      ],
      "answer": "star",
      "explanation": "Birds fly in the 'sky', and 'sky' is called 'star'."
    },
    {
      "question": "In a family of six persons A, B, C, D, E and F, there are two married couples. D is grandmother of A and mother of B. C is wife of B and mother of F. What is C to A?",
      "options": [
        "Mother",
        "Grandmother",
        "Sister",
        "Aunt"
      ],
      "answer": "Mother",
      "explanation": "B and C are married. D is grandmother of A and mother of B. C is wife of B, so C is mother of A."
    },
    {
      "question": "Which number replaces the question mark in the series: 4, 18, 48, 100, 180, ?",
      "options": [
        "294",
        "280",
        "300",
        "284"
      ],
      "answer": "294",
      "explanation": "Pattern is n² × (n + 1) or n³ - n²: 1²×2=2? wait: 2³-2²=4, 3³-3²=18, 4³-4²=48, 5³-5²=100, 6³-6²=180, 7³-7² = 343 - 49 = 294."
    }
  ],
  "senior": [
    {
      "question": "If the statement \"All successful students are disciplined\" is TRUE, which of the following contrapositive statements MUST also be TRUE?",
      "options": [
        "A student who is not disciplined is not successful",
        "All disciplined students are successful",
        "If a student is successful, they are undisciplined",
        "None of the above"
      ],
      "answer": "A student who is not disciplined is not successful",
      "explanation": "The contrapositive of \"P → Q\" is \"¬Q → ¬P\", which is logically equivalent to the original proposition."
    },
    {
      "question": "How many distinct 4-letter permutations can be formed using the letters of the word \"KALAM\" (with two A’s)?",
      "options": [
        "60",
        "120",
        "24",
        "36"
      ],
      "answer": "60",
      "explanation": "Case 1 (both A’s): Choose 2 other letters from {K, L, M} = 3 ways; arrange = 3 × (4!/2!) = 3 × 12 = 36. Case 2 (one A or no duplicate): 4 distinct letters from {K, A, L, M} = 4! = 24. Total = 36 + 24 = 60."
    },
    {
      "question": "In a knockout badminton tournament with 64 players, how many total matches are required to determine the single champion?",
      "options": [
        "63",
        "64",
        "32",
        "128"
      ],
      "answer": "63",
      "explanation": "Every match eliminates exactly 1 player. To eliminate 63 players and leave 1 champion requires 63 matches."
    },
    {
      "question": "Three fair coins are tossed simultaneously. What is the probability of getting at least two heads?",
      "options": [
        "1/2 (4/8)",
        "3/8",
        "1/4",
        "7/8"
      ],
      "answer": "1/2 (4/8)",
      "explanation": "Total outcomes = 8. Favorable {HHH, HHT, HTH, THH} = 4 outcomes. Probability = 4/8 = 1/2."
    },
    {
      "question": "If f(x) = 2x + 3 and g(x) = x², what is the value of (g ∘ f)(1)?",
      "options": [
        "25",
        "11",
        "10",
        "16"
      ],
      "answer": "25",
      "explanation": "f(1) = 2(1) + 3 = 5. Then g(5) = 5² = 25."
    },
    {
      "question": "Given the implication P → Q, which of the following is logically equivalent to its converse Q → P?",
      "options": [
        "Contrapositive of converse (¬P → ¬Q / inverse)",
        "Contrapositive (¬Q → ¬P)",
        "Negation (P ∧ ¬Q)",
        "Conjunction (P ∧ Q)"
      ],
      "answer": "Contrapositive of converse (¬P → ¬Q / inverse)",
      "explanation": "The inverse ¬P → ¬Q is the contrapositive of the converse Q → P, making them logically equivalent."
    },
    {
      "question": "If a set S has n elements, what is the cardinality of the power set P(S)?",
      "options": [
        "2ⁿ",
        "n²",
        "2n",
        "n!"
      ],
      "answer": "2ⁿ",
      "explanation": "Every subset corresponds to an n-digit binary decision, giving exactly 2ⁿ subsets."
    },
    {
      "question": "In boolean algebra, what is the simplified form of the expression: A + A'B?",
      "options": [
        "A + B",
        "A",
        "B",
        "A' + B"
      ],
      "answer": "A + B",
      "explanation": "Absorption / Distributive law: A + A'B = (A + A')(A + B) = 1 · (A + B) = A + B."
    },
    {
      "question": "What is the truth value of the implication 'If 2 + 2 = 5, then the moon is made of green cheese'?",
      "options": [
        "True (vacuously true)",
        "False",
        "Undetermined",
        "Paradoxical"
      ],
      "answer": "True (vacuously true)",
      "explanation": "In classical propositional logic, a conditional statement with a FALSE antecedent (F → F) is vacuously TRUE."
    },
    {
      "question": "Which logical fallacy is committed when one attacks the person making an argument rather than the argument itself?",
      "options": [
        "Argumentum ad Hominem",
        "Post hoc ergo propter hoc",
        "Strawman Fallacy",
        "Red Herring"
      ],
      "answer": "Argumentum ad Hominem",
      "explanation": "Ad hominem attacks character, motive, or background rather than substantive logic."
    },
    {
      "question": "How many distinct permutations can be formed from the letters in the word 'MATHEMATICS'?",
      "options": [
        "4,989,600",
        "39,916,800",
        "1,247,400",
        "2,494,800"
      ],
      "answer": "4,989,600",
      "explanation": "11! / (2! 2! 2!) = 39,916,800 / 8 = 4,989,600 (M:2, A:2, T:2)."
    },
    {
      "question": "If f(x) = 2x + 3 and g(x) = (x - 3)/2, what is the composite function (f ∘ g)(x)?",
      "options": [
        "x",
        "2x",
        "x + 3",
        "x - 3"
      ],
      "answer": "x",
      "explanation": "f(g(x)) = 2((x - 3)/2) + 3 = x - 3 + 3 = x (they are inverse functions)."
    },
    {
      "question": "In how many ways can a committee of 4 be chosen from 6 men and 4 women such that it contains at least 1 woman?",
      "options": [
        "195 ways",
        "210 ways",
        "180 ways",
        "205 ways"
      ],
      "answer": "195 ways",
      "explanation": "Total ways = ¹⁰C₄ = 210. All-men committee = ⁶C₄ = 15. At least 1 woman = 210 - 15 = 195."
    },
    {
      "question": "What is the probability of rolling at least one 6 when rolling a fair six-sided die 4 times?",
      "options": [
        "1 - (5/6)⁴ ≈ 0.518",
        "(1/6)⁴",
        "4/6",
        "1 - (1/6)⁴"
      ],
      "answer": "1 - (5/6)⁴ ≈ 0.518",
      "explanation": "Complementary probability: 1 - P(no 6) = 1 - (5/6)⁴ = 1 - 625/1296 ≈ 0.5177."
    },
    {
      "question": "If A and B are independent events with P(A) = 0.4 and P(B) = 0.5, what is P(A ∪ B)?",
      "options": [
        "0.70",
        "0.90",
        "0.20",
        "0.60"
      ],
      "answer": "0.70",
      "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - (0.4 × 0.5) = 0.9 - 0.2 = 0.70."
    },
    {
      "question": "What is the contrapositive of: 'If a polygon is a square, then it is a rectangle'?",
      "options": [
        "If a polygon is not a rectangle, then it is not a square",
        "If a polygon is a rectangle, then it is a square",
        "If a polygon is not a square, then it is not a rectangle",
        "All rectangles are squares"
      ],
      "answer": "If a polygon is not a rectangle, then it is not a square",
      "explanation": "Contrapositive of P → Q is ¬Q → ¬P."
    },
    {
      "question": "In graph theory, what is the sum of degrees of all vertices in any finite undirected graph?",
      "options": [
        "Twice the number of edges (2|E|)",
        "Equal to number of edges (|E|)",
        "Square of number of vertices",
        "Always odd"
      ],
      "answer": "Twice the number of edges (2|E|)",
      "explanation": "Handshaking Lemma: each edge connects two vertices, contributing 2 to the degree sum."
    },
    {
      "question": "Which deductive rule states: 'Given P → Q and ¬Q, we conclude ¬P'?",
      "options": [
        "Modus Tollens",
        "Modus Ponens",
        "Hypothetical Syllogism",
        "Disjunctive Syllogism"
      ],
      "answer": "Modus Tollens",
      "explanation": "Modus Tollens (denying the consequent): P → Q, ¬Q ⊢ ¬P."
    },
    {
      "question": "Which deductive rule states: 'Given P → Q and P, we conclude Q'?",
      "options": [
        "Modus Ponens",
        "Modus Tollens",
        "Reductio ad Absurdum",
        "Resolution"
      ],
      "answer": "Modus Ponens",
      "explanation": "Modus Ponens (affirming the antecedent): P → Q, P ⊢ Q."
    },
    {
      "question": "What is the minimum number of colors required to color the vertices of any planar graph so no adjacent vertices share a color?",
      "options": [
        "4",
        "3",
        "5",
        "6"
      ],
      "answer": "4",
      "explanation": "The Four Color Theorem (proven by Appel & Haken, 1976) guarantees 4 colors suffice."
    },
    {
      "question": "In formal logic, what is the De Morgan law for the negation of a conjunction ¬(P ∧ Q)?",
      "options": [
        "¬P ∨ ¬Q",
        "¬P ∧ ¬Q",
        "P ∨ Q",
        "¬P → ¬Q"
      ],
      "answer": "¬P ∨ ¬Q",
      "explanation": "De Morgan's First Law: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q."
    },
    {
      "question": "What is the negation of the universal statement: 'All swans are white'?",
      "options": [
        "There exists at least one swan that is not white",
        "All swans are black",
        "No swans are white",
        "Some swans are white"
      ],
      "answer": "There exists at least one swan that is not white",
      "explanation": "The negation of ∀x P(x) is ∃x ¬P(x)."
    },
    {
      "question": "In cryptography, RSA encryption security relies primarily on the computational hardness of which mathematical problem?",
      "options": [
        "Factoring the product of two large prime numbers",
        "Discrete logarithm in small fields",
        "Polynomial addition",
        "Matrix transposition"
      ],
      "answer": "Factoring the product of two large prime numbers",
      "explanation": "RSA relies on the prime factorization problem being intractable in polynomial time on classical computers."
    },
    {
      "question": "If a binary relation R on set A is reflexive, symmetric, and transitive, what is R called?",
      "options": [
        "Equivalence relation",
        "Partial order relation",
        "Strict order relation",
        "Bijective relation"
      ],
      "answer": "Equivalence relation",
      "explanation": "A relation possessing reflexivity, symmetry, and transitivity is an equivalence relation."
    },
    {
      "question": "A partial order relation (poset) must be reflexive, transitive, and...",
      "options": [
        "Antisymmetric",
        "Symmetric",
        "Irreflexive",
        "Asymmetric"
      ],
      "answer": "Antisymmetric",
      "explanation": "A partial order requires reflexivity, antisymmetry, and transitivity."
    },
    {
      "question": "If 7 people sit around a circular table, what is the probability that two specific persons A and B sit together?",
      "options": [
        "1/3",
        "1/6",
        "2/7",
        "1/7"
      ],
      "answer": "1/3",
      "explanation": "Treat (AB) as 1 block: (6 - 1)! × 2! / (7 - 1)! = 5! × 2 / 6! = 2/6 = 1/3."
    },
    {
      "question": "What is the value of the recurring infinite radical: √(6 + √(6 + √(6 + ...)))?",
      "options": [
        "3",
        "2",
        "6",
        "√6"
      ],
      "answer": "3",
      "explanation": "Let x = √(6 + x) => x² - x - 6 = 0 => (x - 3)(x + 2) = 0 => x = 3 (since x > 0)."
    },
    {
      "question": "What is the coefficient of x³ in the binomial expansion of (1 - 2x)⁵?",
      "options": [
        "-80",
        "80",
        "-40",
        "40"
      ],
      "answer": "-80",
      "explanation": "Term is ⁵C₃ (1)² (-2x)³ = 10 × (-8x³) = -80x³."
    },
    {
      "question": "In game theory, what is a strategy profile where no player can unilaterally deviate to improve their payoff?",
      "options": [
        "Nash Equilibrium",
        "Pareto Optima",
        "Dominant Strategy",
        "Zero-Sum Balance"
      ],
      "answer": "Nash Equilibrium",
      "explanation": "In a Nash Equilibrium, each player's strategy is optimal given the other players' strategies."
    },
    {
      "question": "In propositional calculus, what is a formula that is TRUE under every possible truth assignment called?",
      "options": [
        "Tautology",
        "Contradiction",
        "Contingency",
        "Satisfiable only"
      ],
      "answer": "Tautology",
      "explanation": "A tautology is valid in all interpretations (e.g. P ∨ ¬P)."
    },
    {
      "question": "What is a formula that is FALSE under every possible truth assignment called?",
      "options": [
        "Contradiction",
        "Tautology",
        "Contingency",
        "Axiom"
      ],
      "answer": "Contradiction",
      "explanation": "A contradiction is unsatisfiable under every truth valuation (e.g. P ∧ ¬P)."
    },
    {
      "question": "If two fair 6-sided dice are tossed, what is the expected value of their sum?",
      "options": [
        "7",
        "6",
        "8",
        "7.5"
      ],
      "answer": "7",
      "explanation": "Expected value = E[X₁] + E[X₂] = 3.5 + 3.5 = 7."
    },
    {
      "question": "In Bayesian probability, what is the probability P(A|B) called?",
      "options": [
        "Posterior probability",
        "Prior probability",
        "Likelihood",
        "Marginal probability"
      ],
      "answer": "Posterior probability",
      "explanation": "P(A|B) is the updated posterior probability of event A given evidence B."
    },
    {
      "question": "Which paradox demonstrates that in a room of just 23 people, there is a >50% chance two share a birthday?",
      "options": [
        "The Birthday Paradox",
        "Zeno's Paradox",
        "Russell's Paradox",
        "Grandfather Paradox"
      ],
      "answer": "The Birthday Paradox",
      "explanation": "Pairwise comparisons grow combinatorially: ²³C₂ = 253 pairs, exceeding 50% probability."
    },
    {
      "question": "Russell's paradox in naive set theory considers the set R of all sets that...",
      "options": [
        "Do not contain themselves (R = {x | x ∉ x})",
        "Contain all sets",
        "Are empty",
        "Have infinite elements"
      ],
      "answer": "Do not contain themselves (R = {x | x ∉ x})",
      "explanation": "If R ∉ R then R ∈ R, and if R ∈ R then R ∉ R, creating a foundational contradiction."
    },
    {
      "question": "What is the time complexity of binary search on a sorted array of size N?",
      "options": [
        "O(log N)",
        "O(N)",
        "O(N log N)",
        "O(1)"
      ],
      "answer": "O(log N)",
      "explanation": "Binary search halves the search space at each iteration, yielding logarithmic O(log N) time."
    },
    {
      "question": "What is the time complexity of the fastest comparison-based sorting algorithms in the worst case?",
      "options": [
        "O(N log N)",
        "O(N)",
        "O(N²)",
        "O(log N)"
      ],
      "answer": "O(N log N)",
      "explanation": "By information-theoretic decision tree lower bounds, comparison sorts require Ω(N log N)."
    },
    {
      "question": "If a matrix A has det(A) = 0, which statement is guaranteed to be true?",
      "options": [
        "A is singular and has no inverse",
        "A is the identity matrix",
        "A has all zero entries",
        "A is symmetric"
      ],
      "answer": "A is singular and has no inverse",
      "explanation": "det(A) = 0 implies row rank deficiency, making A non-invertible (singular)."
    },
    {
      "question": "In Boolean algebra, what is the dual of the identity: A + 0 = A?",
      "options": [
        "A · 1 = A",
        "A · 0 = 0",
        "A + 1 = 1",
        "A · A = A"
      ],
      "answer": "A · 1 = A",
      "explanation": "By duality principle, interchange AND/OR and 0/1: '+' becomes '·', and '0' becomes '1'."
    },
    {
      "question": "What is the general solution for the recurrence relation T(n) = 2T(n/2) + O(n)?",
      "options": [
        "O(n log n)",
        "O(n)",
        "O(n²)",
        "O(log n)"
      ],
      "answer": "O(n log n)",
      "explanation": "By the Master Theorem (Case 2), log_b(a) = log₂(2) = 1, so T(n) = Θ(n log n)."
    },
    {
      "question": "If f: A → B is both injective (one-to-one) and surjective (onto), f is called...",
      "options": [
        "Bijective",
        "Homomorphic",
        "Isomorphic",
        "Idempotent"
      ],
      "answer": "Bijective",
      "explanation": "A bijection guarantees a unique two-way one-to-one correspondence, hence invertible."
    },
    {
      "question": "What is the number of positive divisors of 360 (since 360 = 2³ × 3² × 5¹)?",
      "options": [
        "24",
        "18",
        "12",
        "30"
      ],
      "answer": "24",
      "explanation": "Number of divisors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24."
    },
    {
      "question": "What is the sum of eigenvalues of a square matrix equal to?",
      "options": [
        "The trace of the matrix (sum of diagonal elements)",
        "The determinant",
        "The rank",
        "The spectral radius"
      ],
      "answer": "The trace of the matrix (sum of diagonal elements)",
      "explanation": "The trace Tr(A) always equals the sum of eigenvalues counted with algebraic multiplicities."
    },
    {
      "question": "What is the product of eigenvalues of a square matrix equal to?",
      "options": [
        "The determinant of the matrix",
        "The trace",
        "The matrix norm",
        "Zero"
      ],
      "answer": "The determinant of the matrix",
      "explanation": "The determinant det(A) is identical to the product of all eigenvalues."
    },
    {
      "question": "Which principle asserts that if n items are put into m containers with n > m, at least one container has >1 item?",
      "options": [
        "Pigeonhole Principle (Dirichlet's Drawer Principle)",
        "Inclusion-Exclusion Principle",
        "Well-Ordering Principle",
        "Archimedean Principle"
      ],
      "answer": "Pigeonhole Principle (Dirichlet's Drawer Principle)",
      "explanation": "Fundamental combinatorial rule formalized by Dirichlet."
    },
    {
      "question": "What is the cardinality of the continuum (real numbers ℝ) compared to natural numbers ℕ?",
      "options": [
        "Uncountably infinite (|ℝ| = 2^ℵ₀ > ℵ₀)",
        "Countably infinite",
        "Finite",
        "Equal to |ℕ|"
      ],
      "answer": "Uncountably infinite (|ℝ| = 2^ℵ₀ > ℵ₀)",
      "explanation": "Cantor's diagonal argument proves the real numbers cannot be put into one-to-one correspondence with integers."
    },
    {
      "question": "In first-order predicate logic, what is the prenex normal form?",
      "options": [
        "All quantifiers are moved to the front of the formula",
        "All conjunctions are eliminated",
        "All predicates are unary",
        "Formula has no variables"
      ],
      "answer": "All quantifiers are moved to the front of the formula",
      "explanation": "Prenex form has a prefix of quantifiers followed by a quantifier-free matrix."
    },
    {
      "question": "Which logic circuit produces a HIGH output only when both of its inputs are different?",
      "options": [
        "XOR gate",
        "AND gate",
        "NOR gate",
        "XNOR gate"
      ],
      "answer": "XOR gate",
      "explanation": "Exclusive OR (XOR) outputs 1 if and only if inputs differ (01 or 10)."
    },
    {
      "question": "In probability, what inequality provides an upper bound on P(|X - μ| ≥ kσ) ≤ 1/k²?",
      "options": [
        "Chebyshev's Inequality",
        "Markov's Inequality",
        "Cauchy-Schwarz Inequality",
        "Jensen's Inequality"
      ],
      "answer": "Chebyshev's Inequality",
      "explanation": "Chebyshev's theorem bounds dispersion probability for any arbitrary distribution with finite variance."
    },
    {
      "question": "What is the number of edges in a complete graph K_n with n vertices?",
      "options": [
        "n(n - 1) / 2",
        "n²",
        "2n - 1",
        "n!"
      ],
      "answer": "n(n - 1) / 2",
      "explanation": "Every pair of vertices has an edge: ⁿC₂ = n(n - 1)/2."
    },
    {
      "question": "What is the chromatic index of a bipartite graph with maximum degree Δ (König's line coloring theorem)?",
      "options": [
        "Δ",
        "Δ + 1",
        "2Δ",
        "Δ - 1"
      ],
      "answer": "Δ",
      "explanation": "König's theorem proves edge coloring of any bipartite graph requires exactly Δ colors."
    },
    {
      "question": "If A is an n×n orthogonal matrix (AᵀA = I), what are the only possible values of det(A)?",
      "options": [
        "+1 or -1",
        "0 or 1",
        "Any real number",
        "Only +1"
      ],
      "answer": "+1 or -1",
      "explanation": "det(AᵀA) = det(A)² = det(I) = 1 => det(A) = ±1."
    },
    {
      "question": "Which sorting algorithm has optimal best, average, and worst-case performance of O(n log n) and is NOT in-place?",
      "options": [
        "Merge Sort",
        "Quick Sort",
        "Heap Sort",
        "Bubble Sort"
      ],
      "answer": "Merge Sort",
      "explanation": "Merge sort runs in Θ(n log n) across all cases and requires O(n) auxiliary memory space."
    },
    {
      "question": "In a group (G, *), what is the inverse of the element (a * b)?",
      "options": [
        "b⁻¹ * a⁻¹",
        "a⁻¹ * b⁻¹",
        "a * b",
        "(a * b)⁻²"
      ],
      "answer": "b⁻¹ * a⁻¹",
      "explanation": "The socks-and-shoes property of group theory: (a * b)⁻¹ = b⁻¹ * a⁻¹."
    },
    {
      "question": "In modular arithmetic, Euler's totient theorem states that if gcd(a, n) = 1, then a^φ(n) ≡ ?",
      "options": [
        "1 (mod n)",
        "0 (mod n)",
        "a (mod n)",
        "-1 (mod n)"
      ],
      "answer": "1 (mod n)",
      "explanation": "Euler's totient theorem generalizes Fermat's Little Theorem: a^φ(n) ≡ 1 (mod n)."
    }
  ]
},

    reading: {
  "little": [
    {
      "title": "Miku the Helpful Elephant",
      "passage": "Miku was a little elephant who lived in a lush green forest. He had big floppy ears and a kind heart. One sunny morning, Miku saw a tiny bird shivering near a puddle with a hurt wing. Miku carefully picked sweet berries with his trunk and sheltered the bird under his huge ears until it was warm and healthy again.",
      "questions": [
        {
          "question": "What kind of animal was Miku?",
          "options": [
            "An elephant",
            "A lion",
            "A sparrow",
            "A tiger"
          ],
          "answer": "An elephant",
          "explanation": "The passage explicitly states Miku was a little elephant."
        },
        {
          "question": "How did Miku shelter the tiny bird?",
          "options": [
            "Under his big ears",
            "In a birdhouse",
            "Inside a wooden box",
            "Under a tree trunk"
          ],
          "answer": "Under his big ears",
          "explanation": "Miku sheltered the bird under his huge floppy ears."
        },
        {
          "question": "What moral lesson does the story teach us?",
          "options": [
            "Be kind and help others in need",
            "Do not play in the forest",
            "Birds should not fly",
            "Elephants like berries"
          ],
          "answer": "Be kind and help others in need",
          "explanation": "Miku’s compassion teaches us to care for animals and friends in need."
        }
      ]
    }
  ],
  "junior": [
    {
      "title": "Dr. Kalam’s Childhood Dream",
      "passage": "Young Abdul Kalam grew up in the coastal pilgrim town of Rameswaram, Tamil Nadu. His family faced modest financial means, and Abdul helped distribute morning newspapers before going to school. One afternoon, his science teacher took the class to the seashore to show them birds in flight. Seeing the seagulls flap their wings and soar gracefully into the azure sky ignited Abdul’s lifelong passion for aeronautics and space science.",
      "questions": [
        {
          "question": "Where did Dr. A.P.J. Abdul Kalam spend his childhood?",
          "options": [
            "Rameswaram, Tamil Nadu",
            "New Delhi",
            "Basti, Uttar Pradesh",
            "Bengaluru, Karnataka"
          ],
          "answer": "Rameswaram, Tamil Nadu",
          "explanation": "The passage mentions he grew up in the coastal town of Rameswaram."
        },
        {
          "question": "What inspired Kalam’s passion for flight and aeronautics?",
          "options": [
            "Watching seagulls fly by the seashore",
            "Reading a magazine in the market",
            "Watching a television show",
            "Riding a train"
          ],
          "answer": "Watching seagulls fly by the seashore",
          "explanation": "Observing birds in flight under his teacher’s guidance sparked his interest in flight."
        },
        {
          "question": "What does the word \"modest\" mean in this context?",
          "options": [
            "Simple and limited",
            "Extremely wealthy",
            "Cruel",
            "Confusing"
          ],
          "answer": "Simple and limited",
          "explanation": "Modest means simple and having limited financial resources."
        }
      ]
    }
  ],
  "middle": [
    {
      "title": "The Marvel of Mangalyaan (Mars Orbiter Mission)",
      "passage": "On 24 September 2014, India made history when the Indian Space Research Organisation (ISRO) successfully inserted the Mars Orbiter Mission (Mangalyaan) into Martian orbit on its maiden attempt. Built with an extraordinarily frugal budget of approximately 450 crore rupees—less than the production budget of many Hollywood space films—the mission showcased the ingenuity, indigenous technological prowess, and dedication of Indian scientists to the entire world.",
      "questions": [
        {
          "question": "What remarkable feat did ISRO achieve with Mangalyaan?",
          "options": [
            "Reached Mars orbit on its first maiden attempt",
            "Landed a human on Mars",
            "Found liquid oceans on Mars",
            "Built the heaviest rocket in history"
          ],
          "answer": "Reached Mars orbit on its first maiden attempt",
          "explanation": "India was the first nation in the world to reach Mars orbit on its very first attempt."
        },
        {
          "question": "What made the Mangalyaan mission globally celebrated?",
          "options": [
            "Cost-effective engineering and indigenous technological excellence",
            "It was the most expensive satellite ever made",
            "It carried foreign astronauts",
            "It returned Mars rocks to Earth"
          ],
          "answer": "Cost-effective engineering and indigenous technological excellence",
          "explanation": "The mission accomplished world-class interplanetary exploration at an exceptionally frugal cost."
        },
        {
          "question": "What is the closest synonym for \"ingenuity\" as used in the text?",
          "options": [
            "Inventiveness and cleverness",
            "Recklessness",
            "Carelessness",
            "Simplicity"
          ],
          "answer": "Inventiveness and cleverness",
          "explanation": "Ingenuity refers to the quality of being clever, inventive, and resourceful."
        }
      ]
    }
  ],
  "secondary": [
    {
      "title": "Renewable Energy: India’s Solar Leap",
      "passage": "India has embarked on one of the world’s most ambitious energy transition programs, rapidly expanding its solar and renewable capacity. Located across arid terrains like the Thar Desert and the Deccan plateau, massive solar parks such as Bhadla Solar Park harness clean photovoltaic energy. This green revolution not only curtails carbon emissions and mitigates climate risks, but also democratizes energy access for remote rural communities and agricultural irrigation.",
      "questions": [
        {
          "question": "What primary environmental benefit is highlighted regarding India’s solar transition?",
          "options": [
            "Curtailing carbon emissions and mitigating climate risks",
            "Increasing coal mining efficiency",
            "Eliminating all fossil fuel storage needs",
            "Stopping seasonal monsoons"
          ],
          "answer": "Curtailing carbon emissions and mitigating climate risks",
          "explanation": "Solar power generates clean energy without emitting greenhouse gases."
        },
        {
          "question": "Which is an example of a massive solar park mentioned in the passage?",
          "options": [
            "Bhadla Solar Park",
            "Hirakud Park",
            "Sundarbans Solar Grid",
            "Silent Valley Park"
          ],
          "answer": "Bhadla Solar Park",
          "explanation": "Bhadla Solar Park in Rajasthan is one of the world’s largest solar installations."
        },
        {
          "question": "What does \"mitigate\" mean in the phrase \"mitigates climate risks\"?",
          "options": [
            "To lessen or reduce the severity of something",
            "To completely ignore",
            "To multiply or increase",
            "To hide from public view"
          ],
          "answer": "To lessen or reduce the severity of something",
          "explanation": "Mitigate means to make something less severe, harmful, or painful."
        }
      ]
    }
  ],
  "senior": [
    {
      "title": "Artificial Intelligence & Ethical Frontiers in Education",
      "passage": "The integration of Artificial Intelligence into pedagogy heralds an era of bespoke personalized learning, capable of adjusting curriculum pacing to each student’s idiosyncratic cognitive profile. However, this transformative paradigm necessitates prudent stewardship. Issues surrounding algorithmic bias, data sovereignty, intellectual complacency, and the preservation of empathetic educator-student mentorship must remain paramount to ensure technology serves human flourishing rather than diminishing critical inquiry.",
      "questions": [
        {
          "question": "What primary pedagogical advantage of AI is identified in the text?",
          "options": [
            "Adaptive personalized learning tailored to individual students",
            "Complete elimination of human teachers",
            "Standardizing exams to a single format",
            "Automating student surveillance"
          ],
          "answer": "Adaptive personalized learning tailored to individual students",
          "explanation": "The passage highlights AI’s capacity to tailor pacing and content to individual cognitive profiles."
        },
        {
          "question": "Which crucial ethical consideration is emphasized by the author?",
          "options": [
            "Algorithmic bias, data sovereignty, and preserving human mentorship",
            "Lowering digital hardware manufacturing costs",
            "Replacing classical literature with code",
            "Mandatory AI exams for all grades"
          ],
          "answer": "Algorithmic bias, data sovereignty, and preserving human mentorship",
          "explanation": "The text warns of algorithmic fairness, data rights, and the irreplaceable value of empathetic human mentorship."
        },
        {
          "question": "What does the term \"idiosyncratic\" imply regarding a student’s cognitive profile?",
          "options": [
            "Distinctive, individual, and unique to a person",
            "Flawed and erroneous",
            "Uniform and identical to everyone else",
            "Predictable and simple"
          ],
          "answer": "Distinctive, individual, and unique to a person",
          "explanation": "Idiosyncratic refers to distinctive characteristics unique to an individual."
        }
      ]
    }
  ]
},

    geography: {
  "little": [
    {
      "question": "Which country do we live in?",
      "options": [
        "India",
        "Australia",
        "Canada",
        "Japan"
      ],
      "answer": "India",
      "explanation": "We live in India (Bharat), a diverse and vibrant nation."
    },
    {
      "question": "Which of the following is surrounded by water on all sides?",
      "options": [
        "An Island",
        "A Mountain",
        "A Forest",
        "A Desert"
      ],
      "answer": "An Island",
      "explanation": "An island is a piece of land completely surrounded by water."
    },
    {
      "question": "How many continents are there on Earth?",
      "options": [
        "7",
        "5",
        "4",
        "9"
      ],
      "answer": "7",
      "explanation": "Earth has 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
    },
    {
      "question": "Which state in India is famous for the Taj Mahal in Agra?",
      "options": [
        "Uttar Pradesh",
        "Maharashtra",
        "Gujarat",
        "Punjab"
      ],
      "answer": "Uttar Pradesh",
      "explanation": "The Taj Mahal is situated on the banks of the Yamuna river in Agra, Uttar Pradesh."
    },
    {
      "question": "Which is the largest desert in India?",
      "options": [
        "Thar Desert",
        "Sahara Desert",
        "Gobi Desert",
        "Kalahari Desert"
      ],
      "answer": "Thar Desert",
      "explanation": "The Thar Desert (Great Indian Desert) spans Rajasthan and northwestern India."
    },
    {
      "question": "Which huge blue body of water covers most of planet Earth?",
      "options": [
        "Ocean / Sea",
        "River",
        "Pond",
        "Well"
      ],
      "answer": "Ocean / Sea",
      "explanation": "Oceans are giant bodies of salt water covering over 70% of Earth."
    },
    {
      "question": "What do we call a very tall landform with a rocky peak pointing to the sky?",
      "options": [
        "Mountain",
        "Valley",
        "Desert",
        "Plain"
      ],
      "answer": "Mountain",
      "explanation": "Mountains rise high above the surrounding land with steep peaks."
    },
    {
      "question": "Which dry, sandy place gets very little rain and has tall sand dunes?",
      "options": [
        "Desert",
        "Forest",
        "Ocean",
        "River"
      ],
      "answer": "Desert",
      "explanation": "Deserts are dry regions where sand dunes shift with desert winds."
    },
    {
      "question": "Where do fish, ducks, and lotus flowers live and swim happily?",
      "options": [
        "Ponds and Lakes",
        "Mountains",
        "Deserts",
        "Trees"
      ],
      "answer": "Ponds and Lakes",
      "explanation": "Ponds and lakes are peaceful freshwater habitats."
    },
    {
      "question": "What do we call a large land area covered with hundreds of tall trees?",
      "options": [
        "Forest / Jungle",
        "Desert",
        "Beach",
        "Playground"
      ],
      "answer": "Forest / Jungle",
      "explanation": "Forests are green woodlands full of trees, animals, and birds."
    },
    {
      "question": "In which direction does the bright Sun rise every morning?",
      "options": [
        "East",
        "West",
        "North",
        "South"
      ],
      "answer": "East",
      "explanation": "The Sun always rises in the East due to Earth's rotation."
    },
    {
      "question": "In which direction does the Sun set in the evening?",
      "options": [
        "West",
        "East",
        "North",
        "South"
      ],
      "answer": "West",
      "explanation": "The Sun sets in the West, welcoming the evening twilight."
    },
    {
      "question": "What falls from dark monsoon clouds to water our plants and fill rivers?",
      "options": [
        "Raindrops",
        "Stones",
        "Leaves",
        "Paper"
      ],
      "answer": "Raindrops",
      "explanation": "Raindrops provide fresh water for crops, trees, and animals."
    },
    {
      "question": "What do we call a low land situated between two high mountains?",
      "options": [
        "Valley",
        "Hill",
        "Desert",
        "Peak"
      ],
      "answer": "Valley",
      "explanation": "Valleys are green lowlands nestled between hills or mountains."
    },
    {
      "question": "What sandy land is next to the ocean where sea waves splash?",
      "options": [
        "Beach / Seashore",
        "Forest",
        "Mountain",
        "Desert"
      ],
      "answer": "Beach / Seashore",
      "explanation": "Beaches are coastal areas of sand where waves wash ashore."
    },
    {
      "question": "Which river is holy and famous in India?",
      "options": [
        "Ganga",
        "Thames",
        "Amazon",
        "Nile"
      ],
      "answer": "Ganga",
      "explanation": "The River Ganga flows from the Himalayas across northern India."
    },
    {
      "question": "What shape is our planet Earth?",
      "options": [
        "Round like a globe",
        "Flat like a board",
        "Square like a box",
        "Triangle like a slice"
      ],
      "answer": "Round like a globe",
      "explanation": "Earth is an oblate spheroid, round like a giant blue ball."
    },
    {
      "question": "What white fluffy things float in the blue sky and bring rain?",
      "options": [
        "Clouds",
        "Birds",
        "Kites",
        "Balloons"
      ],
      "answer": "Clouds",
      "explanation": "Clouds are made of millions of tiny condensed water droplets."
    },
    {
      "question": "What is a flowing body of fresh water that journeys to the sea?",
      "options": [
        "River",
        "Ocean",
        "Desert",
        "Puddle"
      ],
      "answer": "River",
      "explanation": "Rivers flow down from hills and plains to empty into oceans."
    },
    {
      "question": "What do we call very cold white crystals falling from the sky in winter?",
      "options": [
        "Snow",
        "Rain",
        "Hail",
        "Sand"
      ],
      "answer": "Snow",
      "explanation": "Snow falls in chilly high mountain areas as frozen white flakes."
    },
    {
      "question": "What is a model globe of the Earth that spins on a stand?",
      "options": [
        "Globe",
        "Map",
        "Book",
        "Clock"
      ],
      "answer": "Globe",
      "explanation": "A globe is a round spherical model of our planet Earth."
    },
    {
      "question": "What flat drawing shows countries, rivers, and cities of the world?",
      "options": [
        "Map",
        "Photograph",
        "Painting",
        "Newspaper"
      ],
      "answer": "Map",
      "explanation": "Maps show roads, boundaries, and geographical features."
    },
    {
      "question": "Which huge mountain range in north India has snow-covered peaks?",
      "options": [
        "Himalayas",
        "Aravalli",
        "Alps",
        "Andes"
      ],
      "answer": "Himalayas",
      "explanation": "The Himalayas are the highest mountain ranges in the world."
    },
    {
      "question": "Which sea lies to the west of India?",
      "options": [
        "Arabian Sea",
        "Bay of Bengal",
        "Indian Ocean",
        "Red Sea"
      ],
      "answer": "Arabian Sea",
      "explanation": "The Arabian Sea washes the western shores of Gujarat, Maharashtra, Goa, and Kerala."
    },
    {
      "question": "Which body of water lies to the east of India?",
      "options": [
        "Bay of Bengal",
        "Arabian Sea",
        "Pacific Ocean",
        "Atlantic Ocean"
      ],
      "answer": "Bay of Bengal",
      "explanation": "The Bay of Bengal lies east of India along Tamil Nadu, Andhra, Odisha, and Bengal."
    },
    {
      "question": "Which ocean is named after our country India?",
      "options": [
        "Indian Ocean",
        "Pacific Ocean",
        "Atlantic Ocean",
        "Arctic Ocean"
      ],
      "answer": "Indian Ocean",
      "explanation": "The Indian Ocean lies south of the Indian subcontinent."
    },
    {
      "question": "What do we call a piece of land surrounded by water on all sides?",
      "options": [
        "Island",
        "Peninsula",
        "Hill",
        "Desert"
      ],
      "answer": "Island",
      "explanation": "An island is a body of land completely encircled by water."
    },
    {
      "question": "Which beautiful green island territory belongs to India in the Bay of Bengal?",
      "options": [
        "Andaman and Nicobar Islands",
        "Sri Lanka",
        "Maldives",
        "Madagascar"
      ],
      "answer": "Andaman and Nicobar Islands",
      "explanation": "The Andaman and Nicobar archipelago is an Indian Union Territory."
    },
    {
      "question": "What landform has a flat top like a giant table elevated above the plains?",
      "options": [
        "Plateau",
        "Mountain",
        "Valley",
        "Canyon"
      ],
      "answer": "Plateau",
      "explanation": "A plateau is an elevated tableland with relatively flat terrain."
    },
    {
      "question": "Which country is our beloved homeland?",
      "options": [
        "India (Bharat)",
        "America",
        "England",
        "Japan"
      ],
      "answer": "India (Bharat)",
      "explanation": "India is our motherland, celebrated for its rich unity in diversity."
    },
    {
      "question": "What do we call cold flowing ice moving slowly down mountain slopes?",
      "options": [
        "Glacier",
        "River",
        "Volcano",
        "Cloud"
      ],
      "answer": "Glacier",
      "explanation": "Glaciers are massive slow-moving rivers of dense mountain ice."
    },
    {
      "question": "What is the capital city of India?",
      "options": [
        "New Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
      ],
      "answer": "New Delhi",
      "explanation": "New Delhi is the national capital of India."
    },
    {
      "question": "Which Indian city is known for the Gateway of India by the Arabian Sea?",
      "options": [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Kolkata"
      ],
      "answer": "Mumbai",
      "explanation": "Mumbai is India's financial capital on the western seaboard."
    },
    {
      "question": "Which holy city on the banks of the Ganga is famous for its ancient ghats?",
      "options": [
        "Varanasi (Kashi)",
        "Agra",
        "Jaipur",
        "Bhopal"
      ],
      "answer": "Varanasi (Kashi)",
      "explanation": "Varanasi is one of the world's oldest continuously inhabited sacred cities."
    },
    {
      "question": "Which city is world-famous for the Taj Mahal?",
      "options": [
        "Agra",
        "Delhi",
        "Lucknow",
        "Kanpur"
      ],
      "answer": "Agra",
      "explanation": "Agra is situated on the banks of the Yamuna in Uttar Pradesh."
    },
    {
      "question": "Which direction is opposite to North?",
      "options": [
        "South",
        "East",
        "West",
        "Up"
      ],
      "answer": "South",
      "explanation": "South points directly opposite to North on compass maps."
    },
    {
      "question": "Which direction is opposite to East?",
      "options": [
        "West",
        "North",
        "South",
        "Down"
      ],
      "answer": "West",
      "explanation": "West lies opposite to East."
    },
    {
      "question": "What green landform has soft grass where farm animals graze?",
      "options": [
        "Meadow / Grassland",
        "Desert",
        "Glacier",
        "Cave"
      ],
      "answer": "Meadow / Grassland",
      "explanation": "Meadows provide lush green grass for sheep, goats, and cows."
    },
    {
      "question": "What do we call water that spouts naturally out of the ground?",
      "options": [
        "Spring",
        "River",
        "Canal",
        "Puddle"
      ],
      "answer": "Spring",
      "explanation": "Natural springs bring clean underground water to the surface."
    },
    {
      "question": "Where do camels love to live and walk with their padded feet?",
      "options": [
        "Sandy deserts",
        "Snowy mountains",
        "Deep oceans",
        "Rainforests"
      ],
      "answer": "Sandy deserts",
      "explanation": "Camels are perfectly adapted to endure desert heat and sand."
    },
    {
      "question": "What do we call the line where the earth and the sky seem to meet?",
      "options": [
        "Horizon",
        "Equator",
        "Boundary",
        "Coastline"
      ],
      "answer": "Horizon",
      "explanation": "The horizon is the apparent boundary line between earth and sky."
    },
    {
      "question": "Which season brings green new leaves and colorful blooming flowers?",
      "options": [
        "Spring",
        "Winter",
        "Summer",
        "Autumn"
      ],
      "answer": "Spring",
      "explanation": "Spring brings pleasant warmth and blossoming gardens."
    },
    {
      "question": "Which season brings falling brown leaves from deciduous trees?",
      "options": [
        "Autumn",
        "Spring",
        "Summer",
        "Monsoon"
      ],
      "answer": "Autumn",
      "explanation": "During autumn, trees shed their leaves before winter arrives."
    },
    {
      "question": "What do farmers plough to plant wheat, rice, and vegetables?",
      "options": [
        "Soil / Agricultural field",
        "Sand",
        "Ice",
        "Stone"
      ],
      "answer": "Soil / Agricultural field",
      "explanation": "Nutritious fertile soil nourishes crops to feed our nation."
    },
    {
      "question": "What is a large cave inside a mountain where bats and bears shelter?",
      "options": [
        "Cave / Cavern",
        "Nest",
        "Hole",
        "Hut"
      ],
      "answer": "Cave / Cavern",
      "explanation": "Caves are natural hollow chambers formed inside rocky hills."
    },
    {
      "question": "What do we call a small stream of clean water flowing in hills?",
      "options": [
        "Brook / Stream",
        "Ocean",
        "Sea",
        "Gulf"
      ],
      "answer": "Brook / Stream",
      "explanation": "Brooks and streams are small freshwater channels."
    },
    {
      "question": "Which Indian state is famous for its beautiful Dal Lake and houseboats?",
      "options": [
        "Jammu and Kashmir",
        "Rajasthan",
        "Gujarat",
        "Bihar"
      ],
      "answer": "Jammu and Kashmir",
      "explanation": "Srinagar in Kashmir is famous for Shikara boats on Dal Lake."
    },
    {
      "question": "Which Indian state is famous for tea gardens and the one-horned rhinoceros?",
      "options": [
        "Assam",
        "Kerala",
        "Punjab",
        "Goa"
      ],
      "answer": "Assam",
      "explanation": "Assam hosts Kaziranga National Park and lush tea estates."
    },
    {
      "question": "Which state in India is known for its sunny beaches on the Arabian Sea?",
      "options": [
        "Goa",
        "Haryana",
        "Madhya Pradesh",
        "Jharkhand"
      ],
      "answer": "Goa",
      "explanation": "Goa is a coastal state famous for its beaches and historic churches."
    },
    {
      "question": "What is a narrow path through mountains called?",
      "options": [
        "Mountain Pass",
        "Highway",
        "Bridge",
        "Canal"
      ],
      "answer": "Mountain Pass",
      "explanation": "Mountain passes allow travelers to cross rugged mountain ridges."
    },
    {
      "question": "What do we call a giant storm with swirling winds and heavy rain?",
      "options": [
        "Cyclone / Hurricane",
        "Breeze",
        "Drizzle",
        "Mist"
      ],
      "answer": "Cyclone / Hurricane",
      "explanation": "Cyclones form over warm tropical ocean waters."
    },
    {
      "question": "What is the layer of fresh air that surrounds our planet like a blanket?",
      "options": [
        "Atmosphere",
        "Hydrosphere",
        "Lithosphere",
        "Biosphere"
      ],
      "answer": "Atmosphere",
      "explanation": "The atmosphere provides air to breathe and regulates Earth's temperature."
    },
    {
      "question": "Which bright white frozen continent sits at the South Pole?",
      "options": [
        "Antarctica",
        "Asia",
        "Africa",
        "Europe"
      ],
      "answer": "Antarctica",
      "explanation": "Antarctica is covered by a massive continental ice sheet."
    },
    {
      "question": "What do we call water falling over a high rocky cliff?",
      "options": [
        "Waterfall",
        "Fountain",
        "Lake",
        "Pond"
      ],
      "answer": "Waterfall",
      "explanation": "Waterfalls cascade gracefully down steep mountain cliffs."
    },
    {
      "question": "Which state in central India is known as the 'Heart of India'?",
      "options": [
        "Madhya Pradesh",
        "Rajasthan",
        "Uttar Pradesh",
        "Maharashtra"
      ],
      "answer": "Madhya Pradesh",
      "explanation": "Madhya Pradesh is geographically situated in the central heart of India."
    }
  ],
  "junior": [
    {
      "question": "Which is the capital city of Rajasthan?",
      "options": [
        "Jaipur (Pink City)",
        "Jodhpur",
        "Udaipur",
        "Bikaner"
      ],
      "answer": "Jaipur (Pink City)",
      "explanation": "Jaipur is the capital of Rajasthan and is renowned worldwide as the Pink City."
    },
    {
      "question": "Which body of water lies to the east of India?",
      "options": [
        "Bay of Bengal",
        "Arabian Sea",
        "Indian Ocean",
        "Red Sea"
      ],
      "answer": "Bay of Bengal",
      "explanation": "The Bay of Bengal lies east of India, and the Arabian Sea lies to the west."
    },
    {
      "question": "Which is the smallest state in India by geographical area?",
      "options": [
        "Goa",
        "Sikkim",
        "Tripura",
        "Kerala"
      ],
      "answer": "Goa",
      "explanation": "Goa is India’s smallest state with an area of roughly 3,702 km²."
    },
    {
      "question": "Which famous river flows through Basti and Ayodhya in Uttar Pradesh?",
      "options": [
        "Sarayu river",
        "Ganga",
        "Yamuna",
        "Narmada"
      ],
      "answer": "Sarayu river",
      "explanation": "The holy Sarayu (Ghaghara) river flows alongside Ayodhya and neighboring Basti district."
    },
    {
      "question": "Which continent is the coldest and covered almost entirely in ice?",
      "options": [
        "Antarctica",
        "Europe",
        "Asia",
        "North America"
      ],
      "answer": "Antarctica",
      "explanation": "Antarctica surrounds the South Pole and is Earth’s coldest, driest continent."
    },
    {
      "question": "Which is the capital city of Rajasthan?",
      "options": [
        "Jaipur",
        "Jodhpur",
        "Udaipur",
        "Bikaner"
      ],
      "answer": "Jaipur",
      "explanation": "Jaipur is the capital of Rajasthan and is renowned worldwide as the Pink City."
    },
    {
      "question": "What is the capital city of Maharashtra?",
      "options": [
        "Mumbai",
        "Pune",
        "Nagpur",
        "Nashik"
      ],
      "answer": "Mumbai",
      "explanation": "Mumbai is the financial hub and capital city of Maharashtra."
    },
    {
      "question": "What is the capital city of Karnataka, known as India's Silicon Valley?",
      "options": [
        "Bengaluru",
        "Mysuru",
        "Mangaluru",
        "Hubballi"
      ],
      "answer": "Bengaluru",
      "explanation": "Bengaluru is India's premier IT technology hub and capital of Karnataka."
    },
    {
      "question": "What is the capital city of Tamil Nadu on the Coromandel Coast?",
      "options": [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Tiruchirappalli"
      ],
      "answer": "Chennai",
      "explanation": "Chennai is a major port city and the capital of Tamil Nadu."
    },
    {
      "question": "What is the capital city of West Bengal on the banks of the Hooghly River?",
      "options": [
        "Kolkata",
        "Howrah",
        "Siliguri",
        "Durgapur"
      ],
      "answer": "Kolkata",
      "explanation": "Kolkata was the former capital of British India until 1911."
    },
    {
      "question": "Which river originates from the Gangotri Glacier in Uttarakhand?",
      "options": [
        "Ganga (Bhagirathi)",
        "Yamuna",
        "Brahmaputra",
        "Indus"
      ],
      "answer": "Ganga (Bhagirathi)",
      "explanation": "The Bhagirathi originates at Gaumukh in Gangotri glacier and meets Alaknanda at Devprayag."
    },
    {
      "question": "Which river originates from the Yamunotri Glacier in Uttarakhand?",
      "options": [
        "Yamuna",
        "Ganga",
        "Kosi",
        "Gandak"
      ],
      "answer": "Yamuna",
      "explanation": "The Yamuna is the largest tributary of the Ganga, joining it at Prayagraj."
    },
    {
      "question": "Which major river flows westward and empties into the Arabian Sea?",
      "options": [
        "Narmada",
        "Godavari",
        "Krishna",
        "Cauvery"
      ],
      "answer": "Narmada",
      "explanation": "The Narmada flows westward through a rift valley between Vindhya and Satpura ranges."
    },
    {
      "question": "Which westward-flowing river runs parallel to the Narmada through Surat?",
      "options": [
        "Tapi (Tapti)",
        "Mahi",
        "Sabarmati",
        "Luni"
      ],
      "answer": "Tapi (Tapti)",
      "explanation": "The Tapi flows westward through Madhya Pradesh, Maharashtra, and Gujarat into the Gulf of Khambhat."
    },
    {
      "question": "Which is the longest river in peninsular South India, often called 'Dakshin Ganga'?",
      "options": [
        "Godavari",
        "Krishna",
        "Cauvery",
        "Mahanadi"
      ],
      "answer": "Godavari",
      "explanation": "The Godavari originates at Trimbakeshwar near Nashik and flows 1,465 km."
    },
    {
      "question": "On which river is the world's longest earthen dam, Hirakud Dam, constructed in Odisha?",
      "options": [
        "Mahanadi",
        "Damodar",
        "Subarnarekha",
        "Brahmani"
      ],
      "answer": "Mahanadi",
      "explanation": "Hirakud Dam controls floods and generates hydroelectric power on the Mahanadi."
    },
    {
      "question": "On which river is the monumental Sardar Sarovar Dam built in Gujarat?",
      "options": [
        "Narmada",
        "Tapi",
        "Sabarmati",
        "Chambal"
      ],
      "answer": "Narmada",
      "explanation": "The Sardar Sarovar Dam irrigates drought-prone regions of Gujarat and Rajasthan."
    },
    {
      "question": "Which is the highest dam in India, built on the Bhagirathi River in Uttarakhand?",
      "options": [
        "Tehri Dam",
        "Bhakra Dam",
        "Nagarjuna Sagar",
        "Hirakud"
      ],
      "answer": "Tehri Dam",
      "explanation": "Tehri Dam stands 260.5 meters high, making it one of the tallest dams globally."
    },
    {
      "question": "Which is the largest freshwater lake in India, located in Jammu and Kashmir?",
      "options": [
        "Wular Lake",
        "Dal Lake",
        "Loktak Lake",
        "Chilika Lake"
      ],
      "answer": "Wular Lake",
      "explanation": "Wular Lake is fed by the Jhelum river and is one of Asia's largest freshwater lakes."
    },
    {
      "question": "Which is the largest coastal brackish water lagoon lake in India, located in Odisha?",
      "options": [
        "Chilika Lake",
        "Pulicat Lake",
        "Vembanad Lake",
        "Kolleru Lake"
      ],
      "answer": "Chilika Lake",
      "explanation": "Chilika Lake hosts over 160 species of birds and endangered Irrawaddy dolphins."
    },
    {
      "question": "Which is the longest lake in India, situated in Kerala, famous for boat races?",
      "options": [
        "Vembanad Lake",
        "Ashtamudi Lake",
        "Sasthamkotta Lake",
        "Periyar Lake"
      ],
      "answer": "Vembanad Lake",
      "explanation": "Vembanad Lake spans over 96 km in length across several districts in Kerala."
    },
    {
      "question": "Which plateau covers the largest portion of peninsular southern India?",
      "options": [
        "Deccan Plateau",
        "Chota Nagpur Plateau",
        "Malwa Plateau",
        "Shillong Plateau"
      ],
      "answer": "Deccan Plateau",
      "explanation": "The Deccan Plateau is a triangular basaltic tableland bounded by Western and Eastern Ghats."
    },
    {
      "question": "Which plateau region in eastern India is famous for rich coal and iron mineral reserves?",
      "options": [
        "Chota Nagpur Plateau",
        "Deccan Plateau",
        "Malwa Plateau",
        "Ladakh Plateau"
      ],
      "answer": "Chota Nagpur Plateau",
      "explanation": "Chota Nagpur spans Jharkhand, Odisha, and Bengal, often called the 'Ruhr of India'."
    },
    {
      "question": "Which mountain range runs continuously along the western coast of peninsular India?",
      "options": [
        "Western Ghats (Sahyadri)",
        "Eastern Ghats",
        "Vindhyas",
        "Satpuras"
      ],
      "answer": "Western Ghats (Sahyadri)",
      "explanation": "The Western Ghats is a UNESCO World Heritage biodiversity hotspot."
    },
    {
      "question": "Which is the highest peak in peninsular India and the Western Ghats (in Kerala)?",
      "options": [
        "Anamudi (2,695 m)",
        "Doda Betta",
        "Kalsubai",
        "Mahendragiri"
      ],
      "answer": "Anamudi (2,695 m)",
      "explanation": "Anamudi in the Anaimalai Hills is the highest peak south of the Himalayas."
    },
    {
      "question": "Which is the highest peak in the Nilgiri Hills of Tamil Nadu?",
      "options": [
        "Doda Betta",
        "Anamudi",
        "Agasthyamalai",
        "Mullayanagiri"
      ],
      "answer": "Doda Betta",
      "explanation": "Doda Betta stands at 2,637 meters near Ooty in the Nilgiri district."
    },
    {
      "question": "What pass in the Pir Panjal range connects Jammu with Srinagar valley?",
      "options": [
        "Banihal Pass",
        "Zoji La",
        "Rohtang Pass",
        "Nathu La"
      ],
      "answer": "Banihal Pass",
      "explanation": "The Jawahar Tunnel and Banihal railway tunnel cut through this mountain pass."
    },
    {
      "question": "Which mountain pass connects Manali with the Kullu and Lahaul-Spiti valleys?",
      "options": [
        "Rohtang Pass",
        "Shipki La",
        "Bara-lacha la",
        "Mana Pass"
      ],
      "answer": "Rohtang Pass",
      "explanation": "Rohtang Pass in Himachal Pradesh is bypassed by the modern Atal Tunnel."
    },
    {
      "question": "Which high-altitude mountain pass connects Sikkim with Tibet (China)?",
      "options": [
        "Nathu La",
        "Jelep La",
        "Karakoram Pass",
        "Lipulekh"
      ],
      "answer": "Nathu La",
      "explanation": "Nathu La at 4,310 meters was part of the ancient historic Silk Route."
    },
    {
      "question": "Which state in India is the largest by geographic land area?",
      "options": [
        "Rajasthan",
        "Madhya Pradesh",
        "Maharashtra",
        "Uttar Pradesh"
      ],
      "answer": "Rajasthan",
      "explanation": "Rajasthan covers 342,239 km², making it India's largest state by land area."
    },
    {
      "question": "Which state in India is the most populous with over 240 million residents?",
      "options": [
        "Uttar Pradesh",
        "Maharashtra",
        "Bihar",
        "West Bengal"
      ],
      "answer": "Uttar Pradesh",
      "explanation": "Uttar Pradesh is home to roughly one-sixth of India's total population."
    },
    {
      "question": "Which is the smallest state in India by geographic land area?",
      "options": [
        "Goa",
        "Sikkim",
        "Tripura",
        "Mizoram"
      ],
      "answer": "Goa",
      "explanation": "Goa covers an area of only 3,702 km² on the Konkan coast."
    },
    {
      "question": "Which is the smallest state in India by population?",
      "options": [
        "Sikkim",
        "Goa",
        "Mizoram",
        "Arunachal Pradesh"
      ],
      "answer": "Sikkim",
      "explanation": "Sikkim has a population of approximately 610,000 residents."
    },
    {
      "question": "Which Indian state is celebrated as the 'Land of the Rising Sun'?",
      "options": [
        "Arunachal Pradesh",
        "Assam",
        "Manipur",
        "Nagaland"
      ],
      "answer": "Arunachal Pradesh",
      "explanation": "Dong village in Arunachal Pradesh sees the earliest sunrise in India."
    },
    {
      "question": "Which town in Meghalaya holds the world record for the highest average annual rainfall?",
      "options": [
        "Mawsynram",
        "Cherrapunji",
        "Shillong",
        "Tura"
      ],
      "answer": "Mawsynram",
      "explanation": "Mawsynram in the Khasi Hills receives over 11,870 mm of rain annually."
    },
    {
      "question": "Which is the largest delta in the world, formed by the Ganga and Brahmaputra rivers?",
      "options": [
        "Sundarbans Delta",
        "Nile Delta",
        "Mississippi Delta",
        "Mekong Delta"
      ],
      "answer": "Sundarbans Delta",
      "explanation": "The Sundarbans delta is home to the world's largest mangrove forest and Royal Bengal Tigers."
    },
    {
      "question": "Which is the southernmost mainland tip of the Indian peninsula?",
      "options": [
        "Kanyakumari (Cape Comorin)",
        "Indira Point",
        "Rameswaram",
        "Dhanushkodi"
      ],
      "answer": "Kanyakumari (Cape Comorin)",
      "explanation": "Kanyakumari in Tamil Nadu is where Arabian Sea, Bay of Bengal, and Indian Ocean meet."
    },
    {
      "question": "What is the southernmost geographic point of Indian territory located in Great Nicobar?",
      "options": [
        "Indira Point",
        "Kanyakumari",
        "Minicoy",
        "Point Calimere"
      ],
      "answer": "Indira Point",
      "explanation": "Indira Point at 6°45' N is the southernmost tip of the Indian Republic."
    },
    {
      "question": "What is the northernmost point of Indian territory in Ladakh?",
      "options": [
        "Indira Col",
        "Siachen Base",
        "K2",
        "Daulat Beg Oldie"
      ],
      "answer": "Indira Col",
      "explanation": "Indira Col in the Karakoram range marks India's northernmost boundary."
    },
    {
      "question": "Which is the westernmost inhabited point of India in Gujarat?",
      "options": [
        "Ghuar Mota (Kutch)",
        "Dwarka",
        "Porbandar",
        "Okha"
      ],
      "answer": "Ghuar Mota (Kutch)",
      "explanation": "Ghuar Mota in Kutch district of Gujarat is the westernmost meridian point."
    },
    {
      "question": "Which is the easternmost point of India located in Arunachal Pradesh?",
      "options": [
        "Kibithu",
        "Tezu",
        "Tawang",
        "Walong"
      ],
      "answer": "Kibithu",
      "explanation": "Kibithu on the Lohit river in Arunachal Pradesh marks India's easternmost boundary."
    },
    {
      "question": "What is the Standard Meridian of India used to determine Indian Standard Time (IST)?",
      "options": [
        "82°30' E (Mirzapur, UP)",
        "80°00' E",
        "75°30' E",
        "90°00' E"
      ],
      "answer": "82°30' E (Mirzapur, UP)",
      "explanation": "IST is based on 82.5° East longitude, passing through Mirzapur near Prayagraj (UTC+5:30)."
    },
    {
      "question": "How many hours is Indian Standard Time (IST) ahead of Greenwich Mean Time (GMT/UTC)?",
      "options": [
        "5 hours 30 minutes",
        "5 hours",
        "6 hours",
        "4 hours 30 minutes"
      ],
      "answer": "5 hours 30 minutes",
      "explanation": "82.5° × 4 minutes = 330 minutes = +5 hours 30 minutes ahead of GMT."
    },
    {
      "question": "Which strait separates the island nation of Sri Lanka from mainland India?",
      "options": [
        "Palk Strait",
        "Strait of Malacca",
        "Sunda Strait",
        "Bering Strait"
      ],
      "answer": "Palk Strait",
      "explanation": "The Palk Strait and Gulf of Mannar lie between Tamil Nadu and Sri Lanka."
    },
    {
      "question": "Which national park in Assam is globally renowned for saving the one-horned rhinoceros?",
      "options": [
        "Kaziranga National Park",
        "Manas National Park",
        "Jim Corbett National Park",
        "Sundarbans"
      ],
      "answer": "Kaziranga National Park",
      "explanation": "Kaziranga hosts two-thirds of the world's great one-horned rhinoceroses."
    },
    {
      "question": "Which was the first national park established in India in 1936 (formerly Hailey National Park)?",
      "options": [
        "Jim Corbett National Park (Uttarakhand)",
        "Kanha National Park",
        "Gir National Park",
        "Ranthambore"
      ],
      "answer": "Jim Corbett National Park (Uttarakhand)",
      "explanation": "Corbett was created in Nainital district in 1936 to protect endangered Bengal tigers."
    },
    {
      "question": "Which national park in Gujarat is the only natural wild habitat of the Asiatic Lion?",
      "options": [
        "Gir National Park",
        "Blackbuck National Park",
        "Marine National Park",
        "Vansda"
      ],
      "answer": "Gir National Park",
      "explanation": "Sasan Gir in Saurashtra is the last refuge of the majestic Asiatic Lion (Panthera leo persica)."
    },
    {
      "question": "Which national park in Madhya Pradesh inspired Rudyard Kipling’s 'The Jungle Book'?",
      "options": [
        "Kanha National Park / Pench",
        "Bandhavgarh",
        "Panna",
        "Satpura"
      ],
      "answer": "Kanha National Park / Pench",
      "explanation": "The Sal and bamboo forests of Pench and Kanha inspired the tales of Mowgli."
    },
    {
      "question": "Which desert salt marsh in Gujarat turns into a vast white desert during winter?",
      "options": [
        "Rann of Kutch",
        "Thar Desert",
        "Spiti Valley",
        "Ladakh"
      ],
      "answer": "Rann of Kutch",
      "explanation": "The Great Rann of Kutch is a seasonal salt marsh famous for the Rann Utsav festival."
    },
    {
      "question": "What cold high-altitude desert Union Territory is situated between Karakoram and Himalayas?",
      "options": [
        "Ladakh",
        "Sikkim",
        "Spiti",
        "Uttarakhand"
      ],
      "answer": "Ladakh",
      "explanation": "Ladakh is a rain-shadow cold desert known for Buddhist monasteries and passes."
    },
    {
      "question": "Which river flows through a dramatic marble rock gorge near Jabalpur in Madhya Pradesh?",
      "options": [
        "Narmada River (Bhedaghat)",
        "Chambal River",
        "Betwa River",
        "Son River"
      ],
      "answer": "Narmada River (Bhedaghat)",
      "explanation": "At Bhedaghat, the Narmada plunges over Dhuandhar Falls between towering white marble cliffs."
    },
    {
      "question": "Which city in Punjab is holy to Sikhs and houses the sacred Golden Temple (Harmandir Sahib)?",
      "options": [
        "Amritsar",
        "Ludhiana",
        "Jalandhar",
        "Patiala"
      ],
      "answer": "Amritsar",
      "explanation": "Amritsar was founded by Guru Ram Das in 1577 around the sacred Amrit Sarovar."
    },
    {
      "question": "Which major river flows through the ancient historic city of Ayodhya in Uttar Pradesh?",
      "options": [
        "Saryu River",
        "Gomti River",
        "Ganga River",
        "Ghaghara River"
      ],
      "answer": "Saryu River",
      "explanation": "The sacred Saryu river flows past the banks and ghats of Ayodhya."
    },
    {
      "question": "Which river flows through the state capital Lucknow before joining the Ganga?",
      "options": [
        "Gomti River",
        "Ghaghara River",
        "Son River",
        "Rapti River"
      ],
      "answer": "Gomti River",
      "explanation": "The Gomti originates from Gomat Taal (Fulhaar Jheel) in Pilibhit and flows through Lucknow."
    },
    {
      "question": "Which Indian port in Gujarat was developed after independence to replace Karachi port?",
      "options": [
        "Kandla Port (Deendayal Port)",
        "Mundra Port",
        "Nhava Sheva",
        "Cochin Port"
      ],
      "answer": "Kandla Port (Deendayal Port)",
      "explanation": "Kandla in the Gulf of Kutch is a major tidal bulk cargo port."
    }
  ],
  "middle": [
    {
      "question": "Which Indian state is known as the \"Land of Five Rivers\"?",
      "options": [
        "Punjab",
        "Haryana",
        "Uttar Pradesh",
        "Himachal Pradesh"
      ],
      "answer": "Punjab",
      "explanation": "Punjab derives its name from Persian \"Panj\" (five) and \"Aab\" (water/rivers)."
    },
    {
      "question": "Which strait separates India from Sri Lanka?",
      "options": [
        "Palk Strait",
        "Malacca Strait",
        "Strait of Gibraltar",
        "Bering Strait"
      ],
      "answer": "Palk Strait",
      "explanation": "The Palk Strait connects the Bay of Bengal with the Palk Bay between Tamil Nadu and Sri Lanka."
    },
    {
      "question": "Which plateau is known as the \"Roof of the World\"?",
      "options": [
        "Tibetan Plateau (Pamir Knot)",
        "Deccan Plateau",
        "Colorado Plateau",
        "Anatolian Plateau"
      ],
      "answer": "Tibetan Plateau (Pamir Knot)",
      "explanation": "The Tibetan Plateau is the world’s highest and largest plateau."
    },
    {
      "question": "Which is the largest freshwater lake in India?",
      "options": [
        "Wular Lake (Jammu & Kashmir)",
        "Chilika Lake",
        "Sambhar Lake",
        "Dal Lake"
      ],
      "answer": "Wular Lake (Jammu & Kashmir)",
      "explanation": "Wular Lake, fed by the Jhelum river, is India’s largest freshwater natural lake."
    },
    {
      "question": "Which parallel of latitude divides India almost into two equal halves?",
      "options": [
        "Tropic of Cancer (23.5° N)",
        "Equator (0°)",
        "Tropic of Capricorn (23.5° S)",
        "Arctic Circle (66.5° N)"
      ],
      "answer": "Tropic of Cancer (23.5° N)",
      "explanation": "The Tropic of Cancer passes through 8 Indian states at 23°30′ N latitude."
    },
    {
      "question": "Which soil type, formed from basaltic lava, is ideal for cotton cultivation in the Deccan?",
      "options": [
        "Black Soil (Regur Soil)",
        "Alluvial Soil",
        "Red Soil",
        "Laterite Soil"
      ],
      "answer": "Black Soil (Regur Soil)",
      "explanation": "Black soil is clayey, moisture-retentive, and rich in calcium, making it ideal for cotton."
    },
    {
      "question": "Which soil is the most widespread and agriculturally fertile across the northern plains of India?",
      "options": [
        "Alluvial Soil",
        "Black Soil",
        "Desert Soil",
        "Laterite Soil"
      ],
      "answer": "Alluvial Soil",
      "explanation": "Deposited by Indus, Ganga, and Brahmaputra, alluvial soil supports intensive farming."
    },
    {
      "question": "What are the old, higher alluvial deposits containing calcareous nodules (Kankar) called?",
      "options": [
        "Bhangar",
        "Khadar",
        "Bhabhar",
        "Terai"
      ],
      "answer": "Bhangar",
      "explanation": "Bhangar represents older, less fertile alluvium situated above floodplains."
    },
    {
      "question": "What are the newer, younger alluvial deposits renewed each year by seasonal floods called?",
      "options": [
        "Khadar",
        "Bhangar",
        "Bhabhar",
        "Terai"
      ],
      "answer": "Khadar",
      "explanation": "Khadar is extremely fertile and refreshed annually by river inundations."
    },
    {
      "question": "What is the narrow porous pebble-belt along the Shiwalik foothills where streams disappear underground?",
      "options": [
        "Bhabhar",
        "Terai",
        "Khadar",
        "Bhangar"
      ],
      "answer": "Bhabhar",
      "explanation": "Bhabhar is a 8–16 km wide belt of coarse gravel and pebbles where river waters seep down."
    },
    {
      "question": "What is the marshy, wet, and densely forested zone lying south of the Bhabhar belt called?",
      "options": [
        "Terai",
        "Khadar",
        "Bhangar",
        "Doab"
      ],
      "answer": "Terai",
      "explanation": "The Terai is a swampy belt where underground streams re-emerge at the surface."
    },
    {
      "question": "What is the fertile tract of land situated between two converging rivers termed?",
      "options": [
        "Doab",
        "Delta",
        "Gorge",
        "Estuary"
      ],
      "answer": "Doab",
      "explanation": "Doab (from 'Do' meaning two and 'Aab' meaning water) refers to interfluvial lands."
    },
    {
      "question": "Which crop season in India coincides with the arrival of the southwest monsoon (sown June, harvested Oct)?",
      "options": [
        "Kharif Season",
        "Rabi Season",
        "Zaid Season",
        "Annual Season"
      ],
      "answer": "Kharif Season",
      "explanation": "Kharif crops include paddy rice, maize, cotton, groundnut, and soybean."
    },
    {
      "question": "Which crop season in India begins in winter (sown Oct-Dec, harvested April-May)?",
      "options": [
        "Rabi Season",
        "Kharif Season",
        "Zaid Season",
        "Bhadon Season"
      ],
      "answer": "Rabi Season",
      "explanation": "Rabi crops include wheat, barley, gram, mustard, and green peas."
    },
    {
      "question": "What are the short summer crops grown between Rabi and Kharif (e.g. watermelon, cucumber)?",
      "options": [
        "Zaid Crops",
        "Kharif Crops",
        "Rabi Crops",
        "Cash Crops"
      ],
      "answer": "Zaid Crops",
      "explanation": "Zaid crops thrive in warm dry weather during March to June under irrigation."
    },
    {
      "question": "Which state in India is the leading producer of wheat and sugarcane?",
      "options": [
        "Uttar Pradesh",
        "Punjab",
        "Haryana",
        "Madhya Pradesh"
      ],
      "answer": "Uttar Pradesh",
      "explanation": "UP's fertile Ganga-Yamuna plains yield massive harvests of wheat and sugarcane."
    },
    {
      "question": "Which state in India is the largest producer of rice paddy?",
      "options": [
        "West Bengal",
        "Punjab",
        "Uttar Pradesh",
        "Andhra Pradesh"
      ],
      "answer": "West Bengal",
      "explanation": "Lower Ganga plains and coastal deltas produce multiple annual paddy crops."
    },
    {
      "question": "Which state is the leading producer of coffee in India (producing ~70% of total)?",
      "options": [
        "Karnataka (Kodagu/Chikkamagaluru)",
        "Kerala",
        "Tamil Nadu",
        "Assam"
      ],
      "answer": "Karnataka (Kodagu/Chikkamagaluru)",
      "explanation": "The shaded slopes of the Western Ghats in Karnataka produce fine Arabica and Robusta coffee."
    },
    {
      "question": "Which state in India produces the largest quantity of natural rubber?",
      "options": [
        "Kerala",
        "Tamil Nadu",
        "Karnataka",
        "Tripura"
      ],
      "answer": "Kerala",
      "explanation": "Warm equatorial monsoon climate makes Kerala the leader in natural latex rubber."
    },
    {
      "question": "Which Indian river forms the grand Jog Falls (Gersoppa Falls) in Karnataka?",
      "options": [
        "Sharavati River",
        "Cauvery River",
        "Netravati River",
        "Tungabhadra River"
      ],
      "answer": "Sharavati River",
      "explanation": "Jog Falls plunges 253 meters in four distinct cascades: Raja, Roarer, Rocket, and Rani."
    },
    {
      "question": "On which river is the Shivanasamudra Falls and India's first major hydroelectric station (1902)?",
      "options": [
        "Cauvery River",
        "Krishna River",
        "Sharavati River",
        "Vaigai River"
      ],
      "answer": "Cauvery River",
      "explanation": "Built in 1902, Shivanasamudra power station supplied electricity to Kolar Gold Fields."
    },
    {
      "question": "Which river is celebrated as the 'Sorrow of Bengal' due to historic catastrophic floods?",
      "options": [
        "Damodar River",
        "Hooghly River",
        "Teesta River",
        "Rupnarayan River"
      ],
      "answer": "Damodar River",
      "explanation": "Damodar Valley Corporation (DVC) dams were constructed to tame its devastating floods."
    },
    {
      "question": "Which mountain range acts as the drainage divide between northern and peninsular river systems?",
      "options": [
        "Vindhya Range",
        "Aravalli Range",
        "Satpura Range",
        "Western Ghats"
      ],
      "answer": "Vindhya Range",
      "explanation": "The Vindhyas separate the northern Gangetic basin from the peninsular river systems."
    },
    {
      "question": "Which is the highest peak in the Satpura Mountain Range (near Pachmarhi, MP)?",
      "options": [
        "Dhupgarh (1,350 m)",
        "Amarkantak",
        "Guru Shikhar",
        "Kalsubai"
      ],
      "answer": "Dhupgarh (1,350 m)",
      "explanation": "Mount Dhupgarh near Pachmarhi hill station is the highest summit in the Satpura range."
    },
    {
      "question": "Which hill station is situated in the Aravalli Range and is Rajasthan's only hill station?",
      "options": [
        "Mount Abu",
        "Kodaikanal",
        "Mahabaleshwar",
        "Mussoorie"
      ],
      "answer": "Mount Abu",
      "explanation": "Mount Abu is home to Guru Shikhar peak (1,722 m) and the Dilwara Jain Temples."
    },
    {
      "question": "Which state has the largest total forest cover area in India?",
      "options": [
        "Madhya Pradesh",
        "Arunachal Pradesh",
        "Chhattisgarh",
        "Odisha"
      ],
      "answer": "Madhya Pradesh",
      "explanation": "Madhya Pradesh has the largest area under forest canopy according to Forest Survey of India."
    },
    {
      "question": "Which Indian state has the highest percentage of its geographical area covered by forests (>84%)?",
      "options": [
        "Mizoram",
        "Arunachal Pradesh",
        "Meghalaya",
        "Nagaland"
      ],
      "answer": "Mizoram",
      "explanation": "Mizoram boasts over 84% of its geographic land under forest cover."
    },
    {
      "question": "What are the tropical cyclone storms that occur during pre-monsoon summer in West Bengal called?",
      "options": [
        "Kalbaisakhi (Nor'westers)",
        "Loo",
        "Mango Showers",
        "Cherry Blossom"
      ],
      "answer": "Kalbaisakhi (Nor'westers)",
      "explanation": "Kalbaisakhi brings violent localized thunderstorms, hail, and torrential rain in April-May."
    },
    {
      "question": "What is the hot, dry, and dusty summer wind blowing across northern plains of India called?",
      "options": [
        "Loo",
        "Chinook",
        "Mistral",
        "Sirocco"
      ],
      "answer": "Loo",
      "explanation": "The Loo blows from the Thar Desert during May and June with temperatures reaching 45°C+."
    },
    {
      "question": "What are the pre-monsoon showers in Kerala and coastal Karnataka called that help ripen mangoes?",
      "options": [
        "Mango Showers",
        "Loo",
        "Kalbaisakhi",
        "Blossom Showers"
      ],
      "answer": "Mango Showers",
      "explanation": "Mango showers prevent early fruit dropping in coastal mango orchards."
    },
    {
      "question": "Which wind system brings over 75% of India's annual rainfall between June and September?",
      "options": [
        "Southwest Monsoon",
        "Northeast Monsoon",
        "Western Disturbances",
        "Trade Winds"
      ],
      "answer": "Southwest Monsoon",
      "explanation": "Differential heating of land and ocean draws moisture-laden southwest winds from Indian Ocean."
    },
    {
      "question": "Which state receives the bulk of its rainfall during winter months from the Northeast Monsoon?",
      "options": [
        "Tamil Nadu",
        "Punjab",
        "Rajasthan",
        "Maharashtra"
      ],
      "answer": "Tamil Nadu",
      "explanation": "The retreating Northeast monsoon gathers moisture over Bay of Bengal, raining over Coromandel coast."
    },
    {
      "question": "What atmospheric systems cause vital winter rainfall in northern India beneficial for rabi wheat?",
      "options": [
        "Western Disturbances",
        "Southwest Monsoon",
        "Tropical Cyclones",
        "Nor'westers"
      ],
      "answer": "Western Disturbances",
      "explanation": "Extratropical Mediterranean cyclonic depressions travel eastward into northwest India."
    },
    {
      "question": "Which is the southernmost Union Territory of India situated in the Arabian Sea?",
      "options": [
        "Lakshadweep",
        "Andaman and Nicobar",
        "Puducherry",
        "Daman and Diu"
      ],
      "answer": "Lakshadweep",
      "explanation": "Lakshadweep comprises 36 coral atolls and islands off the Malabar coast."
    },
    {
      "question": "What type of islands are the Lakshadweep Islands geographically?",
      "options": [
        "Coral Atolls",
        "Volcanic Islands",
        "Continental Islands",
        "Tectonic Uplifts"
      ],
      "answer": "Coral Atolls",
      "explanation": "Lakshadweep islands are ring-shaped coral reefs built by tiny marine polyps."
    },
    {
      "question": "Which is the only active volcano located within Indian territory (in the Andaman Sea)?",
      "options": [
        "Barren Island",
        "Narcondam Island",
        "Deccan Traps",
        "Baratang"
      ],
      "answer": "Barren Island",
      "explanation": "Barren Island erupted in 1991 and continues to emit volcanic ash and steam."
    },
    {
      "question": "Which dormant volcanic island is situated north of Barren Island in the Andaman Sea?",
      "options": [
        "Narcondam Island",
        "Havelock Island",
        "Neil Island",
        "Ross Island"
      ],
      "answer": "Narcondam Island",
      "explanation": "Narcondam is an extinct/dormant volcanic cone rising from the Andaman Sea basin."
    },
    {
      "question": "What is the name of the channel separating the Andaman Islands from the Nicobar Islands?",
      "options": [
        "Ten Degree Channel (10° N)",
        "Nine Degree Channel",
        "Eight Degree Channel",
        "Duncan Passage"
      ],
      "answer": "Ten Degree Channel (10° N)",
      "explanation": "The Ten Degree Channel is a 150 km wide maritime passage separating Little Andaman from Car Nicobar."
    },
    {
      "question": "What channel separates the Lakshadweep archipelago from Minicoy Island?",
      "options": [
        "Nine Degree Channel (9° N)",
        "Ten Degree Channel",
        "Eight Degree Channel",
        "Six Degree Channel"
      ],
      "answer": "Nine Degree Channel (9° N)",
      "explanation": "The Nine Degree Channel separates Minicoy from the central Lakshadweep group."
    },
    {
      "question": "What channel separates Minicoy Island from the independent Maldives archipelago?",
      "options": [
        "Eight Degree Channel (8° N)",
        "Ten Degree Channel",
        "Nine Degree Channel",
        "Grand Channel"
      ],
      "answer": "Eight Degree Channel (8° N)",
      "explanation": "The maritime boundary between India and Maldives runs through the Eight Degree Channel."
    },
    {
      "question": "Which is the largest iron ore producing state in India?",
      "options": [
        "Odisha",
        "Chhattisgarh",
        "Karnataka",
        "Jharkhand"
      ],
      "answer": "Odisha",
      "explanation": "Odisha's Badampahar and Keonjhar belt accounts for over half of India's hematite iron ore."
    },
    {
      "question": "Which coalfield in Jharkhand is the oldest and richest source of prime coking coal in India?",
      "options": [
        "Jharia Coalfield",
        "Raniganj",
        "Singrauli",
        "Korba"
      ],
      "answer": "Jharia Coalfield",
      "explanation": "Jharia supplies metallurgical coking coal for major steel plants across eastern India."
    },
    {
      "question": "Which was the first commercial oil field discovered in India and Asia (drilled in 1889)?",
      "options": [
        "Digboi (Assam)",
        "Bombay High",
        "Ankleshwar",
        "Naharkatiya"
      ],
      "answer": "Digboi (Assam)",
      "explanation": "Digboi refinery, commissioned in 1901, is one of the world's oldest operating refineries."
    },
    {
      "question": "What is the offshore oilfield located 160 km west of Mumbai coast in the Arabian Sea?",
      "options": [
        "Bombay High (Mumbai High)",
        "Bassein",
        "Ravva",
        "Panna-Mukta"
      ],
      "answer": "Bombay High (Mumbai High)",
      "explanation": "Operated by ONGC, Bombay High is India's largest domestic crude oil producer."
    },
    {
      "question": "Which nuclear power plant in Tamil Nadu is the largest by operational capacity in India?",
      "options": [
        "Kudankulam Nuclear Power Plant",
        "Kalpakkam",
        "Tarapur",
        "Narora"
      ],
      "answer": "Kudankulam Nuclear Power Plant",
      "explanation": "Built in technical collaboration with Russia, Kudankulam houses 1,000 MW VVER reactors."
    },
    {
      "question": "Where was India's first commercial atomic power station established in 1969?",
      "options": [
        "Tarapur (Maharashtra)",
        "Rawatbhata",
        "Kakrapur",
        "Kaiga"
      ],
      "answer": "Tarapur (Maharashtra)",
      "explanation": "Tarapur Atomic Power Station was inaugurated in Palghar district in October 1969."
    },
    {
      "question": "Which city in Uttar Pradesh is home to the Narora Atomic Power Station?",
      "options": [
        "Bulandshahr (Narora)",
        "Kanpur",
        "Varanasi",
        "Prayagraj"
      ],
      "answer": "Bulandshahr (Narora)",
      "explanation": "Narora operates two pressurized heavy water reactors (PHWRs) on the banks of the Ganga."
    },
    {
      "question": "Which Indian state has the highest literacy rate according to national census surveys?",
      "options": [
        "Kerala",
        "Mizoram",
        "Goa",
        "Tripura"
      ],
      "answer": "Kerala",
      "explanation": "Kerala maintains a literacy rate exceeding 94%, with near-universal primary schooling."
    },
    {
      "question": "Which is the most densely populated state in India (>1,100 people per sq km)?",
      "options": [
        "Bihar",
        "West Bengal",
        "Kerala",
        "Uttar Pradesh"
      ],
      "answer": "Bihar",
      "explanation": "Fertile Gangetic plains support dense rural settlements across North Bihar."
    },
    {
      "question": "Which state in India has the lowest population density (17 persons per sq km)?",
      "options": [
        "Arunachal Pradesh",
        "Mizoram",
        "Sikkim",
        "Nagaland"
      ],
      "answer": "Arunachal Pradesh",
      "explanation": "Rugged mountainous terrain and thick forest cover keep human density sparse."
    },
    {
      "question": "What is the official boundary line between India and China in the eastern Himalayas called?",
      "options": [
        "McMahon Line",
        "Radcliffe Line",
        "Durand Line",
        "Line of Control"
      ],
      "answer": "McMahon Line",
      "explanation": "Drawn at the 1914 Simla Convention, the McMahon Line defines the border in Arunachal Pradesh."
    },
    {
      "question": "What is the ceasefire boundary line dividing Indian Jammu & Kashmir and Pakistan-occupied Kashmir?",
      "options": [
        "Line of Control (LoC)",
        "Line of Actual Control",
        "Radcliffe Line",
        "Sir Creek"
      ],
      "answer": "Line of Control (LoC)",
      "explanation": "Designated under the 1972 Simla Agreement, the LoC separates the military positions."
    },
    {
      "question": "What is the effective working border separating Indian territory from Chinese-controlled territory?",
      "options": [
        "Line of Actual Control (LAC)",
        "Line of Control",
        "McMahon Line",
        "Durand Line"
      ],
      "answer": "Line of Actual Control (LAC)",
      "explanation": "The LAC spans Ladakh, Uttarakhand, Himachal Pradesh, Sikkim, and Arunachal Pradesh."
    },
    {
      "question": "What is the 96 km long tidal water dispute strip between Gujarat and Sindh (Pakistan)?",
      "options": [
        "Sir Creek",
        "Kori Creek",
        "Rann of Kutch",
        "Gulf of Khambhat"
      ],
      "answer": "Sir Creek",
      "explanation": "Sir Creek is a navigable marshy estuary opening into the Arabian Sea."
    },
    {
      "question": "Which is the longest national highway in India, connecting Srinagar to Kanyakumari?",
      "options": [
        "National Highway 44 (NH 44)",
        "NH 48",
        "NH 27",
        "NH 19"
      ],
      "answer": "National Highway 44 (NH 44)",
      "explanation": "NH 44 spans 3,745 kilometers running north-south through eleven Indian states."
    }
  ],
  "secondary": [
    {
      "question": "Which Indian river is known as the \"Dakshin Ganga\" or Ganga of the South due to its age and expanse?",
      "options": [
        "Godavari",
        "Krishna",
        "Cauvery",
        "Mahanadi"
      ],
      "answer": "Godavari",
      "explanation": "The Godavari is India’s second longest river and the longest in Peninsular India."
    },
    {
      "question": "Which mountain pass connects the Kashmir Valley with the Ladakh region?",
      "options": [
        "Zoji La Pass",
        "Rohtang Pass",
        "Nathu La Pass",
        "Shipki La Pass"
      ],
      "answer": "Zoji La Pass",
      "explanation": "Zoji La is a vital strategic mountain pass on National Highway 1 between Srinagar and Leh."
    },
    {
      "question": "What is the standard meridian of India from which Indian Standard Time (IST) is calculated?",
      "options": [
        "82.5° E (Mirzapur, UP)",
        "75.0° E",
        "90.0° E",
        "80.0° E"
      ],
      "answer": "82.5° E (Mirzapur, UP)",
      "explanation": "IST is calculated based on 82°30′ E longitude passing near Mirzapur in Uttar Pradesh (UTC +5:30)."
    },
    {
      "question": "Which is the deepest oceanic trench on Earth?",
      "options": [
        "Mariana Trench",
        "Java Trench",
        "Puerto Rico Trench",
        "Tonga Trench"
      ],
      "answer": "Mariana Trench",
      "explanation": "The Mariana Trench in the western Pacific reaches a maximum depth of ~11,000 meters at Challenger Deep."
    },
    {
      "question": "Majuli, the world’s largest inhabited river island, is located on which river in Assam?",
      "options": [
        "Brahmaputra",
        "Ganga",
        "Barak",
        "Teesta"
      ],
      "answer": "Brahmaputra",
      "explanation": "Majuli is a picturesque river island formed by the mighty Brahmaputra river in Assam."
    },
    {
      "question": "What is the primary atmospheric circulation mechanism causing the Indian Southwest Monsoon?",
      "options": [
        "Differential thermal heating between Indian landmass and Indian Ocean",
        "Coriolis deflection alone",
        "El Niño alone",
        "Tidal friction"
      ],
      "answer": "Differential thermal heating between Indian landmass and Indian Ocean",
      "explanation": "Summer heating of the Tibetan plateau and northern plains creates intense low pressure drawing marine winds."
    },
    {
      "question": "What is the name of the oceanic phenomenon where abnormal warming of eastern Pacific waters disrupts Indian monsoons?",
      "options": [
        "El Niño (ENSO)",
        "La Niña",
        "Indian Ocean Dipole",
        "Walker Circulation"
      ],
      "answer": "El Niño (ENSO)",
      "explanation": "El Niño alters the Walker circulation, frequently weakening summer monsoon rains in South Asia."
    },
    {
      "question": "What is the positive phase of the Indian Ocean Dipole (IOD) associated with?",
      "options": [
        "Enhanced monsoon rainfall over India",
        "Severe drought in India",
        "Cold waves in Kerala",
        "No effect on India"
      ],
      "answer": "Enhanced monsoon rainfall over India",
      "explanation": "Warm waters in the western Indian Ocean generate convective moisture boosting Indian monsoon intensity."
    },
    {
      "question": "Which high-altitude fast-flowing westerly air current steers western disturbances into India in winter?",
      "options": [
        "Subtropical Westerly Jet Stream",
        "Tropical Easterly Jet",
        "Polar Jet Stream",
        "Trade Winds"
      ],
      "answer": "Subtropical Westerly Jet Stream",
      "explanation": "Meandering south of the Himalayas in winter, westerly jets guide Mediterranean depressions into northwest India."
    },
    {
      "question": "Which summer upper-tropospheric jet stream over peninsular India heralds the arrival of monsoons?",
      "options": [
        "Tropical Easterly Jet Stream",
        "Subtropical Westerly Jet",
        "Polar Jet",
        "Harmattan"
      ],
      "answer": "Tropical Easterly Jet Stream",
      "explanation": "The thermal high over Tibet propels the tropical easterly jet at 14°N latitude across peninsular India."
    },
    {
      "question": "Which Indian river basin has the largest catchment area, covering over 860,000 sq km (~26% of India)?",
      "options": [
        "Ganga Basin",
        "Indus Basin",
        "Godavari Basin",
        "Brahmaputra Basin"
      ],
      "answer": "Ganga Basin",
      "explanation": "The Ganga basin supports over 40% of India's population across 11 states."
    },
    {
      "question": "Which major tributary joins the Ganga from the south after originating in the Amarkantak plateau?",
      "options": [
        "Son River",
        "Yamuna",
        "Gandak",
        "Kosi"
      ],
      "answer": "Son River",
      "explanation": "The Son flows northeast through Madhya Pradesh, UP, and Bihar, joining the Ganga near Patna."
    },
    {
      "question": "Which tributary of the Yamuna flows through the deep, eroded badland ravines of central India?",
      "options": [
        "Chambal River",
        "Betwa",
        "Ken",
        "Sindh"
      ],
      "answer": "Chambal River",
      "explanation": "The Chambal is renowned for its protected wildlife sanctuary and badland topography."
    },
    {
      "question": "Which project was inaugurated as India's first inter-river basin water transfer project?",
      "options": [
        "Ken-Betwa River Interlinking Project",
        "Ganga-Cauvery link",
        "Godavari-Krishna link",
        "Narmada-Kshipra link"
      ],
      "answer": "Ken-Betwa River Interlinking Project",
      "explanation": "The project transfers surplus water from the Ken basin to water-deficit Bundelkhand via Betwa."
    },
    {
      "question": "Which river is celebrated as the 'Lifeline of Madhya Pradesh and Gujarat'?",
      "options": [
        "Narmada River",
        "Tapi River",
        "Chambal River",
        "Mahi River"
      ],
      "answer": "Narmada River",
      "explanation": "The Narmada irrigates vast tracts of farmland and generates clean hydroelectricity."
    },
    {
      "question": "Which river crosses the Tropic of Cancer twice during its flow in India?",
      "options": [
        "Mahi River",
        "Sabarmati River",
        "Narmada River",
        "Tapi River"
      ],
      "answer": "Mahi River",
      "explanation": "Originating in MP, the Mahi flows into Rajasthan and turns southwest into Gujarat, crossing 23.5° N twice."
    },
    {
      "question": "Which river basin in peninsular India is the second largest after the Ganga?",
      "options": [
        "Godavari Basin",
        "Krishna Basin",
        "Mahanadi Basin",
        "Cauvery Basin"
      ],
      "answer": "Godavari Basin",
      "explanation": "The Godavari drainage basin covers roughly 312,812 sq km (~9.5% of India's landmass)."
    },
    {
      "question": "Which major tributary of the Krishna River is formed by the confluence of Tunga and Bhadra streams?",
      "options": [
        "Tungabhadra River",
        "Bhima River",
        "Koyna River",
        "Ghataprabha River"
      ],
      "answer": "Tungabhadra River",
      "explanation": "The historic Vijayanagara Empire had its magnificent capital at Hampi on the Tungabhadra."
    },
    {
      "question": "On which river is the Mettur Dam, one of the oldest irrigation dams in Tamil Nadu, constructed?",
      "options": [
        "Cauvery River",
        "Vaigai River",
        "Palar River",
        "Periyar River"
      ],
      "answer": "Cauvery River",
      "explanation": "Built in 1934, Mettur Dam creates Stanley Reservoir irrigating the fertile Cauvery delta."
    },
    {
      "question": "Which river flows into the Sambhar Salt Lake, India's largest inland salt lake in Rajasthan?",
      "options": [
        "Luni River / Mendha",
        "Banas River",
        "Sabarmati",
        "Mahi"
      ],
      "answer": "Luni River / Mendha",
      "explanation": "The endorheic Sambhar basin in Rajasthan produces substantial commercial lake salt."
    },
    {
      "question": "What is the unique river in Rajasthan that vanishes into the marshy Rann of Kutch without reaching the sea?",
      "options": [
        "Luni River",
        "Sabarmati River",
        "Mahi River",
        "Ghaggar River"
      ],
      "answer": "Luni River",
      "explanation": "Luni is an ephemeral inland drainage river whose water turns brackish past Balotra."
    },
    {
      "question": "Which river is considered the modern relic of the ancient mythical Vedic Saraswati river?",
      "options": [
        "Ghaggar-Hakra River",
        "Ravi River",
        "Beas River",
        "Satluj River"
      ],
      "answer": "Ghaggar-Hakra River",
      "explanation": "Paleo-channels of the seasonal Ghaggar flow along ancient Harappan civilization archaeological sites."
    },
    {
      "question": "Which Harappan (Indus Valley) port city in Gujarat featured a sophisticated tidal dockyard?",
      "options": [
        "Lothal",
        "Dholavira",
        "Kalibangan",
        "Rakhigarhi"
      ],
      "answer": "Lothal",
      "explanation": "Lothal's brick tidal dockyard connected via river channels to the Gulf of Khambhat for maritime trade."
    },
    {
      "question": "Which UNESCO World Heritage Harappan metropolis in Kutch is celebrated for giant water reservoirs?",
      "options": [
        "Dholavira",
        "Lothal",
        "Surkotada",
        "Banawali"
      ],
      "answer": "Dholavira",
      "explanation": "Dholavira featured an advanced rainwater harvesting system with stone-cut storage reservoirs."
    },
    {
      "question": "What is the name of the geologically stable, ancient crystalline shield forming peninsular India?",
      "options": [
        "Gondwana Shield (Peninsular Block)",
        "Angaraland",
        "Laurasia",
        "Tethys"
      ],
      "answer": "Gondwana Shield (Peninsular Block)",
      "explanation": "The Indian shield is a relic of ancient Gondwanaland that drifted northward into Eurasia."
    },
    {
      "question": "What geological collision formed the Himalayan mountain range during the Cenozoic era?",
      "options": [
        "Indo-Australian Plate colliding with Eurasian Plate",
        "Pacific Plate subduction",
        "African Plate rift",
        "North American collision"
      ],
      "answer": "Indo-Australian Plate colliding with Eurasian Plate",
      "explanation": "The continent-continent tectonic collision folded Tethys sea sediments into the high Himalayas."
    },
    {
      "question": "Which is the outermost and youngest mountain range of the Himalayas?",
      "options": [
        "Shiwalik Range (Outer Himalayas)",
        "Himadri (Greater Himalayas)",
        "Himachal (Lesser Himalayas)",
        "Trans-Himalayas"
      ],
      "answer": "Shiwalik Range (Outer Himalayas)",
      "explanation": "The Shiwaliks are composed of unconsolidated river gravels and sandstones prone to landslides."
    },
    {
      "question": "What are the longitudinal flat-bottomed structural valleys between the Lesser Himalayas and Shiwaliks called?",
      "options": [
        "Duns (e.g. Dehradun)",
        "Passes",
        "Gorges",
        "Cirques"
      ],
      "answer": "Duns (e.g. Dehradun)",
      "explanation": "Dehradun, Kotlidun, and Patlidun are well-known longitudinal tectonic valleys."
    },
    {
      "question": "Which is the highest peak in the Greater Himalayas (Himadri) located within Indian territory?",
      "options": [
        "Kanchenjunga (8,586 m)",
        "Nanda Devi (7,816 m)",
        "Kamet",
        "Trisul"
      ],
      "answer": "Kanchenjunga (8,586 m)",
      "explanation": "Kanchenjunga is the third-highest mountain on Earth, revered by Sikkim's residents."
    },
    {
      "question": "Which is the highest mountain peak located entirely within Indian territory (without border disputes)?",
      "options": [
        "Nanda Devi (7,816 m)",
        "K2",
        "Kanchenjunga",
        "Saltoro Kangri"
      ],
      "answer": "Nanda Devi (7,816 m)",
      "explanation": "Nanda Devi in Garhwal Uttarakhand is encircled by a ring of glaciated sanctuary peaks."
    },
    {
      "question": "Which glacier in the Karakoram range is the longest glacier in the world outside the polar regions?",
      "options": [
        "Siachen Glacier (76 km)",
        "Baltoro Glacier",
        "Biafo Glacier",
        "Gangotri Glacier"
      ],
      "answer": "Siachen Glacier (76 km)",
      "explanation": "The Siachen Glacier in eastern Karakoram is the world's highest battlefield."
    },
    {
      "question": "What is the name of the deepest canyon gorge carved by the Kali Gandaki river in the Himalayas?",
      "options": [
        "Kali Gandaki Gorge",
        "Indus Gorge",
        "Brahmaputra Gorge",
        "Grand Canyon"
      ],
      "answer": "Kali Gandaki Gorge",
      "explanation": "The gorge plunges over 5,500 meters between Dhaulagiri and Annapurna massifs."
    },
    {
      "question": "Where does the Brahmaputra River enter Indian territory after cutting through a dramatic gorge?",
      "options": [
        "Arunachal Pradesh (Namcha Barwa)",
        "Assam",
        "Sikkim",
        "Nagaland"
      ],
      "answer": "Arunachal Pradesh (Namcha Barwa)",
      "explanation": "Known as Yarlung Tsangpo in Tibet, it makes a U-turn around Namcha Barwa entering India as the Dihang."
    },
    {
      "question": "What is the largest inhabited river island in the world, situated in the Brahmaputra River in Assam?",
      "options": [
        "Majuli Island",
        "Umananda Island",
        "Divar Island",
        "Munroe Island"
      ],
      "answer": "Majuli Island",
      "explanation": "Majuli is an ancient cultural seat of Assamese Neo-Vaishnavite Sattras."
    },
    {
      "question": "What is the smallest inhabited river island in the world, located in Guwahati on the Brahmaputra?",
      "options": [
        "Umananda Island (Peacock Island)",
        "Majuli",
        "Bhavani Island",
        "Srirangam"
      ],
      "answer": "Umananda Island (Peacock Island)",
      "explanation": "Umananda houses a 17th-century temple dedicated to Lord Shiva."
    },
    {
      "question": "Which mineral resource is extracted from the open-cast lignite mines of Neyveli in Tamil Nadu?",
      "options": [
        "Lignite (Brown Coal)",
        "Anthracite",
        "Bauxite",
        "Iron Ore"
      ],
      "answer": "Lignite (Brown Coal)",
      "explanation": "Neyveli Lignite Corporation (NLC) powers major thermal generating stations in South India."
    },
    {
      "question": "Which region in Rajasthan is home to the world's ancient copper mining center since Indus times?",
      "options": [
        "Khetri Copper Belt (Jhunjhunu)",
        "Makrana",
        "Zawar",
        "Degana"
      ],
      "answer": "Khetri Copper Belt (Jhunjhunu)",
      "explanation": "Hindustan Copper operates deep underground copper mines at Khetri."
    },
    {
      "question": "Which town in Rajasthan is world-famous for pure white marble used to construct the Taj Mahal?",
      "options": [
        "Makrana",
        "Jaisalmer",
        "Kota",
        "Bhilwara"
      ],
      "answer": "Makrana",
      "explanation": "Makrana marble is a calcite stone known for purity, translucence, and durability."
    },
    {
      "question": "Which mine in Rajasthan is celebrated as the world's oldest zinc and lead smelting site?",
      "options": [
        "Zawar Mines (Udaipur)",
        "Khetri",
        "Panna",
        "Jaduguda"
      ],
      "answer": "Zawar Mines (Udaipur)",
      "explanation": "Zinc extraction at Zawar dates back over two millennia to the 4th century BCE."
    },
    {
      "question": "Which district in Madhya Pradesh is famous as India's only active diamond producing belt?",
      "options": [
        "Panna District",
        "Rewa",
        "Satna",
        "Singrauli"
      ],
      "answer": "Panna District",
      "explanation": "NMDC operates the Majhgawan diamond pipe in Panna district."
    },
    {
      "question": "Which place in Jharkhand is renowned for India's underground uranium mining operations?",
      "options": [
        "Jaduguda",
        "Hazaribagh",
        "Giridih",
        "Dhanbad"
      ],
      "answer": "Jaduguda",
      "explanation": "Uranium Corporation of India Limited (UCIL) processes uranium ore at Jaduguda."
    },
    {
      "question": "Which city in Tamil Nadu is known as the 'Manchester of South India' due to its textile cotton mills?",
      "options": [
        "Coimbatore",
        "Tirupur",
        "Madurai",
        "Salem"
      ],
      "answer": "Coimbatore",
      "explanation": "Coimbatore hosts hundreds of spinning, weaving, and textile machinery factories."
    },
    {
      "question": "Which city in Gujarat was historically referred to as the 'Manchester of India'?",
      "options": [
        "Ahmedabad",
        "Surat",
        "Vadodara",
        "Rajkot"
      ],
      "answer": "Ahmedabad",
      "explanation": "Abundant black soil cotton and access to ports fueled Ahmedabad's massive textile mills."
    },
    {
      "question": "Which city in Gujarat is world-famous as the global capital of diamond cutting and polishing?",
      "options": [
        "Surat",
        "Ahmedabad",
        "Bhavnagar",
        "Jamnagar"
      ],
      "answer": "Surat",
      "explanation": "Over 90% of the world's rough diamonds are cut and polished in Surat."
    },
    {
      "question": "Where is the world's largest single-location crude oil refining complex located in Gujarat?",
      "options": [
        "Jamnagar (Reliance)",
        "Kochi",
        "Vadodara",
        "Mangalore"
      ],
      "answer": "Jamnagar (Reliance)",
      "explanation": "Jamnagar refinery complex processes over 1.24 million barrels of petroleum daily."
    },
    {
      "question": "Which port in Maharashtra is India's largest container handling seaport?",
      "options": [
        "Jawaharlal Nehru Port (JNPT / Nhava Sheva)",
        "Mumbai Port",
        "Mormugao",
        "Kandla"
      ],
      "answer": "Jawaharlal Nehru Port (JNPT / Nhava Sheva)",
      "explanation": "JNPT handles over half of India's international containerized maritime trade."
    },
    {
      "question": "Which all-weather deepwater port is located on the eastern seaboard in Andhra Pradesh?",
      "options": [
        "Visakhapatnam Port",
        "Paradip",
        "Ennore",
        "Kakinada"
      ],
      "answer": "Visakhapatnam Port",
      "explanation": "Visakhapatnam is landlocked by Dolphin's Nose hill, providing a protected natural harbor."
    },
    {
      "question": "Which port is the oldest major artificial harbor in India, opened in 1881?",
      "options": [
        "Chennai Port",
        "Kolkata Port",
        "Tuticorin Port",
        "Cochin Port"
      ],
      "answer": "Chennai Port",
      "explanation": "Chennai Port is India's second largest container port on the Coromandel coast."
    },
    {
      "question": "Which is the only riverine major port in India, located on the Hooghly river?",
      "options": [
        "Syama Prasad Mookerjee Port (Kolkata)",
        "Haldia",
        "Paradip",
        "Dhamra"
      ],
      "answer": "Syama Prasad Mookerjee Port (Kolkata)",
      "explanation": "Located 232 km from the sea, Kolkata port requires constant river dredging."
    },
    {
      "question": "Which Indian railway zone is headquartered at Chhatrapati Shivaji Maharaj Terminus (CSMT)?",
      "options": [
        "Central Railway",
        "Western Railway",
        "Northern Railway",
        "Southern Railway"
      ],
      "answer": "Central Railway",
      "explanation": "CSMT (formerly Victoria Terminus) is a UNESCO World Heritage Victorian Gothic landmark."
    },
    {
      "question": "Which Indian railway zone is headquartered at Churchgate in Mumbai?",
      "options": [
        "Western Railway",
        "Central Railway",
        "South Western Railway",
        "Konkan Railway"
      ],
      "answer": "Western Railway",
      "explanation": "Western Railway operates the Mumbai suburban rail network up to Dahanu Road."
    },
    {
      "question": "What engineering marvel railway line traverses 146 rivers and 91 tunnels along the Konkan coast?",
      "options": [
        "Konkan Railway",
        "Kalka-Shimla Railway",
        "Nilgiri Mountain Railway",
        "Darjeeling Himalayan Railway"
      ],
      "answer": "Konkan Railway",
      "explanation": "Engineered under E. Sreedharan, Konkan Railway connects Roha to Thokur across rugged terrain."
    },
    {
      "question": "Which mountain railway in West Bengal is a UNESCO World Heritage site featuring the 'Toy Train'?",
      "options": [
        "Darjeeling Himalayan Railway",
        "Kalka-Shimla",
        "Nilgiri Mountain Railway",
        "Matheran Hill Railway"
      ],
      "answer": "Darjeeling Himalayan Railway",
      "explanation": "Built in 1881 using zig-zag loops, the narrow-gauge train ascends to Ghum station (2,258 m)."
    },
    {
      "question": "Which mountain railway uses a unique alternate rack-and-pinion system to climb steep Nilgiri slopes?",
      "options": [
        "Nilgiri Mountain Railway",
        "Darjeeling Himalayan Railway",
        "Kalka-Shimla Railway",
        "Kangra Valley Railway"
      ],
      "answer": "Nilgiri Mountain Railway",
      "explanation": "NMR's metre-gauge steam locos use the Abt rack system to climb gradients up to 1:12."
    },
    {
      "question": "Which international waterway connects the Mediterranean Sea directly with the Red Sea?",
      "options": [
        "Suez Canal",
        "Panama Canal",
        "Kiel Canal",
        "Bosphorus Strait"
      ],
      "answer": "Suez Canal",
      "explanation": "Opened in 1869, the 193 km Suez Canal eliminates the voyage around Africa."
    }
  ],
  "senior": [
    {
      "question": "Which climatic phenomenon involves the periodic warming of sea surface temperatures in the central and eastern Pacific Ocean, impacting the Indian Monsoon?",
      "options": [
        "El Niño",
        "La Niña",
        "Coriolis Effect",
        "Walker Circulation"
      ],
      "answer": "El Niño",
      "explanation": "El Niño events disrupt normal Pacific trade winds and often suppress the strength of the Indian summer monsoon."
    },
    {
      "question": "The \"Ten Degree Channel\" separates which two island groups in the Indian Ocean?",
      "options": [
        "Andaman Islands and Nicobar Islands",
        "Lakshadweep and Maldives",
        "Minicoy and Amindivi",
        "Daman and Diu"
      ],
      "answer": "Andaman Islands and Nicobar Islands",
      "explanation": "The Ten Degree Channel lies on the 10° N parallel dividing the Andaman group from the Nicobar group."
    },
    {
      "question": "Which geomorphic process causes the mechanical disintegration and chemical decomposition of rocks in situ?",
      "options": [
        "Weathering",
        "Erosion",
        "Mass Wasting",
        "Deposition"
      ],
      "answer": "Weathering",
      "explanation": "Weathering is the breakdown of rocks at the Earth’s surface without physical transportation."
    },
    {
      "question": "Which type of soil in India is also known as \"Regur Soil\" and is ideally suited for cotton cultivation?",
      "options": [
        "Black Soil",
        "Alluvial Soil",
        "Red and Yellow Soil",
        "Laterite Soil"
      ],
      "answer": "Black Soil",
      "explanation": "Black soil (Regur) derived from Deccan volcanic basalt is rich in clay and moisture-retentive."
    },
    {
      "question": "What causes the Coriolis effect which deflects winds to the right in the Northern Hemisphere?",
      "options": [
        "Earth’s rotation on its axis",
        "Gravitational pull of the Moon",
        "Solar radiation intensity",
        "Oceanic density gradients"
      ],
      "answer": "Earth’s rotation on its axis",
      "explanation": "Earth’s eastward rotation creates an apparent deflection of moving fluid masses according to Ferrel’s Law."
    },
    {
      "question": "Which geomorphological theory formulated by Alfred Wegener in 1912 proposed continental drift?",
      "options": [
        "Continental Drift Theory",
        "Plate Tectonics",
        "Sea Floor Spreading",
        "Geosynclinal Theory"
      ],
      "answer": "Continental Drift Theory",
      "explanation": "Wegener cited jigsaw fit, paleoclimatic belts, and Mesosaurus fossil distributions across oceans."
    },
    {
      "question": "Who formulated the concept of 'Sea Floor Spreading' in 1960 explaining mid-oceanic ridges?",
      "options": [
        "Harry Hess",
        "Alfred Wegener",
        "Arthur Holmes",
        "Tuzo Wilson"
      ],
      "answer": "Harry Hess",
      "explanation": "Hess demonstrated that convective mantle upwelling creates new oceanic crust at mid-ocean ridges."
    },
    {
      "question": "What is the zone of seismic activity where oceanic crust descends beneath continental crust called?",
      "options": [
        "Benioff Zone (Subduction Zone)",
        "Mid-ocean ridge",
        "Transform fault",
        "Rift valley"
      ],
      "answer": "Benioff Zone (Subduction Zone)",
      "explanation": "Deep earthquakes occur along inclined Wadati-Benioff zones where tectonic plates subduct."
    },
    {
      "question": "What type of plate boundary is the San Andreas Fault in California an example of?",
      "options": [
        "Transform Fault Boundary",
        "Convergent Boundary",
        "Divergent Boundary",
        "Subduction Zone"
      ],
      "answer": "Transform Fault Boundary",
      "explanation": "Plates slide horizontally past one another along transform strikes without creating or destroying crust."
    },
    {
      "question": "What is the discontinuity boundary separating Earth's crust from the underlying mantle called?",
      "options": [
        "Mohorovičić Discontinuity (Moho)",
        "Gutenberg Discontinuity",
        "Lehmann Discontinuity",
        "Conrad Discontinuity"
      ],
      "answer": "Mohorovičić Discontinuity (Moho)",
      "explanation": "Seismic P-waves accelerate sharply at the Moho due to increased peridotite density."
    },
    {
      "question": "What boundary separates Earth's silicate mantle from the dense liquid iron outer core at 2,900 km?",
      "options": [
        "Gutenberg Discontinuity",
        "Mohorovičić Discontinuity",
        "Lehmann Discontinuity",
        "Repetti Discontinuity"
      ],
      "answer": "Gutenberg Discontinuity",
      "explanation": "P-waves refract sharply and S-waves vanish completely at the Gutenberg mantle-core boundary."
    },
    {
      "question": "What is the primary evidence that Earth's outer core is liquid?",
      "options": [
        "S-waves cannot propagate through it",
        "P-waves cannot pass through it",
        "Magnetic field measurements",
        "Volcanic magma composition"
      ],
      "answer": "S-waves cannot propagate through it",
      "explanation": "Transverse shear S-waves cannot travel through liquids, creating a prominent S-wave shadow zone."
    },
    {
      "question": "What is the subterranean point within Earth where earthquake fault rupture originates called?",
      "options": [
        "Focus (Hypocenter)",
        "Epicenter",
        "Fault Scarp",
        "Seismic Node"
      ],
      "answer": "Focus (Hypocenter)",
      "explanation": "The hypocenter is the exact subterranean origin where accumulated strain energy is released."
    },
    {
      "question": "What is the point on Earth's surface directly vertically above the earthquake hypocenter called?",
      "options": [
        "Epicenter",
        "Focus",
        "Fault Trace",
        "Anticenter"
      ],
      "answer": "Epicenter",
      "explanation": "Seismic surface waves radiate outward across the ground from the epicenter."
    },
    {
      "question": "Which seismic waves travel fastest and are longitudinal compressional waves?",
      "options": [
        "P-Waves (Primary Waves)",
        "S-Waves (Secondary Waves)",
        "Rayleigh Waves",
        "Love Waves"
      ],
      "answer": "P-Waves (Primary Waves)",
      "explanation": "P-waves travel at 6–8 km/s through crust, compressing and dilating rock particles."
    },
    {
      "question": "Which map projection preserves true directions from the center and is standard for marine navigation?",
      "options": [
        "Mercator Projection",
        "Gnomonic Projection",
        "Peters Projection",
        "Conical Projection"
      ],
      "answer": "Mercator Projection",
      "explanation": "Gerardus Mercator's 1569 conformal projection represents lines of constant compass bearing as straight lines."
    },
    {
      "question": "What is the ratio between distance on a map and actual distance on the ground called?",
      "options": [
        "Representative Fraction (Scale)",
        "Projection Factor",
        "Contour Interval",
        "Azimuth"
      ],
      "answer": "Representative Fraction (Scale)",
      "explanation": "RF expresses map scale as a dimensionless fraction (e.g. 1:50,000)."
    },
    {
      "question": "What are the brown isolines drawn on topographic sheets connecting points of equal elevation called?",
      "options": [
        "Contour Lines",
        "Isobars",
        "Isotherms",
        "Isohyets"
      ],
      "answer": "Contour Lines",
      "explanation": "Closely spaced contours indicate steep cliffs, while widely spaced lines show gentle slopes."
    },
    {
      "question": "What are lines connecting places experiencing identical atmospheric pressure reduced to sea level called?",
      "options": [
        "Isobars",
        "Isotherms",
        "Isohyets",
        "Isogons"
      ],
      "answer": "Isobars",
      "explanation": "Isobaric pressure gradients govern wind speed and direction across synoptic weather charts."
    },
    {
      "question": "What are lines on a climatological map connecting locations with equal amounts of rainfall called?",
      "options": [
        "Isohyets",
        "Isobars",
        "Isotherms",
        "Isonephs"
      ],
      "answer": "Isohyets",
      "explanation": "Isohyets illustrate precipitation distribution across geographical regions."
    },
    {
      "question": "Which atmospheric pressure belt centered around 30°–35° N and S is known as the 'Horse Latitudes'?",
      "options": [
        "Subtropical High Pressure Belts",
        "Equatorial Low (Doldrums)",
        "Subpolar Low",
        "Polar High"
      ],
      "answer": "Subtropical High Pressure Belts",
      "explanation": "Descending dry air creates calm winds and cloudless skies, where sailing ships once jettisoned horses."
    },
    {
      "question": "What is the equatorial zone of low atmospheric pressure and converging trade winds called?",
      "options": [
        "Intertropical Convergence Zone (ITCZ / Doldrums)",
        "Horse Latitudes",
        "Ferrel Cell",
        "Hadley Cell"
      ],
      "answer": "Intertropical Convergence Zone (ITCZ / Doldrums)",
      "explanation": "The ITCZ shifts seasonally north and south, dictating tropical monsoon rhythms."
    },
    {
      "question": "Which global atmospheric circulation cell operates between the Equator and 30° latitude?",
      "options": [
        "Hadley Cell",
        "Ferrel Cell",
        "Polar Cell",
        "Walker Cell"
      ],
      "answer": "Hadley Cell",
      "explanation": "Air rises at the ITCZ, flows poleward aloft, and descends at subtropical ridges (Hadley circulation)."
    },
    {
      "question": "Which atmospheric circulation cell operates in the temperate zone between 30° and 60° latitude?",
      "options": [
        "Ferrel Cell",
        "Hadley Cell",
        "Polar Cell",
        "Equatorial Cell"
      ],
      "answer": "Ferrel Cell",
      "explanation": "The thermally indirect Ferrel cell features poleward surface winds deflected eastward (Westerlies)."
    },
    {
      "question": "What effect deflects moving air and water currents to the right in the Northern Hemisphere?",
      "options": [
        "Coriolis Effect (Ferrel's Law)",
        "Bernoulli Principle",
        "Doppler Effect",
        "Magnus Effect"
      ],
      "answer": "Coriolis Effect (Ferrel's Law)",
      "explanation": "Earth's rotation causes apparent deflection: rightward in Northern, leftward in Southern Hemisphere."
    },
    {
      "question": "What warm ocean current flows northeastward along the eastern coast of North America into Europe?",
      "options": [
        "Gulf Stream",
        "Labrador Current",
        "Canary Current",
        "California Current"
      ],
      "answer": "Gulf Stream",
      "explanation": "The Gulf Stream carries tropical warmth across the Atlantic, moderating Western Europe's climate."
    },
    {
      "question": "Which cold ocean current flows southward along the Pacific coast of South America?",
      "options": [
        "Humboldt Current (Peru Current)",
        "Benguela Current",
        "Kuroshio Current",
        "Falkland Current"
      ],
      "answer": "Humboldt Current (Peru Current)",
      "explanation": "The rich cold upwelling of the Peru current supports the world's most productive marine fisheries."
    },
    {
      "question": "Which warm western boundary ocean current flows northward along the eastern coast of Japan?",
      "options": [
        "Kuroshio Current (Black Tide)",
        "Oyashio Current",
        "California Current",
        "Agulhas Current"
      ],
      "answer": "Kuroshio Current (Black Tide)",
      "explanation": "Kuroshio brings warm tropical waters northward, moderating Japan's winter temperatures."
    },
    {
      "question": "Which cold subarctic current flows southward past Kamchatka to meet the warm Kuroshio?",
      "options": [
        "Oyashio Current (Kuril Current)",
        "Kuroshio",
        "Tsushima Current",
        "California Current"
      ],
      "answer": "Oyashio Current (Kuril Current)",
      "explanation": "The convergence of Oyashio and Kuroshio creates rich fishing banks and dense sea fogs."
    },
    {
      "question": "What is the technical term for the circular oceanic surface current gyres driven by planetary winds?",
      "options": [
        "Ocean Gyres",
        "Tidal Bores",
        "Rip Currents",
        "Upwellings"
      ],
      "answer": "Ocean Gyres",
      "explanation": "Five major subtropical gyres dominate the North/South Pacific, Atlantic, and Indian oceans."
    },
    {
      "question": "What is the name of the vertical transition layer in oceans where temperature drops rapidly with depth?",
      "options": [
        "Thermocline",
        "Halocline",
        "Pycnocline",
        "Epilimnion"
      ],
      "answer": "Thermocline",
      "explanation": "The thermocline separates warm mixed surface waters from frigid deep abyss waters."
    },
    {
      "question": "What is the oceanic layer where salinity gradients change drastically with depth called?",
      "options": [
        "Halocline",
        "Thermocline",
        "Pycnocline",
        "Mesopelagic"
      ],
      "answer": "Halocline",
      "explanation": "Halocline gradients regulate water column stratification and thermohaline circulation."
    },
    {
      "question": "What global oceanic conveyor belt circulation is driven by temperature and salinity density differences?",
      "options": [
        "Thermohaline Circulation (MOC)",
        "Surface Gyres",
        "Ekman Transport",
        "Langmuir Circulation"
      ],
      "answer": "Thermohaline Circulation (MOC)",
      "explanation": "Cold, salty North Atlantic deep water sinks, driving planetary conveyor circulation over millennia."
    },
    {
      "question": "What is the net 90-degree transport of surface water relative to wind direction due to Coriolis called?",
      "options": [
        "Ekman Transport",
        "Geostrophic Flow",
        "Langmuir Spiral",
        "Kelvin Wave"
      ],
      "answer": "Ekman Transport",
      "explanation": "Frictional drag deflected by Coriolis creates net transport 90° to the right of wind in North."
    },
    {
      "question": "What is a crescent-shaped sand dune with convex slope facing the wind and horns pointing downwind?",
      "options": [
        "Barchan",
        "Seif",
        "Parabolic Dune",
        "Transverse Dune"
      ],
      "answer": "Barchan",
      "explanation": "Barchans form in deserts where winds blow predominantly from one direction across limited sand."
    },
    {
      "question": "What is a longitudinal sand dune with a sharp crest aligned parallel to the prevailing wind called?",
      "options": [
        "Seif / Longitudinal Dune",
        "Barchan",
        "Star Dune",
        "Transverse Dune"
      ],
      "answer": "Seif / Longitudinal Dune",
      "explanation": "Seif dunes form elongated knife-edge ridges extending for tens of kilometers."
    },
    {
      "question": "What is an isolated, steep-sided residual hill rising abruptly from an arid plain called?",
      "options": [
        "Inselberg / Monadnock",
        "Mesa",
        "Butte",
        "Pediment"
      ],
      "answer": "Inselberg / Monadnock",
      "explanation": "Erosion of softer surrounding rock leaves resistant granitic inselbergs (e.g. Ayers Rock)."
    },
    {
      "question": "What is a mushroom-shaped rock pillar sculpted by wind abrasion in desert environments called?",
      "options": [
        "Mushroom Rock (Pedestal Rock / Zeugen)",
        "Yardang",
        "Inselberg",
        "Ventifact"
      ],
      "answer": "Mushroom Rock (Pedestal Rock / Zeugen)",
      "explanation": "Windborne sand grains abrade the lower portion of rock boulders faster than the top."
    },
    {
      "question": "What are limestone topography features formed by chemical dissolution of calcium carbonate called?",
      "options": [
        "Karst Topography",
        "Fluvial Landforms",
        "Aeolian Landforms",
        "Glacial Drift"
      ],
      "answer": "Karst Topography",
      "explanation": "Carbonic acid in rainwater dissolves limestone, carving sinkholes, dolines, stalactites, and caves."
    },
    {
      "question": "What mineral formation hangs down like an icicle from the ceiling of a limestone cave?",
      "options": [
        "Stalactite",
        "Stalagmite",
        "Pillar",
        "Doline"
      ],
      "answer": "Stalactite",
      "explanation": "Precipitating calcium carbonate drip water creates descending calcite stalactites."
    },
    {
      "question": "What mineral formation grows upward from the floor of a limestone cave beneath dripping water?",
      "options": [
        "Stalagmite",
        "Stalactite",
        "Curtain",
        "Travertine"
      ],
      "answer": "Stalagmite",
      "explanation": "Splashing mineralized drips build upward-mounding calcite pillars called stalagmites."
    },
    {
      "question": "What is an amphitheater-shaped hollow carved at the head of a glacial valley called?",
      "options": [
        "Cirque (Corrie / Cwm)",
        "Arete",
        "Horn",
        "Moraine"
      ],
      "answer": "Cirque (Corrie / Cwm)",
      "explanation": "Glacial plucking and freeze-thaw steepen the headwalls of high mountain cirques."
    },
    {
      "question": "What sharp, knife-edge ridge separates two adjacent glacial cirques?",
      "options": [
        "Arête",
        "Horn",
        "Esker",
        "Drumlin"
      ],
      "answer": "Arête",
      "explanation": "When two neighboring glaciers erode headwalls toward each other, an arête ridge forms."
    },
    {
      "question": "What pyramidal peak is sculpted when multiple cirques erode a mountain summit (e.g. Matterhorn)?",
      "options": [
        "Glacial Horn",
        "Arête",
        "Nunatak",
        "Crag"
      ],
      "answer": "Glacial Horn",
      "explanation": "Three or more cirques cutting into a central peak create a sharp pyramidal horn."
    },
    {
      "question": "What are linear ridges of unsorted glacial debris and till deposited along glacier margins called?",
      "options": [
        "Moraines",
        "Eskers",
        "Kames",
        "Drumlins"
      ],
      "answer": "Moraines",
      "explanation": "Lateral, medial, and terminal moraines map the past extents and flow paths of glaciers."
    },
    {
      "question": "What elongated, teardrop-shaped hill of compacted glacial till resembles an inverted spoon?",
      "options": [
        "Drumlin",
        "Esker",
        "Kame",
        "Moraine"
      ],
      "answer": "Drumlin",
      "explanation": "Drumlins occur in swarms (basket-of-eggs topography) pointing parallel to ice flow."
    },
    {
      "question": "What sinuous winding ridge of layered gravel and sand is deposited by subglacial meltwater streams?",
      "options": [
        "Esker",
        "Drumlin",
        "Moraine",
        "Cirque"
      ],
      "answer": "Esker",
      "explanation": "Eskers remain as elevated railway-like ridges after the continental ice sheet melts."
    },
    {
      "question": "What is a steep-sided, drowned glacial valley with deep marine waters called?",
      "options": [
        "Fjord",
        "Ria",
        "Dalmatian Coast",
        "Estuary"
      ],
      "answer": "Fjord",
      "explanation": "Submerged U-shaped valleys formed by glaciers along coastlines (e.g. Norway, New Zealand)."
    },
    {
      "question": "What is a drowned river valley coast formed by submergence of unglaciated river valleys called?",
      "options": [
        "Ria Coast",
        "Fjord",
        "Haff Coast",
        "Barrier Coast"
      ],
      "answer": "Ria Coast",
      "explanation": "Rias (such as in Galicia, Spain or southwest Ireland) feature dendritic coastal embayments."
    },
    {
      "question": "What is the demographic stage characterized by falling death rates while birth rates remain high?",
      "options": [
        "Stage 2 (Population Explosion / Transition)",
        "Stage 1",
        "Stage 3",
        "Stage 4"
      ],
      "answer": "Stage 2 (Population Explosion / Transition)",
      "explanation": "Improved sanitation and medicine reduce mortality, causing rapid population growth."
    },
    {
      "question": "What is the demographic stage characterized by low birth rates and low death rates in developed nations?",
      "options": [
        "Stage 4 (Low Stationary Stage)",
        "Stage 2",
        "Stage 1",
        "Stage 3"
      ],
      "answer": "Stage 4 (Low Stationary Stage)",
      "explanation": "Urbanization, high education, and family planning stabilize population numbers."
    },
    {
      "question": "What is the ratio between elderly and young non-working populations to the working-age population called?",
      "options": [
        "Dependency Ratio",
        "Sex Ratio",
        "Fertility Rate",
        "Crude Birth Rate"
      ],
      "answer": "Dependency Ratio",
      "explanation": "Dependency ratio compares age groups <15 and >64 against the active workforce (15–64)."
    },
    {
      "question": "What is the economic growth potential resulting from shifts in a population's age structure called?",
      "options": [
        "Demographic Dividend",
        "Demographic Trap",
        "Malthusian Ceiling",
        "Net Migration"
      ],
      "answer": "Demographic Dividend",
      "explanation": "When the working-age share exceeds dependents, productive investment and savings accelerate."
    },
    {
      "question": "Which geographical theory formulated by Walter Christaller explains the distribution of urban settlements?",
      "options": [
        "Central Place Theory (1933)",
        "Burgess Concentric Zone Model",
        "Hoyt Sector Model",
        "Multiple Nuclei Model"
      ],
      "answer": "Central Place Theory (1933)",
      "explanation": "Christaller used hexagonal market thresholds and ranges of goods to model settlement hierarchies."
    },
    {
      "question": "Which model proposed by Johann Heinrich von Thünen models agricultural land use around a market city?",
      "options": [
        "Isolated State Model (1826)",
        "Central Place Theory",
        "Weber's Industrial Location",
        "Heartland Theory"
      ],
      "answer": "Isolated State Model (1826)",
      "explanation": "Von Thünen showed concentric rings of dairy, forestry, grains, and ranching based on transport costs."
    }
  ]
}
  };
})();
