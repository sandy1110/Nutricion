import React, { useState } from 'react';
import { Box, Paper, TextField, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';

const initialValues ={
    accountsType: '',
    financialInstitution: '',
    accountNumber: '',
    accountsCash: '',
    sType: '',
    assetType: '',
    creditType: '',
    assetCash: '',
}

export const Assets = () => {

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
            fetch(process.env.REACT_APP_MORTGAGE_ASSETS_INFORMATION, requestOptions).then( console.log("Assets information sent."));    
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
                                Include all accounts bellow. Under Account Type, choose from the types listed here:
                            </Typography>
                        </Box>
                        <Box sx={{width:"35%"}}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel>Account Type</InputLabel>
                                <Select fullWidth
                                label="Select Type"
                                name='accountsType'
                                value={formValues.accountsType}
                                onChange={ onInputChange }
                                >
                                <MenuItem value={1}>Checking</MenuItem>
                                <MenuItem value={2}>Savings</MenuItem>
                                <MenuItem value={3}>Money Market</MenuItem>
                                <MenuItem value={4}>Certificate of Deposit</MenuItem>
                                <MenuItem value={5}>Mutual Fund</MenuItem>
                                <MenuItem value={6}>Stocks</MenuItem>
                                <MenuItem value={7}>Stock Options</MenuItem>
                                <MenuItem value={8}>Bonds</MenuItem>
                                <MenuItem value={9}>Retirement <em> (eg. 401k, IRA)</em></MenuItem>
                                <MenuItem value={10}>Bridge Loan Proceeds</MenuItem>
                                <MenuItem value={11}>Idividual Development</MenuItem>
                                <MenuItem value={12}>Account</MenuItem>
                                <MenuItem value={13}>Trust Account</MenuItem>
                                <MenuItem value={14}>Cash Value of Life Insurance <em>(used for the transaction)</em></MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" gridColumnGap={20}>
                                <TextField fullWidth
                                    label="Financial Institution"
                                    name='financialInstitution'
                                    value={formValues.financialInstitution}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <TextField fullWidth
                                    label="Account Number"
                                    name='accountNumber'
                                    value={formValues.accountNumber}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <TextField fullWidth
                                    label="Cash or Market Value"
                                    name='accountsCash'
                                    value={formValues.accountsCash}
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
                                Include all assets and credits below. Under Assets or Credit Type, choose from the types listed here:
                            </Typography>
                        </Box>
                        <Box sx={{width:"35%"}}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel>Select Type</InputLabel>
                                <Select fullWidth
                                label="Select Type"
                                name='sType'
                                value={formValues.sType}
                                onChange={ onInputChange }
                                >
                                <MenuItem value={1}>Asset</MenuItem>
                                <MenuItem value={2}>Credit</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display="flex" flexDirection="row" gridColumnGap={20}>
                            <FormControl variant="standard" fullWidth>
                            <InputLabel>Asset Type</InputLabel>
                                <Select 
                                name='assetType'
                                value={formValues.assetType}
                                onChange={ onInputChange }
                                >
                                <MenuItem value={1}>Proceeds from Real Estate Property to be sold on or before closing</MenuItem>
                                <MenuItem value={2}>Proceeds from Sale of Non-Real Estate Asset</MenuItem>
                                <MenuItem value={3}>Secured Borrowed Funds</MenuItem>
                                <MenuItem value={4}>Unsecured Borrowed Funds</MenuItem>
                                <MenuItem value={5}>Other</MenuItem>
                                </Select>
                            </FormControl>
                                <FormControl variant="standard" fullWidth>
                                <InputLabel>Credit Type</InputLabel>
                                    <Select
                                    name='creditType'
                                    value={formValues.creditType}
                                    onChange={ onInputChange }
                                    >
                                    <MenuItem value={1}>Earnest Money</MenuItem>
                                    <MenuItem value={2}>Employer Assistance</MenuItem>
                                    <MenuItem value={3}>Lot Equity</MenuItem>
                                    <MenuItem value={4}>Relocation Funds</MenuItem>
                                    <MenuItem value={5}>Rent Credit</MenuItem>
                                    <MenuItem value={6}>Sweat Equity</MenuItem>
                                    <MenuItem value={7}>Trade Equity</MenuItem>
                                    </Select>
                                </FormControl>
                        </Box> 
                        <Box display="flex" sx={{p:2, margin:1}} justifyContent="flex-end" gridColumnGap={10}>
                            <TextField
                                label="Cash or Market Value"
                                name='assetCash'
                                value={formValues.assetCash}
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