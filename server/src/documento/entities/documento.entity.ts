import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Documento {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  principal: string;
  @Column({ default: true }) // Por defecto, el estado es verdadero
  @Field(() => Boolean)
  recibido: boolean;

  @Column()
  @Field(() => String)
  persona_id: string;

  @Column()
  @Field(() => String)
  proceso_determinado_id: string;

  @Column({ default: true }) // Por defecto, el estado es verdadero
  @Field(() => Boolean)
  estado: boolean;
}
