import React from 'react'
import Feature from '../../components/Feature/Feature'
import Download from '../../components/Download/Download'
import Faq from '../../components/Faq/Faq'

const Main = () => {
  return (
    <main className='main'>
        <Feature/>
        <Download/>
        <Faq/>
    </main>
  )
}

export default Main