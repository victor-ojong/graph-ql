import { Injectable } from '@nestjs/common';
import { CreateEcommInput } from './dto/create-ecomm.input';
import { UpdateEcommInput } from './dto/update-ecomm.input';

@Injectable()
export class EcommService {
  create(createEcommInput: CreateEcommInput) {
    return 'This action adds a new ecomm';
  }

  findAll() {
    return `This action returns all ecomm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ecomm`;
  }

  update(id: number, updateEcommInput: UpdateEcommInput) {
    return `This action updates a #${id} ecomm`;
  }

  remove(id: number) {
    return `This action removes a #${id} ecomm`;
  }
}
