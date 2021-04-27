import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';

@Module({
  providers: [QuestionService, QuestionResolver]
})
export class QuestionModule {}
