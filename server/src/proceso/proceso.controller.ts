import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProcesoService } from './proceso.service';
import { CreateProcesoDto } from './dto/create-proceso.dto';
import { UpdateProcesoDto } from './dto/update-proceso.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('proceso')
@UseGuards(JwtAuthGuard)
@Controller('proceso')
export class ProcesoController {
  constructor(private readonly procesoService: ProcesoService) {}

  @Post()
  create(@Body() createProcesoDto: CreateProcesoDto) {
    return this.procesoService.create(createProcesoDto);
  }

  @Get()
  findAll() {
    return this.procesoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procesoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcesoDto: UpdateProcesoDto) {
    return this.procesoService.update(id, updateProcesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procesoService.remove(id);
  }
}
