import get from 'lodash/get';

export const citiesTransformer = ({ data }) => {
  const list = get(data, 'body', []);
  return list.map((item) => ({
    label: item.name,
    value: item.id.toString(),
  }));
};

export const stylesTransformer = ({ data }) => {
  const list = get(data, 'body', []);
  return list.map((item) => ({
    label: item.name,
    value: item.id.toString(),
  }));
};

export const yearsTransformer = (list) => {
  return list.map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));
};

export const audioTransformer = ({ data }) => {
  return {
    file: get(data, 'body.key', null),
    duration: get(data, 'body.meta.duration', 0),
  };
};

export const posterTransformer = ({ data }) => {
  return {
    cover: get(data, 'body.key', null),
    width: get(data, 'body.meta.width', 0),
    height: get(data, 'body.meta.height', 0),
  };
};

export const citiesListTransformer = ({ data }) => {
  const list = get(data, 'body', []);
  return list.map((item, index) => ({
    label: get(item, 'city.name', ''),
    count: get(item, 'countTracks', 0),
    value: get(item, 'city.id', index).toString(),
  }));
};

export const formValueTransformer = (value) => {
  return {
    ...value,
    year: parseInt(value.year),
    styleId: parseInt(value.styleId),
    cityId: parseInt(value.cityId),
    duration: parseInt(value.duration),
    width: parseInt(value.width),
    height: parseInt(value.height),
  };
};

const trackTransformer = (data) => {
  return {
    id: get(data, 'id', null),
    name: get(data, 'name', ''),
    artist: get(data, 'artist', ''),
    poster: get(data, 'cover', null),
    source: get(data, 'file', null),
    meta: {
      city: get(data, 'city', ''),
      year: get(data, 'year', ''),
      style: get(data, 'style', ''),
      description: get(data, 'description', ''),
    },
  };
};

export const radioTransformer = ({ data }) => {
  const music = get(data, 'body', {});
  return trackTransformer(music);
};
