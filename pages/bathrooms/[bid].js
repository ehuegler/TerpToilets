
import Head from 'next/head'
import Header from '../../components/Header'
import Main from '../../components/Main'
import prisma from '../../lib/prisma'
import { buildUrl } from 'cloudinary-build-url'
import { cloudName, getThumbnailId } from '../../lib/cloudinary'
import Image from 'next/image'
import Review from '../../components/Review'
import Callout from '../../components/Callout'

export async function getServerSideProps(context) {
    const slug = context.query.bid
    let id
    try {
        id = parseInt(slug.match(/[a-zA-Z]{3}(\d+)/)[1])
    }
    catch {
        id = null
    }

    let order;
    if (context.query.order === 'lowtohigh') {
        order = 'asc'
    } else {
        order = 'desc'
    }

    const bathroom = await prisma.bathrooms.findUnique({
        where: {
            id: id,
        },
        include: {
            reviews: {
                orderBy: {
                    rating: order,
                },
            },
            pictures: true,
        },
    })

    return { props: { bathroom } }
}


export default function Bathroom({ bathroom }) {
    console.log(bathroom)
    const url = buildUrl(getThumbnailId(bathroom.pictures), {
        cloud: {
            cloudName: cloudName,
        },
        transformations: {},
    })

    return (
        <>
            <Head>
                <title>{bathroom.name}</title>
            </Head>

            <Header />

            <Main>
                <h1>{bathroom.name}</h1>
                <Image
                    src={url}
                    height="300"
                    width="300"
                    alt={`${bathroom.name} picture`}
                />
                <p>{bathroom.description}</p>
                <Callout>
                    <h3>Reviews:</h3>
                    {bathroom.reviews.map(review => (
                        <Review review={review} key={review.id} />
                    ))}
                </Callout>
            </Main>
        </>
    )
}