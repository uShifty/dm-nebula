<template>
  <div class="overall-progress-component">
    <div class="counter" v-for="(counter, name) in overallProgress" :key="name">
      <img
        :src="`/src/assets/camouflages/${name
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/'/g, '')}.png`"
        :alt="name"
        onerror="javascript:this.src='/military-gradient.svg'" />
      <p>
        <span>{{ name }} {{ $t('general.unlocked') }}</span>
        <span>{{ counter }}/{{ totalWeapons }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'

const progressCategories = {
  multiplayer: ['Gold', 'Diamond', 'Dark Spine', 'Dark Matter'],
  zombies: ['Mystic Gold', 'Opal', 'Afterlife', 'Nebula'],
  warzone: ['Gold Tiger', "King's Ransom", 'Catalyst', 'Abyss'],
};

export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState(useStore, ['weapons']),

    overallProgress() {
      const { mode, weapons } = this;

      if (progressCategories[mode]) {
        return progressCategories[mode].reduce((result, category) => {
          result[category] = weapons.filter((w) => w.progress[mode][category]).length;
          return result;
        }, {});
      }
      return {};
    },
    totalWeapons() {
      return this.weapons.length
    },
  },
}
</script>

<style lang="scss" scoped>
.overall-progress-component {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 0 25px;
  padding: 10px;

  .counter {
    align-items: center;
    display: flex;
    font-size: 14px;
    justify-content: center;

    + .counter {
      margin-left: 40px;
    }

    img {
      $size: 20px;

      border-radius: $size;
      height: 100%;
      margin-right: 8px;
      object-fit: cover;
      position: relative;
      width: $size;
      z-index: 1;
    }

    p {
      cursor: default;
      font-weight: 400;

      span:first-child {
        margin-right: 5px;
      }

      span:last-child {
        font-weight: 600;
      }
    }
  }

  @media (max-width: $tablet) {
    justify-content: space-around;
    gap: 10px;
    margin-top: 0;

    .counter + .counter {
      margin-left: 0;
    }

    .counter p span:first-child {
      display: none;
    }
  }

  @media (max-width: $mobile) {
    align-items: flex-start;
    flex-direction: column;

    .counter p span:first-child {
      display: inline-block;
    }
  }
}
</style>
