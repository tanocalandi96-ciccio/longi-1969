# Sito Longi 1969 — documento di design

Data: 26/08/2026. Stato: approvato dall'utente (conversazione di progetto).
Committente: club Longi (ME), lavoro commissionato e già venduto tramite Eleva
Digital. Secondo sito del "formato overdrive" dopo ASD Città di Galati:
stesso metodo, identità completamente diversa.

## Il club (ricerca online, 26/08/2026)

- **Longi 1969**, comune di Longi (ME), ~1.400 abitanti, Nebrodi (Rocche del
  Crasto, paese dei grifoni). Colori sociali **rossoblù**, stemma: scudo
  dimezzato rosso/blu con **leone d'oro rampante**, scritta LONGI 1969,
  bordo tricolore, Trinacria in basso.
- Ritirata dalla Prima Categoria nel 2022, tre anni di assenza, **rifondata
  nel 2024/25**.
- **2025/26: vince la Terza Categoria** (delegazione Barcellona P.G.) con un
  turno d'anticipo: 32 punti, 10V 2N 1P, 19 gol fatti, 4 subiti (miglior
  difesa). Gol promozione: Antonino Pidalà al 21' sul campo "Biagio Fresina"
  di Sant'Agata Militello (1-0 all'Academy Sant'Agata).
- **Double**: vinto anche il Trofeo delle Province il 18/04/2026 allo stadio
  "Pippo Giacobbe" di Rocca di Caprileone: sotto 0-2 col Real Academy
  Acquedolci, rimonta 2-2, vittoria 6-5 ai rigori.
- **2026/27: Seconda Categoria, Girone C Sicilia** (con Ficarra, Fitalese
  1981, Fondachelli, Furnari, Lipari I.C., Mirto, Patti Calcio, Pro
  Tonnarella, S.P. Torregrotta, Sfarandina, Tusa). Scheda Tuttocampo:
  id squadra **1043634**, URL
  `https://www.tuttocampo.it/Sicilia/SecondaCategoria/GironeC/Squadra/Longi/1043634/Scheda`.
- Giocatori citati dalle cronache: Pidalà (match-winner), Sirna, Arangio
  (portiere).
- Fonti principali: messinanelpallone.it (art. 42970, 43107), 98zero.com
  (art. 1600737, 1606759), siciliasportiva.com, tuttocampo.it.
- **Mancano da fonti online** (da chiedere al club): denominazione societaria
  esatta e codice fiscale, matricola FIGC, campo di casa a Longi, presidente
  e mister, rosa completa, social, sponsor, contatti/PEC, stemma vettoriale.

Narrativa del sito: **la rinascita** — 1969 come radice, il ritiro del 2022
come ferita, il double 2026 come ritorno ruggente.

## Identità visiva

- **Palette dallo stemma** (OKLCH): rosso `oklch(0.55 0.21 27)`, blu profondo
  `oklch(0.32 0.12 265)`, oro leone `oklch(0.82 0.15 92)`. Neutri tinti verso
  il blu, mai bianco/nero puri.
- **Strategia colore "due metà, un cuore"**: fondo base blu scuro, ma sezioni
  intere in rosso pieno (drenched) — cosa che il sito Galati non fa mai. Il
  taglio diagonale dello scudo è la grammatica dei bordi tra sezioni.
- **Tipografia**: display **Alfa Slab One** (slab da manifesto anni '70,
  eco del 1969), testo **Archivo**; entrambi self-hosted via Fontsource.
  Numeri tabulari per risultati e classifiche. Niente Anton (è la voce di
  Galati), niente font della lista reflex-reject di impeccable.
- Contrasti WCAG AA; `prefers-reduced-motion` degrada tutto a statico.

## Momenti overdrive (tre, non di più)

1. **Hero "il leone si sveglia"** (Seedance 2.0, scroll-driven): leone d'oro
   come statua di bronzo nel buio, la luce lo accende, la camera arretra e le
   due metà rossoblù dello scudo si chiudono attorno a lui. Stessa pipeline
   collaudata di Galati: 2 frame (nano banana) → video 5s 1080p → reframe
   9:16 mobile → frame WebP estratti con ffmpeg → scrub su canvas con
   `framePosition()` frazionaria. Budget: **~50-70 crediti Higgsfield**
   (piano Plus, ~106 crediti al 27/07; il connettore MCP va riautorizzato
   prima di generare; conferma costo prima di OGNI generazione).
   Reduced-motion/no-JS: frame finale statico.
2. **Spaccatura rossoblù**: le sezioni si aprono allo scroll con un taglio
   diagonale che si chiude come lo scudo (clip-path scroll-driven con
   `animation-timeline: view()`, ripiego IntersectionObserver, SOLO
   proprietà animation-* estese — trappola minificatore già documentata).
3. **Timeline 1969–oggi** (pagina Storia): anni giganti in slab che scattano
   come un tabellone, gran finale sul double 2026 raccontato a scatti
   (0-2 → 2-2 → 6-5 ai rigori).

Niente cursore-pallone (firma di Galati, non si replica). View Transitions
cross-documento riusate (tecnica invisibile, non identitaria).

## Struttura

Pagine: Home, Squadra, Stagione, News, **Storia 1969–oggi** (novità rispetto
a Galati), Club, Contatti, Privacy. Riuso dell'impianto collaudato di Galati:

- Astro statico + TypeScript + Vitest, zero framework runtime.
- CMS **Sveltia** con OAuth GitHub self-hosted su funzioni Netlify
  (auth.mjs/callback.mjs, scope `public_repo`), collezioni news/rosa/staff/
  sponsor + impostazioni (società, storia, diretta). Guida PDF per il club.
- **Widget Tuttocampo** girone C: GUID da generare su /WidgetApi (account
  gratuito esistente); classifica/risultati/marcatori su Stagione,
  partita+prossima in Home. Fallback on-brand se "non ancora disponibile"
  alla compilazione.
- **GDPR**: EmbedConsenso (iframe in template inerte fino al consenso),
  privacy policy completa, liberatorie minori documentate.
- **DirettaLive** attivabile da CMS con countdown.
- Sponsor con campo "Sito web" e logo cliccabile.

## Infrastruttura

- Cartella progetto: `C:\Users\tigno\Desktop\longi-1969` (repo git dal
  primo giorno, .gitignore prima di tutto).
- Repo GitHub nuovo, **pubblico** (lezione Galati: Netlify free blocca i
  build di repo privati con contributori non verificati — i commit del CMS
  del club lo sarebbero).
- **Netlify, account SEPARATO** (scelta utente): crediti isolati dal sito
  Galati (il blocco crediti di agosto ha fermato deploy e pubblicazioni CMS
  per 3 giorni). Un solo stack da mantenere. `NODE_VERSION=22`, noindex
  finché anteprima.
- OAuth app GitHub nuova, callback sul dominio Netlify del nuovo sito.

## Contenuti al lancio

- Reali da subito: stemma (PNG 500px da Tuttocampo in `assets/`, da
  rivettorializzare), storia e double con fonti, girone e avversarie 2026/27.
- Segnaposto dichiarati (mai sezioni finte): rosa, staff, sponsor, contatti.
- File `docs/RICHIESTE-SOCIETA.md` con tutto ciò che serve dal club.

## Sequenza di lavoro

1. Scaffold Astro + identità (token, font, layout base).
2. Hero Seedance (prerequisito: riautorizzazione Higgsfield; stima costi
   prima di generare).
3. Pagine + CMS + widget.
4. Rifinitura overdrive (spaccatura, timeline, transizioni) con verifica
   visiva nel browser.
5. Deploy Netlify (nuovo account), OAuth, guida, consegna.

Criteri di successo: build e test verdi; effetti verificati sul CSS
compilato (trappola minificatore); zero richieste esterne senza consenso;
CMS pubblicabile dal club in autonomia; Lighthouse mobile ≥ 90 su 4G
simulato.
