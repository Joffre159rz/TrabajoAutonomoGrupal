import { Test, TestingModule } from '@nestjs/testing';
import { FlujoProcesoController } from './flujo_proceso.controller';
import { FlujoProcesoService } from './flujo_proceso.service';

describe('FlujoProcesoController', () => {
  let controller: FlujoProcesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlujoProcesoController],
      providers: [FlujoProcesoService],
    }).compile();

    controller = module.get<FlujoProcesoController>(FlujoProcesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
