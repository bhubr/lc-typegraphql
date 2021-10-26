import { InputType, Field } from 'type-graphql';
import SkillInput from './SkillInput';

@InputType()
export default class WilderInput {

  @Field()
  name: string;

  @Field({ nullable: true })
  city?: string;

  @Field(type => [SkillInput])
  skills: SkillInput[];
}