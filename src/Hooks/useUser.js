import { useEffect, useState } from "react"
import useAuth from "./useAuth"

const useUser = (email) => {
    const [profile, setProfile] = useState({})
    const {setIsLoading} = useAuth()
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .finally(() => setIsLoading(false))
    }, [email, setIsLoading])

    return {profile}
}
export default useUser