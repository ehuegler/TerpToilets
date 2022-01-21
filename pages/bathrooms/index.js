import Head from 'next/head';
import { useState, useCallback, useRef } from 'react';
import BathroomSummary from '../../components/BathroomSummary';
import Header from '../../components/Header';
import Main from '../../components/Main';
import configs from '../../node_env_config';
import Link from 'next/link';

export async function getServerSideProps(context) {
  const start = parseInt(context.query.start) || 0
  const search = context.query.filter

  const result = await fetch(
    `${configs.api}/api/bathrooms?skip=${start}&take=${20}&filter=${search}`
  )
  const bathrooms = JSON.stringify(await result.json())


  return { props: { bathrooms, search } }
}

export default function Bathrooms({ bathrooms, search }) {
  const [bathroomList, setBathroomList] = useState(JSON.parse(bathrooms).sort((a, b) => (
    b.rating - a.rating
  )))


  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/buildingSearch?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

    const onFocus = useCallback(() => {
      setActive(true)
      window.addEventListener('click', onClick)
    }, [onClick])

  return (
    <>
      <Head>

      </Head>

      <Header />

      <Main>

        {!search &&
          <h1 className='bold text-xl'>
            Browse All Bathrooms
          </h1>
        }

        {/* filter buttons */}
        <div
          className='bg-white drop-shadow-md p-1 rounded'
          ref={searchRef}
        >
          <input
            className='w-full p-1'
            onChange={onChange}
            onFocus={onFocus}
            placeholder='Search Building'
            type='text'
            value={query}
          />
          {active && results.length > 0 && (
            <ul className=''>
              {results.map((building, i) => (
                <li
                  className='p-1 cursor-pointer'
                  key={i}
                  onClick={() => setQuery(building.name)}
                >
                  <a href={`/bathrooms?filter=${building.name}`}>
                    {building.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {search &&
          <h2>Bathrooms in: <span className='font-bold'>{search}</span></h2>
        }

        <div className='md:columns-2 mt-2'>
          {bathroomList.map((bathroom, i) => (
            <BathroomSummary key={i} bathroom={bathroom} />
          ))}
        </div>

      </Main>
    </>
  )
}