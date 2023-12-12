import { PartialType } from '@nestjs/swagger';
import { CreateDepartamentoUsuarioDto } from './create-departamento_usuario.dto';

export class UpdateDepartamentoUsuarioDto extends PartialType(CreateDepartamentoUsuarioDto) {}
