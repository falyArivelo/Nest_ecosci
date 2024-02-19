import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'entreprises' })
export class Entreprise {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nom: string;

    @Column()
    type: string;

    @Column()
    activite: string;

    @Column()
    adresse: string;


}