import MODULE from './types';

export default {
  [MODULE.GET_SOUND_VALUE]: ({ soundValue }) => soundValue,
  [MODULE.GET_CITIES]: ({ citiesList }) => citiesList,
  [MODULE.GET_CURRENT_CITY]: ({ cityId }) => cityId,
  [MODULE.GET_CITY_TRACKS]: ({ tracks }) => tracks,
  [MODULE.GET_TRACK_STATUS]: ({ trackStatus }) => trackStatus,
};
