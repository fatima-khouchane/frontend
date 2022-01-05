let i = 0
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let eroEl = document.getElementById("ero-el")

let player = {
    name: "lahcen",
    chips: 0
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + player.chips + "$"

function getRandomCard() {
    eroEl.textContent = ""
    let randomNb = Math.floor(Math.random() * 13) + 1
    if (randomNb === 1) {
        return 11
    } else if (randomNb > 10) {
        return 10
    } else {
        return randomNb
    }
}

function startgame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    randerGame()
}

function randerGame() {
    cardEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        player.chips += 10
        playerEl.textContent = player.name + ": " + player.chips + "$"
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        randerGame()
    } else {
        eroEl.textContent = "try agin!"
    }

}