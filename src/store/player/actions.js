import MODULE from './types';
import Api from './api';

export default {
  async [MODULE.INIT]({ commit }) {
    const cities = await Api[MODULE.FETCH_CITIES]();
    commit(MODULE.MUTATE_CITIES, cities);
  },
  async [MODULE.FETCH_CITY_TRACKS]({ commit }, cityId) {
    const current = await Api[MODULE.FETCH_CURRENT_TRACK](cityId);
    const next = await Api[MODULE.FETCH_NEXT_TRACK](cityId, current.id);
    const last = await Api[MODULE.FETCH_NEXT_TRACK](cityId, next.id);
    commit(MODULE.MUTATE_CITY_TRACKS, { current, next, last });
  },
  [MODULE.SET_SOUND_VALUE]({ commit }, soundValue) {
    commit(MODULE.MUTATE_SOUND_VALUE, soundValue);
  },
  [MODULE.SET_CURRENT_CITY]({ commit, dispatch }, cityId) {
    commit(MODULE.MUTATE_CURRENT_CITY, cityId);
    dispatch(MODULE.FETCH_CITY_TRACKS, cityId);
  },
  async [MODULE.NEXT_TRACK]({ commit, state: { tracks, cityId } }) {
    const current = tracks.next;
    const next = tracks.last;
    const last = await Api[MODULE.FETCH_NEXT_TRACK](cityId, next.id);
    commit(MODULE.MUTATE_CITY_TRACKS, { current, next, last });
  },
  [MODULE.SET_TRACK_STATUS]({ commit }, trackStatus) {
    commit(MODULE.MUTATE_TRACK_STATUS, trackStatus);
  },
};
