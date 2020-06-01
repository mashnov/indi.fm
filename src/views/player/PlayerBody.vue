<template>
  <div class="row">
    <div class="player-body">
      <div class="d-none d-sm-none d-md-none d-lg-flex col-lg-5">
        <PlayerApps />
      </div>
      <div class="d-flex col-12 col-lg-7">
        <PlayerControl v-if="playerControlIsVisible" />
        <PlayerNoCity v-else />
      </div>
    </div>
  </div>
</template>

<script>
  import isEmpty from 'lodash/isEmpty';
  import { mapGetters } from 'vuex';
  import { PLAYER } from '~/src/store/types';

  import PlayerApps from './PlayerApps';
  import PlayerNoCity from './PlayerNoCity'
  import PlayerControl from './PlayerControl';

  export default {
    name: 'PlayerBody',
    components: {
      PlayerApps,
      PlayerControl,
      PlayerNoCity,
    },
    computed: {
      ...mapGetters('player', {
        list: PLAYER.GET_CITY_TRACKS,
      }),
      playerControlIsVisible() {
        const { list } = this;
        return !isEmpty(list);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .player-body {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: calc(100vh - 40px);
    z-index: 1;
  }
  @media (min-width: $screen-sm) {
    .player-body {
      min-height: calc(100vh - 55px);
    }
  }
  @media (min-width: $screen-md) {
    .player-body {
      min-height: calc(100vh - 60px - 50px);
    }
  }
</style>
