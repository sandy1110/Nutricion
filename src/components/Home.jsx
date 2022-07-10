import { useState } from "react"
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { About } from "./About";
import { Contact } from "./Contact";
import { Apply } from "./Apply";
import { Invest } from "./Invest";

export const Home = () => {
//State used to keep track of which tab is displayed
    const [selectedTab, setSelectedTab] = useState(0)

//handler to change the tab number when user clicks on a tab
    const handleSelectedTab = (event, newTabValue) => {
        setSelectedTab(newTabValue)
    }

    return (
        <>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleSelectedTab} centered>
                    {/* Add tabs here to displlay in te page */}
                    <Tab label="About" />
                    <Tab label="Apply" />
                    <Tab label="Invest" />
                    <Tab label="Contact" />
                </Tabs>
            </AppBar>
            {/* Also add the new tabs here in order so user is redirected when click */}
            { selectedTab === 0 && <About/>}
            { selectedTab === 1 && <Apply/>}
            { selectedTab === 2 && <Invest/>}
            { selectedTab === 3 && <Contact/>}
        </>
    )
}
