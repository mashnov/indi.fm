<template>
  <div
    class="textarea"
    :class="[
      disabled && 'textarea_disabled',
      isFocused && 'textarea_focused',
    ]"
  >
    <label>
      <textarea
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :rows="rowsCount"
        @blur="blurHandler"
        @focus="focusHandler"
        @input="inputHandler"
      />
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Textarea',
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: 'input',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isFocused: false,
        rowsCount: 3,
      };
    },
    methods: {
      blurHandler() {
        this.isFocused = false;
        this.$emit('blur');
      },
      focusHandler() {
        this.isFocused = true;
        this.$emit('focus');
      },
      inputHandler({ target: { value } }) {
        this.updateTextareaHeight();
        this.$emit('input', value);
      },
      updateTextareaHeight() {
        const textarea = this.$el.querySelector('textarea');
        const height = textarea.scrollHeight;
        textarea.style.cssText = 'height: auto';
        textarea.style.cssText = `height: ${height}px`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .textarea {
    border-radius: 10px;
    padding: 10px;
    background: $formOptionsBackground;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s $animationEasing, opacity 0.3s $animationEasing;
  }
  .textarea_disabled {
    opacity: $formItemDisabledOpacity;
    cursor: not-allowed;
  }
  .textarea_focused {
    border-bottom-color: $gray;
  }
  .textarea textarea {
    display: block;
    width: 100%;
    background: transparent;
    border: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: $white;
    overflow: hidden;
    resize: none;
    white-space: pre-line;
    user-select: text;
  }
  .textarea textarea::-webkit-input-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .textarea textarea::-moz-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .textarea textarea:-moz-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .textarea textarea:-ms-input-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .textarea textarea:focus::-webkit-input-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .textarea textarea:focus::-moz-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .textarea textarea:focus:-moz-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .textarea textarea:focus:-ms-input-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
</style>
