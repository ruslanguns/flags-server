import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Question } from 'src/question/model/question';

@ObjectType()
export class Category {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  name: string;

  @Field(() => [Question])
  questions: Question[];
}
