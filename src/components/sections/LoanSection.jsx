import { useState } from "react"
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { PersonalInformation } from "../forms/PersonalInformation";
import { Contact } from "../Pages/Contact";

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: 'orange',
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
    color: 'orange',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

export const LoanSection = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleSelectedTab = (event, newTabValue) => {
      setSelectedTab(newTabValue)
  }

  return (
    <Box  sx={{width:"100%"}}>
      <Box sx={{paddingBottom:15}}>
        <Typography variant='h6'>
            Section 4: Loan and Property Information
        </Typography>
        <Typography variant='subtitle'>
            This section asks about the loan's purspose and the property you want to
            purchase or refinance
        </Typography>
      </Box>
      <AntTabs value={selectedTab} onChange={handleSelectedTab}>
        <AntTab label="Loan and Property Information" />
        <AntTab label="Other Mortgage Loans" />
        <AntTab label="Rental Income" />
        <AntTab label="Gifts or Grants" />
      </AntTabs>
      { selectedTab === 0 && <PersonalInformation/>}
      { selectedTab === 1 && <Contact/>}
      </Box>
  )
}
