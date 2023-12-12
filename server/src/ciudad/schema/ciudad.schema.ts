import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CiudadDocument = Ciudad & Document;

@Schema()
export class Ciudad {
    @Prop()
    name: string;
}

export const CiudadSchema = SchemaFactory.createForClass(Ciudad);