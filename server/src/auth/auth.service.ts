import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from "bcrypt";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

  constructor(
    private configService: ConfigService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ){}

  async register(userObject: RegisterAuthDto){

    const { password } = userObject; //TODO la contraseña es texto plano, debemos aplicar un hash
    const plainToHash = await hash(password, 10) //TODO nos encripta la contraseña
    userObject = {...userObject, password:plainToHash};
    return this.userModel.create(userObject)

  }

  async login(userObject: LoginAuthDto){

    const { email, password } = userObject;

    const findUser = await this.userModel
      .findOne({ email })
      .populate('roleId'); // Agregar populate para obtener los datos de roleId

    if (!findUser) {
      throw new HttpException('El usuario no existe', 404);
    }

    const checkPass = await compare(password, findUser.password);

    if (!checkPass) {
      throw new HttpException('Contraseña incorrecta', 403);
    }

    const payload = { id: findUser._id, name: findUser.name };
    const token = this.jwtService.sign(payload, { secret: new ConfigService().get<string>('SECRET') });

    const data = {
      user: findUser,
      token,
    };

    return data;

  }
}
