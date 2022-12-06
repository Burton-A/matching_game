const cardArray = [
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'fish',
        img: 'images/fish.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'pancake',
        img: 'images/pancake.png'
    },
    {
        name: 'pop',
        img: 'images/pop.png'
    },
    {
        name: 'taco',
        img: 'images/taco.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'fish',
        img: 'images/fish.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'pancake',
        img: 'images/pancake.png'
    },
    {
        name: 'pop',
        img: 'images/pop.png'
    },
    {
        name: 'taco',
        img: 'images/taco.png'
    },
]

/* console.log(cardArray) */

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []




function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/question.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()
function chekcMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match')


    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/question.png')
        cards[optionTwoId].setAttribute('src', 'images/question.png')
        alert('You clicked the same card!')
    }


    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Match!')
        cards[optionOneId].setAttribute('src', 'images/check.png')
        cards[optionTwoId].setAttribute('src', 'images/check.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/question.png')
        cards[optionTwoId].setAttribute('src', 'images/question.png')
        alert('try again!')

    }
    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []
    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'You win!'
    }
}

function flipCard() {

    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(chekcMatch, 500);
    }
}