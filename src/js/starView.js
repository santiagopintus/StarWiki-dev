export default class StarView {
  constructor() {
    
  }
  /* Renders all characters on view */
  showCharacters(characters) {
    const $charContainer = document.getElementById("charactersContainer");

    characters.forEach((char) => {
      let $char = document.createElement("DIV");
      $char.innerHTML = `
    <a href="?character=${char.id}" class="character">
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.affiliations[0]}</p>
    </a>`;
      $charContainer.appendChild($char);
    });
  }

  /* Blows the death star up */
  manageStar() {
    document.getElementById("deathStarTop").style.animation =
      "deathStarExplodeTop 3000ms cubic-bezier(0.02, 0.61, 0.75, 1) forwards";
    document.getElementById("deathStarBottom").style.animation =
      "deathStarExplodeBottom 3000ms cubic-bezier(0.02, 0.61, 0.75, 1) forwards";
  }
}
