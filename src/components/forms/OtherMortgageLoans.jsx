import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField } from '@material-ui/core';

export const OtherMortgageLoans = () => {
    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <TextField fullWidth
                        label="Creditor Name"
                        name=''
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Lien Type</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="First Lien" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Subordinate Lien" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Monthly Payment"
                            name='street'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Loan Amount / Amount to be Drawn"
                            name='unit'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Credit limit (if applicable)"
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
                        label="Creditor Name"
                        name=''
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Lien Type</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="First Lien" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Subordinate Lien" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Monthly Payment"
                            name='street'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Loan Amount / Amount to be Drawn"
                            name='unit'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Credit limit (if applicable)"
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
                        label="Creditor Name"
                        name=''
                        variant="standard"
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Lien Type</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="First Lien" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Subordinate Lien" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <TextField fullWidth
                            label="Monthly Payment"
                            name='street'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Loan Amount / Amount to be Drawn"
                            name='unit'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Credit limit (if applicable)"
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

