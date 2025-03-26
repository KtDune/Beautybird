"use client"

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import UserProfile from "@/unit/UserProfile";
import NavigationMenu from "@/unit/NavigationMenu";


const MainMenuRoot = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))

  const handleSidebar = (value: boolean): void => {
    setSidebarOpen(value)
  }

  useEffect(() => {
    handleSidebar(false) // ✅ Close sidebar on large screen
  }, [isLargeScreen])
  
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box 
        sx={{ 
          position: isLargeScreen ? "static" : "fixed", // ✅ Normal component on large screens, overlay otherwise
          top: 0,
          left: isLargeScreen ? "0" : sidebarOpen ? "0" : "-290px", // ✅ Slides in only when not large screen
          width: "290px",
          height: "100vh",
          backgroundColor: "white",
          boxShadow: isLargeScreen ? "none" : 3, // ✅ No shadow for normal sidebar
          transition: isLargeScreen ? "none" : "left 0.3s ease-in-out", // ✅ Only animate if it's an overlay
          zIndex: isLargeScreen ? "auto" : 1300,
        }}
      >
        <UserProfile handleSidebar={handleSidebar} />
      </Box>

      {/* Overlay Background when Sidebar is Open */}
      {sidebarOpen && (
        <Box 
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",  // Dark overlay
            zIndex: 1200, // Behind the sidebar
          }}
          onClick={ () => handleSidebar(false) } // Clicking outside closes the sidebar
        />
      )}

      <Box sx={{ flexGrow: 1 }}>
        <NavigationMenu handleSidebar={handleSidebar} />
        {children}
      </Box>
    </Box>
  );
};

export default MainMenuRoot