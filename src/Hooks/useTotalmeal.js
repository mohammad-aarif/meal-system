import { useEffect, useState } from "react"
import useAuth from "./useAuth";

const useTotalmeal = (email) => {
    const [meals, setMeal] = useState([]);
    const [mealCount, setMealCount] = useState(0)
    const {setIsLoading} = useAuth()
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/meals/user/${email}`)
        .then(res => res.json())
        .then(data => setMeal(data))
        .finally(() => setIsLoading(false))
    }, [email, setIsLoading])
    useEffect(() => {
        let i = 0;
        meals.forEach(data => i += data.meal)
        setMealCount(i)
    }, [meals])
    return {meals, mealCount}
}
export default useTotalmeal;