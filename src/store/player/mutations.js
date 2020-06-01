import MODULE from './types';

export default {
  [MODULE.MUTATE_CITIES]: (state, citiesList) => {
    state.citiesList = citiesList;
  },
  [MODULE.MUTATE_CURRENT_CITY]: (state, cityId) => {
    state.cityId = cityId;
  },
  [MODULE.MUTATE_SOUND_VALUE]: (state, soundValue) => {
    state.soundValue = soundValue;
  },
  [MODULE.MUTATE_CITY_TRACKS]: (state, tracks) => {
    state.tracks = tracks;
  },
  [MODULE.MUTATE_TRACK_STATUS]: (state, trackStatus) => {
    state.trackStatus = trackStatus;
  },
};
