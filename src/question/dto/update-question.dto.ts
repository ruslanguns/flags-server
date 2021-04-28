import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateQuestionDTO } from './create-question.DTO';

@InputType()
export class UpdateQuestionDTO extends PartialType(CreateQuestionDTO) {
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
