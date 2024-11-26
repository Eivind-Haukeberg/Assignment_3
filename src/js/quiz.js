// CONSTS

const questions = [
    {
      question: "What house is Harry Potter sorted into?",
      answers: ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"],
      correctIndex: 2,
      image: "../assets/images/quiz/harry-potter.jpg",
    },
    {
      question: "What is the iconic quote from Dune?",
      answers: [
        "Fear is the mind-killer",
        "I will bend like a reed in the wind",
        "Desert power will save us",
        "The spice must flow",
      ],
      correctIndex: 0,
      image: "../assets/images/quiz/dune.jpg",
    },
    {
      question: "What is the name of the island in Jurassic Park?",
      answers: ["Isla Nublar", "Skull Island", "Isla Sorna", "Jurassic World"],
      correctIndex: 0,
      image: "../assets/images/quiz/jurassic-park.jpg",
    },
    {
      question: "Who forged the One Ring in Lord of the Rings?",
      answers: ["Gandalf", "Sauron", "Saruman", "Elrond"],
      correctIndex: 1,
      image: "../assets/images/quiz/the-one-ring.jpg",
    },
    {
      question: "What is Iron Man's real name?",
      answers: ["Steve Rogers", "Tony Stark", "Bruce Wayne", "Clark Kent"],
      correctIndex: 1,
      image: "../assets/images/quiz/iron-man.jpg",
    },
    {
      question: "What planet is the setting for Star Wars: A New Hope?",
      answers: ["Tatooine", "Hoth", "Endor", "Naboo"],
      correctIndex: 0,
      image: "../assets/images/quiz/star-wars.jpg",
    },
    {
      question: "Which movie features the quote: 'I'll be back'?",
      answers: ["RoboCop", "The Terminator", "Predator", "Die Hard"],
      correctIndex: 1,
      image: "../assets/images/quiz/ill-be-back.jpg",
    },
    {
      question: "What is the name of the ship in Avatar?",
      answers: ["The Venture Star", "The Nostromo", "The Prometheus", "The Enterprise"],
      correctIndex: 0,
      image: "../assets/images/quiz/avatar.jpg",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswerIndex = null;
  
  const startButton = document.querySelector(".quiz__start");
  const quizContainer = document.querySelector(".quiz__container");
  const questionElement = document.querySelector(".quiz__question");
  const answerButtons = document.querySelector(".quiz__answers");
  const progressElement = document.querySelector(".quiz__progress");
  const submitButton = document.querySelector(".quiz__submit");
  const scoreElement = document.querySelector(".quiz__score");
  const restartButton = document.querySelector(".quiz__restart");
  const questionImage = document.querySelector(".quiz__image");
  


// FUNCTIONS



  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
  
    startButton.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    scoreElement.classList.add("hidden");
    restartButton.classList.add("hidden");
  
    showQuestion();
  }
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    questionImage.src = question.image;
    answerButtons.innerHTML = "";
    selectedAnswerIndex = null;
  
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("quiz__answer-button");
      button.addEventListener("click", () => selectAnswer(index, button));
      answerButtons.appendChild(button);
    });
  
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    submitButton.disabled = true;
  }
  
  function selectAnswer(index, button) {
    selectedAnswerIndex = index;
  
    const allButtons = document.querySelectorAll(".quiz__answer-button");
    allButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  
    submitButton.disabled = false;
  }
  
  function submitAnswer() {
    if (selectedAnswerIndex === null) {
      alert("Please select an answer before submitting.");
      return;
    }
  
    const question = questions[currentQuestionIndex];
    if (selectedAnswerIndex === question.correctIndex) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    quizContainer.classList.add("hidden");
    scoreElement.classList.remove("hidden");
    scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    restartButton.classList.remove("hidden");
  }
  
  startButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", submitAnswer);
  restartButton.addEventListener("click", startQuiz);
  