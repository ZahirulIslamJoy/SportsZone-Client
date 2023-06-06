import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from '../config/firebase';


export const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);
    const gitProvider = new GithubAuthProvider();

    const signInWithGit=()=>{
        return signInWithPopup(auth,gitProvider)
    }

    const creatUserWithEp=(email,pass)=>{
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

    const authShare={
        signInWithGit,creatUserWithEp,updateProfile,user,handeleSignOut
    }

    //get the current looged in user
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (loggedUser) => {
               setUser(loggedUser)
               setLoading(false)
          });
          return ()=>{
           unSubscribe();
          }
      },[])

      console.log(user);

    return (
        <div>
            <AuthContext.Provider value={authShare}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;