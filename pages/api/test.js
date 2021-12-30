import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        
        const bathroom = await prisma.bathrooms.findUnique({
            where: {
                id: 1,
            },
            include: {
                reviews: {
                    orderBy: {
                        rating: 'desc',
                    },
                },
                pictures: true,
            },
        })

        res.status(200).json(bathroom);
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
};