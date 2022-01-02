import styles from '../styles/components/Review.module.scss'
import { Rating } from 'react-simple-star-rating'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Image from 'next/image'

export default function Review({ review }) {
    // console.log(review)
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
            <div>
                {review.pictures.map(pic => (
                    <></>
                ))}
            </div>
        </div>
    )
}