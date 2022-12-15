import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { CardNetwork } from "../variant/card_network";

@Entity()
export class Paymethod {

    @PrimaryGeneratedColumn('uuid')
    mark: string

    @Column()
    owner: string

    @Column()
    holder_name: string

    @Column()
    card_number: string

    @Column()
    expiry: string

    @Column()
    cvv: string

    @Column()
    region: string

    @Column({ type: 'enum', enum: CardNetwork })
    card_provider: CardNetwork
}
