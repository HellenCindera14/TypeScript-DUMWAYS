import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";
import { Thread } from "./Threads";

@Entity({ name: "likes" })
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Thread, (thread) => thread.likes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  thread: Thread;

  @ManyToOne(() => User, (user) => user.likes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}