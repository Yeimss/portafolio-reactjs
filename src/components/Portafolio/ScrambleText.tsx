import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const ScrambleText = ({ text , title}: { text: string, title:string }) => {
    const symbols = "!@#$%^&*()_+{}:<>?/[];.,"
    const randomString = (world:string) => {
        let symbolWorls:string = "";
        let iterations = 0
        symbolWorls = 
        world.split("").map((char, index) => {
            if (index < iterations) {
              return char
            }
            return symbols[Math.floor(Math.random() * symbols.length)]
        }).join("")
        return symbolWorls
    }
    const [hidden, setHidden] = useState(true)
    const [displayed, setDisplayed] = useState(randomString(text))

  const handleHover = () => {
    let iterations = 0
    const interval = setInterval(() => {
      setDisplayed(() =>
        text
          .split("")
          .map((char, i) => {
            if (i < iterations) {
              return char
            }
            return symbols[Math.floor(Math.random() * symbols.length)]
          })
          .join("")
      )

      iterations += 1 / 2
      if (iterations >= text.length) {
        clearInterval(interval)
      }
    }, 100)
  }

  return (
    <div
      className="flex md:justify-between sm:justify-start"
    >
        <div className="font-mono text-lg tracking-wide text-start">
            <label className="font-bold truncate">{title}:</label> {displayed}
        </div>
        <div className="flex items-center">
            {
                hidden ?
                <FaEyeSlash 
                size={20}
                className="inline cursor-pointer hover:text-orange-300"
                onClick={() => {handleHover(), setHidden(false)}}>
                </FaEyeSlash> 
                :
                <FaEye 
                size={20} 
                className="inline cursor-pointer hover:text-orange-300"
                onClick={() => {setDisplayed(randomString(text)), setHidden(true)}}>
                </FaEye>
            }
        </div>
    </div>
  )
}

export default ScrambleText