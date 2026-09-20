/* ===================================================
 * Educational Games & Intelligence Zone Engine
 * Dr. A.P.J. Abdul Kalam Inter College
 * =================================================== */

(function() {
  'use strict';

  // --- AUDIO SYNTHESIZER (Web Audio API) ---
  const SoundSystem = {
    ctx: null,
    muted: true, // Default off per requirement

    init() {
      const saved = localStorage.getItem('apj_games_sound');
      if (saved !== null) {
        this.muted = saved === 'true';
      }
      this.updateBtnUI();
    },

    getContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    },

    toggle() {
      this.muted = !this.muted;
      localStorage.setItem('apj_games_sound', this.muted ? 'true' : 'false');
      this.updateBtnUI();
      if (!this.muted) {
        this.playTone(520, 0.1, 'sine');
      }
    },

    updateBtnUI() {
      const btns = document.querySelectorAll('.sound-toggle-btn');
      btns.forEach(btn => {
        if (this.muted) {
          btn.classList.add('muted');
          btn.innerHTML = '<i class="fas fa-volume-mute"></i> <span>Sound: Off</span>';
        } else {
          btn.classList.remove('muted');
          btn.innerHTML = '<i class="fas fa-volume-up"></i> <span>Sound: On</span>';
        }
      });
    },

    playTone(freq, duration, type = 'sine') {
      if (this.muted) return;
      try {
        const ctx = this.getContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (e) {
        // Fallback gracefully
      }
    },

    playCorrect() {
      if (this.muted) return;
      this.playTone(587.33, 0.12, 'triangle'); // D5
      setTimeout(() => this.playTone(880, 0.22, 'triangle'), 100); // A5
    },

    playIncorrect() {
      if (this.muted) return;
      this.playTone(280, 0.15, 'sawtooth');
      setTimeout(() => this.playTone(220, 0.22, 'sawtooth'), 120);
    },

    playWin() {
      if (this.muted) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((note, i) => {
        setTimeout(() => this.playTone(note, 0.18, 'triangle'), i * 110);
      });
    },

    playClick() {
      if (this.muted) return;
      this.playTone(440, 0.04, 'sine');
    }
  };

  // --- LOCAL STORAGE PROGRESS & STATS MANAGER ---
  const ProgressManager = {
    STORAGE_KEY: 'apj_school_games_progress_v2',

    data: {
      selectedClass: '6',
      gamesPlayed: 0,
      questionsAnswered: 0,
      correctCount: 0,
      totalScore: 0,
      bestScores: {},
      achievements: {},
      currentStreak: 1,
      lastPlayDate: ''
    },

    init() {
      try {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          this.data = Object.assign(this.data, JSON.parse(saved));
        }
      } catch (e) {
        console.warn('Progress storage unavailable:', e);
      }
      this.checkStreak();
      this.save();
    },

    save() {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
      } catch (e) {}
    },

    setClass(val) {
      this.data.selectedClass = val;
      this.save();
    },

    getClass() {
      return this.data.selectedClass || '6';
    },

    checkStreak() {
      const today = new Date().toISOString().split('T')[0];
      if (!this.data.lastPlayDate) {
        this.data.lastPlayDate = today;
        this.data.currentStreak = 1;
        return;
      }
      if (this.data.lastPlayDate !== today) {
        const last = new Date(this.data.lastPlayDate);
        const curr = new Date(today);
        const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          this.data.currentStreak = (this.data.currentStreak || 1) + 1;
        } else if (diffDays > 1) {
          this.data.currentStreak = 1;
        }
        this.data.lastPlayDate = today;
      }
    },

    recordGameResult(gameId, score, attempted, correct) {
      this.data.gamesPlayed += 1;
      this.data.questionsAnswered += (attempted || 0);
      this.data.correctCount += (correct || 0);
      this.data.totalScore += score;

      if (!this.data.bestScores[gameId] || score > this.data.bestScores[gameId]) {
        this.data.bestScores[gameId] = score;
      }

      this.checkAchievements();
      this.save();
    },

    checkAchievements() {
      const a = this.data.achievements;
      if (this.data.gamesPlayed >= 1) a['first_game'] = true;
      if (this.data.questionsAnswered >= 10) a['ten_solved'] = true;
      if (this.data.questionsAnswered >= 50) a['fifty_solved'] = true;
      if (this.data.questionsAnswered >= 100) a['hundred_solved'] = true;
      if (this.data.currentStreak >= 3) a['streak_3'] = true;

      const accuracy = this.getAverageAccuracy();
      if (this.data.questionsAnswered >= 10 && accuracy >= 90) {
        a['accuracy_90'] = true;
      }
      this.save();
    },

    getAverageAccuracy() {
      if (!this.data.questionsAnswered) return 0;
      return Math.round((this.data.correctCount / this.data.questionsAnswered) * 100);
    },

    getBestScore(gameId) {
      return this.data.bestScores[gameId] || 0;
    }
  };

  // --- GAME DEFINITIONS REGISTRY ---
  const GAME_CATALOG = [
    {
      id: 'memory-match',
      name: 'Memory Match',
      icon: '🧠',
      subject: 'Memory',
      skills: 'Focus • Observation • Visual Recall',
      desc: 'Flip cards and match pairs to sharpen your concentration and visual memory.',
      difficulty: 'Easy'
    },
    {
      id: 'number-ninja',
      name: 'Number Ninja',
      icon: '🔢',
      subject: 'Mathematics',
      skills: 'Mental Math • Speed • Arithmetic',
      desc: 'Solve arithmetic calculations and algebraic expressions adjusted to your class.',
      difficulty: 'Medium'
    },
    {
      id: 'word-wizard',
      name: 'Word Wizard',
      icon: '📚',
      subject: 'English',
      skills: 'Vocabulary • Grammar • Synonyms',
      desc: 'Master English vocabulary with synonyms, antonyms, spellings, and cloze sentences.',
      difficulty: 'Medium'
    },
    {
      id: 'pattern-master',
      name: 'Pattern Master',
      icon: '🔷',
      subject: 'Logic',
      skills: 'Sequencing • Reasoning • Analytical',
      desc: 'Find the next term in number series, visual shapes, and logical progressions.',
      difficulty: 'Medium'
    },
    {
      id: 'science-challenge',
      name: 'Science Challenge',
      icon: '🔬',
      subject: 'Science',
      skills: 'Physics • Chemistry • Biology',
      desc: 'Explore the natural sciences with curated conceptual questions and detailed explanations.',
      difficulty: 'Hard'
    },
    {
      id: 'gk-explorer',
      name: 'GK Explorer',
      icon: '🌎',
      subject: 'General Knowledge',
      skills: 'India • World • Geography • Civics',
      desc: 'Embark on a voyage of discovery across Indian heritage, world geography, and science.',
      difficulty: 'Easy'
    },
    {
      id: 'spot-odd-one',
      name: 'Spot the Odd One',
      icon: '👀',
      subject: 'Logic',
      skills: 'Classification • Sharp Observation',
      desc: 'Identify which word, symbol, number or shape does not belong to the group.',
      difficulty: 'Easy'
    },
    {
      id: 'quick-math',
      name: 'Quick Math',
      icon: '⚡',
      subject: 'Mathematics',
      skills: 'Rapid Calculation • Mental Agility',
      desc: 'Rapid-fire mental arithmetic test designed to boost calculating speed with accuracy.',
      difficulty: 'Medium'
    },
    {
      id: 'word-scramble',
      name: 'Word Scramble',
      icon: '🔤',
      subject: 'English',
      skills: 'Spelling • Word Formation • Clues',
      desc: 'Unscramble mixed-up letter tiles to reveal educational words using helpful clues.',
      difficulty: 'Medium'
    },
    {
      id: 'smart-match',
      name: 'Smart Match',
      icon: '🧩',
      subject: 'Science',
      skills: 'Concept Pairing • Association',
      desc: 'Connect formulas to definitions, animals to diets, and units to physical quantities.',
      difficulty: 'Medium'
    },
    {
      id: 'logic-quest',
      name: 'Logic Quest',
      icon: '🏆',
      subject: 'Logic',
      skills: 'Deduction • Syllogism • Problem Solving',
      desc: 'Crack deductive reasoning riddles, spatial directions, and analytical puzzles.',
      difficulty: 'Hard'
    },
    {
      id: 'reading-detective',
      name: 'Reading Detective',
      icon: '🔎',
      subject: 'English',
      skills: 'Comprehension • Critical Reading',
      desc: 'Read engaging passages and answer analytical questions testing key details and inferences.',
      difficulty: 'Medium'
    },
    {
      id: 'geography-explorer',
      name: 'Geography Explorer',
      icon: '🗺️',
      subject: 'General Knowledge',
      skills: 'Capitals • Rivers • Mountains',
      desc: 'Test your knowledge of Indian states, capitals, rivers, monuments, and world geography.',
      difficulty: 'Medium'
    },
    {
      id: 'brain-trainer',
      name: 'Brain Trainer',
      icon: '💡',
      subject: 'Logic',
      skills: 'Multi-skill • Cognitive Focus',
      desc: 'A comprehensive multi-round challenge combining memory, math, logic, and observation.',
      difficulty: 'Challenge'
    }
  ];

  // Helper for shuffling arrays
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // --- GAME RUNNER CONTROLLER ---
  const GameRunner = {
    currentGame: null,
    gameState: {},
    timerInterval: null,

    openGame(gameId) {
      SoundSystem.playClick();
      const meta = GAME_CATALOG.find(g => g.id === gameId);
      if (!meta) return;

      this.currentGame = meta;
      this.resetState();

      const modal = document.getElementById('gameModalOverlay');
      const modalTitle = document.getElementById('modalGameTitle');
      const modalIcon = document.getElementById('modalGameIcon');

      if (modalTitle) modalTitle.textContent = meta.name;
      if (modalIcon) modalIcon.textContent = meta.icon;

      this.showScreen('instructionsScreen');
      this.renderInstructions();

      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    closeGame() {
      SoundSystem.playClick();
      this.stopTimer();
      const modal = document.getElementById('gameModalOverlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
      this.currentGame = null;
      renderDashboardStats();
    },

    showScreen(screenId) {
      document.querySelectorAll('.game-screen').forEach(s => s.classList.remove('active'));
      const target = document.getElementById(screenId);
      if (target) target.classList.add('active');
    },

    resetState() {
      this.stopTimer();
      this.gameState = {
        score: 0,
        questionIndex: 0,
        totalQuestions: 5,
        correctAnswers: 0,
        wrongAnswers: 0,
        timeElapsed: 0,
        questions: [],
        currentData: null,
        isAnswered: false
      };
      this.updateHud();
    },

    startTimer() {
      this.stopTimer();
      this.timerInterval = setInterval(() => {
        this.gameState.timeElapsed += 1;
        const timerEl = document.getElementById('hudTimerVal');
        if (timerEl) {
          const mins = Math.floor(this.gameState.timeElapsed / 60);
          const secs = this.gameState.timeElapsed % 60;
          timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
      }, 1000);
    },

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },

    updateHud() {
      const scoreEl = document.getElementById('hudScoreVal');
      const qEl = document.getElementById('hudQuestionVal');
      const progressBar = document.getElementById('gameProgressBarFill');

      if (scoreEl) scoreEl.textContent = this.gameState.score;
      if (qEl) qEl.textContent = `${this.gameState.questionIndex + 1}/${this.gameState.totalQuestions}`;
      if (progressBar) {
        const pct = (this.gameState.questionIndex / this.gameState.totalQuestions) * 100;
        progressBar.style.width = `${pct}%`;
      }
    },

    renderInstructions() {
      const instBox = document.getElementById('instructionBoxContent');
      if (!instBox) return;

      const g = this.currentGame;
      let rulesHtml = '';

      switch (g.id) {
        case 'memory-match':
          rulesHtml = `
            <li><i class="fas fa-check-circle"></i> Click cards to flip them over.</li>
            <li><i class="fas fa-check-circle"></i> Remember card locations and match identical pairs.</li>
            <li><i class="fas fa-check-circle"></i> Complete all pairs with fewest moves to achieve high score.</li>
          `;
          break;
        case 'number-ninja':
          rulesHtml = `
            <li><i class="fas fa-check-circle"></i> Solve each math equation accurately.</li>
            <li><i class="fas fa-check-circle"></i> Questions automatically adapt to your class level.</li>
            <li><i class="fas fa-check-circle"></i> +10 points for each correct calculation.</li>
          `;
          break;
        case 'word-scramble':
          rulesHtml = `
            <li><i class="fas fa-check-circle"></i> Look at the scrambled letter tiles.</li>
            <li><i class="fas fa-check-circle"></i> Type the correct spelled word in the input box.</li>
            <li><i class="fas fa-check-circle"></i> Use the "Hint" button if you need a clue!</li>
          `;
          break;
        case 'smart-match':
          rulesHtml = `
            <li><i class="fas fa-check-circle"></i> Tap a concept on the left column.</li>
            <li><i class="fas fa-check-circle"></i> Tap its matching answer in the right column.</li>
            <li><i class="fas fa-check-circle"></i> Match all pairs correctly to complete the level.</li>
          `;
          break;
        default:
          rulesHtml = `
            <li><i class="fas fa-check-circle"></i> Read each question carefully.</li>
            <li><i class="fas fa-check-circle"></i> Select the best answer from the options.</li>
            <li><i class="fas fa-check-circle"></i> Read the learning explanation to reinforce your knowledge.</li>
          `;
      }

      instBox.innerHTML = `
        <div class="instruction-icon">${g.icon}</div>
        <h2>${g.name}</h2>
        <p class="instruction-text">${g.desc}</p>
        <ul class="instructions-list">${rulesHtml}</ul>
        <div class="instruction-controls">
          <button class="btn-start-game-cta" onclick="window.GameEngine.startGameplay()">
            <i class="fas fa-play"></i> Start Playing
          </button>
        </div>
      `;
    },

    startGameplay() {
      SoundSystem.playClick();
      this.resetState();
      this.showScreen('gameplayScreen');
      this.startTimer();

      const tier = window.GAME_DATA ? window.GAME_DATA.getTier(ProgressManager.getClass()) : 'junior';

      switch (this.currentGame.id) {
        case 'memory-match':
          this.initMemoryMatch(tier);
          break;
        case 'number-ninja':
          this.initNumberNinja(tier);
          break;
        case 'word-wizard':
          this.initWordWizard(tier);
          break;
        case 'pattern-master':
          this.initPatternMaster(tier);
          break;
        case 'science-challenge':
          this.initScienceChallenge(tier);
          break;
        case 'gk-explorer':
          this.initGkExplorer(tier);
          break;
        case 'spot-odd-one':
          this.initOddOneOut(tier);
          break;
        case 'quick-math':
          this.initQuickMath(tier);
          break;
        case 'word-scramble':
          this.initWordScramble(tier);
          break;
        case 'smart-match':
          this.initSmartMatch(tier);
          break;
        case 'logic-quest':
          this.initLogicQuest(tier);
          break;
        case 'reading-detective':
          this.initReadingDetective(tier);
          break;
        case 'geography-explorer':
          this.initGeographyExplorer(tier);
          break;
        case 'brain-trainer':
          this.initBrainTrainer(tier);
          break;
        default:
          this.initGkExplorer(tier);
      }
    },

    // 1. MEMORY MATCH ENGINE
    initMemoryMatch(tier) {
      const items = window.GAME_DATA.memory[tier] || window.GAME_DATA.memory.junior;
      const count = tier === 'little' ? 4 : 6;
      const selected = shuffleArray(items).slice(0, count);
      
      const cards = [];
      selected.forEach((item, idx) => {
        cards.push({ id: `c_${idx}_a`, pairId: item.id, label: item.label, icon: item.icon });
        cards.push({ id: `c_${idx}_b`, pairId: item.id, label: item.label, icon: item.icon });
      });

      this.gameState.totalQuestions = count;
      this.gameState.memoryCards = shuffleArray(cards);
      this.gameState.flippedCards = [];
      this.gameState.matchedPairs = 0;
      this.gameState.moves = 0;

      this.renderMemoryGrid();
    },

    renderMemoryGrid() {
      const arena = document.getElementById('activeGameArena');
      const cards = this.gameState.memoryCards;

      let html = `<div class="memory-grid">`;
      cards.forEach(c => {
        html += `
          <div class="memory-card" id="${c.id}" onclick="window.GameEngine.handleMemoryCardClick('${c.id}')">
            <div class="memory-card-inner">
              <div class="memory-card-front">
                <i class="fas fa-question"></i>
              </div>
              <div class="memory-card-back">
                <div class="memory-card-icon">${c.icon}</div>
                <div class="memory-card-label">${c.label}</div>
              </div>
            </div>
          </div>
        `;
      });
      html += `</div>`;
      arena.innerHTML = html;
      this.updateHud();
    },

    handleMemoryCardClick(cardId) {
      if (this.gameState.isLocked) return;
      const cardEl = document.getElementById(cardId);
      if (!cardEl || cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

      SoundSystem.playClick();
      cardEl.classList.add('flipped');
      this.gameState.flippedCards.push(cardId);

      if (this.gameState.flippedCards.length === 2) {
        this.gameState.moves += 1;
        this.gameState.isLocked = true;
        const [id1, id2] = this.gameState.flippedCards;
        const card1 = this.gameState.memoryCards.find(c => c.id === id1);
        const card2 = this.gameState.memoryCards.find(c => c.id === id2);

        if (card1.pairId === card2.pairId) {
          setTimeout(() => {
            SoundSystem.playCorrect();
            document.getElementById(id1).classList.add('matched');
            document.getElementById(id2).classList.add('matched');
            this.gameState.matchedPairs += 1;
            this.gameState.score += 20;
            this.gameState.correctAnswers += 1;
            this.gameState.flippedCards = [];
            this.gameState.isLocked = false;
            this.updateHud();

            if (this.gameState.matchedPairs === this.gameState.totalQuestions) {
              setTimeout(() => this.finishGame(), 500);
            }
          }, 400);
        } else {
          setTimeout(() => {
            SoundSystem.playIncorrect();
            document.getElementById(id1).classList.remove('flipped');
            document.getElementById(id2).classList.remove('flipped');
            this.gameState.flippedCards = [];
            this.gameState.isLocked = false;
          }, 900);
        }
      }
    },

    // 2. NUMBER NINJA ENGINE
    initNumberNinja(tier) {
      this.gameState.totalQuestions = 6;
      this.gameState.questions = this.generateMathQuestions(tier, 6);
      this.gameState.questionIndex = 0;
      this.renderMathQuestion();
    },

    generateMathQuestions(tier, count) {
      const list = [];
      for (let i = 0; i < count; i++) {
        let q = '', a = 0, explanation = '';
        if (tier === 'little') {
          const n1 = Math.floor(Math.random() * 5) + 1;
          const n2 = Math.floor(Math.random() * 5) + 1;
          q = `${n1} + ${n2} = ?`;
          a = n1 + n2;
          explanation = `Counting ${n1} and adding ${n2} equals ${a}.`;
        } else if (tier === 'junior') {
          const op = Math.random() > 0.5 ? '+' : '×';
          if (op === '+') {
            const n1 = Math.floor(Math.random() * 40) + 10;
            const n2 = Math.floor(Math.random() * 40) + 10;
            q = `${n1} + ${n2} = ?`;
            a = n1 + n2;
          } else {
            const n1 = Math.floor(Math.random() * 9) + 2;
            const n2 = Math.floor(Math.random() * 9) + 2;
            q = `${n1} × ${n2} = ?`;
            a = n1 * n2;
          }
          explanation = `The arithmetic solution is ${a}.`;
        } else if (tier === 'middle') {
          const n1 = Math.floor(Math.random() * 15) + 5;
          const n2 = Math.floor(Math.random() * 8) + 2;
          const n3 = Math.floor(Math.random() * 20) + 5;
          q = `(${n1} × ${n2}) + ${n3} = ?`;
          a = (n1 * n2) + n3;
          explanation = `According to BODMAS: (${n1} × ${n2}) = ${n1*n2}, then + ${n3} = ${a}.`;
        } else if (tier === 'secondary') {
          const x = Math.floor(Math.random() * 10) + 2;
          const coeff = Math.floor(Math.random() * 4) + 2;
          const addVal = Math.floor(Math.random() * 12) + 1;
          const res = (coeff * x) + addVal;
          q = `Solve for x:  ${coeff}x + ${addVal} = ${res}`;
          a = x;
          explanation = `${coeff}x = ${res} - ${addVal} = ${coeff*x} => x = ${x}.`;
        } else {
          const x = Math.floor(Math.random() * 8) + 2;
          q = `If f(x) = x² - 2x + 1, find f(${x}):`;
          a = (x * x) - (2 * x) + 1;
          explanation = `f(${x}) = (${x})² - 2(${x}) + 1 = ${x*x} - ${2*x} + 1 = ${a}.`;
        }

        // Generate 4 distinct choices
        const opts = [a];
        while (opts.length < 4) {
          const delta = (Math.floor(Math.random() * 6) + 1) * (Math.random() > 0.5 ? 1 : -1);
          const wrong = a + delta;
          if (wrong >= 0 && !opts.includes(wrong)) {
            opts.push(wrong);
          }
        }

        list.push({
          question: q,
          options: shuffleArray(opts).map(String),
          answer: String(a),
          explanation: explanation
        });
      }
      return list;
    },

    renderMathQuestion() {
      const arena = document.getElementById('activeGameArena');
      const q = this.gameState.questions[this.gameState.questionIndex];
      this.gameState.currentData = q;
      this.gameState.isAnswered = false;

      let html = `
        <div class="math-arena-box">
          <div class="math-problem-display">${q.question}</div>
          <div class="math-options-grid">
      `;
      q.options.forEach((opt, idx) => {
        html += `
          <button class="btn-option-choice" id="opt_${idx}" onclick="window.GameEngine.handleQuizAnswer('${opt}', 'opt_${idx}')">
            ${opt}
          </button>
        `;
      });
      html += `
          </div>
          <div id="eduExplanation" class="edu-explanation-card"></div>
        </div>
      `;
      arena.innerHTML = html;
      this.updateHud();
    },

    // 3. WORD WIZARD ENGINE
    initWordWizard(tier) {
      const raw = window.GAME_DATA.words[tier] || window.GAME_DATA.words.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderStandardQuizQuestion();
    },

    // 4. PATTERN MASTER ENGINE
    initPatternMaster(tier) {
      const raw = window.GAME_DATA.patterns[tier] || window.GAME_DATA.patterns.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderPatternQuestion();
    },

    renderPatternQuestion() {
      const arena = document.getElementById('activeGameArena');
      const q = this.gameState.questions[this.gameState.questionIndex];
      this.gameState.currentData = q;
      this.gameState.isAnswered = false;

      let seqHtml = `<div class="pattern-sequence-wrap">`;
      q.sequence.forEach(item => {
        if (item === '?') {
          seqHtml += `<div class="pattern-item-box question-mark">?</div>`;
        } else {
          seqHtml += `<div class="pattern-item-box">${item}</div>`;
        }
      });
      seqHtml += `</div>`;

      let optsHtml = `<div class="quiz-options-list">`;
      q.options.forEach((opt, idx) => {
        optsHtml += `
          <button class="quiz-option-btn" id="opt_${idx}" onclick="window.GameEngine.handleQuizAnswer('${opt}', 'opt_${idx}')">
            <span class="quiz-option-marker">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
          </button>
        `;
      });
      optsHtml += `</div>`;

      arena.innerHTML = `
        <div class="standard-quiz-container">
          <h3 class="quiz-question-title">Identify the pattern and select the next item:</h3>
          ${seqHtml}
          ${optsHtml}
          <div id="eduExplanation" class="edu-explanation-card"></div>
        </div>
      `;
      this.updateHud();
    },

    // 5. SCIENCE CHALLENGE ENGINE
    initScienceChallenge(tier) {
      const raw = window.GAME_DATA.science[tier] || window.GAME_DATA.science.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderStandardQuizQuestion();
    },

    // 6. GK EXPLORER ENGINE
    initGkExplorer(tier) {
      const raw = window.GAME_DATA.gk[tier] || window.GAME_DATA.gk.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderStandardQuizQuestion();
    },

    // 7. ODD ONE OUT ENGINE
    initOddOneOut(tier) {
      const raw = window.GAME_DATA.oddOneOut[tier] || window.GAME_DATA.oddOneOut.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderOddOneOutQuestion();
    },

    renderOddOneOutQuestion() {
      const arena = document.getElementById('activeGameArena');
      const q = this.gameState.questions[this.gameState.questionIndex];
      this.gameState.currentData = q;
      this.gameState.isAnswered = false;

      let html = `
        <div class="standard-quiz-container">
          <h3 class="quiz-question-title">Select the item that does NOT belong to the group:</h3>
          <div class="odd-items-grid">
      `;
      q.items.forEach((item, idx) => {
        html += `
          <button class="odd-item-btn" id="opt_${idx}" onclick="window.GameEngine.handleQuizAnswer('${item}', 'opt_${idx}')">
            ${item}
          </button>
        `;
      });
      html += `
          </div>
          <div id="eduExplanation" class="edu-explanation-card"></div>
        </div>
      `;
      arena.innerHTML = html;
      this.updateHud();
    },

    // 8. QUICK MATH ENGINE
    initQuickMath(tier) {
      this.initNumberNinja(tier);
    },

    // 9. WORD SCRAMBLE ENGINE
    initWordScramble(tier) {
      const raw = window.GAME_DATA.scramble[tier] || window.GAME_DATA.scramble.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderScrambleQuestion();
    },

    renderScrambleQuestion() {
      const arena = document.getElementById('activeGameArena');
      const q = this.gameState.questions[this.gameState.questionIndex];
      this.gameState.currentData = q;
      this.gameState.isAnswered = false;

      let tilesHtml = `<div class="scramble-display-tray">`;
      q.scrambled.split('').forEach(char => {
        tilesHtml += `<div class="scramble-letter-tile">${char}</div>`;
      });
      tilesHtml += `</div>`;

      arena.innerHTML = `
        <div class="standard-quiz-container" style="text-align:center;">
          <h3 class="quiz-question-title">Unscramble the letters to form the correct word:</h3>
          ${tilesHtml}
          <div class="scramble-input-wrap">
            <input type="text" id="scrambleInput" class="scramble-input" placeholder="TYPE WORD" maxlength="${q.word.length}" autocomplete="off" />
            <button class="btn-option-choice" style="padding:10px 20px;" onclick="window.GameEngine.submitScrambleWord()">Submit</button>
          </div>
          <div style="margin-bottom:14px;">
            <button class="btn-scramble-hint" onclick="alert('💡 Hint: ' + '${q.hint}')">
              <i class="fas fa-lightbulb"></i> Need a Hint?
            </button>
          </div>
          <div id="eduExplanation" class="edu-explanation-card"></div>
        </div>
      `;
      this.updateHud();

      setTimeout(() => {
        const input = document.getElementById('scrambleInput');
        if (input) {
          input.focus();
          input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.submitScrambleWord();
          });
        }
      }, 100);
    },

    submitScrambleWord() {
      if (this.gameState.isAnswered) return;
      const input = document.getElementById('scrambleInput');
      if (!input || !input.value.trim()) return;

      const userWord = input.value.trim().toUpperCase();
      const q = this.gameState.currentData;
      const isCorrect = userWord === q.word.toUpperCase();

      this.gameState.isAnswered = true;
      const expCard = document.getElementById('eduExplanation');

      if (isCorrect) {
        SoundSystem.playCorrect();
        this.gameState.score += 10;
        this.gameState.correctAnswers += 1;
        expCard.className = 'edu-explanation-card correct';
        expCard.innerHTML = `
          <h4>✅ Brilliant! You got it right!</h4>
          <p>The correct word is <strong>${q.word}</strong>. ${q.hint}</p>
          <button class="btn-next-question" onclick="window.GameEngine.nextQuestion()">
            Continue <i class="fas fa-arrow-right"></i>
          </button>
        `;
      } else {
        SoundSystem.playIncorrect();
        this.gameState.wrongAnswers += 1;
        expCard.className = 'edu-explanation-card incorrect';
        expCard.innerHTML = `
          <h4>❌ Good try!</h4>
          <p>The correct unscrambled word is <strong>${q.word}</strong>. (${q.hint})</p>
          <button class="btn-next-question" onclick="window.GameEngine.nextQuestion()">
            Continue <i class="fas fa-arrow-right"></i>
          </button>
        `;
      }
      expCard.style.display = 'block';
      this.updateHud();
    },

    // 10. SMART MATCH ENGINE
    initSmartMatch(tier) {
      const rawSets = window.GAME_DATA.smartMatch[tier] || window.GAME_DATA.smartMatch.junior;
      const activeSet = rawSets[Math.floor(Math.random() * rawSets.length)];

      this.gameState.smartTopic = activeSet.topic;
      this.gameState.pairs = activeSet.pairs;
      this.gameState.totalQuestions = activeSet.pairs.length;
      this.gameState.matchedCount = 0;
      this.gameState.selectedLeft = null;
      this.gameState.selectedRight = null;

      this.renderSmartMatch();
    },

    renderSmartMatch() {
      const arena = document.getElementById('activeGameArena');
      const leftItems = shuffleArray(this.gameState.pairs.map((p, idx) => ({ id: `L_${idx}`, text: p.left, pairIdx: idx })));
      const rightItems = shuffleArray(this.gameState.pairs.map((p, idx) => ({ id: `R_${idx}`, text: p.right, pairIdx: idx })));

      let leftHtml = `<div class="smart-match-list">`;
      leftItems.forEach(item => {
        leftHtml += `<div class="smart-chip" id="${item.id}" data-pair="${item.pairIdx}" onclick="window.GameEngine.handleSmartChipClick('${item.id}', 'left')">${item.text}</div>`;
      });
      leftHtml += `</div>`;

      let rightHtml = `<div class="smart-match-list">`;
      rightItems.forEach(item => {
        rightHtml += `<div class="smart-chip" id="${item.id}" data-pair="${item.pairIdx}" onclick="window.GameEngine.handleSmartChipClick('${item.id}', 'right')">${item.text}</div>`;
      });
      rightHtml += `</div>`;

      arena.innerHTML = `
        <div class="standard-quiz-container">
          <h3 class="quiz-question-title" style="text-align:center;">${this.gameState.smartTopic}</h3>
          <p style="text-align:center; color:var(--game-text-muted); font-size:0.9rem; margin-bottom:18px;">
            Tap a card on the left, then tap its matching pair on the right.
          </p>
          <div class="smart-match-arena">
            <div>
              <div class="smart-col-title">Concepts</div>
              ${leftHtml}
            </div>
            <div>
              <div class="smart-col-title">Matches</div>
              ${rightHtml}
            </div>
          </div>
        </div>
      `;
      this.updateHud();
    },

    handleSmartChipClick(chipId, side) {
      const el = document.getElementById(chipId);
      if (!el || el.classList.contains('matched')) return;

      SoundSystem.playClick();

      if (side === 'left') {
        document.querySelectorAll('.smart-chip[id^="L_"]').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        this.gameState.selectedLeft = el;
      } else {
        document.querySelectorAll('.smart-chip[id^="R_"]').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        this.gameState.selectedRight = el;
      }

      if (this.gameState.selectedLeft && this.gameState.selectedRight) {
        const leftPair = this.gameState.selectedLeft.getAttribute('data-pair');
        const rightPair = this.gameState.selectedRight.getAttribute('data-pair');

        if (leftPair === rightPair) {
          SoundSystem.playCorrect();
          this.gameState.selectedLeft.classList.remove('selected');
          this.gameState.selectedRight.classList.remove('selected');
          this.gameState.selectedLeft.classList.add('matched');
          this.gameState.selectedRight.classList.add('matched');
          this.gameState.matchedCount += 1;
          this.gameState.score += 15;
          this.gameState.correctAnswers += 1;
          this.gameState.selectedLeft = null;
          this.gameState.selectedRight = null;
          this.updateHud();

          if (this.gameState.matchedCount === this.gameState.totalQuestions) {
            setTimeout(() => this.finishGame(), 600);
          }
        } else {
          SoundSystem.playIncorrect();
          const l = this.gameState.selectedLeft;
          const r = this.gameState.selectedRight;
          setTimeout(() => {
            if (l) l.classList.remove('selected');
            if (r) r.classList.remove('selected');
          }, 500);
          this.gameState.selectedLeft = null;
          this.gameState.selectedRight = null;
        }
      }
    },

    // 11. LOGIC QUEST ENGINE
    initLogicQuest(tier) {
      const raw = window.GAME_DATA.logic[tier] || window.GAME_DATA.logic.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderStandardQuizQuestion();
    },

    // 12. READING DETECTIVE ENGINE
    initReadingDetective(tier) {
      const raw = window.GAME_DATA.reading[tier] || window.GAME_DATA.reading.junior;
      const readingUnit = raw[0] || raw;
      this.gameState.readingPassage = readingUnit.passage;
      this.gameState.readingTitle = readingUnit.title;
      this.gameState.questions = readingUnit.questions;
      this.gameState.totalQuestions = readingUnit.questions.length;
      this.gameState.questionIndex = 0;
      this.renderReadingDetectiveQuestion();
    },

    renderReadingDetectiveQuestion() {
      const arena = document.getElementById('activeGameArena');
      const q = this.gameState.questions[this.gameState.questionIndex];
      this.gameState.currentData = q;
      this.gameState.isAnswered = false;

      let optsHtml = `<div class="quiz-options-list">`;
      q.options.forEach((opt, idx) => {
        optsHtml += `
          <button class="quiz-option-btn" id="opt_${idx}" onclick="window.GameEngine.handleQuizAnswer('${opt}', 'opt_${idx}')">
            <span class="quiz-option-marker">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
          </button>
        `;
      });
      optsHtml += `</div>`;

      arena.innerHTML = `
        <div class="reading-detective-layout">
          <div class="passage-viewer-box">
            <h3><i class="fas fa-book-reader" style="color:var(--game-primary);"></i> ${this.gameState.readingTitle}</h3>
            <p class="passage-text">${this.gameState.readingPassage}</p>
          </div>
          <div>
            <h3 class="quiz-question-title">${q.question}</h3>
            ${optsHtml}
            <div id="eduExplanation" class="edu-explanation-card"></div>
          </div>
        </div>
      `;
      this.updateHud();
    },

    // 13. GEOGRAPHY EXPLORER ENGINE
    initGeographyExplorer(tier) {
      const raw = window.GAME_DATA.geography[tier] || window.GAME_DATA.geography.junior;
      this.gameState.questions = shuffleArray(raw).slice(0, 5);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderStandardQuizQuestion();
    },

    // 14. BRAIN TRAINER ENGINE (Mixed Multi-Skill)
    initBrainTrainer(tier) {
      const mathQ = this.generateMathQuestions(tier, 2);
      const scienceQ = shuffleArray(window.GAME_DATA.science[tier] || window.GAME_DATA.science.junior).slice(0, 2);
      const logicQ = shuffleArray(window.GAME_DATA.logic[tier] || window.GAME_DATA.logic.junior).slice(0, 2);

      this.gameState.questions = shuffleArray([...mathQ, ...scienceQ, ...logicQ]);
      this.gameState.totalQuestions = this.gameState.questions.length;
      this.gameState.questionIndex = 0;
      this.renderStandardQuizQuestion();
    },

    // SHARED QUIZ QUESTION RENDERER
    renderStandardQuizQuestion() {
      const arena = document.getElementById('activeGameArena');
      const q = this.gameState.questions[this.gameState.questionIndex];
      this.gameState.currentData = q;
      this.gameState.isAnswered = false;

      let optsHtml = `<div class="quiz-options-list">`;
      q.options.forEach((opt, idx) => {
        optsHtml += `
          <button class="quiz-option-btn" id="opt_${idx}" onclick="window.GameEngine.handleQuizAnswer('${opt}', 'opt_${idx}')">
            <span class="quiz-option-marker">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
          </button>
        `;
      });
      optsHtml += `</div>`;

      arena.innerHTML = `
        <div class="standard-quiz-container">
          <h3 class="quiz-question-title">${q.question}</h3>
          ${optsHtml}
          <div id="eduExplanation" class="edu-explanation-card"></div>
        </div>
      `;
      this.updateHud();
    },

    handleQuizAnswer(selectedOption, btnId) {
      if (this.gameState.isAnswered) return;
      this.gameState.isAnswered = true;

      const q = this.gameState.currentData;
      const isCorrect = selectedOption === q.answer;
      const btn = document.getElementById(btnId);
      const expCard = document.getElementById('eduExplanation');

      // Disable other buttons
      document.querySelectorAll('.quiz-option-btn, .btn-option-choice, .odd-item-btn').forEach(b => {
        b.disabled = true;
      });

      if (isCorrect) {
        SoundSystem.playCorrect();
        if (btn) btn.classList.add('correct');
        this.gameState.score += 10;
        this.gameState.correctAnswers += 1;
        if (expCard) {
          expCard.className = 'edu-explanation-card correct';
          expCard.innerHTML = `
            <h4>✅ Correct! Excellent thinking!</h4>
            <p>${q.explanation || 'Great job answering correctly.'}</p>
            <button class="btn-next-question" onclick="window.GameEngine.nextQuestion()">
              Continue <i class="fas fa-arrow-right"></i>
            </button>
          `;
        }
      } else {
        SoundSystem.playIncorrect();
        if (btn) btn.classList.add('incorrect');
        this.gameState.wrongAnswers += 1;
        if (expCard) {
          expCard.className = 'edu-explanation-card incorrect';
          expCard.innerHTML = `
            <h4>❌ Not quite.</h4>
            <p><strong>Correct Answer:</strong> ${q.answer}</p>
            <p style="margin-top:4px;">${q.explanation || ''}</p>
            <button class="btn-next-question" onclick="window.GameEngine.nextQuestion()">
              Continue <i class="fas fa-arrow-right"></i>
            </button>
          `;
        }
      }

      if (expCard) expCard.style.display = 'block';
      this.updateHud();
    },

    nextQuestion() {
      SoundSystem.playClick();
      this.gameState.questionIndex += 1;
      if (this.gameState.questionIndex >= this.gameState.totalQuestions) {
        this.finishGame();
      } else {
        switch (this.currentGame.id) {
          case 'number-ninja':
          case 'quick-math':
            this.renderMathQuestion();
            break;
          case 'pattern-master':
            this.renderPatternQuestion();
            break;
          case 'spot-odd-one':
            this.renderOddOneOutQuestion();
            break;
          case 'word-scramble':
            this.renderScrambleQuestion();
            break;
          case 'reading-detective':
            this.renderReadingDetectiveQuestion();
            break;
          default:
            this.renderStandardQuizQuestion();
        }
      }
    },

    finishGame() {
      this.stopTimer();
      SoundSystem.playWin();

      const attempted = this.gameState.totalQuestions;
      const correct = this.gameState.correctAnswers;
      const score = this.gameState.score;
      const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 100;

      ProgressManager.recordGameResult(this.currentGame.id, score, attempted, correct);

      let encouragement = 'Good effort! Practice makes perfect. Keep exploring and learning! 💪';
      let icon = '🌟';
      if (accuracy >= 90) {
        encouragement = 'Outstanding performance! You are an educational superstar! 🏆';
        icon = '👑';
      } else if (accuracy >= 70) {
        encouragement = 'Amazing thinking! Keep up the brilliant progress! 🧠';
        icon = '🎉';
      } else if (accuracy >= 50) {
        encouragement = 'Great attempt! You are getting sharper and sharper! 📚';
        icon = '✨';
      }

      const resultBox = document.getElementById('resultScreenContent');
      if (resultBox) {
        resultBox.innerHTML = `
          <div class="result-badge-icon">${icon}</div>
          <h2 class="result-title">Game Complete!</h2>
          <p class="result-encouragement">${encouragement}</p>
          <div class="result-stats-summary">
            <div class="res-stat-card">
              <div class="res-stat-val">${score}</div>
              <div class="res-stat-label">Total Score</div>
            </div>
            <div class="res-stat-card">
              <div class="res-stat-val">${accuracy}%</div>
              <div class="res-stat-label">Accuracy</div>
            </div>
            <div class="res-stat-card">
              <div class="res-stat-val">${correct} / ${attempted}</div>
              <div class="res-stat-label">Solved</div>
            </div>
            <div class="res-stat-card">
              <div class="res-stat-val">${ProgressManager.getBestScore(this.currentGame.id)}</div>
              <div class="res-stat-label">Best Score</div>
            </div>
          </div>
          <div class="result-actions-wrap">
            <button class="btn-result-action btn-primary-action" onclick="window.GameEngine.startGameplay()">
              <i class="fas fa-redo"></i> Play Again
            </button>
            <button class="btn-result-action btn-secondary-action" onclick="window.GameEngine.closeGame()">
              <i class="fas fa-th-large"></i> Explore Other Games
            </button>
          </div>
        `;
      }

      this.showScreen('resultScreen');
    }
  };

  // Expose GameEngine globally for onclick bindings
  window.GameEngine = {
    openGame: (id) => GameRunner.openGame(id),
    closeGame: () => GameRunner.closeGame(),
    startGameplay: () => GameRunner.startGameplay(),
    handleMemoryCardClick: (id) => GameRunner.handleMemoryCardClick(id),
    handleQuizAnswer: (opt, btnId) => GameRunner.handleQuizAnswer(opt, btnId),
    handleSmartChipClick: (id, side) => GameRunner.handleSmartChipClick(id, side),
    submitScrambleWord: () => GameRunner.submitScrambleWord(),
    nextQuestion: () => GameRunner.nextQuestion(),
    toggleSound: () => SoundSystem.toggle()
  };

  // --- DASHBOARD UI CONTROLLERS ---
  function renderGameCards(filteredCatalog) {
    const grid = document.getElementById('gamesMainGrid');
    if (!grid) return;

    let html = '';
    filteredCatalog.forEach(g => {
      const best = ProgressManager.getBestScore(g.id);
      html += `
        <div class="game-card" data-subject="${g.subject}" data-difficulty="${g.difficulty}">
          <div class="game-card-header">
            <div class="game-icon-box">${g.icon}</div>
            <span class="subject-badge">${g.subject}</span>
          </div>
          <h3>${g.name}</h3>
          <p class="game-desc">${g.desc}</p>
          <div class="game-skills-tags">
            ${g.skills.split('•').map(s => `<span class="skill-tag">${s.trim()}</span>`).join('')}
          </div>
          <div class="game-card-footer">
            <button class="btn-play-game" onclick="window.GameEngine.openGame('${g.id}')">
              <i class="fas fa-play"></i> Play Now
            </button>
            <span class="best-score-preview">${best > 0 ? `Best: 🏆 ${best}` : '✨ New'}</span>
          </div>
        </div>
      `;
    });
    grid.innerHTML = html;
  }

  function renderRecommendedGames() {
    const recGrid = document.getElementById('recommendedGrid');
    if (!recGrid) return;

    const currentClass = ProgressManager.getClass();
    const tier = window.GAME_DATA ? window.GAME_DATA.getTier(currentClass) : 'junior';

    let recommendedIds = ['memory-match', 'number-ninja', 'word-wizard'];
    if (tier === 'little') {
      recommendedIds = ['memory-match', 'spot-odd-one', 'pattern-master'];
    } else if (tier === 'middle') {
      recommendedIds = ['science-challenge', 'number-ninja', 'gk-explorer'];
    } else if (tier === 'secondary') {
      recommendedIds = ['logic-quest', 'science-challenge', 'reading-detective'];
    } else if (tier === 'senior') {
      recommendedIds = ['brain-trainer', 'science-challenge', 'logic-quest'];
    }

    const recGames = GAME_CATALOG.filter(g => recommendedIds.includes(g.id));
    let html = '';
    recGames.forEach(g => {
      html += `
        <div class="game-card" style="border-top: 4px solid var(--game-primary);">
          <div class="game-card-header">
            <div class="game-icon-box">${g.icon}</div>
            <span class="subject-badge" style="background:#FFF0E6; color:var(--game-primary);">⭐ Recommended</span>
          </div>
          <h3>${g.name}</h3>
          <p class="game-desc">${g.desc}</p>
          <div class="game-card-footer">
            <button class="btn-play-game" onclick="window.GameEngine.openGame('${g.id}')">
              <i class="fas fa-play"></i> Play
            </button>
          </div>
        </div>
      `;
    });
    recGrid.innerHTML = html;
  }

  function renderDashboardStats() {
    const gamesPlayedEl = document.getElementById('statGamesPlayed');
    const questionsAnsweredEl = document.getElementById('statQuestionsAnswered');
    const accuracyEl = document.getElementById('statAccuracy');
    const streakEl = document.getElementById('statStreakVal');
    const tierBadge = document.getElementById('classTierBadge');

    if (gamesPlayedEl) gamesPlayedEl.textContent = ProgressManager.data.gamesPlayed;
    if (questionsAnsweredEl) questionsAnsweredEl.textContent = ProgressManager.data.questionsAnswered;
    if (accuracyEl) accuracyEl.textContent = `${ProgressManager.getAverageAccuracy()}%`;
    if (streakEl) streakEl.textContent = `${ProgressManager.data.currentStreak} Day${ProgressManager.data.currentStreak > 1 ? 's' : ''}`;

    if (tierBadge) {
      const c = ProgressManager.getClass();
      const tier = window.GAME_DATA ? window.GAME_DATA.getTier(c) : 'junior';
      const tierNames = {
        little: 'Little Learners (Nursery–UKG)',
        junior: 'Junior Learners (Class 1–5)',
        middle: 'Middle School (Class 6–8)',
        secondary: 'Secondary (Class 9–10)',
        senior: 'Senior Secondary (Class 11–12)'
      };
      tierBadge.textContent = tierNames[tier] || 'Academic Tier';
    }

    renderAchievements();
  }

  function renderAchievements() {
    const list = document.getElementById('achievementsBadgeGrid');
    if (!list) return;

    const achievementsData = [
      { id: 'first_game', name: 'First Discovery', desc: 'Played your first game', icon: '🏅' },
      { id: 'ten_solved', name: 'Knowledge Seeker', desc: 'Solved 10 questions', icon: '🧠' },
      { id: 'fifty_solved', name: 'Scholar', desc: 'Solved 50 questions', icon: '📚' },
      { id: 'hundred_solved', name: 'Master Mind', desc: 'Solved 100 questions', icon: '👑' },
      { id: 'accuracy_90', name: 'Sharp Precision', desc: 'Achieved 90%+ accuracy', icon: '🎯' },
      { id: 'streak_3', name: 'Dedicated Learner', desc: 'Maintained 3-day streak', icon: '🔥' }
    ];

    let html = '';
    achievementsData.forEach(ach => {
      const unlocked = !!ProgressManager.data.achievements[ach.id];
      html += `
        <div class="badge-item-card ${unlocked ? 'unlocked' : 'locked'}">
          <div class="badge-icon">${ach.icon}</div>
          <div class="badge-details">
            <h4>${ach.name}</h4>
            <p>${unlocked ? 'Unlocked ✅' : ach.desc}</p>
          </div>
        </div>
      `;
    });
    list.innerHTML = html;
  }

  function initDailyChallenge() {
    const btn = document.getElementById('btnStartDailyChallenge');
    const today = new Date().toISOString().split('T')[0];
    const completed = localStorage.getItem(`apj_daily_completed_${today}`) === 'true';

    if (completed && btn) {
      btn.outerHTML = '<span class="daily-completed-badge"><i class="fas fa-check-circle"></i> Today’s Challenge Completed!</span>';
    } else if (btn) {
      btn.addEventListener('click', () => {
        window.GameEngine.openGame('brain-trainer');
      });
    }
  }

  // --- INITIALIZATION ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    SoundSystem.init();
    ProgressManager.init();

    // Bind Class Selector
    const classSelector = document.getElementById('classLevelSelect');
    if (classSelector) {
      classSelector.value = ProgressManager.getClass();
      classSelector.addEventListener('change', (e) => {
        ProgressManager.setClass(e.target.value);
        renderRecommendedGames();
        renderDashboardStats();
      });
    }

    // Bind Sound Toggle Buttons
    document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => SoundSystem.toggle());
    });

    // Subject Filters
    const filterPills = document.querySelectorAll('.filter-pill');
    let currentSubject = 'all';
    let currentDiff = 'all';
    let searchQuery = '';

    function applyFilters() {
      const filtered = GAME_CATALOG.filter(g => {
        const matchSub = currentSubject === 'all' || g.subject.toLowerCase() === currentSubject.toLowerCase();
        const matchDiff = currentDiff === 'all' || g.difficulty.toLowerCase() === currentDiff.toLowerCase();
        const matchSearch = !searchQuery || g.name.toLowerCase().includes(searchQuery) || g.skills.toLowerCase().includes(searchQuery);
        return matchSub && matchDiff && matchSearch;
      });
      renderGameCards(filtered);
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentSubject = pill.getAttribute('data-subject') || 'all';
        applyFilters();
      });
    });

    // Difficulty Tabs
    const diffTabs = document.querySelectorAll('.diff-tab');
    diffTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        diffTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentDiff = tab.getAttribute('data-diff') || 'all';
        applyFilters();
      });
    });

    // Search Input
    const searchInput = document.getElementById('gameSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilters();
      });
    }

    // Modal Close Backdrop & ESC Key
    const modal = document.getElementById('gameModalOverlay');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) GameRunner.closeGame();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        GameRunner.closeGame();
      }
    });

    // Initial Renders
    renderGameCards(GAME_CATALOG);
    renderRecommendedGames();
    renderDashboardStats();
    initDailyChallenge();
  });

})();
