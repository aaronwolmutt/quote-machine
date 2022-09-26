import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

export function Navigation (): JSX.Element {
  const [tabSelected, setTab] = useState(0)

  const onTabChanged = (event: any, newValue: any): void => {
    setTab(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tabs value={tabSelected} onChange={onTabChanged}
                  TabIndicatorProps={
                    {
                      style: {
                        backgroundColor: 'black',
                        margin: '12px',
                        height: '3px'
                      }
                    }}
                  textColor='inherit'
                  variant='scrollable'
            >
              <Tab
                label='Quote Machine'
                component={Link}
                to="/"
                icon={<HomeIcon/>}
                iconPosition='start'
                value={0}
              >
              </Tab>
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
