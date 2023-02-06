
const wordEl = document.getElementById('word-scramble');
const hintEl = document.querySelector('#hint span');
const timeEl = document.querySelector('#time span');
const inputEl = document.getElementById('input-word');
const refreshEl = document.getElementById('refresh');
const checkEl = document.getElementById('check');


let word = '';
let time = 10;
let timer;

function initGame () {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomObj = words[randomIndex];
    // console.log(randomObj);
    word = randomObj.word
    // console.log(word)
    let wordArry = word.split('').sort( () => Math.random() - 0.5);
    // console.log(wordArry)
    let scrambledWord = wordArry.join('');
    // console.log(scrambledWord)

    if (scrambledWord === word) {
        return initGame();
    }

    wordEl.innerText = scrambledWord;
    hintEl.textContent = randomObj.hint;
    timeEl.textContent = time;
    inputEl.value = '';
    checkEl.setAttribute('disabled', true)

    timer = setInterval(() => {
        if (time > 0) {
            time--
            return timeEl.textContent = time;
        }
        timeOut(`Time out! ${word.toUpperCase()} is the correct word`)
    },1000);
    // console.log(timer)
}

initGame()


refreshEl.addEventListener('click', () => {
    timeOut();
})

function refreshGame (msg) {
    if (msg) {
        alert(msg)
    }
    time = 10;
    clearInterval(timer);
    initGame()
}

function timeOut(msg) {
    refreshGame(msg);
}
 inputEl.addEventListener ('input', (e) => {
    if (!e.target.value) {
        checkEl.setAttribute('disabled', true)
    } else {
        checkEl.removeAttribute('disabled')
    }
 })
function checkWord (){
    let endInput = inputEl.value.toLowerCase();
    if (endInput !== word) {
        alert(`${inputEl.value.toUpperCase()} is not the correct word`)
    }  else {
        alert('Wowhh!... you got it correctly!')
        timeOut()
    }
    // console.log(inputEl)
}
checkEl.addEventListener('click', () => {
    checkWord();
})
