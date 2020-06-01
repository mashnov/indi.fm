<template>
  <div class="upload-form">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <div class="row">
          <div class="col-12 col-lg-8">
            <UploadFormBlock>
              <template slot="title">
                {{ i18n.uploadFormBlock1Title }}
              </template>
              <template slot="description">
                {{ i18n.uploadFormBlock1Description }}
              </template>
              <template slot="content">
                <div class="upload-form__item">
                  <Input
                    :value="formValue.name"
                    :placeholder="i18n.uploadFormName"
                    :disabled="formIsDisabled"
                    @input="setFormValue({ field: 'name', value: $event })"
                  />
                </div>
                <div class="upload-form__item">
                  <Select
                    :value="formValue.year"
                    :placeholder="i18n.uploadFormYear"
                    :filter-placeholder="i18n.selectSearch"
                    :empty-value-text="i18n.uploadFormUnknown"
                    :disabled="formIsDisabled"
                    :options="formOptions.year"
                    @input="setFormValue({ field: 'year', value: $event })"
                  />
                </div>
                <div class="upload-form__item">
                  <Select
                    :value="formValue.styleId"
                    :placeholder="i18n.uploadFormStyle"
                    :filter-placeholder="i18n.selectSearch"
                    :empty-value-text="i18n.selectEmptyValue"
                    :disabled="formIsDisabled"
                    :options="formOptions.styleId"
                    @input="setFormValue({ field: 'styleId', value: $event })"
                  />
                </div>
              </template>
            </UploadFormBlock>
            <UploadFormBlock>
              <template slot="title">
                {{ i18n.uploadFormBlock2Title }}
              </template>
              <template slot="description">
                {{ i18n.uploadFormBlock2Description }}
              </template>
              <template slot="content">
                <div class="upload-form__item">
                  <Input
                    :value="formValue.author"
                    :placeholder="i18n.uploadFormAuthor"
                    :disabled="formIsDisabled"
                    @input="setFormValue({ field: 'author', value: $event })"
                  />
                </div>
                <div class="upload-form__item">
                  <Select
                    :value="formValue.cityId"
                    :placeholder="i18n.uploadFormCity"
                    :filter-placeholder="i18n.selectSearch"
                    :empty-value-text="i18n.selectEmptyValue"
                    :disabled="formIsDisabled"
                    :options="formOptions.cityId"
                    @input="setFormValue({ field: 'cityId', value: $event })"
                  />
                </div>
                <div class="upload-form__item">
                  <Textarea
                    :value="formValue.description"
                    :placeholder="i18n.uploadFormDescription"
                    :disabled="formIsDisabled"
                    @input="setFormValue({ field: 'description', value: $event })"
                  />
                </div>
              </template>
            </UploadFormBlock>
            <UploadFormBlock>
              <template slot="title">
                {{ i18n.uploadFormBlock3Title }}
              </template>
              <template slot="description">
                {{ i18n.uploadFormBlock3Description }}
              </template>
              <template slot="content">
                <div class="upload-form__item">
                  <Input
                    :value="formValue.contact"
                    :placeholder="i18n.uploadFormContact"
                    :disabled="formIsDisabled"
                    @input="setFormValue({ field: 'contact', value: $event })"
                  />
                </div>
                <div class="upload-form__item">
                  <Input
                    :value="formValue.phone"
                    :placeholder="i18n.uploadFormPhone"
                    :disabled="formIsDisabled"
                    @input="setFormValue({ field: 'phone', value: $event })"
                  />
                </div>
                <div class="upload-form__item">
                  <Input
                    :value="formValue.email"
                    :placeholder="i18n.uploadFormEmail"
                    :disabled="formIsDisabled"
                    @input="setFormValue({ field: 'email', value: $event })"
                  />
                </div>
                <div class="upload-form__item">
                  <Textarea
                    :value="formValue.contactExtra"
                    :placeholder="i18n.uploadFormContactExtra"
                    :disabled="formIsDisabled"
                    @input="setFormValue({ field: 'contactExtra', value: $event })"
                  />
                </div>
              </template>
            </UploadFormBlock>
          </div>
          <div class="col-12 col-lg-4">
            <div class="upload-form__item">
              <FileLoader
                accept="audio/mpeg"
                :value="audioFile"
                :placeholder="i18n.uploadFormAudio"
                :error-size-text="i18n.uploadFormErrorSizeText"
                :error-type-text="i18n.uploadFormErrorTypeText"
                @input="uploadAudioHandler"
              />
            </div>
            <div class="upload-form__item">
              <FileLoader
                accept="image/jpeg, image/jpg, image/png"
                :value="posterFile"
                :placeholder="i18n.uploadFormPoster"
                :error-size-text="i18n.uploadFormErrorSizeText"
                :error-type-text="i18n.uploadFormErrorTypeText"
                @input="uploadPosterHandler"
              />
            </div>
            <div class="upload-form__group">
              <div class="upload-form__item">
                <Checkbox
                  :value="copyrightAgree"
                  @input="setCopyrightValue"
                >
                  {{ i18n.uploadFormCopyrightAgree }}
                </Checkbox>
              </div>
              <div class="upload-form__item">
                <Checkbox
                  :value="rotationAgree"
                  @input="setRotationValue"
                >
                  <span
                    ref="agreement"
                    class="upload-form__item_with-action"
                    v-html="i18n.uploadFormRotationAgree"
                  />
                </Checkbox>
              </div>
              <div class="upload-form__item upload-form__item_button">
                <Button
                  :disabled="submitIsDisabled"
                  @click="submitForm"
                >
                  {{ i18n.uploadFormSubmit }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pick from 'lodash/pick';
  import difference from 'lodash/difference';
  import { mapGetters, mapActions } from 'vuex';
  import { REFERENCES, UPLOAD } from '~/src/store/types';

  import UploadFormBlock from './UploadFormBlock';
  import Input from '~/src/components/form-items/input/Input';
  import Select from '~/src/components/form-items/select/Select';
  import Textarea from '~/src/components/form-items/textarea/Textarea';
  import FileLoader from '~/src/components/form-items/file-loader/FileLoader';
  import Checkbox from '~/src/components/form-items/checkbox/Checkbox';
  import Button from '~/src/components/form-items/button/Button';

  const FORM_REQUIRED = ['name', 'styleId', 'author', 'cityId', 'contact', 'email', 'file'];

  export default {
    name: 'UploadForm',
    components: {
      UploadFormBlock,
      Input,
      Select,
      Textarea,
      FileLoader,
      Checkbox,
      Button,
    },
    data() {
      return {
        audioFile: [],
        posterFile: [],
        copyrightAgree: false,
        rotationAgree: false,
      };
    },
    computed: {
      ...mapGetters('references', {
        i18n: REFERENCES.GET_I18N,
      }),
      ...mapGetters('upload', {
        formValue: UPLOAD.GET_FORM_VALUE,
        formOptions: UPLOAD.GET_FORM_OPTIONS,
        formIsDisabled: UPLOAD.GET_FORM_IS_DISABLED,
      }),
      submitIsDisabled() {
        const { copyrightAgree, rotationAgree, formValue } = this;
        const formValues = pick(formValue, FORM_REQUIRED);
        const notEmptyValues = Object.keys(formValues).filter((key) => (formValues[key].trim() !== ''));
        const isChecked = copyrightAgree && rotationAgree;
        const isFormValue = !difference(FORM_REQUIRED, notEmptyValues).length;
        return (!isChecked || !isFormValue);
      },
    },
    beforeDestroy() {
      this.setCopyrightValue(false);
      this.setRotationValue(false);
      this.uploadAudioHandler([]);
      this.uploadPosterHandler([]);
    },
    methods: {
      ...mapActions('upload', {
        setFormValue: UPLOAD.SET_FORM_VALUE,
        uploadAudio: UPLOAD.UPLOAD_AUDIO,
        uploadPoster: UPLOAD.UPLOAD_POSTER,
        submitForm: UPLOAD.SUBMIT_FORM,
      }),
      uploadAudioHandler(value) {
        this.audioFile = value;
        this.uploadAudio(value);
      },
      uploadPosterHandler(value) {
        this.posterFile = value;
        this.uploadPoster(value);
      },
      setCopyrightValue(value) {
        this.copyrightAgree = value;
      },
      setRotationValue(value) {
        this.rotationAgree = value;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .upload-form {
    padding-bottom: 40px;
  }
  .upload-form__item {
    margin-bottom: 16px;
  }
  .upload-form__item_button {
    margin-top: 40px;
  }
  .upload-form__group {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .upload-form__item_with-action ::v-deep a {
    cursor: pointer;
    color: $gray;
  }
</style>
