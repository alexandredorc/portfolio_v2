import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import ProjectLayout from '../components/ProjectLayout'
import data from '../public/projects.json'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div >
      <Head>
        <title>My Projects</title>
      </Head>
      <main>
          <div className={styles.header}>
            <Nav/>
          </div>
          <div className={styles.content}>
            <div className={styles.flexWrapper}>
              {
                data.projects.map(
                  (data)=>
                      <ProjectLayout key={"project"+data.id} props={data}/>
                  )
              }
            </div>
          </div>
      </main>
    </div>
  )
}
