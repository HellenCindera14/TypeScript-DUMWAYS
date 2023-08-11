import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, OneToMany } from "typeorm"
import { Users } from "./user"
import { Like } from "./likes"
import { Reply } from "./replies"

@Entity({name : "threads"})
export class Threads {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({nullable : true})
    image: string


    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    posted_at: Date 

    @ManyToOne(()=> Users, (user)=> user.threadses)
    user: Users[];

    @OneToMany(() => Like, (likes)=> likes.threads)
    likes: Like[];
    
    @OneToMany(() => Reply, (replies)=> replies.threads)
    replies: Reply[];
}