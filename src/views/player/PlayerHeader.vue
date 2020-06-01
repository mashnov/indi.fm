<template>
  <div class="row">
    <div class="col-12">
      <div class="player-desktop-header">
        <div class="player-desktop-header__wrapper">
          <div
            class="player-desktop-header__item"
            @click="showCitiesModal"
          >
            <PlayerCityControl />
          </div>
          <div
            class="player-desktop-header__item"
            @click="showInfoModal"
          >
            <InfoIcon />
          </div>
          <div
            v-if="!isMobile"
            class="player-desktop-header__item player-desktop-header__item_sound"
          >
            <PlayerSoundControl />
          </div>
          <div class="player-desktop-header__item">
            <MobileShare
              :url="i18n.shareBaseURL"
              :text="i18n.shareText"
              :title="i18n.shareName"
              @error="showShareModal"
            >
              <ShareIcon />
            </MobileShare>
          </div>
          <div class="player-desktop-header__item">
            <router-link
              :to="{ name: 'UploadView' }"
              target="_blank"
            >
              <UploadIcon />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { MODAL, REFERENCES, LOGGER } from '~/src/store/types';

  import MobileShare from '~/src/components/form-items/mobile-share/MobileShare';
  import PlayerCityControl from './PlayerCityControl';
  import PlayerSoundControl from './PlayerSoundControl';
  import InfoIcon from '~/src/assets/svg/info-icon.svg';
  import ShareIcon from '~/src/assets/svg/share-icon.svg';
  import UploadIcon from '~/src/assets/svg/upload-icon.svg';

  import CitiesModal from '~/src/modals/CitiesModal';
  import ShareModal from '~/src/modals/ShareModal';
  import InfoModal from '~/src/modals/InfoModal';

  export default {
    name: 'PlayerDesktopHeader',
    components: {
      MobileShare,
      PlayerCityControl,
      PlayerSoundControl,
      InfoIcon,
      ShareIcon,
      UploadIcon,
    },
    props: {
      modalPosition: {
        type: String,
        default: 'bottom',
      },
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
      ...mapGetters('logger', {
        isMobile: LOGGER.GET_IS_MOBILE,
      }),
    },
    methods: {
      ...mapActions('modal', {
        showModal: MODAL.SHOW_MODAL,
      }),
      showCitiesModal() {
        const { modalPosition } = this;
        this.showModal({
          component: CitiesModal,
          position: modalPosition,
        });
      },
      showInfoModal() {
        const { modalPosition } = this;
        this.showModal({
          component: InfoModal,
          position: modalPosition,
        });
      },
      showShareModal() {
        const { modalPosition } = this;
        this.showModal({
          component: ShareModal,
          position: modalPosition,
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .player-desktop-header {
    position: relative;
    margin-top: 20px;
    z-index: 3;
  }
  .player-desktop-header__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .player-desktop-header__item {
    display: block;
    padding: 0 10px;
    cursor: pointer;
  }
  .player-desktop-header__item_sound {
    display: none;
  }
  .player-desktop-header__item:nth-child(1) {
    margin-right: auto;
    padding: 0;
    max-width: calc(100% - (40px * 3));
  }
  .player-desktop-header__item:last-child {
    margin-right: 0;
  }
  .player-desktop-header__item svg {
    display: block;
    width: 20px;
    height: 20px;
    color: $gray;
    transition: color 0.15s $animationEasing;
  }
  .player-desktop-header__item:hover svg {
    color: $white;
  }
  @media (min-width: $screen-sm) {
    .player-desktop-header {
      margin-top: 30px;
    }
    .player-desktop-header__item:nth-child(1) {
      max-width: calc(100% - (50px * 3));
    }
    .player-desktop-header__item svg {
      width: 25px;
      height: 25px;
    }
  }
  @media (min-width: $screen-md) {
    .player-desktop-header__item:nth-child(1) {
      max-width: calc(100% - (60px * 3));
    }
    .player-desktop-header__item svg {
      width: 30px;
      height: 30px;
    }
  }
  @media (min-width: $screen-lg) {
    .player-desktop-header__item_sound {
      display: block;
    }
  }
</style>
