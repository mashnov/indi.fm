<template>
  <div id="app">
    <Modal />
    <Preloader />
    <GlobalPlayer />
    <Layout />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { LOGGER, VIEWPORT } from '~/src/store/types';

  import Layout from '~/src/layout/Layout';
  import Modal from '~/src/components/modal/Modal';
  import GlobalPlayer from '~/src/components/global-player/GlobalPlayer';
  import Preloader from '~/src/components/preloader/Preloader';

  export default {
    name: 'App',
    components: {
      Modal,
      Preloader,
      GlobalPlayer,
      Layout,
    },
    created() {
      this.initLogger();
      this.initViewport();
    },
    methods: {
      ...mapActions('logger', {
        initLogger: LOGGER.INIT,
      }),
      ...mapActions('viewport', {
        initViewport: VIEWPORT.INIT,
      }),
    },
  };
</script>

<style lang="scss" src="~/src/assets/styles/base-style.scss"/>
