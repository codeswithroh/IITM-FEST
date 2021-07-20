import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Artsy from './components/Events/Artsy';
import Danza from './components/Events/Danza';
import MentalHealth from './components/Events/MentalHealth';
import Rhythm from './components/Events/Rhythm';
import WarOfWords from './components/Events/WarOfWords';

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artsy" exact component={Artsy} />
          <Route path="/danza" exact component={Danza} />
          <Route path="/mental-health" exact component={MentalHealth} />
          <Route path="/rhythm" exact component={Rhythm} />
          <Route path="/warofwords" exact component={WarOfWords} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;