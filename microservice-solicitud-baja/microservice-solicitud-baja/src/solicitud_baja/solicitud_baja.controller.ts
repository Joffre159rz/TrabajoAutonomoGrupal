// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { solicitudBajaService } from './documento.service';
// import { CreateDocumentoDto } from './dto/create-documento.dto';
// import { UpdateDocumentoDto } from './dto/update-documento.dto';

// @Controller('documento')
// export class DocumentoController {
//   constructor(private readonly documentoService: DocumentoService) {}

//   @Post()
//   create(@Body() createDocumentoDto: CreateDocumentoDto) {
//     return this.documentoService.create(createDocumentoDto);
//   }

//   @Get()
//   findAll() {
//     return this.documentoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.documentoService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateDocumentoDto: UpdateDocumentoDto) {
//     return this.documentoService.update(+id, updateDocumentoDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.documentoService.remove(+id);
//   }
// }
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SolicitudBajaDTO } from './dto/solicitud_baja.dto';
import { SolicitudBajaService } from './solicitud_baja.service';
import { Controller } from '@nestjs/common';
import { SolicitudBajaMSG } from 'src/common/constants';

@Controller()
export class SolicitudBajaController {
  constructor(private readonly solicitudBajaService: SolicitudBajaService) {}

  @MessagePattern(SolicitudBajaMSG.CREATE)
  create(@Payload() solicitudBajaDTO: SolicitudBajaDTO) {
    return this.solicitudBajaService.create(solicitudBajaDTO);
  }

  @MessagePattern(SolicitudBajaMSG.FIND_ALL)
  findAll() {
    return this.solicitudBajaService.findAll();
  }

  @MessagePattern(SolicitudBajaMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.solicitudBajaService.findOne(id);
  }

  @MessagePattern(SolicitudBajaMSG.UPDATE)
  update(@Payload() payload) {
    return this.solicitudBajaService.update(
      payload.id,
      payload.SolicitudBajaDTO,
    );
  }

  @MessagePattern(SolicitudBajaMSG.DELETE)
  delete(@Payload() id: string) {
    return this.solicitudBajaService.delete(id);
  }
}
