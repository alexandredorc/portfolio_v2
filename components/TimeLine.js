import styles from '../styles/TimeLine.module.css'
import MenuTime from './MenuTime'

function TimeLine() {

    return (
      <div className={styles.frame}>
          <MenuTime/>
      </div>
    )
}
  
export default TimeLine;