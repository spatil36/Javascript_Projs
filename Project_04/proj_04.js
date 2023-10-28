let nos = Math.ceil((Math.random()*100)+1)

console.log(nos)

const submit = document.getElementById('subt')
const userIP = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses')
const lastRes = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

//console.log(lastRes)


const p = document.createElement('p')

let prevGuess = []
let numguesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const uip = parseInt(userIP.value)
        console.log(uip)
        validateGuess(uip)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if (guess<1){
        alert('Please enter a valid number more than 1')
    }
    else if (guess>100){
        alert('Please enter a valid number less than 100')
    }
    else {
        prevGuess.push(guess)
        if(numguesses === 10){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${nos}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === nos){
        displayMessage('Guess was right')
        endGame()
    }
    else if (guess < nos){
        displayMessage('Number is too low')
    }
    else {
        displayMessage('Number is too high')
    }
}

function displayGuess(guess){
    userIP.value=''
    guessSlot.innerHTML += `${guess}, ` 
    numguesses++;
    lastRes.innerHTML = `${11 - numguesses}`
}

function displayMessage(message){
    console.log("inside displ message")
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userIP.value=''
    userIP.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.append(p)
    playGame=false
    newGame()
}

function newGame() {
   const button = document.querySelector('#newGame')
   button.addEventListener('click', function(e) {
    nos = Math.ceil((Math.random()*100)+1)
    console.log(nos)
    prevGuess = []
    numguesses = 1
    guessSlot.innerHTML = ''
    lastRes.innerHTML = `${11 - numguesses}`
    userIP.removeAttribute('disabled')
    startOver.removeChild(p)
    displayMessage('')
    playGame = true
   })
}