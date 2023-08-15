import { Box, Button, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import { FaHeart, FaHome, FaRegAddressBook, FaSearch } from "react-icons/fa";
import { CgLogOut } from "react-icons/Cg";

const Navbar = () => {
  return (
    <GridItem width="119%">
      <Box display={"flex"} flexDirection={"column"} ml="5px">
        <Heading
          mb="5%"
          color={"green.500"}
          fontSize={"30px"}
          marginBottom={"1.6em"}
          alignItems={"center"}
        >
          MY APLICATION
          <Box display={"flex"} alignItems="center" mb="5" mt="10%" ml="5%">
            <FaHome color="white" fontSize="25px" />
            <Text color="white" rowGap={1} ml="5%" fontSize="25px">
              Home
            </Text>
          </Box>
          <Box
            ml="5%"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyItems={"center"}
            mb="5"
          >
            <FaSearch color="white" fontSize="25px" />
            <Text color="white" rowGap={1} ml={3} fontSize="25px">
              Search
            </Text>
          </Box>
          <Box
            ml="5%"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyItems={"center"}
            mb="5"
          >
            <FaHeart color="white" fontSize="25px" />
            <Text color="white" rowGap={1} ml={3} fontSize="25px">
              Follows
            </Text>
          </Box>
          <Box
            ml="5%"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyItems={"center"}
            mb="5"
          >
            <FaRegAddressBook color="white" fontSize="20px" />
            <Text color="white" rowGap={1} ml={3} fontSize="25px">
              Profile
            </Text>
          </Box>
          <Box mt="7">
            <Button
              width={"200px"}
              borderRadius={"15px"}
              marginTop={"-0.5"}
              bgColor={"green.500"}
            >
              Create Post
            </Button>
          </Box>
        </Heading>
        <Stack>
          <Button height="20px" width="198px" mt="-10" borderRadius="30px">
            <CgLogOut/>
          </Button>
        </Stack>
      </Box>
    </GridItem>
  );
};

export default Navbar;
