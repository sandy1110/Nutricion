import { useState } from "react"
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { PersonalInformation } from "../forms/PersonalInformation";
import { Apply } from "../Pages/Apply";

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #ff914d',
  '& .MuiTabs-indicator': {
    backgroundColor: '#ff914d',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: 'black',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#ff914d',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

export const BorrowerSection = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleSelectedTab = (event, newTabValue) => {
      setSelectedTab(newTabValue)
  }

  return (
    <Box  sx={{width:"100%"}}>
      <Box sx={{paddingBottom:15}}>
        <Typography variant='h6'>
            Section 1: Borrower Information
        </Typography>
        <Typography variant='subtitle'>
            This section asks about personal information and your income from
            employment and other sources such as retirement, that you want 
            considered to qualify for this loan
        </Typography>
      </Box>
      <AntTabs value={selectedTab} onChange={handleSelectedTab}>
        <AntTab label="Personal Information" />
        <AntTab label="Employment and Income" />
      </AntTabs>
      { selectedTab === 0 && <PersonalInformation/>}
      { selectedTab === 1 && <Apply/>}
      </Box>
  )
}
