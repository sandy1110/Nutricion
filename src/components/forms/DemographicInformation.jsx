import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField, Typography } from '@material-ui/core';

const initialValues ={

    nationality: '',
    race: '',
    asian: '',
    other: '',
}

export const DemographicInformation = () => {
    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box sx={{p:2, margin:2}}>
                <Box sx={{py:3}}>
                    The purpose of collecting this information is to help ensure that all applicants are treated fairly and that the housing needs 
                    of communities and neighborhoods are being fulfilled. For residential mortgage lending, Federal law requires that we ask applicants 
                    for their demographic information (ethnicity, sex, and race) in order to monitor our compliance with equal credit opportunity, 
                    fair housing, and home mortgagedisclosure laws. You are not required to provide this information, but are encouraged to do so. 
                    You may select one or more designations for "Ethnicity" and one or more designations for "Race." <b>The law provides that we may not 
                    discriminate</b> on the basis of this information, or on whether you choose to provide it. However, if you choose not to provide the 
                    information and you have made this application in person, Federalregulations require us to note your ethnicity, sex, and race on the 
                    basis of visual observation or surname. The law also provides that we may not discriminate on the basis of age or marital status 
                    information you provide in this application. If you do not wish to provide some or all of this information, please check below.
                </Box>
                <Box display="flex" flexDirection= "row">
                    <Box sx={{p:2, margin:2, width:"50%"}}>
                        <FormLabel>
                            <b>Ethnicity:</b> check one or more
                        </FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Hispanic or latino" />
                        </RadioGroup>
                        <ul>
                            <RadioGroup row>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Mexican" />
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Puerto Rican" />
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Cuban" />
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Other Hispanic or Latino - Print Origin:"/>
                            </RadioGroup>
                            <TextField
                                fullWidth
                                label=""
                                name='nationality'
                                placeholder="For example: Argentinian, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, and so on."
                                variant="standard"
                            />
                        </ul>
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Not Hispanic or Latino" />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="I do not wish to provide this information" />
                        <br></br>
                        <br></br>
                        <br></br>
                        <FormLabel>
                            <b>Sex</b>
                        </FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Female" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Male" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="I do not wish to provide this information" />
                        </RadioGroup>
                    </Box>
                    <Box sx={{p:2, margin:2, width:"50%"}}>
                        <FormLabel>
                            <b>Race:</b> Check one or more
                        </FormLabel>  
                        <br></br> 
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="American Indian or Alaska Native - Print name of enrolled or principal tribe:"/>
                        <TextField
                            fullWidth
                            label=""
                            name='race'
                            variant="standard"
                        />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Asian"/>
                        <ul>
                            <RadioGroup row>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Asian Indian" />
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Chinese" />
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Filipino" />
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Japanese"/>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Korean"/>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Vietnamese"/>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Other Asian - Print race:"/>
                            </RadioGroup>
                            <TextField
                            fullWidth
                            label=""
                            name='Asian'
                            placeholder="For example, Hmong, Laotian, Thai, Pakistani, and so on"
                            variant="standard"
                        />  
                        </ul>
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Black or African American"/>
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Native Hawaiian or Other Pacific Islander"/>
                        <ul>
                            <RadioGroup row>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Native Hawaiian"/>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Guamanian or Chamorro"/>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Samoan"/>
                                <FormControlLabel value="individual" control={<Radio size='small'/>} label="Other Pacific Islander - Print Race:"/>
                            </RadioGroup>
                            <TextField
                                fullWidth
                                label=""
                                name='other'
                                placeholder="For example: Fijan, Tongan, and so on"
                                variant="standard"
                            />
                        </ul>
                        <RadioGroup >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Withe"/>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="I do not wish to provide this information"/>
                        </RadioGroup>                        
                    </Box>

                </Box>
                </Box>
            </Paper>
            <Paper sx={{backgroundColor:"black"}}>
                <Box sx={{p:2, margin:2}}>
                <Box display="flex" flexDirection="column" gridRowGap={10}></Box>
                    <Typography variant="subtitle">
                        To be completed by Financial Institution (for application taken in person):
                    </Typography>
                    <Box display="flex" flexDirection= "row" alignItems="baseline" sx={{py:2}}>
                        <FormLabel sx={{width:"80%"}}>
                                Was the ethnicity of the Borrower vollected on the basis of visual observation or surname?
                        </FormLabel>
                        <Box sx={{width:"20%"}}>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="No" />
                        </RadioGroup>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection= "row" alignItems="baseline">
                        <FormLabel sx={{width:"80%"}}>
                                Was the sex of the Borrower vollected on the basis of visual observation or surname?
                        </FormLabel>
                        <Box sx={{width:"20%"}}>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="No" />
                        </RadioGroup>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection= "row" alignItems="baseline">
                        <FormLabel sx={{width:"80%"}}>
                                Was the race of the Borrower vollected on the basis of visual observation or surname?
                        </FormLabel>
                        <Box sx={{width:"20%"}}>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="No" />
                        </RadioGroup>
                        </Box>
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{backgroundColor:"black"}}>
                <Box sx={{p:2, margin:2}}>
                <Box display="flex" flexDirection="column" gridRowGap={10}></Box>
                    <Typography variant="subtitle">
                       The Demographic Information was Provided through:
                    </Typography>
                    <Box display="flex" flexDirection= "row" alignItems="baseline" sx={{py:2}}>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Face-to-Face interview (includes Electronic Media w/ Video Component)" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Telephone Interview" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Fax or Mail" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Email or Internet" />
                        </RadioGroup>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

