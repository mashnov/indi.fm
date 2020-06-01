<template>
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 cities-modal">
    <div class="cities-modal__wrapper">
      <div
        v-if="citiesList.length > 5"
        class="cities-modal__filter"
      >
        <Input
          :value="filterString"
          :placeholder="i18n.selectSearch"
          @input="setFilterString"
        />
      </div>
      <div class="cities-modal__list">
        <div
          v-for="item in citiesFilteredList"
          :key="item.value"
          class="cities-modal__item"
          @click="selectCityItem(item.value)"
        >
          <span>
            {{ item.label }}
          </span>
          <span>
            {{ getFormattedCount(item.count) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { REFERENCES, PLAYER, MODAL } from '~/src/store/types';
  import { formatNumber } from '~/src/helpers/number';

  import Input from '~/src/components/form-items/input/Input';

  export default {
    name: 'CitiesModal',
    components: {
      Input,
    },
    data() {
      return {
        filterString: '',
      };
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
      ...mapGetters('player', {
        citiesList: PLAYER.GET_CITIES,
      }),
      citiesFilteredList() {
        const { filterString, citiesList } = this;
        return citiesList.filter((item) => {
          const string = filterString.toLowerCase();
          const label = item.label.toLowerCase();
          return label.includes(string);
        });
      },
    },
    methods: {
      ...mapActions('player', {
        setCurrentCity: PLAYER.SET_CURRENT_CITY,
      }),
      ...mapActions('modal', {
        hideModal: MODAL.HIDE_MODAL,
      }),
      selectCityItem(id) {
        this.setCurrentCity(id);
        this.hideModal();
      },
      setFilterString(value) {
        this.filterString = value;
      },
      getFormattedCount(value) {
        return formatNumber(value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .cities-modal {
    display: block;
    padding: 10px;
    margin-top: 80px;
    min-height: calc(100vh - 80px);
  }
  .cities-modal__wrapper {
    display: block;
    width: 100%;
  }
  .cities-modal__filter {
    padding: 10px 0 25px 0;
  }
  .cities-modal__item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 12px 15px;
    border-bottom: 1px solid $gray;
    cursor: pointer;
  }
  .cities-modal__item:last-child {
    border-bottom: none;
  }
  .cities-modal__item span {
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
  }
  .cities-modal__item span:first-child {
    display: block;
    width: calc(100% - 80px);
    color: $white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: font-size 0.15s $animationEasing;
  }
  .cities-modal__item:hover span:first-child {
    font-size: 20px;
  }
  .cities-modal__item span:last-child {
    display: block;
    width: 80px;
    text-align: right;
    color: $gray;;
  }
  @media (min-width: $screen-sm) {
    .cities-modal {
      margin-top: 100px;
    }
  }
  @media (min-width: $screen-md) {
    .cities-modal {
      margin-top: 0;
      padding-top: 30px;
      min-height: 100vh;
    }
  }
</style>
