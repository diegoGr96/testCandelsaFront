/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import logo from '../assets/img/candelsa-logo.png';
import LoginForm from './LoginForm';

export interface ILoginScreenProps extends RouteComponentProps<any> { };

const LoginScreen: React.FC<ILoginScreenProps> = ({ history }) => {

    const handleBackClick = () => history.replace("/");

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-12 mt-2 text-center logo__container">
                    <img
                        src={logo}
                        className="img-fluid col-md-8"
                        alt="Candelsa Logo"
                    />
                </div>

                <LoginForm />

                <div className="col-md-12 mt-4 text-center">
                    <button
                        onClick={handleBackClick} 
                        className="btn btn-secondary col-md-3 ">
                        Back to Home
                    </button>
                </div>
            </div>

        </div>
    );
};

export { LoginScreen };
