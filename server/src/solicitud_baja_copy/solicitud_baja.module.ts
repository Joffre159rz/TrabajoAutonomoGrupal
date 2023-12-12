import { Module } from '@nestjs/common';
import { SolicitudBajaService } from './solicitud_baja.service';
import { SolicitudBajaController } from './solicitud_baja.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SolicitudBaja, SolicitudBajaSchema } from './schema/solicitud_baja.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SolicitudBaja.name,
        schema: SolicitudBajaSchema,
      }
    ])
  ],
  controllers: [SolicitudBajaController],
  providers: [SolicitudBajaService],
})
export class SolicitudBajaModule {}
