/*-------------------------------- Constants --------------------------------*/

const player = ['X', 'O']

const Player1 = 'X'
const player2 = 'O'
const boardNumsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 8],
    [0, 4, 8],
    [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let turn = player[0]
let singleBox = []
let wholeBoard = ['', '', '', '', '', '', '', '', '',]

let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/

const boardBoxs = document.querySelectorAll('.sqr')

const resultsText = document.querySelector('#results')

const resetButton = document.querySelector('button')

/*-------------------------------- Functions --------------------------------*/

function displayPlayerMove(event) {
    singleBox = document.getElementById(`${boardNumsArray[event.target.id]}`)
    if (singleBox.innerText === "X" || singleBox.innerText === "O") {
        singleBox.innerText = singleBox.innerText
    } else if (turn === player[0]) {
        singleBox.innerText = 'O'
        turn = player[1]
    } else if (turn === player[1]) {
        singleBox.innerText = 'X'
        turn = player[0]
    }
    // else if (winner === true) {
    //     turn = null
    //  singleBox.innerText = singleBox.innerText
    // }

    // const invidualGoes = wholeBoard.forEach(go)
    // console.log(invidualGoes);

}

function whatHasBeenPlayed(event) {
    wholeBoard.splice(event.target.id, 1, event.target.innerText)
    // console.log(wholeBoard);
}
//  whatHasBeenPlayed()

function checkWinner(event) {
    const currentIdx = event.target.id
    // if (wholeBoard[0] === turn && wholeBoard[1] === turn && wholeBoard[2] === turn) {
    //     winner = true
    winningCombos.forEach((combo) => {
        if ((wholeBoard[combo[0]] === 'X' && wholeBoard[combo[1]] === 'X' &&
            wholeBoard[combo[2]] === 'X') || (wholeBoard[combo[0]] === 'O'
                && wholeBoard[combo[1]] === 'O' && wholeBoard[combo[2]] === 'O')) {
            winner = true
        } else if (wholeBoard.includes('') !== true) {
            tie = true
        }
        //  else if (wholeBoard.some(playedItems) !== "") {
        //     tie = true
        // }
        //  else if (wholeBoard.some(boardspace) === '') {  
        // console.log(boardspace);

        // i want to get if there is a black space on the board 
        // if yes tie is false 
        // if there is no blank space tie = true 
        // false and only true when no spaces are left free

        // const isItATie = wholeBoard.some((playedBlocks) => {
        //     return playedBlocks !== ''
        //   })
        // tie = isItATie
        // }

    }
    )
}
// )}



function winOrTie(event) {
    if (winner === true) {
        resultsText.innerText = `Results: The winner is ${turn}!`
    } else if (tie === true) {
        resultsText.innerText = `Results: Its a draw 😢`
    }
}

function playGame(event) {

}
// remove event listener after winner 
// console.log(winner);

// combo.some((winningLine) => {

//     console.log(winningLine);
//     }) 

// test for some or filter 
// a for each of the winners array if innter html is true to the same or something

// const displayPlayerMove = (event) => {
//     const boxIdx = document.querySelector(event.target.id)
//  console.log(boxIdx);

/*----------------------------- Event Listeners -----------------------------*/

// console.log(boardBoxs);
// console.log(resetButton);
// console.log(resultsText);

resetButton.addEventListener('click', (event) => {
    resultsText.innerText = "Results: "
    boardBoxs.forEach((box) => {
        box.innerText = ''
        wholeBoard = ['', '', '', '', '', '', '', '', '',]
        winner = false
        tie = false
    })
})



boardBoxs.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (winner === true || tie === true) {
            return
        }
        displayPlayerMove(event)
        whatHasBeenPlayed(event)
        checkWinner(event)
        winOrTie(event)

        // if (winner === true) {
        //     box.removeEventListener('click')
        // }
    })
})
