import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from '../config/firebase';
import axios from 'axios';


export const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);
    const gitProvider = new GithubAuthProvider();

    const signInWithGit=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitProvider)
    }

    const creatUserWithEp=(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const handeleSignOut=()=>{
        return signOut(auth)
    }

    const updateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const handleLoginWithEp=(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const authShare={
        signInWithGit,creatUserWithEp,updateProfile,user,handeleSignOut,handleLoginWithEp,loading
    }

    //get the current looged in user
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            const email=loggedUser?.email;
            const sendingEmail={email}
            if(loggedUser){
            axios.post(`${import.meta.env.VITE_URL}/jwt`,sendingEmail)
                .then(res=>{
                   const token=res.data.token;
                   localStorage.setItem("access-token",token)
                   setLoading(false)
                })
            }
            else{
                localStorage.removeItem("access-token")
                setLoading(false)
            }
          });
          return ()=>{
           unSubscribe();
          }
      },[])

    return (
        <div>
            <AuthContext.Provider value={authShare}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;