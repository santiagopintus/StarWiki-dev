const customFetch = async (url) => {
  return fetch(url).then((data) => data.json());
};

const endpoints = {
  getAll: "https://akabab.github.io/starwars-api/api/all.json",
  getOne: "https://akabab.github.io/starwars-api/api/id/",
};

const getParamValue = (paramName) => {
  const param = new URLSearchParams(window.location.search);
  return param.get(paramName);
};

export { customFetch, getParamValue, endpoints };
