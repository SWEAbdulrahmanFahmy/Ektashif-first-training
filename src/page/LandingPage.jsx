import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import AboutUs from '../components/AboutUs'
import Advantages from '../components/Advantages'
import Landing from '../components/Landing' 
import Exploring from '../components/Exploring'
import Services from '../components/Services'
import Trips from '../components/Trips'
import CustomerReview from '../components/CustomerReview'
const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Landing/>
      <Advantages/>
      <Services/>
      <Exploring/>
      <AboutUs/>
      <Trips/>
      <DownloadApp/>
      <CustomerReview/>
      <Footer/>
    </div>
  )
}

export default LandingPage
