import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../src/component/Home';
import EventPage from './Components/EventPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/events/photography" component={EventPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;