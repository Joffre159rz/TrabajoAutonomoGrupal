import { PartialType } from '@nestjs/swagger';
import { CreateFlujoProcesoDto } from './create-flujo_proceso.dto';

export class UpdateFlujoProcesoDto extends PartialType(CreateFlujoProcesoDto) {}
