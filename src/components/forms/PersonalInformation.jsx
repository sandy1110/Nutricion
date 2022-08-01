import React, { useState } from 'react';
import { TextField, Paper } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

const initialValues = {
    name: '',
    alternateNames: '',
    sss: '',
    citizenship: '',
    dateOfBirth: new Date(),
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

export const PersonalInformation = () => {

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
        console.log(formValues)
    }
    
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
    <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{width:"100%", marginTop:3}} elevation={3}>
                <Box display="flex" flexDirection="row" gridColumnGap={40} sx={{m:3}}>
                    <Box display="flex" flexDirection="column" gridRowGap={8} justifyContent="flex-end" sx={{ width:"64%"}}>
                        <TextField fullWidth
                            variant="standard"
                            label="Name"
                            name="name"
                            value={formValues.name}
                            onChange={ onInputChange }
                            placeholder="(First, Middle, Last)"
                        />
                        <TextField
                            fullWidth
                            label="Alternate Names"
                            name='alternateNames'
                            value={formValues.alternateNames}
                            onChange={onInputChange}
                            placeholder="Any names under which credit was previously received"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Social Security Number"
                            name='sss'
                            value={formValues.sss}
                            onChange={onInputChange}
                            placeholder="or Individual Taxpayer Identification Number"
                            variant="standard"            
                        />
                        <Box display="flex" flexDirection="row" gridColumnGap={15} sx={{py:2}}>
                            <FormControl variant="standard" sx={{minWidth: 200 }} fullWidth>
                                <InputLabel>Citizenship</InputLabel>
                                <Select
                                label="citizenship"
                                name='citizenship'
                                value={formValues.citizenship}
                                onChange={onInputChange}
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
                                value={formValues.dateOfBirth}
                                onChange={onInputChange}
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
                            value={formValues.homePhone}
                            onChange={onInputChange}
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Cell phone"
                            name='cellPhone'
                            value={formValues.cellPhone}
                            onChange={onInputChange}
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                        <Box display="flex" flexDirection="row" gridColumnGap={15}>
                            <TextField
                                fullWidth
                                label="Work phone"
                                name='workPhone'
                                value={formValues.workPhone}
                                onChange={onInputChange}
                                placeholder="(___)___-_______"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Ext."
                                name='ext'
                                value={formValues.ext}
                                onChange={onInputChange}
                                placeholder="(___)___-_______"
                                variant="standard"
                            />
                        </Box>
                        <TextField
                            fullWidth
                            label="Email"
                            name='email'
                            value={formValues.email}
                            onChange={onInputChange}
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}} elevation={3}>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"50%"}}>
                        <FormControl>
                            <FormLabel>Type of Credit</FormLabel>
                            <RadioGroup
                                name='creditType'
                                value={formValues.creditType}
                                onChange={onInputChange}
                            >
                                <FormControlLabel checked={formValues.creditType==='individual'} value='individual' control={<Radio size='small'/>} label="I'm applying for individual credit." />
                                <FormControlLabel checked={formValues.creditType==='joint'} value='joint' control={<Radio size='small'/>} label="I'm applying for joint credit" />
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
                            value={formValues.otherBorrower}
                            onChange={onInputChange}
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}} elevation={3}>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"70%"}}>
                        <FormControl>
                            <FormLabel>Marital Status</FormLabel>
                            <RadioGroup
                                name='maritalStatus'
                                value={formValues.maritalStatus}
                                onChange={onInputChange}
                            >
                                <FormControlLabel value="married" checked={formValues.maritalStatus==="married"} control={<Radio size='small'/>} label="Married" />
                                <FormControlLabel value="separated" checked={formValues.maritalStatus==="separated"} control={<Radio size='small'/>} label="Separated" />
                                <FormControlLabel value="unmarried" checked={formValues.maritalStatus==="unmarried"} control={<Radio size='small'/>} label="Unmarried" />
                                <InputLabel>Single, Widowed, Divorced, Civil Union, Domestic Partnership</InputLabel>
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Total Number of Borrowers: "
                            name='borrower'
                            value={formValues.borrower}
                            onChange={onInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{p:2, margin:2, width:"30%"}}>
                        <InputLabel>Dependents (not listed by another borrower)</InputLabel>
                        <TextField
                            label="Number"
                            variant="standard"
                            name='dependents'
                            value={formValues.dependents}
                            onChange={onInputChange}
                        />
                        <TextField
                            label="Ages"
                            multiline
                            variant="standard"
                            name='ages'
                            value={formValues.ages}
                            onChange={onInputChange}
                        />
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}} elevation={3}>
                <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                    <FormLabel>Current Address</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Street"
                            name='currentStreet'
                            value={formValues.currentStreet}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Unit #"
                            name='currentUnit'
                            value={formValues.currentUnit}
                            onChange={onInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='currentCity'
                            value={formValues.currentCity}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='currentState'
                            value={formValues.currentState}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='currentZip'
                            value={formValues.currentZip}
                            onChange={onInputChange}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='currentCountry'
                            value={formValues.currentCountry}
                            onChange={onInputChange}
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
                            value={formValues.currentYears}
                            onChange={onInputChange}
                        />
                        <TextField
                            label="Months"
                            multiline
                            variant="standard"
                            name="currentMonths"
                            value={formValues.currentMonths}
                            onChange={onInputChange}
                        />
                        <FormLabel sx={{m:2}}>Housing</FormLabel>
                        <RadioGroup row
                            name="currentHousing"
                            value={formValues.currentHousing}
                            onChange={onInputChange}
                        >
                            <FormControlLabel value="no" checked={formValues.currentHousing === "no"} control={<Radio />} label="No primary housing expense" />
                            <FormControlLabel value="own" checked={formValues.currentHousing === "own"} control={<Radio />} label="Own" />
                            <FormControlLabel value="rent" checked={formValues.currentHousing === "rent"} control={<Radio />} label="Rent" />
                        </RadioGroup>
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}} elevation={3}>
                <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                    <FormLabel>If at Current Address for LESS than 2 years, list Former Address</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Street"
                            name='formerStreet'
                            value={formValues.formerStreet}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Unit #"
                            name='formerUnit'
                            value={formValues.formerUnit}
                            onChange={onInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='formerCity'
                            value={formValues.formerCity}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='formerState'
                            value={formValues.formerState}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='formerZip'
                            value={formValues.formerZip}
                            onChange={onInputChange}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='formerCountry'
                            value={formValues.formerCountry}
                            onChange={onInputChange}
                            variant="standard"
                        />
                    </Box>
                    <FormLabel>How long at Current Address?</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            label="Years"
                            name='formerYears'
                            value={formValues.formerYears}
                            multiline
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Months"
                            name='formerMonths'
                            value={formValues.formerMonths}
                            onChange={onInputChange}
                            multiline
                            variant="standard"
                        />
                        <FormLabel sx={{m:2}}>Housing</FormLabel>
                        <RadioGroup row
                            name="formerAddress"
                            value={formValues.formerAddress}
                            onChange={onInputChange}
                        >
                            <FormControlLabel value="no" checked={formValues.formerAddress==="no"} control={<Radio />} label="No primary housing expense" />
                            <FormControlLabel value="own" checked={formValues.formerAddress==="own"} control={<Radio />} label="Own" />
                            <FormControlLabel value="rent" checked={formValues.formerAddress==="rent"} control={<Radio />} label="Rent" />
                        </RadioGroup>
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{width:"100%"}} elevation={3}>
                <Box display="flex" flexDirection="column" sx={{p:2, margin:2}}>
                    <FormLabel>Mailing Address <em> if different from Current Address</em></FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Street"
                            name='mailingStreet'
                            value={formValues.mailingStreet}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Unit #"
                            name='mailingUnit'
                            value={formValues.mailingUnit}
                            onChange={onInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='mailingCity'
                            value={formValues.mailingCity}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='mailingState'
                            value={formValues.mailingState}
                            onChange={onInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='mailingZip'
                            value={formValues.mailingZip}
                            onChange={onInputChange}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='mailingCountry'
                            value={formValues.mailingCountry}
                            onChange={onInputChange}
                            variant="standard"
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
