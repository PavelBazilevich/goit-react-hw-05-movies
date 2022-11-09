export const createUrl = path => {
  const url = 'https://image.tmdb.org/t/p/w500/';
  return path ? url + path : 'https://i.postimg.cc/yxhh8Dtk/download.png';
};
