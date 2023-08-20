import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
// import { useParams } from 'react-router-dom';

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

const ThreadCardBlog = (props: ThreadCardProps) => {
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
        <Box>
          <Box display={"flex"} mt="10px">
            <Image
              src={props.author_picture}
              alt="Author"
              width={"50px"}
              height={"50px"}
              borderRadius="50%"
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
              <Text color={"grey"}>{props.posted_at}</Text>
            </Box>
          </Box>
          <Box mb="25px">
            <Text color={"white"} mb="8px">
              {props.content}
            </Text>
            <Image
              src={props.image}
              width={"200px"}
              height={"200px"}
              alt="Thread"
              borderRadius="30px"
              mb="10px"
            />
            <Box display="flex" justifyContent="space-between" w="70%">
              <Button
                onClick={handleLikeClick}
                colorScheme={isLiked ? "red" : "gray"}
                display={"grid"}
              >
                {likesCount} Likes
              </Button>
              <Button>{props.replies_count} Replies</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ThreadCardBlog;
