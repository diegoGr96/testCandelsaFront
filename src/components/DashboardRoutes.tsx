import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "../Auth/PrivateRoute";
import { Home } from "./Home";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";
import { PrivatePage } from "./PrivatePage";
import { PublicPage } from "./PublicPage";

//  type DashboardRoutesProps = {
//      path: string
//  };

const DashboardRoutes = ( ) =>  {
    return (
        <>
            <NavBar />
            <Switch>
                {/* Public Routes */}
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={LoginScreen} />
                <Route path="/public-page" exact component={PublicPage} />
                {/* Private Routes */}
                <PrivateRoute path="/private-page" exact component={PrivatePage} />

                {/* Default */}
                <Redirect to="/home" />
            </Switch>
        </>
    );
}

export default DashboardRoutes;
