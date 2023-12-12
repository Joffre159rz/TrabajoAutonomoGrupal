import { Test, TestingModule } from '@nestjs/testing';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';

describe('TipoFlujoProcesoService', () => {
  let service: TipoFlujoProcesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoFlujoProcesoService],
    }).compile();

    service = module.get<TipoFlujoProcesoService>(TipoFlujoProcesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
