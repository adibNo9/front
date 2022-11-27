import { Box, Tab, TabProps, Tabs } from "@mui/material";
import styles from './styles.module.scss'
import React, { useState } from 'react';
import TabPanel from "../TabPanel";

export enum TabType {
    twixTab = 'twixTab',
    pillTab ='pillTab'
  }
 
  export interface IMainTab {
    type: TabType
    tabs?: any
    label:string
    variant:string
    value:string
    Component:string
    disabled?: boolean
    onClick?: () => void
    className:string
    onChange?: () => void
  }
  function MainTab({type,tabs,label,Component,onChange,value,variant}:IMainTab) {

    return (
      <Box  className={styles["twixTab"]}>
        <Box >
          <Tabs
            value={value}
            onChange={onChange} 
            variant={variant}
            aria-label="basic tabs example"
          >
            {tabs.map(({ label }, i) => (
              <Tab label={label} key={i}  />
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