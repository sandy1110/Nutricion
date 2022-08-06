import "./About.css";
import CryptoImage from "../../assets/CryptoImage.jpg"


export const About = () => {
    return (
        <div className="about-container">
            <div className="header-line">
                <img className="about-background" src={CryptoImage} />
                <h1 className="about-title">
                    We are criptofor <br /> mortgage
                </h1>
            </div>
            <div className="story">
                <h1 className="story-title">
                    Our Story
                </h1>
                <h2 className="story-text">
                    How have people survived all this time with a
                    traditional mortgage system? <br />
                    We have experienced the difficulties to request a mortgage, also we  <br />
                    have experienced the pain to invest in Real Estate <br /> <br /> <br />
                    This is the reason we built a platform where people can invest in Real Estate <br />
                    and also request a mortgage in the same place using crypto
                </h2>
            </div>
            <div className="we-do">
                <h1 className="we-do-title">
                    What we do
                </h1>
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
