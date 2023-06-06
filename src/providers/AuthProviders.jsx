import React, { createContext } from 'react';

export const AuthContext=createContext();

const AuthProviders = ({children}) => {



    const authShare={

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