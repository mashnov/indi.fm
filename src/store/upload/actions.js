import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import router from '~/src/router/index';
import { PRELOADER } from '~/src/store/types';
import { getRange } from '~/src/helpers/system';
import { yearsTransformer } from '~/src/helpers/transformers';
import MODULE from './types';
import Api from './api';

const showPreloaderActionName = `preloader/${PRELOADER.SHOW_PRELOADER}`;
const hidePreloaderActionName = `preloader/${PRELOADER.HIDE_PRELOADER}`;
const preloaderId = 'topic';

const CURRENT_YEAR = new Date().getFullYear();
const START_YEAR = 1960;

export default {
  async [MODULE.INIT]({ commit }) {
    const cityId = await Api[MODULE.FETCH_CITIES]();
    const styleId = await Api[MODULE.FETCH_STYLES]();
    const year = yearsTransformer(getRange(START_YEAR, CURRENT_YEAR)).reverse();
    commit(MODULE.MUTATE_FORM_OPTIONS, { cityId, styleId, year });
  },
  [MODULE.SET_FORM_VALUE]({ commit, state }, { field, value }) {
    const formValue = cloneDeep(state.formValue);
    formValue[field] = value;
    commit(MODULE.MUTATE_FORM_VALUE, formValue);
  },
  async [MODULE.UPLOAD_AUDIO]({ commit, dispatch }, value) {
    commit(MODULE.MUTATE_AUDIO_IS_LOADED, true);
    const media = get(value, '0.file', null);
    dispatch(showPreloaderActionName, preloaderId, { root: true });
    const result = media ? await Api[MODULE.UPLOAD_AUDIO](media) : {};
    dispatch(hidePreloaderActionName, preloaderId, { root: true });
    dispatch(MODULE.SET_FORM_VALUE, { field: 'file', value: result.file || '' });
    dispatch(MODULE.SET_FORM_VALUE, { field: 'duration', value: result.duration || 0 });
    commit(MODULE.MUTATE_AUDIO_IS_LOADED, false);
  },
  async [MODULE.UPLOAD_POSTER]({ commit, dispatch }, value) {
    commit(MODULE.MUTATE_POSTER_IS_LOADED, true);
    const media = get(value, '0.file', null);
    dispatch(showPreloaderActionName, preloaderId, { root: true });
    const result = media ? await Api[MODULE.UPLOAD_POSTER](media) : {};
    dispatch(hidePreloaderActionName, preloaderId, { root: true });
    dispatch(MODULE.SET_FORM_VALUE, { field: 'cover', value: result.cover || '' });
    dispatch(MODULE.SET_FORM_VALUE, { field: 'width', value: result.width || 0 });
    dispatch(MODULE.SET_FORM_VALUE, { field: 'height', value: result.height || 0 });
    commit(MODULE.MUTATE_POSTER_IS_LOADED, false);
  },
  async [MODULE.SUBMIT_FORM]({ dispatch, state: { formValue } }) {
    dispatch(showPreloaderActionName, preloaderId, { root: true });
    await Api[MODULE.SUBMIT_FORM](formValue);
    dispatch(hidePreloaderActionName, preloaderId, { root: true });
    await dispatch(MODULE.SET_FORM_VALUE, { field: 'name', value: '' });
    await dispatch(MODULE.SET_FORM_VALUE, { field: 'styleId', value: '' });
    await dispatch(MODULE.SET_FORM_VALUE, { field: 'year', value: '' });
    await router.push({ name: 'FinishView' });
  },
};
