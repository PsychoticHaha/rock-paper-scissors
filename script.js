const btns = document.querySelectorAll('.btn');
const computerDiv = document.getElementById('computer');
let isClicked = false;
btns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    if (!isClicked) {
      btn.style.animationName = 'scale';
      btn.classList.add('active');
      computerDiv.style.animationName = 'bg';
      isClicked = true;
    }
    let yourMove;
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
      computerDiv.style.animationName = ' ';
    }, 1000);
    console.log(yourMove);
    let computerRdm = Math.random();
    let computerMove;
    if (computerRdm < 1 / 3) {
      computerMove = 'Rock';
      computerDiv.classList.add('Rock');
    } else if (computerRdm > 1 / 3 && computerRdm < 2 / 3) {
      computerMove = 'Paper';
      computerDiv.classList.add('Paper');
    } else if (computerRdm > 2 / 3) {
      computerMove = 'Scissors';
      computerDiv.classList.add('Scissors');
    }
    console.log(`Voici le move du PC : ${computerMove}`);
    let result;
    if (computerMove == 'Rock' && yourMove == 'Scissors') {
      result = "LOSE";
    } else if (computerMove == 'Scissors' && yourMove == 'Paper') {
      result = 'LOSE';
    } else if (computerMove == 'Paper' && yourMove == 'Rock') {
      result = 'LOSE';
    } else if (computerMove == 'Paper' && yourMove == 'Scissors') {
      result = "WIN";
    } else if (computerMove == 'Scissors' && yourMove == 'Rock') {
      result = 'WIN';
    } else if (computerMove == 'Rock' && yourMove == 'Paper') {
      result = 'WIN';

    }
    else if (computerMove == yourMove) {
      result = 'Tie';
    }
    console.log(`Voici le resultat : ${result}`)
  })
})
