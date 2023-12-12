import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//TODO El SCHEMA de los COCINEROS (Collection)
export type ProcesoDocument = Proceso & Document;

@Schema()
export class Proceso {
  @Prop()
  name: string;
}
export const ProcesoSchema = SchemaFactory.createForClass(Proceso);