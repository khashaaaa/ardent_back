import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Psubcategory } from "../psubcategory/psubcategory.entity";

@Entity()
export class Pcategory {

    @PrimaryGeneratedColumn()
    mark: number

    @Column()
    name: string

    @OneToMany(() => Psubcategory, (sub) => sub.category)
    subs: Psubcategory[]

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated: Date
}
