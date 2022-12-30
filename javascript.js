let time = 600;
const count = document.getElementById(`timer`);
setInterval(startTimer, 1000)
function startTimer(){
    const seconds= time % 60;
    count.innerHTML = `Timer: ${seconds}`;
    time --
}


    startTimer();