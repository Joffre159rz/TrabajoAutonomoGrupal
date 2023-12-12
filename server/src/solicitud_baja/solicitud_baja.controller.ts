// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ProcesoDeterminadoService } from './proceso_determinado.service';
// import { CreateProcesoDeterminadoDto } from './dto/proceso_determinado.dto';
// import { UpdateProcesoDeterminadoDto } from './dto/update-proceso_determinado.dto';

// @Controller('proceso-determinado')
// export class ProcesoDeterminadoController {
//   constructor(
//     private readonly procesoDeterminadoService: ProcesoDeterminadoService,
//   ) {}

//   @Post()
//   create(@Body() createProcesoDeterminadoDto: CreateProcesoDeterminadoDto) {
//     return this.procesoDeterminadoService.create(createProcesoDeterminadoDto);
//   }

//   @Get()
//   findAll() {
//     return this.procesoDeterminadoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.procesoDeterminadoService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateProcesoDeterminadoDto: UpdateProcesoDeterminadoDto,
//   ) {
//     return this.procesoDeterminadoService.update(
//       +id,
//       updateProcesoDeterminadoDto,
//     );
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.procesoDeterminadoService.remove(+id);
//   }
// }

import { SolicitudBajaMSG } from '../common/constants';
import { SolicitudBajaDto } from './dto/solicitud_baja.dto';
import { Observable } from 'rxjs';
import { ClientProxyCBM } from '../common/proxy/client-proxy';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ISolicitudBaja } from 'src/common/interfaces/solicitud_baja';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('solicitud-baja')
@Controller('api/v2/solicitud-baja')
export class SolicitudBajaController {
  constructor(private readonly clientProxy: ClientProxyCBM) {}
  private _clientProxySolicitudBaja =
    this.clientProxy.clientProxySolicitudBaja();
  @Post()
  create(
    @Body() solicitudBajaDTO: SolicitudBajaDto,
  ): Observable<ISolicitudBaja> {
    return this._clientProxySolicitudBaja.send(
      SolicitudBajaMSG.CREATE,
      solicitudBajaDTO,
    );
  }

  @Get()
  findAll(): Observable<ISolicitudBaja[]> {
    return this._clientProxySolicitudBaja.send(SolicitudBajaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ISolicitudBaja> {
    return this._clientProxySolicitudBaja.send(SolicitudBajaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() solicitudBajaDTO: SolicitudBajaDto,
  ): Observable<ISolicitudBaja> {
    return this._clientProxySolicitudBaja.send(SolicitudBajaMSG.UPDATE, {
      id,
      solicitudBajaDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxySolicitudBaja.send(SolicitudBajaMSG.DELETE, id);
  }
}
