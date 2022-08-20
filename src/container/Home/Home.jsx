import React from 'react'
import Banner from '../../component/Banner/Banner'
import BlogHome from '../../component/Blog/BlogHome'
import Clients from '../../component/Clients/Clients'
import AboutHome from '../../component/About-Home/AboutHome'
import OurServices from '../../component/OurServices/OurServices'
import Team from '../../component/Team/Team'
import OurIndustries from '../../component/Our-Industries/OurIndustries'
import Financial from '../../component/Financial/Financial'
import GetStarted from '../../component/GetStarted/GetStarted'
import Footer from '../../component/Footer/Footer'

const Home = () => {
  return (
    <>
        <Banner/>
        <Clients/>
        <BlogHome/>
        <AboutHome/>
        <OurServices/>
        <Team/>
        <OurIndustries/>
        <Financial/>
        <GetStarted/>
        <Footer/>
    </>
  )
}

export default Home