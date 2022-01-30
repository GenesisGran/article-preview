const containerShare = document.getElementById("container__share");
const containerShareActive = document.getElementById("container__share-active");

function toogleShare() {
  if (
    containerShare.style.backgroundColor === "rgb(72, 85, 106)" ||
    containerShare.style.backgroundColor === "rgb(108, 122, 137)"
  ) {
    containerShare.style.backgroundColor = "rgb(236, 242, 248)";
    document.documentElement.style.setProperty(
      "--share-color-on-click",
      "none"
    );
  } else {
    if (window.matchMedia("(max-width: 800px)").matches) {
      containerShare.style.backgroundColor = "rgb(108, 122, 137)";
    } else {
      containerShare.style.backgroundColor = "rgb(72, 85, 106)";
    }
    document.documentElement.style.setProperty(
      "--share-color-on-click",
      "invert(0%) sepia(0%) saturate(7000%) hue-rotate(0deg) brightness(100%) contrast(100%)"
    );
  }
}
function toogleShareActive() {
  if (containerShareActive.style.display === "flex") {
    containerShareActive.style.display = "none";
  } else {
    containerShareActive.style.display = "flex";
  }
}
