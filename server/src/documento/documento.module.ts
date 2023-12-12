// import { Module } from '@nestjs/common';
// import { DocumentoService } from './documento.service';
// import { DocumentoResolver } from './documento.resolver';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Documento, DocumentoSchema } from './schema/documento.schema';

// @Module({
//   imports: [
//     MongooseModule.forFeature([
//       {
//         name: Documento.name,
//         schema: DocumentoSchema,
//       },
//     ]),
//   ],
//   controllers: [DocumentoResolver],
//   providers: [DocumentoService],
// })
// export class DocumentoModule {}
import { Module } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { DocumentoResolver } from './documento.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Documento } from './entities/documento.entity';
import { DocumentoSchema } from './schema/documento.schema';

@Module({
  providers: [DocumentoResolver, DocumentoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Documento.name,
        schema: DocumentoSchema,
      },
    ]),
  ],
  // controllers: [DocumentoController],
})
export class DocumentoModule {}
