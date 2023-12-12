// import { Injectable } from "@nestjs/common";
// import { CreateDocumentoDto } from "./dto/documento.dto";
// import { UpdateDocumentoDto } from "./dto/update-documento.dto";

// @Injectable()
// export class DocumentoService {
//   create(createDocumentoDto: CreateDocumentoDto) {
//     return "This action adds a new documento";
//   }

//   findAll() {
//     return `This action returns all documento`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} documento`;
//   }

//   update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
//     return `This action updates a #${id} documento`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} documento`;
//   }
// }
import { SolicitudBajaDTO } from './dto/solicitud_baja.dto';
import { SOLICITUDBAJA } from '../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISolicitudBaja } from 'src/common/interfaces/solicitud_baja.interface';
import axios from 'axios';
import * as moment from 'moment';

@Injectable()
export class SolicitudBajaService {
  constructor(
    @InjectModel(SOLICITUDBAJA.name)
    private readonly model: Model<ISolicitudBaja>,
  ) {}

  async create(solicitudBajaDTO: SolicitudBajaDTO): Promise<ISolicitudBaja> {
    const newSolicitudBaja = new this.model(solicitudBajaDTO);
    return await newSolicitudBaja.save();
  }

  async findAll(): Promise<ISolicitudBaja[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ISolicitudBaja> {
    return await this.model.findById(id);
  }

  async update(
    id: string,
    solicitudBajaDTO: SolicitudBajaDTO,
  ): Promise<ISolicitudBaja> {
    return await this.model.findByIdAndUpdate(id, solicitudBajaDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
