/*-------------------------------- Constants --------------------------------*/

const player = ['X', 'O']

const Player1 = 'X'
const player2 = 'O'
const boardNumsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8']


/*---------------------------- Variables (state) ----------------------------*/
let turn = player[0]
 let singleBox = []
 let wholeBoard = [ '', '', '', '', '', '', '', '', '',]

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
    
 }


// const displayPlayerMove = (event) => {
//     const boxIdx = document.querySelector(event.target.id)
//  console.log(boxIdx);

/*----------------------------- Event Listeners -----------------------------*/

// console.log(boardBoxs);
// console.log(resetButton);
// console.log(resultsText);

resetButton.addEventListener('click', (event) => {
 resultsText.innerText ="Results: "
 boardBoxs.forEach((box) => {
    box.innerText = ''
})
})



boardBoxs.forEach((box) => {
box.addEventListener('click', (event) => {
    console.log('hello')
    displayPlayerMove(event)
})
})
