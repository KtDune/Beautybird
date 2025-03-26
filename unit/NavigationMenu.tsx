"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'

interface NavigationMenuTypes {
  handleSidebar: (value: boolean) => void
}

export default function NavigationMenu({ handleSidebar }: NavigationMenuTypes) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ mr: 2, display: { xs: "block", lg: "none" } }}
            onClick={ () => handleSidebar(true) }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Beautybird
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}