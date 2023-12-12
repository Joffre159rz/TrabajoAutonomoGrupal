import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//TODO El SCHEMA de los COCINEROS (Collection)
export type DepartamentoDocument = Departamento & Document;

@Schema()
export class Departamento {
  @Prop()
  name: string;
}
export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);