import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cartitem } from "../cartitems/cartitem.entity";
import { PorderStatus } from "../variant/porder_status";

@Entity()
export class Porder {

    @PrimaryGeneratedColumn('uuid')
    mark: string

    @OneToOne(() => Cartitem)
    @JoinColumn()
    items: Cartitem

    @Column()
    sum: number

    @Column()
    amount: number

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    issued: Date

    @Column({ type: 'enum', enum: PorderStatus, default: PorderStatus.ORDERED })
    in_status: PorderStatus
}
