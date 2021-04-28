import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { UpdateQuestionDTO } from './dto/update-question.dto';
import { Question } from './model/question';
import { QuestionService } from './question.service';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => [Question])
  async questions() {
    return await this.questionService.getMany();
  }

  @Query(() => Question)
  async question(@Args('id') id: string) {
    return await this.questionService.get(id);
  }

  @Mutation(() => Question)
  async createQuestion(
    @Args({ name: 'input', type: () => CreateQuestionDTO })
    input: CreateQuestionDTO,
  ) {
    return await this.questionService.create(input);
  }

  @Mutation(() => Question)
  async updateQuestion(
    @Args({ name: 'input', type: () => UpdateQuestionDTO })
    input: UpdateQuestionDTO,
  ) {
    return await this.questionService.update(input);
  }

  @Mutation(() => Question)
  async deleteQuestion(@Args('id') id: string) {
    return await this.questionService.delete(id);
  }
}
