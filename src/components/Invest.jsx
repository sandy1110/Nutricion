import { Container } from "@mui/material"
import { InvestForm } from "./InvestForm"
import { InvestProperties } from "./InvestProperties"
import "./Invest.css"


export const Invest = () => {
    //To become a valid user you must have coins or being in the list (TBD)
    const validUser = true

    return (
        <Container className="container">
            {!validUser && <InvestForm />}
            {validUser && <InvestProperties />}
        </Container>

    )
}
