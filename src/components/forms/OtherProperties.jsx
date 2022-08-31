import React, { useEffect, useState } from 'react';
import { FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
import { Box, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const initialValues ={
    notProperty: false,
    street: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    status: '',
    occupancy: '',
    taxes: '',
    rentalIncome: '',
    creditor: '',
    accountNum: '',
    type: '',
    monthlyMortgage: '',
    unpaidBalance: '',
    paidOff: false,
    creditLimit: '',
    street1: '',
    unit1: '',
    city1: '',
    state1: '',
    zip1: '',
    country1: '',
    status1: '',
    occupancy1: '',
    taxes1: '',
    rentalIncome1: '',
    creditor1: '',
    accountNum1: '',
    type1: '',
    monthlyMortgage1: '',
    unpaidBalance1: '',
    paidOff1: false,
    creditLimit2: '',
}


export const OtherProperties = () => {

    const [ formValues, setFormValues ] = useState(initialValues);
    const [ firstForm, setFirstForm ] = useState(true);
    const [ requestType, setRequestType ] = useState('POST');
    const [notProperty, setNotProperty] = useState(false);
    const [paidOff, setPaidOff] = useState(false);
    const [paidOff1, setPaidOff1] = useState(false);

    const url = process.env.REACT_APP_MORTGAGE_ADDITIONAL_PROPERTY_INFORMATION;
    const onLoadingForm = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        try{
            console.log("fetching information");
            fetch(url, requestOptions)
            .then((response) => response.json())
            .then((additionalPropertyRecord) => {
                const additionalPropertyData = additionalPropertyRecord["additional-property"];
                setNotProperty(additionalPropertyData.notProperty);
                setPaidOff(additionalPropertyData.paidOff);
                setPaidOff1(additionalPropertyData.paidOff1);
                console.log(additionalPropertyData);
                setFormValues(additionalPropertyData);
                setFirstForm(false);
                setRequestType('PATCH');
            });
        }catch (error){
            console.log ("error requesting information", error);
        }  
    }

    useEffect(() => {
        onLoadingForm();
    },[]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [ name ] : value
        });
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        formValues.notProperty=notProperty;
        formValues.paidOff = paidOff;
        formValues.paidOff1 = paidOff1;
        console.log(formValues);
        const requestOptions = {
            method: requestType,
            body: JSON.stringify({formValues}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        try{
            fetch(url, requestOptions).then( console.log("Other property information sent."));    
        }
        catch{
            alert("Error");
        }
    }

    const handleNotProperty = () => {
        setNotProperty(!notProperty);
    };

    const handlePaidOff = () => {
        setPaidOff(!paidOff);
    };

    const handlePaidOff1 = () => {
        setPaidOff1(!paidOff1);
    };

    return (
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:'#000'}}>
                    <Box sx={{m:1}}>
                        <FormGroup sx={{p:3}}>
                            <FormControlLabel control={<Checkbox 
                                checked={notProperty}
                                value={notProperty}
                                onChange={ handleNotProperty } />} label="I don´t own any additional property" />
                        </FormGroup>
                    </Box>
                </Paper>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" sx={{p:2, margin:2}} gridRowGap={15}>
                    <FormLabel sx={{p:3}}>Address</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Street"
                            name='street'
                            value={formValues.street}
                            onChange={ onInputChange }
                        />
                        <TextField
                            label="Unit #"
                            name='unit'
                            value={formValues.unit}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
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
                    <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                        <Box sx={{width:"33%"}}>
                            <InputLabel>Status</InputLabel>
                            <Select fullWidth
                                label="Status"
                                name='status'
                                value={formValues.status}
                                onChange={ onInputChange }
                            >
                                <MenuItem value={1}>Sold</MenuItem>
                                <MenuItem value={2}>Pending Sale</MenuItem>
                                <MenuItem value={3}>Retained</MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{width:"33%"}}>
                            <InputLabel>Intended Occupancy</InputLabel>
                            <Select fullWidth
                                label="Occupancy"
                                name='occupancy'
                                value={formValues.occupancy}
                                onChange={ onInputChange }
                            >
                                <MenuItem value={1}>Investment</MenuItem>
                                <MenuItem value={2}>Primary Residence</MenuItem>
                                <MenuItem value={3}>Second Home</MenuItem>
                                <MenuItem value={3}>Other</MenuItem>
                            </Select>
                        </Box>
                        <TextField fullWidth
                            label="Monthly Insurance, Taxes, etc."
                            name='taxes'
                            value={formValues.taxes}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                    </Box>
                    <Typography variant='subtitle'>For 2-4 Unit Primary or Investment Property</Typography>
                    <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                        <TextField fullWidth
                            label="Monthly Rental Income"
                            name='rentalIncome'
                            value={formValues.rentalIncome}
                            onChange={ onInputChange }
                            variant="standard"
                            placeholder="$"
                        />
                        <Typography variant='subtitle'>Lender will calculate the New Monthly Rental Income</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" gridColumnGap={20}>
                        <TextField fullWidth
                            label="Creditor Name"
                            name='creditor'
                            value={formValues.creditor}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Account Number"
                            name='accountNum'
                            value={formValues.accountNum}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <InputLabel>Type</InputLabel>
                        <Select fullWidth
                            label="Type"
                            name='type'
                            value={formValues.type}
                            onChange={ onInputChange }
                        >
                            <MenuItem value={1}>FHA</MenuItem>
                            <MenuItem value={2}>VA</MenuItem>
                            <MenuItem value={3}>Conventional</MenuItem>
                            <MenuItem value={4}>USDA-RD</MenuItem>
                            <MenuItem value={5}>Other</MenuItem>
                        </Select>
                    </Box>
                    <Box display="flex" flexDirection="row" gridColumnGap={20}>
                        <TextField fullWidth
                            label="Monthly Mortgage Payment"
                            name='monthlyMortgage'
                            value={formValues.monthlyMortgage}
                            onChange={ onInputChange }
                            variant="standard"
                            placeholder="$"
                        />
                        <TextField fullWidth
                            label="Unpaid Balance"
                            name='unpaidBalance'
                            value={formValues.unpaidBalance}
                            onChange={ onInputChange }
                            variant="standard"
                            placeholder="$"
                        />
                        <FormGroup sx={{width:"20%", p:3}}>
                            <FormControlLabel control={<Checkbox 
                                checked={paidOff}
                                value={paidOff}
                                onChange={ handlePaidOff }/>} label="To be paid off at or before closing" />
                        </FormGroup>
                        <TextField fullWidth
                            label="Credit Limit"
                            name='creditLimit'
                            value={formValues.creditLimit}
                            onChange={ onInputChange }
                            placeholder="$"
                        />
                    </Box>
                </Box>
                </Paper>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" sx={{p:2, margin:2}} gridRowGap={15}>
                    <FormLabel sx={{p:3}}>Address</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Street"
                            name='street1'
                            value={formValues.street1}
                            onChange={ onInputChange }
                        />
                        <TextField
                            label="Unit #"
                            name='unit1'
                            value={formValues.unit1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='city1'
                            value={formValues.city1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='state1'
                            value={formValues.state1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <TextField
                            label="ZIP"
                            name='zip1'
                            value={formValues.zip1}
                            onChange={ onInputChange }
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='country1'
                            value={formValues.country1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                        <Box sx={{width:"33%"}}>
                            <InputLabel>Status</InputLabel>
                            <Select fullWidth
                                label="Status"
                                name='status1'
                                value={formValues.status1}
                                onChange={ onInputChange }
                            >
                                <MenuItem value={1}>Sold</MenuItem>
                                <MenuItem value={2}>Pending Sale</MenuItem>
                                <MenuItem value={3}>Retained</MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{width:"33%"}}>
                            <InputLabel>Intended Occupancy</InputLabel>
                            <Select fullWidth
                                label="Occupancy"
                                name='occupancy1'
                                value={formValues.occupancy1}
                                onChange={ onInputChange }
                            >
                                <MenuItem value={1}>Investment</MenuItem>
                                <MenuItem value={2}>Primary Residence</MenuItem>
                                <MenuItem value={3}>Second Home</MenuItem>
                                <MenuItem value={3}>Other</MenuItem>
                            </Select>
                        </Box>
                        <TextField fullWidth
                            label="Monthly Insurance, Taxes, etc."
                            name='taxes1'
                            value={formValues.taxes1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                    </Box>
                    <Typography variant='subtitle'>For 2-4 Unit Primary or Investment Property</Typography>
                    <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                        <TextField fullWidth
                            label="Monthly Rental Income"
                            name='rentalIncome1'
                            value={formValues.rentalIncome1}
                            onChange={ onInputChange }
                            variant="standard"
                            placeholder="$"
                        />
                        <Typography variant='subtitle'>Lender will calculate the New Monthly Rental Income</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" gridColumnGap={20}>
                        <TextField fullWidth
                            label="Creditor Name"
                            name='creditor1'
                            value={formValues.creditor1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <TextField fullWidth
                            label="Account Number"
                            name='accountNum1'
                            value={formValues.accountNum1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <InputLabel>Type</InputLabel>
                        <Select fullWidth
                            label="Type"
                            name='type1'
                            value={formValues.type1}
                            onChange={ onInputChange }
                        >
                            <MenuItem value={1}>FHA</MenuItem>
                            <MenuItem value={2}>VA</MenuItem>
                            <MenuItem value={3}>Conventional</MenuItem>
                            <MenuItem value={4}>USDA-RD</MenuItem>
                            <MenuItem value={5}>Other</MenuItem>
                        </Select>
                    </Box>
                    <Box display="flex" flexDirection="row" gridColumnGap={20}>
                        <TextField fullWidth
                            label="Monthly Mortgage Payment"
                            name='monthlyMortgage1'
                            value={formValues.monthlyMortgage1}
                            onChange={ onInputChange }
                            variant="standard"
                            placeholder="$"
                        />
                        <TextField fullWidth
                            label="Unpaid Balance"
                            name='unpaidBalance1'
                            value={formValues.unpaidBalance1}
                            onChange={ onInputChange }
                            variant="standard"
                            placeholder="$"
                        />
                        <FormGroup sx={{width:"20%", p:3}}>
                            <FormControlLabel control={<Checkbox 
                                checked={paidOff1}
                                value={paidOff1}
                                onChange={ handlePaidOff1 }/>} label="To be paid off at or before closing" />
                        </FormGroup>
                        <TextField fullWidth
                            label="Credit Limit"
                            name='creditLimit2'
                            value={formValues.creditLimit2}
                            onChange={ onInputChange }
                            variant="standard"
                            placeholder="$"
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