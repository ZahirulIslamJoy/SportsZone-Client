import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from '../config/firebase';


export const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const auth = getAuth(app);
    const gitProvider = new GithubAuthProvider();

    const signInWithGit=()=>{
        return signInWithPopup(auth,gitProvider)
    }

    const authShare={
        signInWithGit,
    }

    return (
        <div>
            <AuthContext.Provider value={authShare}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;