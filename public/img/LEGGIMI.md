# Immagini in questa cartella: cosa sostituire e cosa no

## Stemma: bassa qualità, DA SOSTITUIRE

| File | Dove | Cosa serve al suo posto |
|---|---|---|
| `stemma.png` | HeroProvvisorio (home), header/favicon | Copia scalata di `stemma-500.png`. Oggi è un raster scaricato dalla scheda squadra su Tuttocampo, pensato per una miniatura sul loro sito, non per un hero a piena pagina: serve lo **stemma vettoriale del club** (AI/EPS/SVG/PDF). Se il club non lo possiede, va rivettorializzato da un grafico partendo da questo PNG e dalla descrizione ufficiale (scudo dimezzato rosso/blu, leone d'oro rampante, scritta LONGI 1969, bordo tricolore, Trinacria in basso) |
| `stemma-500.png` | sorgente per `stemma.png` e per i prompt dell'hero Seedance (Task 6) | Stessa nota sopra: sostituire appena arriva il vettoriale, poi rigenerare `stemma.png` da quello |

I due file arrivano da `assets/stemma-tuttocampo-150.png` e
`assets/stemma-tuttocampo-500.png` (fuori da `public/`, non serviti dal
sito): quelli restano come sorgente originale, non vanno toccati.

## `sponsor-demo/`: fittizi, DA SOSTITUIRE

Loghi disegnati per quattro sponsor **inventati** (Edil Longi Costruzioni,
Ferramenta Nebrodi, Panificio del Corso, Bar dello Sport Longi), usati per
collaudare la fascia sponsor in home. Nessuno di questi sponsor esiste
davvero: i contenuti che li richiamano sono marcati `FITTIZIO` in
`src/content/sponsor/*.md`. Vanno cancellati e sostituiti con i loghi veri
caricati dal pannello (collezione Sponsor, si salvano da soli in
`public/img/uploads/`, non in questa cartella) appena il club conferma i
propri sponsor.

## `silhouette.svg`: generica, DEFINITIVA

Sagoma neutra mostrata al posto della foto quando un giocatore o un membro
dello staff non ha ancora una foto caricata. Non va sostituita: è pensata
per restare per sempre come stato "foto non ancora arrivata", non come
segnaposto temporaneo.

## Regola pratica

Se il file rappresenta **questa** società (stemma, sponsor), è fittizio o di
bassa qualità e va sostituito appena arriva il materiale vero. Se è uno
stato dell'interfaccia che si applica a chiunque (sagoma senza foto), resta
così.

Le foto reali di squadra, campo e tifo (rosa, news, club, storia) non
passano da questa cartella: si caricano dal pannello `/admin` e finiscono in
`public/img/uploads/`, generata automaticamente al primo caricamento.
