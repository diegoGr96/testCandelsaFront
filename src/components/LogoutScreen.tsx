import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import useAuth from "../Auth/useAuth";

export interface ILogoutScreenProps extends RouteComponentProps<any> {}

const LogoutScreen: React.FC<ILogoutScreenProps> = ({ history }) => {
    const auth = useAuth();

    useEffect(() => {
        if (auth?.token !== null) {
        auth?.signOut();
        }
        history.replace("/");
    });


    return ( <></> );
};

export { LogoutScreen };
