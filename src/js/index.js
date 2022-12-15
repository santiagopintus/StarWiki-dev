import StarView from "./StarView";
import StarController from "./starController";
import StarModel from "./starModel";

const starWikiApp = () => {
  const starModel = new StarModel();
  const starView = new StarView();
  const starController = new StarController(starModel, starView);
  starController.startController();
};

window.onload = starWikiApp;
