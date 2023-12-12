import { PartialType } from '@nestjs/swagger';
import { CreateProcesoDeterminadoInput } from './create-proceso_determinado.input';

export class UpdateProcesoDeterminadoInput extends PartialType(CreateProcesoDeterminadoInput) {}
