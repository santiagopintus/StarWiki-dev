import { getParamValue } from "./utils.js";

export default class StarController {
  constructor(model, view) {
    this.characters;
    this.starModel = model;
    this.starView = view;
  }

  startController() {
    this.displayCharacters();
    this.listenStarExplosion();
    this.listenViewNavigation();
  }

  displayCharacters() {
    this.starModel.getCharacters().then((data) => {
      this.characters = data;
      this.starView.showCharacters(data);
    });
  }

  listenViewNavigation() {
    let charId = getParamValue("character");
    if (charId) {
      this.starModel.getOneCharacter(charId).then(char => {
        this.starView.showCharacterDetails(char);
      });
    }
  }

  listenStarExplosion() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        this.starView.manageStar();
      }
    });
  }
}
