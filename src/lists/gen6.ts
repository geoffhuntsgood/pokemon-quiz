import type { Generation } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export const gen6: Generation = {
  number: GenNumber.Six,
  abilities: [
    {
      number: 165,
      name: "aromaveil",
      displayName: "Aroma Veil",
      description:
        "Protects the Pokémon and its allies from effects that prevent the use of moves."
    },
    {
      number: 166,
      name: "flowerveil",
      displayName: "Flower Veil",
      description:
        "Ally Grass-type Pokémon are protected from status conditions and the lowering of their stats."
    },
    {
      number: 167,
      name: "cheekpouch",
      displayName: "Cheek Pouch",
      description:
        "The Pokémon's HP is restored when it eats any Berry, in addition to the Berry's usual effect."
    },
    {
      number: 168,
      name: "protean",
      displayName: "Protean",
      description:
        "Changes the Pokémon's type to the type of the move it's about to use. This works only once each time the Pokémon enters battle."
    },
    {
      number: 169,
      name: "furcoat",
      displayName: "Fur Coat",
      description: "Halves the damage taken from physical moves."
    },
    {
      number: 170,
      name: "magician",
      displayName: "Magician",
      description:
        "The Pokémon steals the held item from any target it hits with a move."
    },
    {
      number: 171,
      name: "bulletproof",
      displayName: "Bulletproof",
      description: "Protects the Pokémon from ball and bomb moves."
    },
    {
      number: 172,
      name: "competitive",
      displayName: "Competitive",
      description:
        "Boosts the Pokémon's Sp. Atk stat sharply when its stats are lowered by an opposing Pokémon."
    },
    {
      number: 173,
      name: "strongjaw",
      displayName: "Strong Jaw",
      description: "The Pokémon boosts the power of its biting moves."
    },
    {
      number: 174,
      name: "refrigerate",
      displayName: "Refrigerate",
      description:
        "Normal-type moves become Ice-type moves. The power of those moves is boosted a little."
    },
    {
      number: 175,
      name: "sweetveil",
      displayName: "Sweet Veil",
      description: "Prevents the Pokémon and its allies from falling asleep."
    },
    {
      number: 176,
      name: "stancechange",
      displayName: "Stance Change",
      description:
        "The Pokémon changes its form to Blade Forme when it uses an attack move and changes to Shield Forme when it uses King's Shield."
    },
    {
      number: 177,
      name: "galewings",
      displayName: "Gale Wings",
      description:
        "Gives priority to the Pokémon's Flying-type moves while its HP is full."
    },
    {
      number: 178,
      name: "megalauncher",
      displayName: "Mega Launcher",
      description: "Powers up pulse moves."
    },
    {
      number: 179,
      name: "grasspelt",
      displayName: "Grass Pelt",
      description: "Boosts the Pokémon's Defense stat on Grassy Terrain."
    },
    {
      number: 180,
      name: "symbiosis",
      displayName: "Symbiosis",
      description:
        "The Pokémon passes its held item to an ally that has used up an item."
    },
    {
      number: 181,
      name: "toughclaws",
      displayName: "Tough Claws",
      description: "Powers up moves that make direct contact."
    },
    {
      number: 182,
      name: "pixilate",
      displayName: "Pixilate",
      description:
        "Normal-type moves become Fairy-type moves. The power of those moves is boosted a little."
    },
    {
      number: 183,
      name: "gooey",
      displayName: "Gooey",
      description: "Contact with the Pokémon lowers the attacker's Speed stat."
    },
    {
      number: 184,
      name: "aerilate",
      displayName: "Aerilate",
      description:
        "Normal-type moves become Flying-type moves. The power of those moves is boosted a little."
    },
    {
      number: 185,
      name: "parentalbond",
      displayName: "Parental Bond",
      description: "The parent and child attack one after the other.",
      isUnique: true
    },
    {
      number: 186,
      name: "darkaura",
      displayName: "Dark Aura",
      description: "Powers up the Dark-type moves of all Pokémon on the field.",
      isUnique: true
    },
    {
      number: 187,
      name: "fairyaura",
      displayName: "Fairy Aura",
      description:
        "Powers up the Fairy-type moves of all Pokémon on the field.",
      isUnique: true
    },
    {
      number: 188,
      name: "aurabreak",
      displayName: "Aura Break",
      description:
        "The effects of 'Aura' Abilities are reversed to lower the power of affected moves."
    },
    {
      number: 189,
      name: "primordialsea",
      displayName: "Primordial Sea",
      description:
        "The Pokémon changes the weather to nullify Fire-type attacks.",
      isUnique: true
    },
    {
      number: 190,
      name: "desolateland",
      displayName: "Desolate Land",
      description:
        "The Pokémon changes the weather to nullify Water-type attacks.",
      isUnique: true
    },
    {
      number: 191,
      name: "deltastream",
      displayName: "Delta Stream",
      description:
        "The Pokémon changes the weather so that no moves are supereffective against the Flying type.",
      isUnique: true
    }
  ],
  moves: [
    {
      number: 560,
      name: "flyingpress",
      displayName: "Flying Press",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 561,
      name: "matblock",
      displayName: "Mat Block",
      type: Type.Fighting,
      category: MoveCategory.Status
    },
    {
      number: 562,
      name: "belch",
      displayName: "Belch",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 563,
      name: "rototiller",
      displayName: "Rototiller",
      type: Type.Ground,
      category: MoveCategory.Status
    },
    {
      number: 564,
      name: "stickyweb",
      displayName: "Sticky Web",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 565,
      name: "fellstinger",
      displayName: "Fell Stinger",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 566,
      name: "phantomforce",
      displayName: "Phantom Force",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 567,
      name: "trickortreat",
      displayName: "Trick-or-Treat",
      type: Type.Ghost,
      category: MoveCategory.Status
    },
    {
      number: 568,
      name: "nobleroar",
      displayName: "Noble Roar",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 569,
      name: "iondeluge",
      displayName: "Ion Deluge",
      type: Type.Electric,
      category: MoveCategory.Status
    },
    {
      number: 570,
      name: "paraboliccharge",
      displayName: "Parabolic Charge",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 571,
      name: "forestscurse",
      displayName: "Forest's Curse",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 572,
      name: "petalblizzard",
      displayName: "Petal Blizzard",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 573,
      name: "freezedry",
      displayName: "Freeze-Dry",
      type: Type.Ice,
      category: MoveCategory.Special
    },
    {
      number: 574,
      name: "disarmingvoice",
      displayName: "Disarming Voice",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 575,
      name: "partingshot",
      displayName: "Parting Shot",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 576,
      name: "topsyturvy",
      displayName: "Topsy-Turvy",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 577,
      name: "drainingkiss",
      displayName: "Draining Kiss",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 578,
      name: "craftyshield",
      displayName: "Crafty Shield",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 579,
      name: "flowershield",
      displayName: "Flower Shield",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 580,
      name: "grassyterrain",
      displayName: "Grassy Terrain",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 581,
      name: "mistyterrain",
      displayName: "Misty Terrain",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 582,
      name: "electrify",
      displayName: "Electrify",
      type: Type.Electric,
      category: MoveCategory.Status
    },
    {
      number: 583,
      name: "playrough",
      displayName: "Play Rough",
      type: Type.Fairy,
      category: MoveCategory.Physical
    },
    {
      number: 584,
      name: "fairywind",
      displayName: "Fairy Wind",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 585,
      name: "moonblast",
      displayName: "Moonblast",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 586,
      name: "boomburst",
      displayName: "Boomburst",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 587,
      name: "fairylock",
      displayName: "Fairy Lock",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 588,
      name: "kingsshield",
      displayName: "King's Shield",
      type: Type.Steel,
      category: MoveCategory.Status
    },
    {
      number: 589,
      name: "playnice",
      displayName: "Play Nice",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 590,
      name: "confide",
      displayName: "Confide",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 591,
      name: "diamondstorm",
      displayName: "Diamond Storm",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 592,
      name: "steameruption",
      displayName: "Steam Eruption",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 593,
      name: "hyperspacehole",
      displayName: "Hyperspace Hole",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 594,
      name: "watershuriken",
      displayName: "Water Shuriken",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 595,
      name: "mysticalfire",
      displayName: "Mystical Fire",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 596,
      name: "spikyshield",
      displayName: "Spiky Shield",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 597,
      name: "aromaticmist",
      displayName: "Aromatic Mist",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 598,
      name: "eerieimpulse",
      displayName: "Eerie Impulse",
      type: Type.Electric,
      category: MoveCategory.Status
    },
    {
      number: 599,
      name: "venomdrench",
      displayName: "Venom Drench",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 600,
      name: "powder",
      displayName: "Powder",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 601,
      name: "geomancy",
      displayName: "Geomancy",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 602,
      name: "magneticflux",
      displayName: "Magnetic Flux",
      type: Type.Electric,
      category: MoveCategory.Status
    },
    {
      number: 603,
      name: "happyhour",
      displayName: "Happy Hour",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 604,
      name: "electricterrain",
      displayName: "Electric Terrain",
      type: Type.Electric,
      category: MoveCategory.Status
    },
    {
      number: 605,
      name: "dazzlinggleam",
      displayName: "Dazzling Gleam",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 606,
      name: "celebrate",
      displayName: "Celebrate",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 607,
      name: "holdhands",
      displayName: "Hold Hands",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 608,
      name: "babydolleyes",
      displayName: "Baby-Doll Eyes",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 609,
      name: "nuzzle",
      displayName: "Nuzzle",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 610,
      name: "holdback",
      displayName: "Hold Back",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 611,
      name: "infestation",
      displayName: "Infestation",
      type: Type.Bug,
      category: MoveCategory.Special
    },
    {
      number: 612,
      name: "poweruppunch",
      displayName: "Power-Up Punch",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 613,
      name: "oblivionwing",
      displayName: "Oblivion Wing",
      type: Type.Flying,
      category: MoveCategory.Special
    },
    {
      number: 614,
      name: "thousandarrows",
      displayName: "Thousand Arrows",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 615,
      name: "thousandwaves",
      displayName: "Thousand Waves",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 616,
      name: "landswrath",
      displayName: "Land's Wrath",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 617,
      name: "lightofruin",
      displayName: "Light of Ruin",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 618,
      name: "originpulse",
      displayName: "Origin Pulse",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 619,
      name: "precipiceblades",
      displayName: "Precipice Blades",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 620,
      name: "dragonascent",
      displayName: "Dragon Ascent",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 621,
      name: "hyperspacefury",
      displayName: "Hyperspace Fury",
      type: Type.Dark,
      category: MoveCategory.Physical
    }
  ],
  pokemon: [
    {
      dex: 650,
      name: "chespin",
      displayName: "Chespin",
      type: Type.Grass
    },
    {
      dex: 651,
      name: "quilladin",
      displayName: "Quilladin",
      type: Type.Grass
    },
    {
      dex: 652,
      name: "chesnaught",
      displayName: "Chesnaught",
      type: Type.Grass,
      type2: Type.Fighting
    },
    {
      dex: 652,
      name: "chesnaught",
      img: "chesnaught-mega",
      displayName: "Mega Chesnaught",
      type: Type.Grass,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 653,
      name: "fennekin",
      displayName: "Fennekin",
      type: Type.Fire
    },
    {
      dex: 654,
      name: "braixen",
      displayName: "Braixen",
      type: Type.Fire
    },
    {
      dex: 655,
      name: "delphox",
      displayName: "Delphox",
      type: Type.Fire,
      type2: Type.Psychic
    },
    {
      dex: 655,
      name: "delphox",
      img: "delphox-mega",
      displayName: "Mega Delphox",
      type: Type.Fire,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 656,
      name: "froakie",
      displayName: "Froakie",
      type: Type.Water
    },
    {
      dex: 657,
      name: "frogadier",
      displayName: "Frogadier",
      type: Type.Water
    },
    {
      dex: 658,
      name: "greninja",
      displayName: "Greninja",
      type: Type.Water,
      type2: Type.Dark
    },
    {
      dex: 658,
      name: "greninja",
      img: "greninja-mega",
      displayName: "Mega Greninja",
      type: Type.Water,
      type2: Type.Dark,
      isVariant: true
    },
    {
      dex: 659,
      name: "bunnelby",
      displayName: "Bunnelby",
      type: Type.Normal
    },
    {
      dex: 660,
      name: "diggersby",
      displayName: "Diggersby",
      type: Type.Normal,
      type2: Type.Ground
    },
    {
      dex: 661,
      name: "fletchling",
      displayName: "Fletchling",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 662,
      name: "fletchinder",
      displayName: "Fletchinder",
      type: Type.Fire,
      type2: Type.Flying
    },
    {
      dex: 663,
      name: "talonflame",
      displayName: "Talonflame",
      type: Type.Fire,
      type2: Type.Flying
    },
    {
      dex: 664,
      name: "scatterbug",
      displayName: "Scatterbug",
      type: Type.Bug
    },
    {
      dex: 665,
      name: "spewpa",
      displayName: "Spewpa",
      type: Type.Bug
    },
    {
      dex: 666,
      name: "vivillon",
      displayName: "Vivillon",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 667,
      name: "litleo",
      displayName: "Litleo",
      type: Type.Fire,
      type2: Type.Normal
    },
    {
      dex: 668,
      name: "pyroar",
      displayName: "Pyroar",
      type: Type.Fire,
      type2: Type.Normal
    },
    {
      dex: 668,
      name: "pyroar",
      img: "pyroar-mega",
      displayName: "Mega Pyroar",
      type: Type.Fire,
      type2: Type.Normal,
      isVariant: true
    },
    {
      dex: 669,
      name: "flabebe",
      displayName: "Flabébé",
      type: Type.Fairy
    },
    {
      dex: 670,
      name: "floette",
      displayName: "Floette",
      type: Type.Fairy
    },
    {
      dex: 670,
      name: "floette",
      img: "floette-mega",
      displayName: "Mega Eternal Flower Floette",
      type: Type.Fairy,
      isVariant: true
    },
    {
      dex: 671,
      name: "florges",
      displayName: "Florges",
      type: Type.Fairy
    },
    {
      dex: 672,
      name: "skiddo",
      displayName: "Skiddo",
      type: Type.Grass
    },
    {
      dex: 673,
      name: "gogoat",
      displayName: "Gogoat",
      type: Type.Grass
    },
    {
      dex: 674,
      name: "pancham",
      displayName: "Pancham",
      type: Type.Fighting
    },
    {
      dex: 675,
      name: "pangoro",
      displayName: "Pangoro",
      type: Type.Fighting,
      type2: Type.Dark
    },
    {
      dex: 676,
      name: "furfrou",
      displayName: "Furfrou",
      type: Type.Normal
    },
    {
      dex: 677,
      name: "espurr",
      displayName: "Espurr",
      type: Type.Psychic
    },
    {
      dex: 678,
      name: "meowstic",
      displayName: "Meowstic",
      type: Type.Psychic
    },
    {
      dex: 679,
      name: "honedge",
      displayName: "Honedge",
      type: Type.Steel,
      type2: Type.Ghost
    },
    {
      dex: 680,
      name: "doublade",
      displayName: "Doublade",
      type: Type.Steel,
      type2: Type.Ghost
    },
    {
      dex: 681,
      name: "aegislash",
      displayName: "Aegislash",
      type: Type.Steel,
      type2: Type.Ghost
    },
    {
      dex: 682,
      name: "spritzee",
      displayName: "Spritzee",
      type: Type.Fairy
    },
    {
      dex: 683,
      name: "aromatisse",
      displayName: "Aromatisse",
      type: Type.Fairy
    },
    {
      dex: 684,
      name: "swirlix",
      displayName: "Swirlix",
      type: Type.Fairy
    },
    {
      dex: 685,
      name: "slurpuff",
      displayName: "Slurpuff",
      type: Type.Fairy
    },
    {
      dex: 686,
      name: "inkay",
      displayName: "Inkay",
      type: Type.Dark,
      type2: Type.Psychic
    },
    {
      dex: 687,
      name: "malamar",
      displayName: "Malamar",
      type: Type.Dark,
      type2: Type.Psychic
    },
    {
      dex: 687,
      name: "malamar",
      img: "malamar-mega",
      displayName: "Mega Malamar",
      type: Type.Dark,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 688,
      name: "binacle",
      displayName: "Binacle",
      type: Type.Rock,
      type2: Type.Water
    },
    {
      dex: 689,
      name: "barbaracle",
      displayName: "Barbaracle",
      type: Type.Rock,
      type2: Type.Water
    },
    {
      dex: 689,
      name: "barbaracle",
      img: "barbaracle-mega",
      displayName: "Mega Barbaracle",
      type: Type.Rock,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 690,
      name: "skrelp",
      displayName: "Skrelp",
      type: Type.Poison,
      type2: Type.Water
    },
    {
      dex: 691,
      name: "dragalge",
      displayName: "Dragalge",
      type: Type.Poison,
      type2: Type.Dragon
    },
    {
      dex: 691,
      name: "dragalge",
      img: "dragalge-mega",
      displayName: "Mega Dragalge",
      type: Type.Poison,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 692,
      name: "clauncher",
      displayName: "Clauncher",
      type: Type.Water
    },
    {
      dex: 693,
      name: "clawitzer",
      displayName: "Clawitzer",
      type: Type.Water
    },
    {
      dex: 694,
      name: "helioptile",
      displayName: "Helioptile",
      type: Type.Electric,
      type2: Type.Normal
    },
    {
      dex: 695,
      name: "heliolisk",
      displayName: "Heliolisk",
      type: Type.Electric,
      type2: Type.Normal
    },
    {
      dex: 696,
      name: "tyrunt",
      displayName: "Tyrunt",
      type: Type.Rock,
      type2: Type.Dragon,
      category: PokemonCategory.Fossil
    },
    {
      dex: 697,
      name: "tyrantrum",
      displayName: "Tyrantrum",
      type: Type.Rock,
      type2: Type.Dragon,
      category: PokemonCategory.Fossil
    },
    {
      dex: 698,
      name: "amaura",
      displayName: "Amaura",
      type: Type.Rock,
      type2: Type.Ice,
      category: PokemonCategory.Fossil
    },
    {
      dex: 699,
      name: "aurorus",
      displayName: "Aurorus",
      type: Type.Rock,
      type2: Type.Ice,
      category: PokemonCategory.Fossil
    },
    {
      dex: 700,
      name: "sylveon",
      displayName: "Sylveon",
      type: Type.Fairy
    },
    {
      dex: 701,
      name: "hawlucha",
      displayName: "Hawlucha",
      type: Type.Fighting,
      type2: Type.Flying
    },
    {
      dex: 701,
      name: "hawlucha",
      img: "hawlucha-mega",
      displayName: "Mega Hawlucha",
      type: Type.Fighting,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 702,
      name: "dedenne",
      displayName: "Dedenne",
      type: Type.Electric,
      type2: Type.Fairy
    },
    {
      dex: 703,
      name: "carbink",
      displayName: "Carbink",
      type: Type.Rock,
      type2: Type.Fairy
    },
    {
      dex: 704,
      name: "goomy",
      displayName: "Goomy",
      type: Type.Dragon
    },
    {
      dex: 705,
      name: "sliggoo",
      displayName: "Sliggoo",
      type: Type.Dragon
    },
    {
      dex: 705,
      name: "sliggoo",
      img: "sliggoo-hisuian",
      displayName: "Hisuian Sliggoo",
      type: Type.Steel,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 706,
      name: "goodra",
      displayName: "Goodra",
      type: Type.Dragon
    },
    {
      dex: 706,
      name: "goodra",
      img: "goodra-hisuian",
      displayName: "Hisuian Goodra",
      type: Type.Steel,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 707,
      name: "klefki",
      displayName: "Klefki",
      type: Type.Steel,
      type2: Type.Fairy
    },
    {
      dex: 708,
      name: "phantump",
      displayName: "Phantump",
      type: Type.Ghost,
      type2: Type.Grass
    },
    {
      dex: 709,
      name: "trevenant",
      displayName: "Trevenant",
      type: Type.Ghost,
      type2: Type.Grass
    },
    {
      dex: 710,
      name: "pumpkaboo",
      displayName: "Pumpkaboo",
      type: Type.Ghost,
      type2: Type.Grass
    },
    {
      dex: 711,
      name: "gourgeist",
      displayName: "Gourgeist",
      type: Type.Ghost,
      type2: Type.Grass
    },
    {
      dex: 712,
      name: "bergmite",
      displayName: "Bergmite",
      type: Type.Ice
    },
    {
      dex: 713,
      name: "avalugg",
      displayName: "Avalugg",
      type: Type.Ice
    },
    {
      dex: 713,
      name: "avalugg",
      img: "avalugg-hisuian",
      displayName: "Hisuian Avalugg",
      type: Type.Ice,
      type2: Type.Rock,
      isVariant: true
    },
    {
      dex: 714,
      name: "noibat",
      displayName: "Noibat",
      type: Type.Flying,
      type2: Type.Dragon
    },
    {
      dex: 715,
      name: "noivern",
      displayName: "Noivern",
      type: Type.Flying,
      type2: Type.Dragon
    },
    {
      dex: 716,
      name: "xerneas",
      displayName: "Xerneas",
      type: Type.Fairy,
      category: PokemonCategory.Legendary
    },
    {
      dex: 717,
      name: "yveltal",
      displayName: "Yveltal",
      type: Type.Dark,
      type2: Type.Flying,
      category: PokemonCategory.Legendary
    },
    {
      dex: 718,
      name: "zygarde",
      displayName: "Zygarde",
      type: Type.Dragon,
      type2: Type.Ground,
      category: PokemonCategory.Legendary
    },
    {
      dex: 718,
      name: "zygarde",
      img: "zygarde-mega",
      displayName: "Mega Zygarde",
      type: Type.Dragon,
      type2: Type.Ground,
      isVariant: true
    },
    {
      dex: 719,
      name: "diancie",
      displayName: "Diancie",
      type: Type.Rock,
      type2: Type.Fairy,
      category: PokemonCategory.Mythical
    },
    {
      dex: 719,
      name: "diancie",
      img: "diancie-mega",
      displayName: "Mega Diancie",
      type: Type.Rock,
      type2: Type.Fairy,
      isVariant: true
    },
    {
      dex: 720,
      name: "hoopa",
      img: "hoopa-confined",
      displayName: "Hoopa",
      type: Type.Psychic,
      type2: Type.Varies,
      noDefaultForm: true,
      category: PokemonCategory.Mythical
    },
    {
      dex: 720,
      name: "hoopa",
      img: "hoopa-confined",
      displayName: "Hoopa Confined",
      type: Type.Psychic,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 720,
      name: "hoopa",
      img: "hoopa-unbound",
      displayName: "Hoopa Unbound",
      type: Type.Psychic,
      type2: Type.Dark,
      isVariant: true
    },
    {
      dex: 721,
      name: "volcanion",
      displayName: "Volcanion",
      type: Type.Fire,
      type2: Type.Water,
      category: PokemonCategory.Mythical
    }
  ]
};
