import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Base } from "../base/base.entity";
import { Consumer } from "../consumer/consumer.entity";
import { Product } from "../product/product.entity";
import { Confirmation } from "../variant/confirmation";
import { Figure } from "../variant/figure";

@Entity()
export class Merchant extends Base {

    @OneToOne(() => Consumer)
    @JoinColumn()
    founder: Consumer

    @Column()
    entity_name: string

    @Column()
    email: string

    @Column()
    mobile: string

    @Column({ nullable: true })
    address: string

    @Column({ nullable: true })
    origin_country: string

    @Column({ nullable: true })
    buy_dest: string

    @Column({ nullable: true })
    sell_dest: string

    @Column({ type: 'enum', enum: Confirmation, default: Confirmation.UNCERTAIN })
    in_status: Confirmation

    @Column({ type: 'enum', enum: Figure, default: Figure.MERCHANT })
    type: Figure

    @OneToMany(() => Product, (product) => product.merchant)
    products: Product[]
}
