import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerResolver } from './answer.resolver';

@Module({
  providers: [AnswerService, AnswerResolver],
})
export class AnswerModule {}
