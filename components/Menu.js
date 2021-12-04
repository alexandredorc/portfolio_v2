import styles from '../styles/Menu.module.css'
import Link from 'next/link'
function Menu() {
    return(
        <div className={styles.menu}>
            <div className={styles.inbox}>
                <Link href="/about" className={styles.link} passHref>
                    <h3 className={styles.link}>About</h3>
                </Link>
                <Link href="/projects" className={styles.link} passHref>
                    <h3 className={styles.link}>Projects</h3>
                </Link>
                <Link href="/experiences" passHref>
                    <h3 className={styles.link}>Experiences</h3>
                    
                </Link>
            </div>
        </div>
    );
}

export default Menu;