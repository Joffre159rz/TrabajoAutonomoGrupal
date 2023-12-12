import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//TODO El SCHEMA de los COCINEROS (Collection)
export type PersonaDocument = Persona & Document;

@Schema()
export class Persona {
  @Prop()
  name: string;
  @Prop()
  CI: string;
}
export const PersonaSchema = SchemaFactory.createForClass(Persona);