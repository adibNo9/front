import { Box, Tab, TabProps, Tabs } from "@mui/material";
import styles from './styles.module.scss'
import React, { useState } from 'react';
import TabPanel from "@components/layout/form/components/FormContainer/FormTabs/components/TabPanel";
export enum TabType {
    twixTab = 'twixTab',
    pillTab ='pillTab'
  }
  
  export interface IMainTab {
    type: TabType
    tabs?: string
    label:string
    margin:string
    Component:string
    disabled?: boolean
    onClick?: () => void
  }
  function MainTab({type,tabs,label,Component,margin }:IMainTab) {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Box >
        <Box className={styles[type]} >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabs.map(({ label }, i) => (
              <Tab label={label} key={i} style={{margin:margin}} />
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