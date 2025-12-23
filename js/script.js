document.addEventListener('DOMContentLoaded', () => {
    
    // Tjek om data.js er indlæst
    if (typeof allFlashcardCategories === 'undefined' || typeof quizQuestions === 'undefined') {
        alert("FEJL: Kunne ikke finde data.js. Sørg for at filen 'data.js' ligger i mappen 'js' og indeholder dine spørgsmål.");
        return;
    }

    console.log("Logik start - Data fundet.");

    // DOM ELEMENTER
    const flashcardSection = document.getElementById('flashcard-section');
    const quizSection = document.getElementById('quiz-section');
    const showFlashcardsBtn = document.getElementById('show-flashcards-btn');
    const showQuizBtn = document.getElementById('show-quiz-btn');

    // Flashcard DOM
    const card = document.getElementById('flashcard');
    const frontTextElement = document.getElementById('card-front-text');
    const backTextElement = document.getElementById('card-back-text');
    const frontFooterElement = document.getElementById('card-front-footer');
    const backFooterElement = document.getElementById('card-back-footer');
    const progressText = document.getElementById('progress-text');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const categorySelect = document.getElementById('category-select');
    const resetDeckBtn = document.getElementById('reset-deck-btn'); // Omdøbt fra shuffle
    const showBackFirstToggle = document.getElementById('show-back-first-toggle');
    const cardContainerWrapper = document.getElementById('card-container-wrapper');
    const starBtns = document.querySelectorAll('.star-btn');
    
    // Feedback Knapper
    const btnCorrect = document.getElementById('feedback-correct-btn');
    const btnUnsure = document.getElementById('feedback-unsure-btn');
    const btnIncorrect = document.getElementById('feedback-incorrect-btn');
    const feedbackContainer = document.getElementById('flashcard-feedback-buttons');

    // Quiz DOM
    const quizChapterSelect = document.getElementById('quiz-chapter-select');
    const allQuestionsModeContainer = document.getElementById('all-questions-mode-container');
    const oneByOneModeContainer = document.getElementById('one-by-one-mode-container');
    const startAllQuizBtn = document.getElementById('start-all-quiz-btn');
    const quizQuestionContainer = document.getElementById('quiz-question-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const restartAllBtn = document.getElementById('restart-all-quiz-btn');
    const quizResults = document.getElementById('quiz-results');
    
    // State Variables
    let studyQueue = []; // Den aktive bunke vi øver
    let originalTotal = 0; // Hvor mange kort var der ved start?
    let isFlipped = false;
    let showBackFirst = false;
    let savedCards = JSON.parse(localStorage.getItem('flashcard_favorites')) || []; 

    // --- NAVIGATION ---
    function showSection(section) {
        if (section === 'flashcards') {
            flashcardSection.classList.remove('hidden');
            quizSection.classList.add('hidden');
            showFlashcardsBtn.classList.add('active');
            showQuizBtn.classList.remove('active');
        } else {
            flashcardSection.classList.add('hidden');
            quizSection.classList.remove('hidden');
            showFlashcardsBtn.classList.remove('active');
            showQuizBtn.classList.add('active');
            document.getElementById('show-all-questions-mode-btn').click();
        }
    }

    showFlashcardsBtn.addEventListener('click', () => showSection('flashcards'));
    showQuizBtn.addEventListener('click', () => showSection('quiz'));


    // ==========================================================
    // FLASHCARD LOGIK (Mastery Learning)
    // ==========================================================

    function populateCategorySelect() {
        categorySelect.innerHTML = '';
        
        const savedOption = document.createElement('option');
        savedOption.value = 'saved_cards';
        savedOption.textContent = `⭐ Gemte kort (${savedCards.length})`;
        categorySelect.appendChild(savedOption);

        const allOption = document.createElement('option');
        allOption.value = 'all_shuffled';
        allOption.textContent = 'Bland alle kapitler';
        allOption.selected = true; 
        categorySelect.appendChild(allOption);

        Object.keys(allFlashcardCategories).sort((a, b) => a.localeCompare(b, 'da')).forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            categorySelect.appendChild(opt);
        });
        
        loadCategory('all_shuffled');
    }

    function loadCategory(categoryName) {
        let tempDeck = [];
        
        if (categoryName === 'saved_cards') {
            if (savedCards.length === 0) {
                alert("Ingen gemte kort endnu.");
                categorySelect.value = 'all_shuffled';
                loadCategory('all_shuffled');
                return;
            }
            tempDeck = [...savedCards];
        } 
        else if (categoryName === 'all_shuffled') {
            for (const [catName, cards] of Object.entries(allFlashcardCategories)) {
                const labeledCards = cards.map(c => ({ ...c, sourceCategory: catName }));
                tempDeck = tempDeck.concat(labeledCards);
            }
            shuffleArray(tempDeck);
        } 
        else {
            if (allFlashcardCategories[categoryName]) {
                tempDeck = allFlashcardCategories[categoryName].map(c => ({
                    ...c,
                    sourceCategory: categoryName
                }));
            }
            shuffleArray(tempDeck);
        }

        // Initialiser Study Queue
        studyQueue = [...tempDeck];
        originalTotal = studyQueue.length;
        
        // Reset view
        isFlipped = false;
        card.classList.remove('is-flipped');
        
        updateCardUI();
    }

    function updateCardUI() {
        // Er vi færdige?
        if (studyQueue.length === 0) {
            if (originalTotal === 0) {
                frontTextElement.textContent = "Ingen kort valgt.";
                return;
            }
            // Færdig skærm
            frontTextElement.textContent = "🎉 Godt gået! \nDu har været igennem alle kortene.";
            backTextElement.textContent = "Tryk på 'Start forfra' for at prøve igen.";
            frontFooterElement.textContent = "";
            backFooterElement.textContent = "";
            feedbackContainer.classList.add('hidden'); // Skjul knapper
            progressText.textContent = "Færdig!";
            progressBarFill.style.width = "100%";
            return;
        }

        // Vis knapper igen hvis de var skjult
        feedbackContainer.classList.remove('hidden');

        // Hent øverste kort i køen (index 0)
        const cardData = studyQueue[0];
        
        frontTextElement.textContent = showBackFirst ? cardData.back : cardData.front;
        backTextElement.textContent = showBackFirst ? cardData.front : cardData.back;

        const footerText = cardData.sourceCategory || "";
        frontFooterElement.textContent = footerText;
        backFooterElement.textContent = footerText;

        // Opdater Progress Bar (Hvor mange er fjernet fra bunken?)
        // Formel: (Originale - Tilbage) / Originale
        const completed = originalTotal - studyQueue.length;
        const percentage = (completed / originalTotal) * 100;
        
        progressBarFill.style.width = `${percentage}%`;
        progressText.textContent = `Kort tilbage i bunken: ${studyQueue.length} (Færdig: ${Math.round(percentage)}%)`;

        // Opdater stjerne-status
        const isSaved = savedCards.some(s => s.front === cardData.front && s.back === cardData.back);
        starBtns.forEach(btn => {
            if (isSaved) {
                btn.classList.add('active'); 
                btn.setAttribute('title', 'Fjern fra gemte');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('title', 'Gem til senere');
            }
        });
    }

    // --- FEEDBACK LOGIK (Kernen i systemet) ---
    function handleFeedback(type) {
        if (studyQueue.length === 0) return;

        const currentCard = studyQueue[0]; // Tag det aktuelle kort

        // Animation ud
        cardContainerWrapper.style.opacity = '0';
        cardContainerWrapper.style.transform = 'scale(0.95)';

        setTimeout(() => {
            if (type === 'correct') {
                // Rigtigt: Fjern kortet permanent fra denne session
                studyQueue.shift(); 
            } else if (type === 'incorrect') {
                // Forkert: Flyt kortet bagest i køen
                studyQueue.shift(); // Fjern fra start
                studyQueue.push(currentCard); // Læg i bund
            } else if (type === 'unsure') {
                // Usikker: Læg det lidt ind i bunken (random sted eller bund)
                studyQueue.shift();
                // Indsæt på tilfældig plads i sidste halvdel af bunken for variation
                const randomIndex = Math.floor(Math.random() * (studyQueue.length));
                studyQueue.splice(randomIndex, 0, currentCard);
            }

            // Nulstil flip og opdater
            isFlipped = false;
            card.classList.remove('is-flipped');
            updateCardUI();

            // Animation ind
            cardContainerWrapper.style.opacity = '1';
            cardContainerWrapper.style.transform = 'scale(1)';
        }, 200);
    }

    function toggleSaveCard(e) {
        e.stopPropagation();
        if (studyQueue.length === 0) return;

        const currentCard = studyQueue[0];
        const index = savedCards.findIndex(s => s.front === currentCard.front && s.back === currentCard.back);

        if (index > -1) {
            savedCards.splice(index, 1);
        } else {
            savedCards.push(currentCard);
        }
        localStorage.setItem('flashcard_favorites', JSON.stringify(savedCards));
        
        const savedOption = categorySelect.querySelector('option[value="saved_cards"]');
        if(savedOption) savedOption.textContent = `⭐ Gemte kort (${savedCards.length})`;

        updateCardUI();
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // EVENT LISTENERS
    categorySelect.addEventListener('change', (e) => loadCategory(e.target.value));
    resetDeckBtn.addEventListener('click', () => loadCategory(categorySelect.value)); // Reset
    
    showBackFirstToggle.addEventListener('change', (e) => {
        showBackFirst = e.target.checked;
        updateCardUI();
    });

    card.addEventListener('click', () => {
        if(studyQueue.length > 0) {
            card.classList.toggle('is-flipped');
            isFlipped = !isFlipped;
        }
    });

    starBtns.forEach(btn => btn.addEventListener('click', toggleSaveCard));

    // Feedback Knapper
    btnCorrect.addEventListener('click', () => handleFeedback('correct'));
    btnUnsure.addEventListener('click', () => handleFeedback('unsure'));
    btnIncorrect.addEventListener('click', () => handleFeedback('incorrect'));

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (flashcardSection.classList.contains('hidden')) return;
        
        if (e.code === 'Space') {
            e.preventDefault(); 
            card.click();
        } 
        // Tal-genveje til feedback
        else if (e.key === '1') handleFeedback('correct');
        else if (e.key === '2') handleFeedback('unsure');
        else if (e.key === '3') handleFeedback('incorrect');
    });


    // ==========================================================
    // QUIZ FUNKTIONER (Uændret, men medtaget for helhed)
    // ==========================================================
    
    let currentQuizQuestions = [];
    let userAnswers = {};

    function populateQuizChapters() {
        const chapters = [...new Set(quizQuestions.map(q => q.chapter))].sort((a, b) => a.localeCompare(b, 'da'));
        quizChapterSelect.innerHTML = '';
        chapters.forEach(chap => {
            const opt = document.createElement('option');
            opt.value = chap;
            opt.textContent = chap;
            opt.selected = true; 
            quizChapterSelect.appendChild(opt);
        });
    }

    function getSelectedChapters() {
        return Array.from(quizChapterSelect.selectedOptions).map(opt => opt.value);
    }

    startAllQuizBtn.addEventListener('click', () => {
        const chapters = getSelectedChapters();
        if(chapters.length === 0) { alert("Vælg mindst ét kapitel"); return; }
        currentQuizQuestions = quizQuestions.filter(q => chapters.includes(q.chapter));
        shuffleArray(currentQuizQuestions);
        renderAllQuiz();
        startAllQuizBtn.parentElement.classList.add('hidden');
        document.getElementById('quiz-chapter-select').parentElement.classList.add('hidden');
    });

    function renderAllQuiz() {
        quizQuestionContainer.innerHTML = '';
        userAnswers = {};
        submitQuizBtn.disabled = true;
        currentQuizQuestions.forEach((q, index) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'bg-white p-6 rounded-xl border border-slate-200 shadow-sm';
            const title = document.createElement('h3');
            title.className = 'text-lg font-bold mb-4 text-slate-800';
            title.textContent = `${index + 1}. ${q.question}`;
            qDiv.appendChild(title);
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'space-y-2';
            q.options.forEach((opt, i) => {
                const char = String.fromCharCode(97 + i); 
                const label = document.createElement('label');
                label.className = 'question-option';
                label.innerHTML = `<input type="radio" name="q${index}" value="${char}" class="mr-3 h-5 w-5 text-indigo-600 focus:ring-indigo-500"><span>${opt}</span>`;
                label.querySelector('input').addEventListener('change', () => {
                    optionsDiv.querySelectorAll('.question-option').forEach(l => l.classList.remove('selected'));
                    label.classList.add('selected');
                    userAnswers[index] = char;
                    if(Object.keys(userAnswers).length === currentQuizQuestions.length) submitQuizBtn.disabled = false;
                });
                optionsDiv.appendChild(label);
            });
            qDiv.appendChild(optionsDiv);
            const expDiv = document.createElement('div');
            expDiv.id = `exp-${index}`;
            expDiv.className = 'explanation mt-4 p-4 rounded-lg hidden text-sm';
            qDiv.appendChild(expDiv);
            quizQuestionContainer.appendChild(qDiv);
        });
    }

    submitQuizBtn.addEventListener('click', () => {
        let score = 0;
        currentQuizQuestions.forEach((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            if(isCorrect) score++;
            const expDiv = document.getElementById(`exp-${index}`);
            expDiv.classList.remove('hidden');
            expDiv.classList.add(isCorrect ? 'correct' : 'incorrect');
            expDiv.textContent = isCorrect ? `Korrekt! ${q.feedback}` : `Forkert. Det rigtige svar var ${q.correctAnswer.toUpperCase()}. ${q.feedback}`;
            const inputs = document.getElementsByName(`q${index}`);
            inputs.forEach(inp => inp.disabled = true);
            const optionsDiv = inputs[0].closest('.space-y-2');
            optionsDiv.childNodes.forEach((label, i) => {
                const char = String.fromCharCode(97 + i);
                if(char === q.correctAnswer) label.classList.add('correct-answer');
                else if(char === userAnswer && !isCorrect) label.classList.add('incorrect-answer');
            });
        });
        quizResults.textContent = `Du fik ${score} ud af ${currentQuizQuestions.length} rigtige (${Math.round(score/currentQuizQuestions.length*100)}%)`;
        quizResults.classList.remove('hidden');
        submitQuizBtn.classList.add('hidden');
        restartAllBtn.classList.remove('hidden');
    });

    restartAllBtn.addEventListener('click', () => location.reload());

    // --- ONE BY ONE MODE ---
    const oneByOneBtn = document.getElementById('show-one-by-one-mode-btn');
    const allQsBtn = document.getElementById('show-all-questions-mode-btn');
    oneByOneBtn.addEventListener('click', () => {
        allQuestionsModeContainer.classList.add('hidden');
        oneByOneModeContainer.classList.remove('hidden');
        oneByOneBtn.classList.add('active');
        allQsBtn.classList.remove('active');
        const chapters = getSelectedChapters();
        document.getElementById('active-chapters-display').textContent = chapters.length ? chapters.join(', ') : 'Ingen';
    });
    allQsBtn.addEventListener('click', () => {
        allQuestionsModeContainer.classList.remove('hidden');
        oneByOneModeContainer.classList.add('hidden');
        oneByOneBtn.classList.remove('active');
        allQsBtn.classList.add('active');
    });

    let singleQIndex = 0;
    let singleQData = [];

    document.getElementById('start-one-by-one-quiz-btn').addEventListener('click', () => {
        const chapters = getSelectedChapters();
        if(chapters.length === 0) { alert("Vælg mindst ét kapitel"); return; }
        singleQData = quizQuestions.filter(q => chapters.includes(q.chapter));
        shuffleArray(singleQData);
        singleQIndex = 0;
        document.getElementById('start-one-by-one-quiz-btn').parentElement.classList.add('hidden');
        document.getElementById('single-question-display').classList.remove('hidden');
        showSingleQuestion();
    });

    function showSingleQuestion() {
        const q = singleQData[singleQIndex];
        document.getElementById('single-question-text').textContent = q.question;
        const optsContainer = document.getElementById('single-options-container');
        optsContainer.innerHTML = '';
        document.getElementById('single-explanation-text').classList.add('hidden');
        document.getElementById('check-single-answer-btn').disabled = true;
        document.getElementById('next-single-question-btn').classList.add('hidden');
        document.getElementById('check-single-answer-btn').classList.remove('hidden');
        document.getElementById('single-quiz-progress').textContent = `Spørgsmål ${singleQIndex + 1} af ${singleQData.length}`;
        q.options.forEach((opt, i) => {
            const char = String.fromCharCode(97 + i);
            const label = document.createElement('label');
            label.className = 'question-option w-full';
            label.innerHTML = `<input type="radio" name="singleQ" value="${char}" class="mr-3 h-5 w-5 text-indigo-600"><span>${opt}</span>`;
            label.addEventListener('click', () => {
                optsContainer.querySelectorAll('.question-option').forEach(l => l.classList.remove('selected'));
                label.classList.add('selected');
                document.getElementById('check-single-answer-btn').disabled = false;
            });
            optsContainer.appendChild(label);
        });
    }

    document.getElementById('check-single-answer-btn').addEventListener('click', () => {
        const q = singleQData[singleQIndex];
        const selected = document.querySelector('input[name="singleQ"]:checked');
        if(!selected) return;
        const val = selected.value;
        const isCorrect = val === q.correctAnswer;
        const exp = document.getElementById('single-explanation-text');
        exp.classList.remove('hidden');
        exp.className = `mt-6 p-4 rounded-lg border text-sm leading-relaxed ${isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`;
        exp.textContent = isCorrect ? `Korrekt! ${q.feedback}` : `Forkert. Svaret var ${q.correctAnswer.toUpperCase()}. ${q.feedback}`;
        document.querySelectorAll('input[name="singleQ"]').forEach(i => i.disabled = true);
        document.getElementById('check-single-answer-btn').classList.add('hidden');
        if(singleQIndex < singleQData.length - 1) {
            document.getElementById('next-single-question-btn').classList.remove('hidden');
        } else {
            document.getElementById('restart-single-quiz-btn').classList.remove('hidden');
            document.getElementById('single-quiz-results').textContent = "Quiz færdig!";
            document.getElementById('single-quiz-results').classList.remove('hidden');
        }
    });

    document.getElementById('next-single-question-btn').addEventListener('click', () => {
        singleQIndex++;
        showSingleQuestion();
    });
    
    document.getElementById('restart-single-quiz-btn').addEventListener('click', () => location.reload());

    populateCategorySelect();
    populateQuizChapters();
    console.log("App ready!");
});
