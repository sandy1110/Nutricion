import {Route, Routes} from "react-router-dom";
import { About } from "../components/pages/About";
import { Apply } from "../components/pages/Apply";
import { Contact } from "../components/pages/Contact";
import { Invest } from "../components/pages/Invest";

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
