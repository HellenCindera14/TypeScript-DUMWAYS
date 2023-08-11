import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import ThreadsData from "../utils/dummy.json";
import ThreadCard from "./ThreadCard";
import Navbar from "./navbar";
import ThreadCardRight from "./ThreadCardRight";
import TombolHomeUp from "./TombolHomeUp";
import API from "../lib/api";

const Home = () => {
  const [datas, _] = useState(ThreadsData);

  const resp = API.get("/thread")
console.log(resp)

  return (
    <Grid templateAreas={`"nav main profil"`} gap={6}>
      <GridItem area={"nav"}>

        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
      <Box mr={"5%"}>
            <TombolHomeUp />
          </Box>
        {datas.map((item, index) => {
          return (
            <ThreadCard
              key={index}
              author_picture={item.user.author_picture}
              author_fullname={item.user.author_fullname}
              author_username={item.user.author_username}
              posted_at={item.posted_at}
              content={item.content}
              image={item.user.image}
              likes_count={item.likes_count}
              replies_count={item.replies_count}
              is_liked={item.is_liked}
            />
          );
        })}
      </GridItem>

      <GridItem area={"profil"}>
        <ThreadCardRight />
      </GridItem>

      {/* backup ketiga */}
      {/* <Navbar /> */}
    </Grid>
  );
};

export default Home;
