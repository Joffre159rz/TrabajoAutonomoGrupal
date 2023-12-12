import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona, PersonaDocument } from './schema/persona.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PersonaService {
  constructor(
    @InjectModel(Persona.name) private personaModel: Model<PersonaDocument>
  ){}
  async create(createPersonaDto: CreatePersonaDto) {
    const { CI } = createPersonaDto;
    const existingPersona = await this.personaModel.findOne({ CI });
    if (existingPersona) {
      throw new ConflictException('La persona con esa CI ya existe.');
    }
    const personaCreated = await this.personaModel.create(createPersonaDto)
    return personaCreated;
  }

  async findAll() {
    const personaFindAll = await this.personaModel.find({})
    return personaFindAll;
  }

  async findOne(id: string) {
    const personaFindID = await this.personaModel.findById(id)
    return personaFindID;
  }

  async update(id: string, updatePersonaDto: UpdatePersonaDto) {
    const actualizarPersona = await this.personaModel.findByIdAndUpdate(id, updatePersonaDto)
    return actualizarPersona;
  }
    async remove(id: string) {
      const personaRemove = await this.personaModel.findByIdAndDelete(id)
      return personaRemove;
    }
}
