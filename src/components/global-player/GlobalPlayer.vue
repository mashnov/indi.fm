<template>
  <div class="global-player" />
</template>

<script>
  import get from 'lodash/get';
  import throttle from 'lodash/throttle';
  import { mapActions, mapGetters } from 'vuex';
  import { PLAYER } from '~/src/store/types';

  export default {
    name: 'GlobalPlayer',
    data() {
      return {
        isPlaying: false,
        player: null,
      };
    },
    computed: {
      ...mapGetters('player', {
        list: PLAYER.GET_CITY_TRACKS,
        soundValue: PLAYER.GET_SOUND_VALUE,
        trackStatus: PLAYER.GET_TRACK_STATUS,
      }),
      volumeLevel() {
        const { soundValue } = this;
        return soundValue * 0.01;
      },
      currentTrack() {
        const { list } = this;
        return get(list, 'current', null);
      },
    },
    watch: {
      volumeLevel: {
        setImmediate: true,
        handler() {
          this.setAudioVolume();
        },
      },
      currentTrack() {
        this.setAudioSource();
      },
      trackStatus() {
        const { trackStatus } = this;
        if (trackStatus === 'pause') {
          this.pauseTrack();
        }
        if (trackStatus === 'play') {
          this.playTrack();
        }
      },
    },
    mounted() {
      this.player = new Audio();
      this.player.onended = () => {
        this.setTrackStatus('ended');
      };
    },
    methods: {
      ...mapActions('player', {
        setTrackStatus: PLAYER.SET_TRACK_STATUS,
      }),
      setAudioVolume: throttle(function() {
        this.setTrackVolume();
      }, 300),
      setAudioSource: throttle(function() {
        this.stopTrack();
        this.updateTrack();
        this.playTrack();
      }, 300),
      playTrack() {
        const { isPlaying, player } = this;
        if (!isPlaying) {
          player.play();
          this.isPlaying = true;
          this.setTrackStatus('play');
        }
      },
      pauseTrack() {
        const { isPlaying, player } = this;
        if (isPlaying) {
          player.pause();
          this.isPlaying = false;
          this.setTrackStatus('pause');
        }
      },
      stopTrack() {
        const { isPlaying, player } = this;
        if (isPlaying) {
          player.pause();
          this.isPlaying = false;
          this.setTrackStatus('stop');
        }
        player.currentTime = 0;
      },
      updateTrack() {
        const { currentTrack, player } = this;
        player.title = `${currentTrack.artist} - ${currentTrack.name}`;
        player.poster = currentTrack.poster;
        player.src = currentTrack.source;
      },
      setTrackVolume() {
        const { volumeLevel } = this;
        const audio = this.$refs.audio;
        audio.volume = volumeLevel;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .global-player {
    position: absolute;
    width: 1px;
    height: 1px;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: -1;
  }
</style>
