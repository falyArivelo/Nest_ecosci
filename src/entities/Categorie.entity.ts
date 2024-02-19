import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories' })
export class Categorie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    libelle:string;

}