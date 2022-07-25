import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField, Typography } from '@material-ui/core';

export const LoanAndProperty = () => {
    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <Box display="flex" flexDirection= "row" gridColumnGap={15} alignItems="center" sx={{py:2}}>
                        <TextField 
                            label="Loan Amount"
                            name=''
                            variant="standard"
                        />
                        <FormLabel>
                            Loan Purpose
                        </FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Purhcase" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Refinance" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Other (specify)" />
                        </RadioGroup>
                        <TextField 
                            label=""
                            name=''
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" flexDirection="column">
                    <FormLabel>Property Address</FormLabel>
                    <Box display="flex" gridColumnGap={1} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Street"
                            name='street'
                            variant="standard"
                        />
                        <TextField
                            label="Unit #"
                            name='unit'
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='city'
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='state'
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='zip'
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='country'
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Number of Units"
                            name='street'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Property Value"
                            name='unit'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                </Box>
                <FormLabel sx={{py:3}}> Occupancy </FormLabel>
                <Box display="flex" flexDirection= "row" alignItems="center">
                    <RadioGroup row>
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Primary Residence" />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Second Home" />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Investment Property" />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="FHS Secondary Residence" />
                    </RadioGroup>
                </Box>
            </Box>
            </Paper>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:2, margin:2}}>
                    <Typography variant="subtitle">
                       1. Mixed-Use Property
                    </Typography>
                    <Box display="flex" flexDirection= "row" alignItems="center">
                        <FormLabel sx={{width:"80%"}}> 
                            If you will occupy the property, will you set aside space within the property to operate
                            your own business? <em>(e.g. daycare, medical office, beauty/barber shop)</em>
                        </FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="No" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                        </RadioGroup>
                    </Box>
                    <Typography variant="subtitle">
                       1. Manufactured Home
                    </Typography>
                    <Box display="flex" flexDirection= "row" alignItems="center">
                        <FormLabel sx={{width:"80%"}}> 
                            Is the property a manufactured home
                            <em>(e.g. a factory built dwelling built on a permanent chasis)</em>
                        </FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="No" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                        </RadioGroup>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

