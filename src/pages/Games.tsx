import { useState } from "react"
import FindTheSame from "../components/Games/FindTheSame"

const Games = () => {
    const [activeBoard, setActiveBoard] = useState(false)
    const [players, setPlayers] = useState("")
    const [gridSize, setGridSize] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ players, gridSize })
        if(players && gridSize){

            return setActiveBoard(true)
        }
        return setActiveBoard(false)
    }

    return (
        <>
            <form 
            onSubmit={handleSubmit} 
            className="p-4 bg-purple-50 rounded-lg shadow-md space-y-4 max-w-full grid md:grid-cols-3 sm:grid-cols-1 gap-4"
            >
                <div className="col-span-1">
                    <label className="block text-gray-700 font-medium mb-1">
                    Jugadores
                    </label>
                    <select
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                    <option value="">Seleccionar una opción</option>
                    <option value="2">2 Jugadores</option>
                    <option value="3">3 Jugadores</option>
                    <option value="4">4 Jugadores</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <label className="block text-gray-700 font-medium mb-1">
                    Tamaño de la cuadrícula
                    </label>
                    <select
                    value={gridSize}
                    onChange={(e) => setGridSize(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                    <option value="">Seleccionar una opción</option>
                    <option value="4">4 x 4</option>
                    <option value="6">6 x 6</option>
                    <option value="8">8 x 8</option>
                    </select>
                </div>
                <div className=" col-span-1 flex items-center">
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors h-2/3"
                        >
                        Empezar Juego
                    </button>
                </div>
            </form>
            {
                activeBoard ?
                <section className="my-4">
                    <FindTheSame gridSize={parseInt(gridSize)} players={parseInt(players)}/>
                </section> 
                :
                <section className="hidden">noboard</section> 
            }
        </>
    )
   
}
export default Games