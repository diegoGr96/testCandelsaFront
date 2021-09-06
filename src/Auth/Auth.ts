import { tokenCredential } from "./useAuthProvider";

const Auth = {
    signIn(credentials: tokenCredential, state: React.Dispatch<React.SetStateAction<string | null>>) {
        setTimeout( () => {
            state(credentials.email);
        }, 100);
    },
    signOut(state: React.Dispatch<React.SetStateAction<string | null>>) {
        setTimeout(() => {
            state(null);
        }, 100);
    },
}

export default Auth;