import { useState } from "react";
import { useParams } from "react-router-dom";
import ThreadsData from "../utils/dummy.json";
// import Navbar from './navbar';

const BlogDetail = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();
  const [Threads] = useState(ThreadsData);
  const element = Threads.find((el) => el.id === Number(id));
  return element ? <p>{element.content}</p> : null;
};

export default BlogDetail;
