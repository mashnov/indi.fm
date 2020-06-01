import cloneDeep from 'lodash/cloneDeep';
import MODULE from './types';
import { VIEWPORT } from '~/src/store/types';

const lockerId = 'modal';
const lockPageActionName = `viewport/${VIEWPORT.LOCK}`;
const unLockPageActionName = `viewport/${VIEWPORT.UNLOCK}`;

export default {
  [MODULE.SHOW_MODAL]({ commit, dispatch }, { component, position }) {
    commit(MODULE.MUTATE_POSITION, position || null);
    commit(MODULE.MUTATE_COMPONENT, cloneDeep(component));
    dispatch(lockPageActionName, lockerId, { root: true });
  },
  [MODULE.HIDE_MODAL]({ commit, dispatch }) {
    commit(MODULE.MUTATE_COMPONENT, null);
    commit(MODULE.MUTATE_POSITION, null);
    dispatch(unLockPageActionName, lockerId, { root: true });
  },
};
