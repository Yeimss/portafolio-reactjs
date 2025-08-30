import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { SiPython } from "react-icons/si";
import dotNetIcon from '../../public/dot-net-svgrepo-com.svg' 
import sqlIcon from '../../public/sql-database-generic-svgrepo-com.svg'
import reactIcon from '../assets/react.svg'

const MainSkills = [
  {
    title: "React",
    description: "App de ejemplo hecha con React y TailwindCSS.",
    image: <img src={reactIcon} alt=".NET" className="w-[50px] h-[50px] hover:animate-spin"/>,
  },
  {
    title: ".Net",
    description: "Aplicación en .Net API REST.",
    image: <img src={dotNetIcon} alt=".NET" className="w-[50px] h-[50px] hover:animate-ping"/>,
  },
  {
    title: "Python",
    description: "RPA con pyton",
    image: <SiPython size={50} className="hover:animate-spin"/>,
  },
  {
    title: "SQL Server",
    description: "Creación y administración de bases de datos",
    image: <img src={sqlIcon} alt="SQL Server" className="w-[50px] h-[50px] hover:animate-ping"/>,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mi Portafolio</h1>
          <nav className="flex gap-4 text-xl">
            <a href="https://github.com/Yeimss" target="_blank" rel="noreferrer">
              <FaGithub size={24} className="hover:text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/james-herreraa/" target="_blank" rel="noreferrer">
              <FaLinkedin size={24} className="hover:text-blue-700" />
            </a>
            <a href="https://www.instagram.com/james.h_no/" target="_blank" rel="noreferrer">
              <FaInstagram size={24} className="hover:text-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600
  transition-all duration-300" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-4">Hola 👋, soy James</h2>
        <p className="text-lg text-gray-600 mb-6">
          Desarrollador Fullstack apasionado por crear aplicaciones web y móviles.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Habilidades
        </a>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Habilidades</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto flex jusfity-arownd">
          {MainSkills .map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="flex justify-center p-3">
                    {
                        p.image
                    }
                </div>
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold">{p.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} James Herrera · Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Portfolio;
