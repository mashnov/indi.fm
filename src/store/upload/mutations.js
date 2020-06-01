import MODULE from './types';

export default {
  [MODULE.MUTATE_FORM_OPTIONS]: (state, formOptions) => {
    state.formOptions = formOptions;
  },
  [MODULE.MUTATE_FORM_VALUE]: (state, formValue) => {
    state.formValue = formValue;
  },
  [MODULE.MUTATE_POSTER_IS_LOADED]: (state, posterIsLoaded) => {
    state.posterIsLoaded = posterIsLoaded;
  },
  [MODULE.MUTATE_AUDIO_IS_LOADED]: (state, audioIsLoaded) => {
    state.audioIsLoaded = audioIsLoaded;
  },
};
