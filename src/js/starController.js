export default class StarController {
  constructor(model, view) {
    this.characters;
    this.starModel = model;
    this.starView = view;
  }

  startController() {
    this.displayCharacters();
    this.listenStarExplosion();
    this.listenCharClick();
  }

  displayCharacters() {
    this.starModel.getCharacters().then((data) => {
      this.characters = data;
      this.starView.showCharacters(data);
    });
  }

  listenStarExplosion() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        this.starView.manageStar();
      }
    });
  }

  listenCharClick() {
    let paramName = "character";
    const param = new URLSearchParams(window.location.search);
    const charId = param.get(paramName);
    console.log(charId);
  }

  getOneCharacter(id) {
    return this.characters.find(char => char.id == id);
  }
}
