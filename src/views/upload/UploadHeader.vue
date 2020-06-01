<template>
  <div class="upload-header">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <h1>{{ headerTitle }}</h1>
        <p>{{ i18n.uploadHeaderDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES, VIEWPORT } from '~/src/store/types';

  const MOBILE_TITLE_BREAKPOINTS = [null, 'xs', 'sm'];

  export default {
    name: 'UploadHeader',
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
      ...mapGetters('viewport', {
        breakpoint: VIEWPORT.GET_CURRENT_BREAKPOINT,
      }),
      headerTitle() {
        const { i18n, breakpoint } = this;
        const isMobileTitle = MOBILE_TITLE_BREAKPOINTS.includes(breakpoint);
        return isMobileTitle ? i18n.uploadHeaderTitleMobile : i18n.uploadHeaderTitle;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .upload-header {
    padding: 24px 0;
  }
  .upload-header h1 {
    display: block;
    text-align: center;
    margin-bottom: 29px;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: $gray;
  }
  .upload-header p {
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: $gray;
  }
  @media (min-width: $screen-md) {
    .upload-header {
      padding: 30px 0 42px 0;
    }
    .upload-header h1 {
      text-align: left;
      font-weight: normal;
      font-size: 36px;
      line-height: 45px;
      margin-bottom: 19px;
      color: $white
    }
    .upload-header p {
      font-size: 18px;
      line-height: 23px;
    }
  }
</style>
