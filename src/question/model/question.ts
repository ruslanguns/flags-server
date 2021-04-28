import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Answer } from 'src/answer/model/answer';
import { Category } from 'src/category/model/category';

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

  @Field(() => [Answer], { nullable: false })
  answers: Answer[];

  @Field(() => Category, { nullable: false })
  category: Category;

  @Field({ nullable: false })
  categoryId: string;
}
