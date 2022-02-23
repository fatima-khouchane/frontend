// ----------------- header ----------------------

function Header() {
    return (
        <header>
            <div className="logo">
                <img className="img-logo" src="./logo.png" alt=""/>
                <p>Meme Generator</p>
            </div>

            <p>React Course - Project 3</p>
        </header>
    )
}

// ----------------- header ----------------------


function MainContent() {
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1x6f.jpg")
    const [finalMeme, setFinalMeme]= React.useState([{
        toptext:"hi",
        buttomtext:"lahcen",
        image:""
    }])



    async function getNewMeme(e) {
        // prevent default action of submit
        e.preventDefault()
        // generate random number
        let randomNb = Math.floor(Math.random() * 100)
    

        // get meme from api this is not the best way you should use useEffect
        let response = await fetch("https://api.imgflip.com/get_memes")
        let data = await response.json()
        let url =  data.data.memes[randomNb].url

        // change state of values
        setMemeImage(url)
        setFinalMeme(prev => {
            return {
                ...prev,
                image:`${memeImage}`
            }
        })
    }

    // form input value handle change
    function handleChange(e) {
        setFinalMeme(premem => {
            return (
                {
                    ...premem,
                    [e.target.name] :e.target.value,
                }
            )
        })
    }

    // render the page
    return (
        <main>
        <form >
            <div className="input-filed">
                <input type="text"
                    autoComplete="off" 
                    onChange={handleChange} 
                    name="toptext" 
                    value={finalMeme.toptext} 
                    placeholder="entre your text" 
                    required />
                <input type="text" 
                    autoComplete="off" 
                    onChange={handleChange} 
                    name="buttomtext" 
                    value={finalMeme.buttomtext} 
                    placeholder="entre your text" 
                    required />
            </div>
            <button onClick={getNewMeme} type="submit">Get a new meme image</button>
        </form>
        <div className="meme-img">
            <p className="toptext">{finalMeme.toptext}</p>
            <img className="meme" src={finalMeme.image} />
            <p className="buttomtext">{finalMeme.buttomtext}</p>
        </div>
        </main>
    )
}

// ----------------- App ----------------------


function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
        </div>
    )
}


// ----------------- render page ----------------------

ReactDOM.render(<App/>, document.getElementById("root"))