import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        
        const a = await prisma.bathrooms.findUnique({
            where: {
                id: 1
            },
            select: {
                _avg: {
                    select: {
                        reviews: {
                            select: {rating: true}
                        }
                    }
                }
            }
        })

        res.status(200).json(a);
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
};