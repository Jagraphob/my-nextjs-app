import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar is-black' role='navigation' aria-label="main navigation">
        
        <div className='navbar-menu'>
            <div className='navbar-start'>
                <div className='navbar-item'>Randoms</div>
            </div>
            <div className='navbar-end'>
                <a className='navbar-item' href="#">Login</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar