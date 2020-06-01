<template>
  <div class="col-12 col-md-8 upload-agreement">
    <div class="upload-agreement__link">
      <router-link
        :to="agreementLink"
        target="_blank"
      >
        <LinkIcon />
      </router-link>
    </div>
    <div
      class="upload-agreement__text"
      v-html="i18n.rotationAgreement"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/src/store/types';

  import LinkIcon from '~/src/assets/svg/link-icon.svg';

  export default {
    name: 'UploadAgreement',
    components: {
      LinkIcon,
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
      agreementLink() {
        return {
          name: 'AgreementsView',
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
  .upload-agreement {
    margin-top: 100px;
  }
  .upload-agreement:before {
    content: '';
    position: absolute;
    top: 30px;
    left: 50%;
    width: 35%;
    height: 3px;
    transform: translateX(-50%);
    border-radius: 10px;
    background: $gray;
  }
  .upload-agreement__link {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    padding: 10px;
  }
  .upload-agreement__link a {
    color: $white;
  }
  .upload-agreement__link svg {
    display: block;
    width: 100%;
  }
  .upload-agreement__text {
    color: $gray;
    padding: 0 20px;
    text-align: justify;
  }
  .upload-agreement ::v-deep h1 {
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 19px;
    color: $white;
  }
  .upload-agreement ::v-deep p,
  .upload-agreement ::v-deep ul,
  .upload-agreement ::v-deep ol {
    display: block;
    font-size: 16px;
    line-height: 20px;
    margin: 10px 0;
  }
  .upload-agreement ::v-deep ul,
  .upload-agreement ::v-deep ol {
    margin-left: 40px;
  }
  @media (min-width: $screen-sm) {
    .upload-agreement:before {
      width: 25%;
    }
    .upload-agreement__link {
      top: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
    }
    .upload-agreement__text {
      padding: 0 40px;
    }
    .upload-agreement ::v-deep h1 {
      font-size: 36px;
      line-height: 45px;
    }
  }
  @media (min-width: $screen-md) {
    .upload-agreement:before {
      display: none;
    }
    .upload-agreement__text {
      padding: 0 50px;
    }
  }
  @media (min-width: $screen-lg) {
    .upload-agreement__text {
      padding: 0 100px;
    }
  }
</style>
