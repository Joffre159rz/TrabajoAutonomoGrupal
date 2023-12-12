import { Test, TestingModule } from '@nestjs/testing';
import { TipoFlujoProcesoController } from './tipo_flujo_proceso.controller';
import { TipoFlujoProcesoService } from './tipo_flujo_proceso.service';

describe('TipoFlujoProcesoController', () => {
  let controller: TipoFlujoProcesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoFlujoProcesoController],
      providers: [TipoFlujoProcesoService],
    }).compile();

    controller = module.get<TipoFlujoProcesoController>(TipoFlujoProcesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
