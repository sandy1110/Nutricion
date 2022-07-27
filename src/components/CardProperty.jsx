import React from 'react'
import { Box, Button } from "@mui/material"
import "./CardProperties.css"

export const CardProperty = ({ propertyData }) => {

    const { img, id, value, area, capRate, address } = propertyData

    return (
        <Box className='box'>
            <img className="cardImg" src={img} alt="Property card"/>
            <div className='information'>
                <div className='mortgageId'>Mortgage ID {id}</div>
                <div className='propertyValue'>Value ${value} USD</div>
                <div className='area'>Area {area}</div>
                <div className='capRate'>Cap Rate: {capRate}</div>
                <div className='address'>Address: {address}</div>
                <div className='centerButton'>
                    <Button style={{backgroundColor: "orange",borderRadius: 35}} variant='contained' className='buttonInvest'>Invest</Button>
                </div>
            </div>
        </Box>
    )
}
