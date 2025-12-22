document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Initializing app...");

    // --- DATA: Flashcard content opdelt efter kategori ---
    const allFlashcardCategories = {
        "Keltner 2006 - Evolution & Følelser": [
            { front: "Social-funktionel tilgang", back: "En tilgang hvor psykologiske fænomener ses som havende et socialt formål og en evolutionær funktion for at løse overlevelses- og reprodu[...]"},
            { front: "De 4 analyseniveauer for følelser", back: "Intra-individuel (individets respons), Dyadisk (interaktion mellem to), Gruppe (fælles mål), og Kulturel (normer og værdier)." },
            { front: "Reciprok altruisme", back: "At hjælpe en anden med forventning om gengældelse senere. En form for langsigtet, gensidig samarbejde, der er grundlaget for social udveksling." },
            { front: "Eksaptation (Exaptation)", back: "En egenskab, der oprindeligt udviklede sig til ét formål, men senere genbruges til en ny funktion (f.eks. fjer til isolering, der senere b[...]"},
            { front: "Præadaptation (Preadaptation)", back: "En eksisterende egenskab, der tilfældigvis er velegnet til en ny funktion, der endnu ikke er opstået. Selve potentialet i egenskaben[...]"},
            { front: "Social Affordance (Sociale handlemuligheder)", back: "De signaler i et miljø eller hos en person, der muliggør eller 'inviterer' til en bestemt social adfærd (f.eks. et sm[...]"},
            { front: "Følelser som social-moralske intuitioner", back: "Følelser giver hurtige 'mavefornemmelser' om komplekse sociale og moralske spørgsmål, f.eks. vrede ved krænkede rettigh[...]"},
            { front: "Følelsers rolle i personlighed", back: "Individuelle forskelle i følelsesmæssighed (f.eks. neuroticisme) er en kernekomponent i personlighed og ses som strategier til at n[...]"},
            { front: "Forskellen på 'potentiale' og 'praksis' i følelser", back: "Potentiale: Den universelle, biologiske evne til at føle. Praksis: Hvordan følelser rent faktisk bruges og væ[...]"},
            { front: "Menneskets unikke følelsesliv (vs. primater)", back: "Skyldes større frontal cortex, sprog og kultur, som muliggør kobling af følelser til abstrakte ideer, hukommelse og [...]"},
            { front: "Hyperkognisering af følelser", back: "Når en kultur giver en bestemt følelse en central rolle og opmuntrer til dens udtryk og oplevelse (f.eks. skam i hierarkiske samfund)[...]"},
            { front: "Hypokognisering af følelser", back: "Når en kultur giver negative konnotationer og afskrækker fra individet fra at vise dem (f.eks. sårbarhed blandt mænd i dag)." },
            { front: "Komplementære reaktioner", back: "Når et følelsesmæssigt udtryk fremkalder en specifik, modsvarende reaktion hos andre (f.eks. vrede fremkalder frygt; nød fremkalder sym[...]"},
            { front: "Dispositionel oplevelse af følelser", back: "En persons vedvarende tendens til at opleve en bestemt følelse. Dette kan forudsige langsigtede livsresultater (f.eks. vrede i [...]"},
            { front: "Orbitofrontal cortex' funktion", back: "Central for social adfærd og følelsesmæssig regulering. Skader her kan føre til antisocial adfærd og mangel på f.eks. forlegenhe[...]"}
        ],
        "Tønnesvang 2015 - Kvadrantmodellen": [
            { front: "Kvadrantmodellen", back: "En model, der indkredser fire grundlæggende perspektiver for at forstå et fænomen (udviklet af Ken Wilber)." },
            { front: "Integrativ Perspektivisme", back: "En tilgang til at arbejde med og skabe helhed i flere perspektiver på én gang. Kvadrantmodellen er en styremodel for dette." },
            { front: "Øvre Højre Kvadrant", back: "Det objektive perspektiv på det enkelte individ. Fokus på adfærd, kropslig fysik, dispositioner, biologi og neurologi – det, der kan obser[...]" },
            { front: "Øvre Venstre Kvadrant", back: "Det subjektive perspektiv på den enkelte persons fænomenologi. Fokus på oplevelse, tanker, følelser, intentioner, værdier, behov og menta[...]" },
            { front: "Nedre Højre Kvadrant", back: "Det interobjektivet perspektiv på fænomener i flertal. Fokus på systemer, regulativer, retningslinjer, teknologi og interaktioner – det, d[...]" },
            { front: "Nedre Venstre Kvadrant", back: "Det intersubjektive perspektiv på fænomener i flertal. Fokus på kultur, delt viden, normer og tydningshorisonter – det, der ikke umiddelb[...]" },
            { front: "Tetra-opstår ('tetra-arises')", back: "De fire kvadranter er ikke uafhængige, men er fire samtidige sider af sagen eller fænomenet, der gensidigt påvirker hinanden." },
            { front: "Metodisk reduktion", back: "Når man vælger at fokusere på én eller få kvadranter og bevidst ser bort fra andre for at skærpe sit fokus i en specifik kontekst." },
            { front: "Udviklingslinjer", back: "Forskellige kapaciteter (f.eks. kognitiv, emotionel, moralsk), der udvikler sig relativt uafhængigt inden for hver kvadrant." },
            { front: "Udviklingsniveauer", back: "Inddeling af udviklingslinjer efter kompleksitet og inklusion (f.eks. egocentrisk, etnocentrisk, verdenscentrisk)." }
        ],
        "Aronson Kapitel 01": [
            { front: "Construal (Konstruktion)", back: "Måden mennesker ser, forstår og fortolker den sociale verden. Konstrueret ud fra grundmotiverne at 'have det godt med sig selv' og 'at væ[...]" },
            { front: "Behaviorism (Behaviorisme)", back: "Gren af psykologi, der tror, at alle psykologiske fænomener kan forståes ud fra selvforstærkende kræfter i individets omgivelser (belø[...]" },
            { front: "Gestalt psykologi", back: "Gren af psykologi, der tydeliggør vigtigheden af at fokusere på, hvordan en situation/objekt anses i det subjektive anliggende fremfor, hvordan d[...]" },
            { front: "Naiv realisme", back: "Overbevisningen om at vi ser tingene, som de virkelig er, og en underminering af, hvor meget vi tolker til vores fordel. Kan føre til uvilje mod kompr[...]" },
            { front: "Fundamentale attribution error (Fundamentale attributionsfejl)", back: "Tendensen til at overvurdere interne årsager og undervurdere eksterne (situationelle) årsager, når [...]" }
        ],
        "Aronson Kapitel 02": [
            { front: "Hindsight Bias (Bagklogskabsbias)", back: "Tendensen til at tro, at svaret var åbenlyst, efter man har fået svaret ('Jeg vidste det jo hele tiden!')." },
            { front: "Observationsmetoden", back: "Forskeren beskriver fænomener ved at observere dem. Inkluderer etnografi og arkivanalyse. Begrænset til 'hvad', ikke 'hvorfor'." },
            { front: "Etnografi", back: "Metode hvor forskere undersøger en kultur indefra uden at forcere en forudantagelse over kulturen." },
            { front: "Interjudge reliability (Interbedømmerpålidelighed)", back: "Flere uafhængige observatører er enige om observationer, hvilket styrker evidensen (f.eks. hvis 5 personer har[...]" },
            { front: "Arkivanalyse", back: "Forskeren undersøger tilgængelige tekster og materialer (sociale medier, dagbøger) om et subjekt for at vurdere det." }
        ],
        // ... rest of categories remain unchanged for brevity in this commit content (full content preserved in file)
    };

    // --- QUIZ DATA: Aronson Multiple Choice Spørgsmål (Dette skal du selv indsætte) ---
    const quizQuestions = [
        // ... (kept unchanged) 
    ];

    // --- DOM Elements ---
    // Main sections
    const flashcardSection = document.getElementById('flashcard-section');
    const quizSection = document.getElementById('quiz-section');
    const showFlashcardsBtn = document.getElementById('show-flashcards-btn');
    const showQuizBtn = document.getElementById('show-quiz-btn');

    // Flashcard elements
    const card = document.getElementById('flashcard');
    const frontTextElement = document.getElementById('card-front-text');
    const backTextElement = document.getElementById('card-back-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressText = document.getElementById('progress-text');
    const categorySelect = document.getElementById('category-select');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const showBackFirstToggle = document.getElementById('show-back-first-toggle');
    const cardContainerWrapper = document.getElementById('card-container-wrapper');

    // Create a small chapter badge element (bottom-right of flashcard)
    let cardChapterBadge = document.getElementById('card-chapter-badge');
    if (!cardChapterBadge) {
        cardChapterBadge = document.createElement('div');
        cardChapterBadge.id = 'card-chapter-badge';
        // Inline styles to ensure visibility without changing CSS files
        cardChapterBadge.style.position = 'absolute';
        cardChapterBadge.style.bottom = '8px';
        cardChapterBadge.style.right = '8px';
        cardChapterBadge.style.background = 'rgba(0,0,0,0.6)';
        cardChapterBadge.style.color = '#fff';
        cardChapterBadge.style.padding = '4px 8px';
        cardChapterBadge.style.borderRadius = '6px';
        cardChapterBadge.style.fontSize = '12px';
        cardChapterBadge.style.pointerEvents = 'none';
        cardChapterBadge.style.zIndex = '50';
        // Ensure wrapper is positioned so absolute badge anchors correctly
        if (!cardContainerWrapper.style.position) cardContainerWrapper.style.position = 'relative';
        cardContainerWrapper.appendChild(cardChapterBadge);
    }

    // --- Nye Flashcard Feedback Elements ---
    const flashcardFeedbackButtons = document.getElementById('flashcard-feedback-buttons');
    const feedbackCorrectBtn = document.getElementById('feedback-correct-btn');
    const feedbackUnsureBtn = document.getElementById('feedback-unsure-btn');
    const feedbackIncorrectBtn = document.getElementById('feedback-incorrect-btn');

    // Quiz elements (common)
    const quizChapterSelect = document.getElementById('quiz-chapter-select');

    // All Questions Mode elements
    const allQuestionsModeContainer = document.getElementById('all-questions-mode-container');
    const startAllQuizBtn = document.getElementById('start-all-quiz-btn');
    const quizQuestionContainer = document.getElementById('quiz-question-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const restartAllQuizBtn = document.getElementById('restart-all-quiz-btn');
    const quizResults = document.getElementById('quiz-results');

    // One Question at a Time Mode elements
    const oneByOneModeContainer = document.getElementById('one-by-one-mode-container');
    const showAllQuestionsModeBtn = document.getElementById('show-all-questions-mode-btn');
    const showOneByOneModeBtn = document.getElementById('show-one-by-one-mode-btn');
    const activeChaptersDisplay = document.getElementById('active-chapters-display');
    const startOneByOneQuizBtn = document.getElementById('start-one-by-one-quiz-btn');
    const singleQuestionDisplay = document.getElementById('single-question-display');
    const singleQuestionText = document.getElementById('single-question-text');
    const singleOptionsContainer = document.getElementById('single-options-container');
    const singleExplanationText = document.getElementById('single-explanation-text');
    const checkSingleAnswerBtn = document.getElementById('check-single-answer-btn');
    const nextSingleQuestionBtn = document.getElementById('next-single-question-btn');
    const restartSingleQuizBtn = document.getElementById('restart-single-quiz-btn');
    const singleQuizProgress = document.getElementById('single-quiz-progress');
    const singleQuizResults = document.getElementById('single-quiz-results');


    // --- Flashcard State ---
    let currentFlashcards = []; // All flashcards in the currently selected category
    let currentFlashcardIndex = 0;
    let isFlipped = false;
    let showBackFirst = false;

    // --- Nye Flashcard Feedback State Variabler ---
    let cardsToReview = []; // Kort markeret som 'Ikke sikker' eller 'Forkert'
    let masteredCards = []; // Kort markeret som 'Rigtigt' (skal ikke ses igen i denne session)
    let currentDeck = []; // Den *aktuelle* bunke kort, vi gennemgår (kan indeholde kort fra cardsToReview)

    // --- Quiz State (Common) ---
    // selectedQuizChapters will be set in populateQuizChapterSelect and filterQuizQuestions
    let selectedQuizChapters = []; 
    let filteredQuizQuestions = [];

    // --- All Questions Mode State ---
    let allUserAnswers = {}; // Store user's selected answers for "all questions" mode

    // --- One Question at a Time Mode State ---
    let oneByOneActiveQuestions = []; // Questions currently in play for one-by-one mode
    let currentOneByOneQuestionIndex = 0;
    let oneByOneCorrectStreaks = {}; // Tracks correct streaks for each question ID
    let oneByOneUserAnswer = null; // Stores selected answer for current single question

    // --- Section & Mode Visibility ---
    function showMainSection(sectionId) {
        console.log(`Showing section: ${sectionId}`);
        flashcardSection.style.display = 'none';
        quizSection.style.display = 'none';
        document.getElementById(sectionId).style.display = 'block';

        if (sectionId === 'flashcard-section') {
            showFlashcardsBtn.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
            showFlashcardsBtn.classList.remove('bg-gray-500', 'hover:bg-gray-600');
            showQuizBtn.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
            showQuizBtn.classList.add('bg-gray-500', 'hover:bg-gray-600');
        } else { // Quiz Section
            showFlashcardsBtn.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
            showFlashcardsBtn.classList.add('bg-gray-500', 'hover:bg-gray-600');
            showQuizBtn.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
            showQuizBtn.classList.remove('bg-gray-500', 'hover:bg-gray-600');
            // Default to all questions mode when quiz section is opened
            showQuizMode('all_questions');
        }
    }

    function showQuizMode(mode) {
        console.log(`Showing quiz mode: ${mode}`);
        allQuestionsModeContainer.style.display = 'none';
        oneByOneModeContainer.style.display = 'none';

        if (mode === 'all_questions') {
            allQuestionsModeContainer.style.display = 'block';
            showAllQuestionsModeBtn.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
            showAllQuestionsModeBtn.classList.remove('bg-gray-500', 'hover:bg-gray-600');
            showOneByOneModeBtn.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
            showOneByOneModeBtn.classList.add('bg-gray-500', 'hover:bg-gray-600');
            // Ensure quiz is rendered only if there are questions selected
            if (filteredQuizQuestions.length > 0) { // Brug filteredQuizQuestions her
                 renderQuizAllQuestions();
            } else {
                 quizQuestionContainer.innerHTML = '<p class="text-center text-slate-600 text-lg font-medium">Vælg venligst mindst ét kapitel for at starte quizzen.</p>';
                 submitQuizBtn.disabled = true;
            }
        } else { // one_by_one
            oneByOneModeContainer.style.display = 'block';
            showOneByOneModeBtn.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
            showOneByOneModeBtn.classList.remove('bg-gray-500', 'hover:bg-gray-600');
            showAllQuestionsModeBtn.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
            showAllQuestionsModeBtn.classList.add('bg-gray-500', 'hover:bg-gray-600');
            updateActiveChaptersDisplay();
            resetOneByOneQuiz(); // Prepare the one-by-one quiz
        }
    }

    // --- Flashcard Functions ---
    
// === Alfabetisk dropdown for Flashcards-kategorier ===
function populateCategorySelect() {
  console.log("Populating category select...");
  categorySelect.innerHTML = '';

  // Bevar: "Bland alle kapitler" øverst
  const allCategoriesOption = document.createElement('option');
  allCategoriesOption.value = 'all_chapters_shuffled';
  allCategoriesOption.textContent = 'Bland alle kapitler';
  categorySelect.appendChild(allCategoriesOption);

  // NYT: Sortér kategorier (dansk locale) og byg options
  const sortedCategoryNames = Object.keys(allFlashcardCategories)
    .sort((a, b) => a.localeCompare(b, 'da'));

  sortedCategoryNames.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  // Standardvalg & indlæsning (samme som før)
  categorySelect.value = 'all_chapters_shuffled';
  loadCategory(categorySelect.value);
}

// === Alfabetisk dropdown for Quiz-kapitler ===
function populateQuizChapterSelect() {
  console.log("Populating quiz chapter select...");
  quizChapterSelect.innerHTML = '';

  // Saml unikke kapitler og sortér (dansk locale)
  const allChapters = quizQuestions.length > 0
    ? [...new Set(quizQuestions.map(q => q.chapter))]
    : [];
  const sortedQuizChapters = allChapters.slice()
    .sort((a, b) => a.localeCompare(b, 'da'));

  if (sortedQuizChapters.length > 0) {
    // Bevar: "Bland alle kapitler" øverst
    const allQuizChaptersOption = document.createElement('option');
    allQuizChaptersOption.value = 'all_quiz_chapters_shuffled';
    allQuizChaptersOption.textContent = 'Bland alle kapitler';
    quizChapterSelect.appendChild(allQuizChaptersOption);

    // NYT: Byg resten alfabetisk
    sortedQuizChapters.forEach(chapter => {
      const option = document.createElement('option');
      option.value = chapter;
      option.textContent = chapter;

      // Bevar din default-logik: vælg Kap. 1 hvis ingen er valgt endnu
      if (parseInt(chapter.replace('Chapter ', '')) === 1 &&
          selectedQuizChapters.length === 0) {
        option.selected = true;
        selectedQuizChapters.push(chapter);
      }

      quizChapterSelect.appendChild(option);
    });

    // Bevar fallback: vælg "Bland alle kapitler", hvis intet blev valgt
    if (selectedQuizChapters.length === 0 && quizQuestions.length > 0) {
      quizChapterSelect.value = 'all_quiz_chapters_shuffled';
      selectedQuizChapters = ['all_quiz_chapters_shuffled'];
    }

    // Bevar filtrering af spørgsmål
    filterQuizQuestions();
  } else {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'Ingen quiz-spørgsmål tilgængelige';
    quizChapterSelect.appendChild(option);
  }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadCategory(categoryName) {
    console.log(`Loading category: ${categoryName}`);
    if (categoryName === 'all_chapters_shuffled') {
        // Saml alle kort fra alle kategorier og annotér hvert kort med sit kapitel
        let allCards = [];
        for (const category in allFlashcardCategories) {
            const cardsWithChapter = allFlashcardCategories[category].map(c => ({ ...c, __chapter: category }));
            allCards = allCards.concat(cardsWithChapter);
        }
        currentFlashcards = allCards;
    } else {
        // Tag kortene og annotér dem med den valgte kategori
        currentFlashcards = allFlashcardCategories[categoryName]
            ? allFlashcardCategories[categoryName].map(c => ({ ...c, __chapter: categoryName }))
            : [];
    }
    
    shuffleArray(currentFlashcards);
    currentFlashcardIndex = 0;
    resetFlashcardFeedback(); // Nulstil feedback-status, når ny kategori indlæses
    updateFlashcardUI();
}

function shuffleCurrentCards() {
    console.log("Shuffling current cards...");
    if (currentFlashcards.length === 0) {
        console.log("No cards to shuffle.");
        return;
    }
    // When shuffling, we effectively reset the review process for the current category
    loadCategory(categorySelect.value); // Reload the category to reset everything
}

// --- RETTET FUNKTION ---
function updateCardContent() {
    if (currentFlashcards.length > 0 && currentFlashcardIndex < currentFlashcards.length && currentFlashcardIndex >= 0) {
        const cardData = currentFlashcards[currentFlashcardIndex];
        
        // Fysisk forside af kortet
        if (showBackFirst) {
            frontTextElement.textContent = cardData.back;
        } else {
            frontTextElement.textContent = cardData.front;
        }

        // Fysisk bagside af kortet
        if (showBackFirst) {
            backTextElement.textContent = cardData.front;
        } else {
            backTextElement.textContent = cardData.back;
        }

        // Vis kapitel-badge
        if (cardData.__chapter) {
            cardChapterBadge.style.display = 'block';
            cardChapterBadge.textContent = cardData.__chapter;
        } else {
            cardChapterBadge.style.display = 'none';
        }
    } else {
        frontTextElement.textContent = "Ingen kort i denne kategori.";
        backTextElement.textContent = "Vælg en kategori for at starte.";
        cardChapterBadge.style.display = 'none';
    }
}
// --- SLUT PÅ RETTET FUNKTION ---

function updateFlashcardUI() {
    console.log(`Updating Flashcard UI. Index: ${currentFlashcardIndex}, Total: ${currentFlashcards.length}`);
    updateCardContent();
    if (currentFlashcards.length > 0) {
        progressText.textContent = `Kort ${currentFlashcardIndex + 1} / ${currentFlashcards.length}`;
        flashcardFeedbackButtons.classList.remove('hidden'); // Vis feedback-knapper
    } else {
        progressText.textContent = `Kort 0 / 0`;
        flashcardFeedbackButtons.classList.add('hidden'); // Skjul feedback-knapper
    }

    // Deaktiver feedback-knapperne, hvis der ikke er aktive kort, eller hvis alle kort er gennemgået
    if (currentFlashcards.length === 0 || currentFlashcardIndex === -1) {
        feedbackCorrectBtn.disabled = true;
        feedbackUnsureBtn.disabled = true;
        feedbackIncorrectBtn.disabled = true;
    } else {
        feedbackCorrectBtn.disabled = false;
        feedbackUnsureBtn.disabled = false;
        feedbackIncorrectBtn.disabled = false;
    }

    prevBtn.disabled = currentFlashcardIndex === 0 || currentFlashcards.length === 0;
    nextBtn.disabled = currentFlashcardIndex === currentFlashcards.length - 1 || currentFlashcards.length === 0 || currentFlashcardIndex === -1;
    shuffleBtn.disabled = currentFlashcards.length === 0;
    
    // Ensure card is not flipped when updating UI initially
    if (card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');
        isFlipped = false;
    }
}

// ... rest of the file remains unchanged (event listeners, quiz functions, etc.)

// --- Initialisation ---
populateQuizChapterSelect();
populateCategorySelect(); // Populate flashcard categories
showMainSection('flashcard-section'); // Show flashcards by default

console.log("App initialization complete.");
}); // End of DOMContentLoaded listener
