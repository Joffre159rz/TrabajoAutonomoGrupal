// resolutor
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { ProcesoDeterminado } from './entities/proceso_determinado.entity';
import { CreateProcesoDeterminadoInput } from './dto/inputs';

@Resolver(() => ProcesoDeterminado)
export class ProcesoDeterminadoResolver {
  constructor(private readonly procesoDeterminadoService: ProcesoDeterminadoService) {}

  @Mutation(() => ProcesoDeterminado)
  async createProcesoDeterminado(
    @Args('createProcesoDeterminadoInput') createProcesoDeterminadoInput: CreateProcesoDeterminadoInput,
  ): Promise<ProcesoDeterminado> {
    return this.procesoDeterminadoService.create(createProcesoDeterminadoInput);
  }

  @Query(() => [ProcesoDeterminado], { name: 'procesosDeterminados' })
  async findAll(): Promise<ProcesoDeterminado[]> {
    return this.procesoDeterminadoService.findAll();
  }

  @Mutation(() => Boolean)
  async softDeleteProcesoDeterminado(@Args('id') id: string): Promise<boolean> {
    await this.procesoDeterminadoService.softDelete(id);
    return true;
  }
}
