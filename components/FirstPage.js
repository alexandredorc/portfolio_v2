import styles from '../styles/FirstPage.module.css'
import Menu from './Menu'

function Home() {
    return (
    <div className={styles.backhome} id="home">
        <Menu/>
        <div className={styles.circles}>
          <div className={`${styles.circle} ${styles.b1}`}>
            <div className={`${styles.circle} ${styles.b2}`}>
              <div className={`${styles.circle} ${styles.b3}`}>
                <div className={styles.inner}>
                  Alexandre Dorcival 
                </div>
                Portfolio
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default Home;
  