import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { profileAction } from "../app/Reducers/profileSlice";
import firebaseAppInitialize from "../Pages/Login/Firebase/firebase.init";

firebaseAppInitialize()
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign in 
    const googleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user
            setUser(user)
            saveUser(user.displayName, user.email, 'PUT')
          }).catch((error) => {
              setError(error.message)
          })
          .finally(() => setIsLoading(false));
    }

    // Email Password Register 
    const signUpEmail = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
            const user = {displayName: name, email: email, photoURL: "https://i.ibb.co/HDFDtBj/images.png"};
            setUser(user)
            saveUser(name, email, 'POST')
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));

    }

    // Email Password Login 
    const signInEmail = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }
    // User State Mangement 
    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
        return () => unsubscribe;
    },[auth])

    // Log Out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
        })
        .finally(() => setIsLoading(false));
    }

    // Save User 
    const saveUser = (name, email, method) => {
        const data = {
            displayName: name,
            email,
            createdDate: new Date()
        }
        fetch('https://intense-inlet-54612.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    // User Role Check
    // useEffect(() =>{
    //     fetch(`https://intense-inlet-54612.herokuapp.com/users/role/${user.email}`)
    //     .then(res => res.json())
    //     .then(data => setRole(data.role))
    //     .finally(() => setIsLoading(false))
    //   }, [user.email])

    return {
        user,
        error,
        setIsLoading,
        isLoading,
        signInEmail,
        signUpEmail,
        logOut,
        googleSignIn
    }
}
 export default useFirebase;