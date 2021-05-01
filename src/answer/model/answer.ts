import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Question } from 'src/question/model/question';

@ObjectType()
export class Answer {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  content: string;

  @Field({ nullable: true })
  isCorrect: boolean;

  @Field({ nullable: true })
  questionId: string;

  @Field(() => Question, { nullable: true })
  question: Question;

  @Field({ nullable: true })
  url: string;
}
