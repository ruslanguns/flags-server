import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Metadata {
  @Field({ nullable: true })
  url: string;
}

@ObjectType()
export class QuizResult {
  @Field({ nullable: true })
  result: boolean;

  @Field({ nullable: true })
  metadata: Metadata;
}
