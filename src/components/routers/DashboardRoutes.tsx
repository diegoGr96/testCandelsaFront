import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Home } from "../Home";
import { NavBar } from "../NavBar";
import PostScreen from "../Post/PostScreen";
import { PublicPage } from "../PublicPage";
import PostEditScreen from '../Post/PostEditScreen';
import PostCreateScreen from '../Post/PostCreateScreen';
import MyPostsScreen from "../Post/MyPostsScreen";

//  type DashboardRoutesProps = {
//      path: string
//  };

const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <Switch>
                    {/* Private Routes */}
                    <PrivateRoutes path="/post/:postId/edit" exact component={PostEditScreen} />
                    <PrivateRoutes path="/post/create" exact component={PostCreateScreen} />
                    <PrivateRoutes path="/myposts" exact component={MyPostsScreen} />
                    

                    {/* Public Routes */}
                    <Route path="/home" exact component={Home} />
                    <Route path="/post/:postId" exact component={PostScreen} />
                    <Route path="/public-page" exact component={PublicPage} />

                    {/* Default */}
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;
