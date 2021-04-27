import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { CategoryModule } from './category/category.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [CoreModule, QuestionModule, AnswerModule, CategoryModule, QuizModule],
})
export class AppModule {}
