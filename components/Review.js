import styles from '../styles/components/Review.module.scss'

export default function Review({ review }) {


    return (
        <div className={styles.review}>
            {review.message}
        </div>
    )
}