import { DOMSelectors } from "./array";
import { cardArray } from "./array";

function buildCard() {
  //grab a random element from the array
  const random = cardArray[Math.floor(Math.random() * cardArray.length)];
  console.log(random);
  console.log("Grabbing random array complete");

  //have the element appear on screen with the proper class and tags
  DOMSelectors.cardHTML.insertAdjecentHTML(
    "beforeend",
    `<div class="text-container">
        <h1 class="main-text">Sunny</h1>
        <h2 class="sub-text">A bright lightbulb.</h2>
    </div>
    <div class="btn-container">
        <button class="btn">Stare at it</button>
        <button class="btn">Look Away</button>
    </div> `
  );

  //grab the button tags and stuff

  //check if the selected btn is the preferchoice of option

  //if it is the preferchoice then add to the answers correct, else don't add
}

buildCard();
