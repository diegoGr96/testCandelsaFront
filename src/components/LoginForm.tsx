/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from '../Auth/useAuth';
import { useState, useEffect } from 'react';

interface LoginFormProps { };

export interface ILoginAttempsProps {
    loading: boolean,
    invalidCredentials: boolean
    resultAttempt: boolean
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const history = useHistory();

    const [loginCorrect, setLoginCorrect] = useState<ILoginAttempsProps>({
        loading: false,
        invalidCredentials: false,
        resultAttempt: false
    });

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const auth = useAuth();
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!localStorage.token) {
            if (inputEmail.trim().length > 0 && inputPassword.trim().length > 0) {
                const credentials = {
                    email: inputEmail.trim(),
                    password: inputPassword.trim()
                }
                auth?.signIn(setLoginCorrect, credentials);
            }
        }
    };

    useEffect(() => {
        if (loginCorrect.resultAttempt) history.replace("/");
    }, [loginCorrect]);


    return (
        <form onSubmit={handleSubmit} className="form__login col-md-5 mt-5">
            <div className="form-group">
                <label >
                    Email address:
                </label>
                <input
                    onChange={(e) => {
                        setInputEmail(e.target.value);
                    }}
                    required
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label >
                    Password
                </label>
                <input
                    onChange={(e) => {
                        setInputPassword(e.target.value);
                    }}
                    required
                    type="password"
                    className="form-control"
                    placeholder="Password" />
            </div>
            <button className="btn btn-primary col-md-4">
                Login
            </button>

            {loginCorrect.loading &&
                <div className="mt-5 alert alert-info" role="alert">
                    Loading...
                </div>
            }
            {loginCorrect.invalidCredentials &&
                <div
                    className="mt-5 alert alert-danger animate__animated animate__shakeX"
                    role="alert">
                    Invalid credentials.
                </div>
            }
        </form>
    );
}

export default LoginForm;