import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 125 })
  email: string;

  @Column()
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contact };
