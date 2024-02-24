import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EcommService } from './ecomm.service';
import { Ecomm } from './entities/ecomm.entity';
import { CreateEcommInput } from './dto/create-ecomm.input';
import { UpdateEcommInput } from './dto/update-ecomm.input';

@Resolver(() => Ecomm)
export class EcommResolver {
  constructor(private readonly ecommService: EcommService) {}

  @Mutation(() => Ecomm)
  createEcomm(@Args('createEcommInput') createEcommInput: CreateEcommInput) {
    return this.ecommService.create(createEcommInput);
  }

  @Query(() => [Ecomm], { name: 'ecomm' })
  findAll() {
    return this.ecommService.findAll();
  }

  @Query(() => Ecomm, { name: 'ecomm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ecommService.findOne(id);
  }

  @Mutation(() => Ecomm)
  updateEcomm(@Args('updateEcommInput') updateEcommInput: UpdateEcommInput) {
    return this.ecommService.update(updateEcommInput.id, updateEcommInput);
  }

  @Mutation(() => Ecomm)
  removeEcomm(@Args('id', { type: () => Int }) id: number) {
    return this.ecommService.remove(id);
  }
}
