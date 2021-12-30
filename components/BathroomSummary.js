import styles from '../styles/components/BathroomSummary.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { buildUrl } from 'cloudinary-build-url'
import { cloudName, getThumbnailId } from '../lib/cloudinary'

export default function BathroomSummary({ bathroom }) {

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

    return (
        <Link href={`/bathroom/${bathroom.building.code}${bathroom.id}`}>
            <a>
                <div className={styles.summary}>
                    <Image
                        src={thumbnail}
                        alt={`${bathroom.name} bathroom`}
                        width="100"
                        height="100"
                    />
                    <h4>{bathroom.name}</h4>
                    <p>{bathroom.description}</p>
                </div>
            </a>
        </Link>
    )
}