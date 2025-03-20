/* eslint-disable react/react-in-jsx-scope */
"use client"

import ContentBlock from "@/unit/ContentBlock";
import NavigationMenu from "@/unit/NavigationMenu";
import UserProfile from "@/unit/UserProfile";
import { Grid2 } from "@mui/material";

const Page = () => {
  return (
    <>
      <Grid2 container>
      <Grid2 size={2}>
          <UserProfile />
        </Grid2>
        <Grid2 size={10}>
          <NavigationMenu />
          <ContentBlock />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Page;