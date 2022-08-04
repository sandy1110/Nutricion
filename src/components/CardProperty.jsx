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
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
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
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}
