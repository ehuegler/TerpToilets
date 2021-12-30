
import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'
import prisma from '../../lib/prisma'

export async function getServerSideProps(context) {
    const slug = context.query.bid
    let id
    try {
        id = parseInt(slug.match(/[a-zA-Z]{3}(\d+)/)[1])
    }
    catch {
        id = null
    }

    const bathroom = await prisma.bathrooms.findUnique({
        where: {
            id: id,
        },
        include: {
            reviews: true,
        }
    })

    return { props: { bathroom } }
}


export default function Bathroom({ bathroom }) {
    


    return (
        <>
            <Head>
                <title>{bathroom.name}</title>
            </Head>

            <Header />

            <Main>
                {bathroom.name}
            </Main>
        </>
    )
}