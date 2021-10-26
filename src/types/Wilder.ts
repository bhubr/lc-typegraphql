import { ObjectType, Field, ID } from 'type-graphql';
import Skill from './Skill';

@ObjectType()
export default class Wilder {

  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  city?: string;

  @Field(type => [Skill])
  skills: Skill[];
}