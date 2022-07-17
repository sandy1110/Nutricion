import { CardProperty } from "./CardProperty"
import { Carousel } from "./Carousel"
import "./InvestProperties.css"


export const InvestProperties = () => {
  return (
    // <Carousel/>
    <div className="container">
        <nav>NavBar</nav>
        <main>Main</main>
        <div className="sidebar">
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
            <CardProperty/>
        </div>
        <footer>Footer</footer>
    </div>
  )
}
