import { InputType, Field, ID, Int } from 'type-graphql';

@InputType()
export default class SkillInput {
  @Field()
  title: string;

  @Field(type => Int)
  votes: number;
}
