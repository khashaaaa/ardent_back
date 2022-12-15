import { Base } from "../base/base.entity";
import { Entity, Column } from 'typeorm';
import { Figure } from "../variant/figure";

@Entity()
export class Consumer extends Base {

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column({ nullable: true })
    mobile: string

    @Column({ nullable: true })
    origin_country: string

    @Column({ type: 'json', nullable: true })
    geodata: object

    @Column()
    pass: string

    @Column({ type: 'enum', enum: Figure, default: Figure.CONSUMER })
    type: Figure
}
