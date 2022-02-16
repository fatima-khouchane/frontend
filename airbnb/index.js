
function NavBar() {
    return (
        <nav>
            <img src="./img/airbnb.png" />
        </nav>
    )
}

function Photo() {
    return (
        <section className="photo">
            <img className="image1" src="./img/music1.jpg" alt="" />
            <img className="image2" src="./img/nature.jpg" alt="" />
            <img className="image3" src="./img/nature2.jpg" alt="" />
            <img className="image4" src="./img/party1.jpg" alt="" />
            <img className="image5" src="./img/room1.jpg" alt="" />
            <img className="image6" src="./img/room2.jpg" alt="" />
            <img className="image7" src="./img/room3.jpg" alt="" />
            <img className="image8" src="./img/room4.jpg" alt="" />
            <img className="image9" src="./img/room5.jpg" alt="" />
        </section>
    )
}

function Content() {
    return (
        <section className="content">
            <h1>
                Online Experiences
            </h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

// ---------------------- card component -------------------

function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <span className="card-badge">sold out</span>}
            <img src={`./img/${props.img}`} />
            <p><span className="star">★</span> {props.rate} <span className="contry">(6) • USA</span></p>
            <p>{props.title}</p>
            <p><strong>From {props.price} /</strong> person</p>
        </div>
    )
}

// -------------------- data --------------------------

let data = [
    { 
        id:1,
        img:"music1.jpg",
        rate:"5.0",
        title:"Music lessons with Katie",
        price:"$136",
        openSpots: 0,
    },
    {
        id:2,
        img:"nature2.jpg",
        rate:"5.5",
        title:"Web lessons with lahcen",
        price:"$50",
        openSpots: 2,
    },
    {
        id:3,
        img:"room1.jpg",
        rate:"4.0",
        title:"Fransh lessons with lahcen",
        price:"$60",
        openSpots: 3
    }
]

// ----------------------------------------------------

function AirbnbApp() {
    const cardData = data.map(card => {
        return (
        <Card 
            key={card.id}
            {...card}
        />)
    })


    return (
        <div className="container">
            <NavBar />
            <Photo />
            <Content />
            <div className="list">
                {cardData}
            </div>
        </div>
    )
}


//------------------ render page ----------------------------- 

ReactDOM.render(<AirbnbApp />, document.getElementById("root"))