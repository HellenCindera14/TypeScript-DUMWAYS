import { Thead } from "@chakra-ui/react";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Threads } from "./Threads";

@Entity({ name: "user" })
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  fullname: string;

  @Column({ type: "timestamp" })
  email: Date;

  @Column({})
  password: number;

  @Column()
  profil_picture: number;

  @Column()
  Profil_deskcripsi: number;
}

// @OneToMany(() => Thead, (thred)) =>thread.user
// threads: Threads[];