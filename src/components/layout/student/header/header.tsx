import React from 'react'
import HeaderButton from '@components/ui/buttonMui'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import Actions from './Actions'
// import StudentMenu from './StudentMenu'

const Header:React.FC = () => {
  return (
    <>
      <Grid
        container
        sx={{
          width: '87%',
          display: 'flex',
          marginRight: 'auto',
          alignItems: 'center',
        }}
      >
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <Actions />
        </Grid>
        <Grid
          item
          xs={7}
          sm={8}
          md={9}
          lg={10}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <HeaderButton children={'خرید اشتراک'} color="inherit" />

          {/* <StudentMenu /> */}
          <Avatar sx={{ bgcolor: 'error', width: 56, height: 56, margin: 1 }}>
            N
          </Avatar>
        </Grid>
      </Grid>
    </>
  )
}
export default Header
