import React, { useState } from 'react';
//import { NumberFormat } from 'react-number-format';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio, TextField } from '@material-ui/core';

export const RentalIncome = () => {
    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel>
                            Complete if the property if a 2-3 Unit Primary Residence or an Investment Property 
                        </FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="Does not apply" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <FormLabel>
                            Expected Monthly Rental Income 
                        </FormLabel>
                        <TextField 
                            label="Amount"
                            name='unit'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                    <FormLabel>
                        For lender to Calculate
                    </FormLabel>
                    <Box display="flex" justifyContent="space-between" alignItems="center" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <FormLabel>
                            Expected Net Monthly Rental Income 
                        </FormLabel>
                        <TextField 
                            label="Amount"
                            name='unit'
                            placeholder='$'
                            variant="standard"
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

