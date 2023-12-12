import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column('varchar', { unique: true })
    email: string;

    @Column('varchar', {unique: true})
    name: string;

    @Column('text', { nullable: true })
    password: string;

    @Column('text', { nullable: true })
    ciudadId: string;

    @Column('text', { nullable: true })
    roleId: string;

}

