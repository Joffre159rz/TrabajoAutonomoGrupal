import { Module } from '@nestjs/common';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { ProcesoDeterminadoResolver } from "./proceso_determinado.resolver";
import { MongooseModule } from '@nestjs/mongoose';
import { ProcesoDeterminado} from './entities/proceso_determinado.entity';
import { ProcesoDeterminadoSchema } from './schema/proceso_determinado.schema';


@Module({
  providers: [ProcesoDeterminadoResolver, ProcesoDeterminadoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: ProcesoDeterminado.name,
        schema: ProcesoDeterminadoSchema,
      }
    ])
  ],
  // controllers: [ProcesoDeterminadoController],
})
export class ProcesoDeterminadoModule {}
