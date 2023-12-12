import { Module } from '@nestjs/common';
import { OpcionesService } from './opciones.service';
import { OpcionesController } from './opciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Opciones, OpcionesSchema } from './schema/opciones.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Opciones.name,
        schema: OpcionesSchema,
      }
    ])
  ],
  controllers: [OpcionesController],
  providers: [OpcionesService],
})
export class OpcionesModule {}
