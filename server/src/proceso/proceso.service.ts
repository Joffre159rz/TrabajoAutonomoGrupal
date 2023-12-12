import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProcesoDto } from './dto/create-proceso.dto';
import { UpdateProcesoDto } from './dto/update-proceso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Proceso, ProcesoDocument } from './schema/proceso.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProcesoService {
  constructor(
    @InjectModel(Proceso.name) private procesoModel: Model<ProcesoDocument>
  ){}
  async create(createProcesoDto: CreateProcesoDto) {
    const { name } = createProcesoDto;
    const existingProceso = await this.procesoModel.findOne({ name });
    if (existingProceso) {
      throw new ConflictException('El proceso ya existe.');
    }
    const procesoCreated = await this.procesoModel.create(createProcesoDto)
    return procesoCreated;
  }

  async findAll() {
    const procesoFindAll = await this.procesoModel.find({})
    return procesoFindAll;
  }

  async findOne(id: string) {
    const procesoFindID = await this.procesoModel.findById(id)
    return procesoFindID;
  }

  async update(id: string, updateProcesoDto: UpdateProcesoDto) {
    const actualizarProceso = await this.procesoModel.findByIdAndUpdate(id, updateProcesoDto)
    return actualizarProceso;
  }

  async remove(id: string) {
    const procesoRemove = await this.procesoModel.findByIdAndDelete(id)
    return procesoRemove;
  }
}
