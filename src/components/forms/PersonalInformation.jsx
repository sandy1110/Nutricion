import React, { useState } from 'react';
import { TextField, Paper } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import Radio from '@mui/material/Radio';

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
    const [dateOfBirth, setDateOfBirth] = useState(new Date());

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
        <Box sx={{display:'flex', flexDirection:'column', gridRowGap:25}}>
        <Paper elevation={4} sx={{width:"100%", marginTop:3}}>
            <Box sx={{display:'flex', flexDirection:'row', gridColumnGap:35, m:3}}>
                <Box sx={{display:'flex', flexDirection:'column', gridRowGap:8, width:"64%"}}>
                    <TextField fullWidth color="warning"
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
                        color="warning"
                    />
                    <TextField
                        fullWidth
                        label="Social Security Number"
                        name='sss'
                        onChange={handleInputChange}
                        placeholder="or Individual Taxpayer Identification Number"
                        variant="standard"  
                        color="warning"          
                    />
                    <Box sx={{ display:"flex", flexDirection:"row", gridColumnGap:15, py:1}}>
                        <FormControl variant="standard" color="warning" sx={{minWidth: 200 }} fullWidth>
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
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker disableFuture
                            label="Date of Birth"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={dateOfBirth}
                            onChange={(newValue) => {
                                setDateOfBirth(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", gridRowGap:18, width:"36%"}}>
                    <FormLabel>Contact Information</FormLabel>
                    <TextField
                        fullWidth
                        label="Home phone"
                        name='homePhone'
                        onChange={handleInputChange}
                        placeholder="(___)___-_______"
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        fullWidth
                        label="Cell phone"
                        name='cellPhone'
                        onChange={handleInputChange}
                        placeholder="(___)___-_______"
                        variant="standard"
                        color="warning"
                    />
                    <Box display="flex" flexDirection="row" gridColumnGap={15}>
                        <TextField
                            fullWidth
                            label="Work phone"
                            name='workPhone'
                            onChange={handleInputChange}
                            placeholder="(___)___-_______"
                            variant="standard"
                            color="warning"
                        />
                        <TextField
                            fullWidth
                            label="Ext."
                            name='ext'
                            onChange={handleInputChange}
                            placeholder="(___)___-_______"
                            variant="standard"
                            color="warning"
                        />
                    </Box>
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper elevation={3} sx={{width:"100%"}}>
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
                        color="warning"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper elevation={3} sx={{width:"100%"}}>
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
                            <FormLabel>Single, Widowed, Divorced, Civil Union, Domestic Partnership</FormLabel>
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Total Number of Borrowers: "
                        name='borrowers'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <InputLabel>Dependents (not listed by another borrower)</InputLabel>
                    <TextField
                        label="Number"
                        variant="standard"
                        name='dependents'
                        onChange={handleInputChange}
                        color="warning"
                    />
                    <TextField
                        label="Ages"
                        multiline
                        variant="standard"
                        name='ages'
                        color="warning"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper elevation={3} sx={{width:"100%"}}>
            <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                <FormLabel>Current Address</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="Street"
                        name='street'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="Unit #"
                        name='unit'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="City"
                        name='city'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="State"
                        name='state'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="Zip"
                        name='zip'
                        onChange={handleInputChange}
                        variant="standard"
                        type="number"
                        color="warning"
                    />
                    <TextField
                        label="Country"
                        name='country'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
                <FormLabel>How long at Current Address?</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        label="Years"
                        multiline
                        variant="standard"
                        name="years"
                        color="warning"
                    />
                    <TextField
                        label="Months"
                        multiline
                        variant="standard"
                        name="months"
                        color="warning"
                    />
                    <FormLabel sx={{m:2}}>Housing</FormLabel>
                    <RadioGroup row
                        name="currentHousing"
                        value={currentHousing}
                        onChange={(e) => handleCurrentHousingChange(e)}
                    >
                        <FormControlLabel value="no" checked={currentHousing === "no"} control={<Radio />} label="No primary housing expense" />
                        <FormControlLabel value="own" checked={currentHousing === "own"} control={<Radio />} label="Own" />
                        <FormControlLabel value="rent" checked={currentHousing === "rent"} control={<Radio />} label="Rent" />
                    </RadioGroup>
                </Box>
            </Box>
        </Paper>
        <Paper elevation={3} sx={{width:"100%"}}>
            <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                <FormLabel>If at Current Address for LESS than 2 years, list Former Address</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="Street"
                        name='street1'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="Unit #"
                        name='unit1'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="City"
                        name='city1'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="State"
                        name='state1'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="Zip"
                        name='zip1'
                        onChange={handleInputChange}
                        variant="standard"
                        type="number"
                        color="warning"
                    />
                    <TextField
                        label="Country"
                        name='country1'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
                <FormLabel>How long at Current Address?</FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        label="Years1"
                        multiline
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="Months1"
                        multiline
                        variant="standard"
                        color="warning"
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
        <Paper elevation={3} sx={{width:"100%"}}>
            <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                <FormLabel>Mailing Address <em> if different from Current Address</em></FormLabel>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="Street"
                        name='street2'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="Unit #"
                        name='unit2'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
                <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                    <TextField
                        fullWidth
                        label="City"
                        name='city2'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="State"
                        name='state2'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        label="Zip"
                        name='zip2'
                        onChange={handleInputChange}
                        variant="standard"
                        type="number"
                        color="warning"
                    />
                    <TextField
                        label="Country"
                        name='country2'
                        onChange={handleInputChange}
                        variant="standard"
                        color="warning"
                    />
                </Box>
            </Box>
        </Paper>
        </Box>
    )
  }
