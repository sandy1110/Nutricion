import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, InputLabel, MenuItem, Paper, Radio, Select, TextField } from '@material-ui/core';

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

export const AboutProperty = () => {
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
                        <FormLabel>
                            Will you occupy the property as your primary residence?
                            <br></br>
                            If YES, have you had an ownership interest in another property in the last three years?
                            <br></br>
                            If YES, complete (1) and (2) below:
                            <br></br>
                            <ul>
                                (1) What type of property did you own: primary residence (PR), FHA secondary residence (SR), second home (SH), or investment property (IP)?
                                <br></br>
                                (2) How did you hold title to the property: by yourself (S), jointly with your spouse (SP), or jointly with another person (O)?
                            </ul>
                        </FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 

                        <TextField
                            fullWidth
                            label=""
                            name=''
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label=""
                            name=''
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>If this is a Purchase Transaction: Do you have a family relationship or bussiness affiliation with the seller of the property?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Are you borrowing any money for this real estate transaction (e.g., money for your closing costs or down payment) or obtaining any money from another party, such as the seller or realtor, that you have not disclosed on this loan application?
                        <br></br>
                        If YES, what is the amount of this money?
                        </FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                        <TextField
                            fullWidth
                            label="$"
                            name=''
                            onChange={handleInputChange}
                            placeholder="$"
                            variant="standard"
                        />  
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel> 
                        (1) Have you or will you be applying for a mortgage loan on another property (not the property securing this loan) on or before closing this transaction that is not disclosed on this loan application?
                        <br></br>
                        (2) Have you or will you be applying for any new credit (e.g., installment loan, credit card, etc.) on or before closing this loan that is not disclosed on this applicattion?
                    </FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
                            onChange={handleInputChange}
                            >
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Will this property be subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid through your property taxes (e.g., the Property Assessed Clean Energy Program)?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
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