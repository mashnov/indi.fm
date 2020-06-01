import Vue from 'vue';
import Vuex from 'vuex';

import logger from './logger/index';
import modal from './modal/index';
import preloader from './preloader/index';
import viewport from './viewport/index';
import references from './references/index';
import upload from './upload/index';
import player from './player/index';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    modal,
    preloader,
    logger,
    viewport,
    references,
    upload,
    player,
  },
});
