import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AnswerService } from './answer.service';
import { CreateAnswerDTO } from './dto/create-answer.dto';
import { UpdateAnswerDTO } from './dto/update-answer.dto';
import { Answer } from './model/answer';

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  @Query(() => [Answer])
  async answers() {
    return await this.answerService.getMany();
  }

  @Query(() => Answer)
  async answer(@Args('id') id: string) {
    return await this.answerService.get(id);
  }

  @Mutation(() => Answer)
  async createAnswer(
    @Args({ name: 'input', type: () => CreateAnswerDTO })
    input: CreateAnswerDTO,
  ) {
    return await this.answerService.create(input);
  }

  @Mutation(() => Answer)
  async updateAnswer(
    @Args({ name: 'input', type: () => UpdateAnswerDTO }) data: UpdateAnswerDTO,
  ) {
    return await this.answerService.update(data);
  }

  @Mutation(() => Answer)
  async deleteAnswer(@Args('id') id: string) {
    return await this.answerService.delete(id);
  }
}
