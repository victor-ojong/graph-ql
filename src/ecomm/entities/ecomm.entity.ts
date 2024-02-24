import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ecomm {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
