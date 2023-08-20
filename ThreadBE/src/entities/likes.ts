import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm"
import { Users } from "./user"
import { Threads } from "./Threads"

@Entity({name : "likes"})
export class Like {

    @PrimaryGeneratedColumn()
    id: number

    @Column('boolean', {default: false})
    isLike: boolean = false;

    @ManyToOne(()=> Users, (user)=> user.likes)
    user: Users[]

    @ManyToOne(()=> Threads, (thread)=> thread.likes)
    threads: Threads
}