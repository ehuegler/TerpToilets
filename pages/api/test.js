import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        
        const a = await prisma.buildings.aggregate({
            _count: {
                id: true
            }
        })

        res.status(200).json( a );
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
};