<template>
  <div
    class="input"
    :class="[
      disabled && 'input_disabled',
      isFocused && 'input_focused',
    ]"
  >
    <label>
      <input
        ref="input"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @blur="blurHandler"
        @focus="focusHandler"
        @input="inputHandler"
      />
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isFocused: false,
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
        this.$emit('input', value);
      },
      setFocus() {
        this.$refs.input.focus();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .input {
    border-radius: 10px;
    padding: 0 10px;
    background: $formOptionsBackground;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s $animationEasing, opacity 0.3s $animationEasing;
  }
  .input_disabled {
    opacity: $formItemDisabledOpacity;
    cursor: not-allowed;
  }
  .input_focused {
    border-bottom-color: $gray;
  }
  .input input {
    display: block;
    width: 100%;
    background: transparent;
    border: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 45px;
    height: 45px;
    color: $white;
    user-select: text;
  }
  .input input::-webkit-input-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input::-moz-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:-moz-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:-ms-input-placeholder {opacity: 1; text-indent: 0; color: $gray; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus::-webkit-input-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus::-moz-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus:-moz-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
  .input input:focus:-ms-input-placeholder {opacity: 0; text-indent: -500px; transition: text-indent 0.2s $animationEasing, opacity 0.1s $animationEasing;}
</style>
