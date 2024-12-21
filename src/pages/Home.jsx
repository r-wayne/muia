import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WhyUs from "../components/WhyUs"
import CardGrid from "../components/CardGrid"
import TrackRecord from "../components/TrackRecord"
import MoreProperties from "../components/MoreProperties"
import ContactUs from "../components/ContactUs"

const Home = () => {
  return (
    <>
    <Navbar
      heroTitle='Welcome To Rholand'
       backgroundImage='./assets/land.avif'
      />
      <WhyUs/>
      <CardGrid/>
      <MoreProperties/>
      <TrackRecord/>
      <ContactUs/>
    
    </>

  )
}

export default Home
