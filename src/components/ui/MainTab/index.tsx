import { Box, Tab, TabProps, Tabs } from "@mui/material";
import useState from "react";
import styles from './styles.module.scss'
import TabPanel from "src/pages/login/components/FormContainer/FormTabs/components/TabPanel";
import { FC } from 'react';
export enum TabType {
    twixTab = 'twixTab',
    tripleTab = 'tripleTab',
    pillTab ='pillTab'
  }
  
  export interface IMainTab {
    type: TabType
    tabs?: string
    label:string
    Component:string
    customClassName?: string
    disabled?: boolean
    onClick?: () => void
  }
  
  const MainTab: FC<TabProps> = ({
 tabs,
 label,
 type,
 Component
}) => {
 
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box  sx={{ width: "100%" }}>
        <Box className={styles[type]} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabs.map(({ label }, i) => (
              <Tab label={label} key={i} />
            ))}
          </Tabs>
        </Box>
        {tabs.map(({ Component }, i) => (
          <TabPanel value={value} index={i} key={i}>
            {Component}
          </TabPanel>
        ))}
      </Box>
    );
  }
  export default MainTab;