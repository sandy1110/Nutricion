import React, { useEffect, useState } from 'react';
import { Box, Paper, TextField, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';


const initialValues ={
    type: '',
    companyName: '',
    accountNumber: '',
    unpaidBalance: '',
    paid: '',
    payment: '',
    belowType: '',
    belowPayment: '',
}

export const Liabilities = () => {

    const [ formValues, setFormValues ] = useState(initialValues);
    const [ requestType, setRequestType ] = useState('POST');
    const [ firstForm, setFirstForm ] = useState(true);

    const url = process.env.REACT_APP_MORTGAGE_LIABILITIES_INFORMATION;

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
            fetch(url, requestOptions).then((response) => response.json())
            .then((liabilitiesRecord) => {
                const liabilitiesData = liabilitiesRecord["liabilities"];
                setFirstForm(false);
                setRequestType('PATCH');
                if(liabilitiesData){
                    console.log(liabilitiesData);
                    setFormValues(liabilitiesData);
                }
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
            fetch(url, requestOptions).then( console.log("Liabilities information sent."));    
        }
        catch{
            alert("Error");
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                        <Box>
                            <Typography variant ='h6'>
                                List all liabilities below (except real estate) and include deferred payments.
                            </Typography>
                        </Box>
                        <Box sx={{width:"35%"}}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel>Select Type</InputLabel>
                                <Select fullWidth
                                label="Select Type"
                                name='type'
                                value={formValues.type}
                                onChange={ onInputChange }
                                >
                                <MenuItem value={1}>Revolving</MenuItem>
                                <MenuItem value={2}>Installment</MenuItem>
                                <MenuItem value={3}>Open 30-Day</MenuItem>
                                <MenuItem value={4}>Lease</MenuItem>
                                <MenuItem value={5}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display="flex" flexDirection="row" gridColumnGap={20}>
                            <FormControl variant="standard" fullWidth>
                            <TextField fullWidth
                                    label="Company Name"
                                    name='companyName'
                                    value={formValues.companyName}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                            </FormControl>
                            <FormControl variant="standard" fullWidth>
                            <TextField fullWidth
                                    label="Account Number"
                                    name='accountNumber'
                                    value={formValues.accountNumber}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                            </FormControl>
                        </Box> 
                        <Box display="flex" flexDirection="row" justifyContent="space-between" gridColumnGap={20}>
                                <TextField fullWidth
                                    label="Unpaid Balance"
                                    name='unpaidBalance'
                                    value={formValues.unpaidBalance}
                                    onChange={ onInputChange }
                                    variant="standard"
                                    placeholder='$'
                                />
                                <TextField fullWidth
                                    label="To be paid off at or before closing"
                                    name='paid'
                                    value={formValues.paid}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <TextField fullWidth
                                    label="Monthly Payment"
                                    name='payment'
                                    value={formValues.payment}
                                    onChange={ onInputChange }
                                    variant="standard"
                                    placeholder='$'
                                />
                        </Box>      
                    </Box>
                </Paper>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                        <Box>
                            <Typography variant ='h6'>
                                Include all other liabilities and expenses below.
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row" gridColumnGap={20}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel>Select Type</InputLabel>
                                <Select fullWidth
                                label="Select Type"
                                name='belowType'
                                value={formValues.belowType}
                                onChange={ onInputChange }
                                >
                                <MenuItem value={1}>Alimony</MenuItem>
                                <MenuItem value={2}>Child Support</MenuItem>
                                <MenuItem value={3}>Separate Maitenance</MenuItem>
                                <MenuItem value={4}>Job Related Expenses</MenuItem>
                                <MenuItem value={5}>Other</MenuItem>
                                </Select>                            
                            </FormControl>
                            <TextField 
                                    label="Monthly Payment"
                                    value={formValues.belowPayment}
                                    name='belowPayment'
                                    onChange={ onInputChange }
                                    variant="standard"
                                    placeholder='$'
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