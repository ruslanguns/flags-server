import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateCategoryDTO } from './create-category.dto';

@InputType()
export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
