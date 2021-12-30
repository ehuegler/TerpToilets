import styles from '../styles/components/BathroomSummary.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { buildUrl, extractPublicId } from 'cloudinary-build-url'

export default function BathroomSummary({ bathroom }) {
    const publicId = bathroom.pictures.length ? bathroom.pictures[0].publicId : 'toilet-umd/placeholder_dgplgj'
    const thumbnail = buildUrl(publicId, {
        cloud: {
            cloudName: 'di6du2qqp'
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