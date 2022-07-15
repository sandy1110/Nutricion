import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AcknowledgementsSection } from '../sections/AcknowledgmentsSection';
import { BorrowerSection } from '../sections/BorrowerSection';
import { DeclarationsSection } from '../sections/DeclarationsSection';
import { DemographicInfoSection } from '../sections/DemographicInfoSection';
import { FsAssetsSection } from '../sections/FsAssetsSection';
import { FsRealStateSection } from '../sections/FsRealStateSection';
import { LoanSection } from '../sections/LoanSection';
import { MilitaryServiceSection } from '../sections/MilitaryServiceSection';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="form-tabs"
        sx={{width:"23%"}}
      >
        <Tab label="Borrower" {...a11yProps(0)} sx={{ backgroundColor:'orange', borderRadius:2, margin:"8%", py:'7%'}}/>
        <Tab label="FS Assets & Liabilities" {...a11yProps(1)} />
        <Tab label="FS Real Estate" {...a11yProps(2)} />
        <Tab label="Loan & Property" {...a11yProps(3)} />
        <Tab label="Declarations" {...a11yProps(4)} />
        <Tab label="Acknowledgements & Agreements" {...a11yProps(5)} />
        <Tab label="Military Service" {...a11yProps(6)} />
        <Tab label="Demographic Information" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
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
        <AcknowledgementsSection />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <MilitaryServiceSection />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <DemographicInfoSection />
      </TabPanel>
    </Box>
  );
}
