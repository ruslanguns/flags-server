import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CheckAnswerDTO {
  @IsNotEmpty()
  @IsString()
  @Field({ nullable: true })
  questionId: string;

  @IsNotEmpty()
  @IsString()
  @Field({ nullable: true })
  selectedAnswerId: string;
}
