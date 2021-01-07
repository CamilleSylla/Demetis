import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import { TargetProvider } from "./components/Context/TargerContext";
import Main from "./components/Services/Main";
import Nav from "./components/Nav/Nav";
import { ServicesProvider } from "./components/Context/ServicesContext";

function App() {
  return (
    <div className="App">
      <Nav />
      <TargetProvider>
        <ServicesProvider>
          <Route
            render={({ location }) => (
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/services" component={Main} />
              </Switch>
            )}
          />
        </ServicesProvider>
      </TargetProvider>
    </div>
  );
}

export default App;
