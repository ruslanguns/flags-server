import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/prisma/prisma.service';
import { CreateAnswerDTO } from './dto/create-answer.dto';
import { UpdateAnswerDTO } from './dto/update-answer.dto';

@Injectable()
export class AnswerService {
  constructor(private readonly data: PrismaService) {}

  async getMany() {
    return await this.data.answer.findMany({ include: { question: true } });
  }

  async get(id: string) {
    return await this.data.answer.findUnique({
      where: { id },
      include: { question: true },
    });
  }

  async create(data: CreateAnswerDTO) {
    return await this.data.answer.create({ data, include: { question: true } });
  }

  async update(data: UpdateAnswerDTO) {
    return await this.data.answer.update({
      where: { id: data.id },
      data,
      include: { question: true },
    });
  }

  async delete(id: string) {
    return await this.data.answer.delete({ where: { id } });
  }
}
