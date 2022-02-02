// photo api

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        let image = data.urls.regular
        document.getElementById("containerEl").style.backgroundImage = `url(${image})`
        document.getElementById("image-metadata").innerHTML = `<p class="name">By: ${data.user.name}</p>`
    })
    .catch(err => {
        document.getElementById("containerEl").style.backgroundImage = `url(0100.jpg)`
    })


// another way to get time
// const date = new Date()
// console.log(date.toLocaleTimeString("en-us", {timeStyle: "short"}))

// time api
function time() {
    fetch("http://worldtimeapi.org/api/timezone/Africa/Casablanca")
    .then(res => res.json())
    .then(data => {
        let date = data.datetime.slice(0,10)
        let time = data.datetime.slice(11,16)
        document.getElementById("time").textContent = time
        document.getElementById("date").textContent = date
    })
    .catch(err => console.error(err))
}

setInterval(time, 1000)

// weather api
// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position)
// });
fetch("https://api.openweathermap.org/data/2.5/weather?q=rabat,ma&units=metric&APPID=787ccd529823b4bf356d0ae2ebd9ad79")
	.then(res => res.json())
	.then(data => {
        console.log(data)
		let humidity = data.main.humidity
		let temp = data.main.temp
		let city = data.name
		let country = data.sys.country
        let icon = data.weather[0].icon
		document.getElementById("weather").innerHTML = `
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
			<div>
                <p class="weather-p"><span>💧 humidity</span><span>${humidity}</span></p>
                <p class="weather-p"><span>🌡 temp</span><span>${temp}°</span></p>
                <p class="weather-p"><span>🌍 country</span><span>${country}</span></p>
                <p class="weather-p"><span>🌆 city</span><span>${city}</span></p>
            </div>
		`
	})
    .catch(err => console.error(err))

// crypto api

function crypto() {
    fetch("https://api.coingecko.com/api/v3/coins/monero")
	.then(res => {
        if(!res.ok) {
            throw Error("something go worng")
        }
        return res.json()
    })
	.then(data => {
        // console.log(data)
		let image = data.image.small
		let currentprice = data.market_data.current_price.usd
		let name = data.name
        let symbol = data.symbol
        let pricehigh = data.market_data.high_24h.usd
		let pricelow = data.market_data.low_24h.usd

		document.getElementById("crypto").innerHTML = `
        <img src="${image}" alt="">
            <div>
                <p>name: ${name}</p>
                <p>symbol: ${symbol}</p>
                <p>current price: <span class="currentprice">$ ${currentprice}</span></p>
                <p class="priceup">⏫ $ +${pricehigh}</p>
			    <p class="pricedown">⏬ $ -${pricelow}</p>
            </div>
		`
	})
    .catch(err => console.error(err))
}

setInterval(crypto, 1000)