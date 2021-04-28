import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateCategoryDTO {
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(5)
  @Field({ nullable: true })
  name: string;
}
