
import "./Carousel.css"
import { images } from '../Helpers/CarouselData'
import { useState } from "react"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

export const Carousel = () => {

    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div className="carousel">
            <div className="carouselInner" style={{ backgroundImage: `url(${images[currentImage].img})` }}>
                <div className="left" onClick={() => {
                    currentImage > 0 && setCurrentImage(currentImage - 1)
                }}>
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
                </div>
                <div className="center">
                    <h1>{images[currentImage].title}</h1>
                    <p>{images[currentImage].subtitle}</p>
                    <div className="moreInfo">
                        <ArrowBackIosIcon className="moreInfoArrow"/>
                    </div>
                </div>
                <div className="right" onClick={() => {
                    currentImage < images.length - 1 && setCurrentImage(currentImage + 1)
                }}>
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    )
}
