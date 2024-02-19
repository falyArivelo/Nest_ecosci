import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile.entity";

export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column({ nullable: true })
    prenom: string;

    @Column()
    genre: string;

    @Column({ default: new Date() })
    dateNaissance: Date;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Profile, { nullable: true })
    @JoinColumn({name:'profile_id'})
    profile:Profile;
}