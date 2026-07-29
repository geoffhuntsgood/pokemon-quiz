import type { Generation } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export const gen9: Generation = {
  number: GenNumber.Nine,
  abilities: [
    {
      number: 268,
      name: "lingeringaroma",
      displayName: "Lingering Aroma",
      description:
        "Contact with the Pokémon changes the attacker's Ability to this Ability.",
      isUnique: true
    },
    {
      number: 269,
      name: "seedsower",
      displayName: "Seed Sower",
      description:
        "Turns the ground into Grassy Terrain when the Pokémon is hit by an attack.",
      isUnique: true
    },
    {
      number: 270,
      name: "thermalexchange",
      displayName: "Thermal Exchange",
      description:
        "Boosts the Attack stat when the Pokémon is hit by a Fire-type move. The Pokémon also cannot be burned."
    },
    {
      number: 271,
      name: "angershell",
      displayName: "Anger Shell",
      description:
        "When an attack causes its HP to drop to half or less, the Pokémon's Defense and Sp. Def stats are lowered, but its Attack, Sp. Attack, and Speed stats are boosted.",
      isUnique: true
    },
    {
      number: 272,
      name: "purifyingsalt",
      displayName: "Purifying Salt",
      description:
        "The Pokémon is protected from status conditions and halves the damage taken from Ghost-type moves."
    },
    {
      number: 273,
      name: "wellbakedbody",
      displayName: "Well-Baked Body",
      description:
        "The Pokémon takes no damage when hit by Fire-type moves. Instead, its Defense stat is sharply boosted.",
      isUnique: true
    },
    {
      number: 274,
      name: "windrider",
      displayName: "Wind Rider",
      description:
        "Boost the Pokémon's Attack stat if Tailwind takes effect or if the Pokémon is hit by a wind move. The Pokémon also takes no damage from wind moves."
    },
    {
      number: 275,
      name: "guarddog",
      displayName: "Guard Dog",
      description:
        "Boosts the Pokémon's Attack stat if intimidated. Moves and items that would force the Pokémon to switch out also fail to work."
    },
    {
      number: 276,
      name: "rockypayload",
      displayName: "Rocky Payload",
      description: "Powers up Rock-type moves.",
      isUnique: true
    },
    {
      number: 277,
      name: "windpower",
      displayName: "Wind Power",
      description:
        "The Pokémon becomes charged when it is hit by a wind move, boosting the power of the next Electric-type move the Pokémon uses."
    },
    {
      number: 278,
      name: "zerotohero",
      displayName: "Zero to Hero",
      description:
        "The Pokémon transforms into its Hero Form when it switches out."
    },
    {
      number: 279,
      name: "commander",
      displayName: "Commander",
      description:
        "When the Pokémon enters a battle, it goes inside the mouth of an ally Dondozo if one is on the field. The Pokémon then issues commands from there."
    },
    {
      number: 280,
      name: "electromorphosis",
      displayName: "Electromorphosis",
      description:
        "The Pokémon becomes charged when it takes damage, boosting the power of the next Electric-type move the Pokémon uses.",
      isUnique: true
    },
    {
      number: 281,
      name: "protosynthesis",
      displayName: "Protosynthesis",
      description:
        "Boosts the Pokémon's most proficient stat in harsh sunlight or if the Pokémon is holding Booster Energy."
    },
    {
      number: 282,
      name: "quarkdrive",
      displayName: "Quark Drive",
      description:
        "Boosts the Pokémon's most proficient stat on Electric Terrain or if the Pokémon is holding Booster Energy."
    },
    {
      number: 283,
      name: "goodasgold",
      displayName: "Good as Gold",
      description:
        "The Pokémon has full immunity to other Pokémon's status moves.",
      isUnique: true
    },
    {
      number: 284,
      name: "vesselofruin",
      displayName: "Vessel of Ruin",
      description:
        "The Pokémon's power lowers the Sp. Atk stats of all Pokémon except itself.",
      isUnique: true
    },
    {
      number: 285,
      name: "swordofruin",
      displayName: "Sword of Ruin",
      description:
        "The Pokémon's power lowers the Defense stats of all Pokémon except itself.",
      isUnique: true
    },
    {
      number: 286,
      name: "tabletsofruin",
      displayName: "Tablets of Ruin",
      description:
        "The Pokémon's power lowers the Attack stats of all Pokémon except itself.",
      isUnique: true
    },
    {
      number: 287,
      name: "beadsofruin",
      displayName: "Beads of Ruin",
      description:
        "The Pokémon's power lowers the Sp. Def stats of all Pokémon except itself.",
      isUnique: true
    },
    {
      number: 288,
      name: "orichalcumpulse",
      displayName: "Orichalcum Pulse",
      description:
        "Turns the sunlight harsh when the Pokémon enters a battle. The ancient pulse thrumming through the Pokémon also boosts its Attack stat in harsh sunlight.",
      isUnique: true
    },
    {
      number: 289,
      name: "hadronengine",
      displayName: "Hadron Engine",
      description:
        "Turns the ground into Electric Terrain when the Pokémon enters a battle. The futuristic engine within the Pokémon also boosts its Sp. Atk stat on Electric Terrain.",
      isUnique: true
    },
    {
      number: 290,
      name: "opportunist",
      displayName: "Opportunist",
      description:
        "If an opponent's stat is boosted, the Pokémon seizes the moment to boost the same stat for itself.",
      isUnique: true
    },
    {
      number: 291,
      name: "cudchew",
      displayName: "Cud Chew",
      description:
        "When the Pokémon eats a Berry, it will regurgitate that Berry at the end of the next turn and eat it one more time."
    },
    {
      number: 292,
      name: "sharpness",
      displayName: "Sharpness",
      description: "Powers up slicing moves."
    },
    {
      number: 293,
      name: "supremeoverlord",
      displayName: "Supreme Overlord",
      description:
        "When the Pokémon enters a battle, its Attack and Sp. Atk stats are slightly boosted for each of the allies in its party that have already been defeated.",
      isUnique: true
    },
    {
      number: 294,
      name: "costar",
      displayName: "Costar",
      description:
        "When the Pokémon enters a battle, it copies an ally's stat changes.",
      isUnique: true
    },
    {
      number: 295,
      name: "toxicdebris",
      displayName: "Toxic Debris",
      description:
        "Scatters poison spikes at the feet of the opposing team when the Pokémon takes damage from physical moves."
    },
    {
      number: 296,
      name: "armortail",
      displayName: "Armor Tail",
      description:
        "Opponents are unable to use priority moves against the Pokémon or its allies.",
      isUnique: true
    },
    {
      number: 297,
      name: "eartheater",
      displayName: "Earth Eater",
      description:
        "If hit by a Ground-type move, the Pokémon has its HP restored instead of taking damage.",
      isUnique: true
    },
    {
      number: 298,
      name: "myceliummight",
      displayName: "Mycelium Might",
      description:
        "The Pokémon will always attack more slowly when using status moves, but these moves will be unimpeded by the Ability of the target."
    },
    {
      number: 299,
      name: "hospitality",
      displayName: "Hospitality",
      description:
        "When the Pokémon enters a battle, it restores a small amount of its ally's HP."
    },
    {
      number: 300,
      name: "mindseye",
      displayName: "Mind's Eye",
      description:
        "The Pokémon ignores changes to opponents' evasiveness, its accuracy can't be lowered, and it can hit Ghost types with Normal- and Fighting-type moves.",
      isUnique: true
    },
    {
      number: 301,
      name: "embodyaspect",
      displayName: "Embody Aspect (Teal)",
      description:
        "The Pokémon's heart fills with memories, causing the Teal Mask to shine and the Pokémon's Speed stat to be boosted."
    },
    {
      number: 302,
      name: "embodyaspect",
      displayName: "Embody Aspect (Hearthflame)",
      description:
        "The Pokémon's heart fills with memories, causing the Hearthflame Mask to shine and the Pokémon's Attack stat to be boosted."
    },
    {
      number: 303,
      name: "embodyaspect",
      displayName: "Embody Aspect (Wellspring)",
      description:
        "The Pokémon's heart fills with memories, causing the Wellspring Mask to shine and the Pokémon's Sp. Def stat to be boosted."
    },
    {
      number: 304,
      name: "embodyaspect",
      displayName: "Embody Aspect (Cornerstone)",
      description:
        "The Pokémon's heart fills with memories, causing the Cornerstone Mask to shine and the Pokémon's Defense stat to be boosted."
    },
    {
      number: 305,
      name: "toxicchain",
      displayName: "Toxic Chain",
      description:
        "The Pokémon may badly poison any target it hits with a move."
    },
    {
      number: 306,
      name: "supersweetsyrup",
      displayName: "Supersweet Syrup",
      description:
        "The first time the Pokémon enters a battle, it lowers the evasiveness of opposing Pokémon."
    },
    {
      number: 307,
      name: "terashift",
      displayName: "Tera Shift",
      description:
        "When the Pokémon enters a battle, it absorbs the energy around itself and transforms into its Terastal Form.",
      isUnique: true
    },
    {
      number: 308,
      name: "terashell",
      displayName: "Tera Shell",
      description:
        "The Pokémon contains the power of each type. All damage-dealing moves that hit the Pokémon when its HP is full will not be very effective.",
      isUnique: true
    },
    {
      number: 309,
      name: "teraformzero",
      displayName: "Teraform Zero",
      description:
        "When Terapagos changes into its Stellar Form, it uses its hidden powers to eliminate all effects of weather and terrain, reducing them to neutral.",
      isUnique: true
    },
    {
      number: 310,
      name: "poisonpuppeteer",
      displayName: "Poison Puppeteer",
      description:
        "Pokémon poisoned by Pecharunt's moves will also become confused.",
      isUnique: true
    },
    {
      number: 311,
      name: "piercingdrill",
      displayName: "Piercing Drill",
      description:
        "When the Pokémon uses contact moves, it can hit even targets that are protecting themselves, dealing 1/4 of the damage that the move would otherwise deal. Everything aside from the target's protective effects is still triggered."
    },
    {
      number: 312,
      name: "dragonize",
      displayName: "Dragonize",
      description:
        "The Pokémon's Normal-type moves become Dragon-type moves and their power is boosted by 20%.",
      isUnique: true
    },
    {
      number: 313,
      name: "eelevate",
      displayName: "Eelevate",
      description:
        "The Pokémon floats off the ground, making it immune to Ground-type moves, as well as the Spikes, Toxic Spikes, and Sticky Web statuses. When the Pokémon knocks out a target with an attack, its highest stat is boosted by 1 stage."
    },
    {
      number: 315,
      name: "megasol",
      displayName: "Mega Sol",
      description:
        "Even when the sunlight has not turned harsh, the Pokémon can use its moves as if the weather were harsh sunlight.",
      isUnique: true
    },
    {
      number: 316,
      name: "firemane",
      displayName: "Fire Mane",
      description: "Boosts the power of the Pokémon's Fire-type moves by 50%."
    },
    {
      number: 318,
      name: "spicyspray",
      displayName: "Spicy Spray",
      description:
        "When the Pokémon takes damage from a move, it burns the attacker."
    }
  ],
  moves: [
    {
      number: 851,
      name: "terablast",
      displayName: "Tera Blast",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 852,
      name: "silktrap",
      displayName: "Silk Trap",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 853,
      name: "axekick",
      displayName: "Axe Kick",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 854,
      name: "lastrespects",
      displayName: "Last Respects",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 855,
      name: "luminacrash",
      displayName: "Lumina Crash",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 856,
      name: "orderup",
      displayName: "Order Up",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 857,
      name: "jetpunch",
      displayName: "Jet Punch",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 858,
      name: "spicyextract",
      displayName: "Spicy Extract",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 859,
      name: "spinout",
      displayName: "Spin Out",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 860,
      name: "populationbomb",
      displayName: "Population Bomb",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 861,
      name: "icespinner",
      displayName: "Ice Spinner",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 862,
      name: "glaiverush",
      displayName: "Glaive Rush",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 863,
      name: "revivalblessing",
      displayName: "Revival Blessing",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 864,
      name: "saltcure",
      displayName: "Salt Cure",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 865,
      name: "tripledive",
      displayName: "Triple Dive",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 866,
      name: "mortalspin",
      displayName: "Mortal Spin",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 867,
      name: "doodle",
      displayName: "Doodle",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 868,
      name: "filletaway",
      displayName: "Fillet Away",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 869,
      name: "kowtowcleave",
      displayName: "Kowtow Cleave",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 870,
      name: "flowertrick",
      displayName: "Flower Trick",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 871,
      name: "torchsong",
      displayName: "Torch Song",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 872,
      name: "aquastep",
      displayName: "Aqua Step",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 873,
      name: "ragingbull",
      displayName: "Raging Bull",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 874,
      name: "makeitrain",
      displayName: "Make It Rain",
      type: Type.Steel,
      category: MoveCategory.Special
    },
    {
      number: 875,
      name: "psyblade",
      displayName: "Psyblade",
      type: Type.Psychic,
      category: MoveCategory.Physical
    },
    {
      number: 876,
      name: "hydrosteam",
      displayName: "Hydro Steam",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 877,
      name: "ruination",
      displayName: "Ruination",
      type: Type.Dark,
      category: MoveCategory.Special
    },
    {
      number: 878,
      name: "collisioncourse",
      displayName: "Collision Course",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 879,
      name: "electrodrift",
      displayName: "Electro Drift",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 880,
      name: "shedtail",
      displayName: "Shed Tail",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 881,
      name: "chillyreception",
      displayName: "Chilly Reception",
      type: Type.Ice,
      category: MoveCategory.Status
    },
    {
      number: 882,
      name: "tidyup",
      displayName: "Tidy Up",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 883,
      name: "snowscape",
      displayName: "Snowscape",
      type: Type.Ice,
      category: MoveCategory.Status
    },
    {
      number: 884,
      name: "pounce",
      displayName: "Pounce",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 885,
      name: "trailblaze",
      displayName: "Trailblaze",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 886,
      name: "chillingwater",
      displayName: "Chilling Water",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 887,
      name: "hyperdrill",
      displayName: "Hyper Drill",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 888,
      name: "twinbeam",
      displayName: "Twin Beam",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 889,
      name: "ragefist",
      displayName: "Rage Fist",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 890,
      name: "armorcannon",
      displayName: "Armor Cannon",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 891,
      name: "bitterblade",
      displayName: "Bitter Blade",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 892,
      name: "doubleshock",
      displayName: "Double Shock",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 893,
      name: "gigatonhammer",
      displayName: "Gigaton Hammer",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 894,
      name: "comeuppance",
      displayName: "Comeuppance",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 895,
      name: "aquacutter",
      displayName: "Aqua Cutter",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 896,
      name: "blazingtorque",
      displayName: "Blazing Torque",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 897,
      name: "wickedtorque",
      displayName: "Wicked Torque",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 898,
      name: "noxioustorque",
      displayName: "Noxious Torque",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 899,
      name: "combattorque",
      displayName: "Combat Torque",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 900,
      name: "magicaltorque",
      displayName: "Magical Torque",
      type: Type.Fairy,
      category: MoveCategory.Physical
    },
    {
      number: 901,
      name: "bloodmoon",
      displayName: "Blood Moon",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 902,
      name: "matchagotcha",
      displayName: "Matcha Gotcha",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 903,
      name: "syrupbomb",
      displayName: "Syrup Bomb",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 904,
      name: "ivycudgel",
      displayName: "Ivy Cudgel",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 905,
      name: "electroshot",
      displayName: "Electro Shot",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 906,
      name: "terastarstorm",
      displayName: "Tera Starstorm",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 907,
      name: "ficklebeam",
      displayName: "Fickle Beam",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 908,
      name: "burningbulwark",
      displayName: "Burning Bulwark",
      type: Type.Fire,
      category: MoveCategory.Status
    },
    {
      number: 909,
      name: "thunderclap",
      displayName: "Thunderclap",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 910,
      name: "mightycleave",
      displayName: "Mighty Cleave",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 911,
      name: "tachyoncutter",
      displayName: "Tachyon Cutter",
      type: Type.Steel,
      category: MoveCategory.Special
    },
    {
      number: 912,
      name: "hardpress",
      displayName: "Hard Press",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 913,
      name: "dragoncheer",
      displayName: "Dragon Cheer",
      type: Type.Dragon,
      category: MoveCategory.Status
    },
    {
      number: 914,
      name: "alluringvoice",
      displayName: "Alluring Voice",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 915,
      name: "temperflare",
      displayName: "Temper Flare",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 916,
      name: "supercellslam",
      displayName: "Supercell Slam",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 917,
      name: "psychicnoise",
      displayName: "Psychic Noise",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 918,
      name: "upperhand",
      displayName: "Upper Hand",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 919,
      name: "malignantchain",
      displayName: "Malignant Chain",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 920,
      name: "nihillight",
      displayName: "Nihil Light",
      type: Type.Dragon,
      category: MoveCategory.Special
    }
  ],
  pokemon: [
    {
      dex: 906,
      name: "sprigatito",
      displayName: "Sprigatito",
      type: Type.Grass
    },
    {
      dex: 907,
      name: "floragato",
      displayName: "Floragato",
      type: Type.Grass
    },
    {
      dex: 908,
      name: "meowscarada",
      displayName: "Meowscarada",
      type: Type.Grass,
      type2: Type.Dark
    },
    {
      dex: 909,
      name: "fuecoco",
      displayName: "Fuecoco",
      type: Type.Fire
    },
    {
      dex: 910,
      name: "crocalor",
      displayName: "Crocalor",
      type: Type.Fire
    },
    {
      dex: 911,
      name: "skeledirge",
      displayName: "Skeledirge",
      type: Type.Fire,
      type2: Type.Ghost
    },
    {
      dex: 912,
      name: "quaxly",
      displayName: "Quaxly",
      type: Type.Water
    },
    {
      dex: 913,
      name: "quaxwell",
      displayName: "Quaxwell",
      type: Type.Water
    },
    {
      dex: 914,
      name: "quaquaval",
      displayName: "Quaquaval",
      type: Type.Water,
      type2: Type.Fighting
    },
    {
      dex: 915,
      name: "lechonk",
      displayName: "Lechonk",
      type: Type.Normal
    },
    {
      dex: 916,
      name: "oinkologne",
      displayName: "Oinkologne",
      type: Type.Normal
    },
    {
      dex: 917,
      name: "tarountula",
      displayName: "Tarountula",
      type: Type.Bug
    },
    {
      dex: 918,
      name: "spidops",
      displayName: "Spidops",
      type: Type.Bug
    },
    {
      dex: 919,
      name: "nymble",
      displayName: "Nymble",
      type: Type.Bug
    },
    {
      dex: 920,
      name: "lokix",
      displayName: "Lokix",
      type: Type.Bug,
      type2: Type.Dark
    },
    {
      dex: 921,
      name: "pawmi",
      displayName: "Pawmi",
      type: Type.Electric
    },
    {
      dex: 922,
      name: "pawmo",
      displayName: "Pawmo",
      type: Type.Electric,
      type2: Type.Fighting
    },
    {
      dex: 923,
      name: "pawmot",
      displayName: "Pawmot",
      type: Type.Electric,
      type2: Type.Fighting
    },
    {
      dex: 924,
      name: "tandemaus",
      displayName: "Tandemaus",
      type: Type.Normal
    },
    {
      dex: 925,
      name: "maushold",
      displayName: "Maushold",
      type: Type.Normal
    },
    {
      dex: 926,
      name: "fidough",
      displayName: "Fidough",
      type: Type.Fairy
    },
    {
      dex: 927,
      name: "dachsbun",
      displayName: "Dachsbun",
      type: Type.Fairy
    },
    {
      dex: 928,
      name: "smoliv",
      displayName: "Smoliv",
      type: Type.Grass,
      type2: Type.Normal
    },
    {
      dex: 929,
      name: "dolliv",
      displayName: "Dolliv",
      type: Type.Grass,
      type2: Type.Normal
    },
    {
      dex: 930,
      name: "arboliva",
      displayName: "Arboliva",
      type: Type.Grass,
      type2: Type.Normal
    },
    {
      dex: 931,
      name: "squawkabilly",
      displayName: "Squawkabilly",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 932,
      name: "nacli",
      displayName: "Nacli",
      type: Type.Rock
    },
    {
      dex: 933,
      name: "naclstack",
      displayName: "Naclstack",
      type: Type.Rock
    },
    {
      dex: 934,
      name: "garganacl",
      displayName: "Garganacl",
      type: Type.Rock
    },
    {
      dex: 935,
      name: "charcadet",
      displayName: "Charcadet",
      type: Type.Fire
    },
    {
      dex: 936,
      name: "armarouge",
      displayName: "Armarouge",
      type: Type.Fire,
      type2: Type.Psychic
    },
    {
      dex: 937,
      name: "ceruledge",
      displayName: "Ceruledge",
      type: Type.Fire,
      type2: Type.Ghost
    },
    {
      dex: 938,
      name: "tadbulb",
      displayName: "Tadbulb",
      type: Type.Electric
    },
    {
      dex: 939,
      name: "bellibolt",
      displayName: "Bellibolt",
      type: Type.Electric
    },
    {
      dex: 940,
      name: "wattrel",
      displayName: "Wattrel",
      type: Type.Electric,
      type2: Type.Flying
    },
    {
      dex: 941,
      name: "kilowattrel",
      displayName: "Kilowattrel",
      type: Type.Electric,
      type2: Type.Flying
    },
    {
      dex: 942,
      name: "maschiff",
      displayName: "Maschiff",
      type: Type.Dark
    },
    {
      dex: 943,
      name: "mabosstiff",
      displayName: "Mabosstiff",
      type: Type.Dark
    },
    {
      dex: 944,
      name: "shroodle",
      displayName: "Shroodle",
      type: Type.Poison,
      type2: Type.Normal
    },
    {
      dex: 945,
      name: "grafaiai",
      displayName: "Grafaiai",
      type: Type.Poison,
      type2: Type.Normal
    },
    {
      dex: 946,
      name: "bramblin",
      displayName: "Bramblin",
      type: Type.Grass,
      type2: Type.Ghost
    },
    {
      dex: 947,
      name: "brambleghast",
      displayName: "Brambleghast",
      type: Type.Grass,
      type2: Type.Ghost
    },
    {
      dex: 948,
      name: "toedscool",
      displayName: "Toedscool",
      type: Type.Ground,
      type2: Type.Grass
    },
    {
      dex: 949,
      name: "toedscruel",
      displayName: "Toedscruel",
      type: Type.Ground,
      type2: Type.Grass
    },
    {
      dex: 950,
      name: "klawf",
      displayName: "Klawf",
      type: Type.Rock
    },
    {
      dex: 951,
      name: "capsakid",
      displayName: "Capsakid",
      type: Type.Grass
    },
    {
      dex: 952,
      name: "scovillain",
      displayName: "Scovillain",
      type: Type.Grass,
      type2: Type.Fire
    },
    {
      dex: 953,
      name: "rellor",
      displayName: "Rellor",
      type: Type.Bug
    },
    {
      dex: 954,
      name: "rabsca",
      displayName: "Rabsca",
      type: Type.Bug,
      type2: Type.Psychic
    },
    {
      dex: 955,
      name: "flittle",
      displayName: "Flittle",
      type: Type.Psychic
    },
    {
      dex: 956,
      name: "espathra",
      displayName: "Espathra",
      type: Type.Psychic
    },
    {
      dex: 957,
      name: "tinkatink",
      displayName: "Tinkatink",
      type: Type.Fairy,
      type2: Type.Steel
    },
    {
      dex: 958,
      name: "tinkatuff",
      displayName: "Tinkatuff",
      type: Type.Fairy,
      type2: Type.Steel
    },
    {
      dex: 959,
      name: "tinkaton",
      displayName: "Tinkaton",
      type: Type.Fairy,
      type2: Type.Steel
    },
    {
      dex: 960,
      name: "wiglett",
      displayName: "Wiglett",
      type: Type.Water
    },
    {
      dex: 961,
      name: "wugtrio",
      displayName: "Wugtrio",
      type: Type.Water
    },
    {
      dex: 962,
      name: "bombirdier",
      displayName: "Bombirdier",
      type: Type.Flying,
      type2: Type.Dark
    },
    {
      dex: 963,
      name: "finizen",
      displayName: "Finizen",
      type: Type.Water
    },
    {
      dex: 964,
      name: "palafin",
      displayName: "Palafin",
      type: Type.Water
    },
    {
      dex: 965,
      name: "varoom",
      displayName: "Varoom",
      type: Type.Steel,
      type2: Type.Poison
    },
    {
      dex: 966,
      name: "revavroom",
      displayName: "Revavroom",
      type: Type.Steel,
      type2: Type.Poison
    },
    {
      dex: 967,
      name: "cyclizar",
      displayName: "Cyclizar",
      type: Type.Dragon,
      type2: Type.Normal
    },
    {
      dex: 968,
      name: "orthworm",
      displayName: "Orthworm",
      type: Type.Steel
    },
    {
      dex: 969,
      name: "glimmet",
      displayName: "Glimmet",
      type: Type.Rock,
      type2: Type.Poison
    },
    {
      dex: 970,
      name: "glimmora",
      displayName: "Glimmora",
      type: Type.Rock,
      type2: Type.Poison
    },
    {
      dex: 971,
      name: "greavard",
      displayName: "Greavard",
      type: Type.Ghost
    },
    {
      dex: 972,
      name: "houndstone",
      displayName: "Houndstone",
      type: Type.Ghost
    },
    {
      dex: 973,
      name: "flamigo",
      displayName: "Flamigo",
      type: Type.Flying,
      type2: Type.Fighting
    },
    {
      dex: 974,
      name: "cetoddle",
      displayName: "Cetoddle",
      type: Type.Ice
    },
    {
      dex: 975,
      name: "cetitan",
      displayName: "Cetitan",
      type: Type.Ice
    },
    {
      dex: 976,
      name: "veluza",
      displayName: "Veluza",
      type: Type.Water,
      type2: Type.Psychic
    },
    {
      dex: 977,
      name: "dondozo",
      displayName: "Dondozo",
      type: Type.Water
    },
    {
      dex: 978,
      name: "tatsugiri",
      displayName: "Tatsugiri",
      type: Type.Dragon,
      type2: Type.Water
    },
    {
      dex: 979,
      name: "annihilape",
      displayName: "Annihilape",
      type: Type.Fighting,
      type2: Type.Ghost
    },
    {
      dex: 980,
      name: "clodsire",
      displayName: "Clodsire",
      type: Type.Poison,
      type2: Type.Ground
    },
    {
      dex: 981,
      name: "farigiraf",
      displayName: "Farigiraf",
      type: Type.Normal,
      type2: Type.Psychic
    },
    {
      dex: 982,
      name: "dudunsparce",
      displayName: "Dudunsparce",
      type: Type.Normal
    },
    {
      dex: 983,
      name: "kingambit",
      displayName: "Kingambit",
      type: Type.Dark,
      type2: Type.Steel
    },
    {
      dex: 984,
      name: "greattusk",
      displayName: "Great Tusk",
      type: Type.Ground,
      type2: Type.Fighting,
      category: PokemonCategory.Paradox
    },
    {
      dex: 985,
      name: "screamtail",
      displayName: "Scream Tail",
      type: Type.Fairy,
      type2: Type.Psychic,
      category: PokemonCategory.Paradox
    },
    {
      dex: 986,
      name: "brutebonnet",
      displayName: "Brute Bonnet",
      type: Type.Grass,
      type2: Type.Dark,
      category: PokemonCategory.Paradox
    },
    {
      dex: 987,
      name: "fluttermane",
      displayName: "Flutter Mane",
      type: Type.Ghost,
      type2: Type.Fairy,
      category: PokemonCategory.Paradox
    },
    {
      dex: 988,
      name: "slitherwing",
      displayName: "Slither Wing",
      type: Type.Bug,
      type2: Type.Fighting,
      category: PokemonCategory.Paradox
    },
    {
      dex: 989,
      name: "sandyshocks",
      displayName: "Sandy Shocks",
      type: Type.Electric,
      type2: Type.Ground,
      category: PokemonCategory.Paradox
    },
    {
      dex: 990,
      name: "irontreads",
      displayName: "Iron Treads",
      type: Type.Ground,
      type2: Type.Steel,
      category: PokemonCategory.Paradox
    },
    {
      dex: 991,
      name: "ironbundle",
      displayName: "Iron Bundle",
      type: Type.Ice,
      type2: Type.Water,
      category: PokemonCategory.Paradox
    },
    {
      dex: 992,
      name: "ironhands",
      displayName: "Iron Hands",
      type: Type.Fighting,
      type2: Type.Electric,
      category: PokemonCategory.Paradox
    },
    {
      dex: 993,
      name: "ironjugulis",
      displayName: "Iron Jugulis",
      type: Type.Dark,
      type2: Type.Flying,
      category: PokemonCategory.Paradox
    },
    {
      dex: 994,
      name: "ironmoth",
      displayName: "Iron Moth",
      type: Type.Fire,
      type2: Type.Poison,
      category: PokemonCategory.Paradox
    },
    {
      dex: 995,
      name: "ironthorns",
      displayName: "Iron Thorns",
      type: Type.Rock,
      type2: Type.Electric,
      category: PokemonCategory.Paradox
    },
    {
      dex: 996,
      name: "frigibax",
      displayName: "Frigibax",
      type: Type.Dragon,
      type2: Type.Ice
    },
    {
      dex: 997,
      name: "arctibax",
      displayName: "Arctibax",
      type: Type.Dragon,
      type2: Type.Ice
    },
    {
      dex: 998,
      name: "baxcalibur",
      displayName: "Baxcalibur",
      type: Type.Dragon,
      type2: Type.Ice
    },
    {
      dex: 999,
      name: "gimmighoul",
      displayName: "Gimmighoul",
      type: Type.Ghost
    },
    {
      dex: 1000,
      name: "gholdengo",
      displayName: "Gholdengo",
      type: Type.Steel,
      type2: Type.Ghost
    },
    {
      dex: 1001,
      name: "wochien",
      displayName: "Wo-Chien",
      type: Type.Dark,
      type2: Type.Grass,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1002,
      name: "chienpao",
      displayName: "Chien-Pao",
      type: Type.Dark,
      type2: Type.Ice,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1003,
      name: "tinglu",
      displayName: "Ting-Lu",
      type: Type.Dark,
      type2: Type.Ground,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1004,
      name: "chiyu",
      displayName: "Chi-Yu",
      type: Type.Dark,
      type2: Type.Fire,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1005,
      name: "roaringmoon",
      displayName: "Roaring Moon",
      type: Type.Dragon,
      type2: Type.Dark,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1006,
      name: "ironvaliant",
      displayName: "Iron Valiant",
      type: Type.Fairy,
      type2: Type.Fighting,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1007,
      name: "koraidon",
      displayName: "Koraidon",
      type: Type.Fighting,
      type2: Type.Dragon,
      category: PokemonCategory.Legendary,
      category2: PokemonCategory.Paradox
    },
    {
      dex: 1008,
      name: "miraidon",
      displayName: "Miraidon",
      type: Type.Electric,
      type2: Type.Dragon,
      category: PokemonCategory.Legendary,
      category2: PokemonCategory.Paradox
    },
    {
      dex: 1009,
      name: "walkingwake",
      displayName: "Walking Wake",
      type: Type.Water,
      type2: Type.Dragon,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1010,
      name: "ironleaves",
      displayName: "Iron Leaves",
      type: Type.Grass,
      type2: Type.Psychic,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1011,
      name: "dipplin",
      displayName: "Dipplin",
      type: Type.Grass,
      type2: Type.Dragon
    },
    {
      dex: 1012,
      name: "poltchageist",
      displayName: "Poltchageist",
      type: Type.Grass,
      type2: Type.Ghost
    },
    {
      dex: 1013,
      name: "sinistcha",
      displayName: "Sinistcha",
      type: Type.Grass,
      type2: Type.Ghost
    },
    {
      dex: 1014,
      name: "okidogi",
      displayName: "Okidogi",
      type: Type.Poison,
      type2: Type.Fighting,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1015,
      name: "munkidori",
      displayName: "Munkidori",
      type: Type.Poison,
      type2: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1016,
      name: "fezandipiti",
      displayName: "Fezandipiti",
      type: Type.Poison,
      type2: Type.Fairy,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1017,
      name: "ogerpon",
      img: "ogerpon",
      displayName: "Ogerpon",
      type: Type.Grass,
      noDefaultForm: true,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1017,
      name: "ogerpon",
      img: "ogerpon-teal",
      displayName: "Teal Mask Ogerpon",
      type: Type.Grass,
      isVariant: true
    },
    {
      dex: 1017,
      name: "ogerpon",
      img: "ogerpon-wellspring",
      displayName: "Wellspring Mask Ogerpon",
      type: Type.Grass,
      type2: Type.Water,
      isVariant: true
    },
    {
      dex: 1017,
      name: "ogerpon",
      img: "ogerpon-hearthflame",
      displayName: "Hearthflame Mask Ogerpon",
      type: Type.Grass,
      type2: Type.Fire,
      isVariant: true
    },
    {
      dex: 1017,
      name: "ogerpon",
      img: "ogerpon-cornerstone",
      displayName: "Cornerstone Mask Ogerpon",
      type: Type.Grass,
      type2: Type.Rock,
      isVariant: true
    },
    {
      dex: 1018,
      name: "archaludon",
      displayName: "Archaludon",
      type: Type.Steel,
      type2: Type.Dragon
    },
    {
      dex: 1019,
      name: "hydrapple",
      displayName: "Hydrapple",
      type: Type.Grass,
      type2: Type.Dragon
    },
    {
      dex: 1020,
      name: "gougingfire",
      displayName: "Gouging Fire",
      type: Type.Fire,
      type2: Type.Dragon,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1021,
      name: "ragingbolt",
      displayName: "Raging Bolt",
      type: Type.Electric,
      type2: Type.Dragon,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1022,
      name: "ironboulder",
      displayName: "Iron Boulder",
      type: Type.Rock,
      type2: Type.Psychic,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1023,
      name: "ironcrown",
      displayName: "Iron Crown",
      type: Type.Steel,
      type2: Type.Psychic,
      category: PokemonCategory.Paradox
    },
    {
      dex: 1024,
      name: "terapagos",
      displayName: "Terapagos",
      type: Type.Normal,
      category: PokemonCategory.Legendary
    },
    {
      dex: 1025,
      name: "pecharunt",
      displayName: "Pecharunt",
      type: Type.Poison,
      type2: Type.Ghost,
      category: PokemonCategory.Mythical
    }
  ]
};
