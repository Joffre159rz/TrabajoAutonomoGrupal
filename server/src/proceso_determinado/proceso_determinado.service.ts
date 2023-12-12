// servicio
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProcesoDeterminado } from './entities/proceso_determinado.entity';
import { CreateProcesoDeterminadoInput } from './dto/inputs';

@Injectable()
export class ProcesoDeterminadoService {
  constructor(
    @InjectModel(ProcesoDeterminado.name)
    private readonly procesoModel: Model<ProcesoDeterminado>,
  ) {}

  async create(createProcesoDeterminadoInput: CreateProcesoDeterminadoInput): Promise<ProcesoDeterminado> {
    const newProcesoDeterminado = await this.procesoModel.create(createProcesoDeterminadoInput);
    return newProcesoDeterminado.save();
  }

  async findAll(): Promise<ProcesoDeterminado[]> {
    return this.procesoModel.find({ estado: true }).exec(); // Solo obtener registros con estado verdadero
  }

  async softDelete(id: string): Promise<void> {
    await this.procesoModel.findByIdAndUpdate(id, { estado: false }).exec(); // Cambiar el estado a falso
  }
}
