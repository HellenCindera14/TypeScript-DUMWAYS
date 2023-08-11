import { Box, Button, Image, Input, Text } from "@chakra-ui/react";


const TombolHomeUp = () => {
  return (
    <>
      <Box mb={4}>
        <Text fontSize="20" color="white" mb="2%">
          Home
        </Text>
        <Box display="flex" gap="15px">
          <Image
            width={"30px"}
            height={"30px"}
            objectFit="cover"
            borderRadius="30%"
            src="https://cdn1.katadata.co.id/media/images/thumb/2021/10/06/Kucing_Bengal-2021_10_06-10_17_15_ad40e6fefe890f0db85dd31bd4d5d0c9_960x640_thumb.jpg"
            alt="image"
          />
          <Input type="text" placeholder="What is happening?" />
          <Button bgColor="#04a51e">Post</Button>
        </Box>
      </Box>
    </>
  );
};

export default TombolHomeUp
