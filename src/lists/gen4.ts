import type { Generation } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export const gen4: Generation = {
  number: GenNumber.Four,
  abilities: [
    {
      number: 77,
      name: "tangledfeet",
      displayName: "Tangled Feet",
      description: "Boost the Pokémon's evasiveness if it is confused."
    },
    {
      number: 78,
      name: "motordrive",
      displayName: "Motor Drive",
      description:
        "The Pokémon takes no damage when hit by Electric-type moves. Instead, its Speed stat is boosted."
    },
    {
      number: 79,
      name: "rivalry",
      displayName: "Rivalry",
      description:
        "The Pokémon's competitive spirit makes it deal more damage to Pokémon of the same gender, but less damage to Pokémon of the opposite gender."
    },
    {
      number: 80,
      name: "steadfast",
      displayName: "Steadfast",
      description:
        "The Pokémon's determination boosts its Speed stat every time it flinches."
    },
    {
      number: 81,
      name: "snowcloak",
      displayName: "Snow Cloak",
      description: "Boosts the Pokémon's evasiveness in snow."
    },
    {
      number: 82,
      name: "gluttony",
      displayName: "Gluttony",
      description:
        "If the Pokémon is holding a Berry to be eaten when its HP is low, it will instead eat the Berry when its HP drops to half or less."
    },
    {
      number: 83,
      name: "angerpoint",
      displayName: "Anger Point",
      description:
        "When the Pokémon takes a critical hit, its Attack stat is maxed."
    },
    {
      number: 84,
      name: "unburden",
      displayName: "Unburden",
      description:
        "Boosts the Speed stat if the Pokémon's held item is used or lost."
    },
    {
      number: 85,
      name: "heatproof",
      displayName: "Heatproof",
      description: "The Pokémon halves the damage taken from Fire-type moves."
    },
    {
      number: 86,
      name: "simple",
      displayName: "Simple",
      description: "Doubles the effects of the Pokémon's stat changes."
    },
    {
      number: 87,
      name: "dryskin",
      displayName: "Dry Skin",
      description:
        "Restores the Pokémon's HP in rain or when it is hit by Water-type moves. Reduces HP in harsh sunlight, and increases the damage received from Fire-type moves."
    },
    {
      number: 88,
      name: "download",
      displayName: "Download",
      description:
        "The Pokémon compares an opposing Pokémon's Defense and Sp. Def stats before raising its own Attack or Sp. Atk stat - whichever will be more effective."
    },
    {
      number: 89,
      name: "ironfist",
      displayName: "Iron Fist",
      description: "Powers up punching moves."
    },
    {
      number: 90,
      name: "poisonheal",
      displayName: "Poison Heal",
      description:
        "If poisoned, the Pokémon has its HP restored instead of taking damage."
    },
    {
      number: 91,
      name: "adaptability",
      displayName: "Adaptability",
      description: "Powers up moves of the same type as the Pokémon."
    },
    {
      number: 92,
      name: "skilllink",
      displayName: "Skill Link",
      description: "Maximizes the number of times multistrike moves hit."
    },
    {
      number: 93,
      name: "hydration",
      displayName: "Hydration",
      description: "Cures the Pokémon's status conditions in rain."
    },
    {
      number: 94,
      name: "solarpower",
      displayName: "Solar Power",
      description:
        "In harsh sunlight, the Pokémon's Sp. Atk stat is boosted, but its HP decreases every turn."
    },
    {
      number: 95,
      name: "quickfeet",
      displayName: "Quick Feet",
      description:
        "Boosts the Speed stat if the Pokémon has a status condition."
    },
    {
      number: 96,
      name: "normalize",
      displayName: "Normalize",
      description:
        "All the Pokémon's moves become Normal type. The power of those moves is boosted a little."
    },
    {
      number: 97,
      name: "sniper",
      displayName: "Sniper",
      description:
        "If the Pokémon's attack lands a critical hit, the attack is powered up even further."
    },
    {
      number: 98,
      name: "magicguard",
      displayName: "Magic Guard",
      description: "The Pokémon only takes damage from attacks."
    },
    {
      number: 99,
      name: "noguard",
      displayName: "No Guard",
      description:
        "The Pokémon ensures incoming and outgoing attacks always land."
    },
    {
      number: 100,
      name: "stall",
      displayName: "Stall",
      description: "The Pokémon is always the last to use its moves.",
      isUnique: true
    },
    {
      number: 101,
      name: "technician",
      displayName: "Technician",
      description:
        "Powers up weak moves so the Pokémon can deal more damage with them."
    },
    {
      number: 102,
      name: "leafguard",
      displayName: "Leaf Guard",
      description: "Prevents status conditions in harsh sunlight."
    },
    {
      number: 103,
      name: "klutz",
      displayName: "Klutz",
      description: "The Pokémon can't use any held items."
    },
    {
      number: 104,
      name: "moldbreaker",
      displayName: "Mold Breaker",
      description:
        "The Pokémon's moves are unimpeded by the Ability of the target."
    },
    {
      number: 105,
      name: "superluck",
      displayName: "Super Luck",
      description: "The critical-hit ratios of the Pokémon's moves are boosted."
    },
    {
      number: 106,
      name: "aftermath",
      displayName: "Aftermath",
      description:
        "Damages the attacker if it knocks out the Pokémon with a move that makes direct contact."
    },
    {
      number: 107,
      name: "anticipation",
      displayName: "Anticipation",
      description:
        "The Pokémon can sense an opposing Pokémon's dangerous moves."
    },
    {
      number: 108,
      name: "forewarn",
      displayName: "Forewarn",
      description:
        "When it enters a battle, the Pokémon can tell one of the moves an opposing Pokémon has."
    },
    {
      number: 109,
      name: "unaware",
      displayName: "Unaware",
      description:
        "When attacking, the Pokémon ignores the target's stat changes."
    },
    {
      number: 110,
      name: "tintedlens",
      displayName: "Tinted Lens",
      description:
        "The Pokémon can use 'not very effective' moves to deal regular damage."
    },
    {
      number: 111,
      name: "filter",
      displayName: "Filter",
      description:
        "Reduces the power of supereffective attacks that hit the Pokémon."
    },
    {
      number: 112,
      name: "slowstart",
      displayName: "Slow Start",
      description:
        "For five turns, the Pokémon's Attack and Speed stats are halved."
    },
    {
      number: 113,
      name: "scrappy",
      displayName: "Scrappy",
      description:
        "The Pokémon can hit Ghost-type Pokémon with Normal- and Fighting-type moves. It is also unaffected by Intimidate."
    },
    {
      number: 114,
      name: "stormdrain",
      displayName: "Storm Drain",
      description:
        "The Pokémon draws in all Water-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted."
    },
    {
      number: 115,
      name: "icebody",
      displayName: "Ice Body",
      description: "The Pokémon gradually regains HP in snow."
    },
    {
      number: 116,
      name: "solidrock",
      displayName: "Solid Rock",
      description:
        "Reduces the power of supereffective attacks that hit the Pokémon."
    },
    {
      number: 117,
      name: "snowwarning",
      displayName: "Snow Warning",
      description: "The Pokémon makes it snow when it enters a battle."
    },
    {
      number: 118,
      name: "honeygather",
      displayName: "Honey Gather",
      description: "The Pokémon may gather Honey after a battle."
    },
    {
      number: 119,
      name: "frisk",
      displayName: "Frisk",
      description:
        "When it enters a battle, the Pokémon can check an opposing Pokémon's held item."
    },
    {
      number: 120,
      name: "reckless",
      displayName: "Reckless",
      description: "Powers up moves that have recoil damage."
    },
    {
      number: 121,
      name: "multitype",
      displayName: "Multitype",
      description: "Changes the Pokémon's type to match the plate it holds.",
      isUnique: true
    },
    {
      number: 122,
      name: "flowergift",
      displayName: "Flower Gift",
      description:
        "Boosts the Attack and Sp. Def stats of the Pokémon and its allies in harsh sunlight.",
      isUnique: true
    },
    {
      number: 123,
      name: "baddreams",
      displayName: "Bad Dreams",
      description: "Damages opposing Pokémon that are asleep."
    }
  ],
  moves: [
    {
      number: 355,
      name: "roost",
      displayName: "Roost",
      type: Type.Flying,
      category: MoveCategory.Status
    },
    {
      number: 356,
      name: "gravity",
      displayName: "Gravity",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 357,
      name: "miracleeye",
      displayName: "Miracle Eye",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 358,
      name: "wakeupslap",
      displayName: "Wake-Up Slap",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 359,
      name: "hammerarm",
      displayName: "Hammer Arm",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 360,
      name: "gyroball",
      displayName: "Gyro Ball",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 361,
      name: "healingwish",
      displayName: "Healing Wish",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 362,
      name: "brine",
      displayName: "Brine",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 363,
      name: "naturalgift",
      displayName: "Natural Gift",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 364,
      name: "feint",
      displayName: "Feint",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 365,
      name: "pluck",
      displayName: "Pluck",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 366,
      name: "tailwind",
      displayName: "Tailwind",
      type: Type.Flying,
      category: MoveCategory.Status
    },
    {
      number: 367,
      name: "acupressure",
      displayName: "Acupressure",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 368,
      name: "metalburst",
      displayName: "Metal Burst",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 369,
      name: "uturn",
      displayName: "U-turn",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 370,
      name: "closecombat",
      displayName: "Close Combat",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 371,
      name: "payback",
      displayName: "Payback",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 372,
      name: "assurance",
      displayName: "Assurance",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 373,
      name: "embargo",
      displayName: "Embargo",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 374,
      name: "fling",
      displayName: "Fling",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 375,
      name: "psychoshift",
      displayName: "Psycho Shift",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 376,
      name: "trumpcard",
      displayName: "Trump Card",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 377,
      name: "healblock",
      displayName: "Heal Block",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 378,
      name: "wringout",
      displayName: "Wring Out",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 379,
      name: "powertrick",
      displayName: "Power Trick",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 380,
      name: "gastroacid",
      displayName: "Gastro Acid",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 381,
      name: "luckychant",
      displayName: "Lucky Chant",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 382,
      name: "mefirst",
      displayName: "Me First",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 383,
      name: "copycat",
      displayName: "Copycat",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 384,
      name: "powerswap",
      displayName: "Power Swap",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 385,
      name: "guardswap",
      displayName: "Guard Swap",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 386,
      name: "punishment",
      displayName: "Punishment",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 387,
      name: "lastresort",
      displayName: "Last Resort",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 388,
      name: "worryseed",
      displayName: "Worry Seed",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 389,
      name: "suckerpunch",
      displayName: "Sucker Punch",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 390,
      name: "toxicspikes",
      displayName: "Toxic Spikes",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 391,
      name: "heartswap",
      displayName: "Heart Swap",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 392,
      name: "aquaring",
      displayName: "Aqua Ring",
      type: Type.Water,
      category: MoveCategory.Status
    },
    {
      number: 393,
      name: "magnetrise",
      displayName: "Magnet Rise",
      type: Type.Electric,
      category: MoveCategory.Status
    },
    {
      number: 394,
      name: "flareblitz",
      displayName: "Flare Blitz",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 395,
      name: "forcepalm",
      displayName: "Force Palm",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 396,
      name: "aurasphere",
      displayName: "Aura Sphere",
      type: Type.Fighting,
      category: MoveCategory.Special
    },
    {
      number: 397,
      name: "rockpolish",
      displayName: "Rock Polish",
      type: Type.Rock,
      category: MoveCategory.Status
    },
    {
      number: 398,
      name: "poisonjab",
      displayName: "Poison Jab",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 399,
      name: "darkpulse",
      displayName: "Dark Pulse",
      type: Type.Dark,
      category: MoveCategory.Special
    },
    {
      number: 400,
      name: "nightslash",
      displayName: "Night Slash",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 401,
      name: "aquatail",
      displayName: "Aqua Tail",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 402,
      name: "seedbomb",
      displayName: "Seed Bomb",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 403,
      name: "airslash",
      displayName: "Air Slash",
      type: Type.Flying,
      category: MoveCategory.Special
    },
    {
      number: 404,
      name: "xscissor",
      displayName: "X-Scissor",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 405,
      name: "bugbuzz",
      displayName: "Bug Buzz",
      type: Type.Bug,
      category: MoveCategory.Special
    },
    {
      number: 406,
      name: "dragonpulse",
      displayName: "Dragon Pulse",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 407,
      name: "dragonrush",
      displayName: "Dragon Rush",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 408,
      name: "powergem",
      displayName: "Power Gem",
      type: Type.Rock,
      category: MoveCategory.Special
    },
    {
      number: 409,
      name: "drainpunch",
      displayName: "Drain Punch",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 410,
      name: "vacuumwave",
      displayName: "Vacuum Wave",
      type: Type.Fighting,
      category: MoveCategory.Special
    },
    {
      number: 411,
      name: "focusblast",
      displayName: "Focus Blast",
      type: Type.Fighting,
      category: MoveCategory.Special
    },
    {
      number: 412,
      name: "energyball",
      displayName: "Energy Ball",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 413,
      name: "bravebird",
      displayName: "Brave Bird",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 414,
      name: "earthpower",
      displayName: "Earth Power",
      type: Type.Ground,
      category: MoveCategory.Special
    },
    {
      number: 415,
      name: "switcheroo",
      displayName: "Switcheroo",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 416,
      name: "gigaimpact",
      displayName: "Giga Impact",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 417,
      name: "nastyplot",
      displayName: "Nasty Plot",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 418,
      name: "bulletpunch",
      displayName: "Bullet Punch",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 419,
      name: "avalanche",
      displayName: "Avalanche",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 420,
      name: "iceshard",
      displayName: "Ice Shard",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 421,
      name: "shadowclaw",
      displayName: "Shadow Claw",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 422,
      name: "thunderfang",
      displayName: "Thunder Fang",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 423,
      name: "icefang",
      displayName: "Ice Fang",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 424,
      name: "firefang",
      displayName: "Fire Fang",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 425,
      name: "shadowsneak",
      displayName: "Shadow Sneak",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 426,
      name: "mudbomb",
      displayName: "Mud Bomb",
      type: Type.Ground,
      category: MoveCategory.Special
    },
    {
      number: 427,
      name: "psychocut",
      displayName: "Psycho Cut",
      type: Type.Psychic,
      category: MoveCategory.Physical
    },
    {
      number: 428,
      name: "zenheadbutt",
      displayName: "Zen Headbutt",
      type: Type.Psychic,
      category: MoveCategory.Physical
    },
    {
      number: 429,
      name: "mirrorshot",
      displayName: "Mirror Shot",
      type: Type.Steel,
      category: MoveCategory.Special
    },
    {
      number: 430,
      name: "flashcannon",
      displayName: "Flash Cannon",
      type: Type.Steel,
      category: MoveCategory.Special
    },
    {
      number: 431,
      name: "rockclimb",
      displayName: "Rock Climb",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 432,
      name: "defog",
      displayName: "Defog",
      type: Type.Flying,
      category: MoveCategory.Status
    },
    {
      number: 433,
      name: "trickroom",
      displayName: "Trick Room",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 434,
      name: "dracometeor",
      displayName: "Draco Meteor",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 435,
      name: "discharge",
      displayName: "Discharge",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 436,
      name: "lavaplume",
      displayName: "Lava Plume",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 437,
      name: "leafstorm",
      displayName: "Leaf Storm",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 438,
      name: "powerwhip",
      displayName: "Power Whip",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 439,
      name: "rockwrecker",
      displayName: "Rock Wrecker",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 440,
      name: "crosspoison",
      displayName: "Cross Poison",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 441,
      name: "gunkshot",
      displayName: "Gunk Shot",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 442,
      name: "ironhead",
      displayName: "Iron Head",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 443,
      name: "magnetbomb",
      displayName: "Magnet Bomb",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 444,
      name: "stoneedge",
      displayName: "Stone Edge",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 445,
      name: "captivate",
      displayName: "Captivate",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 446,
      name: "stealthrock",
      displayName: "Stealth Rock",
      type: Type.Rock,
      category: MoveCategory.Status
    },
    {
      number: 447,
      name: "grassknot",
      displayName: "Grass Knot",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 448,
      name: "chatter",
      displayName: "Chatter",
      type: Type.Flying,
      category: MoveCategory.Special
    },
    {
      number: 449,
      name: "judgment",
      displayName: "Judgment",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 450,
      name: "bugbite",
      displayName: "Bug Bite",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 451,
      name: "chargebeam",
      displayName: "Charge Beam",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 452,
      name: "woodhammer",
      displayName: "Wood Hammer",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 453,
      name: "aquajet",
      displayName: "Aqua Jet",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 454,
      name: "attackorder",
      displayName: "Attack Order",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 455,
      name: "defendorder",
      displayName: "Defend Order",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 456,
      name: "healorder",
      displayName: "Heal Order",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 457,
      name: "headsmash",
      displayName: "Head Smash",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 458,
      name: "doublehit",
      displayName: "Double Hit",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 459,
      name: "roaroftime",
      displayName: "Roar of Time",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 460,
      name: "spacialrend",
      displayName: "Spacial Rend",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 461,
      name: "lunardance",
      displayName: "Lunar Dance",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 462,
      name: "crushgrip",
      displayName: "Crush Grip",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 463,
      name: "magmastorm",
      displayName: "Magma Storm",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 464,
      name: "darkvoid",
      displayName: "Dark Void",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 465,
      name: "seedflare",
      displayName: "Seed Flare",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 466,
      name: "ominouswind",
      displayName: "Ominous Wind",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 467,
      name: "shadowforce",
      displayName: "Shadow Force",
      type: Type.Ghost,
      category: MoveCategory.Physical
    }
  ],
  pokemon: [
    {
      dex: 387,
      name: "turtwig",
      displayName: "Turtwig",
      type: Type.Grass
    },
    {
      dex: 388,
      name: "grotle",
      displayName: "Grotle",
      type: Type.Grass
    },
    {
      dex: 389,
      name: "torterra",
      displayName: "Torterra",
      type: Type.Grass,
      type2: Type.Ground
    },
    {
      dex: 390,
      name: "chimchar",
      displayName: "Chimchar",
      type: Type.Fire
    },
    {
      dex: 391,
      name: "monferno",
      displayName: "Monferno",
      type: Type.Fire,
      type2: Type.Fighting
    },
    {
      dex: 392,
      name: "infernape",
      displayName: "Infernape",
      type: Type.Fire,
      type2: Type.Fighting
    },
    {
      dex: 393,
      name: "piplup",
      displayName: "Piplup",
      type: Type.Water
    },
    {
      dex: 394,
      name: "prinplup",
      displayName: "Prinplup",
      type: Type.Water
    },
    {
      dex: 395,
      name: "empoleon",
      displayName: "Empoleon",
      type: Type.Water,
      type2: Type.Steel
    },
    {
      dex: 396,
      name: "starly",
      displayName: "Starly",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 397,
      name: "staravia",
      displayName: "Staravia",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 398,
      name: "staraptor",
      displayName: "Staraptor",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 399,
      name: "bidoof",
      displayName: "Bidoof",
      type: Type.Normal
    },
    {
      dex: 400,
      name: "bibarel",
      displayName: "Bibarel",
      type: Type.Normal,
      type2: Type.Water
    },
    {
      dex: 401,
      name: "kricketot",
      displayName: "Kricketot",
      type: Type.Bug
    },
    {
      dex: 402,
      name: "kricketune",
      displayName: "Kricketune",
      type: Type.Bug
    },
    {
      dex: 403,
      name: "shinx",
      displayName: "Shinx",
      type: Type.Electric
    },
    {
      dex: 404,
      name: "luxio",
      displayName: "Luxio",
      type: Type.Electric
    },
    {
      dex: 405,
      name: "luxray",
      displayName: "Luxray",
      type: Type.Electric
    },
    {
      dex: 406,
      name: "budew",
      displayName: "Budew",
      type: Type.Grass,
      type2: Type.Poison,
      category: PokemonCategory.Baby
    },
    {
      dex: 407,
      name: "roserade",
      displayName: "Roserade",
      type: Type.Grass,
      type2: Type.Poison
    },
    {
      dex: 408,
      name: "cranidos",
      displayName: "Cranidos",
      type: Type.Rock,
      category: PokemonCategory.Fossil
    },
    {
      dex: 409,
      name: "rampardos",
      displayName: "Rampardos",
      type: Type.Rock,
      category: PokemonCategory.Fossil
    },
    {
      dex: 410,
      name: "shieldon",
      displayName: "Shieldon",
      type: Type.Rock,
      type2: Type.Steel,
      category: PokemonCategory.Fossil
    },
    {
      dex: 411,
      name: "bastiodon",
      displayName: "Bastiodon",
      type: Type.Rock,
      type2: Type.Steel,
      category: PokemonCategory.Fossil
    },
    {
      dex: 412,
      name: "burmy",
      displayName: "Burmy",
      type: Type.Bug
    },
    {
      dex: 413,
      name: "wormadam",
      img: "wormadam-plant",
      displayName: "Wormadam",
      type: Type.Bug,
      type2: Type.Varies,
      noDefaultForm: true
    },
    {
      dex: 413,
      name: "wormadam",
      img: "wormadam-plant",
      displayName: "Plant Cloak Wormadam",
      type: Type.Bug,
      type2: Type.Grass,
      isVariant: true
    },
    {
      dex: 413,
      name: "wormadam",
      img: "wormadam-sandy",
      displayName: "Sandy Cloak Wormadam",
      type: Type.Bug,
      type2: Type.Ground,
      isVariant: true
    },
    {
      dex: 413,
      name: "wormadam",
      img: "wormadam-trash",
      displayName: "Trash Cloak Wormadam",
      type: Type.Bug,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 414,
      name: "mothim",
      displayName: "Mothim",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 415,
      name: "combee",
      displayName: "Combee",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 416,
      name: "vespiquen",
      displayName: "Vespiquen",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 417,
      name: "pachirisu",
      displayName: "Pachirisu",
      type: Type.Electric
    },
    {
      dex: 418,
      name: "buizel",
      displayName: "Buizel",
      type: Type.Water
    },
    {
      dex: 419,
      name: "floatzel",
      displayName: "Floatzel",
      type: Type.Water
    },
    {
      dex: 420,
      name: "cherubi",
      displayName: "Cherubi",
      type: Type.Grass
    },
    {
      dex: 421,
      name: "cherrim",
      displayName: "Cherrim",
      type: Type.Grass
    },
    {
      dex: 422,
      name: "shellos",
      displayName: "Shellos",
      type: Type.Water
    },
    {
      dex: 423,
      name: "gastrodon",
      displayName: "Gastrodon",
      type: Type.Water,
      type2: Type.Ground
    },
    {
      dex: 424,
      name: "ambipom",
      displayName: "Ambipom",
      type: Type.Normal
    },
    {
      dex: 425,
      name: "drifloon",
      displayName: "Drifloon",
      type: Type.Ghost,
      type2: Type.Flying
    },
    {
      dex: 426,
      name: "drifblim",
      displayName: "Drifblim",
      type: Type.Ghost,
      type2: Type.Flying
    },
    {
      dex: 427,
      name: "buneary",
      displayName: "Buneary",
      type: Type.Normal
    },
    {
      dex: 428,
      name: "lopunny",
      displayName: "Lopunny",
      type: Type.Normal
    },
    {
      dex: 428,
      name: "lopunny",
      img: "lopunny-mega",
      displayName: "Mega Lopunny",
      type: Type.Normal,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 429,
      name: "mismagius",
      displayName: "Mismagius",
      type: Type.Ghost
    },
    {
      dex: 430,
      name: "honchkrow",
      displayName: "Honchkrow",
      type: Type.Dark,
      type2: Type.Flying
    },
    {
      dex: 431,
      name: "glameow",
      displayName: "Glameow",
      type: Type.Normal
    },
    {
      dex: 432,
      name: "purugly",
      displayName: "Purugly",
      type: Type.Normal
    },
    {
      dex: 433,
      name: "chingling",
      displayName: "Chingling",
      type: Type.Psychic,
      category: PokemonCategory.Baby
    },
    {
      dex: 434,
      name: "stunky",
      displayName: "Stunky",
      type: Type.Poison,
      type2: Type.Dark
    },
    {
      dex: 435,
      name: "skuntank",
      displayName: "Skuntank",
      type: Type.Poison,
      type2: Type.Dark
    },
    {
      dex: 436,
      name: "bronzor",
      displayName: "Bronzor",
      type: Type.Steel,
      type2: Type.Psychic
    },
    {
      dex: 437,
      name: "bronzong",
      displayName: "Bronzong",
      type: Type.Steel,
      type2: Type.Psychic
    },
    {
      dex: 438,
      name: "bonsly",
      displayName: "Bonsly",
      type: Type.Rock,
      category: PokemonCategory.Baby
    },
    {
      dex: 439,
      name: "mimejr",
      displayName: "Mime Jr.",
      type: Type.Psychic,
      type2: Type.Fairy,
      category: PokemonCategory.Baby
    },
    {
      dex: 440,
      name: "happiny",
      displayName: "Happiny",
      type: Type.Normal,
      category: PokemonCategory.Baby
    },
    {
      dex: 441,
      name: "chatot",
      displayName: "Chatot",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 442,
      name: "spiritomb",
      displayName: "Spiritomb",
      type: Type.Ghost,
      type2: Type.Dark
    },
    {
      dex: 443,
      name: "gible",
      displayName: "Gible",
      type: Type.Dragon,
      type2: Type.Ground
    },
    {
      dex: 444,
      name: "gabite",
      displayName: "Gabite",
      type: Type.Dragon,
      type2: Type.Ground
    },
    {
      dex: 445,
      name: "garchomp",
      displayName: "Garchomp",
      type: Type.Dragon,
      type2: Type.Ground
    },
    {
      dex: 445,
      name: "garchomp",
      img: "garchomp-mega",
      displayName: "Mega Garchomp",
      type: Type.Dragon,
      type2: Type.Ground,
      isVariant: true
    },
    {
      dex: 446,
      name: "munchlax",
      displayName: "Munchlax",
      type: Type.Normal,
      category: PokemonCategory.Baby
    },
    {
      dex: 447,
      name: "riolu",
      displayName: "Riolu",
      type: Type.Fighting,
      category: PokemonCategory.Baby
    },
    {
      dex: 448,
      name: "lucario",
      displayName: "Lucario",
      type: Type.Fighting,
      type2: Type.Steel
    },
    {
      dex: 448,
      name: "lucario",
      img: "lucario-mega",
      displayName: "Mega Lucario",
      type: Type.Fighting,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 449,
      name: "hippopotas",
      displayName: "Hippopotas",
      type: Type.Ground
    },
    {
      dex: 450,
      name: "hippowdon",
      displayName: "Hippowdon",
      type: Type.Ground
    },
    {
      dex: 451,
      name: "skorupi",
      displayName: "Skorupi",
      type: Type.Poison,
      type2: Type.Bug
    },
    {
      dex: 452,
      name: "drapion",
      displayName: "Drapion",
      type: Type.Poison,
      type2: Type.Dark
    },
    {
      dex: 453,
      name: "croagunk",
      displayName: "Croagunk",
      type: Type.Poison,
      type2: Type.Fighting
    },
    {
      dex: 454,
      name: "toxicroak",
      displayName: "Toxicroak",
      type: Type.Poison,
      type2: Type.Fighting
    },
    {
      dex: 455,
      name: "carnivine",
      displayName: "Carnivine",
      type: Type.Grass
    },
    {
      dex: 456,
      name: "finneon",
      displayName: "Finneon",
      type: Type.Water
    },
    {
      dex: 457,
      name: "lumineon",
      displayName: "Lumineon",
      type: Type.Water
    },
    {
      dex: 458,
      name: "mantyke",
      displayName: "Mantyke",
      type: Type.Water,
      type2: Type.Flying,
      category: PokemonCategory.Baby
    },
    {
      dex: 459,
      name: "snover",
      displayName: "Snover",
      type: Type.Grass,
      type2: Type.Ice
    },
    {
      dex: 460,
      name: "abomasnow",
      displayName: "Abomasnow",
      type: Type.Grass,
      type2: Type.Ice
    },
    {
      dex: 460,
      name: "abomasnow",
      img: "abomasnow-mega",
      displayName: "Mega Abomasnow",
      type: Type.Grass,
      type2: Type.Ice,
      isVariant: true
    },
    {
      dex: 461,
      name: "weavile",
      displayName: "Weavile",
      type: Type.Dark,
      type2: Type.Ice
    },
    {
      dex: 462,
      name: "magnezone",
      displayName: "Magnezone",
      type: Type.Electric,
      type2: Type.Steel
    },
    {
      dex: 463,
      name: "lickilicky",
      displayName: "Lickilicky",
      type: Type.Normal
    },
    {
      dex: 464,
      name: "rhyperior",
      displayName: "Rhyperior",
      type: Type.Ground,
      type2: Type.Rock
    },
    {
      dex: 465,
      name: "tangrowth",
      displayName: "Tangrowth",
      type: Type.Grass
    },
    {
      dex: 466,
      name: "electivire",
      displayName: "Electivire",
      type: Type.Electric
    },
    {
      dex: 467,
      name: "magmortar",
      displayName: "Magmortar",
      type: Type.Fire
    },
    {
      dex: 468,
      name: "togekiss",
      displayName: "Togekiss",
      type: Type.Fairy,
      type2: Type.Flying
    },
    {
      dex: 469,
      name: "yanmega",
      displayName: "Yanmega",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 470,
      name: "leafeon",
      displayName: "Leafeon",
      type: Type.Grass
    },
    {
      dex: 471,
      name: "glaceon",
      displayName: "Glaceon",
      type: Type.Ice
    },
    {
      dex: 472,
      name: "gliscor",
      displayName: "Gliscor",
      type: Type.Ground,
      type2: Type.Flying
    },
    {
      dex: 473,
      name: "mamoswine",
      displayName: "Mamoswine",
      type: Type.Ice,
      type2: Type.Ground
    },
    {
      dex: 474,
      name: "porygonz",
      displayName: "Porygon-Z",
      type: Type.Normal
    },
    {
      dex: 475,
      name: "gallade",
      displayName: "Gallade",
      type: Type.Psychic,
      type2: Type.Fighting
    },
    {
      dex: 475,
      name: "gallade",
      img: "gallade-mega",
      displayName: "Mega Gallade",
      type: Type.Psychic,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 476,
      name: "probopass",
      displayName: "Probopass",
      type: Type.Rock,
      type2: Type.Steel
    },
    {
      dex: 477,
      name: "dusknoir",
      displayName: "Dusknoir",
      type: Type.Ghost
    },
    {
      dex: 478,
      name: "froslass",
      displayName: "Froslass",
      type: Type.Ice,
      type2: Type.Ghost
    },
    {
      dex: 478,
      name: "froslass",
      img: "froslass-mega",
      displayName: "Mega Froslass",
      type: Type.Ice,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 479,
      name: "rotom",
      displayName: "Rotom",
      type: Type.Electric,
      type2: Type.Ghost
    },
    {
      dex: 479,
      name: "rotom",
      img: "rotom-heat",
      displayName: "Heat Rotom",
      type: Type.Electric,
      type2: Type.Fire,
      isVariant: true
    },
    {
      dex: 479,
      name: "rotom",
      img: "rotom-wash",
      displayName: "Wash Rotom",
      type: Type.Electric,
      type2: Type.Water,
      isVariant: true
    },
    {
      dex: 479,
      name: "rotom",
      img: "rotom-frost",
      displayName: "Frost Rotom",
      type: Type.Electric,
      type2: Type.Ice,
      isVariant: true
    },
    {
      dex: 479,
      name: "rotom",
      img: "rotom-fan",
      displayName: "Fan Rotom",
      type: Type.Electric,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 479,
      name: "rotom",
      img: "rotom-mow",
      displayName: "Mow Rotom",
      type: Type.Electric,
      type2: Type.Grass,
      isVariant: true
    },
    {
      dex: 480,
      name: "uxie",
      displayName: "Uxie",
      type: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 481,
      name: "mesprit",
      displayName: "Mesprit",
      type: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 482,
      name: "azelf",
      displayName: "Azelf",
      type: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 483,
      name: "dialga",
      displayName: "Dialga",
      type: Type.Steel,
      type2: Type.Dragon,
      category: PokemonCategory.Legendary
    },
    {
      dex: 484,
      name: "palkia",
      displayName: "Palkia",
      type: Type.Water,
      type2: Type.Dragon,
      category: PokemonCategory.Legendary
    },
    {
      dex: 485,
      name: "heatran",
      displayName: "Heatran",
      type: Type.Fire,
      type2: Type.Steel,
      category: PokemonCategory.Legendary
    },
    {
      dex: 486,
      name: "regigigas",
      displayName: "Regigigas",
      type: Type.Normal,
      category: PokemonCategory.Legendary
    },
    {
      dex: 487,
      name: "giratina",
      displayName: "Giratina",
      type: Type.Ghost,
      type2: Type.Dragon,
      category: PokemonCategory.Legendary
    },
    {
      dex: 488,
      name: "cresselia",
      displayName: "Cresselia",
      type: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 489,
      name: "phione",
      displayName: "Phione",
      type: Type.Water,
      category: PokemonCategory.Mythical
    },
    {
      dex: 490,
      name: "manaphy",
      displayName: "Manaphy",
      type: Type.Water,
      category: PokemonCategory.Mythical
    },
    {
      dex: 491,
      name: "darkrai",
      displayName: "Darkrai",
      type: Type.Dark,
      category: PokemonCategory.Mythical
    },
    {
      dex: 492,
      name: "shaymin",
      img: "shaymin-land",
      displayName: "Shaymin",
      type: Type.Grass,
      noDefaultForm: true,
      category: PokemonCategory.Mythical
    },
    {
      dex: 492,
      name: "shaymin",
      img: "shaymin-land",
      displayName: "Lande Forme Shaymin",
      type: Type.Grass,
      isVariant: true
    },
    {
      dex: 492,
      name: "shaymin",
      img: "shaymin-sky",
      displayName: "Sky Forme Shaymin",
      type: Type.Grass,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      displayName: "Arceus",
      type: Type.Normal,
      category: PokemonCategory.Mythical
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-fighting",
      displayName: "Fighting Arceus",
      type: Type.Fighting,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-flying",
      displayName: "Flying Arceus",
      type: Type.Flying,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-poison",
      displayName: "Poison Arceus",
      type: Type.Poison,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-ground",
      displayName: "Ground Arceus",
      type: Type.Ground,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-rock",
      displayName: "Rock Arceus",
      type: Type.Rock,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-bug",
      displayName: "Bug Arceus",
      type: Type.Bug,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-ghost",
      displayName: "Ghost Arceus",
      type: Type.Ghost,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-steel",
      displayName: "Steel Arceus",
      type: Type.Steel,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-fire",
      displayName: "Fire Arceus",
      type: Type.Fire,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-water",
      displayName: "Water Arceus",
      type: Type.Water,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-grass",
      displayName: "Grass Arceus",
      type: Type.Grass,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-electric",
      displayName: "Electric Arceus",
      type: Type.Electric,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-psychic",
      displayName: "Psychic Arceus",
      type: Type.Psychic,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-ice",
      displayName: "Ice Arceus",
      type: Type.Ice,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-dragon",
      displayName: "Dragon Arceus",
      type: Type.Dragon,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-dark",
      displayName: "Dark Arceus",
      type: Type.Dark,
      isVariant: true
    },
    {
      dex: 493,
      name: "arceus",
      img: "arceus-fairy",
      displayName: "Fairy Arceus",
      type: Type.Fairy,
      isVariant: true
    }
  ]
};
