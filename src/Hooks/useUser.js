import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import useAuth from "./useAuth"
import { profileAction } from "../app/Reducers/profileSlice";
const useUser = (email) => {
    const [profile, setProfile] = useState({})
    const {setIsLoading} = useAuth()
    const dispatch = useDispatch()
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .finally(() => setIsLoading(false))
    }, [email, setIsLoading])
    dispatch(profileAction(profile))
    return {profile}
}
export default useUser