import { Box, Button, GridItem, Heading, Text } from "@chakra-ui/react";
import { FaHeart, FaHome, FaRegAddressBook, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <GridItem>
      <Box
        marginLeft={"1em"}
        marginTop={"2em"}
        display={"flex"}
        flexDirection={"column"}
        ml="20"
      >
        <Heading
          color={"green.500"}
          fontSize={"35px"}
          marginBottom={"1.6em"}
          alignItems={"center"}
        >
          MY APLICATION
        </Heading>
        <Box display={"flex"} alignItems="center" mb="4">
          <FaHome color="white" fontSize="25px" mb="10%" />
          <Text color="white" rowGap={1} ml={3}>
            Home
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyItems={"center"}
          mb="5"
        >
          <FaSearch color="white" fontSize="25px" />
          <Text color="white" rowGap={1} ml={3}>
            Search
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyItems={"center"}
          mb="5"
        >
          <FaHeart color="white" fontSize="25px" />
          <Text color="white" rowGap={1} ml={3}>
            Follows
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyItems={"center"}
          mb="5"
        >
          <FaRegAddressBook color="white" fontSize="25px" />
          <Text color="white" rowGap={1} ml={3}>
            Profile
          </Text>
        </Box>
        <Box mt="7">
          <Button
            width={"200px"}
            borderRadius={"20px"}
            marginTop={"-0.5"}
            bgColor={"green.500"}
          >
            Create Post
          </Button>
        </Box>
      </Box>
    </GridItem>
  );
};

export default Navbar;
