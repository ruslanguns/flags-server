import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Question } from 'src/question/model/question';

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

  @Field(() => [Question])
  questions: Question[];
}
