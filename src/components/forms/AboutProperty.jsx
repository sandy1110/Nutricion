import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Box, Paper, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';

const initialValues ={
    type: '', 
    title: '',
    credit: '',
    primaryResidence: '',
    money: '',
    ownershipInterest: '',
    familyRelationship:'',
    borrowMoney: '',
    mortgage: '',
    lien: '',
}

export const AboutProperty = () => {

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

    const [primaryResidence, setPrimaryResidence] =useState('');
    const [ownershipInterest, setOwnershipInterest] =useState('');
    const [familyRelationship, setFamilyRelationship] =useState('');
    const [borrowMoney, setBorrowMoney] =useState('');
    const [mortgage, setMortgage] =useState('');
    const [credit, setCredit] =useState('');
    const [lien, setLien] =useState('');

    const handlePrimaryResidenceChange = (event) => {
        setPrimaryResidence(event.target.value);
    };

    const handleOwnershipInterestChange = (event) => {
        setOwnershipInterest(event.target.value);
    };

    const handleFamilyRelationshipChange = (event) => {
        setFamilyRelationship(event.target.value);
    };

    const handleBorrowMoney = (event) => {
        setBorrowMoney(event.target.value);
    };

    const handleMortgageChange = (event) => {
        setMortgage(event.target.value);
    };

    const handleCredit = (event) => {
        setCredit(event.target.value);
    };

    const handleLienChange = (event) => {
        setLien(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={10}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" flexDirection="row">
                            <Box sx={{p:2, margin:2, width:"85%"}}>
                                <FormLabel> Will you occupy the property as your primary residence? </FormLabel>
                            </Box>
                            <Box sx={{width:"15%"}}>       
                                <RadioGroup row
                                    name='primaryResidence'
                                    value={formValues.primaryResidence}
                                    onChange={onInputChange}
                                >
                                    <FormControlLabel value="yes" checked={formValues.primaryResidence==="yes"} control={<Radio size='small'/>} label="Yes" />
                                    <FormControlLabel value="no" checked={formValues.primaryResidence==="no"} control={<Radio size='small'/>} label="No" />
                                </RadioGroup>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="row"> 
                            <Box sx={{p:2, margin:2, width:"85%"}}>
                                <FormLabel>
                                    If YES, have you had an ownership interest in another property in the last three years?
                                </FormLabel>
                            </Box>
                            <Box sx={{width:"15%"}}>       
                                <RadioGroup row
                                    name='ownershipInterest'
                                    value={formValues.ownershipInterest}
                                    onChange={onInputChange}
                                    >
                                    <FormControlLabel value="yes" checked={formValues.ownershipInterest==="yes"} control={<Radio size='small'/>} label="Yes" />
                                    <FormControlLabel value="no" checked={formValues.ownershipInterest==="no"} control={<Radio size='small'/>} label="No" />
                                </RadioGroup> 
                            </Box> 
                        </Box>
                        <Box display="flex" flexDirection="row"> 
                            <Box sx={{p:2, margin:2, width:"85%"}}>
                                <FormLabel>
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
                                <TextField  fullWidth
                                    label=""
                                    name='type'
                                    value={formValues.type}
                                    onChange={onInputChange}
                                    variant="standard"
                                />
                                <TextField fullWidth
                                    label=""
                                    name='title'
                                    value={formValues.title}
                                    onChange={onInputChange}
                                    variant="standard"
                                />
                            </Box> 
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel>If this is a Purchase Transaction: Do you have a family relationship or bussiness affiliation with the seller of the property?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='familyRelationship'
                                value={formValues.familyRelationship}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.familyRelationship==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.familyRelationship==="no"} control={<Radio size='small'/>} label="No" />
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
                                name='borrowMoney'
                                value={formValues.borrowMoney}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.borrowMoney==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.borrowMoney==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                            <TextField fullWidth
                                label="$"
                                name='money'
                                value={formValues.money}
                                onChange={onInputChange}
                                placeholder="$"
                                variant="standard"
                            />  
                        </Box> 
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel> 
                            (1) Have you or will you be applying for a mortgage loan on another property 
                            (not the property securing this loan) on or before closing this transaction that is not disclosed on this loan application?
                        </FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='mortgage'
                                value={formValues.mortgage}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" cheked={formValues.mortgage==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" cheked={formValues.mortgage==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                        <FormLabel> 
                            (2) Have you or will you be applying for any new credit (e.g., installment loan, credit card, etc.) 
                            on or before closing this loan that is not disclosed on this applicattion?
                        </FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='credit'
                                value={formValues.credit}
                                onChange={onInputChange}
                                >
                                <FormControlLabel value="yes" checked={formValues.credit==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.credit==="no"} control={<Radio size='small'/>} label="No" />
                            </RadioGroup> 
                        </Box> 
                    </Box>

                    <Box display="flex" flexDirection="row">
                        <Box sx={{p:2, margin:2, width:"85%"}}>
                            <FormLabel>Will this property be subject to a lien that could take priority over the first mortgage lien, such as a clean energy lien paid through your property taxes 
                                (e.g., the Property Assessed Clean Energy Program)?</FormLabel>
                        </Box>
                        <Box sx={{width:"15%"}}>       
                            <RadioGroup row
                                name='lien'
                                value={formValues.lien}
                                onChange={onInputChange}
                            >
                                <FormControlLabel value="yes" checked={formValues.lien==="yes"} control={<Radio size='small'/>} label="Yes" />
                                <FormControlLabel value="no" checked={formValues.lien==="no"} control={<Radio size='small'/>} label="No" />
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