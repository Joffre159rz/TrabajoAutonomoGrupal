import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { jwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      }
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '50h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, jwtStrategy],
})
export class AuthModule {}
