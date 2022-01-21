import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Process a GET request

        const result = await prisma.buildings.findMany({
          select: {
            code: true,
            name: true,
            abrev: true,
          },
        })
        
        res.status(200).json(result);
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
};