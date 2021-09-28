const weatherChart = [
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
const cardContainer = document.getElementsByClassName('card');
function buildCard() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  weatherChart.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const preferchoice = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      preferchoice.push(
        `///add code`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="slide">
          
        </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  /// join --> combines elements of an array into a string
  cardContainer.innerHTML = output.join("");
} //End of buildQuiz

buildCard();