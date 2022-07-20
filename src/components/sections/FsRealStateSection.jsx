import { useState } from "react"
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { PersonalInformation } from "../forms/PersonalInformation";
import { Contact } from "../Pages/Contact";
import { PropertyYouOwn } from "../forms/PropertyYouOwn";

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

export const FsRealStateSection = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleSelectedTab = (event, newTabValue) => {
      setSelectedTab(newTabValue)
  }

  return (
    <Box  sx={{width:"100%"}}>
      <Box sx={{paddingBottom:15}}>
        <Typography variant='h6'>
            Section 3: Financial Information - Real Estate
        </Typography>
        <Typography variant='subtitle'>
            This section asks you to list all properties you currently own and
            what you owe on them
        </Typography>
      </Box>
      <AntTabs value={selectedTab} onChange={handleSelectedTab}>
        <AntTab label="Property you Own" />
        <AntTab label="Additional Property" />
      </AntTabs>
      { selectedTab === 0 && <PropertyYouOwn/>}
      { selectedTab === 1 && <Contact/>}
      </Box>
  )
}
