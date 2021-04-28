import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Answer } from 'src/answer/model/answer';

@ObjectType()
export class Question {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ nullable: false })
  createdAt: Date;

  @Field({ nullable: false })
  updatedAt: Date;

  @Field({ nullable: false })
  content: string;

  @Field({ nullable: false })
  categoryId: Question[];

  @Field(() => [Answer])
  answers: Answer[];
}
