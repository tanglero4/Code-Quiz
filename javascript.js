let time = 60;
const count = document.getElementById(`timer`);
// setInterval(startTimer, 1000)
let timeInterval;
function startTimer() {
  count.innerHTML = `Timer: ${time}`;
  timeInterval = setInterval(function () {
    time--;
    count.innerHTML = `Timer: ${time}`;
    if (time <= 0) {
      clearInterval(timeInterval);
      time = 0;
      count.innerHTML = `Timer: ${time}`;
      showHighScores();
    }
  }, 1000);
}

let question = [
  {
    title: `Arrays in Javascript can be used to store _____.`,
    possibleAnswers: [
      `A: numbers and strings`,
      `B: other arrays`,
      `C: booleans`,
      `D: All of the above`,
    ],
    correctAnswer: 3,
  },
  {
    title: ` String values must be enclosed within ____ when being assigned to variables.`,
    possibleAnswers: [
      `A: commas`,
      `B: curly brakets`,
      `C: quotes`,
      `D: parenthesis`,
    ],
    correctAnswer: 2,
  },
  {
    title: ` A very useful tool used during development and debugging for printing content to the debugger is: `,
    possibleAnswers: [
      `A: Javascript`,
      `B: terminal/bash`,
      `C: for loops`,
      `D: console.log`,
    ],
    correctAnswer: 3,
  },
];

let btn = document.getElementById(`btn`);
let instruction = document.getElementById(`hide`);
let answerUl = document.getElementById(`answer-list`);
let index = 0;
function showQuestion() {
  btn.classList.add(`hide`);
  instruction.classList.add(`hide`);
  startTimer();
  console.log(index);
  // select h1 element
  let titleH1 = document.getElementById(`title`);
  titleH1.textContent = question[index].title;
  // select li to display answers
  answerUl.innerHTML = ``;
  for (i = 0; i < question[index].possibleAnswers.length; i++) {
    console.log(question[index].possibleAnswers);
    var answerbtn = document.createElement("button");
    answerbtn.innerHTML = question[index].possibleAnswers[i];
    console.log(answerbtn);
    answerUl.appendChild(answerbtn);

    answerbtn.onclick = checkAnswer;
  }
}

function checkAnswer() {
  console.log(this);
  if (question.length > index) {
    index++;
    showQuestion();
  }
}

btn.addEventListener(`click`, showQuestion);

function showHighScores() {
  console.log(`you won!`);
}
// showQuestion();
