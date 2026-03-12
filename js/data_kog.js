// ==========================================================
// KOGNITIONSPSYKOLOGI DATA
// ==========================================================

const kogFlashcardCategories = {
    "Kapitel 1 – Approaches to Human Cognition": [
        { front: "Kognitiv psykologi – definition", back: "Studiet af de mentale processer der gør os i stand til at forstå omgivelserne og træffe beslutninger ud fra dem." },
        { front: "Centrale kognitive processer", back: "Opmærksomhed, perception, læring, hukommelse, sprog, problemløsning, ræsonnering." },
        { front: "Cognitive Reflection Test – hovedpointe", back: "Mange mennesker giver intuitive, forkerte svar og tjekker ikke deres egen tænkning." },
        { front: "Kognitiv psykologi vs. kognitiv neurovidenskab", back: "Kognitiv psykologi undersøger adfærd; kognitiv neurovidenskab kombinerer adfærd og hjernens aktivitet." },
        { front: "De fire hovedtilgange til kognition", back: "1) Kognitiv psykologi; 2) Kognitiv neuropsykologi; 3) Kognitiv neurovidenskab; 4) Computational cognitive science." },
        { front: "Bottom-up processing", back: "Bearbejdning styret af stimulusinformation fra omgivelserne." },
        { front: "Top-down processing", back: "Bearbejdning styret af viden, forventninger og erfaringer." },
        { front: "Serial processing", back: "Ét trin behandles ad gangen." },
        { front: "Parallel processing", back: "Flere processer behandles samtidigt." },
        { front: "Cascade processing", back: "Senere stadier starter før tidligere stadier er afsluttet." },
        { front: "Task impurity problem", back: "De fleste kognitive opgaver involverer flere mentale processer, hvilket gør tolkning vanskelig." },
        { front: "Ecological validity", back: "Hvor godt laboratoriefund generaliserer til hverdagssituationer." },
        { front: "Implacable experimenter", back: "Forsøgslederens kontrol gør opgaven kunstig og ikke påvirkelig af deltagerens adfærd." },
        { front: "Paradigm specificity", back: "Resultater generaliserer ikke nødvendigvis til andre, lignende opgaver." },
        { front: "Kognitiv neuropsykologi – grundidé", back: "Studiet af hjerneskadede patienter for at forstå normal kognition." },
        { front: "Modularity assumption", back: "Antagelsen om at kognitive funktioner er opdelt i relativt uafhængige moduler." },
        { front: "Anatomical modularity", back: "Hvert kognitivt modul er placeret i et specifikt hjerneområde." },
        { front: "Universality assumption", back: "Mennesker har grundlæggende samme kognitive struktur." },
        { front: "Subtractivity assumption", back: "Hjerneskade fjerner funktioner, men tilføjer ikke nye." },
        { front: "Transparency assumption", back: "Præstation hos hjerneskadede = normal kognition minus skadeeffekten." },
        { front: "Dissociation", back: "En funktion er intakt, mens en anden er forringet." },
        { front: "Double dissociation", back: "To patienter viser modsatrettede mønstre; stærkere evidens for adskilte processer." },
        { front: "Association", back: "To symptomer optræder ofte sammen." },
        { front: "Syndrome", back: "Et sæt symptomer der typisk forekommer samtidig." },
        { front: "Case-series studie", back: "Studerer flere patienter med lignende skade for at forstå variation og fælles mønstre." },
        { front: "Diaschisis", back: "Lokal hjerneskade skaber også funktionelle ændringer i fjerntliggende områder." },
        { front: "Kognitiv neurovidenskab – fokus", back: "Kombinerer hjernemålinger og adfærd for at forstå mentale processer." },
        { front: "Centrale hjernelapper", back: "Frontal, parietal, temporal og occipital." },
        { front: "Brodmann-områder", back: "Kortlægning af hjernen baseret på cellearkitektur." },
        { front: "Connectome", back: "Kortlægning af hjernens forbindelser." },
        { front: "Cost–efficiency tradeoff (hjernen)", back: "Hjernen balancerer korte, billige forbindelser med nødvendige lange for effektive netværk." },
        { front: "Hubs og modules", back: "Hubs = knudepunkter med mange forbindelser; modules = tætte lokale netværk." },
        { front: "Rich-club organisation", back: "Hjerneområder med mange forbindelser er stærkt indbyrdes forbundet." },
        { front: "Single-unit recording", back: "Måler aktivitet i enkelte neuroner." },
        { front: "ERPs", back: "Gennemsnit af EEG-responser til samme stimuli; god tidslig opløsning, dårlig spatial." },
        { front: "PET", back: "Måler blodgennemstrømning via radioaktive tracere; god spatial, dårlig tidslig opløsning." },
        { front: "fMRI", back: "Måler BOLD-signal; god spatial opløsning, middel tidslig." },
        { front: "MEG", back: "Måler magnetfelter fra neuroner; god både tidsligt og spatialt." },
        { front: "TMS", back: "Kortvarig stimulering eller inhibering af hjerneområder for at undersøge kausalitet." },
        { front: "tDCS", back: "Svag strøm ændrer excitabilitet; anodal øger, cathodal sænker." },
        { front: "Reverse inference – problem", back: "Antager man kan slutte fra hjerneområde til kognitiv proces — ofte upræcist." },
        { front: "Blobology", back: "Overfortolkning af farvede aktiveringskort som om de viser unikke funktioner." },
        { front: "Default mode network", back: "Aktivt ved hvile, mind-wandering og indre tankeprocesser." },
        { front: "Computational cognitive science", back: "Udvikler computermodeller der simulerer menneskelig kognition." },
        { front: "Connectionist models", back: "Netværk af simple enheder der lærer via vægtjusteringer (backpropagation)." },
        { front: "Localist vs distributed representations", back: "Localist: én node pr. begreb; Distributed: mønster af aktivering repræsenterer begreber." },
        { front: "Superposition catastrophe", back: "Overlejringer i distribuerede netværk gør det svært at adskille repræsentationer." },
        { front: "Production systems", back: "IF–THEN regler styrer handlinger ud fra indholdet i working memory." },
        { front: "ACT-R – grundidé", back: "Kognitiv arkitektur med moduler for mål, hukommelse, perception og handling." },
        { front: "ACT-R's moduler", back: "Goal module, Imaginal module, Retrieval module, Procedural module." }
    ],
  
    "Kapitel 5 – Attention and Performance": [
        { front: "Attention – grunddefinition", back: "Selektiv processering af én informationskilde blandt flere mulige samtidigt tilgængelige stimuli." },
        { front: "Aktiv vs. Passiv attention", back: "Aktiv (top-down) styres af mål og forventninger; passiv (bottom-up) trigges af saliente ydre stimuli." },
        { front: "Focused attention", back: "Opgaver hvor man kun skal reagere på én informationskilde og ignorere andre." },
        { front: "Divided attention", back: "Situationer hvor to eller flere opgaver udføres samtidig; afslører begrænsninger i bearbejdningskapacitet." },
        { front: "Ekstern vs. intern attention", back: "Ekstern: selektion af sanseinput; Intern: styring af mentale repræsentationer såsom regler, hukommelse eller beslutninger." },
        { front: "Cocktail party-problemet", back: "Vanskeligheden ved at selektere én taler blandt flere samtidige lydkilder." },
        { front: "Dichotic listening", back: "Forskellige beskeder præsenteres til hvert øre, og deltageren skal kun følge én af dem." },
        { front: "Shadowing", back: "Gentagelse af den attended besked ord-for-ord for at sikre opmærksomhed." },
        { front: "Broadbent’s Early Selection", back: "Filtrering sker tidligt baseret på fysiske karakteristika; ikke-attenderet info når ikke semantisk behandling." },
        { front: "Treisman’s Attenuation Model", back: "Ikke-attenderet info dæmpes (ikke blokeres). Kan aktiveres hvis særligt relevant eller forventet." },
        { front: "Deutsch & Deutsch Late Selection", back: "Alle stimuli processeres fuldt ud; selektion sker først ved responsniveau." },
        { front: "Behandling af unattended information", back: "Ubetydelig detaljeret behandling, men relevant eller personligt vigtig information kan bryde igennem." },
        { front: "Auditory top-down processer", back: "Forventninger, tidligere oplevelser og mønstergenkendelse hjælper separation af lydkilder." },
        { front: "Temporal coherence", back: "Lydkilder adskilles fordi deres elementer varierer sammen i tid." },
        { front: "Focused visual attention – Spotlight teori", back: "Opmærksomhed fungerer som en markør der belyser et begrænset område." },
        { front: "Zoom lens teori", back: "Opmærksomhedens område kan udvides og indsnævres afhængigt af opgaven." },
        { front: "Multiple spotlights teori", back: "Opmærksomhed kan splittes mellem flere adskilte områder i rummet." },
        { front: "Split attention – nøglefund", back: "Mennesker kan opdele opmærksomheden, især når objekter ligger i hver sin hemifield." },
        { front: "Space-based vs. Object-based attention", back: "Opmærksomhed kan følge rumlige områder eller hele objekter, afhængigt af situationen." },
        { front: "Egly et al. (1994) – centrale fund", back: "Deltagere reagerer hurtigere på mål i samme objekt end i et andet, selv ved samme afstand." },
        { front: "Object-based attention – fleksibilitet", back: "Kan tilsidesættes hvis cues gør det sikkert hvor målet kommer." },
        { front: "Feature-based attention", back: "Selektiv fokus på bestemte stimulus-egenskaber såsom farve eller bevægelse." },
        { front: "Inhibition of return", back: "Reduceret sandsynlighed for at vende tilbage til et sted, der allerede er blevet undersøgt." },
        { front: "Perceptual load (Lavie)", back: "Høj perceptuel belastning → færre ressourcer til distraktorer. Lav belastning → flere forstyrrelser." },
        { front: "Cognitive load (Lavie)", back: "Høj kognitiv belastning → dårligere evne til kontrol og filtrering af distraktorer (dog afhængig af modalitet)." },
        { front: "Dorsal attention network", back: "Top-down system involveret i målstyret selektion; inkluderer intraparietal sulcus og frontal eye fields." },
        { front: "Ventral attention network", back: "Bottom-up system der registrerer uventede og saliente stimuli; især højre hemisfære." },
        { front: "Cingulo-opercular network", back: "Netværk relateret til vedvarende opmærksomhed og alertness." },
        { front: "Default mode network", back: "Aktivt ved intern tænkning; skal nedreguleres for effektiv ekstern opmærksomhed." },
        { front: "Visual neglect", back: "Manglende bevidsthed om stimuli på modsat side af en hjerneskade, typisk venstre side ved højresidig skade." },
        { front: "Allocentric vs egocentric neglect", back: "Allocentric: venstre side af objekter ignoreres; egocentric: venstre side af rummet ignoreres." },
        { front: "Extinction", back: "Stimulus i den kontralæsionelle side overses når stimulus samtidig præsenteres ipsilateralt." },
        { front: "Behandling uden bevidsthed – neglect", back: "Nogle informationer processeres ubevidst trods manglende rapportering (fx amygdala-respons på ansigter)." },
        { front: "Feature Integration Theory (Treisman)", back: "Features processeres parallelt; objects dannes via seriel opmærksomhedsbaseret binding." },
        { front: "Illusory conjunctions", back: "Fejlkombinationer af features når opmærksomhed er utilstrækkelig." },
        { front: "Dual-path model (Wolfe)", back: "Non-selektiv (gist) + selektiv pathway interagerer → hurtigere søgning i realistiske scener." },
        { front: "Functional set size", back: "Kun relevante områder undersøges; store dele af scenen ignoreres automatisk." },
        { front: "Texture Tiling Model (Rosenholtz)", back: "Perifer vision danner sammenklumpede tekstur-repræsentationer → forklarer crowding og parallel søgning." },
        { front: "Visual crowding", back: "Reduceret genkendelse i periferien pga. forstyrrende nabostimuli." },
        { front: "Cross-modal attention", back: "Opmærksomhed i én modalitet påvirker behandling i en anden (fx visuel opmærksomhed → ændret auditiv behandling)." },
        { front: "Ventriloquism effect", back: "Lyd lokaliseres mod den visuelle kilde pga. antagelsen om fælles årsag." },
        { front: "Colavita effect", back: "Visuelle stimuli dominerer ofte over auditive ved samtidighed." }
    ],

    "Kapitel 7 – Long-term Memory Systems": [
        { front: "Langtidshukommelse – hovedidé", back: "Langtidshukommelse består af flere systemer (episodisk, semantisk, perceptuel repræsentation, procedurel) fremfor ét samlet lager." },
        { front: "Amnesi – definition", back: "Alvorlig svækkelse i langtidshukommelsen, primært i deklarativ hukommelse, typisk grundet hjerneskade." },
        { front: "Korsakoff’s syndrom", back: "Alkoholrelateret amnesi pga. thiaminmangel; giver både retrograd og anterograd amnesi." },
        { front: "Anterograd amnesi", back: "Manglende evne til at danne nye langtidshukommelser efter skaden." },
        { front: "Retrograd amnesi", back: "Tab af minder erhvervet før skadens opståen." },
        { front: "Case HM – hovedpointer", back: "Fjernet hippocampus → alvorligt episodisk hukommelsestab; intakt procedurale færdigheder; viste at LTM består af flere systemer og at hippocampus ikke lagrer minder permanent." },
        { front: "Deklarativ hukommelse", back: "Bevidst adgang til viden; inkluderer episodisk (personlige begivenheder) og semantisk (fakta, sprog, koncepter)." },
        { front: "Non-deklarativ hukommelse", back: "Ubevidst hukommelse; inkluderer priming, procedural læring, klassisk betingning m.m." },
        { front: "Episodisk hukommelse – definition", back: "Hukommelse for specifikke begivenheder i tid og sted; muliggør 'mental time travel'." },
        { front: "De tre W'er i episodisk hukommelse", back: "What, When, Where – indhold, tidspunkt og sted." },
        { front: "Semantisk hukommelse – definition", back: "Fakta og generel viden; ikke knyttet til specifikke oplevelser." },
        { front: "Episodisk vs. semantisk udvikling", back: "Semantisk hukommelse udvikles tidligere; episodisk kræver mere moden hippocampus." },
        { front: "Developmental amnesia", back: "Hippocampal skade tidligt i livet → svær episodisk svækkelse men relativt bevaret semantisk viden." },
        { front: "Perirhinal/entorhinal cortex – rolle", back: "Understøtter semantisk læring og associationsdannelse; kan forklare bevaret semantisk viden ved hippocampusskade." },
        { front: "Retrograd amnesi i episodisk vs. semantisk hukommelse", back: "Episodisk hukommelse tabes typisk over mange år; semantisk oftest bevaret, især ældre viden." },
        { front: "Semantisk demens", back: "Degeneration i anterior temporal lobe; svær semantisk svækkelse men bevaret episodisk hukommelse i tidlige stadier." },
        { front: "Double dissociation – amnesi vs. semantisk demens", back: "Amnesi: episodisk dårlig, semantisk bevaret; semantisk demens: semantisk dårlig, episodisk relativt bevaret." },
        { front: "Interdependens mellem episodisk og semantisk hukommelse", back: "De to systemer påvirker og understøtter hinanden; mange minder har både episoder og fakta." },
        { front: "Personal semantics", back: "Personspecifik viden der både har episodiske og semantiske elementer." },
        { front: "Semanticisation", back: "Episodiske minder mister detaljer over tid og omdannes til mere abstrakt semantisk viden." },
        { front: "Episodisk hukommelse – recallsformer", back: "1) Fri recall; 2) Seriel recall; 3) Cued recall." },
        { front: "Fri recall", back: "Genkaldelse uden hints; sværest og mest krævende." },
        { front: "Cued recall", back: "Genkaldelse med en ledetråd." },
        { front: "Recognition memory – to processer", back: "1) Familiarity (fornemmelse af genkendelse); 2) Recollection (bevidst hentning af kontekst)." },
        { front: "Remember/Know-proceduren", back: "'Remember' = recollection; 'Know' = familiarity uden konteksthukommelse." },
        { front: "Binding-of-item-and-context model (Diana 2007)", back: "Perirhinal → hvad; Parahippocampal → hvor/kontekst; Hippocampus → binding af hvad + hvor → recollection." },
        { front: "Hippocampus – rolle i recollection", back: "Nødvendig for kontekstbindingsprocesser; skader her giver stærkt nedsat recollection." },
        { front: "Perirhinal cortex – rolle i familiarity", back: "Nødvendig for genkendelse baseret på genkendelsesstyrke uden kontekst." },
        { front: "Double dissociation mellem familiarity og recollection", back: "Nogle patienter mister familiarity, andre mister recollection → separate systemer." },
        { front: "Constructive episodic memory", back: "Episodisk hukommelse er fleksibel og fejlbarlig; genskaber oplevelser snarere end at afspille dem." },
        { front: "Episodisk hukommelse og fremtidstankning", back: "De samme systemer bruges til at forestille sig fremtidige scenarier som til at huske fortiden." },
        { front: "Hippocampusskade og fremtidssimulering", back: "Amnesipatienter kan ofte ikke generere detaljerede forestillede fremtidsscenarier." },
        { front: "Semantic schemas (skemaer)", back: "Generaliserede vidensstrukturer; ventromedial præfrontal cortex vigtigt for behandling." },
        { front: "Priming – definition", back: "Tidligere eksponering for et stimulus forbedrer efterfølgende processering af samme eller relaterede stimuli." },
        { front: "Perceptuel priming", back: "Forbedret genkendelse af stimulus’ fysiske form." },
        { front: "Conceptual priming", back: "Hurtigere behandling af stimulus’ betydning." },
        { front: "Priming i amnesi", back: "Amnesipatienter har typisk intakt priming selv med kraftigt episodisk hukommelsestab." },
        { front: "Procedural hukommelse – definition", back: "Viden om hvordan man udfører handlinger; ofte motoriske færdigheder; kræver ikke bevidsthed." },
        { front: "Serial reaction time task", back: "Implicit læringsopgave hvor reaktionsmønstre forbedres uden bevidst indsigt." },
        { front: "Hvad amnesi afslører om hukommelsessystemer?", back: "Deklarative og non-deklarative systemer er adskilte; hippocampus nødvendig for deklarativ indkodning, ikke for procedurer eller priming." },
        { front: "Hippocampus vs. basalganglier i læring", back: "Hippocampus → deklarativ viden; Basalganglier → procedurale færdigheder og vaner." },
        { front: "Hvorfor flere hukommelsessystemer?", back: "Forskellige typer information kræver forskellige lærings- og lagringsmekanismer (episoder vs. fakta vs. motorik)." }
    ],

    "Roediger & Yamashiro – Memory": [
        { front: "Overordnet fokus i kapitlet", back: "En historisk gennemgang af psykologisk hukommelsesforskning fra Ebbinghaus til nutidens kognitive tilgange." },
        { front: "Forskellige tilgange til hukommelse", back: "Synaptisk/plasticitet i dyr, betingning, neuropsykologi, kognitiv psykologi, kognitiv neurovidenskab, kollektiv/ social hukommelse." },
        { front: "Kognitiv psykologi – metode", back: "Sætter mennesker til veldefinerede opgaver og måler præstation (typisk studerende), med fokus på informationsbearbejdning." },
        { front: "Hermann Ebbinghaus – hovedbidrag", back: "Første systematiske eksperimenter om hukommelse; brug af nonsensstavelser, seriel læring, savings og glemselskurven." },
        { front: "Nonsense syllables (CVC)", back: "Konsonant–vokal–konsonant (fx ZAK), designet til at have minimale forhåndsassociationer." },
        { front: "Serial learning", back: "Lære en liste i korrekt rækkefølge; præstation måles som antal gentagelser til 100% korrekt gengivelse." },
        { front: "Savings-metoden", back: "Retention måles som reduktion i antal forsøg ved genindlæring i forhold til første læring; viser latent hukommelse selv uden bevidst recall." },
        { front: "Ebbinghaus’ glemselskurve", back: "Hurtig glemsel i starten, derefter langsommere; kan beskrives med log- eller potensfunktion." },
        { front: "Remote associations (Ebbinghaus)", back: "Viste med derived lists, at læring skaber både direkte og fjernere associationer (A til B, C, D...)." },
        { front: "Bartletts hovedidé", back: "Hukommelse er rekonstruktiv og meningssøgende; påvirkes af kultur, skemaer og sociale processer." },
        { front: "Bartletts metode ‘Remembering’", back: "Naturlige materialer (historier, billeder), lange retentionsintervaller, gentagne og serielle reproduktioner, kvalitative analyser." },
        { front: "Effort after meaning", back: "Mennesker forsøger aktivt at skabe mening og passe information ind i eksisterende viden og skemaer." },
        { front: "Conventionalization", back: "Ukendte eller kulturelt fremmede elementer omformes til mere velkendte og kulturelt passende former." },
        { front: "Schema-begrebet hos Bartlett", back: "Dynamiske vidensstrukturer, som organiserer erfaring og styrer både perception og genkaldelse." },
        { front: "Metode: War of the Ghosts", back: "Deltagere husker indiansk historie; over tid bliver fortællingen kortere, mere logisk og kulturelt tilpasset." },
        { front: "Verbal learning tradition", back: "Laboratoriebaseret, kontrollerede eksperimenter med ord, lister, nonsensstavelser; fokus på læringslovmæssigheder." },
        { front: "Mary Calkins’ paired-associate læring", back: "Farve–tal-par præsenteres; senere gives farve som cue til tal; viste vigtigheden af frekvens og recency." },
        { front: "Proaktiv interferens (PI)", back: "Tidligere læring forstyrrer ny læring eller senere hukommelse for nye items." },
        { front: "Retroaktiv interferens (RI)", back: "Ny læring forstyrrer hukommelsen for tidligere indlært materiale." },
        { front: "McGeochs kritik af decay-teori", back: "Tid i sig selv forklarer ikke glemsel; det er processer over tid, især interferens, som skaber glemsel." },
        { front: "A–B, A–D-paradigmet", back: "Først læres A–B, derefter A–D; ved test på første liste skaber A–D retroaktiv interferens mod A–B." },
        { front: "Response competition", back: "To mulige svar aktiveres (fx umbrella/penguin); konkurrencen ved retrieval skaber interferens." },
        { front: "Unlearning", back: "Indlæring af nye associationer (A–D) svækker gamle (A–B); del af to-faktor interferensteorien." },
        { front: "George Miller – Magical number 7±2", back: "Viser begrænset kapacitet i korttidshukommelse; mennesker kan fastholde ca. 7 enheder." },
        { front: "Chunking", back: "Flere enheder organiseres til meningsfulde grupper (chunks); øger mængden information, der kan huskes." },
        { front: "Recoding", back: "Omstrukturering af input (fx tal til kvadrattal) for at gøre det lettere at lagre og huske." },
        { front: "Information-processing model", back: "Ser kognition som informationsstrøm gennem moduler/stadier (box-and-arrow), inspireret af ingeniør- og computermodeller." },
        { front: "Shannon’s informationsteori", back: "Information = reduktion i usikkerhed; kan måles i bits; inspirerede tidlige studier af kanal-kapacitet." },
        { front: "Modal model (Atkinson & Shiffrin)", back: "Indeholder sensoriske registre, korttids store (STS) og langtids store (LTS) med kontrolprocesser (fx repetition, kodning)." },
        { front: "Sensory register", back: "Kortvarig, næsten fuldstændig, modalitetsspecifik repræsentation (ikonisk/echoisk); forsvinder hurtigt uden opmærksomhed." },
        { front: "Korttidshukommelse (STS)", back: "Begrænset kapacitet og varighed; information fastholdes via vedligeholdende repetition." },
        { front: "Brown–Peterson task", back: "Trekants-bogstaver huskes mens man tæller baglæns; viser hurtig glemsel uden rehearsal (≈15 sekunder)." },
        { front: "Seriel positionskurve", back: "Primacy (første items) og recency (sidste items) huskes bedst; recency forsvinder ved distraktion." },
        { front: "Sternbergs søgeeksperiment", back: "Viser seriel, ofte exhaustiv søgning i korttidshukommelse – reaktionstid stiger med antal items." },
        { front: "Langtidshukommelse (LTS) i modal model", back: "Antages at have stor kapacitet; organisering og søgbarhed afgør om information er tilgængelig." },
        { front: "Availability vs. accessibility", back: "Noget kan være lagret (available) men ikke umiddelbart tilgængeligt (accessible) uden passende cues." },
        { front: "Levels of Processing (Craik & Lockhart)", back: "Hukommelse afhænger af hvor dybt information bearbejdes (visuel/lyd vs. semantisk), ikke af hvilken ‘lagerboks’ den ender i." },
        { front: "Orienteringstasks (LoP)", back: "Spørgsmål om bogstaver, rim eller mening bruges til at styre dybden af bearbejdning ved indkodning." },
        { front: "Transfer-appropriate processing", back: "Hukommelse er bedst, når processer ved test matcher processer ved indkodning, ikke nødvendigvis ‘dybest’." },
        { front: "Encoding specificity principle", back: "Retrieval-cues er mest effektive, når de overlapper med den oprindelige indkodningssituation." },
        { front: "Working memory (Baddeley & Hitch)", back: "Et aktivt system der både lagrer og bearbejder information; inkluderer fonologisk loop, visuospatial sketchpad og central executive." },
        { front: "Complex span tasks", back: "Opgaver hvor man skal huske information samtidig med at løse en sekundær opgave; måler working memory capacity." },
        { front: "Working memory capacity – betydning", back: "Stabile individuelle forskelle knyttet til fx læseforståelse, fluid intelligens og akademisk præstation." },
        { front: "Episodic memory (Tulving)", back: "Hukommelse for specifikke begivenheder i tid og sted; ‘mental time travel’ tilbage til tidligere oplevelser." },
        { front: "Tulving & Pearlstone – cues", back: "Cued recall afslører meget mere lagret information end fri recall; viser forskel mellem availability og accessibility." },
        { front: "Autobiographical memory", back: "Hukommelse for eget liv; studeres ofte med cue-ord og selvrapporterede alder på episoder." },
        { front: "Reminiscence bump", back: "Overrepræsentation af minder fra ungdoms- og tidlig voksenalder hos ældre voksne." },
        { front: "Life scripts", back: "Kulturelle skemaer for et typisk livsforløb; mange scripts-hændelser ligger i reminiscence bump-perioden." },
        { front: "Flashbulb memories", back: "Meget levende minder for hvor man var, da man hørte om dramatiske nyheder; subjektivt sikre men ikke nødvendigvis mere korrekte." },
        { front: "Implicit memory – grundidé", back: "Tidligere erfaring påvirker adfærd uden bevidst genkaldelse; måles typisk via priming og færdigheder." },
        { front: "Explicit vs. implicit tests", back: "Explicit: direkte krav om at huske (recall/recognition). Implicit: opgaver uden hukommelsesinstruktion (fx ordstamme-udfyldning)." },
        { front: "Priming hos amnesipatienter", back: "Kan have normal priming trods stærkt svækket bevidst episodisk hukommelse; tyder på adskilte systemer/processer." },
        { front: "Jacoby & Dallas (1981)", back: "Levels of processing påvirker recognition stærkt, men ikke perceptuel identifikation; viser dissociation mellem eksplicit og implicit hukommelse." },
        { front: "Social remembering – collaborative inhibition", back: "Grupper husker mere end enkeltpersoner samlet, men den enkelte husker mindre efter at have samarbejdet end hvis han/hun havde arbejdet alene." },
        { front: "Social contagion of memory", back: "Fejlerindringer kan sprede sig mellem personer via samtale og blive integreret i andres hukommelse." },
        { front: "Anvendt hukommelsesforskning – Eyewitness", back: "Forskning på lineup-procedurer, misinformationseffekten og vidnepåvirkning for at forbedre retssikkerhed." },
        { front: "Anvendt hukommelsesforskning – Læring", back: "Brug af hukommelsesprincipper (fx testeffekt, spacing, elaboration) til at optimere undervisning og studieteknik." }
    ],

    "Bartlett – Remembering": [
        { front: "Formålet med Bartletts forskning", back: "At forstå hvordan mennesker faktisk husker i naturlige situationer, ikke blot i kunstige laboratorietests." },
        { front: "Kritik af Ebbinghaus", back: "Nonsensstavelser giver kunstige hukommelsesvaner og siger lidt om virkelig hukommelse, hvor mening og attitude spiller stor rolle." },
        { front: "Hukommelse som konstruktion", back: "At huske er en aktiv rekonstruktion, ikke en ordret genkaldelse." },
        { front: "Schema – definition", back: "En aktiv, organiseret helhed af tidligere erfaringer, som former og styrer ny fortolkning og hukommelse." },
        { front: "Attitude i hukommelse", back: "En grundholdning opstår først, og hukommelsen formes derefter til at passe denne." },
        { front: "Rationalisering", back: "Ulogiske eller fremmede elementer omformes, så de passer bedre til ens egen kultur og forståelse." },
        { front: "Konventionalisering", back: "Ukendte detaljer ændres, så historien minder mere om velkendte fortælleformer." },
        { front: "Forkortning", back: "Hukommelsen dropper detaljer og gør fortællingen enklere og kortere over tid." },
        { front: "Dominante detaljer", back: "Detaljer, der matcher personens interesser eller følelser, overlever og ændrer historiens fokus." },
        { front: "War of the Ghosts – hovedfund", back: "Historien bliver mere logisk, vestlig og sammenhængende i deltagernes gengivelser." },
        { front: "Kulturel påvirkning", back: "Deltagere omformer historien, så den passer til deres egen kulturelle baggrund." },
        { front: "Individualisering", back: "Forskelle i interesser, personlighed og erfaring fører til forskellige forvrængninger." },
        { front: "Long‑distance remembering", back: "Folk husker enten nogle få isolerede detaljer eller bygger en hel ny historie ud fra få brudstykker." },
        { front: "Schema vs. spor‑teori", back: "Bartlett afviser idéen om faste hukommelsesspor; hukommelse ændres konstant gennem schemaer." },
        { front: "Serial reproduction – pointe", back: "Information ændres i retning af fælles kulturelle mønstre, som i 'hviskeleg'." },
        { front: "Affective determination", back: "Følelser påvirker hvilke dele der huskes, fx at ’relatives’ bevares pga. krigstidens bekymringer." },
        { front: "Eksperimentel metode – kritik", back: "Kontrollerede stimuli siger lite om naturlig hukommelse, hvor indre forhold spiller stor rolle." },
        { front: "Hovedkonklusion", back: "Hukommelse er formet af mening, social kontekst, kultur, attitude og aktive schemaer – ikke lagrede kopier." }
    ],

    "Smallwood & Schooler (2015) – Mind Wandering": [
        { front: "Mind wandering – definition", back: "Skift i tankeindhold væk fra en igangværende opgave til selv-genererede tanker." },
        { front: "Self-generated thought", back: "Mentalt indhold der opstår uden direkte sensorisk input; kan være både opgaverelateret og opgave‑uafhængigt." },
        { front: "Perceptual decoupling", back: "Opmærksomhed løsriver sig fra ydre stimuli, hvilket muliggør intern tænkning." },
        { front: "Experience Sampling (ES)", back: "Metode hvor deltagere rapporterer deres aktuelle tanker via probe-caught eller self-caught." },
        { front: "Meta-awareness", back: "At blive bevidst om, at ens tanker er vandret; ofte fraværende under mind wandering." },
        { front: "Zoning out vs. tuning out", back: "Zoning out = ubevidst mind wandering; tuning out = bevidst om at man er off-task." },
        { front: "Default Mode Network (DMN)", back: "Netværk aktivt under selv-genereret tankeaktivitet og mind wandering (mPFC, PCC m.fl.)." },
        { front: "Temporal fokus – fund", back: "Mind wandering har ofte fremtidsfokus; fortidsfokus hænger stærkere sammen med negativt humør." },
        { front: "Content Regulation Hypothesis", back: "Funktionelle konsekvenser afhænger af indholdet, fx fortid → negativt humør; fremtid → planlægning." },
        { front: "Context Regulation Hypothesis", back: "Opmærksomhed styres så mind wandering begrænses i krævende situationer og øges i nemme." },
        { front: "Executive control – rolle", back: "Styrer hvorvidt man kan undertrykke mind wandering ved høje krav og tillade det ved lave krav." },
        { front: "Episodisk memory og emotion", back: "Episodiske og følelsesmæssige processer bidrager til indholdet af selv-genererede tanker." },
        { front: "Måleproblemer – tre udfordringer", back: "1) Manglende eksperimentel kontrol; 2) Intern, skjult tilstand; 3) Afhængighed af introspektion." },
        { front: "Mind wandering – omkostninger", back: "Nedsat læseforståelse, dårligere arbejdshukommelse, fejl i opgaver, bilkørsel og akademiske præstationer." },
        { front: "Mind wandering – fordele", back: "Fremtidsplanlægning, kreativitet, problemløsning, meningsskabelse og mentale pauser." },
        { front: "Awareness og præstation", back: "Ubevidst mind wandering giver større performance‑tab end bevidst mind wandering." },
        { front: "Individuelle forskelle", back: "Folk med høj executive control mind-wander mindre i svære opgaver, men mere i lette." },
        { front: "Motivation og mind wandering", back: "Øget motivation reducerer mind wandering; craving, negativt humør eller alkohol øger det." },
        { front: "Mindfulness – effekt", back: "Mindfulness-træning reducerer mind wandering og forbedrer opmærksomhed og arbejds­hukommelse." },
        { front: "Task engagement", back: "Øget involvering (fx hyppige test, interesseret materiale) mindsker mind wandering." },
        { front: "Mind wandering og kreativitet", back: "Nemd opgave → mere mind wandering → større kreativ incubation-effekt." },
        { front: "DMN + executive system", back: "Begge systemer kan være aktive under mind wandering – komplekst samspil." },
        { front: "Dagligliv – risici", back: "Mind wandering er stærk prædiktor for ulykker, særligt bilkørselsfejl og pilotfejl." },
        { front: "Dagligliv – kreative gevinster", back: "Eksperter rapporterer flere aha‑ideer under mind wandering end under fokuseret arbejde." }
    ],

    "Berntsen 2021 – Involuntary Autobiographical Memories": [
        { front: "Definition", back: "Spontane minder om personlige begivenheder, der dukker op uden bevidst søgning." },
        { front: "Frekvens i hverdagen", back: "Forekommer meget ofte og typisk oftere end viljestyrede erindringer." },
        { front: "Retrieval effort", back: "Hurtigere og mindre krævende end voluntære minder, med lavere præfrontal involvering." },
        { front: "Cues – hovedmekanisme", back: "Udløses af tydelige kontekstmatch mellem nu-situation og tidligere begivenhed." },
        { front: "Cue-unikhed", back: "Unikke eller særligt karakteristiske cues fremkalder oftere spontane minder end gentagne/almindelige cues." },
        { front: "Retentionstid", back: "Hyppigst om nyere begivenheder; sandsynlighed falder med tid siden hændelsen." },
        { front: "Adaptive funktioner", back: "Situationsrelevante, hurtige, billige i kognitive ressourcer og ofte emotionelt stærke → hjælper adfærd." },
        { front: "Intrusive traumeminder", back: "Ses som en dysfunktionel variant af samme mekanismer, forstærket af ekstrem arousal og noveltet." },
        { front: "Forskel fra mind wandering", back: "Spontane minder er cue- og kontekststyrede (Type 1); mind wandering er typisk decoupled og kontrolafhængigt (Type 2)." },
        { front: "Overordnet pointe", back: "Involuntary minder er en grundlæggende, funktionel form for hukommelse og bør ikke sidestilles med mind wandering." }
    ],

    "Benjafield (2010) – Cognitive Psychology": [
        { front: "Hvorfor opstod kognitiv psykologi?", back: "Som en reaktion på behaviorismens snævre fokus på ydre adfærd; man ville igen studere mentale processer på en videnskabelig måde." },
        { front: "Informationsteori – kerneidé", back: "Information = reduktion af usikkerhed; begivenheder kan måles i bits som funktion af antal mulige udfald." },
        { front: "Mennesket som informationsbehandlingssystem", back: "Kognitiv psykologi låner begreber fra kommunikationsmodeller (encoding, kanal, decoding) og ser sindet som et system med begrænset kapacitet." },
        { front: "Chomsky – hovedkritik af behaviorisme", back: "Sprog kan ikke forklares ved stimulus–respons og forstærkning, fordi vi konstant danner nye sætninger og har kreativ grammatik." },
        { front: "Surface vs. deep structure (Chomsky)", back: "Surface = den konkrete sætning; deep = underliggende grammatisk/meningsstruktur som genereres via transformationsregler." },
        { front: "Chomskys nativisme", back: "Vi har medfødte universelle grammatiske principper og en ‘language acquisition device’, som gør hurtig sprogindlæring mulig." },
        { front: "Miller – Magical number 7 ± 2", back: "Vores umiddelbare hukommelse kan typisk rumme omkring 7 enheder; viser begrænset kanal-kapacitet i korttidshukommelsen." },
        { front: "Broadbent og dikotisk lytning", back: "To beskeder præsenteres samtidig i hvert øre; forsøgspersonen kan selektivt skygge én besked → opmærksomhed som filter på tidlig sensorisk information." },
        { front: "TOTE-enhed (Miller, Galanter & Pribram)", back: "Test–Operate–Test–Exit: generel feedback-loop til styring af adfærd; kan nestes hierarkisk til komplekse planer og strategier." },
        { front: "Subjektiv behaviorisme", back: "Kombination af objektive metoder med kontrolleret brug af ‘thinking aloud’ til at studere indre planer uden at vende tilbage til klassisk introspektion." },
        { front: "Bruners ‘New Look’ i perception", back: "Perception afhænger ikke kun af stimulus, men også af behov, forventninger og erfaring (perceptual readiness, minimax-aksion)." },
        { front: "Bruner & Postman – farvede spillekort", back: "Inkongruente kort (fx rød spar) kræver længere eksponering og forvrænges først som ‘normale’ → forventninger modstår det uventede." },
        { front: "Concept attainment (Bruner)", back: "Deltagere finder et begreb ud fra positive/negative eksempler; viser strategier for kategoridannelse og hypotesetestning." },
        { front: "Bartletts serielle reproduktion", back: "Historier og billeder gengives gennem kæder af personer; over tid bliver materialet kortere, mere konventionelt og rationaliseret." },
        { front: "Schema hos Bartlett", back: "Aktiv organisering af tidligere erfaringer, som vi tilpasser ny information til; hukommelse er rekonstruktion frem for genafspilning." },
        { front: "Neissers programmetafor", back: "Sindet sammenlignes med et computerprogram: kognitiv psykologi beskriver ‘softwaren’ (procedurer), ikke ‘hardwaren’ (hjernen)." },
        { front: "Modalmodellen (Atkinson & Shiffrin)", back: "Sensorisk register → korttidslager/working memory → langtidslager; styres af kontrolprocesser som repetition og søgning." },
        { front: "Neisser og økologisk validitet", back: "Kritiserer smalle laboratorieopgaver og opfordrer til studier af kognition i virkelige, kulturelt betydningsfulde situationer." },
        { front: "Gibsons ‘affordances’", back: "Miljøet indeholder direkte opfattelige muligheder for handling (trapper → klatring; is → skøjteløb), så perception kræver ikke intern ‘berigelse’." },
        { front: "Simon, Newell og kunstig intelligens", back: "Bruger computersimuleringer (fx Tower of Hanoi, skak) til at modellere problemløsning som simple, generelle strategier implementeret modulært." },
        { front: "Modularitet og plansystemer (Simon)", back: "Kognitive processer består af moduler (delrutiner), der kan kombineres fleksibelt; gør både tænkning og komplekse systemer mere robuste." },
        { front: "Turing-testen", back: "En computer ‘tænker’ hvis dens skriftlige svar i en dialog ikke kan skelnes fra et menneskes svar af en dommer." },
        { front: "Tversky & Kahneman – heuristics and biases", back: "Intuition (System 1) bruger tommelfingerregler som repræsentativitet, tilgængelighed og anchoring, hvilket kan føre til systematiske fejl." }
    ],

    "Matlin & Farmer 2017 – Historisk perspektiv": [
        { front: "Aristoteles’ bidrag", back: "Betragtede perception, hukommelse og viden som baseret på erfaring og observation; tidlig betoning af empirisk evidens." },
        { front: "Wundt – grundlægger af eksperimentel psykologi", back: "Introspektion som metode til systematisk analyse af egne oplevelser under kontrollerede forhold." },
        { front: "Begrænsning ved introspektion", back: "Introspektion er ofte upræcis; kognition fungerer ikke altid som den opleves indefra." },
        { front: "Ebbinghaus’ forskning", back: "Systematiske studier af hukommelse med nonsensstavelser for at undgå tidligere erfaringers påvirkning." },
        { front: "Mary Whiton Calkins", back: "Opdagede recency-effekten og argumenterede for studier af kognition i virkelige situationer." },
        { front: "William James", back: "Fokuserede på hverdagsoplevelser og beskrev sindet som aktivt og undersøgende; tidlig diskussion af tip‑of‑the‑tongue." },
        { front: "Gestaltpsykologi – kerneidé", back: "Vi organiserer sanseindtryk aktivt; helheden er mere end summen af delene; vigtig for perception og problemløsning." },
        { front: "Behaviorisme – hovedsynspunkt", back: "Studiet af objektiv, observerbar adfærd; afviste mentale repræsentationer og indre processer." },
        { front: "Behaviorismens bidrag", back: "Skabte præcise operationaliseringer og stramt kontrolleret eksperimentel metode, stadig centrale i kognitiv psykologi." },
        { front: "Kritik af behaviorisme", back: "Kunne ikke forklare komplekse fænomener som sprog, problemløsning og påvirkning af tidligere viden." },
        { front: "Piagets teori", back: "Børn skaber aktivt forståelse af verden; kognitive strategier udvikles gennem stadier." },
        { front: "Chomskys kritik af behaviorisme", back: "Sprog er for komplekst til stimulus‑respons‑forklaringer; mennesker har medfødt sprogevne." },
        { front: "Den kognitive revolution", back: "Skift fra behaviorisme til fokus på indre mentale processer som hukommelse, opmærksomhed og sprog." },
        { front: "1956 – kognitionspsykologiens fødselsår", back: "Publikationer om hukommelse, opmærksomhed, sprog og problemløsning markerede feltets etablering." },
        { front: "Ulric Neisser (1967)", back: "Publicerede *Cognitive Psychology* og samlede feltets grundlæggende teorier; kaldet ‘kognitionspsykologiens far’." },
        { front: "Økologisk validitet – kritik", back: "Laboratorieopgaver afspejler ikke altid virkelige kognitive situationer; nutidig forskning kombinerer lab og real‑life metoder." }
    ],

    "Kapitel 6 – Læring, hukommelse og glemsel": [
        { front: "Hukommelsens tre hovedfaser", back: "Indkodning (bearbejdning af input), lagring (vedligeholdelse af spor), og genkaldelse (hentning). Fejl i retrieval er en hyppig årsag til glemsel." },
        { front: "Encoding – centrale processer", back: "Omfatter opmærksomhed, elaboration, dybde af bearbejdning, strukturel/semantisk koding og relationsdannelse." },
        { front: "Storage – stabilitet over tid", back: "Indeholder både midlertidige aktiveringer og mere varige ændringer i forbindelser; afhænger af konsolidering og interferens." },
        { front: "Retrieval – mekanismer", back: "Cue‑styring, associationsbaner og match mellem encoding og retrieval bestemmer, om viden kan hentes effektivt." },
        { front: "Sensoriske lagre – funktion", back: "Bevarer rå sansedata i meget kort tid, så perceptuelle systemer kan kombinere og udvælge information." },
        { front: "Ikonisk hukommelse", back: "Visuelt sensorisk lager; varer ca. 250–1000 ms; giver en ‘visuel efterglød’ der muliggør integration af detaljer." },
        { front: "Ekkoisk hukommelse", back: "Auditivt sensorisk lager; varer 2–3 sekunder; forklarer hvorfor vi stadig kan høre en sætning efter den er sagt." },
        { front: "Korttidshukommelse – kapacitet", back: "Traditionelt 7±2 elementer, men kapaciteten afhænger af chunking, opmærksomhed og materiale." },
        { front: "Chunking – definition", back: "Sammenkobling af flere elementer til meningsfulde enheder som trækker på LTM-strukturer." },
        { front: "STM – holdbarhed", back: "Information forsvinder hurtigt, men primært gennem interferens snarere end passivt decay." },
        { front: "Decay vs interferens", back: "Decay spiller lille rolle i STM; interferens fra andre elementer er hovedårsag til tab." },
        { front: "Displacement-hypotesen", back: "Nye elementer kan skubbe gamle ud af STM, men effekten er mindre vigtig end interferens." },
        { front: "Separat STM og LTM – evidens", back: "Amnesipatienter har fungerende STM men dårlig LTM, mens patienter som KF har dårlig STM men normal LTM → dobbeltdissociation." },
        { front: "Unitary-store model – kritik", back: "Forklarer STM som aktiveret LTM, men kan ikke redegøre for bevarelse af nye, urelaterede mønstre der ikke findes i LTM." },
        { front: "Baddeleys arbejdshukommelse – formål", back: "Et aktivt system til både opbevaring og manipulation af information, grundlag for kompleks tænkning." },
        { front: "Central executive – funktion", back: "Styrer skift, opdatering, inhibition, opmærksomhedsfordeling og koordinering af delsystemer." },
        { front: "Fonologisk løkke – to komponenter", back: "Fonologisk lager (holder lydinformation) og artikulatorisk rehearsal (indre gentagelse for at holde info aktiv)." },
        { front: "Fonologisk lighedseffekt", back: "Ord der lyder ens forveksles lettere i STM end ord der lyder forskelligt." },
        { front: "Ordlængdeeffekt", back: "Kortere ord huskes bedre end lange, fordi de passer i rehearsal-cyklussen." },
        { front: "Visuo-spatial sketchpad – komponenter", back: "Visuel cache (lagrer visuelle detaljer) og inner scribe (spatial bearbejdning og opdatering)." },
        { front: "Episodisk buffer – rolle", back: "Integrator der binder information fra delsystemer og LTM til multimodal episodisk struktur." },
        { front: "Kritik af central executive", back: "For upræcis og bred; nyere modeller foreslår flere subkomponenter af eksekutive funktioner." },
        { front: "Working memory capacity (WMC)", back: "Individuelle forskelle i evnen til at fastholde og manipulere info; stærkt knyttet til fluid intelligens og akademisk præstation." },
        { front: "Complex span-tests", back: "Opgaver hvor man skiftevis løser problemer og husker items; måler både lagring og opmærksomhedskontrol." },
        { front: "Levels of processing – dybdebearbejdning", back: "Semantisk bearbejdning giver bedre LTM end strukturel og fonologisk behandling." },
        { front: "Elaboration – betydning", back: "Jo mere man forbinder ny information med eksisterende viden, desto bedre lagring." },
        { front: "Distinctiveness – princip", back: "Information skiller sig ud fra lignende materiale → mindre interferens og stærkere retrieval-cues." },
        { front: "Self-reference effect", back: "Information bliver bedre husket, når den relateres til én selv." },
        { front: "Transfer-appropriate processing", back: "Hukommelsen er bedst når kognitive processer ved indkodning matcher processer ved test (fx rim-test efter fonologisk encoding)." },
        { front: "Encoding specificity", back: "Retrieval-cues er mest effektive når de overlapper med encoding-konteksten." },
        { front: "State-dependent learning", back: "Indre tilstande (humør, fysiologi) under encoding fremmer retrieval når de matches ved test." },
        { front: "Context-dependent learning", back: "Ydre kontekst (fx rum, lugte) påvirker især recall, mindre effect på recognition." },
        { front: "Testing effect – hovedfund", back: "Aktiv genkaldelse under indlæring giver stærkere langtidslagring end genlæsning." },
        { front: "Retrieval effort hypothesis", back: "Svær, krævende retrieval skaber stærkere spor end let retrieval." },
        { front: "Mediator effectiveness hypothesis", back: "Testing skaber bedre associationsbaner som fungerer som mediatorer ved senere genkaldelse." },
        { front: "Bifurcation model", back: "Testning styrker stærke spor men ikke svage → kan forklare reverseringsfænomener i visse situationer." },
        { front: "Implicit læring – kendetegn", back: "Indlæring uden bevidsthed om reglerne; ofte robust over for alder og kognitiv svækkelse." },
        { front: "Serial reaction time task", back: "Deltagere reagerer hurtigere over tid pga. implicit sekvensindlæring uden at kunne forklare reglerne." },
        { front: "Implicit og eksplicit læring – hjerner", back: "Implicit: basalganglier og striatum. Eksplicit: hippocampus og medial temporallap." },
        { front: "Interferens i LTM – to former", back: "Proaktiv interferens (gammelt forstyrrer nyt) og retroaktiv interferens (nyt forstyrrer gammelt)." },
        { front: "Retrieval competition", back: "Flere potentielle svar aktiveres → konkurrence hæmmer effektiv genkaldelse." },
        { front: "Motiveret glemsel", back: "Individet forsøger at undertrykke eller glemme uønskede minder, bevidst eller ubevidst." },
        { front: "Directed forgetting", back: "Instruktion om at glemme reducerer senere recall for det glemte materiale." },
        { front: "Think/No-Think-paradigme", back: "Aktiv suppression af tanker kan hæmme hippocampus og reducere genkaldelse af specifikke minder." },
        { front: "Konsolidering – to faser", back: "Synaptisk konsolidering (timer–dage) og systemkonsolidering (uger–år) hvor minder flyttes fra hippocampus til neocortex." },
        { front: "Rekonsolidering – funktion", back: "Når et minde genaktiveres, bliver det midlertidigt ustabilt og kan opdateres eller ændres." },
        { front: "Søvn og hukommelse", back: "Søvn fremmer både konsolidering, reducerer interferens og styrker indlærte mønstre." },
        { front: "Glemsel – adaptive funktioner", back: "Glemsel reducerer belastning, fremmer fleksibilitet og forhindrer interferens fra irrelevante minder." },
        { front: "Decay i LTM – status", back: "Fysisk nedbrydning af spor sandsynligvis mindre vigtig end interferens og manglende cues." },
        { front: "Cue-afhængig glemsel", back: "Ofte er minder tilgængelige men ikke tilgængelige uden passende retrieval cues." }
  ],

  "Cabeza & Moscovitch 2013 – Memory Systems, Modes & Components": [
        { front: "Artikelens hovedpointe", back: "Neuroimaging-data støtter bedst component process‑rammen frem for memory systems og processing modes." },
        { front: "Tre frameworks", back: "Memory systems (deklarativ vs non-deklarativ), processing modes (konceptuel vs perceptuel), component process (mange delprocesser kombineres fleksibelt)." },
        { front: "Problem for memory systems", back: "Hippocampus, PFC og MTL aktiveres i både eksplicitte og implicitte opgaver → systemgrænser holder ikke." },
        { front: "Problem for processing modes", back: "Konceptuel/perceptuel opdeling kan ikke forklare dissociationer inden for samme ‘mode’ (fx to konceptuelle regioner opfører sig forskelligt)." },
        { front: "Component process – kerneidé", back: "Hukommelse består af mange funktionelle komponenter i specifikke hjerneregioner, som rekrutteres i forskellige kombinationer." },
        { front: "Region-specifikke teorier", back: "Hjerneområder defineres af deres funktion (fx hippocampus = relationel hukommelse) uafhængigt af system/mode." },
        { front: "MTL-eksempel", back: "Hippocampus støtter relationel bearbejdning i både eksplicitte og implicitte opgaver; perirhinal cortex integrerer perceptuelle features." },
        { front: "PFC-eksempel", back: "Venstre VLPFC styrer adgang til semantiske repræsentationer i både semantik, episodisk hukommelse og konceptuel priming." },
        { front: "Parietal cortex", back: "Ventral parietal cortex forklares bedst som bottom‑up opmærksomhed mod hukommelsesindhold, ikke som ‘episodisk system’." },
        { front: "Process-specific alliances (PSA)", back: "Midlertidige funktionelle ‘teams’ af hjerneregioner der opstår ved opgavekrav, fx VLPFC–hippocampus ved episodisk encoding." },
        { front: "Samme region i mange PSAs", back: "Et område kan udføre samme kernefunktion (fx kontrol) men bruges forskelligt afhængigt af alliance-partnere." },
        { front: "Indflydelse på kognitive teorier", back: "Fund har sløret grænserne mellem episodisk, arbejdshukommelse og perception og peger mod fælles komponenter." },
        { front: "Episodisk vs autobiografisk hukommelse", back: "Neuroimaging viser kun delvist overlap → laboratorietests fanger ikke hele den episodiske/autobiografiske kompleksitet." },
        { front: "Fortid og fremtid", back: "Hippocampus bruges både til at huske fortiden og forestille sig fremtiden → episodisk hukommelse er konstruktiv." },
        { front: "Overordnet konklusion", back: "System- og mode-modeller er for simple; component process + PSAs giver den mest fleksible og datakonsistente forklaring." }
  ],
  "Kapitel 8 – Everyday memory":[
        {
          front: "Everyday memory vs. traditionel hukommelse",
          back: "Hverdagens hukommelse er personlig og formålsdrevet (motiveret af egne mål), mens traditionel laboratorieforskning oftest er drevet af forsøgslederens krav om præcision."
        },
        {
          front: "Økologisk validitet (Ecological validity)",
          back: "Forskningens relevans for virkeligheden. Består af repræsentativitet (hvor naturlig opgaven er) og generaliserbarhed (om resultaterne gælder i den virkelige verden)."
        },
        {
          front: "Saying-is-believing effekten",
          back: "Når man bevidst tilpasser en fortælling for at underholde et publikum, hvilket efterfølgende skaber reelle forvrængninger og unøjagtigheder i ens egen hukommelse om begivenheden."
        },
        {
          front: "Selvbiografisk hukommelse (AM)",
          back: "Langtidshukommelse for episoder og viden fra ens eget liv. Den adskiller sig fra ren episodisk hukommelse ved at være mere kompleks, afgørende for ens identitet og indeholde semantiske elementer."
        },
        {
          front: "Mentalisering (Mentalising)",
          back: "Evnen til at opfatte og fortolke adfærd ud fra mentale tilstande (mål og behov). Neurologisk overlapper de hjernenetværk, der bruges til mentalisering, i høj grad med selvbiografisk hukommelse."
        },
        {
          front: "Selvbiografisk hukommelses funktioner",
          back: "Opdeles typisk i fire funktioner: Social funktion (skabe bånd), styrende funktion (bruge fortiden som guide), selv-funktion (kontinuitet i identitet) og selvforstærkning (self-enhancement)."
        },
        {
          front: "Highly Superior Autobiographical Memory (HSAM)",
          back: "En ekstremt sjælden evne til at huske næsten alle dage i sit liv i detaljer. Ofte ledsaget af tvangsprægede (OCD-lignende) tendenser til at tænke på fortiden og atypisk hjerneaktivitet (f.eks. større amygdala)."
        },
        {
          front: "Flashbulb memories (Projektørhukommelse)",
          back: "Levende, detaljerede minder om dramatiske begivenheder (f.eks. 9/11). Vidner har ekstremt høj tillid til disse minder, selvom forskning viser, at selve nøjagtigheden falmer ligesom ved almindelige hverdagsminder."
        },
        {
          front: "Spædbarnsamnesi (Infantile amnesia)",
          back: "Voksnes manglende evne til at huske de første 2-3 år af livet. Forklares teoretisk via fraværet af et 'kognitivt selv', manglende sprogudvikling og 'hippocampal neurogenesis' (nye neuroner erstatter gamle)."
        },
        {
          front: "Reminiscence bump",
          back: "Tendensen hos ældre til at huske uforholdsmæssigt meget fra deres ungdom og tidlige voksenalder (15-25 år), da dette er en periode med mange store, identitetsskabende overgange."
        },
        {
          front: "Livs-script (Life script)",
          back: "Kulturelle forventninger til rækkefølgen af store livsbegivenheder (uddannelse, ægteskab, børn). Teorien forklarer 'reminiscence bump', idet vores minder struktureres og styres af dette forventede manuskript."
        },
        {
          front: "Self-memory system modellen (Conway & Pleydell-Pearce)",
          back: "Teori om at selvbiografisk viden er gemt hierarkisk i tre niveauer: livsperioder, generelle begivenheder og begivenhedsspecifik viden. Alle niveauer interagerer med personens 'working self' (aktuelle mål)."
        },
        {
          front: "Coherence vs. Correspondence (Hukommelse)",
          back: "Mennesker ønsker at minderne er i overensstemmelse med deres nutidige selvbillede (coherence), men også at de er historisk korrekte (correspondence). Over tid vinder 'coherence' ofte, hvilket ændrer mindet."
        },
        {
          front: "Generativ vs. Direkte genkaldelse",
          back: "Generativ genkaldelse er en bevidst, eforfuld søgning efter minder ud fra aktuelle mål (top-down). Direkte genkaldelse sker ubesværet og automatisk, når den trigges af en bestemt ledetråd (bottom-up)."
        },
        {
          front: "Over-generel hukommelse og depression",
          back: "En kognitiv bias hos deprimerede, hvor de husker negative, brede kategorier (\"hver gang jeg fejler\") i stedet for specifikke episoder. Dette gør det sværere at løse problemer og fastholder depressionen."
        },
        {
          front: "MEST og MemFlex (Interventioner)",
          back: "Kognitive træningsprogrammer for depression. MEST træner patienter i at huske specifikke detaljer for at modvirke over-generel hukommelse. MemFlex træner balance, uddybning og fleksibilitet i minderne."
        },
        {
          front: "Bekræftelsesbias hos øjenvidner",
          back: "Når øjenvidners hukommelse forvrænges af forventninger og skemaer. F.eks. vil vidner ofte huske, at en bankrøver var mand og bar maske, selvom det ikke var tilfældet, fordi det passer med deres røveri-skema."
        },
        {
          front: "Misinformations-effekten",
          back: "Den forvrængende effekt, der opstår, når et vidne eksponeres for vildledende information (f.eks. ledende spørgsmål) efter en hændelse, hvilket får dem til at inkorporere forkerte detaljer i deres forklaring."
        },
        {
          front: "Kildemisattribuering (Source misattribution)",
          back: "En forklaring på misinformations-effekten. Øjenvidnet husker den forkerte information, men glemmer kilden, og tror fejlagtigt, at informationen stammer fra selve forbrydelsen og ikke fra de senere spørgsmål."
        },
        {
          front: "Våbenfokus-effekten (Weapon focus effect)",
          back: "Tendensen til, at vidner fokuserer intenst på et våben, hvilket drastisk forringer deres evne til at huske andre detaljer som gerningsmandens ansigt eller tøj."
        },
        {
          front: "Easterbrooks hypotese (Attentional narrowing)",
          back: "Teorien om, at høj stress og angst (f.eks. ved vold eller våben) indsnævrer personens opmærksomhed til udelukkende at fokusere på de mest centrale trusler, hvilket sletter hukommelsen for perifere detaljer."
        },
        {
          front: "Ubevidst overførsel (Unconscious transference)",
          back: "En hukommelsesfejl, hvor et vidne fejlagtigt udpeger et velkendt, men uskyldigt ansigt (f.eks. en tilfældig forbipasserende) som gerningsmanden i en line-up."
        },
        {
          front: "Own-age bias og Other-race effect",
          back: "Øjenvidner er bedst til at genkende og skelne ansigter, der har samme alder (own-age) og tilhører samme etniske gruppe (other-race) som dem selv, oftest på grund af større ekspertise/daglig eksponering."
        },
        {
          front: "Post-identifikations feedback-effekten",
          back: "Når politiet giver bekræftende feedback efter en udpegning (\"Godt, du fandt ham\"), stiger vidnets selvsikkerhed kunstigt meget, hvilket gør dem skråsikre i retten, selvom de oprindeligt var i tvivl."
        },
        {
          front: "Estimator- vs. Systemvariabler",
          back: "Estimatorvariabler er faktorer uden for politiets kontrol (belysning, stress under forbrydelsen). Systemvariabler er faktorer politiet kan kontrollere (interviewteknik, line-up procedure)."
        },
        {
          front: "Dobbeltblind line-up",
          back: "En line-up procedure, hvor hverken vidnet eller administratoren ved, hvem den egentlige mistænkte er. Dette forhindrer administratoren i at påvirke vidnet via ubevidste kropslige eller verbale signaler."
        },
        {
          front: "Simultane vs. sekventielle line-ups",
          back: "Simultane (alle vises på én gang) giver flest korrekte, men også flere forkerte udpegninger. Sekventielle (én ad gangen) får vidnet til at bruge en strengere vurdering, hvilket mindsker fejlagtige udpegninger."
        },
        {
          front: "Det kognitive interview (CI)",
          back: "Maksimaliserer vidners hukommelse via fire regler: (1) Mental genskabelse af konteksten, (2) Rapportering af alle detaljer, (3) Genkaldelse i omvendt rækkefølge, (4) Skift af fysisk/visuelt perspektiv."
        },
        {
          front: "Encoding specificity principle i CI",
          back: "Princippet om at genkaldelse er bedst, når testkonteksten matcher læringskonteksten. Dette er det teoretiske fundament for, hvorfor 'mental genskabelse af gerningsstedet' virker i det kognitive interview."
        },
        {
          front: "Retrospektiv vs. Prospektiv hukommelse",
          back: "Retrospektiv er at huske viden og episoder fra fortiden (mange eksterne ledetråde). Prospektiv er at huske at udføre en planlagt intention i fremtiden (fokus på timing, få eksterne ledetråde)."
        },
        {
          front: "Tidsbaseret vs. Hændelsesbaseret prospektiv hukommelse",
          back: "Tidsbaseret: Handlingen skal udføres på et specifikt tidspunkt (kræver indre overvågning). Hændelsesbaseret: Handlingen udløses af en bestemt situation (f.eks. at aflevere en besked, når man ser personen)."
        },
        {
          front: "Stadier i prospektiv hukommelse",
          back: "Zogg et al. opdeler processen i 5 faser: (1) Intentionsdannelse, (2) Retentionsinterval (vente), (3) Cue-detektion (opdage ledetråden), (4) Intentionsgenkaldelse, (5) Intentionsudførelse."
        },
        {
          front: "Afbrydelser og Habit capture",
          back: "Når folk udfører faste rutiner (f.eks. piloter), kan afbrydelser forårsage farlige prospektive fejl. Årsagen er ofte 'habit capture', hvor den indlærte vane kører videre på autopilot, og den afbrudte intention glemmes."
        },
        {
          front: "Meta-hukommelse og OCD",
          back: "Personer med OCD (tvangstanker) har en defekt meta-hukommelse (lav tillid til egne minder). Selvom deres faktiske hukommelse fejler intet, tvivler de på, om de låste døren, hvilket fører til gentagen tjekke-adfærd."
        },
        {
          front: "Multiprocess framework (Fokal vs. non-fokal)",
          back: "Teori om prospektiv hukommelse. Fokale opgaver har direkte overlap med intentionen og aktiverer spontan/automatisk genkaldelse. Non-fokale opgaver mangler overlap og kræver top-down strategisk overvågning."
        },
        {
          front: "Dynamic multiprocess framework (Shelton & Scullin)",
          back: "Bygger videre på multiprocess modellen og understreger, at vores valg mellem spontan genkaldelse og strategisk overvågning interagerer dynamisk og er stærkt styret af vores meta-kognition og forventninger."
        },
        {
          front: "Implementeringsintentioner (Implementation intentions)",
          back: "En effektiv strategi til at forbedre prospektiv hukommelse ved at skabe specifikke 'hvis-så' handlingsplaner (f.eks. 'Hvis jeg ser bageren, så køber jeg brød'). Dette gør handlingen automatiseret og frigiver kognitiv kapacitet."
        }
      ],

        "Roediger & Butler 2011 – Retrieval Practice": [
      { front: "Hovedpointe", back: "Retrieval practice er en stærk læringsmekanisme, der giver bedre langtidsretention end gentagen studietid." },
      { front: "Testing effect", back: "Testning forbedrer senere hukommelse mere end genlæsning eller ingen re-eksponering." },
      { front: "Aktiv vs passiv gentagelse", back: "Aktiv genkaldelse styrker hukommelsen bedre end passiv gennemlæsning." },
      { front: "Antal retrievals", back: "5–7 succesfulde retrievals giver typisk optimal langtidsretention." },
      { front: "Spacing", back: "Retrieval med længere intervaller mellem tests giver bedre retention end korte intervaller." },
      { front: "Expanding retrieval", back: "Hurtig første retrieval + gradvist længere intervaller kan hjælpe på kort sigt, men lige intervaller virker bedst på langt sigt." },
      { front: "Retrieval effort hypothesis", back: "Sværere retrieval → stærkere lagring; let retrieval giver minimal langtidseffekt." },
      { front: "Feedback", back: "Feedback forstærker effekten af testning; særligt vigtigt ved multiple choice for at undgå læring af fejl." },
      { front: "Forsinket feedback", back: "Forsinket feedback kan give bedre retention end øjeblikkelig feedback (spacing-effekt)." },
      { front: "Transfer", back: "Retrieval practice forbedrer evnen til at anvende læring i nye situationer (nær og fjern transfer)." },
      { front: "Teori – storage vs retrieval strength", back: "Retrieval styrker lagringsstyrke mest, når retrieval strength er lav (Bjork & Bjork)." },
      { front: "Uddannelse", back: "Hyppige quizzer, aktive tests, spacing og feedback kan markant øge læring og fastholdelse." }
    ],
    
    "Rubin 2005 – Autobiographical Memory": [
      { front: "Grundidé", back: "Autobiografisk hukommelse består af flere basale systemer (sanse-, rumlige-, emotionelle-, narrative-, sproglige- og bindingssystemer)." },
      { front: "Multimodalitet", back: "Autobiografiske minder er komplekse og involverer flere sanser, følelser og personlige narrativer." },
      { front: "Selvet som distribueret", back: "Selvet består af flere systemer; det er ikke en enkelt hukommelsesstruktur." },
      { front: "Kulturelle life scripts", back: "Livshistorier påvirkes af kulturelle forventninger om typiske livsforløb." },
      { front: "Recollection – vigtigste faktor", back: "Visuel vividness er den stærkeste prædiktor for oplevet genleving." },
      { front: "Belief in accuracy", back: "Rumlig klarhed og narrativ koherens forudsiger tro på at mindet er korrekt." },
      { front: "Blindfold-eksperiment", back: "Manglende visuel input mindsker senere recollection; senere visuelle cues hjælper kun hvis de passer til eksisterende hukommelse." },
      { front: "Visuel amnesi", back: "Tab af visuel hukommelse fører ofte til omfattende autobiografisk amnesi, inkl. tab af barndomsminder." },
      { front: "Depression og hukommelse", back: "Depressive personer producerer overgenerelle minder frem for specifikke." },
      { front: "PTSD – vividness", back: "Traumeminder er ofte ekstremt visuelle og følelsesstærke, hvilket øger recollection." },
      { front: "PTSD – narrativ sammenhæng", back: "Traumeminder er ikke nødvendigvis incoherente; det er traumets centralitet i livshistorien, der forudsiger PTSD." },
      { front: "Neuroimaging", back: "Autobiografisk recall aktiverer bl.a. amygdala, hippocampus, PFC og sensoriske områder." },
      { front: "Foto-paradigme", back: "Egne fotos giver stærkere hippocampal, parahippocampal og selv-relateret aktivitet end andres fotos." },
      { front: "Konklusion", back: "Autobiografisk hukommelse bør forstås som interaktion mellem basale systemer frem for én samlet mekanisme." }
    ],
    
    "Corkin 2002 – H.M.": [
      { front: "H.M.’s operation", back: "Bilateral medial temporallaps-resektion i 1953 reducerede epilepsi, men skabte alvorlig anterograd amnesi." },
      { front: "Anterograd vs retrograd amnesi", back: "Ny episodisk og semantisk læring stærkt svækket; retrograd amnesi strækker sig ca. 11 år tilbage før operationen." },
      { front: "Intakt STM", back: "Korttidshukommelse og arbejdshukommelse er relativt normal hos H.M." },
      { front: "Deklarativ vs non-deklarativ", back: "Ny deklarativ hukommelse er tabt, men non-deklarativ læring som motorisk læring og priming er delvist bevaret." },
      { front: "Spejltegning", back: "H.M. bliver bedre fra dag til dag uden at kunne huske tidligere træning." },
      { front: "Priming", back: "Perceptuel priming er bevaret; konceptuel priming kræver eksisterende leksikon og er svækket for post-1953-ord." },
      { front: "Granola–Jacuzzi-eksperimentet", back: "H.M. viser svag stem-priming for ord indlært efter operationen, men intakt perceptuel priming." },
      { front: "Bevaret MTL-væv", back: "Caudal perirhinal og parahippocampal cortex er bevaret og understøtter residual funktion." },
      { front: "Topografisk hukommelse", back: "H.M. kunne lære og tegne plantegningen af sit hus efter operationen, via langsom kortikal læring." },
      { front: "Kompleks visuel genkendelse", back: "H.M. kan genkende billeder over måneder, sandsynligvis via familiarity, ikke recollection." },
      { front: "fMRI", back: "Bevaret parahippocampal region viser opgave-relateret aktivering under encoding." },
      { front: "Sprog og semantik", back: "Præmorbid semantisk viden og grammatik intakte; ny semantisk læring er begrænset men ikke nul." },
      { front: "Selv-begreb", back: "H.M. har humor, moral og indsigt i sin tilstand – frontallapper understøtter et stabilt selv trods amnesi." },
      { front: "Teoretisk betydning", back: "Casen viser at MTL er essentiel for ny deklarativ hukommelse, mens implicit læring og langsom semantik kan understøttes af andre netværk." }
    ],

          "Schacter et al. 2017 – Episodic Future Thinking": [
          { front: "Episodic future thinking – definition", back: "Evnen til at forestille sig eller simulere specifikke personlige begivenheder, der kan ske i ens fremtid." },
          { front: "Prospection – fire grundformer", back: "Simulation (konkrete scenarier), prediction (sandsynlighedsvurdering), intention (mål­sætning) og planning (trin mod mål) langs et episodisk–semantisk kontinuum." },
          { front: "Constructive Episodic Simulation Hypothesis", back: "Episodisk hukommelse bruges til fleksibelt at hente og recombinere elementer fra fortiden til nye fremtidsscenarier – en proces der også kan skabe fejlerindringer." },
          { front: "Autobiographical Interview (AI)", back: "Metode hvor udsagn deles i interne/episodiske detaljer (hvad, hvor, hvornår) og eksterne/semantiske detaljer; bruges til at sammenligne fortid og fremtid." },
          { front: "AI-fund hos ældre og kliniske grupper", back: "Ældre og flere patientgrupper (fx depression, PTSD, MTL-skader) producerer færre episodiske detaljer og flere semantiske for både fortid og fremtid." },
          { front: "Ikke-episodiske faktorer", back: "Narrativ stil, generelle sproglige evner og kognitiv kontrol kan påvirke både erindring, fremtidssimulering og billedbeskrivelse; derfor må rene episodiske bidrag isoleres." },
          { front: "Episodic Specificity Induction (ESI)", back: "Kort træning i at fokusere på konkrete detaljer i fortidige episoder; øger episodiske detaljer selektivt i opgaver der kræver episodisk retrieval (fortid, fremtid, problemløsning)." },
          { front: "Semantisk scaffolding-hypotese", back: "Semantisk viden giver en ramme for fremtidssimulering; ved semantisk demens kan fortid huskes nogenlunde, mens fremtidstænkning er stærkt reduceret." },
          { front: "Core network / default mode network", back: "MTL (hippocampus m.fl.), posterior cingulate/retrosplenial, medial PFC samt lateral temporal og parietal cortex aktiveres både ved episodisk hukommelse og fremtidssimulering." },
          { front: "Forskelle mellem fortid og fremtid i hjernen", back: "Nogle core-netværksområder er mere aktive ved fremtid (fx visse PFC/parietale regioner), andre ved fortid (fx parahippocampus/retrosplenial – stærkere kontekstbehandling)." },
          { front: "Repetition suppression-paradigme", back: "Ved gentagen simulering af samme personer, objekter eller steder ses signalreduktion i de regioner der koder netop disse elementer; bruges til at identificere indholdsspecifikke processer." },
          { front: "Hippocampus’ rolle", back: "Særligt fornyede/novelle kombinationer af person–sted–handling; involveret i scene construction, detaljerecombination og encoding af fremtidssimulationer til LTM." },
          { front: "vmPFC’s rolle (Box 2)", back: "Tilgå skematiseret viden og kalkulere forventet affektiv værdi af de forestillede scenarier; understøtter både konstruktion og værdisætning af fremtidige episoder." },
          { front: "Funktion – beslutningstagning (delay discounting)", back: "Når personer forestiller sig konkrete, personlige fremtidige belønninger (fx købe computer), reduceres tilbøjeligheden til at vælge små, umiddelbare belønninger." },
          { front: "Funktion – sundhedsadfærd", back: "Fremtidssimulation af sundhedsrelaterede mål (fx ønsket vægt) kan reducere kalorieindtag, alkoholforbrug og cigaretrygning i eksperimentelle studier." },
          { front: "Funktion – emotion regulation", back: "ESI før bekymringsopgaver øger konstruktive løsningsforslag, bedre reappraisal og højere velbefindende; supression af frygtede scenarier kan omvendt reducere angst og vividness." },
          { front: "Funktion – prospektiv hukommelse", back: "At simulere udførelsen af en fremtidig intention (fx hente brød på vej hjem) forbedrer sandsynligheden for, at intentionen huskes og gennemføres." },
          { front: "Funktion – navigation (Box 3)", back: "Mentale simuleringer af ruter er tidsmæssigt komprimerede og forudsiger mere effektiv navigation; hippocampus og relaterede områder repræsenterer fremtidige mål." },
          { front: "Funktion – identitet og kreativitet", back: "Fremtidssimulering bidrager til opbygning af selvfortællingen og hænger sammen med divergent tænkning og kognitiv fleksibilitet." }
        ],
            "Magnussen 2009 – Vidnepsykologi": [
          { front: "Vidnepsykologi – fokus", back: "Undersøger menneskers perception, hukommelse, vurderinger og beslutninger i retslige kontekster." },
          { front: "Pålidelighed vs troværdighed", back: "Pålidelighed = hvor godt udsagn stemmer med virkeligheden; Troværdighed = hvor sandfærdigt vidnet fremstår. De to er uafhængige." },
          { front: "Grundantagelse i forskningen", back: "Hukommelse er rekonstruktiv og påvirkelig; selv oprigtige vidner laver fejl." },
          { front: "Perceptionsbegrænsninger", back: "Vidner opfatter selektivt, baseret på opmærksomhed, forventninger og kontekst; dette påvirker senere hukommelse." },
          { front: "Hukommelsesstruktur", back: "Erindringer lagres ikke som præcise kopier, men genskabes ud fra fragmenter og generel viden." },
          { front: "Fejlattribution", back: "Ved genkaldelse kan kilder sammenblandes: detaljer fra senere information, andre mennesker eller egne forventninger inkorporeres." },
          { front: "Indflydelse af tid", back: "Hukommelse forringes over tid; detaljetab øger risikoen for udfyldninger og fejlinformation." },
          { front: "Ledende spørgsmål", back: "Formuleringen af spørgsmål kan ændre vidners erindring og skabe falske detaljer." },
          { front: "Genkendelse vs genkaldelse", back: "Fri genkaldelse giver færre detaljer men færre fejl; genkendelse er mere påvirkelig af bias og forventninger." },
          { front: "Cross‑race-effekt", back: "Folk genkender ansigter fra egen etnisk gruppe bedre end ansigter fra andre grupper." },
          { front: "Forskningstyper", back: "Laboratorieeksperimenter giver kontrol; kvasinaturalistiske studier simulerer virkelighed; naturalistiske studier undersøger faktiske hændelser." },
          { front: "Økologisk validitet", back: "Laboratoriefund og real-life fund stemmer generelt overens; kritikken af kunstighed er overdrevet." },
          { front: "Rekonstruktive processer", back: "Erindringer formes af både oprindelige oplevelser og efterfølgende kognition, sociale påvirkninger og forventninger." },
          { front: "Børns hukommelse (teori)", back: "Børn er mere suggestible og dårligere til kilde-monitorering; de påvirkes lettere af spørgsmål og gentagne afhøringer." },
          { front: "Voksnes fejltyper", back: "Selvsikre voksne kan lave alvorlige fejl pga. bias, manglende kildekontrol, selektiv perception og konfabulation." },
          { front: "Kritisk pointe", back: "Retssystemer må ikke basere domme på intuition om vidners sikkerhed; de må basere sig på empirisk viden om hukommelsens begrænsninger." }
        ],
        
        "Berntsen 1998 – Falske erindringer og terapi": [
          { front: "Artiklens fokus", back: "Konflikten mellem klinisk traumeteori og eksperimentel hukommelsesforskning om 'genfundne' incest-erindringer." },
          { front: "Dissociation vs fortrængning", back: "Klinisk trauma-ætiologi ser dissociation som splitting af traumatiske oplevelser; hukommelsesforskning ser hukommelse som rekonstruktiv og integreret." },
          { front: "Traumemodellen (klinisk)", back: "Antager at ekstreme traumer lagres særskilt og kan blive utilgængelige i årevis, for senere at dukke op næsten uændret i terapi." },
          { front: "Kognitiv model (eksperimentel)", back: "Erindringer konstrueres ud fra schemata; der findes ikke komplette, uforanderlige spor der kan 'genfindes' intakte." },
          { front: "Source monitoring", back: "Folk kan forveksle forestillinger, fortællinger og suggestioner med egne oplevelser; centralt i falske erindringer." },
          { front: "Suggestibilitet", back: "Mennesker, især i terapeutiske kontekster, er modtagelige for påvirkning via løse hypoteser, visualisering og ledende spørgsmål." },
          { front: "Genkaldelsesterapi – teoretisk problem", back: "Antagelsen om, at dissocierede traumer kan genfindes præcist, har ingen støtte i hukommelsesforskningen." },
          { front: "Schematisering", back: "Gentagne hændelser danner generelle, robuste skemaer, ikke total amnesi; uforeneligt med massiv glemsel af langvarige overgreb." },
          { front: "Emotion og hukommelse", back: "Stærkt følelsesladede oplevelser huskes ofte bedre; det taler imod at voldsomme traumer glemmes totalt." },
          { front: "Barndomsamnesi", back: "Minder fra før 2–3-årsalderen kan ikke lagres stabilt; detaljerede tidlige barndomserindringer i terapi er derfor tvivlsomme." },
          { front: "Kulturel kontekst", back: "Erindringer formes af samtidige narrativer og sociale forklaringsmodeller, som kan skabe rammer for falske erindringer." },
          { front: "Identitet og skemaer", back: "Terapeutisk fokus på bestemte forklaringsrammer kan ændre klientens selvforståelse og skabe erindringsillusioner baseret på skemaaktivering." },
          { front: "Kernekonflikt", back: "Klinisk praksis ser tilbagekaldte traumer som sandhed; forskningen viser hukommelsen som fleksibel, fejlbarlig og rekonstruktiv." },
          { front: "Berntsens teoretiske pointe", back: "Hukommelsen må forstås inden for en konstruktivistisk ramme; terapeuter må tage højde for falske erindringer som naturligt produkt af hukommelsesprocesser." }
        ],

            "Cant et al. 2012 – Near-Death Experiences": [
          { front: "NDE – definition", back: "Usædvanlige erindringer oplevet i forbindelse med livstruende tilstande, ofte under bevidstløshed." },
          { front: "Kerneelementer i NDE", back: "Kognitive (tidsforvrængning, livsgennemgang), affektive (fred, glæde), perceptuelle (lys, skærpede sanser), og transcendente (grænse, entiteter)." },
          { front: "Forekomst", back: "4–9% i befolkningen og op til ca. 20% blandt patienter i kritiske tilstande; kan også forekomme ved subjektiv livsfare." },
          { front: "Måleinstrumenter", back: "Greyson NDE Scale og Ring’s Weighted Core Experience Index anvendes til at afgøre om en oplevelse kvalificerer som NDE." },
          { front: "Neurokemiske forklaringer", back: "Foreslåede mekanismer inkluderer endorfinfrigivelse, hypoksi, hyperkapni, REM-intrusion, temporal-lobe-aktivitet og ketaminlignende processer." },
          { front: "Begrænsninger ved fysiologiske modeller", back: "Hvis fysiologi alene forklarede NDE, burde alle nær-døds-tilstande udløse dem; variation peger på individuelle forskelle eller flere mekanismer." },
          { front: "Psykologiske forklaringer", back: "NDE kan ses som dissociation, ønsketænkende hallucinationer eller rekonstruktion af fragmentariske minder efter bevidstløshed." },
          { front: "Veridikal perception – teoretisk udfordring", back: "Nogle NDE-rapporter inkluderer præcis viden uden sensorisk adgang, hvilket udfordrer rent neurologiske modeller." },
          { front: "Psykologiske eftervirkninger", back: "Typisk rapporteres mindre dødsangst, øget livstilfredshed og ændrede værdier; enkelte får negative reaktioner som PTSD." },
          { front: "Klinisk relevans", back: "Sundhedspersonale bør støtte neutral samtale om NDE og facilitere tryghed, refleksion og eventuel rådgivning." }
        ],
        
        "Mueller & Oppenheimer 2014 – Notetagning ": [
          { front: "Hovedfund", back: "Longhand-noter fører til bedre konceptuel læring end laptop-noter – selv uden distraktion." },
          { front: "Encoding vs external storage", back: "Noter hjælper via dyb bearbejdning (encoding) og via lagring til senere brug (external storage). Laptop forskellen skyldes encoding." },
          { front: "Generativ vs verbatim notetagning", back: "Generativ notetagning (omskrivning) giver dyb behandling; verbatim notetagning giver overfladisk behandling." },
          { front: "Laptopbrug og verbatim-overlap", back: "Laptopbrugere skriver hurtigere og transskriberer derfor mere ordret, hvilket reducerer konceptuel bearbejdning." },
          { front: "Notemængde vs note-kvalitet", back: "Flere noter hjælper, men kun hvis de ikke er tankeløs transskription; kvalitet og bearbejdning er vigtigere end volumen." },
          { front: "Interventionstest", back: "Instruktion om at undgå transskription reducerer ikke verbatim-indhold; typet hastighed overstyrer intention." },
          { front: "Effekt ved forsinkede tests", back: "Longhand-noter giver bedre præstationer både på faktuelle og konceptuelle spørgsmål efter forsinkelse." },
          { front: "Teoretisk forklaret", back: "Longhand tvinger til valg, organisering og omskrivning, hvilket forbedrer dyb bearbejdning (Levels of Processing)." },
          { front: "Konsekvens for undervisning", back: "Selv korrekt brugte laptops (uden distraktion) kan skade læring, hvorfor longhand ofte bør foretrækkes." }
        ],

        "Baumeister et al. 2011 – Do Conscious Thoughts Cause Behavior": [
              { front: "Hovedpointe", back: "Bevidste tanker har kausal effekt på adfærd, primært indirekte, forsinket og i samspil med ubevidste processer." },
              { front: "To typer bevidsthed", back: "Fenomenal bevidsthed (oplevelser) og refleksiv bevidsthed (refleksion, ræsonnement, selvforståelse). Artiklen fokuserer på den refleksive del." },
              { front: "Fejlslutning om kausalitet", back: "At en ubevidst proces kommer først, udelukker ikke at en senere bevidst proces kan være nødvendig for handlingens udfald." },
              { front: "Direkte vs. indirekte kontrol", back: "Bevidstheden styrer sjældent muskelbevægelser direkte, men ændrer adfærd ved planlægning, valg og evaluering." },
              { front: "Causal chain argument", back: "Bevidste tanker kan være et nødvendigt led i en årsagskæde selv hvis andre led er ubevidste." },
              { front: "Mental simulation – funktion", back: "At forestille sig en fremtidig handling øger sandsynligheden for senere udførsel, især når simulationen fokuserer på processen frem for resultatet." },
              { front: "Mental practice – teori", back: "Mentalt øver man motoriske sekvenser og beslutningsforløb, hvilket forbedrer senere udførsel, især i tidlige læringsfaser." },
              { front: "Implementation intentions", back: "\"Hvis X – så Y\"-planer skaber stærke koblinger mellem situation og handling, hvilket øger målrettet adfærd ud over almindelige intentioner." },
              { front: "Anticipated emotion", back: "Forventede fremtidige følelser (særligt fortrydelse og skyld) styrer valg bedre end aktuelle følelser." },
              { front: "Repetitive thought – funktion", back: "Vedvarende refleksion kan forbedre planlægning og problemløsning, men kan også give negative emotioner afhængigt af indhold og stil." },
              { front: "Refleksion over fortiden", back: "Analyse af tidligere erfaringer forbedrer fremtidig adfærd; ren genoplevelse uden analyse fastholder negative følelser." },
              { front: "Counterfactual thinking", back: "‘Hvis bare’-tanker påvirker fremtidig adfærd ved at fremkalde intentioner og ændrede strategier, især når fokus er på forbedring." },
              { front: "Evaluativ vs. refleksiv stil", back: "Evaluativ refleksion (analyse) fremmer forbedring; ren genoplevelse (replay) har mindre læringsværdi." },
              { front: "Logical reasoning – afhængighed af bevidsthed", back: "Logisk ræsonnement kræver bevidst bearbejdning; kognitiv belastning svækker evnen til at følge logiske regler." },
              { front: "Unconscious thought – kritik", back: "Påstande om ubevidst overlegenhed bygger ofte på metodiske fejl; bevidst tænkning klarer bedre komplekse, regelbaserede problemer." },
              { front: "Verbalization & explanation", back: "At forklare sin tænkning forbedrer problemløsning, da det fremmer struktureret, bevidst analyse." },
              { front: "Accountability", back: "Forventning om at skulle forklare sine valg øger kvaliteten af beslutninger gennem mere bevidst informationsbehandling." },
              { front: "Maladaptive effekter", back: "Bevidst tænkning kan give negative effekter som overkontrol, rumination, eller ‘choking under pressure’, især ved rutinefærdigheder." },
              { front: "Verbal overshadowing", back: "Bevidst verbalisation kan forstyrre ikke‑verbale færdigheder og indsigtbaseret problemløsning." },
              { front: "Choking under pressure", back: "Bevidste forsøg på at kontrollere automatiserede færdigheder svækker præcision og timing." },
              { front: "Perspective taking – funktion", back: "At simulere andres perspektiv fremmer fleksible, sociale og stereotypekonsistente adfærdsmønstre." },
              { front: "Empathy vs. perspective taking", back: "Empati handler om følelser; perspektivtagning om kognition. Perspektivtagning giver bredere adfærdsændringer." },
              { front: "Vicarious depletion", back: "At tage perspektiv på en person under selvkontrol kan dræne egne selvkontrolressourcer." },
              { front: "Self-concept manipulations", back: "Feedback, værdiafklaring og selvfremstilling ændrer adfærd gennem justering af identitetsmål." },
              { front: "Self-affirmation", back: "Fokusering på kerneværdier reducerer defensivitet, øger åbenhed og forbedrer præstation under trussel." },
              { front: "Moral licensing", back: "At tænke på egne gode handlinger kan efterfølgende legitimere mindre moralsk adfærd." },
              { front: "Mental framing", back: "Hvordan en situation fortolkes (fx som mulighed, trussel, læring) ændrer adfærd og kognition." },
              { front: "Goal framing", back: "Mastery-rammer øger læring; performance-rammer øger sårbarhed ved modstand." },
              { front: "Approach vs avoidance", back: "Approach-orientering fremmer læring og udholdenhed; avoidance øger stress og fejl." },
              { front: "Communication – funktion", back: "Bevidste tanker muliggør sprog, instruktion, forklaring og samarbejde, hvilket ubevidste processer ikke kan håndtere alene." },
              { front: "Syntax og komplekse budskaber", back: "Forståelse af komplekse sætninger kræver bevidst behandling." },
              { front: "Mutual understanding", back: "Bevidst simulation af andres mentale tilstande gør koordinering og sociale institutioner mulige." },
              { front: "Overriding automatic responses", back: "Bevidsthed kan hæmme impulser, vaner, stereotypiske reaktioner og følelsesdrevne handlinger." },
              { front: "Cognitive load effekter", back: "Belastning reducerer bevidst kontrol og gør adfærd mere impulsivt og automatisk." },
              { front: "Habit disruption", back: "Når vaner brydes (fx flytning), får bevidste værdier større betydning for adfærd." },
              { front: "Temporal integration", back: "Bevidsthed integrerer fortid, nutid og fremtid og gør langsigtet planlægning mulig." },
              { front: "Abstract → concrete translation", back: "Bevidsthed oversætter abstrakte værdier til konkrete handlinger (implementation intentions, planlægning)." },
              { front: "Cultural learning", back: "Sprog, normer og sociale regler kræver bevidst behandling og deles gennem kommunikation." },
              { front: "Multiple possibilities", back: "Bevidsthed håndterer situationer med flere potentielle udfald og vælger mellem dem." },
              { front: "Bevidsthed + det ubevidste", back: "Adfærd udspringer typisk af samspil—ikke enten eller—mellem bevidste og ubevidste processer." },
             ],
  
    "Kapitel 16 - Bevidsthed": [
              { front: "Bevidsthed: Indhold vs. niveau", back: "Indhold = hvad vi er bevidste om; niveau = hvor vågne/alerte vi er. Niveau er en tilstand, indhold er oplevelsens materiale." },
              { front: "Access consciousness", back: "Bevidsthedstype hvor indhold kan rapporteres og bruges i andre mentale processer som opmærksomhed og hukommelse." },
              { front: "Phenomenal consciousness", back: "Den rå, subjektive oplevelse – hvordan noget føles. Ikke nødvendigvis rapporterbart i detaljer." },
              { front: "Problemer med adskillelsen (access vs. phenomenal)", back: "Vi kender kun andres oplevelser via selvrapport, hvilket gør grænsen mellem typerne uklar." },
              { front: "Højere vs. basal bevidsthed", back: "Basal = oplevelser i nuet; højere = selvrefleksion, ræsonnering og forståelse af eget sind." },
            
              // Funktioner af bevidsthed
              { front: "Funktion: Perception", back: "Bevidsthed hjælper os med at opfatte og fortolke omgivelserne." },
              { front: "Funktion: Social forståelse", back: "At forstå andres mentale tilstande bygger på samme mekanismer som vores egen selvbevidsthed." },
              { front: "Funktion: Handlingskontrol", back: "Bevidsthed er involveret i valg, planlægning og handling – dog i samspil med ubevidste processer." },
              { front: "Funktion: At tænke ud over nuet", back: "Bevidste tanker vandrer ofte, hvilket hjælper med planlægning og problemløsning." },
              { front: "Funktion: Integration af information", back: "Bevidsthed kombinerer komplekse informationer til brugbare helheder." },
            
              // Ubevidste processer
              { front: "Yes-It-Can-princippet (Hassin)", back: "Påstand om at ubevidste processer kan udføre alle højere kognitive funktioner. Men forskning viser begrænsninger." },
              { front: "Eksempel: Ubevidste mål", back: "Subliminale mål kan påvirke adfærd, men effekten kræver ofte relevans for personen." },
            
              // Sense of agency og fri vilje
              { front: "Sense of agency", back: "Følelsen af at være ophav til egne handlinger. Kan manipuleres eksperimentelt." },
              { front: "Illusion of conscious will (Wegner)", back: "Vi tror vores bevidste intention skaber handlinger, selv når de reelt udløses ubevidst." },
              { front: "Libet-studiet", back: "Hjernens forberedelsessignal kommer før bevidst intention, men fortolkning er omstridt." },
            
              // Vurdering af bevidst oplevelse
              { front: "Under-rapportering", back: "Vi oplever mere end vi kan rapportere – fx i ikonisk hukommelse." },
              { front: "Over-rapportering", back: "Vi tror vi ser mere detaljeret end muligt, bl.a. pga. top‑down udfyldning." },
              { front: "Sperlings ikoniske hukommelse", back: "Folk ser mange flere bogstaver end de når at rapportere." },
              { front: "Change blindness", back: "Vi opdager ofte ikke ændringer, selv store, når opmærksomheden er væk." },
            
              // Vegetativ tilstand og minimal bevidsthed
              { front: "Vegetativ tilstand", back: "Vågenhed uden tegn på bevidsthed." },
              { front: "Minimalt bevidsthedsniveau", back: "Nogle tegn på bevidsthed, men stærkt reducerede." },
              { front: "Neuroimaging i vegetativ tilstand", back: "Nogle patienter viser bevidsthed i neurodata trods manglende adfærdsmæssige signaler." },
            
              // Neural correlates of consciousness (NCC)
              { front: "NCC: Problem", back: "Hjernens aktivitet viser både bevidsthed og andre processer – svært at adskille." },
              { front: "Tidlig vs. sen aktivering", back: "Tidlige visuelle processer ligner hinanden for bevidste og ubevidste stimuli; forskelle opstår først senere." },
              { front: "Recurrent processing", back: "Top‑down signalering der binder information sammen og normalt er nødvendig for bevidst perception." },
              { front: "Feedforward processing", back: "Hurtig fremadrettet bearbejdning uden bevidst oplevelse." },
            
              // Maskering og TMS
              { front: "Backward masking", back: "Efterfølgende stimulus forhindrer rekurrent bearbejdning og dermed bevidst perception." },
              { front: "TMS og bevidsthed", back: "Forstyrrelse af visuelle områder kan fjerne bevidst oplevelse uden at påvirke tidlige processer." },
            
              // Global Workspace Theory
              { front: "Global Workspace Theory (GWT)", back: "Bevidsthed opstår, når information bliver globalt tilgængelig via udbredt hjerneaktivering." },
              { front: "Ignition (GWT)", back: "Pludselig synkronisering mellem flere hjerneområder, som gør information bevidst." },
              { front: "Rolle: Prefrontal cortex", back: "Ofte aktiv ved bevidsthed, men måske ikke nødvendig i alle tilfælde." },
              { front: "Attention → consciousness", back: "GWT antager opmærksomhed typisk går forud for bevidsthed." },
            
              // Integrated Information Theory (IIT)
              { front: "Integrated Information Theory (IIT)", back: "Bevidsthed = graden af integreret information i et system." },
              { front: "Φ (phi)", back: "Mål for hvor integreret systemets information er – høj Φ = høj bevidsthed." },
            
              // Opmærksomhed og bevidsthed
              { front: "Opmærksomhed uden bevidsthed", back: "Muligt, fx påvirker subliminale stimuli opmærksomhed." },
              { front: "Bevidsthed uden opmærksomhed?", back: "Debatteret. Mange undersøgelser tyder på nej, men ikke entydigt." },
            
              // Split-brain – er bevidsthed delt?
              { front: "Split-brain: grundidé", back: "Corpus callosum kappes, hvilket kan skabe to semi-uafhængige systemer." },
              { front: "To bevidstheder (Sperry)", back: "Hver hemisfære har sin egen bevidsthed og kan udføre separate funktioner." },
              { front: "Interpreter (venstre hemisfære)", back: "Venstre hjernehalvdel skaber forklaringer for adfærd også udløst af højre hemisfære." },
              { front: "Beviser for to strømme", back: "Hver hånd kan give forskellige svar; nogle patienter oplever konflikt mellem hænder." },
              { front: "Beviser for én strøm", back: "Patienter rapporterer typisk en sammenhængende oplevelse – hverdag fungerer normalt." },
              { front: "Hemisfærers plasticitet", back: "Den resterende hemisfære kan overtage funktioner efter skade eller kirurgi." },
            
              // Generelle konklusioner
              { front: "Bevidsthed = integreret aktivitet", back: "De fleste teorier er enige om at bevidsthed kræver omfattende, koordineret hjerneaktivitet." },
              { front: "Bevidsthedens udfordringer", back: "Adskillelse af bevidst oplevelse, opmærksomhed og rapportering er komplekst." }
       ]
};

// Tomt array til quiz-spørgsmål. Når dette er tomt, skjules "Quiz Mode" knappen automatisk.
const kogQuizQuestions = [];
