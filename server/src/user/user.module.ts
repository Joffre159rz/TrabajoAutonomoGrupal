import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocketGateway } from 'src/socket/socket.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    // TypeOrmModule.forFeature([
    //   User
    // ])
  ],
  controllers: [UserController],
  providers: [UserService, SocketGateway],
  exports: [UserService],
})
export class UserModule {}
