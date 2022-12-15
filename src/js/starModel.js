import { customFetch, endpoints } from "./utils.js";

export default class StarModel {
  constructor() {
    this.getAllUrl = endpoints.getAll;
    this.getOneUrl = endpoints.getOne;
  }
  getCharacters() {
    return customFetch(this.getAllUrl);
  }
  getOneCharacter(id) {
    return customFetch(`${this.getOneUrl}${id}.json`);
  }
}
