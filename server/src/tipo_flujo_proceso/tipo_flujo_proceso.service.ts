import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoFlujoProcesoDto } from './dto/create-tipo_flujo_proceso.dto';
import { UpdateTipoFlujoProcesoDto } from './dto/update-tipo_flujo_proceso.dto';
import { TipoFlujoProceso, TipoFlujoProcesoDocument } from './schema/tipo_flujo_proceso.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoFlujoProcesoService {
  constructor(
    @InjectModel(TipoFlujoProceso.name) private tipoFlujoProcesoModel: Model<TipoFlujoProcesoDocument>
  ){}
  async create(createTipoFlujoProcesoDto: CreateTipoFlujoProcesoDto) {
    const { name } = createTipoFlujoProcesoDto;
    const existingtipoFlujoProceso = await this.tipoFlujoProcesoModel.findOne({ name });
    if (existingtipoFlujoProceso) {
      throw new ConflictException('El tipo de flujo de proceso ya existe.');
    }
    const tipoFlujoProcesoCreated = await this.tipoFlujoProcesoModel.create(createTipoFlujoProcesoDto)
    return tipoFlujoProcesoCreated;
  }

  async findAll() {
    const tipoFlujoProcesoFindAll = await this.tipoFlujoProcesoModel.find({})
    return tipoFlujoProcesoFindAll;
  }

  async findOne(id: string) {
    const tipoFlujoProcesoFindID = await this.tipoFlujoProcesoModel.findById(id)
    return tipoFlujoProcesoFindID;
  }

  async update(id: string, updateTipoFlujoProcesoDto: UpdateTipoFlujoProcesoDto) {
    const actualizartipoFlujoProceso = await this.tipoFlujoProcesoModel.findByIdAndUpdate(id, updateTipoFlujoProcesoDto)
    return actualizartipoFlujoProceso;
  }

  async remove(id: string) {
    const tipoFlujoProcesoRemove = await this.tipoFlujoProcesoModel.findByIdAndDelete(id)
    return tipoFlujoProcesoRemove;
  }
}
