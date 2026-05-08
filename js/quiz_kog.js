// ==========================================================
// KOGNITIONSPSYKOLOGI QUIZ DATA
// ==========================================================

const kogQuizQuestions = [

  // ============================================================
  // KAPITEL 1 – APPROACHES TO HUMAN COGNITION
  // ============================================================
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er den bedste definition af kognitiv psykologi?",
    options: [
      "Studiet af hjernens neurale aktivitet ved hjælp af skanningsteknologi",
      "Studiet af de mentale processer der gør os i stand til at forstå omgivelserne og træffe beslutninger",
      "Studiet af adfærd uden reference til indre mentale tilstande",
      "Studiet af, hvordan computere kan simulere menneskelig intelligens"
    ],
    correctAnswer: "b",
    feedback: "Kognitiv psykologi defineres som studiet af de mentale processer, der gør os i stand til at forstå omgivelserne og træffe beslutninger ud fra dem – herunder opmærksomhed, perception, hukommelse, sprog og problemløsning."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er de fire hovedtilgange til studiet af kognition?",
    options: [
      "Behaviorisme, gestaltpsykologi, psykoanalyse og humanistisk psykologi",
      "Kognitiv psykologi, kognitiv neuropsykologi, kognitiv neurovidenskab og computational cognitive science",
      "Eksperimentel psykologi, klinisk psykologi, udviklingspsykologi og socialpsykologi",
      "Introspektionisme, funktionalisme, strukturalisme og evolutionær psykologi"
    ],
    correctAnswer: "b",
    feedback: "De fire hovedtilgange er: 1) Kognitiv psykologi (adfærdsmæssige eksperimenter), 2) Kognitiv neuropsykologi (hjerneskadede patienter), 3) Kognitiv neurovidenskab (hjernemålinger + adfærd), og 4) Computational cognitive science (computermodeller)."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad kendetegner 'bottom-up processing'?",
    options: [
      "Bearbejdning styret af viden, forventninger og tidligere erfaringer",
      "Bearbejdning der starter i de højere kognitive centre og bevæger sig nedad",
      "Bearbejdning styret af stimulusinformation fra omgivelserne",
      "Bearbejdning der foregår udelukkende i det ubevidste"
    ],
    correctAnswer: "c",
    feedback: "Bottom-up processing er datadrevet bearbejdning, der styres af den faktiske stimulusinformation fra omgivelserne – i modsætning til top-down processing, der styres af viden og forventninger."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'cascade processing'?",
    options: [
      "En bearbejdningsform, hvor alle processer foregår fuldstændig parallelt og uafhængigt",
      "En bearbejdningsform, hvor ét trin behandles ad gangen i streng rækkefølge",
      "En bearbejdningsform, hvor senere stadier starter, før tidligere stadier er afsluttet",
      "En bearbejdningsform, der kun forekommer ved automatiserede færdigheder"
    ],
    correctAnswer: "c",
    feedback: "Cascade processing er en mellemting mellem seriel og parallel bearbejdning: senere stadier kan begynde, inden tidligere stadier er fuldt afsluttet, hvilket giver en mere flydende og overlappende bearbejdning."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad menes med 'task impurity problem' i kognitiv psykologi?",
    options: [
      "At forsøgspersoner ikke følger instruktionerne korrekt",
      "At de fleste kognitive opgaver involverer flere mentale processer, hvilket gør tolkning vanskelig",
      "At laboratorieeksperimenter ikke kan generaliseres til hverdagen",
      "At hjerneskadede patienter ikke kan bruges som kontrolgruppe"
    ],
    correctAnswer: "b",
    feedback: "Task impurity problem refererer til, at de fleste kognitive opgaver ikke måler én enkelt mental proces, men involverer mange processer på én gang – dette gør det svært at drage klare konklusioner om specifikke kognitive funktioner."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'ecological validity' i kognitiv forskning?",
    options: [
      "Graden af kontrol over eksperimentelle variabler i laboratoriet",
      "Hvor godt laboratoriefund generaliserer til hverdagssituationer",
      "Antallet af forsøgspersoner i et studie",
      "Præcisionen af de neuroimaging-metoder, der anvendes"
    ],
    correctAnswer: "b",
    feedback: "Ecological validity handler om, i hvilken grad resultaterne fra kontrollerede laboratorieeksperimenter kan generaliseres til og er repræsentative for virkelige hverdagssituationer."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er grundidéen i kognitiv neuropsykologi?",
    options: [
      "At bruge computersimuleringer til at modellere kognitive processer",
      "At kombinere hjerneskanninger med adfærdsmålinger",
      "At studere hjerneskadede patienter for at forstå normal kognition",
      "At undersøge kognition hos dyr for at forstå menneskelig tænkning"
    ],
    correctAnswer: "c",
    feedback: "Kognitiv neuropsykologi bygger på studiet af patienter med hjerneskader: ved at undersøge, hvilke funktioner der er svækkede eller bevarede, kan man drage slutninger om, hvordan normal kognition er organiseret."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'modularity assumption' i kognitiv neuropsykologi?",
    options: [
      "Antagelsen om at alle kognitive processer foregår i ét samlet system",
      "Antagelsen om at kognitive funktioner er opdelt i relativt uafhængige moduler",
      "Antagelsen om at hjerneskade altid påvirker alle kognitive funktioner ens",
      "Antagelsen om at kognition er identisk hos alle mennesker"
    ],
    correctAnswer: "b",
    feedback: "Modularity assumption er antagelsen om, at kognition er organiseret i relativt uafhængige moduler, der kan fungere selvstændigt – understøttet af fund om, at hjerneskade kan ramme én funktion uden at påvirke andre."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er en 'double dissociation', og hvorfor er den vigtig?",
    options: [
      "Når to patienter begge mister den samme funktion – bevis for at funktionen er lokaliseret",
      "Når to patienter viser modsatrettede mønstre af svækkelse – stærkere evidens for adskilte processer",
      "Når én patient mister to funktioner på én gang – bevis for at de er forbundne",
      "Når en funktion er intakt hos alle hjerneskadede patienter – bevis for robusthed"
    ],
    correctAnswer: "b",
    feedback: "En double dissociation opstår, når patient A har svækkelse i funktion X men ikke Y, mens patient B har svækkelse i Y men ikke X. Dette er stærkere evidens for, at X og Y er adskilte processer, end en enkelt dissociation alene."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'diaschisis'?",
    options: [
      "En metode til at stimulere hjerneområder med magnetfelter",
      "Fænomenet at lokal hjerneskade skaber funktionelle ændringer i fjerntliggende hjerneområder",
      "En type amnesi, der opstår efter bilateral hippocampusresektion",
      "En fejlslutning fra hjerneaktivering til kognitiv funktion"
    ],
    correctAnswer: "b",
    feedback: "Diaschisis refererer til, at en lokal hjerneskade ikke kun påvirker det skadede område, men også kan forårsage funktionelle ændringer i fjerntliggende hjerneområder, der er forbundet med det skadede område."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvilken neuroimaging-metode har den bedste tidslige opløsning?",
    options: [
      "fMRI (functional Magnetic Resonance Imaging)",
      "PET (Positron Emission Tomography)",
      "ERPs (Event-Related Potentials)",
      "Strukturel MRI"
    ],
    correctAnswer: "c",
    feedback: "ERPs (Event-Related Potentials) er gennemsnit af EEG-responser og har fremragende tidslig opløsning (millisekunder), men dårlig spatial opløsning. fMRI og PET har bedre spatial opløsning, men langsommere tidslig opløsning."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad måler fMRI, og hvad er dens styrker og svagheder?",
    options: [
      "Måler elektrisk aktivitet i neuroner; god tidslig opløsning, dårlig spatial opløsning",
      "Måler BOLD-signal (blodiltning); god spatial opløsning, middel tidslig opløsning",
      "Måler magnetfelter fra neuroner; god både tidslig og spatial opløsning",
      "Måler blodgennemstrømning via radioaktive tracere; god spatial, dårlig tidslig opløsning"
    ],
    correctAnswer: "b",
    feedback: "fMRI måler BOLD-signalet (Blood Oxygen Level Dependent), som afspejler ændringer i blodiltning relateret til neural aktivitet. Den har god spatial opløsning (mm), men middel tidslig opløsning (sekunder) pga. den langsomme hæmodynamiske respons."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'reverse inference' problemet i kognitiv neurovidenskab?",
    options: [
      "At man ikke kan reproducere neuroimaging-resultater i andre laboratorier",
      "At man antager, at man kan slutte fra aktivering af et hjerneområde til en specifik kognitiv proces – ofte upræcist",
      "At hjerneskadede patienter ikke kan bruges til at forstå normal kognition",
      "At computersimuleringer ikke kan modellere kompleks menneskelig adfærd"
    ],
    correctAnswer: "b",
    feedback: "Reverse inference er problemet med at slutte baglæns fra hjerneaktivering til kognitiv funktion. Da de fleste hjerneområder aktiveres af mange forskellige processer, er det upræcist at sige 'område X er aktivt, altså foregår kognitiv proces Y'."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er TMS (Transcranial Magnetic Stimulation), og hvad bruges det til?",
    options: [
      "En metode til at måle blodgennemstrømning i hjernen ved hjælp af radioaktive tracere",
      "En metode til kortvarig stimulering eller inhibering af hjerneområder for at undersøge kausalitet",
      "En metode til at registrere elektrisk aktivitet i hjernen via elektroder på hovedbunden",
      "En metode til at kortlægge hjernens strukturelle forbindelser"
    ],
    correctAnswer: "b",
    feedback: "TMS (Transcranial Magnetic Stimulation) bruger magnetfelter til kortvarigt at stimulere eller inhibere specifikke hjerneområder. Det er særligt værdifuldt, fordi det kan etablere kausalitet – ikke blot korrelation – mellem hjerneaktivitet og kognition."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'default mode network' (DMN)?",
    options: [
      "Et netværk der er aktivt under krævende kognitive opgaver og deaktiveres ved hvile",
      "Et netværk der er aktivt ved hvile, mind-wandering og indre tankeprocesser",
      "Et netværk der udelukkende er ansvarligt for visuel perception",
      "Et netværk der koordinerer motoriske bevægelser"
    ],
    correctAnswer: "b",
    feedback: "Default mode network (DMN) er et netværk af hjerneområder (inkl. medial præfrontal cortex og posterior cingulate cortex), der er aktivt under hvile, mind-wandering, selvrefleksion og indre tankeprocesser, og typisk deaktiveres under fokuserede ydre opgaver."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er connectionist models i computational cognitive science?",
    options: [
      "Modeller baseret på IF-THEN regler, der styrer handlinger ud fra working memory",
      "Netværk af simple enheder der lærer via vægtjusteringer (backpropagation)",
      "Modeller der kortlægger hjernens anatomiske forbindelser",
      "Modeller der simulerer bevidst ræsonnering trin for trin"
    ],
    correctAnswer: "b",
    feedback: "Connectionist models (også kaldet neurale netværk) består af simple, sammenkoblede enheder, der lærer ved at justere styrken af forbindelserne (vægtene) via backpropagation. De er inspireret af hjernens neurale arkitektur."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er forskellen på 'localist' og 'distributed' repræsentationer i connectionist modeller?",
    options: [
      "Localist: ét hjerneområde pr. funktion; Distributed: funktioner er spredt over hele hjernen",
      "Localist: én node repræsenterer ét begreb; Distributed: et mønster af aktivering repræsenterer et begreb",
      "Localist: bevidste processer; Distributed: ubevidste processer",
      "Localist: seriel bearbejdning; Distributed: parallel bearbejdning"
    ],
    correctAnswer: "b",
    feedback: "I localist repræsentationer er hvert begreb repræsenteret af én enkelt node. I distribuerede repræsentationer er et begreb repræsenteret af et mønster af aktivering på tværs af mange noder – mere biologisk plausibelt, men kan lide af 'superposition catastrophe'."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er ACT-R, og hvad er dens grundidé?",
    options: [
      "En neuroimaging-metode til at kortlægge hjernens aktivitet under kognitive opgaver",
      "En kognitiv arkitektur med moduler for mål, hukommelse, perception og handling",
      "En statistisk metode til at analysere reaktionstidsdata",
      "En teori om, at kognition udelukkende kan forklares ved hjernens neurale aktivitet"
    ],
    correctAnswer: "b",
    feedback: "ACT-R (Adaptive Control of Thought-Rational) er en kognitiv arkitektur udviklet af John Anderson. Den modellerer kognition som et system af moduler (goal module, imaginal module, retrieval module, procedural module), der interagerer via en central procedurel enhed."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'subtractivity assumption' i kognitiv neuropsykologi?",
    options: [
      "Antagelsen om at hjerneskade tilføjer nye kognitive funktioner, der ikke fandtes før",
      "Antagelsen om at hjerneskade fjerner funktioner, men ikke tilføjer nye",
      "Antagelsen om at alle mennesker har den samme kognitive struktur",
      "Antagelsen om at kognitive moduler er placeret i specifikke hjerneområder"
    ],
    correctAnswer: "b",
    feedback: "Subtractivity assumption er antagelsen om, at hjerneskade kun fjerner eller svækker eksisterende kognitive funktioner – den tilføjer ikke nye. Dette er vigtigt for at kunne fortolke neuropsykologiske data som evidens for normal kognition."
  },
  {
    chapter: "Kapitel 1 – Approaches to Human Cognition",
    question: "Hvad er 'Cognitive Reflection Test', og hvad viser den om menneskelig tænkning?",
    options: [
      "En test der måler arbejdshukommelseskapacitet ved hjælp af komplekse span-opgaver",
      "En test der viser, at mange mennesker giver intuitive, forkerte svar og ikke tjekker deres egen tænkning",
      "En test der måler reaktionstid som indikator for kognitiv hastighed",
      "En test der bruges til at diagnosticere kognitive forstyrrelser efter hjerneskade"
    ],
    correctAnswer: "b",
    feedback: "Cognitive Reflection Test (CRT) indeholder spørgsmål, der har et intuitivt, men forkert svar. Testen viser, at mange mennesker stoler på System 1 (hurtig, intuitiv tænkning) og ikke reflekterer over, om svaret er korrekt – et eksempel på begrænsninger i menneskelig kognition."
  }

];
