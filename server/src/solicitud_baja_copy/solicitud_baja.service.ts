import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSolicitudBajaDto } from './dto/create-solicitud_baja.dto';
import { UpdateSolicitudBajaDto } from './dto/update-solicitud_baja.dto';
import { SolicitudBaja, SolicitudBajaDocument } from './schema/solicitud_baja.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SolicitudBajaService {
  constructor(
    @InjectModel(SolicitudBaja.name) private solicitudBajaModel: Model<SolicitudBajaDocument>
  ){}
  async create(createSolicitudBajaDto: CreateSolicitudBajaDto) {
    const { name } = createSolicitudBajaDto;
    const solicitudBajaExiste = await this.solicitudBajaModel.findOne({name});
    if (solicitudBajaExiste) {
      throw new ConflictException(`La solicitud de Baja con el nombre "${name}" ya existe.`);
    }
    const solicitudBajaCreate = await this.solicitudBajaModel.create(createSolicitudBajaDto);
    return solicitudBajaCreate;
  }

  async findAll() {
    const solicitudBajaFindAll = await this.solicitudBajaModel.find({});
    return solicitudBajaFindAll;
  }

  async findOne(id: string) {
    const solicitudBajaFindById = await this.solicitudBajaModel.findById(id)
    if (!solicitudBajaFindById) {
      throw new NotFoundException(`La solicitud de Baja que desea consultar con la id "${id}" no existe.`);
    }
    return solicitudBajaFindById;
  }

  async update(id: string, updateSolicitudBajaDto: UpdateSolicitudBajaDto) {
    const solicitudBajaUpdate = await this.solicitudBajaModel.findByIdAndUpdate(id, updateSolicitudBajaDto);
    return solicitudBajaUpdate;
  }

  async remove(id: string) {
    const solicitudBajaExiste = await this.solicitudBajaModel.findById(id);
    if (!solicitudBajaExiste) {
      throw new NotFoundException(`La solicitud de Baja que desea eliminar no existe.`);
    }
    const solicitudBajaRemove = await this.solicitudBajaModel.findByIdAndDelete(id)
    return solicitudBajaRemove;
  }
}
