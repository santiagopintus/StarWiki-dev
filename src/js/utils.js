const customFetch = async (url) => {
  return fetch(url).then((data) => data);
};

const manageStar = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      document.getElementById("deathStarTop").style.animation =
        "deathStarExplodeTop 3000ms cubic-bezier(0.02, 0.61, 0.75, 1) forwards";
      document.getElementById("deathStarBottom").style.animation =
        "deathStarExplodeBottom 3000ms cubic-bezier(0.02, 0.61, 0.75, 1) forwards";
    }
  });
};

export { customFetch, manageStar };
