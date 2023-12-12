import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OpcionesService } from './opciones.service';
import { CreateOpcioneDto } from './dto/create-opcione.dto';
import { UpdateOpcioneDto } from './dto/update-opcione.dto';

//TODO http://localhost:3000/opciones

@ApiBearerAuth()
@ApiTags('opciones')
@Controller('opciones')
// @UseGuards(JwtAuthGuard)
export class OpcionesController {
  constructor(private readonly opcionesService: OpcionesService) {}

  @Post()
  create(@Body() createOpcioneDto: CreateOpcioneDto) {
    return this.opcionesService.createOpciones(createOpcioneDto);
  }

  @Get()
  findAll() {
    return this.opcionesService.findAllOpciones();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opcionesService.findByIdOpciones(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpcioneDto: UpdateOpcioneDto) {
    return this.opcionesService.updateOpciones(id, updateOpcioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opcionesService.removeOpciones(id);
  }
}
