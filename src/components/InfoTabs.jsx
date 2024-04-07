import React, { useState } from "react";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Typography from "@mui/material/Typography";

const styles = {
  stack: {
    "& div": {
      display: "flex",
      alignItems: "center",
      gap: 2,
      justifyContent: "flex-start",
      width: "100%",
    },
  },
  tabs: {
    borderBottom: 1,
    borderColor: "divider",
    "& .MuiTabs-indicator": {
      width: "100% !important",
    },
  },
};

function UserDetails({ bday, email, nat, phone, region }) {
  const [currentTab, setCurrentTab] = useState("1");

  const changeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={currentTab}>
        <Box sx={currentTab != "1" ? styles.tabs : null}>
          <TabList onChange={changeTab}>
            <Tab label="General" value="1" />
            <Tab label="Contact" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack
            direction="column"
            spacing={3}
            alignItems="flex-start"
            sx={styles.stack}
          >
            <div>
              <CakeIcon />
              <Typography>
                {bday.toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </div>
            <div>
              <TravelExploreIcon />
              <Typography>{region.of(nat)}</Typography>
            </div>
          </Stack>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "24px 0px" }}>
          <Stack
            direction="column"
            spacing={3}
            alignItems="flex-start"
            sx={styles.stack}
          >
            <div>
              <CallIcon />
              <Typography>{phone}</Typography>
            </div>
            <div>
              <EmailIcon />
              <Typography>{email}</Typography>
            </div>
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default UserDetails;
