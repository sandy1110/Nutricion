import * as React from 'react';
import { Button } from "@mui/material"
import "./Home.css";
import Box from '@mui/material/Box';

export const Home = () => {

    const boxSX = {
        backgroundColor: "#ff914d",
        fontSize: "3em",
        "&:hover": {
          color: 'white',
          backgroundColor: '#ffbd59'
        },
        justifyContent: 'center',
        m: 4
      };


    return (
        <>
            <div className="homeTitle">Criptofor Mortgage</div>
            <div className="valueProposition">We connect mortgage companies, consumers and investors, without too much paper work.</div>
            <Box textAlign='center'>
                <Button variant="contained" sx={boxSX}>
                    Apply
                </Button>
                <Button variant="contained" sx={boxSX}>
                    Invest
                </Button>
            </Box>

        </>
    )
}
