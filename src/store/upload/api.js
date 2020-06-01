import axios from 'axios';
import MODULE from './types';
import { getFormData, getHeaders } from '~/src/helpers/requests';
import { audioTransformer, posterTransformer, formValueTransformer, citiesTransformer, stylesTransformer } from '~/src/helpers/transformers';
import { upload } from '../request-url';

export default {
  [MODULE.FETCH_CITIES]() {
    return axios({
      method: 'GET',
      url: upload.cities,
      headers: getHeaders('api'),
    })
      .then((response) => (citiesTransformer(response)))
      .catch(() => ({}));
  },
  [MODULE.FETCH_STYLES]() {
    return axios({
      method: 'GET',
      url: upload.styles,
      headers: getHeaders('api'),
    })
      .then((response) => (stylesTransformer(response)))
      .catch(() => ({}));
  },
  [MODULE.UPLOAD_AUDIO](file) {
    const data = getFormData({ file });
    return axios({
      method: 'POST',
      url: upload.music,
      headers: getHeaders('service'),
      data,
    })
      .then((response) => (audioTransformer(response)))
      .catch(() => ({}));
  },
  [MODULE.UPLOAD_POSTER](file) {
    const data = getFormData({ file });
    return axios({
      method: 'POST',
      url: upload.poster,
      headers: getHeaders('service'),
      data,
    })
      .then((response) => (posterTransformer(response)))
      .catch(() => ({}));
  },
  [MODULE.SUBMIT_FORM](value) {
    const formValue = formValueTransformer(value);
    const data = getFormData(formValue);
    return axios({
      method: 'POST',
      url: upload.submit,
      headers: getHeaders('api'),
      data,
    });
  },
};
