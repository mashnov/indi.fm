import isArray from 'lodash/isArray';
import pkg from '~/package.json';
import { getDeviceId } from '~/src/helpers/logger';

const API_KEYS = {
  service: '15056d32-6da4-471f-b36a-6a0ed9b69b08',
  api: 'YBDbLJPi4k0gSBWWxNjf4GYuQugdPInwWkFumyE8',
};

export const getHeaders = (type) => ({
  'x-app': '1',
  'x-app-version': pkg.version,
  'x-api-key': API_KEYS[type],
  'x-device-id': getDeviceId(),
});

export const getFormData = (params = {}) => {
  const formData = new FormData();
  const paramKeys = Object.keys(params);

  paramKeys.forEach((field) => {
    const value = params[field];
    const key = isArray(value) ? `${field}[]` : field;

    formData.append(key, value);
  });
  return formData;
};

export const replaceCurly = (string = '', from = [], to = []) => {
  let resultString = string;
  from.forEach((fromItem, index) => {
    resultString = resultString.replace(new RegExp(`{${fromItem}}`, 'gi'), to[index]);
  });
  return resultString;
};

export const validateEmail = (string = '') => {
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  return regex.test(string);
};
