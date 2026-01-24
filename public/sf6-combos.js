const SF6_COMBOS_DATA = {
  "ryu": {
    "character": "Ryu",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Hadoken",
        "notation": "2MK xx 236P",
        "damage": "~800",
        "notes": {
          "pt-BR": "Combo básico de confirm. Use LP Hadoken para ser mais seguro.",
          "en": "Basic confirm combo. Use LP Hadoken to be safer."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx Hadoken",
        "notation": "2LP > 2LP > 2MK xx 236P",
        "damage": "~950",
        "notes": {
          "pt-BR": "Hit confirm de light. Pratique o timing do cancel.",
          "en": "Light hit confirm. Practice the cancel timing."
        },
        "situation": { "pt-BR": "Pressão close range", "en": "Close range pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "st.HP (Punish Counter)",
        "combo": "st.HP (PC) > cr.HP xx H.Shoryuken > SA1",
        "notation": "5HP (PC) > 2HP xx 623HP > 236236P",
        "damage": "~3200",
        "notes": {
          "pt-BR": "Requer Punish Counter. Grande dano com 1 barra de super.",
          "en": "Requires Punish Counter. Big damage with 1 super bar."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > st.HP xx M.Tatsu > H.Shoryuken",
        "notation": "DR 5HP > 5HP xx 214MK > 623HP",
        "damage": "~2400",
        "notes": {
          "pt-BR": "Combo de Drive Rush. Gasta 3 barras de Drive.",
          "en": "Drive Rush combo. Consumes 3 Drive bars."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Anti-air cr.HP",
        "combo": "cr.HP (anti-air) > dash > cr.MP > st.MP xx L.Tatsu > SA1",
        "notation": "2HP (AA) > dash > 2MP > 5MP xx 214LK > 236236P",
        "damage": "~3500",
        "notes": {
          "pt-BR": "Anti-air combo. Requer timing preciso no dash.",
          "en": "Anti-air combo. Requires precise dash timing."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner Drive Rush",
        "combo": "DR st.HP > st.HP > cr.HP xx H.Shoryuken > OD Tatsu > SA3",
        "notation": "DR 5HP > 5HP > 2HP xx 623HP > 214KK > 236236KK",
        "damage": "~5000+",
        "notes": {
          "pt-BR": "Máximo dano no canto com 3 barras. Muito estiloso!",
          "en": "Maximum corner damage with 3 bars. Very stylish!"
        },
        "situation": { "pt-BR": "Corner combo", "en": "Corner combo" }
      }
    ]
  },
  "ken": {
    "character": "Ken",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Hadoken",
        "notation": "2MK xx 236P",
        "damage": "~800",
        "notes": { "pt-BR": "Confirm básico igual ao Ryu.", "en": "Basic confirm similar to Ryu." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HP xx H.Shoryuken",
        "notation": "5MP > 5HP xx 623HP",
        "damage": "~1600",
        "notes": { "pt-BR": "Target combo simples com bom dano.", "en": "Simple target combo with good damage." },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.MK",
        "combo": "DR st.MK > st.HP xx M.Tatsu > H.Shoryuken",
        "notation": "DR 5MK > 5HP xx 214MK > 623HP",
        "damage": "~2500",
        "notes": { "pt-BR": "Combo padrão de Drive Rush do Ken.", "en": "Ken's standard Drive Rush combo." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Overhead",
        "combo": "f+MK > cr.LP > st.LK xx L.Tatsu > Jinrai Kick",
        "notation": "6MK > 2LP > 5LK xx 214LK > 236KK",
        "damage": "~2200",
        "notes": { "pt-BR": "Combo de overhead. Use para abrir defesa.", "en": "Overhead combo. Use to open up defense." },
        "situation": { "pt-BR": "Mix-up", "en": "Mix-up" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "st.HP (Punish Counter)",
        "combo": "st.HP (PC) > st.HP xx H.Tatsu > dash > st.LP > SA1",
        "notation": "5HP (PC) > 5HP xx 214HK > dash > 5LP > 236236P",
        "damage": "~3800",
        "notes": { "pt-BR": "Máximo damage de Punish Counter com super.", "en": "Maximum Punish Counter damage with super." },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner juggle",
        "combo": "j.HP > st.HP > st.HP xx H.Tatsu > H.Shoryuken > SA3",
        "notation": "j.HP > 5HP > 5HP xx 214HK > 623HP > 236236KK",
        "damage": "~5200",
        "notes": { "pt-BR": "Full corner combo com 3 barras. Muito dano!", "en": "Full corner combo with 3 bars. Huge damage!" },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "chun-li": {
    "character": "Chun-Li",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Lightning Kicks",
        "notation": "2MK xx 214K~K",
        "damage": "~900",
        "notes": { "pt-BR": "Confirm seguro e simples.", "en": "Safe and simple confirm." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > cr.MP xx M.Legs",
        "notation": "5MP > 2MP xx 214MK",
        "damage": "~1100",
        "notes": { "pt-BR": "Combo básico de close range.", "en": "Basic close range combo." },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Legs > dash > st.LK xx Lightning Kicks",
        "notation": "DR 5HP > 2HP xx 214HK > dash > 5LK xx 214K~K",
        "damage": "~2400",
        "notes": { "pt-BR": "Combo estável de Drive Rush.", "en": "Stable Drive Rush combo." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Back throw (corner)",
        "combo": "Back throw (corner) > dash > st.MP > cr.HP xx SA2",
        "notation": "4LP+LK (corner) > dash > 5MP > 2HP xx 236236K",
        "damage": "~3000",
        "notes": { "pt-BR": "Setup de throw no canto.", "en": "Corner throw setup." },
        "situation": { "pt-BR": "Corner throw", "en": "Corner throw" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Tensho Kicks (anti-air)",
        "combo": "Tensho (AA) > dash > st.HP > cr.HP xx SA1",
        "notation": "214K (AA) > dash > 5HP > 2HP xx 214214K",
        "damage": "~3500",
        "notes": { "pt-BR": "Anti-air conversion difícil mas recompensador.", "en": "Difficult but rewarding anti-air conversion." },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner max damage",
        "combo": "DR st.HP > st.HP > cr.HP xx H.Legs > dash > cr.MP xx SA1",
        "notation": "DR 5HP > 5HP > 2HP xx 214HK > dash > 2MP xx 214214K",
        "damage": "~4500",
        "notes": { "pt-BR": "Requer posicionamento no canto e 1 barra.", "en": "Requires corner positioning and 1 bar." },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "guile": {
    "character": "Guile",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Sonic Boom",
        "notation": "2MK xx [4]6P",
        "damage": "~850",
        "notes": { "pt-BR": "Requer charge. Boom básico de confirm.", "en": "Requires charge. Basic Boom confirm." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "Flash Kick",
        "combo": "Flash Kick (anti-air)",
        "notation": "[2]8K",
        "damage": "~1100",
        "notes": { "pt-BR": "Anti-air consistente. Mantenha o charge!", "en": "Consistent anti-air. Keep the charge!" },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "cr.HP (Punish Counter)",
        "combo": "cr.HP (PC) > st.MP xx H.Flash Kick > SA1",
        "notation": "2HP (PC) > 5MP xx [2]8HK > [4]6[4]6P",
        "damage": "~3200",
        "notes": { "pt-BR": "Punish Counter com super. Mantenha os charges!", "en": "Punish Counter with super. Keep the charges!" },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush cr.MP",
        "combo": "DR cr.MP > st.HP xx Sonic Boom > SA1",
        "notation": "DR 2MP > 5HP xx [4]6P > [4]6[4]6P",
        "damage": "~2800",
        "notes": { "pt-BR": "Combo de Drive Rush com cancel em super.", "en": "Drive Rush combo with super cancel." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner setup",
        "combo": "Corner throw > Sonic Boom > dash > cr.MP > cr.MP xx H.Flash Kick",
        "notation": "4LP+LK > [4]6P > dash > 2MP > 2MP xx [2]8HK",
        "damage": "~2400",
        "notes": { "pt-BR": "Okizeme de canto com boom. Timing específico.", "en": "Corner okizeme with boom. Specific timing." },
        "situation": { "pt-BR": "Corner okizeme", "en": "Corner okizeme" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Max punish",
        "combo": "st.HP (PC) > cr.HP xx H.Flash Kick > OD Sonic Hurricane > SA3",
        "notation": "5HP (PC) > 2HP xx [2]8HK > [4]6PP > [4]6[4]6KK",
        "damage": "~5500",
        "notes": { "pt-BR": "Dano máximo com 4 barras totais. Difícil de executar.", "en": "Maximum damage with 4 total bars. Hard to execute." },
        "situation": { "pt-BR": "Punish Counter corner", "en": "Punish Counter corner" }
      }
    ]
  },
  "luke": {
    "character": "Luke",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Sand Blast",
        "notation": "2MK xx 236P",
        "damage": "~900",
        "notes": { "pt-BR": "Confirm básico. Use LP para ser mais seguro.", "en": "Basic confirm. Use LP to be safer." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HP xx Flash Knuckle",
        "notation": "5MP > 5HP xx 236K",
        "damage": "~1400",
        "notes": { "pt-BR": "Target combo simples com knockdown.", "en": "Simple target combo with knockdown." },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HK",
        "combo": "DR st.HK > st.HP xx M.Flash Knuckle > SA1",
        "notation": "DR 5HK > 5HP xx 236MK > 236236P",
        "damage": "~3200",
        "notes": { "pt-BR": "BnB de Drive Rush com super.", "en": "Drive Rush BnB with super." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Flash Knuckle",
        "combo": "Flash Knuckle (CH) > OD Rising Upper > SA1",
        "notation": "236K (CH) > 623PP > 236236P",
        "damage": "~2800",
        "notes": { "pt-BR": "Counter hit conversion. Reação rápida necessária.", "en": "Counter hit conversion. Fast reaction required." },
        "situation": { "pt-BR": "Counter Hit", "en": "Counter Hit" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner juggle",
        "combo": "DR st.HK > st.HP > cr.HP xx H.Rising Upper > SA2",
        "notation": "DR 5HK > 5HP > 2HP xx 623HP > 214214P",
        "damage": "~4200",
        "notes": { "pt-BR": "Corner combo com ótimo dano e 2 barras.", "en": "Corner combo with great damage and 2 bars." },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Level 3 setup",
        "combo": "st.HP (PC) > st.HP > st.HP xx OD Flash Knuckle > SA3",
        "notation": "5HP (PC) > 5HP > 5HP xx 236KK > 236236KK",
        "damage": "~5800",
        "notes": { "pt-BR": "Dano extremo com Punish Counter e level 3.", "en": "Extreme damage with Punish Counter and level 3." },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      }
    ]
  }
};

// Derived combos object that respects the current language
let SF6_COMBOS = {};

function updateCombosLanguage() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('sf6-hub-lang') || 'pt-BR');
  SF6_COMBOS = {};

  for (const [key, data] of Object.entries(SF6_COMBOS_DATA)) {
    SF6_COMBOS[key] = {
      character: data.character,
      combos: data.combos.map(c => ({
        ...c,
        difficulty: c.difficulty[lang] || c.difficulty['en'],
        notes: c.notes[lang] || c.notes['en'],
        situation: c.situation[lang] || c.situation['en']
      }))
    };
  }
}

// Initial call
updateCombosLanguage();
