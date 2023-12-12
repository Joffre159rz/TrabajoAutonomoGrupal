import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentoUsuarioController } from './departamento_usuario.controller';
import { DepartamentoUsuarioService } from './departamento_usuario.service';

describe('DepartamentoUsuarioController', () => {
  let controller: DepartamentoUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartamentoUsuarioController],
      providers: [DepartamentoUsuarioService],
    }).compile();

    controller = module.get<DepartamentoUsuarioController>(DepartamentoUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
