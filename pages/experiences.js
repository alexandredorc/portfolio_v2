import Image from 'next/image'
import Head from 'next/head'
import Nav from '../components/Nav'
import styles from '../styles/Experiences.module.css'
import {useState} from 'react'
import data from '../public/exper.json'
import parse from 'html-react-parser';

export default function Exper(){
    const [active, setActive] = useState(0);
    return(
        <div className={styles.container}>
            <Head>
                <title>Experiences</title>
            </Head>
            <main> 
                <div className={styles.leftSide}>
                    <div className={styles.inner} >
                        <Nav/>
                        <h4>
                            My experiences
                        </h4>
                        <div className={styles.about}>
                            <h2>
                                {
                                data.experciences[active].title
                                }
                            </h2>
                            <div>
                                {parse(data.experciences[active].text)}
                            </div>
                        </div>
                    </div>

                    <div className={styles.flexframe}>
                        <div className={styles.boxArrow} onClick={(active!=0)?()=> setActive(active-1):()=>null}>
                            <span className={`${styles.LarrowU} ${styles.arrow}`}/>
                            <span className={`${styles.LarrowD} ${styles.arrow}`}/>
                        </div>
                        {
                        data.experciences.map(
                            (data)=> 
                            <div  key={"dot"+data.id} className={styles.dotbox} onClick={() =>setActive(data.id)}>
                                <div className={`${styles.dot} ${data.id===active ? styles.on : styles.off}`} >
                                    
                                </div>
                            </div>  
                        )}
                        <div className={styles.boxArrow} onClick={(active+1!=data.experciences.length)?()=> setActive(active+1):()=>null}>
                            <span className={`${styles.RarrowU} ${styles.arrow}`}/>
                            <span className={`${styles.RarrowD} ${styles.arrow}`}/>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <a href={data.experciences[active].link} className={styles.imgWrapper}>
                        <Image 
                        src={require("../public/images/"+data.experciences[active].image+".png")} 
                        alt={`image ${active}`}
                        layout="responsive" />   
                    </a>
                </div>
            </main>
        </div>
    );
}
