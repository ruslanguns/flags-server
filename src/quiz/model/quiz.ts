import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class QuizAnswer {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  content: string;
}

@ObjectType()
export class QuizCategory {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;
}

@ObjectType()
export class Quiz {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  content: string;

  @Field(() => [QuizAnswer], { nullable: true })
  answers: QuizAnswer[];

  @Field(() => QuizCategory, { nullable: true })
  category: QuizCategory;

  @Field({ nullable: true })
  createdAt: Date;
}
