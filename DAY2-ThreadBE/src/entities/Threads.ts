import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Threads" })
export class Threads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column({ type: "timestamp" })
  post_at: number;

  @Column()
  user_id: number;
}
