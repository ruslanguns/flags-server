import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class QuizDTO {
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  categoryId: string;
}
