<template>
  <div class="container-fluid player-view">
    <PlayerHeader :modal-position="modalPosition" />
    <PlayerBody />
    <PlayerFooter />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { VIEWPORT, PLAYER, MODAL } from '~/src/store/types';

  import PlayerHeader from '~/src/views/player/PlayerHeader';
  import PlayerBody from '~/src/views/player/PlayerBody';
  import PlayerFooter from '~/src/views/player/PlayerFooter';

  import CitiesModal from '~/src/modals/CitiesModal';

  const MOBILE_MODAL_BREAKPOINTS = [null, 'xs', 'sm'];
  const MODAL_POSITION_MAPPER = {
    mobile: 'bottom',
    desktop: 'right',
  };

  export default {
    name: 'PlayerView',
    components: {
      PlayerHeader,
      PlayerBody,
      PlayerFooter,
    },
    computed: {
      ...mapGetters('viewport', {
        currentBreakpoint: VIEWPORT.GET_CURRENT_BREAKPOINT,
      }),
      modalPosition() {
        const { currentBreakpoint } = this;
        const isMobileHeader = MOBILE_MODAL_BREAKPOINTS.includes(currentBreakpoint);
        const modalType = isMobileHeader ? 'mobile' : 'desktop';
        return MODAL_POSITION_MAPPER[modalType];
      },
    },
    created() {
      this.initHome();
    },
    mounted() {
      this.showCityModal();
    },
    methods: {
      ...mapActions('player', {
        initHome: PLAYER.INIT,
      }),
      ...mapActions('modal', {
        showModal: MODAL.SHOW_MODAL,
      }),
      showCityModal() {
        const { modalPosition } = this;
        this.showModal({
          component: CitiesModal,
          position: modalPosition,
        });
      },
    },
  };
</script>

<style lang="scss" scoped></style>
