<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 share-modal">
    <div class="share-modal__wrapper">
      <div class="share-modal__logo">
        <img
          src="@/assets/images/player/logo.png"
          :alt="i18n.shareName"
        />
      </div>
      <div class="share-modal__base-url">
        <CopyIcon />
        <span>
          {{ i18n.shareBaseURL }}
        </span>
      </div>
      <div class="share-modal__description">
        <span>
          {{ i18n.shareDescription }}
        </span>
      </div>
      <div class="share-modal__share">
        <VueYandexShare v-bind="shareOptions" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import VueYandexShare from '@alexlit/vue-yandex-share';
  import { REFERENCES } from '~/src/store/types';

  import CopyIcon from '~/src/assets/svg/copy-icon.svg';

  const SHARE_ITEMS = ['vkontakte', 'odnoklassniki', 'telegram', 'whatsapp', 'viber', 'facebook', 'skype', 'twitter', 'lj'];

  export default {
    name: 'ShareModal',
    components: {
      VueYandexShare,
      CopyIcon,
    },
    data() {
      return {
        shareOptions: {
          copy: 'hidden',
          popupDirection: 'top',
          size: 'm',
          services: SHARE_ITEMS,
        },
      };
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .share-modal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
    padding: 50px 20px 20px 20px;
    margin-top: 80px;
  }
  .share-modal__wrapper {
    display: block;
    width: 100%;
  }
  .share-modal__logo {
    display: block;
    width: 155px;
    margin: 0 auto;
  }
  .share-modal__logo img {
    display: block;
    width: 100%;
  }
  .share-modal__base-url {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin: 50px auto;
    text-align: center;
    border-bottom: 1px solid $gray;
  }
  .share-modal__base-url svg {
    width: 20px;
    color: $gray;
    margin-right: auto;
  }
  .share-modal__base-url span {
    display: block;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: $white;
    padding: 15px 0;
    user-select: text;
    margin-right: auto;
  }
  .share-modal__description {
    display: block;
    width: 100%;
    text-align: center;
    margin: 50px 0;
  }
  .share-modal__description span {
    display: block;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: $gray;
  }
  .share-modal__share {
    display: block;
    max-width: 260px;
    margin: 50px auto 0 auto;
  }
  .share-modal__share ::v-deep .ya-share2__container_size_m .ya-share2__list {
    text-align: center;
  }
  .share-modal__share ::v-deep .ya-share2__container_size_m .ya-share2__icon {
    height: 40px;
    width: 40px;
    background-size: 40px;
  }
  .share-modal__share ::v-deep .ya-share2__container_size_m .ya-share2__item,
  .share-modal__share ::v-deep .ya-share2__list_direction_horizontal > .ya-share2__item {
    margin: 3px;
  }
  @media (min-width: $screen-sm) {
    .share-modal {
      margin-top: 100px;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  @media (min-width: $screen-md) {
    .share-modal {
      margin-top: 0;
      padding-top: 100px;
      padding-bottom: 50px;
    }
    .share-modal__base-url {
      margin-top: 50px;
    }
    .share-modal__base-url span {
      font-size: 24px;
      line-height: 30px;
    }
  }
</style>
