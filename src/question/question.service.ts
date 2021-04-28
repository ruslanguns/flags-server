import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { UpdateQuestionDTO } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(private readonly data: PrismaService) {}

  async getMany() {
    return await this.data.question.findMany({
      include: { category: true, answers: true },
    });
  }

  async get(id: string) {
    return await this.data.question.findUnique({
      where: { id },
      include: { category: true, answers: true },
    });
  }

  async create(data: CreateQuestionDTO) {
    return await this.data.question.create({
      data,
      include: { category: true, answers: true },
    });
  }

  async update(data: UpdateQuestionDTO) {
    return await this.data.question.update({
      where: { id: data.id },
      data,
      include: { category: true, answers: true },
    });
  }

  async delete(id: string) {
    return await this.data.question.delete({ where: { id } });
  }
}
