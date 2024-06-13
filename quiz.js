const questions = [
  {
    question: "Who is the current prime minister of Ethiopia?",
    answers: [
      { text: "Abiy", correct: true },
      { text: "Gelasa", correct: false },
      { text: "Taye", correct: false },
      { text: "Haile", correct: false },
    ],
  },

  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "Who is the current prime minister of Ethiopia?",
    answers: [
      { text: "Abiy", correct: true },
      { text: "Gelasa", correct: false },
      { text: "Talba", correct: false },
      { text: "Milisha", correct: false },
    ],
  },

  {
    question: "Which continent is the largest in the world?",
    answers: [
      { text: "Africa", correct: false },
      { text: "Antartica", correct: false },
      { text: "Asia", correct: true },
      { text: "America", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}

startQuiz();
