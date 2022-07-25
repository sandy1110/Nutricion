import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio } from '@material-ui/core';

const initialValues ={

    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
}

export const AboutFinances = () => {
    const [values, setValues] =useState(initialValues);

    const handleInputChange = event =>{
        const [name, value] = event.target;
        setValues([...values,
            [name].value
        ]);
    }
    return (
        <Box display="flex" flexDirection="column" gridRowGap={10}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value1'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Are there any outstanding judgments against you?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value2'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Are you currently delinquent or in default on a Federal debt?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value3'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Are you a party to a lawsuit in which you potentially have any personal financial liability?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value4'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Have you conveyed title to any property in lieu of foreclosure in the past 7 years?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value5'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a third party and the Lender agreed to accept less than the outstanding mortgage balance due?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value6'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Have you had property foreclosed upon in the last 7 years?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value7'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>
                        Have you declared bankruptcy within the past 7 years?
                        <br></br>
                        If YES, identify the types of bankruptcy:
                    </FormLabel>
                    <RadioGroup row> 
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Chapter 7" />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Chapter 11" />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Chapter 12" />
                        <FormControlLabel value="individual" control={<Radio size='small'/>} label="Chapter 13" />
                    </RadioGroup>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='value8'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>
            </Paper>
        </Box>
    );
}