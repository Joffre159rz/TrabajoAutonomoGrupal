import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class ProcesoDeterminado {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    proceso_id: string;

    @Column()
    @Field(() => String)
    flujo_proceso_id: string;

    @Column({ default: true }) // Por defecto, el estado es verdadero
    @Field(() => Boolean)
    estado: boolean;

}
