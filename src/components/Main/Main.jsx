import React from 'react'
import Feature from '../../components/Feature/Feature'
import Download from '../../components/Download/Download'
import Faq from '../../components/Faq/Faq'

const Main = () => {
  return (
    <section className='main'>
        <Feature/>
        <Download/>
        <Faq/>
    </section>
  )
}

export default Main