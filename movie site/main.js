let openModelBtn = document.getElementById("open-model")
let openModelBtn1 = document.getElementById("open-model1")
let overlayEl = document.getElementById("overlay")
let overlayEl1 = document.getElementById("overlay1")
let closeModelBtn = document.getElementById("close-model")
let closeModelBtn1 = document.getElementById("close-model1")

openModelBtn.addEventListener("click", function() {
    console.log("open")
    overlayEl.style.display = "block"
})
openModelBtn1.addEventListener("click", function() {
    console.log("open")
    overlayEl1.style.display = "block"
})


// close buttun

closeModelBtn.addEventListener("click", function() {
    console.log("close")
    overlayEl.style.display = "none"
})
closeModelBtn1.addEventListener("click", function() {
    console.log("close")
    overlayEl1.style.display = "none"
})

