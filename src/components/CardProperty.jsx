import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { images } from '../Helpers/CarouselData'
import "./CardProperties.css"

export const CardProperty = () => {
    return (
        // <Box width='300px'>
        //     <Card>
        //         <CardMedia
        //             component='img'
        //             height='140px'
        //             image='https://source.unsplash.com/random' />
        //         <CardContent>
        //             <Typography gutterBottom variant='h5' component='div'>
        //                 React
        //             </Typography>
        //             <Typography variant='body2' color='text.secondary'>
        //                 React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
        //             </Typography>
        //         </CardContent>
        //         <CardActions>
        //             <Button size='small'>Share</Button>
        //             <Button size='small'>Learn More</Button>
        //         </CardActions>
        //     </Card>
        // </Box>
        <Box className='box'>
            <img src={images[0].img}/>
            <div className='information'>
                <div className='mortgageId'>Mortgage ID</div>
                <div className='propertyValue'>Value</div>
                <div className='area'>Area</div>
                <div className='capRate'>Cap Rate: </div>
                <div className='address'>Address:</div>
                <Button className='buttonInvest'>Invest</Button>
            </div>
        </Box>
    )
}
