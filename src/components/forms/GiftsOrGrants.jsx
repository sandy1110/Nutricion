import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';


const initialValues ={

    aType: '',
    source: '',
    cash: '',
    type: '',
    source2: '',
    cash2: '',
    type2: '',
    source3: '',
    cash3: '',

}

export const GiftsOrGrants = () => {
    const [deposited, setDeposited] = useState('');
    const [deposited1, setDeposited1] = useState('');
    const [deposited2, setDeposited2] = useState('');

    const handleDepositedChange = (event) => {
        setDeposited(event.target.value);
    };

    const handleDeposited1Change = (event) => {
        setDeposited1(event.target.value);
    };

    const handleDeposited2Change = (event) => {
        setDeposited2(event.target.value);
    };

    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <TextField fullWidth
                        label="Asset Type"
                        name='aType'
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                        <RadioGroup row
                            name="deposited"
                            value={deposited}
                            onChange={handleDepositedChange}
                        >
                            <FormControlLabel value="deposited" checked={deposited==="deposited"} control={<Radio size='small'/>} label="Deposited" />
                            <FormControlLabel value="notDeposited" checked={deposited==="notDeposited"} control={<Radio size='small'/>} label="Not Deposited" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Source"
                            name='source'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Cash or Market value"
                            name='cash'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <TextField fullWidth
                        label="Asset Type"
                        name='type'
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                        <RadioGroup row
                            name="deposited1"
                            value={deposited1}
                            onChange={handleDeposited1Change}
                        >
                            <FormControlLabel value="deposited" checked={deposited1==="deposited"} control={<Radio size='small'/>} label="Deposited" />
                            <FormControlLabel value="notDeposited" checked={deposited1==="notDeposited"} control={<Radio size='small'/>} label="Not Deposited" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Source"
                            name='source2'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Cash or Market value"
                            name='cash2'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <TextField fullWidth
                        label="Asset Type"
                        name='type2'
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                        <RadioGroup row
                            name="deposited2"
                            value={deposited2}
                            onChange={handleDeposited2Change}
                        >
                            <FormControlLabel value="deposited" checked={deposited2==="deposited"} control={<Radio size='small'/>} label="Deposited" />
                            <FormControlLabel value="notDeposited" checked={deposited2==="notDeposited"} control={<Radio size='small'/>} label="Not Deposited" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Source"
                            name='source3'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Cash or Market value"
                            name='cash3'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

