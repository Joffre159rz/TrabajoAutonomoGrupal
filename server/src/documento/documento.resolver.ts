// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   UseGuards,
// } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
// import { CreateDocumentoInput } from './dto/inputs/create-documento.input';
// import { UpdateDocumentoInput } from './dto/inputs/update-documento.input';
// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// @ApiBearerAuth()
// @ApiTags('documento')
// // @UseGuards(JwtAuthGuard)
// @Controller('documento')
// export class DocumentoController {
//   constructor(private readonly documentoService: DocumentoService) {}

//   @Post()
//   create(@Body() createDocumentoDto: CreateDocumentoInput) {
//     return this.documentoService.create(createDocumentoDto);
//   }

//   @Get()
//   findAll() {
//     return this.documentoService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.documentoService.findOne(id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateDocumentoDto: UpdateDocumentoInput,
//   ) {
//     return this.documentoService.update(id, updateDocumentoDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.documentoService.remove(id);
//   }
// }
// resolutor
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { DocumentoService } from './documento.service';
import { Documento } from './entities/documento.entity';
import { CreateDocumentoInput } from './dto/inputs';

@Resolver(() => Documento)
export class DocumentoResolver {
  constructor(private readonly DocumentoService: DocumentoService) {}

  @Mutation(() => Documento)
  async createDocumento(
    @Args('createDocumentoInput') createDocumentoInput: CreateDocumentoInput,
  ): Promise<Documento> {
    return this.DocumentoService.create(createDocumentoInput);
  }

  @Query(() => [Documento], { name: 'documentos' })
  async findAll(): Promise<Documento[]> {
    return this.DocumentoService.findAll();
  }

  @Mutation(() => Boolean)
  async softDeleteDocumento(@Args('id') id: string): Promise<boolean> {
    await this.DocumentoService.softDelete(id);
    return true;
  }
}
