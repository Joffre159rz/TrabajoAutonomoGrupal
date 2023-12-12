// import { Test, TestingModule } from '@nestjs/testing';
// import { DocumentoController } from './documento.controller';
// import { DocumentoService } from './documento.service';

// describe('DocumentoController', () => {
//   let controller: DocumentoController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [DocumentoController],
//       providers: [DocumentoService],
//     }).compile();

//     controller = module.get<DocumentoController>(DocumentoController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
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
  @Prop({ default: true }) // Por defecto, el estado es verdadero
  estado: boolean;
}

export const DocumentoSchema = SchemaFactory.createForClass(Documento);
