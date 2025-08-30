document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Initializing app...");

    // --- DATA: Flashcard content opdelt efter kategori ---
    const allFlashcardCategories = {
        "Keltner 2006 - Evolution & Følelser": [
            { front: "Social-funktionel tilgang", back: "En tilgang hvor psykologiske fænomener ses som havende et socialt formål og en evolutionær funktion for at løse overlevelses- og reproduktionsproblemer." },
            { front: "De 4 analyseniveauer for følelser", back: "Intra-individuel (individets respons), Dyadisk (interaktion mellem to), Gruppe (fælles mål), og Kulturel (normer og værdier)." },
            { front: "Reciprok altruisme", back: "At hjælpe en anden med forventning om gengældelse senere. En form for langsigtet, gensidig samarbejde, der er grundlaget for social udveksling." },
            { front: "Eksaptation (Exaptation)", back: "En egenskab, der oprindeligt udviklede sig til ét formål, men senere genbruges til en ny funktion (f.eks. fjer til isolering, der senere bruges til flyvning)." },
            { front: "Præadaptation (Preadaptation)", back: "En eksisterende egenskab, der tilfældigvis er velegnet til en ny funktion, der endnu ikke er opstået. Selve potentialet i egenskaben." },
            { front: "Social Affordance (Sociale handlemuligheder)", back: "De signaler i et miljø eller hos en person, der muliggør eller 'inviterer' til en bestemt social adfærd (f.eks. et smil inviterer til samtale)." },
            { front: "Følelser som social-moralske intuitioner", back: "Følelser giver hurtige 'mavefornemmelser' om komplekse sociale og moralske spørgsmål, f.eks. vrede ved krænkede rettigheder eller afsky ved urenhed." },
            { front: "Følelsers rolle i personlighed", back: "Individuelle forskelle i følelsesmæssighed (f.eks. neuroticisme) er en kernekomponent i personlighed og ses som strategier til at navigere i det sociale miljø." },
            { front: "Forskellen på 'potentiale' og 'praksis' i følelser", back: "Potentiale: Den universelle, biologiske evne til at føle. Praksis: Hvordan følelser rent faktisk bruges og værdsættes i en specifik kultur." },
            { front: "Menneskets unikke følelsesliv (vs. primater)", back: "Skyldes større frontal cortex, sprog og kultur, som muliggør kobling af følelser til abstrakte ideer, hukommelse og moralsk løftning." },
            { front: "Hyperkognisering af følelser", back: "Når en kultur giver en bestemt følelse en central rolle og opmuntrer til dens udtryk og oplevelse (f.eks. skam i hierarkiske samfund)." },
            { front: "Hypokognisering af følelser", back: "Når en kultur giver negative konnotationer og afskrækker fra individet fra at vise dem (f.eks. sårbarhed blandt mænd i dag)." },
            { front: "Komplementære reaktioner", back: "Når et følelsesmæssigt udtryk fremkalder en specifik, modsvarende reaktion hos andre (f.eks. vrede fremkalder frygt; nød fremkalder sympati)." },
            { front: "Dispositionel oplevelse af følelser", back: "En persons vedvarende tendens til at opleve en bestemt følelse. Dette kan forudsige langsigtede livsresultater (f.eks. vrede i barndommen -> lavere uddannelse)." },
            { front: "Orbitofrontal cortex' funktion", back: "Central for social adfærd og følelsesmæssig regulering. Skader her kan føre til antisocial adfærd og mangel på f.eks. forlegenhed." }
        ],
        "Tønnesvang 2015 - Kvadrantmodellen": [
            { front: "Kvadrantmodellen", back: "En model, der indkredser fire grundlæggende perspektiver for at forstå et fænomen (udviklet af Ken Wilber)." },
            { front: "Integrativ Perspektivisme", back: "En tilgang til at arbejde med og skabe helhed i flere perspektiver på én gang. Kvadrantmodellen er en styremodel for dette." },
            { front: "Øvre Højre Kvadrant", back: "Det objektive perspektiv på det enkelte individ. Fokus på adfærd, kropslig fysik, dispositioner, biologi og neurologi – det, der kan observeres." },
            { front: "Øvre Venstre Kvadrant", back: "Det subjektive perspektiv på den enkelte persons fænomenologi. Fokus på oplevelse, tanker, følelser, intentioner, værdier, behov og mental organisering – det, der ikke kan observeres." },
            { front: "Nedre Højre Kvadrant", back: "Det interobjektivet perspektiv på fænomener i flertal. Fokus på systemer, regulativer, retningslinjer, teknologi og interaktioner – det, der kan observeres i grupper." },
            { front: "Nedre Venstre Kvadrant", back: "Det intersubjektive perspektiv på fænomener i flertal. Fokus på kultur, delt viden, normer og tydningshorisonter – det, der ikke umiddelbart kan observeres, men kan fortolkes i grupper." },
            { front: "Tetra-opstår ('tetra-arises')", back: "De fire kvadranter er ikke uafhængige, men er fire samtidige sider af sagen eller fænomenet, der gensidigt påvirker hinanden." },
            { front: "Metodisk reduktion", back: "Når man vælger at fokusere på én eller få kvadranter og bevidst ser bort fra andre for at skærpe sit fokus i en specifik kontekst." },
            { front: "Udviklingslinjer", back: "Forskellige kapaciteter (f.eks. kognitiv, emotionel, moralsk), der udvikler sig relativt uafhængigt inden for hver kvadrant." },
            { front: "Udviklingsniveauer", back: "Inddeling af udviklingslinjer efter kompleksitet og inklusion (f.eks. egocentrisk, etnocentrisk, verdenscentrisk)." },
            { front: "Egocentrisk niveau", back: "Perspektiv centreret omkring en selv; ens egne meninger og ønsker prioriteres over andres ('mig mod verden')." },
            { front: "Etnocentrisk niveau", back: "Perspektiv, der omfatter den gruppe eller de relationer, man er en del af; åben for forskellighed inden for gruppens rammer ('mig med os, os mod dem')." },
            { front: "Verdenscentrisk niveau", back: "Perspektiv, der inkluderer mennesker, man aldrig har mødt, og synspunkter man er uenig i; evne til at forholde sig til andres synspunkter og se jorden som en helhed." },
            { front: "Meningsfuld uenighed", back: "Evnen til at anerkende andres synspunkter som 'delsandheder' og bruge uenigheden konstruktivt til at skabe et bredere perspektiv og helhedsforståelse." },
            { front: "Kvadrantlogisk organisationsanalyse", back: "Anvendelse af kvadrantmodellen til at analysere og samtale om, hvordan en organisation har udviklet sig (fortid, nutid, fremtid) med fokus på adfærd, oplevelse, system og kulturstrukturer." },
            { front: "Looking At-perspektiv", back: "At se på en person udefra som en funktionel genstand og vurdere dennes kompetence til at mestre funktioner i de fire kvadranter." },
            { front: "Looking As-perspektiv", back: "At forsøge at sætte sig i en persons sted og forstå, hvordan det opleves for personen at være til stede i de fire kvadranter (indefra og ud)." }
        ],
        "Aronson Kapitel 1: Introduktion": [
            { front: "Construal (Konstruktion)", back: "Måden mennesker ser, forstår og fortolker den sociale verden. Konstrueret ud fra grundmotiverne at 'have det godt med sig selv' og 'at være præcis'." },
            { front: "Behaviorism (Behaviorisme)", back: "Gren af psykologi, der tror, at alle psykologiske fænomener kan forstås ud fra selvforstærkende kræfter i individets omgivelser (belønning/straf)." },
            { front: "Gestalt psykologi", back: "Gren af psykologi, der tydeliggør vigtigheden af at fokusere på, hvordan en situation/objekt anses i det subjektive anliggende fremfor, hvordan den fremstår objektivt." },
            { front: "Naiv realisme", back: "Overbevisningen om at vi ser tingene, som de virkelig er, og en underminering af, hvor meget vi tolker til vores fordel. Kan føre til uvilje mod kompromis i konflikter." },
            { front: "Fundamentale attribution error (Fundamentale attributionsfejl)", back: "Tendensen til at overvurdere interne årsager og undervurdere eksterne (situationelle) årsager, når vi forklarer andres adfærd." }
        ],
        "Aronson Kapitel 2: Metodologi": [
            { front: "Hindsight Bias (Bagklogskabsbias)", back: "Tendensen til at tro, at svaret var åbenlyst, efter man har fået svaret ('Jeg vidste det jo hele tiden!')." },
            { front: "Observationsmetoden", back: "Forskeren beskriver fænomener ved at observere dem. Inkluderer etnografi og arkivanalyse. Begrænset til 'hvad', ikke 'hvorfor'." },
            { front: "Etnografi", back: "Metode hvor forskere undersøger en kultur indefra uden at forcere en forudantagelse over kulturen." },
            { front: "Interjudge reliability (Interbedømmerpålidelighed)", back: "Flere uafhængige observatører er enige om observationer, hvilket styrker evidensen (f.eks. hvis 5 personer har givet samme vurdering)." },
            { front: "Arkivanalyse", back: "Forskeren undersøger tilgængelige tekster og materialer (sociale medier, dagbøger) om et subjekt for at vurdere det." },
            { front: "Korrelationsmetoden", back: "Forudser sammenhænge mellem variable (når vi ved X, kan vi så forudsige Y?). Korrelationskoefficient fra -1 til 1. Forklarer ikke kausalitet." },
            { front: "Eksperimentel metode", back: "Undersøger kausalitet (er X et resultat af Y?). 'Method of choice'. Involverer uafhængige og afhængige variable." },
            { front: "Uafhængig variabel (Independent Variable)", back: "Den variabel forskeren ændrer/manipulerer for at undersøge resultatet af denne ændring." },
            { front: "Afhængig variabel (Dependent Variable)", back: "Den variabel der får en effekt af den uafhængige variabel – det, der måles." },
            { front: "Internal validity (Intern validitet)", back: "Sikrer at intet ud over den uafhængige variabel påvirker den afhængige variabel, så kausalitet kan fastslås (vha. random assignment)." },
            { front: "Probability value (p-value)", back: "Hvor sandsynligt det er, at forsøgets resultat skyldes ren tilfældighed. Significant (troværdigt) når værdien er under 5 ud af 100 (p < 0.05)." },
            { front: "External validity (Ekstern validitet)", back: "Om resultaterne af et eksperiment kan generaliseres til andre situationer (situations) og andre mennesker (people)." },
            { front: "Psykologisk realisme", back: "Realismen af den psykologiske effekt en situation trigger i et eksperiment. Øges, hvis forsøgspersoner tror, de er i et virkeligt scenarie (ofte vha. 'cover story')." },
            { front: "Field experiments (Felt eksperimenter)", back: "Forskere opsætter scenarier i virkeligheden fremfor kontrollerede forhold. Højere ekstern validitet, men sværere at kontrollere interne parametre." },
            { front: "The basic dilemma of a social psychologist", back: "Afvejningen mellem intern og ekstern validitet. Løsning: Brug flere eksperimenter til at drage konklusioner." },
            { front: "Replikationer (Replications)", back: "Den ultimative test af et forsøgs eksterne validitet; hvis et forsøg kan gentages med samme resultat, er det mere generaliserbart." },
            { front: "Meta-analyse", back: "En teknik hvor man tager flere studier og tager gennemsnittet af resultatet for at finde ud af, om der er en sammenhæng." },
            { front: "Basic research (Grundforskning)", back: "Forskning udelukkende med nysgerrighed som motiv for at forstå et fænomen." },
            { front: "Applied research (Anvendt forskning)", back: "Forskning der forsøger at løse et specifikt samfundsproblem." }
        ],
        "Aronson Kapitel 4: Social Perception": [
            { front: "Social perception", back: "Studiet af hvordan vi former vores indtryk af andre og udleder konklusioner på det. Hjælper os med at forstå og forudse den sociale sfære." },
            { front: "Nonverbal kommunikation", back: "Ansigtsmimik, øjenkontakt, kropssprog, osv. Vigtigt for førstehåndsindtryk og forståelse af følelser. Kan variere kulturelt (emblemer)." },
            { front: "Darwin og ansigtsmimik", back: "Hypotese: Universalitet i ansigtsmimik for grundfølelser som angst, afsky, stolthed (men ikke skam i alle kulturer)." },
            { front: "Affect blends (Følelsesblandinger)", back: "Mennesker viser ofte flere følelser på ét ansigt samtidigt (f.eks. afsky og vrede), hvilket gør afkodning sværere." },
            { front: "Emblemer", back: "Kulturspecifikke kropsudtryk (f.eks. 'fuckfingeren'), der ikke forstås universelt og kan give misforståelser." },
            { front: "Førstehåndsindtryk", back: "Hurtige vurderinger (under 100 ms) baseret på ansigtsudtryk. F.eks. baby-lignende ansigter antages at være naive/underdanige." },
            { front: "Thin-slicing (Tyndskæring)", back: "Vores evne til at lave meningsfulde vurderinger af mennesker på meget kort tid. Ofte ingen stor forskel fra langvarige indtryk i samme domæne." },
            { front: "Primæreffekten (Primacy effect)", back: "Den information vi lærer først om en person, har størst betydning for, hvordan vi tolker efterfølgende information. Vi udfylder huller ud fra det første indtryk." },
            { front: "Overbevisningsvedholdenhed (Belief Perseverance)", back: "Tendensen til at fastholde tidligere overbevisninger, selv når de vises at være forkerte. En grund til førstehåndsindtryks magt." },
            { front: "Causal attribution (Årsagsforklaring)", back: "Studiet af hvordan vi udleder vurderinger af årsager til folks adfærd. Skelner mellem interne og eksterne forklaringer." },
            { front: "Intern (dispositionel) forklaring (Internal attribution)", back: "Personens adfærd forklares ved noget inde i ham/hende (personlighed, evner, intentioner)." },
            { front: "Ekstern (situationel) forklaring (External attribution)", back: "Personens adfærd forklares gennem årsager, der kommer udefra (situationen, held, andres handlinger)." },
            { front: "Kovariationsmodellen (The Covariation Model)", back: "Model der forklarer, hvordan vi bruger information fra flere situationer til at afgøre, om adfærd skyldes interne (personlige) eller eksterne (situationelle) årsager." },
            { front: "Konsistens (Consistency)", back: "Opfører personen sig på samme måde i denne situation på forskellige tidspunkter? (Del af kovariationsmodellen)." },
            { front: "Særpræg (Distinctiveness)", back: "Opfører personen sig på denne måde i andre situationer? (Del af kovariationsmodellen)." },
            { front: "Konsensus (Consensus)", back: "Opfører andre mennesker sig på samme måde i denne situation? (Del af kovariationsmodellen)." },
            { front: "Den fundamentale attributionsfejl (Fundamental attribution error)", back: "Tendensen til at overvurdere interne årsager og undervurdere eksterne (situationelle) årsager, når vi forklarer andres adfærd." },
            { front: "Perceptuel saliens (Perceptual Salience)", back: "Menneskets tendens til at fokusere på de mest tilsyneladende fremtrædende aspekter af en given situation." },
            { front: "Two-step attribution process (To-trins attributionsproces)", back: "Mennesker giver først naturligt en intern årsag, og ved motivation/energi overvejes derefter en ekstern årsag." },
            { front: "Self-serving attributions (Selvtjenende årsager)", back: "Tendensen til at tage intern credit for succeser ('jeg er klog') og skyde skylden på eksterne faktorer ved fiaskoer ('han gav mig en dårlig tekst')." },
            { front: "Belief in a just world", back: "En forsvarsmekanisme hvor man, i mødet med andres tragedier, konkluderer at de har fortjent det, og at tragedier derfor ikke kan ramme en selv." },
            { front: "The bias blindspot", back: "Tendensen til at tro at andre er mere tilbøjelige til kognitive biases (fordomme, tilbøjeligheder) end en selv." },
            { front: "Analytisk tankestil (Vesten)", back: "Fokus på individets autonomi og objektive egenskaber, uden meget hensyn til kontekst eller andre personer." },
            { front: "Holistisk tankestil (Asien)", back: "Fokus på de sociale gruppers autonomi, sammenhænge, relationer og kontekst i vurderingen af fænomener." }
        ],
        "Kapitel 1, Larsen": [
            { front: "Mekanismer (Larsen)", back: "Handler om processen af personlighed: Input -> Beslutningsregler (personlighed) -> Output (reaktion). Ikke bevidst fremprovokeret, men automatisk under rette omstændigheder." },
            { front: "Personlighed 'Inde i individet'", back: "Personlighedens tendens til at være nogenlunde stabil over længere tid, selv ved forsøg på at nulstille den." },
            { front: "Organiseret personlighed", back: "Indre regler/hierarki bestemmer, hvornår og i hvilken rækkefølge lyster/impulser kommer. F.eks. at være vredeshyppig som personlighedstræk, fordi regelsættet oftere resulterer i vrede." },
            { front: "Selektioner (Larsen)", back: "De valg vi tager i livet (interesser, karriere, venner) er udtryk for vores personlighed. Vi er i mindre kontrol end vi tror." },
            { front: "Evokationer", back: "De reaktioner og følelser vi vækker i andre, ofte ubevidst, som et resultat af vores væremåde og udseende." },
            { front: "Manipulation (Larsen)", back: "Hvordan vi bevidst forsøger at ændre folks adfærd og beslutninger." },
            { front: "3 niveauer af personlighedsanalyse (Larsen)", back: "1. Menneskelig natur (universale), 2. Gruppe/individ plan (bestemte), 3. Individets unikhed." },
            { front: "Nomotetisk tilgang", back: "Statistiske sammenligninger mellem individer eller grupper for at finde generelle lovmæssigheder." },
            { front: "Ideografisk tilgang", back: "Tager udgangspunkt i et enkelt individ for at forstå personens unikke psyke." },
            { front: "6 domæner af viden omkring menneskelig natur (Larsen)", back: "1. Træk (Dispositionelt), 2. Biologiske begivenheder (Biologisk), 3. Konflikter (Intrapsykisk), 4. Kognition/Subjektiv oplevelse (Kognitivt-erfaringsmæssigt), 5. Sociale/kulturelle/kønsbestemte positioner (Socialt og kulturelt), 6. Tilpasninger til livets udfordringer (Justeringsdomænet)." },
            { front: "Dispositionelt domæne", back: "Fokus på personligheders karakteristika, hvordan de opstår, og hvordan folks adfærd adskiller sig." },
            { front: "Biologisk domæne", back: "Fokus på gener (arvelighed), psykofysiologi (biologiske funktioners effekt på personlighed) og evolution (funktioner af personlighedstræk)." },
            { front: "Intrapsykiske domæne", back: "Fokus på mentale mekanismer i personligheden, mange uden for bevidstheden (f.eks. Freuds dybt fæstede motiver)." },
            { front: "Kognitive-erfaringsmæssige domæne", back: "Fokus på menneskets tanker om sig selv/andre, opfattelse af verden, intelligens, mål og følelsesbehandling." },
            { front: "Sociale og kulturelle domæne", back: "Fokus på hvordan kulturer, geografi og køn påvirker vores personlighed og relationer." },
            { front: "Tilvænningsdomænet (Adjustments)", back: "Fokus på hvordan personlighed bestemmer tilpasning til miljøer/situationer, risikovillighed, og studiet af personlighedsforstyrrelser som mangel på tilpasningsevne." },
            { front: "En god personlighedsteori", back: "Skal 1. Vejlede forskere, 2. Organisere kendte fund, 3. Lave forudsigelser, 4. Have 'Parsimony' (simpelhed), 5. Have Kompatibilitet (med andre teorier)." },
            { front: "Parsimony (parsimoni)", back: "En god teori er overordnet simpel med få antagelser og præmisser, men skal stadig kunne forklare komplekse nuancer." },
            { front: "Kompatibilitet (Larsen)", back: "En god teori passer også ind i andre domæner (f.eks. gener og fysiologi) uden at stride imod velfunderede teorier." }
        ],
        "Kapitel 8, Larsen": [
            { front: "Naturlig selektion", back: "Teorien om, at liv optimeres gennem reproduktion og overlevelse af de bedst tilpassede arter. Egenskaber, der øger overlevelse og reproduktion, nedarves." },
            { front: "Seksuel selektion", back: "Processen hvor visse karakteristika foretrækkes af det modsatte køn (intersexuel selektion) eller giver fordele i konkurrence med samme køn (intrasexuel konkurrence), hvilket øger reproduktionssucces og udbredelse af disse træk." },
            { front: "Intrasexuel konkurrence", back: "Konkurrence mellem medlemmer af samme køn (typisk hanner) om adgang til partnere. De, der vinder, får større reproduktionssucces og videregiver deres gener." },
            { front: "Intersexuel selektion", back: "Når ét køn (typisk hunner) vælger partnere baseret på attraktive kvaliteter hos det modsatte køn, f.eks. tegn på gode gener, ressourcer eller forældreinvestering." },
            { front: "Gener og inklusiv fitness", back: "Den samlede reproduktionssucces af ens gener, ikke kun gennem eget afkom, men også gennem slægtninges afkom (som deler gener). Ideen om 'slægtsselektion'." },
            { front: "Produkter af evolutionær proces", back: "Evolutionære processer resulterer i tre hovedtyper af produkter: \n1) **Adaptioner** (nødvendige overlevelsesløsninger), \n2) **Biprodukter (eksaptationer)** (utilsigtede sideeffekter, der kan få ny funktion), og \n3) **Støj/Tilfældigheder** (variabel adfærd uden specifik funktion)." },
            { front: "Adaptive problemer", back: "Specifikke udfordringer i et givent miljø, som mennesket (og dets forfædre) historisk har mødt og måtte løse for at overleve og reproducere (f.eks. fødevaremangel, rovdyr, sygdomme)." },
            { front: "Adaptioner", back: "Nedarvede og pålidelige løsninger på adaptive problemer. De er målrettede og udvikles over generationer for at tilpasse en art bedre til dens specifikke miljø." },
            { front: "Hostile forces of nature", back: "En bred kategori af trusler mod overlevelse, som organismer må tilpasse sig. Dette inkluderer naturkatastrofer, fødevaremangel, rovdyr, parasitter, sygdomme og fjendtlige interaktioner med andre af samme art." },
            { front: "Evolutionær psykologi (Præmisser)", back: "Evolutionær psykologi bygger på følgende præmisser: \n1. **Funktionalisme:** Vi kan kun forstå en psykologisk mekanisme, når vi forstår dens evolutionære funktion. \n2. **Domænespecifikke mekanismer:** Menneskesindet består af mange specialiserede mekanismer, da mennesket har måttet tilpasse sig mange forskellige problemer. \n3. **Testbarhed/Falsificerbarhed:** Fænomener skal undersøges meget specifikt, så hypoteser nemmere kan efterprøves og falsificeres." },
            { front: "Empirisk testning af evolutionære hypoteser", back: "Handler om at undersøge meget specifikke fænomener, så det nemmere kan efterprøves og falsificeres." },
            { front: "Kønsforskelle i pardannelse", back: "Mænd og kvinder har historisk mødt forskellige adaptive problemer, hvilket har ført til forskellige partnervalg-strategier. F.eks. kvinder mere kræsne, mænd mere tilbøjelige til seksuel variation." },
            { front: "Restricted sexual strategy (Begrænset seksuel strategi)", back: "Kvinders (og nogle mænds) strategi; fokuserer på at finde en forpligtende partner, der signalerer forældreinvestering og langvarig stabilitet. Tager tid at vurdere en potentiel partner." },
            { front: "Unrestricted sexual strategy (Ubegrænset seksuel strategi)", back: "Mænds (og nogle kvinders) strategi; fokuserer på at opnå mange seksuelle partnere for at maksimere reproduktionsmulighederne. Prioriterer ofte fysisk attraktivitet og er mindre fokuseret på langvarig forpligtelse." },
            { front: "Life History Theory (Livshistorieteori)", back: "En evolutionær teori, der forklarer, hvordan organismer fordeler deres begrænsede energi og ressourcer (tid, vækst, reproduktion) over deres levetid for at maksimere reproduktiv fitness i et givent miljø. Det er et spektrum fra 'hurtig' til 'langsom' livshistorie." },
            { front: "Miljømæssige udløsere af individuelle forskelle", back: "Miljøforhold, f.eks. patogenrisiko, kan 'kalibrere' individuelle strategier. Høj risiko for patogener kan f.eks. føre til præference for konformitet og regelmæssighed." },
            { front: "Frequency-dependent selection (Frekvensafhængig selektion)", back: "En form for naturlig selektion, hvor fitness for et gen afhænger af, hvor almindeligt det er i populationen. F.eks. kan en sjælden 'snyder'-strategi være fordelagtig, indtil den bliver for udbredt." },
            { front: "Tilhørsbehovet", back: "Et grundlæggende, universelt menneskeligt behov om at tilhøre en gruppe og undgå social udstødelse. Dette behov er drevet af evolutionære fordele ved samarbejde, gensidig støtte og beskyttelse i grupper." },
            { front: "Social pain theory", back: "Teori om, at social udstødelse eller afvisning aktiverer de samme hjerneregioner, som er forbundet med fysisk smerte. Dette signalerer en form for 'social fare', der forbereder individet på at reagere og potentielt genoprette sociale bånd." },
            { front: "Altruisme (evolutionær forklaring)", back: "Hjælpsom adfærd over for andre, selv med en omkostning for en selv. Evolutionært forklares det ofte gennem slægtsselektion (hjælp til genetisk beslægtede) og gensidig altruisme (hjælp med forventning om gengældelse). Sociale normer kan også påvirke hjælpsomhed." }
        ]
    };

    // --- QUIZ DATA: Aronson Multiple Choice Spørgsmål (Dette skal du selv indsætte) ---
    const quizQuestions = [
        // Chapter 1
        {
            chapter: "Chapter 1",
            question: "1. Social psychology is the scientific study of",
            options: [
                "feelings, thoughts, and behaviors of people in social situations.",
                "individual differences such as personality.",
                "how people's social behaviors are shaped by their survival needs.",
                "our cognitive processes such as memory and sensation."
            ],
            correctAnswer: "a",
            feedback: "Socialpsykologi studerer hvordan tanker, følelser og adfærd påvirkes af andres tilstedeværelse."
        },
        {
            chapter: "Chapter 1",
            question: "2. For social psychologists, one of the likely explanations for why people in different cultures behave differently is because they",
            options: [
                "have different genetic makeup.",
                "are influenced by different social factors.",
                "have different evolutionary origins.",
                "possess different personality traits."
            ],
            correctAnswer: "b",
            feedback: "Socialpsykologer fokuserer på sociale faktorers indflydelse på adfærd på tværs af kulturer."
        },
        {
            chapter: "Chapter 1",
            question: "3. Which one of the following statements is FALSE?",
            options: [
                "Personality psychology investigates individual differences.",
                "Evolutionary psychology explains why we behave differently in social situations.",
                "Biology and neuroscience focus on individuals in a social context.",
                "All of the above."
            ],
            correctAnswer: "d",
            feedback: "Alle påstandene er sande undtagen den om evolutionær psykologi, da den forklarer universelle adfærdsmønstre."
        },
        {
            chapter: "Chapter 1",
            question: "4. Which of the following is an example of fundamental attribution error?",
            options: [
                "\"He is a lazy person and therefore he is late.\"",
                "\"He is late to work due to heavy traffic congestion on the roads.\"",
                "\"He did not talk during the party because he did not know anyone there.\"",
                "None of the above."
            ],
            correctAnswer: "a",
            feedback: "Den fundamentale attributionsfejl indebærer at man overvurderer interne faktorer (personlighed) fremfor eksterne (situation)."
        },
        {
            chapter: "Chapter 1",
            question: "5. What are the main differences between what social psychologists and personality psychologist examine?",
            options: [
                "Social psychology focuses on what makes one person unique, while personality psychology focuses on the shared features that make cultures different or similar to each other.",
                "Social psychology focuses on individual differences. Personality psychology looks at how most people would behave in a situation.",
                "Social psychology examines similarities in the ways that social influences can affect most people, whereas personality psychology examines the differences between individuals.",
                "Social psychology focuses on personality traits whereas personality psychology examines the reasons that these personality traits came to be."
            ],
            correctAnswer: "c",
            feedback: "Socialpsykologi ser på fælles adfærd påvirket af sociale situationer, mens personlighedspsykologi fokuserer på individuelle forskelle."
        },
        {
            chapter: "Chapter 1",
            question: "6. Social psychology appears to have the largest overlap with which one of the following disciplines?",
            options: [
                "Biology and Neuroscience",
                "Personality Psychology",
                "Clinical Psychology",
                "Sociology"
            ],
            correctAnswer: "d",
            feedback: "Socialpsykologi og sociologi overlapper i deres fokus på grupper og sociale processer, selvom socialpsykologi fokuserer mere på individet i sociale kontekster."
        },
        {
            chapter: "Chapter 1",
            question: "7. Construal refers to the way in which",
            options: [
                "People objectively deconstruct social reality.",
                "People communicate and exchange information.",
                "People perceive, comprehend, and interpret the social world.",
                "People test their own subjective theories."
            ],
            correctAnswer: "c",
            feedback: "Construal er den subjektive fortolkning af den sociale verden."
        },
        {
            chapter: "Chapter 1",
            question: "8. Which of the following about Gestalt psychology is TRUE?",
            options: [
                "It was first proposed as a theory of how people perceive social world.",
                "It was first proposed as a theory of how people learn information.",
                "It was first proposed as a theory of how people develop mental modals.",
                "None of the above."
            ],
            correctAnswer: "d",
            feedback: "Gestaltpsykologi fokuserer på hvordan vi opfatter helheder, ikke på de specificerede teorier."
        },
        {
            chapter: "Chapter 1",
            question: "9. Which of the following statements about self-esteem is TRUE?",
            options: [
                "We tend to interpret social situations in a way that helps us preserve our self-esteem.",
                "Self-esteem is primarily a personality psychology concept.",
                "Self-esteem is the main factor driving fundamental attribution error.",
                "None of the above."
            ],
            correctAnswer: "a",
            feedback: "Mennesker fortolker ofte situationer for at bevare et positivt selvbillede."
        },
        {
            chapter: "Chapter 1",
            question: "10. Kimberly is late for a company meeting. To predict whether her supervisor will be angry at her, which question would a social psychologist be most likely to ask Kimberly's supervisor?",
            options: [
                "Are you an extraverted person?",
                "Was Kimberly late in the previous week?",
                "What do you think is the reason for Kimberly being late?",
                "Is Kimberly generally a likeable individual?"
            ],
            correctAnswer: "c",
            feedback: "Socialpsykologer fokuserer på situationelle fortolkninger og attributions."
        },
        { // From Aronson Social Psychology MC Answers.pdf, Chapter 1, Review Questions, Set 2
            chapter: "Chapter 1",
            question: "1. You are crossing the road when a car jumps the red light and almost hits you. You assume that the person is a reckless driver, but the driver is actually on his way to the hospital with a sick person in his car. Your assumption about the other person is an example of",
            options: [
                "Personality construction.",
                "Fundamental attribution error.",
                "Random guess.",
                "None of the above."
            ],
            correctAnswer: "b",
            feedback: "Du tilskriver personens adfærd en intern disposition (hensynsløs), selvom der var en ekstern situationel årsag."
        },
        {
            chapter: "Chapter 1",
            question: "2. Which of the following statements is true about Wall Street Game?",
            options: [
                "Calling it \"Community Game\" makes people more cooperative and calling it \"Wall Street Game\" makes people more competitive.",
                "Calling it either \"Community Game\" or \"Wall Street Game\" has minimal effects on people's cooperative behaviors.",
                "Calling it \"Community Game\" does not make people more cooperative while calling it \"Wall Street Game\" makes people more competitive.",
                "Calling it \"Community Game\" makes people more cooperative while calling it \"Wall Street Game\" does not make people more competitive."
            ],
            correctAnswer: "a",
            feedback: "Studiets navn påvirker i høj grad deltagerens adfærd."
        },
        {
            chapter: "Chapter 1",
            question: "3. A person approaches you at the bus stop. He asks you if you would be willing to give him $2 for taking the next bus as he has just lost his wallet. According to social psychologists, which of the following reasons will most likely influence your decision?",
            options: [
                "The person's physical appeal.",
                "The person's gender.",
                "The person's age.",
                "Your construal about the situation."
            ],
            correctAnswer: "d",
            feedback: "Vores tolkning af situationen er afgørende for vores adfærd."
        },
        {
            chapter: "Chapter 1",
            question: "4. Gestalt psychology states that:",
            options: [
                "Our views on most objects are biased.",
                "We tend to construe situations objectively.",
                "We perceive the world through subjective phenomenology.",
                "All of the above."
            ],
            correctAnswer: "c",
            feedback: "Gestaltpsykologi understreger den subjektive fortolkning af verden som en helhed."
        },
        {
            chapter: "Chapter 1",
            question: "5. \"Naïve Realism\" refers to:",
            options: [
                "A type of bias observed primarily in younger people.",
                "Our tendency to misbelieve that our views are always objective.",
                "A notion that most people are unrealistic.",
                "A tendency to naively believe things are accurate when in fact they are not."
            ],
            correctAnswer: "b",
            feedback: "Naiv realisme er troen på, at vores egen opfattelse af virkeligheden er objektiv."
        },
        { // From Aronson Social Psychology MC Answers.pdf, Chapter 1, Review Questions, Set 3
            chapter: "Chapter 1",
            question: "1. Which of the following is true about social cognition?",
            options: [
                "Most people would rather ignore reality completely to feel better about themselves.",
                "Most people try to have an accurate view of the world but often do not have enough information to make accurate judgments.",
                "Most people try to have an accurate view of the world, and most people's world view is close to a 100 percent accurate.",
                "Most people are not concerned with having accurate information when they make decisions or interpret a situation."
            ],
            correctAnswer: "b",
            feedback: "Mennesker stræber efter en nøjagtig opfattelse af verden, men mangler ofte information."
        },
        {
            chapter: "Chapter 1",
            question: "2. Which of the following is most true about people with high self-esteem?",
            options: [
                "Most people change the way they interpret events in order to preserve their self-esteem.",
                "Few people care about maintaining their high self-esteem.",
                "Most people will do things that are against their morals or against the law in order to preserve their self-esteem.",
                "Most people prefer to see the world accurately, even if this means damaging their self-esteem."
            ],
            correctAnswer: "a",
            feedback: "Selvværdsmotivet driver os til at fortolke begivenheder på en måde, der opretholder vores selvværd."
        },
        {
            chapter: "Chapter 1",
            question: "3. According to the social cognition approach,",
            options: [
                "People almost always form accurate impressions about the social world.",
                "People rarely form accurate impressions of the social world.",
                "When viewing the social world, people's main goal is to feel good about themselves.",
                "Even when people are trying to perceive the social world as accurately as they can, there are many ways in which they can go wrong, ending up with the wrong impressions."
            ],
            correctAnswer: "d",
            feedback: "Selv med ønsket om præcision kan kognitive processer føre til fejl."
        },
        // HER SLUTTER KAPITEL 1. Flere kapitler kan tilføjes nedenfor.
        // Kapitel 2 spørgsmål
        {
            chapter: "Chapter 2",
            question: "1. How do most researchers in social psychology devise new ideas of what to study?",
            options: [
                "By drawing on earlier theories.",
                "By drawing on earlier research and refining it.",
                "By basing it on something in their own lives or events that's in the news.",
                "All of the above."
            ],
            correctAnswer: "d",
            feedback: "Forskning bygger ofte på en kombination af tidligere teorier, forskning og aktuelle begivenheder."
        },
        {
            chapter: "Chapter 2",
            question: "2. Which of the following is true about the hindsight bias?",
            options: [
                "It is more common in men than in women.",
                "It is the tendency to overestimate the extent to which other people behave in the same way that we do.",
                "It is the tendency for people to exaggerate how much they could have predicted an outcome after knowing that it occurred.",
                "It is more common in older adults than in younger adults."
            ],
            correctAnswer: "c",
            feedback: "Hindsight bias er tendensen til at tro, at man vidste udfaldet på forhånd, når det først er sket."
        },
        {
            chapter: "Chapter 2",
            question: "3. The primary goal of social psychology is to find associations between variables. This is achieved by which of the following research methods?",
            options: [
                "The observational method.",
                "The correlational method.",
                "The experimental method.",
                "All of the above."
            ],
            correctAnswer: "b",
            feedback: "Korrelation handler om at finde sammenhænge mellem variabler, ikke nødvendigvis kausalitet."
        },
        {
            chapter: "Chapter 2",
            question: "4. Which of the following is the main difference between observational and correlational method?",
            options: [
                "Observational method cannot explain why a phenomenon occurred, whereas correlational method is able to explain that.",
                "Observational method can be conducted in the lab, whereas correlational method has to be conducted in the field.",
                "Correlational method can show cause-and-effect relationship, whereas observational method cannot.",
                "None of the above."
            ],
            correctAnswer: "a",
            feedback: "Observationsmetoden beskriver 'hvad', mens korrelationsmetoden kan forudsige 'hvorfor' der er en sammenhæng."
        },
        {
            chapter: "Chapter 2",
            question: "5. Why do most social psychologists prefer to use experimental methods over correlational ones?",
            options: [
                "Because it is more affordable to conduct experiments.",
                "Because it is easier to recruit participants for experiments.",
                "Because it allows researchers to conclude cause-and-effect relationship.",
                "Because it can be used to study many variables at once."
            ],
            correctAnswer: "c",
            feedback: "Kun eksperimentel metode kan fastslå årsag-og-virkning (kausalitet)."
        },
        {
            chapter: "Chapter 2",
            question: "6. Which of the following statements about internal validity is FALSE?",
            options: [
                "It is the degree to which a study can be generalized across situations.",
                "It is the degree to which a study can be generalized across people.",
                "It is about ensuring that the independent variable is the only one that influences the dependent variable.",
                "Both (a) and (b)."
            ],
            correctAnswer: "d",
            feedback: "Ekstern validitet handler om generalisering på tværs af situationer og mennesker."
        },
        {
            chapter: "Chapter 2",
            question: "7. How do social psychologists ensure internal validity in their experiments?",
            options: [
                "By having more variables in their studies.",
                "By conducting studies in natural settings.",
                "By assigning participants to different conditions randomly.",
                "All of the above."
            ],
            correctAnswer: "c",
            feedback: "Tilfældig tildeling (random assignment) sikrer, at grupper er sammenlignelige fra start."
        },
        {
            chapter: "Chapter 2",
            question: "8. Which of the following is the main advantage of conducting field experiments?",
            options: [
                "It has higher internal validity than lab experiments.",
                "It is easier to control confounding variables.",
                "It has higher external validity than lab experiments.",
                "It is easier to conduct field experiments."
            ],
            correctAnswer: "c",
            feedback: "Feltstudier har højere ekstern validitet, da de foregår i naturlige omgivelser."
        },
        {
            chapter: "Chapter 2",
            question: "9. A researcher finds that the probability level (p-value) of her study is 0.08. What can she conclude about her study?",
            options: [
                "Her study is statistically significant.",
                "The findings of her study are likely due to chance.",
                "The findings of her study are not likely due to chance.",
                "Her study has high external validity."
            ],
            correctAnswer: "b",
            feedback: "En p-værdi over 0.05 anses for at være statistisk insignifikant, hvilket betyder at resultatet er mere tilfældigt."
        },
        {
            chapter: "Chapter 2",
            question: "10. Which of the following is the main difference between basic and applied research?",
            options: [
                "Basic research is less expensive to conduct than applied research.",
                "Basic research is designed to solve a social problem, whereas applied research is designed to find answers out of intellectual curiosity.",
                "Basic research is designed to find answers out of intellectual curiosity, whereas applied research is designed to solve a social problem.",
                "None of the above."
            ],
            correctAnswer: "c",
            feedback: "Grundforskning er drevet af nysgerrighed, mens anvendt forskning er målrettet mod at løse et specifikt problem."
        },
        // Her slutter kapitel 2
    ];


    // --- DOM Referencer ---
    const flashcardSection = document.getElementById('flashcard-section');
    const quizSection = document.getElementById('quiz-section');
    const showFlashcardsBtn = document.getElementById('show-flashcards-btn');
    const showQuizBtn = document.getElementById('show-quiz-btn');
    
    // Flashcard
    const categorySelect = document.getElementById('category-select');
    const prevCardBtn = document.getElementById('prev-card-btn');
    const nextCardBtn = document.getElementById('next-card-btn');
    const flashcardContainer = document.getElementById('flashcard-container');

    // Quiz Mode Selection
    const quizModeSelectContainer = document.getElementById('quiz-mode-select-container');
    const allQuestionsModeContainer = document.getElementById('all-questions-mode-container');
    const oneByOneModeContainer = document.getElementById('one-by-one-mode-container');
    const showAllQuestionsModeBtn = document.getElementById('show-all-questions-mode-btn');
    const showOneByOneModeBtn = document.getElementById('show-one-by-one-mode-btn');
    const quizChapterSelectContainer = document.getElementById('quiz-chapter-select-container');
    const quizChapterSelect = document.getElementById('quiz-chapter-select');

    // All Questions Quiz
    const startAllQuizBtn = document.getElementById('start-all-quiz-btn');
    const allQuestionsQuizForm = document.getElementById('all-questions-quiz-form');
    const allQuestionsContainer = document.getElementById('all-questions-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const restartAllQuizBtn = document.getElementById('restart-all-quiz-btn');
    const allQuestionsResults = document.getElementById('all-questions-results');

    // One Question at a Time Quiz
    const startOneByOneQuizBtn = document.getElementById('start-one-by-one-quiz-btn');
    const singleQuestionDisplay = document.getElementById('single-question-display');
    const singleQuestionText = document.getElementById('single-question-text');
    const singleOptionsContainer = document.getElementById('single-options-container');
    const singleQuizProgressText = document.getElementById('single-quiz-progress');
    const checkSingleAnswerBtn = document.getElementById('check-single-answer-btn');
    const nextSingleQuestionBtn = document.getElementById('next-single-question-btn');
    const restartSingleQuizBtn = document.getElementById('restart-single-quiz-btn');
    const notSureBtn = document.createElement('button'); // Created a new button for "Not sure"

    // New variables for tracking stats
    let correctCount = 0;
    let incorrectCount = 0;
    let notSureCount = 0;

    const correctCountDisplay = document.getElementById('correct-count');
    const incorrectCountDisplay = document.getElementById('incorrect-count');
    const notSureCountDisplay = document.getElementById('not-sure-count');
    const statsContainer = document.getElementById('quiz-stats-container');
    const singleQuizResults = document.getElementById('single-quiz-results');

    // --- STATE Variabler ---
    let currentCategory = "Keltner 2006 - Evolution & Følelser";
    let currentCardIndex = 0;
    let quizQuestionsFiltered = [];
    let currentQuestionIndex = 0;
    let quizActive = false;


    // --- FUNKTIONER ---
    
    // Generelle UI-funktioner
    function showMainSection(sectionId) {
        flashcardSection.classList.add('hidden');
        quizSection.classList.add('hidden');
        document.getElementById(sectionId).classList.remove('hidden');
        if (sectionId === 'quiz-section') {
            quizModeSelectContainer.classList.remove('hidden');
            allQuestionsModeContainer.classList.add('hidden');
            oneByOneModeContainer.classList.add('hidden');
            quizChapterSelectContainer.classList.add('hidden');
        }
    }

    function showQuizMode(mode) {
        quizModeSelectContainer.classList.add('hidden');
        quizChapterSelectContainer.classList.remove('hidden');
        if (mode === 'all_questions') {
            allQuestionsModeContainer.classList.remove('hidden');
            oneByOneModeContainer.classList.add('hidden');
            startAllQuizBtn.classList.remove('hidden');
            allQuestionsQuizForm.classList.add('hidden');
            allQuestionsResults.classList.add('hidden');
            statsContainer.classList.add('hidden');
        } else {
            oneByOneModeContainer.classList.remove('hidden');
            allQuestionsModeContainer.classList.add('hidden');
            startOneByOneQuizBtn.classList.remove('hidden');
            singleQuestionDisplay.classList.add('hidden');
            singleQuizResults.classList.add('hidden');
            statsContainer.classList.add('hidden');
        }
    }
    
    // Flashcard Funktioner
    function populateCategorySelect() {
        for (const category in allFlashcardCategories) {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        }
        renderFlashcard(currentCardIndex);
    }

    function renderFlashcard(index) {
        if (Object.keys(allFlashcardCategories).length === 0) return;

        const cards = allFlashcardCategories[currentCategory];
        if (index < 0 || index >= cards.length) {
            alert("Ingen flere flashcards i denne kategori.");
            return;
        }

        const cardData = cards[index];
        const cardHtml = `
            <div class="card absolute w-full h-full cursor-pointer transition-transform duration-500 ease-in-out">
                <div class="card-inner w-full h-full relative">
                    <div class="card-face card-front w-full h-full flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-white border border-slate-200">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">${cardData.front}</h3>
                    </div>
                    <div class="card-face card-back w-full h-full flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-indigo-600 text-white">
                        <p class="text-xl leading-relaxed">${cardData.back}</p>
                    </div>
                </div>
            </div>
        `;
        flashcardContainer.innerHTML = cardHtml;
        flashcardContainer.classList.remove('hidden');
        currentCardIndex = index;
        
        const card = flashcardContainer.querySelector('.card');
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    }

    // Quiz Funktioner
    function populateQuizChapterSelect() {
        // Assuming quizQuestions is an array of objects, each with a 'chapter' property.
        // We need to extract unique chapter names.
        const chapters = [...new Set(quizQuestions.map(q => q.chapter))];
        chapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter;
            option.textContent = chapter;
            quizChapterSelect.appendChild(option);
        });
        filterQuizQuestions();
    }

    function filterQuizQuestions() {
        const selectedChapter = quizChapterSelect.value;
        quizQuestionsFiltered = quizQuestions.filter(q => q.chapter === selectedChapter);
        // Reset quiz when a new chapter is selected
        quizActive = false;
        allQuestionsQuizForm.classList.add('hidden');
        allQuestionsResults.classList.add('hidden');
        startAllQuizBtn.classList.remove('hidden');
        singleQuestionDisplay.classList.add('hidden');
        singleQuizResults.classList.add('hidden');
        startOneByOneQuizBtn.classList.remove('hidden');
        statsContainer.classList.add('hidden');
    }

    // All Questions Quiz Funktioner
    function renderQuizAllQuestions() {
        startAllQuizBtn.classList.add('hidden');
        allQuestionsQuizForm.classList.remove('hidden');
        quizActive = true;
        allQuestionsContainer.innerHTML = '';
        quizQuestionsFiltered.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('p-6', 'rounded-xl', 'bg-white', 'shadow-md');
            questionElement.innerHTML = `
                <p class="font-semibold text-lg mb-4 text-slate-800">${index + 1}. ${question.question}</p>
                <div class="space-y-2">
                    ${question.options.map((option, optionIndex) => `
                        <div>
                            <input type="radio" id="q${index}-${String.fromCharCode(97 + optionIndex)}" name="q${index}" value="${String.fromCharCode(97 + optionIndex)}" class="form-radio text-indigo-600 focus:ring-indigo-500">
                            <label for="q${index}-${String.fromCharCode(97 + optionIndex)}" class="ml-2 text-slate-700">${option}</label>
                        </div>
                    `).join('')}
                </div>
            `;
            allQuestionsContainer.appendChild(questionElement);
        });
    }

    function submitAllQuestionsQuiz(event) {
        event.preventDefault();
        if (!quizActive) return;

        let correctCount = 0;
        let totalQuestions = quizQuestionsFiltered.length;
        
        quizQuestionsFiltered.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption && selectedOption.value === question.correctAnswer) {
                correctCount++;
            }
        });
        
        const score = (correctCount / totalQuestions) * 100;
        allQuestionsResults.textContent = `Du fik ${correctCount} ud af ${totalQuestions} spørgsmål rigtigt. Din score er ${score.toFixed(0)}%.`;
        allQuestionsResults.classList.remove('hidden');
        
        submitQuizBtn.classList.add('hidden');
        restartAllQuizBtn.classList.remove('hidden');
        quizActive = false;
    }

    function resetAllQuestionsQuiz() {
        allQuestionsQuizForm.classList.add('hidden');
        allQuestionsResults.classList.add('hidden');
        startAllQuizBtn.classList.remove('hidden');
        submitQuizBtn.classList.remove('hidden');
        restartAllQuizBtn.classList.add('hidden');
    }
    
    // One Question at a Time Quiz Funktioner
    function updateStatsDisplay() {
        correctCountDisplay.textContent = correctCount;
        incorrectCountDisplay.textContent = incorrectCount;
        notSureCountDisplay.textContent = notSureCount;
        statsContainer.classList.remove('hidden');
    }

    function startOneByOneQuiz() {
        // Reset stats for a new quiz
        correctCount = 0;
        incorrectCount = 0;
        notSureCount = 0;
        updateStatsDisplay();

        currentQuestionIndex = 0;
        startOneByOneQuizBtn.classList.add('hidden');
        singleQuestionDisplay.classList.remove('hidden');
        singleQuizResults.classList.add('hidden');
        
        checkSingleAnswerBtn.disabled = true;

        // Append the "Not sure" button
        checkSingleAnswerBtn.parentNode.insertBefore(notSureBtn, checkSingleAnswerBtn.nextSibling);

        checkSingleAnswerBtn.classList.remove('hidden');
        nextSingleQuestionBtn.classList.add('hidden');
        restartSingleQuizBtn.classList.add('hidden');
        
        notSureBtn.classList.remove('hidden');
        
        renderSingleQuestion(currentQuestionIndex);
    }
    
    function renderSingleQuestion(questionIndex) {
        if (questionIndex >= quizQuestionsFiltered.length) {
            // Quiz is over
            showSingleQuizResults();
            return;
        }

        const question = quizQuestionsFiltered[questionIndex];
        singleQuestionText.textContent = question.question;
        singleOptionsContainer.innerHTML = '';
        
        // Render options for the single question
        question.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            optionLabel.classList.add('option-label', 'flex', 'items-center', 'cursor-pointer');
            optionLabel.innerHTML = `
                <input type="radio" name="single-option" value="${String.fromCharCode(97 + optionIndex)}" class="option-input">
                <span class="ml-4">${option}</span>
            `;
            singleOptionsContainer.appendChild(optionLabel);
        });

        singleQuizProgressText.textContent = `Spørgsmål ${questionIndex + 1} / ${quizQuestionsFiltered.length}`;
        checkSingleAnswerBtn.disabled = true; // Disable until an option is selected

        // Event listener for radio buttons to enable the check button
        singleOptionsContainer.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', () => {
                checkSingleAnswerBtn.disabled = false;
            });
        });
    }

    function checkSingleAnswer() {
        const selectedAnswer = document.querySelector('input[name="single-option"]:checked');
        if (!selectedAnswer) {
            alert('Vælg venligst et svar.');
            return;
        }

        const selectedValue = selectedAnswer.value;
        const currentQuestion = quizQuestionsFiltered[currentQuestionIndex];
        const isCorrect = (selectedValue === currentQuestion.correctAnswer);

        // Update stats based on the answer
        if (isCorrect) {
            correctCount++;
            alert("Korrekt!");
        } else {
            incorrectCount++;
            alert(`Forkert. Det korrekte svar er: ${currentQuestion.options[currentQuestion.correctAnswer.charCodeAt(0) - 'a'.charCodeAt(0)]}.`);
        }

        // Hide Check and show Next
        checkSingleAnswerBtn.classList.add('hidden');
        notSureBtn.classList.add('hidden');
        nextSingleQuestionBtn.classList.remove('hidden');
        updateStatsDisplay(); // Update display after counting
    }

    function handleNotSure() {
        notSureCount++;
        updateStatsDisplay();
        // Then just move to the next question without checking
        nextSingleQuestion();
    }

    function nextSingleQuestion() {
        currentQuestionIndex++;
        renderSingleQuestion(currentQuestionIndex);

        // Hide Next and show Check
        nextSingleQuestionBtn.classList.add('hidden');
        if (currentQuestionIndex < quizQuestionsFiltered.length) {
            checkSingleAnswerBtn.classList.remove('hidden');
            notSureBtn.classList.remove('hidden');
        }
    }

    function showSingleQuizResults() {
        singleQuestionDisplay.classList.add('hidden');
        nextSingleQuestionBtn.classList.add('hidden');
        checkSingleAnswerBtn.classList.add('hidden');
        notSureBtn.classList.add('hidden');
        
        const totalQuestions = quizQuestionsFiltered.length;
        const score = (correctCount / totalQuestions) * 100;

        singleQuizResults.textContent = `Quiz færdig! Du fik ${correctCount} rigtige, ${incorrectCount} forkerte, og ${notSureCount} usikre. Din score er ${score.toFixed(0)}%.`;
        singleQuizResults.classList.remove('hidden');
        
        restartSingleQuizBtn.classList.remove('hidden');
    }
    
    function resetOneByOneQuiz() {
        // Reset stats display
        correctCount = 0;
        incorrectCount = 0;
        notSureCount = 0;
        updateStatsDisplay();

        // Reset UI elements
        singleQuizResults.classList.add('hidden');
        startOneByOneQuizBtn.classList.remove('hidden');
        restartSingleQuizBtn.classList.add('hidden');
        singleQuestionDisplay.classList.add('hidden');
        statsContainer.classList.add('hidden');
    }


    // --- EVENT LISTENERS ---
    
    // Main Navigation
    showFlashcardsBtn.addEventListener('click', () => showMainSection('flashcard-section'));
    showQuizBtn.addEventListener('click', () => showMainSection('quiz-section'));

    // Flashcard Navigation
    categorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        currentCardIndex = 0;
        renderFlashcard(currentCardIndex);
    });

    prevCardBtn.addEventListener('click', () => {
        const cards = allFlashcardCategories[currentCategory];
        if (currentCardIndex > 0) {
            renderFlashcard(currentCardIndex - 1);
        } else {
            alert("Du er ved det første flashcard.");
        }
    });

    nextCardBtn.addEventListener('click', () => {
        const cards = allFlashcardCategories[currentCategory];
        if (currentCardIndex < cards.length - 1) {
            renderFlashcard(currentCardIndex + 1);
        } else {
            alert("Du er ved det sidste flashcard.");
        }
    });
    
    // Quiz Mode Navigation
    showAllQuestionsModeBtn.addEventListener('click', () => showQuizMode('all_questions'));
    showOneByOneModeBtn.addEventListener('click', () => showQuizMode('one_by_one'));
    
    // Chapter Selection (applies to both quiz modes)
    quizChapterSelect.addEventListener('change', filterQuizQuestions); // Filter questions when chapter selection changes

    // All Questions Mode Specific
    startAllQuizBtn.addEventListener('click', renderQuizAllQuestions);
    submitQuizBtn.addEventListener('click', submitAllQuestionsQuiz);
    restartAllQuizBtn.addEventListener('click', resetAllQuestionsQuiz);
    
    // One Question at a Time Mode Specific
    startOneByOneQuizBtn.addEventListener('click', startOneByOneQuiz);
    checkSingleAnswerBtn.addEventListener('click', checkSingleAnswer);
    nextSingleQuestionBtn.addEventListener('click', nextSingleQuestion);
    restartSingleQuizBtn.addEventListener('click', resetOneByOneQuiz);
    notSureBtn.addEventListener('click', handleNotSure);

    // Initial styling and setup for the new button
    notSureBtn.textContent = 'Ikke sikker';
    notSureBtn.classList.add('submit-btn', 'text-lg', 'ml-6', 'bg-yellow-500', 'hover:bg-yellow-600', 'hidden');

    // --- Initialisation ---
    populateCategorySelect(); // Populate flashcard categories
    populateQuizChapterSelect();
    showMainSection('flashcard-section'); // Show flashcards by default
    
    console.log("App initialization complete.");
}); // End of DOMContentLoaded listener
