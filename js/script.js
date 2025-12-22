document.addEventListener('DOMContentLoaded', () => {
    console.log("App initializing with FULL data...");

    // ==========================================================
    // DATA SEKTION (KOMPLET)
    // ==========================================================
    
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
        "Aronson Kapitel 01": [
            { front: "Construal (Konstruktion)", back: "Måden mennesker ser, forstår og fortolker den sociale verden. Konstrueret ud fra grundmotiverne at 'have det godt med sig selv' og 'at være præcis'." },
            { front: "Behaviorism (Behaviorisme)", back: "Gren af psykologi, der tror, at alle psykologiske fænomener kan forstås ud fra selvforstærkende kræfter i individets omgivelser (belønning/straf)." },
            { front: "Gestalt psykologi", back: "Gren af psykologi, der tydeliggør vigtigheden af at fokusere på, hvordan en situation/objekt anses i det subjektive anliggende fremfor, hvordan den fremstår objektivt." },
            { front: "Naiv realisme", back: "Overbevisningen om at vi ser tingene, som de virkelig er, og en underminering af, hvor meget vi tolker til vores fordel. Kan føre til uvilje mod kompromis i konflikter." },
            { front: "Fundamentale attribution error (Fundamentale attributionsfejl)", back: "Tendensen til at overvurdere interne årsager og undervurdere eksterne (situationelle) årsager, når vi forklarer andres adfærd." }
        ],
        "Aronson Kapitel 02": [
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
        "Aronson Kapitel 04": [
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
        "Larsen kapitel 01": [
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
        "Larsen kapitel 08": [
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
        "Larsen kapitel 16": [
            { front: "Effektstørrelse (d-statistik)", back: "En måling for at bestemme, hvor store forskellene er. D-score på 0,20 er en lille forskel, 0,50 er medium, og 0,80 er stor. Et negativt tal betyder, at kvinder scorer højere, og et positivt tal betyder, at mænd scorer højere." },
            { front: "Minimalist", back: "Udgangspunktet er, at forskellene mellem kønnene er minimale og har lille signifikans i hverdagen, selvom der er store overlap." },
            { front: "Maksimalist", back: "Udgangspunktet er, at forskellene mellem kønnene er på niveau med andre psykologiske forskelle og kan have stor betydning over et helt liv, selvom forskellene i sig selv er små." },
            { front: "Socialiserings teori", back: "Teorien, der siger, at kønsstereotyper, som gives videre fra samfundet, forældre, venner osv., er årsagen til langt de fleste kønsforskelle." },
            { front: "Social lærings teori", back: "Drenge og piger lærer at påtage sig deres kønsrolle ved at observere og kopiere adfærd fra deres forældre eller andre rollemodeller." },
            { front: "Congenital adrenal hyperplasia (CAH)", back: "En sygdom, hvor piger får mere testosteron allerede som spæd. Dette kan resultere i, at pigerne bliver mere tiltrukket af drenge-lignende interesser." },
            { front: "Androgener", back: "De mandlige hormoner, som testosteron. Mænd har efter puberteten mere end 10 gange så meget testosteron som kvinder. Mere testosteron giver mere aggression og dominans." },
            { front: "Inhibitory control", back: "Evnen til at kontrollere upassende reaktioner eller adfærd. Kvinder har en gennemsnitlig d-værdi på -0,41, hvilket indikerer, at kvinder generelt har bedre 'inhibitory control' end mænd." },
            { front: "Perceptual sensitivity", back: "Evnen til at opfange subtile stimuli fra miljøet. Kvinder har en d-værdi på -0,38." },
            { front: "Surgency (energisk fremkomst)", back: "En blanding af opsøgende adfærd, høj aktivitet og impulsivitet. Mænd har en d-værdi på 0,38." },
            { front: "Effektiv polygami", back: "En forskel i antallet af afkom et køn kan få inden for en art, primært hanner. Jo større forskel, desto mere konkurrence og større risikoer tages for at få afkom." },
            { front: "Kønsdimorfisme", back: "Biologisk størrelsesforskel mellem kønnene. Mennesker har en 12% forskel, hvor elefantsæler har en 400% forskel." },
            { front: "People-Things dimension", back: "Angiver, om man er mest interesseret i objekter eller mennesker. Kvinder er mere tilbøjelige til at være 'people-oriented', mens mænd er mere 'things-oriented'." },
            { front: "Jalousi", back: "Mænd og kvinder udtrykker jalousi forskelligt. Mænd er mere jaloux over seksuel utroskab, da deres største risiko er at en partner bærer en andens barn. Kvinder er mere jaloux over følelsesmæssig utroskab, da deres største risiko er at manden forlader hende og hendes børn." },
            { front: "Depression", back: "Der er ingen forskel på depression mellem kønnene i barndommen. I ungdommen oplever piger mellem 1,5 og 3 gange så mange tilfælde af depression." },
            { front: "Ruminating (negativ grubleri)", back: "Vedvarende fokus på symptomer på ildebefindende. En teori mener, at det er en af grundene til kønsforskellene i depression, da kvinder gør dette mere." },
            { front: "Androgyni", back: "Tanken om at kunne bevæge sig forbi opsatte kønsrammer og -roller. Studier viser, at mænd, der er mere maskuline og i forhold med kvinder, der er mere feminine, har et længere forhold." },
            { front: "Instrumentality", back: "Et personlighedstræk, der handler om interesse for objekter, at få gjort ting effektivt og være uafhængig. Dette er typisk associeret med maskulinitet." },

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
        "Larsen kapitel 17": [
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
        "Larsen kapitel 03": [
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
        "Larsen kapitel 10": [
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
        "Larsen kapitel 04": [
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
        "Larsen kapitel 05": [
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
        "Larsen kapitel 19": [
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
        "Bandura 1994": [
            { front: "Opfattet self-efficacy", back: "Troen på egen evne til at håndtere udfordringer påvirker følelser, tanker og motivation." },
            { front: "Høj self-efficacy", back: "Øget ambition, modstandskraft, målrettethed og lavere stress og depression." },
            { front: "Lav self-efficacy", back: "Undgår udfordringer, lav motivation, høj stress og depression." },
            { front: "Mestringsoplevelser", back: "Succes gennem egen indsats styrker self-efficacy – nederlag uden succes svækker den." },
            { front: "Stedfortrædende oplevelser", back: "At se lignende personer lykkes øger troen på egen evne – rollemodeller er vigtige." },
            { front: "Social overtalelse", back: "Andres opmuntring kan styrke self-efficacy – især hvis det ledsages af succesoplevelser." },
            { front: "Fysiologiske og emotionelle tilstande", back: "Hvordan man tolker sine følelser (f.eks. nervøsitet) påvirker self-efficacy." },
            { front: "Kognitive processer", back: "Høj self-efficacy fører til positive forestillinger og mål – lav fører til selvtvivl og undgåelse." },
            { front: "Motiverende processer", back: "Self-efficacy påvirker årsagsforklaringer, forventninger og målsætning." },
            { front: "Casual attributions", back: "Personer med høj self-efficacy tilskriver nederlag manglende indsats – Lav self-efficacy tilskriver manglende evne." },
            { front: "Outcome expectancies", back: "Vurdering af realistiske mål baseret på self-efficacy." },
            { front: "Cognized goals", back: "Selvvurdering af fremskridt mod mål driver motivation." },
            { front: "Affektive processer – Coping", back: "Troen på evnen til at håndtere stress og angst mindsker negativ påvirkning." },
            { front: "Mestring som terapi", back: "Skab miljøer hvor personen oplever succes over trusler – gradvis eksponering og støtte." },
            { front: "Depression – uopnåede mål", back: "Urealistiske mål som grundlag for selvværd kan føre til depression." },
            { front: "Depression – lav social self-efficacy", back: "Manglende tro på sociale evner fører til isolation og manglende støtte." },
            { front: "Depression – ruminering", back: "Manglende evne til at stoppe negative tanker øger depression." },
            { front: "Stress og immunforsvar", back: "Følelse af kontrol over stress beskytter biologiske systemer." },
            { front: "Sunde vaner og self-efficacy", back: "Troen på egen evne til at opretholde vaner styrker sundhed." },
            { front: "Selektionsprocesser", back: "Self-efficacy påvirker valg af miljø, relationer og livsretning." },
            { front: "Optimistisk self-efficacy", back: "Let positiv bias øger kreativitet, vedholdenhed og innovation." },
            { front: "Kollektiv self-efficacy", back: "Troen på gruppens evner styrker samarbejde og fælles mål." },
            { front: "Udvikling af handlefrihed", back: "Spædbørn lærer kausalitet og adfærdsindflydelse – grundlag for self-efficacy." },
            { front: "Familiens rolle", back: "Fri leg og responsivitet fra forældre styrker personlig kontrol og self-efficacy." },
            { front: "Søskende som spejl", back: "Børn spejler sig i familiemedlemmer – ældre søskende kan hæmme self-efficacy." },
            { front: "Jævnaldrende", back: "Fællesskaber med ligesindede styrker self-efficacy – prestige og popularitet spiller ind." },
            { front: "Skolens rolle", back: "Skolen validerer kompetencer – lærere og undervisningsform påvirker self-efficacy." },
            { front: "Implicit læring i skolen", back: "Social sammenligning og niveauinddeling kan skade self-efficacy." },
            { front: "Individuel undervisning", back: "Tilpasset undervisning styrker self-efficacy ved at fokusere på egne fremskridt." },
            { front: "Teenageovergange", back: "Nye udfordringer kræver ny self-efficacy – risikoadfærd kan både styrke og skade." },
            { front: "Voksenlivets krav", back: "Ægteskab, forældreskab og arbejde kræver self-efficacy – lav fører til stress og tvivl." },
            { front: "Alderdommens self-efficacy", back: "Troen på egne evner kan modvirke kognitiv nedgang og styrke livskvalitet." },
            { front: "Livsændringer og self-efficacy", back: "Pension og tab kræver sociale færdigheder – lav social self-efficacy øger sårbarhed." },
            { front: "Kulturens rolle", back: "Kulturelle holdninger til alderdom påvirker ældres self-efficacy og produktivitet." },
            { front: "Begreb – Affektive processer", back: "Regulering af emotionelle stadier og reaktioner." },
            { front: "Begreb – Kognitive processer", back: "Tankeprocesser til indsamling og brug af information." },
            { front: "Begreb – Motivation", back: "Aktivering til handling – vises i valg, intensitet og udholdenhed." },
            { front: "Begreb – Opfattet self-efficacy", back: "Troen på egen kompetence til at gøre en forskel." },
            { front: "Begreb – Selvregulering", back: "Indflydelse over egen motivation, tanker, følelser og adfærd." }
        ],
        "Larsen kapitel 06": [
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
        ],
        "(del 1) Jørgensen (2020)": [
            { front: "Identitetens kompleksitet", back: "Identitet er et flertydigt begreb uden entydig definition, hvilket skaber problemer for forskning og praksis." },
            { front: "Eriksons bidrag", back: "Erikson ser identitet som en række forbundne fænomener, fra bevidst selvfornemmelse til ubevidst stræben efter kontinuitet." },
            { front: "Kerneelementer i identitet", back: "Identitet handler om spørgsmål som 'Hvem er jeg?' og 'Hvilke fællesskaber tilhører jeg?', og er forankret i historie, kultur og værdier." },
            { front: "Social afgrænsning", back: "Identitet indebærer en afgrænsning mellem 'os' og 'dem', hvilket kan føre til eksklusion og konflikter." },
            { front: "Historisk udvikling", back: "Identitetsbegrebet har rødder i filosofi og litteratur, med bidrag fra Augustin, Descartes, Locke og Hume." },
            { front: "Modernitetens indflydelse", back: "I moderne samfund er identitet blevet et individuelt projekt, hvilket kan føre til angst og identitetskriser." },
            { front: "Psykologiske perspektiver", back: "Teoretikere som Marcia, Kernberg og McAdams har udviklet forskellige modeller for identitetsudvikling." },
            { front: "Sociologiske perspektiver", back: "Symbolsk interaktionisme ser identitet som en social performance, afhængig af kontekst." },
            { front: "Identitetspolitik", back: "Identitet er blevet politiseret siden 1960'erne, hvilket både har fremmet lighed og skabt nye spændinger." },
            { front: "Konklusion", back: "Identitet er en dynamisk proces, der kræver en syntese af psykologiske og sociologiske tilgange for at forstås fuldt ud." }
        ],
        "(del 2) Jørgensen 2020": [
            { front: "Fire niveauer af identitet", back: "Jeg-identitet, personlig identitet, social identitet og kollektiv identitet udgør en hierarkisk struktur." },
            { front: "Jeg-identitet", back: "Strukturel og ubevidst, skaber oplevelse af kontinuitet og er fundamentet for psykologisk resiliens." },
            { front: "Personlig identitet", back: "Bevidst og indholdsbaseret, knyttet til værdier, mål og selvbiografiske fortællinger." },
            { front: "Social identitet", back: "Relateret til roller og grupper, mere synlig og fleksibel, giver følelse af tilhørighed." },
            { front: "Kollektiv identitet", back: "Tilknytning til store grupper som nation og religion, fungerer som stabiliserende ramme." },
            { front: "Paradoks: én eller flere identiteter?", back: "Man kan have mange sociale identiteter, men kun én integreret jeg-identitet." },
            { front: "Selvskabelse vs. social tilskrivning", back: "Identitet er ikke frit konstruerbar – den er også afhængig af sociale og kulturelle rammer." },
            { front: "Essens eller konstruktion?", back: "Identitet er både stabil og i udvikling – et intersubjektivt fænomen skabt i samspil med andre." },
            { front: "Resiliens og identitet", back: "En stærk jeg-identitet beskytter mod psykiske forstyrrelser og giver indre sammenhæng." },
            { front: "Afsluttende pointer", back: "Identitet er et dynamisk anker, der både stabiliserer og udvikles i samspil med omgivelserne." }
        ],
        "Bandura 1999": [
            { front: "Moral agency", back: "Evnen til både at undgå at gøre skade (inhibitive morality) og aktivt at handle godt (proactive morality)." },
            { front: "Selvregulering (self-regulation)", back: "Adfærd styres af personlige standarder og selvsanktioner (self-sanctions) som skyld, skam og stolthed." },
            { front: "Moralsk retfærdiggørelse (moral justification)", back: "Skadelig adfærd fremstilles som tjeneste for et højere gode og bliver dermed moralsk acceptabel." },
            { front: "Eufemistisk sprog (euphemistic labeling)", back: "Sprog bruges til at blødgøre og normalisere skadelig adfærd, fx 'surgical strike' i stedet for 'bombning'." },
            { front: "Fordelagtig sammenligning (advantageous comparison)", back: "Egen adfærd fremstår mild ved at sammenlignes med værre alternativer." },
            { front: "Ansvarsforskydning (displacement of responsibility)", back: "Skylden placeres hos autoriteter – 'jeg fulgte bare ordre'." },
            { front: "Ansvarsudtynding (diffusion of responsibility)", back: "Gruppeansvar udvander personlig skyld – 'alle stod bag'." },
            { front: "Tilsidesættelse af konsekvenser (disregard/distortion of consequences)", back: "Skade skjules, minimeres eller ignoreres, fx ved brug af teknologi og afstand." },
            { front: "Dehumanisering (dehumanization)", back: "Ofre fratages menneskelighed, hvilket reducerer empati og øger risikoen for grusom adfærd." },
            { front: "Skyldplacering (attribution of blame)", back: "Skylden lægges på offeret eller omstændighederne – 'de startede'." },
            { front: "Gradvis frakobling (gradualistic moral disengagement)", back: "Moralsk frakobling sker trinvis – små overtrædelser baner vej for større uden skyldfølelse." },
            { front: "Institutionel frakobling", back: "Industrier som våben- og tobaksbranchen bruger netværk, sprog og ansvarsforskydning til at undgå skyld." },
            { front: "Udvikling hos børn", back: "Tidlig moral disengagement forudsiger lav prosocialitet, mere aggression og antisocial adfærd." },
            { front: "Personlige og sociale sanktioner", back: "Moralsk handling opstår i samspil mellem personlige standarder og sociale normer." },
            { front: "Forebyggelse", back: "Humanisering, pluralisme og ansvarlighed modvirker moralsk frakobling og fremmer moral engagement." }
        ],
        "Larsen kapitel 02": [
            { front: "Selvrapportering (S-data)", back: "Personen vurderer sig selv via strukturerede eller ustrukturerede metoder. Fordel: adgang til indre information. Ulempe: risiko for uærlighed." },
            { front: "Observantdata (O-data)", back: "Vurderinger fra personer der kender individet. Kan give adgang til adfærd i sociale kontekster. Inter-rater reliability måler enighed." },
            { front: "Testdata (T-data)", back: "Data fra eksperimenter og målinger, fx fysiologiske tests og fMRI. Kan afsløre træk gennem adfærd." },
            { front: "Livsdata (L-data)", back: "Objektive fakta om individet, fx ægteskabsstatus, alkoholforbrug. Bruges sammen med S- og O-data." },
            { front: "Aggregering", back: "Sammenlægning af observationer for at reducere målefejl og øge pålidelighed." },
            { front: "Triangulering", back: "Brug af flere datakilder til at bekræfte et fund og øge validitet." },
            { front: "Metaanalyse", back: "Opsummering af mange studier for at vurdere konsistens og effektstørrelse." },
            { front: "Troværdighed (reliability)", back: "Stabilitet i målinger over tid og intern konsistens i testelementer." },
            { front: "Response sets", back: "Systematiske svarmønstre som acquiescence og ekstrem respons, der kan forvrænge data." },
            { front: "Social desirability", back: "Tendens til at svare på en måde der fremstår positiv. Kan være bias eller et træk." },
            { front: "Gyldighed (validity)", back: "Måler testen det, den påstår? Omfatter face, predictive, convergent, discriminant og construct validity." },
            { front: "Generaliserbarhed", back: "Testens evne til at gælde på tværs af grupper, kulturer og situationer." }
        ],  
        "Aronson kapitel 03": [
            { front: "Social kognition", back: "Hvordan mennesker tænker om sig selv og den sociale verden – vælger, fortolker og husker information." },
            { front: "Skemaer", back: "Mentale strukturer der organiserer viden og styrer opmærksomhed og hukommelse." },
            { front: "Tilgængelighed (accessibility)", back: "Hvor let et skema eller koncept aktiveres i hukommelsen og bruges i vurdering." },
            { front: "Priming", back: "Tidligere erfaringer øger tilgængeligheden af et skema, træk eller koncept." },
            { front: "Self-fulfilling prophecy", back: "En forventning skaber adfærd hos andre, som bekræfter forventningen." },
            { front: "Automatisk tænkning", back: "Ubevidst, ufrivillig og hurtig tænkning (System 1)." },
            { front: "Kontrolleret tænkning", back: "Bevidst, intentionel og energikrævende tænkning." },
            { front: "Heuristikker", back: "Mentale genveje til hurtige vurderinger og beslutninger." },
            { front: "Tilgængelighedsheuristik", back: "Vurdering baseret på hvor nemt noget kommer frem i hukommelsen." },
            { front: "Repræsentativitetsheuristik", back: "Klassificering baseret på hvor typisk noget virker." },
            { front: "Base rate information", back: "Statistisk information om hyppighed af kategorier i befolkningen." },
            { front: "Kontrafaktisk tænkning (counterfactual thinking)", back: "Mentale forestillinger om alternative udfald af fortiden." },
            { front: "Planning fallacy", back: "Tendens til at undervurdere hvor lang tid en opgave tager." },
            { front: "Kulturelle forskelle", back: "Skemaindhold varierer mellem kulturer, fx holistisk vs. analytisk tænkning." }
        ],    
        "Csikszentmihalyi 1999": [
            { front: "Lykke og filosofi", back: "Lykke har historisk været et centralt mål – både mentalt og socialt." },
            { front: "Materialisme og trivsel", back: "Materiel rigdom fører ikke nødvendigvis til større lykke." },
            { front: "Tre grunde til at penge ikke gør os lykkelige", back: "1) Eskalerende forventninger, 2) Relativ deprivation, 3) Tid og opmærksomhed." },
            { front: "Psykologiske veje til lykke", back: "Selvaktualisering (Maslow), optimisme (Seligman), autonomi (Deci & Ryan)." },
            { front: "Flow-oplevelsen", back: "En tilstand af total fordybelse og nydelse i en aktivitet." },
            { front: "Kendetegn ved flow", back: "Klare mål, øjeblikkelig feedback, balance mellem evner og udfordring, kontrol, tab af selvbevidsthed." },
            { front: "Autotelisk personlighed", back: "Personer der ofte oplever flow og har høj livstilfredshed." },
            { front: "Flow og samfund", back: "Flow kan fremmes i skole, arbejde og fritid – kræver kompleksitet og udvikling." },
            { front: "Begrænsninger ved flow", back: "Flow kan opstå i destruktive aktiviteter og er ikke altid lig med lykke." }
        ],
        "Aronson kapitel 05": [
            { front: "Selvkoncept", back: "Det overordnede trossæt om sig selv – udvikles fra 18-24 mdr. og formes af moral mere end kognition." },
            { front: "Uafhængigt selvkoncept (independent)", back: "Selvet defineres ud fra egne tanker og følelser – typisk i vestlige kulturer." },
            { front: "Indbyrdes afhængigt selvkoncept (interdependent)", back: "Selvet defineres ud fra relationer og andres tanker – typisk i asiatiske kulturer." },
            { front: "Introspektion", back: "At kigge indad og undersøge egne følelser og tanker – ofte upræcist." },
            { front: "Self Awareness Theory", back: "Selvbevidsthed opstår ved at se sig selv udefra – kan føre til selvkritik eller selvforbedring." },
            { front: "Self-perception theory", back: "Vi vurderer vores følelser og holdninger ud fra vores adfærd, især når vi er usikre." },
            { front: "To-faktor teori om følelser", back: "Emotioner opstår ved fysiologisk arousal og kognitiv fortolkning af situationen." },
            { front: "Misattribution of arousal", back: "Forkert fortolkning af årsagen til arousal – fx tilskriver følelser til den forkerte kilde." },
            { front: "Indre vs. ydre motivation (intrinsic vs. extrinsic)", back: "Indre: gør noget for dets egen skyld. Ydre: gør noget pga. belønning eller pres." },
            { front: "Overjustification effect", back: "Ydre belønning kan mindske indre motivation, især hvis belønningen ikke er performance-baseret." },
            { front: "Growth vs. Fixed mindset", back: "Growth: evner kan udvikles. Fixed: evner er faste og uforanderlige." },
            { front: "Social sammenligningsteori", back: "Vi lærer om os selv ved at sammenligne med andre – opad eller nedad." },
            { front: "Social tuning", back: "Vi tilpasser vores holdninger til dem vi kan lide – og afviser dem vi ikke kan lide." },
            { front: "Self-control", back: "Bedst med implementeringsintentioner og rammer – dårligere ved undertrykkelse af tanker." },
            { front: "Impression management", back: "Vi forsøger at styre hvordan andre opfatter os – fx via ingratiation eller self-handicapping." },
            { front: "Self-handicapping", back: "Skaber undskyldninger for potentielt nederlag – enten aktivt (behavioral) eller rapporteret." }
        ],  
        "Aronson kapitel 06": [
            { front: "Kognitiv dissonans", back: "Ubehag ved at handle i modstrid med egne værdier – trussel mod selvværd." },
            { front: "Reducering af dissonans", back: "Ændring af adfærd, holdning eller tilføjelse af nye kognitioner for at mindske ubehaget." },
            { front: "Postdecision dissonance", back: "Dissonans efter valg – vi opvurderer det valgte og nedvurderer det fravalgte." },
            { front: "Lowballing", back: "Salgsstrategi hvor pris hæves efter beslutning – skaber følelse af irreversibilitet." },
            { front: "Justification effort", back: "Jo mere vi har kæmpet for noget, jo mere værdsætter vi det." },
            { front: "Counterattitudinal behavior", back: "Handling mod egne holdninger – skaber dissonans." },
            { front: "External vs. Internal justification", back: "External: forklaring udefra. Internal: forklaring indefra – opstår når ekstern forklaring mangler." },
            { front: "Insufficient punishment", back: "Mild straf fører til intern retfærdiggørelse og internalisering af adfærd." },
            { front: "Hypocrisy induction", back: "Folk konfronteres med deres hykleri – skaber dissonans og ændrer adfærd." },
            { front: "Self-affirmation theory", back: "Vi bekræfter os selv i andre domæner for at beskytte selvværdet." },
            { front: "Self-Evaluation Maintenance Theory", back: "Dissonans opstår når en nær person overgår os – reduceres ved afstand, forbedring eller nedvurdering." },
            { front: "Ben Franklin-effekten", back: "Vi kan lide dem vi har hjulpet – retfærdiggørelse af venlighed." },
            { front: "Umenneskeliggørelse af fjenden", back: "Fjender fremstilles som dyr eller virus – gør det lettere at handle ondskabsfuldt." },
            { front: "Terror management theory", back: "Selvværd beskytter mod angst for døden." },
            { front: "Narcissisme", back: "Højt selvværd og stærk dissonansreduktion – kan føre til manglende selvkritik." }
        ],   
        "Aronson kapitel 07": [
            { front: "Attituder", back: "Evalueringer af mennesker, objekter eller ideer – kan være kognitive, affektive eller adfærdsmæssige." },
            { front: "Kognitivt baserede attituder", back: "Bygger på objektive egenskaber – fx vurdering af en støvsuger." },
            { front: "Affektivt baserede attituder", back: "Bygger på følelser og værdier – fx holdninger til religion eller politik." },
            { front: "Adfærdsmæssigt baserede attituder", back: "Bygger på observation af egen adfærd – især når holdningen er uklar." },
            { front: "Klassisk betingning (classical conditioning)", back: "Association mellem stimulus og følelse – fx hund og godbid." },
            { front: "Operant betingning (operant conditioning)", back: "Adfærd formes af belønning eller straf." },
            { front: "Eksplicitte vs. implicitte attituder", back: "Eksplicitte: bevidste og kontrollerbare. Implicitte: ubevidste og automatiske." },
            { front: "IAT (Implicit Association Test)", back: "Test af implicitte attituder – viser barndomsprægede holdninger." },
            { front: "Attitude tilgængelighed", back: "Hvor hurtigt man kan rapportere sin holdning – afhænger af direkte erfaring." },
            { front: "Theory of planned behavior", back: "Adfærd forudsiges af intentioner, som formes af specifik attitude, subjektive normer og opfattet kontrol." },
            { front: "Persuasive communication", back: "Overtalende budskaber – fx politiske taler." },
            { front: "Yale Attitude Change Approach", back: "Effektivitet afhænger af afsender (who), budskab (what) og modtager (whom)." },
            { front: "Elaboration Likelihood Model", back: "Overtalelse via central rute (argumenter) eller perifer rute (overfladiske signaler)." },
            { front: "Følelser som heuristikker", back: "Vi bruger følelser som mentale genveje – fx 'hvad føler jeg om dette?'" },
            { front: "Fight fire with fire", back: "Affektive attituder ændres bedst med følelsesbaserede argumenter." }
        ],
        "Larsen kapitel 09": [
            { front: "Psykisk energi", back: "Den energi der driver al menneskelig aktivitet og adfærd ifølge psykoanalytisk teori." },
            { front: "Libido", back: "Livsinstinktet, ofte forbundet med seksuelle og selvbevarende drifter." },
            { front: "Thanatos", back: "Dødsinstinktet, relateret til aggression og destruktiv adfærd." },
            { front: "Id", back: "Den primitive del af psyken, styret af lyst og pleasure-princippet." },
            { front: "Ego", back: "Mægler mellem id og superego, søger realistiske og acceptable løsninger." },
            { front: "Superego", back: "Indre moralinstans, der regulerer adfærd gennem skyld og stolthed." },
            { front: "Ego depletion", back: "Teorien om at selvkontrol kræver energi, som kan udtømmes." },
            { front: "Objektiv angst", back: "Angst som reaktion på reel fare i omgivelserne." },
            { front: "Neurotisk angst", back: "Angst opstået ved konflikt mellem id og ego." },
            { front: "Moralsk angst", back: "Angst ved konflikt mellem ego og superego." },
            { front: "Fortrængning", back: "Ubevidst undertrykkelse af uacceptable impulser." },
            { front: "Benægtelse", back: "Afvisning af virkeligheden for at undgå angst." },
            { front: "Forskydning", back: "Overførsel af følelser til et mindre truende objekt." },
            { front: "Rationalisering", back: "Forklaring af adfærd med logiske grunde for at reducere angst." },
            { front: "Projektion", back: "Tillægger andre sine egne uacceptable træk." },
            { front: "Sublimering", back: "Omdirigering af impulser til socialt acceptable aktiviteter." },
            { front: "Orale stadie", back: "Fokus på mund og afhængighed; fixering kan føre til afhængighed." },
            { front: "Anale stadie", back: "Fokus på kontrol; fixering kan føre til enten rigiditet eller kaos." },
            { front: "Falliske stadie", back: "Opdagelse af køn; konflikter kan føre til konkurrencepræget adfærd." },
            { front: "Latens stadie", back: "Rolig periode; fokus på sociale færdigheder og identitet." },
            { front: "Genitale stadie", back: "Moden seksualitet og evne til sunde relationer." },
            { front: "Fri associering", back: "Terapeutisk metode til at afdække det ubevidste gennem frit talende klient." },
            { front: "Drømmeanalyse", back: "Fortolkning af drømmens manifeste og latente indhold." },
            { front: "Projektive tests", back: "Tests som Rorschach, hvor klienten projicerer ubevidste tanker." },
            { front: "Transference", back: "Klienten overfører følelser fra tidligere relationer til terapeuten." },
            { front: "Moderne psykoanalyse", back: "Fokus på relationer og udvikling frem for seksuelle konflikter." },
            { front: "Ego psykologi", back: "Fremhæver egoets rolle i mestring og tilpasning." },
            { front: "Eriksons 8 stadier", back: "Udviklingsmodel med sociale konflikter gennem hele livet." }
        ],
        "Larsen kapitel 11": [
            { front: "Perception", back: "Processen hvor hjernen organiserer og fortolker sanseindtryk." },
            { front: "Field dependence", back: "Tendens til at være påvirket af omgivelser i perception." },
            { front: "Field independence", back: "Evne til at ignorere omgivelser og fokusere på detaljer." },
            { front: "Reducer/Augmenter teori", back: "Reducerer dæmper sanseindtryk, augmenterer forstærker dem." },
            { front: "Ekstroversion og smerte", back: "Ekstroverte har højere smertetolerance og lavere smerteintensitet." },
            { front: "Neuroticisme og smerte", back: "Neurotiske personer oplever smerte mere intenst." },
            { front: "Kellys Personal Construct Theory", back: "Mennesker tolker verden gennem personlige bipolære konstruktioner." },
            { front: "Modulation corollary", back: "Gennemtrængelige konstruktioner gør det lettere at tilpasse sig nye situationer." },
            { front: "Locus of control", back: "Opfattelse af om man har kontrol over livsbegivenheder." },
            { front: "Intern locus", back: "Troen på at man selv styrer sine resultater." },
            { front: "Ekstern locus", back: "Troen på at resultater skyldes ydre faktorer som held." },
            { front: "Rotters prædiktive formel", back: "BP = f(E × RV); adfærd afhænger af forventning og værdi." },
            { front: "Becks skema", back: "Kognitive strukturer der påvirker hvordan vi tolker verden." },
            { front: "S-REF model", back: "Model for metakognition og informationsbearbejdning." },
            { front: "Personligt projekt", back: "Målrettet handling der afspejler personlighed og trivsel." },
            { front: "Social kognition", back: "Hvordan vi bearbejder og lagrer information om andre." },
            { front: "Fixed mindset", back: "Troen på at evner er faste og ikke kan udvikles." },
            { front: "Growth mindset", back: "Troen på at evner kan forbedres gennem indsats." },
            { front: "Mischels kognitiv-affektive system", back: "Personlighed som samspil mellem kognition, følelser og situation." },
            { front: "If...then... præpositioner", back: "Adfærd afhænger af specifikke situationelle triggere." }
        ],
        "Aronson kapitel 12": [
            { front: "Aggression", back: "Intentionel adfærd rettet mod at skade fysisk eller psykisk." },
            { front: "Hostile aggression", back: "Aggression motiveret af vrede med formål at skade." },
            { front: "Instrumental aggression", back: "Aggression med andet mål end at skade." },
            { front: "Challenge hypothesis", back: "Testosteron relaterer til aggression kun ved reproduktiv mulighed." },
            { front: "Dual hormone hypothesis", back: "Testosteron fører til aggression kun ved lavt kortisol." },
            { front: "Culture of honor", back: "Aggression som forsvar for ære, især i hyrdekulturer." },
            { front: "Relationel aggression", back: "Skade gennem manipulation af sociale relationer." },
            { front: "Social-kognitiv læringsteori", back: "Aggression læres ved observation og imitation." },
            { front: "Weapons effect", back: "Tilstedeværelse af våben øger aggressiv adfærd." },
            { front: "Frustration-aggression teori", back: "Frustration øger sandsynligheden for aggression." },
            { front: "Relative deprivation", back: "Følelse af uretfærdighed skaber vrede og aggression." },
            { front: "Catharsis", back: "Teorien om at aggression kan udløses og reduceres – dog modbevist." },
            { front: "Habituation", back: "Tilvænning til vold reducerer følsomhed og empati." },
            { front: "Sexual scripts", back: "Kulturelle regler for seksuel adfærd, kan føre til misforståelser." },
            { front: "Think-drink effekt", back: "Forventning om aggression ved alkohol påvirker faktisk adfærd." },
            { front: "Empati og aggression", back: "Empati reducerer aggressiv adfærd og øger trivsel." },
            { front: "Rejection-rage cyklus", back: "Afvisning kan føre til voldelig adfærd som reaktion." },
            { front: "Effekter af medievold", back: "Medievold kan øge aggression, især hos allerede aggressive personer." },
            { front: "Venting vs. problemløsning", back: "Konstruktiv kommunikation er bedre end udladning af vrede." },
            { front: "Effektiv undskyldning", back: "Kræver ærlighed og ansvar – ikke forklaringer." }
        ],
        "Oyserman 2012": [
            { front: "Selvet – kerneidé", back: "Selvet er både formet af situationer og formende for adfærd." },
            { front: "Me vs. I", back: "Me er indholdet af tanker om selvet (roller, træk), mens I er den handlende aktør." },
            { front: "Refleksiv kapacitet", back: "Evnen til at tænke over sig selv og tage sig selv som objekt for tænkning." },
            { front: "Selvet som hukommelsesfænomen", back: "Selvet er struktureret omkring stabile minder om en selv." },
            { front: "Selvet som kognitiv kapacitet", back: "Selvet skabes i øjeblikket og bruges til meningsdannelse." },
            { front: "Immersed vs. Distal perspektiv", back: "Immersed er første person (field memory), distal er tredje person (observer memory)." },
            { front: "Selvkoncept", back: "Mentale strukturer om hvem man er og vil blive – inkluderer både indhold og evaluering." },
            { front: "Evaluative judgments", back: "Vurderinger som selvværd og self-efficacy, der påvirker motivation og adfærd." },
            { front: "Strukturering af selvkoncept", back: "Selvkoncept organiseres ud fra domæner som andre definerer en ud fra." },
            { front: "Adskillelse af selvbilleder", back: "Positive og negative selvbilleder holdes adskilt for at undgå negativ påvirkning." },
            { front: "Priming af selvkoncept", back: "Historier med 'vi' fremmer kollektivt selvkoncept og påvirker hukommelse." },
            { front: "Eriksons identitet", back: "Identitet er et forsøg på at skabe mening i selvkonceptet." },
            { front: "Sociale identiteter", back: "Viden om gruppetilhørsforhold, følelser og status." },
            { front: "Identity theory (Stryker)", back: "Identiteter er stabile og knyttet til sociale roller og netværk." },
            { front: "Social identity theory (Tajfel & Turner)", back: "Identitet er fleksibel og konstrueres i hver interaktion." },
            { front: "Role vs. Personal identities", back: "Role kræver en anden person, personal er træk på tværs af roller." },
            { front: "Tre niveauer af social kontekst", back: "Makro (samfund), middel (familie/skole), mikro (dagligdag)." },
            { front: "Sociale produkter af selvet", back: "Selvet kræver gentagen bekræftelse fra andre og formes af situationen." },
            { front: "Adfærdsjustering via identitet", back: "Folk handler i overensstemmelse med saliente identiteter." },
            { front: "Eksperimentel manipulation af identitet", back: "Priming af identitet ændrer adfærd (fx madvalg, alkoholforbrug)." },
            { front: "Identitet som drivkraft", back: "Selvet medierer adfærd – små ændringer i kontekst kan ændre handlinger." }
        ],
        "Larsen kapitel 15": [
            { front: "Selektion", back: "Personlighed påvirker hvilke situationer vi opsøger og undgår." },
            { front: "Assortativ parring", back: "Folk vælger partnere der ligner dem selv – især på personlighedstræk." },
            { front: "Violation of desire teori", back: "Manglende opfyldelse af ønskede træk i partner → øget risiko for breakup." },
            { front: "Evokation", back: "Personlighed fremkalder specifikke reaktioner fra omgivelserne." },
            { front: "Hostile attributional bias", back: "Aggressive personer tolker tvetydige situationer som fjendtlige." },
            { front: "Pygmalion-effekten", back: "Forventninger fremkalder adfærd der bekræfter dem." },
            { front: "Manipulationstaktikker", back: "11 taktikker som fx tvang, silent treatment, rationale og belønning." },
            { front: "Facebook og personlighed", back: "Neuroticisme → mere brug og partnerovervågning; Ekstroversion → flere venner." },
            { front: "Social sammenligning", back: "Tunge brugere tror andre har bedre liv – kan føre til jalousi og stress." },
            { front: "Personlighed og jobrekruttering", back: "Fordelagtige billeder på sociale medier → flere jobsamtaler." }
        ],
        "Larsen kapitel 18": [
            { front: "Stress definition", back: "Subjektiv følelse af trussel eller manglende kontrol." },
            { front: "Stressors", back: "Situationer der udløser stress." },
            { front: "Interactional model", back: "Personlighed påvirker coping og dermed sygdomsrisiko." },
            { front: "Transactional model", back: "Personlighed påvirker både begivenhed, tolkning og coping." },
            { front: "Health behaviour model", back: "Personlighed påvirker helbred gennem adfærd – ikke direkte." },
            { front: "Predisposition model", back: "En tredje variabel (fx gener) påvirker både personlighed og sygdom." },
            { front: "Illness behaviour model", back: "Personlighed påvirker opfattelse og fortolkning af symptomer." },
            { front: "General Adaptation Syndrome (GAS)", back: "Alarm → Modstand → Udmattelse – fysiologisk stressrespons." },
            { front: "Major life events", back: "Store begivenheder kræver omstrukturering og kan forudsige sygdom." },
            { front: "Daily hassles", back: "Dagligdags stressfaktorer har stor indflydelse på helbred." },
            { front: "Primær og sekundær appraisal", back: "Vurdering af trussel og evne til coping – afgør stressrespons." },
            { front: "Attributional stil", back: "Optimist: ekstern, ustabil, specifik; Pessimist: intern, stabil, global." },
            { front: "Dispositional optimisme", back: "Forventning om flere gode end dårlige begivenheder." },
            { front: "Broaden and build theory", back: "Positive følelser udvider kognition og bygger ressourcer." },
            { front: "Coping strategier", back: "Positive reappraisal, problemløsning, skabelse af positive begivenheder." },
            { front: "Post-traumatic growth", back: "Positiv udvikling efter traume – nyt perspektiv på livet." },
            { front: "Emotionel modstandsdygtighed", back: "De fleste mennesker kommer sig hurtigt efter traumer." },
            { front: "Fortrængelse af følelser", back: "Kan føre til dårligere helbred og relationer." },
            { front: "Disclosure", back: "Åbenhed om svære oplevelser forbedrer helbred og velvære." },
            { front: "Neurotic Cascade", back: "Høj neuroticisme → angst, depression via flere mekanismer." }
        ],
        "Ryan and Deci (2000)": [
            { front: "Self-Determination Theory (SDT)", back: "Teori om motivation baseret på behov for autonomi, kompetence og relaterethed." },
            { front: "CET – Cognitive Evaluation Theory", back: "Tidlig SDT-teori om faktorer der påvirker intrinsisk motivation." },
            { front: "Intrinsisk motivation", back: "Motivation drevet af interesse og nysgerrighed – fremmes af autonomi og kompetence." },
            { front: "Ekstrinsisk motivation", back: "Motivation drevet af ydre belønninger eller mål – instrumental og målrettet." },
            { front: "Organismic Integration Theory (OIT)", back: "Forklarer hvordan ekstrinsisk motivation kan internaliseres og integreres." },
            { front: "Internalisering", back: "Processen hvor en ydre regulering optages som personlig værdi." },
            { front: "Integration", back: "Reguleringen bliver fuldt selvbestemt og en del af individets selvforståelse." },
            { front: "Motivationskontinuum", back: "Fra amotivation → ekstern → introjiceret → identificeret → integreret → intrinsisk." },
            { front: "Ekstern regulering", back: "Lav autonomi – lav interesse og ansvarsfølelse." },
            { front: "Introjiceret regulering", back: "Mere anstrengelse, men også angst og dårlig håndtering af fiasko." },
            { front: "Identificeret regulering", back: "Mere interesse, glæde og bedre coping – højere autonomi." },
            { front: "Fordele ved autonom regulering", back: "Øget effektivitet, vedholdenhed og subjektivt velbefindende." },
            { front: "Relaterethed", back: "Følelse af samhørighed – fremmer internalisering af ydre motivation." },
            { front: "Kompetence", back: "Følelse af effektivitet – styrker motivation hvis man føler sig dygtig." },
            { front: "Autonomi", back: "Følelse af valg og selvbestemmelse – afgørende for integration." },
            { front: "Psykologiske behov", back: "Autonomi, kompetence og relaterethed – universelle og nødvendige for trivsel." },
            { front: "Behovsopfyldelse", back: "Fører til sundhed og velbefindende – mangel fører til patologi." },
            { front: "SDT og mental sundhed", back: "Interventioner bør støtte de tre psykologiske behov for at fremme trivsel." }
        ],        
        "Rüsch 2010": [
            { front: "Self-stigma", back: "Når individer med psykisk sygdom internaliserer negative stereotyper om deres gruppe." },
            { front: "Effekt af self-stigma", back: "Forbundet med lavt selvværd og nedsat livskvalitet." },
            { front: "Implicit self-stigma", back: "Automatiske, ubevidste negative holdninger – måles via BIAT." },
            { front: "Eksplicit self-stigma", back: "Bevidste, selvrapporterede negative holdninger." },
            { front: "BIAT – Brief Implicit Association Test", back: "Måler styrken af automatiske associationer via reaktionstid." },
            { front: "Resultater fra studiet", back: "Både implicit og eksplicit self-stigma forudsiger lavere livskvalitet uafhængigt." },
            { front: "Interventioner", back: "Bør adressere både eksplicitte og implicitte aspekter af self-stigma." },
            { front: "Studiets begrænsninger", back: "Tværsnitsdesign, kun ambulante patienter, og mulige påvirkende faktorer." },
            { front: "Fremtidig forskning", back: "Bør undersøge årsagssammenhænge og manipulere implicit stigma eksperimentelt." }
        ],    
        "Strahan 2002": [
            { front: "Formål med artiklen", back: "Identificere socialpsykologiske principper til at forbedre tobaksadvarsler." },
            { front: "Gain-framed budskaber", back: "Fremhæver positive konsekvenser ved rygestop – mere effektivt end loss-framed." },
            { front: "Frygtappeller", back: "Virker bedst med konkrete råd om hvordan truslen undgås." },
            { front: "Subjektive normer", back: "Social godkendelse påvirker adfærd – fx familiepres og sociale konsekvenser." },
            { front: "Tilpasning til målgruppe", back: "Segmentering efter funktion – fx impotensbudskaber til unge mænd." },
            { front: "Selv-efficacy", back: "Troen på at man kan stoppe – styrkes med opmuntrende og konkrete budskaber." },
            { front: "Kognitiv dissonans", back: "Fremhæv modsætning mellem holdning og adfærd – fx forældre der ryger." },
            { front: "Elaboration Likelihood Model (ELM)", back: "Central route = argumenter; perifer route = visuelle cues." },
            { front: "Designstrategier", back: "Brug farver, ikoner og kendte personer – undgå wear-out med rotation." },
            { front: "Integration i kampagner", back: "Labels bør kobles med bredere mediekampagner for større effekt." },
            { front: "Poison parasite-teknik", back: "Brug humor og modargumenter mod tobaksreklamer – fx Joe Chemo." },
            { front: "Fremtidig forskning", back: "Behov for eksperimentelle og longitudinelle studier – brug af teori og implicitte målinger." }
        ],
        "Tønnesvang et al 2023 (fabia)": [
            { front: "Vitaliseringsmodellen", back: "Model med 4 grundbehov: autonomi, kompetence, relaterethed og mening – omgivelserne (ilt) skal understøtte disse." },
            { front: "Autonomi", back: "Oplevelse af selvbestemmelse og kontrol over egne handlinger." },
            { front: "Kompetence", back: "Følelse af at kunne mestre og udvikle færdigheder." },
            { front: "Relaterethed", back: "Følelse af samhørighed og tilknytning til andre." },
            { front: "Mening", back: "Retning mod noget større end én selv – et grundbehov ifølge Tønnesvang." },
            { front: "Ekstrinsisk motivation", back: "Motivation baseret på ydre faktorer som belønning, straf eller pligt." },
            { front: "Intrinsisk motivation", back: "Motivation drevet af interesse, glæde og selvforglemmelse." },
            { front: "Ydre regulering", back: "Handlinger styret af ydre krav og forventninger." },
            { front: "Introjiceret regulering", back: "Handlinger baseret på internaliserede normer, men uden fuld integration." },
            { front: "Identificeret regulering", back: "Handlinger i overensstemmelse med egne værdier og selvbillede." },
            { front: "Integreret regulering", back: "Handlinger fuldt integreret i personligheden – selvbestemt og vedvarende." },
            { front: "Motivationsretning – centrisk", back: "Egoistisk motivation, fx selvrealisering på bekostning af andre." },
            { front: "Motivationsretning – ucentrisk", back: "Prosocial motivation, fx at gøre godt for andre." },
            { front: "Public service motivation", back: "Motivation for at bidrage til samfundet – emotionel, normativ og instrumentel." },
            { front: "Mangelbehov vs vækstbehov", back: "Mangelbehov skal opfyldes for at muliggøre vækstbehov som selvaktualisering." },
            { front: "Meningsmindset", back: "Handler ud fra, hvad der er meningsfuldt – også med omkostninger." },
            { front: "Glædesmindset", back: "Handler ud fra lyst og behovstilfredsstillelse." },
            { front: "Global mening", back: "Overordnet ramme for at forstå mening i livet." },
            { front: "Situationel mening", back: "Mening i konkrete situationer baseret på global mening." },
            { front: "Mening med stort M", back: "Antropologisk konstant – menneskets søgen efter mening." },
            { front: "Mening med lille m", back: "Indholdsbegreb – konkrete oplevelser af mening." }
        ],
        "Tønnesvang 2012": [
            { front: "Selvet som motivationssystem", back: "Selvet organiserer vores stræben og er grundlag for motivation." },
            { front: "Identitet", back: "Et narrativt felt af selvforståelse – samspil mellem selvet og omgivelser." },
            { front: "Kohuts definition af selvet", back: "Selvet er en dynamisk struktur af perception, følelse og initiativ." },
            { front: "Identitetens fremtidige aspekt", back: "Identitet inkluderer fremtidige selv – vi er fremtidsrettede og fortidsbestemte." },
            { front: "Gruppeidentitet (Erikson)", back: "Følelse af tilhør og engagement i gruppens værdier." },
            { front: "Moralsk dimension af identitet", back: "Identitet handler om, hvad vi står for – moral er en uundgåelig del." },
            { front: "Bred vs snæver selvforståelse", back: "Bred selvforståelse giver fleksibilitet i forskellige miljøer." },
            { front: "Narrativ identitet (McAdams)", back: "Identitet som livsfortælling – fortid, nutid og fremtid." },
            { front: "Identitetens udviklingsfaser", back: "Pre-narrativ (barndom), narrativ (ungdom), post-narrativ (voksenliv)." },
            { front: "Fleksibel identitet", back: "Evne til at tilpasse identitet til livets forandringer – modvirker stagnation." },
            { front: "Selvets fire motivationsretninger", back: "Selv-assertion, idealisering, kompetenceudvikling, tilhørsforhold." },
            { front: "Selv-assertion", back: "Stræben efter at blive set som man er – autonomi og selvudfoldelse." },
            { front: "Idealiserende stræben", back: "Stræben efter mening og inspiration – værdier og forbilleder." },
            { front: "Kompetenceudvikling", back: "Stræben efter mestring og læring – need for achievement." },
            { front: "Tilhørsforhold", back: "Stræben efter samhørighed og fællesskab – need to belong." },
            { front: "Agency og communion", back: "Evolutionære motiver – individets ansvar og behov for relationer." },
            { front: "Motivationens relationelle natur", back: "Motivation opstår i samspil mellem individ og omgivelser." },
            { front: "Psykologisk ilt", back: "Omgivelsernes respons er nødvendig for at aktivere individets parathed." },
            { front: "Restaurering af selvet", back: "Stærk identitet kan hjælpe med at genopbygge et svækket selv." },
            { front: "Overkompenseret identitet", back: "Dominerende identitet kan skjule et svagt selv – ufleksibel og sårbar." }
        ],
        
        "Aronson kapitel 08": [
            { front: "Konformitet", back: "Ændring i adfærd grundet ægte eller forestillede påvirkninger fra andre mennesker." },
            { front: "Informational Social Influence", back: "At afhænge af andre som kilde til information i flertydige situationer; fører til privat accept." },
            { front: "Normative Social Influence", back: "At konformere for at blive accepteret og undgå udstødelse; fører til offentlig compliance." },
            { front: "Private Acceptance", back: "Man ændrer sin indre overbevisning, fordi man tror, andre har ret." },
            { front: "Public Compliance", back: "Man tilpasser sin adfærd offentligt uden at ændre sin indre mening." },
            { front: "Asch's Eksperiment", back: "Viste at 76% konformerede mindst én gang i en ikke-flertydig situation for at undgå at se dumme ud." },
            { front: "Hvornår konformerer vi (informational)?", back: "Når situationen er flertydig, en krise, eller når andre er eksperter." },
            { front: "Hvornår konformerer vi (normativ)?", back: "Når vi ønsker social accept, især hvis gruppen er vigtig, tæt på og stor." },
            { front: "Social Impact Theory", back: "Konformitet afhænger af gruppens styrke, umiddelbarhed og antal medlemmer." },
            { front: "Ideosyncrasy Credits", back: "Point man optjener ved at følge normer, som giver frihed til at afvige senere." },
            { front: "Minority Influence", back: "En konsekvent og enig minoritet kan påvirke flertallet via informational social influence." },
            { front: "Injunctive Norms", back: "Socialt anerkendte værdier og idealer, man bør leve op til." },
            { front: "Descriptive Norms", back: "Normer der beskriver, hvordan de fleste handler." },
            { front: "Boomerang-effekten", back: "Når brug af deskriptive normer får lavt-forbrugere til at øge forbrug." },
            { front: "Foot-in-the-door teknik", back: "Få en person til at acceptere en lille anmodning først, hvilket øger sandsynligheden for en større senere." },
            { front: "Door-in-the-face teknik", back: "Start med en stor anmodning, som afvises, og følg op med en mindre, som accepteres." },
            { front: "Propaganda", back: "Systematisk forsøg på at påvirke folks holdninger og adfærd til egen fordel." },
            { front: "Lydighed", back: "Ændring i adfærd grundet direkte indflydelse fra en autoritet." },
            { front: "Milgrams Eksperiment", back: "Viste at mennesker adlyder autoriteter, selv når det medfører skade på andre." },
            { front: "Årsager til lydighed", back: "Normativ og informational indflydelse, valg af norm, self-justification og frakobling af ansvar." }
        ],

        "Aronson kapitel 09": [
            { front: "Hvorfor deltager mennesker i grupper?", back: "For at nå mål, opfylde sociale behov, skabe identitet og definere sociale normer." },
            { front: "Sociale normer", back: "Implicitte og eksplicitte regler for acceptabel adfærd i en gruppe." },
            { front: "Sociale roller", back: "Specifikke forventninger til individers adfærd i gruppen; hjælper med struktur men kan føre til tab af identitet." },
            { front: "Gruppe samhørighed", back: "Kvaliteter, der binder medlemmer sammen og øger deltagelse og loyalitet." },
            { front: "Gruppe diversitet", back: "Øger problemløsning og effektivitet, men kan skabe friktion og konformitet." },
            { front: "Social facilitation", back: "Andre menneskers tilstedeværelse øger præstation på simple opgaver, men hæmmer komplekse opgaver." },
            { front: "Hvorfor skaber tilstedeværelse arousal?", back: "Evaluationsangst, distraktion og øget opmærksomhed på uforudsigelighed." },
            { front: "Social loafing", back: "Når individer slapper af i grupper, hvilket mindsker indsats på simple opgaver men forbedrer komplekse." },
            { front: "Deindividuation", back: "Tab af identitet og ansvar i grupper, hvilket kan føre til hæmningsløs adfærd og lydighed mod gruppenormer." },
            { front: "Process Loss", back: "Når gruppeinteraktion hæmmer god problemløsning, fx ved manglende deling af unik information." },
            { front: "Transactive memory", back: "Gruppens samlede hukommelse er mere effektiv end individers hukommelse." },
            { front: "Groupthink", back: "Beslutningsproces hvor sammenhold prioriteres over realistisk vurdering; symptomer: illusion af enighed, usårlighed." },
            { front: "Forebyggelse af groupthink", back: "Forbliv upartisk, søg eksterne holdninger, lav subgrupper, anonym feedback." },
            { front: "Gruppepolarisering", back: "Gruppers tendens til at tage mere ekstreme beslutninger end individer; skyldes persuasive arguments og social comparison." },
            { front: "Great Person Theory", back: "Antagelsen om at dispositionelle træk gør en person til en god leder." },
            { front: "Transaktionelle ledere", back: "Fokuserer på kortsigtede mål og belønning for opnåelse." },
            { front: "Transformationelle ledere", back: "Inspirerer til fælles langsigtede mål; kan kombineres med transaktionel stil." },
            { front: "Contingency theory", back: "Leders effektivitet afhænger af opgave-/relationsorientering og kontrolniveau." },
            { front: "Agentic vs Communal traits", back: "Agentic: assertiv, dominant (associeret med mænd). Communal: omsorgsfuld, hjælpsom (associeret med kvinder). Barrierer for kvindelige ledere." },
            { front: "Social dilemmas", back: "Konflikter hvor individuel gevinst skader gruppen; fx Prisoner's Dilemma." },
            { front: "Tit-for-tat strategi", back: "Start med samarbejde, gengæld modstand; bygger respekt og undgår udnyttelse." },
            { front: "Integrative løsning", back: "Trade-offs hvor hver part får mest på områder, der er mindst vigtige for modparten." },
            { front: "Effektiv forhandling", back: "Kræver identifikation af forskellige prioriteter; mediatorer kan hjælpe." }
        ],
        
        "Aronson kapitel 11": [
            { front: "Prosocial adfærd", back: "Adfærd der udføres med formålet at hjælpe et andet menneske." },
            { front: "Altruisme", back: "Lysten til at hjælpe andre, selvom det kan have en pris for dig selv." },
            { front: "Slægtsselektion", back: "Evolutionær tendens til at hjælpe genetiske slægtninge for at sprede egne gener." },
            { front: "Norm of Reciprocity", back: "Forventningen om at hjælpe andre, fordi det øger sandsynligheden for, at de hjælper os senere." },
            { front: "Gruppeselektion", back: "Ideen om at hjælpe sin egen gruppe for at øge gruppens overlevelse; dog omdiskuteret." },
            { front: "Social Exchange Theory", back: "Vi hjælper for at maksimere sociale fordele og minimere omkostninger; en slags social økonomi." },
            { front: "Empati", back: "Evnen til at sætte sig i en anden persons sted og føle deres oplevelse." },
            { front: "Empati-altruisme-hypotesen", back: "Når vi føler empati, hjælper vi uden at forvente belønning; ren altruisme." },
            { front: "Altruistisk personlighed", back: "Kvaliteter der gør en person tilbøjelig til at handle altruistisk." },
            { front: "Køn og altruisme", back: "Mænd: heroiske, risikofyldte handlinger. Kvinder: omsorg, social støtte og frivillighed." },
            { front: "Kultur og altruisme", back: "Ind-gruppe: hjælpes af empati. Ud-gruppe: hjælpes for egen fordel. Kulturer med 'simpatia' viser mere hjælpsomhed." },
            { front: "Religion og prosocial adfærd", back: "Religiøse hjælper mere – men primært dem med samme tro; kan være fjendtlig mod ud-grupper." },
            { front: "Humør og hjælpsomhed", back: "Feel good, do good: godt humør øger hjælpsomhed. Feel bad, do good: skyld og tristhed kan også øge hjælpsomhed." },
            { front: "Urban overload hypothesis", back: "Byboere undgår at hjælpe pga. overstimulering; holder sig for sig selv for at reducere stress." },
            { front: "Residential mobility", back: "Jo længere tid man har boet samme sted, jo mere hjælpsom er man overfor fællesskabet." },
            { front: "Bystander effect", back: "Jo flere tilskuere, jo mindre sandsynlighed for at nogen hjælper." },
            { front: "Pluralistic ignorance", back: "Man tror, at andre tolker situationen korrekt, og derfor handler man ikke." },
            { front: "Diffusion of responsibility", back: "Ansvar spredes mellem tilskuere, hvilket mindsker individets følelse af ansvar." },
            { front: "Barrierer for at hjælpe", back: "1) Noticing event, 2) Tolke som nødsituation, 3) Tage ansvar, 4) Vide hvordan man hjælper, 5) Implementere hjælp." },
            { front: "Medier og prosocial adfærd", back: "Spil og musik med positive budskaber kan øge hjælpsomhed." },
            { front: "Hvordan øge hjælpsomhed?", back: "Bevidsthed om barrierer, træning i at bryde dem, og frivillighedsprogrammer (pas på overjustification effect)." }
        ],

        
        "Aronson kapitel 13": [
            { front: "Fordom (Prejudice)", back: "En negativ eller fjendtlig attitude mod mennesker i en genkendelig gruppe baseret udelukkende på deres medlemskab i gruppen. Indeholder kognitive, emotionelle og adfærdsmæssige komponenter." },
            { front: "Stereotyper", back: "Generalisering om en gruppe, hvor bestemte træk tilskrives alle medlemmer, uanset individuel variation." },
            { front: "Positive stereotyper", back: "Kan virke harmløse, men er stadig maladaptive, da de skjuler individet og forvrænger virkeligheden." },
            { front: "Diskrimination", back: "Ubegrundet negativ eller skadelig handling mod et individ baseret på gruppemedlemskab." },
            { front: "Institutionel diskrimination", back: "Diskrimination indlejret i systemer og strukturer, fx ansættelsespraksis eller retssystemet." },
            { front: "Hverdagsdiskrimination", back: "Subtile handlinger som mikroaggressioner, fx kommentarer om sprog eller kortere samtaler." },
            { front: "Implicitte fordomme", back: "Fordomme vi ikke er bevidste om; kan måles med metoder som IAT (Implicit Association Test)." },
            { front: "Bogus Pipeline", back: "Metode hvor folk tror, en løgn-detektor overvåger dem, hvilket får dem til at afsløre skjulte fordomme." },
            { front: "Self-fulfilling prophecy", back: "En forventning om en person, der påvirker adfærd, så forventningen bliver opfyldt." },
            { front: "Social Identity Threat", back: "Trussel opstået, når man føler sig evalueret som gruppemedlem frem for individ; hæmmer præstation." },
            { front: "Self-affirmation Theory", back: "Mennesker reducerer trusler mod selvværd ved at bekræfte sig selv i andre positive områder." },
            { front: "Normativ konformitet", back: "At tilpasse sig gruppens normer for at blive accepteret; kan fastholde eller ændre fordomme." },
            { front: "Social identitet", back: "Del af selvkoncept baseret på identifikation med sociale grupper." },
            { front: "Etnocentrisme", back: "Troen på, at ens egen gruppe er bedre end andre; universel og adaptiv tendens." },
            { front: "Indgruppe bias", back: "Tendens til at favorisere egen gruppe frem for udegrupper." },
            { front: "Udegruppe homogenitet", back: "Opfattelsen af, at udegruppens medlemmer er mere ens end de faktisk er." },
            { front: "Blaming the victim", back: "Tendens til at bebrejde offeret for negative hændelser; forstærkes af troen på en retfærdig verden." },
            { front: "Realistisk konflikt teori", back: "Fordomme opstår, når grupper konkurrerer om begrænsede ressourcer; fx Robbers Cave-eksperimentet." },
            { front: "Kontakt-hypotesen", back: "Ideen om, at interaktion mellem grupper kan reducere fordomme, hvis visse betingelser er opfyldt." },
            { front: "Allports 4 betingelser for god kontakt", back: "1) Lige status, 2) Fælles mål, 3) Samarbejde, 4) Understøttelse af normer/love." },
            { front: "Udvidet kontakt-effekt", back: "At vide, at et indgruppemedlem har en ven i udegruppen, kan reducere fordomme." },
            { front: "Mediekontakt", back: "Parasocial kontakt (tilknytning til mediefigurer) og vicarious kontakt (observere intergruppe-samarbejde) kan reducere fordomme." },
            { front: "Interdependence", back: "Når grupper er afhængige af hinanden for at nå fælles mål; reducerer fordomme." },
            { front: "Jigsaw Classroom", back: "Undervisningsmetode, hvor børn arbejder i små, multikulturelle grupper og er afhængige af hinanden; reducerer fordomme og øger empati." },
            { front: "IAT (Implicit Association Test)", back: "Måler hastigheden, hvormed folk forbinder ansigter med positive eller negative ord; bruges til at afdække implicitte fordomme." }
          ]
  };

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
                },
                    

// Chapters 11–13 (Aronson et al., Social Psychology)

// Chapter 11 — Prosocial Behavior
{
  chapter: "Chapter 11",
  question: "1. All of the following are examples of altruistic behavior, except:",
  options: [
    "Jamie gives $50 to a homeless woman when he was walking down the street alone.",
    "Muhamad anonymously donates $500 to an animal shelter.",
    "Lee publicly announces in his class that he will donate $80 toward the class fund.",
    "Jonathan agrees to be a voluntary organ donor."
  ],
  correctAnswer: "c",
  feedback: "Når motivet omfatter egen synlighed/omdømme, er det ikke rent altruistisk—“altruism” kræver at målet er andres velfærd frem for egen fordel."
},
// Rettelse jf. “Fejl i Aronson et al.pdf”: korrekt svar = A
{
  chapter: "Chapter 11",
  question: "2. Evolutionary psychology would have the most trouble explaining which of the following incidents?",
  options: [
    "When Usha was in a building that caught on fire, she let everyone else exit before her, even though she didn't know them.",
    "Clint risks his life to save his nephew who was drowning.",
    "Natasha runs in front of a moving car to keep her daughter from being hit.",
    "When Julio had to choose between saving his cousin or his son in a boating accident, he chose to save his son."
  ],
  correctAnswer: "a",
  feedback: "Evolutionsteori forklarer ofte hjælp via slægtskabsselektion og gensidighed; uselvisk hjælp til helt fremmede er sværere at forklare inden for denne ramme."
},
{
  chapter: "Chapter 11",
  question: "3. According to social exchange theory, which of the following people is most likely to give money to a homeless person?",
  options: [
    "Jade, who feels empathy for the homeless person.",
    "Bill, who wants to impress his date by helping the homeless person.",
    "Jack, who is related to the homeless person.",
    "Emma, who has a genetic predisposition for helping people."
  ],
  correctAnswer: "b",
  feedback: "Social udvekslingsteori vægter omkostninger og belønninger—at imponere en date er en forventet belønning, der øger sandsynligheden for hjælp."
},
{
  chapter: "Chapter 11",
  question: "4. Which one of the following reasons makes Phillip act altruistically?",
  options: [
    "Because he feels empathetic for a person in pain.",
    "Because he wants to be popular among his peers.",
    "Because he yearns for an esteemed social status.",
    "Because he wants to feel confident about himself."
  ],
  correctAnswer: "a",
  feedback: "Empati‑altruisme hypotesen: stærk empati kan udløse virkelig altruistisk hjælp."
},
{
  chapter: "Chapter 11",
  question: "5. People with high scores on tests of altruism are ___ likely to help another person than people with low scores.",
  options: [
    "not that much more",
    "much more",
    "certainly more—they overcome situational pressures",
    "more, because the altruism gene has been identified"
  ],
  correctAnswer: "a",
  feedback: "Personlighed spiller en rolle, men situationelle faktorer kan være stærkere; høj ‘altruism score’ giver ikke garanti for mere hjælp."
},
{
  chapter: "Chapter 11",
  question: "6. Your friend needs assistance in hosting a party; you help her because ____. You assist your elderly neighbor in crossing the road; you help her because ____.",
  options: [
    "it makes you feel good; you empathize with her",
    "it makes you feel good; it makes an impression",
    "you empathize with her; it makes you feel good",
    "it makes an impression; it makes you feel good"
  ],
  correctAnswer: "a",
  feedback: "Små hverdagshjælp kan motiveres af godt humør (feel‑good), mens akut hjælp til sårbare ofte drives af empati."
},
{
  chapter: "Chapter 11",
  question: "7. Which of the following is not a reason why being in a good mood tends to increase prosocial behavior?",
  options: [
    "Good moods make us behave in an ideal manner.",
    "Helping prolongs good moods.",
    "Good moods make us see the bright side of life.",
    "Good moods tend to pass on to others."
  ],
  correctAnswer: "d",
  feedback: "At gode humør ‘smitter’ er rart, men det forklarer ikke direkte hvorfor vi hjælper mere; de tre øvrige forklarer mekanismer der øger hjælpeatfærd."
},
{
  chapter: "Chapter 11",
  question: "8. Which of the following is true?",
  options: [
    "You are less likely to help if you are feeling happy.",
    "You are less likely to help if you are feeling sad.",
    "You are more likely to help if you are not feeling confident about something.",
    "You are more likely to help if you are feeling either happy or sad."
  ],
  correctAnswer: "d",
  feedback: "Både godt humør (feel‑good) og tristhed (feel‑bad, fx skyldreduktion) kan øge hjælpeatfærd—på forskellige mekanismer."
},
{
  chapter: "Chapter 11",
  question: "9. Prosocial behavior is more common in people living in small towns than in big cities because:",
  options: [
    "children in big cities fail to internalize interdependent norms.",
    "people in small towns are more affected by the bystander effect.",
    "in urban settings victims and helpers rarely share sociodemographics.",
    "urban overload: storbyers overstimulation mindsker opmærksomhed og hjælp."
  ],
  correctAnswer: "d",
  feedback: "Urban overload‑hypotesen: stærk sanse-/social belastning i byer reducerer opmærksomhed på andres behov."
},
{
  chapter: "Chapter 11",
  question: "10. Which of the following explains why people may not always like to be helped?",
  options: [
    "Most people prefer to do tasks themselves.",
    "Taking help may not always be ideal.",
    "Taking help may make people feel incompetent.",
    "Taking help means interdependence."
  ],
  correctAnswer: "c",
  feedback: "Hjælp kan true selvværd og oplevet kompetence—derfor afviser nogle hjælp."
},

// Chapter 12 — Aggression
{
  chapter: "Chapter 12",
  question: "1. Which one of the following factors has been found to be associated with an increase in aggression?",
  options: [
    "Economic inequality",
    "Bodily discomfort",
    "Mere presence of weapons",
    "All of the above"
  ],
  correctAnswer: "d",
  feedback: "Aggression påvirkes af strukturelle (ulighed), fysiologiske (ubehag/varme) og situations‑cues (våbeneffekten)."
},
{
  chapter: "Chapter 12",
  question: "2. What does the research on cultures of honor suggest about the relationship between testosterone and aggression?",
  options: [
    "It explains why men are more aggressive than women across cultures.",
    "Testosterone and aggression are unrelated.",
    "Culture affects when and why men can be provoked to become aggressive.",
    "Culture has little effect on the basic biology of testosterone in men."
  ],
  correctAnswer: "c",
  feedback: "‘Culture of honor’ modererer udtryk for aggression—kontekst og normer betyder meget, ikke kun biologi."
},
{
  chapter: "Chapter 12",
  question: "3. Relational aggression refers to:",
  options: [
    "Behaving violently against one’s relations.",
    "The negative effects of aggression on one’s relationships.",
    "Expressing aggression indirectly by manipulating a relationship.",
    "Having sexual relations with the target of one’s aggression."
  ],
  correctAnswer: "c",
  feedback: "Relationel aggression skader via rygter, udelukkelse og manipulation fremfor fysisk vold."
},
{
  chapter: "Chapter 12",
  question: "4. In terms of physical aggression, men are more likely than women to:",
  options: [
    "Engage in public displays of violence.",
    "Behave aggressively to defend their honor or status.",
    "Hit or slap a spouse or partner.",
    "All of the answers are correct."
  ],
  correctAnswer: "b",
  feedback: "Forskning finder større offentlig, status-/æresforsvarende fysisk aggression hos mænd."
},
{
  chapter: "Chapter 12",
  question: "5. Which of the following statements about the relationship between heat and aggression is true?",
  options: [
    "Heat reduces aggression because it makes us tired.",
    "Crime rates increase on unusually hot days.",
    "Heat doesn’t make us more aggressive; it’s just more folk ude på varme dage.",
    "Heat primes “hell” which primes violence concepts."
  ],
  correctAnswer: "b",
  feedback: "Varme øger irritabilitet og arousal—korrelerer med mere vold og kriminalitet."
},
{
  chapter: "Chapter 12",
  question: "6. According to social-cognitive learning theory, Xiang is more likely to hit his classmate Robert after being provoked if:",
  options: [
    "Xiang learned from another friend that retaliation must be physically violent.",
    "He thought his probability of winning was high.",
    "He believed that Robert deserved a punch.",
    "He assumed Robert will not fight back."
  ],
  correctAnswer: "a",
  feedback: "Observationslæring: modeller og regler, man lærer, former aggressive scripts."
},
{
  chapter: "Chapter 12",
  question: "7. What does research suggest is the most reasonable conclusion about the effects of media violence?",
  options: [
    "They have an effect, but primarily on children already predisposed to aggression.",
    "They have a strong effect, making most young children more aggressive.",
    "They have virtually no effect.",
    "Their effects depend on whether children are watching cartoons, television, or movies."
  ],
  correctAnswer: "a",
  feedback: "Effekter findes, men er størst for dem med forudgående risiko (prædispositioner)."
},
{
  chapter: "Chapter 12",
  question: "8. Harsh punishment to control aggressive behavior usually backfires because children tend to:",
  options: [
    "Become more aggressive and antisocial over time.",
    "Pass on their aggression to peers.",
    "Get hooked on violent games to retaliate.",
    "Stop defending themselves and get bullied."
  ],
  correctAnswer: "a",
  feedback: "Streng straf lærer model af aggression og skaber fjendtlighed—mild, konsistent og hurtig konsekvens virker bedre."
},
{
  chapter: "Chapter 12",
  question: "9. What does research find about the validity of the catharsis theory?",
  options: [
    "Supported: It is usually beneficial to ventilate anger and get it out of your system.",
    "Supported: Playing or watching violent sports reduces aggression.",
    "Disconfirmed: Expressing anger often makes people angrier.",
    "Disconfirmed: Acting out anger is healthy for physical but not psychological reasons."
  ],
  correctAnswer: "c",
  feedback: "‘At få det ud’ øger arousal og aggressionsscripts—venting forstærker ofte vrede."
},
{
  chapter: "Chapter 12",
  question: "10. Which concept holds that blowing off steam reduces the likelihood of further aggressive behavior?",
  options: [
    "Actively enabling",
    "Catharsis",
    "Psychic numbing",
    "Self-awareness"
  ],
  correctAnswer: "b",
  feedback: "Catharsis‑idéen er populær, men empirisk svagt underbygget—se forrige spørgsmål."
},

// Chapter 13 — Prejudice
{
  chapter: "Chapter 13",
  question: "1. A prejudice is:",
  options: [
    "A hostile attitude toward members of a group, based solely on their membership in that group.",
    "A feeling held by members of a majority group toward members of a minority group.",
    "Generally unaffected by societal events.",
    "Usually acquired in childhood and lasts a lifetime."
  ],
  correctAnswer: "a",
  feedback: "Forudindtaget negativ holdning mod gruppemedlemmer—generaliseret fra kategoritilhørsforhold."
},
{
  chapter: "Chapter 13",
  question: "2. Stereotypes, emotions, and discrimination all contribute to prejudice. Which refers to the cognitive component?",
  options: [
    "Racism",
    "Stereotypes",
    "Discrimination",
    "Bias"
  ],
  correctAnswer: "b",
  feedback: "Stereotyper er kognitive antagelser om grupper; diskrimination er adfærd; følelser er affekt."
},
{
  chapter: "Chapter 13",
  question: "3. For a job interview, the director chooses Jack over Jill solely because Jack is a man and hence more capable. This is an example of:",
  options: [
    "Hostile sexism.",
    "Benevolent sexism.",
    "In-group bias.",
    "Out-group homogeneity."
  ],
  correctAnswer: "a",
  feedback: "Fjendtlig sexisme: åben negativ evaluering af kvinder som mindre kompetente."
},
{
  chapter: "Chapter 13",
  question: "4. When Gordon Allport said “defeated intellectually, prejudice lingers emotionally,” he meant:",
  options: [
    "You can’t argue intellectually with a prejudiced person.",
    "A prejudiced person cannot intellectually defend the attitude.",
    "Implicit prejudices may decline while explicit prejudices remain.",
    "Explicit prejudices may decline while implicit prejudices remain."
  ],
  correctAnswer: "d",
  feedback: "Selv ved bevidst afvisning kan implicit bias fortsætte ‘under overfladen.’"
},
{
  chapter: "Chapter 13",
  question: "5. Which measure of unconscious prejudice describes the IAT?",
  options: [
    "Greater distance kept from a disliked group member.",
    "Slower associations between a target image and positive words than with negative words.",
    "Subtle slights and put-downs.",
    "A group ignoring contributions of its lone minority member."
  ],
  correctAnswer: "b",
  feedback: "IAT måler associeringshastighed mellem kategori og valens—langsommere positive kobling indikerer implicit bias."
},
{
  chapter: "Chapter 13",
  question: "6. According to realistic conflict theory, which increases prejudice and discrimination?",
  options: [
    "Excess resources",
    "Lack of information",
    "Social instability",
    "Limited resources"
  ],
  correctAnswer: "d",
  feedback: "Konkurrence om knappe ressourcer skærper ‘os‑dem’ konflikter."
},
{
  chapter: "Chapter 13",
  question: "7. What is social identity threat?",
  options: [
    "Fear that a concealable identity will be revealed.",
    "Anxiety felt by members of a stereotyped group when made aware of a stereotype about them.",
    "Threats to values/customs that comprise identity.",
    "Retaliation threats by a minority group."
  ],
  correctAnswer: "b",
  feedback: "Stereotype‑trussel kan svække præstationer ved saliens af negativ stereotype."
},
{
  chapter: "Chapter 13",
  question: "8. Which pairing would most people be likely to choose as “remarkably similar” to each other?",
  options: [
    "Two in-group members",
    "Two out-group members",
    "Themselves and an out-group member",
    "One in-group member and one out-group member"
  ],
  correctAnswer: "b",
  feedback: "Out‑group homogenitet: “de andre” ses som mere ens end ‘os’."
},
{
  chapter: "Chapter 13",
  question: "9. What is implied by the extended contact hypothesis?",
  options: [
    "Intergroup contact can be broadcast via media.",
    "Contact effects extend regionally.",
    "Knowing that your friend has cross-group friends can reduce your prejudice.",
    "Contact must be direct to be effective."
  ],
  correctAnswer: "c",
  feedback: "Udvidet kontakt: indirekte viden om venskaber på tværs kan mindske bias."
},
{
  chapter: "Chapter 13",
  question: "10. Based on Robber’s Cave, which environment most likely fosters cohesiveness across racial groups, and why?",
  options: [
    "Low SES neighborhoods—resources are scarce.",
    "Military personnel—must cooperate to accomplish shared superordinate goals.",
    "Online social media users—distance from racial identities.",
    "College campuses—curve grading creates competition."
  ],
  correctAnswer: "b",
  feedback: "Fælles overordnede mål og samarbejde reducerer intergruppefjendtlighed."
}
    ];

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
