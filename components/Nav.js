import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav(){
    return(
        <div className={styles.container}>
            <div className={styles.button}>
                <FontAwesomeIcon icon={faBars} className={styles.button}/>
            </div>
            <div className={styles.links}>
                <Link href="/" passHref>
                    <h3 className={`${styles.link} ${styles.b2}`}>Home</h3>
                </Link>
                <Link href="/about" passHref>
                    <h3 className={`${styles.link} ${styles.b2}`}>About</h3>
                </Link>
                <Link href="/projects" passHref>
                    <h3 className={`${styles.link} ${styles.b2}`}>Projects</h3>
                </Link>
                <Link href="/experiences" passHref>
                    <h3 className={`${styles.link} ${styles.b2}`}>Experiences</h3>
                </Link>
            </div>
        </div>
    );
}
export default Nav