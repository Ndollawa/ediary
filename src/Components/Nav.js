import React from 'react'
import SideMenu from './SideMenu'


function Nav({isToggle}) {
 const classStyles ="absolute md:relative w-auto transform md:translate-x-0 h-screen z-10 bg-black transition-all duration-300 "
  return (
    <nav className={!isToggle ? classStyles +"-translate-x-full": classStyles}>
       
        <SideMenu />

    </nav>
    
  )
}

export default Nav
