import { useState } from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ThreadCardProps from "../interface/threads";

export const ThreadCard = (props: ThreadCardProps) => {
  const [showImage, setShowImage] = useState<boolean>(true);

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
              src={props.user.picture}
              alt="Author"
              width={"30px"}
              height={"30px"}
              borderRadius="30%"
              objectFit="cover"
              mr="8px"
            />
            <Box display={"flex"}>
              <Text color={"white"} fontWeight="bold" mr="5px">
                {props.fullname}
              </Text>
              <Text color={"grey"} mr="5px">
                @{props.username}
              </Text>
              <Text color={"grey"}>({props.posted_at})</Text>
            </Box>
          </Box>
          <Box mb="25px" mt="4px" width="95%">
            <Box color="white">{props.content}</Box>

            {showImage && (
              <Image
                src={props.image}
                onError={() => setShowImage(false)}
                objectFit={"fill"}
                alt="Thread"
                borderRadius="10px"
                mb="10px"
              />
            )}

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
              <Link
                to={"/detail/" + props.user?.id}
                style={{ color: "white", marginBottom: "5px" }}
              >
                <Button width="15%" fontSize="10px" height="20px">
                  {props.replies_count} Replies
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
