import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Box, Paper, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';

const initialValues ={
    ethnicity: '',
    latin: '',
    nationality: '',
    sex: '',
    race:'',
    asian: '',
    other: '',
    example: '',
    hawaiian: '',
    native: '',
}

export const DemographicInformation = () => {

    const [ formValues, setFormValues ] = useState(initialValues);
    const [ firstForm, setFirstForm ] = useState(true);
    const [ requestType, setRequestType ] = useState('POST');

    const url = process.env.REACT_APP_MORTGAGE_DEMOGRAPHIC_INFORMATION;
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
            .then((demographicRecord) => {
                const demographicData = demographicRecord["demographic-information"];
                setFirstForm(false);
                setRequestType('PATCH');
                if(demographicData){
                    console.log(demographicData);
                    setFormValues(demographicData);
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
            fetch(url, requestOptions).then( console.log("information sent."));    
        }
        catch{
            alert("Error");
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box sx={{p:2, margin:2}}>
                    <Box sx={{py:3}}>
                        The purpose of collecting this information is to help ensure that all applicants are treated fairly and that the housing needs 
                        of communities and neighborhoods are being fulfilled. For residential mortgage lending, Federal law requires that we ask applicants 
                        for their demographic information (ethnicity, sex, and race) in order to monitor our compliance with equal credit opportunity, 
                        fair housing, and home mortgage disclosure laws. You are not required to provide this information, but are encouraged to do so. 
                        You may select one or more designations for "Ethnicity" and one or more designations for "Race." <b>The law provides that we may not 
                        discriminate</b> on the basis of this information, or on whether you choose to provide it. However, if you choose not to provide the 
                        information and you have made this application in person, Federal regulations require us to note your ethnicity, sex, and race on the 
                        basis of visual observation or surname. The law also provides that we may not discriminate on the basis of age or marital status 
                        information you provide in this application. If you do not wish to provide some or all of this information, please check below.
                    </Box>
                    <Box display="flex" flexDirection= "row">
                        <Box sx={{p:2, margin:2, width:"50%"}}>
                            <FormLabel>
                                <b>Ethnicity:</b>
                            </FormLabel>
                            <RadioGroup 
                                name='ethnicity'
                                value={formValues.ethnicity}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="latino" checked={formValues.ethnicity==="latino"} control={<Radio size='small'/>} label="Hispanic or latino" />
                            
                                <ul>
                                <RadioGroup row
                                    name='latin'
                                    value={formValues.latin}
                                    onChange={ onInputChange }
                                >
                                    <FormControlLabel value="mexican" checked={formValues.latin==="mexican"} control={<Radio size='small'/>} label="Mexican" />
                                    <FormControlLabel value="puerto" checked={formValues.latin==="puerto"} control={<Radio size='small'/>} label="Puerto Rican" />
                                    <FormControlLabel value="cuban" checked={formValues.latin==="cuban"} control={<Radio size='small'/>} label="Cuban" />
                                    <FormControlLabel value="other" checked={formValues.latin==="other"} control={<Radio size='small'/>} label="Other Hispanic or Latino - Print Origin:"/>
                                </RadioGroup>
                                <TextField
                                    fullWidth
                                    label=""
                                    name='nationality'
                                    value={formValues.nationality}
                                    onChange={ onInputChange }
                                    placeholder="For example: Argentinian, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, and so on."
                                    variant="standard"
                                />
                                </ul>
                                <FormControlLabel value="notLatin" checked={formValues.ethnicity==="notLatin"} control={<Radio size='small'/>} label="Not Hispanic or Latino" />
                                <FormControlLabel value="notProvided" checked={formValues.ethnicity==="notProvided"} control={<Radio size='small'/>} label="I do not wish to provide this information" />
                            </RadioGroup>
                            <br></br>
                            <br></br>
                            <br></br>
                            <FormLabel>
                                <b>Sex</b>
                            </FormLabel>
                            <RadioGroup
                                name='sex'
                                value={formValues.sex}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="female" checked={formValues.sex==="female"} control={<Radio size='small'/>} label="Female" />
                                <FormControlLabel value="male" checked={formValues.sex==="male"} control={<Radio size='small'/>} label="Male" />
                                <FormControlLabel value="notProvided" checked={formValues.sex==="notProvided"} control={<Radio size='small'/>} label="I do not wish to provide this information" />
                            </RadioGroup>
                        </Box>
                        <Box sx={{p:2, margin:2, width:"50%"}}>
                            <FormLabel>
                                <b>Race:</b> Check one or more
                            </FormLabel>  
                            <br></br> 
                            <RadioGroup
                                name='race'
                                value={formValues.race}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="american" checked={formValues.race==="american"} control={<Radio size='small'/>} label="American Indian or Alaska Native - Print name of enrolled or principal tribe:"/>
                                <TextField
                                    fullWidth
                                    label=""
                                    name='asian'
                                    value={formValues.asian}
                                    onChange={ onInputChange }
                                    variant="standard"
                                />
                                <FormControlLabel value="asian" checked={formValues.race==="asian"} control={<Radio size='small'/>} label="Asian"/>
                                <ul>
                                <RadioGroup row
                                    name='other'
                                    value={formValues.other}
                                    onChange={ onInputChange }
                                >
                                    <FormControlLabel value="indian" checked={formValues.other==="indian"} control={<Radio size='small'/>} label="Asian Indian" />
                                    <FormControlLabel value="chinese" checked={formValues.other==="chinese"} control={<Radio size='small'/>} label="Chinese" />
                                    <FormControlLabel value="filipino" checked={formValues.other==="filipino"} control={<Radio size='small'/>} label="Filipino" />
                                    <FormControlLabel value="japanese" checked={formValues.other==="japanese"} control={<Radio size='small'/>} label="Japanese"/>
                                    <FormControlLabel value="korean" checked={formValues.other==="korean"} control={<Radio size='small'/>} label="Korean"/>
                                    <FormControlLabel value="vietnamese" checked={formValues.other==="vietnamese"} control={<Radio size='small'/>} label="Vietnamese"/>
                                    <FormControlLabel value="other" checked={formValues.other==="other"} control={<Radio size='small'/>} label="Other Asian - Print race:"/>
                                </RadioGroup>
                                <TextField
                                    fullWidth
                                    label=""
                                    name='example'
                                    value={formValues.example}
                                    onChange={ onInputChange }
                                    placeholder="For example, Hmong, Laotian, Thai, Pakistani, and so on"
                                    variant="standard"
                                />  
                                </ul>
                                <FormControlLabel value="black" checked={formValues.race==="black"} control={<Radio size='small'/>} label="Black or African American"/>
                                <FormControlLabel value="hawaiian" checked={formValues.race==="hawaiian"} control={<Radio size='small'/>} label="Native Hawaiian or Other Pacific Islander"/>
                                <ul>
                                <RadioGroup row
                                    name='hawaiian'
                                    value={formValues.hawaiian}
                                    onChange={ onInputChange }
                                >
                                    <FormControlLabel value="native" checked={formValues.hawaiian==="native"} control={<Radio size='small'/>} label="Native Hawaiian"/>
                                    <FormControlLabel value="guamanian" checked={formValues.hawaiian==="guamanian"} control={<Radio size='small'/>} label="Guamanian or Chamorro"/>
                                    <FormControlLabel value="samoan" checked={formValues.hawaiian==="samoan"} control={<Radio size='small'/>} label="Samoan"/>
                                    <FormControlLabel value="other" checked={formValues.hawaiian==="other"} control={<Radio size='small'/>} label="Other Pacific Islander - Print Race:"/>
                                </RadioGroup>
                                <TextField
                                    fullWidth
                                    label=""
                                    name='native'
                                    value={formValues.native}
                                    onChange={ onInputChange }
                                    placeholder="For example: Fijan, Tongan, and so on"
                                    variant="standard"
                                />
                                </ul>
                                <FormControlLabel value="white" checked={formValues.race==="white"} control={<Radio size='small'/>} label="White"/>
                                <FormControlLabel value="notProvided" checked={formValues.race==="notProvided"} control={<Radio size='small'/>} label="I do not wish to provide this information"/>
                            </RadioGroup>                       
                        </Box>
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

