<template>
  <div
    class="mobile-share"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MobileShare',
    props: {
      url: {
        type: String,
        default: '',
        required: true,
      },
      text: {
        type: String,
        default: '',
        required: true,
      },
      title: {
        type: String,
        default: '',
        required: true,
      },
    },
    methods: {
      clickHandler() {
        const { url, text, title } = this;

        /* istanbul ignore next */
        if (navigator.share) {
          navigator.share({ url, text, title })
            .then(() => {
              this.sendEvent('success');
            })
            .catch(() => {
              this.sendEvent('error');
            });
        }
        else {
          this.sendEvent('error');
        }
      },
      sendEvent(name) {
        this.$emit(name);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .mobile-share {
    cursor: pointer;
  }
  .mobile-share svg {
    height: 14px;
  }
</style>
