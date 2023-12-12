import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FlujoProcesoService } from './flujo_proceso.service';
import { CreateFlujoProcesoDto } from './dto/create-flujo_proceso.dto';
import { UpdateFlujoProcesoDto } from './dto/update-flujo_proceso.dto';


//TODO http://localhost:3000/flujo-proceso

@ApiBearerAuth()
@ApiTags('flujo-proceso')
@Controller('flujo-proceso')
// @UseGuards(JwtAuthGuard)
export class FlujoProcesoController {
  constructor(private readonly flujoProcesoService: FlujoProcesoService) {}

  @Post()
  create(@Body() createFlujoProcesoDto: CreateFlujoProcesoDto) {
    return this.flujoProcesoService.createFlujoProceso(createFlujoProcesoDto);
  }

  @Get()
  findAll() {
    return this.flujoProcesoService.findAllFlujoProceso();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flujoProcesoService.findByIdFlujoProceso(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlujoProcesoDto: UpdateFlujoProcesoDto) {
    return this.flujoProcesoService.updateFlujoProceso(id, updateFlujoProcesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flujoProcesoService.removeFlujoProceso(id);
  }
}
