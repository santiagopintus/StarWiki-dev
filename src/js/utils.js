const customFetch = async (url) => {
  return fetch(url).then((data) => data.json());
};

export { customFetch };
