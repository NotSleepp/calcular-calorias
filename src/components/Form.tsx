import { categories } from "../data/categories"
import { useState } from "react"

export default function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name:'',
        calories: 0
    })

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría</label>
                <select id="category" className="border border-slate-300 p-2 rounded-lg bg-white" value={activity.category}>
                    {categories.map(categori => (
                        <option
                            key={categori.id}
                            value={categori.id}
                        >
                            {categori.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input id="name" type="text" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercicio, pesas, bicicleta" value={activity.name}/>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calority" className="font-bold">Calorias:</label>
                <input id="calority" type="number" className="border border-slate-300 p-2 rounded-lg" placeholder="Calorias. Ej. 300 o 500" value={activity.calories}/>
            </div>
            <input 
            type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value='Guardar Comida o Ejercicio'
            />
        </form>
    )
}
