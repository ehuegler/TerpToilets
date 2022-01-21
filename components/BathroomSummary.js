import { Rating } from '@mui/material';
import buildUrl from 'cloudinary-build-url'
import Image from 'next/image'
import Link from 'next/link'
import { gender } from '../lib/utils';
import { cloudName, getThumbnailId } from '../lib/cloudinary'


export default function BathroomSummary({ bathroom }) {
  // console.log(bathroom)

  const rating = Math.round(bathroom.rating * 10) / 10;

  const url = buildUrl(getThumbnailId(bathroom.pictures), {
    cloud: {
      cloudName: cloudName,
    },
    transformations: {
      resize: {
        type: 'fill',
        width: 300,
        height: 300,
      }
    }
  })

  return (
    <Link href={`/bathrooms/${bathroom.id}`}>
      <a>
        <section className='bg-white p-2 rounded mb-3 flex drop-shadow-md'>
          <div className='text-none flex-shrink-0'>
            <Image
              height={100}
              width={100}
              src={url}
              className='rounded'
            />
          </div>
          <div className='pl-2'>
            <h3 className='leading-4 font-semibold'>
              {bathroom.name}
            </h3>
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
              {`(${bathroom.numRatings})`}
            </div>
            <div className='flex'>
              Rm: {bathroom.roomnum}
              <span className='flex text-xl leading-5'>{gender(bathroom.gender)}</span>
            </div>
          </div>
        </section>
      </a>
    </Link>
  )
}