
const buttonEl = document.getElementById('Button')
const textShow = document.getElementById('textCard')
const head = document.getElementById('headChange')


const SUITS = {
    HEARTS: '❤️',
    DIAMONDS: '💎',
    SPADES: '♠️',
    CLUBS: '♣️'
}

const numberArr = [2, 3, 4, 5, 6, 7, 8, 9, 10,'J', 'Q', 'K', 'A']

function getRandomCard(){
    let suit = Object.values(SUITS)
    let face = numberArr[Math.floor(Math.random() * numberArr.length)]
    const newCard =  face + suit[Math.floor(Math.random() * suit.length)]
    console.log(newCard);
    
    return newCard
}

function moreInfo() {
    
}



buttonEl.addEventListener("click", () => {
    textShow.style.visibility = 'visible'
    textShow.innerHTML = getRandomCard()

    
})