import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Artsy from './Components/Events/Artsy';
import Danza from './Components/Events/Danza';

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artsy" exact component={Artsy} />
          <Route path="/danza" exact component={Danza} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;