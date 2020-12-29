import logo from './logo.svg';
import './App.css';
import Banner from './components/Home/Banner/Banner';
import Args from './components/Home/Args/Args';
import Services from './components/Home/Services/Services';
import Bio from './components/Home/Bio/Bio';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Args/>
      <Services/>
      <Bio/>
    </div>
  );
}

export default App;
