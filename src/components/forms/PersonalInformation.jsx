import React, { useState } from 'react';
import { TextField, Paper } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, InputLabel, MenuItem, Select } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

export const PersonalInformation = () => {

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
        creditType: '',
        otherBorrower: '',
        maritalStatus: '',
        borrower: '',
        dependents: '',
        ages: '',
        currentStreet: '',
        currentUnit: '',
        currentCity: '',
        currentState: '',
        currentZip: '',
        currentCountry: '',
        currentYears: '',
        currentMonths: '',
        currentHousing: '',
        formerStreet: '',
        formerUnit: '',
        formerCity: '',
        formerState: '',
        formerZip: '',
        formerCountry: '',
        formerYears: '',
        formerMonths: '',
        formerAddress: '',
        mailinStreet: '',
        mailinUnit: '',
        mailinCity: '',
        mailinState: '',
        mailinZip: '',
        mailinCountry: '',
    };
    
    const [name, setName] = useState('');
    const [alternateNames, setAleternateNames] = useState('');
    const [sss, setSss] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [homePhone, setHomePhone] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [workPhone, setWorkPhone] = useState('');
    const [ext, setExt] = useState('');
    const [email, setEmail] = useState('');
    const [creditType, setCreditType] = useState('');
    const [otherBorrower, setOtherBorrower] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [borrower, setBorrower] = useState('');
    const [dependents, setDependents] = useState('');
    const [ages, setAges] = useState('');
    const [currentStreet, setCurrentStreet] = useState('');
    const [currentUnit, setCurrentUnit] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [currentState, setCurrentState] = useState('');
    const [currentZip, setCurrentZip] = useState('');
    const [currentCountry, setCurrentCountry] = useState('');
    const [currentYears, setCurrentYears] = useState('');
    const [currentMonths, setCurrentMonths] = useState('');
    const [currentHousing, setCurrentHousing] = useState('');
    const [formerStreet, setFormerStreet] = useState('');
    const [formerUnit, setFormerUnit] = useState('');
    const [formerCity, setFormerCity] = useState('');
    const [formerState, setFormerState] = useState('');
    const [formerZip, setFormerZip] = useState('');
    const [formerCountry, setFormerCountry] = useState('');
    const [formerYears, setFormerYears] = useState('');
    const [formerMonths, setFormerMonths] = useState('');
    const [formerAddress, setFormerAddress] = useState('');
    const [mailingStreet, setMailingStreet] = useState('');
    const [mailingUnit, setMailingUnit] = useState('');
    const [mailingCity, setMailingCity] = useState('');
    const [mailingState, setMailingState] = useState('');
    const [mailingZip, setMailingZip] = useState('');
    const [mailingCountry, setMailingCountry] = useState('');
  

    const handleName = (event) =>{
        initialValues.name = event;
        setName(event);
    }   

    const handleAlternateNames = (event) =>{
        initialValues.alternateNames = event;
        setAleternateNames(event);
    }
    
    const handleSss = (event) =>{
        initialValues.sss = event;
        setSss(event);
    }

    const handleCitizenship = (event) =>{
        initialValues.citizenship = event;
        setCitizenship(event);
    }

    const handleDateOfBirth = (event) =>{
        initialValues.dateOfBirth = event;
        setDateOfBirth(event);
    }

    const handleHomePhone = (event) =>{
        initialValues.homePhone = event;
        setHomePhone(event);
    }

    const handleCellPhone = (event) =>{
        initialValues.cellPhone = event;
        setCellPhone(event);
    }

    const handleWorkPhone = (event) =>{
        initialValues.workPhone = event;
        setWorkPhone(event);
    }

    const handleExt = (event) =>{
        initialValues.ext = event;
        setExt(event);
    }

    const handleEmail = (event) =>{
        initialValues.email = event;
        setEmail(event);
    }

    const handleCreditType = (event) => {
        initialValues.creditType = event;
        setCreditType(event);
    };

    const handleOtherBorrower= (event) =>{
        initialValues.otherBorrower = event;
        setOtherBorrower(event);
    }

    const handleMaritalStatus = (event) =>{
        initialValues.maritalStatus = event;
        setMaritalStatus(event);
    }

    const handleBorrower = (event) =>{
        initialValues.borrower = event;
        setBorrower(event);
    }

    const handleDependents = (event) =>{
        initialValues.dependents = event;
        setDependents(event);
    }

    const handleAges = (event) =>{
        initialValues.ages = event;
        setAges(event);
    }

    const handleCurrentStreet = (event) =>{
        initialValues.currentStreet = event;
        setCurrentStreet(event);
    }

    const handleCurrentUnit = (event) =>{
        initialValues.currentUnit = event;
        setCurrentUnit(event);
    }

    const handleCurrentCity = (event) =>{
        initialValues.currentCity = event;
        setCurrentCity(event);
    }

    const handleCurrentState = (event) =>{
        initialValues.currentState = event;
        setCurrentState(event);
    }

    const handleCurrentZip = (event) =>{
        initialValues.currentZip = event;
        setCurrentZip(event);
    }

    const handleCurrentCountry= (event) =>{
        initialValues.currentCountry = event;
        setCurrentCountry(event);
    }

    const handleCurrentYears = (event) =>{
        initialValues.currentYears = event;
        setCurrentYears(event);
    }

    const handleCurrentMonths = (event) =>{
        initialValues.currentMonths = event;
        setCurrentMonths(event);
    }

    const handleCurrentHousing = (event) =>{
        initialValues.currentHousing = event;
        setCurrentHousing(event);
    }

    const handleFormerStreet = (event) =>{
        initialValues.formerStreet = event;
        setFormerStreet(event);
    }

    const handleFormerUnit = (event) =>{
        initialValues.formerUnit = event;
        setFormerUnit(event);
    }

    const handleFormerCity = (event) =>{
        initialValues.formerCity = event;
        setFormerCity(event);
    }

    const handleFormerState = (event) =>{
        initialValues.formerState = event;
        setFormerState(event);
    }

    const handleFormerZip = (event) =>{
        initialValues.formerZip = event;
        setFormerZip(event);
    }

    const handleFormerCountry = (event) =>{
        initialValues.formerCountry = event;
        setFormerCountry(event);
    }

    const handleFormerYears = (event) =>{
        initialValues.formerYears = event;
        setFormerYears(event);
    }

    const handleFormerMonths = (event) =>{
        initialValues.formerMonths = event;
        setFormerMonths(event);
    }

    const handleFormerAddress = (event) =>{
        initialValues.formerAddress = event;
        setFormerAddress(event);
    }

    const handleMailingStreet = (event) =>{
        initialValues.mailingStreet = event;
        setMailingStreet(event);
    }

    const handleMailingUnit = (event) =>{
        initialValues.mailingUnit = event;
        setMailingUnit(event);
    }

    const handleMailingCity = (event) =>{
        initialValues.mailingCity = event;
        setMailingCity(event);
    }

    const handleMailingState = (event) =>{
        initialValues.mailingState = event;
        setMailingState(event);
    }

    const handleMailingZip = (event) =>{
        initialValues.mailingZip = event;
        setMailingZip(event);
    }

    const handleMailingCountry = (event) =>{
        initialValues.MailingCountry = event;
        setMailingCountry(event);
    }    
    
    return (
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{width:"100%", marginTop:3}}>
                <Box display="flex" flexDirection="row" gridColumnGap={40} sx={{m:3}}>
                    <Box display="flex" flexDirection="column" gridRowGap={8} justifyContent="flex-end" sx={{ width:"64%"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Name"
                            name='name'
                            value={name}
                            onChange={(e)=>handleName(e.target.value)}
                            placeholder="(First, Middle, Last)"
                        />
                        <TextField
                            fullWidth
                            label="Alternate Names"
                            name='alternateNames'
                            value={alternateNames}
                            onChange={(e)=>handleAlternateNames(e.target.value)}
                            placeholder="Any names under which credit was previously received"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Social Security Number"
                            name='sss'
                            value={sss}
                            onChange={(e)=>handleSss(e.target.value)}
                            placeholder="or Individual Taxpayer Identification Number"
                            variant="standard"            
                        />
                        <Box display="flex" flexDirection="row" gridColumnGap={15} sx={{py:2}}>
                            <FormControl variant="standard" sx={{minWidth: 200 }} fullWidth>
                                <InputLabel>Citizenship</InputLabel>
                                <Select
                                label="citizenship"
                                name='citizenship'
                                value={citizenship}
                                onChange={(e)=>handleCitizenship(e.target.value)}
                                >
                                <MenuItem value={1}>U.S Citizen</MenuItem>
                                <MenuItem value={2}>Permanent Resident Alien</MenuItem>
                                <MenuItem value={3}>Non-Permanent Resident Alien</MenuItem>
                                </Select>
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                disableFuture
                                label="Date of Birth"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={dateOfBirth}
                                onChange={(newValue) => {
                                    handleDateOfBirth(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" gridRowGap={18} sx={{width:"36%"}}>
                        <FormLabel>Contact Information</FormLabel>
                        <TextField
                            fullWidth
                            label="Home phone"
                            name='homePhone'
                            value={homePhone}
                            onChange={(e)=>handleHomePhone(e.target.value)}
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Cell phone"
                            name='cellPhone'
                            value={cellPhone}
                            onChange={(e)=>handleCellPhone(e.target.value)}
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                        <Box display="flex" flexDirection="row" gridColumnGap={15}>
                            <TextField
                                fullWidth
                                label="Work phone"
                                name='workPhone'
                                value={workPhone}
                                onChange={(e)=>handleWorkPhone(e.target.value)}
                                placeholder="(___)___-_______"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Ext."
                                name='ext'
                                value={ext}
                                onChange={(e)=>handleExt(e.target.value)}
                                placeholder="(___)___-_______"
                                variant="standard"
                            />
                        </Box>
                        <TextField
                            fullWidth
                            label="Email"
                            name='email'
                            value={email}
                            onChange={(e)=>handleEmail(e.target.value)}
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}}>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"50%"}}>
                        <FormControl>
                            <FormLabel>Type of Credit</FormLabel>
                            <RadioGroup
                                name='creditType'
                                value={creditType}
                                onChange={(e)=>handleCreditType(e.target.value)}
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
                            name='otherBorrower'
                            value={otherBorrower}
                            onChange={(e)=>handleOtherBorrower(e.target.value)}
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}}>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"70%"}}>
                        <FormControl>
                            <FormLabel>Marital Status</FormLabel>
                            <RadioGroup
                                name='maritalStatus'
                                value={maritalStatus}
                                onChange={(e) => handleMaritalStatus(e)}
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
                            name='borrower'
                            value={borrower}
                            onChange={(e)=>handleBorrower(e.target.value)}
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{p:2, margin:2, width:"30%"}}>
                        <InputLabel>Dependents (not listed by another borrower)</InputLabel>
                        <TextField
                            label="Number"
                            variant="standard"
                            name='dependents'
                            value={dependents}
                            onChange={(e)=>handleDependents(e.target.value)}
                        />
                        <TextField
                            label="Ages"
                            multiline
                            variant="standard"
                            name='ages'
                            value={ages}
                            onChange={(e)=>handleAges(e.target.value)}
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}}>
                <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                    <FormLabel>Current Address</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Street"
                            name='currentStreet'
                            value={currentStreet}
                            onChange={(e)=>handleCurrentStreet(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="Unit #"
                            name='currentUnit'
                            value={currentUnit}
                            onChange={(e)=>handleCurrentUnit(e.target.value)}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='currentCity'
                            value={currentCity}
                            onChange={(e)=>handleCurrentCity(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='currentState'
                            value={currentState}
                            onChange={(e)=>handleCurrentState(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='currentZip'
                            value={currentZip}
                            onChange={(e)=>handleCurrentZip(e.target.value)}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='currentCountry'
                            value={currentCountry}
                            onChange={(e)=>handleCurrentCountry(e.target.value)}
                            variant="standard"
                        />
                    </Box>
                    <FormLabel>How long at Current Address?</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            label="Years"
                            multiline
                            variant="standard"
                            name="currentYears"
                            value={currentYears}
                            onChange={(e)=>handleCurrentYears(e.target.value)}
                        />
                        <TextField
                            label="Months"
                            multiline
                            variant="standard"
                            name="currentMonths"
                            value={currentMonths}
                            onChange={(e)=>handleCurrentMonths(e.target.value)}
                        />
                        <FormLabel sx={{m:2}}>Housing</FormLabel>
                        <RadioGroup row
                            name="currentHousing"
                            value={currentHousing}
                            onChange={(e) => handleCurrentHousing(e)}
                        >
                            <FormControlLabel value="no" checked={currentHousing === "no"} control={<Radio />} label="No primary housing expense" />
                            <FormControlLabel value="own" checked={currentHousing === "own"} control={<Radio />} label="Own" />
                            <FormControlLabel value="rent" checked={currentHousing === "rent"} control={<Radio />} label="Rent" />
                        </RadioGroup>
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}}>
                <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                    <FormLabel>If at Current Address for LESS than 2 years, list Former Address</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Street"
                            name='formerStreet'
                            value={formerStreet}
                            onChange={(e)=>handleFormerStreet(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="Unit #"
                            name='formerUnit'
                            value={formerUnit}
                            onChange={(e)=>handleFormerUnit(e.target.value)}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='formerCity'
                            value={formerCity}
                            onChange={(e)=>handleFormerCity(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='formerState'
                            value={formerState}
                            onChange={(e)=>handleFormerState(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='formerZip'
                            value={formerZip}
                            onChange={(e)=>handleFormerZip(e.target.value)}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='formerCountry'
                            value={formerCountry}
                            onChange={(e)=>handleFormerCountry(e.target.value)}
                            variant="standard"
                        />
                    </Box>
                    <FormLabel>How long at Current Address?</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            label="Years"
                            name='formerYears'
                            value={formerYears}
                            multiline
                            onChange={(e)=>handleFormerYears(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="Months"
                            name='formerMonths'
                            value={formerMonths}
                            onChange={(e)=>handleFormerMonths(e.target.value)}
                            multiline
                            variant="standard"
                        />
                        <FormLabel sx={{m:2}}>Housing</FormLabel>
                        <RadioGroup row
                            name="formerAddress"
                            value={formerAddress}
                            onChange={(e) => handleFormerAddress(e)}
                        >
                            <FormControlLabel value="no" checked={formerAddress==="no"} control={<Radio />} label="No primary housing expense" />
                            <FormControlLabel value="own" checked={formerAddress==="own"} control={<Radio />} label="Own" />
                            <FormControlLabel value="rent" checked={formerAddress==="rent"} control={<Radio />} label="Rent" />
                        </RadioGroup>
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}}>
                <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                    <FormLabel>Mailing Address <em> if different from Current Address</em></FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Street"
                            name='mailingStreet'
                            value={mailingStreet}
                            onChange={(e)=>handleMailingStreet(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="Unit #"
                            name='mailingUnit'
                            value={mailingUnit}
                            onChange={(e)=>handleMailingUnit(e.target.value)}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='mailingCity'
                            value={mailingCity}
                            onChange={(e)=>handleMailingCity(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='mailingState'
                            value={mailingState}
                            onChange={(e)=>handleMailingState(e.target.value)}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='mailingZip'
                            value={mailingZip}
                            onChange={(e)=>handleMailingZip(e.target.value)}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='mailingCountry'
                            value={mailingCountry}
                            onChange={(e)=>handleMailingCountry(e.target.value)}
                            variant="standard"
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
