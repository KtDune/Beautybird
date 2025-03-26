"use client"

import React from "react";
import { useUserData } from "@/hooks/useUserData";
import { Avatar, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface UserProfileTypes {
  handleSidebar: (value: boolean) => void
}

export default function UserProfile({ handleSidebar }: UserProfileTypes) {
  const { name, profile } = useUserData();

  return (
    <Box
      sx={{
        background: "grey",
        height: "100vh",
        position: "relative", // Allows absolute positioning inside
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top-left Positioned IconButton */}
      <IconButton
        onClick={() => handleSidebar(false)} // Example action
        sx={{
          display: {xs: "block", lg: "none"},
          position: "absolute",
          top: 16,
          left: 16,
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Centered Content (Avatar + Name) */}
      <Avatar
        src={profile}
        alt="User Profile"
        sx={{ width: 80, height: 80 }}
      />
      <Typography variant="h6" sx={{ marginTop: 2, color: "white" }}>
        {name}
      </Typography>
    </Box>
  );
}
