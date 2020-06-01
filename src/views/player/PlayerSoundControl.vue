<template>
  <div
    v-click-outside="hidePopup"
    class="player-sound-control"
    :class="[
      popupIsVisible && 'player-sound-control_popup-is-visible',
    ]"
  >
    <div
      class="player-sound-control__icon"
      @click="iconClickHandler"
    >
      <SoundIcon />
    </div>
    <transition name="popup">
      <div
        v-show="popupIsVisible"
        class="player-sound-control__content"
      >
        <span>
          {{ soundValue }}
        </span>
        <circle-slider
          :value="soundValue"
          :side="160"
          :min="0"
          :max="100"
          :progress-width-rel="50"
          :circle-width-rel="100"
          :knob-radius="10"
          circle-color="#9F9D9D"
          progress-color="#FFFFFF"
          knob-color="#FFFFFF"
          @input="setSoundValue"
        />
      </div>
    </transition>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside';
  import throttle from 'lodash/throttle';
  import { mapGetters, mapActions } from 'vuex';
  import { PLAYER } from '~/src/store/types';

  import SoundIcon from '~/src/assets/svg/sound-icon.svg';

  export default {
    name: 'PlayerSoundControl',
    directives: {
      ClickOutside,
    },
    components: {
      SoundIcon,
    },
    data() {
      return {
        popupIsVisible: false,
      };
    },
    computed: {
      ...mapGetters('player', {
        soundValue: PLAYER.GET_SOUND_VALUE,
      }),
    },
    methods: {
      ...mapActions('player', {
        setSoundValue: PLAYER.SET_SOUND_VALUE,
      }),
      hidePopup() {
        this.popupIsVisible = false;
      },
      iconClickHandler: throttle(function() {
        const { popupIsVisible } = this;
        this.popupIsVisible = !popupIsVisible;
      }, 500),
    },
  };
</script>

<style lang="scss" scoped>
  .player-sound-control {
    position: relative;
  }
  .player-sound-control__icon {
    display: block;
    padding: 0 10px;
    cursor: pointer;
  }
  .player-sound-control__icon svg {
    display: block;
    width: 20px;
    height: 20px;
    color: $gray;
    transition: color 0.15s $animationEasing;
  }
  .player-sound-control__icon:hover svg {
    color: $white;
  }
  .player-sound-control__content {
    position: absolute;
    display: block;
    left: 50%;
    top: 50px;
    transform: translateX(-50%) translateZ(0);
    width: 190px;
    box-shadow: $modalShadow;
    background: $dark;
    border-radius: 20px;
    padding: 25px 15px 15px 15px;
    overflow: hidden;
  }
  .player-sound-control__content span {
    position: absolute;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-decoration: none;
    color: $white;
    top: calc(50% - 15px);
    left: 0;
  }
  @media (min-width: $screen-sm) {
    .player-sound-control__icon svg {
      width: 25px;
      height: 25px;
    }
  }
  @media (min-width: $screen-md) {
    .player-sound-control__icon svg {
      width: 30px;
      height: 30px;
    }
  }
</style>
