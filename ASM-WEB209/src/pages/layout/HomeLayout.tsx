import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

type Props = {}

const HomeLayout = () => {
  return (
    <div>
       <div>
       <Header/>
        <Banner/>
       </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout