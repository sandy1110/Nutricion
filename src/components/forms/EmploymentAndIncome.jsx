import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField } from '@material-ui/core';

const initialValues ={
    
    previousIncome: '',
    previousBussinesOwner: '',
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
    const [values, setValues] =useState(initialValues);

    const handleInputChange = event =>{
        const [name, value] = event.target;
        setValues([...values,
            [name].value
        ]);
    }
    return (
        <Box display="flex" flexDirection="column" gridRowGap={25}>
        <Paper sx={{backgroundColor:"black"}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Employer or Business Name"
                            name='employer'
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Phone"
                            name='phone'
                            onChange={handleInputChange}
                            placeholder="(___)___-_______"
                            variant="standard"
                        />
                    </Box>
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
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Position or Title"
                            name='position'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Start Date"
                            name='startDate'
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="___ / ___ / _____"
                        />
                    </Box>
                    <FormLabel>How long in this line of work?</FormLabel>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
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
                        <RadioGroup name='employedByFamily' onChange={handleInputChange}>
                            <FormControlLabel value="yes" 
                                control={<Radio size='small'/>} 
                                label="I'm employed by a family member, property seller, real state agent, or other party transaction." />
                        </RadioGroup>
                    </FormControl>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <FormControl>
                            <FormLabel>Check if you are the Business Owner or Self-Employed</FormLabel>
                            <RadioGroup name='businessOwner' onChange={handleInputChange}>
                                <FormControlLabel value="less25" control={<Radio size='small'/>} label="I have an ownership share of less than 25%." />
                                <FormControlLabel value="more25" control={<Radio size='small'/>} label="I have an ownership share of 25% or more" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            label="Monthly Income (or Loss)"
                            name='monthlyIncome'
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="___ / ___ / _____"
                        />
                    </Box>
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <FormLabel>Gross Monthly Income</FormLabel>
                    <TextField
                        fullWidth
                        label="Base"
                        name='base'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Overtime"
                        name='overtime'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Bonus"
                        name='bonus'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Commission"
                        name='commission'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Military Entitlements"
                        name='militaryEntitlements'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Other"
                        name='other'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="TOTAL"
                        name='total'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black"}}>
            <FormLabel sx={{m:3}}>Complete Information for Additional Employmet / Self-Employment and Income</FormLabel>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Employer or Business Name"
                            name='additionalEmployer'
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Phone"
                            name='additionalPhone'
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Unit #"
                            name='additionalUnit'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='additionalCity'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='additionalState'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='additionalZip'
                            onChange={handleInputChange}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='additionalCountry'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Position or Title"
                            name='additionalPosition'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Start Date"
                            name='additionalStartDate'
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="___ / ___ / _____"
                        />
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
                        <RadioGroup name='additionalEmployedByFamily' onChange={handleInputChange}>
                            <FormControlLabel value="yes" 
                                control={<Radio size='small'/>} 
                                label="I'm employed by a family member, property seller, real state agent, or other party transaction." />
                        </RadioGroup>
                    </FormControl>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <FormControl>
                            <FormLabel>Check if you are the Business Owner or Self-Employed</FormLabel>
                            <RadioGroup name='additionalBusinessOwner' onChange={handleInputChange}>
                                <FormControlLabel value="less25" control={<Radio size='small'/>} label="I have an ownership share of less than 25%." />
                                <FormControlLabel value="more25" control={<Radio size='small'/>} label="I have an ownership share of 25% or more" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            label="Monthly Income (or Loss)"
                            name='additionalMonthlyIncome'
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="___ / ___ / _____"
                        />
                    </Box>
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <FormLabel>Gross Monthly Income</FormLabel>
                    <TextField
                        fullWidth
                        label="Base"
                        name='additionalBase'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Overtime"
                        name='additionalOvertime'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Bonus"
                        name='additionalBonus'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Commission"
                        name='aditionalCommission'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Military Entitlements"
                        name='additionalmilitaryEntitlements'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Other"
                        name='additionalOther'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="TOTAL"
                        name='additionalTotal'
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black"}}>
            <FormLabel sx={{m:3}}>Complete Information for Previous Employmet / Self-Employment and Income</FormLabel>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <TextField
                        fullWidth
                        variant="standard"
                        label="Employer or Business Name"
                        name='previousEmployer' 
                        onChange={handleInputChange}
                    />
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Street"
                            name='previousStreet'
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Unit #"
                            name='previousUnit'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="City"
                            name='previousCity'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="State"
                            name='previousState'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            label="Zip"
                            name='previousZip'
                            onChange={handleInputChange}
                            variant="standard"
                            type="number"
                        />
                        <TextField
                            label="Country"
                            name='previousCountry'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Box>
                    <Box display="flex" gridColumnGap={10} sx={{ flexDirection:"row"}}>
                        <TextField
                            fullWidth
                            label="Position or Title"
                            name='previousPosition'
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Start Date"
                            name='previousStartDate'
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="___ / ___ / _____"
                        />
                        <TextField
                            fullWidth
                            label="End Date"
                            name='previousEndDate'
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="___ / ___ / _____"
                        />
                    </Box>
                    <FormControl sx={{py:3}}>
                        <RadioGroup name='previousBussinesOwner' onChange={handleInputChange}>
                            <FormControlLabel value="yes" 
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
                        onChange={handleInputChange}
                        placeholder="$_________ /month"
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        </Box>
    )
  }