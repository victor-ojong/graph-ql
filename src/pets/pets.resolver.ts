import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pets.entity';
import { CreatePetDto } from './create-pet.dto';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => Pet)
  createPet(@Args('createPetDto') createPetDto: CreatePetDto): Promise<Pet> {
    return this.petsService.create(createPetDto);
  }
}
