const getRoot = () => {
  return fetch('https://swapi.co/api/')
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

export default {
  getRoot,
};
