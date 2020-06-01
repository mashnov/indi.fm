const serviceUrl = 'https://service.indi.fm/';
const apiUrl = 'https://api.indi.fm/v1/';

export const upload = {
  cities: `${apiUrl}reference/cities`,
  styles: `${apiUrl}reference/styles`,
  music: `${serviceUrl}upload/sound`,
  poster: `${serviceUrl}upload/image`,
  submit: `${apiUrl}upload/track`,
};
export const home = {
  cities: `${apiUrl}radio/cities`,
  current: `${apiUrl}radio/{cityId}/current`,
  next: `${apiUrl}radio/{cityId}/{trackId}/next`,
};
