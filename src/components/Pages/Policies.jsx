import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useForm from '../../hooks/useForm'
import "../Forms.css"
import { Typography, Paper } from '@mui/material';

export const Policies = () => {
    return (
        <Box sx={{display:"flex", flexDirection:"column", minHeight:"85vh", alignItems:"center", justifyContent: "center"}}>
                <Paper elevation={8}>
                    <Box sx={{background:"#ffbd59", py:3, px:6, borderRadius:1}}>
                        <Typography variant="h6" >Comming soon! This is a Demo, just play around.</Typography>
                    </Box>
                </Paper>
            </Box>
    )
}
