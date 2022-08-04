import React from 'react'
import { Box, Button } from "@mui/material"
import "./CardProperties.css"
import { useMoralis } from "react-moralis";
import jsonMetadata from '../contracts/CriptoforMortgageDeFiABI.json';
import Moralis from "moralis";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';



export const CardProperty = ({ propertyData, mapLat, mapLng, setMapLat, setMapLng }) => {

    const {
        img,
        id,
        value,
        dimension,
        capRate,
        address,
        propertyLat,
        propertyLng,
        creditScore,
        downPayment,
        debtIncomeRatio,
        description
    } = propertyData

    const handlePropertyClick = () => {
        setMapLat(propertyLat)
        setMapLng(propertyLng)
    }

    const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
    const appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
    const mortgageAddres = process.env.REACT_APP_MORTGAGE_CONTRACT_ADDRESS;

    Moralis.start({ serverUrl, appId });

    async function callMortgageContractTest() {
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

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box className='box' onClick={handlePropertyClick}>
            {/* <img className="cardImg" src={img} alt="Property card" />
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
                </div>
            </div> */}
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        </Avatar>
                    }
                    title={address}
                    subheader={`Mortgage ID: ${id}`}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <div className='container-cardProperty'>
                            <div className='up-left'>Value:<br />${value} USD</div>
                            <div className='up-right'>Interest Rate: <br /> {capRate}%</div>
                            <div className='down-left'>Credit score: <br /> {creditScore}</div>
                            <div className='down-right'>Down payment: <br /> ${downPayment} USD</div>
                        </div>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className='buttons-actions'>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <div className='centerButton'>
                        <Button
                            style={{ backgroundColor: "orange", borderRadius: 35 }}
                            variant='contained'
                            className='buttonInvest'
                            onClick={callMortgageContractTest}
                        >
                            Invest
                        </Button>
                    </div>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {description}
                        </Typography>
                        <Typography>
                            <ul>
                                <li>Dimension: {dimension} feat<sup>2</sup></li>
                                <li>Debt Income Ratio: {debtIncomeRatio}%</li>
                            </ul>
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}
