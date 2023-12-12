import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import {hash} from 'bcrypt'

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ){}

  async create(createUserDto: CreateUserDto) {

    const {password} = createUserDto;
    const plainToHash = await hash(password, 10);
    createUserDto = {...createUserDto, password: plainToHash}
    const userCreated = await this.userModel.create(createUserDto)
    return userCreated;

  }
  prueba(): String[] {
    return ['uno', 'dos', 'tres'];
  }
  async findAll() {
    const userFindAll = await this.userModel.find({}).populate("ciudadId","name").populate("roleId","name")
    return userFindAll;
  }
  async findbyOne(name:string) {
    const userFind = await this.userModel.find({name:name}).populate("ciudadId", "name").populate("roleId", "name")
    return userFind;
  }
  async findOne(id: string) {
    const userFindId = await this.userModel.findById(id)
    return userFindId;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const {password} = updateUserDto;
    const plainToHash = await hash(password, 10);
    updateUserDto = {...updateUserDto, password:plainToHash};
    const actualizarUser = await this.userModel.findByIdAndUpdate(id, updateUserDto)
    return actualizarUser;
  }

  async remove(id: string) {
    const userRemove = await this.userModel.findByIdAndDelete(id)
    return userRemove;
  }
}
