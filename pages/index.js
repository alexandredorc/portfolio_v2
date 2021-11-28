import Head from 'next/head'
import FirstPage from '../components/FirstPage'
import TimeLine from '../components/TimeLine'
export default function Home() {
  return (
    <div >
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FirstPage/>
        <TimeLine/>
      </main>
    </div>
  )
}
