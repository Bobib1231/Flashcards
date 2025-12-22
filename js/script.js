document.addEventListener('DOMContentLoaded', () => {
    console.log("App initializing with FULL data...");

  // ==========================================================
    // HER STARTER DEN NYE LOGIK (Indsæt dette efter dine data)
    // ==========================================================

    // DOM Elements
    const flashcardSection = document.getElementById('flashcard-section');
    const quizSection = document.getElementById('quiz-section');
    const showFlashcardsBtn = document.getElementById('show-flashcards-btn');
    const showQuizBtn = document.getElementById('show-quiz-btn');

    // Flashcard Elements
    const card = document.getElementById('flashcard');
    const frontTextElement = document.getElementById('card-front-text');
    const backTextElement = document.getElementById('card-back-text');
    const frontFooterElement = document.getElementById('card-front-footer'); // Footer forside
    const backFooterElement = document.getElementById('card-back-footer');   // Footer bagside
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressText = document.getElementById('progress-text');
    const categorySelect = document.getElementById('category-select');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const showBackFirstToggle = document.getElementById('show-back-first-toggle');
    const cardContainerWrapper = document.getElementById('card-container-wrapper');
    const feedbackButtonsContainer = document.getElementById('flashcard-feedback-buttons'); // Hvis du vil bruge feedback knapper

    // Quiz Elements
    const quizChapterSelect = document.getElementById('quiz-chapter-select');
    const allQuestionsModeContainer = document.getElementById('all-questions-mode-container');
    const oneByOneModeContainer = document.getElementById('one-by-one-mode-container');
    const startAllQuizBtn = document.getElementById('start-all-quiz-btn');
    const quizQuestionContainer = document.getElementById('quiz-question-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const restartAllBtn = document.getElementById('restart-all-quiz-btn');
    const quizResults = document.getElementById('quiz-results');
    
    // State Variables
    let currentFlashcards = [];
    let currentFlashcardIndex = 0;
    let isFlipped = false;
    let showBackFirst = false;

    // --- NAVIGATION MELLEM SEKTIONER ---
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
            // Init quiz view default
            document.getElementById('show-all-questions-mode-btn').click();
        }
    }

    showFlashcardsBtn.addEventListener('click', () => showSection('flashcards'));
    showQuizBtn.addEventListener('click', () => showSection('quiz'));


    // ==========================================================
    // FLASHCARD LOGIK
    // ==========================================================

    function populateCategorySelect() {
        categorySelect.innerHTML = '';
        
        // Option for at blande alt
        const allOption = document.createElement('option');
        allOption.value = 'all_shuffled';
        allOption.textContent = 'Bland alle kapitler';
        categorySelect.appendChild(allOption);

        // Sortér kategorier alfabetisk (Dansk sortering)
        Object.keys(allFlashcardCategories).sort((a, b) => a.localeCompare(b, 'da')).forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            categorySelect.appendChild(opt);
        });
        
        // Indlæs standard
        loadCategory('all_shuffled');
    }

    function loadCategory(categoryName) {
        currentFlashcards = [];
        
        if (categoryName === 'all_shuffled') {
            // Loop gennem alle kategorier og tilføj kildenavn til kortet
            for (const [catName, cards] of Object.entries(allFlashcardCategories)) {
                // Vi laver en kopi af kortene og tilføjer 'sourceCategory' property
                // Dette løser problemet med at vide hvor kortet kommer fra
                const labeledCards = cards.map(c => ({
                    ...c,
                    sourceCategory: catName
                }));
                currentFlashcards = currentFlashcards.concat(labeledCards);
            }
        } else {
            // Hent specifik kategori og label dem også
            if (allFlashcardCategories[categoryName]) {
                currentFlashcards = allFlashcardCategories[categoryName].map(c => ({
                    ...c,
                    sourceCategory: categoryName
                }));
            }
        }

        shuffleArray(currentFlashcards);
        currentFlashcardIndex = 0;
        isFlipped = false;
        card.classList.remove('is-flipped');
        
        updateCardUI();
    }

    function updateCardUI() {
        if (currentFlashcards.length === 0) {
            frontTextElement.textContent = "Ingen kort fundet.";
            backTextElement.textContent = "";
            progressText.textContent = "0 / 0";
            return;
        }

        const cardData = currentFlashcards[currentFlashcardIndex];
        
        // Sæt tekst baseret på brugerens valg (Vis bagside først?)
        frontTextElement.textContent = showBackFirst ? cardData.back : cardData.front;
        backTextElement.textContent = showBackFirst ? cardData.front : cardData.back;

        // **HER ER FIXET TIL KAPITEL I BUNDEN**
        // Vi bruger .sourceCategory som vi lavede i loadCategory
        const footerText = cardData.sourceCategory || "";
        if(frontFooterElement) frontFooterElement.textContent = footerText;
        if(backFooterElement) backFooterElement.textContent = footerText;

        // Opdater tæller
        progressText.textContent = `${currentFlashcardIndex + 1} / ${currentFlashcards.length}`;

        // Opdater knap-status
        prevBtn.disabled = currentFlashcardIndex === 0;
    }

    function nextCard() {
        if (currentFlashcardIndex < currentFlashcards.length - 1) {
            animateCardChange(1);
        }
    }

    function prevCard() {
        if (currentFlashcardIndex > 0) {
            animateCardChange(-1);
        }
    }

    function animateCardChange(direction) {
        cardContainerWrapper.style.opacity = '0';
        cardContainerWrapper.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            currentFlashcardIndex += direction;
            isFlipped = false;
            card.classList.remove('is-flipped');
            updateCardUI();
            
            cardContainerWrapper.style.opacity = '1';
            cardContainerWrapper.style.transform = 'scale(1)';
        }, 200);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Event Listeners for Flashcards
    categorySelect.addEventListener('change', (e) => loadCategory(e.target.value));
    
    shuffleBtn.addEventListener('click', () => {
        loadCategory(categorySelect.value); // Reload = reshuffle
    });

    showBackFirstToggle.addEventListener('change', (e) => {
        showBackFirst = e.target.checked;
        updateCardUI();
    });

    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
        isFlipped = !isFlipped;
    });

    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (flashcardSection.classList.contains('hidden')) return;
        
        if (e.code === 'Space') {
            e.preventDefault(); // Stop scroll
            card.click();
        } else if (e.code === 'ArrowRight') {
            nextCard();
        } else if (e.code === 'ArrowLeft') {
            prevCard();
        }
    });


    // ==========================================================
    // QUIZ LOGIK
    // ==========================================================
    
    let currentQuizQuestions = [];
    let userAnswers = {};

    function populateQuizChapters() {
        // Hent unikke kapitler og sorter alfabetisk (Dansk)
        const chapters = [...new Set(quizQuestions.map(q => q.chapter))].sort((a, b) => a.localeCompare(b, 'da'));
        
        quizChapterSelect.innerHTML = '';
        chapters.forEach(chap => {
            const opt = document.createElement('option');
            opt.value = chap;
            opt.textContent = chap;
            opt.selected = true; // Vælg alle som standard
            quizChapterSelect.appendChild(opt);
        });
    }

    function getSelectedChapters() {
        return Array.from(quizChapterSelect.selectedOptions).map(opt => opt.value);
    }

    // --- ALL QUESTIONS MODE ---
    startAllQuizBtn.addEventListener('click', () => {
        const chapters = getSelectedChapters();
        if(chapters.length === 0) { alert("Vælg mindst ét kapitel"); return; }

        currentQuizQuestions = quizQuestions.filter(q => chapters.includes(q.chapter));
        shuffleArray(currentQuizQuestions);
        
        renderAllQuiz();
        startAllQuizBtn.parentElement.classList.add('hidden'); // Skjul start knap
        document.getElementById('quiz-chapter-select').parentElement.classList.add('hidden'); // Skjul select
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
                const char = String.fromCharCode(97 + i); // a, b, c...
                const label = document.createElement('label');
                label.className = 'question-option';
                label.innerHTML = `
                    <input type="radio" name="q${index}" value="${char}" class="mr-3 h-5 w-5 text-indigo-600 focus:ring-indigo-500">
                    <span>${opt}</span>
                `;
                
                label.querySelector('input').addEventListener('change', () => {
                    // Marker valgt visuelt
                    optionsDiv.querySelectorAll('.question-option').forEach(l => l.classList.remove('selected'));
                    label.classList.add('selected');
                    
                    userAnswers[index] = char;
                    // Tjek om alle er besvaret
                    if(Object.keys(userAnswers).length === currentQuizQuestions.length) {
                        submitQuizBtn.disabled = false;
                    }
                });

                optionsDiv.appendChild(label);
            });
            qDiv.appendChild(optionsDiv);

            // Explanation container (hidden initially)
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
            expDiv.textContent = isCorrect 
                ? `Korrekt! ${q.feedback}`
                : `Forkert. Det rigtige svar var ${q.correctAnswer.toUpperCase()}. ${q.feedback}`;

            // Frys inputs
            const inputs = document.getElementsByName(`q${index}`);
            inputs.forEach(inp => inp.disabled = true);
            
            // Farv labels
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

    restartAllBtn.addEventListener('click', () => {
        location.reload(); // Nemmeste måde at nulstille alt
    });


    // --- ONE BY ONE MODE ---
    const oneByOneBtn = document.getElementById('show-one-by-one-mode-btn');
    const allQsBtn = document.getElementById('show-all-questions-mode-btn');

    oneByOneBtn.addEventListener('click', () => {
        allQuestionsModeContainer.classList.add('hidden');
        oneByOneModeContainer.classList.remove('hidden');
        oneByOneBtn.classList.add('active');
        allQsBtn.classList.remove('active');
        
        // Opdater kapitel display
        const chapters = getSelectedChapters();
        document.getElementById('active-chapters-display').textContent = chapters.length ? chapters.join(', ') : 'Ingen';
    });
    
    allQsBtn.addEventListener('click', () => {
        allQuestionsModeContainer.classList.remove('hidden');
        oneByOneModeContainer.classList.add('hidden');
        oneByOneBtn.classList.remove('active');
        allQsBtn.classList.add('active');
    });

    // Variabler til One-by-One
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
            label.innerHTML = `
                <input type="radio" name="singleQ" value="${char}" class="mr-3 h-5 w-5 text-indigo-600">
                <span>${opt}</span>
            `;
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

        // Disable inputs
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


    // ==========================================================
    // INITIALISERING
    // ==========================================================
    populateCategorySelect();
    populateQuizChapters();

    console.log("App ready with ALL original data logic!");
});
