<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 info-modal">
    <div class="info-modal__wrapper">
      <div class="info-modal__logo">
        <img
          src="@/assets/images/player/logo.png"
          :alt="i18n.shareName"
        />
      </div>
      <div class="info-modal__about">
        <span>
          {{ i18n.shareAbout }}
        </span>
      </div>
      <div class="info-modal__upload">
        <router-link
          :to="{ name: 'UploadView' }"
          target="_blank"
        >
          <Button
            @click="hideModal"
          >
            {{ i18n.uploadHeaderTitle }}
          </Button>
        </router-link>
      </div>
      <div class="info-modal__cooperation">
        <span>
          {{ i18n.shareCooperation }}
        </span>
      </div>
      <div class="info-modal__cooperation-email">
        <a :href="'mailto:' + i18n.shareCooperationEmail">
          {{ i18n.shareCooperationEmail }}
        </a>
      </div>
      <div class="info-modal__social">
        <a :href="'mailto:' + i18n.shareCooperationEmail">
          <MailIcon />
        </a>
        <a
          :href="i18n.shareCooperationVk"
          target="_blank"
        >
          <VkIcon />
        </a>
        <a
          :href="i18n.shareCooperationTg"
          target="_blank"
        >
          <TgIcon />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { REFERENCES, MODAL } from '~/src/store/types';
  import Button from '~/src/components/form-items/button/Button';
  import MailIcon from '~/src/assets/svg/mail-icon.svg';
  import VkIcon from '~/src/assets/svg/vk-icon.svg';
  import TgIcon from '~/src/assets/svg/telegram-icon.svg';

  export default {
    name: 'InfoModal',
    components: {
      Button,
      MailIcon,
      VkIcon,
      TgIcon,
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
    methods: {
      ...mapActions('modal', {
        hideModal: MODAL.HIDE_MODAL,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .info-modal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
    padding: 50px 20px 20px 20px;
    margin-top: 80px;
  }
  .info-modal__wrapper {
    display: block;
    width: 100%;
  }
  .info-modal__logo {
    display: block;
    width: 155px;
    margin: 0 auto;
  }
  .info-modal__logo img {
    display: block;
    width: 100%;
  }
  .info-modal__about {
    display: block;
    margin: 50px auto 0 auto;
  }
  .info-modal__about span {
    display: block;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: $gray;
  }
  .info-modal__upload {
    display: block;
    margin-top: 50px;
  }
  .info-modal__upload a {
    text-decoration: none;
  }
  .info-modal__cooperation {
    display: block;
    margin: 50px auto;
  }
  .info-modal__cooperation span {
    display: block;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: $gray;
  }
  .info-modal__cooperation-email {
    display: none;
  }
  .info-modal__social {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
  }
  .info-modal__social a {
    display: block;
    width: 48px;
    margin-right: 25px;
  }
  .info-modal__social a:first-child {
    margin-left: auto;
  }
  .info-modal__social a:last-child {
    margin-right: auto;
  }
  .info-modal__social a svg {
    display: block;
    width: 100%;
    color: $gray;
    transition: color 0.15s $animationEasing;
  }
  .info-modal__social a:hover svg {
    color: $white;
  }
  @media (min-width: $screen-sm) {
    .info-modal {
      margin-top: 100px;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  @media (min-width: $screen-md) {
    .info-modal {
      margin-top: 0;
      padding-top: 100px;
      padding-bottom: 50px;
    }
    .info-modal__about {
      display: block;
      margin-top: 50px;
    }
    .info-modal__cooperation-email {
      display: block;
      text-align: center;
      margin-top: 50px;
    }
    .info-modal__cooperation-email a {
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      text-decoration: none;
      color: $white;
    }
  }
</style>
