import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import { TargetProvider } from "./components/Context/TargerContext";
import Main from "./components/Services/Main";

function App() {
  return (
    <div className="App">
      <TargetProvider>
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home} />
              <Route path="/services" component={Main} />
            </Switch>
          )}
        />
      </TargetProvider>
    </div>
  );
}

export default App;
