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
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer";
import FourOhFour from "./components/404/404";
import { ContactProvider } from "./components/Context/ContactContext";
import { ActiveCardProvider } from "./components/Context/ActiveCardContext";
import Mentions from "./components/Mention.js";
import Cookies from "./components/Cookies/Cookies";
import { CookieProvider } from "./components/Context/CookieContext";
import Investissement from "./components/investissement/Investissement";

function App() {
  const location = useLocation;
  return (
    <div className="App">
      <CookieProvider>
      <Cookies/>
      <MenuProvider>
        <NavProvider>
          <Nav />
          <TargetProvider>
            <ServicesProvider>
              <ContactProvider>
                <ActiveCardProvider>
                  <Route
                    render={({ location }) => (
                      <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                          <Route path="/" exact component={Home} />
                          <Route path="/services" component={Main} />
                          <Route path="/contact" component={Contact} />
                          <Route path="/investissement" component={Investissement} />
                          <Route path="/mentionslegales" component={Mentions} />
                          <Route path="*">
                            <FourOhFour />
                          </Route>
                        </Switch>
                      </AnimatePresence>
                    )}
                  />
                  <Footer />

                </ActiveCardProvider>
              </ContactProvider>
            </ServicesProvider>
          </TargetProvider>
        </NavProvider>
      </MenuProvider>
      </CookieProvider>
    </div>
  );
}

export default App;
