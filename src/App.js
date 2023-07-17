import './App.css';
import GetStarted from './component/GetStarted';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pricing from './component/Pricing';
import Product from './component/Product';
import About from './component/About';
import Career from './component/Career';
import Community from './component/Community';

function App() {
  return (
    <Router>
    <div className="App">
      <Home/>
    </div>
    <Switch>

      <Route exact path ='/pricing'>
        <Pricing/>
      </Route>
    
      <Route path ='/products'>
        <Product/>
      </Route>
    
      <Route path ='/about'>
        <About/>
      </Route>
    
      <Route path ='/career'>
        <Career/>
      </Route>
    
      <Route path ='/community'>
        <Community/>
      </Route>
    
      <Route path ='/get'>
        <GetStarted/>
      </Route>

    </Switch>
    </Router>

  );
}

export default App;
