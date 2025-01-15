import melee from '@/data/weapons/melee'

const specialCamouflages = {
  'Knife': {
    multiplayer: {
      'Dying Envy': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
      'Tropical Leopard': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Dying Bloom': { amount: 300, type: 'kills_with_brain_rot_equipped' },
      'Vacation Leopard': { amount: 75, type: 'armored_zombie_kills' },
    },

    warzone: {
      'Dying Ember':  { amount: 5, type: 'kills_after_sprinting' },
      'Sunrise Leopard': { amount: 5, type: 'kills_after_taking_damage' },
    },
  },

  'Baseball Bat': {
    multiplayer: {
      Torment: { amount: 15, type: 'kills_shortly_after_switching_weapons' },
      Slip: { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      Banished: { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      Contort: { amount: 30, type: 'vermin_kills' },
    },

    warzone: {
      'Skew': { amount: 5, type: 'kills_while_under_uav' },
      'Spooked': { amount: 5, type: 'kills_on_affected_enemies_with_tacticals' },
    },
  },

  'Cleaver': {
    multiplayer: {
      'Creepy Crypt': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
      'Luminous Leopard': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Tragic Tomb': { amount: 75, type: 'armored_zombie_kills' },
      'Shock Leopard': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
    },

    warzone: {
      'Ghostly Grounds': { amount: 3, type: 'kills_in_a_single_match', times: 5 },
      'Blazing Leopard': { amount: 5, type: 'kills_while_under_uav' },
    },
  },

  'Power Drill': {
    multiplayer: {
      'Twilight Toadstool': { amount: 50, type: 'kills_while_recon_combat_speciality_is_active' },
      Thermal: { amount: 15, type: 'kills_after_sprinting' },
    },

    zombies: {
      'Glimmering Grove': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      Shimmer: { amount: 10, type: 'mangler_kills' },
    },

    warzone: {
      'Faerie Fungi': { amount: 3, type: 'kills_in_a_single_match', times: 5 },
      Alloy: { amount: 2, type: 'kills_without_taking_damage', times: 5 },
    },
  },
}

export default {
  ...melee.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        // Military
        'Granite': { amount: 5, type: 'kills' },
        'Woodland': { amount: 10, type: 'kills' },
        'Savanna': { amount: 15, type: 'kills' },
        'Splinter': { amount: 20, type: 'kills' },
        'Moss': { amount: 30, type: 'kills' },
        'Saboteur': { amount: 40, type: 'kills' },
        'Digital': { amount: 50, type: 'kills' },
        'Tide': { amount: 75, type: 'kills' },
        'Red Tiger': { amount: 100, type: 'kills' },

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
        'Slate': { amount: 100, type: 'kills' },
        'Desert': { amount: 200, type: 'kills' },
        'Evergreen': { amount: 300, type: 'kills' },
        'Rugged': { amount: 400, type: 'kills' },
        'Grim': { amount: 600, type: 'kills' },
        'Stripe': { amount: 800, type: 'kills' },
        'Oceanic': { amount: 1000, type: 'kills' },
        'Whiteout': { amount: 1500, type: 'kills' },
        'Purple Tiger': { amount: 2000, type: 'kills' },

        // Special
        ...specialCamouflages[weapon]?.zombies,

        // Mastery
        'Mystic Gold': { amount: 10, type: 'rapid_kills', times: 15 },
        'Opal': { amount: 30, type: 'special_zombie_eliminations' },
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
        'Gold Tiger': { amount: 3, type: 'kills_while_most_wanted' },
        "King's Ransom": { amount: 3, type: 'kills_without_dying', times: 2 },
        'Catalyst': { amount: 3, type: 'kills_on_affected_enemies_with_tacticals' },
        'Abyss': { amount: 5, type: 'kills_without_dying', times: 1 },
      },
    }

    return acc
  }, {}),
}
