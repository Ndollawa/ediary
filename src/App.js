import React from 'react'
import Preloader from './Component/Preloader'
import Nav from './Component/Nav'
import Sidebar from './Component/sidebar/Sidebar'
import Header from './Component/Header'
import Dashboard from './Dashboard'
import Footer from './Component/Footer'
import Sidesetting from './Component/Sidesetting'
function App() {
  return (
    <div className="wrapper">
            <Preloader />
            <Nav />
            <Sidebar />
            <div className='content-wrapper'>
            <Header />
            <Dashboard />
            </div>
            <Footer />
            <Sidesetting />
      </div>

  )
}

export default App