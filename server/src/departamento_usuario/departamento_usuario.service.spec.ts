import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentoUsuarioService } from './departamento_usuario.service';

describe('DepartamentoUsuarioService', () => {
  let service: DepartamentoUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartamentoUsuarioService],
    }).compile();

    service = module.get<DepartamentoUsuarioService>(DepartamentoUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
