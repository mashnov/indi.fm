<template>
  <div class="upload-form-block">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="upload-form-block__title">
          <slot name="title" />
        </div>
        <div class="upload-form-block__description">
          <slot name="description" />
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UploadFormBlock',
  };
</script>

<style lang="scss" scoped>
  .upload-form-block {
    padding: 0 0 37px 0;
  }
  .upload-form-block__title {
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: $white;
    margin-bottom: 24px;
  }
  .upload-form-block__description {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: $gray;
    margin-bottom: 24px;
  }
  @media (min-width: $screen-lg) {
    .upload-form-block {
      padding: 24px 0;
      border-bottom: 1px solid $gray;
    }
    .upload-form-block:first-child {
      padding-top: 0;
    }
    .upload-form-block:last-child {
      border-bottom: none;
    }
    .upload-form-block__description {
      margin-bottom: 0;
    }
  }
</style>
