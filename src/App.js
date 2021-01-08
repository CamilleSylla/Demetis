import "./App.css";
import Home from "./components/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import { TargetProvider } from "./components/Context/TargerContext";
import Main from "./components/Services/Main";
import Nav from "./components/Nav/Nav";
import { ServicesProvider } from "./components/Context/ServicesContext";
import { AnimatePresence } from "framer-motion";
import { MenuProvider } from "./components/Context/MenuContext";
import { NavProvider } from "./components/Context/NavContext";

function App() {
  const location = useLocation;
  return (
    <div className="App">
      <MenuProvider>
        <NavProvider>
          <Nav />
          <TargetProvider>
            <ServicesProvider>
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                      <Route path="/" exact component={Home} />
                      <Route path="/services" component={Main} />
                    </Switch>
                  </AnimatePresence>
                )}
              />
            </ServicesProvider>
          </TargetProvider>
        </NavProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
