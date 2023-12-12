import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//TODO El SCHEMA de los COCINEROS (Collection)
export type TipoFlujoProcesoDocument = TipoFlujoProceso & Document;

@Schema()
export class TipoFlujoProceso {
  @Prop()
  name: string;
}
export const TipoFlujoProcesoSchema = SchemaFactory.createForClass(TipoFlujoProceso);