import MODULE from './types';

export default {
  [MODULE.MUTATE_DEVICE_ID]: (state, deviceId) => {
    state.deviceId = deviceId;
  },
  [MODULE.MUTATE_BROWSER]: (state, browser) => {
    state.browser = browser;
  },
  [MODULE.MUTATE_SYSTEM]: (state, system) => {
    state.system = system;
  },
  [MODULE.MUTATE_USER_AGENT]: (state, userAgent) => {
    state.userAgent = userAgent;
  },
  [MODULE.MUTATE_IS_AD_BLOCK]: (state, isAdBlock) => {
    state.isAdBlock = isAdBlock;
  },
  [MODULE.MUTATE_IS_MOBILE]: (state, isMobile) => {
    state.isMobile = isMobile;
  },
};
