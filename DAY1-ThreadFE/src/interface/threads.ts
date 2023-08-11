import IUser from "./users";

interface ThreadCardProps {
    id?: number;
    user : IUser;
    posted_at?: string;
    content?: string;
    image?: string;
    likes_count?: number;
    replies_count?: number;
    is_liked?: boolean;
  }
  export default ThreadCardProps