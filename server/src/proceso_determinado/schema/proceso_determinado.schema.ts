// schema/proceso_determinado.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FlujoProceso } from 'src/flujo_proceso/schema/flujo_proceso.schema';
import { Proceso } from 'src/proceso/schema/proceso.schema';

export type ProcesoDeterminadoDocument = ProcesoDeterminado & Document;

@Schema()
export class ProcesoDeterminado {
    @Prop()
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Proceso'})
    proceso_id: Proceso;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FlujoProceso'})
    flujo_proceso_id: FlujoProceso;

    @Prop({ default: true }) // Por defecto, el estado es verdadero
    estado: boolean;
}

export const ProcesoDeterminadoSchema = SchemaFactory.createForClass(ProcesoDeterminado);
