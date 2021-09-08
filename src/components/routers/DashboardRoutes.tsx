import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Home } from "../Home";
import { NavBar } from "../NavBar";
import PostScreen from "../Post/PostScreen";
import { PrivatePage } from "../PrivatePage";
import { PublicPage } from "../PublicPage";
import PostEditScreen from '../Post/PostEditScreen';

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
                    <Route path="/post/:postId" exact component={PostScreen} />
                    <Route path="/public-page" exact component={PublicPage} />

                    {/* Private Routes */}
                    <PrivateRoutes path="/post/:postId/edit" exact component={PostEditScreen} />
                    <PrivateRoutes path="/private-page" exact component={PrivatePage} />

                    {/* Default */}
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;
