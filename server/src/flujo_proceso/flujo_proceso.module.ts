import { Module } from '@nestjs/common';
import { FlujoProcesoService } from './flujo_proceso.service';
import { FlujoProcesoController } from './flujo_proceso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FlujoProceso, FlujoProcesoSchema } from './schema/flujo_proceso.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FlujoProceso.name,
        schema: FlujoProcesoSchema,
      }
    ])
  ],
  controllers: [FlujoProcesoController],
  providers: [FlujoProcesoService],
})
export class FlujoProcesoModule {}
