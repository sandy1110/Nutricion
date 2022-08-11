import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

const initialValues={
    amount:'',
    monthlyAmount:'',
    apply: '',
}

export const RentalIncome = () => {

    const [ formValues, setFormValues ] = useState(initialValues);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [ name ] : value
        });
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(formValues)
    }

    const [apply, setApply] = useState('');

    const handleApplyChange = event => {
        setApply(event.target.value);
    };
    return(
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                        <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                            <FormLabel>
                                Complete if the property is a 2-3 Unit Primary Residence or an Investment Property 
                            </FormLabel>
                            <RadioGroup row name='apply' value={formValues.apply} onChange={onInputChange}>
                                <FormControlLabel value="not" checked={formValues.apply==="not"} control={<Radio size='small'/>} label="Does not apply" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <FormLabel>
                                Expected Monthly Rental Income 
                            </FormLabel>
                            <TextField 
                                label="Amount"
                                name='amount'
                                value={formValues.amount}
                                onChange={ onInputChange }
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
                                name='monthlyAmount'
                                value={formValues.monthlyAmount}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Paper>
                <Box display="flex" justifyContent="flex-end" sx={{m:2}}>
                    <Button type="submit" variant="contained"> SAVE </Button>
                </Box>
            </Box>
        </form>
    )
}
