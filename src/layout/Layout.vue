<template>
  <div
    class="layout"
    :style="layoutStyle"
    :class="[
      layoutIsLocked && 'layout_locked'
    ]"
  >
    <div class="layout__content">
      <router-view>
        <slot />
      </router-view>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { VIEWPORT } from '~/src/store/types';
  import { setScrollTop } from '~/src/helpers/viewport';

  export default {
    name: 'Layout',
    data() {
      return {
        pageScrollPosition: 0,
      };
    },
    computed: {
      ...mapGetters('viewport', {
        scrollTop: VIEWPORT.GET_SCROLL_TOP,
        layoutIsLocked: VIEWPORT.GET_IS_LOCKED,
      }),
      layoutStyle() {
        const { layoutIsLocked, pageScrollPosition } = this;
        const top = `${pageScrollPosition / -1}px`;
        const minHeight = `calc(100vh + ${pageScrollPosition}px)`;
        return layoutIsLocked ? { top, minHeight } : {};
      },
    },
    watch: {
      layoutIsLocked() {
        this.setPageScroll();
      },
    },
    methods: {
      setPageScroll() {
        const { pageScrollPosition, layoutIsLocked, scrollTop } = this;
        const scrollPosition = layoutIsLocked ? 0 : pageScrollPosition;
        if (layoutIsLocked) {
          this.pageScrollPosition = scrollTop;
        }
        this.$nextTick(() => {
          setScrollTop(scrollPosition);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .layout {
    display: block;
    width: 100%;
    z-index: 0;
  }
  .layout_locked {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    min-height: 100vh;
    overflow: hidden;
    pointer-events: none;
  }
</style>
