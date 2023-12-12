import { Test, TestingModule } from '@nestjs/testing';
import { FlujoProcesoService } from './flujo_proceso.service';

describe('FlujoProcesoService', () => {
  let service: FlujoProcesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlujoProcesoService],
    }).compile();

    service = module.get<FlujoProcesoService>(FlujoProcesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
