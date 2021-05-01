import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CheckAnswerDTO {
  @IsNotEmpty()
  @IsString()
  @Field({ nullable: true })
  quizId: string;

  @IsNotEmpty()
  @IsString()
  @Field({ nullable: true })
  selectedAnswerId: string;
}
