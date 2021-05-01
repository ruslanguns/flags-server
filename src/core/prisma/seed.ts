import { PrismaClient } from '.prisma/client';
import * as fs from 'fs';
import { join } from 'path';

import shuffleArray from '../../common/helpers/shuffle-array.helper';
const prisma = new PrismaClient();
const dataDir = join(__dirname, '../..', 'data');
const filesNames = fs.readdirSync(dataDir);
const files = filesNames.map((file: string) => ({
  name: file.split('.')[0],
  data: JSON.parse(fs.readFileSync(`${dataDir}/${file}`, 'utf-8')),
}));

async function main() {
  const result = Promise.all(
    files.map(async (file) => {
      return await prisma.category.create({
        data: {
          name: file.name,
          questions: {
            create: file.data.map((question) => ({
              content: question.default_size,
              answers: {
                create: shuffleArray([
                  ...question.incorrects,
                  question.correct,
                ]).map((answer) => ({
                  content: answer,
                  isCorrect: answer === question.correct,
                  url: question.url,
                })),
              },
            })),
          },
        },
      });
    }),
  );
  await result;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
