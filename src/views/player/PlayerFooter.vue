<template>
  <div class="row">
    <div class="col-12">
      <div class="player-footer">
        <div
          class="player-footer__item"
          @click="showAgreementModal"
        >
          {{ i18n.userAgreement }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { MODAL, REFERENCES } from '~/src/store/types';

  import AgreementModal from '~/src/modals/AgreementModal';

  export default {
    name: 'PlayerFooter',
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
    },
    methods: {
      ...mapActions('modal', {
        showModal: MODAL.SHOW_MODAL,
        showAgreementModal() {
          this.showModal({
            component: AgreementModal,
            position: 'bottom',
          });
        },
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .player-footer {
    display: none;
  }
  @media (min-width: $screen-md) {
    .player-footer {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      margin-bottom: 30px;
      z-index: 2;
    }
    .player-footer__item {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-decoration: underline;
      cursor: pointer;
      color: $gray;
    }
    .player-footer__item:first-child {
      margin-left: auto;
    }
  }
</style>
