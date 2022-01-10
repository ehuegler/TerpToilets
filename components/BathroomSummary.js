import { Rating } from '@mui/material';
import buildUrl from 'cloudinary-build-url'
import Image from 'next/image'
import { BiFemale, BiMale } from 'react-icons/bi'
import { cloudName, getThumbnailId } from '../lib/cloudinary'


export default function BathroomSummary({ bathroom }) {
  console.log(bathroom)

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

  function gender() {
    switch (bathroom.gender) {
      case 'Neutral':
        return (
          <><BiFemale /> / <BiMale /> </>
        )
    
      case 'Family':
        return (
          <></>
        )
    
      case 'Male':
        return (
          <></>
        )
    
      case 'Female':
        return (
          <></>
        )
    
      default:
        return <></>
    }
  }

  return (
    <section className='bg-zinc-200 p-2 rounded my-3 flex'>
      <div className='text-none min-w-thumbnail'>
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
            precision={.5}
            size='medium'
            readOnly
          />
          &nbsp;
          {`(${bathroom.numRatings})`}
        </div>
        <div className='flex'>
          {bathroom.roomnum}
          <span className='flex text-xl leading-5'>{gender()}</span>
        </div>
      </div>
    </section>
  )
}