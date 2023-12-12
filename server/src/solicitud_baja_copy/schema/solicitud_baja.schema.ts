import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Departamento } from 'src/departamento/schema/departamento.schema';
import { Documento } from 'src/documento/schema/documento.schema';
import { Persona } from 'src/persona/schema/persona.schema';
import { Proceso } from 'src/proceso/schema/proceso.schema';
import { ProcesoDeterminado } from 'src/proceso_determinado/schema/proceso_determinado.schema';


export type SolicitudBajaDocument = SolicitudBaja & Document;

@Schema()
export class SolicitudBaja {
    @Prop()
    name: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Documento'})
    documento_id: Documento;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Proceso'})
    proceso_id: Proceso
}

export const SolicitudBajaSchema = SchemaFactory.createForClass(SolicitudBaja);