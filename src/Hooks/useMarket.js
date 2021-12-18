import { useEffect, useState } from "react"

const useMarket = (email) => {
    const [market, setMarket] = useState([])
    // const url = 
    useEffect(() =>{
        fetch(`https://intense-inlet-54612.herokuapp.com/goods/${email}`)
        .then(res => res.json())
        .then(data => setMarket(data))
    }, [email])
    return {market, email}
}

export default useMarket;