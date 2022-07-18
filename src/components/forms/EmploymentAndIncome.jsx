import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField } from '@material-ui/core';

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
                            name='position'
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
                        />
                        <TextField
                            label="Months"
                            variant="standard"
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
                            name='position'
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
                        />
                        <TextField
                            label="Months"
                            variant="standard"
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
            <FormLabel sx={{m:3}}>Complete Information for Previous Employmet / Self-Employment and Income</FormLabel>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <TextField
                        fullWidth
                        variant="standard"
                        label="Employer or Business Name"
                        name='employer'
                        onChange={handleInputChange}
                    />
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
                        <TextField
                            fullWidth
                            label="End Date"
                            name='endDate'
                            onChange={handleInputChange}
                            variant="standard"
                            placeholder="___ / ___ / _____"
                        />
                    </Box>
                    <FormControl sx={{py:3}}>
                        <RadioGroup name='bussinesOwner' onChange={handleInputChange}>
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
                        name='total'
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