import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudBajaController } from './solicitud_baja.controller';
import { SolicitudBajaService } from './solicitud_baja.service';

describe('SolicitudBajaController', () => {
  let controller: SolicitudBajaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudBajaController],
      providers: [SolicitudBajaService],
    }).compile();

    controller = module.get<SolicitudBajaController>(SolicitudBajaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
