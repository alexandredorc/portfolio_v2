import styles from '../styles/TimeLine.module.css'
import MenuTime from './MenuTime'

function TimeLine() {

    return (
      <div className={styles.frame}>
          <MenuTime/>
          <div className={styles.flexWrapper}>

          </div>
      </div>
    )
}
  
export default TimeLine;