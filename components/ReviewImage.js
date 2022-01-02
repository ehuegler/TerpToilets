import styles from '../styles/components/ReviewImage.module.scss'
import Image from "next/image";
import { cloudName } from "../lib/cloudinary";
import { buildUrl } from 'cloudinary-build-url'

export default function ReeviewImage({ image, bathroom }) {
    const src = buildUrl('toilet-umd/' + image.publicId, {
        cloud: {
            cloudName,
        },
        transformations: {
            resize: {
                height: 300,
                width: 300,
                type: 'fill',
            }
        }
    })

    return (
        <div className={styles.pic}>
            <Image
                height={100}
                width={100}
                src={src}
                alt={`${bathroom} Bathroom Picture`}
            />
        </div>
    )
}