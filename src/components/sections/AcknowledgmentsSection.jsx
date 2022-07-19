import { useState } from "react"
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Acknowledgments } from "../forms/Acknowledgments";

export const AcknowledgmentsSection = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const handleSelectedTab = (event, newTabValue) => {
      setSelectedTab(newTabValue)
  }

  return (
    <Box  sx={{width:"100%"}}>
      <Box sx={{paddingBottom:15}}>
        <Typography variant='h6'>
            Section 6: Acknowledgments and Agreements
        </Typography>
        <Typography variant='subtitle'>
            This section tells you about your legal obligations when you sign this application.
        </Typography>
      </Box>
      <Acknowledgments />
      </Box>
  )
}
