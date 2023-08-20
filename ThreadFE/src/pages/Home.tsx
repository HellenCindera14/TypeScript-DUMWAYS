import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import ThreadsData from "../utils/dummy.json";
import Navbar from "../components/navbar";
import ThreadCardRight from "../components/ThreadCardRight";
import TombolHomeUp from "../components/TombolHomeUp";
import { API } from "../lib/api";
import { useFetchThread } from "../hooks/UseFetchThreads";
import { ThreadCard } from "../components/ThreadCard";

const Home = () => {
  const { threads } = useFetchThread();
  const [data, _] = useState(ThreadsData);

  const resp = API.get("/threads");
  console.log(resp);

  return (
    <Grid templateAreas={`"nav main profil"`} gap={6}>
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Box mr={"5%"}>
          <TombolHomeUp />
        </Box>
        {threads.map((item, index) => {
          return (
            <ThreadCard
              key={index}
              user={item.user}
              posted_at={item.posted_at}
              content={item.content}
              image={item.image}
              likes_count={item.likes_count}
              replies_count={item.replies_count}          />
          );
        })}
      </GridItem>

      <GridItem area={"profil"}>
        <ThreadCardRight />
      </GridItem>
    </Grid>
  );
};

export default Home;
