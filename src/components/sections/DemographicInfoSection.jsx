import { useState } from "react"
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DemographicInformation } from "../forms/DemographicInformation";

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: 'orange',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'uppercase',
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

export const DemographicInfoSection = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleSelectedTab = (event, newTabValue) => {
      setSelectedTab(newTabValue)
  }

  return (
    <Box  sx={{width:"700"}}>
      <Box sx={{paddingBottom:15}}>
        <Typography variant='h6'>
            Section 8: Demographic Information
        </Typography>
        <Typography variant='subtitle'>
            This section asks about personal information and your income from
            employment and other sources such as retirement, that you want
            considered to qualify for this loan
        </Typography>
      </Box>
        <DemographicInformation/>
      </Box>
  )
}
