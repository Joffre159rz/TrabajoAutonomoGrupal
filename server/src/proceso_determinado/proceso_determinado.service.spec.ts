import { Test, TestingModule } from '@nestjs/testing';
import { ProcesoDeterminadoService } from './proceso_determinado.service';

describe('ProcesoDeterminadoService', () => {
  let service: ProcesoDeterminadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcesoDeterminadoService],
    }).compile();

    service = module.get<ProcesoDeterminadoService>(ProcesoDeterminadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
