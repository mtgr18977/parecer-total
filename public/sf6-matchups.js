// Matchup knowledge base for SF6
const SF6_MATCHUPS_DATA = {
  // Format: "char1-vs-char2": { ... }
  "ryu-vs-ken": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambos têm fireball game forte — neutro equilibrado",
        "Ken tem melhor pressão close range com run",
        "Ryu tem melhor controle de espaço com cr.MK",
        "Cuidado com Jinrai Kick do Ken após bloqueio"
      ],
      "en": [
        "Both have strong fireball game — balanced neutral",
        "Ken has better close range pressure with run",
        "Ryu has better space control with cr.MK",
        "Watch out for Ken's Jinrai Kick after block"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Parry para lidar com pressão do Ken",
        "Mantenha distância média com cr.MK e Hadoken",
        "Anti-air é crucial — Ken tem muitas opções de pulo"
      ],
      "en": [
        "Use Parry to deal with Ken's pressure",
        "Maintain medium distance with cr.MK and Hadoken",
        "Anti-air is crucial — Ken has many jump options"
      ]
    },
    dangerousMoves: ["Ken's Jinrai Kick", "Ken's DR st.MP"],
    yourTools: {
      "pt-BR": ["cr.MK poke", "Parry", "Anti-air Shoryuken"],
      "en": ["cr.MK poke", "Parry", "Anti-air Shoryuken"]
    }
  },
  "ryu-vs-guile": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Guile controla o ritmo com Sonic Boom",
        "Difícil se aproximar contra Sonic Boom + Flash Kick",
        "Guile tem melhores normals no neutro",
        "Drive Rush é essencial para fechar distância"
      ],
      "en": [
        "Guile controls the rhythm with Sonic Boom",
        "Hard to approach against Sonic Boom + Flash Kick",
        "Guile has better normals in neutral",
        "Drive Rush is essential to close distance"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Drive Rush para passar por Sonic Booms",
        "Pule Sonic Booms com timing e faça j.HK",
        "Pressione quando Guile não tem charge",
        "Parry pode absorver Sonic Boom mas gasta drive"
      ],
      "en": [
        "Use Drive Rush to get through Sonic Booms",
        "Jump over Sonic Booms with timing and use j.HK",
        "Press when Guile has no charge",
        "Parry can absorb Sonic Boom but consumes drive"
      ]
    },
    dangerousMoves: ["Sonic Boom", "Flash Kick", "Guile's st.HP"],
    yourTools: {
      "pt-BR": ["Drive Rush", "Jump-in timing", "cr.MK whiff punish"],
      "en": ["Drive Rush", "Jump-in timing", "cr.MK whiff punish"]
    }
  },
  "ken-vs-guile": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ken tem ferramentas para lidar com zoning",
        "Jinrai Kick passa por Sonic Boom",
        "Run permite se aproximar rápido",
        "Guile ainda controla neutro de longe"
      ],
      "en": [
        "Ken has tools to deal with zoning",
        "Jinrai Kick goes through Sonic Boom",
        "Run allows quick approach",
        "Guile still controls neutral from afar"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Jinrai Kick para passar Sonic Boom",
        "Run > throw é forte contra Guile defensive",
        "Cuidado com Flash Kick após pressão",
        "Mix throw e shimmy após knockdown"
      ],
      "en": [
        "Use Jinrai Kick to pass Sonic Boom",
        "Run > throw is strong against defensive Guile",
        "Watch out for Flash Kick after pressure",
        "Mix throw and shimmy after knockdown"
      ]
    },
    dangerousMoves: ["Flash Kick", "Guile's cr.HP AA"],
    yourTools: {
      "pt-BR": ["Jinrai Kick", "Run pressure", "DR st.MP"],
      "en": ["Jinrai Kick", "Run pressure", "DR st.MP"]
    }
  },
  "luke-vs-jp": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Luke tem ferramentas para lidar com zoning do JP",
        "Flash Knuckle passa por Torbalan",
        "JP é frágil sob pressão",
        "Cuidado com Departure do JP"
      ],
      "en": [
        "Luke has tools to deal with JP's zoning",
        "Flash Knuckle goes through Torbalan",
        "JP is fragile under pressure",
        "Watch out for JP's Departure"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Flash Knuckle para fechar gap",
        "Pressão constante é a chave",
        "Não deixe JP jogar o jogo dele",
        "Anti-air é crítico contra j.HP do JP"
      ],
      "en": [
        "Use Flash Knuckle to close gap",
        "Constant pressure is key",
        "Don't let JP play his game",
        "Anti-air is critical against JP's j.HP"
      ]
    },
    dangerousMoves: ["JP's Torbalan", "JP's Departure", "JP's j.HP"],
    yourTools: {
      "pt-BR": ["Flash Knuckle", "st.HP AA", "Drive Rush pressure"],
      "en": ["Flash Knuckle", "st.HP AA", "Drive Rush pressure"]
    }
  },
  "cammy-vs-zangief": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Cammy tem mobilidade para evitar grabs",
        "Spiral Arrow mantém Zangief longe",
        "Zangief tem dificuldade pegando Cammy",
        "Cuidado com lariat e SPD range"
      ],
      "en": [
        "Cammy has mobility to avoid grabs",
        "Spiral Arrow keeps Zangief away",
        "Zangief has trouble catching Cammy",
        "Watch out for lariat and SPD range"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Spiral Arrow para manter distância",
        "Dive Kick para cruzar e escapar",
        "Não fique em grab range",
        "Poke com st.MK e cr.MK"
      ],
      "en": [
        "Use Spiral Arrow to maintain distance",
        "Dive Kick to cross up and escape",
        "Don't stay in grab range",
        "Poke with st.MK and cr.MK"
      ]
    },
    dangerousMoves: ["SPD (all ranges)", "Lariat", "st.HP"],
    yourTools: {
      "pt-BR": ["Spiral Arrow", "Dive Kick", "Mobility"],
      "en": ["Spiral Arrow", "Dive Kick", "Mobility"]
    }
  },
  "default": {
    rating: "5-5",
    difficulty: { "pt-BR": "Desconhecido", "en": "Unknown" },
    keyPoints: {
      "pt-BR": [
        "Matchup ainda sendo estudado pela comunidade",
        "Conhecimento específico limitado",
        "Foque nos fundamentos do seu personagem",
        "Estude os golpes e frame data do oponente"
      ],
      "en": [
        "Matchup still being studied by the community",
        "Limited specific knowledge",
        "Focus on your character's fundamentals",
        "Study opponent's moves and frame data"
      ]
    },
    tips: {
      "pt-BR": [
        "Aprenda os golpes puníveis do oponente",
        "Identifique os melhores pokes de cada um",
        "Teste diferentes estratégias em treino",
        "Assista replays de top players"
      ],
      "en": [
        "Learn opponent's punishable moves",
        "Identify best pokes for each",
        "Test different strategies in training",
        "Watch top player replays"
      ]
    },
    dangerousMoves: {
        "pt-BR": ["Especiais do oponente", "Normals de alcance"],
        "en": ["Opponent specials", "Long range normals"]
    },
    yourTools: {
      "pt-BR": ["Seus melhores pokes", "Anti-airs", "Drive system"],
      "en": ["Your best pokes", "Anti-airs", "Drive system"]
    }
  }
};

let SF6_MATCHUPS = {};

function updateMatchupsLanguage() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('sf6-hub-lang') || 'pt-BR');
  SF6_MATCHUPS = {};

  for (const [key, data] of Object.entries(SF6_MATCHUPS_DATA)) {
    SF6_MATCHUPS[key] = {
      rating: data.rating,
      difficulty: data.difficulty[lang] || data.difficulty['en'],
      keyPoints: data.keyPoints[lang] || data.keyPoints['en'],
      tips: data.tips[lang] || data.tips['en'],
      dangerousMoves: Array.isArray(data.dangerousMoves) ? data.dangerousMoves : (data.dangerousMoves[lang] || data.dangerousMoves['en']),
      yourTools: Array.isArray(data.yourTools) ? data.yourTools : (data.yourTools[lang] || data.yourTools['en'])
    };
  }
}

updateMatchupsLanguage();

// Helper function to get matchup data
function getMatchupData(char1, char2) {
  const key1 = `${char1.toLowerCase()}-vs-${char2.toLowerCase()}`;
  const key2 = `${char2.toLowerCase()}-vs-${char1.toLowerCase()}`;

  // Check if we have data for this matchup
  if (SF6_MATCHUPS[key1]) {
    return { ...SF6_MATCHUPS[key1], perspective: char1 };
  } else if (SF6_MATCHUPS[key2]) {
    // Reverse the matchup
    const reversed = { ...SF6_MATCHUPS[key2] };
    // Invert rating (6-4 becomes 4-6)
    if (reversed.rating !== "5-5") {
      const [a, b] = reversed.rating.split('-');
      reversed.rating = `${b}-${a}`;
      // Invert difficulty
      if (reversed.difficulty === "Advantage" || reversed.difficulty === "Vantagem") {
          reversed.difficulty = (localStorage.getItem('sf6-hub-lang') === 'en' ? "Disadvantage" : "Desvantagem");
      }
      else if (reversed.difficulty === "Disadvantage" || reversed.difficulty === "Desvantagem") {
          reversed.difficulty = (localStorage.getItem('sf6-hub-lang') === 'en' ? "Advantage" : "Vantagem");
      }
    }
    return { ...reversed, perspective: char1 };
  }

  // Return default if no specific data
  return { ...SF6_MATCHUPS.default, perspective: char1 };
}

// Get all available characters from combos
function getAvailableCharacters() {
  if (typeof SF6_COMBOS_DATA !== 'undefined') {
    return Object.values(SF6_COMBOS_DATA).map(c => c.character).sort();
  }
  return [];
}
