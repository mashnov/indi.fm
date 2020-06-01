<template>
  <div class="player-city-control">
    {{ cityTitle }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ClickOutside from 'vue-click-outside';
  import find from 'lodash/find';
  import get from 'lodash/get';
  import { REFERENCES, PLAYER } from '~/src/store/types';

  export default {
    name: 'PlayerCityControl',
    directives: {
      ClickOutside,
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
      ...mapGetters('player', {
        cities: PLAYER.GET_CITIES,
        currentCity: PLAYER.GET_CURRENT_CITY,
      }),
      cityTitle() {
        const { cities, currentCity, i18n } = this;
        const city = find(cities, { value: currentCity });
        return get(city, 'label', i18n.cityNoSelect);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .player-city-control {
    display: block;
    color: $gray;
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.15s $animationEasing;
  }
  .player-city-control:hover {
    color: $white;
  }
  @media (min-width: $screen-sm) {
    .player-city-control {
      font-size: 21px;
    }
  }
  @media (min-width: $screen-md) {
    .player-city-control {
      font-size: 24px;
      line-height: 30px;
    }
  }
</style>
