import styles from '../styles/components/Review.module.scss'
import { Rating } from 'react-simple-star-rating'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReeviewImage from './ReviewImage'

export default function Review({ review, roomName }) {
    const date = new Date(review.createdAt)
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()

    return (
        <div className={styles.review}>
            <div className={styles.author}>{review.author}</div>
            <div className={styles.date_line}>
                <Rating
                    initialValue={review.rating}
                    readonly
                    fullIcon={<AiFillStar />}
                    emptyIcon={<AiOutlineStar />}
                    className={styles.stars}
                />
                &nbsp;
                {dateString}
            </div>
            <div>
                {review.message}
            </div>
            <div className={styles.gallery}>
                {review.pictures.map(pic => (
                    <ReeviewImage image={pic} key={pic.id} bathroom={roomName} />
                ))}
            </div>
        </div>
    )
}