import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, InputLabel, MenuItem, Paper, Radio, Select, TextField, Typography } from '@material-ui/core';

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

export const PersonalInformation = () => {
    const [values, setValues] =useState(initialValues);

    const handleInputChange = event =>{
        const [name, value] = event.target;
        setValues([...values,
            [name].value
        ]);
    }
    return (
        <Box display="flex" flexDirection="column" gridRowGap={10}>
        <Paper sx={{backgroundColor:"black"}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"60%"}}>
                    <TextField
                        fullWidth
                        variant="standard"
                        label="Name"
                        name='name'
                        onChange={handleInputChange}
                        placeholder="(First, Middle, Last)"
                    />
                    <TextField
                        fullWidth
                        label="Alternate Names"
                        name='alternateNames'
                        onChange={handleInputChange}
                        placeholder="Any names under which credit was previously received"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Social Security Number"
                        name='sss'
                        onChange={handleInputChange}
                        placeholder="or Individual Taxpayer Identification Number"
                        variant="standard"
                        /*InputProps={{
                            inputComponent: NumberFormatCustom,
                          }}  */                
                    />
                    <Box display="flex" flexDirection="row" gridColumnGap={15}>
                        <FormControl variant="standard" sx={{py:2, minWidth: 200 }} fullWidth>
                            <InputLabel>Citizenship</InputLabel>
                            <Select
                            label="citizenship"
                            name='citizenship'
                            onChange={handleInputChange}
                            >
                            <MenuItem value={1}>U.S Citizen</MenuItem>
                            <MenuItem value={2}>Permanent Resident Alien</MenuItem>
                            <MenuItem value={3}>Non-Permanent Resident Alien</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Date of Birth"
                            name='dateOfBirth'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Box>
                </Box>
                <Box sx={{p:2, margin:2, width:"40%"}}>
                    <FormLabel>Contact Information</FormLabel>
                    <TextField
                        fullWidth
                        label="Home phone"
                        name='homePhone'
                        onChange={handleInputChange}
                        placeholder="(___)___-_______"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Cell phone"
                        name='cellPhone'
                        onChange={handleInputChange}
                        placeholder="(___)___-_______"
                        variant="standard"
                    />
                    <Box display="flex" flexDirection="row" gridColumnGap={15}>
                        <TextField
                            fullWidth
                            label="Work phone"
                            name='workPhone'
                            onChange={handleInputChange}
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Ext."
                            name='ext'
                            onChange={handleInputChange}
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                    </Box>
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"50%"}}>
                    <FormControl>
                        <FormLabel>Type of Credit</FormLabel>
                        <RadioGroup 
                            name='credit'
                            onChange={handleInputChange}
                        >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="I'm applying for individual credit." />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="I'm applying for joint credit" />
                        </RadioGroup>
                    </FormControl>
                    
                </Box>
                <Box sx={{p:2, margin:2, width:"50%"}}>
                    <TextField
                        fullWidth
                        label="Names of Other Borrower(s)"
                        placeholder="(First, Middle, Last, Suffix)"
                        variant="standard"
                        name='otherBorrowers'
                        onChange={handleInputChange}
                    />
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <FormControl>
                        <FormLabel>Marital Status</FormLabel>
                        <RadioGroup
                            name='maritalStatus'
                            onChange={handleInputChange}
                        >
                            <FormControlLabel value="married" control={<Radio size='small'/>} label="Married" />
                            <FormControlLabel value="separated" control={<Radio size='small'/>} label="Separated" />
                            <FormControlLabel value="unmarried" control={<Radio size='small'/>} label="Unmarried" />
                            <InputLabel>Single, Widowed, Divorced, Civil Union, Domestic Partnership</InputLabel>
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Total Number of Borrowers: "
                        name='borrowers'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <InputLabel>Dependents (not listed by another borrower)</InputLabel>
                    <TextField
                        label="Number"
                        variant="standard"
                        name='dependents'
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Ages"
                        multiline
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                <FormLabel>Current Address</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="Street"
                        name='street'
                        onChange={handleInputChange}
                        variant="standard"
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
                <FormLabel>How long at Current Address?</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        label="Years"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        label="Months"
                        multiline
                        variant="standard"
                    />
                    <FormLabel sx={{m:2}}>Housing</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="currentHousing"
                    >
                        <FormControlLabel value="no" control={<Radio />} label="No primary housing expese" />
                        <FormControlLabel value="own" control={<Radio />} label="Own" />
                        <FormControlLabel value="rent" control={<Radio />} label="Rent" />
                    </RadioGroup>
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                <FormLabel>If at Current Address for LESS than 2 years, list Former Address</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="Street"
                        name='street'
                        onChange={handleInputChange}
                        variant="standard"
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
                <FormLabel>How long at Current Address?</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        label="Years"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        label="Months"
                        multiline
                        variant="standard"
                    />
                    <FormLabel sx={{m:2}}>Housing</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="currentHousing"
                    >
                        <FormControlLabel value="no" control={<Radio />} label="No primary housing expese" />
                        <FormControlLabel value="own" control={<Radio />} label="Own" />
                        <FormControlLabel value="rent" control={<Radio />} label="Rent" />
                    </RadioGroup>
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                <FormLabel>Mailing Address <em> if different from Current Address</em></FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="Street"
                        name='street'
                        onChange={handleInputChange}
                        variant="standard"
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
            </Box>
        </Paper>
        </Box>
    )
  }