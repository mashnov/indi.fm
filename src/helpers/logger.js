import $cookies from 'vue-cookies';
import isMobile from 'ismobilejs';
import { detect } from 'detect-browser';

const deviceIdCookiesKey = 'deviceId';

const createDeviceId = () => {
  let deviceId = '';
  for (let a = 1; a <= 36; a += 1) {
    // eslint-disable-next-line no-bitwise
    deviceId += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-';
  }
  return deviceId;
};

export const getDeviceId = () => {
  let deviceId = $cookies.get(deviceIdCookiesKey);
  if (!deviceId) {
    deviceId = createDeviceId();
    $cookies.set(deviceIdCookiesKey, deviceId);
  }
  return deviceId;
};
export const getBrowserName = () => {
  const { name, os } = detect();
  return { name, os };
};
export const getUserAgent = () => {
  return navigator.userAgent;
};
export const getAdBlockDetectedValue = () => {
  const blockedItem = document.getElementById('adBanner');
  return window.getComputedStyle(blockedItem).display === 'none';
};
export const getIsMobile = () => {
  const { phone, tablet } = isMobile();
  return phone || tablet;
};
