import React from "react";
import { RouteComponentProps } from "react-router-dom";
import useAuth from "../Auth/useAuth";

export interface ILogoutScreenProps extends RouteComponentProps<any> {}

const LogoutScreen: React.FC<ILogoutScreenProps> = () => {
    useAuth()?.signOut();


    return ( <></> );
};

export { LogoutScreen };
