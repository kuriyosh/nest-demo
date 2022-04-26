import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../post/post.model';

@Entity()
@ObjectType('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany((type) => Post, (post) => post.user)
  @Field(() => [Post])
  posts: [Post];
}
