<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          class="agreement-view"
          v-html="i18n.rotationAgreement"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/src/store/types';

  export default {
    name: 'AgreementView',
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .agreement-view {
    display: block;
    width: 100%;
    color: $gray;
    padding: 25px 10px;
    text-align: justify;
  }
  .agreement-view ::v-deep h1 {
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 15px;
    color: $white;
  }
  .agreement-view ::v-deep p,
  .agreement-view ::v-deep ul,
  .agreement-view ::v-deep ol {
    display: block;
    font-size: 13px;
    line-height: 15px;
  }
  .agreement-view ::v-deep p {
    margin: 10px 0;
  }
  .agreement-view ::v-deep ul,
  .agreement-view ::v-deep ol {
    margin-left: 25px;
  }
  @media (min-width: $screen-sm) {
    .agreement-view ::v-deep h1 {
      font-size: 36px;
      line-height: 45px;
      margin-bottom: 19px;
    }
    .agreement-view ::v-deep p,
    .agreement-view ::v-deep ul,
    .agreement-view ::v-deep ol {
      font-size: 16px;
      line-height: 20px;
    }
    .agreement-view ::v-deep ul,
    .agreement-view ::v-deep ol {
      margin-left: 40px;
    }
  }
  @media (min-width: $screen-md) {
    .agreement-view {
      padding: 25px 50px;
    }
  }
</style>
