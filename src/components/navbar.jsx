import {NavLink} from 'react-router';

const Navbar = () => {
  return (
    <nav className='flex h-14 shadow-sm items-center justify-between px-10'>
        <div>
            <h1 className='text-4xl font-semibold tracking-tighter'>Imagine</h1>
        </div>
        <div className='flex gap-4'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div className='flex gap-4'>
            <NavLink to="/auth/login">Login</NavLink>
            <NavLink to="/auth/register">Register</NavLink>
        </div>
    </nav>
  )
}

export default Navbar