import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-indigo-300 grid grid-cols-3 py-4 border-top border-t-3 border-indigo-500 w-1/1">
            <div className="flex justify-center">
                <a target="_blank" href="https://github.com/Yeimss">
                    <FaGithub size={30} color="rgba(255,255,255)"/> 
                </a>
            </div>
            <div className="flex justify-center">
                <a target="_blank" href="https://www.linkedin.com/in/james-herreraa/">
                    <FaLinkedin size={30} color="rgba(255,255,255)"/>
                </a>
            </div>
            <div className="flex justify-center">
                <a target="_blank" href="https://www.instagram.com/james.h_no/">
                    <FaInstagram size={30} color="rgba(255,255,255)"/>
                </a> 
            </div>
        </footer>
    )
}

export default Footer
