// import { Module } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
// import { DocumentoController } from './documento.controller';

// @Module({
//   controllers: [DocumentoController],
//   providers: [DocumentoService],
// })
// export class DocumentoModule {}
import { SOLICITUDBAJA, DOCUMENTO, PROCESO } from './../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SolicitudBajaController } from './solicitud_baja.controller';
import { SolicitudBajaService } from './solicitud_baja.service';
import { DocumentoSchema } from './schema/documento.schema';
import { SolicitudBajaSchema } from './schema/solicitud_baja.schema';
import { ProcesoSchema } from './schema/proceso.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: SOLICITUDBAJA.name,
        useFactory: () =>
          SolicitudBajaSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: DOCUMENTO.name,
        useFactory: () => DocumentoSchema,
      },
      {
        name: PROCESO.name,
        useFactory: () => ProcesoSchema,
      },
    ]),
  ],
  controllers: [SolicitudBajaController],
  providers: [SolicitudBajaService],
})
export class SolicitudBajaModule {}
