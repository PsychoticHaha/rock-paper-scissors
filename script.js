const btns = document.querySelectorAll('.btn');
const computerDiv = document.getElementById('computer');
const pResult = document.getElementById('resultP');
const scoreBoard = document.getElementById('scoreBoard');
let isClicked = false;
let score;
btns.forEach(function (btn, index) {
  score = {
    WIN: 0,
    LOSE: 0,
    TIE: 0
  };
  btn.addEventListener('click', function clickedBtn() {
    computerDiv.style.animationName = 'bg';
    btn.style.animationName = 'scale';
    btn.classList.add('active');
    isClicked = true;
    let yourMove;
    btn.style = 'transition:1s;z-index:100;transform:scale(2);position:absolute';

    if (index == 0) {
      yourMove = 'Rock'
    } else if (index == 1) {
      yourMove = 'Paper'
    } else if (index == 2) {
      yourMove = 'Scissors'
    } else {
      yourMove = 'Unknown'
    }

    setTimeout(function () {
      btn.style.animationName = '';
      btn.classList.remove('active');
      computerDiv.style = "animation-name:'';";
      computerDiv.attributes.removeNamedItem('class');
      btn.style = 'transition:"0.3s"; position:"";z-index:3;transform:scale(1)';
    }, 5000);
    const computerRdm = Math.random();
    let computerMove;
    if (computerRdm < 1 / 3) {
      computerMove = 'Rock';
      computerDiv.classList.add(computerMove);
      computerDiv.classList.remove('Paper', 'Scissors');

    } else if (computerRdm > 1 / 3 && computerRdm < 2 / 3) {
      computerMove = 'Paper';
      computerDiv.classList.add(computerMove);
      computerDiv.classList.remove('Rock', 'Scissors');
    } else if (computerRdm > 2 / 3) {
      computerMove = 'Scissors';
      computerDiv.classList.add(computerMove);
      computerDiv.classList.remove('Rock', 'Paper');
    }
    let result;
    if (computerMove == 'Rock' && yourMove == 'Scissors') {
      result = "LOSE";
      score.LOSE++;
    } else if (computerMove == 'Scissors' && yourMove == 'Paper') {
      result = 'LOSE';
      score.LOSE++;
    } else if (computerMove == 'Paper' && yourMove == 'Rock') {
      result = 'LOSE';
      score.LOSE++;

    } else if (computerMove == 'Paper' && yourMove == 'Scissors') {
      result = "WIN";
      score.WIN++;
    } else if (computerMove == 'Scissors' && yourMove == 'Rock') {
      score.WIN++;
      result = 'WIN';
    } else if (computerMove == 'Rock' && yourMove == 'Paper') {
      result = 'WIN';
      score.WIN++;
    }
    else if (computerMove == yourMove) {
      result = 'Tie';
      score.TIE++;
    }
    // console.log(`LOSE : ${score.LOSE} \nWIN : ${score.WIN} \nTIE : ${score.TIE}`);

    setTimeout(function () {
      pResult.innerHTML = result;
      pResult.classList.add('show');
      if (result == 'WIN') {
        pResult.style = 'background-color:lightgreen;';
      } else if (result == 'LOSE') {
        pResult.style = 'background-color:tomato;color:#e8e8e8; ';
      } else if (result == 'Tie') {
        pResult.style = 'background-color:lightgray; color: black;';
      }
    }, 2000)
    setTimeout(function () {
      pResult.classList.remove('show');
    }, 4000)
  }
  )
})
function reset() {
  score.WIN = 0;
  score.LOSE = 0;
  score.TIE = 0;
  scoreBoard.innerHTML = 'Score Reset';
  scoreBoard.style = 'transform:translate(0)';
};
function showScore() {
  scoreBoard.innerHTML = `Voici le score <br> WIN : ${score.WIN} <br>LOSE : ${score.LOSE} <br>TIE : ${score.TIE}`;
  scoreBoard.style = 'transform:translate(0)';
  setTimeout(() => {
    scoreBoard.style = 'transform:';
  }, 5000)
}
