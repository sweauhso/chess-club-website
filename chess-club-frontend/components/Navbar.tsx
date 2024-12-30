import React from 'react'
import Image from 'next/image';
import Logo from "@/public/ChessClubLogo.png"

const Navbar = () => {
  return (
    <div className='navbar bg-white'>
        <Image className="m-4" src={Logo} alt="Chess Club Logo" height={80} />
        <div className="navbar-buttons text-green">
            <button>Home</button>
            <button>About</button>
            <button>Services</button>
        </div>
        <div className='admin-button text-green'>
            <button>Admin</button>
        </div>
    </div>
  )
}

export default Navbar