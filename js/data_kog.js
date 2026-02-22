// ==========================================================
// KOGNITIONSPSYKOLOGI DATA
// ==========================================================

const kogFlashcardCategories = {
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
      ]
};

// Tomt array til quiz-spørgsmål. Når dette er tomt, skjules "Quiz Mode" knappen automatisk.
const kogQuizQuestions = [];
