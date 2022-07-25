import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField } from '@material-ui/core';

const initialValues={

    creditorName: '',
    monthlyPay: '',
    loanAmount: '',
    creditLimit: '',
    cName: '',
    mPay: '',
    lAmount: '',
    cLimit: '',
    name: '',
    payment: '',
    loan: '',
    credit: '',
}

export const OtherMortgageLoans = () => {
    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <TextField fullWidth
                        label="Creditor Name"
                        name='creditorName'
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
                            name='monthlyPay'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Loan Amount / Amount to be Drawn"
                            name='loanAmount'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Credit limit (if applicable)"
                            name='creditLimit'
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
                        name='cName'
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
                            name='mPay'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Loan Amount / Amount to be Drawn"
                            name='lAmount'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Credit limit (if applicable)"
                            name='cLimit'
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
                        name='name'
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
                            name='payment'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Loan Amount / Amount to be Drawn"
                            name='loan'
                            placeholder='$'
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Credit limit (if applicable)"
                            name='credit'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

