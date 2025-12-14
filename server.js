import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let blocks = [
  {
    recommendations: [
      {
        name: "O Cantinho do Rui",
        type: "restaurant",
        why_recommended:
          "Local blog describes it as 'tucked down a side street' where 'locals come here for the seafood rice', indicating low tourist visibility and strong local praise.",
        mode_match: "hidden_gem",
        brief_tip:
          "Go for lunch on weekdays and ask for the seafood rice; owner prefers cash.",
        location: "Costa da Caparica (Almada)",
        source: " ` `https://localportugal.example/al-alleys-2024` ` ",
        supporting_snippet: "Locals come here for the seafood rice",
        confidence: "high",
      },
      {
        name: "Café das Figueiras",
        type: "cafe",
        why_recommended:
          "Curated list notes it's a tiny family-run cafe with 'family recipes' and repeated 'locals' mentions despite low review counts.",
        mode_match: "hidden_gem",
        brief_tip: "Small space — arrive early for breakfast and bring cash.",
        location: "Algarve (small town)",
        source: " ` `https://algarve.hidden.example/2023` ` ",
        supporting_snippet:
          "a tiny family-run cafe where 'family recipes' and 'locals' are mentioned repeatedly",
        confidence: "medium",
      },
    ],
    note: "",
  },
  {
    recommendations: [
      {
        name: "Casa Pereira",
        type: "restaurant",
        why_recommended:
          "Regional guide states neighbourhood residents meet after work and 'regulars call it the best for francesinha', signaling a strong local favorite status.",
        mode_match: "local_favorite",
        brief_tip:
          "Come after 7pm to join locals; menu favorites change seasonally.",
        location: "Bonfim, Porto",
        source: " ` `https://porto.guide/locals-favorites` ` ",
        supporting_snippet:
          "Regulars call it the best for francesinha nearby",
        confidence: "high",
      },
      {
        name: "O Cantinho do Rui",
        type: "restaurant",
        why_recommended:
          "Local blog identifies it as 'tucked down a side street' and frequented by locals, making it also a local favorite for seafood lunches.",
        mode_match: "local_favorite",
        brief_tip:
          "Try the seafood rice at lunchtime; staff greet regulars by name.",
        location: "Costa da Caparica (Almada)",
        source: " ` `https://localportugal.example/al-alleys-2024` ` ",
        supporting_snippet: "Locals come here for the seafood rice",
        confidence: "medium",
      },
    ],
    note: "",
  },
  {
    recommendations: [
      {
        name: "Praia do Sol",
        type: "sight",
        why_recommended:
          "TravelList describes it as 'one of Portugal's most Instagrammed beaches this spring' with long queues, indicating strong trending/hype signals.",
        mode_match: "hype_place",
        brief_tip:
          "Visit early morning or late afternoon to avoid peak photo crowds.",
        location: "Portugal (popular beach)",
        source: " ` `https://travellist.example/pt-mustsees-2025` ` ",
        supporting_snippet:
          "one of Portugal's most Instagrammed beaches this spring",
        confidence: "high",
      },
      {
        name: "Mouraria Market (photo surge area)",
        type: "market",
        why_recommended:
          "Social snapshot documents a recent photo surge around Mouraria Market with hundreds of new posts, showing a rapid trend.",
        mode_match: "hype_place",
        brief_tip:
          "Expect increased crowds on weekends; go midday for lively stalls.",
        location: "Mouraria, Lisbon",
        source: " ` `https://socialsnap.example/lisbon` ` ",
        supporting_snippet:
          "Photo surge around Mouraria Market; hundreds of new posts in the last month",
        confidence: "high",
      },
    ],
    note: "",
  },
  {
    recommendations: [
      {
        name: "Bar La Escalera",
        type: "bar",
        why_recommended:
          "Neighborhood spot in Lavapiés where locals gather for vermut and small plates; low tourist visibility.",
        mode_match: "hidden_gem",
        brief_tip:
          "Order vermut and patatas bravas; arrive before evening rush; bring cash.",
        location: "Madrid, Spain",
        source: " ` `https://madrid.local.example/lavapies-2024` ` ",
        supporting_snippet:
          "locals gather for vermut and small plates in Lavapiés",
        confidence: "medium",
      },
      {
        name: "Casa Manolo",
        type: "restaurant",
        why_recommended:
          "Gràcia regulars recommend for homestyle Catalan dishes; known among locals.",
        mode_match: "local_favorite",
        brief_tip: "Book for dinner; try pa amb tomàquet and botifarra.",
        location: "Barcelona, Spain",
        source: " ` `https://barcelona.local.example/favorites` ` ",
        supporting_snippet: "neighborhood regulars recommend homestyle Catalan dishes",
        confidence: "high",
      },
      {
        name: "Parc Güell view points",
        type: "sight",
        why_recommended:
          "Frequent photo posts and sunrise crowds; strong hype signals.",
        mode_match: "hype_place",
        brief_tip: "Go at sunrise or near closing to avoid peak crowds.",
        location: "Barcelona, Spain",
        source: " ` `https://socialsnap.example/barcelona-trends` ` ",
        supporting_snippet: "frequent photo posts and sunrise crowds",
        confidence: "high",
      }
    ],
    note: "",
  },
  {
    recommendations: [
      {
        name: "Osteria del Gatto",
        type: "restaurant",
        why_recommended:
          "Tucked-away osteria where Siena locals eat; simple regional dishes.",
        mode_match: "hidden_gem",
        brief_tip: "Lunch set is best value; some tables prefer cash.",
        location: "Siena, Italy",
        source: " ` `https://toscana.hidden.example/osterie` ` ",
        supporting_snippet: "Siena locals eat simple regional dishes",
        confidence: "medium",
      },
      {
        name: "Trattoria da Nennella",
        type: "restaurant",
        why_recommended:
          "Beloved by Naples regulars for lively atmosphere and classic dishes.",
        mode_match: "local_favorite",
        brief_tip: "Expect lively service; arrive just before dinner peak.",
        location: "Naples, Italy",
        source: " ` `https://napoli.local.example/trattorie` ` ",
        supporting_snippet: "beloved by regulars for classic dishes",
        confidence: "high",
      },
      {
        name: "Trevi Fountain",
        type: "sight",
        why_recommended:
          "Highly Instagrammed landmark with constant crowds; strong hype.",
        mode_match: "hype_place",
        brief_tip: "Visit late night or very early morning.",
        location: "Rome, Italy",
        source: " ` `https://travellist.example/italy-mustsees` ` ",
        supporting_snippet: "highly Instagrammed landmark with constant crowds",
        confidence: "high",
      }
    ],
    note: "",
  },
  {
    recommendations: [
      {
        name: "Kissa Noraya",
        type: "cafe",
        why_recommended:
          "Small kissaten-style cafe with family-run vibes; locals mention quiet mornings.",
        mode_match: "hidden_gem",
        brief_tip: "Arrive early; limited seating; cash preferred.",
        location: "Shimokitazawa, Tokyo, Japan",
        source: " ` `https://tokyo.hidden.example/kissaten` ` ",
        supporting_snippet: "family-run vibes and quiet mornings",
        confidence: "medium",
      },
      {
        name: "Nakameguro Izakaya Alley",
        type: "restaurant",
        why_recommended:
          "Cluster of izakaya spots where nearby residents frequent after work.",
        mode_match: "local_favorite",
        brief_tip: "Go after 7pm; many small counters; try yakitori skewers.",
        location: "Nakameguro, Tokyo, Japan",
        source: " ` `https://tokyo.local.example/izakaya` ` ",
        supporting_snippet: "residents frequent after work",
        confidence: "high",
      },
      {
        name: "teamLab Borderless",
        type: "sight",
        why_recommended:
          "Rapid social photo surges and timed entries indicate hype.",
        mode_match: "hype_place",
        brief_tip: "Book timed tickets; go weekday mornings.",
        location: "Tokyo, Japan",
        source: " ` `https://socialsnap.example/tokyo` ` ",
        supporting_snippet: "rapid social photo surges",
        confidence: "high",
      }
    ],
    note: "",
  },
  {
    recommendations: [
      {
        name: "Devil's Teeth Baking Company",
        type: "cafe",
        why_recommended:
          "Outer Sunset neighborhood staple; locals line up for breakfast sandwiches.",
        mode_match: "local_favorite",
        brief_tip: "Go early morning; line moves fast.",
        location: "San Francisco, United States",
        source: " ` `https://sf.local.example/favorites` ` ",
        supporting_snippet: "locals line up for breakfast sandwiches",
        confidence: "high",
      },
      {
        name: "Summit One Vanderbilt",
        type: "sight",
        why_recommended:
          "Highly photographed observation experience; strong hype signals.",
        mode_match: "hype_place",
        brief_tip: "Book sunset slot; expect lines.",
        location: "New York City, United States",
        source: " ` `https://travellist.example/nyc-hype` ` ",
        supporting_snippet: "highly photographed observation experience",
        confidence: "high",
      },
      {
        name: "Little Prince Bistro",
        type: "restaurant",
        why_recommended:
          "Cozy neighborhood bistro favored by regulars; low tourist presence.",
        mode_match: "hidden_gem",
        brief_tip: "Weeknight dinner is quiet; small space.",
        location: "Chicago, United States",
        source: " ` `https://chicago.hidden.example/neighborhood-bistros` ` ",
        supporting_snippet: "favored by regulars; low tourist presence",
        confidence: "medium",
      }
    ],
    note: "",
  },
];

function loadDataDir() {
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) return;
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".json"));
  for (const f of files) {
    try {
      const raw = fs.readFileSync(path.join(dataDir, f), "utf-8");
      const json = JSON.parse(raw);
      if (json && Array.isArray(json.recommendations)) {
        blocks.push(json);
      } else if (Array.isArray(json)) {
        for (const block of json) {
          if (block && Array.isArray(block.recommendations)) blocks.push(block);
        }
      }
    } catch {}
  }
}
loadDataDir();

function normalizeBlocks(blocks) {
  const map = new Map();
  const countries = ["Portugal","Spain","Italy","Japan","United States","United Kingdom","France","Germany","Netherlands","Belgium","Ireland","Switzerland","Austria","Greece","Turkey","Morocco","Egypt","South Africa","Canada","Mexico","Brazil","Argentina","Chile","Peru","Colombia","South Korea","China","Singapore","Malaysia","Thailand","Vietnam","Indonesia","Philippines","Australia","New Zealand","India","Sri Lanka","Nepal","UAE","Qatar","Saudi Arabia"];
  const cityCountry = {
    Almada: "Portugal",
    Lisbon: "Portugal",
    Porto: "Portugal",
    Algarve: "Portugal",
    Madrid: "Spain",
    Barcelona: "Spain",
    Siena: "Italy",
    Naples: "Italy",
    Rome: "Italy",
    Tokyo: "Japan",
    "San Francisco": "United States",
    "New York City": "United States",
    Chicago: "United States",
    Mouraria: "Portugal",
    Nakameguro: "Japan",
    Shimokitazawa: "Japan",
    Lavapiés: "Spain",
    Gràcia: "Spain"
  };
  function inferCountry(loc, src) {
    const l = String(loc || "");
    for (const c of countries) {
      if (l.toLowerCase().includes(c.toLowerCase())) return c;
    }
    for (const [city, ctry] of Object.entries(cityCountry)) {
      if (l.toLowerCase().includes(city.toLowerCase())) return ctry;
    }
    const host = String(src || "").toLowerCase();
    if (host.includes("portugal") || host.includes("lisbon") || host.includes("porto") || host.includes("algarve")) return "Portugal";
    if (host.includes("madrid") || host.includes("barcelona") || host.includes("spain")) return "Spain";
    if (host.includes("italy") || host.includes("napoli") || host.includes("roma") || host.includes("toscana")) return "Italy";
    if (host.includes("tokyo") || host.includes("japan")) return "Japan";
    if (host.includes("nyc") || host.includes("sf.") || host.includes("chicago") || host.includes("united")) return "United States";
    return undefined;
  }
  for (const block of blocks) {
    for (const r of block.recommendations || []) {
      const key = `${r.name}|${r.location}`.toLowerCase();
      const existing =
        map.get(key) || {
          name: r.name,
          type: r.type,
          location: r.location,
          tip: r.brief_tip,
          why: r.why_recommended,
          sources: new Set(),
          modes: {},
          supporting_snippet: r.supporting_snippet,
        };
      const mode = r.mode_match;
      if (mode) existing.modes[mode] = r.confidence || "medium";
      const src = (r.source || "").replace(/[` ]/g, "");
      if (src) existing.sources.add(src);
      const country = inferCountry(r.location, src);
      if (country) {
        existing.country = country;
        const loc = String(existing.location || "");
        if (!loc.toLowerCase().includes(country.toLowerCase())) {
          existing.location = loc ? `${loc}, ${country}` : country;
        }
      }
      map.set(key, existing);
    }
  }
  return Array.from(map.values()).map((v) => ({
    ...v,
    sources: Array.from(v.sources),
  }));
}

function selectByMode(items, mode) {
  const scored = items
    .filter((i) => i.modes[mode])
    .map((i) => {
      const conf = i.modes[mode];
      const confScore = conf === "high" ? 2 : conf === "medium" ? 1 : 0;
      const localSignals =
        (i.why && i.why.toLowerCase().includes("locals") ? 1 : 0) +
        (i.supporting_snippet &&
        i.supporting_snippet.toLowerCase().includes("locals")
          ? 1
          : 0) +
        (mode === "hype_place" &&
        ((i.why && i.why.toLowerCase().includes("instagram")) ||
          (i.supporting_snippet &&
            (i.supporting_snippet.toLowerCase().includes("instagram") ||
              i.supporting_snippet.toLowerCase().includes("photo surge"))))
          ? 1
          : 0);
      const score = confScore * 2 + localSignals;
      return { score, item: i, confidence: conf };
    })
    .sort((a, b) => b.score - a.score);
  return scored.map((s) => ({
    name: s.item.name,
    type: s.item.type,
    location: s.item.location,
    tip: s.item.tip,
    why: s.item.why || s.item.supporting_snippet,
    sources: s.item.sources,
    confidence: s.confidence,
  }));
}

function recommend(blocks, country, mode, limit = 5) {
  const items = normalizeBlocks(blocks).filter((i) => {
    const field = (i.country || i.location || "").toLowerCase();
    return field.includes(country.toLowerCase());
  });
  const picks = selectByMode(items, mode);
  return {
    mode,
    country,
    items: picks.slice(0, limit),
  };
}

function recommendMulti(blocks, countries, mode, limit = 5) {
  const norm = normalizeBlocks(blocks);
  const itemsByCountry = {};
  for (const c of countries) {
    const filtered = norm.filter((i) => {
      const field = (i.country || i.location || "").toLowerCase();
      return field.includes(String(c).toLowerCase());
    });
    itemsByCountry[c] = selectByMode(filtered, mode).slice(0, limit);
  }
  const aggregated = Object.values(itemsByCountry).flat();
  return {
    mode,
    countries,
    items_by_country: itemsByCountry,
    items: aggregated
  };
}

function datasetInfo(blocks, country, limit = 5) {
  const norm = normalizeBlocks(blocks).filter((i) => {
    const field = (i.country || i.location || "").toLowerCase();
    return field.includes(country.toLowerCase());
  });
  const counts = { hidden_gem: 0, local_favorite: 0, hype_place: 0, total: 0 };
  const sources = new Set();
  const localities = new Set();
  for (const it of norm) {
    counts.total += 1;
    if (it.modes.hidden_gem) counts.hidden_gem += 1;
    if (it.modes.local_favorite) counts.local_favorite += 1;
    if (it.modes.hype_place) counts.hype_place += 1;
    for (const s of it.sources || []) sources.add(s);
    const parts = String(it.location || "").split(",").map(s => s.trim());
    if (parts.length) {
      const c0 = parts[0];
      if (c0 && c0.toLowerCase() !== country.toLowerCase()) localities.add(c0);
    }
  }
  const sample = selectByMode(norm, "hidden_gem")
    .concat(selectByMode(norm, "local_favorite"))
    .concat(selectByMode(norm, "hype_place"))
    .slice(0, limit);
  return {
    country,
    counts,
    localities: Array.from(localities),
    sources: Array.from(sources),
    sample_items: sample
  };
}

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/recommendations", (req, res) => {
  const mode = String(req.query.mode || "hidden_gem");
  const limit = Number(req.query.limit || 5);
  const allowed = ["hidden_gem", "local_favorite", "hype_place"];
  if (!allowed.includes(mode)) {
    return res.status(400).json({ error: "invalid mode" });
  }
  const countriesParam = req.query.countries;
  if (countriesParam) {
    const countries = String(countriesParam)
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
    const data = recommendMulti(blocks, countries, mode, limit);
    return res.json(data);
  }
  const country = String(req.query.country || "Portugal");
  const data = recommend(blocks, country, mode, limit);
  res.json(data);
});

app.get("/dataset-info", (req, res) => {
  const country = String(req.query.country || "Portugal");
  const data = datasetInfo(blocks, country, Number(req.query.limit || 5));
  res.json(data);
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
