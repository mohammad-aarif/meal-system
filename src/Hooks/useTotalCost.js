import { useEffect, useState } from "react";
import useAuth from './useAuth'
const useTotalCost = (email) => {
    const [totalCost, setTotalCost] = useState([]);
    const [totalCostCount, setTotalCostCount] = useState(0)
    const {setIsLoading} = useAuth();
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/goods/${email}`)
        .then(res => res.json())
        .then(data => setTotalCost(data))
        .finally(() => setIsLoading(false))
    }, [email, setIsLoading])
     useEffect(() => {
        let i = 0;
        totalCost.forEach(data => i += data.money)
        setTotalCostCount(i)
    }, [totalCost])
    return {totalCost, totalCostCount}
}

export default useTotalCost;