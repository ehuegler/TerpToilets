import Head from 'next/head'
import BathroomSummary from '../components/BathroomSummary'
import Header from '../components/Header'
import Main from '../components/Main'
import configs from '../node_env_config'

export async function getServerSideProps() {
  const result = await fetch(`${configs.api}/api/getTopBathrooms`)
  const bathrooms = JSON.stringify(await result.json())
  return { props: { bathrooms } }
}

export default function Blog({ bathrooms }) {
  const bathroomList = JSON.parse(bathrooms)

  return (
    <>
      <Head>
        <title>Toilet UMD</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <Main >
        <h1 className='text-3xl mb-4 font-bold'>
          Welcome
        </h1>
        <p className='indent-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt soluta sunt consequuntur maiores facere odit corporis, adipisci!
        </p>

        <h1 className='font-bold mt-4'>
          Top Bathrooms:
        </h1>

        {bathroomList.map((bathroom, i) => (
          <BathroomSummary key={i} bathroom={bathroom}/>
        ))}

      </Main>
      
    </>
  )
}