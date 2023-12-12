import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CiudadService } from './ciudad.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';

//TODO http://localhost:3000/ciudad

@ApiBearerAuth()
@ApiTags('ciudad')
@Controller('ciudad')
@UseGuards(JwtAuthGuard)
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post()
  create(@Body() createCiudadDto: CreateCiudadDto) {
    return this.ciudadService.createCiudad(createCiudadDto);
  }

  @Get()
  findAll() {
    return this.ciudadService.findAllCiudad();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadService.findByIdCiudad(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCiudadDto: UpdateCiudadDto) {
    return this.ciudadService.updateCiudad(id, updateCiudadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadService.removeCiudad(id);
  }
}
