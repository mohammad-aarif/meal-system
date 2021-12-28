import { useEffect, useState } from "react";
import useAuth from './useAuth'
const useTotalmealAdmin = (email) => {
    const [mealsAdmin, setMealAdmin] = useState([]);
    const [mealCountAdmin, setMealCountAdmin] = useState(0)
    const {setIsLoading} = useAuth();
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/meals/${email}`)
        .then(res => res.json())
        .then(data => setMealAdmin(data))
        .finally(() => setIsLoading(false))
    }, [email, setIsLoading])
     useEffect(() => {
        let i = 0;
        mealsAdmin.forEach(data => i += data.meal)
        setMealCountAdmin(i)
    }, [mealsAdmin])
    return {mealsAdmin, mealCountAdmin}
}

export default useTotalmealAdmin;