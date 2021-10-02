const cardArray = [
  {
    main: "sunny",
    sub: "A bright lightbulb.",
    choice: {
      a: "Stare At It",
      b: "Look Away",
    },
    preferchoice: "b",
  },
  {
    main: "partial-cloudy",
    sub: "Guess the screen has cracked.",
    choice: {
      a: "Follow the Clouds",
      b: "Track the light",
    },
    preferchoice: "a",
  },
  {
    main: "cloudy",
    sub: "A blinding sight. Guess someone put a blindfold over the sky.",
    choice: {
      a: "Cover Your Eyes",
      b: "Run With the Wind",
    },
    preferchoice: "b",
  },
  {
    main: "fog",
    sub: "Something smoking? Is it lethal?",
    choice: {
      a: "Inhale deeply",
      b: "Find an exit",
    },
    preferchoice: "a",
  },
  {
    main: "drizzle",
    sub: "A dew drop from the sky? Is this a liquid?",
    choice: {
      a: "Reach out your palm",
      b: "Retreat for shelter and watch.",
    },
    preferchoice: "a",
  },
  {
    main: "rain",
    sub: "Guess someone's crying. It's surprisingly quiet.",
    choice: {
      a: "Watch the puddles form.",
      b: "Question why it's a different color.",
    },
    preferchoice: "a",
  },
  {
    main: "storm",
    sub: "They got the drums playing in the clouds.",
    choice: {
      a: "Cover your ears.",
      b: "Cover your mouth.",
    },
    preferchoice: "a",
  },
  {
    main: "hurricane",
    sub: "Lovely scenery. We still at the movies?",
    choice: {
      a: "Hide behind closed doors.",
      b: "Run out the door.",
    },
    preferchoice: "a",
  },
];


function grabArray() {
  //grab a random element from the array
  const random = cardArray[Math.floor(Math.random() * cardArray.length)];
  console.log(random);
  console.log("Grabbing random array complete");
}

  //have the element appear on screen with the proper class and tags
function cardHTML() {
  const card = document.createElement("li");
  card.innerHTML = `
    <div class="text-container">
        <h1 class="main-text">Sunny</h1>
        <h2 class="sub-text">A bright lightbulb.</h2>
    </div>
    <div class="btn-container">
        <button class="btn">Stare at it</button>
        <button class="btn">Look Away</button>
    </div>  

  `;
}

  //grab the button tags and stuff

  //check if the selected btn is the preferchoice of option

  //if it is the preferchoice then add to the answers correct, else don't add

<<<<<<< HEAD
choicebutton.onclick = function () {};
buildCard();
=======


>>>>>>> 6a2fa1427a91fdbdc574018f40b8aec16cdf2ed3
