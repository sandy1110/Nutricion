import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';


const initialValues={
    endDate: '',
}


export const MilitaryService = () => {

    const [everServed, setEverServed] = useState('');
    const [servingType, setServingType] = useState('');
    const [endDate, setEndDate] = useState(new Date());

    const handleEverServedChange = (event) => {
        setEverServed(event.target.value);
    };

    const handleServingTypeChange = (event) => {
        setServingType(event.target.value);
    };
    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection= "row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Did you (or your deceased spouse) ever serve, or are you currently serving, in the United States Armed Forces?</FormLabel>
                    </Box>
                    <Box sx={{p:2, margin:2, width:"15%"}}>
                            <RadioGroup row
                                name='everServed'
                                value={everServed}
                                onChange={handleEverServedChange}
                            > 
                                <FormControlLabel value="yes" checked={everServed==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={everServed==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"15%"}}>
                    <FormLabel> 
                        If YES, check all that apply:
                    </FormLabel>
                    </Box>
                    <Box sx={{width:"75%", py:2}}>       
                        <RadioGroup 
                            name='servingType'
                            value={servingType}
                            onChange={handleServingTypeChange}
                        >
                            <FormControlLabel value="serving" checked={servingType==="serving"} control={<Radio size='small'/>} label="Currently serving on active duty with projected expiration date of service/tour" />
                            <FormControlLabel value="retired" checked={servingType==="retired"} control={<Radio size='small'/>} label="Currently retired, discharged, or separated from service"/>
                            <FormControlLabel value="period" checked={servingType==="period"} control={<Radio size='small'/>} label="Only period of service was as a non-activated member of the Reserve or National Guard"/>
                            <FormControlLabel value="spouse" checked={servingType==="spouse"} control={<Radio size='small'/>} label="Surviving spouse" />
                        </RadioGroup> 
                    </Box> 
                    <Box sx={{width: "15%"}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disableFuture
                            label="End Date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

