import { PrismaClient } from "@prisma/client"

let prisma

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  
  prisma = global.prisma
}

export default prisma

export const bathroomSummarySelect = {
  id: true,
  name: true,
  roomnum: true,
  description: true,
  gender: true,
  stalls: true,
  urinals: true,
  shower: true,
  pictures: {
    select: {
      publicId: true,
    },
  },
  building: {
    select: {
      code: true,
      name: true,
      abrev: true,
    }
  },
  // reviews: {
  //   select: {
  //     rating: true,
  //   }
  // }
}