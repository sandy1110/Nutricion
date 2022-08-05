import React from 'react'
import { Box, Button } from "@mui/material"
import "./CardProperties.css"
import jsonMetadata from '../contracts/CriptoforMortgageDeFiABI.json';
import Moralis from "moralis";
import { useState } from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


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

    async function callMortgageContractTest(amount) {
        const eth = amount / 1750;
        const wei = eth * 1000000000000000000;
        const ABI = jsonMetadata;
        const OPTIONS = {
            contractAddress: mortgageAddres,
            functionName: "Invest",
            abi: ABI,
            msgValue: wei,
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

    const [favorite, setFavorite] = useState(false)

    const handleFavorite = () => {
        setFavorite(!favorite)
    }

    const [percentage, setPercentage] = useState();
    const [amount, setAmount] = useState(0);

    const handlePercentage = (e) => {
        const op = e * propertyData.value;
        setAmount(op);
        setPercentage(e);
        console.log(op);
    }

    return (
        <Box className='box' onClick={handlePropertyClick}>
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
                    <Box display="flex" flexDirection="column" sx={{pt:2}}>
                        <Typography variant="body2" color="text.secondary">SELECT A PERCENTAGE TO INVEST</Typography>
                        <Box display="flex" flexDirection="row" alignItems="end">
                            <FormControl variant="standard" sx={{width:"40%"}}>
                                <Select
                                label="Percentage"
                                name='percentage'
                                value={percentage}
                                onChange={(e)=>handlePercentage(e.target.value)}
                                >
                                    <MenuItem value={0.1}>10%</MenuItem>
                                    <MenuItem value={0.25}>25%</MenuItem>
                                    <MenuItem value={0.5}>50%</MenuItem>
                                    <MenuItem value={0.75}>75%</MenuItem>
                                    <MenuItem value={1}>100%</MenuItem>
                                </Select>
                            </FormControl>
                            <InputLabel sx={{pl:4}}>Amount: ${amount}</InputLabel>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon onClick={handleFavorite} className={(favorite ? "favorite-added":"")}/>
                    </IconButton>
                    <div className='centerButton'>
                        <Button
                            style={{ backgroundColor: "orange", borderRadius: 35 }}
                            variant='contained'
                            className='buttonInvest'
                            onClick={() => callMortgageContractTest(amount)}
                            disabled={amount == 0}
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
