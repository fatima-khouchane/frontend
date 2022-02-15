function Photo() {
    return (
        <div className="photo">
            <img src="./img/photo.jpg" alt="" />
        </div>
    )
}

function Info() {
    return (
        <div className="info">
            <h1 className="name">Lahcen Khouchane</h1>
            <p className="career">Frontend Developer</p>
            <a href="https://lahcen.net">lahcen.net</a>
        </div>
    )
}

function Contact() {
    return (
        <div className="contact">
            <a className="email--btn" href="mailto://lahcen.khouchane@gmail.com">
                <img src="./img/email.png" alt="" />
                <p>Email</p>
            </a>
            <a className="linkedin--btn" href="https://linkedin.com">
                <img src="./img/linkedin-logo.png" alt="" />
                <p>LinkedIn</p>
            </a>
        </div>
    )
}

function MoreInfo() {
    return (
        <div className="more-info">
        <div className="about">
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interste">
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>
    )
}

function SocialMedia() {
    return (
        <div className="social-media">
            <a href="https://twitter.com">
                <img src="./img/twitter-sign.png" alt="twitter" />
            </a>
            <a href="https://fb.com">
                <img src="./img/facebook.png" alt="facebook" />
            </a>
            <a href="https://instagram.com">
                <img src="./img/instagram.png" alt="instagram" />
            </a>
            <a href="https://github.com">
                <img src="./img/github-sign.png" alt="github" />
            </a>
        </div>
    )
}

function CardApp() {
    return (
        <div className="container">
            <Photo />
            <Info />
            <Contact />
            <MoreInfo />
            <SocialMedia />
        </div>
    )
}

ReactDOM.render(
    <CardApp />,
    document.getElementById("root")
)