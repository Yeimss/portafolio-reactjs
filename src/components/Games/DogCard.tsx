import { useEffect, useState } from "react"
import dorso from '../../assets/images/dorso.png';
import '../../styles/flipCard.css'
interface Dog{
    message:string;
    status:string
}

const DogCard = () => {
    const [dog, setDog] = useState<Dog>()
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => setDog(res))
        .catch(err => console.log(err))
    }, [])

    return (
       <div 
        className={`flip-card ${visible ? "flipped" : ""}`} 
        onClick={() => setVisible(!visible)}
        >
            <div className="flip-card-inner w-full aspect-square">
                <div className="flip-card-front">
                <img src={dorso} className="w-full h-full object-cover" />
                </div>
                <div className="flip-card-back">
                <img src={dog?.message} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
  )
}

export default DogCard