import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudBajaService } from './solicitud_baja.service';

describe('SolicitudBajaService', () => {
  let service: SolicitudBajaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudBajaService],
    }).compile();

    service = module.get<SolicitudBajaService>(SolicitudBajaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
