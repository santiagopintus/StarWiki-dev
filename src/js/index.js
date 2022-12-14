import StarView from "./StarView";
import StarController from "./starController";
import StarModel from "./starModel";

const starWikiApp = () => {
  const apiUrl = "https://akabab.github.io/starwars-api/api/all.json";
  const starModel = new StarModel(apiUrl);
  const starView = new StarView();
  const starController = new StarController(starModel, starView);
  starController.startController();
};

window.onload = starWikiApp;
