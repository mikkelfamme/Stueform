# StueForm 1.2 — din private hjemmetræningsapp

En færdig, responsiv og installationsklar webapp til iPhone, Android og computer. Bygget i almindelig HTML, CSS og JavaScript — uden frameworks, abonnementer, trackers, eksterne APIs eller server.

## Hvad er med?

- **Hurtig start** direkte fra forsiden: vælg en standard på 10, 20 eller 30 minutter.
- **Dagens pas:** redigér runder, opvarmning, pauser, rækkefølge, øvelser og individuelle gentagelser/sekunder. Vælg eventuelt kun kropsvægt.
- **8 øvelser** med nye, lokale illustrationer (oversigtsbillede og detaljeret teknikplakat), skriftlig teknikguide, advarsler og alternativer: kettlebell deadlift, kettlebell swings, goblet squat, kettlebell row, armbøjninger, mountain climbers, dead bug og planke med skuldertap.
- **Under træning:** opvarmnings- og pausetimer, trin for trin, ændringer undervejs, udskift øvelse, spring over, stop og gem delvist eller kassér.
- **Progression:** giv passet en indsats-vurdering; du kan selv vælge at øge gentagelserne i din standard næste gang. Swings øges ikke automatisk.
- **Historik:** træningspas, ugentlig oversigt og valgfri registrering/graf over taljemål.
- **Indstillinger:** kettlebell-vægt (14 kg fra start), erfaring, lyd, vibration og skærm vågen (når browseren understøtter det).
- **Eksport/import:** download og indlæs alle dine indstillinger, træninger og taljemål som JSON.
- **PWA/offline:** installer som ikon på telefonen, og brug efter første online-åbning uden netforbindelse.

## Sådan lægger du den online — ligesom Brændings-appen

**Opret et NYT GitHub-repository**, fx `stueform`. Brug ikke det eksisterende `braendings-beregner`-repository.

1. Åbn GitHub, vælg **New repository**, giv det navnet `stueform`.
2. Pak ZIP-filen ud. Åbn det nye repository på GitHub, vælg **Add file → Upload files**, og upload filerne og mappen `assets` direkte i rodmappen (ikke en ekstra `stueform`-mappe omkring dem).
3. Vælg **Commit changes**.
4. Gå til **Settings → Pages**. Under **Build and deployment** vælger du **Deploy from a branch**, `main` og `/ (root)`. Gem.
5. Når siden er publiceret, vil adressen typisk være `https://DIT-BRUGERNAVN.github.io/stueform/`.
6. Åbn adressen på din iPhone i **Safari**. Tryk **Del → Føj til hjemmeskærm → Tilføj**.
7. Åbn appen via ikonet på hjemmeskærmen, og tilpas dit standardpas.

Der kræves **ingen GitHub Actions, GitHub Secrets, domæne eller API-nøgle** til denne app.

## Vigtigt om privatliv

**GitHub Pages giver normalt en offentlig URL.** Selve appen kan åbnes af andre, der kender adressen, men den gemmer **ingen træningsdata på GitHub eller en server**. Historik, standardpas og taljemål ligger kun i browserens lokale lager (localStorage) på den konkrete enhed, hvor appen bruges.

- Det er ikke en password-beskyttet app. Hvis selve appen skal være adgangsbegrænset, skal den deployes med en løsning, der faktisk understøtter adgangskontrol.
- Data **synkroniseres ikke** mellem telefon og computer. Brug **Indstillinger → Eksportér JSON** til backup/flytning.
- Hvis browserens eller iPhones data ryddes, kan historikken gå tabt. Lav regelmæssig backup.
- Når du installerer en app på iPhone-hjemmeskærmen, kan den have særskilt lokalt lager fra Safari. Brug derfor app-ikonet konsekvent.

## Betjening

**Start nu:** vælg 10 / 20 / 30 på Hjem, og tryk *Start valgt pas*. 

**Tilpas:** vælg *Tilpas dagens træning*. Justér dagens pas, og tryk *Gem som standard*, hvis ændringen også skal gælde næste gang. Hvis du ikke gemmer, er ændringen kun for denne træning.

**Stop:** tryk *Afslut pas*, og vælg mellem at gemme delvist, kassere eller fortsætte.

**Måling:** registrer taljemål manuelt under Historik. Appen udleder **ikke** fedtprocent eller kalorieforbrug af disse data.

## Sikkerhed

Der kan ikke punktforbrændes mavefedt. Træningen understøtter muskler, kondition og det samlede aktivitetsniveau. Ved vægttab har energibalance og kost betydning. Start med en træningsmængde, du kan gennemføre med god teknik. Kettlebell swings kræver sikker hofteteknik: derfor er deadlifts standard, og du skal aktivt vælge swings. Stop ved smerter, svimmelhed eller usædvanligt ubehag.

## Tekniske oplysninger

- `index.html` — appens indgangsside
- `app.js` — træningslogik, data, timer og lokale indstillinger
- `styles.css` — responsivt design til telefon/desktop
- `manifest.webmanifest` — installering som app
- `sw.js` — offline-cache
- `assets/{øvelse}.webp` — nye, tydelige øvelsesudsnit til bibliotek og træning
- `assets/{øvelse}-guide.webp` — 8 komplette start/slut-illustrationer med teknikråd (tryk for stor visning)
- `assets/icon-192.png`, `assets/icon-512.png` — appikon

Appen kræver HTTPS eller `localhost` for Service Worker/PWA. Du kan teste designet ved at åbne `index.html` lokalt, men offline-installation kræver at den hostes på HTTPS.

**Version:** 1.2, oktober 2026. Du skal selv uploade den medfølgende kode, før appen har en liveadresse.


## Opdater en allerede publiceret StueForm-app

1. Download ZIP-filen med version 1.2, og **pak den ud på computeren**.
2. Åbn dit **eksisterende** `stueform`-repository på GitHub, ikke et nyt repository.
3. Vælg **Add file → Upload files**, og træk filerne `index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest` samt hele mappen `assets` over i roden af repository'et. GitHub skal beholde mappestrukturen `assets/...`. Overskriv de gamle filer ved at committe ændringerne. De øvrige instruktionsfiler kan også uploades.
4. Vent på GitHub Pages-udgivelsen. Åbn derefter appen og genindlæs én eller to gange, så offline-cachen opdateres.
5. **Dine lokale data bevares**, fordi version 1.2 stadig benytter den eksisterende lagringsnøgle. Sørg for at bevare den samme GitHub Pages-adresse og undgå at slette browserdata. Lav eventuelt en JSON-backup i Indstillinger først.

Bemærk: Dette er en ZIP med kildefiler. Upload ikke selve ZIP-filen som ét enkelt element til repository-roden, for GitHub Pages pakker den ikke automatisk ud.

**Teknisk præcisering:** Illustration for *Planke med skuldertap* viser en grundlæggende underarmsplanke, ikke selve håndløftet. Følg derfor den skriftlige instruktion for skuldertap; billedet alene er ikke en fuldstændig teknikvejledning til denne variation.


## Hvis du stadig ser gamle illustrationer efter upload

1. Kontrollér i GitHub, at **`index.html`, `app.js`, `styles.css`, `sw.js` og hele `assets/`** er blevet erstattet. Der skal være 17 `.webp`-filer under `assets/`.
2. Vent, til **Settings → Pages** viser den seneste udgivelse (eller til GitHub Actions/Pages har grønt flueben).
3. Åbn først appen i en almindelig browser via din Pages-adresse med **`?v=12`** bagpå, fx `https://BRUGERNAVN.github.io/stueform/?v=12`. Denne URL omgår den tidligere cachelagrede forside.
4. Se efter mærket **v1.2** øverst. Gå til **Øvelser** og vælg en øvelse. Det store illustration-kort findes under øvelsens detaljer.
5. Hvis du bruger app-ikonet på hjemmeskærmen: Luk appen helt, åbn den igen, og vent på at opdateringen installeres. Gør det om nødvendigt to gange.
6. **Slet ikke browserdata, offlinecache eller appen**, hvis du har træningshistorik. Eksportér først en JSON-backup under Indstillinger. Nulstil kun browserdata som sidste udvej efter backup.

`assets/` skal ligge **i roden af repository'et, ved siden af `index.html`**; ikke i en ekstra undermappe, og ZIP-filen skal pakkes ud før upload.
