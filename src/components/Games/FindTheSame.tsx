import { useEffect, useState, type JSX } from "react";
import DogCard from "./DogCard";

interface Props {
    gridSize:number;
    players:number;
}

const gridCols: Record<number, string> = {
  2: "grid-cols-4",
  3: "grid-cols-6",
  4: "grid-cols-8",
  5: "grid-cols-10",
  6: "grid-cols-12",
};

const FindTheSame = ({ gridSize, players }:Props) => {
    const [cards, setCards] = useState<JSX.Element[]>([])
    console.log(players)
    useEffect(() => {
        const newCards: JSX.Element[] = []
        for (let i = 0; i < gridSize * 2; i++) {
            newCards.push(<DogCard key={i} />)
        }
        let fullCards = [...newCards, ...newCards]        
        setCards(fullCards.sort())
    }, [gridSize])

    return (
        <div className={`m grid gap-4 ${gridCols[gridSize] ?? "grid-cols-2"}`}>
            {
                cards.map((tarjeta, index)=> {
                    return (
                        <div key={index} className="">
                            {tarjeta}
                        </div>
                    )   
                })
            }
        </div>
    )
}

export default FindTheSame;