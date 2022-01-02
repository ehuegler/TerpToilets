import prisma, { bathroomSummarySelect } from '../../lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Process a GET request

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
                    rating: "desc",
                },
            },
            take: parseInt(req.query.take) || 5,
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
        res.status(200).json(await Promise.all(topBathrooms));
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
};