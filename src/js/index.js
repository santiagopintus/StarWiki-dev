import { customFetch } from "./utils";
import { manageStar } from "./utils";

const starWikiApp = () => {
  manageStar();
  const apiUrl = "https://akabab.github.io/starwars-api/api/all.json";
  getCharacters(apiUrl);
};

const getCharacters = (url) => {
  customFetch(url).then((data) => showCharacters(data));
};


window.onload = starWikiApp;
