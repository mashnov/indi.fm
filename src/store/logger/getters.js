import MODULE from './types';

export default {
  [MODULE.GET_DEVICE_ID]: ({ deviceId }) => deviceId,
  [MODULE.GET_BROWSER]: ({ browser }) => browser,
  [MODULE.GET_SYSTEM]: ({ system }) => system,
  [MODULE.GET_USER_AGENT]: ({ userAgent }) => userAgent,
  [MODULE.GET_IS_AD_BLOCK]: ({ isAdBlock }) => isAdBlock,
  [MODULE.GET_IS_MOBILE]: ({ isMobile }) => isMobile,
};
