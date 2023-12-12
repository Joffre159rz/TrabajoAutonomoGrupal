import { Injectable } from '@nestjs/common';
import { CreateDepartamentoUsuarioDto } from './dto/create-departamento_usuario.dto';
import { UpdateDepartamentoUsuarioDto } from './dto/update-departamento_usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DepartamentoUsuario, DepartamentoUsuarioDocument } from './schema/departamento_usuario.schema';

@Injectable()
export class DepartamentoUsuarioService {
  constructor(
    @InjectModel(DepartamentoUsuario.name) private DepartamentoUsuarioModel: Model<DepartamentoUsuarioDocument>
  ){}
  async create(createDepartamentoUsuarioDto: CreateDepartamentoUsuarioDto) {
    const departamentoUsuarioCreated = await this.DepartamentoUsuarioModel.create(createDepartamentoUsuarioDto)
    return departamentoUsuarioCreated;
  }

  async findAll() {
    const departamentoUsuarioFindAll = await this.DepartamentoUsuarioModel.find({})
      .populate('usuario_id', 'name email ciudadId roleId')
      .populate({
        path: 'usuario_id',
        populate: [
          { path: 'ciudadId', select: 'name' },
          { path: 'roleId', select: 'name' }
        ]
      })
      .populate('departamento_id', 'name');
  
    return departamentoUsuarioFindAll;
  }
  

  async findOne(id: string) {
    const departamentoUsuarioFindID = await this.DepartamentoUsuarioModel.findById(id)
    return departamentoUsuarioFindID;
  }

  async update(id: string, updateDepartamentoUsuarioDto: UpdateDepartamentoUsuarioDto) {
    const actualizardepartamentoUsuario = await this.DepartamentoUsuarioModel.findByIdAndUpdate(id, updateDepartamentoUsuarioDto)
    return actualizardepartamentoUsuario;
  }

  async remove(id: string) {
    const departamentoUsuarioRemove = await this.DepartamentoUsuarioModel.findByIdAndDelete(id)
    return departamentoUsuarioRemove;
  }
}
