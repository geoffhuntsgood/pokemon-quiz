import type { Generation } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export const gen5: Generation = {
  number: GenNumber.Five,
  abilities: [
    {
      number: 124,
      name: "pickpocket",
      displayName: "Pickpocket",
      description:
        "The Pokémon steals the held item from attackers that make direct contact with it."
    },
    {
      number: 125,
      name: "sheerforce",
      displayName: "Sheer Force",
      description:
        "Removes any additional effects from the Pokémon's moves, but increases the moves' power."
    },
    {
      number: 126,
      name: "contrary",
      displayName: "Contrary",
      description:
        "Reverses any stat changes affecting the Pokémon so that attempts to boost its stats instead lower them - and attempts to lower its stats will boost them."
    },
    {
      number: 127,
      name: "unnerve",
      displayName: "Unnerve",
      description: "Opposing Pokémon are unable to eat Berries."
    },
    {
      number: 128,
      name: "defiant",
      displayName: "Defiant",
      description:
        "If the Pokémon has any stat lowered by an opposing Pokémon, its Attack stat will be boosted sharply."
    },
    {
      number: 129,
      name: "defeatist",
      displayName: "Defeatist",
      description:
        "Halves the Pokémon's Attack and Sp. Atk stats when its HP drops to half or less."
    },
    {
      number: 130,
      name: "cursedbody",
      displayName: "Cursed Body",
      description: "May disable a move that has dealt damage to the Pokémon."
    },
    {
      number: 131,
      name: "healer",
      displayName: "Healer",
      description:
        "Sometimes cures the status conditions of the Pokémon's allies."
    },
    {
      number: 132,
      name: "friendguard",
      displayName: "Friend Guard",
      description: "Reduces damage dealt to allies."
    },
    {
      number: 133,
      name: "weakarmor",
      displayName: "Weak Armor",
      description:
        "The Pokémon's Defense stat is lowered when it takes damage from physical moves, but its Speed stat is sharply boosted."
    },
    {
      number: 134,
      name: "heavymetal",
      displayName: "Heavy Metal",
      description: "Doubles the Pokémon's weight."
    },
    {
      number: 135,
      name: "lightmetal",
      displayName: "Light Metal",
      description: "Halves the Pokémon's weight."
    },
    {
      number: 136,
      name: "multiscale",
      displayName: "Multiscale",
      description:
        "Reduces the amount of damage the Pokémon takes while its HP is full."
    },
    {
      number: 137,
      name: "toxicboost",
      displayName: "Toxic Boost",
      description: "Powers up physical moves when the Pokémon is poisoned.",
      isUnique: true
    },
    {
      number: 138,
      name: "flareboost",
      displayName: "Flare Boost",
      description: "Powers up special moves when the Pokémon is burned."
    },
    {
      number: 139,
      name: "harvest",
      displayName: "Harvest",
      description: "May create another Berry after one is used."
    },
    {
      number: 140,
      name: "telepathy",
      displayName: "Telepathy",
      description:
        "The Pokémon anticipates and dodges the attacks of its allies."
    },
    {
      number: 141,
      name: "moody",
      displayName: "Moody",
      description:
        "Every turn, one of the Pokémon's stats will be boosted sharply, but another stat will be lowered."
    },
    {
      number: 142,
      name: "overcoat",
      displayName: "Overcoat",
      description:
        "The Pokémon takes no damage from sandstorms. It is also protected from the effects of powders and spores."
    },
    {
      number: 143,
      name: "poisontouch",
      displayName: "Poison Touch",
      description: "May poison a target when the Pokémon makes contact."
    },
    {
      number: 144,
      name: "regenerator",
      displayName: "Regenerator",
      description:
        "The Pokémon has a little of its HP restored when withdrawn from battle."
    },
    {
      number: 145,
      name: "bigpecks",
      displayName: "Big Pecks",
      description: "Prevents the Pokémon from having its Defense stat lowered."
    },
    {
      number: 146,
      name: "sandrush",
      displayName: "Sand Rush",
      description: "Boosts the Pokémon's Speed stat in a sandstorm."
    },
    {
      number: 147,
      name: "wonderskin",
      displayName: "Wonder Skin",
      description: "Makes status moves more likely to miss the Pokémon."
    },
    {
      number: 148,
      name: "analytic",
      displayName: "Analytic",
      description:
        "Boosts the power of the Pokémon's move if it is the last to act that turn."
    },
    {
      number: 149,
      name: "illusion",
      displayName: "Illusion",
      description:
        "THe Pokémon fools opponents by entering battle disguised as the last Pokémon in its Trainer's party."
    },
    {
      number: 150,
      name: "imposter",
      displayName: "Imposter",
      description:
        "The Pokémon transforms itself into the Pokémon it's facing.",
      isUnique: true
    },
    {
      number: 151,
      name: "infiltrator",
      displayName: "Infiltrator",
      description:
        "THe Pokémon's moves are unaffected by the target's barriers, substitutes, and the like."
    },
    {
      number: 152,
      name: "mummy",
      displayName: "Mummy",
      description:
        "Contact with the Pokémon changes the attacker's Ability to this Ability."
    },
    {
      number: 153,
      name: "moxie",
      displayName: "Moxie",
      description:
        "When the Pokémon knocks out a target, its Attack stat is boosted."
    },
    {
      number: 154,
      name: "justified",
      displayName: "Justified",
      description:
        "When the Pokémon is hit by a Dark-type attack, its Attack stat is boosted."
    },
    {
      number: 155,
      name: "rattled",
      displayName: "Rattled",
      description:
        "The Pokémon gets scared when hit by a Dark-, Ghost-, or Bug-type attack or if intimidated, which boosts its Speed stat."
    },
    {
      number: 156,
      name: "magicbounce",
      displayName: "Magic Bounce",
      description:
        "The Pokémon reflects status moves instead of getting hit by them."
    },
    {
      number: 157,
      name: "sapsipper",
      displayName: "Sap Sipper",
      description:
        "The Pokémon takes no damage when hit by Grass-type moves. Instead, its Attack stat is boosted."
    },
    {
      number: 158,
      name: "prankster",
      displayName: "Prankster",
      description: "Gives priority to the Pokémon's status moves."
    },
    {
      number: 159,
      name: "sandforce",
      displayName: "Sand Force",
      description:
        "Boosts the power of Rock-, Ground-, and Steel-type moves in a sandstorm."
    },
    {
      number: 160,
      name: "ironbarbs",
      displayName: "Iron Barbs",
      description:
        "The Pokémon damages the attacker if it makes direct contact."
    },
    {
      number: 161,
      name: "zenmode",
      displayName: "Zen Mode",
      description:
        "Changes the Pokémon's shape when its HP drops to half or less."
    },
    {
      number: 162,
      name: "victorystar",
      displayName: "Victory Star",
      description: "Boosts the accuracy of the Pokémon and its allies.",
      isUnique: true
    },
    {
      number: 163,
      name: "turboblaze",
      displayName: "Turboblaze",
      description:
        "The Pokémon's moves are unimpeded by the Ability of the target."
    },
    {
      number: 164,
      name: "teravolt",
      displayName: "Teravolt",
      description:
        "The Pokémon's moves are unimpeded by the Ability of the target."
    }
  ],
  moves: [
    {
      number: 468,
      name: "honeclaws",
      displayName: "Hone Claws",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 469,
      name: "wideguard",
      displayName: "Wide Guard",
      type: Type.Rock,
      category: MoveCategory.Status
    },
    {
      number: 470,
      name: "guardsplit",
      displayName: "Guard Split",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 471,
      name: "powersplit",
      displayName: "Power Split",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 472,
      name: "wonderroom",
      displayName: "Wonder Room",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 473,
      name: "psyshock",
      displayName: "Psyshock",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 474,
      name: "venoshock",
      displayName: "Venoshock",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 475,
      name: "autotomize",
      displayName: "Autotomize",
      type: Type.Steel,
      category: MoveCategory.Status
    },
    {
      number: 476,
      name: "ragepowder",
      displayName: "Rage Powder",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 477,
      name: "telekinesis",
      displayName: "Telekinesis",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 478,
      name: "magicroom",
      displayName: "Magic Room",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 479,
      name: "smackdown",
      displayName: "Smack Down",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 480,
      name: "stormthrow",
      displayName: "Storm Throw",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 481,
      name: "flameburst",
      displayName: "Flame Burst",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 482,
      name: "sludgewave",
      displayName: "Sludge Wave",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 483,
      name: "quiverdance",
      displayName: "Quiver Dance",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 484,
      name: "heavyslam",
      displayName: "Heavy Slam",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 485,
      name: "synchronoise",
      displayName: "Synchronoise",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 486,
      name: "electroball",
      displayName: "Electro Ball",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 487,
      name: "soak",
      displayName: "Soak",
      type: Type.Water,
      category: MoveCategory.Status
    },
    {
      number: 488,
      name: "flamecharge",
      displayName: "Flame Charge",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 489,
      name: "coil",
      displayName: "Coil",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 490,
      name: "lowsweep",
      displayName: "Low Sweep",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 491,
      name: "acidspray",
      displayName: "Acid Spray",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 492,
      name: "foulplay",
      displayName: "Foul Play",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 493,
      name: "simplebeam",
      displayName: "Simple Beam",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 494,
      name: "entrainment",
      displayName: "Entrainment",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 495,
      name: "afteryou",
      displayName: "After You",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 496,
      name: "round",
      displayName: "Round",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 497,
      name: "echoedvoice",
      displayName: "Echoed Voice",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 498,
      name: "chipaway",
      displayName: "Chip Away",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 499,
      name: "clearsmog",
      displayName: "Clear Smog",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 500,
      name: "storedpower",
      displayName: "Stored Power",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 501,
      name: "quickguard",
      displayName: "Quick Guard",
      type: Type.Fighting,
      category: MoveCategory.Status
    },
    {
      number: 502,
      name: "allyswitch",
      displayName: "Ally Switch",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 503,
      name: "scald",
      displayName: "Scald",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 504,
      name: "shellsmash",
      displayName: "Shell Smash",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 505,
      name: "healpulse",
      displayName: "Heal Pulse",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 506,
      name: "hex",
      displayName: "Hex",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 507,
      name: "skydrop",
      displayName: "Sky Drop",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 508,
      name: "shiftgear",
      displayName: "Shift Gear",
      type: Type.Steel,
      category: MoveCategory.Status
    },
    {
      number: 509,
      name: "circlethrow",
      displayName: "Circle Throw",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 510,
      name: "incinerate",
      displayName: "Incinerate",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 511,
      name: "quash",
      displayName: "Quash",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 512,
      name: "acrobatics",
      displayName: "Acrobatics",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 513,
      name: "reflecttype",
      displayName: "Reflect Type",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 514,
      name: "retaliate",
      displayName: "Retaliate",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 515,
      name: "finalgambit",
      displayName: "Final Gambit",
      type: Type.Fighting,
      category: MoveCategory.Special
    },
    {
      number: 516,
      name: "bestow",
      displayName: "Bestow",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 517,
      name: "inferno",
      displayName: "Inferno",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 518,
      name: "waterpledge",
      displayName: "Water Pledge",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 519,
      name: "firepledge",
      displayName: "Fire Pledge",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 520,
      name: "grasspledge",
      displayName: "Grass Pledge",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 521,
      name: "voltswitch",
      displayName: "Volt Switch",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 522,
      name: "strugglebug",
      displayName: "Struggle Bug",
      type: Type.Bug,
      category: MoveCategory.Special
    },
    {
      number: 523,
      name: "bulldoze",
      displayName: "Bulldoze",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 524,
      name: "frostbreath",
      displayName: "Frost Breath",
      type: Type.Ice,
      category: MoveCategory.Special
    },
    {
      number: 525,
      name: "dragontail",
      displayName: "Dragon Tail",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 526,
      name: "workup",
      displayName: "Work Up",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 527,
      name: "electroweb",
      displayName: "Electroweb",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 528,
      name: "wildcharge",
      displayName: "Wild Charge",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 529,
      name: "drillrun",
      displayName: "Drill Run",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 530,
      name: "dualchop",
      displayName: "Dual Chop",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 531,
      name: "heartstamp",
      displayName: "Heart Stamp",
      type: Type.Psychic,
      category: MoveCategory.Physical
    },
    {
      number: 532,
      name: "hornleech",
      displayName: "Horn Leech",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 533,
      name: "sacredsword",
      displayName: "Sacred Sword",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 534,
      name: "razorshell",
      displayName: "Razor Shell",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 535,
      name: "heatcrash",
      displayName: "Heat Crash",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 536,
      name: "leaftornado",
      displayName: "Leaf Tornado",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 537,
      name: "steamroller",
      displayName: "Steamroller",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 538,
      name: "cottonguard",
      displayName: "Cotton Guard",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 539,
      name: "nightdaze",
      displayName: "Night Daze",
      type: Type.Dark,
      category: MoveCategory.Special
    },
    {
      number: 540,
      name: "psystrike",
      displayName: "Psystrike",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 541,
      name: "tailslap",
      displayName: "Tail Slap",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 542,
      name: "hurricane",
      displayName: "Hurricane",
      type: Type.Flying,
      category: MoveCategory.Special
    },
    {
      number: 543,
      name: "headcharge",
      displayName: "Head Charge",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 544,
      name: "geargrind",
      displayName: "Gear Grind",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 545,
      name: "searingshot",
      displayName: "Searing Shot",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 546,
      name: "technoblast",
      displayName: "Techno Blast",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 547,
      name: "relicsong",
      displayName: "Relic Song",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 548,
      name: "secretsword",
      displayName: "Secret Sword",
      type: Type.Fighting,
      category: MoveCategory.Special
    },
    {
      number: 549,
      name: "glaciate",
      displayName: "Glaciate",
      type: Type.Ice,
      category: MoveCategory.Special
    },
    {
      number: 550,
      name: "boltstrike",
      displayName: "Bolt Strike",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 551,
      name: "blueflare",
      displayName: "Blue Flare",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 552,
      name: "fierydance",
      displayName: "Fiery Dance",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 553,
      name: "freezeshock",
      displayName: "Freeze Shock",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 554,
      name: "iceburn",
      displayName: "Ice Burn",
      type: Type.Ice,
      category: MoveCategory.Special
    },
    {
      number: 555,
      name: "snarl",
      displayName: "Snarl",
      type: Type.Dark,
      category: MoveCategory.Special
    },
    {
      number: 556,
      name: "iciclecrash",
      displayName: "Icicle Crash",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 557,
      name: "vcreate",
      displayName: "V-create",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 558,
      name: "fusionflare",
      displayName: "Fusion Flare",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 559,
      name: "fusionbolt",
      displayName: "Fusion Bolt",
      type: Type.Electric,
      category: MoveCategory.Physical
    }
  ],
  pokemon: [
    {
      dex: 494,
      name: "victini",
      displayName: "Victini",
      type: Type.Psychic,
      type2: Type.Fire,
      category: PokemonCategory.Mythical
    },
    {
      dex: 495,
      name: "snivy",
      displayName: "Snivy",
      type: Type.Grass
    },
    {
      dex: 496,
      name: "servine",
      displayName: "Servine",
      type: Type.Grass
    },
    {
      dex: 497,
      name: "serperior",
      displayName: "Serperior",
      type: Type.Grass
    },
    {
      dex: 498,
      name: "tepig",
      displayName: "Tepig",
      type: Type.Fire
    },
    {
      dex: 499,
      name: "pignite",
      displayName: "Pignite",
      type: Type.Fire,
      type2: Type.Fighting
    },
    {
      dex: 500,
      name: "emboar",
      displayName: "Emboar",
      type: Type.Fire,
      type2: Type.Fighting
    },
    {
      dex: 500,
      name: "emboar",
      img: "emboar-mega",
      displayName: "Mega Emboar",
      type: Type.Fire,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 501,
      name: "oshawott",
      displayName: "Oshawott",
      type: Type.Water
    },
    {
      dex: 502,
      name: "dewott",
      displayName: "Dewott",
      type: Type.Water
    },
    {
      dex: 503,
      name: "samurott",
      displayName: "Samurott",
      type: Type.Water
    },
    {
      dex: 503,
      name: "samurott",
      img: "samurott-hisuian",
      displayName: "Hisuian Samurott",
      type: Type.Water,
      type2: Type.Dark,
      isVariant: true
    },
    {
      dex: 504,
      name: "patrat",
      displayName: "Patrat",
      type: Type.Normal
    },
    {
      dex: 505,
      name: "watchog",
      displayName: "Watchog",
      type: Type.Normal
    },
    {
      dex: 506,
      name: "lillipup",
      displayName: "Lillipup",
      type: Type.Normal
    },
    {
      dex: 507,
      name: "herdier",
      displayName: "Herdier",
      type: Type.Normal
    },
    {
      dex: 508,
      name: "stoutland",
      displayName: "Stoutland",
      type: Type.Normal
    },
    {
      dex: 509,
      name: "purrloin",
      displayName: "Purrloin",
      type: Type.Dark
    },
    {
      dex: 510,
      name: "liepard",
      displayName: "Liepard",
      type: Type.Dark
    },
    {
      dex: 511,
      name: "pansage",
      displayName: "Pansage",
      type: Type.Grass
    },
    {
      dex: 512,
      name: "simisage",
      displayName: "Simisage",
      type: Type.Grass
    },
    {
      dex: 513,
      name: "pansear",
      displayName: "Pansear",
      type: Type.Fire
    },
    {
      dex: 514,
      name: "simisear",
      displayName: "Simisear",
      type: Type.Fire
    },
    {
      dex: 515,
      name: "panpour",
      displayName: "Panpour",
      type: Type.Water
    },
    {
      dex: 516,
      name: "simipour",
      displayName: "Simipour",
      type: Type.Water
    },
    {
      dex: 517,
      name: "munna",
      displayName: "Munna",
      type: Type.Psychic
    },
    {
      dex: 518,
      name: "musharna",
      displayName: "Musharna",
      type: Type.Psychic
    },
    {
      dex: 519,
      name: "pidove",
      displayName: "Pidove",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 520,
      name: "tranquill",
      displayName: "Tranquill",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 521,
      name: "unfezant",
      displayName: "Unfezant",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 522,
      name: "blitzle",
      displayName: "Blitzle",
      type: Type.Electric
    },
    {
      dex: 523,
      name: "zebstrika",
      displayName: "Zebstrika",
      type: Type.Electric
    },
    {
      dex: 524,
      name: "roggenrola",
      displayName: "Roggenrola",
      type: Type.Rock
    },
    {
      dex: 525,
      name: "boldore",
      displayName: "Boldore",
      type: Type.Rock
    },
    {
      dex: 526,
      name: "gigalith",
      displayName: "Gigalith",
      type: Type.Rock
    },
    {
      dex: 527,
      name: "woobat",
      displayName: "Woobat",
      type: Type.Psychic,
      type2: Type.Flying
    },
    {
      dex: 528,
      name: "swoobat",
      displayName: "Swoobat",
      type: Type.Psychic,
      type2: Type.Flying
    },
    {
      dex: 529,
      name: "drilbur",
      displayName: "Drilbur",
      type: Type.Ground
    },
    {
      dex: 530,
      name: "excadrill",
      displayName: "Excadrill",
      type: Type.Ground,
      type2: Type.Steel
    },
    {
      dex: 530,
      name: "excadrill",
      img: "excadrill-mega",
      displayName: "Mega Excadrill",
      type: Type.Ground,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 531,
      name: "audino",
      displayName: "Audino",
      type: Type.Normal
    },
    {
      dex: 531,
      name: "audino",
      displayName: "Mega Audino",
      type: Type.Normal,
      type2: Type.Fairy,
      isVariant: true
    },
    {
      dex: 532,
      name: "timburr",
      displayName: "Timburr",
      type: Type.Fighting
    },
    {
      dex: 533,
      name: "gurdurr",
      displayName: "Gurdurr",
      type: Type.Fighting
    },
    {
      dex: 534,
      name: "conkeldurr",
      displayName: "Conkeldurr",
      type: Type.Fighting
    },
    {
      dex: 535,
      name: "tympole",
      displayName: "Tympole",
      type: Type.Water
    },
    {
      dex: 536,
      name: "palpitoad",
      displayName: "Palpitoad",
      type: Type.Water,
      type2: Type.Ground
    },
    {
      dex: 537,
      name: "seismitoad",
      displayName: "Seismitoad",
      type: Type.Water,
      type2: Type.Ground
    },
    {
      dex: 538,
      name: "throh",
      displayName: "Throh",
      type: Type.Fighting
    },
    {
      dex: 539,
      name: "sawk",
      displayName: "Sawk",
      type: Type.Fighting
    },
    {
      dex: 540,
      name: "sewaddle",
      displayName: "Sewaddle",
      type: Type.Bug,
      type2: Type.Grass
    },
    {
      dex: 541,
      name: "swadloon",
      displayName: "Swadloon",
      type: Type.Bug,
      type2: Type.Grass
    },
    {
      dex: 542,
      name: "leavanny",
      displayName: "Leavanny",
      type: Type.Bug,
      type2: Type.Grass
    },
    {
      dex: 543,
      name: "venipede",
      displayName: "Venipede",
      type: Type.Bug,
      type2: Type.Poison
    },
    {
      dex: 544,
      name: "whirlipede",
      displayName: "Whirlipede",
      type: Type.Bug,
      type2: Type.Poison
    },
    {
      dex: 545,
      name: "scolipede",
      displayName: "Scolipede",
      type: Type.Bug,
      type2: Type.Poison
    },
    {
      dex: 545,
      name: "scolipede",
      img: "scolipede-mega",
      displayName: "Mega Scolipede",
      type: Type.Bug,
      type2: Type.Poison,
      isVariant: true
    },
    {
      dex: 546,
      name: "cottonee",
      displayName: "Cottonee",
      type: Type.Grass,
      type2: Type.Fairy
    },
    {
      dex: 547,
      name: "whimsicott",
      displayName: "Whimsicott",
      type: Type.Grass,
      type2: Type.Fairy
    },
    {
      dex: 548,
      name: "petilil",
      displayName: "Petilil",
      type: Type.Grass
    },
    {
      dex: 549,
      name: "lilligant",
      displayName: "Lilligant",
      type: Type.Grass
    },
    {
      dex: 549,
      name: "lilligant",
      img: "lilligant-hisuian",
      displayName: "Hisuian Lilligant",
      type: Type.Grass,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 550,
      name: "basculin",
      displayName: "Basculin",
      type: Type.Water
    },
    {
      dex: 551,
      name: "sandile",
      displayName: "Sandile",
      type: Type.Ground,
      type2: Type.Dark
    },
    {
      dex: 552,
      name: "krokorok",
      displayName: "Krokorok",
      type: Type.Ground,
      type2: Type.Dark
    },
    {
      dex: 553,
      name: "krookodile",
      displayName: "Krookodile",
      type: Type.Ground,
      type2: Type.Dark
    },
    {
      dex: 554,
      name: "darumaka",
      displayName: "Darumaka",
      type: Type.Fire
    },
    {
      dex: 554,
      name: "darumaka",
      img: "darumaka-galarian",
      displayName: "Galarian Darumaka",
      type: Type.Ice,
      isVariant: true
    },
    {
      dex: 555,
      name: "darmanitan",
      displayName: "Darmanitan",
      type: Type.Fire
    },
    {
      dex: 555,
      name: "darmanitan",
      img: "darmanitan-zen",
      displayName: "Zen Mode Darmanitan",
      type: Type.Fire,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 555,
      name: "darmanitan",
      img: "darmanitan-galarian",
      displayName: "Galarian Darmanitan",
      type: Type.Ice,
      isVariant: true
    },
    {
      dex: 555,
      name: "darmanitan",
      img: "darmanitan-galarianzen",
      displayName: "Galarian Zen Mode Darmanitan",
      type: Type.Ice,
      type2: Type.Fire,
      isVariant: true
    },
    {
      dex: 556,
      name: "maractus",
      displayName: "Maractus",
      type: Type.Grass
    },
    {
      dex: 557,
      name: "dwebble",
      displayName: "Dwebble",
      type: Type.Bug,
      type2: Type.Rock
    },
    {
      dex: 558,
      name: "crustle",
      displayName: "Crustle",
      type: Type.Bug,
      type2: Type.Rock
    },
    {
      dex: 559,
      name: "scraggy",
      displayName: "Scraggy",
      type: Type.Dark,
      type2: Type.Fighting
    },
    {
      dex: 560,
      name: "scrafty",
      displayName: "Scrafty",
      type: Type.Dark,
      type2: Type.Fighting
    },
    {
      dex: 560,
      name: "scrafty",
      img: "scrafty-mega",
      displayName: "Mega Scrafty",
      type: Type.Dark,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 561,
      name: "sigilyph",
      displayName: "Sigilyph",
      type: Type.Psychic,
      type2: Type.Flying
    },
    {
      dex: 562,
      name: "yamask",
      displayName: "Yamask",
      type: Type.Ghost
    },
    {
      dex: 562,
      name: "yamask",
      img: "yamask-galarian",
      displayName: "Galarian Yamask",
      type: Type.Ground,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 563,
      name: "cofagrigus",
      displayName: "Cofagrigus",
      type: Type.Ghost
    },
    {
      dex: 564,
      name: "tirtouga",
      displayName: "Tirtouga",
      type: Type.Water,
      type2: Type.Rock,
      category: PokemonCategory.Fossil
    },
    {
      dex: 565,
      name: "carracosta",
      displayName: "Carracosta",
      type: Type.Water,
      type2: Type.Rock,
      category: PokemonCategory.Fossil
    },
    {
      dex: 566,
      name: "archen",
      displayName: "Archen",
      type: Type.Rock,
      type2: Type.Flying,
      category: PokemonCategory.Fossil
    },
    {
      dex: 567,
      name: "archeops",
      displayName: "Archeops",
      type: Type.Rock,
      type2: Type.Flying,
      category: PokemonCategory.Fossil
    },
    {
      dex: 568,
      name: "trubbish",
      displayName: "Trubbish",
      type: Type.Poison
    },
    {
      dex: 569,
      name: "garbodor",
      displayName: "Garbodor",
      type: Type.Poison
    },
    {
      dex: 569,
      name: "garbodor",
      img: "garbodor-gmax",
      displayName: "Gigantamax Garbodor",
      type: Type.Poison,
      isVariant: true
    },
    {
      dex: 570,
      name: "zorua",
      displayName: "Zorua",
      type: Type.Dark
    },
    {
      dex: 570,
      name: "zorua",
      img: "zorua-hisuian",
      displayName: "Hisuian Zorua",
      type: Type.Normal,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 571,
      name: "zoroark",
      displayName: "Zoroark",
      type: Type.Dark
    },
    {
      dex: 571,
      name: "zoroark",
      img: "zoroark-hisuian",
      displayName: "Hisuian Zoroark",
      type: Type.Normal,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 572,
      name: "minccino",
      displayName: "Minccino",
      type: Type.Normal
    },
    {
      dex: 573,
      name: "cinccino",
      displayName: "CinccinO",
      type: Type.Normal
    },
    {
      dex: 574,
      name: "gothita",
      displayName: "Gothita",
      type: Type.Psychic
    },
    {
      dex: 575,
      name: "gothorita",
      displayName: "Gothorita",
      type: Type.Psychic
    },
    {
      dex: 576,
      name: "gothitelle",
      displayName: "Gothitelle",
      type: Type.Psychic
    },
    {
      dex: 577,
      name: "solosis",
      displayName: "Solosis",
      type: Type.Psychic
    },
    {
      dex: 578,
      name: "duosion",
      displayName: "Duosion",
      type: Type.Psychic
    },
    {
      dex: 579,
      name: "reuniclus",
      displayName: "Reuniclus",
      type: Type.Psychic
    },
    {
      dex: 580,
      name: "ducklett",
      displayName: "Ducklett",
      type: Type.Water,
      type2: Type.Flying
    },
    {
      dex: 581,
      name: "swanna",
      displayName: "Swanna",
      type: Type.Water,
      type2: Type.Flying
    },
    {
      dex: 582,
      name: "vanillite",
      displayName: "Vanillite",
      type: Type.Ice
    },
    {
      dex: 583,
      name: "vanillish",
      displayName: "Vanillish",
      type: Type.Ice
    },
    {
      dex: 584,
      name: "vanilluxe",
      displayName: "Vanilluxe",
      type: Type.Ice
    },
    {
      dex: 585,
      name: "deerling",
      displayName: "Deerling",
      type: Type.Normal,
      type2: Type.Grass
    },
    {
      dex: 586,
      name: "sawsbuck",
      displayName: "Sawsbuck",
      type: Type.Normal,
      type2: Type.Grass
    },
    {
      dex: 587,
      name: "emolga",
      displayName: "Emolga",
      type: Type.Electric,
      type2: Type.Flying
    },
    {
      dex: 588,
      name: "karrablast",
      displayName: "Karrablast",
      type: Type.Bug
    },
    {
      dex: 589,
      name: "escavalier",
      displayName: "Escavalier",
      type: Type.Bug,
      type2: Type.Steel
    },
    {
      dex: 590,
      name: "foongus",
      displayName: "Foongus",
      type: Type.Grass,
      type2: Type.Poison
    },
    {
      dex: 591,
      name: "amoonguss",
      displayName: "Amoonguss",
      type: Type.Grass,
      type2: Type.Poison
    },
    {
      dex: 592,
      name: "frillish",
      displayName: "Frillish",
      type: Type.Water,
      type2: Type.Ghost
    },
    {
      dex: 593,
      name: "jellicent",
      displayName: "Jellicent",
      type: Type.Water,
      type2: Type.Ghost
    },
    {
      dex: 594,
      name: "alomomola",
      displayName: "Alomomola",
      type: Type.Water
    },
    {
      dex: 595,
      name: "joltik",
      displayName: "Joltik",
      type: Type.Bug,
      type2: Type.Electric
    },
    {
      dex: 596,
      name: "galvantula",
      displayName: "Galvantula",
      type: Type.Bug,
      type2: Type.Electric
    },
    {
      dex: 597,
      name: "ferroseed",
      displayName: "Ferroseed",
      type: Type.Grass,
      type2: Type.Steel
    },
    {
      dex: 598,
      name: "ferrothorn",
      displayName: "Ferrothorn",
      type: Type.Grass,
      type2: Type.Steel
    },
    {
      dex: 599,
      name: "klink",
      displayName: "Klink",
      type: Type.Steel
    },
    {
      dex: 600,
      name: "klang",
      displayName: "Klang",
      type: Type.Steel
    },
    {
      dex: 601,
      name: "klinklang",
      displayName: "Klinklang",
      type: Type.Steel
    },
    {
      dex: 602,
      name: "tynamo",
      displayName: "Tynamo",
      type: Type.Electric
    },
    {
      dex: 603,
      name: "eelektrik",
      displayName: "Eelektrik",
      type: Type.Electric
    },
    {
      dex: 604,
      name: "eelektross",
      displayName: "Eelektross",
      type: Type.Electric
    },
    {
      dex: 604,
      name: "eelektross",
      img: "eelektross-mega",
      displayName: "Mega Eelektross",
      type: Type.Electric,
      isVariant: true
    },
    {
      dex: 605,
      name: "elgyem",
      displayName: "Elgyem",
      type: Type.Psychic
    },
    {
      dex: 606,
      name: "beheeyem",
      displayName: "Beheeyem",
      type: Type.Psychic
    },
    {
      dex: 607,
      name: "litwick",
      displayName: "Litwick",
      type: Type.Ghost,
      type2: Type.Fire
    },
    {
      dex: 608,
      name: "lampent",
      displayName: "Lampent",
      type: Type.Ghost,
      type2: Type.Fire
    },
    {
      dex: 609,
      name: "chandelure",
      displayName: "Chandelure",
      type: Type.Ghost,
      type2: Type.Fire
    },
    {
      dex: 609,
      name: "chandelure",
      img: "chandelure-mega",
      displayName: "Mega Chandelure",
      type: Type.Ghost,
      type2: Type.Fire,
      isVariant: true
    },
    {
      dex: 610,
      name: "axew",
      displayName: "Axew",
      type: Type.Dragon
    },
    {
      dex: 611,
      name: "fraxure",
      displayName: "Fraxure",
      type: Type.Dragon
    },
    {
      dex: 612,
      name: "haxorus",
      displayName: "Haxorus",
      type: Type.Dragon
    },
    {
      dex: 613,
      name: "cubchoo",
      displayName: "Cubchoo",
      type: Type.Ice
    },
    {
      dex: 614,
      name: "beartic",
      displayName: "Beartic",
      type: Type.Ice
    },
    {
      dex: 615,
      name: "cryogonal",
      displayName: "Cryogonal",
      type: Type.Ice
    },
    {
      dex: 616,
      name: "shelmet",
      displayName: "Shelmet",
      type: Type.Bug
    },
    {
      dex: 617,
      name: "accelgor",
      displayName: "Accelgor",
      type: Type.Bug
    },
    {
      dex: 618,
      name: "stunfisk",
      displayName: "Stunfisk",
      type: Type.Ground,
      type2: Type.Electric
    },
    {
      dex: 618,
      name: "stunfisk",
      img: "stunfisk-galarian",
      displayName: "Galarian Stunfisk",
      type: Type.Ground,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 619,
      name: "mienfoo",
      displayName: "Mienfoo",
      type: Type.Fighting
    },
    {
      dex: 620,
      name: "mienshao",
      displayName: "Mienshao",
      type: Type.Fighting
    },
    {
      dex: 621,
      name: "druddigon",
      displayName: "Druddigon",
      type: Type.Dragon
    },
    {
      dex: 622,
      name: "golett",
      displayName: "Golett",
      type: Type.Ground,
      type2: Type.Ghost
    },
    {
      dex: 623,
      name: "golurk",
      displayName: "Golurk",
      type: Type.Ground,
      type2: Type.Ghost
    },
    {
      dex: 624,
      name: "pawniard",
      displayName: "Pawniard",
      type: Type.Dark,
      type2: Type.Steel
    },
    {
      dex: 625,
      name: "bisharp",
      displayName: "Bisharp",
      type: Type.Dark,
      type2: Type.Steel
    },
    {
      dex: 626,
      name: "bouffalant",
      displayName: "Bouffalant",
      type: Type.Normal
    },
    {
      dex: 627,
      name: "rufflet",
      displayName: "Rufflet",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 628,
      name: "braviary",
      displayName: "Braviary",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 628,
      name: "braviary",
      img: "braviary-hisuian",
      displayName: "Hisuian Braviary",
      type: Type.Psychic,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 629,
      name: "vullaby",
      displayName: "Vullaby",
      type: Type.Dark,
      type2: Type.Flying
    },
    {
      dex: 630,
      name: "mandibuzz",
      displayName: "Mandibuzz",
      type: Type.Dark,
      type2: Type.Flying
    },
    {
      dex: 631,
      name: "heatmor",
      displayName: "Heatmor",
      type: Type.Fire
    },
    {
      dex: 632,
      name: "durant",
      displayName: "Durant",
      type: Type.Bug,
      type2: Type.Steel
    },
    {
      dex: 633,
      name: "deino",
      displayName: "Deino",
      type: Type.Dark,
      type2: Type.Dragon
    },
    {
      dex: 634,
      name: "zweilous",
      displayName: "Zweilous",
      type: Type.Dark,
      type2: Type.Dragon
    },
    {
      dex: 635,
      name: "hydreigon",
      displayName: "Hydreigon",
      type: Type.Dark,
      type2: Type.Dragon
    },
    {
      dex: 636,
      name: "larvesta",
      displayName: "Larvesta",
      type: Type.Bug,
      type2: Type.Fire
    },
    {
      dex: 637,
      name: "volcarona",
      displayName: "Volcarona",
      type: Type.Bug,
      type2: Type.Fire
    },
    {
      dex: 638,
      name: "cobalion",
      displayName: "Cobalion",
      type: Type.Steel,
      type2: Type.Fighting,
      category: PokemonCategory.Legendary
    },
    {
      dex: 639,
      name: "terrakion",
      displayName: "Terrakion",
      type: Type.Rock,
      type2: Type.Fighting,
      category: PokemonCategory.Legendary
    },
    {
      dex: 640,
      name: "virizion",
      displayName: "Virizion",
      type: Type.Grass,
      type2: Type.Fighting,
      category: PokemonCategory.Legendary
    },
    {
      dex: 641,
      name: "tornadus",
      displayName: "Tornadus",
      type: Type.Flying,
      category: PokemonCategory.Legendary
    },
    {
      dex: 642,
      name: "thundurus",
      displayName: "Thundurus",
      type: Type.Electric,
      type2: Type.Flying,
      category: PokemonCategory.Legendary
    },
    {
      dex: 643,
      name: "reshiram",
      displayName: "Reshiram",
      type: Type.Dragon,
      type2: Type.Fire,
      category: PokemonCategory.Legendary
    },
    {
      dex: 644,
      name: "zekrom",
      displayName: "Zekrom",
      type: Type.Dragon,
      type2: Type.Electric,
      category: PokemonCategory.Legendary
    },
    {
      dex: 645,
      name: "landorus",
      displayName: "Landorus",
      type: Type.Ground,
      type2: Type.Flying,
      category: PokemonCategory.Legendary
    },
    {
      dex: 646,
      name: "kyurem",
      displayName: "Kyurem",
      type: Type.Dragon,
      type2: Type.Ice,
      category: PokemonCategory.Legendary
    },
    {
      dex: 647,
      name: "keldeo",
      displayName: "Keldeo",
      type: Type.Water,
      type2: Type.Fighting,
      category: PokemonCategory.Mythical
    },
    {
      dex: 648,
      name: "meloetta",
      img: "meloetta-aria",
      displayName: "Meloetta",
      type: Type.Normal,
      type2: Type.Varies,
      noDefaultForm: true,
      category: PokemonCategory.Mythical
    },
    {
      dex: 648,
      name: "meloetta",
      img: "meloetta-aria",
      displayName: "Aria Forme Meloetta",
      type: Type.Normal,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 648,
      name: "meloetta",
      img: "meloetta-pirouette",
      displayName: "Pirouette Forme Meloetta",
      type: Type.Normal,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 649,
      name: "genesect",
      displayName: "Genesect",
      type: Type.Bug,
      type2: Type.Steel,
      category: PokemonCategory.Mythical
    }
  ]
};
