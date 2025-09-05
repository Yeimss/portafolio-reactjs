import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Logo from "../assets/react.svg?react"
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"
import "../styles/animations.css"

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const isPathActive = (active: boolean) => {
    return !active
      ? "text-gray-700 font-medium hover:text-gray-900 p-2 inline-block transition-colors"
      : "text-neutral-900 font-medium hover:text-gray-900 border-b-2 border-gray-600 bg-gray-200 p-2 rounded-t-lg inline-block transition-colors"
  }

  return (
    <>
      <header className="py-4 px-6 bg-[#FFF8F0] border-b border-gray-200 shadow-sm flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <Logo className="sping-slow-hover text-sky-500 hover:text-sky-400 w-8 h-8" />
          <span className="font-bold text-xl text-sky-900">James</span>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        <ul className="hidden md:flex items-center gap-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) => isPathActive(isActive)}>
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" className={({ isActive }) => isPathActive(isActive)}>
              Juegos
            </NavLink>
          </li>
          <li>
            <NavLink to="/APIs" className={({ isActive }) => isPathActive(isActive)}>
              APIs
            </NavLink>
          </li>
        </ul>

        {/* Redes */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-x-5">
            <li>
              <a href="https://github.com/Yeimss" target="_blank" rel="noreferrer">
                <FaGithub size={28} className="text-gray-500 hover:text-gray-700 transition-colors" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/james-herreraa/" target="_blank" rel="noreferrer">
                <FaLinkedin size={28} className="text-gray-500 hover:text-blue-700 transition-colors" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/james.h_no/" target="_blank" rel="noreferrer">
                <FaInstagram size={28} className="text-gray-500 hover:text-red-600 transition-colors" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Menú hamburguesa desplegable */}
      {menuOpen && (
        <nav className="md:hidden bg-[#FFF8F0] border-b border-gray-200 shadow-md p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink to="/" className={({ isActive }) => isPathActive(isActive)} onClick={() => setMenuOpen(false)}>
                Portafolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" className={({ isActive }) => isPathActive(isActive)} onClick={() => setMenuOpen(false)}>
                Juegos
              </NavLink>
            </li>
            <li>
              <NavLink to="/APIs" className={({ isActive }) => isPathActive(isActive)} onClick={() => setMenuOpen(false)}>
                APIs
              </NavLink>
            </li>
            <li className="flex gap-4 pt-2">
              <FaGithub size={24} className="text-gray-500 hover:text-gray-700" />
              <FaLinkedin size={24} className="text-gray-500 hover:text-blue-700" />
              <FaInstagram size={24} className="text-gray-500 hover:text-red-600" />
            </li>
          </ul>
        </nav>
      )}

      <main className="p-6">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
