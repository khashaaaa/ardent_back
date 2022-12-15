import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Pcategory } from "../pcategory/pcategory.entity";
import { Product } from "../product/product.entity";

@Entity()
export class Psubcategory {

    @PrimaryGeneratedColumn()
    mark: number

    @Column()
    name: string

    @ManyToOne(() => Pcategory, (category) => category.subs)
    category: Pcategory

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated: Date
}
