<template>
  <div class="container finish-view">
    <div class="finish-view__wrapper">
      <h1>
        {{ i18n.finishPageHeader }}
      </h1>
      <h2>
        {{ i18n.finishPageSubHeader }}
      </h2>
      <div class="finish-view__button">
        <router-link
          :to="{ name: 'UploadView' }"
        >
          <Button>
            {{ i18n.finishPageBackButton }}
          </Button>
        </router-link>
      </div>
      <h2>
        {{ i18n.finishPageDescription }}
      </h2>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { REFERENCES } from '~/src/store/types';

  import Button from '~/src/components/form-items/button/Button';

  export default {
    name: 'FinishView',
    components: {
      Button,
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .finish-view {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
  }
  .finish-view__wrapper {
    display: block;
    margin: 50px auto;
    text-align: center;
  }
  .finish-view__wrapper h1 {
    font-weight: normal;
    font-size: 40px;
    line-height: 50px;
    color: $white;
    margin-bottom: 30px;
  }
  .finish-view__wrapper h2 {
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: $gray;
    margin-bottom: 50px;
  }
  .finish-view__button {
    width: 90%;
    max-width: 400px;
    margin: 0 auto 40px auto;
  }
  .finish-view__button ::v-deep .button {
    font-size: 25px;
    line-height: 30px;
  }
  .finish-view__wrapper a {
    text-decoration: none;
  }
  .finish-view__wrapper p {
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: $gray;
  }
  @media (min-width: $screen-md) {
    .finish-view__wrapper h1 {
      font-size: 64px;
      line-height: 80px;
      margin-bottom: 70px;
    }
    .finish-view__wrapper h2 {
      font-size: 36px;
      line-height: 45px;
      margin-bottom: 100px;
    }
    .finish-view__wrapper p {
      font-size: 24px;
      line-height: 30px;
    }
  }
</style>
