import prisma, { bathroomSummarySelect } from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Process a GET request

    let result
    if (req.query.filter && req.query.filter != 'undefined') {
      result = await filter(req.query)
    } else {
      result = await noFilter(req.query)
    }


    res.status(200).json(await Promise.all(result));
  } else {
    // Reject any other HTTP method
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};

async function noFilter(q) {
  // get all of the bathrooms with their average rating
  const topBathroomIds = await prisma.reviews.groupBy({
    by: ['bathroomId'],
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
    orderBy: {
      _avg: {
        rating: 'desc',
      },
    },
    take: parseInt(q.take) || 5,
    skip: parseInt(q.skip) || 0,
  })

  // We have the IDs now, need to get the bathroom info and the building
  const topBathrooms = topBathroomIds.map(async bathroom => {
    const info = await prisma.bathrooms.findUnique({
      where: {
        id: bathroom.bathroomId
      },
      select: bathroomSummarySelect
    })
    return { ...info, rating: bathroom._avg.rating, numRatings: bathroom._count.rating }
  })

  return await Promise.all(topBathrooms)
}

async function filter(q) {

  const allBathrooms = await prisma.bathrooms.findMany({
    where: {
      building: {
        name: q.filter,
      }
    },
    select: bathroomSummarySelect,
  })

  const bathroomsWithAverages = allBathrooms.map(async (bathroom) => {
    const average = await prisma.reviews.aggregate({
      where: {
        bathroomId: bathroom.id
      },
      _avg: {
        rating: true,
      },
      _count: {
        rating: true,
      },
    })


    return { ...bathroom, rating: average._avg.rating || 0, numRatings: average._count.rating }
  })

  return bathroomsWithAverages
}