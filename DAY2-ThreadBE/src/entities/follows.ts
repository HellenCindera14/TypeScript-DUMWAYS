import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { user } from "./user";
import { Threads } from "./Threads";

@Entity({ name: "follows" })
export class follows {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  followerId: number;

  @Column()
  followedId: number;

  @ManyToOne(() => user, (user) => user.replies)
  user: user;

  @ManyToOne(() => Threads, (thread) => thread.likes)
  threads: Threads;
}
