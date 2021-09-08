import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Auth/AuthProvider";
import { LoginScreen } from "./components/LoginScreen";
import DashboardRoutes from './components/routers/DashboardRoutes';
import { LogoutScreen } from "./components/LogoutScreen";

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/logout" exact component={LogoutScreen} />
            <Route path="/" component={DashboardRoutes} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
