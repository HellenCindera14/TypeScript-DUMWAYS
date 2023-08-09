import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Likes" })
export class Likes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  ThreadId: string;
}
