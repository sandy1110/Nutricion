import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from '@material-ui/core';
import Button from '@mui/material/Button';

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
    additionalMilitaryEntitlements: '',
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
    currentStartDate: '',
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
            fetch(process.env.REACT_APP_MORTGAGE_EMPLOYMENT_INFORMATION, requestOptions).then( console.log("Employment information sent."));    
        }
        catch{
            alert("Error");
        }
    }


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
        <form onSubmit={onSubmit}>
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
                                    value={formValues.employer}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="Phone"
                                    name='phone'
                                    placeholder="(___)___-_______"
                                    variant="standard"
                                    value={formValues.phone}
                                    onChange={ onInputChange }
                                />
                            </Box>
                            <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Street"
                                    name='street'
                                    value={formValues.street}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="Unit #"
                                    name='unit'
                                    variant="standard"
                                    value={formValues.unit}
                                    onChange={ onInputChange }
                                />
                            </Box>
                            <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    label="City"
                                    name='city'
                                    variant="standard"
                                    value={formValues.city}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="State"
                                    name='state'
                                    variant="standard"
                                    value={formValues.state}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="ZIP"
                                    name='zip'
                                    variant="standard"
                                    type="number"
                                    value={formValues.zip}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="Country"
                                    name='country'
                                    variant="standard"
                                    value={formValues.country}
                                    onChange={ onInputChange }
                                />
                            </Box>
                            <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    label="Position or Title"
                                    name='position'
                                    variant="standard"
                                    value={formValues.position}
                                    onChange={ onInputChange }
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                    disableFuture
                                    label="Start Date"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    name="currentStartDate"
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
                                    value={formValues.years}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="Months"
                                    variant="standard"
                                    name="months"
                                    value={formValues.months}
                                    onChange={ onInputChange }
                                />
                            </Box>
                            <FormControl sx={{py:3}}>
                                <RadioGroup 
                                    name='employedByFamily'
                                    value={formValues.employedByFamily}
                                    onChange={ onInputChange }
                                >
                                    <FormControlLabel value="yes" checked={formValues.employedByFamily==="yes"}
                                        control={<Radio size='small'/>} 
                                        label="I'm employed by a family member, property seller, real estate agent, or other party transaction." 
                                    />
                                </RadioGroup>
                            </FormControl>
                            <Box sx={{ display:"flex", gridColumnGap:10, flexDirection:"column"}}>
                                <FormControl>
                                    <FormLabel>Check if you are the Business Owner or Self-Employed</FormLabel>
                                    <RadioGroup name='businessOwner' 
                                        value={formValues.businessOwner}
                                        onChange={ onInputChange }
                                    >
                                        <FormControlLabel value="less25" checked={formValues.businessOwner==="less25"} control={<Radio size='small'/>} label="I have an ownership share of less than 25%." />
                                        <FormControlLabel value="more25" checked={formValues.businessOwner==="more25"} control={<Radio size='small'/>} label="I have an ownership share of 25% or more" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField 
                                    label="Monthly Income (or Loss)"
                                    name='monthlyIncome'
                                    variant="standard"
                                    value={formValues.monthlyIncome}
                                    onChange={ onInputChange }
                                />
                            </Box>
                        </Box>
                        <Box sx={{p:2, margin:2, width:"30%"}}>
                            <FormLabel>Gross Monthly Income</FormLabel>
                            <TextField
                                fullWidth
                                label="Base"
                                name='base'
                                value={formValues.base}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Overtime"
                                name='overtime'
                                value={formValues.overtime}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Bonus"
                                name='bonus'
                                value={formValues.bonus}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Commission"
                                name='commission'
                                value={formValues.commission}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Military Entitlements"
                                name='militaryEntitlements'
                                value={formValues.militaryEntitlements}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Other"
                                name='other'
                                value={formValues.other}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="TOTAL"
                                name='total'
                                value={formValues.total}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{width:"100%"}}>
                    <FormLabel sx={{m:3}}>Complete Information for Additional Employment / Self-Employment and Income</FormLabel>
                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"70%"}}>
                            <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Employer or Business Name"
                                    name='additionalEmployer'
                                    value={formValues.additionalEmployer}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="Phone"
                                    name='additionalPhone'
                                    value={formValues.additionalPhone}
                                    onChange={ onInputChange }
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
                                    value={formValues.additionalStreet}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="Unit #"
                                    name='additionalUnit'
                                    value={formValues.additionalUnit}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                            </Box>
                            <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    label="City"
                                    name='additionalCity'
                                    value={formValues.additionalCity}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <TextField
                                    label="State"
                                    name='additionalState'
                                    value={formValues.additionalState}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <TextField
                                    label="ZIP"
                                    name='additionalZip'
                                    value={formValues.additionalZip}
                                    onChange={ onInputChange }
                                    variant="standard"
                                    type="number"
                                />
                                <TextField
                                    label="Country"
                                    name='additionalCountry'
                                    value={formValues.additionalCountry}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                            </Box>
                            <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    label="Position or Title"
                                    name='additionalPosition'
                                    value={formValues.additionalPosition}
                                    onChange={ onInputChange }
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
                                    value={formValues.additionalYears}
                                    onChange={ onInputChange }
                                />
                                <TextField
                                    label="Months"
                                    variant="standard"
                                    name="additionalMonths"
                                    value={formValues.additionalMonths}
                                    onChange={ onInputChange }
                                />
                            </Box>
                            <FormControl sx={{py:3}}>
                                <RadioGroup name='additionalEmployedByFamily'
                                    value={formValues.additionalEmployedByFamily}
                                    onChange={ onInputChange }
                                >
                                    <FormControlLabel value="yes" checked={formValues.additionalEmployedByFamily==="yes"}
                                        control={<Radio size='small'/>} 
                                        label="I'm employed by a family member, property seller, real estate agent, or other party transaction." />
                                </RadioGroup>
                            </FormControl>
                            <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"column"}}>
                                <FormControl>
                                    <FormLabel>Check if you are the Business Owner or Self-Employed</FormLabel>
                                    <RadioGroup name='additionalBusinessOwner' 
                                        value={formValues.additionalBusinessOwner}
                                        onChange={ onInputChange }
                                    >
                                        <FormControlLabel value="less25" checked={formValues.additionalBusinessOwner==="less25"} control={<Radio size='small'/>} label="I have an ownership share of less than 25%." />
                                        <FormControlLabel value="more25" checked={formValues.additionalBusinessOwner==="more25"} control={<Radio size='small'/>} label="I have an ownership share of 25% or more" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField 
                                    label="Monthly Income (or Loss)"
                                    name='additionalMonthlyIncome'
                                    value={formValues.additionalMonthlyIncome}
                                    onChange={ onInputChange }
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
                                value={formValues.additionalBase}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Overtime"
                                name='additionalOvertime'
                                value={formValues.additionalOvertime}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Bonus"
                                name='additionalBonus'
                                value={formValues.additionalBonus}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Commission"
                                name='aditionalCommission'
                                value={formValues.additionalCommission}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Military Entitlements"
                                name='additionalMilitaryEntitlements'
                                value={formValues.additionalMilitaryEntitlements}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="Other"
                                name='additionalOther'
                                value={formValues.additionalOther}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                label="TOTAL"
                                name='additionalTotal'
                                value={formValues.additionalTotal}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Paper>
                <Paper elevation={3} sx={{width:"100%"}}>
                    <FormLabel sx={{m:3}}>Complete Information for Previous Employment / Self-Employment and Income</FormLabel>
                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"70%"}}>
                            <TextField
                                fullWidth
                                variant="standard"
                                label="Employer or Business Name"
                                name='previousEmployer' 
                                value={formValues.previousEmployer}
                                onChange={ onInputChange }
                            />
                            <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Street"
                                    name='previousStreet'
                                    value={formValues.previousStreet}
                                    onChange={ onInputChange }    
                                />
                                <TextField
                                    label="Unit #"
                                    name='previousUnit'
                                    value={formValues.previousUnit}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                            </Box>
                            <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    label="City"
                                    name='previousCity'
                                    value={formValues.previousCity}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <TextField
                                    label="State"
                                    name='previousState'
                                    value={formValues.previousState}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <TextField
                                    label="ZIP"
                                    name='previousZip'
                                    value={formValues.previousZip}
                                    onChange={ onInputChange }
                                    variant="standard"
                                    type="number"
                                />
                                <TextField
                                    label="Country"
                                    name='previousCountry'
                                    value={formValues.previousCountry}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                            </Box>
                            <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                                <TextField
                                    fullWidth
                                    label="Position or Title"
                                    name='previousPosition'
                                    value={formValues.previousPosition}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                    disableFuture
                                    label="Start Date "
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    name="previousStartDate"
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
                                    name="previousEndDate"
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
                                value={formValues.previousBusinessOwner} 
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
                                value={formValues.previousIncome}
                                onChange={ onInputChange }
                                placeholder="$_________ /month"
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