import MODULE from './types';
import {
  getDeviceId,
  getIsMobile,
  getUserAgent,
  getBrowserName,
  getAdBlockDetectedValue,
} from '~/src/helpers/logger';

export default {
  [MODULE.INIT]({ dispatch }) {
    dispatch(MODULE.SET_DEVICE_ID);
    dispatch(MODULE.SET_BROWSER);
    dispatch(MODULE.SET_USER_AGENT);
    dispatch(MODULE.SET_IS_AD_BLOCK);
    dispatch(MODULE.SET_IS_MOBILE);
  },
  [MODULE.SET_DEVICE_ID]({ commit }) {
    const deviceId = getDeviceId();
    commit(MODULE.MUTATE_DEVICE_ID, deviceId);
  },
  [MODULE.SET_BROWSER]({ commit }) {
    const { name, os } = getBrowserName();
    commit(MODULE.MUTATE_BROWSER, name);
    commit(MODULE.MUTATE_SYSTEM, os);
  },
  [MODULE.SET_USER_AGENT]({ commit }) {
    const userAgent = getUserAgent();
    commit(MODULE.MUTATE_USER_AGENT, userAgent);
  },
  [MODULE.SET_IS_AD_BLOCK]({ commit }) {
    const isBlocked = getAdBlockDetectedValue();
    commit(MODULE.MUTATE_IS_AD_BLOCK, isBlocked);
  },
  [MODULE.SET_IS_MOBILE]({ commit }) {
    const isMobile = getIsMobile();
    commit(MODULE.MUTATE_IS_MOBILE, isMobile);
  },
};
