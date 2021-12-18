import { useEffect, useState } from "react"

const useNetMember = (email) => {
    const [netMember, setNetMember] = useState([])
    // const url = 
    useEffect(() =>{
        fetch(`https://intense-inlet-54612.herokuapp.com/users/${email}`)
        .then(res => res.json())
        .then(data => setNetMember(data))
    }, [email])
    return {netMember, email}
}

export default useNetMember;