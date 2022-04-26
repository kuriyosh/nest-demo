import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { GetUserArgs } from './getUser.args';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  user(@Args() { id }: GetUserArgs): Promise<User> {
    return this.userService.findOneById(id);
  }
}
