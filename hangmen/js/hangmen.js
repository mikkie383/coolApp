
let answer;
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function generateButton() {
    let buttonHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
        `
            <button class="btn btn-lg btn-primary m-2" id="` + letter + `" onclick="handleGuess('` + letter + `')">
                ` + letter + `
            </button>
        `
    ).join("");
    document.getElementById("keyboard").innerHTML = buttonHTML;
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute("disabled", true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    }
    else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPic();
    }
}

function updateHangmanPic() {
    document.getElementById("hangmanPic").src = "./image/" + mistakes + ".jpg";
}

function checkIfGameWon() {
    if (wordStatus === answer.toLowerCase()) {
        document.getElementById("keyboard").innerHTML = "You won!!!";
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById("wordSpotlight").innerHTML = "The answer is " + answer;
        document.getElementById("keyboard").innerHTML = "You lost!!!";
    }
}

let noMoreGenerate = 0;
function guessedWord() {
    answer = document.getElementById("theKey").value;
    wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("");

    document.getElementById("wordSpotlight").innerHTML = wordStatus;
    document.querySelector(".hide1").setAttribute("style", "display:none;");
    document.querySelector(".hide2").setAttribute("style", "display:none;");
    document.querySelector(".hide3").setAttribute("style", "display:none;");
    if (noMoreGenerate == 0) {
        generateButton();
        noMoreGenerate++;
    }
}

function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    location.reload();
}

document.getElementById("maxWrong").innerHTML = maxWrong;

