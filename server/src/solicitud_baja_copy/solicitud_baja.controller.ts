import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SolicitudBajaService } from './solicitud_baja.service';
import { CreateSolicitudBajaDto } from './dto/create-solicitud_baja.dto';
import { UpdateSolicitudBajaDto } from './dto/update-solicitud_baja.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('solicitud-baja')
// @UseGuards(JwtAuthGuard)
@Controller('solicitud-baja')
export class SolicitudBajaController {
  constructor(private readonly solicitudBajaService: SolicitudBajaService) {}

  @Post()
  create(@Body() createSolicitudBajaDto: CreateSolicitudBajaDto) {
    return this.solicitudBajaService.create(createSolicitudBajaDto);
  }

  @Get()
  findAll() {
    return this.solicitudBajaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudBajaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitudBajaDto: UpdateSolicitudBajaDto) {
    return this.solicitudBajaService.update(id, updateSolicitudBajaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudBajaService.remove(id);
  }
}
