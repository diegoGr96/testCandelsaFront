import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({ ...rest }) => {
    if (!localStorage.token) return <Redirect to="/login" />;
    return <Route {...rest} />;
};

export { PrivateRoutes };
