import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Answer } from 'src/answer/model/answer';
import { Category } from 'src/category/model/category';

@ObjectType()
export class Question {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  content: string;

  @Field(() => [Answer], { nullable: true })
  answers: Answer[];

  @Field(() => Category, { nullable: true })
  category: Category;

  @Field({ nullable: true })
  categoryId: string;
}
