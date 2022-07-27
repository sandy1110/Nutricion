import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField } from '@material-ui/core';

export const GiftsOrGrants = () => {
    const [deposited, setDeposited] = useState('');

    const handleDepositedChange = (event) => {
        setDeposited(event.target.value);
    };

    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <TextField fullWidth
                        label="Asset Type"
                        name=''
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                        <RadioGroup row
                            name="deposited"
                            value={deposited}
                            onChange={handleDepositedChange}
                        >
                            <FormControlLabel value="deposited" checked={deposited=="deposited"} control={<Radio size='small'/>} label="Deposited" />
                            <FormControlLabel value="notDeposited" checked={deposited=="notDeposited"} control={<Radio size='small'/>} label="Not Deposited" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Source"
                            name='street'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Cash or Market value"
                            name='unit'
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
                        name=''
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Deposited" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Not Deposited" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Source"
                            name='street'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Cash or Market value"
                            name='unit'
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
                        name=''
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Deposited" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Not Deposited" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Source"
                            name='street'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Cash or Market value"
                            name='unit'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

