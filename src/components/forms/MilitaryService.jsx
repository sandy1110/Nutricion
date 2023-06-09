import React, { useEffect, useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

const initialValues={
    everServed: '',
    servingType: '',
    endDate: new Date(),
}

export const MilitaryService = () => {

    const [ formValues, setFormValues ] = useState(initialValues);
    const [ firstForm, setFirstForm ] = useState(true);
    const [ endDate, setEndDate ] = useState(new Date());
    const [ requestType, setRequestType ] = useState('POST');

    const url = process.env.REACT_APP_MORTGAGE_MILITARY_SERVICE_INFORMATION;

    const onLoadingForm = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        try{
            console.log("fetching information");
            fetch(url, requestOptions).then((response) => response.json())
            .then((militaryRecord) => {
                const militaryServiceData = militaryRecord["military-service"];
                setFirstForm(false);
                setRequestType('PATCH');
                if(militaryServiceData){
                    militaryServiceData.endDate = new Date(militaryServiceData.endDate);
                    setEndDate(militaryServiceData.endDate);
                    console.log(militaryServiceData);
                    setFormValues(militaryServiceData);
                }
            });
        }catch (error){
            console.log ("error requesting information", error);
        }  
    }

    useEffect(() => {
        onLoadingForm();
    },[]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [ name ] : value
        });
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        formValues.endDate = endDate;
        console.log(formValues);
        const requestOptions = {
            method: requestType,
            body: JSON.stringify({formValues}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        try{
            fetch(url, requestOptions).then( console.log("Military service information sent."));    
        }
        catch{
            alert("Error");
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection= "row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                            <FormLabel>Did you (or your deceased spouse) ever serve, or are you currently serving, in the United States Armed Forces?</FormLabel>
                        </Box>
                        <Box sx={{p:2, margin:2, width:"15%"}}>
                                <RadioGroup row
                                    name='everServed'
                                    value={formValues.everServed}
                                    onChange={ onInputChange }
                                > 
                                    <FormControlLabel value="yes" checked={formValues.everServed==="yes"} control={<Radio size='small'/>} label="Yes" />
                                    <FormControlLabel value="no" checked={formValues.everServed==="no"} control={<Radio size='small'/>} label="No" />
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
                                value={formValues.servingType}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="serving" checked={formValues.servingType==="serving"} control={<Radio size='small'/>} label="Currently serving on active duty with projected expiration date of service/tour" />
                                <FormControlLabel value="retired" checked={formValues.servingType==="retired"} control={<Radio size='small'/>} label="Currently retired, discharged, or separated from service"/>
                                <FormControlLabel value="period" checked={formValues.servingType==="period"} control={<Radio size='small'/>} label="Only period of service was as a non-activated member of the Reserve or National Guard"/>
                                <FormControlLabel value="spouse" checked={formValues.servingType==="spouse"} control={<Radio size='small'/>} label="Surviving spouse" />
                            </RadioGroup> 
                        </Box> 
                        <Box sx={{width: "15%"}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker disablePast
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
                    <Box display="flex" justifyContent="flex-end" sx={{m:2}}>
                        <Button type="submit" variant="contained"> SAVE </Button>
                    </Box>
                </Paper>
            </Box>
        </form>
    )
}

