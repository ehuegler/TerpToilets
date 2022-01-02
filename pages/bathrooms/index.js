import Head from "next/head";
import BathroomSummary from "../../components/BathroomSummary";
import Callout from "../../components/Callout";
import Header from "../../components/Header";
import Main from "../../components/Main";
import prisma, { bathroomSummarySelect } from "../../lib/prisma";


export async function getServerSideProps(context) {
    const start = parseInt(context.query.start) || 0;

    const bathrooms = await prisma.bathrooms.findMany({
        skip: start,
        take: 10,
        select: bathroomSummarySelect
    })

    return { props: { bathrooms } }
}


export default function BathroomsPage({ bathrooms }) {
    return (
        <>
            <Head>
                <title>Browse Bathrooms</title>
            </Head>

            <Header />

            <Main>
                Browse bathrooms

                <Callout>
                    {bathrooms.map(bathroom => (
                        <BathroomSummary bathroom={bathroom} key={bathroom.id} />
                    ))}
                </Callout>
            </Main>
        </>
    )
}