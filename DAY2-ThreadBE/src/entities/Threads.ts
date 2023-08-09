import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { user } from "./user";
import { follows } from "./follows";
import { Likes } from "./likes";

@Entity({ name: "Threads" })
export class Threads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column({ type: "timestamp" })
  post_at: number;

  @Column()
  user: number;

  @OneToMany(() => user, (user) => user.threads, {
    onDelete: "CASCADE",})
    User: user[];
    likes: Likes[];
    follows: follows[];
}
