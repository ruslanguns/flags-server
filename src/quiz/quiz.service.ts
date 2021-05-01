import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CheckAnswerDTO } from './dto/check-answer.dto';
import { QuizDTO } from './dto/quiz.dto';
import { Quiz } from './model/quiz';
import { QuizResult } from './model/quiz-result';

@Injectable()
export class QuizService {
  private flagspediaUrl = 'https://flagpedia.net';

  constructor(private readonly data: PrismaService) {}

  async getRandomQuiz(input: QuizDTO): Promise<Quiz> {
    // 1. Get questions count
    const count = await this.data.question.count({
      where: { categoryId: input.categoryId },
    });

    if (!count) {
      throw new NotFoundException(
        `No encontramos nada para la categoría con id: ${input.categoryId}`,
      );
    }

    // 2. Get a random number from question count
    const randomNumber = Math.floor(Math.random() * count) + 1;

    // 3. Get a random question from questions skiping the random number
    const quiz = await this.data.question.findFirst({
      where: {
        categoryId: input.categoryId,
      },
      select: {
        id: true,
        content: true,
        answers: {
          select: {
            id: true,
            content: true,
          },
        },
        category: {
          select: {
            name: true,
            id: true,
          },
        },
        createdAt: true,
      },
      take: 1,
      skip: randomNumber,
    });

    // 4. Return the random quiz
    return quiz;
  }

  async checkAnswer(input: CheckAnswerDTO): Promise<QuizResult> {
    // 1. Get answer selected
    const answer = await this.data.answer.findFirst({
      where: {
        id: input.selectedAnswerId,
        questionId: input.quizId,
      },
    });

    if (!answer) {
      throw new NotFoundException(
        `Este quiz no es válido, el answerID y questionId no cuadran correctamente.`,
      );
    }

    // 2. return output
    return {
      result: answer.isCorrect,
      metadata: {
        url: this.flagspediaUrl + answer.url,
      },
    };
  }
}
