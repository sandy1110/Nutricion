import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';

const initialValues ={
   
    name: '',
    alternateNames: '',
    sss: '',
    citizenship: '',
    dateOfBirth: '',
    homePhone: '',
    cellPhone: '',
    workPhone: '',
    ext: '',
    email: '',
    credit: '',
    otherBorrower: '',
    maritalStatus: '',
    borrower: '',
    dependents: '',
    ages: '',
    street: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    years: '',
    months: '',
    currentHousing: '',
    street2: '',
    unit2: '',
    city2: '',
    state2: '',
    zip2: '',
    country2: '',
    street1: '',
    unit1: '',
    city1: '',
    state1: '',
    zip1: '',
    country1: '',
    years1: '',
    months1: '',
    currentHousing1: '',

}

export const PersonalInformation = () => {
    const [values, setValues] =useState(initialValues);
    const [creditType, setCreditType] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [currentHousing, setCurrentHousing] = useState('');
    const [formerAddress, setFormerAddress] = useState('');

    const handleCreditTypeChange = (event) => {
        setCreditType(event.target.value);
    };

    const handleMaritalStatusChange = (event) => {
        setMaritalStatus(event.target.value);
    };

    const handleCurrentHousingChange = (event) => {
        setCurrentHousing(event.target.value);
    };

    const handleFormerAddressChange = (event) => {
        setFormerAddress(event.target.value);
    };

    const handleInputChange = event =>{
        const [name, value] = event.target;
        setValues([...values,
            [name].value
        ]);
    }
    return (
        <>
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
                            name='creditType'
                            value={creditType}
                            onChange={handleCreditTypeChange}
                        >
                            <FormControlLabel checked={creditType==='individual'} value='individual' control={<Radio size='small'/>} label="I'm applying for individual credit." />
                            <FormControlLabel checked={creditType==='joint'} value='joint' control={<Radio size='small'/>} label="I'm applying for joint credit" />
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
                            value={maritalStatus}
                            onChange={(e) => handleMaritalStatusChange(e)}
                        >
                            <FormControlLabel value="married" checked={maritalStatus==="married"} control={<Radio size='small'/>} label="Married" />
                            <FormControlLabel value="separated" checked={maritalStatus==="separated"} control={<Radio size='small'/>} label="Separated" />
                            <FormControlLabel value="unmarried" checked={maritalStatus==="unmarried"} control={<Radio size='small'/>} label="Unmarried" />
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
                        name='ages'
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
                        name="years"
                    />
                    <TextField
                        label="Months"
                        multiline
                        variant="standard"
                        name="months"
                    />
                    <FormLabel sx={{m:2}}>Housing</FormLabel>
                    <RadioGroup row
                        name="currentHousing"
                        value={currentHousing}
                        onChange={(e) => handleCurrentHousingChange(e)}
                    >
                        <FormControlLabel value="no" checked={currentHousing === "no"} control={<Radio />} label="No primary housing expense" />
                        <FormControlLabel value="own" checked={currentHousing === "no"} control={<Radio />} label="Own" />
                        <FormControlLabel value="rent" checked={currentHousing === "no"} control={<Radio />} label="Rent" />
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
                        name='street1'
                        onChange={handleInputChange}
                        variant="standard"
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
                <FormLabel>How long at Current Address?</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        label="Years1"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        label="Months1"
                        multiline
                        variant="standard"
                    />
                    <FormLabel sx={{m:2}}>Housing</FormLabel>
                    <RadioGroup row
                        name="formerAddress"
                        value={formerAddress}
                        onChange={(e) => handleFormerAddressChange(e)}
                    >
                        <FormControlLabel value="no" checked={formerAddress==="no"} control={<Radio />} label="No primary housing expense" />
                        <FormControlLabel value="own" checked={formerAddress==="own"} control={<Radio />} label="Own" />
                        <FormControlLabel value="rent" checked={formerAddress==="rent"} control={<Radio />} label="Rent" />
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
                        name='street2'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        label="Unit #"
                        name='unit2'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="City"
                        name='city2'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        label="State"
                        name='state2'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        label="Zip"
                        name='zip2'
                        onChange={handleInputChange}
                        variant="standard"
                        type="number"
                    />
                    <TextField
                        label="Country"
                        name='country2'
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        </Box>
        </>
    )
  }
