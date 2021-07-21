import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../src/Components/Home';
import Artsy from '../src/Components/Events/Artsy';
import Danza from '../src/Components/Events/Danza';
import MentalHealth from '../src/Components/Events/MentalHealth';
import Rhythm from '../src/Components/Events/Rhythm';
import WarOfWords from '../src/Components/Events/WarOfWords';
import XFrontier from '../src/Components/Events/XFrontier';
import Esport from '../src/Components/Events/Esports';
import GitHub from '../src/Components/Events/Github';

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artsy"  component={Artsy} />
          <Route path="/danza"  component={Danza} />
          <Route path="/mental-health"  component={MentalHealth} />
          <Route path="/rhythm"  component={Rhythm} />
          <Route path="/warofwords"  component={WarOfWords} />
          <Route path="/xfrontier"  component={XFrontier} />
          <Route path="/github"  component={GitHub} />
          <Route path="/esport"  component={Esport} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;