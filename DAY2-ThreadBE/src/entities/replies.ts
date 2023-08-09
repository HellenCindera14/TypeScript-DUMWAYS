import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { user } from "./user";
import { Threads } from "./Threads";

@Entity({ name: "replies" })
export class replies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  userId: number;

  //menyambungkan ke database
  @ManyToOne(()=> user, (user)=> user.replies)
  user: user

  @ManyToOne(()=> Threads, (thread)=> thread.likes)
  Threads:Threads
}

