export const routes = [
  {
    path: '/',
    name: 'PlayerView',
    component: () => import(/* webpackChunkName: "player" */ '~/src/views/player/PlayerView.vue'),
  },
  {
    path: '/upload',
    name: 'UploadView',
    component: () => import(/* webpackChunkName: "upload" */ '~/src/views/upload/UploadView.vue'),
  },
  {
    path: '/finish',
    name: 'FinishView',
    component: () => import(/* webpackChunkName: "finish" */ '~/src/views/finish/FinishView.vue'),
  },
  {
    path: '/useragreement',
    name: 'AgreementsView',
    component: () => import(/* webpackChunkName: "agreement" */ '~/src/views/agreement/AgreementsView.vue'),
  },
  {
    path: '*',
    redirect: {
      name: 'PlayerView',
    },
  },
];
