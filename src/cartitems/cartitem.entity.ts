import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cartitem {

    @PrimaryGeneratedColumn()
    mark: number

    @Column()
    p_mark: string

    @Column()
    p_name: string

    @Column()
    p_quantity: number

    @Column()
    p_price: number

    @Column()
    seller: string

    @Column()
    buyer: string
}
