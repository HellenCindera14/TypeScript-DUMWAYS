import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import ThreadsData from "../utils/dummy.json";
import ThreadCard from "./ThreadCard";
import Navbar from "./navbar";
import ThreadCardRight from "./ThreadCardRight";

const Home = () => {
  const [datas, _] = useState(ThreadsData);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Navbar />
      <GridItem w="100%" h="10">
        <Box width={"300px"} marginTop={10}>
          {datas.map((item, index) => {
            return (
              <ThreadCard
                key={index}
                author_picture={item.author_picture}
                author_fullname={item.author_fullname}
                author_username={item.author_username}
                posted_at={item.posted_at}
                content={item.content}
                image={item.image}
                likes_count={item.likes_count}
                replies_count={item.replies_count}
                is_liked={item.is_liked}
              />
            );
          })}
        </Box>
      </GridItem>
      {/* backup ketiga */}
      {/* <Navbar /> */}
      <ThreadCardRight/>
      
    </Grid>
  );
};

export default Home;
