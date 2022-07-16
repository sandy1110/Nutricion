import { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import { Box, InputLabel, MenuItem, Paper, Radio, Select, TextField, Typography } from '@material-ui/core';

export const PersonalInformation = () => {
    const [citizenship, setCitizenship] = useState('');

    const handleChange = (event) => {
        setCitizenship(event.target.value);
    };
    return (
        <Box display="flex" flexDirection="column" gridRowGap={10}>
        <Paper sx={{backgroundColor:"black"}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"60%"}}>
                    <TextField
                        fullWidth
                        label="Name"
                        placeholder="(First, Middle, Last)"
                        multiline
                        variant="standard"
                        color="warning"
                    />
                    <TextField
                        fullWidth
                        label="Alternate Names"
                        placeholder="Any names under which credit was previously received"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="Social Security Number"
                        placeholder="or Individual Taxpayer Identification Number"
                        multiline
                        variant="standard"
                    />
                </Box>
                <Box sx={{p:2, margin:2, width:"40%"}}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} fullWidth>
                        <InputLabel>Citizenship</InputLabel>
                        <Select
                        value={citizenship}
                        onChange={handleChange}
                        label="citizenship"
                        >
                        <MenuItem value={10}>U.S Citizen</MenuItem>
                        <MenuItem value={20}>Permanent Resident Alien</MenuItem>
                        <MenuItem value={30}>Non-Permanent Resident Alien</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"50%"}}>
                    <FormControl>
                        <FormLabel>Type of Credit</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="individual" control={<Radio size='small'/>} label="I'm applying for individual credit." />
                            <FormControlLabel value="joint" control={<Radio size='small'/>} label="I'm applying for joint credit" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box sx={{p:2, margin:2, width:"50%"}}>
                    <TextField
                        fullWidth
                        label="Names of Other Borrower(s)"
                        placeholder="(First, Middle, Last, Suffix)"
                        multiline
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"70%"}}>
                    <FormControl>
                        <FormLabel>Marital Status</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="married" control={<Radio size='small'/>} label="Married" />
                            <FormControlLabel value="separated" control={<Radio size='small'/>} label="Separated" />
                            <FormControlLabel value="unmarried" control={<Radio size='small'/>} label="Unmarried" />
                            <InputLabel>Single, Widowed, Divorced, Civil Union, Domestic Partnership</InputLabel>
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box sx={{p:2, margin:2, width:"30%"}}>
                    <InputLabel>Dependents (not listed by another borrower)</InputLabel>
                    <TextField
                        label="Number"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        label="Ages"
                        multiline
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        <Paper sx={{backgroundColor:"black", p:10, margin:"auto", flexGrow:1}}>
            <Box display="flex" flexDirection="row">
                <Box sx={{p:2, margin:2, width:"60%"}}>
                    <TextField
                        fullWidth
                        label="Street"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="City"
                        multiline
                        variant="standard"
                    />
                </Box>
            </Box>
        </Paper>
        </Box>
    )
  }