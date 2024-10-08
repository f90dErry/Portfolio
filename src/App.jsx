import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
function App() {
  return (
    <Router>
      <div className='flex flex-col  h-screen'>
        <Navbar />
        <main className='container flex-1  px-3 pb-12 pt-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
