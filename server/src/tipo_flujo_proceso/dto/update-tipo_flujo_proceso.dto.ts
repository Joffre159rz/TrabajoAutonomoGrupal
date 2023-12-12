import { PartialType } from '@nestjs/swagger';
import { CreateTipoFlujoProcesoDto } from './create-tipo_flujo_proceso.dto';

export class UpdateTipoFlujoProcesoDto extends PartialType(CreateTipoFlujoProcesoDto) {}
