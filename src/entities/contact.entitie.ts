import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 45 })
    name: string

    @Column({ type: "varchar", length: 125, unique: true })
    email: string;

    @Column()
    phoneNumber: number

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @ManyToOne(() => User, user => user.contacts)
    user: User

}

export { Contact }