import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup } from '@mui/material';
import { Box, TextField } from '@mui/material';


const initialValues = {
    previousIncome: '',
    previousBusinessOwner: '',
    previousEndDate: '',
    previousStartDate: '',
    previousPosition: '',
    previousCountry: '',
    previousZip: '',
    previousState: '',
    previousCity: '',
    previousUnit: '',
    previousStreet: '',
    previousEmployer: '',

    additionalTotal: '',
    dditionalOther: '',
    additionalmilitaryEntitlements: '',
    aditionalCommission: '',
    additionalBonus: '',
    additionalOvertime: '',
    additionalBase: '',
    additionalMonthlyIncome: '',
    additionalBusinessOwner: '',
    additionalEmployedByFamily: '',
    additionalMonths: '',
    additionalYears: '',
    additionalStartDate: '',
    additionalPosition: '',
    additionalCountry: '',
    additionalZip: '',
    additionalState: '',
    additionalCity: '',
    additionalUnit: '',
    additionalStreet: '',
    additionalPhone: '',
    additionalEmployer: '',

    total: '',
    other: '',
    militaryEntitlements: '',
    commission: '',
    bonus: '',
    overtime: '',
    base: '',
    monthlyIncome: '',
    businessOwner: '',
    employedByFamily: '',
    months: '',
    years: '',
    startDate: '',
    position: '',
    country: '',
    zip: '',
    state: '',
    city: '',
    unit: '',
    street: '',
    phone: '',
    employer: '',

}


export const EmploymentAndIncome = () => {
    const [currentStartDate, setCurrentStartDate] = useState(new Date());
    const [additionalStartDate, setAdditionalStartDate] = useState(new Date());
    const [previousStartDate, setPreviousStartDate] = useState(new Date());
    const [previousEndDate, setPreviousEndDate] = useState(new Date());
    const [previousBusinessOwner, setPreviousBusinessOwner] = useState('');
    const [employedByFamily, setEmployedByFamily] = useState('');
    const [businessOwner, setBusinessOwner] = useState('');
    const [additionalEmployedByFamily, setAdditionalEmployedByFamily] = useState('');
    const [additionalBusinessOwner, setAdditionalBusinessOwner] = useState('');

    const handleBusinessOwner = (event) => {
        setBusinessOwner(event.target.value);
    };

    const handlePreviousBusinessOwner = (event) => {
        setPreviousBusinessOwner(event.target.value);
    };

    const handleEmployedByFamily = (event) => {
        setEmployedByFamily(event.target.value);
    };

    const handleAdditionalEmployedByFamily = (event) => {
        setAdditionalEmployedByFamily(event.target.value);
    };

    const handleAdditionalBusinessOwner = (event) => {
        setAdditionalBusinessOwner(event.target.value);
    };

    return (
        <Box sx={{display:'flex', flexDirection:'column', gridRowGap:25}}>
        <Paper elevation={4} sx={{width:"100%", marginTop:3}}>
            <Box sx={{display:'flex', flexDirection:'row', gridColumnGap:35, m:3}}>
                <Box sx={{display:'flex', flexDirection:'column', gridRowGap:8, width:"70%"}}>
                    <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Employer or Business Name"
                            name='employer'
                        />
                        <TextField
                            label="Phone"
                            name='phone'
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Street"
                            name='street'
                        />
                        <TextField
                            label="Unit #"
                            name='unit'
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='city'
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='state'
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='zip'
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='country'
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Position or Title"
                            name='position'
                            variant="standard"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disableFuture
                            label="Start Date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={currentStartDate}
                            onChange={(newValue) => {
                                setCurrentStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <FormLabel>How long in this line of work?</FormLabel>
                    <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                        <TextField
                            label="Years"
                            variant="standard"
                            name="years"
                        />
                        <TextField
                            label="Months"
                            variant="standard"
                            name="months"
                        />
                    </Box>
                    <FormControl sx={{py:3}}>
                        <RadioGroup 
                            name='employedByFamily'
                            value={employedByFamily}
                            onChange={handleEmployedByFamily}
                        >
                            <FormControlLabel value="yes" checked={employedByFamily==="yes"}
                                control={<Radio size='small'/>} 
                                label="I'm employed by a family member, property seller, real state agent, or other party transaction." 
                            />
                        </RadioGroup>
                    </FormControl>
                    <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"column"}}>
                        <FormControl>
                            <FormLabel>Check if you are the Business Owner or Self-Employed</FormLabel>
                            <RadioGroup name='businessOwner' 
                                value={businessOwner}
                                onChange={handleBusinessOwner}
                            >
                                <FormControlLabel value="less25" checked={businessOwner==="less25"} control={<Radio size='small'/>} label="I have an ownership share of less than 25%." />
                                <FormControlLabel value="more25" checked={businessOwner==="more25"} control={<Radio size='small'/>} label="I have an ownership share of 25% or more" />
                            </RadioGroup>
                        </FormControl>
                        <TextField 
                            label="Monthly Income (or Loss)"
                            name='monthlyIncome'
                            variant="standard"
                        />
                    </Box>
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <FormLabel>Gross Monthly Income</FormLabel>
                    <TextField
                        fullWidth
                        label="Base"
                        name='base'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Overtime"
                        name='overtime'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Bonus"
                        name='bonus'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Commission"
                        name='commission'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Military Entitlements"
                        name='militaryEntitlements'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Other"
                        name='other'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="TOTAL"
                        name='total'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper elevation={3} sx={{width:"100%"}}>
            <FormLabel sx={{m:3}}>Complete Information for Additional Employmet / Self-Employment and Income</FormLabel>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Employer or Business Name"
                            name='additionalEmployer'
                        />
                        <TextField
                            label="Phone"
                            name='additionalPhone'
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Street"
                            name='additionalStreet'
                        />
                        <TextField
                            label="Unit #"
                            name='additionalUnit'
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='additionalCity'
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='additionalState'
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='additionalZip'
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='additionalCountry'
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Position or Title"
                            name='additionalPosition'
                            variant="standard"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disableFuture
                            label="Start Date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={additionalStartDate}
                            onChange={(newValue) => {
                                setAdditionalStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <FormLabel>How long in this line of work?</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            label="Years"
                            variant="standard"
                            name="additionalYears"
                        />
                        <TextField
                            label="Months"
                            variant="standard"
                            name="additionalMonths"
                        />
                    </Box>
                    <FormControl sx={{py:3}}>
                        <RadioGroup name='additionalEmployedByFamily'
                            value={additionalEmployedByFamily} 
                            onChange={handleAdditionalEmployedByFamily}
                        >
                            <FormControlLabel value="yes" checked={additionalEmployedByFamily==="yes"}
                                control={<Radio size='small'/>} 
                                label="I'm employed by a family member, property seller, real state agent, or other party transaction." />
                        </RadioGroup>
                    </FormControl>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"column"}}>
                        <FormControl>
                            <FormLabel>Check if you are the Business Owner or Self-Employed</FormLabel>
                            <RadioGroup name='additionalBusinessOwner' 
                                value={additionalBusinessOwner}
                                onChange={handleAdditionalBusinessOwner}
                            >
                                <FormControlLabel value="less25" checked={additionalBusinessOwner==="less25"} control={<Radio size='small'/>} label="I have an ownership share of less than 25%." />
                                <FormControlLabel value="more25" checked={additionalBusinessOwner==="more25"} control={<Radio size='small'/>} label="I have an ownership share of 25% or more" />
                            </RadioGroup>
                        </FormControl>
                        <TextField 
                            label="Monthly Income (or Loss)"
                            name='additionalMonthlyIncome'
                            variant="standard"
                        />
                    </Box>
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <FormLabel>Gross Monthly Income</FormLabel>
                    <TextField
                        fullWidth
                        label="Base"
                        name='additionalBase'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Overtime"
                        name='additionalOvertime'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Bonus"
                        name='additionalBonus'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Commission"
                        name='aditionalCommission'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Military Entitlements"
                        name='additionalmilitaryEntitlements'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Other"
                        name='additionalOther'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="TOTAL"
                        name='additionalTotal'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper elevation={3} sx={{width:"100%"}}>
            <FormLabel sx={{m:3}}>Complete Information for Previous Employmet / Self-Employment and Income</FormLabel>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <TextField
                        fullWidth
                        variant="standard"
                        label="Employer or Business Name"
                        name='previousEmployer' 
                    />
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Street"
                            name='previousStreet'
                        />
                        <TextField
                            label="Unit #"
                            name='previousUnit'
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='previousCity'
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='previousState'
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='previousZip'
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='previousCountry'
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Position or Title"
                            name='previousPosition'
                            variant="standard"
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disableFuture
                            label="Start Date "
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={previousStartDate}
                            onChange={(newValue) => {
                                setPreviousStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disableFuture
                            label="End Date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={previousEndDate}
                            onChange={(newValue) => {
                                setPreviousEndDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <FormControl sx={{py:3}}>
                        <RadioGroup name='previousBussinesOwner' 
                        value={previousBusinessOwner} 
                        onChange={handlePreviousBusinessOwner}
                    >
                            <FormControlLabel value="yes"
                                checked={previousBusinessOwner==="yes"} 
                                control={<Radio size='small'/>} 
                                label="Check if you were the Business Owner or Self-Employed." />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <FormLabel>Previous Monthly Income</FormLabel>
                    <TextField
                        fullWidth
                        label="Income"
                        name='previousIncome'
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        </Box>
    )
  }