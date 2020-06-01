<template>
  <div class="col-12 col-sm-10 col-xl-8 agreement-modal">
    <div
      class="agreement-modal__content"
      v-html="i18n.rotationAgreement"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/src/store/types';

  export default {
    name: 'AgreementText',
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .agreement-modal {
    display: block;
    padding: 10px;
    margin-top: 80px;
    min-height: calc(100vh - 80px);
  }
  .agreement-modal__content {
    display: block;
    width: 100%;
    color: $gray;
    padding: 15px 5px;
    text-align: justify;
  }
  .agreement-modal ::v-deep h1 {
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 15px;
    color: $white;
  }
  .agreement-modal ::v-deep p,
  .agreement-modal ::v-deep ul,
  .agreement-modal ::v-deep ol {
    display: block;
    font-size: 13px;
    line-height: 15px;
  }
  .agreement-modal ::v-deep p {
    margin: 10px 0;
  }
  .agreement-modal ::v-deep ul,
  .agreement-modal ::v-deep ol {
    margin-left: 25px;
  }
  @media (min-width: $screen-sm) {
    .agreement-modal ::v-deep h1 {
      font-size: 36px;
      line-height: 45px;
      margin-bottom: 19px;
    }
    .agreement-modal ::v-deep p,
    .agreement-modal ::v-deep ul,
    .agreement-modal ::v-deep ol {
      font-size: 16px;
      line-height: 20px;
    }
    .agreement-modal ::v-deep ul,
    .agreement-modal ::v-deep ol {
      margin-left: 40px;
    }
  }
  @media (min-width: $screen-md) {
    .agreement-modal {
      padding: 25px 50px;
    }
  }
</style>
