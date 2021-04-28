import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Question } from 'src/question/model/question';

@ObjectType()
export class Answer {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ nullable: false })
  createdAt: Date;

  @Field({ nullable: false })
  updatedAt: Date;

  @Field({ nullable: false })
  content: string;

  @Field({ nullable: false })
  isCorrect: boolean;

  @Field({ nullable: false })
  questionId: string;

  @Field(() => Question, { nullable: false })
  question: Question;
}
