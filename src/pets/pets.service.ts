import { Injectable } from '@nestjs/common';
import { Pet } from './pets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './create-pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepo: Repository<Pet>) {}

  async create(createPetDto: CreatePetDto) {
    const newPet = this.petRepo.create(createPetDto);

    return this.petRepo.save(newPet);
  }
  async findAll(): Promise<Pet[]> {
    return this.petRepo.find();
  }
}
