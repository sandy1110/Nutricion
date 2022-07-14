import {Route, Routes} from "react-router-dom";
import { About } from "../Components/Pages/About";
import { Apply } from "../Components/Pages/Apply";
import { Contact } from "../Components/Pages/Contact";
import { Invest } from "../Components/Pages/Invest";

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
