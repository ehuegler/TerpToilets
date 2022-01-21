import Head from 'next/head';
import BathroomSummary from '../../components/BathroomSummary';
import Header from '../../components/Header';
import Main from '../../components/Main';
import configs from '../../node_env_config';

export async function getServerSideProps(context) {
  const start = parseInt(context.query.start) || 0
  const result = await fetch(`${configs.api}/api/bathrooms?skip=${start}&take=${20}`)
  const bathrooms = JSON.stringify(await result.json())

  return { props: { bathrooms } }
}

export default function Bathrooms({ bathrooms }) {
  // console.log(bathrooms)
  const bathroomList = JSON.parse(bathrooms)

  return (
    <>
      <Head>

      </Head>

      <Header />

      <Main>

        <h1 className='bold text-xl'>
          Browse All Bathrooms
        </h1>

        {/* filter buttons */}
        <input type='text'

        />

        <div className='md:columns-2 mt-2'>
          {bathroomList.map((bathroom, i) => (
            <BathroomSummary key={i} bathroom={bathroom} />
          ))}
        </div>

      </Main>
    </>
  )
}