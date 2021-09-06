import { useState } from "react";
import Auth from './Auth';

export type tokenCredential = {
    email: string,
    password: string
}

export interface IUseAuthProvider{
    token: null|string,
    signIn: (credentials:tokenCredential) => void,
    signOut: () => void
}

const useAuthProvider = ():IUseAuthProvider => {
    const [token, setToken] = useState<string|null>(null);

    const signIn = ( credentials: tokenCredential ) => {
        Auth.signIn( credentials, setToken );
    }

    const signOut = () => {
        Auth.signOut( () => setToken(null) );
    }

    return {
        token,
        signIn,
        signOut
    }
};

export default useAuthProvider;