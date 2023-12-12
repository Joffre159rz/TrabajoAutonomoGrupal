import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';
import { CreateTipoFlujoProcesoDto } from './dto/create-tipo_flujo_proceso.dto';
import { UpdateTipoFlujoProcesoDto } from './dto/update-tipo_flujo_proceso.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('tipo-flujo-proceso')
// @UseGuards(JwtAuthGuard)
@Controller('tipo-flujo-proceso')
export class TipoFlujoProcesoController {
  constructor(private readonly tipoFlujoProcesoService: TipoFlujoProcesoService) {}

  @Post()
  create(@Body() createTipoFlujoProcesoDto: CreateTipoFlujoProcesoDto) {
    return this.tipoFlujoProcesoService.create(createTipoFlujoProcesoDto);
  }

  @Get()
  findAll() {
    return this.tipoFlujoProcesoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoFlujoProcesoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoFlujoProcesoDto: UpdateTipoFlujoProcesoDto) {
    return this.tipoFlujoProcesoService.update(id, updateTipoFlujoProcesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoFlujoProcesoService.remove(id);
  }
}
