import { ILoginAttempsProps } from "../components/LoginForm";
import { createFetch } from "../helpers/createFetch";
import { tokenCredential } from "./useAuthProvider";

const Auth = {
    signIn(state: React.Dispatch<React.SetStateAction<ILoginAttempsProps>>,
            credentials: tokenCredential) {
        state({
            loading: true,
            invalidCredentials: false,
            resultAttempt: false
        });
        const result = createFetch('http://localhost/testcandelsaback/public/api/login', 'POST', false, credentials)
            .then(response => {
                switch (response.status) {
                    case 400:
                        state({
                            loading: false,
                            invalidCredentials: true,
                            resultAttempt: false
                        })
                        break;
                }
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                return response.json();
            })
            .then(data => {
                localStorage.token = data.token;
                state({
                    loading: false,
                    invalidCredentials: true,
                    resultAttempt: true
                })
            })
            .catch(error => {
                state({
                    loading: false,
                    invalidCredentials: true,
                    resultAttempt: false
                })
            });

        return result;
    },
    signOut() {
        localStorage.removeItem('token');
        window.location.href = '/';
    },
}

export default Auth;