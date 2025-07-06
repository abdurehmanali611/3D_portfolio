import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className="blue_gradient_text">AA</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-[--color-blue-500]': 'text-black'}>
                    About
            </NavLink>
            <NavLink to='/portfolio' className={({isActive}) => isActive ? 'text-[--color-blue-500]': 'text-black'}>
                    PortFolio
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar