import { useState } from "react";
import { Box, Image, Button, Text,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { API } from "../lib/api";

//struct
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

// export function ThreadCard() {
//   const [Threads, setThreads] = useState();

//   async function getThreads() {
//     const response =await API.get('/threads')
//     console.log("ini adalah threads", response)
//   }

//   useEffect(() => (
//     getThreads()
//   ),[])
// }

const ThreadCard = (props: ThreadCardProps) => {
  const [likesCount, setLikesCount] = useState(props.likes_count || 0);
  const [isLiked, setIsLiked] = useState(props.is_liked || false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Box>
        <Box fontSize="14px">
        
          <Box display={"flex"} mt="5px">
            <Image
              src={props.author_picture}
              alt="Author"
              width={"30px"}
              height={"30px"}
              borderRadius="30%"
              objectFit="cover"
              mr="8px"
            />
            <Box display={"flex"}>
              <Text color={"white"} fontWeight="bold" mr="5px">
                {props.author_fullname}
              </Text>
              <Text color={"grey"} mr="5px">
                @{props.author_username}
              </Text>
              <Text color={"grey"}>({props.posted_at})</Text>
            </Box>
          </Box>
          <Box mb="25px" mt="4px" width="95%">
            <Link
              to={`/${props.id}`}
              style={{ color: "white", marginBottom: "5px" }}
            >
              {props.content}
            </Link>
            <Image
              src={props.image}
              objectFit={"fill"}
              alt="Thread"
              borderRadius="10px"
              mb="10px"
            />
            <Box display="flex" justifyContent="space-between" w="20%">
              <Button
                onClick={handleLikeClick}
                colorScheme={isLiked ? "red" : "gray"}
                display={"grid"}
                objectFit="cover"
                width="10%"
                fontSize="10px"
                height="20px"
              >
                {likesCount} Likes
              </Button>
              <Button width="15%" fontSize="10px" height="20px">
                {props.replies_count} Replies
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ThreadCard;
