import { useState } from "react"
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { AboutFinances } from "../forms/AboutFinances";
import { AboutProperty } from "../forms/AboutProperty";

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

export const DeclarationsSection = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleSelectedTab = (event, newTabValue) => {
      setSelectedTab(newTabValue)
  }

  return (
    <Box  sx={{width:"100%"}}>
      <Box sx={{paddingBottom:15}}>
        <Typography variant='h6'>
            Section 5: Declarations
        </Typography>
        <Typography variant='subtitle'>
            This section asks you specific questions about the property, your funding, and
            your past financial history
        </Typography>
      </Box>
      <AntTabs value={selectedTab} onChange={handleSelectedTab}>
        <AntTab label="About this Property"/>
        <AntTab label="About your Finances"/>
      </AntTabs>
      { selectedTab === 1 && <AboutFinances/>}
      { selectedTab === 0 && <AboutProperty/>}
      </Box>
  )
}
