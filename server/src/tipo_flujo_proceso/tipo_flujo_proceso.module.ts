import { Module } from '@nestjs/common';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';
import { TipoFlujoProcesoController } from './tipo_flujo_proceso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoFlujoProceso, TipoFlujoProcesoSchema } from './schema/tipo_flujo_proceso.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TipoFlujoProceso.name,
        schema: TipoFlujoProcesoSchema,
      }
    ])
  ],
  controllers: [TipoFlujoProcesoController],
  providers: [TipoFlujoProcesoService],
})
export class TipoFlujoProcesoModule {}
