const weatherChart = [
    {
      main: "sunny",
      sub: "A bright lightbulb.",
      choice: {
        a: "Stare At It",
        b: "Look Away",
      },
      preferchoice: "a",
    },
    {
      main: "partial-cloudy",
      sub: "Guess the screen has cracked.",
      choice: {
        a: "Follow the Clouds",
        b: "Track the light",
      },
      preferchoice: "b",
    },
    {
      main: "cloudy",
      sub: "A blinding sight. Guess someone put a blindfold over the sky.",
      choice: {
        a: "Cover Your Eyes",
        b: "Run With the Wind",
      },
      preferchoice: "a",
    },
    {
      main: "fog",
      sub: "Something smoking? Is it lethal?",
      choice: {
        a: "Inhale deeply",
        b: "Find an exit",
      },
      preferchoice: "b",
    },
    {
      main: "drizzle",
      sub: "A dew drop from the sky? Is this a liquid?",
      choice: {
        a: "Reach out your palm",
        b: "Retreat for shelter and watch.",
      },
      preferchoice: "b",
    },
    {
      main: "rain",
      sub: "Guess someone's crying. It's surprisingly quiet.",
      choice: {
        a: "Watch the puddles form.",
        b: "Question why it's a different color.",
      },
      preferchoice: "b",
    },
    {
      main: "storm",
      sub: "They got the drums playing in the clouds.",
      choice: {
        a: "Cover your ears.",
        b: "Cover your mouth.",
      },
      preferchoice: "b",
    },
    {
      main: "hurricane",
      sub: "Lovely scenery. We still at the movies?",
      choice: {
        a: "Hide behind closed doors.",
        b: "Run out the door.",
      },
      preferchoice: "b",
    },
  ];

  
  console.log(weatherChart);


  (function () {
    // Functions
    function buildQuiz() {
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      /// join --> combines elements of an array into a string
      quizContainer.innerHTML = output.join("");
    } //End of buildQuiz
  
    function showResults() {
      // gathers the answers from the quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        /// || --> or; if either conditions is true run the respected function
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers ____ when correct
          answerContainers[questionNumber].style.color = "goldenrod";
        }
        // if answer is wrong or blank
        else {
          // color the answers ___ when incorrect
          answerContainers[questionNumber].style.color = "#279";
        }
      });
  
      // show number of correct answers out of total
      if (numCorrect >= 3) {
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} 
        *The conversation went well. It appears that you've greeted an old friend.... Do you remember who they are?`;
      } else if (numCorrect == 0) {
        resultsContainer.innerHTML = `*The stranger appears confused by your response. Perhaps they've realized that you aren't a familiar friend.`;
      } else {
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}       
        *You felt a chill down your spine. The tension in the air seems to have risen. It seems a stranger has mistaken you for a friend. You tried to play along.`;
      }
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      //allows the submitBtn to be shown on the last slide and for the NextBtn to be inactivated
      if (currentSlide === slides.length - 1) {
        ///// .style - adds CSS code, varies depending on what the following element is
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById("card");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // Kick things off
    buildQuiz();
  
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener("click", showResults);

  })();
  