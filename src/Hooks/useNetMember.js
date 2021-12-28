import { useEffect, useState } from "react"
import useAuth from "./useAuth"

const useNetMember = (email) => {
    const [netMember, setNetMember] = useState([])
    const {setIsLoading} = useAuth()
    useEffect(() =>{
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/users/${email}`)
        .then(res => res.json())
        .then(data => setNetMember(data))
        .finally(() => setIsLoading(false))
    }, [email, setIsLoading])
    return {netMember, email, setNetMember}
}

export default useNetMember;