import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Question } from '../../question/model/question';

@ObjectType()
export class Category {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ nullable: false })
  createdAt: Date;

  @Field({ nullable: false })
  updatedAt: Date;

  @Field({ nullable: false })
  name: string;

  @Field(() => [Question], { nullable: false })
  question: Question[];
}
