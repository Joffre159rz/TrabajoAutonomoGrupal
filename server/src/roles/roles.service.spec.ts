import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RolesService } from './roles.service';
import { RolesDocument,Roles } from './schema/roles.schema';
import { NotFoundException } from '@nestjs/common';

describe('RolesService', () => {
  let service: RolesService;
  let model: Model<RolesDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService,{
        provide: getModelToken(Roles.name),
        useValue: {
          findById: jest.fn(),
        },
      }],
    }).compile();

    service = module.get<RolesService>(RolesService);
    model = module.get<Model<RolesDocument>>(getModelToken(Roles.name));
  });

  describe('findOne', () => {
    it('should return a Role object when given a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockProcesoDet = new Roles();
      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockProcesoDet);

      //Act
      const result = await service.findOne(mockId);

      //Assert
      expect(result).toEqual(mockProcesoDet);
    });
    it('should throw a NotFoundException when given an invalid id', async () => {
      //Arrange
      const mockId = 'invalid-id';
      jest.spyOn(model, 'findById').mockResolvedValueOnce(null);

      //UnAssert
      await expect(service.findOne(mockId)).rejects.toThrowError('El rol que desea consultar con la id "invalid-id" no existe.');
    });
  });
  describe('findAll', () => {
    it('should return an array of roles when roles exist', async () => {
      // Arrange
      const mockRoles = [new Roles(), new Roles()];
      jest.spyOn(model, 'find').mockResolvedValueOnce(mockRoles);

      // Act
      const result = await service.findAll();

      // Assert
      expect(result).toEqual(mockRoles);
    });
    it('should throw a NotFoundException when no roles exist', async () => {
      // Arrange
      jest.spyOn(model, 'find').mockResolvedValueOnce([]);

      // Act and Assert
      await expect(service.findAll()).rejects.toThrowError(NotFoundException);
    });
  });
});
