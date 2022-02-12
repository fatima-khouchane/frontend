const openel = document.getElementById("open")
const closeel = document.getElementById("close")

openel.addEventListener("click", function() {
    document.getElementById("navel").style.transform = "translateX(0%)"
})

closeel.addEventListener("click", function() {
    document.getElementById("navel").style.transform = "translateX(-100%)"
})