import { PartialType } from '@nestjs/swagger';
import { CreateSolicitudBajaDto } from './create-solicitud_baja.dto';

export class UpdateSolicitudBajaDto extends PartialType(CreateSolicitudBajaDto) {}
