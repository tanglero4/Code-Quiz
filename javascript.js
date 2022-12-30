let time = 60;
const count = document.getElementById(`timer`);
setInterval(startTimer, 1000)

function startTimer(){
    const seconds= time % 60
    count.innerHTML = `Timer: ${time}`
    time --;
    if(time === 0){
       showHighScores();
    }
}

let question={
    title: `Will this work?`,
    possibleAnswers:[ `A: Yes`, `B: No`, `C: Maybe`, `D: So`],
    correctAnswer: 2
}

let btn= document.getElementById(`btn`)
let instruction= document.getElementById(`hide`)

btn.addEventListener(`click`, function showQuestion(x){
btn.classList.add(`hide`)
instruction.classList.add(`hide`)

// select h1 element
    let titleH1= document.getElementById(`title`)
    titleH1.textContent = question.title

// select li to display answers
    let answerli1= document.getElementById(`answer1`);
    answerli1.textContent = question.possibleAnswers[0];
    let answerli2= document.getElementById(`answer2`);
    answerli2.innerHTML = question.possibleAnswers[1];
    let answerli3= document.getElementById(`answer3`);
    answerli3.innerHTML = question.possibleAnswers[2];
    let answerli4= document.getElementById(`answer4`);
    answerli4.innerHTML = question.possibleAnswers[3];

// Modify h1 into the question
    // possibleAnswers.forEach(function(element, index){
    //     Element.textContent= x.possibleAnswers[index]
    // })
    // showQuestion();
});

function showHighScores(){
    console.log(`you won!`);
}
    // showQuestion();
    startTimer();