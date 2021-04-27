import { PrismaClient, Prisma } from '.prisma/client'
import shuffleArray from '../../common/helpers/shuffle-array.helper'

const jsonData = [
  {
    "default_size": "https://flagcdn.com/256x192/dz.png",
    "mini_size": "https://flagcdn.com/128x96/dz.png",
    "correct": "Algeria",
    "incorrects": ["Ethiopia", "Afghanistan", "Tanzania"],
    "url": "/algeria"
  },
  {
    "default_size": "https://flagcdn.com/256x192/ao.png",
    "mini_size": "https://flagcdn.com/128x96/ao.png",
    "correct": "Angola",
    "incorrects": ["San Marino", "Gambia", "Lithuania"],
    "url": "/angola"
  },
  {
    "default_size": "https://flagcdn.com/256x192/bj.png",
    "mini_size": "https://flagcdn.com/128x96/bj.png",
    "correct": "Benin",
    "incorrects": ["Belize", "Slovakia", "DR Congo"],
    "url": "/benin"
  }
]


const prisma = new PrismaClient()

async function main() {
  // await prisma.category.create({
  //   data: {
  //     name: 'questions_all_2',
  //     question: {
  //       create: [
  //         {
  //           content: 'Pregunta 1',
  //           answers: {
  //             create: [
  //               {
  //                 content: 'Respuesta 1',
  //                 isCorrect: false
  //               },
  //               {
  //                 content: 'Respuesta 2',
  //                 isCorrect: false
  //               },
  //               {
  //                 content: 'Respuesta 3',
  //                 isCorrect: false
  //               },
  //             ]
  //           }
  //         },
  //         {
  //           content: 'Pregunta 2',
  //           answers: {
  //             create: [
  //               {
  //                 content: 'Respuesta 4',
  //                 isCorrect: false
  //               },
  //               {
  //                 content: 'Respuesta 5',
  //                 isCorrect: true
  //               },
  //               {
  //                 content: 'Respuesta 6',
  //                 isCorrect: false
  //               },
  //             ]
  //           }
  //         }
  //       ]
  //     }
  //   }
  // })
  await prisma.category.create({
    data: {
      name: 'questions_all_2',
      question: {
        create: jsonData.map(question => ({
            content: question.default_size,
            answers: {
              create: shuffleArray([...question.incorrects, question.correct]).map(answer => ({
                  content: answer,
                  isCorrect: answer === question.correct
                }))
            }
          }))
      }
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

