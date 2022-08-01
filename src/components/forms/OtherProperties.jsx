import React, { useState } from 'react';
import { FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
import { Box, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const initialValues ={
   
    notProperty: '',
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
    notProperty2: '',
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
    notProperty3: '',
    creditLimit2: '',
}



export const OtherProperties = () => {
    const [values, setValues] =useState(initialValues);
    const [state, setState] = useState('');
    const [paid, setPaid] = useState('');
    const [notProperty, setNotProperty] = useState(false);
    const [paidOff, setPaidOff] = useState(false);

    const handleProperty = () => {
        setNotProperty(!notProperty);
    };

    const handlePaidOff = () => {
        setPaidOff(!paidOff);
    };


    const handleStateChange = event => {
        setState(event.target.value);
    };

    const handlePaidChange = event => {
        setPaid(event.target.value);
    };

    const handleInputChange = event =>{
        const [name, value] = event.target;
        setValues([...values,
            [name].value
        ]);
    }
    return (
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:'#000'}}>
                <Box sx={{m:1}}>
                    <FormGroup sx={{p:3}}>
                        <FormControlLabel control={<Checkbox 
                            checked={notProperty}
                            onChange={handleProperty} />} label="I don´t own any additional property" />
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
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Unit #"
                        name='unit'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="City"
                        name='city'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        label="State"
                        name='state'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        label="Zip"
                        name='zip'
                        onChange={handleInputChange}
                        variant="standard"
                        type="number"
                    />
                    <TextField
                        label="Country"
                        name='country'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                    <Box sx={{width:"33%"}}>
                        <InputLabel>Status</InputLabel>
                        <Select fullWidth
                            label="Status"
                            name='status'
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Typography variant='subtitle'>For 2-4 Unit Primary or Investment Property</Typography>
                <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                    <TextField fullWidth
                        label="Monthly Rental Income"
                        name='rentalIncome'
                        onChange={handleInputChange}
                        variant="standard"
                        placeholder="$"
                    />
                    <Typography variant='subtitle'>Lender will calculate the New Monthly Rental Income</Typography>
                </Box>
                <Box display="flex" flexDirection="row" gridColumnGap={20}>
                    <TextField fullWidth
                        label="Creditor Name"
                        name='creditor'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField fullWidth
                        label="Account Number"
                        name='accountNum'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <InputLabel>Type</InputLabel>
                    <Select fullWidth
                        label="Type"
                        name='type'
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        variant="standard"
                        placeholder="$"
                    />
                    <TextField fullWidth
                        label="Unpaid Balance"
                        name='unpaidBalance'
                        onChange={handleInputChange}
                        variant="standard"
                        placeholder="$"
                    />
                    <FormGroup sx={{width:"20%", p:3}}>
                        <FormControlLabel control={<Checkbox 
                            checked={paidOff}
                            onChange={handlePaidOff} />} label="To be paid off at or before closing" />
                    </FormGroup>
                    <TextField fullWidth
                        label="Credit Limit"
                        name='creditLimit'
                        onChange={handleInputChange}
                        variant="standard"
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
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Unit #"
                        name='unit1'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="City"
                        name='city1'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        label="State"
                        name='state1'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        label="Zip"
                        name='zip1'
                        onChange={handleInputChange}
                        variant="standard"
                        type="number"
                    />
                    <TextField
                        label="Country"
                        name='country1'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                    <Box sx={{width:"33%"}}>
                        <InputLabel>Status</InputLabel>
                        <Select fullWidth
                            label="Status"
                            name='status1'
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Typography variant='subtitle'>For 2-4 Unit Primary or Investment Property</Typography>
                <Box display="flex" flexDirection="row" gridColumnGap={20} gridRowGap={20}>
                    <TextField fullWidth
                        label="Monthly Rental Income"
                        name='rentalIncome1'
                        onChange={handleInputChange}
                        variant="standard"
                        placeholder="$"
                    />
                    <Typography variant='subtitle'>Lender will calculate the New Monthly Rental Income</Typography>
                </Box>
                <Box display="flex" flexDirection="row" gridColumnGap={20}>
                    <TextField fullWidth
                        label="Creditor Name"
                        name='creditor1'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField fullWidth
                        label="Account Number"
                        name='accountNum1'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <InputLabel>Type</InputLabel>
                    <Select fullWidth
                        label="Type"
                        name='type1'
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        variant="standard"
                        placeholder="$"
                    />
                    <TextField fullWidth
                        label="Unpaid Balance"
                        name='unpaidBalance1'
                        onChange={handleInputChange}
                        variant="standard"
                        placeholder="$"
                    />
                    <FormGroup sx={{width:"20%", p:3}}>
                        <FormControlLabel control={<Checkbox 
                            checked={paidOff}
                            onChange={handlePaidOff} />} label="To be paid off at or before closing" />
                    </FormGroup>
                    <TextField fullWidth
                        label="Credit Limit"
                        name='creditLimit2'
                        onChange={handleInputChange}
                        variant="standard"
                        placeholder="$"
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