import { tokenCredential } from "./useAuthProvider";

const Auth = {
    signIn(credentials: tokenCredential) {
        localStorage.token = credentials.email;
    },
    signOut() {
        localStorage.removeItem('token');
        window.location.href = '/';
    },
}

export default Auth;