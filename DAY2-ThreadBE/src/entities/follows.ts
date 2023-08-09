import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "follows" })
export class follows {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  followerId: number;

  @Column()
  followedId: number;
}
