let time = 10;
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
    correctAnswer: `D: All of the above`,
  },
  {
    title: ` String values must be enclosed within ____ when being assigned to variables.`,
    possibleAnswers: [
      `A: commas`,
      `B: curly brakets`,
      `C: quotes`,
      `D: parenthesis`,
    ],
    correctAnswer: `C: quotes`,
  },
  {
    title: ` A very useful tool used during development and debugging for printing content to the debugger is: `,
    possibleAnswers: [
      `A: Javascript`,
      `B: terminal/bash`,
      `C: for loops`,
      `D: console.log`,
    ],
    correctAnswer: `D: console.log`,
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

  answerUl.innerHTML = ``;
  // Loop through questions
  for (i = 0; i < question[index].possibleAnswers.length; i++) {
    // console.log(question[index].possibleAnswers);
    // create button element
    var answerbtn = document.createElement("button");
    // Add answers to the new buttons
    answerbtn.innerHTML = question[index].possibleAnswers[i];
    console.log(answerbtn);
    // add buttons under the ul
    answerUl.appendChild(answerbtn);

    answerbtn.onclick = checkAnswer;
  }
}
// check answer
function checkAnswer() {
  // // create function for correct answers and find how to tell it what question its on
  // if (this.innerHTML === question.correctAnswer) {
  //   console.log(`correct`);
  // }
  console.log(
    this.innerHTML,
    "user answer",
    question[index].correctAnswer,
    "correct answer"
  );
  if (this.innerHTML === question[index].correctAnswer) {
    console.log(this.innerHTML === question[index].correctAnswer);
    index++;
    showQuestion();
  }
}

btn.addEventListener(`click`, showQuestion);

// directs to view highscores page
function showHighScores() {
  window.location.href = "viewhighscores.html";
}
