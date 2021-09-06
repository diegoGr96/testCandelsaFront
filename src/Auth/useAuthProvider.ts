import Auth from './Auth';

export type tokenCredential = {
    email: string,
    password: string
}

export interface IUseAuthProvider{
    signIn: (credentials:tokenCredential) => void,
    signOut: () => void
}

const useAuthProvider = ():IUseAuthProvider => {
    const signIn = ( credentials: tokenCredential ) => {
        Auth.signIn( credentials);
    }

    const signOut = () => {
        Auth.signOut( );
    }

    return {
        signIn,
        signOut
    }
};

export default useAuthProvider;