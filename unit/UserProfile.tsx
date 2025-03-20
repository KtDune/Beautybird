/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Typography, Box } from "@mui/material"

export default function UserProfile() {

  return (
    <Box 
        sx={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: 'center',
            gap: 2, p: 2,
            background: 'grey',
            height: '100vh',
        }}
    >
            {/* Profile Picture */}
            <Avatar
                src="https://via.placeholder.com/100"
                alt="User Profile"
                sx={{ width: 80, height: 80 }}
            />

            {/* Name Section */}
            <Typography variant="h6" sx={{ marginTop: 5 }}>Test name</Typography>
    </Box>
  );
}
