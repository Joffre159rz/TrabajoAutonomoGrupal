import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { CreateDepartamentoUsuarioDto } from './dto/create-departamento_usuario.dto';
import { UpdateDepartamentoUsuarioDto } from './dto/update-departamento_usuario.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('departamento-usuario')
// @UseGuards(JwtAuthGuard)
@Controller('departamento-usuario')
export class DepartamentoUsuarioController {
  constructor(private readonly departamentoUsuarioService: DepartamentoUsuarioService) {}

  @Post()
  create(@Body() createDepartamentoUsuarioDto: CreateDepartamentoUsuarioDto) {
    return this.departamentoUsuarioService.create(createDepartamentoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.departamentoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentoUsuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartamentoUsuarioDto: UpdateDepartamentoUsuarioDto) {
    return this.departamentoUsuarioService.update(id, updateDepartamentoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentoUsuarioService.remove(id);
  }
}
