import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Contact } from "./contact.entitie";

@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 45 })
    name: string

    @Column({ type: "varchar", length: 125, unique: true })
    email: string;

    @Column({ type: "varchar", length: 125 })
    password: string;

    @Column()
    phoneNumber: number

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]

}

export { User }