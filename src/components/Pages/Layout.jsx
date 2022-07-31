import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { AcknowledgmentsSection } from '../sections/AcknowledgmentsSection';
import { BorrowerSection } from '../sections/BorrowerSection';
import { DeclarationsSection } from '../sections/DeclarationsSection';
import { DemographicInfoSection } from '../sections/DemographicInfoSection';
import { FsAssetsSection } from '../sections/FsAssetsSection';
import { FsRealStateSection } from '../sections/FsRealStateSection';
import { LoanSection } from '../sections/LoanSection';
import { MilitaryServiceSection } from '../sections/MilitaryServiceSection';

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#ff914d',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'uppercase',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeight,
  marginBottom: theme.spacing(2),
  color: 'rgba(0, 0, 0, 0.85)',
  '&.Mui-selected': {
    color: '#ff914d',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      position="static"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function Layout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <Box sx={{ width:"20%", position:"static", py:6}}>
          <AntTabs selectionFollowsFocus
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="form-tabs"
          >
              <AntTab label="Borrower" {...a11yProps(0)} />
              <AntTab label="FS Assets & Liabilities" {...a11yProps(1)} />
              <AntTab label="FS Real Estate" {...a11yProps(2)} />
              <AntTab label="Loan & Property" {...a11yProps(3)} />
              <AntTab label="Declarations" {...a11yProps(4)} />
              <AntTab label="Acknowledgements & Agreements" {...a11yProps(5)} />
              <AntTab label="Military Service" {...a11yProps(6)} />
              <AntTab label="Demographic Information" {...a11yProps(7)} />
          </AntTabs>
        </Box>
        <Box sx={{ width:"80%",position:"static" }}>
            <TabPanel value={value} index={0} >
                <BorrowerSection />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FsAssetsSection />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FsRealStateSection />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <LoanSection />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <DeclarationsSection />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <AcknowledgmentsSection />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <MilitaryServiceSection />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <DemographicInfoSection />
            </TabPanel>
        </Box>
    </Box>
  );
}
