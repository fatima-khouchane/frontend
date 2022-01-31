const button = document.getElementById("getCarde")
const buttonDrowDeck = document.getElementById("drowDeck")
let deckId
let meScore = 0
let pcScore = 0
const cardvalue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

buttonDrowDeck.style.display = "none"

// call back function check deckId value 
function handleclick() {
    if(deckId === undefined) {
        fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
            .then(respons => respons.json())
            .then(data => {
                deckId = data.deck_id
            }
            )
        buttonDrowDeck.style.display = "block"
    }else {
        // disable start game
        button.setAttribute("disabled","")
        console.log("please click draw button")
        button.classList.add("btn-disabled")
    }
    
}


// function determine winner of game

function winnerOfGame(val0, val1) {
    if( cardvalue.indexOf(val0) <  cardvalue.indexOf(val1) ) {
        document.getElementById("title").textContent = "you win!"
        meScore++
        document.getElementById("cardValue1").textContent = meScore
    }else if( cardvalue.indexOf(val0) > cardvalue.indexOf(val1) ) {
        document.getElementById("title").textContent = "computer win!"
        pcScore++
        document.getElementById("cardValue0").textContent = pcScore
    }else if( cardvalue.indexOf(val0) === cardvalue.indexOf(val1) ){
        document.getElementById("title").textContent = "equle!"
    }
}

button.addEventListener("click", handleclick)

buttonDrowDeck.addEventListener("click", function() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
            .then(response => response.json())
            .then(data => {
                if(data.remaining !== 0) {
                    document.getElementById("cardRemaning").textContent = `${data.remaining}`
                    document.getElementById("container").innerHTML = `
                    <div class="card"><img src="${data.cards[0].image}"></div>
                    <div class="card"><img src="${data.cards[1].image}"></div>`
                    winnerOfGame(data.cards[0].value, data.cards[1].value)
                }else {
                    // if statement check the finale winner
                    if(meScore > pcScore) {
                        document.getElementById("title").textContent = `you win! your score: ${meScore}`
                    }else if (meScore < pcScore){
                        document.getElementById("title").textContent = `computer win! your score: ${pcScore}`
                    }else {
                        document.getElementById("title").textContent = `you are equle`
                    }

                    // reset the game
                    document.getElementById("cardRemaning").textContent = `0`
                    buttonDrowDeck.style.display = "none"
                    deckId = undefined
                    button.classList.remove("btn-disabled")
                    button.removeAttribute("disabled","")
                }
            })
})
