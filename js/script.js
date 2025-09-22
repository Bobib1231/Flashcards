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
            { front: "Evolutionær psykologi (Præmisser)", back: "Evolutionær psykologi bygger på følgende præmisser: \n1. **Funktionalisme:** Vi kan forstå en psykologisk mekanisme, når vi forstår dens evolutionære funktion. \n2. **Domænespecifikke mekanismer:** Menneskesindet består af mange specialiserede mekanismer. \n3. **Testbarhed/Falsificerbarhed:**" },
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
        ],
        "Høgh Olesen 2020": [
            { front: "Nøglestimuli (Key stimuli)", back: "En ekstra kraftfuld form for stimuli, som man er forprogrammeret til at give ekstra opmærksomhed. Den fungerer som en 'alfa-stimuli', der stiller sig øverst i hierarkiet." },
            { front: "Power objekt (fetish)", back: "Et emne eller en genstand, der indeholder en nøglestimuli." },
            { front: "Æstetik", back: "De ting, der appellerer til vores sanser og følelser på grund af deres skønhed eller harmoni. Æstetik har været en god vejleder for 'fitness' gennem evolution." },
            { front: "Menneskelig skønhed", back: "Hvad mennesker finder smukt, er bundet i vores natur og er konsistent på tværs af kulturer. Det kan indikere genetisk kvalitet og sundhed." },
            { front: "Timeglasfigur", back: "En talje-til-hofte-ratio på 0,7, som er evolutionært attraktiv, da den signalerer høj fertilitet og modstandsdygtighed mod sygdomme." },
            { front: "Superstimuli", back: "En overdrivelse af en nøglestimuli, der gør den endnu mere kraftfuld og for nogle uimodståelig." },
            { front: "Farven rød som nøglestimuli", back: "Forårsager fysiologisk aktivering (højere puls/blodtryk) og kan virke seksuelt tiltrækkende. Evolutionært koblet til signaler om parringsparathed." },
            { front: "Skinnende materialer", back: "Mennesker er tiltrukket af skinnende objekter, da de historisk har indikeret værdifulde ressourcer, især vand." },
            { front: "Afsky og vammelse", back: "Det er et overlevelsesværktøj og en medfødt, essentiel reaktion på frastødende stimuli. Hjernens insula-område er ansvarligt for afsky." },
            { front: "Forsigtighedssystemet", back: "En medfødt frygt, hvor vi er genetisk disponerede for at frygte visse ting, der historisk set var farlige, som slanger og edderkopper." },
            { front: "Alpha temaer i fiktion", back: "De universelle hovedfortællinger, som der ikke findes uendelige mængder af. Eksempler inkluderer at overvinde monsteret, at søge, komedie og tragedie." },
            { front: "Neofile dyr", back: "En betegnelse for, at mennesker er nysgerrige og søger nye stimuli." },
            { front: "Gøre specielt (Making special)", back: "Vores æstetiske sans kan ikke reduceres til kun nøglestimuli. Kulturel indflydelse, socialt pres, tradition og læring spiller også en stor rolle." },
        ],
        "Kapitel 16, Larsen ": [
            { front: "Effektstørrelse (d-statistik)", back: "En måling for at bestemme, hvor store forskellene er. D-score på 0,20 er en lille forskel, 0,50 er medium, og 0,80 er stor. Et negativt tal betyder, at kvinder scorer højere, og et positivt tal betyder, at mænd scorer højere[cite: 3]." },
            { front: "Minimalist", back: "Udgangspunktet er, at forskellene mellem kønnene er minimale og har lille signifikans i hverdagen, selvom der er store overlap[cite: 3]." },
            { front: "Maksimalist", back: "Udgangspunktet er, at forskellene mellem kønnene er på niveau med andre psykologiske forskelle og kan have stor betydning over et helt liv, selvom forskellene i sig selv er små[cite: 3]." },
            { front: "Socialiserings teori", back: "Teorien, der siger, at kønsstereotyper, som gives videre fra samfundet, forældre, venner osv., er årsagen til langt de fleste kønsforskelle[cite: 3]." },
            { front: "Social lærings teori", back: "Drenge og piger lærer at påtage sig deres kønsrolle ved at observere og kopiere adfærd fra deres forældre eller andre rollemodeller[cite: 3]." },
            { front: "Congenital adrenal hyperplasia (CAH)", back: "En sygdom, hvor piger får mere testosteron allerede som spæd. [cite_start]Dette kan resultere i, at pigerne bliver mere tiltrukket af drenge-lignende interesser[cite: 3]." },
            { front: "Androgener", back: "De mandlige hormoner, som testosteron. [cite_start]Mænd har efter puberteten mere end 10 gange så meget testosteron som kvinder[cite: 3]. [cite_start]Mere testosteron giver mere aggression og dominans[cite: 3]." },
            { front: "Inhibitory control", back: "Evnen til at kontrollere upassende reaktioner eller adfærd. [cite_start]Kvinder har en gennemsnitlig d-værdi på -0,41, hvilket indikerer, at kvinder generelt har bedre 'inhibitory control' end mænd[cite: 3]." },
            { front: "Perceptual sensitivity", back: "Evnen til at opfange subtile stimuli fra miljøet. [cite_start]Kvinder har en d-værdi på -0,38[cite: 3]." },
            { front: "Surgency (energisk fremkomst)", back: "En blanding af opsøgende adfærd, høj aktivitet og impulsivitet. [cite_start]Mænd har en d-værdi på 0,38[cite: 3]." },
            { front: "Effektiv polygami", back: "En forskel i antallet af afkom et køn kan få inden for en art, primært hanner. [cite_start]Jo større forskel, desto mere konkurrence og større risikoer tages for at få afkom[cite: 19, 21, 22]." },
            { front: "Kønsdimorfisme", back: "Biologisk størrelsesforskel mellem kønnene. [cite_start]Mennesker har en 12% forskel, hvor elefantsæler har en 400% forskel[cite: 23, 24, 25]." },
            { front: "People-Things dimension", back: "Angiver, om man er mest interesseret i objekter eller mennesker. [cite_start]Kvinder er mere tilbøjelige til at være 'people-oriented', mens mænd er mere 'things-oriented'[cite: 44, 47]." },
            { front: "Jalousi", back: "Mænd og kvinder udtrykker jalousi forskelligt. [cite_start]Mænd er mere jaloux over seksuel utroskab, da deres største risiko er at en partner bærer en andens barn[cite: 52]. [cite_start]Kvinder er mere jaloux over følelsesmæssig utroskab, da deres største risiko er at manden forlader hende og hendes børn[cite: 53]." },
            { front: "Depression", back: "Der er ingen forskel på depression mellem kønnene i barndommen[cite: 56]. [cite_start]I ungdommen oplever piger mellem 1,5 og 3 gange så mange tilfælde af depression[cite: 58]." },
            { front: "Ruminating (negativ grubleri)", back: "Vedvarende fokus på symptomer på ildebefindende. [cite_start]En teori mener, at det er en af grundene til kønsforskellene i depression, da kvinder gør dette mere[cite: 3]." },
            { front: "Androgyni", back: "Tanken om at kunne bevæge sig forbi opsatte kønsrammer og -roller. [cite_start]Studier viser, at mænd, der er mere maskuline og i forhold med kvinder, der er mere feminine, har et længere forhold[cite: 3]." },
            { front: "Instrumentality", back: "Et personlighedstræk, der handler om interesse for objekter, at få gjort ting effektivt og være uafhængig. [cite_start]Dette er typisk associeret med maskulinitet[cite: 3]." },
            { front: "Expressiveness", back: "Et personlighedstræk, der handler om at kunne vise følelser. [cite_start]Dette er typisk associeret med femininitet[cite: 3]." }
        ],
        "Kenrick 2012 - Økonomi og Evolutionær Psykologi": [
            { front: "Homo economicus", back: "Det traditionelle billede af mennesket inden for økonomi. Ifølge denne model er mennesket fuldt rationelt og motiveres udelukkende af at maksimere 'nyttevirkning'." },
            { front: "Adferdsøkonomi (Behavioral economics)", back: "Et felt, der kombinerer psykologi og økonomi for at undersøge de psykologiske faktorer, der påvirker økonomiske beslutninger og adfærd." },
            { front: "Heuristikker", back: "Mentale genveje eller 'tommelfingerregler', som hjernen bruger til hurtigt at træffe beslutninger. De er effektive, men ikke altid perfekte og kan føre til biases." },
            { front: "Deep Rationality (Dybe rationalitet)", back: "Konceptet, der siger, at menneskelig adfærd, som ofte anses for at være irrationel, i virkeligheden er en evolutionært betinget og adaptiv form for rationalitet. Adfærd, der maksimerer vores 'inklusiv fitness', selvom det ikke altid giver økonomisk mening." },
            { front: "Conspicuous consumption (Iøjnefaldende forbrug)", back: "Tendensen til at købe dyre ting for at signalere høj status og rigdom. Dette er et eksempel på adfærd, der ifølge teksten er drevet af evolutionære motiver, såsom at tiltrække en partner." },
            { front: "Loss Aversion (Tapsaversion)", back: "Den psykologiske tendens, hvor en person oplever tab som mere negativt og smertefuldt, end en tilsvarende gevinst føles positiv. Dette er en bias, der modarbejder 'homo economicus'-modellen." },
            { front: "LHT (Life History Theory)", back: "En evolutionær teori, der forklarer, hvordan et individs livsforløb er formet af de ressourcer, der er tilgængelige. Den skelner mellem 'somatic effort' (overlevelse) og 'reproductive effort' (at skabe afkom)." },
            { front: "Somatic effort", back: "Handlinger og adfærd, der handler om at opbygge og opretholde kroppen, dvs. overlevelse. Dette er et af de to centrale 'livshistorie' begreber i teksten." },
            { front: "Reproductive effort", back: "Handlinger og adfærd, der handler om at skabe afkom. Dette er det andet centrale 'livshistorie' begreb, der driver mange af vores motivationer ifølge evolutionær teori." },
            { front: "Fundamentale motiver (Subselver)", back: "En række sammenhængende delprogrammer, der er designet til at løse forskellige evolutionære udfordringer. De inkluderer selvbeskyttelse, sygdomsundgåelse, tilhørsforhold, status, partnervalg og parringsbevaring." }
        ],
        "Haidt - Moralpsykologi": [
            { front: "Moralsk intuition", back: "En hurtig, automatisk følelse af, at noget er godt eller dårligt, uden at vi bevidst ved hvorfor." },
            { front: "Moralsk ræsonnement", back: "En langsom, bevidst proces, hvor vi overvejer information for at nå frem til en moralsk dom." },
            { front: "Post hoc ræsonnement", back: "Processen, hvor vi finder på argumenter for at retfærdiggøre en moralsk dom, som vi allerede har truffet intuitivt." },
            { front: "Det social-intuitionistiske model", back: "Foreslår, at moralsk ræsonnement primært er et efterfølgende argument, og at moralsk forandring primært sker gennem social påvirkning." },
            { front: "Princip 1: Intuitiv primat", back: "Moralske intuitioner opstår før moralsk ræsonnement. Følelser er det første skridt i en moralsk dom." },
            { front: "Princip 2: Moralsk tænkning er til social brug", back: "Vores moralske ræsonnement fungerer mere som en advokat for at beskytte vores omdømme end som en dommer, der søger sandheden." },
            { front: "Princip 3: Moral binder og bygger", back: "Moral handler ikke kun om at bedømme individer, men også om at skabe og vedligeholde stærke og samlede grupper." },
            { front: "Princip 4: Moral handler om mere end skade og retfærdighed", back: "Moralske domme er også baseret på gruppeorienterede fundamenter som loyalitet, autoritet og renhed, ud over de traditionelle begreber om skade og retfærdighed." },
            { front: "Moral Foundations Theory (Moralens grundlagsteori)", back: "Teorien identificerer fem grundlæggende moralske fundamenter: skade/omsorg, retfærdighed/gensidighed, loyalitet/ingroup, autoritet/respekt og renhed/hellighed." },
            { front: "Moralsk stumhed ('Moral dumbfounding')", back: "Et fænomen, hvor folk ikke kan forklare, hvorfor noget er moralsk forkert, selvom de intuitivt føler, at det er det." },
            { front: "Homo moralis", back: "Mennesket, der har sociale motivationer ud over egeninteresser." }
        ],
        "Bateson 2006 - Forskning i samarbejde": [
            { front: "Bateson - Forsøgets hypotese", back: "Mennesker vil donere flere penge, når der er et billede af øjne i deres synsfelt." },
            { front: "Bateson - Forsøgets opsætning", back: "Deltagerne skulle betale for drikkevarer i en ærlighedsboks, hvor et billede af enten øjne eller blomster blev skiftet ud ugentligt." },
            { front: "Bateson - Hovedresultat", back: "Folk betalte næsten tre gange så meget for deres drikkevarer, når billeder af øjne var til stede, sammenlignet med billeder af blomster." },
            { front: "Bateson - Årsagen til resultatet", back: "Billederne af øjne motiverede en ubevidst følelse af at blive overvåget, hvilket øgede deltageres samarbejdsvillige adfærd." },
            { front: "Bateson - Teori om ry (reputation)", back: "Mennesker er stærkt påvirkede af adfærd, der kan påvirke deres ry. Dette motiverer dem til at være gavmilde, selv når der ikke er en direkte gevinst." },
            { front: "Bateson - Indirekte gengældelse", back: "Selv når man ikke hjælper en person direkte, kan et positivt ry, opbygget ved at være gavmild, føre til gensidighed fra andre i fremtiden." },
            { front: "Bateson - Anonymitet i forsøget", back: "Selvom deltagerne troede, de var anonyme, var de ubevidst modtagelige for de subtile signaler fra øjnene." }
        ],
        "Kapitel 17, Larsen - Kultur": [
            { front: "WEIRD-folk", back: "Står for Western, Educated, Industrialized, Rich and Democratic. Denne gruppe udgør kun 12% af verdens befolkning, men 96% af psykologiske studier er baseret på dem." },
            { front: "Kulturpsykologiens 3 mål", back: "1. At finde principperne der ligger til for de kulturelle forskelle. 2. Finde ud af hvordan menneskelig psykologi former menneskelig kultur. 3. Finde ud af hvordan menneskelig kultur former menneskelig psykologi." },
            { front: "Evoked culture", back: "Kultur der opstår som et adaptivt svar på specifikke miljømæssige udfordringer." },
            { front: "Transmitted culture", back: "En idé der opstår hos et individ og spredes til en hel gruppe, hvor den fæstner sig som kultur." },
            { front: "Cultural universals", back: "De kulturelle fænomener, der er de samme på tværs af kulturer og derfor anses for at være en del af den menneskelige natur." },
            { front: "Høj-varians betingelser", back: "En tilstand, hvor ressourcer er svære at finde, hvilket fremmer samarbejde og deling." },
            { front: "Lav-varians betingelser", back: "En tilstand, hvor ressourcer er stabile. Dette fremmer en kultur, hvor man ønsker at beholde frugten af sin egen flid." },                   { front: "Egalitarianism", back: "En tro på at alle mennesker er lige værdifulde og bør have lige rettigheder og muligheder. Tæt forbundet med høj-varians betingelser." },
            { front: "Tidlig seksuel erfaring", back: "Børn fra ustabile hjem har tendens til at få tidligere seksuel debut og indgå i mindre stabile forhold." },
            { front: "Culture of honor", back: "En kultur, hvor man reagerer aggressivt på provokation for at opretholde et ry, især i samfund hvor levebrød (f.eks. kvæg) kan stjæles let." },
            { front: "Independence (Uafhængighed)", back: "Et selvkoncept der fokuserer på at adskille sig fra andre og definere sig ud fra individuelle, abstrakte egenskaber (fx intelligent). Typisk for vestlige kulturer." },
            { front: "Interdependence (Indbyrdes afhængighed)", back: "Et selvkoncept der fokuserer på ens relationer til gruppen og ens sociale rolle (fx medlem af et team). Typisk for asiatiske kulturer." },
            { front: "Selvophøjelse", back: "Tendensen til at se sig selv som bedre end gennemsnittet. Det er universelt, men forekommer oftere i individualistiske kulturer som USA sammenlignet med Danmark og Japan." },
            { front: "Holistisk tænkemåde", back: "En tænkemåde, der fokuserer på situationen og konteksten, snarere end på objektets kendetegn." },
            { front: "Analytisk tænkemåde", back: "En tænkemåde, der fokuserer på objektets kendetegn og adskiller det fra konteksten." },
            { front: "Acculturation (Akkulturation)", back: "Processen hvor individer, der flytter til et nyt land, gradvist tager den nye kulturs selvkoncept til sig." },
            { front: "Impression management", back: "Det at kontrollere det indtryk, man giver andre." },
            { front: "General evaluative bias", back: "En tendens til at se sig selv og andre i et bedre lys." },
            { front: "Self-focused evaluative bias", back: "En tendens til kun at se sig selv i et bedre lys." },
            { front: "Målingsinvarians", back: "En forudsætning for at kunne sammenligne resultater på tværs af kulturer, da det sikrer, at de samme begreber måles på samme måde." },
            { front: "Lexical hypothesis (leksikalsk hypotese)", back: "Antagelsen om at de vigtigste personlighedsforskelle blandt mennesker er indlejret i sproget. Teorien bruges til at identificere centrale personlighedstræk, som for eksempel i udviklingen af Big Five-modellen." }
      ],
        "Høgh Olesen 2014 - Stimulations- og strukturbehov": [
            { front: "Høgh Olesens model", back: "En model, der forbinder behovet for **stimulation** med behovet for **struktur** for at forstå menneskelig adfærd." },
            { front: "Sensorisk deprivation", back: "En mangel på stimuli, der kan medføre koncentrationsbesvær, motorisk uro, emotionelle udsving og i alvorlige tilfælde hallucinationer." },
            { front: "Konsekvens ved for lav stimulation", back: "Man keder sig, bliver passiv og har svært ved at finde på ting at lave." },
            { front: "Konsekvens ved for høj stimulation", back: "Verden opleves som uoverskuelig, hvilket kan føre til stress, angst, tunnelsyn og panik." },
            { front: "Optimal Stimulation Needs (OSN)", back: "Det optimale stimulationsniveau, som et individ trives bedst i. Forskelle i dette niveau er stort set genetisk bestemt." },
            { front: "Arousal tonus", back: "Et individs indre beredskab og opmærksomhedsniveau, som forklarer, hvorfor mennesker trives ved forskellige stimulationsniveauer." },
            { front: "De fire delfaktorer i stimulationssøgning", back: "1. **Thrill and adventure seeking:** Fysisk spænding. 2. **Experience seeking:** Nye sanseindtryk. 3. **Disinhibition:** Behov for frihed. 4. **Boredom susceptibility:** Følsomhed over for kedsomhed." },
            { front: "Hvilke faktorer påvirker stimulationsbehovet?", back: "Mænd scorer generelt højere end kvinder (dog ikke på 'experience seeking'), og behovet topper i ungdommen og aftager med alderen." },
            { front: "Flertydighedstolerance", back: "Et individs tolerance over for ustrukturerede og flertydige situationer." },
            { front: "Apollinsk personlighedsposition", back: "En personlighedstype der søger **struktur** frem for stimulation. Kendetegnes ved pligtopfyldenhed, systematik og ordenssans." },
            { front: "Prometisk personlighedsposition", back: "En personlighedstype der søger **stimulation** frem for struktur. Kendetegnes ved at være kreative, risikovillige og uden for sociale rammer." },
            { front: "Dionysisk position", back: "Den ekstreme form for den prometiske position, hvor stimulussøgning er uden grænser og kan føre til maniske eller psykopatiske træk." },
            { front: "Hermetisk position", back: "Den ekstreme form for den apollinske position, hvor forsigtighed fører til angst og lukkethed. Ses ofte ved tvangslidelser (OCD)." },
            { front: "Karaktertræk ved den Apollinske position", back: "Pligtopfyldende, ordenssans, systematik og perfektionisme. I ekstreme tilfælde flertydighedsintolerance, livsangst og fremmedhad." },
            { front: "Karaktertræk ved den Prometiske position", back: "Kreative, risikovillige og har svært ved at underordne sig sociale rammer." },
            { front: "Hvilken position er idealiseret i Vesten?", back: "Den Prometiske position, hvor travlhed, risikovillighed og handlekraft idealiseres." },
            { front: "Hvad er 'Asteni'?", back: "En tilstand af træthed og passivitet, der udtrykkes som 'Jeg orker ikke noget'." },
            { front: "Hvorfor er OSN genetisk bestemt?", back: "Studier med tvillinger, der er vokset op i forskellige miljøer, viser, at OSN i høj grad er genetisk bestemt og kun påvirkes lidt af miljøet." },
        ],
        "Kapitel 3, Larsen": [
            { front: "To basale formuleringer af personlighedstræk", back: "1. Som **interne, kausale egenskaber** (en drivkraft). 2. Som **udelukkende beskrivende resumeer** (baseret på observeret adfærd)." },
            { front: "Træk som interne, kausale egenskaber", back: "Personlighedstræk er indre lyster og drifter, der driver din adfærd. De definerer din personlighed, selv når de ikke kommer til udtryk." },
            { front: "Træk som udelukkende beskrivende resumeer", back: "Et træk er blot et udtryk for den adfærd, en person har vist, og antager ikke en indre årsag eller drift." },
            { front: "Personligheds kohærens", back: "Den konsistens, der er i ens personlighedstræk over tid. Måden, et træk kommer til udtryk, kan ændre sig, men selve trækket forbliver det samme." },
            { front: "Act Frequency Approach (Handlingshyppigheds tilgang)", back: "En tilgang der ser personlighedstræk som opsummeringer af generelle adfærdstendenser. Jo flere handlinger, der stemmer overens med et træk, desto højere scorer man på det." },
            { front: "Act Nomination", back: "Processen med at knytte specifikke handlinger til en trækkategori ved at spørge mange mennesker, hvilken adfærd de forbinder med et træk." },
            { front: "Prototypicality Judgement", back: "Processen med at vurdere, hvilke handlinger der er mest stereotype for et træk." },
            { front: "Recording of Act Performance", back: "En metode til at registrere, hvor mange gange en person udfører en bestemt adfærd, der er associeret med et træk." },
            { front: "Lexical Approach (Leksikalsk tilgang)", back: "Antagelsen om, at de vigtigste individuelle forskelle mellem mennesker er blevet kodificeret i det naturlige sprog." },
            { front: "Statistical Approach (Statistisk tilgang)", back: "En metode der bruger statistiske teknikker som **faktoranalyse** til at identificere de vigtigste træk ud fra store mængder data." },
            { front: "Theoretical Approach (Teoretisk tilgang)", back: "En metode, hvor en teori bestemmer, hvilke personlighedstræk der er vigtige." },
            { front: "Faktoranalyse", back: "En matematisk metode, der sammensætter 'personlighedsgenstande', der minder meget om hinanden, i kategorier." },
            { front: "Factor loadings", back: "Et tal, der indikerer, hvor meget en genstand korrelerer med en faktor." },
            { front: "Eysencks PEN model", back: "En personlighedstaksonomi baseret på tre supertræk: **Psychoticism**, **Extraversion** og **Neuroticism**." },
            { front: "Psychoticism (PEN)", back: "Et supertræk forbundet med selviskhed, aggressivitet, impulsivitet og manglende empati." },
            { front: "Neuroticism (PEN)", back: "Et supertræk forbundet med følelsesmæssig ustabilitet, irritation, skyldfølelse og lavt selvværd." },
            { front: "Extraversion (PEN)", back: "Et supertræk forbundet med socialitet, aktivitet, dominans og nysgerrighed." },
            { front: "Circumplex taksonomi (Wiggins' model)", back: "En model, der primært fokuserer på interpersonelle træk, opdelt efter dimensionerne 'kærlighed' og 'status'." },
            { front: "De tre typer af trækrelationer i Wiggins' model", back: "1. **Adjecency:** Jo tættere træk er på hinanden, jo større korrelation har de. 2. **Bipolaritet:** Modsatte træk har negativ korrelation. 3. **Ortogonalitet:** Vinkelrette træk har ingen korrelation." },
            { front: "Sociosexual orientation", back: "En teori der påstår, at mænd og kvinder vælger mellem en begrænset og ubegrænset parringsstrategi." },
            { front: "Self-handicapping", back: "Når man sætter begrænsninger for at opnå et mål for at opretholde et godt selvværd, hvis man fejler. Man giver sig selv en 'undskyldning' på forhånd." },
            { front: "Taksonomi", back: "Klassificering af psykologiske begreber i et system." },
            { front: "Fordele ved Act Frequency Approach", back: "1. Har specificeret hvilke adfærdsmønstre, der er regelmæssige. 2. Har fundet kulturelle forskelle i opfattelsen af adfærd. 3. Viser, hvilke træk der er mest synlige for andre." },
            { front: "Kritik af Act Frequency Approach", back: "Det er ikke specificeret, hvor meget kontekst der skal gives til en handling. Træk, der kun kommer til udtryk i specifikke sammenhænge, observeres muligvis ikke." }
        ],
        "Kapitel 10, Larsen - Motiver og personlighed": [
            { front: "Hvilke 5 fælles overbevisninger deler dispositionelle og intrapsykiske psykologer om motiver?", back: "1. Folk er forskellige i type og styrke af motiver. 2. Forskelle kan måles. 3. De kan føre til vigtige livsudfald. 4. De er stabile over tid. 5. Motiver kan måske forklare 'hvorfor' folk handler, som de gør." },
            { front: "Murray's motivationsteori", back: "Antager, at motiver udelukkende er et resultat af fortiden." },
            { front: "Need (behov)", back: "Et stadie af anspændthed, der kan lettes, når et behov er opfyldt. Behov er relateret til ønsker og drifter." },
            { front: "Press (pres)", back: "Et behovsfremkaldende aspekt fra miljøet. Der er to typer: 'alpha press' (objektiv virkelighed) og 'beta press' (opfattet virkelighed)." },
            { front: "Apperception", back: "Processen med at fortolke miljøet og give det en mening. Denne proces er påvirket af ens behov." },
            { front: "Thematic Apperception Test (TAT)", back: "En projektiv test, hvor en person skal fortolke billeder. Den antager, at personens opfattelse af billederne afspejler hans egne motiver." },
            { front: "State", back: "En midlertidig og kortvarig følelsesmæssig tilstand, som er en reaktion på miljøet." },
            { front: "Trait", back: "Den underliggende, varige tendens til at opleve en bestemt følelse eller tilstand." },
            { front: "Implicit motivation", back: "De ubevidste motiver, der afspejler dybere ønsker og behov. Måles ofte via projektive test som TAT." },
            { front: "Self-attributed motivation (selv-attribueret motivation)", back: "De bevidste motiver, der afspejler en persons bevidste holdninger. Måles ofte via selvrapportering." },
            { front: "Independence training", back: "Træning af børn i selvstændighed for at fremme uafhængighed og et højt præstationsbehov." },
            { front: "Power stress", back: "Den stress der opstår, når en persons forsøg på at udøve magt mislykkes." },
            { front: "Flow", back: "Et subjektivt stadie, hvor en person er helt opslugt af en aktivitet og mister fornemmelsen af tid. Ses som en indikation af selvaktualisering." },
            { front: "Fuldt fungerende person", back: "En person, der er på vej mod eller allerede har opnået selvaktualisering." },
            { front: "Positive regard", back: "Behovet for positiv anerkendelse fra andre." },
            { front: "Conditions of worth", back: "Betingelsen af, at en persons værdi er bundet op på andres anerkendelse." },
            { front: "Conditional positive regard", back: "De betingelser, andre (især forældre) sætter for at give anerkendelse." },
            { front: "Unconditional positive regard", back: "Betingelsesløs positiv anerkendelse, som er nødvendig for, at et barn kan opnå selvaktualisering." }
        ],
        "Kapitel 4, Larsen": [
            { front: "De tre fundamentale udgangspunkter for trækpsykologi", back: "1. Meningsfulde individuelle forskelle, 2. Konsistens og stabilitet over tid, 3. Stabilitet på tværs af situationer." },
            { front: "Mischels kritik af trækpsykologi", back: "Han mente ikke, at der var statistisk grundlag for at sige noget om personlighedstrækkenes konsistens på tværs af situationer, hvilket førte til **situationisme**." },
            { front: "Person-Situation interaktion", back: "Tanken om, at adfærd er en funktion af både personlighedstræk og situationelle kræfter, symboliseret ved formlen $B = f(P \\bullet S)$." },
            { front: "Situation specificity", back: "Når en person opfører sig på en bestemt, specifik måde under særlige omstændigheder, som kan være i modstrid med deres personlighedstræk." },
            { front: "Hvornår har personlighedstræk den stærkeste kraft?", back: "I svage situationer, hvor der er få sociale eller strukturelle begrænsninger for adfærd." },
            { front: "De tre måder personlighed interagerer med situationer", back: "1. Situationel selektion (vi vælger situationer). 2. Evokation (vores træk fremprovokerer reaktioner fra andre). 3. Manipulation (vi påvirker intentionelt andres adfærd)." },
            { front: "Situationel selektion", back: "Idéen om at personlighed påvirker, hvilke situationer vi vælger at udsætte os selv for. (F.eks. vælger ekstroverte ofte sociale sammenkomster)." },
            { front: "Evokation", back: "Idéen om at specifikke personlighedstræk fremprovokerer specifikke reaktioner fra miljøet eller andre mennesker." },
            { front: "Manipulation", back: "Idéen om at mennesker intentionelt påvirker andres adfærd til deres egen fordel." },
            { front: "De tre problemer med måling af personlighed ved selvrapportering", back: "1. Ligegladhed (Demotiverede respondenter). 2. Defensivitet (Søger 'neutrale' svar). 3. Forfalskning af svar (Fremstiller sig selv i et bedre lys)." },
            { front: "Infrequency scale", back: "En metode til at modvirke ligegladhed ved at inkludere åbenlyse spørgsmål (f.eks. \"Jeg går altid på hænder op ad trappen\") for at identificere respondenter, der ikke læser spørgsmålene ordentligt." },
            { front: "Middle category endorsement", back: "Tendensen hos respondenter til at vælge middelkategorier som \"neutral\" eller \"ved ikke\", hvilket ikke giver meningsfuld information. Kan undgås ved at fjerne midterste svarmulighed." },
            { front: "Socially desireable responding", back: "Tendensen til at forvride testresultater for at fremstå mere socialt ønskværdig. Især udbredt i jobscenarier." },
            { front: "Latent træk vs. manifest variabel", back: "Et latent træk er en underliggende egenskab (f.eks. intelligens), mens en manifest variabel er den synlige adfærd, der bruges til at måle det latente træk (f.eks. en testscore)." },
            { front: "Barnum statements", back: "Generelle udtalelser, der er så brede, at de kan gælde for næsten enhver. De udnyttes ofte i populære personlighedstests som Myers-Briggs (MBTI)." }
       ],
        "Kapitel 5, Larsen - Stabilitet og forandring": [
            { front: "Personlighedsudvikling", back: "De stabile aspekter af personlighed og hvordan den ændres over tid." },
            { front: "Rankordens stabilitet", back: "Vedligeholdelsen af en persons relative position i en gruppe over tid." },
            { front: "Mean Level Stability", back: "Gennemsnitsniveauet af et personlighedstræk i en bestemt population forbliver stabilt over tid." },
            { front: "Krav for en personlighedsforandring", back: "Forandringer skal være indre og nogenlunde stabile over tid." },
            { front: "Temperaments stabilitet hos spædbørn (Mary Rothbart)", back: "Individuelle forskelle i temperament kan ses tidligt i livet og bliver mere stabile med alderen." },
            { front: "Stabilitetskoefficient", back: "Korrelationen mellem to målinger af et træk taget på forskellige tidspunkter." },
            { front: "Validitetskoefficient", back: "Korrelationen mellem forskellige målinger af det samme træk taget på samme tid." },
            { front: "Almindelige personlighedsændringer med alderen", back: "Neuroticisme falder, venlighed og samvittighedsfuldhed stiger, og selvværd stiger." },
            { front: "Social kohorte", back: "En gruppe af mennesker, der er født i samme historiske periode og deler lignende sociale oplevelser." },
            { front: "Betydningen af tidlige personlighedstræk", back: "De kan forudsige senere adfærd og livsresultater (f.eks. impulsivitet i barndommen kan forudsige dårligere karakterer)." },
            { front: "Arbejdserfaring og personlighed", back: "Succes på arbejdspladsen kan føre til øget selvværd og glæde." },
            { front: "Social Investment Theory (SIT)", back: "Tanken om at ændringer i personlighed kommer som resultat af, at man bevæger sig ind i nye miljømæssige stadier i livet (arbejdslivet, forældrelivet osv.)" },
        ],
        "McAdams - De tre niveauer af personlighed": [
            { front: "McAdams's tre niveauer af personlighed", back: "1. Dispositionelle træk, 2. Karakteristiske tilpasninger, 3. Livsfortællinger." },
            { front: "Dispositionelle træk", back: "Brede, grundlæggende forskelle mellem mennesker, formet af evolution." },
            { front: "Karakteristiske tilpasninger", back: "Mål, værdier og strategier, der er formet af vores daglige liv og omgivelser." },
            { front: "Livsfortælling (Integrative Life Narrative)", back: "Den historie vi fortæller om os selv for at skabe mening ud af vores træk og tilpasninger, hvilket former vores identitet." },
            { front: "Hvordan påvirker kultur de tre niveauer?", back: "Kulturen påvirker, hvordan vi udtrykker træk, hvilke mål vi stræber efter, og hvilke historier vi bruger til at give mening til vores liv." },
            { front: "Display rules (visningsregler)", back: "Kulturelle regler, der påvirker, hvordan vi udtrykker vores dispositionelle træk." }
        ],
        "Paulhus 2014 - Dark personalities": [
            { front: "Den Mørke Tetrade (The Dark Tetrad)", back: "Et sæt af fire 'socialt aversive' personlighedstræk: Machiavellianisme, narcissisme, (subklinisk) psykopati og hverdags sadisme." },
            { front: "Machiavellianisme", back: "Et træk karakteriseret ved manipulerende, strategisk adfærd og kynisk foragt for andres moral." },
            { front: "Narcissisme", back: "Et træk forbundet med overdreven selvglæde, en følelse af berettigelse og et behov for at blive beundret." },
            { front: "Psykopati", back: "Et træk, der indebærer en mangel på empati, impulsivitet og antisocial adfærd." },
            { front: "Hverdags sadisme", back: "En tendens til at få glæde eller nyde at udvise grusomhed eller aggression mod andre." },
            { front: "Fælles træk for den mørke tetrade", back: "Alle fire træk er præget af 'hjerteløshed' (callousness), som er en mangel på empati." },
            { front: "Construct creep", back: "Et fænomen hvor den oprindelige definition af et personlighedstræk udvides til at inkludere træk fra andre personligheder, hvilket skaber forvirring." },
            { front: "Anvendelse af teorien", back: "Modellen kan bruges til screening i erhvervslivet for at identificere skadelig adfærd, særligt i miljøer som politi og militær." },
        ],
        "Kapitel 19, Larsen - Disorders of Personality": [
            { front: "Generel definition af personlighedsforstyrrelser", back: "En konfiguration af træk, der er socialt uønskede, som folk misliker." },
            { front: "Statistisk definition af 'unormalt'", back: "Når man befinder sig i et stort mindretal." },
            { front: "Kulturel definition af 'unormalt'", back: "Hvad samfundet eller kulturen anser for upassende adfærd." },
            { front: "Biologisk definition af 'unormalt'", back: "Når en biologisk designet funktion ikke fungerer." },
            { front: "McAdams' definition af personlighedsforstyrrelse", back: "En holdbar og ikke-fleksibel måde at tænke og erfare følelser, der ofte har en negativ effekt på hverdagslivet." },
            { front: "Hvilke tre klynger af personlighedsforstyrrelser er der i DSM-5?", back: "Klynge A (særprægede), Klynge B (dramatiske), Klynge C (ængstelige)." },
            { front: "DSM-5", back: "Startstedet for diagnosticering af mentale lidelser. Vigtig for konsistens, men kan mangle præcision." },
            { front: "Klynge A (særprægede)", back: "Paranoid, skizoid og skizotypisk personlighedsforstyrrelse." },
            { front: "Klynge B (dramatiske)", back: "Antisocial, borderline, histrionisk og narcissistisk personlighedsforstyrrelse." },
            { front: "Klynge C (ængstelige)", back: "Ængstelig, dependent og obsessiv-kompulsiv personlighedsforstyrrelse." },
            { front: "Maladaptivt skema", back: "En dybt forankret, negativ overbevisning om sig selv eller verden, der stammer fra tidlige oplevelser og driver dysfunktionel adfærd." },
            { front: "Eksempel: Skemaet om Forladelse/Ustabilitet", back: "En overbevisning der stammer fra barndommen om, at folk man elsker, vil forlade en, hvilket fører til adfærd som kompulsivt klæben eller præventivt at skubbe partnere væk." },
            { front: "Symptomer på borderline", back: "Forstyrrelse af følelser, interpersonelle relationer og selvkonceptet." },
            { front: "Hovedårsag til borderline (ifølge noter)", back: "Et ekstremt tidligt maladaptivt skema, der resulterer i en konstant angst for at blive forladt." },
            { front: "Antisocial personlighedsforstyrrelse", back: "Karakteriseret ved hensynsløs, impulsiv adfærd, mangel på anger og aggression." },
            { front: "Årsager til antisocial personlighedsforstyrrelse", back: "Genetiske og miljømæssige rødder, ofte forbundet med misbrug i barndommen og et mangelfuldt socialt læringssystem." },
            { front: "Silver lining", back: "Tanken om at ekstreme personlighedstræk kan være en fordel i specifikke professioner (fx en kirurgs psykopatiske træk eller en videnskabsmands skizoidt træk)." },
            { front: "Fælles træk for Klynge B-forstyrrelser", back: "Personer med disse forstyrrelser har i studier vist sig at have langt flere seksuelle partnere end gennemsnittet." },
            { front: "Selvkoncept (Antisocial)", back: "Selvet er uhæmmet af regler." },
            { front: "Emotion (Antisocial)", back: "Mangel på anger, hurtigt tempereret og let irriteret." },
            { front: "Adfærd (Antisocial)", back: "Hensynsløs, impulsiv og uansvarlig." },
            { front: "Sociale relationer (Antisocial)", back: "Følelsesløs og ligeglad med andres rettigheder." },
            { front: "Paranoid personlighedsforstyrrelse", back: "Præget af dyb mistillid og mistænksomhed over for andre, hvor deres motiver fortolkes som ondsindede." },
            { front: "Skizoid personlighedsforstyrrelse", back: "Karakteriseret ved et fravær af interesse for sociale relationer og en begrænset vifte af følelsesmæssige udtryk." },
            { front: "Skizotypisk personlighedsforstyrrelse", back: "Præget af underlige, excentriske tankemønstre og adfærd, ofte med social angst." },
            { front: "Histrionisk personlighedsforstyrrelse", back: "En forstyrrelse karakteriseret ved et overdrevet behov for opmærksomhed, der ofte udtrykkes gennem dramatiske emotionelle udtryk." },
            { front: "Narcissistisk personlighedsforstyrrelse", back: "Præget af et overdrevet behov for beundring, en følelse af berettigelse og mangel på empati." },
            { front: "Ængstelig (Avoidant) personlighedsforstyrrelse", back: "Karakteriseret ved ekstrem generthed, følelse af utilstrækkelighed og frygt for afvisning." },
            { front: "Dependent personlighedsforstyrrelse", back: "Præget af et overdrevent behov for at blive plejet, hvilket fører til underdanig adfærd og en frygt for at være alene." },
            { front: "Obsessiv-kompulsiv personlighedsforstyrrelse", back: "Karakteriseret ved en overdreven bekymring for orden, perfektionisme og kontrol, ofte på bekostning af fleksibilitet og effektivitet." }
        ],
    "Bandura 1994 - Opfattet Selveffektivitet": [
            { front: "Opfattet selveffektivitet", back: "En persons overbevisning om egne evner til at organisere og udføre de handlinger, der kræves for at håndtere fremtidige situationer." },
            { front: "Hvordan opfattet selveffektivitet påvirker mennesker", back: "Den bestemmer hvordan man føler, tænker, motiverer dem selv og handler." },
            { front: "Mennesker med høj opfattelse af selveffektivitet", back: "De er mere ambitiøse, kommer sig hurtigere efter nederlag, ser udfordringer som opnåelige mål, er mere vedholdende, og oplever mindre stress og depression." },
            { front: "Mennesker med lav opfattelse af selveffektivitet", back: "De undgår svære opgaver, har lave ambitioner, fokuserer på egne mangler, mister hurtigt troen på egne evner og er mere tilbøjelige til stress og depression." },
            { front: "Den mest effektive kilde til selveffektive overbevisninger", back: "Mestringserfaringer (mastery experiences). Succeser bygger en robust tro på selveffektivitet, mens fejl svækker den." },
            { front: "Vicarious experiences", back: "Den næstmest effektive kilde. Observation af succesfulde mennesker kan styrke troen på egne evner, især hvis man opfatter observanten som en, der ligner en selv." },
            { front: "Social persuasion", back: "At blive overbevist verbalt af andre om, at man har de nødvendige kompetencer til at lykkes. Det kan styrke selveffektiviteten og øge indsatsen." },
            { front: "Fysiologiske og affektive tilstande", back: "En person fortolker emotionelle reaktioner, såsom stress og nervøsitet, som et tegn på, at de mangler evnen til at udføre en opgave, hvilket kan sænke selveffektiviteten." },
            { front: "Hvordan opfattet selveffektivitet påvirker kognitive processer", back: "Den påvirker, hvilke tanker folk har, og hvordan de visualiserer fremtiden. Høj selveffektivitet fører til mere optimistiske forventninger." },
            { front: "Hvad er kognitive processer?", back: "Tankeprocesser involveret i indsamlingen, organiseringen og brugen af information." },
            { front: "Opfattet selveffektivitets rolle i motivation", back: "Den påvirker valg af handling, samt intensiteten og udholdenheden af anstrengelsen. Høj selveffektivitet fører til et stærkere engagement i opgaver og mål." },
            { front: "Hvilken type motivation er Bandura's teori?", back: "Han anser motivation som en proces, hvor man sætter mål for sig selv og er styret af fremtiden, modsat de teorier, der ser motivation som drevet af fortiden." },
            { front: "Opfattet selveffektivitets rolle i alderdommen", back: "En høj følelse af selveffektivitet kan hjælpe ældre med at forblive kognitivt konkurrencedygtige på trods af en naturlig nedsættelse." },
            { front: "Kulturens rolle i selveffektivitet", back: "Samfundets holdning til ældre påvirker deres selveffektivitet. Kulturer, der værdsætter udvikling hele livet, har mere produktive ældre borgere." },
            { front: "Social selveffektivitet", back: "En opfattelse af egne evner til at navigere i sociale situationer. Mangel på social selveffektivitet øger sårbarheden over for stress i forbindelse med store livsændringer som pensionering eller tab af en ægtefælle." },
            { front: "Affektive processer", back: "Processer, der regulerer emotionelle stadier og udløsningen af emotionelle reaktioner." }
        ], 
      "Kapitel 6 - Genetik og personlighed.pdf": [
            { front: "Arvemasse", back: "Menneskets arvemasse består af 3,2 mia. basepar i DNA-strenge (ACTG) fordelt på 23 kromosompar. Vi har 20.000-50.000 gener, hvoraf kun en lille del koder for egenskaber." },
            { front: "Kromosomer", back: "Alle har 23 kromosomer fra mor og 23 fra far. Mænd har XY, kvinder har XX i det 23. par. Rekombination skaber genetisk variation." },
            { front: "Gen", back: "Et gen er en specifik sekvens af nukleotider, der koder for egenskaber, sygdomme og delvist adfærd." },
            { front: "Nukleotider", back: "Byggestenene i DNA: Adenin, Thymin, Cytosin og Guanin." },
            { front: "Alleler", back: "Forskellige versioner af det samme gen, fx blå eller brune øjne." },
            { front: "Fænotypisk varians", back: "Observerede individuelle forskelle mellem mennesker." },
            { front: "Genetisk varians", back: "Forskelle i den samlede samling af gener hos individer." },
            { front: "Arvelighed (h²)", back: "Andelen af fænotypisk varians, der kan tilskrives genetisk varians. Fx betyder h²=0,20 at 20% af variationen skyldes gener." },
            { front: "Misforståelser om arvelighed", back: "Arvelighed gælder ikke for individer, men for grupper. Den er ikke konstant og kan variere mellem kulturer og tidspunkter." },
            { front: "Arv-miljø-debatten", back: "På individniveau er arv og miljø uadskillelige. På samfundsniveau kan man undersøge, hvilke faktorer der mest påvirker adfærd." },
            { front: "Selektiv avl", back: "Metode hvor man undersøger, om bestemte egenskaber kan avles frem. Etisk uacceptabelt for mennesker, men bruges på dyr." },
            { front: "Familiestudier", back: "Undersøger om genetisk overlap i familier fører til lighed i træk. Kan ikke adskille arv og fælles miljø." },
            { front: "Tvillingestudier", back: "Sammenligner enæggede (monozygotiske) og tveæggede (dizygotiske) tvillinger for at vurdere arvelighed. Enæggede ligner hinanden mest." },
            { front: "Adoptionsstudier", back: "Sammenligner adopterede børn med både biologiske og adoptivforældre for at adskille genetiske og miljømæssige effekter." },
            { front: "Store fund fra genetisk forskning", back: "Tvillingestudier viser ofte dobbelt så stor arvelighed som adoptionsstudier for personlighedstræk." },
            { front: "Arvelighed af personlighedstræk", back: "Ekstroversion: ca. 0,49. Neuroticisme: ca. 0,48. Generelle træk: ca. 0,40. Aggressivitet: 0,51-0,72. Impulsivitet: 0,50." },
            { front: "Arvelighed af attituder", back: "Entreprenørskab: 57%. Traditionalisme: 50%. Politiske holdninger: 15-30%. Religiøsitet: ingen arvelighed som ung, 44% som voksen." },
            { front: "Arvelighed af alkohol og rygning", back: "At begynde at ryge: 44%. Udholdenhed i rygning: 53%. Alkoholisme: 50-71% afhængigt af studie." },
            { front: "Arvelighed og ægteskab", back: "68% arvelighed for at indgå ægteskab. 50% arvelighed for ægteskabstilfredshed hos kvinder." },
            { front: "Molekylærgenetik", back: "Studerer specifikke gener forbundet med personlighed. DRD4-genet er undersøgt for nyhedssøgende adfærd, men effekten er lille." },
            { front: "GWAS (genomdækkende studier)", back: "Undersøger millioner af DNA-variationer for at finde sammenhænge med personlighed. Kræver store stikprøver. Mange gener har små effekter." },
            { front: "Polygeniske risikoscores", back: "Summen af mange små genetiske effekter kan forudsige træk som neuroticisme, men præcisionen er lav." },
            { front: "Skjult arvelighed", back: "Tvillingestudier viser højere arvelighed end GWAS kan forklare. Skyldes sandsynligvis mange gener med små effekter eller sjældne varianter." },
            { front: "Delt og unikt miljø", back: "Delt miljø: Fælles faktorer for søskende. Unikt miljø: Små forskelle i opvækst. Unikt miljø har størst betydning for personlighed." },
            { front: "Gen-miljø interaktion", back: "Samme miljø kan påvirke personer forskelligt afhængigt af deres gener. Fx MAOA-genet og risiko for antisocial adfærd ved misbrug." },
            { front: "Gen-miljø korrelationer", back: "Passiv: Forældre giver både gener og miljø. Reaktiv: Omgivelser reagerer på barnets træk. Aktiv: Personen opsøger miljøer, der matcher egne træk." },
            { front: "Miljømæssig modulering af genudtryk", back: "Miljøet kan påvirke, hvilke gener der udtrykkes. Fx kan subjektiv ensomhed ændre genudtryk og øge risiko for sygdom." },
            { front: "Rekombination", back: "Udveksling af genetisk materiale mellem kromosomer, hvilket skaber nye genkombinationer." },
            { front: "Enviromentalisme", back: "Teori om at miljøet er den primære årsag til personlighed." }
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
                "The quasi-experimental method."
            ],
            correctAnswer: "b",
            feedback: "Korrelationsmetoden bruges til at finde sammenhænge og forudsige forholdet mellem variable."
        },
        {
            chapter: "Chapter 2",
            question: "4. Which of the following research methods is usually used in social psychology?",
            options: [
                "Only laboratory experiments.",
                "Only field experiments.",
                "Mostly correlational and experimental methods.",
                "Only observational studies and qualitative research methods."
            ],
            correctAnswer: "c",
            feedback: "Socialpsykologer bruger primært korrelations- og eksperimentelle metoder, da de giver indsigt i både sammenhænge og årsagssammenhænge."
        },
        {
            chapter: "Chapter 2",
            question: "5. Why is the experimental method most preferred by social psychologists?",
            options: [
                "It is the only method where researchers can study social behavior in its natural settings.",
                "It is the only method that can determine causal relationships.",
                "It is the only method that can determine relationships between variables.",
                "It is the easiest method to conduct."
                ],
            correctAnswer: "b",
            feedback: "Den eksperimentelle metode er den eneste, der kan etablere årsagssammenhænge (kausalitet) mellem variable."
        },
        {
            chapter: "Chapter 2",
            question: "6. Which of the following is true about internal validity?",
            options: [
                "It refers to the extent to which the results of an experiment can be generalized to other situations and to other people.",
                "It refers to the process of making sure that nothing besides the independent variable can affect the dependent variable.",
                "It refers to how people react when they realize they are in an experiment.",
                "It refers to the level of confidence that the findings of a study are true and unbiased."
            ],
            correctAnswer: "b",
            feedback: "Intern validitet sikrer, at kun den uafhængige variabel forårsager ændringen i den afhængige variabel, typisk gennem kontrol og randomisering."
        },
        {
            chapter: "Chapter 2",
            question: "7. Which of the following is true about external validity?",
            options: [
                "It refers to the degree to which a researcher can make cause and effect conclusions from a study.",
                "It is usually achieved by maximizing internal validity.",
                "It refers to the extent to which the results of a study can be generalized to other situations and to other people.",
                "It refers to a method used to test if research is replicable."
            ],
            correctAnswer: "c",
            feedback: "Ekstern validitet handler om, hvorvidt et studies resultater kan overføres til andre kontekster og befolkningsgrupper."
        },
        {
            chapter: "Chapter 2",
            question: "8. A researcher randomly assigns participants to conditions in order to",
            options: [
                "Ensure that groups are comparable at the outset.",
                "Ensure that participants are representative of the larger population.",
                "Maximize the generalizability of the findings.",
                "Enhance the replicability of the findings."
            ],
            correctAnswer: "a",
            feedback: "Randomisering sikrer, at grupperne er så ens som muligt ved eksperimentets start, hvilket øger den interne validitet."
        },
        {
            chapter: "Chapter 2",
            question: "9. Which of the following is true about the basic dilemma of the social psychologist?",
            options: [
                "It is the trade-off between external and internal validity.",
                "It is the choice between using the observational method or the experimental method.",
                "It is the choice between using basic research or applied research.",
                "It is the choice between using laboratory experiments or field experiments."
            ],
            correctAnswer: "a",
            feedback: "Det grundlæggende dilemma er afvejningen mellem at opretholde kontrol (intern validitet) og at generalisere resultater (ekstern validitet)."
        },
        {
            chapter: "Chapter 2",
            question: "10. In basic research, psychologists try to find the best answer to the question of why people behave as they do, purely for reasons of intellectual curiosity. In applied research, psychologists",
            options: [
                "Try to solve a specific social problem.",
                "Apply the scientific method to real-world problems.",
                "Look for solutions to basic scientific questions that could be used by companies and industries.",
                "Try to combine scientific questions and theories."
            ],
            correctAnswer: "a",
            feedback: "Anvendt forskning er rettet mod at løse konkrete sociale problemer eller udfordringer."
        },
        // Chapter 3
        {
            chapter: "Chapter 3",
            question: "1. Which of the following is true about social cognition?",
            options: [
                "It is the study of how people form impressions of and make inferences about other people.",
                "It is the study of how people think about themselves and the social world.",
                "It is the study of how people communicate with each other through verbal and nonverbal behaviors.",
                "It is the study of how people interpret and explain the causes of their own and others' behavior."
            ],
            correctAnswer: "b",
            feedback: "Social kognition handler om, hvordan vi tænker om os selv og vores sociale omgivelser."
        },
        {
            chapter: "Chapter 3",
            question: "2. The two types of social cognition are:",
            options: [
                "Controlled thinking and automatic thinking.",
                "Schema thinking and heuristic thinking.",
                "Rational thinking and emotional thinking.",
                "Unconscious thinking and conscious thinking."
            ],
            correctAnswer: "a",
            feedback: "Vores tænkning i sociale situationer kan opdeles i automatisk (hurtig, ubevidst) og kontrolleret (langsom, bevidst) tænkning."
        },
        {
            chapter: "Chapter 3",
            question: "3. Which of the following statements about schemas is FALSE?",
            options: [
                "Schemas help us to organize and interpret new information.",
                "Schemas are mental structures that organize our knowledge about the social world.",
                "Schemas always lead to accurate judgments and decisions.",
                "Schemas are useful for helping us deal with ambiguous information."
            ],
            correctAnswer: "c",
            feedback: "Skemaer kan være nyttige, men de kan også føre til fejl og bias, da de kan forvrænge vores opfattelse af ny information."
        },
        {
            chapter: "Chapter 3",
            question: "4. When schemas are applied to members of a social group such as a gender, race, or religion, they are called:",
            options: [
                "Scripts.",
                "Stereotypes.",
                "Heuristics.",
                "Prototypes."
            ],
            correctAnswer: "b",
            feedback: "Stereotyper er generaliserede skemaer om sociale grupper."
        },
        {
            chapter: "Chapter 3",
            question: "5. The extent to which schemas and concepts are at the forefront of people's minds and are therefore likely to be used when making judgments about the social world is called:",
            options: [
                "Accessibility.",
                "Priming.",
                "Heuristics.",
                "Automaticity."
            ],
            correctAnswer: "a",
            feedback: "Tilgængelighed refererer til, hvor let et skema kommer i tankerne, og hvor sandsynligt det er, at det bliver brugt."
        },
        {
            chapter: "Chapter 3",
            question: "6. Which of the following is an example of priming?",
            options: [
                "Reading a book about a new topic.",
                "Watching a movie that makes you feel happy.",
                "Being exposed to words related to politeness, and then being more likely to act politely.",
                "Solving a complex math problem."
            ],
            correctAnswer: "c",
            feedback: "Priming er fænomenet, hvor nylig eksponering for stimuli påvirker senere tanker, følelser eller adfærd."
        },
        {
            chapter: "Chapter 3",
            question: "7. Which of the following is true about the self-fulfilling prophecy?",
            options: [
                "It is a conscious process in which people deliberately try to make their beliefs come true.",
                "It is a process by which people's expectations about others lead them to behave in ways that confirm those expectations.",
                "It is a process by which people's expectations about themselves lead them to behave in ways that confirm those expectations.",
                "It is a process by which people's actions are determined by their personality traits rather than their expectations."
            ],
            correctAnswer: "b",
            feedback: "Selvopfyldende profetier opstår, når vores forventninger til en anden person får os til at handle på en måde, der bekræfter disse forventninger hos den anden."
        },
        {
            chapter: "Chapter 3",
            question: "8. Which of the following is true about judgmental heuristics?",
            options: [
                "They are mental shortcuts that people use to make judgments quickly and efficiently.",
                "They are always accurate and lead to optimal decisions.",
                "They are complex and time-consuming cognitive processes.",
                "They are only used by people who have limited cognitive abilities."
            ],
            correctAnswer: "a",
            feedback: "Heuristikker er mentale genveje, der gør os i stand til at træffe hurtige, men ikke altid perfekte, beslutninger."
        },
        {
            chapter: "Chapter 3",
            question: "9. The availability heuristic is a mental shortcut whereby people base a judgment on:",
            options: [
                "The ease with which they can bring something to mind.",
                "How similar it is to a typical case.",
                "The number of relevant examples they can think of.",
                "The amount of effort they put into processing information."
            ],
            correctAnswer: "a",
            feedback: "Tilgængelighedsheuristikken betyder, at vi vurderer sandsynligheden af noget ud fra, hvor nemt det er at komme i tanke om eksempler."
        },
        {
            chapter: "Chapter 3",
            question: "10. The representativeness heuristic is a mental shortcut whereby people classify something according to:",
            options: [
                    "How easily they can recall instances of it.",
                "How well it matches a typical case.",
                "The number of times it has occurred in the past.",
                "The emotional impact it has on them."
            ],
            correctAnswer: "b",
            feedback: "Repræsentativitetsheuristikken indebærer, at vi klassificerer noget baseret på, hvor meget det ligner en typisk repræsentant for en kategori."
        },
        // Chapter 4
        {
            chapter: "Chapter 4",
            question: "1. Which of the following is true about social perception?",
            options: [
                "It is the study of how people form impressions of and make inferences about other people.",
                "It is the study of how people think about themselves and the social world.",
                "It is the study of how people communicate with each other through verbal and nonverbal behaviors.",
                "It is the study of how people influence each other's attitudes and beliefs."
            ],
            correctAnswer: "a",
            feedback: "Social perception handler om, hvordan vi danner indtryk og drager konklusioner om andre mennesker."
        },
        {
            chapter: "Chapter 4",
            question: "2. Which of the following is NOT a channel of nonverbal communication?",
            options: [
                "Facial expressions.",
                "Eye gaze.",
                "Body language.",
                "Verbal communication."
            ],
            correctAnswer: "d",
            feedback: "Verbal kommunikation er sprog, mens nonverbal kommunikation er ansigtsudtryk, kropssprog, øjenkontakt osv."
        },
        {
            chapter: "Chapter 4",
            question: "3. The six universal basic emotions that are recognized across cultures are:",
            options: [
                "Happiness, sadness, anger, fear, surprise, and disgust.",
                "Love, hate, jealousy, envy, pride, and shame.",
                "Excitement, boredom, anxiety, relief, hope, and despair.",
                "Amusement, contempt, embarrassment, guilt, pride, and relief."
            ],
            correctAnswer: "a",
            feedback: "Disse seks følelser er almindeligt anerkendt som universelle i deres udtryk og genkendelse."
        },
        {
            chapter: "Chapter 4",
            question: "4. The tendency to believe that our own perceptions of the world are objective and accurate, and that others who disagree with us are biased, is called:",
            options: [
                "Confirmation bias.",
                "Hindsight bias.",
                "Naïve realism.",
                "Self-serving bias."
            ],
            correctAnswer: "c",
            feedback: "Naiv realisme er troen på, at vores egen opfattelse af virkeligheden er objektiv og sand."
        },
        {
            chapter: "Chapter 4",
            question: "5. The tendency for information presented early in a sequence to have a greater impact on impressions than information presented later is called:",
            options: [
                "The recency effect.",
                "The primacy effect.",
                "The halo effect.",
                "The confirmation bias."
            ],
            correctAnswer: "b",
            feedback: "Primæreffekten beskriver, hvordan den første information, vi modtager om en person, farver vores efterfølgende indtryk."
        },
        {
            chapter: "Chapter 4",
            question: "6. The process by which people explain the causes of their own and others' behavior is called:",
            options: [
                "Social perception.",
                "Attribution.",
                "Social cognition.",
                "Schema."
            ],
            correctAnswer: "b",
            feedback: "Attribution handler om at forklare årsagerne til adfærd, enten som intern (personlighed) eller ekstern (situation)."
        },
        {
            chapter: "Chapter 4",
            question: "7. When we explain someone's behavior in terms of their personality, attitudes, or character, we are making a:",
            options: [
                "Situational attribution.",
                "Dispositional attribution.",
                "External attribution.",
                "Consensus attribution."
            ],
            correctAnswer: "b",
            feedback: "Dispositionel attribution fokuserer på interne årsager som personlighedstræk."
        },
        {
            chapter: "Chapter 4",
            question: "8. According to Kelley's covariation model, people are most likely to make an internal attribution when:",
            options: [
                "Consensus is low, distinctiveness is high, and consistency is high.",
                "Consensus is high, distinctiveness is low, and consistency is high.",
                "Consensus is low, distinctiveness is low, and consistency is high.",
                "Consensus is high, distinctiveness is high, and consistency is low."
            ],
            correctAnswer: "c",
            feedback: "Lav konsensus (kun denne person), lav særpræg (personen gør det altid) og høj konsistens (personen gør det gentagne gange i denne situation) peger på en intern forklaring."
        },
        {
            chapter: "Chapter 4",
            question: "9. The tendency to overestimate the extent to which other people's behavior is due to internal, dispositional factors and to underestimate the role of situational factors is called:",
            options: [
                "The self-serving bias.",
                "The actor-observer bias.",
                "The fundamental attribution error.",
                "The just-world hypothesis."
            ],
            correctAnswer: "c",
            feedback: "Den fundamentale attributionsfejl er kernen i social attribution og vores tendens til at se personlighed over situation."
        },
        {
            chapter: "Chapter 4",
            question: "10. The two-step process of attribution involves first making a spontaneous ________ attribution, and then, with conscious effort, adjusting to consider ________ factors.",
            options: [
                "situational; dispositional",
                "dispositional; situational",
                "external; internal",
                "internal; external"
            ],
            correctAnswer: "b",
            feedback: "Vi starter ofte med en hurtig, intern (dispositionel) vurdering, som vi så justerer, hvis vi har tid og motivation til at overveje situationelle faktorer."
        },
        // Chapter 5
                {
                    chapter: "Chapter 5",
                    question: "1. The overall set of beliefs that people have about their personal attributes is called:",
                    options: [
                        "Self-esteem.",
                        "Self-concept.",
                        "Self-awareness.",
                        "Self-efficacy."
                    ],
                    correctAnswer: "b",
                    feedback: "Selvkonceptet er den samlede opfattelse af ens egne træk og egenskaber."
                },
                {
                    chapter: "Chapter 5",
                    question: "2. According to research, which of the following is true about how children's self-concept develops?",
                    options: [
                        "Young children's self-concept tends to be more abstract and complex than older children's.",
                        "As children grow older, their self-concept shifts from focusing on concrete, observable characteristics to more abstract psychological traits.",
                        "Children's self-concept is primarily shaped by their genetic predispositions.",
                        "Self-concept remains relatively stable and consistent throughout childhood."
                    ],
                    correctAnswer: "b",
                    feedback: "Selvkonceptet udvikler sig fra konkrete træk til mere abstrakte, når børn bliver ældre."
                },
                {
                    chapter: "Chapter 5",
                    question: "3. The idea that we learn about our own abilities and attitudes by comparing ourselves to other people is called:",
                    options: [
                        "Social tuning.",
                        "Self-perception theory.",
                        "Social comparison theory.",
                        "Two-factor theory of emotion."
                    ],
                    correctAnswer: "c",
                    feedback: "Social sammenligningsteori handler om at vurdere os selv ved at sammenligne med andre."
                },
                {
                    chapter: "Chapter 5",
                    question: "4. Comparing ourselves to people who are better than we are with regard to a particular trait or ability is called:",
                    options: [
                        "Upward social comparison.",
                        "Downward social comparison.",
                        "Lateral social comparison.",
                        "Self-enhancement comparison."
                    ],
                    correctAnswer: "a",
                    feedback: "Opadgående social sammenligning kan motivere os, men også gøre os ringere tilpas."
                },
                {
                    chapter: "Chapter 5",
                    question: "5. When we are motivated to feel good about ourselves, we often engage in:",
                    options: [
                        "Upward social comparison.",
                        "Downward social comparison.",
                        "Accurate self-assessment.",
                        "Self-verification."
                    ],
                    correctAnswer: "b",
                    feedback: "Nedadgående social sammenligning øger vores selvværd ved at sammenligne os med dem, der klarer sig dårligere."
                },
                {
                    chapter: "Chapter 5",
                    question: "6. The process whereby people adopt another person's attitudes is called:",
                    options: [
                        "Social identity.",
                        "Social comparison.",
                        "Social tuning.",
                        "Self-affirmation."
                    ],
                    correctAnswer: "c",
                    feedback: "Social 'tuning' beskriver, hvordan vi ubevidst overtager andres holdninger og meninger."
                },
                {
                    chapter: "Chapter 5",
                    question: "7. When people focus their attention inward on themselves, they are experiencing:",
                    options: [
                        "Self-esteem.",
                        "Self-concept.",
                        "Self-awareness.",
                        "Self-perception."
                    ],
                    correctAnswer: "c",
                    feedback: "Selvbevidsthed er fokuseringen af opmærksomhed på ens indre tilstande og egenskaber."
                },
                {
                    chapter: "Chapter 5",
                    question: "8. The theory that when our attitudes and feelings are uncertain or ambiguous, we infer these states by observing our behavior and the situation in which it occurs is called:",
                    options: [
                        "Cognitive dissonance theory.",
                        "Self-perception theory.",
                        "Social comparison theory.",
                        "Two-factor theory of emotion."
                    ],
                    correctAnswer: "b",
                    feedback: "Selvperceptionsteorien forklarer, hvordan vi udleder vores egne holdninger og følelser ud fra vores adfærd."
                },
                {
                    chapter: "Chapter 5",
                    question: "9. Rewarding people for doing an activity they already enjoy can sometimes cause them to:",
                    options: [
                        "Enjoy the activity even more.",
                        "Enjoy the activity less.",
                        "Develop a stronger intrinsic motivation for the activity.",
                        "Develop a stronger extrinsic motivation for the activity."
                    ],
                    correctAnswer: "b",
                    feedback: "Overjustification effect: Eksterne belønninger kan underminere indre motivation."
                },
                {
                    chapter: "Chapter 5",
                    question: "10. The desire to engage in an activity because we enjoy it or find it interesting, not because of external rewards or pressures, is called:",
                    options: [
                        "Extrinsic motivation.",
                        "Intrinsic motivation.",
                        "Self-efficacy.",
                        "Self-control."
                    ],
                    correctAnswer: "b",
                    feedback: "Indre motivation driver os til at gøre ting for nydelsens skyld."
                },
                // Chapter 6
                {
                    chapter: "Chapter 6",
                    question: "1. The feeling of discomfort caused by performing an action that is discrepant from one's customary (typically positive) self-conception is called:",
                    options: [
                        "Self-affirmation.",
                        "Cognitive dissonance.",
                        "Self-perception.",
                        "Self-justification."
                    ],
                    correctAnswer: "b",
                    feedback: "Kognitiv dissonans opstår, når vores handlinger strider mod vores overbevisninger eller selvbillede, hvilket skaber ubehag."
                },
                {
                    chapter: "Chapter 6",
                    question: "2. The way people reduce cognitive dissonance is by:",
                    options: [
                        "Changing their behavior.",
                        "Changing their cognitions.",
                        "Adding new cognitions.",
                        "All of the above."
                    ],
                    correctAnswer: "d",
                    feedback: "Alle disse strategier bruges til at reducere dissonans."
                },
                {
                    chapter: "Chapter 6",
                    question: "3. When people change their attitudes to justify their past behavior, they are engaging in:",
                    options: [
                        "External justification.",
                        "Internal justification.",
                        "Counterattitudinal advocacy.",
                        "Impact bias."
                    ],
                    correctAnswer: "b",
                    feedback: "Intern retfærdiggørelse indebærer at ændre egne holdninger for at matche adfærd, uden ekstern belønning."
                },
                {
                    chapter: "Chapter 6",
                    question: "4. The tendency to overestimate the intensity and duration of one's emotional reactions to future negative events is called:",
                    options: [
                        "Impact bias.",
                        "Decision dissonance.",
                        "Lowballing.",
                        "Hypocrisy induction."
                    ],
                    correctAnswer: "a",
                    feedback: "Impact bias betyder, at vi forudser stærkere og længerevarende følelsesmæssige reaktioner på negative begivenheder, end vi faktisk oplever."
                },
                {
                    chapter: "Chapter 6",
                    question: "5. When a person states an opinion or attitude that runs counter to his or her private belief or attitude, this is called:",
                    options: [
                        "Insufficient punishment.",
                        "Counterattitudinal advocacy.",
                        "External justification.",
                        "Hypocrisy induction."
                    ],
                    correctAnswer: "b",
                    feedback: "Modholdningsargumentation opstår, når vi udtaler noget, vi ikke selv tror på, ofte for at opnå ekstern belønning eller undgå straf."
                },
                {
                    chapter: "Chapter 6",
                    question: "6. The dissonance aroused when individuals lack sufficient external justification for having resisted a desired activity or object, usually resulting in the individual devaluing the forbidden activity or object, is called:",
                    options: [
                        "Insufficient punishment.",
                        "Hypocrisy induction.",
                        "Justification of effort.",
                        "Counterattitudinal advocacy."
                    ],
                    correctAnswer: "a",
                    feedback: "Utilstrækkelig straf fører til intern retfærdiggørelse og devaluering af den forbudte aktivitet."
                },
                {
                    chapter: "Chapter 6",
                    question: "7. When people volunteer to perform a difficult, unpleasant, or embarrassing procedure to obtain a goal, they often come to like the goal more because of:",
                    options: [
                        "The foot-in-the-door technique.",
                        "The door-in-the-face technique.",
                        "Justification of effort.",
                        "Lowballing."
                    ],
                    correctAnswer: "c",
                    feedback: "Retfærdiggørelse af anstrengelse: Jo mere vi kæmper for noget, jo mere værdsætter vi det."
                },
                {
                    chapter: "Chapter 6",
                    question: "8. A sales strategy whereby a customer is first offered a low price, then is informed of additional costs, is called:",
                    options: [
                        "Lowballing.",
                        "Foot-in-the-door technique.",
                        "Door-in-the-face technique.",
                        "Pre-giving."
                    ],
                    correctAnswer: "a",
                    feedback: "Lowballing er en overtalelsesteknik, hvor man først får en lav pris, der senere øges."
                },
                {
                    chapter: "Chapter 6",
                    question: "9. The process of making people aware of the dissonance between what they are doing and what they preach to others is called:",
                    options: [
                        "Self-affirmation.",
                        "Hypocrisy induction.",
                        "System justification.",
                        "Terror management theory."
                    ],
                    correctAnswer: "b",
                    feedback: "Hykleri-induktion bruges til at ændre adfærd ved at gøre folk opmærksomme på deres inkonsekvens."
                },
                {
                    chapter: "Chapter 6",
                    question: "10. Which of the following is true about how cognitive dissonance can be used to promote prosocial behavior?",
                    options: [
                        "It is most effective when people are forced to change their attitudes.",
                        "It is most effective when people are made to feel that they are acting hypocritically.",
                        "It is most effective when people are given large external rewards for prosocial behavior.",
                        "It is most effective when people are unaware of the dissonance they are experiencing."
                    ],
                    correctAnswer: "b",
                    feedback: "Hykleri-induktion er en effektiv måde at bruge dissonans til at fremme positiv adfærd."
                },
                // Chapter 7
                {
                    chapter: "Chapter 7",
                    question: "1. An evaluation of a person, object, or idea is called a(n):",
                    options: [
                        "Belief.",
                        "Value.",
                        "Attitude.",
                        "Opinion."
                    ],
                    correctAnswer: "c",
                    feedback: "En holdning er en vurdering af et objekt, en person eller en idé, der har en affektiv komponent."
                },
                {
                    chapter: "Chapter 7",
                    question: "2. The three components of attitudes are:",
                    options: [
                        "Cognitive, affective, and behavioral.",
                        "Positive, negative, and neutral.",
                        "Explicit, implicit, and ambivalent.",
                        "Stable, unstable, and changing."
                    ],
                    correctAnswer: "a",
                    feedback: "Holdninger består typisk af en tankemæssig (kognitiv), en følelsesmæssig (affektiv) og en adfærdsmæssig komponent."
                },
                {
                    chapter: "Chapter 7",
                    question: "3. Attitudes based primarily on people's beliefs about the properties of an attitude object are called:",
                    options: [
                        "Affectively based attitudes.",
                        "Behaviorally based attitudes.",
                        "Cognitively based attitudes.",
                        "Implicit attitudes."
                    ],
                    correctAnswer: "c",
                    feedback: "Kognitivt baserede holdninger bygger på fakta og objektive egenskaber."
                },
                {
                    chapter: "Chapter 7",
                    question: "4. Attitudes based more on people's feelings and values than on their beliefs about the nature of an attitude object are called:",
                    options: [
                        "Affectively based attitudes.",
                        "Behaviorally based attitudes.",
                        "Cognitively based attitudes.",
                        "Explicit attitudes."
                    ],
                    correctAnswer: "a",
                    feedback: "Affektivt baserede holdninger er rodfæstet i følelser og værdier."
                },
                {
                    chapter: "Chapter 7",
                    question: "5. The theory that under certain conditions, people don't know how they feel until they see how they behave is called:",
                    options: [
                        "Cognitive dissonance theory.",
                        "Self-perception theory.",
                        "Social judgment theory.",
                        "Theory of planned behavior."
                    ],
                    correctAnswer: "b",
                    feedback: "Selvperceptionsteorien beskriver, hvordan vi udleder vores egne holdninger ud fra observation af vores adfærd."
                },
                {
                    chapter: "Chapter 7",
                    question: "6. Attitudes that we consciously endorse and can easily report are called:",
                    options: [
                        "Implicit attitudes.",
                        "Explicit attitudes.",
                        "Ambivalent attitudes.",
                        "Affective attitudes."
                    ],
                    correctAnswer: "b",
                    feedback: "Eksplicitte holdninger er dem, vi er bevidst om og kan udtrykke."
                },
                {
                    chapter: "Chapter 7",
                    question: "7. Attitudes that exist outside of conscious awareness are called:",
                    options: [
                        "Implicit attitudes.",
                        "Explicit attitudes.",
                        "Cognitive attitudes.",
                        "Behavioral attitudes."
                    ],
                    correctAnswer: "a",
                    feedback: "Implicitte holdninger er ubevidste og kan påvirke vores adfærd, uden at vi er klar over det."
                },
                {
                    chapter: "Chapter 7",
                    question: "8. The theory that the best predictors of people's planned, deliberate behaviors are their attitudes toward specific behaviors, subjective norms, and perceived behavioral control is called:",
                    options: [
                        "The Elaboration Likelihood Model.",
                        "The Heuristic-Systematic Model.",
                        "The Theory of Planned Behavior.",
                        "The Self-Perception Theory."
                    ],
                    correctAnswer: "c",
                    feedback: "Teorien om planlagt adfærd fokuserer på specifikke holdninger, sociale normer og opfattet kontrol som forudsigere for adfærd."
                },
                {
                    chapter: "Chapter 7",
                    question: "9. The two routes to persuasion according to the Elaboration Likelihood Model are:",
                    options: [
                        "Cognitive and affective.",
                        "Explicit and implicit.",
                        "Central and peripheral.",
                        "Direct and indirect."
                    ],
                    correctAnswer: "c",
                    feedback: "Central og perifer rute er de to hovedveje, hvorpå holdningsændringer sker ifølge ELM."
                },
                {
                    chapter: "Chapter 7",
                    question: "10. Which route to persuasion is most likely to result in long-lasting attitude change?",
                    options: [
                        "The peripheral route.",
                        "The central route.",
                        "The implicit route.",
                        "The affective route."
                    ],
                    correctAnswer: "b",
                    feedback: "Den centrale rute, som involverer grundig overvejelse af argumenter, fører til mere varige holdningsændringer."
                },
                // Chapter 8
                {
                    chapter: "Chapter 8",
                    question: "1. A change in one’s behavior due to the real or imagined influence of other people is called:",
                    options: [
                        "Conformity.",
                        "Obedience.",
                        "Compliance.",
                        "Persuasion."
                    ],
                    correctAnswer: "a",
                    feedback: "Konformitet er en adfærdsændring forårsaget af reelt eller forestillet pres fra andre."
                },
                {
                    chapter: "Chapter 8",
                    question: "2. The desire to go along with a group to be liked and accepted is called:",
                    options: [
                        "Informational social influence.",
                        "Normative social influence.",
                        "Obedience.",
                        "Compliance."
                    ],
                    correctAnswer: "b",
                    feedback: "Normativ social indflydelse er, når vi tilpasser os for at passe ind og blive accepteret."
                },
                {
                    chapter: "Chapter 8",
                    question: "3. The influence of other people that leads us to conform because we see them as a source of information to guide our behavior is called:",
                    options: [
                        "Informational social influence.",
                        "Normative social influence.",
                        "Obedience.",
                        "Compliance."
                    ],
                    correctAnswer: "a",
                    feedback: "Informationel social indflydelse opstår, når vi bruger andre som informationskilde i usikre situationer."
                },
                {
                    chapter: "Chapter 8",
                    question: "4. Which of the following conditions is most likely to lead to conformity due to informational social influence?",
                    options: [
                        "When the situation is ambiguous.",
                        "When the group is a large crowd.",
                        "When the group is composed of friends.",
                        "When the situation is not important."
                    ],
                    correctAnswer: "a",
                    feedback: "Usikkerhed driver os til at se til andre for information og vejledning."
                },
                {
                    chapter: "Chapter 8",
                    question: "5. The most crucial factor in whether people will conform to the group in an ambiguous situation is:",
                    options: [
                        "The number of people in the group.",
                        "The person's desire to be liked by the group.",
                        "Whether the situation is a crisis.",
                        "The importance of being accurate."
                    ],
                    correctAnswer: "d",
                    feedback: "Jo vigtigere det er at have ret, jo mere sandsynligt er det, at vi lader os påvirke informationelt."
                },
                {
                    chapter: "Chapter 8",
                    question: "6. The classic study on obedience to authority was conducted by:",
                    options: [
                        "Solomon Asch.",
                        "Stanley Milgram.",
                        "Philip Zimbardo.",
                        "Muzafer Sherif."
                    ],
                    correctAnswer: "b",
                    feedback: "Milgrams forsøg er berømt for at vise, hvor langt folk vil gå i lydighed over for en autoritet."
                },
                {
                    chapter: "Chapter 8",
                    question: "7. In Milgram's original study, what percentage of participants administered the full 450-volt shock?",
                    options: [
                        "10%.",
                        "35%.",
                        "65%.",
                        "90%."
                    ],
                    correctAnswer: "c",
                    feedback: "Milgrams studie viste, at 65% af deltagerne adlød autoriteten til det yderste."
                },
                {
                    chapter: "Chapter 8",
                    question: "8. The finding that when people obey authority, they often justify their behavior by saying, “I was only following orders,” is consistent with the concept of:",
                    options: [
                        "Self-justification.",
                        "Cognitive dissonance.",
                        "Social identity.",
                        "Agentic state."
                    ],
                    correctAnswer: "d",
                    feedback: "Den agentiske tilstand beskriver, når en person ser sig selv som et redskab for en autoritet, og derfor ikke er ansvarlig for sine handlinger."
                },
                {
                    chapter: "Chapter 8",
                    question: "9. A major difference between Asch's study and Milgram's study is that:",
                    options: [
                        "Asch's study involved peer pressure, while Milgram's involved obedience to an authority figure.",
                        "Asch's study involved obedience, while Milgram's involved conformity.",
                        "Asch's study involved aggression, while Milgram's involved helping.",
                        "Asch's study was an experiment, while Milgram's was a correlational study."
                    ],
                    correctAnswer: "a",
                    feedback: "Asch's forsøg handlede om konformitet til en gruppe, mens Milgrams handlede om lydighed over for en autoritetsfigur."
                },
                {
                    chapter: "Chapter 8",
                    question: "10. The finding that people are more likely to comply with a request if they have a personal relationship with the requester is an example of:",
                    options: [
                        "The norm of reciprocity.",
                        "The foot-in-the-door technique.",
                        "The door-in-the-face technique.",
                        "Commitment and consistency."
                    ],
                    correctAnswer: "b",
                    feedback: "Foot-in-the-door-teknikken fungerer, fordi folk ønsker at være konsekvente med deres tidligere handlinger."
                },
                // Chapter 9
                {
                    chapter: "Chapter 9",
                    question: "1. A group is defined as two or more people who:",
                    options: [
                        "Are in the same place at the same time.",
                        "Interact with each other and are interdependent.",
                        "Share the same opinions and beliefs.",
                        "Are related by blood or marriage."
                    ],
                    correctAnswer: "b",
                    feedback: "En gruppe er kendetegnet ved interaktion og gensidig afhængighed, hvor de påvirker hinanden."
                },
                {
                    chapter: "Chapter 9",
                    question: "2. The tendency for people to perform better on simple tasks and worse on complex tasks when in the presence of others is called:",
                    options: [
                        "Social loafing.",
                        "Social facilitation.",
                        "Deindividuation.",
                        "Groupthink."
                    ],
                    correctAnswer: "b",
                    feedback: "Social facilitation er effekten af andres tilstedeværelse på vores præstation."
                },
                {
                    chapter: "Chapter 9",
                    question: "3. The tendency for people to do worse on simple tasks but better on complex tasks when they are in the presence of others and their individual performance cannot be evaluated is called:",
                    options: [
                        "Social facilitation.",
                        "Social loafing.",
                        "Deindividuation.",
                        "Group polarization."
                    ],
                    correctAnswer: "b",
                    feedback: "Social loafing (social dovenskab) opstår, når man slapper mere af, fordi man ikke bliver individuelt vurderet."
                },
                {
                    chapter: "Chapter 9",
                    question: "4. The loosening of normal constraints on behavior when people can't be identified (such as when they are in a crowd) is called:",
                    options: [
                        "Social facilitation.",
                        "Social loafing.",
                        "Deindividuation.",
                        "Groupthink."
                    ],
                    correctAnswer: "c",
                    feedback: "Deindividuation fører til, at folk føler sig mindre ansvarlige og er mere tilbøjelige til at handle impulsivt, når de er anonyme i en gruppe."
                },
                {
                    chapter: "Chapter 9",
                    question: "5. The idea that groups can lead to poorer decisions because they prioritize group harmony over critical thinking is called:",
                    options: [
                        "Group polarization.",
                        "Transactive memory.",
                        "Process loss.",
                        "Groupthink."
                    ],
                    correctAnswer: "d",
                    feedback: "Groupthink er en beslutningsproces, hvor enighed prioriteres over rationel beslutningstagning."
                },
                {
                    chapter: "Chapter 9",
                    question: "6. Which of the following is a symptom of groupthink?",
                    options: [
                        "The group seeks out and considers all available information.",
                        "The group members express their dissenting opinions freely.",
                        "The illusion of invulnerability and moral certainty.",
                        "The group actively encourages a devil's advocate."
                    ],
                    correctAnswer: "c",
                    feedback: "En illusion om usårlighed er et centralt symptom på groupthink, hvor gruppen overvurderer sine evner."
                },
                {
                    chapter: "Chapter 9",
                    question: "7. The tendency for groups to make decisions that are more extreme than the initial inclinations of their members is called:",
                    options: [
                        "Groupthink.",
                        "Group polarization.",
                        "Social loafing.",
                        "Deindividuation."
                    ],
                    correctAnswer: "b",
                    feedback: "Gruppepolarisering sker, når gruppemedlemmernes holdninger bliver mere ekstreme efter diskussion."
                },
                {
                    chapter: "Chapter 9",
                    question: "8. The cooperative strategy of giving up an initial position and changing to accommodate the other person's position is a characteristic of:",
                    options: [
                        "Integrative solutions.",
                        "Conciliation.",
                        "Bargaining.",
                        "Negotiation."
                    ],
                    correctAnswer: "d",
                    feedback: "Forhandling er en kommunikationsform, der har til formål at nå til en gensidigt acceptabel løsning."
                },
                {
                    chapter: "Chapter 9",
                    question: "9. When a leader of a group focuses on getting the work done, he is performing what kind of leadership?",
                    options: [
                        "Relationship-oriented.",
                        "Transactional.",
                        "Task-oriented.",
                        "Transformational."
                    ],
                    correctAnswer: "c",
                    feedback: "En opgaveorienteret leder fokuserer på at opnå gruppens mål."
                },
                {
                    chapter: "Chapter 9",
                    question: "10. When a leader focuses on the feelings and well-being of group members, he is performing what kind of leadership?",
                    options: [
                        "Task-oriented.",
                        "Relationship-oriented.",
                        "Transactional.",
                        "Transformational."
                    ],
                    correctAnswer: "b",
                    feedback: "En relationsorienteret leder fokuserer på at opbygge morale og løse konflikter i gruppen."
                },
                // Chapter 10
                {
                    chapter: "Chapter 10",
                    question: "1. The single best predictor of whether two people will get together is:",
                    options: [
                        "Physical attractiveness.",
                        "Similarity.",
                        "Propinquity.",
                        "Reciprocal liking."
                    ],
                    correctAnswer: "c",
                    feedback: "Nærhedseffekten er den bedste enkeltfaktor til at forudsige, om to mennesker bliver tæt på hinanden."
                },
                {
                    chapter: "Chapter 10",
                    question: "2. The finding that the more we see and interact with people, the more likely we are to start a relationship with them, is called:",
                    options: [
                        "The mere exposure effect.",
                        "The propinquity effect.",
                        "The similarity effect.",
                        "The proximity effect."
                    ],
                    correctAnswer: "b",
                    feedback: "Nærhedseffekten, også kaldet propinquity, er en af de stærkeste faktorer for tiltrækning."
                },
                {
                    chapter: "Chapter 10",
                    question: "3. The finding that the more we are exposed to a stimulus, the more we are to like it, is called:",
                    options: [
                        "The propinquity effect.",
                        "The mere exposure effect.",
                        "The similarity effect.",
                        "The reciprocal liking effect."
                    ],
                    correctAnswer: "b",
                    feedback: "Blot eksponering øger vores positive følelser over for en stimulus."
                },
                {
                    chapter: "Chapter 10",
                    question: "4. The belief that “birds of a feather flock together” reflects which of the following principles of attraction?",
                    options: [
                        "Propinquity.",
                        "Mere exposure.",
                        "Similarity.",
                        "Reciprocal liking."
                    ],
                    correctAnswer: "c",
                    feedback: "Ligheder i holdninger, værdier og personlighed er en stærk tiltrækningsfaktor."
                },
                {
                    chapter: "Chapter 10",
                    question: "5. People who are physically attractive are often seen as possessing other desirable traits. This phenomenon is called:",
                    options: [
                        "The halo effect.",
                        "The similarity effect.",
                        "The physical attractiveness stereotype.",
                        "The matching hypothesis."
                    ],
                    correctAnswer: "c",
                    feedback: "Den fysiske attraktions-stereotype er antagelsen om, at smukke mennesker også er gode mennesker."
                },
                {
                    chapter: "Chapter 10",
                    question: "6. The finding that we like others who like us is called:",
                    options: [
                        "Reciprocal liking.",
                        "Similarity.",
                        "The halo effect.",
                        "The propinquity effect."
                    ],
                    correctAnswer: "a",
                    feedback: "Gensidig tiltrækning er en af de mest basale og stærkeste forudsigere for venskab og romantiske forhold."
                },
                {
                    chapter: "Chapter 10",
                    question: "7. The two types of love proposed by Elaine Hatfield are:",
                    options: [
                        "Companionate love and passionate love.",
                        "Infatuated love and romantic love.",
                        "Fatuous love and consummate love.",
                        "Liking and loving."
                    ],
                    correctAnswer: "a",
                    feedback: "Hatfield skelner mellem lidenskabelig kærlighed (intens, kortvarig) og kammeratlig kærlighed (dyb, stabil)."
                },
                {
                    chapter: "Chapter 10",
                    question: "8. The theory that our satisfaction in a relationship depends on our perceptions of the rewards and costs, our comparison level, and our comparison level for alternatives is called:",
                    options: [
                        "Attachment theory.",
                        "Social exchange theory.",
                        "The investment model.",
                        "The equity theory."
                    ],
                    correctAnswer: "b",
                    feedback: "Teorien om social udveksling ser forhold som en 'økonomisk' transaktion, hvor vi vejer omkostninger mod belønninger."
                },
                {
                    chapter: "Chapter 10",
                    question: "9. The theory that people are happiest with relationships in which the rewards and costs experienced by both parties are roughly equal is called:",
                    options: [
                        "Social exchange theory.",
                        "The investment model.",
                        "The equity theory.",
                        "Attachment theory."
                    ],
                    correctAnswer: "c",
                    feedback: "Ligevægtsteorien hævder, at folk trives bedst i forhold, der føles retfærdige for begge parter."
                },
                {
                    chapter: "Chapter 10",
                    question: "10. According to the investment model, which of the following predicts whether people will stay in a relationship?",
                    options: [
                        "Their satisfaction with the relationship.",
                        "The level of investment in the relationship.",
                        "The quality of alternatives to the relationship.",
                        "All of the above."
                    ],
                    correctAnswer: "d",
                    feedback: "Investeringsmodellen ser på tilfredshed, investering og alternativer som nøglefaktorer for, om et forhold holder."
                }
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
    function populateCategorySelect() {
        console.log("Populating category select...");
        categorySelect.innerHTML = '';
        // Tilføj "Bland alle kapitler" som den første mulighed
        const allCategoriesOption = document.createElement('option');
        allCategoriesOption.value = 'all_chapters_shuffled';
        allCategoriesOption.textContent = 'Bland alle kapitler';
        categorySelect.appendChild(allCategoriesOption);

        for (const category in allFlashcardCategories) {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        }
        // Vælg den første kategori (som nu er "Bland alle kapitler") som standard
        categorySelect.value = 'all_chapters_shuffled';
        loadCategory(categorySelect.value);
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
            // Saml alle kort fra alle kategorier
            let allCards = [];
            for (const category in allFlashcardCategories) {
                allCards = allCards.concat(allFlashcardCategories[category]);
            }
            currentFlashcards = allCards;
        } else {
            currentFlashcards = [...(allFlashcardCategories[categoryName] || [])];
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
        if (currentFlashcards.length > 0 && currentFlashcardIndex < currentFlashcards.length) {
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
        } else {
            frontTextElement.textContent = "Ingen kort i denne kategori.";
            backTextElement.textContent = "Vælg en kategori for at starte.";
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

    function navigateFlashcards(direction) {
        console.log(`Navigating flashcards: ${direction}`);
        if (currentFlashcards.length === 0) return;

        cardContainerWrapper.classList.add('fade-out');

        setTimeout(() => {
            currentFlashcardIndex += direction;
            if (currentFlashcardIndex < 0) currentFlashcardIndex = 0;
            if (currentFlashcardIndex >= currentFlashcards.length) currentFlashcardIndex = currentFlashcards.length - 1;
            
            updateFlashcardUI();
            
            cardContainerWrapper.classList.remove('fade-out');
        }, 300);
    }

    function handleFeedback(feedbackType) {
        console.log(`Handling feedback: ${feedbackType}`);
        if (currentFlashcards.length === 0 || currentFlashcardIndex < 0 || currentFlashcardIndex >= currentFlashcards.length) {
            console.log("No current flashcard to give feedback on.");
            return;
        }

        const currentCard = currentFlashcards[currentFlashcardIndex];
        
        // Remove the card from cardsToReview and masteredCards first to ensure correct state after feedback
        cardsToReview = cardsToReview.filter(card => card !== currentCard);
        masteredCards = masteredCards.filter(card => card !== currentCard);

        switch (feedbackType) {
            case 'correct':
                masteredCards.push(currentCard);
                console.log("Card marked as correct.");
                break;
            case 'unsure':
                cardsToReview.push(currentCard);
                console.log("Card marked as unsure.");
                break;
            case 'incorrect':
                cardsToReview.push(currentCard);
                console.log("Card marked as incorrect.");
                break;
        }

        // Gå til næste kort
        navigateToNextFlashcardAfterFeedback();
    }

    function navigateToNextFlashcardAfterFeedback() {
        console.log("Navigating to next flashcard after feedback.");
        cardContainerWrapper.classList.add('fade-out');

        setTimeout(() => {
            // Update currentDeck based on latest feedback
            currentDeck = [];
            // Add cards to review first, then other unmastered cards (that are not already in cardsToReview)
            currentDeck.push(...cardsToReview);
            currentDeck.push(...currentFlashcards.filter(card => 
                !masteredCards.includes(card) && !cardsToReview.includes(card)
            ));
            shuffleArray(currentDeck); // Shuffle the deck for next round of review

            console.log(`Current Deck length: ${currentDeck.length}, Mastered Cards: ${masteredCards.length}, Cards To Review: ${cardsToReview.length}`);

            if (currentDeck.length === 0) {
                // All cards mastered or reviewed
                frontTextElement.textContent = "Alle kort er gennemgået! Godt arbejde!";
                backTextElement.textContent = "Du kan blande kortene for at starte forfra eller vælge en ny kategori.";
                progressText.textContent = "Færdig!";
                prevBtn.disabled = true;
                nextBtn.disabled = true;
                shuffleBtn.disabled = false; // Allow shuffling to restart
                flashcardFeedbackButtons.classList.add('hidden');
                cardContainerWrapper.classList.remove('fade-out');
                currentFlashcardIndex = -1; // Indicate no card is currently active
                console.log("All cards completed.");
                return;
            }

            // Find the index of the next card in the *original* currentFlashcards array
            // This ensures currentFlashcardIndex always refers to the original array
            currentFlashcardIndex = currentFlashcards.indexOf(currentDeck[0]); 
            console.log(`Next card index in original array: ${currentFlashcardIndex}`);
            
            updateFlashcardUI();
            cardContainerWrapper.classList.remove('fade-out');
        }, 300);
    }

    function resetFlashcardFeedback() {
        console.log("Resetting flashcard feedback and deck.");
        cardsToReview = [];
        masteredCards = [];
        currentDeck = [...currentFlashcards]; // Sæt det aktuelle dæk til alle kort ved start
        shuffleArray(currentDeck); // Bland kortene i det initiale dæk
        if (currentDeck.length > 0) {
            currentFlashcardIndex = currentFlashcards.indexOf(currentDeck[0]); // Sørg for at index peger på første kort i det blandede dæk
            flashcardFeedbackButtons.classList.remove('hidden'); // Vis knapperne, hvis der er kort
        } else {
            currentFlashcardIndex = -1; // Ingen aktive kort
            flashcardFeedbackButtons.classList.add('hidden'); // Skjul knapperne
        }
    }

    // --- Flashcard Event Listeners ---
    card.addEventListener('click', () => {
        if (currentFlashcards.length > 0 && currentFlashcardIndex !== -1) { // Check if a card is active
            card.classList.toggle('is-flipped');
            isFlipped = !isFlipped;
            // After flipping, update content to show correct side
            updateCardContent(); // Kald updateCardContent for at sikre korrekt indhold vises efter flip
        }
    });

    // Genskab event listener for nextBtn for simpel fremad-navigation
    nextBtn.addEventListener('click', () => {
        // Hvis der er kort, og vi ikke er ved det sidste kort, navigér.
        if (currentFlashcards.length > 0 && currentFlashcardIndex < currentFlashcards.length - 1) {
            navigateFlashcards(1);
        }
    });

    // Genskab event listener for prevBtn for simpel bagud-navigation
    prevBtn.addEventListener('click', () => {
        // Hvis der er kort, og vi ikke er ved det første kort, navigér.
        if (currentFlashcards.length > 0 && currentFlashcardIndex > 0) {
            navigateFlashcards(-1);
        }
    });
    
    categorySelect.addEventListener('change', (event) => loadCategory(event.target.value));
    shuffleBtn.addEventListener('click', shuffleCurrentCards);

    showBackFirstToggle.addEventListener('change', () => {
        showBackFirst = showBackFirstToggle.checked;
        updateFlashcardUI();
    });
    
    document.addEventListener('keydown', (e) => {
        if (flashcardSection.style.display === 'block' && currentFlashcards.length > 0 && currentFlashcardIndex !== -1) { // Kun respondere hvis flashcard sektionen er aktiv og der er et aktivt kort
            if (e.key === 'ArrowLeft' && !prevBtn.disabled) { // Pil venstre for 'Forrige'
                navigateFlashcards(-1);
            } else if (e.key === 'ArrowRight' && !nextBtn.disabled) { // Pil højre for 'Næste'
                navigateFlashcards(1);
            } else if (e.key === ' ') { // Mellemrum til at vende kort
                e.preventDefault();
                card.classList.toggle('is-flipped');
                isFlipped = !isFlipped;
                // After flipping, update content to show correct side
                updateCardContent(); // Kald updateCardContent for at sikre korrekt indhold vises efter flip
            } else if (e.key === '1') { // Tal 1 for Rigtigt
                e.preventDefault();
                handleFeedback('correct');
            } else if (e.key === '2') { // Tal 2 for Ikke sikker
                e.preventDefault();
                handleFeedback('unsure');
            } else if (e.key === '3') { // Tal 3 for Forkert
                e.preventDefault();
                handleFeedback('incorrect');
            }
        }
    });

    // --- Flashcard Feedback Event Listeners ---
    feedbackCorrectBtn.addEventListener('click', () => handleFeedback('correct'));
    feedbackUnsureBtn.addEventListener('click', () => handleFeedback('unsure'));
    feedbackIncorrectBtn.addEventListener('click', () => handleFeedback('incorrect'));


    // --- Quiz Functions (Common) ---
    function populateQuizChapterSelect() {
        console.log("Populating quiz chapter select...");
        quizChapterSelect.innerHTML = '';

        // Initialiser allChapters her, lige før brug
        const allChapters = quizQuestions.length > 0 ? [...new Set(quizQuestions.map(q => q.chapter))] : []; 

        if (allChapters.length > 0) {
            // Tilføj "Bland alle kapitler" som den første mulighed for quizzen
            const allQuizChaptersOption = document.createElement('option');
            allQuizChaptersOption.value = 'all_quiz_chapters_shuffled';
            allQuizChaptersOption.textContent = 'Bland alle kapitler';
            quizChapterSelect.appendChild(allQuizChaptersOption);

            allChapters.forEach(chapter => {
                const option = document.createElement('option');
                option.value = chapter;
                option.textContent = chapter;
                // Select only Chapter 1 by default initially if 'all_quiz_chapters_shuffled' is not selected
                if (parseInt(chapter.replace('Chapter ', '')) === 1 && selectedQuizChapters.length === 0) { // Kun vælg Kap 1, hvis ingen er valgt
                    option.selected = true;
                    selectedQuizChapters.push(chapter); // Tilføj Kapitel 1 til valgte kapitler som standard
                }
                quizChapterSelect.appendChild(option);
            });
            // Hvis intet kapitel var valgt, og der er quizspørgsmål, vælg "Bland alle kapitler" som standard
            if (selectedQuizChapters.length === 0 && quizQuestions.length > 0) {
                quizChapterSelect.value = 'all_quiz_chapters_shuffled';
                selectedQuizChapters = ['all_quiz_chapters_shuffled'];
            }
            filterQuizQuestions();
        } else {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Ingen quiz-spørgsmål tilgængelige';
            option.disabled = true;
            option.selected = true;
            quizChapterSelect.appendChild(option);
            // Deaktiver startknapper, hvis ingen spørgsmål
            startAllQuizBtn.disabled = true;
            startOneByOneQuizBtn.disabled = true;
        }
    }

    function filterQuizQuestions() {
        console.log("Filtering quiz questions...");
        selectedQuizChapters = Array.from(quizChapterSelect.selectedOptions).map(option => option.value);
        
        if (selectedQuizChapters.includes('all_quiz_chapters_shuffled')) {
            filteredQuizQuestions = [...quizQuestions]; // Inkluder alle spørgsmål
        } else {
            filteredQuizQuestions = quizQuestions.filter(q => selectedQuizChapters.includes(q.chapter));
        }
        
        shuffleArray(filteredQuizQuestions); // Shuffle filtered questions
        
        // Reset state for both quiz modes
        resetAllQuestionsQuiz();
        resetOneByOneQuiz();
        
        updateActiveChaptersDisplay(); // Update display for one-by-one mode
    }

    // --- Quiz Functions (All Questions Mode) ---
    function renderQuizAllQuestions() {
        console.log("Rendering all questions quiz...");
        quizQuestionContainer.innerHTML = '';
        if (filteredQuizQuestions.length === 0) {
            quizQuestionContainer.innerHTML = '<p class="text-center text-slate-600 text-lg font-medium">Vælg venligst mindst ét kapitel for at starte quizzen.</p>';
            submitQuizBtn.disabled = true;
            startAllQuizBtn.disabled = true; // Deaktiver startknappen hvis ingen spørgsmål
            return;
        }
        startAllQuizBtn.disabled = false; // Aktiver startknappen, hvis der er spørgsmål

        filteredQuizQuestions.forEach((q, qIndex) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            questionCard.innerHTML = `
                <p class="font-semibold text-xl mb-6 text-slate-900">${q.question}</p>
                <div class="options-container">
                    ${q.options.map((option, oIndex) => `
                        <label class="answer-option" data-question-index="${qIndex}" data-option-index="${String.fromCharCode(97 + oIndex)}">
                            <input type="radio" name="question-${qIndex}" value="${String.fromCharCode(97 + oIndex)}" class="form-radio text-blue-600">
                            <span class="ml-2">${String.fromCharCode(97 + oIndex)}. ${option}</span>
                        </label>
                    `).join('')}
                </div>
                <p class="explanation mt-4 hidden" id="explanation-${qIndex}"></p>
            `;
            quizQuestionContainer.appendChild(questionCard);
        });

        // Re-attach event listeners for radio buttons to store answers
        quizQuestionContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (event) => {
                const qIndex = event.target.name.split('-')[1];
                allUserAnswers[qIndex] = event.target.value;
                checkAllQuestionsAnswered();
            });
        });
        checkAllQuestionsAnswered(); // Initial check
    }

    function checkAllQuestionsAnswered() {
        // RETTELSE HER: Brug allUserAnswers for "Alle spørgsmål" tilstand
        const allAnswered = filteredQuizQuestions.every((_, index) => allUserAnswers.hasOwnProperty(index));
        submitQuizBtn.disabled = !allAnswered;
    }

    function submitAllQuestionsQuiz() {
        console.log("Submitting all questions quiz...");
        let correctCount = 0;
        filteredQuizQuestions.forEach((q, qIndex) => {
            const selectedOption = allUserAnswers[qIndex];
            const correctOption = q.correctAnswer;
            const optionsContainer = quizQuestionContainer.querySelector(`[name="question-${qIndex}"]`).closest('.options-container');
            const explanationElement = document.getElementById(`explanation-${qIndex}`);

            // Disable all radio buttons for this question
            optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);

            optionsContainer.querySelectorAll('.answer-option').forEach(label => {
                const optionValue = label.querySelector('input').value;
                if (optionValue === correctOption) {
                    label.classList.add('correct-answer');
                }
                if (optionValue === selectedOption && optionValue !== correctOption) {
                    label.classList.add('incorrect-answer');
                }
            });

            if (selectedOption === correctOption) {
                correctCount++;
                explanationElement.textContent = `Korrekt! ${q.feedback}`;
                explanationElement.classList.add('correct');
                explanationElement.classList.remove('incorrect');
            } else {
                explanationElement.textContent = `Forkert. Det korrekte svar var ${correctOption.toUpperCase()}. ${q.feedback}`;
                explanationElement.classList.add('incorrect');
                explanationElement.classList.remove('correct');
            }
            explanationElement.classList.remove('hidden');
        });

        quizResults.textContent = `Du svarede korrekt på ${correctCount} ud af ${filteredQuizQuestions.length} spørgsmål.`;
        quizResults.classList.remove('hidden');
        submitQuizBtn.disabled = true;
        restartAllQuizBtn.classList.remove('hidden');
    }

    function resetAllQuestionsQuiz() {
        console.log("Resetting all questions quiz...");
        allUserAnswers = {};
        quizResults.classList.add('hidden');
        restartAllQuizBtn.classList.add('hidden');
        renderQuizAllQuestions(); // Re-render quiz with current chapter selection
        submitQuizBtn.disabled = filteredQuizQuestions.length === 0;
    }

    // --- Quiz Functions (One Question at a Time Mode) ---
    function updateActiveChaptersDisplay() {
        console.log("Updating active chapters display...");
        if (selectedQuizChapters.length > 0) {
            // Filtrer "Bland alle kapitler" fra, hvis andre specifikke kapitler er valgt
            const displayChapters = selectedQuizChapters.filter(chapter => chapter !== 'all_quiz_chapters_shuffled');
            if (displayChapters.length === 0 && selectedQuizChapters.includes('all_quiz_chapters_shuffled')) {
                activeChaptersDisplay.textContent = 'Alle kapitler (tilfældigt)';
            } else if (displayChapters.length > 0) {
                activeChaptersDisplay.textContent = displayChapters.join(', ');
            } else {
                activeChaptersDisplay.textContent = 'Ingen kapitler valgt';
            }
        } else {
            activeChaptersDisplay.textContent = 'Ingen kapitler valgt';
        }
    }

    function startOneByOneQuiz() {
        console.log("Starting one-by-one quiz...");
        // Reinitialize active questions based on current filtered questions
        oneByOneActiveQuestions = filteredQuizQuestions.map(q => ({
            ...q,
            correctStreak: oneByOneCorrectStreaks[q.question] || 0 // Restore streak if exists
        }));
        
        // Remove questions already mastered from previous sessions if they meet criterion
        oneByOneActiveQuestions = oneByOneActiveQuestions.filter(q => q.correctStreak < 2);

        shuffleArray(oneByOneActiveQuestions);
        currentOneByOneQuestionIndex = 0;

        singleQuizResults.classList.add('hidden');
        restartSingleQuizBtn.classList.add('hidden');

        if (oneByOneActiveQuestions.length > 0) {
            singleQuestionDisplay.classList.remove('hidden');
            renderSingleQuestion(oneByOneActiveQuestions[currentOneByOneQuestionIndex]);
            updateSingleQuizUI();
        } else {
            singleQuestionDisplay.classList.add('hidden');
            singleQuizProgress.textContent = "Ingen spørgsmål tilgængelige. Vælg kapitler eller start forfra.";
            checkSingleAnswerBtn.disabled = true;
            nextSingleQuestionBtn.classList.add('hidden');
            restartSingleQuizBtn.classList.remove('hidden');
        }
    }

    function renderSingleQuestion(question) {
        console.log("Rendering single question...");
        singleQuestionText.textContent = question.question;
        singleOptionsContainer.innerHTML = '';
        singleExplanationText.classList.add('hidden');
        singleExplanationText.classList.remove('correct', 'incorrect');
        oneByOneUserAnswer = null; // Reset user answer for the new question

        question.options.forEach((option, oIndex) => {
            const label = document.createElement('label');
            label.className = 'answer-option';
            label.innerHTML = `
                <input type="radio" name="single-question-option" value="${String.fromCharCode(97 + oIndex)}" class="form-radio text-blue-600">
                <span class="ml-2">${String.fromCharCode(97 + oIndex)}. ${option}</span>
            `;
            label.addEventListener('click', () => {
                if (label.querySelector('input').disabled === false) { // Only allow selection if not already checked
                    oneByOneUserAnswer = String.fromCharCode(97 + oIndex);
                    checkSingleAnswerBtn.disabled = false; // Enable check button on selection
                }
            });
            singleOptionsContainer.appendChild(label);
        });

        // Enable check button, disable next button
        checkSingleAnswerBtn.disabled = true; // Initially disabled until an option is chosen
        nextSingleQuestionBtn.classList.add('hidden');
        singleQuestionDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function updateSingleQuizUI() {
        console.log("Updating single quiz UI...");
        singleQuizProgress.textContent = `Spørgsmål ${currentOneByOneQuestionIndex + 1} / ${oneByOneActiveQuestions.length}`;
        // checkSingleAnswerBtn.disabled = (oneByOneUserAnswer === null); // Removed, now enabled by option click
        if (oneByOneActiveQuestions.length === 0) {
            singleQuizProgress.textContent = `Færdig! Du har mestret alle ${filteredQuizQuestions.length} spørgsmål i de valgte kapitler.`;
            singleQuestionDisplay.classList.add('hidden');
            checkSingleAnswerBtn.classList.add('hidden');
            nextSingleQuestionBtn.classList.add('hidden');
            restartSingleQuizBtn.classList.remove('hidden');
            console.log("All single questions mastered.");
            return;
        } else if (currentOneByOneQuestionIndex >= oneByOneActiveQuestions.length) {
            currentOneByOneQuestionIndex = oneByOneActiveQuestions.length - 1; // Stay on last question if navigated too far
        }
    }

    function checkSingleAnswer() {
        console.log("Checking single answer...");
        const currentQuestion = oneByOneActiveQuestions[currentOneByOneQuestionIndex];
        const selectedOptionValue = oneByOneUserAnswer;
        const correctOptionValue = currentQuestion.correctAnswer;
        const options = singleOptionsContainer.querySelectorAll('.answer-option');

        // Disable all options and check button after checking
        options.forEach(label => {
            label.querySelector('input').disabled = true;
            const optionValue = label.querySelector('input').value;
            if (optionValue === correctOptionValue) {
                label.classList.add('correct-answer');
            }
            if (optionValue === selectedOptionValue && optionValue !== correctOptionValue) {
                label.classList.add('incorrect-answer');
            }
        });
        checkSingleAnswerBtn.disabled = true;
        nextSingleQuestionBtn.classList.remove('hidden');

        if (selectedOptionValue === correctOptionValue) {
            singleExplanationText.textContent = `Korrekt! ${currentQuestion.feedback}`;
            singleExplanationText.classList.add('correct');
            singleExplanationText.classList.remove('incorrect');
            currentQuestion.correctStreak = (currentQuestion.correctStreak || 0) + 1;
            // Store streak globally for persistent tracking across restarts for this mode
            oneByOneCorrectStreaks[currentQuestion.question] = currentQuestion.correctStreak; 
        } else {
            singleExplanationText.textContent = `Forkert. Det korrekte svar var ${correctOptionValue.toUpperCase()}. ${currentQuestion.feedback}`;
            singleExplanationText.classList.add('incorrect');
            singleExplanationText.classList.remove('correct');
            currentQuestion.correctStreak = 0; // Reset streak on incorrect answer
            oneByOneCorrectStreaks[currentQuestion.question] = 0;
        }
        singleExplanationText.classList.remove('hidden');
    }

    function nextSingleQuestion() {
        console.log("Moving to next single question...");
        const currentQuestion = oneByOneActiveQuestions[currentOneByOneQuestionIndex];

        // If question is mastered (correct twice), remove it from active questions
        if (currentQuestion.correctStreak >= 2) {
            oneByOneActiveQuestions.splice(currentOneByOneQuestionIndex, 1);
            // Adjust index if we removed the last question
            if (currentOneByOneQuestionIndex >= oneByOneActiveQuestions.length && oneByOneActiveQuestions.length > 0) {
                currentOneByOneQuestionIndex = oneByOneActiveQuestions.length - 1;
            } else if (oneByOneActiveQuestions.length === 0) {
                currentOneByOneQuestionIndex = 0; // Reset to 0 if all are gone
            }
        } else {
            currentOneByOneQuestionIndex++;
        }

        // If all questions are done, or no more active questions
        if (oneByOneActiveQuestions.length === 0) {
            singleQuizProgress.textContent = `Færdig! Du har mestret alle spørgsmål i de valgte kapitler.`;
            singleQuestionDisplay.classList.add('hidden');
            checkSingleAnswerBtn.classList.add('hidden');
            nextSingleQuestionBtn.classList.add('hidden');
            restartSingleQuizBtn.classList.remove('hidden');
            console.log("All single questions mastered.");
            return;
        }

        // Loop back to the start if we reach the end and there are still questions
        if (currentOneByOneQuestionIndex >= oneByOneActiveQuestions.length) {
            currentOneByOneQuestionIndex = 0; // Loop back to the first remaining question
            shuffleArray(oneByOneActiveQuestions); // Reshuffle remaining questions for variety
        }

        renderSingleQuestion(oneByOneActiveQuestions[currentOneByOneQuestionIndex]);
        updateSingleQuizUI();
        checkSingleAnswerBtn.classList.remove('hidden');
        nextSingleQuestionBtn.classList.add('hidden');
    }

    function resetOneByOneQuiz() {
        console.log("Resetting one-by-one quiz...");
        // Reset all streaks for questions in the original filtered set
        // It's important to reset streaks for the *original* questions, not just the currently active subset
        filteredQuizQuestions.forEach(q => oneByOneCorrectStreaks[q.question] = 0);
        startOneByOneQuiz(); // Restart the quiz
    }


    // --- Quiz Event Listeners (Common and Specific) ---
    // Main Section Navigation
    showFlashcardsBtn.addEventListener('click', () => showMainSection('flashcard-section'));
    showQuizBtn.addEventListener('click', () => showMainSection('quiz-section'));

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
    
    // Initial setup for quiz chapter selection (to be done on page load)
    populateQuizChapterSelect();

    // --- Initialisation ---
    populateCategorySelect(); // Populate flashcard categories
    showMainSection('flashcard-section'); // Show flashcards by default
    
    console.log("App initialization complete.");
}); // End of DOMContentLoaded listener
