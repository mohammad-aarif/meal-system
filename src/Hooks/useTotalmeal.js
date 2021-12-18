import { useEffect, useState } from "react"

const useTotalmeal = (email) => {
    const [meals, setMeal] = useState([]);
    const [mealCount, setMealCount] = useState(0)
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/meals/user/${email}`)
        .then(res => res.json())
        .then(data => setMeal(data))
    }, [email])
    useEffect(() => {
        let i = 0;
        meals.forEach(data => i += data.meal)
        setMealCount(i)
    }, [meals])
    return {meals, mealCount}
}
export default useTotalmeal;