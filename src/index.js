////// https://api.rawg.io/docs  /////

///////////////////   GLOBAL   ///////////////////////////
let url = new URL("https://api.rawg.io/api/games");
const root = document.getElementById("root");
const filters = document.getElementById("filters");

//// init ////
addElements(url);

///////////////////   FUNCTIONS   ///////////////////////////

function createElement(element, content, addclass, destination) {
  let newElement = document.createElement(element);
  newElement.innerHTML = content;
  if (addclass) {
    newElement.classList.add(addclass);
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

      for (let i = 0; i < 20; i++) {
        if (response.results[i].name) {
          let card = createElement("div", "", "card", root);
          createElement("p", response.results[i].name, "", card);
          if (response.results[i].background_image) {
            card.style.backgroundImage = `url(${response.results[i].background_image})`;
          }
        }
      }
      //// prova
      addFilter();

      /// fine prova
    })
    .catch(() => {
      createElement("div", "No results", "error", root);
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
    createElement("p", `${key}: ${value}`, "filter", filters);
    console.log(value, key);
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
