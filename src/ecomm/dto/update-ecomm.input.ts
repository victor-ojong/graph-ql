import { CreateEcommInput } from './create-ecomm.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEcommInput extends PartialType(CreateEcommInput) {
  @Field(() => Int)
  id: number;
}
