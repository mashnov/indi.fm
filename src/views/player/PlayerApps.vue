<template>
  <div class="player-apps">
    <div class="player-apps__wrap">
      <img
        src="@/assets/images/player/phones.png"
        :alt="i18n.appsDescription"
      />
      <div class="player-apps__links">
        <a
          :href="i18n.appStoreLink"
          target="_blank"
        >
          <AppStoreLogo />
        </a>
        <a
          :href="i18n.googlePlayLink"
          target="_blank"
        >
          <GooglePlayLogo />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/src/store/types';

  import AppStoreLogo from '~/src/assets/svg/app-store-logo.svg';
  import GooglePlayLogo from '~/src/assets/svg/google-play-logo.svg';

  export default {
    name: 'PlayerApps',
    components: {
      AppStoreLogo,
      GooglePlayLogo,
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .player-apps {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding: 40px;
  }
  .player-apps__wrap {
    position: relative;
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .player-apps__wrap img {
    display: block;
    width: 100%;
  }
  .player-apps__links {
    position: absolute;
    width: 100%;
    bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .player-apps__links a {
    display: block;
    width: calc(100% / 2 - 25px);
    text-decoration: none;
    color: $dark;
  }
  .player-apps__links a:first-child {
    margin-right: 50px;
  }
  .player-apps__links a svg {
    width: 100%;
    display: block;
    transition: transform 0.15s $animationEasing;
  }
  .player-apps__links a:hover svg {
    transform: scale(1.1);
  }
</style>
