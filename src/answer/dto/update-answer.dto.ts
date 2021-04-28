import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateAnswerDTO } from './create-answer.dto';

@InputType()
export class UpdateAnswerDTO extends PartialType(CreateAnswerDTO) {
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
