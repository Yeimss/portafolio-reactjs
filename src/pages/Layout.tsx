import { NavLink, Outlet } from "react-router-dom"
import  Logo from '../assets/react.svg?react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import '../styles/animations.css'

const Layout = () => {
    const isPathActive = (active:boolean) => {
        return !active ?
        "text-purple-700 font-medium hover:text-purple-900 p-2 inline-block align-middle" : 
        "text-neutral-100 font-medium hover:text-purple-900 border-b-2 border-purple-600 bg-purple-400 p-2 rounded-t-lg inline-block align-middle"
    }
    return (
        <>
            <nav className="py-4 px-4 bg-purple-100 border-b-1 border-purple-300 flex justify-between">
                <div>
                    <ul className="flex items-cente r gap-x-6">
                        <li className="flex items-center">
                            <Logo className="sping-slow-hover text-purple-500 hover:text-purple-700"></Logo>
                        </li>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isPathActive(isActive)}>Portafolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/games" className={({ isActive }) => isPathActive(isActive)}>Juegos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/APIs" className={({ isActive }) => isPathActive(isActive)}>APIs</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center gap-x-6">
                        <li>
                            <a href="https://github.com/Yeimss" target="_blank" rel="noreferrer">
                                <FaGithub size={35} className="text-purple-400 hover:text-gray-700" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.NavLinkedin.com/in/james-herreraa/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={35} className="text-purple-400 hover:text-blue-700" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/james.h_no/" target="_blank" rel="noreferrer">
                                <FaInstagram size={35} className="text-purple-400 hover:text-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600
                    transition-all duration-300" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>  
            <Outlet/>
        </>
    )
}
export default Layout