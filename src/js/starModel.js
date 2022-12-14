import { customFetch } from "./utils.js";

export default class StarModel {
  constructor(url) {
    this.apiUrl = url;
  }
  getCharacters() {
    return customFetch(this.apiUrl);
  }
}
