import MODULE from './types';

export default {
  [MODULE.GET_FORM_VALUE]: ({ formValue }) => formValue,
  [MODULE.GET_FORM_OPTIONS]: ({ formOptions }) => formOptions,
  [MODULE.GET_FORM_IS_DISABLED]: ({ posterIsLoaded, audioIsLoaded }) => posterIsLoaded || audioIsLoaded,
};
