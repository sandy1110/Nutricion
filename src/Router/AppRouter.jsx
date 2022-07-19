import {Route, Routes} from "react-router-dom";
import { About } from "../components/Pages/About";
import { Contact } from "../components/Pages/Contact";
import { Invest } from "../components/Pages/Invest";
import { Home } from "../components/Pages/Home";
import { Layout } from "../components/Pages/Layout";

export const AppRouter = () =>{
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/apply" element={<Layout />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/invest" element={<Invest />}></Route>
            </Routes>
        </>
    )
}
