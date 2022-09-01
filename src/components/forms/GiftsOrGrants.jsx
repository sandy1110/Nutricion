import React, { useEffect, useState } from 'react';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, Paper, TextField } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';


const initialValues ={
    type: '',
    deposited: '',
    source: '',
    cash: '',
    type1: '',
    deposited1: '',
    source1: '',
    cash1: '',
    type2: '',
    deposited2: '',
    source2: '',
    cash2: '',
}

export const GiftsOrGrants = () => {

    const [ formValues, setFormValues ] = useState(initialValues);
    const [ firstForm, setFirstForm ] = useState(true);
    const [ requestType, setRequestType ] = useState('POST');

    const url = process.env.REACT_APP_MORTGAGE_GIFTS_GRANTS_INFORMATION;
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
            .then((giftsGrantsRecord) => {
                const giftsGrantsData = giftsGrantsRecord["gifts-and-grants"];
                setFirstForm(false);
                setRequestType('PATCH');
                if(giftsGrantsData){
                    console.log(giftsGrantsData);
                    setFormValues(giftsGrantsData);
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
            fetch(url, requestOptions).then( console.log("Gifts and grants information sent."));    
        }
        catch{
            alert("Error");
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gridRowGap={25}>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                        <TextField fullWidth
                            label="Asset Type"
                            name='type'
                            value={formValues.type}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                            <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                            <RadioGroup row
                                name="deposited"
                                value={formValues.deposited}
                                onChange={ onInputChange }
                            >
                                <FormControlLabel value="deposited" checked={formValues.deposited==="deposited"} control={<Radio size='small'/>} label="Deposited" />
                                <FormControlLabel value="notDeposited" checked={formValues.deposited==="notDeposited"} control={<Radio size='small'/>} label="Not Deposited" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField fullWidth
                                label="Source"
                                name='source'
                                value={formValues.source}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Cash or Market value"
                                name='cash'
                                value={formValues.cash}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Paper>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                        <TextField fullWidth
                            label="Asset Type"
                            name='type1'
                            value={formValues.type1}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                            <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                            <RadioGroup row
                                name="deposited1"
                                value={formValues.deposited1}
                            onChange={ onInputChange }
                            >
                                <FormControlLabel value="deposited" checked={formValues.deposited1==="deposited"} control={<Radio size='small'/>} label="Deposited" />
                                <FormControlLabel value="notDeposited" checked={formValues.deposited1==="notDeposited"} control={<Radio size='small'/>} label="Not Deposited" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField fullWidth
                                label="Source"
                                name='source1'
                                value={formValues.source1}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Cash or Market value"
                                name='cash1'
                                value={formValues.cash1}
                                onChange={ onInputChange }
                                placeholder='$'
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Paper>
                <Paper sx={{backgroundColor:"black"}}>
                    <Box display="flex" flexDirection="column" gridRowGap={10} sx={{p:3, margin:2}}>
                        <TextField fullWidth
                            label="Asset Type"
                            name='type2'
                            value={formValues.type2}
                            onChange={ onInputChange }
                            variant="standard"
                        />
                        <Box display="flex" gridColumnGap={15} alignItems="center" nsx={{ flexDirection:"row"}}>
                            <FormLabel sx={{width:"20%"}}>Desposited / Not Deposited</FormLabel>
                            <RadioGroup row
                                name="deposited2"
                                value={formValues.deposited2}
                            onChange={ onInputChange }
                            >
                                <FormControlLabel value="deposited" checked={formValues.deposited2==="deposited"} control={<Radio size='small'/>} label="Deposited" />
                                <FormControlLabel value="notDeposited" checked={formValues.deposited2==="notDeposited"} control={<Radio size='small'/>} label="Not Deposited" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" gridColumnGap={15} sx={{ flexDirection:"row"}}>
                            <TextField fullWidth
                                label="Source"
                                name='source2'
                                value={formValues.source2}
                                onChange={ onInputChange }
                                variant="standard"
                            />
                            <TextField fullWidth
                                label="Cash or Market value"
                                name='cash2'
                                value={formValues.cash2}
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

