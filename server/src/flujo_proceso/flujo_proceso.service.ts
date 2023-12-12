import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFlujoProcesoDto } from './dto/create-flujo_proceso.dto';
import { UpdateFlujoProcesoDto } from './dto/update-flujo_proceso.dto';
import { FlujoProceso, FlujoProcesoDocument } from './schema/flujo_proceso.schema';

@Injectable()
export class FlujoProcesoService {

  constructor(
    @InjectModel(FlujoProceso.name) private flujoProcesoModel: Model<FlujoProcesoDocument>
  ){}


  async createFlujoProceso(createFlujoProcesoDto: CreateFlujoProcesoDto) {
    const { name } = createFlujoProcesoDto;
    const flujoProcesoExist = await this.flujoProcesoModel.findOne({name});
    if (flujoProcesoExist) {
      throw new ConflictException(`El flujo de proceso con el nombre "${name}" ya existe.`);
    }
    //TODO Falta verificar la existencia de las id de las referencias
    const flujoProcesoCreate = await this.flujoProcesoModel.create(createFlujoProcesoDto);
    return flujoProcesoCreate;
  }

  async findAllFlujoProceso() {
    const flujoProcesoFindAll = await this.flujoProcesoModel.find({})
    .populate('opciones_id', 'type')
    .populate('tipo_flujo_proceso_id' , 'name');
    return flujoProcesoFindAll;
  }

  async findByIdFlujoProceso(id: string) {
    const flujoProcesoFindById = await this.flujoProcesoModel.findById(id)
    if (!flujoProcesoFindById) {
      throw new NotFoundException(`El flujo de proceso que desea consultar con la id "${id}" no existe.`);
    }
    return flujoProcesoFindById;
  }

  async updateFlujoProceso(id: string, updateFlujoProcesoDto: UpdateFlujoProcesoDto) {
    const { name } = updateFlujoProcesoDto;
    const flujoProcesoExist = await this.flujoProcesoModel.findOne({name});
    if (flujoProcesoExist) {
      throw new ConflictException(`El flujo de proceso con el nombre "${name}" ya existe.`);
    }
    const flujoProcesoUpdate = await this.flujoProcesoModel.findByIdAndUpdate(id, updateFlujoProcesoDto);
    return flujoProcesoUpdate;
  }

  async removeFlujoProceso(id: string) {
    console.log('here'+id);
    
    const flujoProcesoExist = await this.flujoProcesoModel.findById(id);
    if (!flujoProcesoExist) {
      throw new NotFoundException(`El flujo de proceso que desea eliminar con la id "${id}" no existe.`);
    }
    const flujoProcesoRemove = await this.flujoProcesoModel.findByIdAndDelete(id)
    return flujoProcesoRemove;
  }
}
