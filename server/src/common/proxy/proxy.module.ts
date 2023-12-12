import { Module } from '@nestjs/common';
import { ClientProxyCBM } from './client-proxy';

@Module({
  providers: [ClientProxyCBM],
  exports: [ClientProxyCBM],
})
export class ProxyModule {}
