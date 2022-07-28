import React, { useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, Radio } from '@material-ui/core';

const initialValues ={
    cosigner: '',
    judgements: '',
    delinquent: '',
    financialLiability: '',
    conveyedTitle: '',
    bankrupticity: '',
    bankrupticityType: '',
    foreclosedProperty: '',
    acceptLessMortgage: '',
}

export const AboutFinances = () => {
    const [values, setValues] =useState(initialValues);
    const [cosigner, setCosigner] = useState('');
    const [judgements, setJudgements] = useState('');
    const [delinquent, setDelinquent] = useState('');
    const [financialLiability, setFinancialLiability] = useState('');
    const [conveyedTitle, setConveyedTitle] = useState('');
    const [bankrupticity, setBankrupticity] = useState('');
    const [bankrupticityType, setBankrupticityType] = useState('');
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

    const handleBankrupticityChange = (event) => {
        setBankrupticity(event.target.value);
    };

    const handleBankrupticityTypeChange = (event) => {
        setBankrupticityType(event.target.value);
    };

    return (
        <Box display="flex" flexDirection="column" gridRowGap={10}>
            <Paper sx={{backgroundColor:"black"}}>
                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='cosigner'
                            value={cosigner}
                            onChange={handlecosignerChange}
                            >
                            <FormControlLabel value="yes" checked={cosigner==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={cosigner==="no"} control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Are there any outstanding judgments against you?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='judgements'
                            value={judgements}
                            onChange={handleJudgementsChange}
                            >
                            <FormControlLabel value="yes" checked={judgements==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={judgements==="no"} control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Are you currently delinquent or in default on a Federal debt?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
                            value={delinquent}
                            onChange={handleDelinquentChange}
                        >
                            <FormControlLabel value="yes" checked={delinquent==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={delinquent==="no"} control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Are you a party to a lawsuit in which you potentially have any personal financial liability?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
                            value={financialLiability}
                            onChange={handleFinancialLiabilityChange}
                            >
                            <FormControlLabel value="yes" checked={financialLiability==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={financialLiability==="no"} control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>

                <Box display="flex" flexDirection="row">
                    <Box sx={{p:2, margin:2, width:"85%"}}>
                    <FormLabel>Have you conveyed title to any property in lieu of foreclosure in the past 7 years?</FormLabel>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='credit'
                            value={conveyedTitle}
                            onChange={handleConveyedTitle}
                        >
                            <FormControlLabel value="yes" checked={conveyedTitle==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={conveyedTitle==="no"} control={<Radio size='small'/>} label="No" />
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
                            value={acceptLessMortgage}
                            onChange={handleAcceptLessMortgage}
                        >
                            <FormControlLabel value="yes" checked={acceptLessMortgage==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={acceptLessMortgage==="no"} control={<Radio size='small'/>} label="No" />
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
                            value={foreclosedProperty}
                            onChange={handleForeclosedPropertyChange}
                            >
                            <FormControlLabel value="yes" checked={foreclosedProperty==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={foreclosedProperty==="no"} control={<Radio size='small'/>} label="No" />
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
                        name="bankrupticityType"
                        value={bankrupticityType}
                        onChange={handleBankrupticityTypeChange}
                    > 
                        <FormControlLabel value="7" checked={bankrupticityType==="7"} control={<Radio size='small'/>} label="Chapter 7" />
                        <FormControlLabel value="11" checked={bankrupticityType==="11"} control={<Radio size='small'/>} label="Chapter 11" />
                        <FormControlLabel value="12" checked={bankrupticityType==="12"} control={<Radio size='small'/>} label="Chapter 12" />
                        <FormControlLabel value="13" checked={bankrupticityType==="13"} control={<Radio size='small'/>} label="Chapter 13" />
                    </RadioGroup>
                    </Box>
                    <Box sx={{width:"15%"}}>       
                        <RadioGroup row
                            name='bankrupticity'
                            value={bankrupticity}
                            onChange={handleBankrupticityChange}
                            >
                            <FormControlLabel value="yes" checked={bankrupticity==="yes"} control={<Radio size='small'/>} label="Yes" />
                            <FormControlLabel value="no" checked={bankrupticity==="no"} control={<Radio size='small'/>} label="No" />
                        </RadioGroup> 
                    </Box> 
                </Box>
            </Paper>
        </Box>
    );
}