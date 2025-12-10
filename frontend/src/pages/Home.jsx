import React from 'react'
import Header from '../component/Header'
import SpecialityMenu from '../component/SpecialityMenu'
import TopDocters from '../component/TopDocters'
import Banner from '../component/Banner'

const Home = () => {
  return (
    <div>
        <Header />
        <SpecialityMenu />
        <TopDocters />
        <Banner />
    </div>
  )
}

export default Home