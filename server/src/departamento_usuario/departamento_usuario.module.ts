import { Module } from '@nestjs/common';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { DepartamentoUsuarioController } from './departamento_usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentoUsuario, DepartamentoUsuarioSchema } from './schema/departamento_usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DepartamentoUsuario.name,
        schema: DepartamentoUsuarioSchema,
      }
    ])
  ],
  controllers: [DepartamentoUsuarioController],
  providers: [DepartamentoUsuarioService],
})
export class DepartamentoUsuarioModule {}
