import type { Generation } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export const gen7: Generation = {
  number: GenNumber.Seven,
  abilities: [
    {
      number: 192,
      name: "stamina",
      displayName: "Stamina",
      description:
        "Boosts the Defense stat when the Pokémon is hit by an attack."
    },
    {
      number: 193,
      name: "wimpout",
      displayName: "Wimp Out",
      description:
        "The Pokémon cowardly switches out when its HP drops to half or less.",
      isUnique: true
    },
    {
      number: 194,
      name: "emergencyexit",
      displayName: "Emergency Exit",
      description:
        "The Pokémon, sensing danger, switches out when its HP drops to half or less."
    },
    {
      number: 195,
      name: "watercompaction",
      displayName: "Water Compaction",
      description:
        "Boosts the Defense stat sharply when the Pokémon is hit by a Water-type move."
    },
    {
      number: 196,
      name: "merciless",
      displayName: "Merciless",
      description:
        "The Pokémon's attacks become critical hits if the target is poisoned."
    },
    {
      number: 197,
      name: "shieldsdown",
      displayName: "Shields Down",
      description:
        "When its HP drops to half or less, the Pokémon's shell breaks and it becomes aggressive."
    },
    {
      number: 198,
      name: "stakeout",
      displayName: "Stakeout",
      description:
        "Doubles the damage dealt to a target that has just switched into battle."
    },
    {
      number: 199,
      name: "waterbubble",
      displayName: "Water Bubble",
      description:
        "Lowers the power of Fire-type moves that hit the Pokémon and prevents it from being burned."
    },
    {
      number: 200,
      name: "steelworker",
      displayName: "Steelworker",
      description: "Powers up Steel-type moves.",
      isUnique: true
    },
    {
      number: 201,
      name: "berserk",
      displayName: "Berserk",
      description:
        "Boosts the Pokémon's Sp. Atk stat when it takes a hit that causes its HP to drop to half or less."
    },
    {
      number: 202,
      name: "slushrush",
      displayName: "Slush Rush",
      description: "Boosts the Pokémon's Speed stat in snow."
    },
    {
      number: 203,
      name: "longreach",
      displayName: "Long Reach",
      description:
        "The Pokémon uses its moves without making contact with thetarget."
    },
    {
      number: 204,
      name: "liquidvoice",
      displayName: "Liquid Voice",
      description: "Sound-based moves become Water-type moves."
    },
    {
      number: 205,
      name: "triage",
      displayName: "Triage",
      description: "Gives priority to the Pokémon's healing moves.",
      isUnique: true
    },
    {
      number: 206,
      name: "galvanize",
      displayName: "Galvanize",
      description:
        "Normal-type moves become Electric-type moves. The power of those moves is boosted a little."
    },
    {
      number: 207,
      name: "surgesurfer",
      displayName: "Surge Surfer",
      description: "Doubles the Pokémon's Speed stat on Electric Terrain."
    },
    {
      number: 208,
      name: "schooling",
      displayName: "Schooling",
      description:
        "When it has a lot of HP, the Pokémon forms a powerful group. It stops when its HP is low."
    },
    {
      number: 209,
      name: "disguise",
      displayName: "Disguise",
      description:
        "Once per battle, the shroud that covers the Pokémon can protect it from an attack at the cost of 12.5% of its HP.",
      isUnique: true
    },
    {
      number: 210,
      name: "battlebond",
      displayName: "Battle Bond",
      description:
        "When the Pokémon knocks out a target, its connection with its Trainer is strengthened, and its Attack, Sp. Atk, and Speed stats are boosted.",
      isUnique: true
    },
    {
      number: 211,
      name: "powerconstruct",
      displayName: "Power Construct",
      description:
        "Cells gather to aid the Pokémon when its HP drops to half or less, causing it to change into its Complete Forme."
    },
    {
      number: 212,
      name: "corrosion",
      displayName: "Corrosion",
      description:
        "The Pokémon can poison the target even if it's a Steel- or Poison-type."
    },
    {
      number: 213,
      name: "comatose",
      displayName: "Comatose",
      description:
        "The Pokémon is always drowsing and will never wake up. It can attack while in its sleeping state.",
      isUnique: true
    },
    {
      number: 214,
      name: "queenlymajesty",
      displayName: "Queenly Majesty",
      description:
        "The Pokémon pressures opponents and makes then unable to use priority moves against the Pokémon or its allies.",
      isUnique: true
    },
    {
      number: 215,
      name: "innardsout",
      displayName: "Innards Out",
      description:
        "When the Pokémon is knocked out, it damages its attacker by the amount equal to the HP it had left before it was hit.",
      isUnique: true
    },
    {
      number: 216,
      name: "dancer",
      displayName: "Dancer",
      description:
        "Whenever a dance move is used in battle, the Pokémon will copy the user to immediately perform that dance move itself."
    },
    {
      number: 217,
      name: "battery",
      displayName: "Battery",
      description: "Powers up ally Pokémon's special moves.",
      isUnique: true
    },
    {
      number: 218,
      name: "fluffy",
      displayName: "Fluffy",
      description:
        "Halves the damage taken from moves that make direct contact, but doubles that of Fire-type moves."
    },
    {
      number: 219,
      name: "dazzling",
      displayName: "Dazzling",
      description:
        "The Pokémon makes its opponents unable to use priority moves against the Pokémon or its allies.",
      isUnique: true
    },
    {
      number: 220,
      name: "soulheart",
      displayName: "Soul-Heart",
      description:
        "Boosts the Pokémon's Sp. Atk stat every time another Pokémon faints."
    },
    {
      number: 221,
      name: "tanglinghair",
      displayName: "Tangling Hair",
      description: "Contact with the Pokémon lowers the attacker's Speed stat."
    },
    {
      number: 222,
      name: "receiver",
      displayName: "Receiver",
      description: "The Pokémon copies the Ability of a defeated ally.",
      isUnique: true
    },
    {
      number: 223,
      name: "powerofalchemy",
      displayName: "Power of Alchemy",
      description: "The Pokémon copies the Ability of a defeated ally."
    },
    {
      number: 224,
      name: "beastboost",
      displayName: "Beast Boost",
      description:
        "Boosts the Pokémon's most proficient stat every time it knocks out a target."
    },
    {
      number: 225,
      name: "rkssystem",
      displayName: "RKS System",
      description:
        "Changes the Pokémon's type to match the memory disc it holds.",
      isUnique: true
    },
    {
      number: 226,
      name: "electricsurge",
      displayName: "Electric Surge",
      description:
        "Turns the ground into Electric Terrain when the Pokémon enters a battle."
    },
    {
      number: 227,
      name: "psychicsurge",
      displayName: "Psychic Surge",
      description:
        "Turns the ground into Psychic Terrain when the Pokémon enters a battle."
    },
    {
      number: 228,
      name: "mistysurge",
      displayName: "Misty Surge",
      description:
        "Turns the ground into Misty Terrain when the Pokémon enters a battle."
    },
    {
      number: 229,
      name: "grassysurge",
      displayName: "Grassy Surge",
      description:
        "Turns the ground into Grassy Terrain when the Pokémon enters a battle."
    },
    {
      number: 230,
      name: "fullmetalbody",
      displayName: "Full Metal Body",
      description:
        "Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats.",
      isUnique: true
    },
    {
      number: 231,
      name: "shadowshield",
      displayName: "Shadow Shield",
      description:
        "Reduces the amount of damage the Pokémon takes while its HP is full.",
      isUnique: true
    },
    {
      number: 232,
      name: "prismarmor",
      displayName: "Prism Armor",
      description:
        "Reduces the power of supereffective attacks that hit the Pokémon."
    },
    {
      number: 233,
      name: "neuroforce",
      displayName: "Neuroforce",
      description:
        "Powers up the Pokémon's supereffective attacks even further.",
      isUnique: true
    }
  ],
  moves: [
    {
      number: 622,
      name: "breakneckblitz",
      displayName: "Breakneck Blitz",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 623,
      name: "breakneckblitz",
      displayName: "Breakneck Blitz",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 624,
      name: "alloutpummeling",
      displayName: "All-Out Pummeling",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 625,
      name: "alloutpummeling",
      displayName: "All-Out Pummeling",
      type: Type.Fighting,
      category: MoveCategory.Special
    },
    {
      number: 626,
      name: "supersonicskystrike",
      displayName: "Supersonic Skystrike",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 627,
      name: "supersonicskystrike",
      displayName: "Supersonic Skystrike",
      type: Type.Flying,
      category: MoveCategory.Special
    },
    {
      number: 628,
      name: "aciddownpour",
      displayName: "Acid Downpour",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 629,
      name: "aciddownpour",
      displayName: "Acid Downpour",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 630,
      name: "tectonicrage",
      displayName: "Tectonic Rage",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 631,
      name: "tectonicrage",
      displayName: "Tectonic Rage",
      type: Type.Ground,
      category: MoveCategory.Special
    },
    {
      number: 632,
      name: "continentalcrush",
      displayName: "Continental Crush",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 633,
      name: "continentalcrush",
      displayName: "Continental Crush",
      type: Type.Rock,
      category: MoveCategory.Special
    },
    {
      number: 634,
      name: "savagespinout",
      displayName: "Savage Spin-Out",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 635,
      name: "savagespinout",
      displayName: "Savage Spin-Out",
      type: Type.Bug,
      category: MoveCategory.Special
    },
    {
      number: 636,
      name: "neverendingnightmare",
      displayName: "Never-Ending Nightmare",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 637,
      name: "neverendingnightmare",
      displayName: "Never-Ending Nightmare",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 638,
      name: "corkscrewcrash",
      displayName: "Corkscrew Crash",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 639,
      name: "corkscrewcrash",
      displayName: "Corkscrew Crash",
      type: Type.Steel,
      category: MoveCategory.Special
    },
    {
      number: 640,
      name: "infernooverdrive",
      displayName: "Inferno Overdrive",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 641,
      name: "infernooverdrive",
      displayName: "Inferno Overdrive",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 642,
      name: "hydrovortex",
      displayName: "Hydro Vortex",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 643,
      name: "hydrovortex",
      displayName: "Hydro Vortex",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 644,
      name: "bloomdoom",
      displayName: "Bloom Doom",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 645,
      name: "bloomdoom",
      displayName: "Bloom Doom",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 646,
      name: "gigavolthavoc",
      displayName: "Gigavolt Havoc",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 647,
      name: "gigavolthavoc",
      displayName: "Gigavolt Havoc",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 648,
      name: "shatteredpsyche",
      displayName: "Shattered Psyche",
      type: Type.Psychic,
      category: MoveCategory.Physical
    },
    {
      number: 649,
      name: "shatteredpsyche",
      displayName: "Shattered Psyche",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 650,
      name: "subzeroslammer",
      displayName: "Subzero Slammer",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 651,
      name: "subzeroslammer",
      displayName: "Subzero Slammer",
      type: Type.Ice,
      category: MoveCategory.Special
    },
    {
      number: 652,
      name: "devastatingdrake",
      displayName: "Devastating Drake",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 653,
      name: "devastatingdrake",
      displayName: "Devastating Drake",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 654,
      name: "blackholeeclipse",
      displayName: "Black Hole Eclipse",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 655,
      name: "blackholeeclipse",
      displayName: "Black Hole Eclipse",
      type: Type.Dark,
      category: MoveCategory.Special
    },
    {
      number: 656,
      name: "twinkletackle",
      displayName: "Twinkle Tackle",
      type: Type.Fairy,
      category: MoveCategory.Physical
    },
    {
      number: 657,
      name: "twinkletackle",
      displayName: "Twinkle Tackle",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 658,
      name: "catastropika",
      displayName: "Catastropika",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 659,
      name: "shoreup",
      displayName: "Shore Up",
      type: Type.Ground,
      category: MoveCategory.Status
    },
    {
      number: 660,
      name: "firstimpression",
      displayName: "First Impression",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 661,
      name: "banefulbunker",
      displayName: "Baneful Bunker",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 662,
      name: "spiritshackle",
      displayName: "Spirit Shackle",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 663,
      name: "darkestlariat",
      displayName: "Darkest Lariat",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 664,
      name: "sparklingaria",
      displayName: "Sparkling Aria",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 665,
      name: "icehammer",
      displayName: "Ice Hammer",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 666,
      name: "floralhealing",
      displayName: "Floral Healing",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 667,
      name: "highhorsepower",
      displayName: "High Horsepower",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 668,
      name: "strengthsap",
      displayName: "Strength Sap",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 669,
      name: "solarblade",
      displayName: "Solar Blade",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 670,
      name: "leafage",
      displayName: "Leafage",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 671,
      name: "spotlight",
      displayName: "Spotlight",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 672,
      name: "toxicthread",
      displayName: "Toxic Thread",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 673,
      name: "laserfocus",
      displayName: "Laser Focus",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 674,
      name: "gearup",
      displayName: "Gear Up",
      type: Type.Steel,
      category: MoveCategory.Status
    },
    {
      number: 675,
      name: "throatchop",
      displayName: "Throat Chop",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 676,
      name: "pollenpuff",
      displayName: "Pollen Puff",
      type: Type.Bug,
      category: MoveCategory.Special
    },
    {
      number: 677,
      name: "anchorshot",
      displayName: "Anchor Shot",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 678,
      name: "psychicterrain",
      displayName: "Psychic Terrain",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 679,
      name: "lunge",
      displayName: "Lunge",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 680,
      name: "firelash",
      displayName: "Fire Lash",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 681,
      name: "powertrip",
      displayName: "Power Trip",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 682,
      name: "burnup",
      displayName: "Burn Up",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 683,
      name: "speedswap",
      displayName: "Speed Swap",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 684,
      name: "smartstrike",
      displayName: "Smart Strike",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 685,
      name: "purify",
      displayName: "Purify",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 686,
      name: "revelationdance",
      displayName: "Revelation Dance",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 687,
      name: "coreenforcer",
      displayName: "Core Enforcer",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 688,
      name: "tropkick",
      displayName: "Trop Kick",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 689,
      name: "instruct",
      displayName: "Instruct",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 690,
      name: "beakblast",
      displayName: "Beak Blast",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 691,
      name: "clangingscales",
      displayName: "Clanging Scales",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 692,
      name: "dragonhammer",
      displayName: "Dragon Hammer",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 693,
      name: "brutalswing",
      displayName: "Brutal Swing",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 694,
      name: "auroraveil",
      displayName: "Aurora Veil",
      type: Type.Ice,
      category: MoveCategory.Status
    },
    {
      number: 695,
      name: "sinisterarrowraid",
      displayName: "Sinister Arrow Raid",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 696,
      name: "maliciousmoonsault",
      displayName: "Malicious Moonsault",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 697,
      name: "oceanicoperetta",
      displayName: "Oceanic Operetta",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 698,
      name: "guardianofalola",
      displayName: "Guardian of Alola",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 699,
      name: "soulstealing7starstrike",
      displayName: "Soul-Stealing 7-Star Strike",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 700,
      name: "stokedsparksurfer",
      displayName: "Stoked Sparksurfer",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 701,
      name: "pulverizingpancake",
      displayName: "Pulverizing Pancake",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 702,
      name: "extremeevoboost",
      displayName: "Extreme Evoboost",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 703,
      name: "genesissupernova",
      displayName: "Genesis Supernova",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 704,
      name: "shelltrap",
      displayName: "Shell Trap",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 705,
      name: "fleurcannon",
      displayName: "Fleur Cannon",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 706,
      name: "psychicfangs",
      displayName: "Psychic Fangs",
      type: Type.Psychic,
      category: MoveCategory.Physical
    },
    {
      number: 707,
      name: "stompingtantrum",
      displayName: "Stomping Tantrum",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 708,
      name: "shadowbone",
      displayName: "Shadow Bone",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 709,
      name: "accelerock",
      displayName: "Accelerock",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 710,
      name: "liquidation",
      displayName: "Liquidation",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 711,
      name: "prismaticlaser",
      displayName: "Prismatic Laser",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 712,
      name: "spectralthief",
      displayName: "Spectral Thief",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 713,
      name: "sunsteelstrike",
      displayName: "Sunsteel Strike",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 714,
      name: "moongeistbeam",
      displayName: "Moongeist Beam",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 715,
      name: "tearfullook",
      displayName: "Tearful Look",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 716,
      name: "zingzap",
      displayName: "Zing Zap",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 717,
      name: "naturesmadness",
      displayName: "Nature's Madness",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 718,
      name: "multiattack",
      displayName: "Multi-Attack",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 719,
      name: "10000000voltthunderbolt",
      displayName: "10,000,000 Volt Thunderbolt",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 720,
      name: "mindblown",
      displayName: "Mind Blown",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 721,
      name: "plasmafists",
      displayName: "Plasma Fists",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 722,
      name: "photongeyser",
      displayName: "Photon Geyser",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 723,
      name: "lightthatburnsthesky",
      displayName: "Light That Burns the Sky",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 724,
      name: "searingsunrazesmash",
      displayName: "Searing Sunraze Smash",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 725,
      name: "menacingmoonrazemaelstrom",
      displayName: "Menacing Moonraze Maelstrom",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 726,
      name: "letssnuggleforever",
      displayName: "Let's Snuggle Forever",
      type: Type.Fairy,
      category: MoveCategory.Physical
    },
    {
      number: 727,
      name: "splinteredstormshards",
      displayName: "Splintered Stormshards",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 728,
      name: "clangoroussoulblaze",
      displayName: "Clangorous Soulblaze",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 729,
      name: "zippyzap",
      displayName: "Zippy Zap",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 730,
      name: "splishysplash",
      displayName: "Splishy Splash",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 731,
      name: "floatyfall",
      displayName: "Floaty Fall",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 732,
      name: "pikapapow",
      displayName: "Pika Papow",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 733,
      name: "bouncybubble",
      displayName: "Bouncy Bubble",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 734,
      name: "buzzybuzz",
      displayName: "Buzzy Buzz",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 735,
      name: "sizzlyslide",
      displayName: "Sizzly Slide",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 736,
      name: "glitzyglow",
      displayName: "Glitzy Glow",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 737,
      name: "baddybad",
      displayName: "Baddy Bad",
      type: Type.Dark,
      category: MoveCategory.Special
    },
    {
      number: 738,
      name: "sappyseed",
      displayName: "Sappy Seed",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 739,
      name: "freezyfrost",
      displayName: "Freezy Frost",
      type: Type.Ice,
      category: MoveCategory.Special
    },
    {
      number: 740,
      name: "sparklyswirl",
      displayName: "Sparkly Swirl",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 741,
      name: "veeveevolley",
      displayName: "Veevee Volley",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 742,
      name: "doubleironbash",
      displayName: "Double Iron Bash",
      type: Type.Steel,
      category: MoveCategory.Physical
    }
  ],
  pokemon: [
    {
      dex: 722,
      name: "rowlet",
      displayName: "Rowlet",
      type: Type.Grass,
      type2: Type.Flying
    },
    {
      dex: 723,
      name: "dartrix",
      displayName: "Dartrix",
      type: Type.Grass,
      type2: Type.Flying
    },
    {
      dex: 724,
      name: "decidueye",
      displayName: "Decidueye",
      type: Type.Grass,
      type2: Type.Ghost
    },
    {
      dex: 724,
      name: "decidueye",
      img: "decidueye-hisuian",
      displayName: "Hisuian Decidueye",
      type: Type.Grass,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 725,
      name: "litten",
      displayName: "Litten",
      type: Type.Fire
    },
    {
      dex: 726,
      name: "torracat",
      displayName: "Torracat",
      type: Type.Fire
    },
    {
      dex: 727,
      name: "incineroar",
      displayName: "Incineroar",
      type: Type.Fire,
      type2: Type.Dark
    },
    {
      dex: 728,
      name: "popplio",
      displayName: "Popplio",
      type: Type.Water
    },
    {
      dex: 729,
      name: "brionne",
      displayName: "Brionne",
      type: Type.Water
    },
    {
      dex: 730,
      name: "primarina",
      displayName: "Primarina",
      type: Type.Water,
      type2: Type.Fairy
    },
    {
      dex: 731,
      name: "pikipek",
      displayName: "Pikipek",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 732,
      name: "trumbeak",
      displayName: "Trumbeak",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 733,
      name: "toucannon",
      displayName: "Toucannon",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 734,
      name: "yungoos",
      displayName: "Yungoos",
      type: Type.Normal
    },
    {
      dex: 735,
      name: "gumshoos",
      displayName: "Gumshoos",
      type: Type.Normal
    },
    {
      dex: 736,
      name: "grubbin",
      displayName: "Grubbin",
      type: Type.Bug
    },
    {
      dex: 737,
      name: "charjabug",
      displayName: "Charjabug",
      type: Type.Bug,
      type2: Type.Electric
    },
    {
      dex: 738,
      name: "vikavolt",
      displayName: "Vikavolt",
      type: Type.Bug,
      type2: Type.Electric
    },
    {
      dex: 739,
      name: "crabrawler",
      displayName: "Crabrawler",
      type: Type.Fighting
    },
    {
      dex: 740,
      name: "crabominable",
      displayName: "Crabominable",
      type: Type.Fighting,
      type2: Type.Ice
    },
    {
      dex: 741,
      name: "oricorio",
      img: "oricorio-baile",
      displayName: "Oricorio",
      type: Type.Varies,
      type2: Type.Flying,
      noDefaultForm: true
    },
    {
      dex: 741,
      name: "oricorio",
      img: "oricorio-baile",
      displayName: "Baile Style Oricorio",
      type: Type.Fire,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 741,
      name: "oricorio",
      img: "oricorio-pompom",
      displayName: "Pom-Pom Style Oricorio",
      type: Type.Electric,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 741,
      name: "oricorio",
      img: "oricorio-pau",
      displayName: "Pa'u Style Oricorio",
      type: Type.Psychic,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 741,
      name: "oricorio",
      img: "oricorio-sensu",
      displayName: "Sensu Style Oricorio",
      type: Type.Ghost,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 742,
      name: "cutiefly",
      displayName: "Cutiefly",
      type: Type.Bug,
      type2: Type.Fairy
    },
    {
      dex: 743,
      name: "ribombee",
      displayName: "Ribombee",
      type: Type.Bug,
      type2: Type.Fairy
    },
    {
      dex: 744,
      name: "rockruff",
      displayName: "Rockruff",
      type: Type.Rock
    },
    {
      dex: 745,
      name: "lycanroc",
      displayName: "Lycanroc",
      type: Type.Rock
    },
    {
      dex: 746,
      name: "wishiwashi",
      displayName: "Wishiwashi",
      type: Type.Water
    },
    {
      dex: 747,
      name: "mareanie",
      displayName: "Mareanie",
      type: Type.Poison,
      type2: Type.Water
    },
    {
      dex: 748,
      name: "toxapex",
      displayName: "Toxapex",
      type: Type.Poison,
      type2: Type.Water
    },
    {
      dex: 749,
      name: "mudbray",
      displayName: "Mudbray",
      type: Type.Ground
    },
    {
      dex: 750,
      name: "mudsdale",
      displayName: "Mudsdale",
      type: Type.Ground
    },
    {
      dex: 751,
      name: "dewpider",
      displayName: "Dewpider",
      type: Type.Water,
      type2: Type.Bug
    },
    {
      dex: 752,
      name: "araquanid",
      displayName: "Araquanid",
      type: Type.Water,
      type2: Type.Bug
    },
    {
      dex: 753,
      name: "fomantis",
      displayName: "Fomantis",
      type: Type.Grass
    },
    {
      dex: 754,
      name: "lurantis",
      displayName: "Lurantis",
      type: Type.Grass
    },
    {
      dex: 755,
      name: "morelull",
      displayName: "Morelull",
      type: Type.Grass,
      type2: Type.Fairy
    },
    {
      dex: 756,
      name: "shiinotic",
      displayName: "Shiinotic",
      type: Type.Grass,
      type2: Type.Fairy
    },
    {
      dex: 757,
      name: "salandit",
      displayName: "Salandit",
      type: Type.Poison,
      type2: Type.Fire
    },
    {
      dex: 758,
      name: "salazzle",
      displayName: "Salazzle",
      type: Type.Poison,
      type2: Type.Fire
    },
    {
      dex: 759,
      name: "stufful",
      displayName: "Stufful",
      type: Type.Normal,
      type2: Type.Fighting
    },
    {
      dex: 760,
      name: "bewear",
      displayName: "Bewear",
      type: Type.Normal,
      type2: Type.Fighting
    },
    {
      dex: 761,
      name: "bounsweet",
      displayName: "Bounsweet",
      type: Type.Grass
    },
    {
      dex: 762,
      name: "steenee",
      displayName: "Steenee",
      type: Type.Grass
    },
    {
      dex: 763,
      name: "tsareena",
      displayName: "Tsareena",
      type: Type.Grass
    },
    {
      dex: 764,
      name: "comfey",
      displayName: "Comfey",
      type: Type.Fairy
    },
    {
      dex: 765,
      name: "oranguru",
      displayName: "Oranguru",
      type: Type.Normal,
      type2: Type.Psychic
    },
    {
      dex: 766,
      name: "passimian",
      displayName: "Passimian",
      type: Type.Fighting
    },
    {
      dex: 767,
      name: "wimpod",
      displayName: "Wimpod",
      type: Type.Bug,
      type2: Type.Water
    },
    {
      dex: 768,
      name: "golisopod",
      displayName: "Golisopod",
      type: Type.Bug,
      type2: Type.Water
    },
    {
      dex: 769,
      name: "sandygast",
      displayName: "Sandygast",
      type: Type.Ghost,
      type2: Type.Ground
    },
    {
      dex: 770,
      name: "palossand",
      displayName: "Palossand",
      type: Type.Ghost,
      type2: Type.Ground
    },
    {
      dex: 771,
      name: "pyukumuku",
      displayName: "Pyukumuku",
      type: Type.Water
    },
    {
      dex: 772,
      name: "typenull",
      displayName: "Type: Null",
      type: Type.Normal,
      category: PokemonCategory.Legendary
    },
    {
      dex: 773,
      name: "silvally",
      displayName: "Silvally",
      type: Type.Normal,
      category: PokemonCategory.Legendary
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-fighting",
      displayName: "Fighting Silvally",
      type: Type.Fighting,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-flying",
      displayName: "Flying Silvally",
      type: Type.Flying,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-poison",
      displayName: "Poison Silvally",
      type: Type.Poison,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-ground",
      displayName: "Ground Silvally",
      type: Type.Ground,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-rock",
      displayName: "Rock Silvally",
      type: Type.Rock,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-bug",
      displayName: "Bug Silvally",
      type: Type.Bug,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-ghost",
      displayName: "Ghost Silvally",
      type: Type.Ghost,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-steel",
      displayName: "Steel Silvally",
      type: Type.Steel,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-fire",
      displayName: "Fire Silvally",
      type: Type.Fire,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-water",
      displayName: "Water Silvally",
      type: Type.Water,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-grass",
      displayName: "Grass Silvally",
      type: Type.Grass,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-electric",
      displayName: "Electric Silvally",
      type: Type.Electric,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-psychic",
      displayName: "Psychic Silvally",
      type: Type.Psychic,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-ice",
      displayName: "Ice Silvally",
      type: Type.Ice,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-dragon",
      displayName: "Dragon Silvally",
      type: Type.Dragon,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-dark",
      displayName: "Dark Silvally",
      type: Type.Dark,
      isVariant: true
    },
    {
      dex: 773,
      name: "silvally",
      img: "silvally-fairy",
      displayName: "Fairy Silvally",
      type: Type.Fairy,
      isVariant: true
    },
    {
      dex: 774,
      name: "minior",
      displayName: "Minior",
      type: Type.Rock,
      type2: Type.Flying
    },
    {
      dex: 775,
      name: "komala",
      displayName: "Komala",
      type: Type.Normal
    },
    {
      dex: 776,
      name: "turtonator",
      displayName: "Turtonator",
      type: Type.Fire,
      type2: Type.Dragon
    },
    {
      dex: 777,
      name: "togedemaru",
      displayName: "Togedemaru",
      type: Type.Electric,
      type2: Type.Steel
    },
    {
      dex: 778,
      name: "mimikyu",
      displayName: "Mimikyu",
      type: Type.Ghost,
      type2: Type.Fairy
    },
    {
      dex: 779,
      name: "bruxish",
      displayName: "Bruxish",
      type: Type.Water,
      type2: Type.Psychic
    },
    {
      dex: 780,
      name: "drampa",
      displayName: "Drampa",
      type: Type.Normal,
      type2: Type.Dragon
    },
    {
      dex: 780,
      name: "drampa",
      img: "drampa-mega",
      displayName: "Mega Drampa",
      type: Type.Normal,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 781,
      name: "dhelmise",
      displayName: "Dhelmise",
      type: Type.Ghost,
      type2: Type.Grass
    },
    {
      dex: 782,
      name: "jangmoo",
      displayName: "Jangmo-o",
      type: Type.Dragon
    },
    {
      dex: 783,
      name: "hakamoo",
      displayName: "Hakamo-o",
      type: Type.Dragon,
      type2: Type.Fighting
    },
    {
      dex: 784,
      name: "kommoo",
      displayName: "Kommo-o",
      type: Type.Dragon,
      type2: Type.Fighting
    },
    {
      dex: 785,
      name: "tapukoko",
      displayName: "Tapu Koko",
      type: Type.Electric,
      type2: Type.Fairy,
      category: PokemonCategory.Legendary
    },
    {
      dex: 786,
      name: "tapulele",
      displayName: "Tapu Lele",
      type: Type.Psychic,
      type2: Type.Fairy,
      category: PokemonCategory.Legendary
    },
    {
      dex: 787,
      name: "tapubulu",
      displayName: "Tapu Bulu",
      type: Type.Grass,
      type2: Type.Fairy,
      category: PokemonCategory.Legendary
    },
    {
      dex: 788,
      name: "tapufini",
      displayName: "Tapu Fini",
      type: Type.Water,
      type2: Type.Fairy,
      category: PokemonCategory.Legendary
    },
    {
      dex: 789,
      name: "cosmog",
      displayName: "Cosmog",
      type: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 790,
      name: "cosmoem",
      displayName: "Cosmoem",
      type: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 791,
      name: "solgaleo",
      displayName: "Solgaleo",
      type: Type.Psychic,
      type2: Type.Steel,
      category: PokemonCategory.Legendary
    },
    {
      dex: 792,
      name: "lunala",
      displayName: "Lunala",
      type: Type.Psychic,
      type2: Type.Ghost,
      category: PokemonCategory.Legendary
    },
    {
      dex: 793,
      name: "nihilego",
      displayName: "Nihilego",
      type: Type.Rock,
      type2: Type.Poison,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 794,
      name: "buzzwole",
      displayName: "Buzzwole",
      type: Type.Bug,
      type2: Type.Fighting,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 795,
      name: "pheromosa",
      displayName: "Pheromosa",
      type: Type.Bug,
      type2: Type.Fighting,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 796,
      name: "xurkitree",
      displayName: "Xurkitree",
      type: Type.Electric,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 797,
      name: "celesteela",
      displayName: "Celesteela",
      type: Type.Steel,
      type2: Type.Flying,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 798,
      name: "kartana",
      displayName: "Kartana",
      type: Type.Grass,
      type2: Type.Steel,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 799,
      name: "guzzlord",
      displayName: "Guzzlord",
      type: Type.Dark,
      type2: Type.Dragon,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 800,
      name: "necrozma",
      displayName: "Necrozma",
      type: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 800,
      name: "necrozma",
      img: "necrozma-duskmane",
      displayName: "Dusk Mane Necrozma",
      type: Type.Psychic,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 800,
      name: "necrozma",
      img: "necrozma-dawnwings",
      displayName: "Dawn Wings Necrozma",
      type: Type.Psychic,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 800,
      name: "necrozma",
      img: "necrozma-ultra",
      displayName: "Ultra Necrozma",
      type: Type.Psychic,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 801,
      name: "magearna",
      displayName: "Magearna",
      type: Type.Steel,
      type2: Type.Fairy,
      category: PokemonCategory.Mythical
    },
    {
      dex: 802,
      name: "marshadow",
      displayName: "Marshadow",
      type: Type.Fighting,
      type2: Type.Ghost,
      category: PokemonCategory.Mythical
    },
    {
      dex: 803,
      name: "poipole",
      displayName: "Poipole",
      type: Type.Poison,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 804,
      name: "naganadel",
      displayName: "Naganadel",
      type: Type.Poison,
      type2: Type.Dragon,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 805,
      name: "stakataka",
      displayName: "Stakataka",
      type: Type.Rock,
      type2: Type.Steel,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 806,
      name: "blacephalon",
      displayName: "Blacephalon",
      type: Type.Fire,
      type2: Type.Ghost,
      category: PokemonCategory.UltraBeast
    },
    {
      dex: 807,
      name: "zeraora",
      displayName: "Zeraora",
      type: Type.Electric,
      category: PokemonCategory.Mythical
    },
    {
      dex: 808,
      name: "meltan",
      displayName: "Meltan",
      type: Type.Steel,
      category: PokemonCategory.Mythical
    },
    {
      dex: 809,
      name: "melmetal",
      displayName: "Melmetal",
      type: Type.Steel,
      category: PokemonCategory.Mythical
    },
    {
      dex: 809,
      name: "melmetal",
      img: "melmetal-gmax",
      displayName: "Gigantamax Melmetal",
      type: Type.Steel,
      isVariant: true
    }
  ]
};
