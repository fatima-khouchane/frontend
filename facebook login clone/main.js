
let loginBtn = document.getElementById("login")

loginBtn.addEventListener("submit", event => {

    event.preventDefault()
    
    let ourFormData = new FormData(event.target)

    let username = ourFormData.get("username")
    let updatedHtmlContant = ` 
        <div class="welcome">
        <h2>Welcome <span>${username}</span></h2>
        <img src="welcome-back.png">
        </div>
    `

    let newContant = document.getElementById("containerjs")

    newContant.innerHTML = updatedHtmlContant
})
