import styles from '../styles/MenuTime.module.css'

const active= 7;
const N=10;
const keys = [];

for (var i = 1; i <= N; i++) {
   keys.push(i);
}


function MenuTime(props){
    return(
        <div className={styles.dotsframe}>
            <div className={styles.flexframe}>
                {
                keys.map(
                    (data)=> 
                    <div  key={"dot"+data} className={styles.dotbox}>
                        <a href="#home">
                            <div className={`${styles.dot} ${data===active ? styles.on : styles.off}`} >
                                
                            </div>
                        </a>
                    </div>  
                )}
            </div>
        </div>
    );
}

export default MenuTime;