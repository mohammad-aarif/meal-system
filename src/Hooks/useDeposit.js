import { useEffect, useState } from "react"
import useAuth from "./useAuth"

const useDeposit = (email) => {
    const [deposit, setDeposit] = useState([])
    const [totalDepositCount, setTotalDepositCount] = useState(0)
    const {setIsLoading} = useAuth()
    useEffect(() =>{
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/deposit/${email}`)
        .then(res => res.json())
        .then(data => setDeposit(data))
        .finally(() => setIsLoading(false))
    }, [email, setIsLoading])
    useEffect(() => {
        let i = 0;
        deposit.forEach(data => i += data.money)
        setTotalDepositCount(i)
    }, [deposit])
    return {deposit, setDeposit, totalDepositCount}
}

export default useDeposit;