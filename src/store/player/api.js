import axios from 'axios';
import MODULE from './types';
import { getHeaders, replaceCurly } from '~/src/helpers/requests';
import { citiesListTransformer, radioTransformer } from '~/src/helpers/transformers';
import { home } from '../request-url';

export default {
  [MODULE.FETCH_CITIES]() {
    return axios({
      method: 'GET',
      url: home.cities,
      headers: getHeaders('api'),
    }).then((response) => (citiesListTransformer(response)));
  },
  [MODULE.FETCH_CURRENT_TRACK](cityId) {
    const fetchUrl = replaceCurly(home.current, ['cityId'], [cityId]);
    return axios({
      method: 'GET',
      url: fetchUrl,
      headers: getHeaders('api'),
    }).then((response) => (radioTransformer(response)));
  },
  [MODULE.FETCH_NEXT_TRACK](cityId, trackId) {
    const fetchUrl = replaceCurly(home.next, ['cityId', 'trackId'], [cityId, trackId]);
    return axios({
      method: 'GET',
      url: fetchUrl,
      headers: getHeaders('api'),
    }).then((response) => (radioTransformer(response)));
  },
};
