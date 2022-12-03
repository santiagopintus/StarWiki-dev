const showCharacters = (characters) => {
  const $charContainer = document.getElementById("charactersContainer");

  characters.forEach((char) => {
    let $char = document.createElement("DIV");
    $char.innerHTML = `
    <a href="src/details.html?id=${char.id}" class="character">
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.affiliations[0]}</p>
    </a>`;
    $charContainer.appendChild($char);
  });
};

export { showCharacters };