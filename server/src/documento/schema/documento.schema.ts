import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Departamento } from 'src/departamento/schema/departamento.schema';
import { Persona } from 'src/persona/schema/persona.schema';
import { ProcesoDeterminado } from 'src/proceso_determinado/schema/proceso_determinado.schema';

export type DocumentoDocument = Documento & Document;

@Schema()
export class Documento {
  @Prop()
  principal: string;
  @Prop()
  recibido: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Persona' })
  persona_id: Persona;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProcesoDeterminado' })
  proceso_determinado_id: ProcesoDeterminado;
  @Prop({ default: true })
  estado: boolean;
}

export const DocumentoSchema = SchemaFactory.createForClass(Documento);
