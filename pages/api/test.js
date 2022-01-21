import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        
        let a = await prisma.buildings.findMany({
            include: {
                _count: {
                    select: {
                        bathrooms: true,
                    }
                }
            }
        })

        a = a.filter(x => x._count.bathrooms).sort((a, b) => b._count.bathrooms - a._count.bathrooms)

        res.status(200).json( a );
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
};