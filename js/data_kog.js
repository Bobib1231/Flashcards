// ==========================================================
// KOGNITIONSPSYKOLOGI DATA
// ==========================================================

const kogFlashcardCategories = {
    "Introduktion til Kognition": [
        { front: "Kognitiv psykologi", back: "Studiet af mentale processer såsom opmærksomhed, sprog, hukommelse, perception, problemløsning og tænkning." },
        { front: "Bottom-up processering", back: "Når vores perception primært styres af de rå sensoriske input fra omgivelserne." },
        { front: "Top-down processering", back: "Når vores perception og fortolkning styres af vores forventninger, viden og tidligere erfaringer." }
    ],
    "Opmærksomhed (Eksempel)": [
        { front: "Selektiv opmærksomhed", back: "Evnen til at fokusere på et specifikt stimuli, mens man ignorerer andre (f.eks. Cocktail Party-effekten)." },
        { front: "Delt opmærksomhed (Divided attention)", back: "Når vi forsøger at allokere vores kognitive ressourcer til to eller flere opgaver på samme tid (multitasking)." }
    ]
};

// Tomt array til quiz-spørgsmål. Når dette er tomt, skjules "Quiz Mode" knappen automatisk.
const kogQuizQuestions = [];
