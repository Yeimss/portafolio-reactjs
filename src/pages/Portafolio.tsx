
import PythonLogo from "../../public/python.svg?react";
import Logo from '../assets/react.svg?react'
import DotNetIcon from '../../public/dot-net-svgrepo-com.svg?react' 
import sqlIcon from '../../public/sql-database-generic-svgrepo-com.svg'
import SkillCard from "../components/Portafolio/SkillCard";
import ScrambleText from "../components/Portafolio/ScrambleText";
import SkillPercent from "../components/Portafolio/SkillPercen";

const MainSkills = [
    {
        title: ".Net",
        description: "Creación de APIs, aplicaciónes web MVC o Blazor, Workers y automatización de pruebas.",
        image: <DotNetIcon className="w-[50px] h-[50px] scale-up-center-hover text-fuchsia-700 hover:text-fuchsia-900"/>,
    },
    {
        title: "Python",
        description: "Analisis de datos, automatización de proceso Y desarrollo de RPA",
        image: <PythonLogo className="w-[50px] h-[50px] sping-slow-hover"/>,
    },
    {
        title: "SQL Server",
        description: "Creación y administración de bases de datos, optimización de consultas y creación de funciones y procedimientos almacenados",
        image: <img src={sqlIcon} alt="SQL Server" className="w-[50px] h-[50px] scale-up-center-hover"/>,
    },
    {
        title: "React",
        description: "Creación de webs y aplicativos movil, creación de hooks personalizados, consumo de APIs",
        image: <Logo className="w-[50px] h-[50px] sping-slow-hover text-blue-500 hover:text-blue-700"></Logo>,
    }];
const Lenguajes = [
    {
        text:"C#",
        percent:99,
        color:"bg-fuchsia-400"
    },
    {
        text:"JavaScript",
        percent:90,
        color:"bg-yellow-400"
    },
    {
        text:"TypeScript",
        percent:90,
        color:"bg-blue-400"
    },
    {
        text:"Python",
        percent:90,
        color:"bg-blue-400"
    },
    {
        text:"CSS",
        percent:98,
        color:"bg-fuchsia-400"
    },
    {
        text:"HTML",
        percent:100,
        color:"bg-orange-400"
    },
    {
        text:"Java",
        percent:60,
        color:"bg-red-400"
    }]
const Frameworks = [
    {
        text:".NET",
        percent:99,
        color:"bg-indigo-400"
    },
    {
        text:"React",
        percent:85,
        color:"bg-sky-400"
    },
    {
        text:"Angular",
        percent:85,
        color:"bg-red-400"
    },
    {
        text:"Django",
        percent:75,
        color:"bg-green-400"
    },
    {
        text:"Bootstrap",
        percent:98,
        color:"bg-fuchsia-400"
    },
    {
        text:"tailwindcss",
        percent:95,
        color:"bg-blue-400"
    },
    {
        text:"springboot",
        percent:50,
        color:"bg-green-400"
    },
    {
        text:"pandas",
        percent:75,
        color:"bg-green-400"
    }]

const Portafolio = () => {
    const fecha = new Date()
    const bornDate = new Date(2001, 0, 17)
    const diff = (fecha.getTime() - bornDate.getTime())
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    return (
        <main>
            <section id="yomero" className="bg-[#FFF8F0] py-16">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
                    <img
                    src="/images/profile-500.webp"
                    srcSet="/images/profile-1000.webp 2x"
                    className="w-[250px] h-[250px] object-cover object-top rounded-full shadow-lg mb-6"
                    alt="Foto de perfil"
                    />

                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    James Herrera (Yeims)
                    </h3>

                    <div className=" w-2/3">
                        <ScrambleText text={age.toString()} title="Edad" />
                        <ScrambleText text="jamesherrera364@gmail.com"  title="Correo"/>
                    </div>
                </div>
            </section>
            
            <section id="skills" className="bg-[#FFF8F0] py-16 px-4 mt-3">
                <h3 className="text-3xl font-bold text-center mb-10">Habilidades</h3>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-medium text-start mb-10">Main skills:</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto flex jusfity-between">
                        {MainSkills.map((element, index) => <SkillCard key={index} image={element.image} title={element.title} description={element.description} />)}
                    </div>
                </div>
                <div className="max-w-5xl mx-auto my-5">
                    <h2 className="text-2xl font-medium text-start mb-10">Lenguajes:</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto flex jusfity-between">
                        {Lenguajes.map((element, index) => 
                        <SkillPercent 
                            key={index} 
                            text={element.text} 
                            percent={element.percent}
                            color={element.color}/>)}
                    </div>
                </div>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-medium text-start mb-10">Librerías y frameworks:</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto flex jusfity-between">
                        {Frameworks.map((element, index) => 
                        <SkillPercent 
                            key={index} 
                            text={element.text} 
                            percent={element.percent}
                            color={element.color}/>)}                    
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Portafolio