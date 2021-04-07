////// https://api.rawg.io/docs  /////

///////////////////   GLOBAL   ///////////////////////////
let url = new URL("https://api.rawg.io/api/games");
const root = document.getElementById("root");
const filters = document.getElementById("filters");

//// init ////
addElements(url);

///////////////////   FUNCTIONS   ///////////////////////////

function addElement(element, content, arrayClass, destination) {
  let newElement = document.createElement(element);
  newElement.innerHTML = content;
  if (arrayClass) {
    for (let word of arrayClass) {
      newElement.classList.add(word);
    }
  }
  destination.appendChild(newElement);
  return newElement;
}

function addElements(url) {
  fetch(new Request(url))
    .then((response) => response.json())
    .then((response) => {
      //Hide buttons
      if (!response.previous) {
        previousButton.hidden = true;
      } else {
        previousButton.hidden = false;
      }

      if (!response.next) {
        nextButton.hidden = true;
      } else {
        nextButton.hidden = false;
      }
      // clear div
      clearDiv(root);

      // create elements
      for (let i = 0; i < 20; i++) {
        if (response.results[i].name) {
          let card = addElement("div", "", ["card"], root);
          addElement("p", response.results[i].name, "", card);
          if (response.results[i].background_image) {
            card.style.backgroundImage = `url(${response.results[i].background_image})`;
          }
        }
      }

      addFilter();
    })
    .catch(() => {
      addElement("div", "No results", ["error"], root);
    });
}

function clearDiv(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function addFilter() {
  clearDiv(filters);
  url.searchParams.forEach(function (value, key) {
    if (key != "page") {
      addElement("p", `${key}: ${value}`, [`${key}`, "filter"], filters);
    }
  });
}

///////////////////   BUTTONS   ///////////////////////////
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

previousButton.addEventListener("click", function () {
  fetch(new Request(url))
    .then((response) => response.json())
    .then((response) => {
      if (response.previous) {
        clearDiv(root);
        url = new URL(response.previous);
        addElements(url);
      }
    });
});

nextButton.addEventListener("click", function () {
  fetch(new Request(url))
    .then((response) => response.json())
    .then((response) => {
      if (response.next) {
        clearDiv(root);
        url = new URL(response.next);
        addElements(url);
      }
    });
});

///////////////////   EXPORTS   ///////////////////////////
export { url, addElements, clearDiv };
