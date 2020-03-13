const getRoot = () => {
  fetch('https://swapi.co/api/')
    .then(res => res.json())
    .then(data => console.log(data));
};

export default {
  getRoot,
};
