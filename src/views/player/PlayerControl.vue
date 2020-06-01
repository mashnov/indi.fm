<template>
  <div
    class="player-control"
    :class="[
      isAnimated && 'player-control_animated',
    ]"
  >
    <div class="player-control__content">
      <div class="player-control__title">
        <div class="player-control__title-wrap">
          <span>{{ list.current.name }}</span>
          <span>{{ list.current.artist }}</span>
        </div>
      </div>
      <div
        v-touch:swipe="swipeEventHandler"
        class="player-control__wrap"
      >
        <div
          class="player-control__item"
          :style="getItemBackgroundImage(list.current)"
          @click="toggleTrackStatus"
        />
        <div
          class="player-control__item"
          @click="nextItemClickHandler"
        />
        <div class="player-control__item" />
      </div>
    </div>
  </div>
</template>

<script>
  import get from 'lodash/get';
  import { mapGetters, mapActions } from 'vuex';
  import { PLAYER, VIEWPORT } from '~/src/store/types';
  import { sleep } from '~/src/helpers/system';

  const POSTER_SRC = require('@/assets/images/player/nocover.png');

  const UP_SWIPE_BREAKPOINT = [null, 'xs', 'sm'];
  const LEFT_SWIPE_BREAKPOINT = ['md', 'lg', 'xl', 'hd'];

  export default {
    name: 'PlayerControl',
    data() {
      return {
        isAnimated: false,
      };
    },
    computed: {
      ...mapGetters('viewport', {
        currentBreakpoint: VIEWPORT.GET_CURRENT_BREAKPOINT,
      }),
      ...mapGetters('player', {
        list: PLAYER.GET_CITY_TRACKS,
        trackStatus: PLAYER.GET_TRACK_STATUS,
      }),
      trackStatusMapper() {
        const { trackStatus } = this;
        return trackStatus === 'play' ? 'pause' : 'play';
      },
    },
    watch: {
      trackStatus() {
        const { trackStatus } = this;
        if (trackStatus === 'ended') {
          this.nextItemClickHandler();
        }
      },
    },
    methods: {
      ...mapActions('player', {
        nextTrack: PLAYER.NEXT_TRACK,
        setTrackStatus: PLAYER.SET_TRACK_STATUS,
      }),
      swipeEventHandler(direction) {
        const { currentBreakpoint } = this;
        const upIsAllowed = UP_SWIPE_BREAKPOINT.includes(currentBreakpoint);
        const leftIsAllowed = LEFT_SWIPE_BREAKPOINT.includes(currentBreakpoint);
        if (direction === 'top' && upIsAllowed) {
          this.nextItemClickHandler();
        }
        if (direction === 'left' && leftIsAllowed) {
          this.nextItemClickHandler();
        }
      },
      getItemBackgroundImage(item) {
        const { isAnimated } = this;
        const poster = get(item, 'poster', null);
        const image = poster && !isAnimated ? poster : POSTER_SRC;
        return {
          backgroundImage: `url(${image})`,
        };
      },
      async nextItemClickHandler() {
        this.isAnimated = true;
        this.nextTrack();
        await sleep(600);
        this.isAnimated = false;
      },
      toggleTrackStatus() {
        const { trackStatusMapper } = this;
        this.setTrackStatus(trackStatusMapper);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .player-control {
    position: relative;
    display: block;
    width: 100%;
  }
  .player-control__title {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    bottom: 270px;
    left: 0;
    width: 100%;
    height: calc(100vh - 300px - 40px);
    margin: 0 auto;
    padding: 20px 10px;
    text-align: center;
  }
  .player-control__title-wrap {
    display: block;
    width: 100%;
  }
  .player-control__title span {
    display: block;
  }
  .player-control__title span:nth-child(1) {
    margin-bottom: 10px;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: $white;
  }
  .player-control__title span:nth-child(2) {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: $gray;
  }
  .player-control__wrap {
    position: absolute;
    width: 100%;
    height: 300px;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
  .player-control__item {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: $white;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("~@/assets/images/player/nocover.png");
    background-size: cover;
    transition: background-image 0.5s $animationEasing, box-shadow 0.5s $animationEasing;
  }
  .player-control_animated .player-control__item {
    transition: transform 0.5s $animationEasing, opacity 0.5s $animationEasing, background-image 0.5s linear;
  }
  .player-control__item:nth-child(1) {
    box-shadow: $musicShadow;
    transform: scale(2) translateY(40px);
    opacity: 1;
  }
  .player-control__item:nth-child(2) {
    transform: translateY(160px);
    opacity: 0.5;
  }
  .player-control__item:nth-child(3) {
    transform: translateY(250px);
    opacity: 0.5;
  }
  .player-control_animated .player-control__item:nth-child(1) {
    box-shadow: none;
    transform: scale(1) translateY(0);
    opacity: 0;
  }
  .player-control_animated .player-control__item:nth-child(2) {
    transform: scale(2) translateY(-10px);
    opacity: 0.9;
  }
  .player-control_animated .player-control__item:nth-child(3) {
    transform: translateY(60px);
    opacity: 0.5;
  }
  @media (min-width: $screen-sm) {
    .player-control__title {
      bottom: 440px;
      height: calc(100% - 440px);
    }
    .player-control__wrap {
      height: 440px;
    }
    .player-control__item {
      width: 150px;
      height: 150px;
    }
    .player-control__item:nth-child(1) {
      transform: scale(2) translateY(60px);
    }
    .player-control__item:nth-child(2) {
      transform: translateY(220px);
    }
    .player-control__item:nth-child(3) {
      transform: translateY(300px);
    }
    .player-control_animated .player-control__item:nth-child(1) {
      transform: scale(1) translateY(0);
    }
    .player-control_animated .player-control__item:nth-child(2) {
      transform: scale(2) translateY(-15px);
    }
    .player-control_animated .player-control__item:nth-child(3) {
      transform: translateY(70px);
    }
  }
  @media (min-width: $screen-md) {
    .player-control__title {
      bottom: 360px;
      height: calc(100% - 360px);
    }
    .player-control__wrap {
      width: 576px;
      height: 360px;
      bottom: 20px;
      left: calc(50% - 288px);
      white-space: nowrap;
    }
    .player-control__item {
      display: inline-block;
      vertical-align: middle;
      margin: 0;
    }
    .player-control__item:nth-child(1) {
      transform: scale(2) translateY(53px) translateX(53px);
    }
    .player-control__item:nth-child(2) {
      transform: translateY(105px) translateX(253px);
    }
    .player-control__item:nth-child(3) {
      transform: translateY(105px) translateX(400px);
    }
    .player-control_animated .player-control__item:nth-child(1) {
      transform: scale(1) translateY(105px) translateX(51px);
    }
    .player-control_animated .player-control__item:nth-child(2) {
      transform: scale(2) translateY(53px) translateX(-22px);
    }
    .player-control_animated .player-control__item:nth-child(3) {
      transform: scale(1) translateY(105px) translateX(103px);
    }
  }
  @media (min-width: $screen-lg) {
    .player-control {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .player-control__content {
      display: block;
      margin: 0 auto;
    }
    .player-control__title {
      position: relative;
      bottom: auto;
      height: 156px;
      width: 323px;
      margin: 0 0 0 20px;
    }
    .player-control__wrap {
      position: relative;
      bottom: auto;
      max-width: 700px;
      right: 20px;
    }
  }
</style>
