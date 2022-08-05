import "./About.css";
import CryptoImage from "../../assets/CryptoImage.jpg"

export const About = () => {
    return (
        <div className="about-container">
            <div className="header-line">
                <img className="about-background" src={CryptoImage}/>
                <h1 className="about-title">
                    We are criptofor <br/> mortgage
                </h1>
            </div>
            <div className="story">
                Our Story
            </div>
            <div className="we-do">
                What we do
            </div>
            <div className="testimony">
                Testimony here
            </div>
            <div className="our-team">
                Our team
            </div>

        </div>
    )
}
