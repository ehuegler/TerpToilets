import styles from '../styles/components/Callout.module.scss'

export default function Callout({ children }) {
    return (
        <div className={styles.callout}>
            {children}
        </div>
    )
}