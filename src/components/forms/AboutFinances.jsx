import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Box, Paper } from '@material-ui/core';
import Button from '@mui/material/Button';

const initialValues ={
    cosigner: '',
    judgments: '',
    delinquent: '',
    financialLiability: '',
    conveyedTitle: '',
    bankruptcy: '',
    bankruptcyType: '',
    foreclosedProperty: '',
    acceptLessMortgage: '',
}

export const AboutFinances = () => {

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

    const [cosigner, setCosigner] = useState('');
    const [judgements, setJudgements] = useState('');
    const [delinquent, setDelinquent] = useState('');
    const [financialLiability, setFinancialLiability] = useState('');
    const [conveyedTitle, setConveyedTitle] = useState('');
    const [bankruptcy, setBankruptcy] = useState('');
    const [bankruptcyType, setBankruptcyType] = useState('');
    const [foreclosedProperty, setForeclosedProperty] = useState('');
    const [acceptLessMortgage, setAcceptLessMortgage] = useState('');

    const handlecosignerChange = (event) => {
        setCosigner(event.target.value);
    };

    const handleJudgementsChange = (event) => {
        setJudgements(event.target.value);
    };

    const handleDelinquentChange = (event) => {
        setDelinquent(event.target.value);
    };

    const handleFinancialLiabilityChange = (event) => {
        setFinancialLiability(event.target.value);
    };

    const handleConveyedTitle = (event) => {
        setConveyedTitle(event.target.value);
    };

    const handleForeclosedPropertyChange = (event) => {
        setForeclosedProperty(event.target.value);
    };

    const handleAcceptLessMortgage = (event) => {
        setAcceptLessMortgage(event.target.value);
    };

    const handleBankruptcyChange = (event) => {
        setBankruptcy(event.target.value);
    };

    const handleBankruptcyTypeChange = (event) => {
        setBankruptcyType(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={10}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                            <FormLabel>Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='cosigner'
                                value={formValues.cosigner}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.cosigner==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.cosigner==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Are there any outstanding judgments against you?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='judgments'
                                value={formValues.judgments}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.judgments==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.judgments==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Are you currently delinquent or in default on a Federal debt?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='delinquent'
                                value={formValues.delinquent}
                                onChange={onInputChange}
                            >
                                <FormControlLabel value="yes" checked={formValues.delinquent==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.delinquent==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Are you a party to a lawsuit in which you potentially have any personal financial liability?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='financialLiability'
                                value={formValues.financialLiability}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.financialLiability==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.financialLiability==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Have you conveyed title to any property in lieu of foreclosure in the past 7 years?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='conveyedTitle'
                                value={formValues.conveyedTitle}
                                onChange={onInputChange}
                            >
                                <FormControlLabel value="yes" checked={formValues.conveyedTitle==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.conveyedTitle==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the property was sold to a third party and the Lender agreed to accept less than the outstanding mortgage balance due?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='acceptLessMortgage'
                                value={formValues.acceptLessMortgage}
                                onChange={onInputChange}
                            >
                                <FormControlLabel value="yes" checked={formValues.acceptLessMortgage==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.acceptLessMortgage==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Have you had property foreclosed upon in the last 7 years?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='foreclosedProperty'
                                value={formValues.foreclosedProperty}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.foreclosedProperty==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.foreclosedProperty==="no"} control={<Radio size='small'/>} label="No" />
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
                        <RadioGroup row
                            name="bankruptcyType"
                            value={formValues.bankruptcyType}
                            onChange={onInputChange}
                        > 
                            <FormControlLabel value="7" checked={formValues.bankruptcyType==="7"} control={<Radio size='small'/>} label="Chapter 7" />
                            <FormControlLabel value="11" checked={formValues.bankruptcyType==="11"} control={<Radio size='small'/>} label="Chapter 11" />
                            <FormControlLabel value="12" checked={formValues.bankruptcyType==="12"} control={<Radio size='small'/>} label="Chapter 12" />
                            <FormControlLabel value="13" checked={formValues.bankruptcyType==="13"} control={<Radio size='small'/>} label="Chapter 13" />
                        </RadioGroup>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='bankruptcy'
                                value={formValues.bankruptcy}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.bankruptcy==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.bankruptcy==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>
                    <Box display="flex" justifyContent="flex-end" sx={{m:2}}>
                        <Button type="submit" variant="contained"> SAVE </Button>
                    </Box>
                </Paper>
            </Box>
        </form>
    );
}