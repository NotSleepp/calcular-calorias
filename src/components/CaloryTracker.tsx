import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CaloryTrackerProps = {
    activities: Activity[]
}
export default function CaloryTracker({ activities }: CaloryTrackerProps) {

    //contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])

    const caloriesQuemadas = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])

    const netCalories = useMemo(()=> caloriesConsumed - caloriesQuemadas ,[activities])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text='Consumidas'
                />
                <CalorieDisplay
                    calories={caloriesQuemadas}
                    text='Quemadas'
                />
                <CalorieDisplay
                    calories={netCalories}
                    text='Diferencia'
                />
            </div>

        </>
    )
}
