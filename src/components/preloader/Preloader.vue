<template>
  <transition
    appear
    name="fade"
  >
    <div
      v-if="isVisible"
      class="preloader"
    >
      <PreloaderIcon />
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { PRELOADER } from '~/src/store/types';
  import PreloaderIcon from '~/src/assets/svg/preloader-icon.svg';

  export default {
    name: 'Preloader',
    components: {
      PreloaderIcon,
    },
    computed: {
      ...mapGetters('preloader', {
        isVisible: PRELOADER.PRELOADER_IS_VISIBLE,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .preloader {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: $color-overlay;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 12;
    transition: opacity 0.3s ease;
  }
  .preloader svg {
    display: block;
    width: 120px;
    margin: 0 auto;
    color: $white;
    will-change: transform;
    animation: rotate 1.7s linear infinite;
  }
</style>
