const fs = require('fs')
const path = require('path')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function data() {
  let buildings = await prisma.buildings.findMany({
    select: {
      name: true,
      code: true,
      abrev: true,
    }
  })

  return `export const buildings = ${JSON.stringify(buildings)}`
}

async function main() {
  try {
    fs.readdirSync('cache')
  } catch (e) {
    fs.mkdirSync('cache')
  }

  fs.writeFile('cache/data.js', await data(), function (err) {
    if (err) return console.log(err);
    console.log('Posts cached.');
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })