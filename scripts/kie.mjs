// Runner minimo per l'API di kie.ai (crea task, attende, scarica il risultato).
// Uso:  node scripts/kie.mjs '<json-task>' <file-output>
//   <json-task> = {"model": "...", "input": {...}} passato cosi' com'e' a createTask.
// La chiave sta in .env (KIE_KEY), mai negli argomenti o nel codice.
import { readFileSync, writeFileSync } from "node:fs";

const BASE = "https://api.kie.ai/api/v1";
const chiave = readFileSync(new URL("../.env", import.meta.url), "utf8")
  .split(/\r?\n/).find((r) => r.startsWith("KIE_KEY="))?.slice(8).trim();
if (!chiave) { console.error("KIE_KEY mancante in .env"); process.exit(1); }

const [, , taskJson, fileOut] = process.argv;
const intestazioni = { Authorization: `Bearer ${chiave}`, "Content-Type": "application/json" };

const crea = await fetch(`${BASE}/jobs/createTask`, {
  method: "POST", headers: intestazioni, body: taskJson,
}).then((r) => r.json());
console.log("createTask:", JSON.stringify(crea));
const taskId = crea?.data?.taskId;
if (!taskId) process.exit(2);

// Attesa attiva: le generazioni durano da secondi a minuti.
for (let i = 0; i < 120; i++) {
  await new Promise((r) => setTimeout(r, 5000));
  const stato = await fetch(`${BASE}/jobs/recordInfo?taskId=${taskId}`, { headers: intestazioni })
    .then((r) => r.json());
  const s = stato?.data?.state;
  if (i % 6 === 0) console.log(`stato dopo ${i * 5}s:`, s);
  if (s === "success") {
    const risultato = stato.data.resultJson ? JSON.parse(stato.data.resultJson) : stato.data;
    console.log("risultato:", JSON.stringify(risultato).slice(0, 500));
    const url = risultato?.resultUrls?.[0] ?? risultato?.result_urls?.[0];
    if (url && fileOut) {
      const dati = Buffer.from(await (await fetch(url)).arrayBuffer());
      writeFileSync(fileOut, dati);
      console.log(`scaricato ${fileOut} (${dati.length} byte)`);
    }
    process.exit(0);
  }
  if (s === "fail") { console.error("FALLITO:", JSON.stringify(stato.data).slice(0, 500)); process.exit(3); }
}
console.error("timeout attesa"); process.exit(4);
