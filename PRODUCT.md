# Product

## Register

brand

## Users

- **Tifosi e paesani** di Longi (ME), ~1.400 abitanti sulle Rocche del
  Crasto, Nebrodi: seguono la squadra dai social, arrivano al sito da
  Instagram/Facebook, quasi sempre da mobile. Cercano risultati, formazione,
  foto, orgoglio di paese, la storia del double 2026.
- **Sponsor locali attuali e potenziali**: vogliono vedere che il club è
  serio e che il loro logo è in buona compagnia.
- **Giocatori e famiglie**: si cercano nella rosa e nelle foto.
- **Club** (dirigente/volontario): aggiorna news, rosa, storia e diretta via
  CMS, competenza tecnica minima.

Contesto d'uso dominante: smartphone, connessione 4G di provincia, sessioni
brevi. Il mobile è la versione principale, il desktop il caso secondario.

## Product Purpose

Sito-vetrina ufficiale del Longi 1969 (Seconda Categoria Sicilia, girone C,
stagione 2026/27). Esiste per: raccontare la rinascita del club dopo il
ritiro del 2022 e il double 2026 (Terza Categoria + Trofeo delle Province),
mostrare risultati e classifica aggiornati automaticamente (widget
Tuttocampo), dare visibilità agli sponsor, presentare rosa e storia.
Successo = i tifosi lo linkano con orgoglio, gli sponsor lo citano, il club
lo aggiorna da solo.

## Brand Personality

Mix dichiarato di tre anime, da bilanciare:

1. **Rinascita ruggente**: non solo un club di paese, ma un club che si è
   fermato e si è rialzato. Il leone dello stemma non è decorazione, è la
   metafora del sito.
2. **Orgoglio del 1969**: sessant'anni di storia, radicamento nel paese dei
   grifoni. Caldo, non nostalgico: la storia serve a spiegare perché il
   double 2026 conta così tanto.
3. **Grinta genuina da provincia**: calcio dilettantistico vero, niente
   patinato vuoto. Foto reali di campo, tifo, sudore, quando arriveranno.

Tono verbale: diretto, orgoglioso, italiano semplice. Mai corporate, mai
infantile.

## Anti-references

- **Sito comunale/parrocchiale anni 2010**: layout datato, colori spenti,
  muri di testo, contatori visite.
- **Template WordPress "soccer club" da marketplace**: caroselli standard,
  icone stock, struttura fotocopia.
- **Il sito Città di Galati** (stesso studio, stesso metodo "overdrive",
  identità visiva completamente diversa): niente Anton SC, niente
  cursore-pallone, niente giallo. Stesso impianto tecnico riusato sotto,
  faccia diversa sopra.
- Sezioni vuote o "in costruzione": meglio un segnaposto onesto che una
  pagina morta.

## Design Principles

1. **Mobile è la casa**: ogni scelta si valuta prima sullo schermo di un
   telefono in 4G. Il desktop eredita.
2. **Due metà, un cuore**: la palette non è decorativa, viene dallo scudo
   dimezzato rosso/blu con il leone d'oro. Fondo blu notte dominante,
   sezioni intere in rosso pieno nei momenti che contano (drenched), taglio
   diagonale (`Spaccatura`) come grammatica dei bordi tra sezioni.
3. **Verificato o dichiarato mancante**: ogni fatto sul club citato nel sito
   viene da una fonte verificabile (cronache sportive, Tuttocampo, lo
   stemma stesso) o è segnaposto esplicito ("da confermare"). Mai un dato
   inventato spacciato per vero.
4. **Vivo o assente**: dati che si aggiornano da soli (Tuttocampo, diretta
   con countdown) o contenuti statici curati; niente vie di mezzo che
   invecchiano male.
5. **L'effetto serve la scena**: hero scroll-driven, spaccatura e coro della
   timeline sono i tre momenti di spettacolo (vedi DESIGN.md); il resto del
   sito resta veloce e sobrio per farli risaltare.

## Accessibility & Inclusion

- Contrasti WCAG AAA misurati sui token reali: testo su fondo 16.1:1, testo
  su superficie 14.3:1, testo su rosso pieno (`--rosso-fondo`) 11.1:1 (vedi
  DESIGN.md).
- `prefers-reduced-motion`: hero scroll-driven degraderà a immagine statica
  (frame finale) quando arriva nel Task 6; Spaccatura resta nel taglio
  statico finale; il coro della pagina Storia mostra tutto il testo subito,
  senza animazione a scatti; le View Transitions tra pagine diventano uno
  scambio istantaneo.
- Navigazione completa da tastiera; focus visibili (`outline` colore
  `--oro`).
- Widget Tuttocampo in iframe con titolo, dietro consenso GDPR esplicito
  (`EmbedConsenso`), e fallback testuale (link alla scheda squadra) se non
  carica entro 10 secondi.
- Parete rosa (`PlayerWall`) e fascia sponsor (`SponsorStrip`) restano
  completamente usabili senza JavaScript e con moto ridotto: fila piana
  scorribile invece della curva 3D, nastro fermo e a capo invece dello
  scorrimento continuo.
