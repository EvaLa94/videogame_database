////// https://api.rawg.io/docs  /////

let url = "https://api.rawg.io/api/games";
const root = document.getElementById("root");
let request = new Request(url);

fetch(new Request(url))
  .then((response) => response.json())
  .then((response) => console.log(response));

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
        let card = createElement("div", "", "card", root);
        createElement("p", response.results[i].name, "", card);
        card.style.backgroundImage = `url(${response.results[i].background_image})`;
      }
    });
}
addElements(url);

function clearDiv() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}

///////////////////   BUTTONS   ///////////////////////////
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

previousButton.addEventListener("click", function () {
  fetch(new Request(url))
    .then((response) => response.json())
    .then((response) => {
      if (response.previous) {
        clearDiv();
        url = response.previous;
        console.log(url);
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
        url = response.next;
        console.log(url);
        addElements(url);
      }
    });
});