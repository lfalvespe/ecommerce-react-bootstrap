import { NavLink } from "react-router-dom"

import { FaCartArrowDown } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='d-flex mb-5 p-2 bg-secondary justify-content-center gap-5 fw-bolder'>
      <NavLink to='/' className='text-decoration-none ms-auto'>Home</NavLink>
      <NavLink to='/about' className='text-decoration-none'>About</NavLink>
      <NavLink to='/contact' className='text-decoration-none'>Contact</NavLink>
      <NavLink to='/cart' className='text-decoration-none ms-auto'><FaCartArrowDown />
      </NavLink>
    </nav>

  )
}

export default Navbar