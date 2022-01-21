import { getDateString } from '../lib/utils'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { cloudName, getId, partialPath } from '../lib/cloudinary'
import buildUrl from 'cloudinary-build-url'

export default function Review({ review }) {
  // console.log(review)

  const date = getDateString(review.createdAt)


  return (
    <section className='bg-zinc-200 p-2 rounded mb-3 flex flex-col'>

      <div className='flex justify-between flex-wrap'>
        <h3 className='font-semibold'>
          {review.author || 'Anonymous'}
        </h3>

        <div>
          {date}
        </div>
      </div>

      <div>
        <Rating
          name='bathroom-rating'
          value={review.rating}
          precision={.1}
          size='small'
          readOnly
        />
      </div>

      <p>
        {review.message}
      </p>

      <div className='flex'>

        {review.pictures.map((pic, i) => (
          <div className='text-none p-1' key={i}>
            <Image
              alt={`Review Image ${i + 1}`}
              className='rounded'
              height={100}
              width={100}
              src={buildUrl(getId(pic.publicId), {
                cloud: {
                  cloudName: cloudName
                },
                transformations: {
                  resize: {
                    type: 'fill',
                    height: 300,
                    width: 300
                  }
                }
              })}
            />
          </div>
        ))}

      </div>
    </section>
  )
}