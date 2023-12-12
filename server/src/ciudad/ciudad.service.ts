import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { Ciudad, CiudadDocument } from './schema/ciudad.schema';
@Injectable()
export class CiudadService {

  constructor(
    @InjectModel(Ciudad.name) private ciudadModel: Model<CiudadDocument>
  ){}

  async createCiudad(createCiudadDto: CreateCiudadDto) {
    const { name } = createCiudadDto;
    const ciudadExiste = await this.ciudadModel.findOne({name});
    if (ciudadExiste) {
      throw new ConflictException(`La ciudad con el nombre "${name}" ya existe.`);
    }
    const ciudadCreate = await this.ciudadModel.create(createCiudadDto);
    return ciudadCreate;
  }

  async findAllCiudad() {
    const ciudadFindAll = await this.ciudadModel.find({});
    return ciudadFindAll;
  }

  async findByIdCiudad(id: string) {
    const ciudadFindById = await this.ciudadModel.findById(id)
    if (!ciudadFindById) {
      throw new NotFoundException(`La ciudad que desea consultar con la id "${id}" no existe.`);
    }
    return ciudadFindById;
  }

  async updateCiudad(id: string, updateCiudadDto: UpdateCiudadDto) {
    const { name } = updateCiudadDto;
    const ciudadExiste = await this.ciudadModel.findOne({name});
    if (ciudadExiste) {
      throw new ConflictException(`La ciudad con el nombre "${name}" ya existe.`);
    }
    const ciudadUpdate = await this.ciudadModel.findByIdAndUpdate(id, updateCiudadDto);
    return ciudadUpdate;
  }

  async removeCiudad(id: string) { 
    const ciudadExiste = await this.ciudadModel.findById(id);
    if (!ciudadExiste) {
      throw new NotFoundException(`La ciudad que desea eliminar no existe.`);
    }
    const ciudadRemove = await this.ciudadModel.findByIdAndDelete(id)
    return ciudadRemove;
  }
}
