import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePetDto {
  @Field({ nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
