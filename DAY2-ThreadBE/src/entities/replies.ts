import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "replies" })
export class replies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  userId: number;
}
