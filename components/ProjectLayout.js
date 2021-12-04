import styles from '../styles/ProjectLayout.module.css'

function ProjectLayout(data){
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.title}> 
                    {data.name}
                </div>
                <div className={styles.date}>

                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
export default ProjectLayout;