import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetPostArgs {
  @Field()
  id: string;
}
