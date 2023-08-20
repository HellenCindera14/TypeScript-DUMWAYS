import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IThreadCardProps from "../interface/threads";
import { API } from "../lib/api";
import { Avatar, Box, Card, Icon, Text, Image, Button } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { StarIcon } from "@chakra-ui/icons";

export function BlogDetail() {
  const {id} = useParams()

  const [Threads, setThreads] = useState<IThreadCardProps[]> ()

    async function fetchData() {
      try {
        const response = await API.get("/threads", {
          headers: {
            Authorization: ` Bearer ${localStorage.token}`
          }
        })
        setThreads(response.data)
        console.log("API data: ", response.data)
      }catch (err) {
        console.log("gagal mengambil data detail")
      }
    }

    useEffect(() => {
      fetchData()
    }, [])


    const element = Threads?.find((el) => el.id == Number(id))
    const [showImage, setShowImage] = useState<boolean>(true)

    return element ? (
      <>
      <Card margin={2} padding={5} ml="30%" mr="30%" mt="2%">
        <Box>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Avatar src={element.user.picture} mr={3}/>
            <Text fontWeight={"bold"}> {element.user.fullname}</Text>
            <Text ml={2} fontWeight={"light"}>@{element.user.username}<Icon color={"blue.300"} as={AiFillCheckCircle}></Icon></Text>
            <Text ml={2}>{element.posted_at}</Text>
          </Box>
          <Box mt={5}>
            <Text>{element.content}</Text>
            {showImage && (
              <Image my={5} borderRadius={30} src={element.image} onError={() => setShowImage(true)}></Image>
            )}
          </Box>
          <Box display={"flex"} gap={5} mt={5}>
            <Box>
              <Button width={"120px"} colorScheme="pink"><StarIcon mr={3}>{element.likes_count}</StarIcon></Button>
            </Box>
            <Box>
            <Button width={"120px"} colorScheme="pink"><StarIcon mr={3}>{element.replies_count}</StarIcon></Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  ) : (
    <h1></h1>
  )
 }
