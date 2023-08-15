/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../lib/api";
import { useSelector } from "react-redux";
import { IReply } from "../interface/Reply"
import IDetail from "../interface/BlogDetail";
import { RootState } from "../stores/types/rootState";

const Detail = () => {
  const { id } = useParams();

  const [thread, setThread] = useState<IDetail | null>(null);
  const [userreply, setReply] = useState<IReply[]>([]);
console.log("asdasd" ,userreply)
console.log("ini bagian thread : ",thread)
  async function getThread() {
    try {
      const response = await API.get(`/thread/${id}`);
      console.log("API data:", response.data);
      setThread(response.data);
    } catch (error) {
      console.error("Error fetching thread:", error);
    }
  }

  async function getReply() {
    try {
      const response = await API.get(`/reply/${id}`);
      console.log("API data:", response.data);
      setReply(response.data);
    } catch (error) {
      console.error("Error fetching Reply:", error);
    }
  }

  useEffect(() => {
    getThread();
  }, [id]);

  useEffect(() => {
    getReply();
  }, [id]);
  
  const [newPostContent, setNewPostComment] = useState({
    comment : "",
    thread : null,
    user: null, 
    
  });
  const loggedInUser = useSelector((state: RootState) => state.auth);
  console.log("Logged in user:", loggedInUser);

  const handleNewCommentSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  
  try {
    const postData = {
      comment: newPostContent.comment
    };
  console.log(postData)
  
  const response = await API.post(`/reply/create/${id}`, postData);
  const newReply = response.data;

     console.log("ini Response : " , response)
     console.log("ini New Reply : " , newReply)

     setNewPostComment({ ...newPostContent, comment: "" });
     console.log("ini Testing HAHAHAH : " , setNewPostComment)     
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };
}

  return (

  )

export default Detail