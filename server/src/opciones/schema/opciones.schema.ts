import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OpcionesDocument = Opciones & Document;

@Schema()
export class Opciones {

    @Prop()
    type: string;

    @Prop()
    content: string;

};

export const OpcionesSchema = SchemaFactory.createForClass(Opciones);