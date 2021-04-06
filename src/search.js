import { url, addElements, clearDiv } from "./index.js";

const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  launchNewSearch("search", searchBar.value, url);
});

function launchNewSearch(param, value, url) {
  url.searchParams.set(param, value);
  url.searchParams.set("page", 1);
  clearDiv(root);
  addElements(url);

  console.log(url.searchParams.getAll("search"));
}
