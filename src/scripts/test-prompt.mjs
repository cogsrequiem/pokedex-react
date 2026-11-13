// Usage : node scripts/test-prompt.mjs qwen2.5:1.5b
const MODEL = process.argv[2] ?? "qwen2.5:3b";

const TYPES = ["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground",
  "Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"];

const CRITERIA = {
  bulky: "takes a lot of damage (HP + Defense + Sp. Defense)",
  fast: "high Speed",
  slow: "low Speed",
  physical: "strong physical attacker",
  special: "strong special attacker",
  strong: "strong attacker, kind not specified",
};

const SYSTEM = `You translate a search request about Pokémon into JSON. Reply with JSON only.
Rules:
- "types": ONLY types the user explicitly writes in the request, 0 to 2 values from: ${TYPES.join(", ")}.
  Never guess a type from an adjective or from a Pokémon name.
- "criterion": one of the ids below, or null. If several are mentioned, use the first one.
- "name": a Pokémon name if the user gives one, otherwise null.
- If nothing matches, use [] and null. Never invent values.
Criteria:
${Object.entries(CRITERIA).map(([id, d]) => `- ${id}: ${d}`).join("\n")}
Examples:
"tanky fire pokemon" -> {"types":["Fire"],"criterion":"bulky","name":null}
"quick flying type" -> {"types":["Flying"],"criterion":"fast","name":null}
"dragon or ghost" -> {"types":["Dragon","Ghost"],"criterion":null,"name":null}
"show me charizard" -> {"types":[],"criterion":null,"name":"charizard"}`;

const SCHEMA = {
  type: "object",
  properties: {
    types: { type: "array", items: { type: "string", enum: TYPES }, maxItems: 2 },
    criterion: { type: ["string", "null"], enum: [...Object.keys(CRITERIA), null] },
    name: { type: ["string", "null"] },
  },
  required: ["types", "criterion", "name"],
};

const TESTS = [
  ["bulky grass pokemon", { types: ["Grass"], criterion: "bulky", name: null }],
  ["fast electric", { types: ["Electric"], criterion: "fast", name: null }],
  ["strong fire attacker", { types: ["Fire"], criterion: "strong", name: null }],
  ["water", { types: ["Water"], criterion: null, name: null }],
  ["grass or poison", { types: ["Grass", "Poison"], criterion: null, name: null }],
  ["something tanky", { types: [], criterion: "bulky", name: null }],
  ["un pokémon fire rapide", { types: ["Fire"], criterion: "fast", name: null }],
  ["pikachu", { types: [], criterion: null, name: "pikachu" }],
  ["what's the weather", { types: [], criterion: null, name: null }],
];

function keepWrittenTypes(result, phrase) {
  const text = phrase.toLowerCase();
  const written = (t) => new RegExp(`\\b${t.toLowerCase()}\\b`).test(text);
  return { ...result, types: result.types.filter(written) };
}

async function ask(phrase) {
  const res = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      stream: false,
      format: SCHEMA,
      keep_alive: "10m",
      options: { temperature: 0, num_ctx: 2048, num_gpu: 0 },
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: phrase },
      ],
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return keepWrittenTypes(JSON.parse(data.message.content), phrase);
}

console.log(`Modèle : ${MODEL}\n(chauffe du modèle...)`);
await ask("water"); // le premier appel charge le modèle, on ne le mesure pas

let ok = 0;
for (const [phrase, expected] of TESTS) {
  const t0 = Date.now();
  const got = await ask(phrase);
  const ms = Date.now() - t0;
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  if (pass) ok++;
  console.log(`${pass ? "OK " : "KO "} ${ms}ms  "${phrase}"`);
  if (!pass) console.log("    attendu :", JSON.stringify(expected), "\n    obtenu  :", JSON.stringify(got));
}
console.log(`\n${ok}/${TESTS.length} réussis`);