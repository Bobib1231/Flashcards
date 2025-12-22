document.addEventListener('DOMContentLoaded', () => {
    
    // Tjek om data.js er indlæst korrekt
    if (typeof allFlashcardCategories === 'undefined' || typeof quizQuestions === 'undefined') {
        alert("FEJL: Kunne ikke finde data.js. Sørg for at filen 'data.js' ligger i samme mappe og indeholder dine spørgsmål.");
        return;
    }

    console.log("Logik start - Data fundet.");

    // ==========================================================
    // DOM ELEMENTER
    // ==========================================================
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
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressText = document.getElementById('progress-text');
    const progressBarFill = document.getElementById('progress-bar-fill'); // NY BAR
    const categorySelect = document.getElementById('category-select');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const showBackFirstToggle = document.getElementById('show-back-first-toggle');
    const cardContainerWrapper = document.getElementById('card-container-wrapper');
    const starBtns = document.querySelectorAll('.star-btn'); // NY STJERNE

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
    let currentFlashcards = [];
    let currentFlashcardIndex = 0;
    let isFlipped = false;
    let showBackFirst = false;
    let savedCards = JSON.parse(localStorage.getItem('flashcard_favorites')) || []; // Hent gemte kort

    // --- NAVIGATION MELLEM HOVEDSEKTIONER ---
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
            document.getElementById('show-all-questions-mode-btn').click(); // Default quiz mode
        }
    }

    showFlashcardsBtn.addEventListener('click', () => showSection('flashcards'));
    showQuizBtn.addEventListener('click', () => showSection('quiz'));


    // ==========================================================
    // FLASHCARD FUNKTIONER
    // ==========================================================

    function populateCategorySelect() {
        categorySelect.innerHTML = '';
        
        // Speciel kategori: Gemte kort (Vises kun hvis der er nogen)
        const savedOption = document.createElement('option');
        savedOption.value = 'saved_cards';
        savedOption.textContent = `⭐ Gemte kort (${savedCards.length})`;
        // savedOption.style.fontWeight = 'bold';
        categorySelect.appendChild(savedOption);

        // Standard: Bland alle
        const allOption = document.createElement('option');
        allOption.value = 'all_shuffled';
        allOption.textContent = 'Bland alle kapitler';
        allOption.selected = true; // Default
        categorySelect.appendChild(allOption);

        // Alle andre kategorier (Alfabetisk sorteret)
        Object.keys(allFlashcardCategories).sort((a, b) => a.localeCompare(b, 'da')).forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            categorySelect.appendChild(opt);
        });
        
        loadCategory('all_shuffled');
    }

    function loadCategory(categoryName) {
        currentFlashcards = [];
        
        if (categoryName === 'saved_cards') {
            if (savedCards.length === 0) {
                alert("Du har ingen gemte kort endnu. Klik på stjernen på et kort for at gemme det.");
                categorySelect.value = 'all_shuffled'; // Hop tilbage
                loadCategory('all_shuffled');
                return;
            }
            currentFlashcards = [...savedCards]; // Kopi af gemte
        } 
        else if (categoryName === 'all_shuffled') {
            // Saml alt og label kilden
            for (const [catName, cards] of Object.entries(allFlashcardCategories)) {
                const labeledCards = cards.map(c => ({
                    ...c,
                    sourceCategory: catName
                }));
                currentFlashcards = currentFlashcards.concat(labeledCards);
            }
            shuffleArray(currentFlashcards);
        } 
        else {
            // Enkelt kategori
            if (allFlashcardCategories[categoryName]) {
                currentFlashcards = allFlashcardCategories[categoryName].map(c => ({
                    ...c,
                    sourceCategory: categoryName
                }));
            }
            shuffleArray(currentFlashcards);
        }

        currentFlashcardIndex = 0;
        isFlipped = false;
        card.classList.remove('is-flipped');
        
        updateCardUI();
    }

    function updateCardUI() {
        if (currentFlashcards.length === 0) {
            frontTextElement.textContent = "Ingen kort.";
            return;
        }

        const cardData = currentFlashcards[currentFlashcardIndex];
        
        // Tekstindhold
        frontTextElement.textContent = showBackFirst ? cardData.back : cardData.front;
        backTextElement.textContent = showBackFirst ? cardData.front : cardData.back;

        // Footer (Kapitelnavn)
        const footerText = cardData.sourceCategory || "";
        frontFooterElement.textContent = footerText;
        backFooterElement.textContent = footerText;

        // Progress Bar & Tekst
        const total = currentFlashcards.length;
        const current = currentFlashcardIndex + 1;
        const percentage = (current / total) * 100;
        
        progressBarFill.style.width = `${percentage}%`;
        progressText.textContent = `${current} / ${total}`;

        // Håndter stjerne-status (Er kortet gemt?)
        const isSaved = savedCards.some(s => s.front === cardData.front && s.back === cardData.back);
        starBtns.forEach(btn => {
            if (isSaved) {
                btn.classList.add('active'); // Gør gul
                btn.setAttribute('title', 'Fjern fra gemte');
            } else {
                btn.classList.remove('active'); // Gør grå
                btn.setAttribute('title', 'Gem til senere');
            }
        });

        // Knapper
        prevBtn.disabled = currentFlashcardIndex === 0;
        // nextBtn disabled ved slut? Nej, lad den loope eller stoppe visuelt.
    }

    function toggleSaveCard(e) {
        e.stopPropagation(); // Stop kortet fra at vende når man klikker på stjernen
        
        const currentCard = currentFlashcards[currentFlashcardIndex];
        // Tjek om det allerede findes i savedCards
        const index = savedCards.findIndex(s => s.front === currentCard.front && s.back === currentCard.back);

        if (index > -1) {
            // Fjern
            savedCards.splice(index, 1);
        } else {
            // Tilføj
            savedCards.push(currentCard);
        }

        // Gem til LocalStorage
        localStorage.setItem('flashcard_favorites', JSON.stringify(savedCards));
        
        // Opdater dropdown tekst (antal gemte)
        const savedOption = categorySelect.querySelector('option[value="saved_cards"]');
        if(savedOption) savedOption.textContent = `⭐ Gemte kort (${savedCards.length})`;

        // Opdater stjerne-farve med det samme
        updateCardUI();
    }

    function animateCardChange(direction) {
        cardContainerWrapper.style.opacity = '0';
        cardContainerWrapper.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            currentFlashcardIndex += direction;
            isFlipped = false;
            card.classList.remove('is-flipped');
            updateCardUI();
            
            cardContainerWrapper.style.opacity = '1';
            cardContainerWrapper.style.transform = 'scale(1)';
        }, 150);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // --- EVENT LISTENERS (Flashcards) ---
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

    // Stjerne klik
    starBtns.forEach(btn => btn.addEventListener('click', toggleSaveCard));

    nextBtn.addEventListener('click', () => {
        if (currentFlashcardIndex < currentFlashcards.length - 1) animateCardChange(1);
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentFlashcardIndex > 0) animateCardChange(-1);
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (flashcardSection.classList.contains('hidden')) return;
        
        if (e.code === 'Space') {
            e.preventDefault(); 
            card.click();
        } else if (e.code === 'ArrowRight') {
            if (currentFlashcardIndex < currentFlashcards.length - 1) animateCardChange(1);
        } else if (e.code === 'ArrowLeft') {
            if (currentFlashcardIndex > 0) animateCardChange(-1);
        }
    });


    // ==========================================================
    // QUIZ FUNKTIONER
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

    // --- ALL QUESTIONS MODE ---
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
                label.innerHTML = `
                    <input type="radio" name="q${index}" value="${char}" class="mr-3 h-5 w-5 text-indigo-600 focus:ring-indigo-500">
                    <span>${opt}</span>
                `;
                
                label.querySelector('input').addEventListener('change', () => {
                    optionsDiv.querySelectorAll('.question-option').forEach(l => l.classList.remove('selected'));
                    label.classList.add('selected');
                    
                    userAnswers[index] = char;
                    if(Object.keys(userAnswers).length === currentQuizQuestions.length) {
                        submitQuizBtn.disabled = false;
                    }
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
            expDiv.textContent = isCorrect 
                ? `Korrekt! ${q.feedback}`
                : `Forkert. Det rigtige svar var ${q.correctAnswer.toUpperCase()}. ${q.feedback}`;

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

    restartAllBtn.addEventListener('click', () => {
        location.reload(); 
    });


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
    // INIT
    // ==========================================================
    populateCategorySelect();
    populateQuizChapters();

    console.log("App ready!");
});
