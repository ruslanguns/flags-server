import { Args, Query, Resolver } from '@nestjs/graphql';
import { CheckAnswerDTO } from './dto/check-answer.dto';
import { QuizDTO } from './dto/quiz.dto';
import { Quiz } from './model/quiz';
import { QuizResult } from './model/quiz-result';
import { QuizService } from './quiz.service';

@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @Query(() => Quiz)
  async quiz(
    @Args({ name: 'input', type: () => QuizDTO })
    input: QuizDTO,
  ) {
    return await this.quizService.getRandomQuiz(input);
  }

  @Query(() => QuizResult)
  async doQuiz(
    @Args({ name: 'input', type: () => CheckAnswerDTO })
    input: CheckAnswerDTO,
  ) {
    return await this.quizService.checkAnswer(input);
  }
}
