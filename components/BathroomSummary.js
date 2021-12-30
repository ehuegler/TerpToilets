import styles from '../styles/components/BathroomSummary.module.scss'

export default function BathroomSummary({ bathroom }) {
    return (
        <div className={styles.summary}>
            <h4>{bathroom.name}</h4>
            <p>{bathroom.description}</p>
        </div>
    )
}