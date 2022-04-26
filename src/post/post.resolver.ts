import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.model';
import { GetPostArgs } from './getPost.args';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => Post)
  post(@Args() { id }: GetPostArgs): Promise<Post> {
    return this.postService.findOneById(id);
  }

  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return this.postService.findAll();
  }
}
