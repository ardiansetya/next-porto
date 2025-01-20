"use client"

import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Work from "@/components/Work"


const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home