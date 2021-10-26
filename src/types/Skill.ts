import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export default class Skill {

  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Int)
  votes: number;

  // constructor(title: string, votes: number) {
  //   this.title = title;
  //   this.votes = votes;
  // }
}
