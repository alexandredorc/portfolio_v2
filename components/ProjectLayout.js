import styles from '../styles/ProjectLayout.module.css'
import Image from 'next/image'

function ProjectLayout(props){
    const data=props.props;
    return(
        <div className={styles.container}>
            <div className={styles.boxHead}>
                <div className={styles.title}> 
                    {data.name}
                </div>
                <div className={styles.date}>
                    {data.date}
                </div>
            </div>
            <div className={styles.boxBody}>
                <div className={styles.imgBox}>
                    <Image
                    src={require("../public/images/"+data.image+".png")} 
                    alt={`image ${data.id}`}
                    className={styles.image}
                    layout="fill"/>
                </div>
                <div className={styles.content}>
                    <p>{data.text}</p>
                </div>
            </div>
        </div>
    );
}
export default ProjectLayout;