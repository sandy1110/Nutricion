import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';



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

    const [firstLien, setFirstLien] = useState('');
    const [firstLien1, setFirstLien1] = useState('');
    const [firstLien2, setFirstLien2] = useState('');
  

    const handleFirstLienChange = (event) => {
        setFirstLien(event.target.value);
    };


    const handleFirstLien1Change = (event) => {
        setFirstLien1(event.target.value);
    };


    const handleFirstLien2Change = (event) => {
        setFirstLien2(event.target.value);
    };


    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <TextField fullWidth
                        label="Creditor Name"
                        name='creditorName'
                    />
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel sx={{width:"20%"}}>Lien Type</FormLabel>
                        <RadioGroup row
                            name="firstLien"
                            value={firstLien}
                            onChange={handleFirstLienChange}
                        >
                            <FormControlLabel value="first" checked={firstLien==="first"} control={<Radio size='small'/>} label="First Lien" />
                            <FormControlLabel value="subordinate" checked={firstLien==="subordinate"} control={<Radio size='small'/>} label="Subordinate Lien" />
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
                        <RadioGroup row
                            name="firstLien1"
                            value={firstLien1}
                            onChange={handleFirstLien1Change}
                        >
                            <FormControlLabel value="first" checked={firstLien1==="first"} control={<Radio size='small'/>} label="First Lien" />
                            <FormControlLabel value="subordinate" checked={firstLien1==="subordinate"} control={<Radio size='small'/>} label="Subordinate Lien" />
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
                        <RadioGroup row
                            name="firstLien2"
                            value={firstLien2}
                            onChange={handleFirstLien2Change}
                        >
                            <FormControlLabel value="first" checked={firstLien2==="first"} control={<Radio size='small'/>} label="First Lien" />
                            <FormControlLabel value="subordinate" checked={firstLien2==="subordinate"} control={<Radio size='small'/>} label="Subordinate Lien" />
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
            <Box display="flex" justifyContent="flex-end" sx={{m:2}}>
                <Button variant="contained"> SAVE </Button>
            </Box>
        </Box>
    )
}

