"use client"

import { Box, Typography } from "@mui/material";
import React from "react";

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  
  return (
    <Box sx={{
      marginX: {xs: 0, lg: 6}
    }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "30vh", // Converted px → vh
          backgroundImage: 'url("https://picsum.photos/1000")', // Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            bottom: "2vh", // Converted 16px → 2vh
            left: "2vh", // Converted 16px → 2vh
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds contrast for readability
            padding: "1vh 2vh", // Converted 8px 16px → 1vh 2vh
            borderRadius: "0.5vh", // Converted 4px → 0.5vh
            fontSize: { xs: "2.5vh", sm: "3vh", md: "3.5vh", lg: "4vh" }, // Responsive text size
            wordBreak: 'reak-word',
          }}
        >
          { id }
        </Typography>
      </Box>
    </Box>
  );
};

export default page;
