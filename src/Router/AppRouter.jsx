import {Route, Routes} from "react-router-dom";
import { About } from "../components/Pages/About";
import { Apply } from "../components/Pages/Apply";
import { Contact } from "../components/Pages/Contact";
import { Invest } from "../components/Pages/Invest";

export const AppRouter = () =>{
    return (
        <>
            <Routes>
                <Route path="/" element={<About />}></Route>
                <Route path="/apply" element={<Apply />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/invest" element={<Invest />}></Route>    
            </Routes>
        </>
    )
}
