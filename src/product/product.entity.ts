import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "../base/base.entity";
import { Merchant } from "../merchant/merchant.entity";
import { Psubcategory } from "../psubcategory/psubcategory.entity";

@Entity()
export class Product extends Base {

    @ManyToOne(() => Merchant, (merchant) => merchant.products)
    merchant: Merchant

    @ManyToOne(() => Psubcategory, (category) => category.products)
    category: Psubcategory

    @Column()
    name: string

    @Column({ nullable: true })
    descr: string

    @Column()
    price: number

    @Column()
    stock: number

    @Column({ nullable: true, type: 'json' })
    attrs: object

    @Column({ nullable: true, type: 'simple-array' })
    image_paths: string[]
}
