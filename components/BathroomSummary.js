import styles from '../styles/components/BathroomSummary.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { buildUrl } from 'cloudinary-build-url'
import { cloudName, getThumbnailId } from '../lib/cloudinary'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaShower, FaTimes, FaToilet } from 'react-icons/fa'
import { BiMale, BiFemale } from 'react-icons/bi'
import { MdFamilyRestroom } from 'react-icons/md'
import { Rating } from 'react-simple-star-rating'

export default function BathroomSummary({ bathroom }) {
    bathroom.rating = (Math.round(bathroom.rating * 10) / 10).toString().padEnd(3, '.0')
    
    const thumbnail = buildUrl(getThumbnailId(bathroom.pictures), {
        cloud: {
            cloudName: cloudName
        },
        transformations: {
            resize: {
                width: 200,
                height: 200,
                type: "fill"
            }
        },
    })

    const gender = () => {
        switch (bathroom.gender) {
            case 'Male':
                return <BiMale />

            case 'Female':
                return <BiFemale />

            case 'Neutral':
                return <span><BiMale />/<BiFemale /></span>

            case 'Family':
                return <MdFamilyRestroom />

            default:
                return <></>
        }
    }

    return (
        <Link href={`/bathrooms/${bathroom.id}`}>
            <a>
                <div className={styles.summary}>
                    <div className={styles.thumbnail}>
                        <Image
                            src={thumbnail}
                            alt={`${bathroom.name} bathroom`}
                            width="100"
                            height="100"
                        />
                    </div>
                    <div>
                        <div className={styles.name}>{bathroom.name}</div>
                        <div className={styles.second_line}>
                            {bathroom.rating}
                            &nbsp;
                            <Rating
                                initialValue={bathroom.rating}
                                readonly
                                fullIcon={<AiFillStar />}
                                emptyIcon={<AiOutlineStar />}
                                className={styles.stars}
                            />
                            &nbsp;
                            ({bathroom.numRatings})
                            &middot;&nbsp;
                            {bathroom.building.abrev || ''}&nbsp;{bathroom.roomnum}
                        </div>
                        <div className={styles.icon_row}>
                            {gender()}
                            {bathroom.stalls ? <span><FaToilet /><FaTimes /> {bathroom.stalls} </span> : ''}
                            {bathroom.urinals ? <span><FaToilet /><FaTimes /> {bathroom.urinals}  </span> : ''}
                            {bathroom.shower && <FaShower />}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}