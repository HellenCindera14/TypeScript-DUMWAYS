import { IUser } from "./users";

interface IThreadCardProps {
  id?: number;
  user: IUser;
  fullname?: string;
  username?: string;
  picture?: string;
  posted_at?: string;
  content?: string;
  image?: string;
  likes_count?: number;
  replies_count?: number;
  is_liked?: boolean;
}
export default IThreadCardProps;
