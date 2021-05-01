import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAnswerDTO {
  @IsString()
  @IsNotEmpty()
  @Field({ nullable: true })
  content: string;

  @IsBoolean()
  @Field({ nullable: true })
  isCorrect: boolean;

  @IsNotEmpty()
  @IsString()
  @Field({ nullable: true })
  questionId: string;

  @IsString()
  @IsNotEmpty()
  @Field({ nullable: true })
  url: string;
}
