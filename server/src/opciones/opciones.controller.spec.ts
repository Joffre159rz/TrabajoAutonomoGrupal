import { Test, TestingModule } from '@nestjs/testing';
import { OpcionesController } from './opciones.controller';
import { OpcionesService } from './opciones.service';

describe('OpcionesController', () => {
  let controller: OpcionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcionesController],
      providers: [OpcionesService],
    }).compile();

    controller = module.get<OpcionesController>(OpcionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
