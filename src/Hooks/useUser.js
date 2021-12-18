import { useEffect, useState } from "react"

const useUser = (email) => {
    const [profile, setProfile] = useState({})
    const [loadingProfile, setLoadingProfile] = useState(true)
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .finally(() => setLoadingProfile(false))
    }, [])

    return {profile, loadingProfile}
}
export default useUser