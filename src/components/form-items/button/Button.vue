<template>
  <div
    class="button"
    :class="[
      disabled && 'button_disabled',
    ]"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      clickHandler() {
        const { disabled } = this;
        if (!disabled) {
          this.$emit('click');
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .button {
    display: block;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: $backgroundStop;
    background-color: $white;
    text-align: center;
    cursor: pointer;
  }
  .button_disabled {
    opacity: $formItemDisabledOpacity;
    cursor: not-allowed;
  }
</style>
