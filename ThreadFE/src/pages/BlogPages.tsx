import React from "react";
import Navbar from "../components/navbar";
import ThreadCardRight from "../components/ThreadCardRight";
import TombolHomeUp from "../components/TombolHomeUp";
import { BlogDetail } from "../components/BlogDetail";
import { useFetchThread } from "../hooks/UseFetchThreads";
import { Grid, GridItem, Box } from "@chakra-ui/react";

const Home = () => {
  const { threads } = useFetchThread();

  return (

    <Grid templateAreas={`"nav main profil"`} gap={6}>
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Box mr={"5%"}>
          <TombolHomeUp />
          <BlogDetail />
        </Box>
      </GridItem>
      <GridItem area={"profil"}>
        <ThreadCardRight/>
      </GridItem>
    </Grid>
  );
};

export default Home;
