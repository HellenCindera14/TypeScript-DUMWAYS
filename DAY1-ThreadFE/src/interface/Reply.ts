
import  IThreadCardProps  from "./threads";
import { IUser } from "./users";


export interface IReply {
    id: number;
    comment : string;
    user : IUser
    thread : IThreadCardProps
  }