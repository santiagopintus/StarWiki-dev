export default class StarView {
  constructor() {
    this.charContainer = document.getElementById("charactersContainer");
    this.charDetailsContainer = document.getElementById(
      "characterDetailsContainer"
    );
    this.mainHero = document.getElementById("mainHero");
    this.characters = [];
  }

  /* Renders all characters on view */
  showCharacters(characters) {
    characters.forEach((char) => {
      let $char = document.createElement("DIV");
      $char.innerHTML = `
    <a href="?character=${char.id}" class="character">
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      ${this.getAffiliation(char)}
    </a>`;
      this.charContainer.appendChild($char);
    });
  }

  getAffiliation(char) {
    try {
      if (char.affiliations.length > 0) {
        return `<p>${char.affiliations[0]}</p>`;
      } else {return ""}
    } catch {
      return "";
    }
  }
  /* Render the specified character */
  showCharacterDetails(char) {
    this.switchView(false);
    console.log("VIEW", char);

    this.charDetailsContainer.innerHTML = `
      <a class="button secondary" href="https://santiagopintus.github.io/StarWiki"><i class="back-chevron"></i>Back to all characters</a>
      <h1 class="char-name">${char.name}</h1>
      <div class="details-content">
        <img src=${char.image}></img>

        <ul class="details-list">
          ${this.getDetailItem("Height", char.height)}
          ${this.getDetailItem("Mass", char.mass)}
          ${this.getDetailItem("Gender", char.gender)}
          ${this.getDetailItem("Homeworld", char.homeworld)}
          ${this.getDetailItem("Creator", char.creator)}
          ${this.getDetailItem("Manufacturer", char.manufacturer)}
          ${this.getDetailItem("Model", char.model)}
          ${this.getDetailItem("Class", char.class)}
          ${this.getDetailItem("Born Location", char.bornLocation)}
          ${this.getDetailItem("Died Location", char.diedLocation)}
          ${this.getDetailItem("Destroyed Location", char.destroyedLocation)}
          ${this.getDetailItem("Species", char.species)}
          ${this.getDetailItem("Hair Color", char.hairColor)}
          ${this.getDetailItem("Eye Color", char.eyeColor)}
          ${this.getDetailItem("Skin Color", char.skinColor)}
          ${this.getDetailItem("Sensor Color", char.sensorColor)}
          ${this.getDetailItem("Plating Color", char.platingColor)}
          ${this.getDetailItem("Cybernetics", char.cybernetics)}
          ${this.getDetailItem("Equipment", char.equipment)}
          ${this.getDetailList("Affiliations", char.affiliations)}
          ${this.getDetailList("Masters", char.masters)}
          ${this.getDetailList("Apprentices", char.apprentices)}
          ${this.getDetailList("Former Affiliations", char.formerAffiliations)}
        </ul>
      </div>
      ${
        char.wiki
          ? `
          <a target="_blank" class="button secondary centered" href="${char.wiki}">More about ${char.name}</a>
        `
          : ""
      }
      `;
  }

  getDetailItem(label, value) {
    if (label && value) {
      return `
        <li><span class="detail-label">${label}</span>: ${value}</li>
      `;
    } else {
      return "";
    }
  }

  getDetailList(label, values) {
    try {
      if (label && values.length) {
        return `
          <li>
          <span class="detail-label">${label}</span>
            <ul>
              ${values.map((val) => `<li>${val}</li>`).join("")}
            </ul>
          </li>
        `;
      } else {
        return "";
      }
    } catch {
      return "";
    }
  }

  switchView(isGeneralView) {
    if (isGeneralView) {
      /* Hide Detailed view */
      this.charContainer.classList.remove("hidden");
      this.mainHero.classList.remove("compact");
      this.charDetailsContainer.classList.add("hidden");
    } else {
      /* Hide General view */
      this.charContainer.classList.add("hidden");
      this.mainHero.classList.add("compact");
      this.charDetailsContainer.classList.remove("hidden");
    }
  }

  /* Blows the death star up */
  manageStar() {
    let animationTiming = "10000ms linear forwards";
    document.getElementById(
      "deathStarTop"
    ).style.animation = `deathStarExplodeTop ${animationTiming}`;
    document.getElementById(
      "deathStarBottom"
    ).style.animation = `deathStarExplodeBottom ${animationTiming}`;
    document.getElementById("explosion").style.animation =
      "explosion 500ms cubic-bezier(0.02, 0.61, 0.75, 1) forwards";
  }
}
