import Head from 'next/head';
import Error from 'next/error';
import prisma from '../../lib/prisma';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Image from 'next/image';
import { getThumbnailId, cloudName } from '../../lib/cloudinary';
import { gender } from '../../lib/utils';
import { Rating } from '@mui/material';
import buildUrl from 'cloudinary-build-url';
import Review from '../../components/Review';
import { useState } from 'react';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { FaShower, FaSink, FaTimes, FaToilet } from 'react-icons/fa';
import OrderButton from '../../components/OrderButton';


export async function getServerSideProps(req) {
  const id = parseInt(req.query.id)
  if (!id) {
    return { props: { error: true } }
  }

  const bathroom = await prisma.bathrooms.findUnique({
    where: {
      id: id,
    },
    include: {
      pictures: true,
      reviews: {
        include: {
          pictures: true,
        },
        orderBy: {
          rating: 'desc'
        }
      },
    },
  })

  return { props: { bathroom } }
}

export default function BathroomPage({ bathroom, error }) {
  const [reviews, setReviews] = useState(bathroom.reviews)

  if (error || !bathroom) {
    return <Error statusCode={404} />
  }

  const flipOrder = () => setReviews([...reviews.reverse()])

  // console.log(bathroom)

  const url = buildUrl(getThumbnailId(bathroom.pictures), {
    cloud: {
      cloudName: cloudName,
    },
    transformations: {
      resize: {
        type: 'fill',
        width: 2000,
        height: 2000,
      }
    }
  })

  let rating = bathroom.reviews.reduce((acc, review) => acc + review.rating, 0)
  rating = rating / bathroom.reviews.length
  rating = Math.round(rating * 10) / 10


  return (
    <>
      <Head>
        <title>{bathroom.name} Bathroom | Toilet UMD</title>
      </Head>

      <Header />

      <Main>

        <div className='flex flex-col sm:flex-row'>

          <div className='text-none sm:w-[75%] p-2'>
            <Image
              src={url}
              height={300}
              width={300}
              layout='responsive'
              alt={`${bathroom.name} Pictured`}
            />
          </div>

          <div>

            <h1 className='text-2xl font-bold'>
              {bathroom.name}
            </h1>

            <div className='flex justify-between'>
              Rm: {bathroom.roomnum}
              <span className='flex text-xl leading-5'>{gender(bathroom.gender)}</span>
            </div>
            <div className='flex'>
              {rating}
              &nbsp;
              <Rating
                name='bathroom-rating'
                value={rating}
                precision={.1}
                size='medium'
                readOnly
              />
              &nbsp;
              {`(${bathroom.reviews.length})`}
            </div>
            <p className=''>
              {bathroom.description}
            </p>

            <div className='px-8'>

              {
                bathroom.stalls ?
                  <div className='flex items-center'>
                    <FaToilet /> <FaTimes /> {bathroom.stalls} - Stalls
                  </div> :
                  <></>
              }

              {
                bathroom.urinals ?
                  <div className='flex items-center'>
                    <Image
                      src='/urinal.png'
                      height={16}
                      width={16}
                      alt='Urinal Icon'
                    />
                    <FaTimes /> {bathroom.urinals} - Urinals
                  </div> :
                  <></>
              }

              {
                bathroom.sinks ?
                  <div className='flex items-center'>
                    <FaSink /> <FaTimes /> {bathroom.sinks} - Sinks
                  </div> :
                  <></>
              }

              {
                bathroom.shower ?
                  <div className='flex items-center'>
                    <FaShower /> <FaTimes /> {bathroom.shower} - Showers
                  </div> :
                  <></>
              }

            </div>

          </div>

        </div>

        <div className='flex justify-between items-center mt-4 mb-2'>
          <h1 className='font-bold'>
            Reviews:
          </h1>
          <OrderButton click={flipOrder} />
        </div>

        <div className='sm:columns-2'>
          {reviews.map((review, i) => (
            <Review review={review} key={i} />
          ))
          }
        </div>

      </Main>

    </>
  )
}