import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Threads } from "./Threads";
import { Like } from "./likes";
import { Reply } from "./replies";

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;

  @OneToMany(() => Threads, (threads) => threads.user)
  threads: Threads[];
  
  @OneToMany(() => Like, (likes) => likes.user)
  @OneToMany(() => Reply, (replies) => replies.user)
  threadses: Threads[];
  likes: Like[];
  replies: Reply[];
}
