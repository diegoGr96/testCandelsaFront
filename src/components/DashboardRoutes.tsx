import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "../Auth/PrivateRoute";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import PostScreen from "./Post/PostScreen";
import { PrivatePage } from "./PrivatePage";
import { PrivatePage2 } from "./PrivatePage2";
import { PublicPage } from "./PublicPage";

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
                    <Route path="/public-page" exact component={PublicPage} />
                    <Route path="/post/:postId" component={PostScreen} />

                    {/* Private Routes */}
                    <PrivateRoute path="/private-page" exact component={PrivatePage} />
                    <PrivateRoute path="/private-page2" exact component={PrivatePage2} />

                    {/* Default */}
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;
