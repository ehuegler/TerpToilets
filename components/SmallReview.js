import styles from '../styles/components/SmallReview.module.scss'

export default function SmallReview({ review }) {
    return (
        <div className={styles.small_review}> 
            {review.message}
        </div>
    )
}