import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm"
import { Users } from "./user"
import { Threads } from "./Threads"

@Entity({name : "replies"})
export class Reply {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable : true})
    comment: string


    @ManyToOne(()=> Users, (user)=> user.replies)
    user: Users[]
    @ManyToOne(()=> Threads, (thread)=> thread.likes)
    threads: Threads[]
}