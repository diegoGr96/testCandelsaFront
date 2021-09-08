import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Home } from "../Home";
import { NavBar } from "../NavBar";
import PostScreen from "../Post/PostScreen";

//  type DashboardRoutesProps = {
//      path: string
//  };

const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <Switch>
                    {/* Public Routes */}
                    <Route path="/home" exact component={Home} />
                    <Route path="/post/:postId" component={PostScreen} />

                    {/* Private Routes */}
                    <Route path='/' component={PrivateRoutes} />

                    {/* Default */}
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;
