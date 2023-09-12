const btns = document.querySelectorAll('.btn');
const computerDiv = document.getElementById('computer');
const pResult = document.getElementById('resultP');
let isClicked = false;
btns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    btn.style.animationName = 'scale';
    btn.classList.add('active');
    computerDiv.style.animationName = 'bg';
    isClicked = true;
    let yourMove;

    btn.style.transition = '1s';
    btn.style.zIndex = "100";
    btn.style.transform = 'scale(2)';

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
      computerDiv.style.animationName = '';
      btn.style.transition = '';
      btn.style.position = '';
      btn.style.zIndex = "3";
      btn.style.transform = 'scale(1)';
    }, 3000);
    // console.log(yourMove);
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
    // console.log(`Voici le move du PC : ${computerMove}`);
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
    // console.log(`Voici le resultat : ${result}`)
    setTimeout(function () {
      pResult.innerHTML = result;
      pResult.classList.add('show');
      if (result == 'WIN') {
        pResult.style.backgroundColor = 'lightgreen';
      } else if (result == 'LOSE') {
        pResult.style.backgroundColor = 'tomato';
      } else if (result == 'Tie') {
        pResult.style.backgroundColor = 'lightgray';
      }
    }, 2500)
    setTimeout(function () {
      pResult.classList.remove('show');
    }, 4000)

  }
  )
})
