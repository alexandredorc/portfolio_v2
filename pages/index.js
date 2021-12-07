

import Head from 'next/head'
import FirstPage from '../components/FirstPage'
import TimeLine from '../components/TimeLine'
export default function Home() {
  return (
    <div>
      <main>
        <FirstPage/>
        <TimeLine/>
      </main>
    </div>
  )
}
