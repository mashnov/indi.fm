import range from 'lodash/range';

export const sleep = (time = 500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const getRange = (from, till, step = 1) => {
  return range(from, till + 1, step);
};
