import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, TextField, Typography } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

const initialValues={
    loanAmount: '',
    loanPurpose: '',
    loanOther: '',
    street: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    numbers: '',
    value: '',
    occupancy: '',
    businessProperty: '',
    manufacturedHome: '',

}

export const LoanAndProperty = () => {

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
        console.log(formValues);
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({formValues}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            fetch(process.env.REACT_APP_MORTGAGE_LOAN_PROPERTY_INFORMATION, requestOptions).then( console.log("Loan and Property information sent."));    
        }
        catch{
            alert("Error");
        }
    }

    const [loanPurpose, setLoanPurpose] = useState('');
    
    return(
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                        <Box display="flex" flexDirection= "row" gridColumnGap={15} alignItems="center" sx={{py:2}}>
                            <TextField 
                                label="Loan Amount"
                                name='loanAmount'
                                value={formValues.loanAmount}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <FormLabel>Loan Purpose</FormLabel>
                            <RadioGroup row
                                name="loanPurpose"
                                value={formValues.loanPurpose}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="purchase" checked={loanPurpose=="purchase"} control={<Radio size='small'/>} label="Purchase" />
                                <FormControlLabel value="refinance" checked={loanPurpose=="refinance"} control={<Radio size='small'/>} label="Refinance" />
                                <FormControlLabel value="other" checked={loanPurpose=="other"} control={<Radio size='small'/>} label="Other (specify)" />
                            </RadioGroup>
                            <TextField 
                                label=""
                                name='loanOther'
                                value={formValues.loanOther}
                                onChange={ onInputChange }
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
                                value={formValues.street}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <TextField
                                label="Unit #"
                                name='unit'
                                value={formValues.unit}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField
                                fullWidth
                                label="City"
                                name='city'
                                value={formValues.city}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <TextField
                                label="State"
                                name='state'
                                value={formValues.state}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <TextField
                                label="ZIP"
                                name='zip'
                                value={formValues.zip}
                                onChange={ onInputChange }
                                variant="standard"
                                type="number"
                            />
                            <TextField
                                label="Country"
                                name='country'
                                value={formValues.country}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField
                                fullWidth
                                label="Number of Units"
                                name='numbers'
                                value={formValues.numbers}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Property Value"
                                name='value'
                                value={formValues.value}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                        </Box>
                    </Box>
                    <FormLabel sx={{py:3}}> Occupancy </FormLabel>
                    <Box display="flex" flexDirection= "row" alignItems="center">
                        <RadioGroup row
                            name="occupancy"
                            value={formValues.occupancy}
                            onChange={ onInputChange }
                        >
                            <FormControlLabel value="primary" checked={formValues.occupancy=="primary"} control={<Radio size='small'/>} label="Primary Residence" />
                            <FormControlLabel value="second" checked={formValues.occupancy=="second"} control={<Radio size='small'/>} label="Second Home" />
                            <FormControlLabel value="investment" checked={formValues.occupancy=="investment"} control={<Radio size='small'/>} label="Investment Property" />
                            <FormControlLabel value="fhs" checked={formValues.occupancy=="fhs"} control={<Radio size='small'/>} label="FHS Secondary Residence" />
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
                            <RadioGroup row
                                name="businessProperty"
                                value={formValues.businessProperty}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="no" checked={formValues.businessProperty=="no"} control={<Radio size='small'/>} label="No" />
                                <FormControlLabel value="yes" checked={formValues.businessProperty=="yes"} control={<Radio size='small'/>} label="Yes" />
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
                            <RadioGroup row
                                name="manufacturedHome"
                                value={formValues.manufacturedHome}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="no" checked={formValues.manufacturedHome=="no"} control={<Radio size='small'/>} label="No" />
                                <FormControlLabel value="yes" checked={formValues.businessProperty=="yes"} control={<Radio size='small'/>} label="Yes" />
                            </RadioGroup>
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

