import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";
import useAuth from "./useAuth";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
    const auth = useAuth();

    if (auth?.token === null) return <Redirect to="/login" />;
    return <Route {...rest} />;
};

export { PrivateRoute };
