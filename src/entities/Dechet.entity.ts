import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categorie } from "./Categorie.entity";

@Entity({ name: 'dechets' })
export class Dechet {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    designation: string;

    @ManyToOne(() => Categorie, { nullable: false })
    @JoinColumn({ name: 'categorie_id' })
    categorie: Categorie;

}