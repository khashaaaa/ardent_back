import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    mark: number

    @Column()
    name: string

    @Column()
    logo: string
}
