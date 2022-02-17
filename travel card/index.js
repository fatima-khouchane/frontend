// ------------ travel data ------------

const DataTravel = [
    {
        id:1,
        image:"japan.jpg",
        maplinke:"https://map.google.com",
        location:"JAPAN",
        title:"mount fuji",
        date:"12 Jan,2021 - 24 Jan,2021",
        description:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
        id:2,
        image:"australia.jpg",
        maplinke:"https://map.google.com",
        location:"AUSTRALIA",
        title:"Sydney Opera House",
        date:"27 May, 2021 - 8 Jun, 2021",
        description:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
    },
    {
        id:3,
        image:"amazone.jpg",
        maplinke:"https://map.google.com",
        location:"NORWAY",
        title:"Geirangerfjord",
        date:"01 Oct, 2021 - 18 Nov, 2021",
        description:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    }
]


// ------------ page header ------------

function Header() {
    return (
        <header className="header-page">
            <p>🚀 my travel journal</p>
        </header>
    )
}

// ------------ travel card ------------

function TravelCard(props) {
    console.log(props)
    return (
        <div className="card-container">
            <img className="image-location" src={`./img/${props.image}`} alt="" />
            <div className="location">
                <img className="map-icon" src="./img/map.png" alt="" />
                <p className="contry">{props.location}</p>
                <a className="map-link" href={`${props.maplink}`}>View on google map</a>
            </div>
            <h1 className="title">{props.title}</h1>
            <p className="date"><strong>{props.date}</strong></p>
            <p className="description">{props.description}</p>
        </div>
    )
}

// ------------ travel App ------------

function App() {

    const travelList = DataTravel.map(cardel => {
        return (
            <TravelCard 
                key={cardel.id}
                {...cardel}
                // image={cardel.image}
                // maplinke={cardel.maplinke}
                // location={cardel.location}
                // title={cardel.title}
                // date={cardel.date}
                // description={cardel.description}
            />)
    })

    return(
        <div className="container"> 
            <Header />
            {travelList}
        </div>
        )
}

// ------------ render App ------------

ReactDOM.render(<App />, document.getElementById("root"))

