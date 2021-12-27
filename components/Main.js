import { Container } from "react-bootstrap";
import styles from '../styles/components/Main.module.scss'


export default function Main({children}) {
    return (
        <main className={styles.main}>
            <Container>
                {children}
            </Container>
        </main>
    )
}