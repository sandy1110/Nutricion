import { Box, TextField, Typography } from '@material-ui/core';

export const PersonalInformation = () => {
    return (
      <Box sx={{ width: '100%', p:3}}>
        <Box>
            <Typography variant='button'>
                Fill the the form with your personal information
            </Typography>
        </Box>
        <Box  sx={{width:"100%", py:3}}>
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
                placeholder="List any names under which credit was previously received"
                multiline
                variant="standard"
                color="warning"
            />
        </Box>
        
      </Box>
    )
  }