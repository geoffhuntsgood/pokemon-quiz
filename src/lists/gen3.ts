import type { Generation } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";

export const gen3: Generation = {
  number: GenNumber.Three,
  abilities: [
    {
      number: 1,
      name: "stench",
      displayName: "Stench",
      description: "When attacking, the Pokémon may cause the target to flinch."
    },
    {
      number: 2,
      name: "drizzle",
      displayName: "Drizzle",
      description: "The Pokémon makes it rain when it enters a battle."
    },
    {
      number: 3,
      name: "speedboost",
      displayName: "Speed Boost",
      description: "The Pokémon's Speed stat increases every turn."
    },
    {
      number: 4,
      name: "battlearmor",
      displayName: "Battle Armor",
      description: "The Pokémon is protected from critical hits."
    },
    {
      number: 5,
      name: "sturdy",
      displayName: "Sturdy",
      description:
        "The Pokémon cannot be knocked out by a single hit as long as its HP is full. One-hit KO moves will also fail to knock it out."
    },
    {
      number: 6,
      name: "damp",
      displayName: "Damp",
      description:
        "The Pokémon prevents all Pokémon from using explosive moves such as Self-Destruct."
    },
    {
      number: 7,
      name: "limber",
      displayName: "Limber",
      description: "The Pokémon is prevented from being paralyzed."
    },
    {
      number: 8,
      name: "sandveil",
      displayName: "Sand Veil",
      description: "Boosts the Pokémon's evasiveness in a sandstorm."
    },
    {
      number: 9,
      name: "static",
      displayName: "Static",
      description:
        "The Pokémon may paralyze attackers that make direct contact with it."
    },
    {
      number: 10,
      name: "voltabsorb",
      displayName: "Volt Absorb",
      description:
        "If hit by an Electric-type move, the Pokémon has its HP restored instead of taking damage."
    },
    {
      number: 11,
      name: "waterabsorb",
      displayName: "Water Absorb",
      description:
        "If hit by a Water-type move, the Pokémon has its HP restored instead of taking damage."
    },
    {
      number: 12,
      name: "oblivious",
      displayName: "Oblivious",
      description:
        "The Pokémon is prevented from being infatuated, falling for taunts, or being affected by Intimidate."
    },
    {
      number: 13,
      name: "cloudnine",
      displayName: "Cloud Nine",
      description: "Eliminates the effects of weather."
    },
    {
      number: 14,
      name: "compoundeyes",
      displayName: "Compound Eyes",
      description: "The Pokémon's accuracy is boosted."
    },
    {
      number: 15,
      name: "insomnia",
      displayName: "Insomnia",
      description: "The Pokémon is prevented from falling asleep."
    },
    {
      number: 16,
      name: "colorchange",
      displayName: "Color Change",
      description:
        "The Pokémon's type becomes the type of the move used on it.",
      isUnique: true
    },
    {
      number: 17,
      name: "immunity",
      displayName: "Immunity",
      description: "The Pokémon is prevented from being poisoned."
    },
    {
      number: 18,
      name: "flashfire",
      displayName: "Flash Fire",
      description:
        "If hit by a Fire-type move, the Pokémon absorbs the flames and uses them to power up its own Fire-type moves."
    },
    {
      number: 19,
      name: "shielddust",
      displayName: "Shield Dust",
      description:
        "The Pokémon is protected from the additional effects of moves."
    },
    {
      number: 20,
      name: "owntempo",
      displayName: "Own Tempo",
      description:
        "The Pokémon is prevented from becoming confused or being affected by Intimidate."
    },
    {
      number: 21,
      name: "suctioncups",
      displayName: "Suction Cups",
      description:
        "The Pokémon sticks in one spot. This protects it from moves and items that would force it to switch out."
    },
    {
      number: 22,
      name: "intimidate",
      displayName: "Intimidate",
      description:
        "When the Pokémon enters a battle, it makes opposing Pokémon cower, lowering their Attack stat."
    },
    {
      number: 23,
      name: "shadowtag",
      displayName: "Shadow Tag",
      description:
        "The Pokémon prevents opposing Pokémon from fleeing or switching out."
    },
    {
      number: 24,
      name: "roughskin",
      displayName: "Rough Skin",
      description:
        "The Pokémon damages attackers that make direct contact with it."
    },
    {
      number: 25,
      name: "wonderguard",
      displayName: "Wonder Guard",
      description:
        "Its mysterious power only lets supereffective moves hit the Pokémon.",
      isUnique: true
    },
    {
      number: 26,
      name: "levitate",
      displayName: "Levitate",
      description:
        "By floating in the air, the Pokémon receives full immunity to all Ground-type moves."
    },
    {
      number: 27,
      name: "effectspore",
      displayName: "Effect Spore",
      description:
        "Contact with the Pokémon may inflict poison, sleep, or paralysis on the attacker."
    },
    {
      number: 28,
      name: "synchronize",
      displayName: "Synchronize",
      description:
        "If the Pokémon is burned, paralyzed, or poisoned by another Pokémon, that Pokémon will be inflicted with the same status condition."
    },
    {
      number: 29,
      name: "clearbody",
      displayName: "Clear Body",
      description:
        "Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats."
    },
    {
      number: 30,
      name: "naturalcure",
      displayName: "Natural Cure",
      description:
        "The Pokémon's status conditions are cured when it switches out."
    },
    {
      number: 31,
      name: "lightningrod",
      displayName: "Lightning Rod",
      description:
        "The Pokémon draws in all Electric-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted."
    },
    {
      number: 32,
      name: "serenegrace",
      displayName: "Serene Grace",
      description:
        "Raises the likelihood of additional effects occurring when the Pokémon uses its moves."
    },
    {
      number: 33,
      name: "swiftswim",
      displayName: "Swift Swim",
      description: "Boost the Pokémon's Speed stat in rain."
    },
    {
      number: 34,
      name: "chlorophyll",
      displayName: "Chlorophyll",
      description: "Boosts the Pokémon's Speed stat in harsh sunlight."
    },
    {
      number: 35,
      name: "illuminate",
      displayName: "Illuminate",
      description: "The Pokémon prevents its accuracy from being lowered."
    },
    {
      number: 36,
      name: "trace",
      displayName: "Trace",
      description:
        "When it enters a battle, the Pokémon copies an opposing Pokémon's Ability."
    },
    {
      number: 37,
      name: "hugepower",
      displayName: "Huge Power",
      description: "Doubles the Pokémon's Attack stat."
    },
    {
      number: 38,
      name: "poisonpoint",
      displayName: "Poison Point",
      description: "Contact with the Pokémon may poison the attackeer."
    },
    {
      number: 39,
      name: "innerfocus",
      displayName: "Inner Focus",
      description:
        "The Pokémon is prevented from flinching or being affected by Intimidate."
    },
    {
      number: 40,
      name: "magmaarmor",
      displayName: "Magma Armor",
      description: "The Pokémon is prevented from being frozen."
    },
    {
      number: 41,
      name: "waterveil",
      displayName: "Water Veil",
      description: "The Pokémon is prevented from being burned."
    },
    {
      number: 42,
      name: "magnetpull",
      displayName: "Magnet Pull",
      description: "Prevents Steel-type Pokémon from fleeing."
    },
    {
      number: 43,
      name: "soundproof",
      displayName: "Soundproof",
      description: "The Pokémon has full immunity to all sound-based moves."
    },
    {
      number: 44,
      name: "raindish",
      displayName: "Rain Dish",
      description: "THe Pokémon gradually regains HP in rain."
    },
    {
      number: 45,
      name: "sandstream",
      displayName: "Sand Stream",
      description: "THe Pokémon summons a sandstorm when it enters a battle."
    },
    {
      number: 46,
      name: "pressure",
      displayName: "Pressure",
      description: "Causes other Pokémon to expend more PP to use their moves."
    },
    {
      number: 47,
      name: "thickfat",
      displayName: "Thick Fat",
      description:
        "The Pokémon receives half the damage from Fire- and Ice-type moves."
    },
    {
      number: 48,
      name: "earlybird",
      displayName: "Early Bird",
      description:
        "The Pokémon awakens from sleep twice as fast as other Pokémon."
    },
    {
      number: 49,
      name: "flamebody",
      displayName: "Flame Body",
      description: "Contact with the Pokémon may burn the attacker."
    },
    {
      number: 50,
      name: "runaway",
      displayName: "Run Away",
      description: "Enables a sure getaway from wild Pokémon."
    },
    {
      number: 51,
      name: "keeneye",
      displayName: "Keen Eye",
      description:
        "The Pokémon is protected from its accuracy being lowered. It also ignores the target's stages in evasion."
    },
    {
      number: 52,
      name: "hypercutter",
      displayName: "Hyper Cutter",
      description:
        "The Pokémon's prized, mighty pincers prevent other Pokémon from lowering its Attack stat."
    },
    {
      number: 53,
      name: "pickup",
      displayName: "Pickup",
      description:
        "The Pokémon may obtain an item another Pokémon used during a battle. It may obtain items outside of battle, too."
    },
    {
      number: 54,
      name: "truant",
      displayName: "Truant",
      description:
        "Each time the Pokémon uses a move, it spends the next turn loafing around."
    },
    {
      number: 55,
      name: "hustle",
      displayName: "Hustle",
      description: "Boosts the Pokémon's Attack stat but lowers its accuracy."
    },
    {
      number: 56,
      name: "cutecharm",
      displayName: "Cute Charm",
      description:
        "The Pokémon may infatuate attackers that make direct contact with it."
    },
    {
      number: 57,
      name: "plus",
      displayName: "Plus",
      description:
        "Boosts the Sp. Atk stat of the Pokémon if an ally with a similar ability is also in battle."
    },
    {
      number: 58,
      name: "minus",
      displayName: "Minus",
      description:
        "Boosts the Sp. Atk stat of the Pokémon if an ally with a similar ability is also in battle."
    },
    {
      number: 59,
      name: "forecast",
      displayName: "Forecast",
      description:
        "The Pokémon transforms with the weather to change its type to Water, Fire, or Ice."
    },
    {
      number: 60,
      name: "stickyhold",
      displayName: "Sticky Hold",
      description:
        "The Pokémon's held items cling to its body and cannot be removed by other Pokémon."
    },
    {
      number: 61,
      name: "shedskin",
      displayName: "Shed Skin",
      description: "The Pokémon may cure its own status conditions."
    },
    {
      number: 62,
      name: "guts",
      displayName: "Guts",
      description: "Having a status condition boosts the Pokémon's Attack stat."
    },
    {
      number: 63,
      name: "marvelscale",
      displayName: "Marvel Scale",
      description:
        "The Pokémon's Defense stat is boosted if it has a status condition."
    },
    {
      number: 64,
      name: "liquidooze",
      displayName: "Liquid Ooze",
      description:
        "The strong stench of the Pokémon damages attackers that use HP-draining moves."
    },
    {
      number: 65,
      name: "overgrow",
      displayName: "Overgrow",
      description: "Powers up Grass-type moves when the Pokémon's HP is low."
    },
    {
      number: 66,
      name: "blaze",
      displayName: "Blaze",
      description: "Powers up Fire-type moves when the Pokémon's HP is low."
    },
    {
      number: 67,
      name: "torrent",
      displayName: "Torrent",
      description: "Powers up Water-type moves when the Pokémon's HP is low."
    },
    {
      number: 68,
      name: "swarm",
      displayName: "Swarm",
      description: "Powers up Bug-type moves when the Pokémon's HP is low."
    },
    {
      number: 69,
      name: "rockhead",
      displayName: "Rock Head",
      description: "Protects the Pokémon from recoil damage."
    },
    {
      number: 70,
      name: "drought",
      displayName: "Drought",
      description: "Turns the sunlight harsh when the Pokémon enters a battle."
    },
    {
      number: 71,
      name: "arenatrap",
      displayName: "Arena Trap",
      description: "Prevents opposing Pokémon from fleeing from battle."
    },
    {
      number: 72,
      name: "vitalspirit",
      displayName: "Vital Spirit",
      description: "The Pokémon is prevented from falling asleep."
    },
    {
      number: 73,
      name: "whitesmoke",
      displayName: "White Smoke",
      description:
        "The Pokémon is protected from other Pokémon lowering its stats."
    },
    {
      number: 74,
      name: "purepower",
      displayName: "Pure Power",
      description: "The Pokémon doubles its Attack stat."
    },
    {
      number: 75,
      name: "shellarmor",
      displayName: "Shell Armor",
      description: "The Pokémon is protected from critial hits."
    },
    {
      number: 76,
      name: "airlock",
      displayName: "Air Lock",
      description: "Eliminates the effects of weather.",
      isUnique: true
    }
  ],
  moves: [
    {
      number: 252,
      name: "fakeout",
      displayName: "Fake Out",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 253,
      name: "uproar",
      displayName: "Uproar",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 254,
      name: "stockpile",
      displayName: "Stockpile",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 255,
      name: "spitup",
      displayName: "Spit Up",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 256,
      name: "swallow",
      displayName: "Swallow",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 257,
      name: "heatwave",
      displayName: "Heat Wave",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 258,
      name: "hail",
      displayName: "Hail",
      type: Type.Ice,
      category: MoveCategory.Status
    },
    {
      number: 259,
      name: "torment",
      displayName: "Torment",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 260,
      name: "flatter",
      displayName: "Flatter",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 261,
      name: "willowisp",
      displayName: "Will-O-Wisp",
      type: Type.Fire,
      category: MoveCategory.Status
    },
    {
      number: 262,
      name: "memento",
      displayName: "Memento",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 263,
      name: "facade",
      displayName: "Facade",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 264,
      name: "focuspunch",
      displayName: "Focus Punch",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 265,
      name: "smellingsalts",
      displayName: "Smelling Salts",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 266,
      name: "followme",
      displayName: "Follow Me",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 267,
      name: "naturepower",
      displayName: "Nature Power",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 268,
      name: "charge",
      displayName: "Charge",
      type: Type.Electric,
      category: MoveCategory.Status
    },
    {
      number: 269,
      name: "taunt",
      displayName: "Taunt",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 270,
      name: "helpinghand",
      displayName: "Helping Hand",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 271,
      name: "trick",
      displayName: "Trick",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 272,
      name: "roleplay",
      displayName: "Role Play",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 273,
      name: "wish",
      displayName: "Wish",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 274,
      name: "assist",
      displayName: "Assist",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 275,
      name: "ingrain",
      displayName: "Ingrain",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 276,
      name: "superpower",
      displayName: "Superpower",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 277,
      name: "magiccoat",
      displayName: "Magic Coat",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 278,
      name: "recycle",
      displayName: "Recycle",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 279,
      name: "revenge",
      displayName: "Revenge",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 280,
      name: "brickbreak",
      displayName: "Brick Break",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 281,
      name: "yawn",
      displayName: "Yawn",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 282,
      name: "knockoff",
      displayName: "Knock Off",
      type: Type.Dark,
      category: MoveCategory.Physical
    },
    {
      number: 283,
      name: "endeavor",
      displayName: "Endeavor",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 284,
      name: "eruption",
      displayName: "Eruption",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 285,
      name: "skillswap",
      displayName: "Skill Swap",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 286,
      name: "imprison",
      displayName: "Imprison",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 287,
      name: "refresh",
      displayName: "Refresh",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 288,
      name: "grudge",
      displayName: "Grudge",
      type: Type.Ghost,
      category: MoveCategory.Status
    },
    {
      number: 289,
      name: "snatch",
      displayName: "Snatch",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 290,
      name: "secretpower",
      displayName: "Secret Power",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 291,
      name: "dive",
      displayName: "Dive",
      type: Type.Water,
      category: MoveCategory.Physical
    },
    {
      number: 292,
      name: "armthrust",
      displayName: "Arm Thrust",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 293,
      name: "camouflage",
      displayName: "Camouflage",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 294,
      name: "tailglow",
      displayName: "Tail Glow",
      type: Type.Bug,
      category: MoveCategory.Status
    },
    {
      number: 295,
      name: "lusterpurge",
      displayName: "Luster Purge",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 296,
      name: "mistball",
      displayName: "Mist Ball",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 297,
      name: "featherdance",
      displayName: "Feather Dance",
      type: Type.Flying,
      category: MoveCategory.Status
    },
    {
      number: 298,
      name: "teeterdance",
      displayName: "Teeter Dance",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 299,
      name: "blazekick",
      displayName: "Blaze Kick",
      type: Type.Fire,
      category: MoveCategory.Physical
    },
    {
      number: 300,
      name: "mudsport",
      displayName: "Mud Sport",
      type: Type.Ground,
      category: MoveCategory.Status
    },
    {
      number: 301,
      name: "iceball",
      displayName: "Ice Ball",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 302,
      name: "needlearm",
      displayName: "Needle Arm",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 303,
      name: "slackoff",
      displayName: "Slack Off",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 304,
      name: "hypervoice",
      displayName: "Hyper Voice",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 305,
      name: "poisonfang",
      displayName: "Poison Fang",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 306,
      name: "crushclaw",
      displayName: "Crush Claw",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 307,
      name: "blastburn",
      displayName: "Blast Burn",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 308,
      name: "hydrocannon",
      displayName: "Hydro Cannon",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 309,
      name: "meteormash",
      displayName: "Meteor Mash",
      type: Type.Steel,
      category: MoveCategory.Physical
    },
    {
      number: 310,
      name: "astonish",
      displayName: "Astonish",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 311,
      name: "weatherball",
      displayName: "Weather Ball",
      type: Type.Normal,
      category: MoveCategory.Special
    },
    {
      number: 312,
      name: "aromatherapy",
      displayName: "Aromatherapy",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 313,
      name: "faketears",
      displayName: "Fake Tears",
      type: Type.Dark,
      category: MoveCategory.Status
    },
    {
      number: 314,
      name: "aircutter",
      displayName: "Air Cutter",
      type: Type.Flying,
      category: MoveCategory.Special
    },
    {
      number: 315,
      name: "overheat",
      displayName: "Overheat",
      type: Type.Fire,
      category: MoveCategory.Special
    },
    {
      number: 316,
      name: "odorsleuth",
      displayName: "Odor Sleuth",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 317,
      name: "rocktomb",
      displayName: "Rock Tomb",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 318,
      name: "silverwind",
      displayName: "Silver Wind",
      type: Type.Bug,
      category: MoveCategory.Special
    },
    {
      number: 319,
      name: "metalsound",
      displayName: "Metal Sound",
      type: Type.Steel,
      category: MoveCategory.Status
    },
    {
      number: 320,
      name: "grasswhistle",
      displayName: "Grass Whistle",
      type: Type.Grass,
      category: MoveCategory.Status
    },
    {
      number: 321,
      name: "tickle",
      displayName: "Tickle",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 322,
      name: "cosmicpower",
      displayName: "Cosmic Power",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 323,
      name: "waterspout",
      displayName: "Water Spout",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 324,
      name: "signalbeam",
      displayName: "Signal Beam",
      type: Type.Bug,
      category: MoveCategory.Special
    },
    {
      number: 325,
      name: "shadowpunch",
      displayName: "Shadow Punch",
      type: Type.Ghost,
      category: MoveCategory.Physical
    },
    {
      number: 326,
      name: "extrasensory",
      displayName: "Extrasensory",
      type: Type.Psychic,
      category: MoveCategory.Special
    },
    {
      number: 327,
      name: "skyuppercut",
      displayName: "Sky Uppercut",
      type: Type.Fighting,
      category: MoveCategory.Physical
    },
    {
      number: 328,
      name: "sandtomb",
      displayName: "Sand Tomb",
      type: Type.Ground,
      category: MoveCategory.Physical
    },
    {
      number: 349,
      name: "sheercold",
      displayName: "Sheer Cold",
      type: Type.Ice,
      category: MoveCategory.Special
    },
    {
      number: 330,
      name: "muddywater",
      displayName: "Muddy Water",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 331,
      name: "bulletseed",
      displayName: "Bullet Seed",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 332,
      name: "aerialace",
      displayName: "Aerial Ace",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 333,
      name: "iciclespear",
      displayName: "Icicle Spear",
      type: Type.Ice,
      category: MoveCategory.Physical
    },
    {
      number: 334,
      name: "irondefense",
      displayName: "Iron Defense",
      type: Type.Steel,
      category: MoveCategory.Status
    },
    {
      number: 335,
      name: "block",
      displayName: "Block",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 336,
      name: "howl",
      displayName: "Howl",
      type: Type.Normal,
      category: MoveCategory.Status
    },
    {
      number: 337,
      name: "dragonclaw",
      displayName: "Dragon Claw",
      type: Type.Dragon,
      category: MoveCategory.Physical
    },
    {
      number: 338,
      name: "frenzyplant",
      displayName: "Frenzy Plant",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 339,
      name: "bulkup",
      displayName: "Bulk Up",
      type: Type.Fighting,
      category: MoveCategory.Status
    },
    {
      number: 340,
      name: "bounce",
      displayName: "Bounce",
      type: Type.Flying,
      category: MoveCategory.Physical
    },
    {
      number: 341,
      name: "mudshot",
      displayName: "Mud Shot",
      type: Type.Ground,
      category: MoveCategory.Special
    },
    {
      number: 342,
      name: "poisontail",
      displayName: "Poison Tail",
      type: Type.Poison,
      category: MoveCategory.Physical
    },
    {
      number: 343,
      name: "covet",
      displayName: "Covet",
      type: Type.Normal,
      category: MoveCategory.Physical
    },
    {
      number: 344,
      name: "volttackle",
      displayName: "Volt Tackle",
      type: Type.Electric,
      category: MoveCategory.Physical
    },
    {
      number: 345,
      name: "magicalleaf",
      displayName: "Magical Leaf",
      type: Type.Grass,
      category: MoveCategory.Special
    },
    {
      number: 346,
      name: "watersport",
      displayName: "Water Sport",
      type: Type.Water,
      category: MoveCategory.Status
    },
    {
      number: 347,
      name: "calmmind",
      displayName: "Calm Mind",
      type: Type.Psychic,
      category: MoveCategory.Status
    },
    {
      number: 348,
      name: "leafblade",
      displayName: "Leaf Blade",
      type: Type.Grass,
      category: MoveCategory.Physical
    },
    {
      number: 349,
      name: "dragondance",
      displayName: "Dragon Dance",
      type: Type.Dragon,
      category: MoveCategory.Status
    },
    {
      number: 350,
      name: "rockblast",
      displayName: "Rock Blast",
      type: Type.Rock,
      category: MoveCategory.Physical
    },
    {
      number: 351,
      name: "shockwave",
      displayName: "Shock Wave",
      type: Type.Electric,
      category: MoveCategory.Special
    },
    {
      number: 352,
      name: "waterpulse",
      displayName: "Water Pulse",
      type: Type.Water,
      category: MoveCategory.Special
    },
    {
      number: 353,
      name: "doomdesire",
      displayName: "Doom Desire",
      type: Type.Steel,
      category: MoveCategory.Special
    },
    {
      number: 354,
      name: "psychoboost",
      displayName: "Psycho Boost",
      type: Type.Psychic,
      category: MoveCategory.Special
    }
  ],
  pokemon: [
    {
      dex: 252,
      name: "treecko",
      displayName: "Treecko",
      type: Type.Grass
    },
    {
      dex: 253,
      name: "grovyle",
      displayName: "Grovyle",
      type: Type.Grass
    },
    {
      dex: 254,
      name: "sceptile",
      displayName: "Sceptile",
      type: Type.Grass
    },
    {
      dex: 254,
      name: "sceptile",
      img: "sceptile-mega",
      displayName: "Mega Sceptile",
      type: Type.Grass,
      type2: Type.Dragon,
      isVariant: true
    },
    {
      dex: 255,
      name: "torchic",
      displayName: "Torchic",
      type: Type.Fire
    },
    {
      dex: 256,
      name: "combusken",
      displayName: "Combusken",
      type: Type.Fire,
      type2: Type.Fighting
    },
    {
      dex: 257,
      name: "blaziken",
      displayName: "Blaziken",
      type: Type.Fire,
      type2: Type.Fighting
    },
    {
      dex: 257,
      name: "blaziken",
      img: "blaziken-mega",
      displayName: "Mega Blaziken",
      type: Type.Fire,
      type2: Type.Fighting,
      isVariant: true
    },
    {
      dex: 258,
      name: "mudkip",
      displayName: "Mudkip",
      type: Type.Water
    },
    {
      dex: 259,
      name: "marshtomp",
      displayName: "Marshtomp",
      type: Type.Water,
      type2: Type.Ground
    },
    {
      dex: 260,
      name: "swampert",
      displayName: "Swampert",
      type: Type.Water,
      type2: Type.Ground
    },
    {
      dex: 260,
      name: "swampert",
      img: "swampert-mega",
      displayName: "Mega Swampert",
      type: Type.Water,
      type2: Type.Ground,
      isVariant: true
    },
    {
      dex: 261,
      name: "poochyena",
      displayName: "Poochyena",
      type: Type.Dark
    },
    {
      dex: 262,
      name: "mightyena",
      displayName: "Mightyena",
      type: Type.Dark
    },
    {
      dex: 263,
      name: "zigzagoon",
      displayName: "Zigzagoon",
      type: Type.Normal
    },
    {
      dex: 263,
      name: "zigzagoon",
      img: "zigzagoon-galarian",
      displayName: "Galarian Zigzagoon",
      type: Type.Dark,
      type2: Type.Normal,
      isVariant: true
    },
    {
      dex: 264,
      name: "linoone",
      displayName: "Linoone",
      type: Type.Normal
    },
    {
      dex: 264,
      name: "linoone",
      img: "linoone-galarian",
      displayName: "Galarian Linoone",
      type: Type.Dark,
      type2: Type.Normal,
      isVariant: true
    },
    {
      dex: 265,
      name: "wurmple",
      displayName: "Wurmple",
      type: Type.Bug
    },
    {
      dex: 266,
      name: "silcoon",
      displayName: "Silcoon",
      type: Type.Bug
    },
    {
      dex: 267,
      name: "beautifly",
      displayName: "Beautifly",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 268,
      name: "cascoon",
      displayName: "Cascoon",
      type: Type.Bug
    },
    {
      dex: 269,
      name: "dustox",
      displayName: "Dustox",
      type: Type.Bug,
      type2: Type.Poison
    },
    {
      dex: 270,
      name: "lotad",
      displayName: "Lotad",
      type: Type.Water,
      type2: Type.Grass
    },
    {
      dex: 271,
      name: "lombre",
      displayName: "Lombre",
      type: Type.Water,
      type2: Type.Grass
    },
    {
      dex: 272,
      name: "ludicolo",
      displayName: "Ludicolo",
      type: Type.Water,
      type2: Type.Grass
    },
    {
      dex: 273,
      name: "seedot",
      displayName: "Seedot",
      type: Type.Grass
    },
    {
      dex: 274,
      name: "nuzleaf",
      displayName: "Nuzleaf",
      type: Type.Grass,
      type2: Type.Dark
    },
    {
      dex: 275,
      name: "shiftry",
      displayName: "Shiftry",
      type: Type.Grass,
      type2: Type.Dark
    },
    {
      dex: 276,
      name: "taillow",
      displayName: "Taillow",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 277,
      name: "swellow",
      displayName: "Swellow",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 278,
      name: "wingull",
      displayName: "Wingull",
      type: Type.Water,
      type2: Type.Flying
    },
    {
      dex: 279,
      name: "pelipper",
      displayName: "Pelipper",
      type: Type.Water,
      type2: Type.Flying
    },
    {
      dex: 280,
      name: "ralts",
      displayName: "Ralts",
      type: Type.Psychic,
      type2: Type.Fairy
    },
    {
      dex: 281,
      name: "kirlia",
      displayName: "Kirlia",
      type: Type.Psychic,
      type2: Type.Fairy
    },
    {
      dex: 282,
      name: "gardevoir",
      displayName: "Gardevoir",
      type: Type.Psychic,
      type2: Type.Fairy
    },
    {
      dex: 282,
      name: "gardevoir",
      img: "gardevoir-mega",
      displayName: "Mega Gardevoir",
      type: Type.Psychic,
      type2: Type.Fairy,
      isVariant: true
    },
    {
      dex: 283,
      name: "surskit",
      displayName: "Surskit",
      type: Type.Bug,
      type2: Type.Water
    },
    {
      dex: 284,
      name: "masquerain",
      displayName: "Masquerain",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 285,
      name: "shroomish",
      displayName: "Shroomish",
      type: Type.Grass
    },
    {
      dex: 286,
      name: "breloom",
      displayName: "Breloom",
      type: Type.Grass,
      type2: Type.Fighting
    },
    {
      dex: 287,
      name: "slakoth",
      displayName: "Slakoth",
      type: Type.Normal
    },
    {
      dex: 288,
      name: "vigoroth",
      displayName: "Vigoroth",
      type: Type.Normal
    },
    {
      dex: 289,
      name: "slaking",
      displayName: "Slaking",
      type: Type.Normal
    },
    {
      dex: 290,
      name: "nincada",
      displayName: "Nincada",
      type: Type.Bug,
      type2: Type.Ground
    },
    {
      dex: 291,
      name: "ninjask",
      displayName: "Ninjask",
      type: Type.Bug,
      type2: Type.Flying
    },
    {
      dex: 292,
      name: "shedinja",
      displayName: "Shedinja",
      type: Type.Bug,
      type2: Type.Ghost
    },
    {
      dex: 293,
      name: "whismur",
      displayName: "Whismur",
      type: Type.Normal
    },
    {
      dex: 294,
      name: "loudred",
      displayName: "Loudred",
      type: Type.Normal
    },
    {
      dex: 295,
      name: "exploud",
      displayName: "Exploud",
      type: Type.Normal
    },
    {
      dex: 296,
      name: "makuhita",
      displayName: "Makuhita",
      type: Type.Fighting
    },
    {
      dex: 297,
      name: "hariyama",
      displayName: "Hariyama",
      type: Type.Fighting
    },
    {
      dex: 298,
      name: "azurill",
      displayName: "Azurill",
      type: Type.Normal,
      type2: Type.Fairy,
      category: PokemonCategory.Baby
    },
    {
      dex: 299,
      name: "nosepass",
      displayName: "Nosepass",
      type: Type.Rock
    },
    {
      dex: 300,
      name: "skitty",
      displayName: "Skitty",
      type: Type.Normal
    },
    {
      dex: 301,
      name: "delcatty",
      displayName: "Delcatty",
      type: Type.Normal
    },
    {
      dex: 302,
      name: "sableye",
      displayName: "Sableye",
      type: Type.Dark,
      type2: Type.Ghost
    },
    {
      dex: 302,
      name: "sableye",
      img: "sableye-mega",
      displayName: "Mega Sableye",
      type: Type.Dark,
      type2: Type.Ghost,
      isVariant: true
    },
    {
      dex: 303,
      name: "mawile",
      displayName: "Mawile",
      type: Type.Steel,
      type2: Type.Fairy
    },
    {
      dex: 303,
      name: "mawile",
      img: "mawile-mega",
      displayName: "Mega Mawile",
      type: Type.Steel,
      type2: Type.Fairy,
      isVariant: true
    },
    {
      dex: 304,
      name: "aron",
      displayName: "Aron",
      type: Type.Steel,
      type2: Type.Rock
    },
    {
      dex: 305,
      name: "lairon",
      displayName: "Lairon",
      type: Type.Steel,
      type2: Type.Rock
    },
    {
      dex: 306,
      name: "aggron",
      displayName: "Aggron",
      type: Type.Steel,
      type2: Type.Rock
    },
    {
      dex: 306,
      name: "aggron",
      img: "aggron-mega",
      displayName: "Mega Aggron",
      type: Type.Steel,
      isVariant: true
    },
    {
      dex: 307,
      name: "meditite",
      displayName: "Meditite",
      type: Type.Fighting,
      type2: Type.Psychic
    },
    {
      dex: 308,
      name: "medicham",
      displayName: "Medicham",
      type: Type.Fighting,
      type2: Type.Psychic
    },
    {
      dex: 308,
      name: "medicham",
      img: "medicham-mega",
      displayName: "Mega Medicham",
      type: Type.Fighting,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 309,
      name: "electrike",
      displayName: "Electrike",
      type: Type.Electric
    },
    {
      dex: 310,
      name: "manectric",
      displayName: "Manectric",
      type: Type.Electric
    },
    {
      dex: 310,
      name: "manectric",
      img: "manectric-mega",
      displayName: "Mega Manectric",
      type: Type.Electric,
      isVariant: true
    },
    {
      dex: 311,
      name: "plusle",
      displayName: "Plusle",
      type: Type.Electric
    },
    {
      dex: 312,
      name: "minun",
      displayName: "Minun",
      type: Type.Electric
    },
    {
      dex: 313,
      name: "volbeat",
      displayName: "Volbeat",
      type: Type.Bug
    },
    {
      dex: 314,
      name: "illumise",
      displayName: "Illumise",
      type: Type.Bug
    },
    {
      dex: 315,
      name: "roselia",
      displayName: "Roselia",
      type: Type.Grass,
      type2: Type.Poison
    },
    {
      dex: 316,
      name: "gulpin",
      displayName: "Gulpin",
      type: Type.Poison
    },
    {
      dex: 317,
      name: "swalot",
      displayName: "Swalot",
      type: Type.Poison
    },
    {
      dex: 318,
      name: "carvanha",
      displayName: "Carvanha",
      type: Type.Water,
      type2: Type.Dark
    },
    {
      dex: 319,
      name: "sharpedo",
      displayName: "Sharpedo",
      type: Type.Water,
      type2: Type.Dark
    },
    {
      dex: 319,
      name: "sharpedo",
      img: "sharpedo-mega",
      displayName: "Mega Sharpedo",
      type: Type.Water,
      type2: Type.Dark,
      isVariant: true
    },
    {
      dex: 320,
      name: "wailmer",
      displayName: "Wailmer",
      type: Type.Water
    },
    {
      dex: 321,
      name: "wailord",
      displayName: "Wailord",
      type: Type.Water
    },
    {
      dex: 322,
      name: "numel",
      displayName: "Numel",
      type: Type.Fire,
      type2: Type.Ground
    },
    {
      dex: 323,
      name: "camerupt",
      displayName: "Camerupt",
      type: Type.Fire,
      type2: Type.Ground
    },
    {
      dex: 323,
      name: "camerupt",
      img: "camerupt-mega",
      displayName: "Mega Camerupt",
      type: Type.Fire,
      type2: Type.Ground,
      isVariant: true
    },
    {
      dex: 324,
      name: "torkoal",
      displayName: "Torkoal",
      type: Type.Fire
    },
    {
      dex: 325,
      name: "spoink",
      displayName: "Spoink",
      type: Type.Psychic
    },
    {
      dex: 326,
      name: "grumpig",
      displayName: "Grumpig",
      type: Type.Psychic
    },
    {
      dex: 327,
      name: "spinda",
      displayName: "Spinda",
      type: Type.Normal
    },
    {
      dex: 328,
      name: "trapinch",
      displayName: "Trapinch",
      type: Type.Ground
    },
    {
      dex: 329,
      name: "vibrava",
      displayName: "Vibrava",
      type: Type.Ground,
      type2: Type.Dragon
    },
    {
      dex: 330,
      name: "flygon",
      displayName: "Flygon",
      type: Type.Ground,
      type2: Type.Dragon
    },
    {
      dex: 331,
      name: "cacnea",
      displayName: "Cacnea",
      type: Type.Grass
    },
    {
      dex: 332,
      name: "cacturne",
      displayName: "Cacturne",
      type: Type.Grass,
      type2: Type.Dark
    },
    {
      dex: 333,
      name: "swablu",
      displayName: "Swablu",
      type: Type.Normal,
      type2: Type.Flying
    },
    {
      dex: 334,
      name: "altaria",
      displayName: "Altaria",
      type: Type.Dragon,
      type2: Type.Flying
    },
    {
      dex: 334,
      name: "altaria",
      img: "altaria-mega",
      displayName: "Mega Altaria",
      type: Type.Dragon,
      type2: Type.Fairy,
      isVariant: true
    },
    {
      dex: 335,
      name: "zangoose",
      displayName: "Zangoose",
      type: Type.Normal
    },
    {
      dex: 336,
      name: "seviper",
      displayName: "Seviper",
      type: Type.Poison
    },
    {
      dex: 337,
      name: "lunatone",
      displayName: "Lunatone",
      type: Type.Rock,
      type2: Type.Psychic
    },
    {
      dex: 338,
      name: "solrock",
      displayName: "Solrock",
      type: Type.Rock,
      type2: Type.Psychic
    },
    {
      dex: 339,
      name: "barboach",
      displayName: "Barboach",
      type: Type.Water,
      type2: Type.Ground
    },
    {
      dex: 340,
      name: "whiscash",
      displayName: "Whiscash",
      type: Type.Water,
      type2: Type.Ground
    },
    {
      dex: 341,
      name: "corphish",
      displayName: "Corphish",
      type: Type.Water
    },
    {
      dex: 342,
      name: "crawdaunt",
      displayName: "Crawdaunt",
      type: Type.Water,
      type2: Type.Dark
    },
    {
      dex: 343,
      name: "baltoy",
      displayName: "Baltoy",
      type: Type.Ground,
      type2: Type.Psychic
    },
    {
      dex: 344,
      name: "claydol",
      displayName: "Claydol",
      type: Type.Ground,
      type2: Type.Psychic
    },
    {
      dex: 345,
      name: "lileep",
      displayName: "Lileep",
      type: Type.Rock,
      type2: Type.Grass,
      category: PokemonCategory.Fossil
    },
    {
      dex: 346,
      name: "cradily",
      displayName: "Cradily",
      type: Type.Rock,
      type2: Type.Grass,
      category: PokemonCategory.Fossil
    },
    {
      dex: 347,
      name: "anorith",
      displayName: "Anorith",
      type: Type.Rock,
      type2: Type.Bug,
      category: PokemonCategory.Fossil
    },
    {
      dex: 348,
      name: "armaldo",
      displayName: "Armaldo",
      type: Type.Rock,
      type2: Type.Bug,
      category: PokemonCategory.Fossil
    },
    {
      dex: 349,
      name: "feebas",
      displayName: "Feebas",
      type: Type.Water
    },
    {
      dex: 350,
      name: "milotic",
      displayName: "Milotic",
      type: Type.Water
    },
    {
      dex: 351,
      name: "castform",
      displayName: "Castform",
      type: Type.Normal
    },
    {
      dex: 351,
      name: "castform",
      img: "castform-sunny",
      displayName: "Sunny Form Castform",
      type: Type.Fire,
      isVariant: true
    },
    {
      dex: 351,
      name: "castform",
      img: "castform-rainy",
      displayName: "Rainy Form Castform",
      type: Type.Water,
      isVariant: true
    },
    {
      dex: 351,
      name: "castform",
      img: "castform-snowy",
      displayName: "Snowy Form Castform",
      type: Type.Ice,
      isVariant: true
    },
    {
      dex: 352,
      name: "kecleon",
      displayName: "Kecleon",
      type: Type.Normal
    },
    {
      dex: 353,
      name: "shuppet",
      displayName: "Shuppet",
      type: Type.Ghost
    },
    {
      dex: 354,
      name: "banette",
      displayName: "Banette",
      type: Type.Ghost
    },
    {
      dex: 354,
      name: "banette",
      img: "banette-mega",
      displayName: "Mega Banette",
      type: Type.Ghost,
      isVariant: true
    },
    {
      dex: 355,
      name: "duskull",
      displayName: "Duskull",
      type: Type.Ghost
    },
    {
      dex: 356,
      name: "dusclops",
      displayName: "Dusclops",
      type: Type.Ghost
    },
    {
      dex: 357,
      name: "tropius",
      displayName: "Tropius",
      type: Type.Grass,
      type2: Type.Flying
    },
    {
      dex: 358,
      name: "chimecho",
      displayName: "Chimecho",
      type: Type.Psychic
    },
    {
      dex: 359,
      name: "absol",
      displayName: "Absol",
      type: Type.Dark
    },
    {
      dex: 359,
      name: "absol",
      img: "absol-mega",
      displayName: "Mega Absol",
      type: Type.Dark,
      isVariant: true
    },
    {
      dex: 360,
      name: "wynaut",
      displayName: "Wynaut",
      type: Type.Psychic,
      category: PokemonCategory.Baby
    },
    {
      dex: 361,
      name: "snorunt",
      displayName: "Snorunt",
      type: Type.Ice
    },
    {
      dex: 362,
      name: "glalie",
      displayName: "Glalie",
      type: Type.Ice
    },
    {
      dex: 362,
      name: "glalie",
      img: "glalie-mega",
      displayName: "Mega Glalie",
      type: Type.Ice,
      isVariant: true
    },
    {
      dex: 363,
      name: "spheal",
      displayName: "Spheal",
      type: Type.Ice,
      type2: Type.Water
    },
    {
      dex: 364,
      name: "sealeo",
      displayName: "Sealeo",
      type: Type.Ice,
      type2: Type.Water
    },
    {
      dex: 365,
      name: "walrein",
      displayName: "Walrein",
      type: Type.Ice,
      type2: Type.Water
    },
    {
      dex: 366,
      name: "clamperl",
      displayName: "Clamperl",
      type: Type.Water
    },
    {
      dex: 367,
      name: "huntail",
      displayName: "Huntail",
      type: Type.Water
    },
    {
      dex: 368,
      name: "gorebyss",
      displayName: "Gorebyss",
      type: Type.Water
    },
    {
      dex: 369,
      name: "relicanth",
      displayName: "Relicanth",
      type: Type.Water,
      type2: Type.Rock
    },
    {
      dex: 370,
      name: "luvdisc",
      displayName: "Luvdisc",
      type: Type.Water
    },
    {
      dex: 371,
      name: "bagon",
      displayName: "Bagon",
      type: Type.Dragon
    },
    {
      dex: 372,
      name: "shelgon",
      displayName: "Shelgon",
      type: Type.Dragon
    },
    {
      dex: 373,
      name: "salamence",
      displayName: "Salamence",
      type: Type.Dragon,
      type2: Type.Flying
    },
    {
      dex: 373,
      name: "salamence",
      img: "salamence-mega",
      displayName: "Mega Salamence",
      type: Type.Dragon,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 374,
      name: "beldum",
      displayName: "Beldum",
      type: Type.Steel,
      type2: Type.Psychic
    },
    {
      dex: 375,
      name: "metang",
      displayName: "Metang",
      type: Type.Steel,
      type2: Type.Psychic
    },
    {
      dex: 376,
      name: "metagross",
      displayName: "Metagross",
      type: Type.Steel,
      type2: Type.Psychic
    },
    {
      dex: 376,
      name: "metagross",
      img: "metagross-mega",
      displayName: "Mega Metagross",
      type: Type.Steel,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 377,
      name: "regirock",
      displayName: "Regirock",
      type: Type.Rock,
      category: PokemonCategory.Legendary
    },
    {
      dex: 378,
      name: "regice",
      displayName: "Regice",
      type: Type.Ice,
      category: PokemonCategory.Legendary
    },
    {
      dex: 379,
      name: "registeel",
      displayName: "Registeel",
      type: Type.Steel,
      category: PokemonCategory.Legendary
    },
    {
      dex: 380,
      name: "latias",
      displayName: "Latias",
      type: Type.Dragon,
      type2: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 380,
      name: "latias",
      img: "latias-mega",
      displayName: "Mega Latias",
      type: Type.Dragon,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 381,
      name: "latios",
      displayName: "Latios",
      type: Type.Dragon,
      type2: Type.Psychic,
      category: PokemonCategory.Legendary
    },
    {
      dex: 381,
      name: "latios",
      img: "latios-mega",
      displayName: "Mega Latios",
      type: Type.Dragon,
      type2: Type.Psychic,
      isVariant: true
    },
    {
      dex: 382,
      name: "kyogre",
      displayName: "Kyogre",
      type: Type.Water,
      category: PokemonCategory.Legendary
    },
    {
      dex: 382,
      name: "kyogre",
      img: "kyogre-primal",
      displayName: "Primal Kyogre",
      type: Type.Water,
      isVariant: true
    },
    {
      dex: 383,
      name: "groudon",
      displayName: "Groudon",
      type: Type.Ground,
      category: PokemonCategory.Legendary
    },
    {
      dex: 383,
      name: "groudon",
      img: "groudon-primal",
      displayName: "Primal Groudon",
      type: Type.Ground,
      type2: Type.Fire,
      isVariant: true
    },
    {
      dex: 384,
      name: "rayquaza",
      displayName: "Rayquaza",
      type: Type.Dragon,
      type2: Type.Flying,
      category: PokemonCategory.Legendary
    },
    {
      dex: 384,
      name: "rayquaza",
      img: "rayquaza-mega",
      displayName: "Mega Rayquaza",
      type: Type.Dragon,
      type2: Type.Flying,
      isVariant: true
    },
    {
      dex: 385,
      name: "jirachi",
      displayName: "Jirachi",
      type: Type.Steel,
      type2: Type.Psychic,
      category: PokemonCategory.Mythical
    },
    {
      dex: 386,
      name: "deoxys",
      displayName: "Deoxys",
      type: Type.Psychic,
      category: PokemonCategory.Mythical
    }
  ]
};
