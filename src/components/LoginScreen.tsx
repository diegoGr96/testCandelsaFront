import React from "react";
import { RouteComponentProps } from "react-router-dom";
import useAuth from '../Auth/useAuth';

export interface ILoginScreenProps extends RouteComponentProps<any> {};


const LoginScreen: React.FC<ILoginScreenProps> = ( {history} ) => {

        const auth = useAuth();
        const handleLogin = () => {
            if(!localStorage.token){
                auth?.signIn({ email: "diego@gmail.com", password: "diego" });
            }else{
                auth?.signOut();
            }
            history.replace("/");
        };
    return (
        <div className="container">
            <h1>{JSON.stringify(localStorage.token)}</h1>
            <button onClick={handleLogin} className="btn btn-primary">
                {!localStorage.token
                    ? 'Login'
                    : 'Logout'
                }
            </button>
        </div>
    );
};

export { LoginScreen };
