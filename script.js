let appendMinutes = document.querySelector(".minutes");
let appendSeconds = document.querySelector(".seconds");

let firstNumber = document.querySelector(".firstnumber");
let operator = document.querySelector(".operator");
let secondNumber = document.querySelector(".secondnumber");
let audio = document.getElementById("myAudio");

let option1 = document.querySelector(".leftanswer");
let option2 = document.querySelector(".centeranswer");
let option3 = document.querySelector(".rightanswer");

let answer = 0;
let seconds = 5;
let minutes = 0;
let interval;

function render() {
  console.log("render");
  let ques1 = Math.floor(Math.random() * 11);
  let ques2 = Math.floor(Math.random() * 11);

  let falseAns1 = Math.floor(Math.random() * 11);
  let falseAns2 = Math.floor(Math.random() * 11);
  allAnswer = [];
  switchAnswers = [];

  answer = eval(ques1 + ques2);

  firstNumber.innerHTML = ques1;
  secondNumber.innerHTML = ques2;

  allAnswers = [answer, falseAns1, falseAns2];

  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];

  option1.addEventListener("click", function () {
    if (option1.innerHTML == answer) {
      seconds = seconds + 5;
      render();
    } else {
      audio.play();
      console.log("false");
    }
  });

  option2.addEventListener("click", function () {
    if (option2.innerHTML == answer) {
      seconds = seconds + 5;
      render();
    } else {
      audio.play();
      console.log("false");
    }
  });

  option3.addEventListener("click", function () {
    if (option3.innerHTML == answer) {
      seconds = seconds + 5;
      render();
    } else {
      audio.play();
      console.log("false");
    }
  });
}

function timer() {
  interval = setInterval(startTimer, 1000);

  function startTimer() {
    seconds--;

    if (minutes == 0 && seconds == 0) {
      clearInterval(interval);

      document.body.insertAdjacentHTML(
        "afterbegin",
        `
          <div class="gameover">GAME OVER!</div>
          <button id="resBtn" class="restart-btn">Restart</button>
        `
      );

      let resBtn = document.getElementById("resBtn");
      let gameover = document.querySelector(".gameover");

      resBtn.addEventListener("click", () => {
        gameover.style.display = "none";
        resBtn.style.display = "none";

        restart();
      });
    }

   

    appendMinutes.innerHTML = String(minutes).padStart(2, 0);
    appendSeconds.innerHTML = String(seconds).padStart(2, 0);
  }

  if (seconds >= 10) {
    minutes++;
    seconds = 59;
    minutes--;
 
  }

  function restart() {
    seconds = 5;
    minutes = 0;

    appendMinutes.innerHTML = String(minutes).padStart(2, 0);
    appendSeconds.innerHTML = String(seconds).padStart(2, 0);

    render();
    timer();
  }
}

timer();
render();
