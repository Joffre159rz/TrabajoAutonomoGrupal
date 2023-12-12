import { Module } from '@nestjs/common';
import { ProxyModule } from '../common/proxy/proxy.module';
import { SolicitudBajaController } from './solicitud_baja.controller';

@Module({
  imports: [ProxyModule],
  controllers: [SolicitudBajaController],
})
export class SolicitudBajaModule {}
