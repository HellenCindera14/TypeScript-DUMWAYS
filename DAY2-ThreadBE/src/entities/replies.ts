import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm"
import { User } from "./user"
import { Threads } from "./Threads"

@Entity({name : "replies"})
export class Reply {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable : true})
    comment: string


    @ManyToOne(()=> User, (user)=> user.replies)
    user: User
    @ManyToOne(()=> Threads, (thread)=> thread.likes)
    threads: Threads
}