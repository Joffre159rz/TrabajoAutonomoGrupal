// import { Injectable } from '@nestjs/common';
// import { CreateDocumentoDto } from './dto/inputs/create-documento.input';
// import { UpdateDocumentoDto } from './dto/inputs/update-documento.input';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Documento, DocumentoDocument } from './schema/documento.schema';

// @Injectable()
// export class DocumentoService {
//   constructor(
//     @InjectModel(Documento.name)
//     private DocumentoModel: Model<DocumentoDocument>,
//   ) {}
//   async create(createDocumentoDto: CreateDocumentoDto) {
//     const documentoCreated = await this.DocumentoModel.create(
//       createDocumentoDto,
//     );
//     return documentoCreated;
//   }

//   async findAll() {
//     const documentoFindAll = await this.DocumentoModel.find({})
//       .populate('persona_id', 'name CI')
//       .populate('proceso_determinado_id', 'name');
//     return documentoFindAll;
//   }

//   async findOne(id: string) {
//     const documentoFindID = await this.DocumentoModel.findById(id);
//     return documentoFindID;
//   }

//   async update(id: string, updateDocumentoDto: UpdateDocumentoDto) {
//     const actualizarDocumento = await this.DocumentoModel.findByIdAndUpdate(
//       id,
//       UpdateDocumentoDto,
//     );
//     return actualizarDocumento;
//   }

//   async remove(id: string) {
//     const documenmtoRemove = await this.DocumentoModel.findByIdAndDelete(id);
//     return documenmtoRemove;
//   }
// }

// servicio
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Documento } from './entities/documento.entity';
import { CreateDocumentoInput } from './dto/inputs';

@Injectable()
export class DocumentoService {
  constructor(
    @InjectModel(Documento.name)
    private readonly procesoModel: Model<Documento>,
  ) {}

  async create(createDocumentoInput: CreateDocumentoInput): Promise<Documento> {
    const newDocumento = await this.procesoModel.create(createDocumentoInput);
    return newDocumento.save();
  }

  async findAll(): Promise<Documento[]> {
    return this.procesoModel.find({ estado: true }).exec(); // Solo obtener registros con estado verdadero
  }

  async softDelete(id: string): Promise<void> {
    await this.procesoModel.findByIdAndUpdate(id, { estado: false }).exec(); // Cambiar el estado a falso
  }
}
