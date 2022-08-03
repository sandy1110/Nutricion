import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';


const initialValues={
    creditorName: '',
    firstLien: '',
    monthlyPay: '',
    amount: '',
    creditLimit: '',
    creditorName1: '',
    firstLien1: '',
    monthlyPay1: '',
    amount1: '',
    creditLimit1: '',
    creditorName2: '',
    firstLien2: '',
    monthlyPay2: '',
    amount2: '',
    creditLimit2: '',
}

export const OtherMortgageLoans = () => {

    const [ formValues, setFormValues ] = useState(initialValues);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [ name ] : value
        });
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(formValues)
    }

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
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                        <TextField fullWidth
                            label="Creditor Name"
                            name='creditorName'
                            value={formValues.creditorName}
                            onChange={ onInputChange }
                        />
                        <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                            <FormLabel sx={{width:"20%"}}>Lien Type</FormLabel>
                            <RadioGroup row
                                name="firstLien"
                                value={formValues.firstLien}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="first" checked={formValues.firstLien==="first"} control={<Radio size='small'/>} label="First Lien" />
                                <FormControlLabel value="subordinate" checked={formValues.firstLien==="subordinate"} control={<Radio size='small'/>} label="Subordinate Lien" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField fullWidth
                                label="Monthly Payment"
                                name='monthlyPay'
                                value={formValues.monthlyPay}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Loan Amount / Amount to be Drawn"
                                name='amount'
                                value={formValues.amount}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Credit limit (if applicable)"
                                name='creditLimit'
                                value={formValues.creditLimit}
                                onChange={ onInputChange }
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
                            name='creditorName1'
                            value={formValues.creditorName1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                            <FormLabel sx={{width:"20%"}}>Lien Type</FormLabel>
                            <RadioGroup row
                                name="firstLien1"
                                value={formValues.firstLien1}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="first" checked={formValues.firstLien1==="first"} control={<Radio size='small'/>} label="First Lien" />
                                <FormControlLabel value="subordinate" checked={formValues.firstLien1==="subordinate"} control={<Radio size='small'/>} label="Subordinate Lien" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField fullWidth
                                label="Monthly Payment"
                                name='monthlyPay1'
                                value={formValues.monthlyPay1}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Loan Amount / Amount to be Drawn"
                                name='amount1'
                                value={formValues.amount1}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Credit limit (if applicable)"
                                name='creditLimit1'
                                value={formValues.creditLimit1}
                                onChange={ onInputChange }
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
                            name='creditorName2'
                            value={formValues.creditorName2}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                            <FormLabel sx={{width:"20%"}}>Lien Type</FormLabel>
                            <RadioGroup row
                                name="firstLien2"
                                value={formValues.firstLien2}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="first" checked={formValues.firstLien2==="first"} control={<Radio size='small'/>} label="First Lien" />
                                <FormControlLabel value="subordinate" checked={formValues.firstLien2==="subordinate"} control={<Radio size='small'/>} label="Subordinate Lien" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField fullWidth
                                label="Monthly Payment"
                                name='monthlyPay2'
                                value={formValues.monthlyPay2}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Loan Amount / Amount to be Drawn"
                                name='amount2'
                                value={formValues.amount2}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Credit limit (if applicable)"
                                name='creditLimit2'
                                value={formValues.creditLimit2}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Paper>
                <Box display="flex" justifyContent="flex-end" sx={{m:2}}>
                    <Button type="submit" variant="contained"> SAVE </Button>
                </Box>
            </Box>
        </form>
    )
}