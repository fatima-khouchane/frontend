
let postsArray = []

function addDataToDOM(data) {
    document.getElementById("container").innerHTML = ""
        for(let i = 0; data.length; i++) {
            let posts = `
            <div class="posts">
                <h1>${data[i].title}</h1>
                <hr>
                <p>${data[i].body}</p>
            </div>
            `
            document.getElementById("container").innerHTML += posts
        }
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0,5)
        addDataToDOM(postsArray)
    }) 


const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("submit", function(e) {
    e.preventDefault()
    let titleval = document.getElementById("title").value;
    let bodyval = document.getElementById("body").value;

    let data = {
        title: `${titleval}`,
        body: `${bodyval}`
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            postsArray.unshift(data)
            addDataToDOM(postsArray)
            document.getElementById("title").value = ""
            document.getElementById("body").value = ""
        })
})
