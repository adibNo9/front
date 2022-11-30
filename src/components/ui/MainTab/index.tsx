import { Box, Tab, Tabs } from "@mui/material";
import styles from './styles.module.scss'
import React, { ReactNode, SyntheticEvent } from 'react';
import TabPanel from "../TabPanel";

export enum TabType {
    twixTab = 'twixTab',
    pillTab ='pillTab'
  }
  export interface Itabs {
    label: string
   Component:ReactNode
  }
  export interface IMainTab {
    type?: TabType
    tabs: Itabs[]
    variant?: "fullWidth" | "standard" | "scrollable" | undefined
    value: number
    disabled?: boolean
    onClick?: () => void
    className?:string
    onChange?: (event: SyntheticEvent, newValue: number) => void 
  }
  function MainTab({onChange,value,variant,tabs}:IMainTab) {

    return (
      <Box  className={styles["twixTab"]}>
        <Box >
          <Tabs
           value={value}
            onChange={onChange} 
            variant={variant}
            aria-label="basic tabs example"
          >
            {tabs?.map(({ label },i) => (
              <Tab label={label} key={i}  />
            ))}
          </Tabs>
        </Box>
        {tabs?.map(({ Component },i) => (
          <TabPanel value={value} index={i} key={i}>
            {Component}
          </TabPanel>
        ))}
      </Box>
    );
  }
  export default MainTab;