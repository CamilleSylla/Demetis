import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <Route render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home} />
              <Route path="/services" component={Services} />
            </Switch>
        )} />
    </div>
  );
}

export default App;
