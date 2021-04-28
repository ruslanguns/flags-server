import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly data: PrismaService) {}

  async getMany() {
    return await this.data.category.findMany({
      include: { questions: { include: { answers: true } } },
    });
  }

  async get(id: string) {
    return await this.data.category.findUnique({
      where: { id },
      include: { questions: { include: { answers: true } } },
    });
  }

  async create(data: CreateCategoryDTO) {
    return await this.data.category.create({
      data,
      include: { questions: { include: { answers: true } } },
    });
  }

  async update(data: UpdateCategoryDTO) {
    return await this.data.category.update({
      where: { id: data.id },
      data,
      include: { questions: { include: { answers: true } } },
    });
  }

  async delete(id: string) {
    return await this.data.category.delete({ where: { id } });
  }
}
