import lightMachineGuns from '@/data/weapons/lightMachineGuns'

const specialCamouflages = {
  'PU-21': {
    multiplayer: {
      'Neon Bath': { amount: 30, type: 'kills_after_sprinting' },
      'Vigilance': { amount: 2, type: 'kills_without_reloading', times: 10 },
    },

    zombies: {
      Vivid: { amount: 10, type: 'mangler_kills' },
      Justice: { amount: 300, type: 'hipfire_kills' },
    },

    warzone: {
      'Destined': { amount: 2, type: 'kills_without_taking_damage', times: 5 },
      'Bravery': { amount: 5, type: 'kills_on_most_wanted_target' },
    },
  },

  'XMG': {
    multiplayer: {
      Buzz: { amount: 2, type: 'kills_without_releasing_trigger', times: 5 },
      Snakebite: { amount: 50, type: 'kills_while_moving' },
    },

    zombies: {
      'Hiss': { amount: 10, type: 'kills_without_reloading', times: 15 },
      'Acid Slide': { amount: 300, type: 'kills_with_brain_rot_equipped' },
    },

    warzone: {
      'Fizz': { amount: 2, type: 'kills_without_reloading', times: 5 },
      'Nightfang': { amount: 5, type: 'kills_while_under_uav' },
    },
  },

  'GPMG-7': {
    multiplayer: {
      'Brush Stroke': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
      'Idyllic': { amount: 30, type: 'point_blank_kills' },
    },

    zombies: {
      'Impressionist': { amount: 300, type: 'point_blank_kills' },
      'Other World': { amount: 10, type: 'kills_without_reloading', times: 15 },
    },

    warzone: {
      'Splattered': { amount: 2, type: 'kills_within_30_seconds', times: 5 },
      'Dark Paradise': { amount: 10, type: 'kills_while_prone'},
    },
  },
}

export default {
  ...lightMachineGuns.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        // Military
        'Granite': { amount: 5, type: 'headshots' },
        'Woodland': { amount: 10, type: 'headshots' },
        'Savanna': { amount: 15, type: 'headshots' },
        'Splinter': { amount: 20, type: 'headshots' },
        'Moss': { amount: 30, type: 'headshots' },
        'Saboteur': { amount: 40, type: 'headshots' },
        'Digital': { amount: 50, type: 'headshots' },
        'Tide': { amount: 75, type: 'headshots' },
        'Red Tiger': { amount: 100, type: 'headshots' },

        // Special
        ...specialCamouflages[weapon]?.multiplayer,

        // Mastery
        'Gold': { amount: 10, type: 'double_kills' },
        'Diamond': { amount: 3, type: 'kills_without_dying', times: 10 },
        'Dark Spine': { amount: 3, type: 'triple_kills' },
        'Dark Matter': { amount: 5, type: 'kills_without_dying', times: 3 },
      },

      zombies: {
        // Military
        'Slate': { amount: 100, type: 'critical_kills' },
        'Desert': { amount: 200, type: 'critical_kills' },
        'Evergreen': { amount: 300, type: 'critical_kills' },
        'Rugged': { amount: 400, type: 'critical_kills' },
        'Grim': { amount: 600, type: 'critical_kills' },
        'Stripe': { amount: 800, type: 'critical_kills' },
        'Oceanic': { amount: 1000, type: 'critical_kills' },
        'Whiteout': { amount: 1500, type: 'critical_kills' },
        'Purple Tiger': { amount: 2000, type: 'critical_kills' },

        // Special
        ...specialCamouflages[weapon]?.zombies,

        // Mastery
        'Mystic Gold': { amount: 10, type: 'rapid_kills', times: 15 },
        'Opal': { amount: 30, type: 'special_zombie_kills' },
        'Afterlife': { amount: 20, type: 'consecutive_kills_without_taking_damage', times: 10 },
        'Nebula': { amount: 10, type: 'elite_zombie_kills' },
      },

      warzone: {
        // Military
        'Quartz': { amount: 5, type: 'eliminations' },
        'Tundra': { amount: 10, type: 'eliminations' },
        'Canyon': { amount: 15, type: 'eliminations' },
        'Pine': { amount: 20, type: 'eliminations' },
        'Undergrowth': { amount: 30, type: 'eliminations' },
        'Snakeskin': { amount: 40, type: 'eliminations' },
        'Siberia': { amount: 50, type: 'eliminations' },
        'Smolder': { amount: 75, type: 'eliminations' },
        'Blue Tiger': { amount: 100, type: 'eliminations' },

        // Special
        ...specialCamouflages[weapon]?.warzone,

        // Mastery
        'Gold Tiger': { amount: 5, type: 'kills_while_most_wanted' },
        "King's Ransom": { amount: 3, type: 'kills_without_dying', times: 5 },
        'Catalyst': { amount: 5, type: 'kills_on_affected_enemies_with_tacticals' },
        'Abyss': { amount: 5, type: 'kills_without_dying', times: 2 },
      },
    }

    return acc
  }, {}),
}
