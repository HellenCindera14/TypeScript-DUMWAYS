import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { user } from "./user";
import { Threads } from "./Threads";
import { replies } from "./replies";

@Entity({ name: "Likes" })
export class Likes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  Thread: string;

  @ManyToOne(()=> user, (user)=> user.threads)
  user: user
  @OneToMany(() => Likes, (Likes)=> Likes.Thread)
  likes: Likes[];

  @OneToMany(() => replies, (replies)=> replies.Threads)
  replies:replies[];
}
