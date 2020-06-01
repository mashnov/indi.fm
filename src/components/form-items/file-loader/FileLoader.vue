<template>
  <div
    class="file-loader"
    :class="[
      disabled && 'file-loader_disabled',
    ]"
  >
    <div
      v-if="value.length"
      class="file-loader__clear"
      @click.prevent="setFile([])"
    >
      <ClearIcon />
    </div>
    <VueFileAgent
      class="file-loader__loader"
      :value="value"
      :max-size="maxSize"
      :accept="accept"
      :max-files="maxFiles"
      :meta="true"
      :deletable="false"
      :disabled="disabled"
      :multiple="multiple"
      :help-text="placeholder"
      :error-text="{
        type: errorTypeText,
        size: errorSizeText,
      }"
      @input="setFile"
    />
  </div>
</template>

<script>
  import ClearIcon from '~/src/assets/svg/clear-icon.svg';

  export default {
    name: 'FileLoader',
    components: {
      ClearIcon,
    },
    props: {
      value: {
        type: Array,
        default: () => ([]),
      },
      maxSize: {
        type: String,
        default: '100MB',
      },
      accept: {
        type: String,
        default: '',
      },
      maxFiles: {
        type: Number,
        default: 1,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: '',
      },
      errorTypeText: {
        type: String,
        default: '',
      },
      errorSizeText: {
        type: String,
        default: '',
      },
    },
    methods: {
      setFile(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .file-loader {
    position: relative;
  }
  .file-loader__clear {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;
    right: 10px;
    color: $gray;
    cursor: pointer;
    z-index: 10;
  }
  .file-loader__loader {
    position: relative;
    z-index: 9;
  }
  .file-loader ::v-deep .vue-file-agent.file-input-wrapper {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background: $formOptionsBackground;
  }
  .file-loader_disabled ::v-deep .vue-file-agent.file-input-wrapper {
    opacity: $formItemDisabledOpacity;
    cursor: not-allowed;
  }
  .file-loader ::v-deep .vue-file-agent .file-preview-wrapper:before {
    background: transparent;
  }
  .file-loader ::v-deep .vue-file-agent .file-preview-new .help-text {
    font-size: 18px;
    line-height: 20px;
    height: auto;
    color: $gray;
  }
  .file-loader ::v-deep .vue-file-agent .file-preview-new svg {
    display: none;
  }
  .file-loader ::v-deep .vue-file-agent .file-preview-new .file-preview > span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
