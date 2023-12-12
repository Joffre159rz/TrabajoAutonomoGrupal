import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Departamento, DepartamentoSchema } from './schema/departamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Departamento.name,
        schema: DepartamentoSchema,
      }
    ])
  ],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
