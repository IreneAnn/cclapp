import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import VaultTable from "./VaultTable";
import StorageTable from "./StorageTable";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Summary" value="1" />
            <Tab label="Compute" value="2" />
            <Tab label="Storage" value="3" />
            <Tab label="Web Apps" value="4" />
            <Tab label="Networks" value="5" />
            <Tab label="Providers" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Summary</TabPanel>
        <TabPanel value="2">
          <VaultTable />
        </TabPanel>
        <TabPanel value="3">
          <StorageTable />
        </TabPanel>
        <TabPanel value="4">Web Apps</TabPanel>
        <TabPanel value="5">Networks</TabPanel>
        <TabPanel value="6">Providers</TabPanel>
      </TabContext>
    </Box>
  );
}
