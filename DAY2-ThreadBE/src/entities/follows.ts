// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
// import { user } from "./user";
// import { Threads } from "./Threads";

// @Entity({ name: "follows" })
// export class follows {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   followerId: number;

//   @Column()
//   followedId: number;

//   @ManyToOne(() => user, (user) => user.replies)
//   follower: number;

//   @ManyToOne(() => Threads, (thread) => thread.likes)
//   followed: number;
// }
