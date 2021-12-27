import Link from 'next/link'
import styles from '../styles/components/Button.module.scss'

export default function Button(props) {
    const link = props.link || '/';
    const text = props.text;
    const style = props.red ? styles.red : styles.default;

    return (
        <Link href={link}><a className={style} >{text}</a></Link>
    )
}