import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';

const initialValues={

    amount:'',
    unit:'',
}

export const RentalIncome = () => {

    const [apply, setApply] = useState('');

    const handleApplyChange = event => {
        setApply(event.target.value);
    };


    return(
        <Box display="flex" flexDirection="column" gridRowGap={25}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                    <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                        <FormLabel>
                            Complete if the property if a 2-3 Unit Primary Residence or an Investment Property 
                        </FormLabel>
                        <RadioGroup row name='apply' value={apply} onChange={handleApplyChange}>
                            <FormControlLabel value="not" checked={apply==="not"} control={<Radio size='small'/>} label="Does not apply" />
                        </RadioGroup>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                        <FormLabel>
                            Expected Monthly Rental Income 
                        </FormLabel>
                        <TextField 
                            label="Amount"
                            name='amount'
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

