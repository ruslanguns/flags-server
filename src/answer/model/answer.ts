import { Field, ID, ObjectType } from '@nestjs/graphql';

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
}
