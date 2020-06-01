<template>
  <div
    v-click-outside="hideOptions"
    class="select"
    :class="[
      hasValue && 'select_has-value',
      optionsIsVisible && 'select_open',
      isFocused && 'select_focused',
      disabled && 'select_disabled',
    ]"
  >
    <div
      class="select__value"
      @click="optionClickHandler"
    >
      <span>
        <slot name="select-value">
          {{ selectValueText }}
        </slot>
      </span>
      <ChevronIcon />
    </div>
    <transition name="select">
      <div
        v-show="optionsIsVisible"
        class="select__options"
      >
        <div
          v-if="options.length > 5"
          class="select__options-filter"
        >
          <Input
            ref="filter"
            :placeholder="filterPlaceholder"
            :value="optionsFilterString"
            @input="setFilterString"
          />
        </div>
        <div class="select__options-wrapper">
          <div
            v-for="(option, index) in filteredOptions"
            :key="index"
            :ref="`option-${option.value}`"
            class="select__options-item"
            :class="optionIsSelected(option.value) && 'select__options-item_selected'"
            @click="changeHandler({target: {value: option.value}})"
          >
            <slot :name="`option-${option.value}`">
              {{ option.label }}
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside';
  import throttle from 'lodash/throttle';

  import find from 'lodash/find';
  import get from 'lodash/get';
  import isEqual from 'lodash/isEqual';

  import Input from '~/src/components/form-items/input/Input';
  import ChevronIcon from '~/src/assets/svg/chevron-icon.svg';

  const VALUE_PROP_TYPE = (prop) => typeof prop === 'object' || typeof prop === 'boolean' || typeof prop === 'number' || typeof prop === 'string' || prop === null;

  export default {
    name: 'Select',
    directives: {
      ClickOutside,
    },
    components: {
      ChevronIcon,
      Input,
    },
    props: {
      value: {
        default: null,
        validator: VALUE_PROP_TYPE,
        required: true,
      },
      options: {
        type: Array,
        default: () => ([]),
      },
      placeholder: {
        type: String,
        default: '',
      },
      filterPlaceholder: {
        type: String,
        default: '',
      },
      emptyValueText: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        optionsFilterString: '',
        optionsIsVisible: false,
        isFocused: false,
      };
    },
    computed: {
      selectValueText() {
        const { options, value, placeholder } = this;
        const option = find(options, { value });
        return get(option, 'label', placeholder);
      },
      hasValue() {
        const { options, value } = this;
        const option = find(options, { value });
        return !!option;
      },
      filteredOptions() {
        const { options, optionsFilterString, emptyValueText } = this;
        const filtered = options.filter((item) => (item.label.toLowerCase().includes(optionsFilterString.toLowerCase())));
        return [
          {
            label: emptyValueText,
            value: '',
          },
          ...filtered,
        ];
      },
    },
    watch: {
      disabled() {
        this.hideOptions();
      },
    },
    methods: {
      optionIsSelected(optionValue) {
        const { value } = this;
        return isEqual(value, optionValue);
      },
      changeHandler({ target: { value } }) {
        this.$emit('input', value);
        this.hideOptions();
      },
      setFilterString(value) {
        this.optionsFilterString = value;
      },
      optionClickHandler: throttle(function() {
        const { disabled, optionsIsVisible } = this;
        if (!disabled && !optionsIsVisible) {
          this.showOptions();
          this.setFilterFocus();
        }
        if (optionsIsVisible) {
          this.hideOptions();
        }
      }, 300),
      showOptions() {
        this.optionsIsVisible = true;
      },
      setFilterFocus() {
        const { options } = this;
        if (options.length > 5) {
          this.$nextTick(() => {
            this.$refs.filter.setFocus();
          });
        }
      },
      hideOptions() {
        this.optionsIsVisible = false;
        this.setFilterString('');
      },
      focusHandler() {
        this.isFocused = true;
        this.$emit('focus');
      },
      blurHandler() {
        this.isFocused = false;
        this.$emit('blur');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .select {
    position: relative;
    cursor: pointer;
  }
  .select_disabled {
    cursor: not-allowed;
    opacity: $formItemDisabledOpacity;
  }
  .select__value {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 10px;
    background-color: $formOptionsBackground;
    border-radius: 10px;
  }
  .select__value span {
    display: block;
    width: calc(100% - 25px);
    color: $gray;
    font-weight: normal;
    font-size: 18px;
    line-height: 45px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .select_has-value .select__value span {
    color: $white;
  }
  .select__value svg {
    display: block;
    margin: 0 auto;
    width: 20px;
    color: $gray;
    transition: transform 0.15s linear;
  }
  .select_open .select__value svg {
    transform: scaleY(-1);
  }
  .select__options {
    position: absolute;
    width: 100%;
    max-width: 320px;
    top: 50px;
    padding: 0 10px;
    background: $dark;
    box-shadow: $modalShadow;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
  }
  .select__options-filter {
    margin: 10px 0 0 0;
    padding: 10px 0;
  }
  .select__options-filter ::v-deep .input {
    background: transparent;
    border: 1px solid $gray;
  }
  .select__options-wrapper {
    width: calc(100% + 80px);
    padding-right: 85px;
    max-height: 250px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transform: translateZ(0);
  }
  .select__options-item {
    font-size: 14px;
    font-weight: normal;
    padding: 20px 10px;
    color: $gray;
    transition: transform 0.15s linear ;
    cursor: pointer;
  }
  .select__options-item:hover {
    transform: scale(1.02);
  }
  .select__options-item_selected {
    font-weight: bold;
  }
  .select__options-item:last-child {
    border-bottom: none;
  }
</style>
