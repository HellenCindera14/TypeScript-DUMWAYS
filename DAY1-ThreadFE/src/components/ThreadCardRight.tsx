import { Box, Image, Button, Text, Stack, Container } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
// import { Link } from "react-router-dom";

interface ThreadCardProps {
  id?: number;
  author_picture?: string;
  author_fullname?: string;
  author_username?: string;
  posted_at?: string;
  content?: string;
  image?: string;
  likes_count?: number;
  replies_count?: number;
  is_liked?: boolean;
}

const ThreadCardRight = (props: ThreadCardProps) => {
  return (
    <>
      <Box
        border="2px solid white"
        boxShadow="20%"
        marginTop="10%"
        marginRight="10%"
        borderRadius={"2%"}
        p="1%"
      >
        <Box display={"flex"}>
          <Text
            color={"white"}
            fontWeight="bold"
            marginTop="5%"
            marginLeft="5%"
          >
            Profil
          </Text>
        </Box>
        <Box mb="25px">
          <Image
            src="https://www.desktopbackground.org/download/o/2014/03/26/737495_naruto-logo-ii-by-chief117john-jpg_1600x1280_h.jpg"
            width={"400px"}
            height={"140px"}
            alt="Thread"
            borderRadius="10px"
            mb="10px"
            mt="2%"
            mr={"1%"}
          />

          <Stack mt="10px" ml="5%">
            <Image
              src="https://i.imgur.com/ynQwZNxh.jpg"
              alt="Author"
              width={"70px"}
              height={"70px"}
              borderRadius="50%"
              objectFit="cover"
              mr="8px"
              mt="-10"
              ml="5%"
            />
          </Stack>

          <Container>
            <Stack ml="80%">
              <Button
                mt="-9"
                ml="-5px"
                border="2px solid white"
                color="black"
                width="80px"
                height="27px"
                borderRadius="30px"
                fontSize="14px"
              >
                Edit Profil
              </Button>
            </Stack>
          </Container>

          <Container>
            <Stack>
              <Text color="white" mt="4%" gap="10%" fontSize="15">
                HELEN CINDERA
                <Text>"Kita harus lebih kuat dari hari kemarin." (Lee)</Text>
                <Text>
                  <Button mr={"2%"} width={"30"} height={"30"} mt="2%">
                    201 Following
                  </Button>
                  <Button mr={"2%"} width={"30"} height={"30"} mt="2%">
                    71 Followers
                  </Button>
                </Text>
              </Text>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Stack
        border="2px solid white"
        bg="black"
        mt="2%"
        marginTop="5%"
        marginRight="10%"
        borderRadius={"5%"}
        p="1%"
      >
        <Text color={"white"}>Saran Teman : </Text>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Box display={"flex"} mt="5px" flexDirection={"row"}>
            <Image
              src="https://cdn1.katadata.co.id/media/images/thumb/2021/10/06/Kucing_Bengal-2021_10_06-10_17_15_ad40e6fefe890f0db85dd31bd4d5d0c9_960x640_thumb.jpg"
              alt="Author"
              width={"30px"}
              height={"30px"}
              borderRadius="full"
              objectFit="cover"
              mr="8px"
            />
            <Box>
              <Text color={"white"} fontWeight="bold" mr="5px">
                Helen Cindera
              </Text>
              <Text color={"grey"} mr="5px" fontSize={"12px"}>
                @Cindera
              </Text>
            </Box>
          </Box>

          <Stack mr="1%">
            <Button borderRadius="30px" height="27px">
              Follow
            </Button>
          </Stack>
        </Stack>

        <Stack>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Box display={"flex"} mt="5px" flexDirection={"row"}>
              <Image
                src="https://cdn1.katadata.co.id/media/images/thumb/2021/10/06/Kucing_Bengal-2021_10_06-10_17_15_ad40e6fefe890f0db85dd31bd4d5d0c9_960x640_thumb.jpg"
                alt="Author"
                width={"30px"}
                height={"30px"}
                borderRadius="full"
                objectFit="cover"
                mr="8px"
              />
              <Box>
                <Text color={"white"} fontWeight="bold" mr="5px">
                  Helen Cindera
                </Text>
                <Text color={"grey"} mr="5px" fontSize={"12px"}>
                  @Cindera
                </Text>
              </Box>
            </Box>
            <Stack mr="1%">
              <Button borderRadius="30px" height="27px">
                Follow
              </Button>
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Box display={"flex"} mt="5px" flexDirection={"row"}>
              <Image
                src="https://cdn1.katadata.co.id/media/images/thumb/2021/10/06/Kucing_Bengal-2021_10_06-10_17_15_ad40e6fefe890f0db85dd31bd4d5d0c9_960x640_thumb.jpg"
                alt="Author"
                width={"30px"}
                height={"30px"}
                borderRadius="full"
                objectFit="cover"
                mr="8px"
              />
              <Box>
                <Text color={"white"} fontWeight="bold" mr="5px">
                  Helen Cindera
                </Text>
                <Text color={"grey"} mr="5px" fontSize={"12px"}>
                  @Cindera
                </Text>
              </Box>
            </Box>
            <Stack mr="1%">
              <Button borderRadius="30px" height="27px">
                Follow
              </Button>
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Box display={"flex"} mt="5px" flexDirection={"row"}>
              <Image
                src="https://cdn1.katadata.co.id/media/images/thumb/2021/10/06/Kucing_Bengal-2021_10_06-10_17_15_ad40e6fefe890f0db85dd31bd4d5d0c9_960x640_thumb.jpg"
                alt="Author"
                width={"30px"}
                height={"30px"}
                borderRadius="full"
                objectFit="cover"
                mr="8px"
              />
              <Box>
                <Text color={"white"} fontWeight="bold" mr="5px">
                  Helen Cindera
                </Text>
                <Text color={"grey"} mr="5px" fontSize={"12px"}>
                  @Cindera
                </Text>
              </Box>
            </Box>
            <Stack mr="1%">
              <Button borderRadius="30px" height="27px">
                Follow
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        border="2px solid white"
        bg="black"
        marginTop="5%"
        marginRight="10%"
        borderRadius="15px"
        p="1%"
      >
        <Container display={"flex"} m="2" flexDirection={"column"}>
          <Stack flexDirection={"row"}>
            <Text color={"white"}>Devloped by Helen Cindera</Text>
            <Stack flexDirection={"row"}>
              <Button size={"XS"}>
                <AiFillGithub />
              </Button>
              <Button size={"XS"}>
                <AiFillLinkedin />
              </Button>
              <Button size={"XS"}>
                <AiFillTwitterCircle />
              </Button>
            </Stack>
          </Stack>
          <Text color={"white"} fontSize="13px" mt="1%">
            Devloped by Helen Cindera #1CodingBootcamp
          </Text>
        </Container>
      </Stack>
    </>
  );
};

export default ThreadCardRight;
