import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Auth/AuthProvider";
import { LoginScreen } from "./components/LoginScreen";
import DashboardRoutes from './components/DashboardRoutes';
import { LogoutScreen } from "./components/LogoutScreen";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/logout" exact component={LogoutScreen} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
