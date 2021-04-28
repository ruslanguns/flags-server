import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAnswerDTO {
  @IsString()
  @IsNotEmpty()
  @Field({ nullable: false })
  content: string;

  @IsBoolean()
  @Field({ nullable: false })
  isCorrect: boolean;

  @IsNotEmpty()
  @IsString()
  @Field({ nullable: false })
  questionId: string;
}
