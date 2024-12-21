import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Testimonials from './pages/Testimonials'
import Footer from './components/Footer'
import OurTeam from './pages/OurTeam'
import WhoWeAre from './pages/WhoWeAre'
import CorporateSocialResponibility from './pages/CorporateSocialResponibility'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Awards from './pages/Awards'
import ProjectUpdates from './pages/ProjectUpdates'
import NewsAndBlog from './pages/Blogs'

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page/our-team' element= {<OurTeam/>}/>
        <Route path='/page/who-we-are' element= {<WhoWeAre/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/page/corporate-social-responsibility' element={<CorporateSocialResponibility/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/awards' element={<Awards/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='info-center/project-updates' element={<ProjectUpdates/>} />
        <Route path='info-center/news-&-blogs' element={<NewsAndBlog/>} />

        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
