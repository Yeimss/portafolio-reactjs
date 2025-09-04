import { NavLink, Outlet } from "react-router-dom"
import Logo from "../assets/react.svg?react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import "../styles/animations.css"

const Layout = () => {
  const isPathActive = (active: boolean) => {
    return !active
      ? "text-stale-700 font-medium hover:text-stale-900 p-2 inline-block align-middle transition-colors"
      : "text-neutral-900 font-medium hover:text-stale-900 border-b-2 border-stale-600 bg-stale-200 p-2 rounded-t-lg inline-block align-middle transition-colors"
  }

  return (
    <>
      <header className="py-4 px-6 bg-[#FFF8F0] border-b border-stale-200 shadow-sm flex justify-between items-center">
        {/* Logo + Links */}
        <div>
          <ul className="flex items-center gap-x-6">
            <li className="flex items-center">
              <Logo className="sping-slow-hover text-sky-500 hover:text-sky-400 w-8 h-8" />
            </li>
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
        </div>

        {/* Redes */}
        <div>
          <ul className="flex items-center gap-x-5">
            <li>
              <a href="https://github.com/Yeimss" target="_blank" rel="noreferrer">
                <FaGithub size={28} className="text-stale-500 hover:text-gray-700 transition-colors" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/james-herreraa/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={28} className="text-stale-500 hover:text-blue-700 transition-colors" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/james.h_no/" target="_blank" rel="noreferrer">
                <FaInstagram size={28} className="text-stale-500 hover:text-red-600 transition-colors" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </>
  )
}
export default Layout
