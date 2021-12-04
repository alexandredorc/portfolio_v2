import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import styles from '../styles/About.module.css'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function About(){
    const [contact, changeData] = useState("");
    return(
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
            </Head>
            <main> 
                
                <div className={styles.leftSide}>
                    <div className={styles.about}>
                        <Nav/>
                        <h2>
                            ABOUT ME
                        </h2>
                        <div>
                        <p>
                        I am a fourth year student in IMT Nord Europe engineering school. </p>
                        <p>
                        My major is in computer science and I want to specialise in data science.
                        I love sciences and technologies.</p>
                        <p>
                        You can find my projects <a><u>here</u></a></p>
                        <p>
                        My main hobbies are cinema and winter sports.</p>
                        </div>
                        
                        
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <h1>
                        ALEXANDRE DORCIVAL
                    </h1>
                    <a className={styles.CV} href="MyCV.pdf" download="CV Alexandre Dorcival" target="_blank">
                    <Image 
                        className={styles.imgCV}
                        src={require("../public/MyCV.png")} 
                        height={300}
                        width={200}
                        alt="My CV"/>
                    </a>
                    
                    <div className={styles.linkFrame}>
                        <a>
                            <FontAwesomeIcon icon={faGithub} className={styles.link} onClick={() => changeData("github.com/alexandredorc")}/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faLinkedinIn} className={styles.link} onClick={() => changeData("linkedin.com/in/alexandre-dorcival-48a7a21a1")}/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faPhoneAlt} className={styles.link} onClick={() => changeData("+33 0685184961")}/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faPaperPlane} className={styles.link} onClick={() => changeData("ddorcival@gmail.com")}/>
                        </a>
                    </div>
                    <div>
                        {contact}
                    </div>
                </div>
            </main>
        </div>
    );
}