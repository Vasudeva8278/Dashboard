import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import "../css/header.css"
function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right' style={{marginRight:"2rem"}}>
            <BsFillBellFill className='icon' style={{marginRight:"1rem"}}/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon' style={{marginLeft:"1rem"}}/>
        </div>
    </header>
  )
}

export default Header