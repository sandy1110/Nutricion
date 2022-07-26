import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { Box, Paper, TextField, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const initialValues ={
    name:'',
    alternateNames:'',
    age:'',
    sss:'',
    citizenship:'',
    credit:'',
    maritalStatus:'',
    otherBorrowes:'',
    dependents:'',
    street:'',
    unit:'',
    city:'',
    state:'',
    zip:'',
    country:'',

}

/*const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  });*/

export const Assets = () => {
    const [values, setValues] =useState(initialValues);
    const [type, setType] = React.useState('');
    const [select, setSelect] = React.useState('');
    const [asset, setAsset] = React.useState('');
    const [credit, setCredit] = React.useState('');
   
   

    const handleInputChange = event =>{
        const [name, value] = event.target;
        setValues([...values,
            [name].value
        ]);
    }

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelect(event.target.value);
    };

    const handleAssetChange = (event) => {
        setAsset(event.target.value);
    };
       
    const handleCreditChange = (event) => {
        setCredit(event.target.value);
    };

    return (
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
                            name='type'
                            value={type}
                            onChange={handleTypeChange}
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
                                onChange={handleInputChange}
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Account Number"
                                name='accountNumber'
                                onChange={handleInputChange}
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Cash or Market Value"
                                name='cash'
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
                            Include all assets and credits below. Under Assets or Credit Type, choose from the types listed here:
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
                            value={asset}
                            onChange={handleAssetChange}
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
                                name='assetType'
                                value={credit}
                                onChange={handleCreditChange}
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
                            name='cash'
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