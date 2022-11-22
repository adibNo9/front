import React from 'react'
import {
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  Button,
  Box,
  Typography,
  useTheme,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, alpha } from '@mui/material/styles'
// import { VectorIcon } from 'src/assets/icons/vectorIcon'
import { PuzzleIcon } from '@assets/icon/PuzzleIcon'
import styles from './styles.module.scss'
import MainIcon from '@components/ui/MainIcon'

import Image from 'next/image'
import profile from '@assets/images/avatar.png'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

const StudentProfile = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        className={styles['profile-button']}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        startIcon={<MainIcon iconName="angle-down" />}
      >
        {matches && (
          <Box>
            <Typography variant="h3">لورم ایپسوم</Typography>
            <Typography variant="body2">
              امتیاز <span>159</span>
            </Typography>
          </Box>
        )}
        <div className={styles['avatar']}>
          <Image alt="profile" src={profile} width="50" height="50" />
        </div>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <PuzzleIcon />
          تست
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <PuzzleIcon />
          تست
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <PuzzleIcon />
          تست
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <PuzzleIcon />
          تست
        </MenuItem>
      </StyledMenu>
    </>
  )
}

export default StudentProfile
