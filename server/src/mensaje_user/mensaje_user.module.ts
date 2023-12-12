import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensaje_user.service';
import { MensajesWsGateway } from './mensaje_user.gateway';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports: [UserModule]
})
export class MensajeUserModule {}
