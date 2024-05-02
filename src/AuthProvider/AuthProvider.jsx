import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
// import axios from "axios";


export const MyCreatedAuth = createContext()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loading , setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const googleLogin =() => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser =(email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login= (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }

    const profileUpdate =(name,photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            // const userEmail = user?.email;
            // const loggedUser = {email : userEmail};
            // if (user) {
            //     axios.post('https://assignment-11-server-eight-iota.vercel.app/jwt', loggedUser, {
            //         withCredentials:true })
            //         .then (res=> {
            //             console.log( 'token response', res.data);
            //         })
            // }
            // else{
            //     axios.post('https://assignment-11-server-eight-iota.vercel.app/logout', loggedUser, {
            //         withCredentials:true })
            //         .then (res=> {
            //             console.log( 'token response', res.data);
            //         })
            // }
            // fetch("https://assignment-11-server-eight-iota.vercel.app/jwt", {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify(currentUser),
            //     })
            //         .then((res) => res.json())
            //         .then((data) => {
            //             console.log(data);
            //         });

        })
        
        return () => unsubscribe()
    },[])


    const authInfo = {
        createUser,
        login,
        user,
        logOut,
        googleLogin,
        profileUpdate,
        loading
    }

    return (
        <MyCreatedAuth.Provider value={authInfo}>
            {children}
        </MyCreatedAuth.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
  };
export default AuthProvider;