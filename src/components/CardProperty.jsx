import React from 'react'
import { Box, Button } from "@mui/material"
import "./CardProperties.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useMoralis } from "react-moralis";
import jsonMetadata from '../contracts/CriptoforMortgageDeFiABI.json';
import Moralis from "moralis";

export const CardProperty = ({ propertyData, mapLat, mapLng, setMapLat, setMapLng }) => {

    const {
        img,
        id,
        value,
        area,
        capRate,
        address,
        propertyLat,
        propertyLng,
        creditScore,
        downPayment,
        debtIncomeRatio,
    } = propertyData

    const handlePropertyClick = () => {
        setMapLat(propertyLat)
        setMapLng(propertyLng)
    }

    const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
    const appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
    const mortgageAddres = process.env.REACT_APP_MORTGAGE_CONTRACT_ADDRESS;

    Moralis.start({ serverUrl, appId });

    async function callMortgageContractTest(){
        const ABI = jsonMetadata;
        const OPTIONS = {
            contractAddress: mortgageAddres,
            functionName: "Invest",
            abi: ABI,
            msgValue: 100000000000000,
            params: {
                _mortgageId: 0
            }
        }
      console.log("send started")
      const transaction = await Moralis.executeFunction(OPTIONS);
      console.log("test (x): ", transaction);
    }

    return (
        <Box className='box'>
            <img className="cardImg" src={img} alt="Property card" />
            <div className='information'>
                <div className='mortgageId'>Mortgage ID {id}</div>
                <div className='propertyValue'>Value ${value} USD</div>
                <div className='area'>Dimension: {area} feat<sup>2</sup></div>
                <div className='capRate'>Interest Rate: {capRate}%</div>
                <div className='address'>Address: {address}</div>
                <div className='creditScore'>Credit score: {creditScore}</div>
                <div className='downPayment'>Down Payment: ${downPayment}</div>
                <div className='debtIncomeRatio'>Debt Income Ratio: {debtIncomeRatio}%</div>
                <div className='centerButton'>
                    <Button
                        style={{ backgroundColor: "orange", borderRadius: 35 }}
                        variant='contained'
                        className='buttonInvest'
                        onClick={callMortgageContractTest}
                    >
                        Invest
                    </Button>
                    <LocationOnIcon className='locationIcon' onClick={handlePropertyClick} />
                </div>
            </div>
        </Box>
    )
}
