import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-sky-400 grid grid-cols-3 py-4 border-top border-t-4 border-indigo-500">
            <div className="flex justify-center">
                <a target="_blank" href="https://github.com/Yeimss">
                    <FaGithub size={24}/> 
                </a>
            </div>
            <div className="flex justify-center">
                <a target="_blank" href="https://www.linkedin.com/in/james-herreraa/">
                    <FaLinkedin size={24}/>
                </a>
            </div>
            <div className="flex justify-center">
                <a target="_blank" href="https://www.instagram.com/james.h_no/">
                    <FaInstagram size={24}/>
                </a> 
            </div>
        </footer>
    )
}

export default Footer
