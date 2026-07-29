import type { Generation } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export const gen8: Generation = {
  number: GenNumber.Eight,
  abilities: [
    {
      number: 234,
      name: "intrepidsword",
      displayName: "Intrepid Sword",
      description:
        "Boosts the Pokémon's Attack stat when the Pokémon enters a battle for the first time."
    },
    {
      number: 235,
      name: "dauntlessshield",
      displayName: "Dauntless Shield",
      description:
        "Boosts the Pokémon's Defense stat when the Pokémon enters a battle for the first time."
    },
    {
      number: 236,
      name: "libero",
      displayName: "Libero",
      description:
        "Changes the Pokémon's type to the type of the move it's about to use. This works only once each time the Pokémon enters battle."
    },
    {
      number: 237,
      name: "ballfetch",
      displayName: "Ball Fetch",
      description:
        "If the Pokémon is not holding an item, it will fetch the Poké Ball from the first failed throw of the battle.",
      isUnique: true
    },
    {
      number: 238,
      name: "cottondown",
      displayName: "Cotton Down",
      description:
        "When the Pokémon is hit by an attack, it lowers the Speed stats of all Pokémon except itself."
    },
    {
      number: 239,
      name: "propellertail",
      displayName: "Propeller Tail",
      description:
        "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves."
    },
    {
      number: 240,
      name: "mirrorarmor",
      displayName: "Mirror Armor",
      description:
        "Bounces back only the stat-lowering effects that the Pokémon receives.",
      isUnique: true
    },
    {
      number: 241,
      name: "gulpmissile",
      displayName: "Gulp Missile",
      description:
        "When the Pokémon uses Surf or Dive, it will come back with prey. When it takes damage, it will spit out the prey to attack.",
      isUnique: true
    },
    {
      number: 242,
      name: "stalwart",
      displayName: "Stalwart",
      description:
        "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves."
    },
    {
      number: 243,
      name: "steamengine",
      displayName: "Steam Engine",
      description:
        "Boosts the Speed stat drastically when the Pokémon is hit by a Fire- or Water-type move."
    },
    {
      number: 244,
      name: "punkrock",
      displayName: "Punk Rock",
      description:
        "Boosts the power of sound-based moves. The Pokémon also takes half the damage from these kinds of moves."
    },
    {
      number: 245,
      name: "sandspit",
      displayName: "Sand Spit",
      description: "The Pokémon creates a sandstorm when it's hit by an attack."
    },
    {
      number: 246,
      name: "icescales",
      displayName: "Ice Scales",
      description: "The Pokémon halves the damage taken from special moves."
    },
    {
      number: 247,
      name: "ripen",
      displayName: "Ripen",
      description: "Doubles the effects of Berries."
    },
    {
      number: 248,
      name: "iceface",
      displayName: "Ice Face",
      description:
        "The Pokémon can take a physical attack as a substitute, but the attack also changes the Pokémon's appearance. The substitute will be restored when it snows."
    },
    {
      number: 249,
      name: "powerspot",
      displayName: "Power Spot",
      description: "Just being next to the Pokémon powers up moves.",
      isUnique: true
    },
    {
      number: 250,
      name: "mimicry",
      displayName: "Mimicry",
      description: "Changes the Pokémon's type depending on the terrain.",
      isUnique: true
    },
    {
      number: 251,
      name: "screencleaner",
      displayName: "Screen Cleaner",
      description:
        "When the Pokémon enters a battle, the effects of Light Screen, Reflect, and Aurora Veil are nullified for both opposing and ally Pokémon."
    },
    {
      number: 252,
      name: "steelyspirit",
      displayName: "Steely Spirit",
      description:
        "Powers up the Steel-type moves of the Pokémon and its allies.",
      isUnique: true
    },
    {
      number: 253,
      name: "perishbody",
      displayName: "Perish Body",
      description:
        "When hit by a move that makes direct contact, the Pokémon and the attacker will faint after three turns unless they switch out of battle.",
      isUnique: true
    },
    {
      number: 254,
      name: "wanderingspirit",
      displayName: "Wandering Spirit",
      description:
        "The Pokémon exchanges Abilities with a Pokémon that hits it with a move that makes direct contact."
    },
    {
      number: 255,
      name: "gorillatactics",
      displayName: "Gorilla Tactics",
      description:
        "Boosts the Pokémon's Attack stat, but only allows the use of the first selected move."
    },
    {
      number: 256,
      name: "neutralizinggas",
      displayName: "Neutralizing Gas",
      description:
        "While the Pokémon is in battle, the effects of all other Pokémon's Abilities will be nullified or will not be triggered."
    },
    {
      number: 257,
      name: "pastelveil",
      displayName: "Pastel Veil",
      description: "Prevents the Pokémon and its allies from being poisoned."
    },
    {
      number: 258,
      name: "hungerswitch",
      displayName: "Hunger Switch",
      description:
        "The Pokémon changes its form, alternating between its Full Belly Mode and Hangry Mode after the end of every turn."
    },
    {
      number: 259,
      name: "quickdraw",
      displayName: "Quick Draw",
      description: "Enables the Pokémon to move first occasionally.",
      isUnique: true
    },
    {
      number: 260,
      name: "unseenfist",
      displayName: "Unseen Fist",
      description:
        "If the Pokémon uses moves that make direct contact, it can attack the target even if it protects itself."
    },
    {
      number: 261,
      name: "curiousmedicine",
      displayName: "Curious Medicine",
      description:
        "When the Pokémon enters a battle, it removes all stat changes from allies.",
      isUnique: true
    },
    {
      number: 262,
      name: "transistor",
      displayName: "Transistor",
      description: "Powers up Electric-type moves.",
      isUnique: true
    },
    {
      number: 263,
      name: "dragonsmaw",
      displayName: "Dragon's Maw",
      description: "Powers up Dragon-type moves.",
      isUnique: true
    },
    {
      number: 264,
      name: "chillingneigh",
      displayName: "Chilling Neigh",
      description:
        "When the Pokémon knocks out a target, it boosts its Attack stat.",
      isUnique: true
    },
    {
      number: 265,
      name: "grimneigh",
      displayName: "Grim Neigh",
      description:
        "When the Pokémon knocks out a target, it boosts its Sp. Atk stat.",
      isUnique: true
    },
    {
      number: 266,
      name: "asone",
      displayName: "As One (Glastrier)",
      description:
        "This Ability combines the effects of both Calyrex's and Glastrier's Abilities."
    },
    {
      number: 267,
      name: "asone",
      displayName: "As One (Spectrier)",
      description:
        "This Ability combines the effects of both Calyrex's and Spectrier's Abilities."
    }
  ],
  moves: [
    {
      number: 743,
      name: "maxguard",
      displayName: "Max Guard",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 744,
      name: "dynamaxcannon",
      displayName: "Dynamax Cannon",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 745,
      name: "snipeshot",
      displayName: "Snipe Shot",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 746,
      name: "jawlock",
      displayName: "Jaw Lock",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 747,
      name: "stuffcheeks",
      displayName: "Stuff Cheeks",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 748,
      name: "noretreat",
      displayName: "No Retreat",
      type: Type.Fighting,
      category: MoveCategory.Status
    },
    {
      number: 749,
      name: "tarshot",
      displayName: "Tar Shot",
      type: Type.Rock,
      category: MoveCategory.Status
    },
    {
      number: 750,
      name: "magicpowder",
      displayName: "Magic Powder",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 751,
      name: "dragondarts",
      displayName: "Dragon Darts",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 752,
      name: "teatime",
      displayName: "Teatime",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 753,
      name: "octolock",
      displayName: "Octolock",
      type: Type.Fighting,
      category: MoveCategory.Status
    },
    {
      number: 754,
      name: "boltbeak",
      displayName: "Bolt Beak",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 755,
      name: "fishiousrend",
      displayName: "Fishious Rend",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 756,
      name: "courtchange",
      displayName: "Court Change",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 757,
      name: "maxflare",
      displayName: "Max Flare",
      type: Type.Fire,
      category: MoveCategory.Max
    },
    {
      number: 758,
      name: "maxflutterby",
      displayName: "Max Flutterby",
      type: Type.Bug,
      category: MoveCategory.Max
    },
    {
      number: 759,
      name: "maxlightning",
      displayName: "Max Lightning",
      type: Type.Electric,
      category: MoveCategory.Max
    },
    {
      number: 760,
      name: "maxstrike",
      displayName: "Max Strike",
      type: Type.Normal,
      category: MoveCategory.Max
    },
    {
      number: 761,
      name: "maxknuckle",
      displayName: "Max Knuckle",
      type: Type.Fighting,
      category: MoveCategory.Max
    },
    {
      number: 762,
      name: "maxphantasm",
      displayName: "Max Phantasm",
      type: Type.Ghost,
      category: MoveCategory.Max
    },
    {
      number: 763,
      name: "maxhailstorm",
      displayName: "Max Hailstorm",
      type: Type.Ice,
      category: MoveCategory.Max
    },
    {
      number: 764,
      name: "maxooze",
      displayName: "Max Ooze",
      type: Type.Poison,
      category: MoveCategory.Max
    },
    {
      number: 765,
      name: "maxgeyser",
      displayName: "Max Geyser",
      type: Type.Water,
      category: MoveCategory.Max
    },
    {
      number: 766,
      name: "maxairstream",
      displayName: "Max Airstream",
      type: Type.Flying,
      category: MoveCategory.Max
    },
    {
      number: 767,
      name: "maxstarfall",
      displayName: "Max Starfall",
      type: Type.Fairy,
      category: MoveCategory.Max
    },
    {
      number: 768,
      name: "maxwyrmwind",
      displayName: "Max Wyrmwind",
      type: Type.Dragon,
      category: MoveCategory.Max
    },
    {
      number: 769,
      name: "maxmindstorm",
      displayName: "Max Mindstorm",
      type: Type.Psychic,
      category: MoveCategory.Max
    },
    {
      number: 770,
      name: "maxrockfall",
      displayName: "Max Rockfall",
      type: Type.Rock,
      category: MoveCategory.Max
    },
    {
      number: 771,
      name: "maxquake",
      displayName: "Max Quake",
      type: Type.Ground,
      category: MoveCategory.Max
    },
    {
      number: 772,
      name: "maxdarkness",
      displayName: "Max Darkness",
      type: Type.Dark,
      category: MoveCategory.Max
    },
    {
      number: 773,
      name: "maxovergrowth",
      displayName: "Max Overgrowth",
      type: Type.Grass,
      category: MoveCategory.Max
    },
    {
      number: 774,
      name: "maxsteelspike",
      displayName: "Max Steelspike",
      type: Type.Steel,
      category: MoveCategory.Max
    },
    {
      number: 775,
      name: "clangoroussoul",
      displayName: "Clangorous Soul",
      type: Type.Dragon,
      category: MoveCategory.Status
    },
    {
      number: 776,
      name: "bodypress",
      displayName: "Body Press",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 777,
      name: "decorate",
      displayName: "Decorate",
      type: Type.Fairy,
      category: MoveCategory.Status
    },
    {
      number: 778,
      name: "drumbeating",
      displayName: "Drum Beating",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 779,
      name: "snaptrap",
      displayName: "Snap Trap",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 780,
      name: "pyroball",
      displayName: "Pyro Ball",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 781,
      name: "behemothblade",
      displayName: "Behemoth Blade",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 782,
      name: "behemothbash",
      displayName: "Behemoth Bash",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 783,
      name: "aurawheel",
      displayName: "Aura Wheel",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 784,
      name: "breakingswipe",
      displayName: "Breaking Swipe",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 785,
      name: "branchpoke",
      displayName: "Branch Poke",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 786,
      name: "overdrive",
      displayName: "Overdrive",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 787,
      name: "appleacid",
      displayName: "Apple Acid",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 788,
      name: "gravapple",
      displayName: "Grav Apple",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 789,
      name: "spiritbreak",
      displayName: "Spirit Break",
      type: Type.Fairy,
      category: MoveCategory.Physical
    },
    {
      number: 790,
      name: "strangesteam",
      displayName: "Strange Steam",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 791,
      name: "lifedew",
      displayName: "Life Dew",
      type: Type.Water,
      category: MoveCategory.Status
    },
    {
      number: 792,
      name: "obstruct",
      displayName: "Obstruct",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 793,
      name: "falsesurrender",
      displayName: "False Surrender",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 794,
      name: "meteorassault",
      displayName: "Meteor Assault",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 795,
      name: "eternabeam",
      displayName: "Eternabeam",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 796,
      name: "steelbeam",
      displayName: "Steel Beam",
      type: Type.Steel,
      category: MoveCategory.Special
    },
    {
      number: 797,
      name: "expandingforce",
      displayName: "Expanding Force",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 798,
      name: "steelroller",
      displayName: "Steel Roller",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 799,
      name: "scaleshot",
      displayName: "Scale Shot",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 800,
      name: "meteorbeam",
      displayName: "Meteor Beam",
      type: Type.Rock,
      category: MoveCategory.Special
    },
    {
      number: 801,
      name: "shellsidearm",
      displayName: "Shell Side Arm",
      type: Type.Poison,
      category: MoveCategory.Special
    },
    {
      number: 802,
      name: "mistyexplosion",
      displayName: "Misty Explosion",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 803,
      name: "grassyglide",
      displayName: "Grassy Glide",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 804,
      name: "risingvoltage",
      displayName: "Rising Voltage",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 805,
      name: "terrainpulse",
      displayName: "Terrain Pulse",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 806,
      name: "skittersmack",
      displayName: "Skitter Smack",
      type: Type.Bug,
      category: MoveCategory.Physical
    },
    {
      number: 807,
      name: "burningjealousy",
      displayName: "Burning Jealousy",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 808,
      name: "lashout",
      displayName: "Lash Out",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 809,
      name: "poltergeist",
      displayName: "Poltergeist",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 810,
      name: "corrosivegas",
      displayName: "Corrosive Gas",
      type: Type.Poison,
      category: MoveCategory.Status
    },
    {
      number: 811,
      name: "coaching",
      displayName: "Coaching",
      type: Type.Fighting,
      category: MoveCategory.Status
    },
    {
      number: 812,
      name: "flipturn",
      displayName: "Flip Turn",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 813,
      name: "tripleaxel",
      displayName: "Triple Axel",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 814,
      name: "dualwingbeat",
      displayName: "Dual Wingbeat",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 815,
      name: "scorchingsands",
      displayName: "Scorching Sands",
      type: Type.Ground,
      category: MoveCategory.Special
    },
    {
      number: 816,
      name: "junglehealing",
      displayName: "Jungle Healing",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 817,
      name: "wickedblow",
      displayName: "Wicked Blow",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 818,
      name: "surgingstrikes",
      displayName: "Surging Strikes",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 819,
      name: "thundercage",
      displayName: "Thunder Cage",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 820,
      name: "dragonenergy",
      displayName: "Dragon Energy",
      type: Type.Dragon,
      category: MoveCategory.Special
    },
    {
      number: 821,
      name: "freezingglare",
      displayName: "Freezing Glare",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 822,
      name: "fierywrath",
      displayName: "Fiery Wrath",
      type: Type.Dark,
      category: MoveCategory.Special
    },
    {
      number: 823,
      name: "thunderouskick",
      displayName: "Thunderous Kick",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 824,
      name: "glaciallance",
      displayName: "Glacial Lance",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 825,
      name: "astralbarrage",
      displayName: "Astral Barrage",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 826,
      name: "eeriespell",
      displayName: "Eerie Spell",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 827,
      name: "direclaw",
      displayName: "Dire Claw",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 828,
      name: "psyshieldbash",
      displayName: "Psyshield Bash",
      type: Type.Psychic,
      category: MoveCategory.Physical
    },
    {
      number: 829,
      name: "powershift",
      displayName: "Power Shift",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 830,
      name: "stoneaxe",
      displayName: "Stone Axe",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 831,
      name: "springtidestorm",
      displayName: "Springtide Storm",
      type: Type.Fairy,
      category: MoveCategory.Special
    },
    {
      number: 832,
      name: "mysticalpower",
      displayName: "Mystical Power",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 833,
      name: "ragingfury",
      displayName: "Raging Fury",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 834,
      name: "wavecrash",
      displayName: "Wave Crash",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 835,
      name: "chloroblast",
      displayName: "Chloroblast",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 836,
      name: "mountaingale",
      displayName: "Mountain Gale",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 837,
      name: "victorydance",
      displayName: "Victory Dance",
      type: Type.Fighting,
      category: MoveCategory.Status
    },
    {
      number: 838,
      name: "headlongrush",
      displayName: "Headlong Rush",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 839,
      name: "barbbarrage",
      displayName: "Barb Barrage",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 840,
      name: "esperwing",
      displayName: "Esper Wing",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 841,
      name: "bittermalice",
      displayName: "Bitter Malice",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 842,
      name: "shelter",
      displayName: "Shelter",
      type: Type.Steel,
      category: MoveCategory.Status
    },
    {
      number: 843,
      name: "triplearrows",
      displayName: "Triple Arrows",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 844,
      name: "infernalparade",
      displayName: "Infernal Parade",
      type: Type.Ghost,
      category: MoveCategory.Special
    },
    {
      number: 845,
      name: "ceaselessedge",
      displayName: "Ceaseless Edge",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 846,
      name: "bleakwindstorm",
      displayName: "Bleakwind Storm",
      type: Type.Flying,
      category: MoveCategory.Special
    },
    {
      number: 847,
      name: "wildboltstorm",
      displayName: "Wildbolt Storm",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 848,
      name: "sandsearstorm",
      displayName: "Sandsear Storm",
      type: Type.Ground,
      category: MoveCategory.Special
    },
    {
      number: 849,
      name: "lunarblessing",
      displayName: "Lunar Blessing",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 850,
      name: "takeheart",
      displayName: "Take Heart",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: -1,
      name: "gmaxwildfire",
      displayName: "G-Max Wildfire",
      type: Type.Fire,
      category: MoveCategory.GMax
    },
    {
      number: -2,
      name: "gmaxbefuddle",
      displayName: "G-Max Befuddle",
      type: Type.Bug,
      category: MoveCategory.GMax
    },
    {
      number: -3,
      name: "gmaxvoltcrash",
      displayName: "G-Max Volt Crash",
      type: Type.Electric,
      category: MoveCategory.GMax
    },
    {
      number: -4,
      name: "gmaxgoldrush",
      displayName: "G-Max Gold Rush",
      type: Type.Normal,
      category: MoveCategory.GMax
    },
    {
      number: -5,
      name: "gmaxchistrike",
      displayName: "G-Max Chi Strike",
      type: Type.Fighting,
      category: MoveCategory.GMax
    },
    {
      number: -6,
      name: "gmaxterror",
      displayName: "G-Max Terror",
      type: Type.Ghost,
      category: MoveCategory.GMax
    },
    {
      number: -7,
      name: "gmaxresonance",
      displayName: "G-Max Resonance",
      type: Type.Ice,
      category: MoveCategory.GMax
    },
    {
      number: -8,
      name: "gmaxcuddle",
      displayName: "G-Max Cuddle",
      type: Type.Normal,
      category: MoveCategory.GMax
    },
    {
      number: -9,
      name: "gmaxreplenish",
      displayName: "G-Max Replenish",
      type: Type.Normal,
      category: MoveCategory.GMax
    },
    {
      number: -10,
      name: "gmaxmalodor",
      displayName: "G-Max Malodor",
      type: Type.Poison,
      category: MoveCategory.GMax
    },
    {
      number: -11,
      name: "gmaxstonesurge",
      displayName: "G-Max Stonesurge",
      type: Type.Water,
      category: MoveCategory.GMax
    },
    {
      number: -12,
      name: "gmaxwindrage",
      displayName: "G-Max Wind Rage",
      type: Type.Flying,
      category: MoveCategory.GMax
    },
    {
      number: -13,
      name: "gmaxstunshock",
      displayName: "G-Max Stun Shock",
      type: Type.Electric,
      category: MoveCategory.GMax
    },
    {
      number: -14,
      name: "gmaxfinale",
      displayName: "G-Max Finale",
      type: Type.Fairy,
      category: MoveCategory.GMax
    },
    {
      number: -15,
      name: "gmaxdepletion",
      displayName: "G-Max Depletion",
      type: Type.Dragon,
      category: MoveCategory.GMax
    },
    {
      number: -16,
      name: "gmaxgravitas",
      displayName: "G-Max Gravitas",
      type: Type.Psychic,
      category: MoveCategory.GMax
    },
    {
      number: -17,
      name: "gmaxvolcalith",
      displayName: "G-Max Volcalith",
      type: Type.Rock,
      category: MoveCategory.GMax
    },
    {
      number: -18,
      name: "gmaxsandblast",
      displayName: "G-Max Sandblast",
      type: Type.Ground,
      category: MoveCategory.GMax
    },
    {
      number: -19,
      name: "gmaxsnooze",
      displayName: "G-Max Snooze",
      type: Type.Dark,
      category: MoveCategory.GMax
    },
    {
      number: -20,
      name: "gmaxtartness",
      displayName: "G-Max Tartness",
      type: Type.Grass,
      category: MoveCategory.GMax
    },
    {
      number: -21,
      name: "gmaxsweetness",
      displayName: "G-Max Sweetness",
      type: Type.Grass,
      category: MoveCategory.GMax
    },
    {
      number: -22,
      name: "gmaxsmite",
      displayName: "G-Max Smite",
      type: Type.Fairy,
      category: MoveCategory.GMax
    },
    {
      number: -23,
      name: "gmaxsteelsurge",
      displayName: "G-Max Steelsurge",
      type: Type.Steel,
      category: MoveCategory.GMax
    },
    {
      number: -24,
      name: "gmaxmeltdown",
      displayName: "G-Max Meltdown",
      type: Type.Steel,
      category: MoveCategory.GMax
    },
    {
      number: -25,
      name: "gmaxfoamburst",
      displayName: "G-Max Foam Burst",
      type: Type.Water,
      category: MoveCategory.GMax
    },
    {
      number: -26,
      name: "gmaxcentiferno",
      displayName: "G-Max Centiferno",
      type: Type.Fire,
      category: MoveCategory.GMax
    },
    {
      number: -27,
      name: "gmaxvinelash",
      displayName: "G-Max Vine Lash",
      type: Type.Grass,
      category: MoveCategory.GMax
    },
    {
      number: -28,
      name: "gmaxcannonade",
      displayName: "G-Max Cannonade",
      type: Type.Water,
      category: MoveCategory.GMax
    },
    {
      number: -29,
      name: "gmaxdrumsolo",
      displayName: "G-Max Drum Solo",
      type: Type.Grass,
      category: MoveCategory.GMax
    },
    {
      number: -30,
      name: "gmaxfireball",
      displayName: "G-Max Fireball",
      type: Type.Fire,
      category: MoveCategory.GMax
    },
    {
      number: -31,
      name: "gmaxhydrosnipe",
      displayName: "G-Max Hydrosnipe",
      type: Type.Water,
      category: MoveCategory.GMax
    },
    {
      number: -32,
      name: "gmaxoneblow",
      displayName: "G-Max One Blow",
      type: Type.Dark,
      category: MoveCategory.GMax
    },
    {
      number: -33,
      name: "gmaxrapidflow",
      displayName: "G-Max Rapid Flow",
      type: Type.Water,
      category: MoveCategory.GMax
    }
  ],
  pokemon: [
    {
      dex: 810,
      name: "grookey",
      displayName: "Grookey",
      type: Type.Grass
    },
    {
      dex: 811,
      name: "thwackey",
      displayName: "Thwackey",
      type: Type.Grass
    },
    {
      dex: 812,
      name: "rillaboom",
      displayName: "Rillaboom",
      type: Type.Grass
    },
    {
      dex: 812,
      name: "rillaboom",
      img: "rillaboom-gmax",
      displayName: "Gigantamax Rillaboom",
      type: Type.Grass,
      isVariant: true
    },
    {
      dex: 813,
      name: "scorbunny",
      displayName: "Scorbunny",
      type: Type.Fire
    },
    {
      dex: 814,
      name: "raboot",
      displayName: "Raboot",
      type: Type.Fire
    },
    {
      dex: 815,
      name: "cinderace",
      displayName: "Cinderace",
      type: Type.Fire
    },
    {
      dex: 815,
      name: "cinderace",
      img: "cinderace-gmax",
      displayName: "Gigantamax Cinderace",
      type: Type.Fire,
      isVariant: true
    },
    {
      dex: 816,
      name: "sobble",
      displayName: "Sobble",
      type: Type.Water
    },
    {
      dex: 817,
      name: "drizzile",
      displayName: "Drizzile",
      type: Type.Water
    },
    {
      dex: 818,
      name: "inteleon",
      displayName: "Inteleon",
      type: Type.Water
    },
    {
      dex: 818,
      name: "inteleon",
      img: "inteleon-gmax",
      displayName: "Gigantamax Inteleon",
      type: Type.Water,
      isVariant: true
    },
    {
      dex: 819,
      name: "skwovet",
      displayName: "Skwovet",
      type: Type.Normal
    },
    {
      dex: 820,
      name: "greedent",
      displayName: "Greedent",
      type: Type.Normal
    },
    {
      dex: 821,
      name: "rookidee",
      displayName: "Rookidee",
      type: Type.Flying
    },
    {
      dex: 822,
      name: "corvisquire",
      displayName: "Corvisquire",
      type: Type.Flying
    },
    {
      dex: 823,
      name: "corviknight",
      displayName: "Corviknight",
      type: Type.Flying,
      type2: Type.Steel
    },
    {
      dex: 823,
      name: "corviknight",
      img: "corviknight-gmax",
      displayName: "Gigantamax Corviknight",
      type: Type.Flying,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 824,
      name: "blipbug",
      displayName: "Blipbug",
      type: Type.Bug
    },
    {
      dex: 825,
      name: "dottler",
      displayName: "Dottler",
      type: Type.Bug,
      type2: Type.Psychic
    },
    {
      dex: 826,
      name: "orbeetle",
      displayName: "Orbeetle",
      type: Type.Bug,
      type2: Type.Psychic
    },
    {
      dex: 826,
      name: "orbeetle",
      img: "orbeetle-gmax",
      displayName: "Gigantamax Orbeetle",
      type: Type.Bug,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 827,
      name: "nickit",
      displayName: "Nickit",
      type: Type.Dark
    },
    {
      dex: 828,
      name: "thievul",
      displayName: "Thievul",
      type: Type.Dark
    },
    {
      dex: 829,
      name: "gossifleur",
      displayName: "Gossifleur",
      type: Type.Grass
    },
    {
      dex: 830,
      name: "eldegoss",
      displayName: "Eldegoss",
      type: Type.Grass
    },
    {
      dex: 831,
      name: "wooloo",
      displayName: "Wooloo",
      type: Type.Normal
    },
    {
      dex: 832,
      name: "dubwool",
      displayName: "Dubwool",
      type: Type.Normal
    },
    {
      dex: 833,
      name: "chewtle",
      displayName: "Chewtle",
      type: Type.Water
    },
    {
      dex: 834,
      name: "drednaw",
      displayName: "Drednaw",
      type: Type.Water,
      type2: Type.Rock
    },
    {
      dex: 834,
      name: "drednaw",
      img: "drednaw-gmax",
      displayName: "Gigantamax Drednaw",
      type: Type.Water,
      type2: Type.Rock,
      isVariant: true
    },
    {
      dex: 835,
      name: "yamper",
      displayName: "Yamper",
      type: Type.Electric
    },
    {
      dex: 836,
      name: "boltund",
      displayName: "Boltund",
      type: Type.Electric
    },
    {
      dex: 837,
      name: "rolycoly",
      displayName: "Rolycoly",
      type: Type.Rock
    },
    {
      dex: 838,
      name: "carkol",
      displayName: "Carkol",
      type: Type.Rock,
      type2: Type.Fire
    },
    {
      dex: 839,
      name: "coalossal",
      displayName: "Coalossal",
      type: Type.Rock,
      type2: Type.Fire
    },
    {
      dex: 839,
      name: "coalossal",
      img: "coalossal-gmax",
      displayName: "Gigantamax Coalossal",
      type: Type.Rock,
      type2: Type.Fire,
      isVariant: true
    },
    {
      dex: 840,
      name: "applin",
      displayName: "Applin",
      type: Type.Grass,
      type2: Type.Dragon
    },
    {
      dex: 841,
      name: "flapple",
      displayName: "Flapple",
      type: Type.Grass,
      type2: Type.Dragon
    },
    {
      dex: 841,
      name: "flapple",
      img: "flapple-gmax",
      displayName: "Gigantamax Flapple",
      type: Type.Grass,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 842,
      name: "appletun",
      displayName: "Appletun",
      type: Type.Grass,
      type2: Type.Dragon
    },
    {
      dex: 842,
      name: "appletun",
      img: "appletun-gmax",
      displayName: "Gigantamax Appletun",
      type: Type.Grass,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 843,
      name: "silicobra",
      displayName: "Silicobra",
      type: Type.Ground
    },
    {
      dex: 844,
      name: "sandaconda",
      displayName: "Sandaconda",
      type: Type.Ground
    },
    {
      dex: 844,
      name: "sandaconda",
      img: "sandaconda-gmax",
      displayName: "Gigantamax Sandaconda",
      type: Type.Ground,
      isVariant: true
    },
    {
      dex: 845,
      name: "cramorant",
      displayName: "Cramorant",
      type: Type.Flying,
      type2: Type.Water
    },
    {
      dex: 846,
      name: "arrokuda",
      displayName: "Arrokuda",
      type: Type.Water
    },
    {
      dex: 847,
      name: "barraskewda",
      displayName: "Barraskewda",
      type: Type.Water
    },
    {
      dex: 848,
      name: "toxel",
      displayName: "Toxel",
      type: Type.Electric,
      type2: Type.Poison,
      category: PokemonCategory.Baby
    },
    {
      dex: 849,
      name: "toxtricity",
      displayName: "Toxtricity",
      type: Type.Electric,
      type2: Type.Poison
    },
    {
      dex: 849,
      name: "toxtricity",
      img: "toxtricity-gmax",
      displayName: "Gigantamax Toxtricity",
      type: Type.Electric,
      type2: Type.Poison,
      isVariant: true
    },
    {
      dex: 850,
      name: "sizzlipede",
      displayName: "Sizzlipede",
      type: Type.Fire,
      type2: Type.Bug
    },
    {
      dex: 851,
      name: "centiskorch",
      displayName: "Centiskorch",
      type: Type.Fire,
      type2: Type.Bug
    },
    {
      dex: 851,
      name: "centiskorch",
      img: "centiskorch-gmax",
      displayName: "Gigantamax Centiskorch",
      type: Type.Fire,
      type2: Type.Bug,
      isVariant: true
    },
    {
      dex: 852,
      name: "clobbopus",
      displayName: "Clobbopus",
      type: Type.Fighting
    },
    {
      dex: 853,
      name: "grapploct",
      displayName: "Grapploct",
      type: Type.Fighting
    },
    {
      dex: 854,
      name: "sinistea",
      displayName: "Sinistea",
      type: Type.Ghost
    },
    {
      dex: 855,
      name: "polteageist",
      displayName: "Polteageist",
      type: Type.Ghost
    },
    {
      dex: 856,
      name: "hatenna",
      displayName: "Hatenna",
      type: Type.Psychic
    },
    {
      dex: 857,
      name: "hattrem",
      displayName: "Hattrem",
      type: Type.Psychic
    },
    {
      dex: 858,
      name: "hatterene",
      displayName: "Hatterene",
      type: Type.Psychic,
      type2: Type.Fairy
    },
    {
      dex: 858,
      name: "hatterene",
      img: "hatterene-gmax",
      displayName: "Gigantamax Hatterene",
      type: Type.Psychic,
      type2: Type.Fairy,
      isVariant: true
    },
    {
      dex: 859,
      name: "impidimp",
      displayName: "Impidimp",
      type: Type.Dark,
      type2: Type.Fairy
    },
    {
      dex: 860,
      name: "morgrem",
      displayName: "Morgrem",
      type: Type.Dark,
      type2: Type.Fairy
    },
    {
      dex: 861,
      name: "grimmsnarl",
      displayName: "Grimmsnarl",
      type: Type.Dark,
      type2: Type.Fairy
    },
    {
      dex: 861,
      name: "grimmsnarl",
      img: "grimmsnarl-gmax",
      displayName: "Gigantamax Grimmsnarl",
      type: Type.Dark,
      type2: Type.Fairy,
      isVariant: true
    },
    {
      dex: 862,
      name: "obstagoon",
      displayName: "Obstagoon",
      type: Type.Dark,
      type2: Type.Normal
    },
    {
      dex: 863,
      name: "perrserker",
      displayName: "Perrserker",
      type: Type.Steel
    },
    {
      dex: 864,
      name: "cursola",
      displayName: "Cursola",
      type: Type.Ghost
    },
    {
      dex: 865,
      name: "sirfetchd",
      displayName: "Sirfetch'd",
      type: Type.Fighting
    },
    {
      dex: 866,
      name: "mrrime",
      displayName: "Mr. Rime",
      type: Type.Ice,
      type2: Type.Psychic
    },
    {
      dex: 867,
      name: "runerigus",
      displayName: "Runerigus",
      type: Type.Ground,
      type2: Type.Ghost
    },
    {
      dex: 868,
      name: "milcery",
      displayName: "Milcery",
      type: Type.Fairy
    },
    {
      dex: 868,
      name: "milcery",
      img: "milcery-gmax",
      displayName: "Gigantamax Milcery",
      type: Type.Fairy,
      isVariant: true
    },
    {
      dex: 869,
      name: "alcremie",
      displayName: "Alcremie",
      type: Type.Fairy
    },
    {
      dex: 869,
      name: "alcremie",
      img: "alcremie-gmax",
      displayName: "Gigantamax Alcremie",
      type: Type.Fairy,
      isVariant: true
    },
    {
      dex: 870,
      name: "falinks",
      displayName: "Falinks",
      type: Type.Fighting
    },
    {
      dex: 870,
      name: "falinks",
      img: "falinks-gmax",
      displayName: "Gigantamax Falinks",
      type: Type.Fighting,
      isVariant: true
    },
    {
      dex: 871,
      name: "pincurchin",
      displayName: "Pincurchin",
      type: Type.Electric
    },
    {
      dex: 872,
      name: "snom",
      displayName: "Snom",
      type: Type.Ice,
      type2: Type.Bug
    },
    {
      dex: 873,
      name: "frosmoth",
      displayName: "Frosmoth",
      type: Type.Ice,
      type2: Type.Bug
    },
    {
      dex: 874,
      name: "stonjourner",
      displayName: "Stonjourner",
      type: Type.Rock
    },
    {
      dex: 875,
      name: "eiscue",
      displayName: "Eiscue",
      type: Type.Ice
    },
    {
      dex: 876,
      name: "indeedee",
      displayName: "Indeedee",
      type: Type.Psychic,
      type2: Type.Normal
    },
    {
      dex: 877,
      name: "morpeko",
      displayName: "Morpeko",
      type: Type.Electric,
      type2: Type.Dark
    },
    {
      dex: 878,
      name: "cufant",
      displayName: "Cufant",
      type: Type.Steel
    },
    {
      dex: 879,
      name: "copperajah",
      displayName: "Copperajah",
      type: Type.Steel
    },
    {
      dex: 879,
      name: "copperajah",
      img: "copperajah-gmax",
      displayName: "Gigantamax Copperajah",
      type: Type.Steel,
      isVariant: true
    },
    {
      dex: 880,
      name: "dracozolt",
      displayName: "Dracozolt",
      type: Type.Electric,
      type2: Type.Dragon,
      category: PokemonCategory.Fossil
    },
    {
      dex: 881,
      name: "arctozolt",
      displayName: "Arctozolt",
      type: Type.Electric,
      type2: Type.Ice,
      category: PokemonCategory.Fossil
    },
    {
      dex: 882,
      name: "dracovish",
      displayName: "Dracovish",
      type: Type.Water,
      type2: Type.Dragon,
      category: PokemonCategory.Fossil
    },
    {
      dex: 883,
      name: "arctovish",
      displayName: "Arctovish",
      type: Type.Water,
      type2: Type.Ice,
      category: PokemonCategory.Fossil
    },
    {
      dex: 884,
      name: "duraludon",
      displayName: "Duraludon",
      type: Type.Steel,
      type2: Type.Dragon
    },
    {
      dex: 884,
      name: "duraludon",
      img: "duraludon-gmax",
      displayName: "Gigantamax Duraludon",
      type: Type.Steel,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 885,
      name: "dreepy",
      displayName: "Dreepy",
      type: Type.Dragon,
      type2: Type.Ghost
    },
    {
      dex: 886,
      name: "drakloak",
      displayName: "Drakloak",
      type: Type.Dragon,
      type2: Type.Ghost
    },
    {
      dex: 887,
      name: "dragapult",
      displayName: "Dragapult",
      type: Type.Dragon,
      type2: Type.Ghost
    },
    {
      dex: 888,
      name: "zacian",
      displayName: "Zacian",
      type: Type.Fairy,
      noDefaultForm: true,
      category: PokemonCategory.Legendary
    },
    {
      dex: 888,
      name: "zacian",
      displayName: "Hero of Many Battles Zacian",
      type: Type.Fairy,
      isVariant: true
    },
    {
      dex: 888,
      name: "zacian",
      img: "zacian-crowned",
      displayName: "Crowned Sword Zacian",
      type: Type.Fairy,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 889,
      name: "zamazenta",
      displayName: "Zamazenta",
      type: Type.Fighting,
      noDefaultForm: true,
      category: PokemonCategory.Legendary
    },
    {
      dex: 889,
      name: "zamazenta",
      displayName: "Hero of Many Battles Zamazenta",
      type: Type.Fighting,
      isVariant: true
    },
    {
      dex: 889,
      name: "zamazenta",
      img: "zamazenta-crowned",
      displayName: "Crowned Shield Zamazenta",
      type: Type.Fighting,
      type2: Type.Steel,
      isVariant: true
    },
    {
      dex: 890,
      name: "eternatus",
      displayName: "Eternatus",
      type: Type.Poison,
      type2: Type.Dragon,
      category: PokemonCategory.Legendary
    },
    {
      dex: 890,
      name: "eternatus",
      img: "eternatus-eternamax",
      displayName: "Eternamax Eternatus",
      type: Type.Poison,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 891,
      name: "kubfu",
      displayName: "Kubfu",
      type: Type.Fighting,
      category: PokemonCategory.Legendary
    },
    {
      dex: 892,
      name: "urshifu",
      img: "urshifu-singlestrike",
      displayName: "Urshifu",
      type: Type.Fighting,
      type2: Type.Varies,
      noDefaultForm: true,
      category: PokemonCategory.Legendary
    },
    {
      dex: 892,
      name: "urshifu",
      img: "urshifu-singlestrike",
      displayName: "Single Strike Style Urshifu",
      type: Type.Fighting,
      type2: Type.Dark,
      isVariant: true
    },
    {
      dex: 892,
      name: "urshifu",
      img: "urshifu-singlegmax",
      displayName: "Gigantamax Single Strike Style Urshifu",
      type: Type.Fighting,
      type2: Type.Dark,
      isVariant: true
    },
    {
      dex: 892,
      name: "urshifu",
      img: "urshifu-rapidstrike",
      displayName: "Rapid Strike Style Urshifu",
      type: Type.Fighting,
      type2: Type.Water,
      isVariant: true
    },
    {
      dex: 892,
      name: "urshifu",
      img: "urshifu-rapidgmax",
      displayName: "Gigantamax Rapid Strike Style Urshifu",
      type: Type.Fighting,
      type2: Type.Water,
      isVariant: true
    },
    {
      dex: 893,
      name: "zarude",
      displayName: "Zarude",
      type: Type.Dark,
      type2: Type.Grass,
      category: PokemonCategory.Mythical
    },
    {
      dex: 894,
      name: "regieleki",
      displayName: "Regieleki",
      type: Type.Electric,
      category: PokemonCategory.Legendary
    },
    {
      dex: 895,
      name: "regidrago",
      displayName: "Regidrago",
      type: Type.Dragon,
      category: PokemonCategory.Legendary
    },
    {
      dex: 896,
      name: "glastrier",
      displayName: "Glastrier",
      type: Type.Ice,
      category: PokemonCategory.Legendary
    },
    {
      dex: 897,
      name: "spectrier",
      displayName: "Spectrier",
      type: Type.Ghost,
      category: PokemonCategory.Legendary
    },
    {
      dex: 898,
      name: "calyrex",
      displayName: "Calyrex",
      type: Type.Psychic,
      type2: Type.Grass,
      category: PokemonCategory.Legendary
    },
    {
      dex: 898,
      name: "calyrex",
      displayName: "Ice Rider Calyrex",
      type: Type.Psychic,
      type2: Type.Ice,
      isVariant: true
    },
    {
      dex: 898,
      name: "calyrex",
      displayName: "Shadow Rider Calyrex",
      type: Type.Psychic,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 899,
      name: "wyrdeer",
      displayName: "Wyrdeer",
      type: Type.Normal,
      type2: Type.Psychic
    },
    {
      dex: 900,
      name: "kleavor",
      displayName: "Kleavor",
      type: Type.Bug,
      type2: Type.Rock
    },
    {
      dex: 901,
      name: "ursaluna",
      displayName: "Ursaluna",
      type: Type.Ground,
      type2: Type.Normal
    },
    {
      dex: 902,
      name: "basculegion",
      displayName: "Basculegion",
      type: Type.Water,
      type2: Type.Ghost
    },
    {
      dex: 903,
      name: "sneasler",
      displayName: "Sneasler",
      type: Type.Fighting,
      type2: Type.Poison
    },
    {
      dex: 904,
      name: "overqwil",
      displayName: "Overqwil",
      type: Type.Dark,
      type2: Type.Poison
    },
    {
      dex: 905,
      name: "enamorus",
      displayName: "Enamorus",
      type: Type.Fairy,
      type2: Type.Flying,
      category: PokemonCategory.Legendary
    }
  ]
};
