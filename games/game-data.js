/* ===================================================
 * Educational Games Data Bank
 * Dr. A.P.J. Abdul Kalam Inter College
 * 5 Class Tiers:
 * 1. Little Learners (Nursery, LKG, UKG)
 * 2. Junior Learners (Class 1 - 5)
 * 3. Middle School (Class 6 - 8)
 * 4. Secondary (Class 9 - 10)
 * 5. Senior Secondary (Class 11 - 12)
 * =================================================== */

window.GAME_DATA = {
  // Helper to map specific class (e.g. '3' or 'ukg') to tier key
  getTier: function(classLevel) {
    if (!classLevel) return 'junior';
    const cl = String(classLevel).toLowerCase().trim();
    if (cl === 'nursery' || cl === 'lkg' || cl === 'ukg') return 'little';
    const num = parseInt(cl, 10);
    if (!isNaN(num)) {
      if (num <= 5) return 'junior';
      if (num <= 8) return 'middle';
      if (num <= 10) return 'secondary';
      return 'senior';
    }
    return 'junior';
  },

  // 1. MEMORY MATCH THEMES
  memory: {
    little: [
      { id: '1', label: 'Lion', icon: '🦁', match: 'Lion' },
      { id: '2', label: 'Elephant', icon: '🐘', match: 'Elephant' },
      { id: '3', label: 'Apple', icon: '🍎', match: 'Apple' },
      { id: '4', label: 'Mango', icon: '🥭', match: 'Mango' },
      { id: '5', label: 'Star', icon: '⭐', match: 'Star' },
      { id: '6', label: 'Sun', icon: '☀️', match: 'Sun' },
      { id: '7', label: 'Book', icon: '📚', match: 'Book' },
      { id: '8', label: 'Pencil', icon: '✏️', match: 'Pencil' }
    ],
    junior: [
      { id: '1', label: 'Earth', icon: '🌍', match: 'Earth' },
      { id: '2', label: 'Rocket', icon: '🚀', match: 'Rocket' },
      { id: '3', label: 'Microscope', icon: '🔬', match: 'Microscope' },
      { id: '4', label: 'Plant', icon: '🌱', match: 'Plant' },
      { id: '5', label: 'Clock', icon: '⏰', match: 'Clock' },
      { id: '6', label: 'Magnet', icon: '🧲', match: 'Magnet' },
      { id: '7', label: 'Computer', icon: '💻', match: 'Computer' },
      { id: '8', label: 'Compass', icon: '🧭', match: 'Compass' }
    ],
    middle: [
      { id: '1', label: 'Hydrogen (H)', icon: '🧪', match: 'Hydrogen (H)' },
      { id: '2', label: 'Oxygen (O₂)', icon: '💨', match: 'Oxygen (O₂)' },
      { id: '3', label: 'Photosynthesis', icon: '🌿', match: 'Photosynthesis' },
      { id: '4', label: 'Gravity (g)', icon: '🍎', match: 'Gravity (g)' },
      { id: '5', label: 'Cell Nucleus', icon: '🧬', match: 'Cell Nucleus' },
      { id: '6', label: 'Telescope', icon: '🔭', match: 'Telescope' },
      { id: '7', label: 'Prism Light', icon: '🌈', match: 'Prism Light' },
      { id: '8', label: 'Circulatory', icon: '❤️', match: 'Circulatory' }
    ],
    secondary: [
      { id: '1', label: 'E = mc²', icon: '⚡', match: 'E = mc²' },
      { id: '2', label: 'DNA Helix', icon: '🧬', match: 'DNA Helix' },
      { id: '3', label: 'Ohm’s Law (V=IR)', icon: '💡', match: 'Ohm’s Law (V=IR)' },
      { id: '4', label: 'Mitochondria', icon: '🔋', match: 'Mitochondria' },
      { id: '5', label: 'Periodic Table', icon: '📊', match: 'Periodic Table' },
      { id: '6', label: 'Pythagoras', icon: '📐', match: 'Pythagoras' },
      { id: '7', label: 'Optics Focus', icon: '🔍', match: 'Optics Focus' },
      { id: '8', label: 'Avogadro Number', icon: '🔢', match: 'Avogadro Number' }
    ],
    senior: [
      { id: '1', label: 'Schrödinger Eq.', icon: 'ψ', match: 'Schrödinger Eq.' },
      { id: '2', label: 'Thermodynamics ΔS', icon: '🔥', match: 'Thermodynamics ΔS' },
      { id: '3', label: 'Benzene Ring (C₆H₆)', icon: '⌬', match: 'Benzene Ring (C₆H₆)' },
      { id: '4', label: 'Faraday Induction', icon: '🧲', match: 'Faraday Induction' },
      { id: '5', label: 'Integration ∫dx', icon: '∫', match: 'Integration ∫dx' },
      { id: '6', label: 'ATP Synthase', icon: '⚙️', match: 'ATP Synthase' },
      { id: '7', label: 'Photoelectric Eff.', icon: '☀️', match: 'Photoelectric Eff.' },
      { id: '8', label: 'Le Chatelier', icon: '⚖️', match: 'Le Chatelier' }
    ]
  },

  // 2. WORD WIZARD (Vocabulary, Spelling, Synonyms, Antonyms, Cloze)
  words: {
    little: [
      {
        mode: 'spelling',
        question: 'Which is the correct spelling for the king of the jungle?',
        options: ['Liyon', 'Lion', 'Loin', 'Lyen'],
        answer: 'Lion',
        explanation: 'L-I-O-N is the correct spelling for Lion.'
      },
      {
        mode: 'meaning',
        question: 'What color is a ripe banana?',
        options: ['Blue', 'Yellow', 'Purple', 'Black'],
        answer: 'Yellow',
        explanation: 'A ripe banana has a bright yellow peel.'
      },
      {
        mode: 'cloze',
        question: 'The bird flew up in the _______.',
        options: ['sky', 'water', 'plate', 'shoe'],
        answer: 'sky',
        explanation: 'Birds fly in the sky using their wings.'
      },
      {
        mode: 'antonym',
        question: 'What is the opposite of BIG?',
        options: ['Tall', 'Small', 'Heavy', 'Huge'],
        answer: 'Small',
        explanation: 'The opposite of big is small.'
      },
      {
        mode: 'synonym',
        question: 'Which word means the same as HAPPY?',
        options: ['Glad', 'Sad', 'Angry', 'Tired'],
        answer: 'Glad',
        explanation: 'Glad and Happy both express feeling joyful.'
      }
    ],
    junior: [
      {
        mode: 'spelling',
        question: 'Choose the correctly spelled word for school work:',
        options: ['Homevork', 'Homework', 'Homewrok', 'Humework'],
        answer: 'Homework',
        explanation: 'Homework is spelled H-O-M-E-W-O-R-K.'
      },
      {
        mode: 'synonym',
        question: 'What is a synonym for COURAGEOUS?',
        options: ['Brave', 'Timid', 'Fearful', 'Lazy'],
        answer: 'Brave',
        explanation: 'Courageous means showing bravery and courage.'
      },
      {
        mode: 'antonym',
        question: 'What is the antonym of ANCIENT?',
        options: ['Old', 'Modern', 'Historic', 'Antique'],
        answer: 'Modern',
        explanation: 'Ancient means very old, and modern means contemporary/new.'
      },
      {
        mode: 'meaning',
        question: 'What does "Curious" mean?',
        options: ['Eager to learn and know', 'Always sleepy', 'Very angry', 'Extremely fast'],
        answer: 'Eager to learn and know',
        explanation: 'Curiosity is a desire to learn or investigate things.'
      },
      {
        mode: 'cloze',
        question: 'Dr. Kalam was renowned for his profound _______ in science.',
        options: ['wisdom', 'carelessness', 'delay', 'forgetfulness'],
        answer: 'wisdom',
        explanation: 'Wisdom means having knowledge, experience, and good judgement.'
      }
    ],
    middle: [
      {
        mode: 'spelling',
        question: 'Select the correct spelling:',
        options: ['Accomodation', 'Accommodation', 'Acomodation', 'Acommodation'],
        answer: 'Accommodation',
        explanation: 'Accommodation has double "c" and double "m".'
      },
      {
        mode: 'synonym',
        question: 'Choose the word closest in meaning to DILIGENT:',
        options: ['Hardworking', 'Careless', 'Passive', 'Impulsive'],
        answer: 'Hardworking',
        explanation: 'Diligent means showing steady, earnest, and energetic effort.'
      },
      {
        mode: 'antonym',
        question: 'What is the opposite of OBSOLETE?',
        options: ['Outdated', 'Current', 'Antique', 'Extinct'],
        answer: 'Current',
        explanation: 'Obsolete means no longer produced or used; current means modern and active.'
      },
      {
        mode: 'meaning',
        question: 'What does BENEVOLENT mean?',
        options: ['Kind and generous', 'Hostile and harmful', 'Cold and distant', 'Lazy and slow'],
        answer: 'Kind and generous',
        explanation: 'Benevolent derives from Latin meaning well-wishing, charitable and kind.'
      },
      {
        mode: 'cloze',
        question: 'The scientist conducted rigorous trials to _______ the hypothesis.',
        options: ['validate', 'shatter', 'ignore', 'complicate'],
        answer: 'validate',
        explanation: 'Validate means to check or prove the validity or accuracy of something.'
      }
    ],
    secondary: [
      {
        mode: 'synonym',
        question: 'Identify the synonym for METICULOUS:',
        options: ['Precise and careful', 'Careless and hasty', 'Vague', 'Sluggish'],
        answer: 'Precise and careful',
        explanation: 'Meticulous means showing great attention to detail; very careful and precise.'
      },
      {
        mode: 'antonym',
        question: 'What is the antonym of CANDID?',
        options: ['Frank', 'Deceptive', 'Direct', 'Honest'],
        answer: 'Deceptive',
        explanation: 'Candid means truthful and straightforward; its antonym is deceptive or secretive.'
      },
      {
        mode: 'spelling',
        question: 'Select the correctly spelled word:',
        options: ['Surveillance', 'Surveilance', 'Survalience', 'Survalance'],
        answer: 'Surveillance',
        explanation: 'Surveillance is spelled S-U-R-V-E-I-L-L-A-N-C-E.'
      },
      {
        mode: 'meaning',
        question: 'What does "Ephemeral" mean?',
        options: ['Lasting for a very short time', 'Eternal and everlasting', 'Heavy and massive', 'Deeply sorrowful'],
        answer: 'Lasting for a very short time',
        explanation: 'Ephemeral means lasting or living for a very brief period.'
      },
      {
        mode: 'cloze',
        question: 'The committee was impressed by the candidate’s _______ speech.',
        options: ['eloquent', 'incoherent', 'lethargic', 'monotonous'],
        answer: 'eloquent',
        explanation: 'Eloquent describes fluent, forceful, and persuasive speech.'
      }
    ],
    senior: [
      {
        mode: 'synonym',
        question: 'What is the closest synonym to UBIQUITOUS?',
        options: ['Omnipresent', 'Scarce', 'Unique', 'Obscure'],
        answer: 'Omnipresent',
        explanation: 'Ubiquitous means present, appearing, or found everywhere.'
      },
      {
        mode: 'antonym',
        question: 'What is the antonym of ESOTERIC?',
        options: ['Mainstream / Commonplace', 'Arcane', 'Cryptic', 'Mystical'],
        answer: 'Mainstream / Commonplace',
        explanation: 'Esoteric means understood by only a small number of people with specialized knowledge.'
      },
      {
        mode: 'meaning',
        question: 'What is the meaning of PARADIGM?',
        options: ['A typical example, model or conceptual framework', 'A sharp mathematical contradiction', 'A temporary illusion', 'A minor mechanical error'],
        answer: 'A typical example, model or conceptual framework',
        explanation: 'A paradigm is a distinct set of concepts, patterns, or theories in a discipline.'
      },
      {
        mode: 'spelling',
        question: 'Select the correct spelling:',
        options: ['Idiosyncrasy', 'Ideosyncracy', 'Idiosyncracy', 'Ideosyncrasy'],
        answer: 'Idiosyncrasy',
        explanation: 'Idiosyncrasy is spelled I-D-I-O-S-Y-N-C-R-A-S-Y.'
      },
      {
        mode: 'cloze',
        question: 'His comprehensive analysis served to _______ previously ambiguous experimental data.',
        options: ['elucidate', 'obfuscate', 'stagnate', 'undermine'],
        answer: 'elucidate',
        explanation: 'Elucidate means to make something lucid, clear and easy to understand.'
      }
    ]
  },

  // 3. PATTERN MASTER (Number, Shape, Letter, Color, Logical)
  patterns: {
    little: [
      {
        sequence: ['🔴', '🔵', '🔴', '🔵', '?'],
        options: ['🔴', '🔵', '🟢', '🟡'],
        answer: '🔴',
        explanation: 'The pattern alternates between Red and Blue circle.'
      },
      {
        sequence: ['1', '2', '3', '4', '?'],
        options: ['5', '6', '3', '7'],
        answer: '5',
        explanation: 'Counting consecutive numbers (+1 each time): 1, 2, 3, 4, 5.'
      },
      {
        sequence: ['⭐', '⭐', '🌙', '⭐', '⭐', '?'],
        options: ['🌙', '⭐', '☀️', '☁️'],
        answer: '🌙',
        explanation: 'The pattern repeats: Star, Star, Moon.'
      },
      {
        sequence: ['A', 'B', 'A', 'B', '?'],
        options: ['A', 'B', 'C', 'D'],
        answer: 'A',
        explanation: 'Alternating letters: A, B, A, B, A.'
      },
      {
        sequence: ['🔺', '🔷', '🔺', '🔷', '?'],
        options: ['🔺', '🔷', '⭐', '🟢'],
        answer: '🔺',
        explanation: 'Triangle, Diamond, Triangle, Diamond, Triangle!'
      }
    ],
    junior: [
      {
        sequence: ['2', '4', '6', '8', '?'],
        options: ['10', '12', '9', '11'],
        answer: '10',
        explanation: 'Adding 2 each step (even numbers sequence).'
      },
      {
        sequence: ['A', 'C', 'E', 'G', '?'],
        options: ['I', 'H', 'J', 'K'],
        answer: 'I',
        explanation: 'Skipping one letter in the alphabet (+2 letters each step).'
      },
      {
        sequence: ['5', '10', '15', '20', '?'],
        options: ['25', '30', '22', '24'],
        answer: '25',
        explanation: 'Multiples of 5 (+5 added to each term).'
      },
      {
        sequence: ['100', '90', '80', '70', '?'],
        options: ['60', '50', '65', '55'],
        answer: '60',
        explanation: 'Subtracting 10 at each step.'
      },
      {
        sequence: ['1', '4', '9', '16', '?'],
        options: ['25', '20', '30', '36'],
        answer: '25',
        explanation: 'Square numbers: 1², 2², 3², 4², 5² = 25.'
      }
    ],
    middle: [
      {
        sequence: ['3', '6', '12', '24', '?'],
        options: ['48', '36', '42', '52'],
        answer: '48',
        explanation: 'Each number is multiplied by 2 (Geometric progression).'
      },
      {
        sequence: ['Z', 'X', 'V', 'T', '?'],
        options: ['R', 'S', 'Q', 'P'],
        answer: 'R',
        explanation: 'Counting backward skipping one letter (-2 in alphabet).'
      },
      {
        sequence: ['1', '1', '2', '3', '5', '8', '?'],
        options: ['13', '12', '15', '11'],
        answer: '13',
        explanation: 'Fibonacci sequence: each term is the sum of the two preceding ones (5 + 8 = 13).'
      },
      {
        sequence: ['2', '5', '10', '17', '?'],
        options: ['26', '24', '25', '27'],
        answer: '26',
        explanation: 'Pattern: n² + 1: (1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26).'
      },
      {
        sequence: ['1/2', '1/4', '1/8', '1/16', '?'],
        options: ['1/32', '1/24', '1/64', '1/18'],
        answer: '1/32',
        explanation: 'Each fraction denominator is multiplied by 2.'
      }
    ],
    secondary: [
      {
        sequence: ['2', '3', '5', '7', '11', '?'],
        options: ['13', '15', '9', '17'],
        answer: '13',
        explanation: 'Sequence of consecutive prime numbers.'
      },
      {
        sequence: ['8', '27', '64', '125', '?'],
        options: ['216', '196', '256', '343'],
        answer: '216',
        explanation: 'Cubes of consecutive integers: 2³, 3³, 4³, 5³, 6³ = 216.'
      },
      {
        sequence: ['A1', 'C3', 'E5', 'G7', '?'],
        options: ['I9', 'H8', 'J9', 'I8'],
        answer: 'I9',
        explanation: 'Letter advances by 2 (A->C->E->G->I), number advances by 2 (1->3->5->7->9).'
      },
      {
        sequence: ['4', '9', '20', '43', '?'],
        options: ['90', '86', '88', '92'],
        answer: '90',
        explanation: 'Pattern: (x * 2) + 1, + 2, + 3... (4*2+1=9, 9*2+2=20, 20*2+3=43, 43*2+4=90).'
      },
      {
        sequence: ['0', '7', '26', '63', '?'],
        options: ['124', '125', '126', '120'],
        answer: '124',
        explanation: 'Pattern: n³ - 1: (1³-1=0, 2³-1=7, 3³-1=26, 4³-1=63, 5³-1=124).'
      }
    ],
    senior: [
      {
        sequence: ['1', '8', '27', '64', '125', '?'],
        options: ['216', '243', '343', '196'],
        answer: '216',
        explanation: 'Sequence is n³: 6³ = 216.'
      },
      {
        sequence: ['2', '6', '12', '20', '30', '?'],
        options: ['42', '40', '44', '38'],
        answer: '42',
        explanation: 'Pattern: n(n+1): 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42.'
      },
      {
        sequence: ['3', '5', '9', '17', '33', '?'],
        options: ['65', '64', '66', '62'],
        answer: '65',
        explanation: 'Differences are powers of 2: +2, +4, +8, +16, +32 (33 + 32 = 65).'
      },
      {
        sequence: ['sin²θ', 'cos²θ', 'sec²θ - tan²θ', '?'],
        options: ['cosec²θ - cot²θ (= 1)', 'tanθ', 'sin2θ', 'cos2θ'],
        answer: 'cosec²θ - cot²θ (= 1)',
        explanation: 'All terms evaluate to standard trigonometric identity values of 1.'
      },
      {
        sequence: ['2', '12', '36', '80', '150', '?'],
        options: ['252', '240', '264', '216'],
        answer: '252',
        explanation: 'Pattern is n³ + n²: 6³ + 6² = 216 + 36 = 252.'
      }
    ]
  },

  // 4. SCIENCE CHALLENGE
  science: {
    little: [
      {
        question: 'Which animal gives us milk?',
        options: ['Cow', 'Lion', 'Tiger', 'Eagle'],
        answer: 'Cow',
        explanation: 'Cows are domestic dairy animals that provide nutritious milk.'
      },
      {
        question: 'Which part of the plant grows underground?',
        options: ['Root', 'Flower', 'Leaf', 'Fruit'],
        answer: 'Root',
        explanation: 'Roots grow beneath the soil to absorb water and minerals.'
      },
      {
        question: 'What do humans breathe in to stay alive?',
        options: ['Oxygen', 'Water', 'Soil', 'Smoke'],
        answer: 'Oxygen',
        explanation: 'Our lungs take in oxygen from the air which our body needs.'
      },
      {
        question: 'Which is the natural source of light for Earth during the day?',
        options: ['Sun', 'Moon', 'Torch', 'Candle'],
        answer: 'Sun',
        explanation: 'The Sun is the giant star at the center of our solar system providing light and heat.'
      },
      {
        question: 'How many legs does an insect usually have?',
        options: ['6', '4', '8', '2'],
        answer: '6',
        explanation: 'Insects have three pairs of jointed legs, making 6 legs in total.'
      }
    ],
    junior: [
      {
        question: 'Which green pigment in plant leaves captures sunlight for photosynthesis?',
        options: ['Chlorophyll', 'Hemoglobin', 'Melanin', 'Carotene'],
        answer: 'Chlorophyll',
        explanation: 'Chlorophyll gives plants their green color and traps sunlight energy to make food.'
      },
      {
        question: 'Which organ pumps blood throughout the human body?',
        options: ['Heart', 'Lungs', 'Stomach', 'Brain'],
        answer: 'Heart',
        explanation: 'The heart is a muscular organ that pumps oxygenated blood continuously.'
      },
      {
        question: 'Water boils at what temperature at sea level?',
        options: ['100°C', '0°C', '50°C', '212°C'],
        answer: '100°C',
        explanation: 'At standard atmospheric pressure, the boiling point of pure water is 100 degrees Celsius.'
      },
      {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        answer: 'Mars',
        explanation: 'Mars appears reddish because of iron oxide (rust) on its surface.'
      },
      {
        question: 'What type of energy does a moving object possess?',
        options: ['Kinetic Energy', 'Potential Energy', 'Chemical Energy', 'Nuclear Energy'],
        answer: 'Kinetic Energy',
        explanation: 'Kinetic energy is the energy possessed by an object due to its motion.'
      }
    ],
    middle: [
      {
        question: 'What is the chemical formula for common table salt?',
        options: ['NaCl', 'H₂O', 'CO₂', 'HCl'],
        answer: 'NaCl',
        explanation: 'Sodium Chloride (NaCl) is the chemical name for common salt.'
      },
      {
        question: 'Which organelle is known as the "Powerhouse of the Cell"?',
        options: ['Mitochondria', 'Ribosome', 'Nucleus', 'Golgi apparatus'],
        answer: 'Mitochondria',
        explanation: 'Mitochondria generate most of the chemical energy needed by the cell (ATP).'
      },
      {
        question: 'What is the speed of light in vacuum approximately?',
        options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '330 m/s', '1.5 × 10⁸ m/s'],
        answer: '3 × 10⁸ m/s',
        explanation: 'Light travels through a vacuum at roughly 300,000 kilometers per second (3 × 10⁸ m/s).'
      },
      {
        question: 'Which gas makes up the largest percentage of Earth’s atmosphere?',
        options: ['Nitrogen (~78%)', 'Oxygen (~21%)', 'Carbon Dioxide (~0.04%)', 'Argon (~0.9%)'],
        answer: 'Nitrogen (~78%)',
        explanation: 'Nitrogen constitutes about 78% of Earth’s atmosphere by volume.'
      },
      {
        question: 'What is the pH value of pure, neutral water at 25°C?',
        options: ['7', '0', '14', '1'],
        answer: '7',
        explanation: 'A pH of 7 is neutral; values below 7 are acidic, and above 7 are alkaline/basic.'
      }
    ],
    secondary: [
      {
        question: 'According to Newton’s Second Law of Motion, Force equals:',
        options: ['Mass × Acceleration (F=ma)', 'Mass / Acceleration', 'Mass × Velocity', 'Work / Time'],
        answer: 'Mass × Acceleration (F=ma)',
        explanation: 'Force is equal to the rate of change of momentum, simplified to F = m × a for constant mass.'
      },
      {
        question: 'Which lens is used to correct Myopia (near-sightedness)?',
        options: ['Concave lens', 'Convex lens', 'Cylindrical lens', 'Bifocal lens'],
        answer: 'Concave lens',
        explanation: 'A concave (diverging) lens helps diverge light rays so they focus properly on the retina in myopic eyes.'
      },
      {
        question: 'What is the atomic number of Carbon?',
        options: ['6', '12', '14', '8'],
        answer: '6',
        explanation: 'Carbon has 6 protons in its nucleus, so its atomic number is 6.'
      },
      {
        question: 'Which blood cells are primarily responsible for fighting infections?',
        options: ['White Blood Cells (Leukocytes)', 'Red Blood Cells (Erythrocytes)', 'Platelets (Thrombocytes)', 'Plasma'],
        answer: 'White Blood Cells (Leukocytes)',
        explanation: 'Leukocytes defend the immune system against viruses, bacteria, and foreign pathogens.'
      },
      {
        question: 'What is the SI unit of electrical resistance?',
        options: ['Ohm (Ω)', 'Volt (V)', 'Ampere (A)', 'Watt (W)'],
        answer: 'Ohm (Ω)',
        explanation: 'Resistance is measured in Ohms (Ω), following Ohm’s Law V = I × R.'
      }
    ],
    senior: [
      {
        question: 'In quantum mechanics, what does Heisenberg’s Uncertainty Principle state?',
        options: ['Position and momentum cannot both be measured with arbitrary precision simultaneously (Δx·Δp ≥ ℏ/2)', 'Energy can neither be created nor destroyed', 'Entropy of an isolated system always increases', 'Speed of light is invariant in all reference frames'],
        answer: 'Position and momentum cannot both be measured with arbitrary precision simultaneously (Δx·Δp ≥ ℏ/2)',
        explanation: 'Heisenberg showed the product of uncertainties in position and momentum is fundamentally bounded by ℏ/2.'
      },
      {
        question: 'Which organic reaction converts an aldehyde or ketone into an alkene using a phosphonium ylide?',
        options: ['Wittig Reaction', 'Aldol Condensation', 'Cannizzaro Reaction', 'Friedel-Crafts Alkylation'],
        answer: 'Wittig Reaction',
        explanation: 'The Wittig reaction couples carbonyl compounds with phosphonium ylides to synthesize alkenes regioselectively.'
      },
      {
        question: 'In human cellular respiration, where does the Krebs (Citric Acid) Cycle occur?',
        options: ['Mitochondrial Matrix', 'Cytoplasm', 'Inner Mitochondrial Membrane', 'Nucleoplasm'],
        answer: 'Mitochondrial Matrix',
        explanation: 'Glycolysis occurs in cytoplasm, whereas the Krebs cycle takes place within the mitochondrial matrix.'
      },
      {
        question: 'According to Lenz’s Law, the direction of an induced electromotive force (EMF) is such that it:',
        options: ['Opposes the change in magnetic flux that produces it', 'Reinforces the original magnetic flux', 'Depends solely on temperature', 'Always flows in clockwise loops'],
        answer: 'Opposes the change in magnetic flux that produces it',
        explanation: 'Lenz’s law is a consequence of conservation of energy; induced currents oppose the change causing them.'
      },
      {
        question: 'What is the hybridization of the central carbon atom in an alkyne (e.g. ethyne, HC≡CH)?',
        options: ['sp', 'sp²', 'sp³', 'dsp²'],
        answer: 'sp',
        explanation: 'Alkynes have linear geometry (180° bond angle) with sp hybridization on triple-bonded carbons.'
      }
    ]
  },

  // 5. GENERAL KNOWLEDGE (GK Explorer)
  gk: {
    little: [
      {
        question: 'What is the national animal of India?',
        options: ['Bengal Tiger', 'Lion', 'Elephant', 'Peacock'],
        answer: 'Bengal Tiger',
        explanation: 'The Royal Bengal Tiger is India’s national animal symbolising strength and grace.'
      },
      {
        question: 'What is the national bird of India?',
        options: ['Peacock', 'Parrot', 'Pigeon', 'Crow'],
        answer: 'Peacock',
        explanation: 'The Indian Peacock is celebrated for its stunning iridescent plumage and dance.'
      },
      {
        question: 'How many colors are there in the Indian National Flag (Tiranga)?',
        options: ['3 main bands (Saffron, White, Green)', '2', '5', '4'],
        answer: '3 main bands (Saffron, White, Green)',
        explanation: 'The Tiranga has three horizontal bands: Saffron at top, White in middle, and Green at bottom.'
      },
      {
        question: 'What is the capital city of India?',
        options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
        answer: 'New Delhi',
        explanation: 'New Delhi is the national capital and seat of the Government of India.'
      },
      {
        question: 'How many days are there in a normal year?',
        options: ['365', '300', '366', '400'],
        answer: '365',
        explanation: 'A standard calendar year has 365 days (leap years have 366).'
      }
    ],
    junior: [
      {
        question: 'Who was popularly known as the "Missile Man of India"?',
        options: ['Dr. A.P.J. Abdul Kalam', 'Dr. Homi Bhabha', 'Dr. Vikram Sarabhai', 'Sir C.V. Raman'],
        answer: 'Dr. A.P.J. Abdul Kalam',
        explanation: 'Dr. A.P.J. Abdul Kalam played a leading role in developing India’s missile defense programs and satellite launch vehicles.'
      },
      {
        question: 'Which is the longest river in India?',
        options: ['Ganga', 'Yamuna', 'Godavari', 'Narmada'],
        answer: 'Ganga',
        explanation: 'The Ganga flows over 2,525 km and is the longest river inside Indian territory.'
      },
      {
        question: 'Which state is our school (Dr. A.P.J. Abdul Kalam Inter College) located in?',
        options: ['Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Rajasthan'],
        answer: 'Uttar Pradesh',
        explanation: 'Our school is proudly situated in Belwariya Jungle, District Basti, Uttar Pradesh.'
      },
      {
        question: 'How many spokes are in the Ashoka Chakra on the Indian flag?',
        options: ['24', '12', '36', '20'],
        answer: '24',
        explanation: 'The navy blue Ashoka Chakra in the white band features 24 spokes representing 24 hours of purposeful life.'
      },
      {
        question: 'Which is the highest mountain peak in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 'Mount Everest',
        explanation: 'Mount Everest stands at 8,848.86 meters above sea level in the Himalayas.'
      }
    ],
    middle: [
      {
        question: 'Who was the chief architect and chairman of the Drafting Committee of the Indian Constitution?',
        options: ['Dr. B.R. Ambedkar', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel'],
        answer: 'Dr. B.R. Ambedkar',
        explanation: 'Dr. Bhimrao Ramji Ambedkar headed the Drafting Committee that framed the Constitution of India.'
      },
      {
        question: 'Which Indian scientist won the Nobel Prize in Physics in 1930 for the discovery of light scattering?',
        options: ['Sir C.V. Raman', 'Satyendra Nath Bose', 'Meghnad Saha', 'Subrahmanyan Chandrasekhar'],
        answer: 'Sir C.V. Raman',
        explanation: 'Sir C.V. Raman discovered the Raman Effect, celebrated annually as National Science Day (Feb 28).'
      },
      {
        question: 'Which is the largest ocean on Earth?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 'Pacific Ocean',
        explanation: 'The Pacific Ocean is larger than all Earth’s land area combined.'
      },
      {
        question: 'What is the capital of Uttar Pradesh?',
        options: ['Lucknow', 'Kanpur', 'Prayagraj', 'Varanasi'],
        answer: 'Lucknow',
        explanation: 'Lucknow, known as the City of Nawabs, is the capital of Uttar Pradesh.'
      },
      {
        question: 'On which date is National Science Day celebrated across India?',
        options: ['28 February', '15 August', '5 September', '14 November'],
        answer: '28 February',
        explanation: '28 February marks the anniversary of Sir C.V. Raman’s discovery of the Raman Effect in 1928.'
      }
    ],
    secondary: [
      {
        question: 'In which year did India launch its historic Chandrayaan-3 mission that achieved a soft landing near the lunar south pole?',
        options: ['2023', '2021', '2019', '2024'],
        answer: '2023',
        explanation: 'ISRO’s Chandrayaan-3 successfully landed on the Moon on August 23, 2023, celebrated as National Space Day.'
      },
      {
        question: 'Which fundamental right in the Indian Constitution is termed the "Heart and Soul of the Constitution" by Dr. Ambedkar?',
        options: ['Right to Constitutional Remedies (Article 32)', 'Right to Equality (Article 14)', 'Right to Freedom of Speech (Article 19)', 'Right to Education (Article 21A)'],
        answer: 'Right to Constitutional Remedies (Article 32)',
        explanation: 'Article 32 empowers citizens to move the Supreme Court directly for enforcement of Fundamental Rights.'
      },
      {
        question: 'The Tropic of Cancer passes through how many Indian states?',
        options: ['8', '6', '10', '7'],
        answer: '8',
        explanation: 'It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.'
      },
      {
        question: 'Who wrote the Sanskrit epic "Ramayana"?',
        options: ['Maharishi Valmiki', 'Ved Vyas', 'Kalidasa', 'Tulsidas'],
        answer: 'Maharishi Valmiki',
        explanation: 'Valmiki authored the original Sanskrit Ramayana; Tulsidas composed the Awadhi Ramcharitmanas.'
      },
      {
        question: 'Which Indian space agency launched the Aditya-L1 solar observatory mission?',
        options: ['ISRO', 'DRDO', 'BARC', 'NASA'],
        answer: 'ISRO',
        explanation: 'The Indian Space Research Organisation (ISRO) successfully placed Aditya-L1 into orbit around the Sun-Earth L1 Lagrange point.'
      }
    ],
    senior: [
      {
        question: 'Which classical Indian economic treatise was authored by Chanakya (Kautilya)?',
        options: ['Arthashastra', 'Mudrarakshasa', 'Manusmriti', 'Panchatantra'],
        answer: 'Arthashastra',
        explanation: 'Arthashastra is an ancient Sanskrit treatise on statecraft, economic policy, and military strategy.'
      },
      {
        question: 'Under which Article of the Indian Constitution can a Financial Emergency be proclaimed by the President?',
        options: ['Article 360', 'Article 352', 'Article 356', 'Article 370'],
        answer: 'Article 360',
        explanation: 'Article 360 allows the President to declare a financial emergency if financial stability is threatened.'
      },
      {
        question: 'What is the headquarters of the International Court of Justice (ICJ)?',
        options: ['The Hague, Netherlands', 'Geneva, Switzerland', 'New York, USA', 'Vienna, Austria'],
        answer: 'The Hague, Netherlands',
        explanation: 'The ICJ sits at the Peace Palace in The Hague, Netherlands.'
      },
      {
        question: 'Which biosphere reserve in India is located in the Nilgiri Mountains across TN, Kerala, and Karnataka?',
        options: ['Nilgiri Biosphere Reserve', 'Sundarbans', 'Nanda Devi', 'Gulf of Mannar'],
        answer: 'Nilgiri Biosphere Reserve',
        explanation: 'Established in 1986, Nilgiri was India’s first biosphere reserve under UNESCO’s MAB Programme.'
      },
      {
        question: 'The concept of "Directive Principles of State Policy" (DPSP) in the Indian Constitution was borrowed from which country?',
        options: ['Ireland', 'United States', 'United Kingdom', 'USSR'],
        answer: 'Ireland',
        explanation: 'The framers of the Indian Constitution drew inspiration from the Irish Constitution (Bunreacht na hÉireann).'
      }
    ]
  },

  // 6. SPOT THE ODD ONE OUT
  oddOneOut: {
    little: [
      {
        items: ['🍎 Apple', '🍌 Banana', '🥕 Carrot', '🥭 Mango'],
        answer: '🥕 Carrot',
        explanation: 'Carrot is a root vegetable, whereas Apple, Banana, and Mango are fruits.'
      },
      {
        items: ['🐶 Dog', '🐱 Cat', '🐮 Cow', '🦅 Eagle'],
        answer: '🦅 Eagle',
        explanation: 'Eagle is a bird that flies, while Dog, Cat, and Cow are four-legged land mammals.'
      },
      {
        items: ['🔴 Red', '🔵 Blue', '🟩 Green', '⚽ Football'],
        answer: '⚽ Football',
        explanation: 'Football is a sports object, whereas Red, Blue, and Green are colors.'
      },
      {
        items: ['🚗 Car', '🚌 Bus', '🚚 Truck', '🐟 Fish'],
        answer: '🐟 Fish',
        explanation: 'Fish is a living aquatic animal, while Car, Bus, and Truck are motor vehicles.'
      },
      {
        items: ['✏️ Pencil', '📐 Ruler', 'Eraser', '🍔 Burger'],
        answer: '🍔 Burger',
        explanation: 'Burger is food, while Pencil, Ruler, and Eraser are stationery items for school.'
      }
    ],
    junior: [
      {
        items: ['Square', 'Rectangle', 'Rhombus', 'Sphere'],
        answer: 'Sphere',
        explanation: 'Sphere is a 3D geometric solid, while Square, Rectangle, and Rhombus are 2D polygons.'
      },
      {
        items: ['2', '4', '6', '9'],
        answer: '9',
        explanation: '9 is an odd number, while 2, 4, and 6 are even numbers.'
      },
      {
        items: ['Earth', 'Mars', 'Jupiter', 'Moon'],
        answer: 'Moon',
        explanation: 'Moon is a natural satellite, while Earth, Mars, and Jupiter are planets orbiting the Sun.'
      },
      {
        items: ['Rose', 'Jasmine', 'Lotus', 'Spinach'],
        answer: 'Spinach',
        explanation: 'Spinach is a leafy vegetable, while Rose, Jasmine, and Lotus are flowers.'
      },
      {
        items: ['Kilogram', 'Gram', 'Pound', 'Meter'],
        answer: 'Meter',
        explanation: 'Meter is a unit of length/distance, while Kilogram, Gram, and Pound measure mass/weight.'
      }
    ],
    middle: [
      {
        items: ['Hydrogen', 'Helium', 'Oxygen', 'Iron'],
        answer: 'Iron',
        explanation: 'Iron is a solid transition metal at room temperature, while Hydrogen, Helium, and Oxygen are gases.'
      },
      {
        items: ['Square', 'Equilateral Triangle', 'Regular Hexagon', 'Scalene Triangle'],
        answer: 'Scalene Triangle',
        explanation: 'A Scalene Triangle has unequal sides (irregular), while others are regular polygons.'
      },
      {
        items: ['11', '13', '17', '21'],
        answer: '21',
        explanation: '21 is a composite number (3 × 7), while 11, 13, and 17 are prime numbers.'
      },
      {
        items: ['Stomach', 'Liver', 'Intestine', 'Biceps'],
        answer: 'Biceps',
        explanation: 'Biceps is a skeletal muscle of the arm, while Stomach, Liver, and Intestine are digestive organs.'
      },
      {
        items: ['Barometer', 'Thermometer', 'Hygrometer', 'Microscope'],
        answer: 'Microscope',
        explanation: 'A microscope is an optical instrument for viewing magnification, whereas others measure atmospheric variables.'
      }
    ],
    secondary: [
      {
        items: ['Ohm', 'Volt', 'Ampere', 'Joule'],
        answer: 'Joule',
        explanation: 'Joule is a unit of work/energy, while Ohm, Volt, and Ampere are specific electrical units.'
      },
      {
        items: ['Valence electrons', 'Protons', 'Neutrons', 'Photons'],
        answer: 'Photons',
        explanation: 'Photons are elementary particles of electromagnetic radiation/light, not atomic sub-particles.'
      },
      {
        items: ['Methane (CH₄)', 'Ethane (C₂H₆)', 'Propane (C₃H₈)', 'Ethene (C₂H₄)'],
        answer: 'Ethene (C₂H₄)',
        explanation: 'Ethene is an unsaturated alkene with a double bond; the other three are saturated alkanes.'
      },
      {
        items: ['Diamond', 'Graphite', 'Fullerene', 'Brass'],
        answer: 'Brass',
        explanation: 'Brass is an alloy of copper and zinc, while Diamond, Graphite, and Fullerene are allotropes of pure carbon.'
      },
      {
        items: ['Mitosis', 'Meiosis', 'Binary Fission', 'Photosynthesis'],
        answer: 'Photosynthesis',
        explanation: 'Photosynthesis is a metabolic energy-conversion process, while the other three are modes of cell division/reproduction.'
      }
    ],
    senior: [
      {
        items: ['Angular momentum', 'Torque', 'Magnetic moment', 'Kinetic energy'],
        answer: 'Kinetic energy',
        explanation: 'Kinetic energy is a scalar quantity, whereas Angular momentum, Torque, and Magnetic moment are vector quantities.'
      },
      {
        items: ['Entropy (S)', 'Enthalpy (H)', 'Gibbs Free Energy (G)', 'Work done (W)'],
        answer: 'Work done (W)',
        explanation: 'Work is a path function, whereas Entropy, Enthalpy, and Gibbs Free Energy are thermodynamic state functions.'
      },
      {
        items: ['Aldehyde', 'Ketone', 'Carboxylic Acid', 'Ether'],
        answer: 'Ether',
        explanation: 'Ethers lack a carbonyl group (C=O), which is present in aldehydes, ketones, and carboxylic acids.'
      },
      {
        items: ['Schottky defect', 'Frenkel defect', 'Interstitial defect', 'Doppler effect'],
        answer: 'Doppler effect',
        explanation: 'Doppler effect relates to wave frequency shift, while others are crystal lattice stoichiometric defects.'
      },
      {
        items: ['Hermite polynomial', 'Legendre polynomial', 'Laguerre polynomial', 'Maxwell distribution'],
        answer: 'Maxwell distribution',
        explanation: 'Maxwell distribution is a statistical probability distribution of molecular speeds, while others are orthogonal polynomials.'
      }
    ]
  },

  // 7. WORD SCRAMBLE
  scramble: {
    little: [
      { scrambled: 'KOOB', word: 'BOOK', hint: 'Something you read in school' },
      { scrambled: 'TEER', word: 'TREE', hint: 'Has green leaves and branches' },
      { scrambled: 'LAMK', word: 'MILK', hint: 'Healthy white drink from cows' },
      { scrambled: 'GORD', word: 'FROG', hint: 'Amphibian that hops and croaks' },
      { scrambled: 'SRAT', word: 'STAR', hint: 'Twinkles in the night sky' }
    ],
    junior: [
      { scrambled: 'LOHOCS', word: 'SCHOOL', hint: 'A temple of learning and knowledge' },
      { scrambled: 'NATPLE', word: 'PLANET', hint: 'Earth is one of these orbiting the Sun' },
      { scrambled: 'CENCIES', word: 'SCIENCE', hint: 'The study of the natural world and experiments' },
      { scrambled: 'TRAHE', word: 'EARTH', hint: 'The third planet from the Sun' },
      { scrambled: 'REGTI', word: 'TIGER', hint: 'India’s magnificent national animal' }
    ],
    middle: [
      { scrambled: 'YVIGART', word: 'GRAVITY', hint: 'The force that pulls objects toward Earth' },
      { scrambled: 'ELEMNTE', word: 'ELEMENT', hint: 'A pure substance on the periodic table' },
      { scrambled: 'CTRICEL', word: 'CIRCUIT', hint: 'A closed path through which electric current flows' },
      { scrambled: 'TCOOPSS', word: 'COMPASS', hint: 'Navigation tool pointing towards magnetic north' },
      { scrambled: 'EGLNKO', word: 'KNOWLEDGE', hint: 'Information, skills and understanding acquired through learning' }
    ],
    secondary: [
      { scrambled: 'HOOTNSSP', word: 'PHOTOSYNTHESIS', hint: 'Process by which green plants make food from sunlight' },
      { scrambled: 'CTUMOMEN', word: 'MOMENTUM', hint: 'Product of mass and velocity of an object' },
      { scrambled: 'DNEOIGHS', word: 'HYDROGEN', hint: 'The lightest and most abundant chemical element' },
      { scrambled: 'LEELCOUM', word: 'MOLECULE', hint: 'A group of atoms bonded together' },
      { scrambled: 'ROOFTACN', word: 'REFRACTION', hint: 'The bending of light as it passes between media' }
    ],
    senior: [
      { scrambled: 'QULIRBIEUM', word: 'EQUILIBRIUM', hint: 'State in which opposing forces or reactions are balanced' },
      { scrambled: 'TRPEONY', word: 'ENTROPY', hint: 'A measure of microscopic disorder in a thermodynamic system' },
      { scrambled: 'CAONSTTLY', word: 'CATALYST', hint: 'Substance that increases the rate of reaction without being consumed' },
      { scrambled: 'CYLITROTE', word: 'ELECTROLYTE', hint: 'Substance that conducts electricity when dissolved in water' },
      { scrambled: 'RENNSECA', word: 'RESONANCE', hint: 'Phenomenon of increased amplitude at natural frequency' }
    ]
  },

  // 8. SMART MATCH (Drag & Drop / Tap Pairings)
  smartMatch: {
    little: [
      {
        topic: 'Match Animals with their Foods',
        pairs: [
          { left: '🐮 Cow', right: '🌿 Fresh Grass' },
          { left: '🐒 Monkey', right: '🍌 Banana' },
          { left: '🐰 Rabbit', right: '🥕 Carrot' },
          { left: '🦁 Lion', right: '🥩 Meat' }
        ]
      },
      {
        topic: 'Match Shapes with Examples',
        pairs: [
          { left: '⭕ Circle', right: '🪙 Coin' },
          { left: '🔲 Square', right: '🎲 Chessboard Square' },
          { left: '🔺 Triangle', right: '🍕 Slice of Pizza' },
          { left: '⭐ Star', right: '✨ Night Sky Star' }
        ]
      }
    ],
    junior: [
      {
        topic: 'Match Units with Quantities',
        pairs: [
          { left: 'Kilogram (kg)', right: 'Mass / Weight' },
          { left: 'Meter (m)', right: 'Length / Distance' },
          { left: 'Liter (L)', right: 'Liquid Volume' },
          { left: 'Second (s)', right: 'Time' }
        ]
      },
      {
        topic: 'Match States with Capitals',
        pairs: [
          { left: 'Uttar Pradesh', right: 'Lucknow' },
          { left: 'Maharashtra', right: 'Mumbai' },
          { left: 'Tamil Nadu', right: 'Chennai' },
          { left: 'West Bengal', right: 'Kolkata' }
        ]
      }
    ],
    middle: [
      {
        topic: 'Match Chemical Elements with Symbols',
        pairs: [
          { left: 'Gold', right: 'Au' },
          { left: 'Silver', right: 'Ag' },
          { left: 'Iron', right: 'Fe' },
          { left: 'Sodium', right: 'Na' }
        ]
      },
      {
        topic: 'Match Scientists with Discoveries',
        pairs: [
          { left: 'Sir Isaac Newton', right: 'Universal Law of Gravitation' },
          { left: 'Sir C.V. Raman', right: 'Scattering of Light (Raman Effect)' },
          { left: 'Alexander Fleming', right: 'Penicillin Antibiotic' },
          { left: 'Louis Pasteur', right: 'Pasteurization & Vaccines' }
        ]
      }
    ],
    secondary: [
      {
        topic: 'Match Physics Quantities with SI Units',
        pairs: [
          { left: 'Electric Potential (V)', right: 'Volt' },
          { left: 'Force (F)', right: 'Newton (N)' },
          { left: 'Work / Energy', right: 'Joule (J)' },
          { left: 'Power (P)', right: 'Watt (W)' }
        ]
      },
      {
        topic: 'Match Formulas with Concepts',
        pairs: [
          { left: 'Ohm’s Law', right: 'V = I × R' },
          { left: 'Kinetic Energy', right: '½ m v²' },
          { left: 'Gravitational Potential', right: 'm × g × h' },
          { left: 'Einstein Energy Eq.', right: 'E = m c²' }
        ]
      }
    ],
    senior: [
      {
        topic: 'Match Organic Functional Groups with Formulas',
        pairs: [
          { left: 'Carboxylic Acid', right: '-COOH' },
          { left: 'Aldehyde', right: '-CHO' },
          { left: 'Alcohol', right: '-OH' },
          { left: 'Ketone', right: '>C=O' }
        ]
      },
      {
        topic: 'Match Laws with Descriptions',
        pairs: [
          { left: 'First Law of Thermodynamics', right: 'ΔU = q + w (Energy Conservation)' },
          { left: 'Faraday’s Law of Induction', right: 'Induced EMF = -dΦ/dt' },
          { left: 'de Broglie Wavelength', right: 'λ = h / p' },
          { left: 'Raoult’s Law', right: 'P = P° × X_solvent' }
        ]
      }
    ]
  },

  // 9. LOGIC QUEST (Deductive, Directional & Analytical Reasoning)
  logic: {
    little: [
      {
        question: 'Raju is taller than Aman. Aman is taller than Sonu. Who is the tallest?',
        options: ['Raju', 'Aman', 'Sonu', 'All are equal'],
        answer: 'Raju',
        explanation: 'Raju > Aman > Sonu, hence Raju is the tallest.'
      },
      {
        question: 'Which hand do you raise when looking at a mirror if your reflection raises its left hand?',
        options: ['Right hand', 'Left hand', 'Both hands', 'Neither'],
        answer: 'Right hand',
        explanation: 'Mirror reflections exhibit lateral inversion (left appears right).'
      },
      {
        question: 'If yesterday was Sunday, what day is today?',
        options: ['Monday', 'Tuesday', 'Saturday', 'Friday'],
        answer: 'Monday',
        explanation: 'The day following Sunday is Monday.'
      },
      {
        question: 'You have 3 apples and you take away 2 apples. How many apples do you have?',
        options: ['2 apples', '1 apple', '3 apples', '5 apples'],
        answer: '2 apples',
        explanation: 'You took 2 apples, so you now have 2 apples!'
      },
      {
        question: 'Which object is the heaviest?',
        options: ['An Elephant', 'A Feather', 'A Tennis Ball', 'A Pencil'],
        answer: 'An Elephant',
        explanation: 'An adult elephant weighs thousands of kilograms.'
      }
    ],
    junior: [
      {
        question: 'Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
        options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
        answer: 'Father',
        explanation: 'The "only son of Suresh’s mother" is Suresh himself. Therefore, the boy is Suresh’s son, making Suresh the father.'
      },
      {
        question: 'If Rohan walks 5 km North, then turns Right and walks 3 km, in which direction is he facing now?',
        options: ['East', 'West', 'South', 'North'],
        answer: 'East',
        explanation: 'Turning 90° right from North points toward the East.'
      },
      {
        question: 'In a code language, if CAT is written as 3120 (C=3, A=1, T=20), how is DOG written?',
        options: ['4157', '4147', '3157', '4158'],
        answer: '4157',
        explanation: 'D is 4th, O is 15th, G is 7th in the alphabet (4-15-7).'
      },
      {
        question: 'If all Mangoes are Fruits, and all Fruits are Sweet, are all Mangoes Sweet?',
        options: ['Yes, definitely', 'No, never', 'Cannot be determined', 'Only some are sweet'],
        answer: 'Yes, definitely',
        explanation: 'By syllogism: Set of Mangoes ⊂ Set of Fruits ⊂ Set of Sweet things.'
      },
      {
        question: 'A clock shows 3:00. What is the angle between the hour hand and the minute hand?',
        options: ['90 degrees', '45 degrees', '180 degrees', '60 degrees'],
        answer: '90 degrees',
        explanation: 'At 3:00, the hour hand points at 3 and the minute hand at 12, forming a 90° right angle.'
      }
    ],
    middle: [
      {
        question: 'A doctor gives you 3 pills and tells you to take one every 30 minutes. How long will the pills last?',
        options: ['60 minutes (1 hour)', '90 minutes', '30 minutes', '120 minutes'],
        answer: '60 minutes (1 hour)',
        explanation: 'Take 1st pill at 0 min, 2nd pill at 30 min, 3rd pill at 60 min. Total time elapsed is 60 minutes.'
      },
      {
        question: 'If "A + B" means A is the brother of B; "A - B" means A is the sister of B; what does "P + Q - R" mean?',
        options: ['P is the brother of R', 'P is the sister of R', 'P is the father of R', 'P is the cousin of R'],
        answer: 'P is the brother of R',
        explanation: 'P is brother of Q, and Q is sister of R, so P, Q, R are siblings and P is a male sibling (brother) to R.'
      },
      {
        question: 'Find the missing number in the grid: [2, 4, 8], [3, 9, 27], [4, 16, ?]',
        options: ['64', '32', '48', '56'],
        answer: '64',
        explanation: 'Each row follows: x, x², x³. For 4: 4, 4²=16, 4³=64.'
      },
      {
        question: 'Five students (A, B, C, D, E) are sitting in a row. C is in the middle. A is to the left of C but not at the extreme end. Where is A sitting?',
        options: ['Second position from left', 'First position from left', 'Fourth position', 'Fifth position'],
        answer: 'Second position from left',
        explanation: 'With 5 positions [1, 2, 3, 4, 5], C is at 3. A is left of C but not at 1, so A is at position 2.'
      },
      {
        question: 'If Monday was on 1st of a month, which day of the week will fall on the 25th of the same month?',
        options: ['Thursday', 'Wednesday', 'Friday', 'Tuesday'],
        answer: 'Thursday',
        explanation: 'Mondays fall on 1, 8, 15, 22. So 23=Tue, 24=Wed, 25=Thu.'
      }
    ],
    secondary: [
      {
        question: 'Statements: (1) All scientists are thinkers. (2) Some thinkers are artists. Conclusion: (I) Some scientists are artists. (II) Some artists are thinkers.',
        options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both I and II follow', 'Neither follows'],
        answer: 'Only Conclusion II follows',
        explanation: 'Since "Some thinkers are artists" converts directly to "Some artists are thinkers". We cannot deduce if scientists are artists.'
      },
      {
        question: 'In a group of 50 students, 30 like Math, 25 like Science, and 10 like both. How many students like neither Math nor Science?',
        options: ['5', '10', '15', '0'],
        answer: '5',
        explanation: 'n(M ∪ S) = 30 + 25 - 10 = 45. Neither = 50 - 45 = 5 students.'
      },
      {
        question: 'If P implies Q, and Q implies R, which of the following is logically valid?',
        options: ['P implies R', 'R implies P', 'Not P implies Not R', 'None of these'],
        answer: 'P implies R',
        explanation: 'By the Law of Hypothetical Syllogism (Transitivity of Implication), P → Q and Q → R entails P → R.'
      },
      {
        question: 'A train 150 meters long is traveling at 54 km/h. How many seconds will it take to pass an electric pole?',
        options: ['10 seconds', '12 seconds', '15 seconds', '8 seconds'],
        answer: '10 seconds',
        explanation: '54 km/h = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds.'
      },
      {
        question: 'If coding "LIGHT" gives "M J H I U" (+1 to each letter), how is "FLAME" coded?',
        options: ['G M B N F', 'G L B M F', 'E K Z L D', 'G N C O G'],
        answer: 'G M B N F',
        explanation: 'F+1=G, L+1=M, A+1=B, M+1=N, E+1=F.'
      }
    ],
    senior: [
      {
        question: 'If the statement "All successful students are disciplined" is TRUE, which of the following contrapositive statements MUST also be TRUE?',
        options: ['A student who is not disciplined is not successful', 'All disciplined students are successful', 'If a student is successful, they are undisciplined', 'None of the above'],
        answer: 'A student who is not disciplined is not successful',
        explanation: 'The contrapositive of "P → Q" is "¬Q → ¬P", which is logically equivalent to the original proposition.'
      },
      {
        question: 'How many distinct 4-letter permutations can be formed using the letters of the word "KALAM" (with two A’s)?',
        options: ['60', '120', '24', '36'],
        answer: '60',
        explanation: 'Case 1 (both A’s): Choose 2 other letters from {K, L, M} = 3 ways; arrange = 3 × (4!/2!) = 3 × 12 = 36. Case 2 (one A or no duplicate): 4 distinct letters from {K, A, L, M} = 4! = 24. Total = 36 + 24 = 60.'
      },
      {
        question: 'In a knockout badminton tournament with 64 players, how many total matches are required to determine the single champion?',
        options: ['63', '64', '32', '128'],
        answer: '63',
        explanation: 'Every match eliminates exactly 1 player. To eliminate 63 players and leave 1 champion requires 63 matches.'
      },
      {
        question: 'Three fair coins are tossed simultaneously. What is the probability of getting at least two heads?',
        options: ['1/2 (4/8)', '3/8', '1/4', '7/8'],
        answer: '1/2 (4/8)',
        explanation: 'Total outcomes = 8. Favorable {HHH, HHT, HTH, THH} = 4 outcomes. Probability = 4/8 = 1/2.'
      },
      {
        question: 'If f(x) = 2x + 3 and g(x) = x², what is the value of (g ∘ f)(1)?',
        options: ['25', '11', '10', '16'],
        answer: '25',
        explanation: 'f(1) = 2(1) + 3 = 5. Then g(5) = 5² = 25.'
      }
    ]
  },

  // 10. READING DETECTIVE (Comprehension Passages & Questions)
  reading: {
    little: [
      {
        title: 'Miku the Helpful Elephant',
        passage: 'Miku was a little elephant who lived in a lush green forest. He had big floppy ears and a kind heart. One sunny morning, Miku saw a tiny bird shivering near a puddle with a hurt wing. Miku carefully picked sweet berries with his trunk and sheltered the bird under his huge ears until it was warm and healthy again.',
        questions: [
          {
            question: 'What kind of animal was Miku?',
            options: ['An elephant', 'A lion', 'A sparrow', 'A tiger'],
            answer: 'An elephant',
            explanation: 'The passage explicitly states Miku was a little elephant.'
          },
          {
            question: 'How did Miku shelter the tiny bird?',
            options: ['Under his big ears', 'In a birdhouse', 'Inside a wooden box', 'Under a tree trunk'],
            answer: 'Under his big ears',
            explanation: 'Miku sheltered the bird under his huge floppy ears.'
          },
          {
            question: 'What moral lesson does the story teach us?',
            options: ['Be kind and help others in need', 'Do not play in the forest', 'Birds should not fly', 'Elephants like berries'],
            answer: 'Be kind and help others in need',
            explanation: 'Miku’s compassion teaches us to care for animals and friends in need.'
          }
        ]
      }
    ],
    junior: [
      {
        title: 'Dr. Kalam’s Childhood Dream',
        passage: 'Young Abdul Kalam grew up in the coastal pilgrim town of Rameswaram, Tamil Nadu. His family faced modest financial means, and Abdul helped distribute morning newspapers before going to school. One afternoon, his science teacher took the class to the seashore to show them birds in flight. Seeing the seagulls flap their wings and soar gracefully into the azure sky ignited Abdul’s lifelong passion for aeronautics and space science.',
        questions: [
          {
            question: 'Where did Dr. A.P.J. Abdul Kalam spend his childhood?',
            options: ['Rameswaram, Tamil Nadu', 'New Delhi', 'Basti, Uttar Pradesh', 'Bengaluru, Karnataka'],
            answer: 'Rameswaram, Tamil Nadu',
            explanation: 'The passage mentions he grew up in the coastal town of Rameswaram.'
          },
          {
            question: 'What inspired Kalam’s passion for flight and aeronautics?',
            options: ['Watching seagulls fly by the seashore', 'Reading a magazine in the market', 'Watching a television show', 'Riding a train'],
            answer: 'Watching seagulls fly by the seashore',
            explanation: 'Observing birds in flight under his teacher’s guidance sparked his interest in flight.'
          },
          {
            question: 'What does the word "modest" mean in this context?',
            options: ['Simple and limited', 'Extremely wealthy', 'Cruel', 'Confusing'],
            answer: 'Simple and limited',
            explanation: 'Modest means simple and having limited financial resources.'
          }
        ]
      }
    ],
    middle: [
      {
        title: 'The Marvel of Mangalyaan (Mars Orbiter Mission)',
        passage: 'On 24 September 2014, India made history when the Indian Space Research Organisation (ISRO) successfully inserted the Mars Orbiter Mission (Mangalyaan) into Martian orbit on its maiden attempt. Built with an extraordinarily frugal budget of approximately 450 crore rupees—less than the production budget of many Hollywood space films—the mission showcased the ingenuity, indigenous technological prowess, and dedication of Indian scientists to the entire world.',
        questions: [
          {
            question: 'What remarkable feat did ISRO achieve with Mangalyaan?',
            options: ['Reached Mars orbit on its first maiden attempt', 'Landed a human on Mars', 'Found liquid oceans on Mars', 'Built the heaviest rocket in history'],
            answer: 'Reached Mars orbit on its first maiden attempt',
            explanation: 'India was the first nation in the world to reach Mars orbit on its very first attempt.'
          },
          {
            question: 'What made the Mangalyaan mission globally celebrated?',
            options: ['Cost-effective engineering and indigenous technological excellence', 'It was the most expensive satellite ever made', 'It carried foreign astronauts', 'It returned Mars rocks to Earth'],
            answer: 'Cost-effective engineering and indigenous technological excellence',
            explanation: 'The mission accomplished world-class interplanetary exploration at an exceptionally frugal cost.'
          },
          {
            question: 'What is the closest synonym for "ingenuity" as used in the text?',
            options: ['Inventiveness and cleverness', 'Recklessness', 'Carelessness', 'Simplicity'],
            answer: 'Inventiveness and cleverness',
            explanation: 'Ingenuity refers to the quality of being clever, inventive, and resourceful.'
          }
        ]
      }
    ],
    secondary: [
      {
        title: 'Renewable Energy: India’s Solar Leap',
        passage: 'India has embarked on one of the world’s most ambitious energy transition programs, rapidly expanding its solar and renewable capacity. Located across arid terrains like the Thar Desert and the Deccan plateau, massive solar parks such as Bhadla Solar Park harness clean photovoltaic energy. This green revolution not only curtails carbon emissions and mitigates climate risks, but also democratizes energy access for remote rural communities and agricultural irrigation.',
        questions: [
          {
            question: 'What primary environmental benefit is highlighted regarding India’s solar transition?',
            options: ['Curtailing carbon emissions and mitigating climate risks', 'Increasing coal mining efficiency', 'Eliminating all fossil fuel storage needs', 'Stopping seasonal monsoons'],
            answer: 'Curtailing carbon emissions and mitigating climate risks',
            explanation: 'Solar power generates clean energy without emitting greenhouse gases.'
          },
          {
            question: 'Which is an example of a massive solar park mentioned in the passage?',
            options: ['Bhadla Solar Park', 'Hirakud Park', 'Sundarbans Solar Grid', 'Silent Valley Park'],
            answer: 'Bhadla Solar Park',
            explanation: 'Bhadla Solar Park in Rajasthan is one of the world’s largest solar installations.'
          },
          {
            question: 'What does "mitigate" mean in the phrase "mitigates climate risks"?',
            options: ['To lessen or reduce the severity of something', 'To completely ignore', 'To multiply or increase', 'To hide from public view'],
            answer: 'To lessen or reduce the severity of something',
            explanation: 'Mitigate means to make something less severe, harmful, or painful.'
          }
        ]
      }
    ],
    senior: [
      {
        title: 'Artificial Intelligence & Ethical Frontiers in Education',
        passage: 'The integration of Artificial Intelligence into pedagogy heralds an era of bespoke personalized learning, capable of adjusting curriculum pacing to each student’s idiosyncratic cognitive profile. However, this transformative paradigm necessitates prudent stewardship. Issues surrounding algorithmic bias, data sovereignty, intellectual complacency, and the preservation of empathetic educator-student mentorship must remain paramount to ensure technology serves human flourishing rather than diminishing critical inquiry.',
        questions: [
          {
            question: 'What primary pedagogical advantage of AI is identified in the text?',
            options: ['Adaptive personalized learning tailored to individual students', 'Complete elimination of human teachers', 'Standardizing exams to a single format', 'Automating student surveillance'],
            answer: 'Adaptive personalized learning tailored to individual students',
            explanation: 'The passage highlights AI’s capacity to tailor pacing and content to individual cognitive profiles.'
          },
          {
            question: 'Which crucial ethical consideration is emphasized by the author?',
            options: ['Algorithmic bias, data sovereignty, and preserving human mentorship', 'Lowering digital hardware manufacturing costs', 'Replacing classical literature with code', 'Mandatory AI exams for all grades'],
            answer: 'Algorithmic bias, data sovereignty, and preserving human mentorship',
            explanation: 'The text warns of algorithmic fairness, data rights, and the irreplaceable value of empathetic human mentorship.'
          },
          {
            question: 'What does the term "idiosyncratic" imply regarding a student’s cognitive profile?',
            options: ['Distinctive, individual, and unique to a person', 'Flawed and erroneous', 'Uniform and identical to everyone else', 'Predictable and simple'],
            answer: 'Distinctive, individual, and unique to a person',
            explanation: 'Idiosyncratic refers to distinctive characteristics unique to an individual.'
          }
        ]
      }
    ]
  },

  // 11. GEOGRAPHY EXPLORER
  geography: {
    little: [
      {
        question: 'Which country do we live in?',
        options: ['India', 'Australia', 'Canada', 'Japan'],
        answer: 'India',
        explanation: 'We live in India (Bharat), a diverse and vibrant nation.'
      },
      {
        question: 'Which of the following is surrounded by water on all sides?',
        options: ['An Island', 'A Mountain', 'A Forest', 'A Desert'],
        answer: 'An Island',
        explanation: 'An island is a piece of land completely surrounded by water.'
      },
      {
        question: 'How many continents are there on Earth?',
        options: ['7', '5', '4', '9'],
        answer: '7',
        explanation: 'Earth has 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.'
      },
      {
        question: 'Which state in India is famous for the Taj Mahal in Agra?',
        options: ['Uttar Pradesh', 'Maharashtra', 'Gujarat', 'Punjab'],
        answer: 'Uttar Pradesh',
        explanation: 'The Taj Mahal is situated on the banks of the Yamuna river in Agra, Uttar Pradesh.'
      },
      {
        question: 'Which is the largest desert in India?',
        options: ['Thar Desert', 'Sahara Desert', 'Gobi Desert', 'Kalahari Desert'],
        answer: 'Thar Desert',
        explanation: 'The Thar Desert (Great Indian Desert) spans Rajasthan and northwestern India.'
      }
    ],
    junior: [
      {
        question: 'Which is the capital city of Rajasthan?',
        options: ['Jaipur (Pink City)', 'Jodhpur', 'Udaipur', 'Bikaner'],
        answer: 'Jaipur (Pink City)',
        explanation: 'Jaipur is the capital of Rajasthan and is renowned worldwide as the Pink City.'
      },
      {
        question: 'Which body of water lies to the east of India?',
        options: ['Bay of Bengal', 'Arabian Sea', 'Indian Ocean', 'Red Sea'],
        answer: 'Bay of Bengal',
        explanation: 'The Bay of Bengal lies east of India, and the Arabian Sea lies to the west.'
      },
      {
        question: 'Which is the smallest state in India by geographical area?',
        options: ['Goa', 'Sikkim', 'Tripura', 'Kerala'],
        answer: 'Goa',
        explanation: 'Goa is India’s smallest state with an area of roughly 3,702 km².'
      },
      {
        question: 'Which famous river flows through Basti and Ayodhya in Uttar Pradesh?',
        options: ['Sarayu river', 'Ganga', 'Yamuna', 'Narmada'],
        answer: 'Sarayu river',
        explanation: 'The holy Sarayu (Ghaghara) river flows alongside Ayodhya and neighboring Basti district.'
      },
      {
        question: 'Which continent is the coldest and covered almost entirely in ice?',
        options: ['Antarctica', 'Europe', 'Asia', 'North America'],
        answer: 'Antarctica',
        explanation: 'Antarctica surrounds the South Pole and is Earth’s coldest, driest continent.'
      }
    ],
    middle: [
      {
        question: 'Which Indian state is known as the "Land of Five Rivers"?',
        options: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Himachal Pradesh'],
        answer: 'Punjab',
        explanation: 'Punjab derives its name from Persian "Panj" (five) and "Aab" (water/rivers).'
      },
      {
        question: 'Which strait separates India from Sri Lanka?',
        options: ['Palk Strait', 'Malacca Strait', 'Strait of Gibraltar', 'Bering Strait'],
        answer: 'Palk Strait',
        explanation: 'The Palk Strait connects the Bay of Bengal with the Palk Bay between Tamil Nadu and Sri Lanka.'
      },
      {
        question: 'Which plateau is known as the "Roof of the World"?',
        options: ['Tibetan Plateau (Pamir Knot)', 'Deccan Plateau', 'Colorado Plateau', 'Anatolian Plateau'],
        answer: 'Tibetan Plateau (Pamir Knot)',
        explanation: 'The Tibetan Plateau is the world’s highest and largest plateau.'
      },
      {
        question: 'Which is the largest freshwater lake in India?',
        options: ['Wular Lake (Jammu & Kashmir)', 'Chilika Lake', 'Sambhar Lake', 'Dal Lake'],
        answer: 'Wular Lake (Jammu & Kashmir)',
        explanation: 'Wular Lake, fed by the Jhelum river, is India’s largest freshwater natural lake.'
      },
      {
        question: 'Which parallel of latitude divides India almost into two equal halves?',
        options: ['Tropic of Cancer (23.5° N)', 'Equator (0°)', 'Tropic of Capricorn (23.5° S)', 'Arctic Circle (66.5° N)'],
        answer: 'Tropic of Cancer (23.5° N)',
        explanation: 'The Tropic of Cancer passes through 8 Indian states at 23°30′ N latitude.'
      }
    ],
    secondary: [
      {
        question: 'Which Indian river is known as the "Dakshin Ganga" or Ganga of the South due to its age and expanse?',
        options: ['Godavari', 'Krishna', 'Cauvery', 'Mahanadi'],
        answer: 'Godavari',
        explanation: 'The Godavari is India’s second longest river and the longest in Peninsular India.'
      },
      {
        question: 'Which mountain pass connects the Kashmir Valley with the Ladakh region?',
        options: ['Zoji La Pass', 'Rohtang Pass', 'Nathu La Pass', 'Shipki La Pass'],
        answer: 'Zoji La Pass',
        explanation: 'Zoji La is a vital strategic mountain pass on National Highway 1 between Srinagar and Leh.'
      },
      {
        question: 'What is the standard meridian of India from which Indian Standard Time (IST) is calculated?',
        options: ['82.5° E (Mirzapur, UP)', '75.0° E', '90.0° E', '80.0° E'],
        answer: '82.5° E (Mirzapur, UP)',
        explanation: 'IST is calculated based on 82°30′ E longitude passing near Mirzapur in Uttar Pradesh (UTC +5:30).'
      },
      {
        question: 'Which is the deepest oceanic trench on Earth?',
        options: ['Mariana Trench', 'Java Trench', 'Puerto Rico Trench', 'Tonga Trench'],
        answer: 'Mariana Trench',
        explanation: 'The Mariana Trench in the western Pacific reaches a maximum depth of ~11,000 meters at Challenger Deep.'
      },
      {
        question: 'Majuli, the world’s largest inhabited river island, is located on which river in Assam?',
        options: ['Brahmaputra', 'Ganga', 'Barak', 'Teesta'],
        answer: 'Brahmaputra',
        explanation: 'Majuli is a picturesque river island formed by the mighty Brahmaputra river in Assam.'
      }
    ],
    senior: [
      {
        question: 'Which climatic phenomenon involves the periodic warming of sea surface temperatures in the central and eastern Pacific Ocean, impacting the Indian Monsoon?',
        options: ['El Niño', 'La Niña', 'Coriolis Effect', 'Walker Circulation'],
        answer: 'El Niño',
        explanation: 'El Niño events disrupt normal Pacific trade winds and often suppress the strength of the Indian summer monsoon.'
      },
      {
        question: 'The "Ten Degree Channel" separates which two island groups in the Indian Ocean?',
        options: ['Andaman Islands and Nicobar Islands', 'Lakshadweep and Maldives', 'Minicoy and Amindivi', 'Daman and Diu'],
        answer: 'Andaman Islands and Nicobar Islands',
        explanation: 'The Ten Degree Channel lies on the 10° N parallel dividing the Andaman group from the Nicobar group.'
      },
      {
        question: 'Which geomorphic process causes the mechanical disintegration and chemical decomposition of rocks in situ?',
        options: ['Weathering', 'Erosion', 'Mass Wasting', 'Deposition'],
        answer: 'Weathering',
        explanation: 'Weathering is the breakdown of rocks at the Earth’s surface without physical transportation.'
      },
      {
        question: 'Which type of soil in India is also known as "Regur Soil" and is ideally suited for cotton cultivation?',
        options: ['Black Soil', 'Alluvial Soil', 'Red and Yellow Soil', 'Laterite Soil'],
        answer: 'Black Soil',
        explanation: 'Black soil (Regur) derived from Deccan volcanic basalt is rich in clay and moisture-retentive.'
      },
      {
        question: 'What causes the Coriolis effect which deflects winds to the right in the Northern Hemisphere?',
        options: ['Earth’s rotation on its axis', 'Gravitational pull of the Moon', 'Solar radiation intensity', 'Oceanic density gradients'],
        answer: 'Earth’s rotation on its axis',
        explanation: 'Earth’s eastward rotation creates an apparent deflection of moving fluid masses according to Ferrel’s Law.'
      }
    ]
  }
};
