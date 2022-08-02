import * as React from 'react';
import { Button } from "@mui/material"
import "./Home.css";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";

export const Home = () => {

    const boxSX = {
        backgroundColor: "#ff914d",
        fontSize: "3em",
        "&:hover": {
          color: 'white',
          backgroundColor: '#ffbd59'
        },
        justifyContent: 'center',
        m: 2
      };

      const useStyles = makeStyles((theme) => ({
        navlinks: {
          marginLeft: theme.spacing(5),
          display: "flex",
        },
       logo: {
          flexGrow: "1",
          cursor: "pointer",
        },
        link: {
          textDecoration: "none",
          color: "white",
          fontSize: "20px",
          marginLeft: theme.spacing(0),
          "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
          },
          loginButton: {
              color: "#ffbd59"
          }
        },
      }));

      const classes = useStyles();


    return (
        <>
            <div className="homeTitle">Criptofor Mortgage</div>
            <div className="valueProposition">We connect mortgage companies, consumers and investors, paperless.</div>
            <Box textAlign='center'>

                <a href="https://546vypkn49k.typeform.com/to/ZtrgEeFd"  target="_blank" className={classes.link}>
                  <Button  variant="contained" sx={boxSX}>
                    Apply
                  </Button>
                </a>

                <Link to="/invest" className={classes.link} >
                    <Button variant="contained" sx={boxSX}>
                        Invest
                    </Button>
                </Link>
            </Box>

        </>
    )
}
