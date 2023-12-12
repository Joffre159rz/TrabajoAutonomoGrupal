import { Module } from '@nestjs/common';
import { ProcesoService } from './proceso.service';
import { ProcesoController } from './proceso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proceso, ProcesoSchema } from './schema/proceso.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Proceso.name,
        schema: ProcesoSchema,
      }
    ])
  ],
  controllers: [ProcesoController],
  providers: [ProcesoService],
})
export class ProcesoModule {}
