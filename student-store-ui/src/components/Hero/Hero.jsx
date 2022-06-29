// import HeroImg from "./hero-img.jpg"
import "./Hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <p className="intro">Welcome to the Shop!</p>
            {/* <img className="hero-img" src={HeroImg} width={60} height={60}></img> */}
            <p className="intro-1">Where all you shopping needs are met!</p>
            {/* <img className="hero-img" src={HeroImg} ></img> */}
        </div>
    )

}