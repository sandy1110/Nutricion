import React, { useState } from 'react';
import { Box, Paper, TextField, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const initialValues ={
    
    type: '',
    companyName: '',
    accountNumber: '',
    unpadeBalance: '',
    paid: '',
    payment: '',
    type2: '',
    payment2: '',

}

export const Liabilities = () => {
    const [values, setValues] =useState(initialValues);
    const [select, setSelect] =useState(initialValues);
    const [type, setType] =useState(initialValues);

    const handleInputChange = event =>{
        const [name, value] = event.target;
        setValues([...values,
            [name].value
        ]);
    }

    const handleSelectChange = (event) => {
        setSelect(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    return (
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                    <Box>
                        <Typography variant ='h6'>
                            List all liabilities below (except real estate) and include deferred payments. Under Account Type, choose from the types listed here:
                        </Typography>
                    </Box>
                    <Box sx={{width:"35%"}}>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Select Type</InputLabel>
                            <Select fullWidth
                            label="Select Type"
                            name='select'
                            value={select}
                            onChange={handleSelectChange}
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
                                onChange={handleInputChange}
                                variant="standard"
                            />
                        </FormControl>
                        <FormControl variant="standard" fullWidth>
                        <TextField fullWidth
                                label="Account Number"
                                name='accountNumber'
                                onChange={handleInputChange}
                                variant="standard"
                            />
                        </FormControl>
                    </Box> 
                    <Box display="flex" flexDirection="row" justifyContent="space-between" gridColumnGap={20}>
                            <TextField fullWidth
                                label="Unpaid Balance"
                                name='unpadeBalance'
                                onChange={handleInputChange}
                                variant="standard"
                                placeholder='$'
                            />
                            <TextField fullWidth
                                label="To be paid off at or before closing"
                                name='paid'
                                onChange={handleInputChange}
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Monthly Payment"
                                name='payment'
                                onChange={handleInputChange}
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
                            Include all other liabilities and expenses below. Choose from the types listed here: 
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" gridColumnGap={20}>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Select Type</InputLabel>
                            <Select fullWidth
                            label="Select Type"
                            name='type'
                            value={type}
                            onChange={handleTypeChange}
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
                                name='payment2'
                                onChange={handleInputChange}
                                variant="standard"
                                placeholder='$'
                            />
                    </Box> 
                </Box>
            </Paper>
        </Box>     
    )
  }