import Auth from './Auth';

export type tokenCredential = {
    email: string,
    password: string
}

export interface IUseAuthProvider{
    signIn: (state: React.ComponentState, credentials:tokenCredential) => void,
    signOut: () => void
}

const useAuthProvider = ():IUseAuthProvider => {
    const signIn = (state: React.ComponentState, credentials: tokenCredential ) => {
        Auth.signIn(state, credentials);
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