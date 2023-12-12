import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOpcioneDto } from './dto/create-opcione.dto';
import { UpdateOpcioneDto } from './dto/update-opcione.dto';
import { Opciones, OpcionesDocument } from './schema/opciones.schema';

@Injectable()
export class OpcionesService {

  constructor(
    @InjectModel(Opciones.name) private opcionesModel: Model<OpcionesDocument>
  ){}

  async createOpciones(createOpcioneDto: CreateOpcioneDto) {
    const { type } = createOpcioneDto;
    const opcionesExist = await this.opcionesModel.findOne({type});
    if (opcionesExist) {
      throw new ConflictException(`La opción con el tipo "${type}" ya existe.`);
    }
    const opcionesCreate = await this.opcionesModel.create(createOpcioneDto);
    return opcionesCreate;
  }

  async findAllOpciones() {
    const opcionesFindAll = await this.opcionesModel.find({});
    return opcionesFindAll;
  }

  async findByIdOpciones(id: string) {
    const opcionesFindById = await this.opcionesModel.findById(id)
    if (!opcionesFindById) {
      throw new NotFoundException(`La opción que desea consultar con la id "${id}" no existe.`);
    }
    return opcionesFindById;
  }

  async updateOpciones(id: string, updateOpcioneDto: UpdateOpcioneDto) {
    const { type } = updateOpcioneDto;
    const opcionesExist = await this.opcionesModel.findOne({type});
    if (opcionesExist) {
      throw new ConflictException(`La opción con el tipo "${type}" ya existe.`);
    }
    const opcionesUpdate = await this.opcionesModel.findByIdAndUpdate(id, updateOpcioneDto);
    return opcionesUpdate;
  }

  async removeOpciones(id: string) {
    const opcionesExist = await this.opcionesModel.findById(id);
    if (!opcionesExist) {
      throw new NotFoundException(`La opción que desea eliminar con la id "${id}" no existe.`);
    }
    const opcionesRemove = await this.opcionesModel.findByIdAndDelete(id)
    return opcionesRemove;
  }
}
